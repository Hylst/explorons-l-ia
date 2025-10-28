
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Area, AreaChart } from 'recharts';
import { TrendingUp, Target, Clock, Zap, Database } from 'lucide-react';

interface AlgorithmPerformance {
  name: string;
  accuracy: number;
  speed: number;
  interpretability: number;
  dataRequirement: number;
  complexity: number;
  color: string;
  description: string;
  bestFor: string[];
  limitations: string[];
}

const algorithms: AlgorithmPerformance[] = [
  {
    name: 'Régression Linéaire',
    accuracy: 75,
    speed: 95,
    interpretability: 95,
    dataRequirement: 30,
    complexity: 20,
    color: '#3B82F6',
    description: 'Simple et rapide, idéal pour les relations linéaires',
    bestFor: ['Relations linéaires', 'Baseline rapide', 'Interprétabilité'],
    limitations: ['Seulement linéaire', 'Sensible aux outliers']
  },
  {
    name: 'Arbre de Décision',
    accuracy: 80,
    speed: 85,
    interpretability: 90,
    dataRequirement: 40,
    complexity: 50,
    color: '#10B981',
    description: 'Très interprétable, gère bien les interactions',
    bestFor: ['Règles métier', 'Variables catégorielles', 'Interprétation'],
    limitations: ['Instable', 'Sur-apprentissage facile']
  },
  {
    name: 'Random Forest',
    accuracy: 88,
    speed: 70,
    interpretability: 60,
    dataRequirement: 60,
    complexity: 70,
    color: '#F59E0B',
    description: 'Très robuste et précis, peu de paramètres',
    bestFor: ['Données tabulaires', 'Robustesse', 'Performance'],
    limitations: ['Moins interprétable', 'Mémoire importante']
  },
  {
    name: 'SVM',
    accuracy: 85,
    speed: 50,
    interpretability: 40,
    dataRequirement: 70,
    complexity: 80,
    color: '#8B5CF6',
    description: 'Performant sur données complexes, fonctionne bien en haute dimension',
    bestFor: ['Haute dimension', 'Données complexes', 'Classification'],
    limitations: ['Lent', 'Difficile à interpréter', 'Paramètres sensibles']
  },
  {
    name: 'Réseau de Neurones',
    accuracy: 95,
    speed: 40,
    interpretability: 20,
    dataRequirement: 90,
    complexity: 95,
    color: '#EF4444',
    description: 'Très puissant mais complexe, nécessite beaucoup de données',
    bestFor: ['Données complexes', 'Images/Texte', 'Performance maximale'],
    limitations: ['Boîte noire', 'Beaucoup de données', 'Lent à entraîner']
  }
];

const learningCurveData = [
  { dataSize: 100, accuracy: 60, overfitting: 85 },
  { dataSize: 500, accuracy: 72, overfitting: 78 },
  { dataSize: 1000, accuracy: 80, overfitting: 75 },
  { dataSize: 2000, accuracy: 85, overfitting: 73 },
  { dataSize: 5000, accuracy: 88, overfitting: 70 },
  { dataSize: 10000, accuracy: 90, overfitting: 68 },
  { dataSize: 20000, accuracy: 91, overfitting: 67 }
];

