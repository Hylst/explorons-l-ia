
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { DetectionResult } from '@/services/aiDetectionService';
import { 
  TrendingUp, 
  Clock, 
  Database, 
  Zap,
  AlertTriangle,
  CheckCircle,
  Info
} from 'lucide-react';

interface DetailedAnalysisViewProps {
  result: DetectionResult;
}

export const DetailedAnalysisView: React.FC<DetailedAnalysisViewProps> = ({ result }) => {
  const confidencePercentage = Math.round(result.confidence * 100);
  const riskLevel = result.confidence > 0.8 ? 'high' : result.confidence > 0.5 ? 'medium' : 'low';
  const riskColors = {
    high: 'text-red-600',
    medium: 'text-yellow-600', 
    low: 'text-green-600'
  };

  return (
    <div className="space-y-6">
      {/* Résumé principal */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Analyse Détaillée
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Score de confiance IA</span>
            <span className={`font-bold text-lg ${riskColors[riskLevel]}`}>
              {confidencePercentage}%
            </span>
          </div>
          <Progress value={confidencePercentage} className="h-3" />
          
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">
                Traité en {result.analysis.processingTime}ms
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Database className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">
                {(result.metadata?.fileSize || 0) > 1024 
                  ? `${Math.round((result.metadata?.fileSize || 0) / 1024)} KB`
                  : `${result.metadata?.fileSize || 0} bytes`
                }
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Indicateurs détectés */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Indicateurs Détectés ({result.analysis.indicators.length})
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {result.analysis.indicators.map((indicator, index) => {
            const rawIndicator = result.rawIndicators?.[index];
            const weight = rawIndicator ? (rawIndicator as any).weight : 0;
            const severity = weight > 0.5 ? 'high' : weight > 0.3 ? 'medium' : 'low';
            const Icon = severity === 'high' ? AlertTriangle : severity === 'medium' ? Info : CheckCircle;
            
            return (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                <Icon className={`h-4 w-4 mt-0.5 ${
                  severity === 'high' ? 'text-red-500' : 
                  severity === 'medium' ? 'text-yellow-500' : 'text-green-500'
                }`} />
                <div className="flex-1">
                  <p className="text-sm font-medium">{indicator}</p>
                  {rawIndicator && (
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        Type: {(rawIndicator as any).type}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Poids: {Math.round(weight * 100)}%
                      </Badge>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          
          {result.analysis.indicators.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <CheckCircle className="h-8 w-8 mx-auto mb-2 text-green-500" />
              <p>Aucun indicateur d'IA détecté</p>
              <p className="text-sm">Le contenu semble être d'origine humaine</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Métadonnées techniques */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Informations Techniques
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">Méthode d'analyse:</span>
              <p className="text-muted-foreground mt-1">{result.analysis.method}</p>
            </div>
            <div>
              <span className="font-medium">Preset utilisé:</span>
              <p className="text-muted-foreground mt-1">
                {result.analysis.preset || 'Analyse standard'}
              </p>
            </div>
            <div>
              <span className="font-medium">Type de fichier:</span>
              <p className="text-muted-foreground mt-1 capitalize">{result.fileType}</p>
            </div>
            <div>
              <span className="font-medium">Timestamp:</span>
              <p className="text-muted-foreground mt-1">
                {new Date(result.analysis.timestamp).toLocaleString()}
              </p>
            </div>
            {result.metadata?.dimensions && (
              <div>
                <span className="font-medium">Dimensions:</span>
                <p className="text-muted-foreground mt-1">
                  {result.metadata.dimensions.width} × {result.metadata.dimensions.height}
                </p>
              </div>
            )}
            {result.metadata?.duration && (
              <div>
                <span className="font-medium">Durée:</span>
                <p className="text-muted-foreground mt-1">
                  {Math.round(result.metadata.duration)}s
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
