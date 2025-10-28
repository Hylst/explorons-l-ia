
import { TextDetectionEngine, TextIndicator } from './textDetection';
import { ImageDetectionEngine, ImageIndicator } from './imageDetection';
import { AudioDetectionEngine, AudioIndicator } from './audioDetection';
import { PatternDetector } from './patternDetector';
import { EntropyCalculator } from './entropyCalculator';
import { AdvancedImageAnalysis } from './advancedImageAnalysis';

export interface EnsembleResult {
  finalScore: number;
  methodScores: {
    statistical: number;
    pattern: number;
    entropy: number;
    advanced?: number;
  };
  confidence: number;
  reasoning: string[];
  indicators: (TextIndicator | ImageIndicator | AudioIndicator)[];
}

export class EnsembleDetector {
  private textEngine = new TextDetectionEngine();
  private imageEngine = new ImageDetectionEngine();
  private audioEngine = new AudioDetectionEngine();

  async analyzeText(text: string): Promise<EnsembleResult> {
    const reasoning: string[] = [];
    const allIndicators: TextIndicator[] = [];

    // Method 1: Statistical analysis
    const statisticalIndicators = this.textEngine.analyzeTextIndicators(text);
    const statisticalScore = this.textEngine.calculateConfidence(statisticalIndicators);
    allIndicators.push(...statisticalIndicators);

    if (statisticalScore > 0.6) {
      reasoning.push(`Analyse statistique: Score élevé de ${(statisticalScore * 100).toFixed(1)}%`);
    }

    // Method 2: Pattern detection
    const patterns = PatternDetector.detectAIPatterns(text);
    const patternScore = patterns.reduce((sum, p) => sum + p.confidence, 0) / Math.max(patterns.length, 1);
    
    if (patterns.length > 0) {
      reasoning.push(`${patterns.length} patterns IA détectés avec confiance moyenne de ${(patternScore * 100).toFixed(1)}%`);
    }

    // Method 3: Entropy analysis
    const shannonEntropy = EntropyCalculator.calculateShannonEntropy(text);
    const ngramEntropy = EntropyCalculator.calculateNGramEntropy(text);
    const burstiness = EntropyCalculator.calculateBurstiness(text);
    const lexicalDiversity = PatternDetector.analyzeLexicalDiversity(text);

    let entropyScore = 0;
    if (shannonEntropy < 4.5) entropyScore += 0.3;
    if (ngramEntropy < 5.0) entropyScore += 0.2;
    if (burstiness < 0.1) entropyScore += 0.3;
    if (lexicalDiversity < 0.4) entropyScore += 0.2;

    if (entropyScore > 0.5) {
      reasoning.push(`Entropie anormalement basse: Shannon=${shannonEntropy.toFixed(2)}, N-gram=${ngramEntropy.toFixed(2)}`);
    }

    // Method 4: Semantic coherence
    const coherence = PatternDetector.calculateSemanticCoherence(text);
    const repetitiveness = PatternDetector.detectRepetitiveStructures(text);

    let semanticScore = 0;
    if (coherence > 0.8) semanticScore += 0.5;
    if (repetitiveness > 0.3) semanticScore += 0.5;

    if (semanticScore > 0.5) {
      reasoning.push(`Structure sémantique suspecte: cohérence=${(coherence * 100).toFixed(1)}%, répétitivité=${(repetitiveness * 100).toFixed(1)}%`);
    }

    // Ensemble scoring
    const methodScores = {
      statistical: statisticalScore,
      pattern: patternScore,
      entropy: entropyScore,
      advanced: semanticScore
    };

    const finalScore = this.calculateEnsembleScore(methodScores);
    const confidence = this.calculateEnsembleConfidence(methodScores, text.length);

    return {
      finalScore,
      methodScores,
      confidence,
      reasoning,
      indicators: allIndicators
    };
  }

  async analyzeImage(file: File): Promise<EnsembleResult> {
    const reasoning: string[] = [];
    const allIndicators: ImageIndicator[] = [];

    // Method 1: Standard image analysis
    const standardIndicators = await this.imageEngine.analyzeImageIndicators(file);
    const standardScore = this.imageEngine.calculateConfidence(standardIndicators);
    allIndicators.push(...standardIndicators);

    if (standardScore > 0.5) {
      reasoning.push(`Analyse standard: ${standardIndicators.length} anomalies détectées`);
    }

    // Method 2: Advanced feature analysis
    const advancedScore = await this.performAdvancedImageAnalysis(file);
    
    if (advancedScore > 0.6) {
      reasoning.push(`Analyse avancée: Features suspectes détectées (score: ${(advancedScore * 100).toFixed(1)}%)`);
    }

    // Method 3: Metadata analysis
    const metadataScore = await this.analyzeImageMetadata(file);
    
    if (metadataScore > 0.5) {
      reasoning.push(`Métadonnées suspectes ou manquantes`);
    }

    const methodScores = {
      statistical: standardScore,
      pattern: metadataScore,
      entropy: advancedScore
    };

    const finalScore = this.calculateEnsembleScore(methodScores);
    const confidence = this.calculateEnsembleConfidence(methodScores, file.size);

    return {
      finalScore,
      methodScores,
      confidence,
      reasoning,
      indicators: allIndicators
    };
  }

