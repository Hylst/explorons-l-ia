
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ProviderInfoCard from './ProviderInfoCard';
import { imageProvidersInfo } from './imageProvidersData';

interface ImageProviderSelectorProps {
  selectedProvider: string;
  onProviderSelect: (providerId: string) => void;
}

const ImageProviderSelector: React.FC<ImageProviderSelectorProps> = ({
  selectedProvider,
  onProviderSelect
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Choisir un fournisseur Text-to-Image</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {imageProvidersInfo.map((provider) => (
            <ProviderInfoCard
              key={provider.id}
              provider={provider}
              isSelected={selectedProvider === provider.id}
              onClick={() => onProviderSelect(provider.id)}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ImageProviderSelector;
