
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Slider } from '@/components/ui/slider';
import { TreePine, Play, Pause, RotateCcw, Vote, Users, Target } from 'lucide-react';

interface Tree {
  id: number;
  prediction: 'Approuvé' | 'Rejeté';
  confidence: number;
  features: string[];
  samples: number;
  accuracy: number;
}

interface VotingResult {
  approved: number;
  rejected: number;
  finalDecision: 'Approuvé' | 'Rejeté';
  confidence: number;
}

const RandomForestVisualization: React.FC = () => {
  const [numberOfTrees, setNumberOfTrees] = useState<number>(5);
  const [currentPhase, setCurrentPhase] = useState<'training' | 'voting' | 'result'>('training');
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [trees, setTrees] = useState<Tree[]>([]);
  const [votingProgress, setVotingProgress] = useState<number>(0);
  const [votingResult, setVotingResult] = useState<VotingResult>({
    approved: 0,
    rejected: 0,
    finalDecision: 'Rejeté',
    confidence: 0
  });

  const sampleFeatures = [
    'âge', 'salaire', 'expérience', 'emploi_stable', 'dette_existante', 
    'historique_crédit', 'revenus_mensuels', 'situation_familiale'
  ];

  const generateRandomTree = (id: number): Tree => {
    const randomFeatures = sampleFeatures
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.floor(Math.random() * 4) + 3);
    
    const prediction = Math.random() > 0.4 ? 'Approuvé' : 'Rejeté';
    const confidence = 0.6 + Math.random() * 0.35;
    const samples = Math.floor(Math.random() * 300) + 200;
    const accuracy = 0.75 + Math.random() * 0.20;

    return {
      id,
      prediction,
      confidence,
      features: randomFeatures,
      samples,
      accuracy
    };
  };

  const initializeTrees = () => {
    const newTrees = Array.from({ length: numberOfTrees }, (_, i) => generateRandomTree(i + 1));
    setTrees(newTrees);
    calculateVoting(newTrees);
  };

  const calculateVoting = (currentTrees: Tree[]) => {
    const votes = currentTrees.reduce(
      (acc, tree) => {
        if (tree.prediction === 'Approuvé') {
          acc.approved += tree.confidence;
        } else {
          acc.rejected += tree.confidence;
        }
        return acc;
      },
      { approved: 0, rejected: 0 }
    );

    const total = votes.approved + votes.rejected;
    const finalDecision = votes.approved > votes.rejected ? 'Approuvé' : 'Rejeté';
    const confidence = Math.max(votes.approved, votes.rejected) / total;

    setVotingResult({
      approved: Math.round((votes.approved / total) * 100),
      rejected: Math.round((votes.rejected / total) * 100),
      finalDecision,
      confidence: Math.round(confidence * 100)
    });
  };

  const startAnimation = () => {
    setIsAnimating(true);
    setCurrentPhase('training');
    setVotingProgress(0);

    // Phase 1: Training
    setTimeout(() => {
      setCurrentPhase('voting');
      
      // Phase 2: Voting animation
      const votingInterval = setInterval(() => {
        setVotingProgress(prev => {
          if (prev >= 100) {
            clearInterval(votingInterval);
            setCurrentPhase('result');
            setIsAnimating(false);
            return 100;
          }
          return prev + 10;
        });
      }, 200);
    }, 2000);
  };

  const resetVisualization = () => {
    setCurrentPhase('training');
    setVotingProgress(0);
    setIsAnimating(false);
    initializeTrees();
  };

  useEffect(() => {
    initializeTrees();
  }, [numberOfTrees]);

  const getTreeColor = (tree: Tree) => {
    if (tree.prediction === 'Approuvé') {
      return 'bg-green-100 border-green-300 dark:bg-green-950/30 dark:border-green-800';
    }
    return 'bg-red-100 border-red-300 dark:bg-red-950/30 dark:border-red-800';
  };

  return (
    <Card className="border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TreePine className="h-6 w-6 text-emerald-600" />
          Random Forest - La Sagesse Collective
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Observez comment plusieurs arbres de décision collaborent pour une prédiction plus fiable
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Contrôles */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Button
              onClick={startAnimation}
              size="sm"
              disabled={isAnimating}
              className="flex items-center gap-2"
            >
              {isAnimating ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              {isAnimating ? 'En cours...' : 'Démarrer la prédiction'}
            </Button>
            <Button 
              onClick={resetVisualization}
              size="sm" 
              variant="outline"
              disabled={isAnimating}
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset
            </Button>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">Nombre d'arbres:</span>
              <span className="text-sm">{numberOfTrees}</span>
            </div>
            <Slider
              value={[numberOfTrees]}
              onValueChange={(value) => setNumberOfTrees(value[0])}
              max={10}
              min={3}
              step={1}
              className="w-64"
              disabled={isAnimating}
            />
          </div>
        </div>

        {/* Phase actuelle */}
        <div className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800">
          <div className="flex items-center gap-3 mb-2">
            <Badge variant="secondary">
              Phase {currentPhase === 'training' ? '1' : currentPhase === 'voting' ? '2' : '3'}
            </Badge>
            <h3 className="font-semibold text-emerald-800 dark:text-emerald-200">
              {currentPhase === 'training' && 'Entraînement des Arbres Individuels'}
              {currentPhase === 'voting' && 'Vote Collectif en Cours'}
              {currentPhase === 'result' && 'Décision Finale du Random Forest'}
            </h3>
          </div>
          <p className="text-sm text-emerald-700 dark:text-emerald-300">
            {currentPhase === 'training' && 'Chaque arbre apprend sur un échantillon différent des données...'}
            {currentPhase === 'voting' && 'Tous les arbres donnent leur avis et on calcule le vote majoritaire...'}
            {currentPhase === 'result' && `Décision finale: ${votingResult.finalDecision} avec ${votingResult.confidence}% de confiance`}
          </p>
        </div>

        {/* Visualisation des arbres */}
        <div className="space-y-4">
          <h4 className="font-semibold text-center">Forêt d'Arbres de Décision</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {trees.map((tree, index) => (
              <div
                key={tree.id}
                className={`p-4 rounded-lg border-2 transition-all duration-500 ${
                  getTreeColor(tree)
                } ${
                  isAnimating && currentPhase === 'training' 
                    ? 'animate-pulse scale-105' 
                    : ''
                }`}
              >
                <div className="text-center space-y-2">
                  <TreePine className="h-8 w-8 mx-auto text-green-600" />
                  <div className="text-xs font-semibold">Arbre #{tree.id}</div>
                  
                  <div className="space-y-1 text-xs">
                    <div>Échantillon: {tree.samples}</div>
                    <div>Précision: {Math.round(tree.accuracy * 100)}%</div>
                  </div>
                  
                  <Badge 
                    variant={tree.prediction === 'Approuvé' ? 'default' : 'destructive'}
                    className="text-xs"
                  >
                    {tree.prediction}
                  </Badge>
                  
                  <div className="text-xs text-muted-foreground">
                    Confiance: {Math.round(tree.confidence * 100)}%
                  </div>

                  <div className="text-xs text-muted-foreground">
                    <div className="font-medium">Features utilisées:</div>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {tree.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Phase de vote */}
        {currentPhase !== 'training' && (
          <div className="space-y-4">
            <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3 flex items-center gap-2">
                <Vote className="h-5 w-5" />
                Processus de Vote
              </h4>
              
              {currentPhase === 'voting' && (
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Collecte des votes...</span>
                    <span className="text-sm">{votingProgress}%</span>
                  </div>
                  <Progress value={votingProgress} className="h-2" />
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-green-700 dark:text-green-300">
                      Votes pour "Approuvé"
                    </span>
                    <Badge variant="default">{votingResult.approved}%</Badge>
                  </div>
                  <Progress value={votingResult.approved} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-red-700 dark:text-red-300">
                      Votes pour "Rejeté"
                    </span>
                    <Badge variant="destructive">{votingResult.rejected}%</Badge>
                  </div>
                  <Progress value={votingResult.rejected} className="h-2" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Résultat final */}
        {currentPhase === 'result' && (
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
            <div className="text-center space-y-4">
              <Target className="h-12 w-12 mx-auto text-purple-600" />
              <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200">
                Décision du Random Forest
              </h3>
              <div className="text-3xl font-bold">
                <Badge 
                  variant={votingResult.finalDecision === 'Approuvé' ? 'default' : 'destructive'}
                  className="text-lg px-4 py-2"
                >
                  {votingResult.finalDecision}
                </Badge>
              </div>
              <div className="text-sm text-purple-700 dark:text-purple-300">
                Niveau de confiance: <strong>{votingResult.confidence}%</strong>
              </div>
            </div>
          </div>
        )}

        {/* Explications */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg border border-amber-200">
            <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-3">
              🌟 Pourquoi Random Forest est si puissant
            </h4>
            <ul className="text-sm space-y-2 text-amber-700 dark:text-amber-300">
              <li>• <strong>Diversité :</strong> Chaque arbre voit des données différentes</li>
              <li>• <strong>Robustesse :</strong> Les erreurs individuelles se compensent</li>
              <li>• <strong>Stabilité :</strong> Moins sensible au sur-apprentissage</li>
              <li>• <strong>Fiabilité :</strong> La majorité a généralement raison</li>
            </ul>
          </div>
          
          <div className="bg-cyan-50 dark:bg-cyan-950/30 p-4 rounded-lg border border-cyan-200">
            <h4 className="font-semibold text-cyan-800 dark:text-cyan-200 mb-3">
              ⚙️ Techniques utilisées
            </h4>
            <ul className="text-sm space-y-2 text-cyan-700 dark:text-cyan-300">
              <li>• <strong>Bagging :</strong> Échantillonnage aléatoire des données</li>
              <li>• <strong>Feature Sampling :</strong> Sélection aléatoire des variables</li>
              <li>• <strong>Vote pondéré :</strong> Selon la confiance de chaque arbre</li>
              <li>• <strong>Agrégation :</strong> Combinaison intelligente des prédictions</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RandomForestVisualization;
