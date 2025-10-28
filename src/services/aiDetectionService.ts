import { TextDetectionEngine, TextIndicator } from './detection/textDetection';
import { ImageDetectionEngine, ImageIndicator } from './detection/imageDetection';
import { AudioDetectionEngine, AudioIndicator } from './detection/audioDetection';
import { DetectionPreset, getPresetById } from './detection/detectionPresets';
import { ExportService } from './exportService';
import { EnsembleDetector } from './detection/ensembleDetector';
import { MetadataAnalyzer } from './detection/metadataAnalyzer';
import { MLDetector } from './detection/mlDetector';

export interface DetectionResult {
  id: string;
  fileName: string;
  fileType: 'text' | 'image' | 'audio';
  isAIGenerated: boolean;
  confidence: number;
  analysis: {
    method: string;
    details: string;
    indicators: string[];
    timestamp: string;
    preset?: string;
    processingTime: number;
  };
  metadata?: {
    fileSize: number;
    duration?: number;
    dimensions?: { width: number; height: number };
  };
  rawIndicators?: (TextIndicator | ImageIndicator | AudioIndicator)[];
}

export interface DetectionProvider {
  name: string;
  type: 'text' | 'image' | 'audio' | 'all';
  enabled: boolean;
  apiKey?: string;
}

class AIDetectionService {
  private textEngine = new TextDetectionEngine();
  private imageEngine = new ImageDetectionEngine();
  private audioEngine = new AudioDetectionEngine();
  private ensembleDetector = new EnsembleDetector();

  private providers: DetectionProvider[] = [
    { name: 'GPTZero', type: 'text', enabled: true },
    { name: 'AI Content Detector', type: 'text', enabled: true },
    { name: 'Hive Moderation', type: 'image', enabled: true },
    { name: 'DeepWare', type: 'audio', enabled: true },
    { name: 'Originality.ai', type: 'text', enabled: true },
    { name: 'Copyleaks', type: 'text', enabled: true },
  ];

  async detectText(text: string, presetId?: string): Promise<DetectionResult> {
    const startTime = performance.now();
    const preset = presetId ? getPresetById(presetId) : undefined;
    
    // Utiliser la détection ensemble + ML
    const ensembleResult = await this.ensembleDetector.analyzeText(text);
    const mlResult = await MLDetector.detectTextWithML(text);
    
    // Combiner les résultats
    let confidence = ensembleResult.finalScore * 0.7 + mlResult.confidence * 0.3;
    
    if (preset?.settings.thresholds?.text) {
      confidence = confidence * this.getSensitivityMultiplier(preset.settings.sensitivity);
    }
    
    const isAIGenerated = confidence > (preset?.settings.thresholds?.text || 0.7);
    const processingTime = performance.now() - startTime;

    // Détails d'analyse enrichis
    const analysisDetails = this.buildEnhancedTextAnalysisDetails(
      text, 
      ensembleResult, 
      mlResult, 
      confidence
    );

    const combinedReasoning = [
      ...ensembleResult.reasoning,
      ...mlResult.reasoning
    ];

    return this.createDetectionResult({
      fileType: 'text',
      fileName: 'text_input.txt',
      isAIGenerated,
      confidence: Math.min(confidence, 0.95),
      method: `Analyse Hybride Ensemble + ML (${mlResult.modelUsed})`,
      details: analysisDetails,
      indicators: combinedReasoning,
      preset: preset?.name,
      processingTime,
      metadata: { fileSize: text.length },
      rawIndicators: ensembleResult.indicators
    });
  }

