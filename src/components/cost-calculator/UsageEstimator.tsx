
import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Calculator, Users, MessageSquare, FileText, TrendingUp } from 'lucide-react';

interface UsageScenario {
  name: string;
  description: string;
  avgInputTokens: number;
  avgOutputTokens: number;
  icon: React.ReactNode;
}

const usageScenarios: UsageScenario[] = [
  {
    name: 'Chatbot service client',
    description: 'Réponses automatiques aux questions clients',
    avgInputTokens: 150,
    avgOutputTokens: 200,
    icon: <MessageSquare className="h-5 w-5" />
  },
  {
    name: 'Génération de contenu',
    description: 'Articles de blog, descriptions produits',
    avgInputTokens: 100,
    avgOutputTokens: 800,
    icon: <FileText className="h-5 w-5" />
  },
  {
    name: 'Assistant de code',
    description: 'Génération et révision de code',
    avgInputTokens: 300,
    avgOutputTokens: 400,
    icon: <Calculator className="h-5 w-5" />
  },
  {
    name: 'Analyse de documents',
    description: 'Résumés et extraction d\'informations',
    avgInputTokens: 2000,
    avgOutputTokens: 300,
    icon: <FileText className="h-5 w-5" />
  }
];

const UsageEstimator: React.FC = () => {
  const [scenario, setScenario] = useState<string>('chatbot');
  const [usersCount, setUsersCount] = useState<number>(100);
  const [requestsPerUser, setRequestsPerUser] = useState<number[]>([10]);
  const [customInputTokens, setCustomInputTokens] = useState<number>(0);
  const [customOutputTokens, setCustomOutputTokens] = useState<number>(0);
  const [useCustom, setUseCustom] = useState<boolean>(false);

  const selectedScenario = useMemo(() => {
    return usageScenarios.find(s => s.name.toLowerCase().replace(/\s+/g, '-') === scenario) || usageScenarios[0];
  }, [scenario]);

  const calculations = useMemo(() => {
    const inputTokens = useCustom ? customInputTokens : selectedScenario.avgInputTokens;
    const outputTokens = useCustom ? customOutputTokens : selectedScenario.avgOutputTokens;
    const totalRequests = usersCount * requestsPerUser[0];
    const totalInputTokens = totalRequests * inputTokens;
    const totalOutputTokens = totalRequests * outputTokens;

    // Prix moyens pour différents fournisseurs (en $ par 1M tokens)
    const providers = [
      { name: 'GPT-4o Mini', inputPrice: 0.15, outputPrice: 0.60 },
      { name: 'GPT-3.5 Turbo', inputPrice: 0.50, outputPrice: 1.50 },
      { name: 'Claude 3 Haiku', inputPrice: 0.25, outputPrice: 1.25 },
      { name: 'Gemini Flash', inputPrice: 0.075, outputPrice: 0.30 },
      { name: 'Mistral Small', inputPrice: 0.20, outputPrice: 0.60 }
    ];

    return providers.map(provider => {
      const inputCost = (totalInputTokens / 1000000) * provider.inputPrice;
      const outputCost = (totalOutputTokens / 1000000) * provider.outputPrice;
      const totalCost = inputCost + outputCost;

      return {
        provider: provider.name,
        daily: totalCost,
        monthly: totalCost * 30,
        yearly: totalCost * 365,
        inputCost,
        outputCost
      };
    });
  }, [selectedScenario, usersCount, requestsPerUser, customInputTokens, customOutputTokens, useCustom]);

  const chartData = calculations.map(calc => ({
    name: calc.provider,
    daily: calc.daily,
    monthly: calc.monthly,
    yearly: calc.yearly
  }));

  return (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Configuration du scénario
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Type d'usage</Label>
              <Select value={scenario} onValueChange={setScenario}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {usageScenarios.map((s) => (
                    <SelectItem 
                      key={s.name.toLowerCase().replace(/\s+/g, '-')} 
                      value={s.name.toLowerCase().replace(/\s+/g, '-')}
                    >
                      <div className="flex items-center gap-2">
                        {s.icon}
                        {s.name}
                      </div>
                    </SelectItem>
                  ))}
                  <SelectItem value="custom">
                    Personnalisé
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {scenario !== 'custom' && (
              <div className="p-3 bg-muted rounded-lg">
                <div className="flex items-start gap-3">
                  {selectedScenario.icon}
                  <div>
                    <h4 className="font-medium">{selectedScenario.name}</h4>
                    <p className="text-sm text-muted-foreground">{selectedScenario.description}</p>
                    <div className="text-xs mt-2 space-y-1">
                      <div>Tokens d'entrée moyens: {selectedScenario.avgInputTokens}</div>
                      <div>Tokens de sortie moyens: {selectedScenario.avgOutputTokens}</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {scenario === 'custom' && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="custom-input">Tokens d'entrée</Label>
                    <Input
                      id="custom-input"
                      type="number"
                      value={customInputTokens}
                      onChange={(e) => {
                        setCustomInputTokens(Number(e.target.value));
                        setUseCustom(true);
                      }}
                      placeholder="Nombre de tokens"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="custom-output">Tokens de sortie</Label>
                    <Input
                      id="custom-output"
                      type="number"
                      value={customOutputTokens}
                      onChange={(e) => {
                        setCustomOutputTokens(Number(e.target.value));
                        setUseCustom(true);
                      }}
                      placeholder="Nombre de tokens"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="users-count">Nombre d'utilisateurs</Label>
              <Input
                id="users-count"
                type="number"
                value={usersCount}
                onChange={(e) => setUsersCount(Number(e.target.value))}
                placeholder="100"
              />
            </div>

            <div className="space-y-2">
              <Label>Requêtes par utilisateur par jour: {requestsPerUser[0]}</Label>
              <Slider
                value={requestsPerUser}
                onValueChange={setRequestsPerUser}
                max={100}
                min={1}
                step={1}
                className="w-full"
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Résumé d'usage
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Utilisateurs:</span>
                <span className="font-medium">{usersCount.toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Requêtes par utilisateur/jour:</span>
                <span className="font-medium">{requestsPerUser[0]}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Total requêtes/jour:</span>
                <span className="font-medium">{(usersCount * requestsPerUser[0]).toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Total requêtes/mois:</span>
                <span className="font-medium">{(usersCount * requestsPerUser[0] * 30).toLocaleString()}</span>
              </div>
            </div>

            <div className="border-t pt-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Tokens d'entrée/jour:</span>
                <span className="font-medium">
                  {((useCustom ? customInputTokens : selectedScenario.avgInputTokens) * usersCount * requestsPerUser[0]).toLocaleString()}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Tokens de sortie/jour:</span>
                <span className="font-medium">
                  {((useCustom ? customOutputTokens : selectedScenario.avgOutputTokens) * usersCount * requestsPerUser[0]).toLocaleString()}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Comparaison des coûts par fournisseur</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip 
                formatter={(value: number, name: string) => [
                  `$${value.toFixed(2)}`, 
                  name === 'daily' ? 'Par jour' : name === 'monthly' ? 'Par mois' : 'Par an'
                ]} 
              />
              <Bar dataKey="daily" fill="#8884d8" name="daily" />
              <Bar dataKey="monthly" fill="#82ca9d" name="monthly" />
              <Bar dataKey="yearly" fill="#ffc658" name="yearly" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-3 gap-4">
        {calculations.slice(0, 3).map((calc, index) => (
          <Card key={index}>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{calc.provider}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Par jour:</span>
                <span className="font-medium">${calc.daily.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Par mois:</span>
                <span className="font-medium">${calc.monthly.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold border-t pt-2">
                <span>Par an:</span>
                <span className="text-primary">${calc.yearly.toFixed(2)}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UsageEstimator;
