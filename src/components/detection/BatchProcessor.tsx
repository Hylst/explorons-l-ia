
import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useDropzone } from 'react-dropzone';
import { DetectionResult, aiDetectionService } from '@/services/aiDetectionService';
import { useToast } from '@/hooks/use-toast';
import { 
  Upload, 
  Zap, 
  FileText, 
  Image, 
  Music, 
  X,
  Play,
  Pause,
  Download
} from 'lucide-react';

interface BatchProcessorProps {
  onAnalysisComplete: (result: DetectionResult) => void;
  selectedPreset?: string;
}

export const BatchProcessor: React.FC<BatchProcessorProps> = ({
  onAnalysisComplete,
  selectedPreset
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentFileIndex, setCurrentFileIndex] = useState(0);
  const [results, setResults] = useState<DetectionResult[]>([]);
  const { toast } = useToast();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(prev => [...prev, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/*': ['.txt', '.doc', '.docx'],
      'image/*': ['.jpg', '.jpeg', '.png', '.gif', '.webp'],
      'audio/*': ['.mp3', '.wav', '.ogg', '.m4a']
    },
    multiple: true
  });

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const getFileIcon = (type: string) => {
    if (type.startsWith('text')) return <FileText className="h-4 w-4" />;
    if (type.startsWith('image')) return <Image className="h-4 w-4" />;
    if (type.startsWith('audio')) return <Music className="h-4 w-4" />;
    return <FileText className="h-4 w-4" />;
  };

  const startBatchProcessing = async () => {
    if (files.length === 0) return;

    setIsProcessing(true);
    setIsPaused(false);
    const newResults: DetectionResult[] = [];

    try {
      for (let i = currentFileIndex; i < files.length; i++) {
        if (isPaused) break;

        setCurrentFileIndex(i);
        const file = files[i];
        
        let result: DetectionResult;

        if (file.type.startsWith('text/')) {
          const text = await file.text();
          result = await aiDetectionService.detectText(text, selectedPreset);
          result.fileName = file.name;
        } else if (file.type.startsWith('image/')) {
          result = await aiDetectionService.detectImage(file, selectedPreset);
        } else if (file.type.startsWith('audio/')) {
          result = await aiDetectionService.detectAudio(file, selectedPreset);
        } else {
          continue;
        }

        newResults.push(result);
        setResults(prev => [...prev, result]);
        onAnalysisComplete(result);
        
        setProgress(((i + 1) / files.length) * 100);
        
        // Délai pour éviter la surcharge
        await new Promise(resolve => setTimeout(resolve, 500));
      }

      if (!isPaused) {
        toast({
          title: "Traitement par lots terminé",
          description: `${newResults.length} fichiers analysés avec succès.`,
        });
      }
    } catch (error) {
      console.error('Erreur lors du traitement par lots:', error);
      toast({
        title: "Erreur de traitement",
        description: "Une erreur est survenue pendant le traitement.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const pauseProcessing = () => {
    setIsPaused(true);
    setIsProcessing(false);
  };

  const resumeProcessing = () => {
    setIsPaused(false);
    startBatchProcessing();
  };

  const resetBatch = () => {
    setFiles([]);
    setResults([]);
    setProgress(0);
    setCurrentFileIndex(0);
    setIsProcessing(false);
    setIsPaused(false);
  };

  const exportBatchResults = () => {
    if (results.length === 0) return;

    const data = aiDetectionService.exportResults(results, 'json');
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `batch-analysis-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "Export terminé",
      description: "Les résultats du traitement par lots ont été exportés.",
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Traitement par Lots
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {!isProcessing && !isPaused && (
            <div 
              {...getRootProps()} 
              className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                isDragActive ? 'border-primary bg-primary/5' : 'border-border hover:border-primary'
              }`}
            >
              <input {...getInputProps()} />
              <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-lg font-medium mb-2">
                {isDragActive ? 'Déposez vos fichiers ici' : 'Ajoutez des fichiers en lot'}
              </p>
              <p className="text-sm text-muted-foreground">
                Glissez-déposez ou cliquez pour sélectionner plusieurs fichiers
              </p>
            </div>
          )}

          {files.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-medium">Fichiers sélectionnés ({files.length})</h3>
                <div className="flex gap-2">
                  {!isProcessing && !isPaused && (
                    <Button onClick={startBatchProcessing} className="flex items-center gap-2">
                      <Play className="h-4 w-4" />
                      Démarrer l'analyse
                    </Button>
                  )}
                  {isProcessing && (
                    <Button onClick={pauseProcessing} variant="outline" className="flex items-center gap-2">
                      <Pause className="h-4 w-4" />
                      Pause
                    </Button>
                  )}
                  {isPaused && (
                    <Button onClick={resumeProcessing} className="flex items-center gap-2">
                      <Play className="h-4 w-4" />
                      Reprendre
                    </Button>
                  )}
                  <Button onClick={resetBatch} variant="outline">
                    Réinitialiser
                  </Button>
                </div>
              </div>

              {(isProcessing || isPaused) && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Progression</span>
                    <span className="text-sm text-muted-foreground">
                      {Math.round(progress)}%
                    </span>
                  </div>
                  <Progress value={progress} className="h-2" />
                  <p className="text-sm text-muted-foreground">
                    Fichier {currentFileIndex + 1} sur {files.length}
                  </p>
                </div>
              )}

              <div className="grid gap-2 max-h-48 overflow-y-auto">
                {files.map((file, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center gap-3 p-3 rounded-lg border ${
                      index < currentFileIndex ? 'bg-green-50 border-green-200' :
                      index === currentFileIndex && isProcessing ? 'bg-blue-50 border-blue-200' :
                      'bg-background'
                    }`}
                  >
                    {getFileIcon(file.type)}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{file.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {(file.size / 1024).toFixed(1)} KB
                      </p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {file.type.split('/')[0]}
                    </Badge>
                    {index < currentFileIndex && (
                      <Badge className="text-xs bg-green-500">Terminé</Badge>
                    )}
                    {index === currentFileIndex && isProcessing && (
                      <Badge className="text-xs bg-blue-500">En cours</Badge>
                    )}
                    {!isProcessing && !isPaused && (
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => removeFile(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>

              {results.length > 0 && (
                <div className="flex items-center justify-between pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    {results.length} résultats d'analyse disponibles
                  </p>
                  <Button
                    onClick={exportBatchResults}
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Exporter les résultats
                  </Button>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
