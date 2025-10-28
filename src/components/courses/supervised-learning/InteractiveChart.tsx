
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Play, RotateCcw, TrendingUp, Users } from 'lucide-react';

interface DataPoint {
  x: number;
  y: number;
  label: string;
  color: string;
}

const InteractiveChart: React.FC = () => {
  const [activeExample, setActiveExample] = useState<'classification' | 'regression'>('classification');
  const [showPrediction, setShowPrediction] = useState(false);

  // Données pour la classification (chats vs chiens)
  const classificationData: DataPoint[] = [
    { x: 20, y: 15, label: 'Chat', color: '#3b82f6' },
    { x: 25, y: 18, label: 'Chat', color: '#3b82f6' },
    { x: 18, y: 12, label: 'Chat', color: '#3b82f6' },
    { x: 22, y: 16, label: 'Chat', color: '#3b82f6' },
    { x: 45, y: 35, label: 'Chien', color: '#ef4444' },
    { x: 50, y: 40, label: 'Chien', color: '#ef4444' },
    { x: 42, y: 32, label: 'Chien', color: '#ef4444' },
    { x: 48, y: 38, label: 'Chien', color: '#ef4444' },
  ];

  // Données pour la régression (prix des maisons)
  const regressionData: DataPoint[] = [
    { x: 50, y: 150, label: '150k€', color: '#10b981' },
    { x: 80, y: 200, label: '200k€', color: '#10b981' },
    { x: 120, y: 280, label: '280k€', color: '#10b981' },
    { x: 150, y: 350, label: '350k€', color: '#10b981' },
    { x: 200, y: 450, label: '450k€', color: '#10b981' },
    { x: 90, y: 220, label: '220k€', color: '#10b981' },
    { x: 110, y: 260, label: '260k€', color: '#10b981' },
  ];

  const resetVisualization = () => {
    setShowPrediction(false);
  };

  const runPrediction = () => {
    setShowPrediction(true);
  };

  return (
    <Card className="border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          Visualisation Interactive de l'Apprentissage Supervisé
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeExample} onValueChange={(value) => setActiveExample(value as 'classification' | 'regression')}>
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="classification">Classification</TabsTrigger>
            <TabsTrigger value="regression">Régression</TabsTrigger>
          </TabsList>

          <TabsContent value="classification">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="outline">Exemple : Distinguer chats et chiens</Badge>
                <Badge variant="secondary">Axes : Poids (kg) × Taille (cm)</Badge>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg relative h-64">
                <div className="absolute bottom-2 left-2 text-xs text-gray-500">Poids (kg)</div>
                <div className="absolute top-2 left-2 text-xs text-gray-500 transform -rotate-90 origin-left">Taille (cm)</div>
                
                <svg viewBox="0 0 300 200" className="w-full h-full">
                  {/* Grille */}
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  
                  {/* Ligne de séparation si prédiction active */}
                  {showPrediction && (
                    <line x1="80" y1="0" x2="80" y2="200" stroke="#fbbf24" strokeWidth="3" strokeDasharray="5,5" />
                  )}
                  
                  {/* Points de données */}
                  {classificationData.map((point, index) => (
                    <g key={index}>
                      <circle
                        cx={point.x * 4}
                        cy={200 - point.y * 4}
                        r="6"
                        fill={point.color}
                        className="hover:r-8 transition-all cursor-pointer"
                      />
                      <text
                        x={point.x * 4}
                        y={200 - point.y * 4 - 10}
                        textAnchor="middle"
                        className="text-xs fill-gray-600"
                      >
                        {point.label}
                      </text>
                    </g>
                  ))}
                  
                  {/* Point de test si prédiction active */}
                  {showPrediction && (
                    <g>
                      <circle cx="140" cy="120" r="8" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" />
                      <text x="140" y="110" textAnchor="middle" className="text-xs font-bold fill-yellow-600">
                        ? → Chien
                      </text>
                    </g>
                  )}
                </svg>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Chats</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm">Chiens</span>
                </div>
                {showPrediction && (
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm">Prédiction</span>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="regression">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="outline">Exemple : Prix des maisons</Badge>
                <Badge variant="secondary">Axes : Surface (m²) × Prix (k€)</Badge>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg relative h-64">
                <div className="absolute bottom-2 left-2 text-xs text-gray-500">Surface (m²)</div>
                <div className="absolute top-2 left-2 text-xs text-gray-500 transform -rotate-90 origin-left">Prix (k€)</div>
                
                <svg viewBox="0 0 300 200" className="w-full h-full">
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  
                  {/* Ligne de régression si prédiction active */}
                  {showPrediction && (
                    <line x1="20" y1="180" x2="280" y2="20" stroke="#10b981" strokeWidth="3" />
                  )}
                  
                  {/* Points de données */}
                  {regressionData.map((point, index) => (
                    <g key={index}>
                      <circle
                        cx={point.x * 1.2}
                        cy={200 - point.y * 0.4}
                        r="6"
                        fill={point.color}
                        className="hover:r-8 transition-all cursor-pointer"
                      />
                      <text
                        x={point.x * 1.2}
                        y={200 - point.y * 0.4 - 10}
                        textAnchor="middle"
                        className="text-xs fill-gray-600"
                      >
                        {point.label}
                      </text>
                    </g>
                  ))}
                  
                  {/* Point de prédiction */}
                  {showPrediction && (
                    <g>
                      <circle cx="180" cy="80" r="8" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2" />
                      <text x="180" y="70" textAnchor="middle" className="text-xs font-bold fill-yellow-600">
                        150m² → 320k€
                      </text>
                    </g>
                  )}
                </svg>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex gap-2 mt-4">
          <Button onClick={runPrediction} size="sm" disabled={showPrediction}>
            <Play className="h-4 w-4 mr-2" />
            Voir la prédiction
          </Button>
          <Button onClick={resetVisualization} size="sm" variant="outline">
            <RotateCcw className="h-4 w-4 mr-2" />
            Recommencer
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default InteractiveChart;
