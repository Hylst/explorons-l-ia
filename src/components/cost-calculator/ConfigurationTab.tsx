
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Plus, Star } from 'lucide-react';
import { aiProvidersData, getModelCategories } from './aiProvidersData';

interface ConfigurationTabProps {
  selectedProvider: string;
  setSelectedProvider: (value: string) => void;
  selectedModel: string;
  setSelectedModel: (value: string) => void;
  inputTokens: number;
  setInputTokens: (value: number) => void;
  outputTokens: number;
  setOutputTokens: (value: number) => void;
  usageType: string;
  setUsageType: (value: string) => void;
  selectedProviderData: any;
  addToComparison: () => void;
}

const ConfigurationTab: React.FC<ConfigurationTabProps> = ({
  selectedProvider,
  setSelectedProvider,
  selectedModel,
  setSelectedModel,
  inputTokens,
  setInputTokens,
  outputTokens,
  setOutputTokens,
  usageType,
  setUsageType,
  selectedProviderData,
  addToComparison
}) => {
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const categories = getModelCategories();
  const filteredModels = selectedProviderData?.models?.filter((model: any) => {
    if (categoryFilter === 'all') return true;
    return model.category === categoryFilter;
  }) || [];

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="provider">Fournisseur IA</Label>
        <Select value={selectedProvider} onValueChange={setSelectedProvider}>
          <SelectTrigger>
            <SelectValue placeholder="Sélectionner un fournisseur" />
          </SelectTrigger>
          <SelectContent>
            {aiProvidersData.map((provider) => (
              <SelectItem key={provider.id} value={provider.id}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>{provider.name}</span>
                  <Badge variant="outline" className="text-xs">
                    {provider.region}
                  </Badge>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="category-filter">Filtrer par catégorie</Label>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Toutes les catégories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="model">Modèle</Label>
        <Select value={selectedModel} onValueChange={setSelectedModel}>
          <SelectTrigger>
            <SelectValue placeholder="Sélectionner un modèle" />
          </SelectTrigger>
          <SelectContent>
            {filteredModels.map((model: any) => (
              <SelectItem key={model.id} value={model.id}>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <span>{model.name}</span>
                    {model.recommended && <Star className="h-3 w-3 text-yellow-500" />}
                    <Badge variant="outline" className="text-xs">
                      {model.speed}
                    </Badge>
                  </div>
                  <span className="text-xs text-muted-foreground ml-2">
                    {model.contextLength?.toLocaleString()} tokens
                  </span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="input-tokens">Tokens d'entrée</Label>
          <Input
            id="input-tokens"
            type="number"
            value={inputTokens}
            onChange={(e) => setInputTokens(Number(e.target.value))}
            placeholder="1000"
            min="1"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="output-tokens">Tokens de sortie</Label>
          <Input
            id="output-tokens"
            type="number"
            value={outputTokens}
            onChange={(e) => setOutputTokens(Number(e.target.value))}
            placeholder="500"
            min="1"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="usage-type">Type d'usage</Label>
        <Select value={usageType} onValueChange={setUsageType}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="single">Requête unique</SelectItem>
            <SelectItem value="daily">Usage quotidien</SelectItem>
            <SelectItem value="monthly">Usage mensuel</SelectItem>
            <SelectItem value="yearly">Usage annuel</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button onClick={addToComparison} className="w-full" size="sm">
        <Plus className="h-4 w-4 mr-2" />
        Ajouter à la comparaison
      </Button>
    </div>
  );
};

export default ConfigurationTab;