  async detectImage(file: File, presetId?: string): Promise<DetectionResult> {
    const startTime = performance.now();
    const preset = presetId ? getPresetById(presetId) : undefined;
    
    // Analyse ensemble
    const ensembleResult = await this.ensembleDetector.analyzeImage(file);
    
    // Analyse des métadonnées
    const metadataResult = await MetadataAnalyzer.analyzeImageMetadata(file);
    const metadataConfidence = MetadataAnalyzer.calculateMetadataConfidence(metadataResult.indicators);
    
    // Analyse ML sur les données d'image
    const imageData = await this.extractImageData(file);
    const mlResult = await MLDetector.detectImageWithML(imageData);
    
    // Combiner tous les résultats
    let confidence = (
      ensembleResult.finalScore * 0.4 + 
      metadataConfidence * 0.35 + 
      mlResult.confidence * 0.25
    );
    
    if (preset?.settings.thresholds?.image) {
      confidence = confidence * this.getSensitivityMultiplier(preset.settings.sensitivity);
    }
    
    const isAIGenerated = confidence > (preset?.settings.thresholds?.image || 0.6);
    const processingTime = performance.now() - startTime;
    const dimensions = await this.getImageDimensions(file);

    const analysisDetails = this.buildEnhancedImageAnalysisDetails(
      ensembleResult, 
      metadataResult,
      mlResult,
      dimensions, 
      file.size
    );

    const combinedReasoning = [
      ...ensembleResult.reasoning,
      ...metadataResult.indicators.map(ind => ind.description),
      ...mlResult.reasoning
    ];

    return this.createDetectionResult({
      fileType: 'image',
      fileName: file.name,
      isAIGenerated,
      confidence: Math.min(confidence, 0.92),
      method: `Analyse Hybride Multi-Couches (Ensemble + Métadonnées + ${mlResult.modelUsed})`,
      details: analysisDetails,
      indicators: combinedReasoning,
      preset: preset?.name,
      processingTime,
      metadata: {
        fileSize: file.size,
        dimensions,
        metadataAnalysis: metadataResult.metadata
      },
      rawIndicators: ensembleResult.indicators
    });
  }

  async detectAudio(file: File, presetId?: string): Promise<DetectionResult> {
    const startTime = performance.now();
    const preset = presetId ? getPresetById(presetId) : undefined;
    
    // Analyse ensemble avec techniques avancées
    const ensembleResult = await this.ensembleDetector.analyzeAudio(file);
    
    let confidence = ensembleResult.finalScore;
    
    if (preset?.settings.thresholds?.audio) {
      confidence = confidence * this.getSensitivityMultiplier(preset.settings.sensitivity);
    }
    
    const isAIGenerated = confidence > (preset?.settings.thresholds?.audio || 0.65);
    const processingTime = performance.now() - startTime;
    const duration = await this.getAudioDuration(file);

    const analysisDetails = this.buildEnhancedAudioAnalysisDetails(
      ensembleResult, 
      duration, 
      file.size
    );

    return this.createDetectionResult({
      fileType: 'audio',
      fileName: file.name,
      isAIGenerated,
      confidence: Math.min(confidence, 0.88),
      method: 'Analyse Ensemble Multi-Méthodes Avancée (Spectrale + Temporelle + Autocorrélation + Métadonnées)',
      details: analysisDetails,
      indicators: ensembleResult.reasoning,
      preset: preset?.name,
      processingTime,
      metadata: {
        fileSize: file.size,
        duration,
      },
      rawIndicators: ensembleResult.indicators
    });
  }

  private buildEnhancedTextAnalysisDetails(
    text: string, 
    ensembleResult: any, 
    mlResult: any, 
    confidence: number
  ): string {
    const words = text.match(/\b\w+\b/g) || [];
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const paragraphs = text.split('\n\n').filter(p => p.trim().length > 0);
    
    return `Analyse hybride de ${text.length} caractères, ${words.length} mots, ${sentences.length} phrases, ${paragraphs.length} paragraphes. ` +
           `Ensemble: Statistique=${(ensembleResult.methodScores.statistical * 100).toFixed(1)}%, ` +
           `Patterns=${(ensembleResult.methodScores.pattern * 100).toFixed(1)}%, ` +
           `Entropie=${(ensembleResult.methodScores.entropy * 100).toFixed(1)}%, ` +
           `Sémantique=${(ensembleResult.methodScores.advanced * 100).toFixed(1)}%. ` +
           `ML (${mlResult.modelUsed}): ${(mlResult.confidence * 100).toFixed(1)}% en ${mlResult.processingTime.toFixed(0)}ms. ` +
           `Score final combiné: ${(confidence * 100).toFixed(1)}%. ` +
           `Confiance globale: ${(ensembleResult.confidence * 100).toFixed(1)}%.`;
  }

  private buildEnhancedImageAnalysisDetails(
    ensembleResult: any, 
    metadataResult: any,
    mlResult: any,
    dimensions: { width: number; height: number }, 
    fileSize: number
  ): string {
    const megapixels = (dimensions.width * dimensions.height / 1000000).toFixed(1);
    const fileSizeMB = (fileSize / (1024 * 1024)).toFixed(2);
    
    return `Image ${dimensions.width}×${dimensions.height} (${megapixels}MP), ${fileSizeMB}MB. ` +
           `Ensemble: Standard=${(ensembleResult.methodScores.statistical * 100).toFixed(1)}%, ` +
           `Métadonnées=${(ensembleResult.methodScores.pattern * 100).toFixed(1)}%, ` +
           `Features=${(ensembleResult.methodScores.entropy * 100).toFixed(1)}%. ` +
           `Métadonnées détaillées: ${metadataResult.indicators.length} indicateurs détectés. ` +
           `ML (${mlResult.modelUsed}): ${(mlResult.confidence * 100).toFixed(1)}% en ${mlResult.processingTime.toFixed(0)}ms. ` +
           `Confiance globale: ${(ensembleResult.confidence * 100).toFixed(1)}%.`;
  }

