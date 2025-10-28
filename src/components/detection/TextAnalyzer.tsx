import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Zap, 
  AlertTriangle, 
  CheckCircle,
  Loader2
} from 'lucide-react';
import { DetectionResult, aiDetectionService } from '@/services/aiDetectionService';

interface TextAnalyzerProps {
  onAnalysisComplete: (result: DetectionResult) => void;
  selectedPreset?: string;
}

export const TextAnalyzer: React.FC<TextAnalyzerProps> = ({
  onAnalysisComplete,
  selectedPreset
}) => {
  const [text, setText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<DetectionResult | null>(null);

  const analyzeText = async () => {
    if (!text.trim()) return;

    setIsAnalyzing(true);
    try {
      // Simulation d'un délai d'analyse
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const analysisResult = await aiDetectionService.detectText(text, selectedPreset);
      setResult(analysisResult);
      aiDetectionService.saveAnalysis(analysisResult);
      onAnalysisComplete(analysisResult);
    } catch (error) {
      console.error('Erreur lors de l\'analyse:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const getWordCount = () => {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
  };

  const getCharCount = () => {
    return text.length;
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Analyse de texte
            {selectedPreset && (
              <Badge variant="secondary" className="ml-auto">
                Preset: {selectedPreset}
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Textarea
              placeholder="Collez votre texte ici pour détecter s'il a été généré par une IA..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="min-h-[200px] resize-none"
              disabled={isAnalyzing}
            />
            <div className="flex justify-between items-center mt-2 text-sm text-muted-foreground">
              <span>{getWordCount()} mots • {getCharCount()} caractères</span>
              <span>Min. 100 caractères recommandés</span>
            </div>
          </div>

          <Button
            onClick={analyzeText}
            disabled={!text.trim() || text.length < 50 || isAnalyzing}
            className="w-full"
          >
            {isAnalyzing ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Analyse en cours...
              </>
            ) : (
              <>
                <Zap className="h-4 w-4 mr-2" />
                Analyser le texte
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {result && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              {result.isAIGenerated ? (
                <AlertTriangle className="h-5 w-5 text-red-500" />
              ) : (
                <CheckCircle className="h-5 w-5 text-green-500" />
              )}
              Résultat d'analyse
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">
                  Probabilité de génération IA
                </span>
                <span className="font-bold text-lg">
                  {(result.confidence * 100).toFixed(1)}%
                </span>
              </div>
              <Progress value={result.confidence * 100} className="h-3" />
            </div>

            <div>
              <h4 className="font-medium mb-2">Verdict</h4>
              <Badge 
                variant={result.isAIGenerated ? "destructive" : "secondary"}
                className="text-sm"
              >
                {result.isAIGenerated ? 
                  'Probablement généré par IA' : 
                  'Probablement écrit par un humain'
                }
              </Badge>
            </div>

            <div>
              <h4 className="font-medium mb-2">Indicateurs détectés</h4>
              <div className="flex flex-wrap gap-1">
                {result.analysis.indicators.map((indicator, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {indicator}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Méthode</h4>
              <p className="text-sm text-muted-foreground">
                {result.analysis.method}
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
