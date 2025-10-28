
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Zap, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Shield,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Node, Edge } from '@xyflow/react';

interface OptimizationSuggestion {
  id: string;
  type: 'performance' | 'cost' | 'reliability' | 'security';
  title: string;
  description: string;
  impact: number; // 1-5 score
  effort: number; // 1-5 score
  estimatedSaving: string;
  autoApplicable: boolean;
}

interface AutoOptimizerProps {
  nodes: Node[];
  edges: Edge[];
  onOptimizationApplied: (optimizedNodes: Node[], optimizedEdges: Edge[]) => void;
}

const AutoOptimizer: React.FC<AutoOptimizerProps> = ({ 
  nodes, 
  edges, 
  onOptimizationApplied 
}) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [suggestions, setSuggestions] = useState<OptimizationSuggestion[]>([]);
  const [analysisProgress, setAnalysisProgress] = useState(0);

  useEffect(() => {
    if (nodes.length > 0) {
      analyzeWorkflow();
    }
  }, [nodes, edges]);

  const analyzeWorkflow = async () => {
    setIsAnalyzing(true);
    setAnalysisProgress(0);

    // Simulation d'analyse progressive
    const progressSteps = [
      { progress: 20, message: "Analyse de la structure..." },
      { progress: 40, message: "Détection des goulots..." },
      { progress: 60, message: "Calcul des coûts..." },
      { progress: 80, message: "Suggestions d'optimisation..." },
      { progress: 100, message: "Analyse terminée" }
    ];

    for (const step of progressSteps) {
      setAnalysisProgress(step.progress);
      await new Promise(resolve => setTimeout(resolve, 800));
    }

    // Génération de suggestions basées sur l'analyse du workflow
    const generatedSuggestions: OptimizationSuggestion[] = [
      {
        id: '1',
        type: 'cost',
        title: 'Optimisation des tokens LLM',
        description: 'Réduire la verbosité des prompts et utiliser des modèles moins coûteux pour les tâches simples',
        impact: 5,
        effort: 2,
        estimatedSaving: '35% de réduction des coûts',
        autoApplicable: true
      },
      {
        id: '2',
        type: 'performance',
        title: 'Parallélisation des tâches',
        description: 'Exécuter les nœuds indépendants en parallèle pour améliorer la vitesse',
        impact: 4,
        effort: 3,
        estimatedSaving: '50% plus rapide',
        autoApplicable: true
      },
      {
        id: '3',
        type: 'reliability',
        title: 'Retry automatique intelligent',
        description: 'Ajouter des mécanismes de retry avec backoff exponentiel',
        impact: 4,
        effort: 2,
        estimatedSaving: '20% d\'amélioration fiabilité',
        autoApplicable: true
      },
      {
        id: '4',
        type: 'security',
        title: 'Validation des entrées',
        description: 'Ajouter des nœuds de validation pour sécuriser les données',
        impact: 3,
        effort: 3,
        estimatedSaving: 'Sécurité renforcée',
        autoApplicable: false
      }
    ];

    setSuggestions(generatedSuggestions);
    setIsAnalyzing(false);
  };

  const getTypeIcon = (type: OptimizationSuggestion['type']) => {
    switch (type) {
      case 'cost': return <DollarSign className="h-4 w-4" />;
      case 'performance': return <TrendingUp className="h-4 w-4" />;
      case 'reliability': return <Shield className="h-4 w-4" />;
      case 'security': return <Shield className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: OptimizationSuggestion['type']) => {
    switch (type) {
      case 'cost': return 'bg-green-100 text-green-800';
      case 'performance': return 'bg-blue-100 text-blue-800';
      case 'reliability': return 'bg-orange-100 text-orange-800';
      case 'security': return 'bg-red-100 text-red-800';
    }
  };

  const applyOptimization = (suggestionId: string) => {
    const suggestion = suggestions.find(s => s.id === suggestionId);
    if (!suggestion) return;

    // Simulation d'application d'optimisation
    console.log('Application de l\'optimisation:', suggestion.title);
    
    // Ici on pourrait modifier les nœuds et edges
    onOptimizationApplied(nodes, edges);

    // Marquer la suggestion comme appliquée
    setSuggestions(prev => prev.filter(s => s.id !== suggestionId));
  };

  const applyAllOptimizations = () => {
    const autoApplicable = suggestions.filter(s => s.autoApplicable);
    autoApplicable.forEach(suggestion => {
      applyOptimization(suggestion.id);
    });
  };

  if (isAnalyzing) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary animate-pulse" />
            Auto-Optimiseur IA
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Analyse intelligente du workflow en cours...
              </p>
              <Progress value={analysisProgress} className="w-full" />
              <p className="text-xs text-muted-foreground mt-1">
                {analysisProgress}%
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          Auto-Optimiseur IA
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Suggestions d'optimisation automatique basées sur l'IA
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {suggestions.length > 0 && (
            <div className="flex justify-between items-center">
              <p className="text-sm font-medium">
                {suggestions.length} optimisations détectées
              </p>
              <Button 
                size="sm" 
                onClick={applyAllOptimizations}
                className="flex items-center gap-1"
              >
                <Zap className="h-3 w-3" />
                Appliquer tout
              </Button>
            </div>
          )}

          <div className="space-y-3">
            {suggestions.map(suggestion => (
              <Card key={suggestion.id} className="border-l-4 border-l-primary/30">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {getTypeIcon(suggestion.type)}
                      <Badge className={`text-xs ${getTypeColor(suggestion.type)}`}>
                        {suggestion.type}
                      </Badge>
                      <span className="font-medium text-sm">{suggestion.title}</span>
                    </div>
                    {suggestion.autoApplicable && (
                      <Badge variant="outline" className="text-xs">
                        <Zap className="h-3 w-3 mr-1" />
                        Auto
                      </Badge>
                    )}
                  </div>

                  <p className="text-xs text-muted-foreground mb-3">
                    {suggestion.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-1">
                        <TrendingUp className="h-3 w-3 text-green-600" />
                        <span>Impact: {suggestion.impact}/5</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-blue-600" />
                        <span>Effort: {suggestion.effort}/5</span>
                      </div>
                      <div className="text-primary font-medium">
                        {suggestion.estimatedSaving}
                      </div>
                    </div>

                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => applyOptimization(suggestion.id)}
                      className="flex items-center gap-1"
                    >
                      Appliquer
                      <ArrowRight className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {suggestions.length === 0 && (
            <div className="text-center py-6">
              <CheckCircle className="h-8 w-8 mx-auto text-green-600 mb-2" />
              <p className="text-sm text-muted-foreground">
                Workflow déjà optimisé ! Aucune amélioration détectée.
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AutoOptimizer;
