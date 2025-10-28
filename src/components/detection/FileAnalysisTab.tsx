
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileUploader } from './FileUploader';
import { ResultsGrid } from './ResultsGrid';
import { RealTimeAnalysis } from './RealTimeAnalysis';
import { VisualComparison } from './VisualComparison';
import { DetectionResult } from '@/services/aiDetectionService';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Upload, 
  BarChart3, 
  Eye, 
  Zap,
  Clock,
  FileText
} from 'lucide-react';

interface FileAnalysisTabProps {
  selectedPreset?: string;
  onPresetDeselect: () => void;
  results: DetectionResult[];
  isAnalyzing: boolean;
  onFilesSelected: (files: File[]) => void;
  onViewDetails: (result: DetectionResult) => void;
  onViewDetailedAnalysis: (result: DetectionResult) => void;
  onExportResult: (result: DetectionResult) => void;
}

export const FileAnalysisTab: React.FC<FileAnalysisTabProps> = ({
  selectedPreset,
  onPresetDeselect,
  results,
  isAnalyzing,
  onFilesSelected,
  onViewDetails,
  onViewDetailedAnalysis,
  onExportResult
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [analysisView, setAnalysisView] = useState<'upload' | 'realtime' | 'visual'>('upload');

  const handleFileSelection = (files: File[]) => {
    if (files.length > 0) {
      setSelectedFile(files[0]);
      // Basculer automatiquement vers l'analyse en temps réel
      if (files[0].type.startsWith('image/')) {
        setAnalysisView('visual');
      } else {
        setAnalysisView('realtime');
      }
    }
    onFilesSelected(files);
  };

  const getFileType = (file: File): 'text' | 'image' | 'audio' => {
    if (file.type.startsWith('text/')) return 'text';
    if (file.type.startsWith('image/')) return 'image';
    if (file.type.startsWith('audio/')) return 'audio';
    return 'text'; // default fallback
  };

  return (
    <div className="space-y-6">
      {selectedPreset && (
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Preset actif</Badge>
                <span className="font-medium">{selectedPreset}</span>
              </div>
              <Button variant="outline" size="sm" onClick={onPresetDeselect}>
                Désactiver
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs value={analysisView} onValueChange={(value) => setAnalysisView(value as any)}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="upload" className="flex items-center gap-2">
            <Upload className="h-4 w-4" />
            Upload
          </TabsTrigger>
          <TabsTrigger value="realtime" className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            Temps Réel
          </TabsTrigger>
          <TabsTrigger value="visual" className="flex items-center gap-2">
            <Eye className="h-4 w-4" />
            Analyse Visuelle
          </TabsTrigger>
        </TabsList>

        <TabsContent value="upload" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Analyse de Fichiers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <FileUploader 
                onFilesSelected={handleFileSelection}
                acceptedTypes={['text/*', 'image/*', 'audio/*']}
                maxFiles={5}
              />
            </CardContent>
          </Card>

          {results.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Résultats d'Analyse ({results.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResultsGrid
                  results={results}
                  isAnalyzing={isAnalyzing}
                  onViewDetails={onViewDetails}
                  onViewDetailedAnalysis={onViewDetailedAnalysis}
                  onExportResult={onExportResult}
                />
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="realtime" className="space-y-6">
          {selectedFile ? (
            <RealTimeAnalysis 
              isActive={true}
              fileType={getFileType(selectedFile)}
              onComplete={(results) => {
                console.log('Real-time analysis completed:', results);
              }}
            />
          ) : (
            <Card>
              <CardContent className="pt-6">
                <div className="text-center text-muted-foreground">
                  <Clock className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Sélectionnez un fichier dans l'onglet Upload pour voir l'analyse en temps réel</p>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="visual" className="space-y-6">
          {selectedFile && selectedFile.type.startsWith('image/') ? (
            <VisualComparison file={selectedFile} />
          ) : (
            <Card>
              <CardContent className="pt-6">
                <div className="text-center text-muted-foreground">
                  <Eye className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>
                    {selectedFile 
                      ? "L'analyse visuelle n'est disponible que pour les images"
                      : "Sélectionnez une image dans l'onglet Upload pour l'analyse visuelle"
                    }
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};
