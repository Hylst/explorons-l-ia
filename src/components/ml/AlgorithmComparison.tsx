
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { DataPoint } from './DatasetGenerator';

interface AlgorithmResult {
  name: string;
  accuracy: number;
  trainingTime: number;
  complexity: 'Low' | 'Medium' | 'High';
  interpretability: 'Low' | 'Medium' | 'High';
  color: string;
  progress: number;
  status: 'waiting' | 'training' | 'completed';
}

interface AlgorithmComparisonProps {
  dataset: DataPoint[];
}

const AlgorithmComparison: React.FC<AlgorithmComparisonProps> = ({ dataset }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [algorithms, setAlgorithms] = useState<AlgorithmResult[]>([
    {
      name: 'k-NN',
      accuracy: 0,
      trainingTime: 0,
      complexity: 'Low',
      interpretability: 'High',
      color: 'bg-blue-500',
      progress: 0,
      status: 'waiting'
    },
    {
      name: 'SVM',
      accuracy: 0,
      trainingTime: 0,
      complexity: 'Medium',
      interpretability: 'Medium',
      color: 'bg-green-500',
      progress: 0,
      status: 'waiting'
    },
    {
      name: 'Random Forest',
      accuracy: 0,
      trainingTime: 0,
      complexity: 'Medium',
      interpretability: 'Medium',
      color: 'bg-purple-500',
      progress: 0,
      status: 'waiting'
    },
    {
      name: 'Neural Network',
      accuracy: 0,
      trainingTime: 0,
      complexity: 'High',
      interpretability: 'Low',
      color: 'bg-orange-500',
      progress: 0,
      status: 'waiting'
    }
  ]);

  // Simulation de l'entraînement des algorithmes
  useEffect(() => {
    if (!isRunning) return;

    const simulateAlgorithm = (algorithm: AlgorithmResult, index: number) => {
      // Temps d'entraînement simulé différent pour chaque algorithme
      const trainingDurations = [500, 1500, 2000, 3000]; // en ms
      const finalAccuracies = [78, 85, 88, 92]; // Performances finales simulées
      
      const duration = trainingDurations[index];
      const finalAccuracy = finalAccuracies[index] + (Math.random() - 0.5) * 10;
      
      const startTime = Date.now();
      
      const updateProgress = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(100, (elapsed / duration) * 100);
        const currentAccuracy = (progress / 100) * Math.max(0, finalAccuracy);
        
        setAlgorithms(prev => prev.map((algo, i) => 
          i === index ? {
            ...algo,
            progress,
            accuracy: Math.round(currentAccuracy * 100) / 100,
            trainingTime: elapsed,
            status: progress >= 100 ? 'completed' : 'training'
          } : algo
        ));
        
        if (progress < 100) {
          setTimeout(updateProgress, 50);
        }
      };
      
      setAlgorithms(prev => prev.map((algo, i) => 
        i === index ? { ...algo, status: 'training' } : algo
      ));
      
      updateProgress();
    };

    // Démarrer tous les algorithmes avec des délais différents
    algorithms.forEach((algo, index) => {
      setTimeout(() => simulateAlgorithm(algo, index), index * 200);
    });
  }, [isRunning]);

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setAlgorithms(prev => prev.map(algo => ({
      ...algo,
      accuracy: 0,
      trainingTime: 0,
      progress: 0,
      status: 'waiting'
    })));
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Low': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'High': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getInterpretabilityColor = (interpretability: string) => {
    switch (interpretability) {
      case 'High': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Medium': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'Low': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const completedAlgorithms = algorithms.filter(algo => algo.status === 'completed');
  const bestAlgorithm = completedAlgorithms.length > 0 
    ? completedAlgorithms.reduce((best, current) => 
        current.accuracy > best.accuracy ? current : best
      ) 
    : null;

  return (
    <div className="space-y-6">
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              🏆 Comparaison d'Algorithmes
            </span>
            <span className="text-sm text-muted-foreground">
              Dataset: {dataset.length} points
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3 mb-6">
            <Button 
              onClick={handleStartPause} 
              className="flex items-center gap-2"
              disabled={algorithms.some(algo => algo.status === 'training')}
            >
              {isRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              {isRunning ? 'En cours...' : 'Démarrer Comparaison'}
            </Button>
            
            <Button variant="outline" onClick={handleReset}>
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset
            </Button>
          </div>

          {/* Tableau de comparaison */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3 font-medium">Algorithme</th>
                  <th className="text-left p-3 font-medium">Progression</th>
                  <th className="text-left p-3 font-medium">Accuracy</th>
                  <th className="text-left p-3 font-medium">Temps</th>
                  <th className="text-left p-3 font-medium">Complexité</th>
                  <th className="text-left p-3 font-medium">Interprétabilité</th>
                </tr>
              </thead>
              <tbody>
                {algorithms.map((algo, index) => (
                  <tr key={algo.name} className="border-b hover:bg-muted/50">
                    <td className="p-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${algo.color}`} />
                        <span className="font-medium">{algo.name}</span>
                        {bestAlgorithm && bestAlgorithm.name === algo.name && (
                          <Badge variant="default" className="text-xs">Meilleur</Badge>
                        )}
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <Progress value={algo.progress} className="flex-1" />
                        <span className="text-xs text-muted-foreground w-12">
                          {algo.progress.toFixed(0)}%
                        </span>
                      </div>
                    </td>
                    <td className="p-3">
                      <span className="font-mono text-sm">
                        {algo.accuracy.toFixed(1)}%
                      </span>
                    </td>
                    <td className="p-3">
                      <span className="text-sm text-muted-foreground">
                        {algo.trainingTime > 0 ? `${(algo.trainingTime / 1000).toFixed(1)}s` : '-'}
                      </span>
                    </td>
                    <td className="p-3">
                      <Badge variant="secondary" className={getComplexityColor(algo.complexity)}>
                        {algo.complexity}
                      </Badge>
                    </td>
                    <td className="p-3">
                      <Badge variant="secondary" className={getInterpretabilityColor(algo.interpretability)}>
                        {algo.interpretability}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Résumé des résultats */}
          {completedAlgorithms.length > 0 && (
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <h4 className="font-medium mb-3">📊 Analyse des Résultats</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Meilleure accuracy:</strong> {bestAlgorithm?.name} ({bestAlgorithm?.accuracy.toFixed(1)}%)
                </div>
                <div>
                  <strong>Plus rapide:</strong> {
                    completedAlgorithms.reduce((fastest, current) => 
                      current.trainingTime < fastest.trainingTime ? current : fastest
                    ).name
                  }
                </div>
                <div>
                  <strong>Plus interprétable:</strong> {
                    algorithms.filter(a => a.interpretability === 'High').map(a => a.name).join(', ') || 'Aucun'
                  }
                </div>
                <div>
                  <strong>Moins complexe:</strong> {
                    algorithms.filter(a => a.complexity === 'Low').map(a => a.name).join(', ') || 'Aucun'
                  }
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950/20 rounded border border-blue-200 dark:border-blue-800">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>💡 Conseil:</strong> Le choix de l'algorithme dépend de vos priorités. 
                  Privilégiez l'accuracy pour la performance, l'interprétabilité pour la compréhension, 
                  ou la simplicité pour la maintenabilité.
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AlgorithmComparison;
