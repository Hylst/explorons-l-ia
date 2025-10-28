
import { pipeline } from '@huggingface/transformers';

export interface MLDetectionResult {
  confidence: number;
  reasoning: string[];
  modelUsed: string;
  processingTime: number;
}

export class MLDetector {
  private static textClassifier: any = null;
  private static imageClassifier: any = null;
  private static initialized = false;

  static async initializeModels(): Promise<void> {
    if (this.initialized) return;

    try {
      console.log('Initialisation des modèles ML...');
      
      // Utiliser des modèles légers pour la détection en temps réel
      // Note: Ces modèles sont petits et optimisés pour le navigateur
      
      // Pour la classification de texte (détection de texte généré par IA)
      this.textClassifier = await pipeline(
        'text-classification',
        'huggingface/CodeBERTa-small-v1',
        { device: 'cpu' } // Utiliser CPU pour la compatibilité
      );

      this.initialized = true;
      console.log('Modèles ML initialisés avec succès');
    } catch (error) {
      console.warn('Impossible d\'initialiser les modèles ML:', error);
      // Fonctionner en mode dégradé sans ML
    }
  }

  static async detectTextWithML(text: string): Promise<MLDetectionResult> {
    const startTime = performance.now();
    const reasoning: string[] = [];

    try {
      await this.initializeModels();

      if (!this.textClassifier) {
        return {
          confidence: 0,
          reasoning: ['Modèles ML non disponibles - utilisation des algorithmes statistiques uniquement'],
          modelUsed: 'Fallback',
          processingTime: performance.now() - startTime
        };
      }

      // Analyser le texte par segments pour éviter les limitations de taille
      const segments = this.splitTextIntoSegments(text, 512);
      const predictions: any[] = [];

      for (const segment of segments.slice(0, 3)) { // Limiter à 3 segments max
        try {
          const result = await this.textClassifier(segment);
          predictions.push(result);
          reasoning.push(`Segment analysé: ${result[0]?.label || 'unknown'} (${(result[0]?.score * 100 || 0).toFixed(1)}%)`);
        } catch (segmentError) {
          console.warn('Erreur analyse segment:', segmentError);
        }
      }

      // Calculer la confiance moyenne
      let totalConfidence = 0;
      let validPredictions = 0;

      for (const prediction of predictions) {
        if (prediction && prediction[0]) {
          // Adapter selon le label du modèle
          const score = prediction[0].score;
          const label = prediction[0].label.toLowerCase();
          
          if (label.includes('ai') || label.includes('artificial') || label.includes('generated')) {
            totalConfidence += score;
          } else if (label.includes('human') || label.includes('natural')) {
            totalConfidence += (1 - score);
          } else {
            // Score neutre si le label n'est pas clair
            totalConfidence += 0.5;
          }
          validPredictions++;
        }
      }

      const finalConfidence = validPredictions > 0 ? totalConfidence / validPredictions : 0;

      return {
        confidence: Math.min(finalConfidence, 0.85), // Plafonner pour éviter les faux positifs
        reasoning,
        modelUsed: 'CodeBERTa-small-v1',
        processingTime: performance.now() - startTime
      };

    } catch (error) {
      console.error('Erreur détection ML:', error);
      return {
        confidence: 0,
        reasoning: [`Erreur modèle ML: ${error.message}`],
        modelUsed: 'Error',
        processingTime: performance.now() - startTime
      };
    }
  }

  static async detectImageWithML(imageData: ImageData): Promise<MLDetectionResult> {
    const startTime = performance.now();
    const reasoning: string[] = [];

    try {
      // Pour l'instant, utiliser une analyse heuristique avancée
      // En production, on pourrait utiliser un modèle spécialisé dans la détection d'images IA
      
      const features = this.extractAdvancedImageFeatures(imageData);
      let confidence = 0;

      // Analyser les features extraites
      if (features.colorUniformity > 0.8) {
        confidence += 0.3;
        reasoning.push(`Uniformité des couleurs élevée: ${(features.colorUniformity * 100).toFixed(1)}%`);
      }

      if (features.textureComplexity < 0.2) {
        confidence += 0.25;
        reasoning.push(`Complexité de texture faible: ${(features.textureComplexity * 100).toFixed(1)}%`);
      }

      if (features.edgeSharpness > 0.9) {
        confidence += 0.2;
        reasoning.push(`Netteté des contours excessive: ${(features.edgeSharpness * 100).toFixed(1)}%`);
      }

      if (features.noiseLevel < 0.05) {
        confidence += 0.25;
        reasoning.push(`Niveau de bruit très faible: ${(features.noiseLevel * 100).toFixed(1)}%`);
      }

      return {
        confidence: Math.min(confidence, 0.9),
        reasoning,
        modelUsed: 'Heuristic Analysis v2.0',
        processingTime: performance.now() - startTime
      };

    } catch (error) {
      console.error('Erreur analyse ML image:', error);
      return {
        confidence: 0,
        reasoning: [`Erreur analyse: ${error.message}`],
        modelUsed: 'Error',
        processingTime: performance.now() - startTime
      };
    }
  }

  private static splitTextIntoSegments(text: string, maxLength: number): string[] {
    const words = text.split(' ');
    const segments: string[] = [];
    let currentSegment = '';

    for (const word of words) {
      if ((currentSegment + ' ' + word).length <= maxLength) {
        currentSegment += (currentSegment ? ' ' : '') + word;
      } else {
        if (currentSegment) segments.push(currentSegment);
        currentSegment = word;
      }
    }

    if (currentSegment) segments.push(currentSegment);
    return segments;
  }

