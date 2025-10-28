
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  FileText, 
  Image, 
  Music, 
  Clock, 
  Zap,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';
import { DetectionResult } from '@/services/aiDetectionService';

interface ResultDetailsProps {
  result: DetectionResult | null;
  open: boolean;
  onClose: () => void;
}

export const ResultDetails: React.FC<ResultDetailsProps> = ({
  result,
  open,
  onClose
}) => {
  if (!result) return null;

  const getFileTypeIcon = (type: string) => {
    switch (type) {
      case 'text': return <FileText className="h-6 w-6" />;
      case 'image': return <Image className="h-6 w-6" />;
      case 'audio': return <Music className="h-6 w-6" />;
      default: return <FileText className="h-6 w-6" />;
    }
  };

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString('fr-FR');
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              {getFileTypeIcon(result.fileType)}
            </div>
            Analyse détaillée - {result.fileName}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Résultat principal */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {result.isAIGenerated ? (
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                ) : (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                )}
                {result.isAIGenerated ? 'Contenu probablement généré par IA' : 'Contenu probablement authentique'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Score de confiance</span>
                    <span className="font-bold text-lg">
                      {(result.confidence * 100).toFixed(1)}%
                    </span>
                  </div>
                  <Progress value={result.confidence * 100} className="h-3" />
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Type de fichier:</span>
                    <Badge className="ml-2">{result.fileType.toUpperCase()}</Badge>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Taille:</span>
                    <span className="ml-2 font-medium">
                      {result.metadata?.fileSize ? 
                        `${(result.metadata.fileSize / 1024).toFixed(1)} KB` : 
                        'N/A'
                      }
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Métadonnées spécifiques */}
          {result.metadata && (
            <Card>
              <CardHeader>
                <CardTitle>Métadonnées du fichier</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {result.metadata.dimensions && (
                    <div>
                      <span className="text-muted-foreground">Dimensions:</span>
                      <span className="ml-2 font-medium">
                        {result.metadata.dimensions.width} × {result.metadata.dimensions.height}
                      </span>
                    </div>
                  )}
                  {result.metadata.duration && (
                    <div>
                      <span className="text-muted-foreground">Durée:</span>
                      <span className="ml-2 font-medium">
                        {Math.round(result.metadata.duration)}s
                      </span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Méthode d'analyse */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Méthode d'analyse
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <span className="font-medium">{result.analysis.method}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {result.analysis.details}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Indicateurs détaillés */}
          <Card>
            <CardHeader>
              <CardTitle>Indicateurs détectés</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {result.analysis.indicators.map((indicator, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 rounded-lg bg-muted/50">
                    <AlertTriangle className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                    <span className="text-sm">{indicator}</span>
                  </div>
                ))}
                {result.analysis.indicators.length === 0 && (
                  <p className="text-sm text-muted-foreground">
                    Aucun indicateur de génération IA détecté.
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Informations temporelles */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Informations d'analyse
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Analysé le:</span>
                  <span className="font-medium">{formatTimestamp(result.analysis.timestamp)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};
