
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Zap, Target, TrendingUp, Brain, AlertTriangle, Rocket } from 'lucide-react';
import { TrainingPreset, TRAINING_PRESETS } from './TrainingPresets';

interface PresetSelectorProps {
  selectedPreset: string | null;
  onPresetSelect: (preset: TrainingPreset) => void;
  onCustomConfig: () => void;
}

const PresetSelector: React.FC<PresetSelectorProps> = ({
  selectedPreset,
  onPresetSelect,
  onCustomConfig
}) => {
  const getPresetIcon = (id: string) => {
    switch (id) {
      case 'beginner_classification': return <Target className="h-4 w-4" />;
      case 'complex_multiclass': return <Brain className="h-4 w-4" />;
      case 'regression_smooth': return <TrendingUp className="h-4 w-4" />;
      case 'overfitting_demo': return <AlertTriangle className="h-4 w-4" />;
      case 'fast_convergence': return <Rocket className="h-4 w-4" />;
      default: return <Zap className="h-4 w-4" />;
    }
  };

  const getDifficultyColor = (preset: TrainingPreset) => {
    if (preset.dataset.noiseLevel <= 10) return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    if (preset.dataset.noiseLevel <= 20) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
  };

  const getDifficultyLabel = (preset: TrainingPreset) => {
    if (preset.dataset.noiseLevel <= 10) return 'Facile';
    if (preset.dataset.noiseLevel <= 20) return 'Moyen';
    return 'Difficile';
  };

  return (
    <Card className="border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-primary" />
          Configurations Prédéfinies
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Choisissez une configuration d'entraînement prête à l'emploi ou créez la vôtre
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4">
          {TRAINING_PRESETS.map((preset) => (
            <Card 
              key={preset.id}
              className={`cursor-pointer transition-all hover:shadow-md ${
                selectedPreset === preset.id ? 'ring-2 ring-primary bg-primary/5' : 'hover:bg-muted/50'
              }`}
              onClick={() => onPresetSelect(preset)}
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {getPresetIcon(preset.id)}
                    <h3 className="font-medium">{preset.name}</h3>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="secondary" className={getDifficultyColor(preset)}>
                      {getDifficultyLabel(preset)}
                    </Badge>
                    <Badge variant="outline" className="capitalize">
                      {preset.algorithm.replace('_', ' ')}
                    </Badge>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-3">
                  {preset.description}
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                  <div className="bg-muted/30 p-2 rounded">
                    <div className="font-medium">Dataset</div>
                    <div>{preset.dataset.size} points</div>
                  </div>
                  <div className="bg-muted/30 p-2 rounded">
                    <div className="font-medium">Époques</div>
                    <div>{preset.hyperparameters.maxEpochs}</div>
                  </div>
                  <div className="bg-muted/30 p-2 rounded">
                    <div className="font-medium">Accuracy attendue</div>
                    <div className="text-green-600">{preset.expectedPerformance.accuracy}%</div>
                  </div>
                  <div className="bg-muted/30 p-2 rounded">
                    <div className="font-medium">Convergence</div>
                    <div>~{preset.expectedPerformance.convergenceEpoch} ép.</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="pt-4 border-t">
          <Button 
            variant="outline" 
            onClick={onCustomConfig}
            className="w-full flex items-center gap-2"
          >
            <Brain className="h-4 w-4" />
            Configuration Personnalisée
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PresetSelector;
