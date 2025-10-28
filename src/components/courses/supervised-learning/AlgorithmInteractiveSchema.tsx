
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Play, Pause, RotateCcw, Brain, TrendingUp, TreePine, Network } from 'lucide-react';

interface AlgorithmStep {
  id: string;
  title: string;
  description: string;
  visualization: string;
  performance: number;
  complexity: 'Faible' | 'Moyenne' | 'Élevée';
  dataRequirement: 'Peu' | 'Modéré' | 'Beaucoup';
}

const algorithms: Record<string, AlgorithmStep[]> = {
  'regression-lineaire': [
    {
      id: 'step1',
      title: 'Initialisation',
      description: 'Création d\'une ligne aléatoire dans l\'espace des données',
      visualization: 'Ligne droite traversant les points de données',
      performance: 20,
      complexity: 'Faible',
      dataRequirement: 'Peu'
    },
    {
      id: 'step2', 
      title: 'Calcul de l\'erreur',
      description: 'Mesure de la distance entre les points et la ligne',
      visualization: 'Lignes verticales montrant les erreurs',
      performance: 45,
      complexity: 'Faible',
      dataRequirement: 'Peu'
    },
    {
      id: 'step3',
      title: 'Ajustement',
      description: 'Modification de la pente et de l\'ordonnée pour réduire l\'erreur',
      visualization: 'Animation de la ligne qui se déplace',
      performance: 70,
      complexity: 'Faible',
      dataRequirement: 'Peu'
    },
    {
      id: 'step4',
      title: 'Convergence',
      description: 'La ligne trouve sa position optimale',
      visualization: 'Ligne stable au meilleur emplacement',
      performance: 95,
      complexity: 'Faible',
      dataRequirement: 'Peu'
    }
  ],
  'arbre-decision': [
    {
      id: 'step1',
      title: 'Racine',
      description: 'Choix de la première question la plus discriminante',
      visualization: 'Nœud racine avec la meilleure question',
      performance: 30,
      complexity: 'Moyenne',
      dataRequirement: 'Modéré'
    },
    {
      id: 'step2',
      title: 'Division',
      description: 'Séparation des données selon la réponse',
      visualization: 'Branches gauche et droite avec sous-groupes',
      performance: 55,
      complexity: 'Moyenne',
      dataRequirement: 'Modéré'
    },
    {
      id: 'step3',
      title: 'Récursion',
      description: 'Répétition du processus sur chaque branche',
      visualization: 'Arbre qui grandit avec nouvelles questions',
      performance: 80,
      complexity: 'Moyenne',
      dataRequirement: 'Modéré'
    },
    {
      id: 'step4',
      title: 'Élagage',
      description: 'Suppression des branches trop spécifiques',
      visualization: 'Arbre simplifié avec branches essentielles',
      performance: 85,
      complexity: 'Moyenne',
      dataRequirement: 'Modéré'
    }
  ],
  'reseau-neurones': [
    {
      id: 'step1',
      title: 'Initialisation',
      description: 'Poids aléatoires dans le réseau',
      visualization: 'Réseau avec connexions colorées aléatoirement',
      performance: 15,
      complexity: 'Élevée',
      dataRequirement: 'Beaucoup'
    },
    {
      id: 'step2',
      title: 'Propagation avant',
      description: 'Les données traversent le réseau',
      visualization: 'Animation des signaux traversant les couches',
      performance: 40,
      complexity: 'Élevée',
      dataRequirement: 'Beaucoup'
    },
    {
      id: 'step3',
      title: 'Rétropropagation',
      description: 'Ajustement des poids selon l\'erreur',
      visualization: 'Signaux d\'erreur remontant le réseau',
      performance: 75,
      complexity: 'Élevée',
      dataRequirement: 'Beaucoup'
    },
    {
      id: 'step4',
      title: 'Optimisation',
      description: 'Affinement des connexions importantes',
      visualization: 'Connexions importantes renforcées',
      performance: 92,
      complexity: 'Élevée',
      dataRequirement: 'Beaucoup'
    }
  ]
};

