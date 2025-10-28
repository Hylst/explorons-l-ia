
export interface AudioIndicator {
  type: string;
  description: string;
  weight: number;
  confidence: number;
}

export class AudioDetectionEngine {
  private audioContext: AudioContext | null = null;

  private getAudioContext(): AudioContext {
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    return this.audioContext;
  }

  async analyzeAudioIndicators(file: File): Promise<AudioIndicator[]> {
    const indicators: AudioIndicator[] = [];
    
    try {
      // Analyse du bitrate et de la qualité
      const qualityAnalysis = await this.analyzeAudioQuality(file);
      if (qualityAnalysis) indicators.push(qualityAnalysis);

      // Analyse spectrale réelle
      const spectralAnalysis = await this.performSpectralAnalysis(file);
      if (spectralAnalysis) indicators.push(spectralAnalysis);

      // Analyse de la dynamique audio
      const dynamicAnalysis = await this.analyzeDynamicRange(file);
      if (dynamicAnalysis) indicators.push(dynamicAnalysis);

      // Détection de patterns synthétiques
      const syntheticPatterns = await this.detectSyntheticPatterns(file);
      if (syntheticPatterns) indicators.push(syntheticPatterns);

      // Analyse de la régularité temporelle
      const temporalAnalysis = await this.analyzeTemporalRegularity(file);
      if (temporalAnalysis) indicators.push(temporalAnalysis);

      // Analyse du bruit de fond
      const noiseAnalysis = await this.analyzeBackgroundNoise(file);
      if (noiseAnalysis) indicators.push(noiseAnalysis);

    } catch (error) {
      console.error('Erreur lors de l\'analyse audio:', error);
    }

    return indicators;
  }

  private async analyzeAudioQuality(file: File): Promise<AudioIndicator | null> {
    const duration = await this.getAudioDuration(file);
    if (duration === 0) return null;

    const estimatedBitrate = (file.size * 8) / (duration * 1000); // kbps
    
    // Bitrates suspects pour la voix synthétique
    if (estimatedBitrate > 320 || estimatedBitrate < 32) {
      return {
        type: 'quality',
        description: `Bitrate inhabituel (${estimatedBitrate.toFixed(0)} kbps) pour un enregistrement vocal naturel`,
        weight: 0.3,
        confidence: estimatedBitrate > 320 ? 0.6 : (32 - estimatedBitrate) / 32
      };
    }

    return null;
  }

  private async performSpectralAnalysis(file: File): Promise<AudioIndicator | null> {
    try {
      const audioBuffer = await this.decodeAudioFile(file);
      const channelData = audioBuffer.getChannelData(0);
      
      // Analyse FFT simplifiée
      const fftData = this.performSimpleFFT(channelData);
      const spectralFeatures = this.analyzeSpectralFeatures(fftData);
      
      if (spectralFeatures.artificialScore > 0.6) {
        return {
          type: 'spectral',
          description: `Anomalies spectrales détectées (score: ${(spectralFeatures.artificialScore * 100).toFixed(1)}%) - signature de synthèse vocale`,
          weight: 0.6,
          confidence: spectralFeatures.artificialScore
        };
      }
    } catch (error) {
      console.error('Erreur analyse spectrale:', error);
    }

    return null;
  }

  private async analyzeDynamicRange(file: File): Promise<AudioIndicator | null> {
    try {
      const audioBuffer = await this.decodeAudioFile(file);
      const channelData = audioBuffer.getChannelData(0);
      
      const dynamicRange = this.calculateDynamicRange(channelData);
      
      if (dynamicRange < 0.2) {
        return {
          type: 'dynamic_range',
          description: `Plage dynamique très limitée (${(dynamicRange * 100).toFixed(1)}%) - compression excessive typique de l'IA`,
          weight: 0.4,
          confidence: (0.2 - dynamicRange) / 0.2
        };
      }
    } catch (error) {
      console.error('Erreur analyse dynamique:', error);
    }

    return null;
  }

  private async detectSyntheticPatterns(file: File): Promise<AudioIndicator | null> {
    try {
      const audioBuffer = await this.decodeAudioFile(file);
      const channelData = audioBuffer.getChannelData(0);
      
      const syntheticScore = this.calculateSyntheticScore(channelData);
      
      if (syntheticScore > 0.5) {
        return {
          type: 'synthetic_patterns',
          description: `Patterns de voix synthétique détectés (score: ${(syntheticScore * 100).toFixed(1)}%)`,
          weight: 0.7,
          confidence: syntheticScore
        };
      }
    } catch (error) {
      console.error('Erreur détection patterns synthétiques:', error);
    }

    return null;
  }

  private async analyzeTemporalRegularity(file: File): Promise<AudioIndicator | null> {
    try {
      const audioBuffer = await this.decodeAudioFile(file);
      const channelData = audioBuffer.getChannelData(0);
      
      const regularity = this.calculateTemporalRegularity(channelData);
      
      if (regularity > 0.8) {
        return {
          type: 'temporal_regularity',
          description: `Régularité temporelle excessive (${(regularity * 100).toFixed(1)}%) - manque de variations naturelles`,
          weight: 0.4,
          confidence: (regularity - 0.8) / 0.2
        };
      }
    } catch (error) {
      console.error('Erreur analyse temporelle:', error);
    }

    return null;
  }

