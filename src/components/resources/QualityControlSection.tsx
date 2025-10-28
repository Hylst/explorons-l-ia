
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { RefreshCw, Shield, AlertTriangle, TrendingUp, ChevronDown, ExternalLink } from 'lucide-react';
import { LinkAuditResult } from '@/services/linkAuditService';
import { Resource } from './resourcesData';

interface QualityControlSectionProps {
  auditResults: Map<string, LinkAuditResult>;
  qualityScores: Map<string, number>;
  isAuditing: boolean;
  onAuditAll: () => void;
  resources: Resource[];
}

export const QualityControlSection: React.FC<QualityControlSectionProps> = ({
  auditResults,
  qualityScores,
  isAuditing,
  onAuditAll,
  resources
}) => {
  const [showBrokenLinks, setShowBrokenLinks] = useState(false);
  
  const auditedCount = auditResults.size;
  const totalResources = resources.length;
  const progressPercentage = totalResources > 0 ? (auditedCount / totalResources) * 100 : 0;

  // Statistiques des résultats d'audit
  const stats = {
    success: 0,
    error: 0,
    redirect: 0,
    timeout: 0
  };

  auditResults.forEach(result => {
    stats[result.status]++;
  });

  // Score moyen de qualité
  const averageQuality = qualityScores.size > 0 
    ? Array.from(qualityScores.values()).reduce((sum, score) => sum + score, 0) / qualityScores.size
    : 0;

  // Liste des liens cassés avec les noms des ressources
  const brokenLinks = Array.from(auditResults.entries())
    .filter(([_, result]) => result.status === 'error')
    .map(([url, result]) => {
      const resource = resources.find(r => r.link === url);
      return {
        url,
        result,
        resourceName: resource?.title || 'Ressource inconnue'
      };
    });

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Contrôle qualité des ressources
        </CardTitle>
        <CardDescription>
          Vérification automatique des liens et évaluation de la qualité des ressources
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{stats.success}</div>
            <div className="text-sm text-muted-foreground">Liens valides</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">{stats.error}</div>
            <div className="text-sm text-muted-foreground">Liens cassés</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600">{stats.redirect}</div>
            <div className="text-sm text-muted-foreground">Redirections</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">{stats.timeout}</div>
            <div className="text-sm text-muted-foreground">Timeouts</div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Progression de l'audit</span>
              <span className="text-sm text-muted-foreground">
                {auditedCount}/{totalResources} ressources
              </span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium">Score moyen de qualité</span>
              <Badge variant={averageQuality >= 80 ? 'default' : averageQuality >= 60 ? 'secondary' : 'destructive'}>
                {averageQuality.toFixed(0)}/100
              </Badge>
            </div>
            
            <Button 
              onClick={onAuditAll} 
              disabled={isAuditing}
              size="sm"
              className="flex items-center gap-2"
            >
              <RefreshCw className={`h-4 w-4 ${isAuditing ? 'animate-spin' : ''}`} />
              {isAuditing ? 'Vérification...' : 'Vérifier tous les liens'}
            </Button>
          </div>
        </div>

        {stats.error > 0 && (
          <div className="mt-4">
            <Collapsible open={showBrokenLinks} onOpenChange={setShowBrokenLinks}>
              <CollapsibleTrigger asChild>
                <Button variant="outline" size="sm" className="w-full justify-between">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-600" />
                    <span>Voir les {stats.error} lien{stats.error > 1 ? 's' : ''} cassé{stats.error > 1 ? 's' : ''}</span>
                  </div>
                  <ChevronDown className={`h-4 w-4 transition-transform ${showBrokenLinks ? 'rotate-180' : ''}`} />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-3">
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {brokenLinks.map((item, index) => (
                    <div key={index} className="p-3 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-red-800 truncate">{item.resourceName}</div>
                          <div className="text-sm text-red-600 truncate">{item.url}</div>
                          {item.result.errorMessage && (
                            <div className="text-xs text-red-500 mt-1">{item.result.errorMessage}</div>
                          )}
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => window.open(item.url, '_blank')}
                          className="ml-2 text-red-600 hover:text-red-800"
                        >
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
