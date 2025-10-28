import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { 
  AlertTriangle, 
  CheckCircle, 
  FileText, 
  Image, 
  Music, 
  Download,
  Eye,
  Search
} from 'lucide-react';
import { DetectionResult } from '@/services/aiDetectionService';

interface AnalysisResultProps {
  result: DetectionResult;
  onViewDetails: (result: DetectionResult) => void;
  onViewDetailedAnalysis?: (result: DetectionResult) => void;
  onExport: (result: DetectionResult) => void;
}

export const AnalysisResult: React.FC<AnalysisResultProps> = ({
  result,
  onViewDetails,
  onViewDetailedAnalysis,
  onExport
}) => {
  const getFileTypeIcon = (type: string) => {
    switch (type) {
      case 'text': return <FileText className="h-5 w-5" />;
      case 'image': return <Image className="h-5 w-5" />;
      case 'audio': return <Music className="h-5 w-5" />;
      default: return <FileText className="h-5 w-5" />;
    }
  };

  const getConfidenceColor = (confidence: number) => {
    if (confidence >= 0.8) return 'text-red-600';
    if (confidence >= 0.6) return 'text-yellow-600';
    return 'text-green-600';
  };

  const getConfidenceLabel = (confidence: number) => {
    if (confidence >= 0.8) return 'Très probable';
    if (confidence >= 0.6) return 'Probable';
    if (confidence >= 0.4) return 'Possible';
    return 'Peu probable';
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              {getFileTypeIcon(result.fileType)}
            </div>
            <div>
              <CardTitle className="text-base font-medium">
                {result.fileName}
              </CardTitle>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="outline" className="text-xs">
                  {result.fileType.toUpperCase()}
                </Badge>
                {result.metadata?.fileSize && (
                  <span className="text-xs text-muted-foreground">
                    {(result.metadata.fileSize / 1024).toFixed(1)} KB
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {result.isAIGenerated ? (
              <AlertTriangle className="h-5 w-5 text-red-500" />
            ) : (
              <CheckCircle className="h-5 w-5 text-green-500" />
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">
              Probabilité de génération IA
            </span>
            <span className={`text-sm font-semibold ${getConfidenceColor(result.confidence)}`}>
              {(result.confidence * 100).toFixed(1)}% - {getConfidenceLabel(result.confidence)}
            </span>
          </div>
          <Progress value={result.confidence * 100} className="h-2" />
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">Méthode d'analyse</h4>
          <p className="text-sm text-muted-foreground">{result.analysis.method}</p>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">Indicateurs détectés</h4>
          <div className="flex flex-wrap gap-1">
            {result.analysis.indicators.slice(0, 3).map((indicator, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {indicator}
              </Badge>
            ))}
            {result.analysis.indicators.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{result.analysis.indicators.length - 3} autres
              </Badge>
            )}
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => onViewDetails(result)}
            className="flex-1"
          >
            <Eye className="h-4 w-4 mr-1" />
            Détails
          </Button>
          {onViewDetailedAnalysis && (
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => onViewDetailedAnalysis(result)}
              className="flex-1"
            >
              <Search className="h-4 w-4 mr-1" />
              Analyse
            </Button>
          )}
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => onExport(result)}
          >
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
