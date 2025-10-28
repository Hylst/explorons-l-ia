
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings } from 'lucide-react';
import CalculatorTabs from './CalculatorTabs';

interface CalculatorConfigurationProps {
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

const CalculatorConfiguration: React.FC<CalculatorConfigurationProps> = (props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="h-5 w-5" />
          Configuration avancée
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <CalculatorTabs {...props} />
      </CardContent>
    </Card>
  );
};

export default CalculatorConfiguration;
