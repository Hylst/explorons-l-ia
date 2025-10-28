
import { DetectionResult } from './aiDetectionService';

export class ExportService {
  static exportToJson(results: DetectionResult[]): string {
    return JSON.stringify(results, null, 2);
  }

  static exportToCsv(results: DetectionResult[]): string {
    const headers = 'Fichier,Type,IA Détectée,Confiance,Méthode,Preset,Temps de traitement,Timestamp\n';
    const rows = results.map(r => 
      `"${r.fileName}","${r.fileType}","${r.isAIGenerated}","${(r.confidence * 100).toFixed(1)}%","${r.analysis.method}","${r.analysis.preset || 'Aucun'}","${r.analysis.processingTime}ms","${r.analysis.timestamp}"`
    ).join('\n');
    return headers + rows;
  }

  static downloadFile(content: string, filename: string, mimeType: string): void {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
}
