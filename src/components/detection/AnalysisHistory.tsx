
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Download, 
  Search, 
  Filter, 
  Trash2, 
  FileText, 
  Image, 
  Music,
  Calendar
} from 'lucide-react';
import { DetectionResult, aiDetectionService } from '@/services/aiDetectionService';

interface AnalysisHistoryProps {
  onViewDetails: (result: DetectionResult) => void;
}

export const AnalysisHistory: React.FC<AnalysisHistoryProps> = ({
  onViewDetails
}) => {
  const [history, setHistory] = useState<DetectionResult[]>([]);
  const [filteredHistory, setFilteredHistory] = useState<DetectionResult[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [filterResult, setFilterResult] = useState<string>('all');

  useEffect(() => {
    loadHistory();
  }, []);

  useEffect(() => {
    filterHistory();
  }, [history, searchTerm, filterType, filterResult]);

  const loadHistory = () => {
    const historyResults = aiDetectionService.getAnalysisHistory();
    setHistory(historyResults);
  };

  const filterHistory = () => {
    let filtered = history;

    // Filtre par terme de recherche
    if (searchTerm) {
      filtered = filtered.filter(result =>
        result.fileName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtre par type de fichier
    if (filterType !== 'all') {
      filtered = filtered.filter(result => result.fileType === filterType);
    }

    // Filtre par résultat
    if (filterResult !== 'all') {
      const isAI = filterResult === 'ai';
      filtered = filtered.filter(result => result.isAIGenerated === isAI);
    }

    setFilteredHistory(filtered);
  };

  const clearHistory = () => {
    aiDetectionService.clearHistory();
    setHistory([]);
    setFilteredHistory([]);
  };

  const exportHistory = (format: 'json' | 'csv') => {
    const data = aiDetectionService.exportResults(filteredHistory, format);
    const blob = new Blob([data], { 
      type: format === 'json' ? 'application/json' : 'text/csv' 
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ai-detection-history.${format}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getFileTypeIcon = (type: string) => {
    switch (type) {
      case 'text': return <FileText className="h-4 w-4" />;
      case 'image': return <Image className="h-4 w-4" />;
      case 'audio': return <Music className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Historique des analyses ({filteredHistory.length})
          </CardTitle>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => exportHistory('json')}
            >
              <Download className="h-4 w-4 mr-1" />
              JSON
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => exportHistory('csv')}
            >
              <Download className="h-4 w-4 mr-1" />
              CSV
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={clearHistory}
              className="text-red-600 hover:text-red-700"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Filtres */}
        <div className="flex gap-2 flex-wrap">
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher par nom de fichier..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous types</SelectItem>
              <SelectItem value="text">Texte</SelectItem>
              <SelectItem value="image">Image</SelectItem>
              <SelectItem value="audio">Audio</SelectItem>
            </SelectContent>
          </Select>
          <Select value={filterResult} onValueChange={setFilterResult}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous résultats</SelectItem>
              <SelectItem value="ai">IA détectée</SelectItem>
              <SelectItem value="human">Contenu humain</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Liste des résultats */}
        <div className="space-y-2">
          {filteredHistory.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              {history.length === 0 ? 
                'Aucune analyse dans l\'historique' : 
                'Aucun résultat ne correspond aux filtres'
              }
            </div>
          ) : (
            filteredHistory.map((result) => (
              <div
                key={result.id}
                className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 cursor-pointer transition-colors"
                onClick={() => onViewDetails(result)}
              >
                <div className="flex items-center gap-3 flex-1">
                  <div className="p-1.5 rounded bg-primary/10">
                    {getFileTypeIcon(result.fileType)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium truncate">{result.fileName}</div>
                    <div className="text-sm text-muted-foreground">
                      {formatDate(result.analysis.timestamp)}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant={result.isAIGenerated ? "destructive" : "secondary"}
                    className="text-xs"
                  >
                    {result.isAIGenerated ? 'IA' : 'Humain'}
                  </Badge>
                  <span className="text-sm font-medium min-w-[50px] text-right">
                    {(result.confidence * 100).toFixed(0)}%
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};
