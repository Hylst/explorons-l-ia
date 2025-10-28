import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Play, Pause, RotateCcw, Shuffle } from 'lucide-react';

interface Point {
  x: number;
  y: number;
  cluster: number;
  id: number;
}

interface Centroid {
  x: number;
  y: number;
  cluster: number;
}

const ClusteringVisualization: React.FC = () => {
  const [points, setPoints] = useState<Point[]>([]);
  const [centroids, setCentroids] = useState<Centroid[]>([]);
  const [k, setK] = useState([3]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [iteration, setIteration] = useState(0);
  const [converged, setConverged] = useState(false);

  const colors = ['#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6'];

  const generateRandomPoints = () => {
    const newPoints: Point[] = [];
    
    const clusterCenters = [
      { x: 150, y: 150 },
      { x: 350, y: 150 },
      { x: 250, y: 300 },
      { x: 100, y: 300 },
      { x: 400, y: 300 }
    ];

    for (let i = 0; i < 50; i++) {
      const centerIndex = Math.floor(Math.random() * Math.min(k[0], clusterCenters.length));
      const center = clusterCenters[centerIndex];
      
      newPoints.push({
        x: center.x + (Math.random() - 0.5) * 80,
        y: center.y + (Math.random() - 0.5) * 80,
        cluster: -1,
        id: i
      });
    }
    
    setPoints(newPoints);
    initializeCentroids(newPoints);
    setIteration(0);
    setConverged(false);
  };

  const initializeCentroids = (dataPoints: Point[]) => {
    const newCentroids: Centroid[] = [];
    for (let i = 0; i < k[0]; i++) {
      const randomPoint = dataPoints[Math.floor(Math.random() * dataPoints.length)];
      newCentroids.push({
        x: randomPoint.x + (Math.random() - 0.5) * 20,
        y: randomPoint.y + (Math.random() - 0.5) * 20,
        cluster: i
      });
    }
    setCentroids(newCentroids);
  };

  const distance = (p1: { x: number; y: number }, p2: { x: number; y: number }) => {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
  };

  const performKMeansStep = () => {
    const newPoints = points.map(point => {
      let closestCentroid = 0;
      let minDistance = distance(point, centroids[0]);
      
      for (let i = 1; i < centroids.length; i++) {
        const dist = distance(point, centroids[i]);
        if (dist < minDistance) {
          minDistance = dist;
          closestCentroid = i;
        }
      }
      
      return { ...point, cluster: closestCentroid };
    });
    
    setPoints(newPoints);
    
    const newCentroids = centroids.map((centroid, i) => {
      const clusterPoints = newPoints.filter(p => p.cluster === i);
      
      if (clusterPoints.length === 0) return centroid;
      
      const avgX = clusterPoints.reduce((sum, p) => sum + p.x, 0) / clusterPoints.length;
      const avgY = clusterPoints.reduce((sum, p) => sum + p.y, 0) / clusterPoints.length;
      
      return { ...centroid, x: avgX, y: avgY };
    });
    
    const hasConverged = centroids.every((centroid, i) => 
      distance(centroid, newCentroids[i]) < 1
    );
    
    setCentroids(newCentroids);
    setIteration(prev => prev + 1);
    
    if (hasConverged) {
      setConverged(true);
      setIsAnimating(false);
    }
  };

  useEffect(() => {
    generateRandomPoints();
  }, [k]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAnimating && !converged) {
      interval = setInterval(() => {
        performKMeansStep();
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isAnimating, converged, points, centroids]);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shuffle className="h-5 w-5 text-primary" />
          Visualisation interactive de K-means
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2">
              <label className="text-sm font-medium">Nombre de clusters (k):</label>
              <div className="w-24">
                <Slider
                  value={k}
                  onValueChange={setK}
                  max={5}
                  min={2}
                  step={1}
                  className="w-full"
                />
              </div>
              <span className="text-sm text-muted-foreground">{k[0]}</span>
            </div>
            
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsAnimating(!isAnimating)}
                disabled={converged}
              >
                {isAnimating ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                {isAnimating ? 'Pause' : 'Démarrer'}
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={performKMeansStep}
                disabled={isAnimating || converged}
              >
                Étape suivante
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={generateRandomPoints}
              >
                <RotateCcw className="h-4 w-4" />
                Nouveau dataset
              </Button>
            </div>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <div className="flex justify-between items-center text-sm">
              <span>Itération: {iteration}</span>
              <span className={`font-medium ${converged ? 'text-green-600' : 'text-orange-600'}`}>
                {converged ? 'Convergé ✓' : 'En cours...'}
              </span>
            </div>
          </div>

          <div className="relative">
            <svg width="500" height="400" className="border rounded-lg bg-background dark:bg-card">
              {points.map((point) => (
                <circle
                  key={point.id}
                  cx={point.x}
                  cy={point.y}
                  r="4"
                  fill={point.cluster >= 0 ? colors[point.cluster] : '#6B7280'}
                  opacity="0.7"
                  className="transition-all duration-500"
                />
              ))}
              
              {centroids.map((centroid) => (
                <g key={centroid.cluster}>
                  <circle
                    cx={centroid.x}
                    cy={centroid.y}
                    r="8"
                    fill={colors[centroid.cluster]}
                    stroke="hsl(var(--background))"
                    strokeWidth="2"
                    className="transition-all duration-500"
                  />
                  <text
                    x={centroid.x}
                    y={centroid.y + 2}
                    textAnchor="middle"
                    fill="hsl(var(--background))"
                    fontSize="10"
                    fontWeight="bold"
                  >
                    C{centroid.cluster + 1}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          <div className="text-sm text-muted-foreground">
            <p><strong>Comment ça marche :</strong></p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Les petits cercles sont les points de données</li>
              <li>Les grands cercles (C1, C2, etc.) sont les centres de clusters</li>
              <li>À chaque itération, les points rejoignent le centre le plus proche</li>
              <li>Les centres se déplacent vers le centre de leurs points assignés</li>
              <li>Le processus s'arrête quand les centres ne bougent plus</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClusteringVisualization;
