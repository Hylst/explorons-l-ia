
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Loader2, FileText, Image, Music, CheckCircle2 } from 'lucide-react';

interface AnalysisProgressProps {
  progress: {
    current: number;
    total: number;
    currentFile?: string;
    stage: string;
    completedFiles: string[];
  };
}

export const AnalysisProgress: React.FC<AnalysisProgressProps> = ({ progress }) => {
  const percentage = (progress.current / progress.total) * 100;

  const getStageIcon = (stage: string) => {
    switch (stage) {
      case 'text': return <FileText className="h-4 w-4" />;
      case 'image': return <Image className="h-4 w-4" />;
      case 'audio': return <Music className="h-4 w-4" />;
      default: return <Loader2 className="h-4 w-4 animate-spin" />;
    }
  };

  return (
    <Card className="border-primary/20">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <Loader2 className="h-5 w-5 animate-spin text-primary" />
          Analyse en cours...
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">
            Progression: {progress.current} / {progress.total}
          </span>
          <span className="text-sm text-muted-foreground">
            {Math.round(percentage)}%
          </span>
        </div>
        
        <Progress value={percentage} className="h-2" />
        
        {progress.currentFile && (
          <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
            {getStageIcon(progress.stage)}
            <div className="flex-1">
              <p className="text-sm font-medium">Analyse en cours:</p>
              <p className="text-sm text-muted-foreground truncate">
                {progress.currentFile}
              </p>
            </div>
            <Badge variant="secondary" className="text-xs">
              {progress.stage}
            </Badge>
          </div>
        )}

        {progress.completedFiles.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium">Fichiers analysés:</p>
            <div className="grid gap-1 max-h-24 overflow-y-auto">
              {progress.completedFiles.slice(-3).map((file, index) => (
                <div key={index} className="flex items-center gap-2 text-xs">
                  <CheckCircle2 className="h-3 w-3 text-green-500" />
                  <span className="truncate">{file}</span>
                </div>
              ))}
              {progress.completedFiles.length > 3 && (
                <div className="text-xs text-muted-foreground">
                  +{progress.completedFiles.length - 3} autres fichiers
                </div>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