const PerformanceVisualizer: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState<'accuracy' | 'speed' | 'interpretability'>('accuracy');
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<number>(0);
  const [showComparison, setShowComparison] = useState<boolean>(true);
  const [animationProgress, setAnimationProgress] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationProgress(prev => (prev + 1) % 100);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const currentAlgorithm = algorithms[selectedAlgorithm];

  const getMetricLabel = (metric: string) => {
    switch (metric) {
      case 'accuracy': return 'Précision';
      case 'speed': return 'Vitesse';
      case 'interpretability': return 'Interprétabilité';
      case 'dataRequirement': return 'Données Requises';
      case 'complexity': return 'Complexité';
      default: return metric;
    }
  };

  const getMetricIcon = (metric: string) => {
    switch (metric) {
      case 'accuracy': return <Target className="h-4 w-4" />;
      case 'speed': return <Zap className="h-4 w-4" />;
      case 'interpretability': return <TrendingUp className="h-4 w-4" />;
      case 'dataRequirement': return <Database className="h-4 w-4" />;
      case 'complexity': return <Clock className="h-4 w-4" />;
      default: return null;
    }
  };

  const chartData = algorithms.map(algo => ({
    name: algo.name.split(' ')[0], // Nom court pour le graphique
    [selectedMetric]: algo[selectedMetric],
    fullName: algo.name,
    color: algo.color
  }));

  return (
    <Card className="border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="text-2xl">📊</div>
          Comparateur de Performance des Algorithmes
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Comparez visuellement les forces et faiblesses de chaque algorithme
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Sélecteurs */}
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-medium self-center">Métrique :</span>
            {(['accuracy', 'speed', 'interpretability'] as const).map((metric) => (
              <Button
                key={metric}
                variant={selectedMetric === metric ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedMetric(metric)}
                className="flex items-center gap-2"
              >
                {getMetricIcon(metric)}
                {getMetricLabel(metric)}
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              onClick={() => setShowComparison(!showComparison)}
              size="sm"
              variant="outline"
            >
              {showComparison ? 'Vue détaillée' : 'Vue comparative'}
            </Button>
          </div>
        </div>

        {showComparison ? (
          /* Vue comparative */
          <div className="space-y-6">
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="name" 
                    tick={{ fontSize: 12 }}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis />
                  <Tooltip 
                    formatter={(value, name, props) => [
                      `${value}%`, 
                      getMetricLabel(selectedMetric),
                      props.payload.fullName
                    ]}
                  />
                  <Bar 
                    dataKey={selectedMetric} 
                    fill="#8884d8"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Tableau comparatif */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Algorithme</th>
                    <th className="text-center p-2">Précision</th>
                    <th className="text-center p-2">Vitesse</th>
                    <th className="text-center p-2">Interprétabilité</th>
                    <th className="text-center p-2">Données</th>
                    <th className="text-center p-2">Complexité</th>
                  </tr>
                </thead>
                <tbody>
                  {algorithms.map((algo, index) => (
                    <tr 
                      key={algo.name} 
                      className={`border-b hover:bg-muted/50 cursor-pointer ${
                        selectedAlgorithm === index ? 'bg-primary/10' : ''
                      }`}
                      onClick={() => setSelectedAlgorithm(index)}
                    >
                      <td className="p-2 font-medium">{algo.name}</td>
                      <td className="text-center p-2">
                        <div className="flex items-center justify-center gap-2">
                          <Progress value={algo.accuracy} className="w-16 h-2" />
                          <span className="text-xs">{algo.accuracy}%</span>
                        </div>
                      </td>
                      <td className="text-center p-2">
                        <div className="flex items-center justify-center gap-2">
                          <Progress value={algo.speed} className="w-16 h-2" />
                          <span className="text-xs">{algo.speed}%</span>
                        </div>
                      </td>
                      <td className="text-center p-2">
                        <div className="flex items-center justify-center gap-2">
                          <Progress value={algo.interpretability} className="w-16 h-2" />
                          <span className="text-xs">{algo.interpretability}%</span>
                        </div>
                      </td>
                      <td className="text-center p-2">
                        <Badge variant={algo.dataRequirement > 70 ? "destructive" : algo.dataRequirement > 40 ? "secondary" : "default"}>
                          {algo.dataRequirement > 70 ? 'Beaucoup' : algo.dataRequirement > 40 ? 'Modéré' : 'Peu'}
                        </Badge>
                      </td>
                      <td className="text-center p-2">
                        <Badge variant={algo.complexity > 70 ? "destructive" : algo.complexity > 40 ? "secondary" : "default"}>
                          {algo.complexity > 70 ? 'Élevée' : algo.complexity > 40 ? 'Moyenne' : 'Faible'}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          /* Vue détaillée d'un algorithme */
          <div className="space-y-6">
            {/* Sélecteur d'algorithme */}
            <div className="flex flex-wrap gap-2">
              {algorithms.map((algo, index) => (
                <Button
                  key={algo.name}
                  variant={selectedAlgorithm === index ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedAlgorithm(index)}
                  style={selectedAlgorithm === index ? { backgroundColor: algo.color } : {}}
                >
                  {algo.name}
                </Button>
              ))}
            </div>

            {/* Détails de l'algorithme sélectionné */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-2">
                    {currentAlgorithm.name}
                  </h3>
                  <p className="text-blue-700 dark:text-blue-300">
                    {currentAlgorithm.description}
                  </p>
                </div>

                {/* Métriques en radar */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold">Caractéristiques :</h4>
                    {Object.entries({
                      accuracy: 'Précision',
                      speed: 'Vitesse',
                      interpretability: 'Interprétabilité',
                      dataRequirement: 'Données Requises',
                      complexity: 'Complexité'
                    }).map(([key, label]) => (
                      <div key={key} className="space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium flex items-center gap-2">
                            {getMetricIcon(key)}
                            {label}
                          </span>
                          <span className="text-sm">{currentAlgorithm[key as keyof AlgorithmPerformance]}%</span>
                        </div>
                        <Progress 
                          value={currentAlgorithm[key as keyof AlgorithmPerformance] as number} 
                          className="h-2" 
                        />
                      </div>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">✅ Idéal pour :</h4>
                      <ul className="text-sm space-y-1">
                        {currentAlgorithm.bestFor.map((item, index) => (
                          <li key={index} className="text-green-600">• {item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">⚠️ Limitations :</h4>
                      <ul className="text-sm space-y-1">
                        {currentAlgorithm.limitations.map((item, index) => (
                          <li key={index} className="text-red-600">• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Courbe d'apprentissage */}
        <div className="space-y-4">
          <h4 className="font-semibold">Impact de la Quantité de Données :</h4>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={learningCurveData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dataSize" tick={{ fontSize: 12 }} />
                <YAxis domain={[0, 100]} />
                <Tooltip 
                  formatter={(value, name) => [
                    `${value}%`, 
                    name === 'accuracy' ? 'Précision Validation' : 'Précision Entraînement'
                  ]}
                  labelFormatter={(label) => `${label} exemples`}
                />
                <Area 
                  type="monotone" 
                  dataKey="overfitting" 
                  stackId="1"
                  stroke="#EF4444" 
                  fill="#EF4444" 
                  fillOpacity={0.3}
                  name="overfitting"
                />
                <Area 
                  type="monotone" 
                  dataKey="accuracy" 
                  stackId="2"
                  stroke="#10B981" 
                  fill="#10B981" 
                  fillOpacity={0.3}
                  name="accuracy"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-muted-foreground">
            Cette courbe montre comment la performance s'améliore avec plus de données, 
            et comment l'écart entre entraînement et validation (sur-apprentissage) diminue.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PerformanceVisualizer;