  async analyzeAudio(file: File): Promise<EnsembleResult> {
    const reasoning: string[] = [];
    const allIndicators: AudioIndicator[] = [];

    // Method 1: Standard audio analysis
    const standardIndicators = await this.audioEngine.analyzeAudioIndicators(file);
    const standardScore = this.audioEngine.calculateConfidence(standardIndicators);
    allIndicators.push(...standardIndicators);

    if (standardScore > 0.5) {
      reasoning.push(`Analyse spectrale: ${standardIndicators.length} anomalies détectées`);
    }

    // Method 2: Advanced temporal analysis
    const temporalScore = await this.performAdvancedAudioAnalysis(file);
    
    if (temporalScore > 0.6) {
      reasoning.push(`Analyse temporelle: Patterns de synthèse vocale détectés`);
    }

    const methodScores = {
      statistical: standardScore,
      pattern: temporalScore,
      entropy: 0
    };

    const finalScore = this.calculateEnsembleScore(methodScores);
    const confidence = this.calculateEnsembleConfidence(methodScores, file.size);

    return {
      finalScore,
      methodScores,
      confidence,
      reasoning,
      indicators: allIndicators
    };
  }

  private async performAdvancedImageAnalysis(file: File): Promise<number> {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = async () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(0);
          return;
        }

        const size = Math.min(256, img.width, img.height);
        canvas.width = size;
        canvas.height = size;
        ctx.drawImage(img, 0, 0, size, size);

        const imageData = ctx.getImageData(0, 0, size, size);
        const features = await AdvancedImageAnalysis.extractFeatures(imageData);

        // Analyze features for AI generation signatures
        let suspicionScore = 0;

        // Check color distribution uniformity
        const colorVariance = this.calculateVariance(features.colorHistogram);
        if (colorVariance < 0.001) suspicionScore += 0.3;

        // Check texture regularity
        const textureEntropy = this.calculateVariance(features.textureFeatures);
        if (textureEntropy < 0.05) suspicionScore += 0.4;

        // Check edge distribution
        const edgeUniformity = this.calculateUniformity(features.edgeDistribution);
        if (edgeUniformity > 0.8) suspicionScore += 0.3;

