import React, { useState, useMemo } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { aiProvidersData } from './aiProvidersData';
import CostCalculatorHeader from './CostCalculatorHeader';
import CalculatorConfiguration from './CalculatorConfiguration';
import CostMetrics from './CostMetrics';
import EnhancedCostComparison from './EnhancedCostComparison';
import UsageEstimator from './UsageEstimator';
import CostSaver from './CostSaver';

interface CostCalculation {
  providerId: string;
  modelId: string;
  inputTokens: number;
  outputTokens: number;
  totalCost: number;
  inputCost: number;
  outputCost: number;
}

const CostCalculator = () => {
  const [selectedProvider, setSelectedProvider] = useState<string>('openai');
  const [selectedModel, setSelectedModel] = useState<string>('gpt-4o-mini');
  const [inputTokens, setInputTokens] = useState<number>(1000);
  const [outputTokens, setOutputTokens] = useState<number>(500);
  const [usageType, setUsageType] = useState<string>('monthly');
  const [calculations, setCalculations] = useState<CostCalculation[]>([]);

  const selectedProviderData = useMemo(() => {
    return aiProvidersData.find(p => p.id === selectedProvider);
  }, [selectedProvider]);

  const selectedModelData = useMemo(() => {
    return selectedProviderData?.models.find(m => m.id === selectedModel);
  }, [selectedProviderData, selectedModel]);

  const calculateCost = useMemo(() => {
    if (!selectedModelData) return null;

    const pricing = selectedModelData.pricing[0];
    const inputCost = (inputTokens / 1000000) * pricing.inputPrice;
    const outputCost = (outputTokens / 1000000) * pricing.outputPrice;
    const totalCost = inputCost + outputCost;

    return {
      inputCost,
      outputCost,
      totalCost,
      pricing
    };
  }, [selectedModelData, inputTokens, outputTokens]);

  const currentCalculation = useMemo(() => {
    if (!calculateCost || !selectedProviderData) return null;
    
    return {
      provider: selectedProviderData.name,
      model: selectedModelData?.name || '',
      inputTokens,
      outputTokens,
      totalCost: calculateCost.totalCost,
      usageType
    };
  }, [calculateCost, selectedProviderData, selectedModelData, inputTokens, outputTokens, usageType]);

  const addToComparison = () => {
    if (!calculateCost || !selectedProviderData) return;

    const newCalculation: CostCalculation = {
      providerId: selectedProvider,
      modelId: selectedModel,
      inputTokens,
      outputTokens,
      totalCost: calculateCost.totalCost,
      inputCost: calculateCost.inputCost,
      outputCost: calculateCost.outputCost
    };

    setCalculations(prev => {
      const filtered = prev.filter(calc => 
        !(calc.providerId === selectedProvider && calc.modelId === selectedModel)
      );
      return [...filtered, newCalculation];
    });
  };

  return (
    <div className="space-y-6">
      <CostCalculatorHeader />
      
      <Tabs defaultValue="calculator" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="calculator">Calculateur</TabsTrigger>
          <TabsTrigger value="comparison">Comparaison avancée</TabsTrigger>
          <TabsTrigger value="estimator">Estimateur d'usage</TabsTrigger>
          <TabsTrigger value="history">Historique</TabsTrigger>
        </TabsList>

        <TabsContent value="calculator">
          <div className="grid lg:grid-cols-2 gap-6">
            <CalculatorConfiguration
              selectedProvider={selectedProvider}
              setSelectedProvider={setSelectedProvider}
              selectedModel={selectedModel}
              setSelectedModel={setSelectedModel}
              inputTokens={inputTokens}
              setInputTokens={setInputTokens}
              outputTokens={outputTokens}
              setOutputTokens={setOutputTokens}
              usageType={usageType}
              setUsageType={setUsageType}
              selectedProviderData={selectedProviderData}
              addToComparison={addToComparison}
            />

            <CostMetrics
              selectedModelData={selectedModelData}
              calculateCost={calculateCost}
              usageType={usageType}
            />
          </div>
        </TabsContent>

        <TabsContent value="comparison">
          <EnhancedCostComparison calculations={calculations} setCalculations={setCalculations} />
        </TabsContent>

        <TabsContent value="estimator">
          <UsageEstimator />
        </TabsContent>

        <TabsContent value="history">
          <CostSaver currentCalculation={currentCalculation} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CostCalculator;
