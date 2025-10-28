
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Area, AreaChart } from 'recharts';
import { Trash2, TrendingUp, Award, Download, Calculator, DollarSign, Clock, Zap, Star } from 'lucide-react';
import { aiProvidersData, getProviderById, getModelById } from './aiProvidersData';

interface CostCalculation {
  providerId: string;
  modelId: string;
  inputTokens: number;
  outputTokens: number;
  totalCost: number;
  inputCost: number;
  outputCost: number;
}

interface EnhancedCostComparisonProps {
  calculations: CostCalculation[];
  setCalculations: React.Dispatch<React.SetStateAction<CostCalculation[]>>;
}

const EnhancedCostComparison: React.FC<EnhancedCostComparisonProps> = ({ calculations, setCalculations }) => {
  const [chartType, setChartType] = useState<string>('bar');
  const [sortBy, setSortBy] = useState<string>('cost');
  const [timeProjection, setTimeProjection] = useState<string>('monthly');

  const removeCalculation = (index: number) => {
    setCalculations(prev => prev.filter((_, i) => i !== index));
  };

  const exportData = () => {
    const data = calculations.map(calc => {
      const provider = getProviderById(calc.providerId);
      const model = getModelById(calc.providerId, calc.modelId);
      return {
        Provider: provider?.name,
        Model: model?.name,
        InputTokens: calc.inputTokens,
        OutputTokens: calc.outputTokens,
        InputCost: calc.inputCost,
        OutputCost: calc.outputCost,
        TotalCost: calc.totalCost
      };
    });

    const csvContent = [
      Object.keys(data[0] || {}).join(','),
      ...data.map(row => Object.values(row).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cost-comparison.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  const chartData = calculations.map(calc => {
    const provider = getProviderById(calc.providerId);
    const model = getModelById(calc.providerId, calc.modelId);
    const multiplier = timeProjection === 'daily' ? 1 : timeProjection === 'monthly' ? 30 : 365;
    
    return {
      name: `${provider?.name} ${model?.name}`,
      shortName: model?.name || '',
      cost: calc.totalCost * multiplier,
      inputCost: calc.inputCost * multiplier,
      outputCost: calc.outputCost * multiplier,
      provider: provider?.name,
      category: model?.category,
      speed: model?.speed,
      quality: model?.quality
    };
  });

  const sortedData = [...chartData].sort((a, b) => {
    switch (sortBy) {
      case 'cost': return a.cost - b.cost;
      case 'name': return a.name.localeCompare(b.name);
      case 'provider': return (a.provider || '').localeCompare(b.provider || '');
      default: return 0;
    }
  });

  const projectionData = calculations.map(calc => {
    const provider = getProviderById(calc.providerId);
    const model = getModelById(calc.providerId, calc.modelId);
    
    return {
      name: `${provider?.name} ${model?.name}`,
      daily: calc.totalCost,
      weekly: calc.totalCost * 7,
      monthly: calc.totalCost * 30,
      yearly: calc.totalCost * 365
    };
  });

  const cheapestOption = calculations.reduce((prev, current) => 
    (prev.totalCost < current.totalCost) ? prev : current
  , calculations[0]);

  const mostExpensive = calculations.reduce((prev, current) => 
    (prev.totalCost > current.totalCost) ? prev : current
  , calculations[0]);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658', '#8dd1e1'];

  if (calculations.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Comparaison avancée des coûts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">
            <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Aucun calcul à comparer pour le moment.</p>
            <p className="text-sm mt-2">Utilisez l'onglet "Calculateur" pour ajouter des estimations.</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Comparaison avancée des coûts</span>
            <div className="flex gap-2">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cost">Trier par coût</SelectItem>
                  <SelectItem value="name">Trier par nom</SelectItem>
                  <SelectItem value="provider">Trier par fournisseur</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm" onClick={exportData}>
                <Download className="h-4 w-4 mr-2" />
                Exporter
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={chartType} onValueChange={setChartType}>
            <TabsList>
              <TabsTrigger value="bar">Barres</TabsTrigger>
              <TabsTrigger value="pie">Secteurs</TabsTrigger>
              <TabsTrigger value="projection">Projection</TabsTrigger>
            </TabsList>

            <TabsContent value="bar">
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Select value={timeProjection} onValueChange={setTimeProjection}>
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Par jour</SelectItem>
                      <SelectItem value="monthly">Par mois</SelectItem>
                      <SelectItem value="yearly">Par an</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={sortedData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="shortName" 
                      angle={-45} 
                      textAnchor="end" 
                      height={100}
                      fontSize={12}
                    />
                    <YAxis />
                    <Tooltip 
                      formatter={(value: number) => [`$${value.toFixed(4)}`, 'Coût']}
                      labelFormatter={(label) => `Modèle: ${label}`}
                    />
                    <Bar dataKey="inputCost" stackId="a" fill="#8884d8" name="Entrée" />
                    <Bar dataKey="outputCost" stackId="a" fill="#82ca9d" name="Sortie" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>

            <TabsContent value="pie">
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={sortedData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="cost"
                  >
                    {sortedData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: number) => [`$${value.toFixed(4)}`, 'Coût']} />
                </PieChart>
              </ResponsiveContainer>
            </TabsContent>

            <TabsContent value="projection">
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={projectionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} fontSize={12} />
                  <YAxis />
                  <Tooltip formatter={(value: number) => [`$${value.toFixed(2)}`, 'Coût']} />
                  <Area type="monotone" dataKey="daily" stackId="1" stroke="#8884d8" fill="#8884d8" />
                  <Area type="monotone" dataKey="weekly" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                  <Area type="monotone" dataKey="monthly" stackId="1" stroke="#ffc658" fill="#ffc658" />
                  <Area type="monotone" dataKey="yearly" stackId="1" stroke="#ff7c7c" fill="#ff7c7c" />
                </AreaChart>
              </ResponsiveContainer>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {cheapestOption && mostExpensive && calculations.length > 1 && (
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="border-green-200 bg-green-50/50">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-green-700 text-sm">
                <Award className="h-4 w-4" />
                Plus économique
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="font-medium text-sm">
                {getProviderById(cheapestOption.providerId)?.name} - {getModelById(cheapestOption.providerId, cheapestOption.modelId)?.name}
              </p>
              <p className="text-xl font-bold text-green-600">
                ${cheapestOption.totalCost.toFixed(4)}
              </p>
              {mostExpensive.totalCost > cheapestOption.totalCost && (
                <p className="text-xs text-green-600">
                  Économie: ${(mostExpensive.totalCost - cheapestOption.totalCost).toFixed(4)} 
                  ({(((mostExpensive.totalCost - cheapestOption.totalCost) / mostExpensive.totalCost) * 100).toFixed(1)}%)
                </p>
              )}
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-red-700 text-sm">
                Plus coûteux
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="font-medium text-sm">
                {getProviderById(mostExpensive.providerId)?.name} - {getModelById(mostExpensive.providerId, mostExpensive.modelId)?.name}
              </p>
              <p className="text-xl font-bold text-red-600">
                ${mostExpensive.totalCost.toFixed(4)}
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50/50">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-blue-700 text-sm">
                <Calculator className="h-4 w-4" />
                Moyenne
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="font-medium text-sm">
                Coût moyen par requête
              </p>
              <p className="text-xl font-bold text-blue-600">
                ${(calculations.reduce((sum, calc) => sum + calc.totalCost, 0) / calculations.length).toFixed(4)}
              </p>
              <p className="text-xs text-blue-600">
                Sur {calculations.length} modèle{calculations.length > 1 ? 's' : ''}
              </p>
            </CardContent>
          </Card>
        </div>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Détails des calculs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {calculations.map((calc, index) => {
              const provider = getProviderById(calc.providerId);
              const model = getModelById(calc.providerId, calc.modelId);
              
              return (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">{provider?.name} - {model?.name}</span>
                      {model?.recommended && <Star className="h-3 w-3 text-yellow-500" />}
                      <Badge variant="outline" className="text-xs">
                        {model?.category}
                      </Badge>
                      {model?.speed && (
                        <Badge variant="secondary" className="text-xs flex items-center gap-1">
                          {model.speed === 'très-rapide' && <Zap className="h-3 w-3" />}
                          {model.speed === 'rapide' && <Clock className="h-3 w-3" />}
                          {model.speed}
                        </Badge>
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {calc.inputTokens.toLocaleString()} tokens d'entrée, {calc.outputTokens.toLocaleString()} tokens de sortie
                    </div>
                    <div className="text-sm">
                      Entrée: ${calc.inputCost.toFixed(4)} | Sortie: ${calc.outputCost.toFixed(4)}
                    </div>
                    {model?.features && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {model.features.slice(0, 3).map((feature: string, idx: number) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                        {model.features.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{model.features.length - 3}
                          </Badge>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="font-bold text-lg">${calc.totalCost.toFixed(4)}</div>
                      <div className="text-xs text-muted-foreground">par requête</div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeCalculation(index)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EnhancedCostComparison;