  private async extractImageData(file: File): Promise<ImageData> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Impossible de créer le contexte canvas'));
          return;
        }
        
        canvas.width = Math.min(img.width, 512);
        canvas.height = Math.min(img.height, 512);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        resolve(imageData);
      };
      img.onerror = () => reject(new Error('Impossible de charger l\'image'));
      img.src = URL.createObjectURL(file);
    });
  }

  private buildEnhancedAudioAnalysisDetails(ensembleResult: any, duration: number, fileSize: number): string {
    const fileSizeMB = (fileSize / (1024 * 1024)).toFixed(2);
    const durationMin = (duration / 60).toFixed(1);
    const bitrate = duration > 0 ? ((fileSize * 8) / (duration * 1000)).toFixed(0) : 'N/A';
    
    return `Audio ${durationMin}min, ${fileSizeMB}MB, ${bitrate}kbps estimé. ` +
           `Analyse ensemble: Standard=${(ensembleResult.methodScores.statistical * 100).toFixed(1)}%, ` +
           `Temporelle avancée=${(ensembleResult.methodScores.pattern * 100).toFixed(1)}%. ` +
           `Confiance de l'ensemble: ${(ensembleResult.confidence * 100).toFixed(1)}%.`;
  }

  private createDetectionResult(params: {
    fileType: 'text' | 'image' | 'audio';
    fileName: string;
    isAIGenerated: boolean;
    confidence: number;
    method: string;
    details: string;
    indicators: string[];
    preset?: string;
    processingTime: number;
    metadata?: any;
    rawIndicators?: any[];
  }): DetectionResult {
    return {
      id: `${params.fileType}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      fileName: params.fileName,
      fileType: params.fileType,
      isAIGenerated: params.isAIGenerated,
      confidence: params.confidence,
      analysis: {
        method: params.method,
        details: params.details,
        indicators: params.indicators,
        timestamp: new Date().toISOString(),
        preset: params.preset,
        processingTime: Math.round(params.processingTime)
      },
      metadata: params.metadata,
      rawIndicators: params.rawIndicators
    };
  }

  private getSensitivityMultiplier(sensitivity: 'low' | 'medium' | 'high'): number {
    switch (sensitivity) {
      case 'high': return 1.2;
      case 'low': return 0.8;
      default: return 1;
    }
  }

  private async getImageDimensions(file: File): Promise<{ width: number; height: number }> {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve({ width: img.width, height: img.height });
      img.onerror = () => resolve({ width: 0, height: 0 });
      img.src = URL.createObjectURL(file);
    });
  }

  private async getAudioDuration(file: File): Promise<number> {
    return new Promise((resolve) => {
      const audio = new Audio();
      audio.onloadedmetadata = () => resolve(audio.duration);
      audio.onerror = () => resolve(0);
      audio.src = URL.createObjectURL(file);
    });
  }

  saveAnalysis(result: DetectionResult): void {
    const history = this.getAnalysisHistory();
    history.unshift(result);
    if (history.length > 100) {
      history.splice(100);
    }
    localStorage.setItem('ai_detection_history', JSON.stringify(history));
  }

  getAnalysisHistory(): DetectionResult[] {
    const stored = localStorage.getItem('ai_detection_history');
    return stored ? JSON.parse(stored) : [];
  }

  clearHistory(): void {
    localStorage.removeItem('ai_detection_history');
  }

  exportResults(results: DetectionResult[], format: 'json' | 'csv'): string {
    return format === 'json' 
      ? ExportService.exportToJson(results)
      : ExportService.exportToCsv(results);
  }

  getProviders(): DetectionProvider[] {
    return [...this.providers];
  }

  updateProvider(name: string, enabled: boolean, apiKey?: string): void {
    const provider = this.providers.find(p => p.name === name);
    if (provider) {
      provider.enabled = enabled;
      if (apiKey !== undefined) provider.apiKey = apiKey;
    }
  }
}

export const aiDetectionService = new AIDetectionService();
