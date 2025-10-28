
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ConfigurationTab from './ConfigurationTab';
import PresetsTab from './PresetsTab';
import RecommendationsTab from './RecommendationsTab';

interface CalculatorTabsProps {
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

const CalculatorTabs: React.FC<CalculatorTabsProps> = ({
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
  const [activeTab, setActiveTab] = useState('configuration');

  const applyPreset = (preset: { input: number; output: number }) => {
    setInputTokens(preset.input);
    setOutputTokens(preset.output);
  };

  const applyQuickSelection = (providerId: string, modelId: string) => {
    setSelectedProvider(providerId);
    setSelectedModel(modelId);
  };

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="configuration">Configuration</TabsTrigger>
        <TabsTrigger value="presets">Presets</TabsTrigger>
        <TabsTrigger value="recommendations">Recommandations</TabsTrigger>
      </TabsList>

      <TabsContent value="configuration">
        <ConfigurationTab
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
      </TabsContent>

      <TabsContent value="presets">
        <PresetsTab applyPreset={applyPreset} />
      </TabsContent>

      <TabsContent value="recommendations">
        <RecommendationsTab applyQuickSelection={applyQuickSelection} />
      </TabsContent>
    </Tabs>
  );
};

export default CalculatorTabs;
