
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

/**
 * Composant qui affiche une animation illustrant le processus d'apprentissage d'un réseau de neurones
 * @returns {JSX.Element} Le composant NeuralNetworkAnimation
 */
const NeuralNetworkAnimation = () => {
  const [activeNeurons, setActiveNeurons] = useState<number[]>([]);
  const [activeConnections, setActiveConnections] = useState<string[]>([]);
  const [step, setStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [speed, setSpeed] = useState(1000); // milliseconds
  const { toast } = useToast();

  // Simulation d'un processus d'apprentissage
  useEffect(() => {
    if (!isAnimating) return;
    
    const interval = setInterval(() => {
      // Cycle d'animation en 4 étapes
      const newStep = (step + 1) % 4;
      setStep(newStep);
      
      // Activation aléatoire de neurones dans différentes couches
      const neurons = [];
      for (let i = 0; i < 3; i++) {
        neurons.push(Math.floor(Math.random() * 4) + i * 4);
      }
      setActiveNeurons(neurons);

      // Activation de connexions entre les neurones actifs
      const connections = [];
      for (let i = 0; i < neurons.length - 1; i++) {
        connections.push(`${neurons[i]}-${neurons[i + 1]}`);
      }
      setActiveConnections(connections);
    }, speed);
    
    return () => clearInterval(interval);
  }, [step, isAnimating, speed]);

  // Construction des cercles représentant les neurones
  const renderNeuron = (id: number, x: number, y: number) => {
    const isActive = activeNeurons.includes(id);
    return (
      <circle 
        key={`neuron-${id}`}
        cx={x} 
        cy={y} 
        r="10" 
        fill={isActive ? "rgb(147, 51, 234)" : "#9ca3af"}
        opacity={isActive ? "1" : "0.5"}
        className={isActive ? "animate-pulse" : ""}
      />
    );
  };

  // Construction des lignes représentant les connexions entre neurones
  const renderConnection = (id: string, x1: number, y1: number, x2: number, y2: number) => {
    const isActive = activeConnections.includes(id);
    return (
      <line 
        key={`connection-${id}`}
        x1={x1} 
        y1={y1} 
        x2={x2} 
        y2={y2} 
        stroke={isActive ? "rgb(147, 51, 234)" : "#9ca3af"}
        strokeWidth={isActive ? "2" : "1"}
        opacity={isActive ? "0.8" : "0.3"}
      />
    );
  };

  // Fonction pour changer la vitesse de l'animation
  const changeSpeed = (newSpeed: number) => {
    setSpeed(newSpeed);
    toast({
      title: "Vitesse modifiée",
      description: `Vitesse d'animation : ${newSpeed === 2000 ? "Lente" : newSpeed === 1000 ? "Normale" : "Rapide"}`,
    });
  };

  // Layout du réseau de neurones
  const layers = 3;
  const neuronsPerLayer = 4;
  const width = 1120; // Doubled from previous 560
  const height = 720; // Doubled from previous 360
  const layerGap = width / (layers + 1);
  const neuronGap = height / (neuronsPerLayer + 1);

  const neurons = [];
  const connections = [];

  // Création des neurones
  for (let l = 0; l < layers; l++) {
    const layerX = (l + 1) * layerGap;
    
    for (let n = 0; n < neuronsPerLayer; n++) {
      const neuronY = (n + 1) * neuronGap;
      const neuronId = l * neuronsPerLayer + n;
      
      neurons.push(renderNeuron(neuronId, layerX, neuronY));
      
      // Création des connexions avec la couche précédente
      if (l > 0) {
        for (let pn = 0; pn < neuronsPerLayer; pn++) {
          const prevNeuronId = (l - 1) * neuronsPerLayer + pn;
          const prevLayerX = l * layerGap;
          const prevNeuronY = (pn + 1) * neuronGap;
          
          connections.push(
            renderConnection(
              `${prevNeuronId}-${neuronId}`, 
              prevLayerX, 
              prevNeuronY, 
              layerX, 
              neuronY
            )
          );
        }
      }
    }
  }

  // Ajout de labels pour les couches du réseau
  const layerLabels = [
    "Couche d'entrée",
    "Couche cachée",
    "Couche de sortie"
  ];

  const renderLayerLabels = layerLabels.map((label, idx) => (
    <text
      key={`layer-label-${idx}`}
      x={(idx + 1) * layerGap}
      y={height - 30}
      textAnchor="middle"
      className="text-base fill-muted-foreground"
      fontSize="24"
    >
      {label}
    </text>
  ));

  return (
    <div className="w-full max-w-6xl mx-auto bg-card/50 rounded-lg p-6 shadow-sm">
      <div className="mb-3 text-center">
        <h4 className="text-xl font-medium">Simulation d'un réseau de neurones en action</h4>
      </div>
      
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto">
        {connections}
        {neurons}
        {renderLayerLabels}
      </svg>
      
      <div className="flex justify-between items-center mt-6">
        <div className="flex space-x-2">
          <Button 
            size="sm" 
            variant="outline" 
            onClick={() => setIsAnimating(!isAnimating)}
            className="text-xs md:text-sm"
          >
            {isAnimating ? "Pause" : "Lecture"}
          </Button>
          
          <Button 
            size="sm" 
            variant="outline" 
            onClick={() => {
              setActiveNeurons([]);
              setActiveConnections([]);
              setStep(0);
            }}
            className="text-xs md:text-sm"
            disabled={!isAnimating}
          >
            Réinitialiser
          </Button>
        </div>
        
        <div className="flex items-center space-x-1">
          <span className="text-xs text-muted-foreground mr-1 hidden md:inline">Vitesse:</span>
          <Button 
            size="sm" 
            variant={speed === 2000 ? "default" : "outline"}
            onClick={() => changeSpeed(2000)}
            className="h-7 text-xs px-2"
          >
            Lente
          </Button>
          <Button 
            size="sm" 
            variant={speed === 1000 ? "default" : "outline"}
            onClick={() => changeSpeed(1000)}
            className="h-7 text-xs px-2"
          >
            Normale
          </Button>
          <Button 
            size="sm" 
            variant={speed === 500 ? "default" : "outline"}
            onClick={() => changeSpeed(500)}
            className="h-7 text-xs px-2"
          >
            Rapide
          </Button>
        </div>
      </div>
      
      <div className="flex justify-center mt-3 text-xs text-muted-foreground">
        <div className="flex items-center mr-4">
          <span className="inline-block w-3 h-3 mr-1 bg-primary rounded-full opacity-50"></span>
          <span>Neurone inactif</span>
        </div>
        <div className="flex items-center">
          <span className="inline-block w-3 h-3 mr-1 bg-primary rounded-full animate-pulse"></span>
          <span>Neurone actif</span>
        </div>
      </div>
    </div>
  );
};

export default NeuralNetworkAnimation;
