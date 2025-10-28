
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Trash2, TrendingUp, Award } from 'lucide-react';
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

interface CostComparisonProps {
  calculations: CostCalculation[];
  setCalculations: React.Dispatch<React.SetStateAction<CostCalculation[]>>;
}

const CostComparison: React.FC<CostComparisonProps> = ({ calculations, setCalculations }) => {
  const removeCalculation = (index: number) => {
    setCalculations(prev => prev.filter((_, i) => i !== index));
  };

  const chartData = calculations.map(calc => {
    const provider = getProviderById(calc.providerId);
    const model = getModelById(calc.providerId, calc.modelId);
    return {
      name: `${provider?.name} ${model?.name}`,
      cost: calc.totalCost,
      inputCost: calc.inputCost,
      outputCost: calc.outputCost
    };
  });

  const cheapestOption = calculations.reduce((prev, current) => 
    (prev.totalCost < current.totalCost) ? prev : current
  , calculations[0]);

  const mostExpensive = calculations.reduce((prev, current) => 
    (prev.totalCost > current.totalCost) ? prev : current
  , calculations[0]);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

  if (calculations.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Comparaison des coûts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">
            <TrendingUp className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p>Aucun calcul à comparer pour le moment.</p>
            <p className="text-sm mt-2">Utilisez l'onglet "Calculateur" pour ajouter des estimations.</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Comparaison par coût total</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                <YAxis />
                <Tooltip formatter={(value: number) => [`$${value.toFixed(4)}`, 'Coût']} />
                <Bar dataKey="cost" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Répartition des coûts</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="cost"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => [`$${value.toFixed(4)}`, 'Coût']} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {cheapestOption && mostExpensive && calculations.length > 1 && (
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="border-green-200 bg-green-50/50">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-green-700">
                <Award className="h-5 w-5" />
                Option la plus économique
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="font-medium">
                  {getProviderById(cheapestOption.providerId)?.name} - {getModelById(cheapestOption.providerId, cheapestOption.modelId)?.name}
                </p>
                <p className="text-2xl font-bold text-green-600">
                  ${cheapestOption.totalCost.toFixed(4)}
                </p>
                {mostExpensive.totalCost > cheapestOption.totalCost && (
                  <p className="text-sm text-green-600">
                    Économie: ${(mostExpensive.totalCost - cheapestOption.totalCost).toFixed(4)} 
                    ({(((mostExpensive.totalCost - cheapestOption.totalCost) / mostExpensive.totalCost) * 100).toFixed(1)}%)
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-red-700">
                Option la plus chère
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="font-medium">
                  {getProviderById(mostExpensive.providerId)?.name} - {getModelById(mostExpensive.providerId, mostExpensive.modelId)?.name}
                </p>
                <p className="text-2xl font-bold text-red-600">
                  ${mostExpensive.totalCost.toFixed(4)}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Détails des calculs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {calculations.map((calc, index) => {
              const provider = getProviderById(calc.providerId);
              const model = getModelById(calc.providerId, calc.modelId);
              
              return (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="font-medium">
                      {provider?.name} - {model?.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {calc.inputTokens.toLocaleString()} tokens d'entrée, {calc.outputTokens.toLocaleString()} tokens de sortie
                    </div>
                    <div className="text-sm">
                      Entrée: ${calc.inputCost.toFixed(4)} | Sortie: ${calc.outputCost.toFixed(4)}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="font-bold text-lg">${calc.totalCost.toFixed(4)}</div>
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

export default CostComparison;
