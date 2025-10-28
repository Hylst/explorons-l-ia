
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ProviderInfoCard from './ProviderInfoCard';
import { llmProvidersInfo, LLMProviderInfo } from './llmProvidersData';

interface LLMProviderSelectorProps {
  selectedProvider: string;
  onProviderSelect: (providerId: string) => void;
}

// Convert LLMProviderInfo to ProviderInfo format
const convertToProviderInfo = (llmProvider: LLMProviderInfo) => ({
  id: llmProvider.id,
  name: llmProvider.name,
  description: llmProvider.description,
  pricing: llmProvider.pricing,
  limits: llmProvider.limits,
  features: llmProvider.features,
  speed: llmProvider.speed as 'slow' | 'medium' | 'fast' | 'ultra-fast',
  reliability: llmProvider.reliability
});

// Speed mapping from French to English
const mapSpeed = (speed: string): 'slow' | 'medium' | 'fast' | 'ultra-fast' => {
  switch (speed) {
    case 'Très rapide': return 'ultra-fast';
    case 'Rapide': return 'fast';
    case 'Moyen': return 'medium';
    case 'Lent': return 'slow';
    default: return 'medium';
  }
};

const LLMProviderSelector: React.FC<LLMProviderSelectorProps> = ({
  selectedProvider,
  onProviderSelect
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Choisir un fournisseur LLM</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {llmProvidersInfo.map((provider) => (
            <ProviderInfoCard
              key={provider.id}
              provider={{
                ...convertToProviderInfo(provider),
                speed: mapSpeed(provider.speed)
              }}
              isSelected={selectedProvider === provider.id}
              onClick={() => onProviderSelect(provider.id)}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LLMProviderSelector;
