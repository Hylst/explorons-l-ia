
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AnalysisResult } from './AnalysisResult';
import { DetectionResult } from '@/services/aiDetectionService';
import { Zap, Loader2 } from 'lucide-react';

interface ResultsGridProps {
  results: DetectionResult[];
  isAnalyzing: boolean;
  onViewDetails: (result: DetectionResult) => void;
  onViewDetailedAnalysis: (result: DetectionResult) => void;
  onExportResult: (result: DetectionResult) => void;
}

export const ResultsGrid: React.FC<ResultsGridProps> = ({
  results,
  isAnalyzing,
  onViewDetails,
  onViewDetailedAnalysis,
  onExportResult
}) => {
  if (isAnalyzing) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center py-8">
          <div className="text-center">
            <Loader2 className="h-8 w-8 animate-spin mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">
              Analyse en cours des fichiers...
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (results.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold flex items-center gap-2">
        <Zap className="h-5 w-5" />
        Résultats d'analyse ({results.length})
      </h3>
      <div className="grid gap-4 md:grid-cols-2">
        {results.map((result) => (
          <AnalysisResult
            key={result.id}
            result={result}
            onViewDetails={onViewDetails}
            onViewDetailedAnalysis={onViewDetailedAnalysis}
            onExport={onExportResult}
          />
        ))}
      </div>
      {results.length > 0 && (
        <div className="flex justify-center">
          <Button
            variant="outline"
            onClick={() => results.length > 0 && onViewDetailedAnalysis(results[0])}
            className="flex items-center gap-2"
          >
            Voir l'analyse détaillée
          </Button>
        </div>
      )}
    </div>
  );
};
