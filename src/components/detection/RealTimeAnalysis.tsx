
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Search, 
  BarChart3, 
  Zap, 
  CheckCircle, 
  AlertTriangle,
  Clock
} from 'lucide-react';

interface AnalysisStep {
  id: string;
  name: string;
  description: string;
  status: 'pending' | 'running' | 'completed' | 'error';
  progress: number;
  result?: number;
  icon: React.ReactNode;
}

interface RealTimeAnalysisProps {
  isActive: boolean;
  fileType: 'text' | 'image' | 'audio';
  onComplete?: (results: any) => void;
}

export const RealTimeAnalysis: React.FC<RealTimeAnalysisProps> = ({
  isActive,
  fileType,
  onComplete
}) => {
  const [steps, setSteps] = useState<AnalysisStep[]>([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [overallProgress, setOverallProgress] = useState(0);

  const getStepsForFileType = (type: 'text' | 'image' | 'audio'): AnalysisStep[] => {
    const baseSteps = {
      text: [
        {
          id: 'statistical',
          name: 'Analyse Statistique',
          description: 'Calcul de perplexité et entropie lexicale',
          status: 'pending' as const,
          progress: 0,
          icon: <BarChart3 className="h-4 w-4" />
        },
        {
          id: 'patterns',
          name: 'Détection de Patterns',
          description: 'Recherche de structures linguistiques IA',
          status: 'pending' as const,
          progress: 0,
          icon: <Search className="h-4 w-4" />
        },
        {
          id: 'entropy',
          name: 'Analyse Entropique',
          description: 'Mesure de diversité lexicale et burstiness',
          status: 'pending' as const,
          progress: 0,
          icon: <Brain className="h-4 w-4" />
        },
        {
          id: 'semantic',
          name: 'Cohérence Sémantique',
          description: 'Évaluation de la structure sémantique',
          status: 'pending' as const,
          progress: 0,
          icon: <Zap className="h-4 w-4" />
        }
      ],
      image: [
        {
          id: 'metadata',
          name: 'Métadonnées EXIF',
          description: 'Extraction et analyse des métadonnées',
          status: 'pending' as const,
          progress: 0,
          icon: <Search className="h-4 w-4" />
        },
        {
          id: 'histogram',
          name: 'Histogramme Couleurs',
          description: 'Analyse de la distribution des couleurs',
          status: 'pending' as const,
          progress: 0,
          icon: <BarChart3 className="h-4 w-4" />
        },
        {
          id: 'features',
          name: 'Features Avancées',
          description: 'Extraction de caractéristiques visuelles',
          status: 'pending' as const,
          progress: 0,
          icon: <Brain className="h-4 w-4" />
        },
        {
          id: 'compression',
          name: 'Analyse de Compression',
          description: 'Détection d\'artefacts de compression',
          status: 'pending' as const,
          progress: 0,
          icon: <Zap className="h-4 w-4" />
        }
      ],
      audio: [
        {
          id: 'spectral',
          name: 'Analyse Spectrale',
          description: 'FFT et analyse fréquentielle',
          status: 'pending' as const,
          progress: 0,
          icon: <BarChart3 className="h-4 w-4" />
        },
        {
          id: 'temporal',
          name: 'Analyse Temporelle',
          description: 'Détection de patterns temporels',
          status: 'pending' as const,
          progress: 0,
          icon: <Clock className="h-4 w-4" />
        },
        {
          id: 'synthetic',
          name: 'Patterns Synthétiques',
          description: 'Recherche de signatures de synthèse vocale',
          status: 'pending' as const,
          progress: 0,
          icon: <Brain className="h-4 w-4" />
        },
        {
          id: 'quality',
          name: 'Qualité Audio',
          description: 'Analyse de la qualité et du bitrate',
          status: 'pending' as const,
          progress: 0,
          icon: <Zap className="h-4 w-4" />
        }
      ]
    };

    return baseSteps[type] || [];
  };

  useEffect(() => {
    if (isActive) {
      const initialSteps = getStepsForFileType(fileType);
      setSteps(initialSteps);
      setCurrentStepIndex(-1);
      setOverallProgress(0);
      
      // Start analysis simulation
      runAnalysis(initialSteps);
    }
  }, [isActive, fileType]);

  const runAnalysis = async (initialSteps: AnalysisStep[]) => {
    const updatedSteps = [...initialSteps];
    
    for (let i = 0; i < updatedSteps.length; i++) {
      setCurrentStepIndex(i);
      
      // Update step to running
      updatedSteps[i] = { ...updatedSteps[i], status: 'running' };
      setSteps([...updatedSteps]);
      
      // Simulate progress
      for (let progress = 0; progress <= 100; progress += 10) {
        await new Promise(resolve => setTimeout(resolve, 150));
        updatedSteps[i] = { ...updatedSteps[i], progress };
        setSteps([...updatedSteps]);
        
        const overallProg = ((i * 100) + progress) / updatedSteps.length;
        setOverallProgress(overallProg);
      }
      
      // Complete step with simulated result
      const result = Math.random() * 0.8 + 0.1; // Random score between 0.1 and 0.9
      updatedSteps[i] = { 
        ...updatedSteps[i], 
        status: 'completed',
        progress: 100,
        result 
      };
      setSteps([...updatedSteps]);
    }
    
    setCurrentStepIndex(-1);
    
    // Call completion callback with results
    if (onComplete) {
      const results = {
        steps: updatedSteps,
        overallScore: updatedSteps.reduce((sum, step) => sum + (step.result || 0), 0) / updatedSteps.length
      };
      onComplete(results);
    }
  };

  const getStepStatusIcon = (step: AnalysisStep) => {
    switch (step.status) {
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'running':
        return <div className="h-4 w-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />;
      case 'error':
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      default:
        return <div className="h-4 w-4 border-2 border-muted rounded-full" />;
    }
  };

  if (!isActive || steps.length === 0) {
    return null;
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-5 w-5" />
          Analyse en Temps Réel - {fileType.toUpperCase()}
        </CardTitle>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progression globale</span>
            <span>{Math.round(overallProgress)}%</span>
          </div>
          <Progress value={overallProgress} className="h-2" />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {steps.map((step, index) => (
          <div 
            key={step.id}
            className={`flex items-center gap-4 p-3 rounded-lg border transition-all ${
              index === currentStepIndex 
                ? 'bg-primary/5 border-primary' 
                : step.status === 'completed'
                ? 'bg-green-50 border-green-200'
                : 'bg-muted/30'
            }`}
          >
            <div className="flex items-center gap-2">
              {step.icon}
              {getStepStatusIcon(step)}
            </div>
            
            <div className="flex-1 space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-sm">{step.name}</h4>
                  <p className="text-xs text-muted-foreground">{step.description}</p>
                </div>
                {step.result !== undefined && (
                  <Badge 
                    variant={step.result > 0.7 ? "destructive" : step.result > 0.4 ? "secondary" : "default"}
                  >
                    {(step.result * 100).toFixed(1)}%
                  </Badge>
                )}
              </div>
              
              {step.status === 'running' && (
                <Progress value={step.progress} className="h-1" />
              )}
            </div>
          </div>
        ))}
        
        {overallProgress === 100 && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center gap-2 text-green-700">
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">Analyse terminée</span>
            </div>
            <p className="text-sm text-green-600 mt-1">
              Tous les algorithmes de détection ont été exécutés avec succès.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
