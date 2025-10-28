
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DollarSign, TrendingUp, TrendingDown, Calculator } from 'lucide-react';

interface CostMetricsProps {
  selectedModelData: any;
  calculateCost: any;
  usageType: string;
}

const CostMetrics: React.FC<CostMetricsProps> = ({ selectedModelData, calculateCost, usageType }) => {
  if (!selectedModelData || !calculateCost) return null;

  const multiplier = usageType === 'daily' ? 1 : usageType === 'monthly' ? 30 : usageType === 'yearly' ? 365 : 1;
  const periodCost = calculateCost.totalCost * multiplier;

  const getCostTrend = (cost: number) => {
    if (cost < 0.001) return { icon: TrendingDown, color: 'text-green-600', label: 'Très économique' };
    if (cost < 0.01) return { icon: TrendingDown, color: 'text-green-500', label: 'Économique' };
    if (cost < 0.1) return { icon: Calculator, color: 'text-blue-500', label: 'Modéré' };
    return { icon: TrendingUp, color: 'text-orange-500', label: 'Élevé' };
  };

  const trend = getCostTrend(calculateCost.totalCost);
  const TrendIcon = trend.icon;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <DollarSign className="h-5 w-5" />
          Métriques de coût
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Modèle sélectionné:</span>
          <Badge variant="outline">{selectedModelData.name}</Badge>
        </div>

        <div className="grid grid-cols-2 gap-4 p-4 bg-muted/50 rounded-lg">
          <div className="text-center">
            <div className="text-xs text-muted-foreground">Prix entrée</div>
            <div className="font-semibold">${calculateCost.pricing.inputPrice.toFixed(2)}/1M</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-muted-foreground">Prix sortie</div>
            <div className="font-semibold">${calculateCost.pricing.outputPrice.toFixed(2)}/1M</div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm">Coût tokens d'entrée:</span>
            <span>${calculateCost.inputCost.toFixed(6)}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm">Coût tokens de sortie:</span>
            <span>${calculateCost.outputCost.toFixed(6)}</span>
          </div>
          
          <div className="flex justify-between items-center font-semibold text-lg border-t pt-3">
            <span>Coût total:</span>
            <div className="flex items-center gap-2">
              <TrendIcon className={`h-4 w-4 ${trend.color}`} />
              <span className="text-primary">${calculateCost.totalCost.toFixed(6)}</span>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Badge variant="secondary" className={trend.color}>
              {trend.label}
            </Badge>
          </div>

          {usageType !== 'single' && (
            <div className="flex justify-between items-center text-lg font-bold border-t pt-3 bg-primary/5 px-3 py-2 rounded-lg">
              <span>Coût {usageType === 'daily' ? 'quotidien' : usageType === 'monthly' ? 'mensuel' : 'annuel'}:</span>
              <span className="text-primary">${periodCost.toFixed(4)}</span>
            </div>
          )}
        </div>

        {selectedModelData && (
          <div className="mt-4 p-3 bg-muted rounded-lg">
            <h4 className="font-medium mb-2">Fonctionnalités:</h4>
            <div className="flex flex-wrap gap-2">
              {selectedModelData.features.map((feature: string, index: number) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-primary/10 text-primary text-xs"
                >
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CostMetrics;
