
import { useState, useEffect } from 'react';
import { linkAuditService, LinkAuditResult, ResourceQuality } from '@/services/linkAuditService';
import { userReportService } from '@/services/userReportService';
import { Resource } from '@/components/resources/resourcesData';

export const useResourceAudit = (resources: Resource[]) => {
  const [auditResults, setAuditResults] = useState<Map<string, LinkAuditResult>>(new Map());
  const [qualityScores, setQualityScores] = useState<Map<string, number>>(new Map());
  const [isAuditing, setIsAuditing] = useState(false);

  // Fonction pour auditer toutes les ressources
  const auditAllResources = async () => {
    setIsAuditing(true);
    
    try {
      const urls = resources.map(resource => resource.link);
      const results = await linkAuditService.auditLinks(urls, 3, 1500); // 3 par lot, 1.5s de délai
      
      const resultsMap = new Map();
      const scoresMap = new Map();
      
      results.forEach((result, index) => {
        const resource = resources[index];
        resultsMap.set(resource.link, result);
        
        // Calcul du score de qualité
        const userReports = userReportService.getReportsForResource(resource.link);
        const score = linkAuditService.calculateQualityScore([result], userReports);
        scoresMap.set(resource.link, score);
      });
      
      setAuditResults(resultsMap);
      setQualityScores(scoresMap);
      
    } catch (error) {
      console.error('Erreur lors de l\'audit des ressources:', error);
    } finally {
      setIsAuditing(false);
    }
  };

  // Fonction pour auditer une ressource spécifique
  const auditResource = async (resource: Resource) => {
    try {
      const result = await linkAuditService.auditLink(resource.link);
      setAuditResults(prev => new Map(prev).set(resource.link, result));
      
      const userReports = userReportService.getReportsForResource(resource.link);
      const score = linkAuditService.calculateQualityScore([result], userReports);
      setQualityScores(prev => new Map(prev).set(resource.link, score));
      
      return result;
    } catch (error) {
      console.error('Erreur lors de l\'audit de la ressource:', error);
      return null;
    }
  };

  // Vérification des résultats mis en cache au montage
  useEffect(() => {
    const loadCachedResults = () => {
      const resultsMap = new Map();
      const scoresMap = new Map();
      
      resources.forEach(resource => {
        const cached = linkAuditService.getCachedResult(resource.link);
        if (cached) {
          resultsMap.set(resource.link, cached);
          
          const userReports = userReportService.getReportsForResource(resource.link);
          const score = linkAuditService.calculateQualityScore([cached], userReports);
          scoresMap.set(resource.link, score);
        }
      });
      
      if (resultsMap.size > 0) {
        setAuditResults(resultsMap);
        setQualityScores(scoresMap);
      }
    };
    
    loadCachedResults();
  }, [resources]);

  return {
    auditResults,
    qualityScores,
    isAuditing,
    auditAllResources,
    auditResource
  };
};
