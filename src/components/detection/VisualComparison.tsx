
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Eye, 
  Zap, 
  BarChart3, 
  Palette, 
  Grid3X3, 
  Waves,
  Camera,
  RefreshCw
} from 'lucide-react';

interface VisualAnalysisResult {
  colorAnalysis: {
    dominantColors: string[];
    colorVariety: number;
    saturationLevel: number;
    brightnessDistribution: number[];
  };
  textureAnalysis: {
    complexity: number;
    patterns: string[];
    smoothness: number;
    edgeDensity: number;
  };
  structuralAnalysis: {
    symmetry: number;
    repetition: number;
    composition: string;
    focusSharpness: number;
  };
  artificialityScore: number;
}

export const VisualComparison: React.FC<{ file: File }> = ({ file }) => {
  const [analysis, setAnalysis] = useState<VisualAnalysisResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeVisualization, setActiveVisualization] = useState<'original' | 'edges' | 'histogram' | 'frequency'>('original');

  useEffect(() => {
    if (file) {
      setOriginalImage(URL.createObjectURL(file));
      performVisualAnalysis();
    }
  }, [file]);

  const performVisualAnalysis = async () => {
    setIsAnalyzing(true);
    
    try {
      const imageUrl = URL.createObjectURL(file);
      const img = new Image();
      
      await new Promise((resolve) => {
        img.onload = resolve;
        img.src = imageUrl;
      });

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d')!;
      canvas.width = Math.min(img.width, 512);
      canvas.height = Math.min(img.height, 512);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      
      // Analyser l'image de manière approfondie
      const colorAnalysis = await analyzeColors(imageData);
      const textureAnalysis = await analyzeTexture(imageData);
      const structuralAnalysis = await analyzeStructure(imageData);
      
      // Calculer le score d'artificialité basé sur tous les facteurs
      const artificialityScore = calculateArtificialityScore(colorAnalysis, textureAnalysis, structuralAnalysis);

      setAnalysis({
        colorAnalysis,
        textureAnalysis,
        structuralAnalysis,
        artificialityScore
      });

      // Mettre à jour le canvas de visualisation
      updateVisualization(imageData, activeVisualization);

    } catch (error) {
      console.error('Erreur analyse visuelle:', error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const updateVisualization = (imageData: ImageData, type: string) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d')!;
    canvas.width = imageData.width;
    canvas.height = imageData.height;

    switch (type) {
      case 'original':
        ctx.putImageData(imageData, 0, 0);
        break;
      case 'edges':
        const edgeData = detectEdges(imageData);
        ctx.putImageData(edgeData, 0, 0);
        break;
      case 'histogram':
        drawHistogram(ctx, imageData);
        break;
      case 'frequency':
        const frequencyData = analyzeFrequency(imageData);
        ctx.putImageData(frequencyData, 0, 0);
        break;
    }
  };

  const detectEdges = (imageData: ImageData): ImageData => {
    const { data, width, height } = imageData;
    const edgeData = new ImageData(width, height);
    
    // Filtre de Sobel pour la détection de contours
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = (y * width + x) * 4;
        
        // Calculer les gradients X et Y
        const gx = (
          -1 * getGrayscale(data, (y-1)*width + (x-1)) +
          1 * getGrayscale(data, (y-1)*width + (x+1)) +
          -2 * getGrayscale(data, y*width + (x-1)) +
          2 * getGrayscale(data, y*width + (x+1)) +
          -1 * getGrayscale(data, (y+1)*width + (x-1)) +
          1 * getGrayscale(data, (y+1)*width + (x+1))
        );
        
        const gy = (
          -1 * getGrayscale(data, (y-1)*width + (x-1)) +
          -2 * getGrayscale(data, (y-1)*width + x) +
          -1 * getGrayscale(data, (y-1)*width + (x+1)) +
          1 * getGrayscale(data, (y+1)*width + (x-1)) +
          2 * getGrayscale(data, (y+1)*width + x) +
          1 * getGrayscale(data, (y+1)*width + (x+1))
        );
        
        const magnitude = Math.sqrt(gx * gx + gy * gy);
        const normalizedMagnitude = Math.min(255, magnitude);
        
        edgeData.data[idx] = normalizedMagnitude;
        edgeData.data[idx + 1] = normalizedMagnitude;
        edgeData.data[idx + 2] = normalizedMagnitude;
        edgeData.data[idx + 3] = 255;
      }
    }
    
    return edgeData;
  };

  const getGrayscale = (data: Uint8ClampedArray, pixelIndex: number): number => {
    const idx = pixelIndex * 4;
    return 0.299 * data[idx] + 0.587 * data[idx + 1] + 0.114 * data[idx + 2];
  };

  const drawHistogram = (ctx: CanvasRenderingContext2D, imageData: ImageData) => {
    const { data } = imageData;
    const histR = new Array(256).fill(0);
    const histG = new Array(256).fill(0);
    const histB = new Array(256).fill(0);
    
    // Calculer les histogrammes
    for (let i = 0; i < data.length; i += 4) {
      histR[data[i]]++;
      histG[data[i + 1]]++;
      histB[data[i + 2]]++;
    }
    
    // Normaliser
    const maxCount = Math.max(...histR, ...histG, ...histB);
    
    // Dessiner
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    const barWidth = ctx.canvas.width / 256;
    const maxHeight = ctx.canvas.height;
    
    for (let i = 0; i < 256; i++) {
      const x = i * barWidth;
      
      // Rouge
      ctx.fillStyle = 'rgba(255, 0, 0, 0.7)';
      const heightR = (histR[i] / maxCount) * maxHeight;
      ctx.fillRect(x, maxHeight - heightR, barWidth, heightR);
      
      // Vert
      ctx.fillStyle = 'rgba(0, 255, 0, 0.7)';
      const heightG = (histG[i] / maxCount) * maxHeight;
      ctx.fillRect(x, maxHeight - heightG, barWidth, heightG);
      
      // Bleu
      ctx.fillStyle = 'rgba(0, 0, 255, 0.7)';
      const heightB = (histB[i] / maxCount) * maxHeight;
      ctx.fillRect(x, maxHeight - heightB, barWidth, heightB);
    }
  };

  const analyzeFrequency = (imageData: ImageData): ImageData => {
    // Simulation d'analyse fréquentielle
    const { data, width, height } = imageData;
    const frequencyData = new ImageData(width, height);
    
    for (let i = 0; i < data.length; i += 4) {
      const gray = getGrayscale(data, i / 4);
      const frequency = Math.sin(gray * 0.1) * 127 + 128;
      
      frequencyData.data[i] = frequency;
      frequencyData.data[i + 1] = frequency;
      frequencyData.data[i + 2] = frequency;
      frequencyData.data[i + 3] = 255;
    }
    
    return frequencyData;
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5" />
            Analyse Visuelle Avancée
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Visualisation */}
            <div className="space-y-4">
              <div className="flex gap-2 flex-wrap">
                <Button
                  variant={activeVisualization === 'original' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => {
                    setActiveVisualization('original');
                    if (originalImage) {
                      const img = new Image();
                      img.onload = () => {
                        const canvas = document.createElement('canvas');
                        const ctx = canvas.getContext('2d')!;
                        canvas.width = img.width;
                        canvas.height = img.height;
                        ctx.drawImage(img, 0, 0);
                        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                        updateVisualization(imageData, 'original');
                      };
                      img.src = originalImage;
                    }
                  }}
                >
                  <Camera className="h-4 w-4 mr-1" />
                  Original
                </Button>
                <Button
                  variant={activeVisualization === 'edges' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveVisualization('edges')}
                >
                  <Grid3X3 className="h-4 w-4 mr-1" />
                  Contours
                </Button>
                <Button
                  variant={activeVisualization === 'histogram' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveVisualization('histogram')}
                >
                  <BarChart3 className="h-4 w-4 mr-1" />
                  Histogramme
                </Button>
                <Button
                  variant={activeVisualization === 'frequency' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveVisualization('frequency')}
                >
                  <Waves className="h-4 w-4 mr-1" />
                  Fréquences
                </Button>
              </div>
              
              <div className="border rounded-lg p-4 bg-gray-50">
                <canvas 
                  ref={canvasRef}
                  className="max-w-full h-auto"
                  style={{ maxHeight: '400px' }}
                />
              </div>
            </div>

            {/* Résultats d'analyse */}
            <div className="space-y-4">
              {isAnalyzing ? (
                <div className="flex items-center justify-center h-64">
                  <RefreshCw className="h-8 w-8 animate-spin" />
                  <span className="ml-2">Analyse en cours...</span>
                </div>
              ) : analysis ? (
                <Tabs defaultValue="colors" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="colors">
                      <Palette className="h-4 w-4 mr-1" />
                      Couleurs
                    </TabsTrigger>
                    <TabsTrigger value="texture">
                      <Grid3X3 className="h-4 w-4 mr-1" />
                      Texture
                    </TabsTrigger>
                    <TabsTrigger value="structure">
                      <Zap className="h-4 w-4 mr-1" />
                      Structure
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="colors" className="space-y-3">
                    <div>
                      <h4 className="font-medium mb-2">Variété des couleurs</h4>
                      <Progress value={analysis.colorAnalysis.colorVariety * 100} className="mb-1" />
                      <Badge variant={analysis.colorAnalysis.colorVariety < 0.3 ? 'destructive' : 'default'}>
                        {(analysis.colorAnalysis.colorVariety * 100).toFixed(1)}%
                      </Badge>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Niveau de saturation</h4>
                      <Progress value={analysis.colorAnalysis.saturationLevel * 100} className="mb-1" />
                      <Badge variant={analysis.colorAnalysis.saturationLevel > 0.8 ? 'destructive' : 'default'}>
                        {(analysis.colorAnalysis.saturationLevel * 100).toFixed(1)}%
                      </Badge>
                    </div>
                  </TabsContent>

                  <TabsContent value="texture" className="space-y-3">
                    <div>
                      <h4 className="font-medium mb-2">Complexité</h4>
                      <Progress value={analysis.textureAnalysis.complexity * 100} className="mb-1" />
                      <Badge variant={analysis.textureAnalysis.complexity < 0.2 ? 'destructive' : 'default'}>
                        {(analysis.textureAnalysis.complexity * 100).toFixed(1)}%
                      </Badge>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Densité des contours</h4>
                      <Progress value={analysis.textureAnalysis.edgeDensity * 100} className="mb-1" />
                      <Badge variant={analysis.textureAnalysis.edgeDensity > 0.9 ? 'destructive' : 'default'}>
                        {(analysis.textureAnalysis.edgeDensity * 100).toFixed(1)}%
                      </Badge>
                    </div>
                  </TabsContent>

                  <TabsContent value="structure" className="space-y-3">
                    <div>
                      <h4 className="font-medium mb-2">Symétrie</h4>
                      <Progress value={analysis.structuralAnalysis.symmetry * 100} className="mb-1" />
                      <Badge variant={analysis.structuralAnalysis.symmetry > 0.8 ? 'destructive' : 'default'}>
                        {(analysis.structuralAnalysis.symmetry * 100).toFixed(1)}%
                      </Badge>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Netteté du focus</h4>
                      <Progress value={analysis.structuralAnalysis.focusSharpness * 100} className="mb-1" />
                      <Badge variant={analysis.structuralAnalysis.focusSharpness > 0.95 ? 'destructive' : 'default'}>
                        {(analysis.structuralAnalysis.focusSharpness * 100).toFixed(1)}%
                      </Badge>
                    </div>
                  </TabsContent>
                </Tabs>
              ) : null}

              {analysis && (
                <Card className={`mt-4 ${analysis.artificialityScore > 0.7 ? 'border-red-500' : analysis.artificialityScore > 0.4 ? 'border-yellow-500' : 'border-green-500'}`}>
                  <CardContent className="pt-4">
                    <div className="text-center">
                      <h3 className="font-bold text-lg mb-2">Score d'Artificialité</h3>
                      <div className={`text-3xl font-bold ${analysis.artificialityScore > 0.7 ? 'text-red-600' : analysis.artificialityScore > 0.4 ? 'text-yellow-600' : 'text-green-600'}`}>
                        {(analysis.artificialityScore * 100).toFixed(1)}%
                      </div>
                      <Progress 
                        value={analysis.artificialityScore * 100} 
                        className="mt-2"
                      />
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Fonctions d'analyse
async function analyzeColors(imageData: ImageData) {
  const { data } = imageData;
  const colors = new Set<string>();
  let totalSaturation = 0;
  const brightnessHist = new Array(256).fill(0);
  
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    // Calculer la saturation HSV
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const saturation = max === 0 ? 0 : (max - min) / max;
    totalSaturation += saturation;
    
    // Brightness
    const brightness = Math.round((r + g + b) / 3);
    brightnessHist[brightness]++;
    
    // Couleur unique (quantifiée)
    const quantR = Math.floor(r / 32) * 32;
    const quantG = Math.floor(g / 32) * 32;
    const quantB = Math.floor(b / 32) * 32;
    colors.add(`${quantR}-${quantG}-${quantB}`);
  }
  
  const totalPixels = data.length / 4;
  
  return {
    dominantColors: Array.from(colors).slice(0, 10),
    colorVariety: colors.size / (8 * 8 * 8), // Normaliser par rapport au max possible
    saturationLevel: totalSaturation / totalPixels,
    brightnessDistribution: brightnessHist.map(count => count / totalPixels)
  };
}

async function analyzeTexture(imageData: ImageData) {
  const { data, width, height } = imageData;
  let complexity = 0;
  let smoothness = 0;
  let edgeCount = 0;
  
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const idx = (y * width + x) * 4;
      const centerGray = (data[idx] + data[idx + 1] + data[idx + 2]) / 3;
      
      // Calculer la variance locale pour la complexité
      let localVariance = 0;
      let edgeStrength = 0;
      
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          const neighborIdx = ((y + dy) * width + (x + dx)) * 4;
          const neighborGray = (data[neighborIdx] + data[neighborIdx + 1] + data[neighborIdx + 2]) / 3;
          const diff = centerGray - neighborGray;
          localVariance += diff * diff;
          edgeStrength += Math.abs(diff);
        }
      }
      
      complexity += Math.sqrt(localVariance / 9);
      smoothness += 1 / (1 + localVariance / 9);
      
      if (edgeStrength > 100) edgeCount++;
    }
  }
  
  const totalPixels = (width - 2) * (height - 2);
  
  return {
    complexity: Math.min(complexity / (totalPixels * 255), 1),
    patterns: ['geometric', 'organic'], // Simplification
    smoothness: smoothness / totalPixels,
    edgeDensity: edgeCount / totalPixels
  };
}

