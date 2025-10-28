
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { Zap, Target, AlertTriangle, CheckCircle, TrendingUp } from 'lucide-react';
import { toast } from 'sonner';

interface OptimizationSuggestion {
  type: 'improvement' | 'warning' | 'success';
  category: string;
  message: string;
  impact: 'low' | 'medium' | 'high';
}

interface PromptOptimizerProps {
  prompt: string;
  onOptimizedPrompt: (optimizedPrompt: string) => void;
}

const PromptOptimizer: React.FC<PromptOptimizerProps> = ({ prompt, onOptimizedPrompt }) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [optimizedPrompt, setOptimizedPrompt] = useState('');
  const [suggestions, setSuggestions] = useState<OptimizationSuggestion[]>([]);
  const [qualityScore, setQualityScore] = useState(0);

  const analyzePrompt = () => {
    setIsAnalyzing(true);
    
    // Simulation d'analyse du prompt
    setTimeout(() => {
      const newSuggestions: OptimizationSuggestion[] = [];
      let score = 60;

      // Analyse de la longueur
      if (prompt.length < 50) {
        newSuggestions.push({
          type: 'warning',
          category: 'Longueur',
          message: 'Le prompt est très court. Ajoutez plus de contexte pour de meilleurs résultats.',
          impact: 'medium'
        });
      } else if (prompt.length > 2000) {
        newSuggestions.push({
          type: 'warning',
          category: 'Longueur',
          message: 'Le prompt est très long. Considérez le raccourcir pour plus de clarté.',
          impact: 'medium'
        });
      } else {
        score += 10;
        newSuggestions.push({
          type: 'success',
          category: 'Longueur',
          message: 'La longueur du prompt est optimale.',
          impact: 'low'
        });
      }

      // Analyse de la structure
      if (!prompt.includes('Tu es') && !prompt.includes('Vous êtes')) {
        newSuggestions.push({
          type: 'improvement',
          category: 'Rôle',
          message: 'Ajoutez un rôle clair (ex: "Tu es un expert en...") pour améliorer les résultats.',
          impact: 'high'
        });
      } else {
        score += 15;
      }

      // Analyse des instructions
      if (!prompt.includes(':') && !prompt.includes('-') && !prompt.includes('1.')) {
        newSuggestions.push({
          type: 'improvement',
          category: 'Structure',
          message: 'Structurez votre prompt avec des listes ou des sections pour plus de clarté.',
          impact: 'medium'
        });
      } else {
        score += 10;
      }

      // Analyse des exemples
      if (prompt.toLowerCase().includes('exemple')) {
        score += 15;
        newSuggestions.push({
          type: 'success',
          category: 'Exemples',
          message: 'Excellent ! Vous incluez des exemples, cela améliore la qualité des réponses.',
          impact: 'high'
        });
      } else {
        newSuggestions.push({
          type: 'improvement',
          category: 'Exemples',
          message: 'Ajoutez des exemples concrets pour guider l\'IA vers le résultat souhaité.',
          impact: 'high'
        });
      }

      setSuggestions(newSuggestions);
      setQualityScore(Math.min(score, 100));
      
      // Génération du prompt optimisé
      let optimized = prompt;
      
      // Ajout d'un rôle si manquant
      if (!prompt.includes('Tu es') && !prompt.includes('Vous êtes')) {
        optimized = `Tu es un assistant expert et professionnel. ${optimized}`;
      }
      
      // Amélioration de la structure
      if (!optimized.includes('Consignes:') && !optimized.includes('Instructions:')) {
        optimized += '\n\nConsignes:\n- Sois précis et détaillé dans ta réponse\n- Utilise un langage clair et professionnel\n- Structure ta réponse avec des titres et des listes si nécessaire';
      }

      setOptimizedPrompt(optimized);
      setIsAnalyzing(false);
      toast.success('Analyse terminée !');
    }, 2000);
  };

  const applyOptimization = () => {
    onOptimizedPrompt(optimizedPrompt);
    toast.success('Prompt optimisé appliqué !');
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'text-red-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  const getSuggestionIcon = (type: string) => {
    switch (type) {
      case 'improvement': return <TrendingUp className="h-4 w-4 text-blue-600" />;
      case 'warning': return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      case 'success': return <CheckCircle className="h-4 w-4 text-green-600" />;
      default: return <Target className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Optimiseur de Prompts
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button 
            onClick={analyzePrompt} 
            disabled={!prompt || isAnalyzing}
            className="w-full"
          >
            {isAnalyzing ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Analyse en cours...
              </>
            ) : (
              <>
                <Zap className="h-4 w-4 mr-2" />
                Analyser et Optimiser
              </>
            )}
          </Button>

          {qualityScore > 0 && (
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Score de qualité</span>
                  <span className={`text-sm font-bold ${getScoreColor(qualityScore)}`}>
                    {qualityScore}/100
                  </span>
                </div>
                <Progress value={qualityScore} className="w-full" />
              </div>

              {suggestions.length > 0 && (
                <div className="space-y-3">
                  <h4 className="font-medium">Suggestions d'amélioration</h4>
                  {suggestions.map((suggestion, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                      {getSuggestionIcon(suggestion.type)}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-xs">
                            {suggestion.category}
                          </Badge>
                          <span className={`text-xs font-medium ${getImpactColor(suggestion.impact)}`}>
                            Impact {suggestion.impact}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {suggestion.message}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {optimizedPrompt && optimizedPrompt !== prompt && (
                <div className="space-y-3">
                  <Separator />
                  <div>
                    <h4 className="font-medium mb-2">Prompt optimisé</h4>
                    <Textarea
                      value={optimizedPrompt}
                      onChange={(e) => setOptimizedPrompt(e.target.value)}
                      className="min-h-[120px]"
                      placeholder="Le prompt optimisé apparaîtra ici..."
                    />
                    <Button 
                      onClick={applyOptimization}
                      className="mt-2 w-full"
                      variant="default"
                    >
                      Appliquer l'optimisation
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PromptOptimizer;
