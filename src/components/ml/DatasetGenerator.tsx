
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Database, Shuffle, Download } from 'lucide-react';

export interface DataPoint {
  x: number;
  y: number;
  label: number;
  cluster?: number;
}

interface DatasetGeneratorProps {
  onDatasetGenerated: (data: DataPoint[]) => void;
}

const DatasetGenerator: React.FC<DatasetGeneratorProps> = ({ onDatasetGenerated }) => {
  const [datasetType, setDatasetType] = useState<'classification' | 'regression' | 'clustering'>('classification');
  const [sampleSize, setSampleSize] = useState<number[]>([200]);
  const [noiseLevel, setNoiseLevel] = useState<number[]>([10]);
  const [numClasses, setNumClasses] = useState<number[]>([2]);

  // Générateur de données de classification
  const generateClassificationData = (): DataPoint[] => {
    const data: DataPoint[] = [];
    const samplesPerClass = Math.floor(sampleSize[0] / numClasses[0]);
    
    for (let classIndex = 0; classIndex < numClasses[0]; classIndex++) {
      const centerX = (classIndex * 4) - 2;
      const centerY = (classIndex % 2) * 4 - 2;
      
      for (let i = 0; i < samplesPerClass; i++) {
        const angle = Math.random() * 2 * Math.PI;
        const radius = Math.random() * 2;
        
        const x = centerX + Math.cos(angle) * radius + (Math.random() - 0.5) * noiseLevel[0] * 0.1;
        const y = centerY + Math.sin(angle) * radius + (Math.random() - 0.5) * noiseLevel[0] * 0.1;
        
        data.push({ x, y, label: classIndex });
      }
    }
    
    return data;
  };

  // Générateur de données de régression
  const generateRegressionData = (): DataPoint[] => {
    const data: DataPoint[] = [];
    
    for (let i = 0; i < sampleSize[0]; i++) {
      const x = (Math.random() - 0.5) * 10;
      const trueY = 0.5 * x * x + 2 * x + 1; // Fonction quadratique
      const y = trueY + (Math.random() - 0.5) * noiseLevel[0];
      
      data.push({ x, y, label: 0 });
    }
    
    return data;
  };

  // Générateur de données de clustering
  const generateClusteringData = (): DataPoint[] => {
    const data: DataPoint[] = [];
    const samplesPerCluster = Math.floor(sampleSize[0] / numClasses[0]);
    
    for (let cluster = 0; cluster < numClasses[0]; cluster++) {
      const centerX = Math.cos((cluster * 2 * Math.PI) / numClasses[0]) * 3;
      const centerY = Math.sin((cluster * 2 * Math.PI) / numClasses[0]) * 3;
      
      for (let i = 0; i < samplesPerCluster; i++) {
        const x = centerX + (Math.random() - 0.5) * 2;
        const y = centerY + (Math.random() - 0.5) * 2;
        
        data.push({ x, y, label: -1, cluster }); // label -1 pour données non étiquetées
      }
    }
    
    return data;
  };

  const handleGenerateDataset = () => {
    let dataset: DataPoint[];
    
    switch (datasetType) {
      case 'classification':
        dataset = generateClassificationData();
        break;
      case 'regression':
        dataset = generateRegressionData();
        break;
      case 'clustering':
        dataset = generateClusteringData();
        break;
      default:
        dataset = generateClassificationData();
    }
    
    onDatasetGenerated(dataset);
  };

  const exportDataset = () => {
    const dataset = datasetType === 'classification' 
      ? generateClassificationData() 
      : datasetType === 'regression'
      ? generateRegressionData()
      : generateClusteringData();
    
    const csvContent = 'x,y,label\n' + 
      dataset.map(point => `${point.x.toFixed(4)},${point.y.toFixed(4)},${point.label}`).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${datasetType}_dataset.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <Card className="border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Database className="h-5 w-5 text-primary" />
          Générateur de Dataset Synthétique
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Sélection du type de dataset */}
        <div className="space-y-3">
          <label className="text-sm font-medium">Type de dataset</label>
          <div className="flex gap-2">
            {(['classification', 'regression', 'clustering'] as const).map(type => (
              <Button
                key={type}
                variant={datasetType === type ? "default" : "outline"}
                size="sm"
                onClick={() => setDatasetType(type)}
                className="capitalize"
              >
                {type}
              </Button>
            ))}
          </div>
        </div>

        {/* Paramètres */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Taille de l'échantillon</label>
              <Badge variant="secondary">{sampleSize[0]} points</Badge>
            </div>
            <Slider
              value={sampleSize}
              onValueChange={setSampleSize}
              max={1000}
              min={50}
              step={50}
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Niveau de bruit</label>
              <Badge variant="secondary">{noiseLevel[0]}%</Badge>
            </div>
            <Slider
              value={noiseLevel}
              onValueChange={setNoiseLevel}
              max={50}
              min={0}
              step={5}
            />
          </div>

          {datasetType !== 'regression' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">
                  {datasetType === 'classification' ? 'Nombre de classes' : 'Nombre de clusters'}
                </label>
                <Badge variant="secondary">{numClasses[0]}</Badge>
              </div>
              <Slider
                value={numClasses}
                onValueChange={setNumClasses}
                max={5}
                min={2}
                step={1}
              />
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button onClick={handleGenerateDataset} className="flex items-center gap-2">
            <Shuffle className="h-4 w-4" />
            Générer Dataset
          </Button>
          
          <Button variant="outline" onClick={exportDataset} className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Exporter CSV
          </Button>
        </div>

        {/* Informations */}
        <div className="bg-muted/50 p-4 rounded-lg text-sm">
          <h4 className="font-medium mb-2">À propos de ce dataset :</h4>
          <p className="text-muted-foreground">
            {datasetType === 'classification' && `Dataset de classification avec ${numClasses[0]} classes distinctes. Idéal pour tester des algorithmes comme SVM, k-NN ou Random Forest.`}
            {datasetType === 'regression' && `Dataset de régression avec une relation quadratique sous-jacente. Parfait pour tester des modèles de régression linéaire et polynomiale.`}
            {datasetType === 'clustering' && `Dataset de clustering avec ${numClasses[0]} groupes naturels. Utilisez k-means ou DBSCAN pour découvrir ces structures.`}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DatasetGenerator;