  private static extractAdvancedImageFeatures(imageData: ImageData): {
    colorUniformity: number;
    textureComplexity: number;
    edgeSharpness: number;
    noiseLevel: number;
  } {
    const { data, width, height } = imageData;
    
    // Calcul de l'uniformité des couleurs
    const colorHist = this.calculateColorHistogram(data);
    const colorUniformity = this.calculateUniformity(colorHist);

    // Calcul de la complexité de texture
    const textureComplexity = this.calculateTextureComplexity(data, width, height);

    // Calcul de la netteté des contours
    const edgeSharpness = this.calculateEdgeSharpness(data, width, height);

    // Calcul du niveau de bruit
    const noiseLevel = this.calculateNoiseLevel(data, width, height);

    return {
      colorUniformity,
      textureComplexity,
      edgeSharpness,
      noiseLevel
    };
  }

  private static calculateColorHistogram(data: Uint8ClampedArray): number[] {
    const histogram = new Array(256).fill(0);
    
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const luminance = Math.round(0.299 * r + 0.587 * g + 0.114 * b);
      histogram[luminance]++;
    }
    
    return histogram;
  }

  private static calculateUniformity(histogram: number[]): number {
    const totalPixels = histogram.reduce((sum, count) => sum + count, 0);
    const expectedCount = totalPixels / histogram.length;
    
    let variance = 0;
    for (const count of histogram) {
      variance += Math.pow(count - expectedCount, 2);
    }
    variance /= histogram.length;
    
    const stdDev = Math.sqrt(variance);
    return Math.max(0, 1 - (stdDev / expectedCount));
  }

  private static calculateTextureComplexity(data: Uint8ClampedArray, width: number, height: number): number {
    let complexity = 0;
    let count = 0;

    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const center = (y * width + x) * 4;
        const centerLum = 0.299 * data[center] + 0.587 * data[center + 1] + 0.114 * data[center + 2];
        
        let localVariance = 0;
        const neighbors = [
          ((y-1) * width + (x-1)) * 4,
          ((y-1) * width + x) * 4,
          ((y-1) * width + (x+1)) * 4,
          (y * width + (x-1)) * 4,
          (y * width + (x+1)) * 4,
          ((y+1) * width + (x-1)) * 4,
          ((y+1) * width + x) * 4,
          ((y+1) * width + (x+1)) * 4
        ];
        
        for (const neighborIdx of neighbors) {
          const neighborLum = 0.299 * data[neighborIdx] + 0.587 * data[neighborIdx + 1] + 0.114 * data[neighborIdx + 2];
          localVariance += Math.pow(centerLum - neighborLum, 2);
        }
        
        complexity += localVariance / 8;
        count++;
      }
    }
    
    return count > 0 ? (complexity / count) / (255 * 255) : 0;
  }

  private static calculateEdgeSharpness(data: Uint8ClampedArray, width: number, height: number): number {
    let sharpness = 0;
    let edgeCount = 0;

    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = (y * width + x) * 4;
        const lum = 0.299 * data[idx] + 0.587 * data[idx + 1] + 0.114 * data[idx + 2];
        
        const rightIdx = (y * width + (x + 1)) * 4;
        const rightLum = 0.299 * data[rightIdx] + 0.587 * data[rightIdx + 1] + 0.114 * data[rightIdx + 2];
        
        const bottomIdx = ((y + 1) * width + x) * 4;
        const bottomLum = 0.299 * data[bottomIdx] + 0.587 * data[bottomIdx + 1] + 0.114 * data[bottomIdx + 2];
        
        const gradientX = Math.abs(lum - rightLum);
        const gradientY = Math.abs(lum - bottomLum);
        const gradient = Math.sqrt(gradientX * gradientX + gradientY * gradientY);
        
        if (gradient > 30) { // Seuil pour considérer comme un contour
          sharpness += gradient;
          edgeCount++;
        }
      }
    }
    
    return edgeCount > 0 ? Math.min((sharpness / edgeCount) / 255, 1) : 0;
  }

  private static calculateNoiseLevel(data: Uint8ClampedArray, width: number, height: number): number {
    let noiseSum = 0;
    let count = 0;

    for (let y = 2; y < height - 2; y++) {
      for (let x = 2; x < width - 2; x++) {
        const centerIdx = (y * width + x) * 4;
        const centerLum = 0.299 * data[centerIdx] + 0.587 * data[centerIdx + 1] + 0.114 * data[centerIdx + 2];
        
        // Calculer la moyenne des pixels voisins
        let neighborSum = 0;
        let neighborCount = 0;
        
        for (let dy = -2; dy <= 2; dy++) {
          for (let dx = -2; dx <= 2; dx++) {
            if (dx === 0 && dy === 0) continue;
            const neighborIdx = ((y + dy) * width + (x + dx)) * 4;
            const neighborLum = 0.299 * data[neighborIdx] + 0.587 * data[neighborIdx + 1] + 0.114 * data[neighborIdx + 2];
            neighborSum += neighborLum;
            neighborCount++;
          }
        }
        
        const neighborAvg = neighborSum / neighborCount;
        const deviation = Math.abs(centerLum - neighborAvg);
        
        noiseSum += deviation;
        count++;
      }
    }
    
    return count > 0 ? (noiseSum / count) / 255 : 0;
  }
}
