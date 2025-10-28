
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Slider } from '@/components/ui/slider';
import { Brain, Play, Pause, RotateCcw, Zap, Activity, Target } from 'lucide-react';

interface Neuron {
  id: string;
  layer: number;
  activation: number;
  isActive: boolean;
}

interface Connection {
  from: string;
  to: string;
  weight: number;
  isActive: boolean;
}

interface NetworkArchitecture {
  inputLayer: number;
  hiddenLayers: number[];
  outputLayer: number;
}

const NeuralNetworkVisualization: React.FC = () => {
  const [isTraining, setIsTraining] = useState<boolean>(false);
  const [epoch, setEpoch] = useState<number>(0);
  const [loss, setLoss] = useState<number>(0.85);
  const [accuracy, setAccuracy] = useState<number>(45);
  const [architecture, setArchitecture] = useState<NetworkArchitecture>({
    inputLayer: 4,
    hiddenLayers: [6, 4],
    outputLayer: 2
  });
  const [neurons, setNeurons] = useState<Neuron[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [currentPhase, setCurrentPhase] = useState<'forward' | 'backward' | 'update'>('forward');
  const [animationStep, setAnimationStep] = useState<number>(0);

  const inputFeatures = ['Âge', 'Salaire', 'Expérience', 'Dette'];
  const outputClasses = ['Rejeté', 'Approuvé'];

  const sampleInput = [0.7, 0.6, 0.8, 0.3]; // Valeurs normalisées

  const initializeNetwork = () => {
    const newNeurons: Neuron[] = [];
    const newConnections: Connection[] = [];
    
    // Input layer
    for (let i = 0; i < architecture.inputLayer; i++) {
      newNeurons.push({
        id: `input-${i}`,
        layer: 0,
        activation: sampleInput[i] || Math.random(),
        isActive: false
      });
    }

    // Hidden layers
    architecture.hiddenLayers.forEach((size, layerIndex) => {
      for (let i = 0; i < size; i++) {
        newNeurons.push({
          id: `hidden-${layerIndex}-${i}`,
          layer: layerIndex + 1,
          activation: Math.random() * 0.5,
          isActive: false
        });
      }
    });

    // Output layer
    for (let i = 0; i < architecture.outputLayer; i++) {
      newNeurons.push({
        id: `output-${i}`,
        layer: architecture.hiddenLayers.length + 1,
        activation: Math.random() * 0.3,
        isActive: false
      });
    }

    // Create connections
    const layers = [architecture.inputLayer, ...architecture.hiddenLayers, architecture.outputLayer];
    
    for (let l = 0; l < layers.length - 1; l++) {
      const currentLayerNeurons = newNeurons.filter(n => n.layer === l);
      const nextLayerNeurons = newNeurons.filter(n => n.layer === l + 1);
      
      currentLayerNeurons.forEach(from => {
        nextLayerNeurons.forEach(to => {
          newConnections.push({
            from: from.id,
            to: to.id,
            weight: (Math.random() - 0.5) * 2,
            isActive: false
          });
        });
      });
    }

    setNeurons(newNeurons);
    setConnections(newConnections);
  };

  const startTraining = () => {
    if (isTraining) {
      setIsTraining(false);
      return;
    }

    setIsTraining(true);
    setEpoch(0);
    setAnimationStep(0);

    const trainingInterval = setInterval(() => {
      setEpoch(prev => {
        const newEpoch = prev + 1;
        
        // Simulate learning progress
        const progress = Math.min(newEpoch / 100, 1);
        setLoss(0.85 * Math.exp(-progress * 3) + 0.1);
        setAccuracy(45 + (85 - 45) * (1 - Math.exp(-progress * 2.5)));

        // Animation phases
        const phase = newEpoch % 3;
        if (phase === 1) setCurrentPhase('forward');
        else if (phase === 2) setCurrentPhase('backward');
        else setCurrentPhase('update');

        // Animate network
        animateNetwork(phase);

        if (newEpoch >= 100) {
          setIsTraining(false);
          clearInterval(trainingInterval);
        }

        return newEpoch;
      });
    }, 100);
  };

  const animateNetwork = (phase: number) => {
    setNeurons(prev => prev.map(neuron => ({
      ...neuron,
      isActive: phase === 0 ? neuron.layer <= animationStep % 4 : false,
      activation: phase === 2 ? Math.random() * 0.8 + 0.1 : neuron.activation
    })));

    setConnections(prev => prev.map(conn => ({
      ...conn,
      isActive: phase === 0 && Math.random() > 0.7
    })));

    setAnimationStep(prev => prev + 1);
  };

  const resetNetwork = () => {
    setIsTraining(false);
    setEpoch(0);
    setLoss(0.85);
    setAccuracy(45);
    setCurrentPhase('forward');
    setAnimationStep(0);
    initializeNetwork();
  };

  useEffect(() => {
    initializeNetwork();
  }, [architecture]);

  const getNeuronPosition = (neuron: Neuron, layerIndex: number, neuronIndex: number, totalInLayer: number) => {
    const x = 100 + layerIndex * 150;
    const startY = 50 + (300 - totalInLayer * 40) / 2;
    const y = startY + neuronIndex * 50;
    return { x, y };
  };

  const renderNetwork = () => {
    const layers = [architecture.inputLayer, ...architecture.hiddenLayers, architecture.outputLayer];
    
    return (
      <svg width="100%" height="400" className="border rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
        {/* Render connections */}
        {connections.map((conn, index) => {
          const fromNeuron = neurons.find(n => n.id === conn.from);
          const toNeuron = neurons.find(n => n.id === conn.to);
          
          if (!fromNeuron || !toNeuron) return null;

          const fromLayerNeurons = neurons.filter(n => n.layer === fromNeuron.layer);
          const toLayerNeurons = neurons.filter(n => n.layer === toNeuron.layer);
          
          const fromIndex = fromLayerNeurons.findIndex(n => n.id === fromNeuron.id);
          const toIndex = toLayerNeurons.findIndex(n => n.id === toNeuron.id);
          
          const fromPos = getNeuronPosition(fromNeuron, fromNeuron.layer, fromIndex, fromLayerNeurons.length);
          const toPos = getNeuronPosition(toNeuron, toNeuron.layer, toIndex, toLayerNeurons.length);

          return (
            <line
              key={index}
              x1={fromPos.x + 20}
              y1={fromPos.y + 15}
              x2={toPos.x}
              y2={toPos.y + 15}
              stroke={conn.isActive ? '#3B82F6' : '#E5E7EB'}
              strokeWidth={conn.isActive ? 3 : 1}
              opacity={Math.abs(conn.weight) * 0.5 + 0.3}
              className="transition-all duration-300"
            />
          );
        })}

        {/* Render neurons */}
        {layers.map((layerSize, layerIndex) => {
          const layerNeurons = neurons.filter(n => n.layer === layerIndex);
          
          return layerNeurons.map((neuron, neuronIndex) => {
            const pos = getNeuronPosition(neuron, layerIndex, neuronIndex, layerSize);
            const isInputLayer = layerIndex === 0;
            const isOutputLayer = layerIndex === layers.length - 1;
            
            return (
              <g key={neuron.id}>
                <circle
                  cx={pos.x + 10}
                  cy={pos.y + 15}
                  r="15"
                  fill={
                    neuron.isActive 
                      ? '#3B82F6' 
                      : isInputLayer 
                        ? '#10B981' 
                        : isOutputLayer 
                          ? '#F59E0B' 
                          : '#6B7280'
                  }
                  className="transition-all duration-300"
                  opacity={0.7 + neuron.activation * 0.3}
                />
                <text
                  x={pos.x + 10}
                  y={pos.y + 20}
                  textAnchor="middle"
                  fontSize="10"
                  fill="white"
                  fontWeight="bold"
                >
                  {Math.round(neuron.activation * 100) / 100}
                </text>
                
                {/* Labels */}
                {isInputLayer && (
                  <text
                    x={pos.x - 40}
                    y={pos.y + 20}
                    fontSize="12"
                    fill="#374151"
                    className="dark:fill-gray-300"
                  >
                    {inputFeatures[neuronIndex]}
                  </text>
                )}
                
                {isOutputLayer && (
                  <text
                    x={pos.x + 35}
                    y={pos.y + 20}
                    fontSize="12"
                    fill="#374151"
                    className="dark:fill-gray-300"
                  >
                    {outputClasses[neuronIndex]}
                  </text>
                )}
              </g>
            );
          });
        })}

        {/* Layer labels */}
        <text x="50" y="30" fontSize="14" fontWeight="bold" fill="#374151" className="dark:fill-gray-300">
          Entrée
        </text>
        <text x="200" y="30" fontSize="14" fontWeight="bold" fill="#374151" className="dark:fill-gray-300">
          Couches Cachées
        </text>
        <text x={100 + (layers.length - 1) * 150 - 20} y="30" fontSize="14" fontWeight="bold" fill="#374151" className="dark:fill-gray-300">
          Sortie
        </text>
      </svg>
    );
  };

  return (
    <Card className="border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Brain className="h-6 w-6 text-purple-600" />
          Réseau de Neurones - Apprentissage en Action
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Observez comment un réseau de neurones apprend à reconnaître des patterns complexes
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Contrôles */}
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Button
              onClick={startTraining}
              size="sm"
              className="flex items-center gap-2"
            >
              {isTraining ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              {isTraining ? 'Pause Entraînement' : 'Démarrer Entraînement'}
            </Button>
            <Button 
              onClick={resetNetwork}
              size="sm" 
              variant="outline"
              disabled={isTraining}
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset
            </Button>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">Neurones par couche cachée:</span>
              <span className="text-sm">{architecture.hiddenLayers.join('-')}</span>
            </div>
            <div className="flex gap-4">
              <div className="space-y-1">
                <label className="text-xs">Couche 1:</label>
                <Slider
                  value={[architecture.hiddenLayers[0]]}
                  onValueChange={(value) => setArchitecture(prev => ({
                    ...prev,
                    hiddenLayers: [value[0], prev.hiddenLayers[1]]
                  }))}
                  max={8}
                  min={3}
                  step={1}
                  className="w-24"
                  disabled={isTraining}
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs">Couche 2:</label>
                <Slider
                  value={[architecture.hiddenLayers[1]]}
                  onValueChange={(value) => setArchitecture(prev => ({
                    ...prev,
                    hiddenLayers: [prev.hiddenLayers[0], value[0]]
                  }))}
                  max={6}
                  min={2}
                  step={1}
                  className="w-24"
                  disabled={isTraining}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Métriques d'entraînement */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium">Époque</span>
            </div>
            <div className="text-2xl font-bold text-blue-600">{epoch}</div>
            <div className="text-xs text-muted-foreground">sur 100</div>
          </div>

          <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg border border-red-200">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-4 w-4 text-red-600" />
              <span className="text-sm font-medium">Perte (Loss)</span>
            </div>
            <div className="text-2xl font-bold text-red-600">{loss.toFixed(3)}</div>
            <div className="text-xs text-muted-foreground">Plus bas = mieux</div>
          </div>

          <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <Target className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium">Précision</span>
            </div>
            <div className="text-2xl font-bold text-green-600">{Math.round(accuracy)}%</div>
            <div className="text-xs text-muted-foreground">Plus haut = mieux</div>
          </div>
        </div>

        {/* Phase actuelle */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
          <div className="flex items-center gap-3 mb-2">
            <Badge variant="secondary">
              {currentPhase === 'forward' ? 'Propagation Avant' : 
               currentPhase === 'backward' ? 'Rétropropagation' : 
               'Mise à Jour'}
            </Badge>
            <h3 className="font-semibold text-purple-800 dark:text-purple-200">
              {currentPhase === 'forward' && 'Les données traversent le réseau →'}
              {currentPhase === 'backward' && 'Calcul des erreurs ←'}
              {currentPhase === 'update' && 'Ajustement des poids ⚙️'}
            </h3>
          </div>
          <p className="text-sm text-purple-700 dark:text-purple-300">
            {currentPhase === 'forward' && 'Chaque neurone calcule sa sortie basée sur les entrées pondérées'}
            {currentPhase === 'backward' && 'L\'erreur remonte depuis la sortie vers l\'entrée pour ajuster les poids'}
            {currentPhase === 'update' && 'Les connexions sont modifiées pour améliorer les prédictions futures'}
          </p>
        </div>

        {/* Visualisation du réseau */}
        <div>
          <h4 className="font-semibold mb-4 text-center">Architecture du Réseau de Neurones</h4>
          <div className="overflow-x-auto">
            {renderNetwork()}
          </div>
        </div>

        {/* Progression de l'entraînement */}
        {isTraining && (
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Progression de l'entraînement</span>
                <span className="text-sm text-muted-foreground">{epoch}/100 époques</span>
              </div>
              <Progress value={(epoch / 100) * 100} className="h-2" />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <span className="text-sm font-medium">Évolution de la perte</span>
                <Progress value={Math.max(0, (0.85 - loss) / 0.75 * 100)} className="h-2" />
              </div>
              <div className="space-y-2">
                <span className="text-sm font-medium">Évolution de la précision</span>
                <Progress value={(accuracy - 45) / 40 * 100} className="h-2" />
              </div>
            </div>
          </div>
        )}

        {/* Explications */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-indigo-50 dark:bg-indigo-950/30 p-4 rounded-lg border border-indigo-200">
            <h4 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-3">
              🧠 Comment ça marche
            </h4>
            <ul className="text-sm space-y-2 text-indigo-700 dark:text-indigo-300">
              <li>• <strong>Couche d'entrée :</strong> Reçoit les données (âge, salaire, etc.)</li>
              <li>• <strong>Couches cachées :</strong> Detectent des patterns complexes</li>
              <li>• <strong>Couche de sortie :</strong> Produit la décision finale</li>
              <li>• <strong>Connexions :</strong> Chaque lien a un poids ajustable</li>
            </ul>
          </div>
          
          <div className="bg-pink-50 dark:bg-pink-950/30 p-4 rounded-lg border border-pink-200">
            <h4 className="font-semibold text-pink-800 dark:text-pink-200 mb-3">
              🎯 Processus d'apprentissage
            </h4>
            <ul className="text-sm space-y-2 text-pink-700 dark:text-pink-300">
              <li>• <strong>1. Forward :</strong> Données → Prédiction</li>
              <li>• <strong>2. Erreur :</strong> Comparaison avec la vraie réponse</li>
              <li>• <strong>3. Backward :</strong> Calcul des corrections</li>
              <li>• <strong>4. Update :</strong> Ajustement des poids</li>
            </ul>
          </div>
        </div>

        {/* Données d'exemple */}
        <div className="bg-white dark:bg-gray-900/50 p-4 rounded-lg border">
          <h4 className="font-semibold mb-3">Exemple de prédiction en cours :</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            {inputFeatures.map((feature, index) => (
              <div key={feature} className="text-center">
                <div className="font-medium">{feature}</div>
                <div className="text-2xl font-bold text-green-600">
                  {(sampleInput[index] * 100).toFixed(0)}%
                </div>
                <div className="text-xs text-muted-foreground">Valeur normalisée</div>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded text-center">
            <div className="text-sm font-medium">Prédiction actuelle du réseau :</div>
            <div className="text-lg font-bold mt-1">
              <Badge variant={accuracy > 75 ? "default" : "secondary"}>
                {accuracy > 75 ? 'Approuvé' : 'En apprentissage...'}
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NeuralNetworkVisualization;
