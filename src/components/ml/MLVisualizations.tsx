
import React from 'react';
import SectionHeading from '../SectionHeading';
import {
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  LineChart,
  Line,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

// Données pour le graphique de performance des modèles
const modelPerformanceData = [
  { name: 'Linear Regression', accuracy: 65, complexity: 10, interpretability: 90 },
  { name: 'Decision Tree', accuracy: 75, complexity: 30, interpretability: 80 },
  { name: 'Random Forest', accuracy: 85, complexity: 60, interpretability: 50 },
  { name: 'SVM', accuracy: 80, complexity: 50, interpretability: 40 },
  { name: 'Neural Network', accuracy: 92, complexity: 95, interpretability: 20 },
];

// Données pour le graphique d'apprentissage
const learningCurveData = [
  { epoch: 1, training: 45, validation: 40 },
  { epoch: 2, training: 55, validation: 48 },
  { epoch: 3, training: 62, validation: 53 },
  { epoch: 4, training: 68, validation: 57 },
  { epoch: 5, training: 72, validation: 60 },
  { epoch: 6, training: 75, validation: 62 },
  { epoch: 7, training: 78, validation: 64 },
  { epoch: 8, training: 80, validation: 65 },
  { epoch: 9, training: 82, validation: 66 },
  { epoch: 10, training: 83, validation: 67 },
  { epoch: 11, training: 84, validation: 68 },
  { epoch: 12, training: 85, validation: 68 },
  { epoch: 13, training: 86, validation: 69 },
  { epoch: 14, training: 87, validation: 69 },
  { epoch: 15, training: 88, validation: 70 },
];

// Données pour le graphique de comparaison des approches d'apprentissage
const mlApproachComparisonData = [
  { name: 'Apprentissage supervisé', value: 40 },
  { name: 'Apprentissage non supervisé', value: 30 },
  { name: 'Apprentissage par renforcement', value: 20 },
  { name: 'Apprentissage semi-supervisé', value: 10 },
];

const COLORS = ['#8B5CF6', '#D946EF', '#F97316', '#0EA5E9'];

// Données pour le graphique de progression de précision des modèles dans le temps
const modelAccuracyProgressData = [
  { year: 2010, cnn: 60, rnn: 55, transformer: 0 },
  { year: 2012, cnn: 70, rnn: 60, transformer: 0 },
  { year: 2014, cnn: 78, rnn: 68, transformer: 0 },
  { year: 2016, cnn: 85, rnn: 75, transformer: 0 },
  { year: 2017, cnn: 88, rnn: 78, transformer: 60 },
  { year: 2018, cnn: 90, rnn: 80, transformer: 75 },
  { year: 2019, cnn: 92, rnn: 82, transformer: 85 },
  { year: 2020, cnn: 93, rnn: 83, transformer: 90 },
  { year: 2021, cnn: 94, rnn: 84, transformer: 92 },
  { year: 2022, cnn: 95, rnn: 85, transformer: 94 },
  { year: 2023, cnn: 96, rnn: 86, transformer: 96 },
];

/**
 * Composant affichant des visualisations pour illustrer les concepts de Machine Learning
 * @returns {JSX.Element} Le composant MLVisualizations
 */
const MLVisualizations = () => {
  return (
    <section id="ml-visualizations-charts" className="section-container py-16">
      <SectionHeading
        pretitle="Visualisations"
        title="Illustrating Machine Learning Concepts"
        description="Visualisations interactives pour mieux comprendre les principes et performances des différents algorithmes et approches de machine learning."
        center
      />

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Graphique 1: Courbe d'apprentissage */}
        <div className="glass-card p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Courbe d'apprentissage</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Évolution de la performance d'un modèle au fur et à mesure de son entraînement.
            On observe généralement une amélioration rapide suivie d'un plateau.
          </p>
          
          <div className="h-[300px] w-full">
            <ChartContainer 
              config={{
                training: { theme: { light: '#8B5CF6', dark: '#A78BFA' }, label: 'Données d\'entraînement' },
                validation: { theme: { light: '#F97316', dark: '#FB923C' }, label: 'Données de validation' }
              }}
            >
              <LineChart data={learningCurveData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis 
                  dataKey="epoch" 
                  label={{ value: 'Époque d\'entraînement', position: 'insideBottom', offset: -5 }} 
                />
                <YAxis 
                  label={{ value: 'Précision (%)', angle: -90, position: 'insideLeft' }} 
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend verticalAlign="top" height={36} />
                <Line 
                  type="monotone" 
                  dataKey="training" 
                  stroke="var(--color-training)" 
                  strokeWidth={2} 
                  dot={{ r: 3 }} 
                  name="Entraînement"
                />
                <Line 
                  type="monotone" 
                  dataKey="validation" 
                  stroke="var(--color-validation)" 
                  strokeWidth={2} 
                  dot={{ r: 3 }} 
                  name="Validation"
                />
              </LineChart>
            </ChartContainer>
          </div>
          <div className="mt-4 text-xs text-muted-foreground">
            <p>
              <strong>Note:</strong> Le surapprentissage (overfitting) se produit lorsque la précision sur les données d'entraînement 
              continue d'augmenter tandis que celle sur les données de validation stagne ou diminue.
            </p>
          </div>
        </div>

        {/* Graphique 2: Comparaison des performances des modèles */}
        <div className="glass-card p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Comparaison des algorithmes</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Évaluation comparative des principaux algorithmes de machine learning selon différents critères: 
            précision, complexité et interprétabilité.
          </p>
          
          <div className="h-[300px] w-full">
            <ChartContainer 
              config={{
                accuracy: { theme: { light: '#8B5CF6', dark: '#A78BFA' }, label: 'Précision' },
                complexity: { theme: { light: '#F97316', dark: '#FB923C' }, label: 'Complexité' },
                interpretability: { theme: { light: '#0EA5E9', dark: '#38BDF8' }, label: 'Interprétabilité' }
              }}
            >
              <BarChart 
                data={modelPerformanceData}
                layout="vertical" 
                barGap={4}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} horizontal={false} />
                <XAxis type="number" domain={[0, 100]} />
                <YAxis 
                  type="category" 
                  width={120}
                  dataKey="name"
                  tick={{ fontSize: 12 }}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Legend />
                <Bar 
                  dataKey="accuracy" 
                  fill="var(--color-accuracy)" 
                  name="Précision"
                />
                <Bar 
                  dataKey="complexity" 
                  fill="var(--color-complexity)" 
                  name="Complexité"
                />
                <Bar 
                  dataKey="interpretability" 
                  fill="var(--color-interpretability)" 
                  name="Interprétabilité"
                />
              </BarChart>
            </ChartContainer>
          </div>
          <div className="mt-4 text-xs text-muted-foreground">
            <p>
              <strong>Observation:</strong> Les modèles plus complexes comme les réseaux de neurones offrent généralement 
              une meilleure précision au détriment de l'interprétabilité.
            </p>
          </div>
        </div>

        {/* Graphique 3: Distribution des approches ML */}
        <div className="glass-card p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Répartition des approches d'apprentissage</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Distribution actuelle des différentes approches d'apprentissage automatique 
            dans les applications industrielles et la recherche.
          </p>
          
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={mlApproachComparisonData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {mlApproachComparisonData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 text-xs text-muted-foreground">
            <p>
              <strong>Tendance:</strong> L'apprentissage supervisé reste l'approche dominante, mais on observe une croissance 
              significative de l'apprentissage par renforcement ces dernières années.
            </p>
          </div>
        </div>

        {/* Graphique 4: Évolution des performances des modèles */}
        <div className="glass-card p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Évolution des architectures</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Progression de la précision des différentes architectures de réseaux de neurones
            au fil des années.
          </p>
          
          <div className="h-[300px] w-full">
            <ChartContainer 
              config={{
                cnn: { theme: { light: '#8B5CF6', dark: '#A78BFA' }, label: 'CNN' },
                rnn: { theme: { light: '#0EA5E9', dark: '#38BDF8' }, label: 'RNN' },
                transformer: { theme: { light: '#F97316', dark: '#FB923C' }, label: 'Transformers' }
              }}
            >
              <AreaChart
                data={modelAccuracyProgressData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorCnn" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.2}/>
                  </linearGradient>
                  <linearGradient id="colorRnn" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0.2}/>
                  </linearGradient>
                  <linearGradient id="colorTransformer" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F97316" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#F97316" stopOpacity={0.2}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="year" />
                <YAxis label={{ value: 'Précision (%)', angle: -90, position: 'insideLeft' }} />
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area 
                  type="monotone" 
                  dataKey="cnn" 
                  stroke="var(--color-cnn)" 
                  fillOpacity={0.3}
                  fill="url(#colorCnn)" 
                  name="CNN"
                />
                <Area 
                  type="monotone" 
                  dataKey="rnn" 
                  stroke="var(--color-rnn)" 
                  fillOpacity={0.3}
                  fill="url(#colorRnn)" 
                  name="RNN"
                />
                <Area 
                  type="monotone" 
                  dataKey="transformer" 
                  stroke="var(--color-transformer)" 
                  fillOpacity={0.3}
                  fill="url(#colorTransformer)" 
                  name="Transformers"
                />
              </AreaChart>
            </ChartContainer>
          </div>
          <div className="mt-4 text-xs text-muted-foreground">
            <p>
              <strong>Observation:</strong> L'émergence des architectures Transformer en 2017 a marqué un tournant dans 
              le développement des modèles d'IA, dépassant rapidement les performances des CNN et RNN traditionnels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MLVisualizations;
