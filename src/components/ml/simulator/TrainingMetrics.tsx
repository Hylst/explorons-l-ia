
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, TrendingDown, Activity, Clock, Target, AlertTriangle } from 'lucide-react';

interface TrainingMetricsProps {
  currentMetrics: {
    epoch: number;
    trainLoss: number;
    valLoss: number;
    trainAccuracy: number;
    valAccuracy: number;
    learningRate: number;
    timeElapsed: number;
    estimatedTimeRemaining: number;
  } | null;
  maxEpochs: number;
  isTraining: boolean;
}

const TrainingMetrics: React.FC<TrainingMetricsProps> = ({
  currentMetrics,
  maxEpochs,
  isTraining
}) => {
  if (!currentMetrics) {
    return (
      <Card className="border-dashed border-2">
        <CardContent className="pt-6 text-center text-muted-foreground">
          <Activity className="h-12 w-12 mx-auto mb-4 opacity-50" />
          <p>Métriques d'entraînement disponibles après le démarrage</p>
        </CardContent>
      </Card>
    );
  }

  const getAccuracyTrend = () => {
    const diff = currentMetrics.valAccuracy - currentMetrics.trainAccuracy;
    if (Math.abs(diff) < 2) return { icon: Activity, color: 'text-blue-600', label: 'Stable' };
    if (diff > 5) return { icon: TrendingUp, color: 'text-green-600', label: 'Excellente généralisation' };
    if (diff < -10) return { icon: TrendingDown, color: 'text-red-600', label: 'Possible surapprentissage' };
    return { icon: TrendingUp, color: 'text-green-600', label: 'Bonne généralisation' };
  };

  const getLossStatus = () => {
    const ratio = currentMetrics.valLoss / currentMetrics.trainLoss;
    if (ratio > 1.5) return { color: 'text-red-600', label: 'Divergence détectée' };
    if (ratio > 1.2) return { color: 'text-yellow-600', label: 'Surveillance requise' };
    return { color: 'text-green-600', label: 'Convergence normale' };
  };

  const trend = getAccuracyTrend();
  const lossStatus = getLossStatus();
  const TrendIcon = trend.icon;

  return (
    <div className="grid gap-6">
      {/* Métriques principales */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Loss (Train)</p>
                <p className="text-2xl font-bold text-blue-600">
                  {currentMetrics.trainLoss.toFixed(4)}
                </p>
              </div>
              <TrendingDown className="h-8 w-8 text-blue-500 opacity-60" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Loss (Val)</p>
                <p className="text-2xl font-bold text-orange-600">
                  {currentMetrics.valLoss.toFixed(4)}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <TrendingDown className="h-6 w-6 text-orange-500 opacity-60" />
                <span className={`text-xs ${lossStatus.color}`}>
                  {lossStatus.label.split(' ')[0]}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Accuracy (Train)</p>
                <p className="text-2xl font-bold text-green-600">
                  {currentMetrics.trainAccuracy.toFixed(1)}%
                </p>
              </div>
              <Target className="h-8 w-8 text-green-500 opacity-60" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Accuracy (Val)</p>
                <p className="text-2xl font-bold text-purple-600">
                  {currentMetrics.valAccuracy.toFixed(1)}%
                </p>
              </div>
              <div className="flex flex-col items-center">
                <TrendIcon className={`h-6 w-6 ${trend.color} opacity-60`} />
                <Badge variant="secondary" className="text-xs mt-1">
                  {trend.label.split(' ')[0]}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Progression et temps */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Clock className="h-5 w-5" />
            Progression de l'Entraînement
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <span>Époque {currentMetrics.epoch} / {maxEpochs}</span>
            <span>{((currentMetrics.epoch / maxEpochs) * 100).toFixed(1)}% terminé</span>
          </div>
          <Progress value={(currentMetrics.epoch / maxEpochs) * 100} className="h-2" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>Temps écoulé: {(currentMetrics.timeElapsed / 1000).toFixed(1)}s</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-muted-foreground" />
              <span>Taux d'apprentissage: {currentMetrics.learningRate.toFixed(4)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-muted-foreground" />
              <span>ETA: {isTraining ? `${(currentMetrics.estimatedTimeRemaining / 1000).toFixed(0)}s` : '-'}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Alertes et recommandations */}
      <Card className="border-amber-200 bg-amber-50/50 dark:border-amber-800 dark:bg-amber-950/20">
        <CardContent className="pt-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
            <div className="space-y-2 text-sm">
              <h4 className="font-medium text-amber-800 dark:text-amber-200">
                Analyse en Temps Réel
              </h4>
              <div className="text-amber-700 dark:text-amber-300">
                {currentMetrics.epoch < 20 && (
                  <p>• Phase d'apprentissage initial - Les métriques évoluent rapidement</p>
                )}
                {currentMetrics.epoch >= 20 && currentMetrics.epoch < 60 && (
                  <p>• Phase de stabilisation - L'algorithme affine sa compréhension</p>
                )}
                {currentMetrics.epoch >= 60 && (
                  <p>• Phase de convergence - Améliorations plus subtiles</p>
                )}
                {lossStatus.label.includes('Divergence') && (
                  <p className="text-red-600">• ⚠️ {lossStatus.label} - Considérez réduire le taux d'apprentissage</p>
                )}
                {currentMetrics.valAccuracy >= 90 && (
                  <p className="text-green-600">• ✅ Excellentes performances ! Le modèle généralise bien</p>
                )}
                {trend.label.includes('surapprentissage') && (
                  <p className="text-red-600">• ⚠️ {trend.label} - Envisagez l'arrêt précoce ou la régularisation</p>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrainingMetrics;