        resolve(Math.min(suspicionScore, 1));
      };
      img.onerror = () => resolve(0);
      img.src = URL.createObjectURL(file);
    });
  }

  private async performAdvancedAudioAnalysis(file: File): Promise<number> {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const arrayBuffer = await file.arrayBuffer();
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
      
      const channelData = audioBuffer.getChannelData(0);
      
      // Advanced temporal analysis
      const windowSize = Math.min(4096, channelData.length);
      let totalSuspicion = 0;
      let windows = 0;
      
      for (let i = 0; i < channelData.length - windowSize; i += windowSize / 2) {
        const window = channelData.slice(i, i + windowSize);
        
        // Check for unnatural periodicity
        const autocorr = this.calculateAutocorrelation(window);
        const maxAutocorr = Math.max(...autocorr.slice(1));
        
        if (maxAutocorr > 0.9) {
          totalSuspicion += 0.3; // Too periodic for natural speech
        }
        
        // Check spectral flatness
        const spectralFlatness = this.calculateSpectralFlatness(window);
        if (spectralFlatness > 0.95) {
          totalSuspicion += 0.2; // Too flat spectrum
        }
        
        windows++;
      }
      
      return Math.min(totalSuspicion / windows, 1);
    } catch (error) {
      return 0;
    }
  }

  private async analyzeImageMetadata(file: File): Promise<number> {
    const reader = new FileReader();
    
    return new Promise((resolve) => {
      reader.onload = (e) => {
        const arrayBuffer = e.target?.result as ArrayBuffer;
        const dataView = new DataView(arrayBuffer);
        
        let suspicionScore = 0;
        
        // Check for JPEG markers
        if (dataView.getUint16(0) === 0xFFD8) {
          let hasExif = false;
          let hasPhotoshop = false;
          
          let offset = 2;
          while (offset < dataView.byteLength - 4) {
            const marker = dataView.getUint16(offset);
            
            if (marker === 0xFFE1) {
              const segmentLength = dataView.getUint16(offset + 2);
              const exifHeader = dataView.getUint32(offset + 4);
              if (exifHeader === 0x45786966) hasExif = true;
            }
            
            if (marker === 0xFFED) hasPhotoshop = true;
            if (marker === 0xFFDA) break;
            
            const segmentLength = dataView.getUint16(offset + 2);
            offset += 2 + segmentLength;
          }
          
          if (!hasExif) suspicionScore += 0.6;
          if (hasPhotoshop) suspicionScore -= 0.2;
        }
        
        // Check file size to dimension ratio
        const estimatedPixels = file.size / 3; // Rough estimate
        const expectedFileSize = Math.sqrt(estimatedPixels);
        
        if (expectedFileSize > 0) {
          const sizeRatio = file.size / (expectedFileSize * expectedFileSize * 3);
          if (sizeRatio < 0.1 || sizeRatio > 10) {
            suspicionScore += 0.3;
          }
        }
        
        resolve(Math.min(suspicionScore, 1));
      };
      
      reader.onerror = () => resolve(0);
      reader.readAsArrayBuffer(file);
    });
  }

  private calculateEnsembleScore(methodScores: any): number {
    const weights = {
      statistical: 0.3,
      pattern: 0.25,
      entropy: 0.25,
      advanced: 0.2
    };
    
    let weightedSum = 0;
    let totalWeight = 0;
    
    for (const [method, score] of Object.entries(methodScores)) {
      if (typeof score === 'number' && weights[method as keyof typeof weights]) {
        const weight = weights[method as keyof typeof weights];
        weightedSum += score * weight;
        totalWeight += weight;
      }
    }
    
    return totalWeight > 0 ? weightedSum / totalWeight : 0;
  }

  private calculateEnsembleConfidence(methodScores: any, dataSize: number): number {
    const scores = Object.values(methodScores).filter(s => typeof s === 'number') as number[];
    const variance = this.calculateVariance(scores);
    
    // High agreement between methods = high confidence
    const agreement = 1 - Math.min(variance * 4, 1);
    
    // Larger data = higher confidence (up to a point)
    const sizeConfidence = Math.min(dataSize / 10000, 1);
    
    return (agreement * 0.7 + sizeConfidence * 0.3);
  }

  private calculateVariance(values: number[]): number {
    if (values.length === 0) return 0;
    const mean = values.reduce((sum, val) => sum + val, 0) / values.length;
    const variance = values.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / values.length;
    return variance;
  }

  private calculateUniformity(values: number[]): number {
    if (values.length === 0) return 0;
    const mean = values.reduce((sum, val) => sum + val, 0) / values.length;
    const deviations = values.map(val => Math.abs(val - mean));
    const avgDeviation = deviations.reduce((sum, val) => sum + val, 0) / deviations.length;
    return 1 - Math.min(avgDeviation * 2, 1);
  }

  private calculateAutocorrelation(signal: Float32Array): number[] {
    const n = signal.length;
    const result = new Array(n / 2);
    
    for (let lag = 0; lag < n / 2; lag++) {
      let sum = 0;
      let count = 0;
      
      for (let i = 0; i < n - lag; i++) {
        sum += signal[i] * signal[i + lag];
        count++;
      }
      
      result[lag] = count > 0 ? sum / count : 0;
    }
    
    return result;
  }

  private calculateSpectralFlatness(signal: Float32Array): number {
    // Simplified spectral flatness calculation
    const fft = this.simpleFFT(signal);
    const magnitudes = fft.map(Math.abs).filter(mag => mag > 0);
    
    if (magnitudes.length === 0) return 0;
    
    const geometricMean = Math.exp(magnitudes.reduce((sum, mag) => sum + Math.log(mag), 0) / magnitudes.length);
    const arithmeticMean = magnitudes.reduce((sum, mag) => sum + mag, 0) / magnitudes.length;
    
    return arithmeticMean > 0 ? geometricMean / arithmeticMean : 0;
  }

  private simpleFFT(signal: Float32Array): number[] {
    // Very simplified FFT - in practice, you'd use a proper FFT implementation
    const n = Math.min(signal.length, 256);
    const result = new Array(n);
    
    for (let k = 0; k < n; k++) {
      let real = 0;
      let imag = 0;
      
      for (let i = 0; i < n; i++) {
        const angle = -2 * Math.PI * k * i / n;
        real += signal[i] * Math.cos(angle);
        imag += signal[i] * Math.sin(angle);
      }
      
      result[k] = Math.sqrt(real * real + imag * imag);
    }
    
    return result;
  }
}