const AlgorithmInteractiveSchema: React.FC = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<string>('regression-lineaire');
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const currentAlgorithmSteps = algorithms[selectedAlgorithm];
  const currentStepData = currentAlgorithmSteps[currentStep];

  const algorithmIcons: Record<string, React.ReactNode> = {
    'regression-lineaire': <TrendingUp className="h-5 w-5" />,
    'arbre-decision': <TreePine className="h-5 w-5" />,
    'reseau-neurones': <Network className="h-5 w-5" />
  };

  const algorithmNames: Record<string, string> = {
    'regression-lineaire': 'Régression Linéaire',
    'arbre-decision': 'Arbre de Décision',
    'reseau-neurones': 'Réseau de Neurones'
  };

  const handlePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      return;
    }

    setIsPlaying(true);
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= currentAlgorithmSteps.length - 1) {
          setIsPlaying(false);
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 2000);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'Faible': return 'bg-green-500';
      case 'Moyenne': return 'bg-yellow-500';
      case 'Élevée': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getDataColor = (data: string) => {
    switch (data) {
      case 'Peu': return 'bg-green-500';
      case 'Modéré': return 'bg-yellow-500';
      case 'Beaucoup': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <Card className="border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-6 w-6 text-primary" />
          Algorithmes Stars - Simulation Interactive
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Découvrez comment fonctionnent les algorithmes d'apprentissage supervisé étape par étape
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Sélecteur d'algorithme */}
        <div className="flex flex-wrap gap-2">
          {Object.entries(algorithmNames).map(([key, name]) => (
            <Button
              key={key}
              variant={selectedAlgorithm === key ? "default" : "outline"}
              size="sm"
              onClick={() => {
                setSelectedAlgorithm(key);
                setCurrentStep(0);
                setIsPlaying(false);
              }}
              className="flex items-center gap-2"
            >
              {algorithmIcons[key]}
              {name}
            </Button>
          ))}
        </div>

        {/* Contrôles */}
        <div className="flex items-center gap-4">
          <Button
            onClick={handlePlay}
            size="sm"
            className="flex items-center gap-2"
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            {isPlaying ? 'Pause' : 'Démarrer'}
          </Button>
          <Button onClick={handleReset} size="sm" variant="outline">
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>
          <div className="text-sm text-muted-foreground">
            Étape {currentStep + 1} / {currentAlgorithmSteps.length}
          </div>
        </div>

        {/* Progression */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Progression de l'apprentissage</span>
            <span className="text-sm text-muted-foreground">{currentStepData.performance}%</span>
          </div>
          <Progress value={currentStepData.performance} className="h-2" />
        </div>

        {/* Étape actuelle */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Badge variant="secondary">Étape {currentStep + 1}</Badge>
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200">
                {currentStepData.title}
              </h3>
            </div>
            
            <p className="text-blue-700 dark:text-blue-300">
              {currentStepData.description}
            </p>
            
            <div className="bg-white dark:bg-blue-900/50 p-4 rounded border border-blue-200 dark:border-blue-700">
              <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <strong>Visualisation :</strong> {currentStepData.visualization}
              </div>
            </div>
          </div>
        </div>

        {/* Caractéristiques de l'algorithme */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-gray-900/50 p-4 rounded-lg border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Complexité</span>
              <div className={`w-3 h-3 rounded-full ${getComplexityColor(currentStepData.complexity)}`}></div>
            </div>
            <div className="text-lg font-semibold">{currentStepData.complexity}</div>
          </div>
          
          <div className="bg-white dark:bg-gray-900/50 p-4 rounded-lg border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Données Requises</span>
              <div className={`w-3 h-3 rounded-full ${getDataColor(currentStepData.dataRequirement)}`}></div>
            </div>
            <div className="text-lg font-semibold">{currentStepData.dataRequirement}</div>
          </div>
          
          <div className="bg-white dark:bg-gray-900/50 p-4 rounded-lg border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Performance</span>
              <div className="w-3 h-3 bg-primary rounded-full"></div>
            </div>
            <div className="text-lg font-semibold">{currentStepData.performance}%</div>
          </div>
        </div>

        {/* Timeline des étapes */}
        <div className="space-y-2">
          <h4 className="font-medium">Timeline du processus :</h4>
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {currentAlgorithmSteps.map((step, index) => (
              <div
                key={step.id}
                className={`flex-shrink-0 flex items-center gap-2 p-2 rounded-lg border cursor-pointer transition-colors ${
                  index === currentStep 
                    ? 'bg-primary text-primary-foreground border-primary' 
                    : index < currentStep 
                      ? 'bg-green-50 border-green-200 dark:bg-green-950/30 dark:border-green-800' 
                      : 'bg-gray-50 border-gray-200 dark:bg-gray-900/50 dark:border-gray-700'
                }`}
                onClick={() => setCurrentStep(index)}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  index === currentStep 
                    ? 'bg-primary-foreground text-primary' 
                    : index < currentStep 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-300 text-gray-600'
                }`}>
                  {index + 1}
                </div>
                <span className="text-sm font-medium whitespace-nowrap">{step.title}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AlgorithmInteractiveSchema;
