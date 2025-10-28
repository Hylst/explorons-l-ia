
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Star, Clock } from 'lucide-react';
import { aiProvidersData, getRecommendedModels, getCheapestModels } from './aiProvidersData';

interface RecommendationsTabProps {
  applyQuickSelection: (providerId: string, modelId: string) => void;
}

const RecommendationsTab: React.FC<RecommendationsTabProps> = ({ applyQuickSelection }) => {
  const recommendedModels = getRecommendedModels();
  const cheapestModels = getCheapestModels(3);

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        <Label className="flex items-center gap-2">
          <Star className="h-4 w-4 text-yellow-500" />
          Modèles recommandés
        </Label>
        <div className="space-y-2">
          {recommendedModels.slice(0, 5).map((item, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => {
                const provider = aiProvidersData.find(p => p.name === item.provider);
                if (provider) applyQuickSelection(provider.id, item.model.id);
              }}
              className="justify-start w-full"
            >
              <Star className="h-3 w-3 mr-2 text-yellow-500" />
              <span className="text-sm">{item.provider} {item.model.name}</span>
              <Badge variant="secondary" className="ml-auto text-xs">
                {item.model.category}
              </Badge>
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <Label className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-green-500" />
          Plus économiques
        </Label>
        <div className="space-y-2">
          {cheapestModels.map((item, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => {
                const provider = aiProvidersData.find(p => p.name === item.provider);
                if (provider) applyQuickSelection(provider.id, item.model.id);
              }}
              className="justify-start w-full"
            >
              <Clock className="h-3 w-3 mr-2 text-green-500" />
              <span className="text-sm">{item.provider} {item.model.name}</span>
              <Badge variant="secondary" className="ml-auto text-xs">
                ${item.avgPrice.toFixed(2)}/1M avg
              </Badge>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendationsTab;
