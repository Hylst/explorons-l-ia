
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { RefreshCw, Shield, AlertTriangle, TrendingUp } from 'lucide-react';
import { LinkAuditResult } from '@/services/linkAuditService';

interface AuditControlPanelProps {
  auditResults: Map<string, LinkAuditResult>;
  qualityScores: Map<string, number>;
  isAuditing: boolean;
  onAuditAll: () => void;
  totalResources: number;
}

export const AuditControlPanel: React.FC<AuditControlPanelProps> = ({
  auditResults,
  qualityScores,
  isAuditing,
  onAuditAll,
  totalResources
}) => {
  const auditedCount = auditResults.size;
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

  return (
    <Card className="mb-6">
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
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center gap-2 text-red-700">
              <AlertTriangle className="h-4 w-4" />
              <span className="text-sm font-medium">
                {stats.error} ressource{stats.error > 1 ? 's' : ''} nécessite{stats.error > 1 ? 'nt' : ''} une attention
              </span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