async function analyzeStructure(imageData: ImageData) {
  const { data, width, height } = imageData;
  
  // Calculer la symétrie horizontale
  let symmetryScore = 0;
  let repetitionScore = 0;
  let focusSharpness = 0;
  
  const centerX = Math.floor(width / 2);
  
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < centerX; x++) {
      const leftIdx = (y * width + x) * 4;
      const rightIdx = (y * width + (width - 1 - x)) * 4;
      
      const leftGray = (data[leftIdx] + data[leftIdx + 1] + data[leftIdx + 2]) / 3;
      const rightGray = (data[rightIdx] + data[rightIdx + 1] + data[rightIdx + 2]) / 3;
      
      symmetryScore += 1 - Math.abs(leftGray - rightGray) / 255;
    }
  }
  
  symmetryScore /= (centerX * height);
  
  // Focus sharpness (centre vs bordures)
  const centerRegion = { x: width * 0.25, y: height * 0.25, w: width * 0.5, h: height * 0.5 };
  let centerSharpness = 0;
  let borderSharpness = 0;
  let centerPixels = 0;
  let borderPixels = 0;
  
  for (let y = 1; y < height - 1; y++) {
    for (let x = 1; x < width - 1; x++) {
      const idx = (y * width + x) * 4;
      const gray = (data[idx] + data[idx + 1] + data[idx + 2]) / 3;
      
      // Calculer le gradient local
      const rightGray = (data[idx + 4] + data[idx + 5] + data[idx + 6]) / 3;
      const bottomGray = (data[idx + width * 4] + data[idx + width * 4 + 1] + data[idx + width * 4 + 2]) / 3;
      const gradient = Math.sqrt(Math.pow(gray - rightGray, 2) + Math.pow(gray - bottomGray, 2));
      
      if (x >= centerRegion.x && x < centerRegion.x + centerRegion.w &&
          y >= centerRegion.y && y < centerRegion.y + centerRegion.h) {
        centerSharpness += gradient;
        centerPixels++;
      } else {
        borderSharpness += gradient;
        borderPixels++;
      }
    }
  }
  
  const avgCenterSharpness = centerPixels > 0 ? centerSharpness / centerPixels : 0;
  const avgBorderSharpness = borderPixels > 0 ? borderSharpness / borderPixels : 0;
  
  focusSharpness = avgCenterSharpness / Math.max(avgBorderSharpness, 1);
  
  return {
    symmetry: symmetryScore,
    repetition: repetitionScore,
    composition: 'centered', // Simplification
    focusSharpness: Math.min(focusSharpness / 10, 1) // Normaliser
  };
}

function calculateArtificialityScore(colorAnalysis: any, textureAnalysis: any, structuralAnalysis: any): number {
  let score = 0;
  
  // Facteurs de couleur
  if (colorAnalysis.colorVariety < 0.3) score += 0.2;
  if (colorAnalysis.saturationLevel > 0.8) score += 0.15;
  
  // Facteurs de texture
  if (textureAnalysis.complexity < 0.2) score += 0.25;
  if (textureAnalysis.edgeDensity > 0.9) score += 0.15;
  
  // Facteurs structurels
  if (structuralAnalysis.symmetry > 0.8) score += 0.15;
  if (structuralAnalysis.focusSharpness > 0.95) score += 0.1;
  
  return Math.min(score, 1);
}
