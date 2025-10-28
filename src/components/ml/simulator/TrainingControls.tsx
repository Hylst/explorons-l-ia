
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Play, Pause, RotateCcw, Settings, Download, Save } from 'lucide-react';

interface TrainingControlsProps {
  isTraining: boolean;
  currentEpoch: number;
  maxEpochs: number[];
  learningRate: number[];
  batchSize: number[];
  enableEarlyStopping: boolean;
  enableRegularization: boolean;
  onStartPause: () => void;
  onReset: () => void;
  onMaxEpochsChange: (value: number[]) => void;
  onLearningRateChange: (value: number[]) => void;
  onBatchSizeChange: (value: number[]) => void;
  onEarlyStoppingToggle: (value: boolean) => void;
  onRegularizationToggle: (value: boolean) => void;
  onExportConfig: () => void;
  onSaveProgress: () => void;
}

const TrainingControls: React.FC<TrainingControlsProps> = ({
  isTraining,
  currentEpoch,
  maxEpochs,
  learningRate,
  batchSize,
  enableEarlyStopping,
  enableRegularization,
  onStartPause,
  onReset,
  onMaxEpochsChange,
  onLearningRateChange,
  onBatchSizeChange,
  onEarlyStoppingToggle,
  onRegularizationToggle,
  onExportConfig,
  onSaveProgress
}) => {
  return (
    <Card className="border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="h-5 w-5 text-primary" />
          Contrôles d'Entraînement
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Hyperparamètres principaux */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Nombre d'époques</label>
              <Badge variant="secondary">{maxEpochs[0]}</Badge>
            </div>
            <Slider
              value={maxEpochs}
              onValueChange={onMaxEpochsChange}
              min={50}
              max={500}
              step={25}
              disabled={isTraining}
              className="w-full"
            />
            <div className="text-xs text-muted-foreground">
              Plus d'époques = apprentissage plus long mais potentiellement meilleur
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Taux d'apprentissage</label>
              <Badge variant="secondary">{(learningRate[0] * 0.01).toFixed(3)}</Badge>
            </div>
            <Slider
              value={learningRate}
              onValueChange={onLearningRateChange}
              min={1}
              max={100}
              step={1}
              disabled={isTraining}
              className="w-full"
            />
            <div className="text-xs text-muted-foreground">
              Taux élevé = convergence rapide mais instable
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Taille de batch</label>
              <Badge variant="secondary">{batchSize[0]}</Badge>
            </div>
            <Slider
              value={batchSize}
              onValueChange={onBatchSizeChange}
              min={8}
              max={128}
              step={8}
              disabled={isTraining}
              className="w-full"
            />
            <div className="text-xs text-muted-foreground">
              Batch plus grand = entraînement plus stable
            </div>
          </div>
        </div>

        {/* Options avancées */}
        <div className="space-y-4 pt-4 border-t">
          <h4 className="font-medium">Options Avancées</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div>
                <div className="font-medium text-sm">Arrêt Précoce</div>
                <div className="text-xs text-muted-foreground">
                  Stoppe automatiquement si pas d'amélioration
                </div>
              </div>
              <Switch
                checked={enableEarlyStopping}
                onCheckedChange={onEarlyStoppingToggle}
                disabled={isTraining}
              />
            </div>

            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <div>
                <div className="font-medium text-sm">Régularisation</div>
                <div className="text-xs text-muted-foreground">
                  Réduit le risque de surapprentissage
                </div>
              </div>
              <Switch
                checked={enableRegularization}
                onCheckedChange={onRegularizationToggle}
                disabled={isTraining}
              />
            </div>
          </div>
        </div>

        {/* Contrôles d'action */}
        <div className="flex flex-wrap gap-3 pt-4 border-t">
          <Button 
            onClick={onStartPause} 
            className="flex items-center gap-2"
            size="sm"
          >
            {isTraining ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            {isTraining ? 'Pause' : 'Démarrer'}
          </Button>
          
          <Button 
            variant="outline" 
            onClick={onReset} 
            disabled={isTraining}
            size="sm"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>

          <div className="flex gap-2 ml-auto">
            <Button 
              variant="outline" 
              onClick={onSaveProgress}
              size="sm"
              disabled={currentEpoch === 0}
            >
              <Save className="h-4 w-4 mr-2" />
              Sauvegarder
            </Button>
            
            <Button 
              variant="outline" 
              onClick={onExportConfig}
              size="sm"
            >
              <Download className="h-4 w-4 mr-2" />
              Export Config
            </Button>
          </div>
        </div>

        {/* Indicateur de progression */}
        <div className="bg-muted/30 p-3 rounded-lg text-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium">État de l'entraînement</span>
            <Badge variant={isTraining ? "default" : "secondary"}>
              {isTraining ? 'En cours' : 'Arrêté'}
            </Badge>
          </div>
          <div className="text-muted-foreground">
            {isTraining ? 
              `Époque ${currentEpoch}/${maxEpochs[0]} - Entraînement en cours...` :
              currentEpoch > 0 ? 
                `Entraînement en pause à l'époque ${currentEpoch}` :
                'Prêt à démarrer l\'entraînement'
            }
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrainingControls;