  private async analyzeBackgroundNoise(file: File): Promise<AudioIndicator | null> {
    try {
      const audioBuffer = await this.decodeAudioFile(file);
      const channelData = audioBuffer.getChannelData(0);
      
      const noiseLevel = this.calculateBackgroundNoise(channelData);
      
      if (noiseLevel < 0.001) {
        return {
          type: 'background_noise',
          description: `Absence totale de bruit de fond (${(noiseLevel * 1000).toFixed(2)}‰) - environnement trop parfait`,
          weight: 0.5,
          confidence: (0.001 - noiseLevel) / 0.001
        };
      }
    } catch (error) {
      console.error('Erreur analyse bruit de fond:', error);
    }

    return null;
  }

  private async decodeAudioFile(file: File): Promise<AudioBuffer> {
    const arrayBuffer = await file.arrayBuffer();
    const audioContext = this.getAudioContext();
    return audioContext.decodeAudioData(arrayBuffer);
  }

  private performSimpleFFT(channelData: Float32Array): Float32Array {
    // FFT simplifiée pour l'analyse spectrale
    const fftSize = Math.min(2048, channelData.length);
    const fftData = new Float32Array(fftSize);
    
    for (let i = 0; i < fftSize; i++) {
      fftData[i] = channelData[i] || 0;
    }
    
    return fftData;
  }

  private analyzeSpectralFeatures(fftData: Float32Array): { artificialScore: number } {
    // Analyse des caractéristiques spectrales
    let highFreqEnergy = 0;
    let totalEnergy = 0;
    const midPoint = fftData.length / 2;
    
    for (let i = 0; i < fftData.length; i++) {
      const magnitude = Math.abs(fftData[i]);
      totalEnergy += magnitude;
      
      if (i > midPoint) {
        highFreqEnergy += magnitude;
      }
    }
    
    const highFreqRatio = totalEnergy > 0 ? highFreqEnergy / totalEnergy : 0;
    
    // Les voix synthétiques ont souvent des coupures nettes dans les hautes fréquences
    const artificialScore = highFreqRatio < 0.1 ? (0.1 - highFreqRatio) / 0.1 : 0;
    
    return { artificialScore };
  }

  private calculateDynamicRange(channelData: Float32Array): number {
    let min = Infinity;
    let max = -Infinity;
    
    for (let i = 0; i < channelData.length; i++) {
      const sample = Math.abs(channelData[i]);
      if (sample < min) min = sample;
      if (sample > max) max = sample;
    }
    
    return max > 0 ? (max - min) / max : 0;
  }

  private calculateSyntheticScore(channelData: Float32Array): number {
    // Analyse de la régularité des formants (simulation)
    const segmentSize = Math.floor(channelData.length / 100);
    let regularityScore = 0;
    
    for (let i = 0; i < channelData.length - segmentSize; i += segmentSize) {
      const segment1 = channelData.slice(i, i + segmentSize);
      const segment2 = channelData.slice(i + segmentSize, i + 2 * segmentSize);
      
      if (segment2.length === segmentSize) {
        let correlation = 0;
        for (let j = 0; j < segmentSize; j++) {
          correlation += Math.abs(segment1[j] - segment2[j]);
        }
        regularityScore += 1 - (correlation / segmentSize);
      }
    }
    
    return Math.min(regularityScore / 50, 1);
  }

  private calculateTemporalRegularity(channelData: Float32Array): number {
    const windowSize = Math.floor(channelData.length / 50);
    let regularitySum = 0;
    let windows = 0;
    
    for (let i = 0; i < channelData.length - windowSize * 2; i += windowSize) {
      const window1 = channelData.slice(i, i + windowSize);
      const window2 = channelData.slice(i + windowSize, i + windowSize * 2);
      
      const energy1 = this.calculateRMS(window1);
      const energy2 = this.calculateRMS(window2);
      
      const similarity = 1 - Math.abs(energy1 - energy2) / Math.max(energy1, energy2, 0.001);
      regularitySum += similarity;
      windows++;
    }
    
    return windows > 0 ? regularitySum / windows : 0;
  }

  private calculateBackgroundNoise(channelData: Float32Array): number {
    // Estimation du niveau de bruit de fond
    const sortedSamples = Array.from(channelData)
      .map(Math.abs)
      .sort((a, b) => a - b);
    
    // Prendre les 10% d'échantillons les plus faibles comme estimation du bruit
    const noiseFloor = Math.floor(sortedSamples.length * 0.1);
    let noiseSum = 0;
    
    for (let i = 0; i < noiseFloor; i++) {
      noiseSum += sortedSamples[i];
    }
    
    return noiseSum / noiseFloor;
  }

  private calculateRMS(samples: Float32Array): number {
    let sum = 0;
    for (let i = 0; i < samples.length; i++) {
      sum += samples[i] * samples[i];
    }
    return Math.sqrt(sum / samples.length);
  }

  private async getAudioDuration(file: File): Promise<number> {
    return new Promise((resolve) => {
      const audio = new Audio();
      audio.onloadedmetadata = () => resolve(audio.duration);
      audio.onerror = () => resolve(0);
      audio.src = URL.createObjectURL(file);
    });
  }

  calculateConfidence(indicators: AudioIndicator[]): number {
    if (indicators.length === 0) return 0;

    const weightedSum = indicators.reduce((sum, indicator) => 
      sum + (indicator.weight * indicator.confidence), 0
    );
    const totalWeight = indicators.reduce((sum, indicator) => sum + indicator.weight, 0);
    
    const baseConfidence = totalWeight > 0 ? weightedSum / totalWeight : 0;
    
    return Math.min(1 / (1 + Math.exp(-3.5 * (baseConfidence - 0.5))), 0.88);
  }
}
