
import React from 'react';
import { Card } from '@/components/ui/card';
import { 
  Cpu, 
  Database, 
  Settings,
  Zap,
  AlertTriangle,
  DollarSign,
  Clock
} from 'lucide-react';
import LessonSection from '@/components/courses/LessonSection';
import StatsGrid from '@/components/courses/StatsGrid';
import CodeExample from '@/components/courses/CodeExample';

const TechnicalArchitectureSection = () => {
  const technicalStats = [
    { value: "128K", description: "tokens de contexte max (GPT-4)" },
    { value: "70%", description: "réduction coûts avec optimisation" },
    { value: "5x", description: "amélioration précision moyenne" },
    { value: "12", description: "étapes max recommandées" }
  ];

  return (
    <LessonSection
      title="Architecture technique et optimisations"
      icon={<Cpu className="h-6 w-6" />}
      delay={2}
    >
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 border border-indigo-200 dark:border-indigo-800 p-6 rounded-lg">
          <h4 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-3 flex items-center gap-2">
            <Database className="h-5 w-5" />
            Comprendre l'architecture des LLM
          </h4>
          <p className="text-indigo-700 dark:text-indigo-300 mb-4">
            Chaque modèle a une fenêtre de contexte limitée. Comprendre ces limites est crucial pour optimiser vos chaînes.
          </p>
        </div>

        <StatsGrid stats={technicalStats} columns={4} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-4 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 border-red-200 dark:border-red-800">
            <h5 className="font-medium text-red-800 dark:text-red-200 mb-3 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              Limites techniques
            </h5>
            <ul className="text-sm text-red-700 dark:text-red-300 space-y-2">
              <li>• <strong>Fenêtre de contexte :</strong> Oubli après dépassement</li>
              <li>• <strong>Dérive contextuelle :</strong> Perte du fil après 8-10 étapes</li>
              <li>• <strong>Hallucinations :</strong> Propagation d'erreurs en cascade</li>
              <li>• <strong>Latence :</strong> Temps de réponse croissant</li>
            </ul>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800">
            <h5 className="font-medium text-green-800 dark:text-green-200 mb-3 flex items-center gap-2">
              <Zap className="h-4 w-4" />
              Optimisations
            </h5>
            <ul className="text-sm text-green-700 dark:text-green-300 space-y-2">
              <li>• <strong>Résumés automatiques :</strong> Compression intelligente</li>
              <li>• <strong>Points de sauvegarde :</strong> États intermédiaires</li>
              <li>• <strong>Formatage strict :</strong> Contrôle des tokens</li>
              <li>• <strong>Réancrage :</strong> Rappel de l'objectif</li>
            </ul>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 border-yellow-200 dark:border-yellow-800">
            <h5 className="font-medium text-yellow-800 dark:text-yellow-200 mb-3 flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              Gestion des coûts
            </h5>
            <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-2">
              <li>• <strong>Prompts courts :</strong> Moins de tokens input</li>
              <li>• <strong>Réponses ciblées :</strong> Limiter l'output</li>
              <li>• <strong>Modèles adaptés :</strong> Choisir selon la complexité</li>
              <li>• <strong>Cache intelligent :</strong> Réutiliser les réponses</li>
            </ul>
          </Card>
        </div>

        <CodeExample
          title="Architecture API : Implémentation complète"
          language="TypeScript"
          code={`// Classe pour gérer les chaînes de prompts avec optimisations
interface ChainStep {
  prompt: string;
  response?: string;
  validated: boolean;
  tokens: number;
  timestamp: Date;
}

interface ChainMetrics {
  totalTokens: number;
  averageResponseTime: number;
  successRate: number;
  costEstimate: number;
}

class AdvancedPromptChain {
  private steps: ChainStep[] = [];
  private maxContextSize: number;
  private compressionThreshold: number;
  private metrics: ChainMetrics;
  
  constructor(modelConfig: { maxTokens: number; costPerToken: number }) {
    this.maxContextSize = modelConfig.maxTokens;
    this.compressionThreshold = modelConfig.maxTokens * 0.8;
    this.metrics = {
      totalTokens: 0,
      averageResponseTime: 0,
      successRate: 0,
      costEstimate: 0
    };
  }
  
  async executeStep(prompt: string, options?: {
    maxTokens?: number;
    temperature?: number;
    requireValidation?: boolean;
  }): Promise<string> {
    const startTime = Date.now();
    
    // 1. Vérification de la taille du contexte
    if (this.calculateContextSize() > this.compressionThreshold) {
      await this.smartCompress();
    }
    
    // 2. Construction du contexte optimisé
    const contextualPrompt = this.buildOptimizedContext(prompt);
    
    // 3. Appel API avec gestion d'erreurs
    try {
      const response = await this.callLLMWithRetry(contextualPrompt, options);
      
      // 4. Enregistrement et validation
      const step: ChainStep = {
        prompt,
        response,
        validated: false,
        tokens: this.countTokens(prompt + response),
        timestamp: new Date()
      };
      
      if (options?.requireValidation) {
        step.validated = await this.validateResponse(response, prompt);
      }
      
      this.steps.push(step);
      this.updateMetrics(startTime, step);
      
      return response;
      
    } catch (error) {
      console.error('Chain execution failed:', error);
      throw new Error(\`Étape \${this.steps.length + 1} échouée: \${error.message}\`);
    }
  }
  
  private async smartCompress(): Promise<void> {
    // Compression intelligente : garde les étapes cruciales
    const criticalSteps = this.steps.filter(step => step.validated);
    const summary = await this.generateSummary(this.steps);
    
    this.steps = [
      {
        prompt: "Résumé du contexte précédent",
        response: summary,
        validated: true,
        tokens: this.countTokens(summary),
        timestamp: new Date()
      },
      ...criticalSteps.slice(-3) // Garde les 3 dernières étapes validées
    ];
  }
  
  private buildOptimizedContext(newPrompt: string): string {
    const relevantHistory = this.steps
      .filter(step => step.validated || step.tokens < 200) // Priorise les petites réponses
      .map(step => \`Human: \${step.prompt}\\nAssistant: \${step.response}\`)
      .join('\\n\\n');
      
    return \`\${relevantHistory}\\n\\nHuman: \${newPrompt}\`;
  }
  
  async validateResponse(response: string, originalPrompt: string): Promise<boolean> {
    const validationPrompt = \`
      Évalue cette réponse par rapport à la question posée.
      Question: "\${originalPrompt}"
      Réponse: "\${response}"
      
      Réponds par "VALIDE" si la réponse est pertinente et correcte, "INVALIDE" sinon.
      Explique en une phrase si invalide.
    \`;
    
    const validation = await this.callLLMWithRetry(validationPrompt, { maxTokens: 50 });
    return validation.toLowerCase().includes('valide');
  }
  
  getPerformanceReport(): ChainMetrics & { recommendations: string[] } {
    const recommendations: string[] = [];
    
    if (this.metrics.totalTokens > 50000) {
      recommendations.push("Considérez une compression plus agressive du contexte");
    }
    
    if (this.metrics.successRate < 0.8) {
      recommendations.push("Améliorez la validation des étapes intermédiaires");
    }
    
    if (this.metrics.averageResponseTime > 5000) {
      recommendations.push("Réduisez la complexité des prompts ou utilisez un modèle plus rapide");
    }
    
    return { ...this.metrics, recommendations };
  }
}`}
          explanation="Implémentation complète avec gestion avancée du contexte, compression intelligente, validation automatique et métriques de performance."
        />

        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 border border-purple-200 dark:border-purple-800 p-6 rounded-lg">
          <h4 className="font-medium text-purple-800 dark:text-purple-200 mb-4 flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Bonnes pratiques techniques
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h5 className="font-medium text-purple-800 dark:text-purple-200 mb-2">Avant l'exécution</h5>
              <ul className="text-purple-700 dark:text-purple-300 space-y-1">
                <li>• Planifiez la séquence d'étapes</li>
                <li>• Définissez des critères de validation</li>
                <li>• Estimez les coûts en tokens</li>
                <li>• Préparez des points de sauvegarde</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-purple-800 dark:text-purple-200 mb-2">Pendant l'exécution</h5>
              <ul className="text-purple-700 dark:text-purple-300 space-y-1">
                <li>• Surveillez la taille du contexte</li>
                <li>• Validez chaque étape critique</li>
                <li>• Compressez si nécessaire</li>
                <li>• Mesurez les performances</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </LessonSection>
  );
};

export default TechnicalArchitectureSection;
