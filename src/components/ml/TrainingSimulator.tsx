
import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, TrendingUp, Target } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DataPoint } from './DatasetGenerator';
import TrainingMetrics from './simulator/TrainingMetrics';
import TrainingControls from './simulator/TrainingControls';

interface TrainingMetricsData {
  epoch: number;
  trainLoss: number;
  valLoss: number;
  trainAccuracy: number;
  valAccuracy: number;
  learningRate: number;
  timeElapsed: number;
  estimatedTimeRemaining: number;
}

interface TrainingSimulatorProps {
  dataset: DataPoint[];
  algorithm: 'neural_network' | 'svm' | 'random_forest' | 'knn';
}

const TrainingSimulator: React.FC<TrainingSimulatorProps> = ({ dataset, algorithm }) => {
  const [isTraining, setIsTraining] = useState(false);
  const [currentEpoch, setCurrentEpoch] = useState(0);
  const [maxEpochs, setMaxEpochs] = useState<number[]>([100]);
  const [learningRate, setLearningRate] = useState<number[]>([1]);
  const [batchSize, setBatchSize] = useState<number[]>([32]);
  const [enableEarlyStopping, setEnableEarlyStopping] = useState(false);
  const [enableRegularization, setEnableRegularization] = useState(false);
  const [metrics, setMetrics] = useState<TrainingMetricsData[]>([]);
  const [currentMetrics, setCurrentMetrics] = useState<TrainingMetricsData | null>(null);
  const [startTime, setStartTime] = useState<number>(0);

  // Simulation des métriques d'entraînement améliorée
  const simulateTrainingStep = useCallback((epoch: number): TrainingMetricsData => {
    const progress = epoch / maxEpochs[0];
    const lr = learningRate[0] * 0.01;
    
    // Simulation plus réaliste avec différents algorithmes
    let baseTrainLoss, baseValLoss, convergenceRate;
    
    switch (algorithm) {
      case 'neural_network':
        convergenceRate = 3;
        baseTrainLoss = Math.exp(-progress * convergenceRate) * 2.5;
        baseValLoss = Math.exp(-progress * (convergenceRate * 0.8)) * 2.8;
        break;
      case 'svm':
        convergenceRate = 4;
        baseTrainLoss = Math.exp(-progress * convergenceRate) * 1.8;
        baseValLoss = Math.exp(-progress * (convergenceRate * 0.9)) * 2.0;
        break;
      case 'random_forest':
        convergenceRate = 2.5;
        baseTrainLoss = Math.exp(-progress * convergenceRate) * 2.0;
        baseValLoss = Math.exp(-progress * (convergenceRate * 0.95)) * 2.1;
        break;
      case 'knn':
        convergenceRate = 5;
        baseTrainLoss = Math.exp(-progress * convergenceRate) * 1.5;
        baseValLoss = Math.exp(-progress * (convergenceRate * 0.85)) * 1.8;
        break;
      default:
        convergenceRate = 3;
        baseTrainLoss = Math.exp(-progress * convergenceRate) * 2;
        baseValLoss = Math.exp(-progress * (convergenceRate * 0.8)) * 2.2;
    }
    
    // Ajout de bruit réaliste et effets de régularisation
    const noise = () => (Math.random() - 0.5) * 0.15;
    const regularizationEffect = enableRegularization ? 0.95 : 1;
    
    const trainLoss = Math.max(0.05, baseTrainLoss * regularizationEffect + noise());
    const valLoss = Math.max(0.08, baseValLoss * regularizationEffect + noise() + 
      (progress > 0.7 && !enableRegularization ? progress * 0.2 : 0));
    
    // Calcul de l'accuracy basé sur la loss
    const trainAccuracy = Math.min(98, (1 - trainLoss / 3) * 100 * regularizationEffect);
    const valAccuracy = Math.min(96, (1 - valLoss / 3) * 100 * regularizationEffect);
    
    // Calcul des temps
    const currentTime = Date.now();
    const timeElapsed = currentTime - startTime;
    const timePerEpoch = epoch > 0 ? timeElapsed / epoch : 0;
    const estimatedTimeRemaining = (maxEpochs[0] - epoch) * timePerEpoch;

    return {
      epoch,
      trainLoss: parseFloat(trainLoss.toFixed(4)),
      valLoss: parseFloat(valLoss.toFixed(4)),
      trainAccuracy: parseFloat(trainAccuracy.toFixed(2)),
      valAccuracy: parseFloat(valAccuracy.toFixed(2)),
      learningRate: lr,
      timeElapsed,
      estimatedTimeRemaining
    };
  }, [maxEpochs, learningRate, algorithm, enableRegularization, startTime]);

  // Boucle d'entraînement améliorée
  useEffect(() => {
    if (!isTraining || currentEpoch >= maxEpochs[0]) {
      if (currentEpoch >= maxEpochs[0]) {
        setIsTraining(false);
      }
      return;
    }

    const interval = setInterval(() => {
      const newMetrics = simulateTrainingStep(currentEpoch + 1);
      
      // Arrêt précoce si activé
      if (enableEarlyStopping && currentEpoch > 20) {
        const recentMetrics = metrics.slice(-5);
        if (recentMetrics.length >= 5) {
          const improvementRate = recentMetrics[4].valAccuracy - recentMetrics[0].valAccuracy;
          if (improvementRate < 0.5) {
            console.log('Arrêt précoce déclenché - pas d\'amélioration significative');
            setIsTraining(false);
            return;
          }
        }
      }
      
      setMetrics(prev => [...prev, newMetrics]);
      setCurrentMetrics(newMetrics);
      setCurrentEpoch(prev => prev + 1);
      
      // Simulation de la vitesse d'entraînement variable
      const speed = Math.max(80, 300 - batchSize[0] * 2);
      
      if (currentEpoch + 1 >= maxEpochs[0]) {
        setIsTraining(false);
      }
    }, 150); // Animation plus lente pour meilleure visualisation

    return () => clearInterval(interval);
  }, [isTraining, currentEpoch, maxEpochs, batchSize, simulateTrainingStep, enableEarlyStopping, metrics]);

  const handleStartPause = () => {
    if (!isTraining && currentEpoch === 0) {
      setStartTime(Date.now());
    }
    setIsTraining(!isTraining);
  };

  const handleReset = () => {
    setIsTraining(false);
    setCurrentEpoch(0);
    setMetrics([]);
    setCurrentMetrics(null);
    setStartTime(0);
  };

  const handleExportConfig = () => {
    const config = {
      algorithm,
      hyperparameters: {
        maxEpochs: maxEpochs[0],
        learningRate: learningRate[0] * 0.01,
        batchSize: batchSize[0],
        enableEarlyStopping,
        enableRegularization
      },
      dataset: {
        size: dataset.length,
        type: 'classification' // Simplification pour l'exemple
      },
      timestamp: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `training-config-${algorithm}-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleSaveProgress = () => {
    const progress = {
      algorithm,
      currentEpoch,
      metrics: metrics.slice(-10), // Dernières 10 époques
      timestamp: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(progress, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `training-progress-${algorithm}-epoch-${currentEpoch}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const getAlgorithmInfo = () => {
    switch (algorithm) {
      case 'neural_network':
        return { name: 'Réseau de Neurones', icon: <Brain className="h-4 w-4" />, color: 'bg-purple-500' };
      case 'svm':
        return { name: 'SVM', icon: <Target className="h-4 w-4" />, color: 'bg-blue-500' };
      case 'random_forest':
        return { name: 'Random Forest', icon: <TrendingUp className="h-4 w-4" />, color: 'bg-green-500' };
      case 'knn':
        return { name: 'k-NN', icon: <Target className="h-4 w-4" />, color: 'bg-orange-500' };
      default:
        return { name: 'Algorithme', icon: <Brain className="h-4 w-4" />, color: 'bg-gray-500' };
    }
  };

  const algoInfo = getAlgorithmInfo();

  return (
    <div className="space-y-6">
      {/* En-tête avec informations sur l'algorithme */}
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {algoInfo.icon}
            Simulateur d'Entraînement - {algoInfo.name}
            <Badge variant="secondary" className="ml-auto">
              Dataset: {dataset.length} points
            </Badge>
          </CardTitle>
        </CardHeader>
      </Card>

      {/* Contrôles d'entraînement */}
      <TrainingControls
        isTraining={isTraining}
        currentEpoch={currentEpoch}
        maxEpochs={maxEpochs}
        learningRate={learningRate}
        batchSize={batchSize}
        enableEarlyStopping={enableEarlyStopping}
        enableRegularization={enableRegularization}
        onStartPause={handleStartPause}
        onReset={handleReset}
        onMaxEpochsChange={setMaxEpochs}
        onLearningRateChange={setLearningRate}
        onBatchSizeChange={setBatchSize}
        onEarlyStoppingToggle={setEnableEarlyStopping}
        onRegularizationToggle={setEnableRegularization}
        onExportConfig={handleExportConfig}
        onSaveProgress={handleSaveProgress}
      />

      {/* Métriques de performance */}
      <TrainingMetrics
        currentMetrics={currentMetrics}
        maxEpochs={maxEpochs[0]}
        isTraining={isTraining}
      />

      {/* Graphiques en temps réel */}
      {metrics.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Graphique de Loss */}
          <Card>
            <CardHeader>
              <CardTitle>Évolution de la Loss</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={metrics}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="epoch" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="trainLoss" 
                      stroke="#3b82f6" 
                      name="Training Loss"
                      strokeWidth={2}
                      dot={false}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="valLoss" 
                      stroke="#f97316" 
                      name="Validation Loss"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Graphique d'Accuracy */}
          <Card>
            <CardHeader>
              <CardTitle>Évolution de l'Accuracy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={metrics}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="epoch" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="trainAccuracy" 
                      stroke="#22c55e" 
                      name="Training Accuracy"
                      strokeWidth={2}
                      dot={false}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="valAccuracy" 
                      stroke="#a855f7" 
                      name="Validation Accuracy"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default TrainingSimulator;
