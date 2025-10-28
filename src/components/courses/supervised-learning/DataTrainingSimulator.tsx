
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Slider } from '@/components/ui/slider';
import { Play, Pause, RotateCcw, Database, Target, AlertTriangle } from 'lucide-react';

interface DataPoint {
  x: number;
  y: number;
  label: 'A' | 'B';
  predicted?: 'A' | 'B';
  confidence?: number;
}

interface TrainingState {
  epoch: number;
  accuracy: number;
  loss: number;
  learningRate: number;
  isTraining: boolean;
  dataPoints: DataPoint[];
  decisionBoundary: { slope: number; intercept: number };
}

const DataTrainingSimulator: React.FC = () => {
  const [trainingState, setTrainingState] = useState<TrainingState>({
    epoch: 0,
    accuracy: 50,
    loss: 1.0,
    learningRate: 0.01,
    isTraining: false,
    dataPoints: [],
    decisionBoundary: { slope: 0, intercept: 0 }
  });

  const [datasetSize, setDatasetSize] = useState<number[]>([100]);
  const [noiseLevel, setNoiseLevel] = useState<number[]>([20]);
  const [learningRate, setLearningRate] = useState<number[]>([1]);

  // Générer les données d'entraînement
  const generateDataset = (size: number, noise: number) => {
    const points: DataPoint[] = [];
    for (let i = 0; i < size; i++) {
      const x = Math.random() * 10;
      const y = Math.random() * 10;
      // Ligne de séparation idéale : y = 0.5x + 2 avec du bruit
      const idealSeparation = 0.5 * x + 2 + (Math.random() - 0.5) * noise * 0.5;
      const label: 'A' | 'B' = y > idealSeparation ? 'A' : 'B';
      points.push({ x, y, label });
    }
    return points;
  };

  // Initialiser le dataset
  useEffect(() => {
    const newDataPoints = generateDataset(datasetSize[0], noiseLevel[0]);
    setTrainingState(prev => ({
      ...prev,
      dataPoints: newDataPoints,
      epoch: 0,
      accuracy: 50,
      loss: 1.0,
      decisionBoundary: { slope: Math.random() - 0.5, intercept: Math.random() * 5 }
    }));
  }, [datasetSize[0], noiseLevel[0]]);

  // Simulation d'entraînement
  useEffect(() => {
    if (!trainingState.isTraining) return;

    const interval = setInterval(() => {
      setTrainingState(prev => {
        if (prev.epoch >= 100) {
          return { ...prev, isTraining: false };
        }

        // Simulation de l'amélioration progressive
        const progress = prev.epoch / 100;
        const targetAccuracy = Math.min(95 - noiseLevel[0] * 0.3, 95);
        const newAccuracy = 50 + (targetAccuracy - 50) * (1 - Math.exp(-progress * 3));
        const newLoss = 1.0 * Math.exp(-progress * 2);
        
        // Mise à jour de la frontière de décision
        const idealSlope = 0.5;
        const idealIntercept = 2;
        const currentSlope = prev.decisionBoundary.slope + (idealSlope - prev.decisionBoundary.slope) * learningRate[0] * 0.01;
        const currentIntercept = prev.decisionBoundary.intercept + (idealIntercept - prev.decisionBoundary.intercept) * learningRate[0] * 0.01;

        // Prédictions pour chaque point
        const updatedPoints = prev.dataPoints.map(point => {
          const predictedValue = currentSlope * point.x + currentIntercept;
          const predicted: 'A' | 'B' = point.y > predictedValue ? 'A' : 'B';
          const distance = Math.abs(point.y - predictedValue);
          const confidence = Math.max(0.5, Math.min(0.99, 1 - distance / 5));
          
          return { ...point, predicted, confidence };
        });

        return {
          ...prev,
          epoch: prev.epoch + 1,
          accuracy: Math.round(newAccuracy * 100) / 100,
          loss: Math.round(newLoss * 1000) / 1000,
          dataPoints: updatedPoints,
          decisionBoundary: { slope: currentSlope, intercept: currentIntercept }
        };
      });
    }, 100);

    return () => clearInterval(interval);
  }, [trainingState.isTraining, learningRate, noiseLevel]);

  const handleStartTraining = () => {
    setTrainingState(prev => ({ ...prev, isTraining: !prev.isTraining }));
  };

  const handleReset = () => {
    const newDataPoints = generateDataset(datasetSize[0], noiseLevel[0]);
    setTrainingState(prev => ({
      ...prev,
      epoch: 0,
      accuracy: 50,
      loss: 1.0,
      isTraining: false,
      dataPoints: newDataPoints,
      decisionBoundary: { slope: Math.random() - 0.5, intercept: Math.random() * 5 }
    }));
  };

  const getAccuracyColor = (accuracy: number) => {
    if (accuracy >= 90) return 'text-green-600';
    if (accuracy >= 75) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getLossColor = (loss: number) => {
    if (loss <= 0.2) return 'text-green-600';
    if (loss <= 0.5) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <Card className="border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="text-2xl">🔬</div>
          Simulateur d'Entraînement de Données
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Observez en temps réel comment un algorithme apprend à classifier des données
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Contrôles des paramètres */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium flex items-center gap-2">
                <Database className="h-4 w-4" />
                Taille du dataset
              </label>
              <span className="text-sm text-muted-foreground">{datasetSize[0]} points</span>
            </div>
            <Slider
              value={datasetSize}
              onValueChange={setDatasetSize}
              max={500}
              min={50}
              step={50}
              className="w-full"
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                Niveau de bruit
              </label>
              <span className="text-sm text-muted-foreground">{noiseLevel[0]}%</span>
            </div>
            <Slider
              value={noiseLevel}
              onValueChange={setNoiseLevel}
              max={50}
              min={0}
              step={5}
              className="w-full"
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium flex items-center gap-2">
                <Target className="h-4 w-4" />
                Vitesse d'apprentissage
              </label>
              <span className="text-sm text-muted-foreground">{learningRate[0]}x</span>
            </div>
            <Slider
              value={learningRate}
              onValueChange={setLearningRate}
              max={5}
              min={0.1}
              step={0.1}
              className="w-full"
            />
          </div>
        </div>

        {/* Contrôles d'entraînement */}
        <div className="flex items-center gap-4">
          <Button
            onClick={handleStartTraining}
            size="sm"
            className="flex items-center gap-2"
          >
            {trainingState.isTraining ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            {trainingState.isTraining ? 'Pause' : 'Démarrer Entraînement'}
          </Button>
          <Button onClick={handleReset} size="sm" variant="outline">
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>
          <div className="text-sm text-muted-foreground">
            Époque {trainingState.epoch} / 100
          </div>
        </div>

        {/* Métriques en temps réel */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-900/50 p-4 rounded-lg border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Précision</span>
              <Badge variant={trainingState.accuracy >= 90 ? "default" : trainingState.accuracy >= 75 ? "secondary" : "destructive"}>
                {trainingState.accuracy.toFixed(1)}%
              </Badge>
            </div>
            <Progress value={trainingState.accuracy} className="h-2" />
          </div>

          <div className="bg-white dark:bg-gray-900/50 p-4 rounded-lg border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Perte (Loss)</span>
              <span className={`text-sm font-bold ${getLossColor(trainingState.loss)}`}>
                {trainingState.loss.toFixed(3)}
              </span>
            </div>
            <Progress value={(1 - trainingState.loss) * 100} className="h-2" />
          </div>

          <div className="bg-white dark:bg-gray-900/50 p-4 rounded-lg border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Progression</span>
              <span className="text-sm">{trainingState.epoch}%</span>
            </div>
            <Progress value={trainingState.epoch} className="h-2" />
          </div>
        </div>

        {/* Visualisation des données */}
        <div className="space-y-4">
          <h4 className="font-semibold">Visualisation de l'Apprentissage :</h4>
          <div className="bg-white dark:bg-gray-900/50 p-4 rounded-lg border">
            <div className="relative w-full h-64 bg-gray-50 dark:bg-gray-800 rounded border">
              <svg className="w-full h-full">
                {/* Grille */}
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />

                {/* Frontière de décision */}
                <line
                  x1="0"
                  y1={64 - (trainingState.decisionBoundary.intercept * 20)}
                  x2="100%"
                  y2={64 - ((trainingState.decisionBoundary.slope * 10 + trainingState.decisionBoundary.intercept) * 20)}
                  stroke="#3B82F6"
                  strokeWidth="3"
                  strokeDasharray={trainingState.isTraining ? "5,5" : "none"}
                />

                {/* Points de données */}
                {trainingState.dataPoints.slice(0, 50).map((point, index) => {
                  const cx = (point.x / 10) * 100;
                  const cy = 100 - (point.y / 10) * 100;
                  const isCorrect = point.predicted === point.label;
                  
                  return (
                    <g key={index}>
                      <circle
                        cx={`${cx}%`}
                        cy={`${cy}%`}
                        r="3"
                        fill={point.label === 'A' ? '#EF4444' : '#10B981'}
                        stroke={isCorrect ? 'none' : '#FBBF24'}
                        strokeWidth={isCorrect ? 0 : 2}
                        opacity={point.confidence || 0.8}
                      />
                    </g>
                  );
                })}
              </svg>
            </div>
            
            <div className="flex items-center justify-center gap-6 mt-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span>Classe A</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Classe B</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-0.5 bg-blue-500"></div>
                <span>Frontière de décision</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 border-2 border-amber-400 rounded-full bg-transparent"></div>
                <span>Erreur de classification</span>
              </div>
            </div>
          </div>
        </div>

        {/* Insights temps réel */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">🔍 Analyse en Temps Réel :</h4>
          <div className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
            {trainingState.epoch === 0 && (
              <p>• L'algorithme commence avec une frontière de décision aléatoire</p>
            )}
            {trainingState.epoch > 0 && trainingState.epoch < 20 && (
              <p>• Phase d'apprentissage initial : la frontière se déplace rapidement</p>
            )}
            {trainingState.epoch >= 20 && trainingState.epoch < 50 && (
              <p>• Stabilisation progressive : l'algorithme affine sa compréhension</p>
            )}
            {trainingState.epoch >= 50 && trainingState.epoch < 80 && (
              <p>• Convergence : les améliorations deviennent plus subtiles</p>
            )}
            {trainingState.epoch >= 80 && (
              <p>• Phase finale : l'algorithme a trouvé une solution stable</p>
            )}
            {trainingState.accuracy >= 90 && (
              <p>• ✅ Excellent ! Le modèle généralise bien sur ces données</p>
            )}
            {trainingState.accuracy < 70 && noiseLevel[0] > 30 && (
              <p>• ⚠️ Performance limitée par le niveau élevé de bruit dans les données</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DataTrainingSimulator;
