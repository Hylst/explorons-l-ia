
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Clock, AlertTriangle, Play, Pause } from 'lucide-react';

interface ProcessStep {
  id: string;
  title: string;
  description: string;
  details: string[];
  duration: string;
  difficulty: 'Facile' | 'Moyen' | 'Difficile';
  tools: string[];
  output: string;
  challenges: string[];
  tips: string[];
  status: 'pending' | 'in-progress' | 'completed';
}

const projectSteps: ProcessStep[] = [
  {
    id: 'problem-definition',
    title: '🎯 Définition du Problème',
    description: 'Identifier clairement l\'objectif et le type de prédiction souhaité',
    details: [
      'Analyser le besoin métier et les contraintes',
      'Définir les métriques de succès',
      'Choisir entre classification et régression',
      'Estimer la faisabilité technique'
    ],
    duration: '2-3 jours',
    difficulty: 'Moyen',
    tools: ['Cahier des charges', 'Interviews utilisateurs', 'Analyse concurrentielle'],
    output: 'Document de spécification du projet avec objectifs clairs',
    challenges: [
      'Objectifs flous ou changeants',
      'Attentes irréalistes des parties prenantes',
      'Contraintes techniques non identifiées'
    ],
    tips: [
      'Impliquer tous les stakeholders dès le début',
      'Définir des critères de succès mesurables',
      'Prévoir une phase de proof-of-concept'
    ],
    status: 'completed'
  },
  {
    id: 'data-collection',
    title: '📊 Collecte et Exploration des Données',
    description: 'Rassembler, nettoyer et explorer les données nécessaires',
    details: [
      'Identifier les sources de données disponibles',
      'Collecter et centraliser les données',
      'Analyser la qualité et la complétude',
      'Explorer les patterns et corrélations'
    ],
    duration: '1-2 semaines',
    difficulty: 'Difficile',
    tools: ['Python/Pandas', 'SQL', 'Jupyter Notebooks', 'Matplotlib/Seaborn'],
    output: 'Dataset nettoyé et rapport d\'exploration des données',
    challenges: [
      'Données manquantes ou incohérentes',
      'Sources disparates difficiles à harmoniser',
      'Volume de données insuffisant'
    ],
    tips: [
      'Commencer par un échantillon représentatif',
      'Documenter tous les choix de nettoyage',
      'Créer des visualisations pour comprendre les données'
    ],
    status: 'completed'
  },
  {
    id: 'feature-engineering',
    title: '⚙️ Ingénierie des Caractéristiques',
    description: 'Transformer et enrichir les données pour optimiser l\'apprentissage',
    details: [
      'Sélectionner les variables les plus pertinentes',
      'Créer de nouvelles variables dérivées',
      'Normaliser et standardiser les données',
      'Encoder les variables catégorielles'
    ],
    duration: '3-5 jours',
    difficulty: 'Moyen',
    tools: ['Scikit-learn', 'Feature-engine', 'PCA', 'Correlation analysis'],
    output: 'Jeu de données optimisé pour l\'entraînement',
    challenges: [
      'Curse of dimensionality avec trop de variables',
      'Fuite de données (data leakage)',
      'Sur-ingénierie des features'
    ],
    tips: [
      'Tester l\'impact de chaque transformation',
      'Garder une trace des transformations appliquées',
      'Valider que les features ont du sens métier'
    ],
    status: 'in-progress'
  },
  {
    id: 'model-selection',
    title: '🧠 Sélection et Entraînement du Modèle',
    description: 'Choisir l\'algorithme optimal et l\'entraîner sur les données',
    details: [
      'Comparer plusieurs algorithmes candidats',
      'Optimiser les hyperparamètres',
      'Entraîner le modèle sur les données d\'entraînement',
      'Valider les performances sur données de validation'
    ],
    duration: '1 semaine',
    difficulty: 'Moyen',
    tools: ['Scikit-learn', 'XGBoost', 'GridSearchCV', 'Cross-validation'],
    output: 'Modèle entraîné avec hyperparamètres optimisés',
    challenges: [
      'Overfitting ou underfitting',
      'Temps d\'entraînement trop long',
      'Hyperparamètres difficiles à optimiser'
    ],
    tips: [
      'Commencer par des modèles simples',
      'Utiliser la validation croisée',
      'Surveiller l\'évolution des métriques'
    ],
    status: 'pending'
  },
  {
    id: 'evaluation',
    title: '📈 Évaluation et Validation',
    description: 'Tester rigoureusement les performances du modèle',
    details: [
      'Évaluer sur le jeu de test (jamais vu)',
      'Analyser les erreurs et cas limites',
      'Tester la robustesse sur différents scénarios',
      'Valider l\'interprétabilité des résultats'
    ],
    duration: '2-3 jours',
    difficulty: 'Moyen',
    tools: ['Confusion matrix', 'ROC curves', 'SHAP', 'LIME'],
    output: 'Rapport complet de performance du modèle',
    challenges: [
      'Métriques trompeuses sur données déséquilibrées',
      'Performance dégradée en production',
      'Biais non détectés'
    ],
    tips: [
      'Utiliser plusieurs métriques complémentaires',
      'Tester sur données récentes',
      'Analyser les erreurs manuellement'
    ],
    status: 'pending'
  },
  {
    id: 'deployment',
    title: '🚀 Déploiement et Monitoring',
    description: 'Mettre le modèle en production et surveiller ses performances',
    details: [
      'Créer une API pour servir le modèle',
      'Déployer sur l\'infrastructure de production',
      'Mettre en place le monitoring des performances',
      'Planifier la maintenance et les mises à jour'
    ],
    duration: '1 semaine',
    difficulty: 'Difficile',
    tools: ['Flask/FastAPI', 'Docker', 'MLflow', 'Monitoring dashboards'],
    output: 'Modèle en production avec monitoring actif',
    challenges: [
      'Latence trop élevée en production',
      'Dérive des données dans le temps',
      'Gestion des versions de modèles'
    ],
    tips: [
      'Tester en environnement de staging d\'abord',
      'Prévoir un rollback rapide',
      'Automatiser le monitoring'
    ],
    status: 'pending'
  }
];

