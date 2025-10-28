
export interface ImageIndicator {
  type: string;
  description: string;
  weight: number;
  confidence: number;
}

export class ImageDetectionEngine {
  async analyzeImageIndicators(file: File): Promise<ImageIndicator[]> {
    const indicators: ImageIndicator[] = [];
    
    try {
      // Analyse des métadonnées EXIF réelles
      const exifData = await this.extractExifData(file);
      const exifIndicator = this.analyzeExifData(exifData);
      if (exifIndicator) indicators.push(exifIndicator);

      // Analyse de l'histogramme des couleurs
      const colorHistogram = await this.analyzeColorHistogram(file);
      if (colorHistogram) indicators.push(colorHistogram);

      // Analyse de la compression et qualité
      const compressionAnalysis = await this.analyzeCompression(file);
      if (compressionAnalysis) indicators.push(compressionAnalysis);

      // Analyse des dimensions et proportions
      const dimensionAnalysis = await this.analyzeDimensions(file);
      if (dimensionAnalysis) indicators.push(dimensionAnalysis);

      // Analyse de la distribution des fréquences spatiales
      const frequencyAnalysis = await this.analyzeSpatialFrequencies(file);
      if (frequencyAnalysis) indicators.push(frequencyAnalysis);

      // Analyse du bruit et des artefacts
      const noiseAnalysis = await this.analyzeNoise(file);
      if (noiseAnalysis) indicators.push(noiseAnalysis);

    } catch (error) {
      console.error('Erreur lors de l\'analyse d\'image:', error);
    }

    return indicators;
  }

