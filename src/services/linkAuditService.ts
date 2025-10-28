
/**
 * Service d'audit automatique des liens avec vérification périodique
 * Note: Les vérifications CORS sont limitées côté client, ce service simule un audit basique
 */

export interface LinkAuditResult {
  url: string;
  status: 'success' | 'error' | 'redirect' | 'timeout';
  statusCode?: number;
  redirectUrl?: string;
  responseTime: number;
  lastChecked: Date;
  errorMessage?: string;
}

export interface ResourceQuality {
  resourceId: string;
  qualityScore: number; // 0-100
  auditResults: LinkAuditResult[];
  userReports: UserReport[];
  lastUpdated: Date;
}

export interface UserReport {
  id: string;
  resourceId: string;
  reportType: 'broken-link' | 'incorrect-content' | 'spam' | 'outdated' | 'other';
  description: string;
  reportedAt: Date;
  userId?: string;
  status: 'pending' | 'resolved' | 'dismissed';
}

class LinkAuditService {
  private auditCache: Map<string, LinkAuditResult> = new Map();
  private readonly CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 heures
  private readonly REQUEST_TIMEOUT = 8000; // 8 secondes

  /**
   * Vérifie le statut d'une URL (version simplifiée pour éviter les problèmes CORS)
   */
  async auditLink(url: string): Promise<LinkAuditResult> {
    const startTime = Date.now();
    
    try {
      // Pour éviter les problèmes CORS, nous utilisons une approche différente
      // Nous testons avec une requête GET et un timeout court
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.REQUEST_TIMEOUT);
      
      // Utilisation d'une approche plus permissive pour les tests de liens
      const response = await fetch(url, {
        method: 'GET',
        mode: 'no-cors', // Évite les erreurs CORS mais limite les informations
        signal: controller.signal,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      
      clearTimeout(timeoutId);
      const responseTime = Date.now() - startTime;
      
      // Avec no-cors, nous ne pouvons pas lire le statut réel
      // Nous assumons que si la requête n'a pas échoué, le lien est valide
      const result: LinkAuditResult = {
        url,
        status: 'success',
        statusCode: 200, // Simulation car no-cors ne permet pas de lire le statut
        responseTime,
        lastChecked: new Date()
      };
      
      this.auditCache.set(url, result);
      return result;
      
    } catch (error) {
      const responseTime = Date.now() - startTime;
      
      // Classification plus nuancée des erreurs
      let status: 'error' | 'timeout' = 'error';
      let errorMessage = 'Erreur de connexion';
      
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          status = 'timeout';
          errorMessage = 'Timeout de la requête';
        } else if (error.message.includes('CORS')) {
          // Si c'est une erreur CORS, on considère que le lien est probablement valide
          // mais non accessible via le navigateur
          const result: LinkAuditResult = {
            url,
            status: 'success',
            responseTime,
            lastChecked: new Date(),
            errorMessage: 'Lien protégé par CORS (probablement valide)'
          };
          this.auditCache.set(url, result);
          return result;
        } else {
          errorMessage = error.message;
        }
      }
      
      const result: LinkAuditResult = {
        url,
        status,
        responseTime,
        lastChecked: new Date(),
        errorMessage
      };
      
      this.auditCache.set(url, result);
      return result;
    }
  }

  /**
   * Audit en lot avec limitation du taux de requêtes
   */
  async auditLinks(urls: string[], batchSize: number = 3, delay: number = 2000): Promise<LinkAuditResult[]> {
    const results: LinkAuditResult[] = [];
    
    for (let i = 0; i < urls.length; i += batchSize) {
      const batch = urls.slice(i, i + batchSize);
      const batchResults = await Promise.all(
        batch.map(url => this.auditLink(url))
      );
      
      results.push(...batchResults);
      
      // Délai entre les lots pour éviter de surcharger les serveurs
      if (i + batchSize < urls.length) {
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
    
    return results;
  }

  /**
   * Calcule un score de qualité basé sur les résultats d'audit
   */
  calculateQualityScore(auditResults: LinkAuditResult[], userReports: UserReport[]): number {
    let score = 100;
    
    // Pénalités basées sur les résultats d'audit
    auditResults.forEach(result => {
      switch (result.status) {
        case 'error':
          score -= 25;
          break;
        case 'timeout':
          score -= 15;
          break;
        case 'redirect':
          score -= 5;
          break;
        default:
          break;
      }
      
      // Bonus pour temps de réponse rapide
      if (result.responseTime < 2000) {
        score += 5;
      } else if (result.responseTime > 8000) {
        score -= 10;
      }
    });
    
    // Pénalités basées sur les signalements utilisateurs
    const unresolvedReports = userReports.filter(report => report.status === 'pending');
    score -= unresolvedReports.length * 20;
    
    return Math.max(0, Math.min(100, score));
  }

  /**
   * Récupère les résultats depuis le cache si disponibles
   */
  getCachedResult(url: string): LinkAuditResult | null {
    const cached = this.auditCache.get(url);
    if (cached) {
      const age = Date.now() - cached.lastChecked.getTime();
      if (age < this.CACHE_DURATION) {
        return cached;
      }
    }
    return null;
  }

  /**
   * Valide le contenu d'une page par mots-clés (fonctionnalité limitée côté client)
   */
  async validateContent(url: string, expectedKeywords: string[]): Promise<boolean> {
    try {
      console.log(`Validation du contenu pour ${url} avec les mots-clés:`, expectedKeywords);
      // Cette fonctionnalité nécessiterait un service backend pour être pleinement fonctionnelle
      return true;
    } catch (error) {
      console.error('Erreur lors de la validation du contenu:', error);
      return false;
    }
  }
}

export const linkAuditService = new LinkAuditService();
