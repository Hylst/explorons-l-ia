
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Database, BarChart3, Network, Layers, Braces, FileCode, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

/**
 * Composant de visualisation interactive des algorithmes de ML
 */
const AlgorithmVisualizer = () => {
  const [selectedAlgo, setSelectedAlgo] = useState("knn");
  
  const algorithms = {
    knn: {
      name: "K-Nearest Neighbors",
      icon: <Database size={24} className="text-blue-500" />,
      description: "K-NN classe un point en fonction du vote majoritaire de ses k plus proches voisins dans l'espace des caractéristiques.",
      steps: [
        "1. Calcul des distances entre le point à classer et tous les points d'entraînement",
        "2. Sélection des k points les plus proches",
        "3. Vote majoritaire pour déterminer la classe du nouveau point"
      ],
      visualization: (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 p-6 rounded-xl relative overflow-hidden">
          <div className="grid grid-cols-5 grid-rows-5 gap-3 relative">
            {/* Points de données visualisés */}
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div 
                key={i} 
                className={`h-5 w-5 rounded-full ${i % 3 === 0 ? 'bg-blue-500' : 'bg-indigo-500'}`}
                animate={{ 
                  x: (i % 5) * 20 + (Math.random() * 10 - 5),
                  y: Math.floor(i / 5) * 20 + (Math.random() * 10 - 5)
                }}
                transition={{ 
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 2 + (i % 3),
                  delay: i * 0.1
                }}
              />
            ))}
            
            {/* Point à classifier */}
            <motion.div 
              className="h-6 w-6 rounded-full bg-green-500 absolute"
              style={{ left: '50%', top: '50%' }}
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                repeat: Infinity,
                duration: 2,
              }}
            />
            
            {/* Cercle de voisinage */}
            <motion.div 
              className="absolute rounded-full border-2 border-dashed border-gray-400 left-1/2 top-1/2"
              style={{ transform: 'translate(-50%, -50%)' }}
              animate={{ 
                width: ['30%', '40%', '30%'],
                height: ['30%', '40%', '30%'],
              }}
              transition={{ 
                repeat: Infinity,
                duration: 3,
              }}
            />
          </div>
          <div className="absolute bottom-2 right-2 text-xs text-gray-500">K = 5</div>
        </div>
      )
    },
    kmeans: {
      name: "K-Means Clustering",
      icon: <BarChart3 size={24} className="text-purple-500" />,
      description: "K-means regroupe les données en K clusters en assignant chaque point au centroïde le plus proche et en recalculant les centroïdes.",
      steps: [
        "1. Initialisation aléatoire des centroïdes",
        "2. Attribution des points au centroïde le plus proche",
        "3. Recalcul des centroïdes",
        "4. Répétition jusqu'à convergence"
      ],
      visualization: (
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 p-6 rounded-xl relative overflow-hidden">
          <div className="grid grid-cols-6 grid-rows-6 gap-2 relative">
            {/* Clusters et centroïdes */}
            {Array.from({ length: 3 }).map((_, clusterIndex) => (
              <React.Fragment key={clusterIndex}>
                {/* Centroïde */}
                <motion.div 
                  className={`absolute h-7 w-7 rounded-full border-4 ${
                    clusterIndex === 0 ? 'border-red-500' : clusterIndex === 1 ? 'border-purple-500' : 'border-blue-500'
                  }`}
                  style={{ 
                    left: `${25 + (clusterIndex * 25)}%`, 
                    top: `${30 + (clusterIndex * 15)}%` 
                  }}
                  animate={{ 
                    x: [0, 10, -10, 0],
                    y: [0, -10, 10, 0]
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 5,
                    delay: clusterIndex
                  }}
                />
                
                {/* Points du cluster */}
                {Array.from({ length: 6 }).map((_, pointIndex) => (
                  <motion.div 
                    key={`${clusterIndex}-${pointIndex}`}
                    className={`h-3 w-3 rounded-full ${
                      clusterIndex === 0 ? 'bg-red-400' : clusterIndex === 1 ? 'bg-purple-400' : 'bg-blue-400'
                    } absolute`}
                    style={{ 
                      left: `${25 + (clusterIndex * 25) + (Math.random() * 20 - 10)}%`, 
                      top: `${30 + (clusterIndex * 15) + (Math.random() * 20 - 10)}%` 
                    }}
                    animate={{ 
                      x: [0, Math.random() * 10 - 5],
                      y: [0, Math.random() * 10 - 5]
                    }}
                    transition={{ 
                      repeat: Infinity,
                      repeatType: "mirror",
                      duration: 2 + Math.random(),
                    }}
                  />
                ))}
              </React.Fragment>
            ))}
          </div>
          <div className="absolute bottom-2 right-2 text-xs text-gray-500">K = 3</div>
        </div>
      )
    },
    cnn: {
      name: "Convolutional Neural Network",
      icon: <Layers size={24} className="text-orange-500" />,
      description: "Les CNN utilisent des filtres de convolution pour détecter automatiquement des caractéristiques locales dans les données structurées comme les images.",
      steps: [
        "1. Couche de convolution: application de filtres pour détecter des caractéristiques",
        "2. Couche de pooling: réduction de la dimensionnalité",
        "3. Couches entièrement connectées: classification finale"
      ],
      visualization: (
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-gray-900 dark:to-gray-800 p-6 rounded-xl overflow-hidden">
          <div className="relative h-48">
            {/* Architecture CNN stylisée */}
            <div className="flex justify-between items-center h-full">
              {/* Input */}
              <motion.div 
                className="h-32 w-16 rounded-md bg-gradient-to-b from-orange-400 to-red-400 opacity-70"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
              
              {/* Couches de convolution */}
              <div className="flex space-x-1">
                {Array.from({ length: 3 }).map((_, i) => (
                  <motion.div 
                    key={i}
                    className="h-28 w-3 rounded-sm bg-orange-300 opacity-80"
                    style={{ marginTop: i % 2 === 0 ? '0px' : '10px' }}
                    animate={{ height: ['7rem', '6rem', '7rem'] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2,
                      delay: i * 0.3
                    }}
                  />
                ))}
              </div>
              
              {/* Couches de pooling */}
              <div className="flex space-x-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div 
                    key={i}
                    className="h-24 w-2 rounded-sm bg-amber-300 opacity-80"
                    style={{ marginTop: (i % 3) * 5 }}
                    animate={{ height: ['6rem', '5.5rem', '6rem'] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2,
                      delay: i * 0.2
                    }}
                  />
                ))}
              </div>
              
              {/* Couches entièrement connectées */}
              <div className="flex space-x-1">
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div 
                    key={i}
                    className="h-20 w-1.5 rounded-sm bg-yellow-300 opacity-80"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 1.5,
                      delay: i * 0.1
                    }}
                  />
                ))}
              </div>
              
              {/* Output */}
              <div className="flex flex-col space-y-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <motion.div 
                    key={i}
                    className={`h-6 w-12 rounded-sm ${
                      i === 2 ? 'bg-green-400' : 'bg-gray-300'
                    }`}
                    animate={{ 
                      scale: i === 2 ? [1, 1.1, 1] : [1, 1, 1],
                      opacity: i === 2 ? [0.8, 1, 0.8] : [0.6, 0.6, 0.6]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2
                    }}
                  />
                ))}
              </div>
            </div>
            
            {/* Flèches indiquant le flux */}
            <div className="absolute inset-0 flex justify-between items-center pointer-events-none">
              {Array.from({ length: 4 }).map((_, i) => (
                <motion.div 
                  key={i}
                  animate={{ x: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="text-gray-400"
                >
                  <ChevronRight size={20} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )
    }
  };

  return (
    <div className="mt-10 mb-8 p-6 rounded-xl border border-primary/10 bg-card">
      <h3 className="text-xl font-semibold mb-4 flex items-center">
        <FileCode className="mr-2 text-primary" size={20} />
        <span>Visualisation interactive des algorithmes</span>
      </h3>
      
      <p className="text-muted-foreground mb-6">
        Explorez le fonctionnement des principaux algorithmes de machine learning à travers des visualisations simplifiées.
      </p>
      
      <Tabs value={selectedAlgo} onValueChange={setSelectedAlgo} className="w-full">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="knn" className="flex items-center gap-2">
            <Database size={16} />
            <span>K-NN</span>
          </TabsTrigger>
          <TabsTrigger value="kmeans" className="flex items-center gap-2">
            <BarChart3 size={16} />
            <span>K-Means</span>
          </TabsTrigger>
          <TabsTrigger value="cnn" className="flex items-center gap-2">
            <Layers size={16} />
            <span>CNN</span>
          </TabsTrigger>
        </TabsList>
        
        {Object.entries(algorithms).map(([key, algo]) => (
          <TabsContent key={key} value={key} className="space-y-6 animate-fade-in">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <div className="flex items-center gap-3 mb-3">
                  {algo.icon}
                  <h4 className="text-lg font-medium">{algo.name}</h4>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  {algo.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <h5 className="font-medium text-sm">Fonctionnement:</h5>
                  <ul className="space-y-1.5">
                    {algo.steps.map((step, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="flex items-start text-sm"
                      >
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mr-2 mt-1.5"></span>
                        <span className="text-muted-foreground">{step}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-2"
                  onClick={() => {
                    // Réinitialise l'algo pour rafraîchir l'animation
                    setSelectedAlgo("temp");
                    setTimeout(() => setSelectedAlgo(key), 10);
                  }}
                >
                  <Braces className="mr-2 h-4 w-4" />
                  <span>Relancer l'animation</span>
                </Button>
              </div>
              
              <div className="md:w-1/2">
                {algo.visualization}
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default AlgorithmVisualizer;