  private async extractExifData(file: File): Promise<any> {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const arrayBuffer = e.target?.result as ArrayBuffer;
        const dataView = new DataView(arrayBuffer);
        
        // Vérification simple de la présence d'EXIF
        const hasExif = this.checkExifPresence(dataView);
        resolve({ hasExif, fileSize: file.size });
      };
      reader.readAsArrayBuffer(file);
    });
  }

  private checkExifPresence(dataView: DataView): boolean {
    try {
      // Vérification de la signature JPEG
      if (dataView.getUint16(0) !== 0xFFD8) return false;
      
      // Recherche du segment EXIF
      let offset = 2;
      while (offset < dataView.byteLength - 4) {
        const marker = dataView.getUint16(offset);
        if (marker === 0xFFE1) {
          const exifHeader = dataView.getUint32(offset + 4);
          return exifHeader === 0x45786966; // "Exif"
        }
        if (marker === 0xFFDA) break; // Start of scan
        offset += 2 + dataView.getUint16(offset + 2);
      }
      return false;
    } catch {
      return false;
    }
  }

  private analyzeExifData(exifData: any): ImageIndicator | null {
    if (!exifData.hasExif) {
      return {
        type: 'metadata',
        description: 'Absence complète de métadonnées EXIF - typique des images générées',
        weight: 0.5,
        confidence: 0.7
      };
    }
    return null;
  }

  private async analyzeColorHistogram(file: File): Promise<ImageIndicator | null> {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(null);
          return;
        }

        canvas.width = Math.min(img.width, 200);
        canvas.height = Math.min(img.height, 200);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const histogram = this.calculateColorHistogram(imageData.data);
        
        // Analyse de la distribution des couleurs
        const uniformity = this.calculateColorUniformity(histogram);
        
        if (uniformity > 0.7) {
          resolve({
            type: 'color_distribution',
            description: `Distribution des couleurs très uniforme (${(uniformity * 100).toFixed(1)}%) - caractéristique des images générées`,
            weight: 0.4,
            confidence: uniformity
          });
        } else {
          resolve(null);
        }
      };
      img.onerror = () => resolve(null);
      img.src = URL.createObjectURL(file);
    });
  }

  private calculateColorHistogram(pixelData: Uint8ClampedArray): number[] {
    const histogram = new Array(256).fill(0);
    
    // Analyse de la luminance
    for (let i = 0; i < pixelData.length; i += 4) {
      const r = pixelData[i];
      const g = pixelData[i + 1];
      const b = pixelData[i + 2];
      const luminance = Math.round(0.299 * r + 0.587 * g + 0.114 * b);
      histogram[luminance]++;
    }
    
    return histogram;
  }

  private calculateColorUniformity(histogram: number[]): number {
    const totalPixels = histogram.reduce((sum, count) => sum + count, 0);
    const expectedCount = totalPixels / histogram.length;
    
    let uniformityScore = 0;
    let significantBins = 0;
    
    for (const count of histogram) {
      if (count > 0) {
        significantBins++;
        const deviation = Math.abs(count - expectedCount);
        uniformityScore += deviation / expectedCount;
      }
    }
    
    return significantBins > 0 ? Math.max(0, 1 - (uniformityScore / significantBins)) : 0;
  }

  private async analyzeCompression(file: File): Promise<ImageIndicator | null> {
    const dimensions = await this.getImageDimensions(file);
    const compressionRatio = file.size / (dimensions.width * dimensions.height * 3); // 3 bytes per pixel RGB
    
    if (compressionRatio < 0.05) {
      return {
        type: 'compression',
        description: `Taux de compression très élevé (${(compressionRatio * 100).toFixed(2)}%) - qualité inhabituelle`,
        weight: 0.3,
        confidence: Math.min((0.05 - compressionRatio) / 0.05, 1)
      };
    }
    
    return null;
  }

  private async analyzeDimensions(file: File): Promise<ImageIndicator | null> {
    const dimensions = await this.getImageDimensions(file);
    
    // Dimensions standard des générateurs d'IA
    const standardSizes = [256, 512, 768, 1024, 1536, 2048];
    const isStandardWidth = standardSizes.includes(dimensions.width);
    const isStandardHeight = standardSizes.includes(dimensions.height);
    const isSquare = dimensions.width === dimensions.height;
    
    if ((isStandardWidth || isStandardHeight) && isSquare) {
      return {
        type: 'dimensions',
        description: `Dimensions carrées standard (${dimensions.width}x${dimensions.height}) - typique des générateurs d'IA`,
        weight: 0.6,
        confidence: 0.8
      };
    }
    
    return null;
  }

  private async analyzeSpatialFrequencies(file: File): Promise<ImageIndicator | null> {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(null);
          return;
        }

        const size = 64; // Taille réduite pour l'analyse
        canvas.width = size;
        canvas.height = size;
        ctx.drawImage(img, 0, 0, size, size);

        const imageData = ctx.getImageData(0, 0, size, size);
        const frequencyAnalysis = this.performFrequencyAnalysis(imageData.data, size);
        
        if (frequencyAnalysis.artificialPattern > 0.6) {
          resolve({
            type: 'frequency_pattern',
            description: `Patterns de fréquences artificiels détectés (score: ${(frequencyAnalysis.artificialPattern * 100).toFixed(1)}%)`,
            weight: 0.5,
            confidence: frequencyAnalysis.artificialPattern
          });
        } else {
          resolve(null);
        }
      };
      img.onerror = () => resolve(null);
      img.src = URL.createObjectURL(file);
    });
  }

  private performFrequencyAnalysis(pixelData: Uint8ClampedArray, size: number): { artificialPattern: number } {
    // Analyse simplifiée des fréquences spatiales
    let highFreqEnergy = 0;
    let totalEnergy = 0;
    
    for (let y = 0; y < size - 1; y++) {
      for (let x = 0; x < size - 1; x++) {
        const i = (y * size + x) * 4;
        const nextX = (y * size + x + 1) * 4;
        const nextY = ((y + 1) * size + x) * 4;
        
        // Calcul des gradients
        const gradX = Math.abs(pixelData[i] - pixelData[nextX]);
        const gradY = Math.abs(pixelData[i] - pixelData[nextY]);
        const gradient = gradX + gradY;
        
        totalEnergy += gradient;
        if (gradient > 50) {
          highFreqEnergy += gradient;
        }
      }
    }
    
    const highFreqRatio = totalEnergy > 0 ? highFreqEnergy / totalEnergy : 0;
    
    // Les images générées ont souvent des patterns de fréquence spécifiques
    const artificialPattern = highFreqRatio < 0.2 ? (0.2 - highFreqRatio) / 0.2 : 0;
    
    return { artificialPattern };
  }

  private async analyzeNoise(file: File): Promise<ImageIndicator | null> {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(null);
          return;
        }

        const size = 100;
        canvas.width = size;
        canvas.height = size;
        ctx.drawImage(img, 0, 0, size, size);

        const imageData = ctx.getImageData(0, 0, size, size);
        const noiseLevel = this.calculateNoiseLevel(imageData.data, size);
        
        if (noiseLevel < 0.1) {
          resolve({
            type: 'noise_level',
            description: `Niveau de bruit très faible (${(noiseLevel * 100).toFixed(1)}%) - image trop lisse`,
            weight: 0.4,
            confidence: (0.1 - noiseLevel) / 0.1
          });
        } else {
          resolve(null);
        }
      };
      img.onerror = () => resolve(null);
      img.src = URL.createObjectURL(file);
    });
  }

  private calculateNoiseLevel(pixelData: Uint8ClampedArray, size: number): number {
    let noiseSum = 0;
    let count = 0;
    
    for (let y = 1; y < size - 1; y++) {
      for (let x = 1; x < size - 1; x++) {
        const i = (y * size + x) * 4;
        const neighbors = [
          (y * size + x - 1) * 4,
          (y * size + x + 1) * 4,
          ((y - 1) * size + x) * 4,
          ((y + 1) * size + x) * 4
        ];
        
        let pixelVariance = 0;
        const centerLuminance = 0.299 * pixelData[i] + 0.587 * pixelData[i + 1] + 0.114 * pixelData[i + 2];
        
        for (const neighborIndex of neighbors) {
          const neighborLuminance = 0.299 * pixelData[neighborIndex] + 0.587 * pixelData[neighborIndex + 1] + 0.114 * pixelData[neighborIndex + 2];
          pixelVariance += Math.abs(centerLuminance - neighborLuminance);
        }
        
        noiseSum += pixelVariance / neighbors.length;
        count++;
      }
    }
    
    return count > 0 ? (noiseSum / count) / 255 : 0;
  }

  private async getImageDimensions(file: File): Promise<{ width: number; height: number }> {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve({ width: img.width, height: img.height });
      img.onerror = () => resolve({ width: 0, height: 0 });
      img.src = URL.createObjectURL(file);
    });
  }

  calculateConfidence(indicators: ImageIndicator[]): number {
    if (indicators.length === 0) return 0;

    const weightedSum = indicators.reduce((sum, indicator) => 
      sum + (indicator.weight * indicator.confidence), 0
    );
    const totalWeight = indicators.reduce((sum, indicator) => sum + indicator.weight, 0);
    
    const baseConfidence = totalWeight > 0 ? weightedSum / totalWeight : 0;
    
    return Math.min(1 / (1 + Math.exp(-4 * (baseConfidence - 0.5))), 0.92);
  }
}