const DetailedProcessExample: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(true);

  const currentStepData = projectSteps[currentStep];
  const completedSteps = projectSteps.filter(step => step.status === 'completed').length;
  const progressPercentage = (completedSteps / projectSteps.length) * 100;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Facile': return 'bg-green-500';
      case 'Moyen': return 'bg-yellow-500';
      case 'Difficile': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'in-progress': return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'pending': return <Clock className="h-5 w-5 text-gray-400" />;
      default: return null;
    }
  };

  const handleAutoPlay = () => {
    if (isAutoPlaying) {
      setIsAutoPlaying(false);
      return;
    }

    setIsAutoPlaying(true);
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= projectSteps.length - 1) {
          setIsAutoPlaying(false);
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 5000);
  };

  return (
    <Card className="border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="text-2xl">🏗️</div>
          Projet Complet : De l'Idée à la Production
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Suivez étape par étape la création d'un projet d'apprentissage supervisé professionnel
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Progression globale */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Progression du Projet</span>
            <span className="text-sm text-muted-foreground">{Math.round(progressPercentage)}%</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
          <div className="text-xs text-muted-foreground">
            {completedSteps} étapes terminées sur {projectSteps.length}
          </div>
        </div>

        {/* Contrôles */}
        <div className="flex items-center gap-4">
          <Button
            onClick={handleAutoPlay}
            size="sm"
            className="flex items-center gap-2"
          >
            {isAutoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            {isAutoPlaying ? 'Pause' : 'Auto-play'}
          </Button>
          <Button
            onClick={() => setShowDetails(!showDetails)}
            size="sm"
            variant="outline"
          >
            {showDetails ? 'Masquer' : 'Afficher'} détails
          </Button>
          <div className="text-sm text-muted-foreground">
            Étape {currentStep + 1} / {projectSteps.length}
          </div>
        </div>

        {/* Timeline */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {projectSteps.map((step, index) => (
            <div
              key={step.id}
              className={`flex-shrink-0 flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-all ${
                index === currentStep 
                  ? 'bg-primary text-primary-foreground border-primary shadow-md' 
                  : step.status === 'completed'
                    ? 'bg-green-50 border-green-200 hover:bg-green-100 dark:bg-green-950/30 dark:border-green-800' 
                    : step.status === 'in-progress'
                      ? 'bg-yellow-50 border-yellow-200 hover:bg-yellow-100 dark:bg-yellow-950/30 dark:border-yellow-800'
                      : 'bg-gray-50 border-gray-200 hover:bg-gray-100 dark:bg-gray-900/50 dark:border-gray-700'
              }`}
              onClick={() => setCurrentStep(index)}
            >
              {getStatusIcon(step.status)}
              <span className="text-sm font-medium whitespace-nowrap">{step.title}</span>
            </div>
          ))}
        </div>

        {/* Étape actuelle */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">Étape {currentStep + 1}</Badge>
                  <div className={`w-3 h-3 rounded-full ${getDifficultyColor(currentStepData.difficulty)}`}></div>
                  <span className="text-sm font-medium">{currentStepData.difficulty}</span>
                </div>
                <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200">
                  {currentStepData.title}
                </h3>
                <p className="text-blue-700 dark:text-blue-300 leading-relaxed">
                  {currentStepData.description}
                </p>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-blue-600 dark:text-blue-400">Durée estimée</div>
                <div className="text-lg font-bold text-blue-800 dark:text-blue-200">{currentStepData.duration}</div>
              </div>
            </div>

            {showDetails && (
              <>
                {/* Détails de l'étape */}
                <div className="bg-white dark:bg-blue-900/50 p-4 rounded border border-blue-200 dark:border-blue-700">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Tâches détaillées :</h4>
                  <ul className="space-y-2">
                    {currentStepData.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-blue-700 dark:text-blue-300">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outils utilisés */}
                <div className="bg-white dark:bg-blue-900/50 p-4 rounded border border-blue-200 dark:border-blue-700">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">Outils et Technologies :</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentStepData.tools.map((tool, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Livrables */}
                <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Livrable attendu :</h4>
                  <p className="text-sm text-green-700 dark:text-green-300">{currentStepData.output}</p>
                </div>

                {/* Défis et conseils */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded border border-red-200 dark:border-red-800">
                    <h4 className="font-semibold text-red-800 dark:text-red-200 mb-3 flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4" />
                      Défis courants :
                    </h4>
                    <ul className="space-y-1">
                      {currentStepData.challenges.map((challenge, index) => (
                        <li key={index} className="text-xs text-red-700 dark:text-red-300">
                          • {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded border border-amber-200 dark:border-amber-800">
                    <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-3">💡 Conseils d'expert :</h4>
                    <ul className="space-y-1">
                      {currentStepData.tips.map((tip, index) => (
                        <li key={index} className="text-xs text-amber-700 dark:text-amber-300">
                          • {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-4 border-t">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
          >
            ← Étape précédente
          </Button>
          
          <div className="text-center">
            <div className="text-sm font-medium">Phase actuelle</div>
            <div className="text-xs text-muted-foreground">
              {currentStep < 2 ? 'Préparation' : currentStep < 4 ? 'Développement' : 'Production'}
            </div>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentStep(Math.min(projectSteps.length - 1, currentStep + 1))}
            disabled={currentStep === projectSteps.length - 1}
          >
            Étape suivante →
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DetailedProcessExample;
