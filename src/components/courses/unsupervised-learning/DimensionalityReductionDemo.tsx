import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Minimize2, Eye, EyeOff } from 'lucide-react';

const DimensionalityReductionDemo: React.FC = () => {
  const [dimensions, setDimensions] = useState([3]);
  const [showOriginal, setShowOriginal] = useState(true);

  // Données d'exemple : maisons avec différentes caractéristiques
  const originalData = [
    { name: 'Maison A', surface: 120, prix: 300000, chambres: 3, jardin: 1, garage: 1, age: 5 },
    { name: 'Maison B', surface: 80, prix: 200000, chambres: 2, jardin: 0, garage: 0, age: 15 },
    { name: 'Maison C', surface: 200, prix: 500000, chambres: 5, jardin: 1, garage: 2, age: 2 },
    { name: 'Maison D', surface: 95, prix: 250000, chambres: 2, jardin: 1, garage: 1, age: 10 },
    { name: 'Maison E', surface: 150, prix: 380000, chambres: 4, jardin: 1, garage: 1, age: 8 }
  ];

  // Simulation de PCA - réduction progressive des dimensions
  const getReducedData = (dims: number) => {
    switch (dims) {
      case 6:
        return originalData.map(house => ({
          name: house.name,
          dimensions: [house.surface, house.prix/1000, house.chambres*20, house.jardin*50, house.garage*30, (20-house.age)*10]
        }));
      case 3:
        return originalData.map(house => ({
          name: house.name,
          dimensions: [
            house.surface * 0.8 + house.prix/5000,
            house.chambres * 15 + house.jardin * 25,
            house.garage * 20 + (20-house.age) * 5
          ]
        }));
      case 2:
        return originalData.map(house => ({
          name: house.name,
          dimensions: [
            house.surface * 0.7 + house.prix/6000 + house.chambres * 10,
            house.jardin * 30 + house.garage * 25 + (20-house.age) * 8
          ]
        }));
      default:
        return originalData.map(house => ({
          name: house.name,
          dimensions: [house.surface * 0.6 + house.prix/8000 + house.chambres * 12 + house.jardin * 20]
        }));
    }
  };

  const reducedData = getReducedData(dimensions[0]);
  const varianceExplained = dimensions[0] === 6 ? 100 : dimensions[0] === 3 ? 85 : dimensions[0] === 2 ? 70 : 55;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Minimize2 className="h-5 w-5" />
          Simulation de réduction de dimensionnalité (PCA)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <label className="text-sm font-medium">Nombre de dimensions finales:</label>
            <div className="w-32">
              <Slider
                value={dimensions}
                onValueChange={setDimensions}
                max={6}
                min={1}
                step={1}
                className="w-full"
              />
            </div>
            <span className="text-sm text-muted-foreground">{dimensions[0]}D</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowOriginal(!showOriginal)}
            >
              {showOriginal ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              {showOriginal ? 'Masquer' : 'Voir'} original
            </Button>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <div className="flex justify-between items-center text-sm">
              <span>Dimensions: 6D → {dimensions[0]}D</span>
              <Badge variant={varianceExplained >= 80 ? "default" : varianceExplained >= 60 ? "secondary" : "destructive"}>
                {varianceExplained}% de variance conservée
              </Badge>
            </div>
          </div>

          {showOriginal && (
            <div className="border-2 border-dashed border-muted-foreground/30 p-4 rounded-lg bg-card/50">
              <h4 className="font-semibold mb-3">Données originales (6 dimensions)</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-2">Maison</th>
                      <th className="text-left p-2">Surface</th>
                      <th className="text-left p-2">Prix (k€)</th>
                      <th className="text-left p-2">Chambres</th>
                      <th className="text-left p-2">Jardin</th>
                      <th className="text-left p-2">Garage</th>
                      <th className="text-left p-2">Âge</th>
                    </tr>
                  </thead>
                  <tbody>
                    {originalData.map((house, index) => (
                      <tr key={index} className="border-b border-border">
                        <td className="p-2 font-medium">{house.name}</td>
                        <td className="p-2">{house.surface}m²</td>
                        <td className="p-2">{house.prix/1000}k€</td>
                        <td className="p-2">{house.chambres}</td>
                        <td className="p-2">{house.jardin ? '✓' : '✗'}</td>
                        <td className="p-2">{house.garage}</td>
                        <td className="p-2">{house.age} ans</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30 p-4 rounded-lg">
            <h4 className="font-semibold mb-3">Données après PCA ({dimensions[0]} dimension{dimensions[0] > 1 ? 's' : ''})</h4>
            
            {dimensions[0] === 1 ? (
              <div className="space-y-2">
                {reducedData.map((house, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <span className="font-medium w-20">{house.name}</span>
                    <div className="flex-1 bg-background dark:bg-card rounded-full h-6 relative">
                      <div 
                        className="bg-gradient-to-r from-blue-400 to-purple-500 h-full rounded-full flex items-center justify-end pr-2"
                        style={{ width: `${Math.max(10, (house.dimensions[0] / Math.max(...reducedData.map(h => h.dimensions[0]))) * 100)}%` }}
                      >
                        <span className="text-white text-xs font-medium">
                          {house.dimensions[0].toFixed(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-2">Maison</th>
                      {Array.from({ length: dimensions[0] }, (_, i) => (
                        <th key={i} className="text-left p-2">PC{i + 1}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {reducedData.map((house, index) => (
                      <tr key={index} className="border-b border-border">
                        <td className="p-2 font-medium">{house.name}</td>
                        {house.dimensions.map((dim, dimIndex) => (
                          <td key={dimIndex} className="p-2">{dim.toFixed(1)}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded border border-blue-200 dark:border-blue-800">
              <h5 className="font-semibold mb-1 text-blue-700 dark:text-blue-300">Avantages</h5>
              <ul className="list-disc list-inside space-y-1 text-blue-600 dark:text-blue-400">
                <li>Visualisation simplifiée</li>
                <li>Réduction du bruit</li>
                <li>Performance améliorée</li>
              </ul>
            </div>
            <div className="bg-orange-50 dark:bg-orange-950/30 p-3 rounded border border-orange-200 dark:border-orange-800">
              <h5 className="font-semibold mb-1 text-orange-700 dark:text-orange-300">Inconvénients</h5>
              <ul className="list-disc list-inside space-y-1 text-orange-600 dark:text-orange-400">
                <li>Perte d'information</li>
                <li>Interprétation complexe</li>
                <li>Choix du nombre de dimensions</li>
              </ul>
            </div>
            <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded border border-green-200 dark:border-green-800">
              <h5 className="font-semibold mb-1 text-green-700 dark:text-green-300">Applications</h5>
              <ul className="list-disc list-inside space-y-1 text-green-600 dark:text-green-400">
                <li>Compression d'images</li>
                <li>Analyse génomique</li>
                <li>Recommandations</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DimensionalityReductionDemo;
