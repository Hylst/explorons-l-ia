
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Download, Upload, Save, FileText, Copy, Share2 } from 'lucide-react';
import { toast } from 'sonner';
import { PromptTemplate } from './promptTemplatesData';

interface SavedPrompt {
  id: string;
  name: string;
  content: string;
  template: PromptTemplate;
  tags: string[];
  createdAt: Date;
  variables: Record<string, string>;
}

interface PromptExportManagerProps {
  currentPrompt?: string;
  currentTemplate?: PromptTemplate;
  currentVariables?: Record<string, string>;
}

const PromptExportManager: React.FC<PromptExportManagerProps> = ({
  currentPrompt,
  currentTemplate,
  currentVariables
}) => {
  const [savedPrompts, setSavedPrompts] = useState<SavedPrompt[]>([]);
  const [isExportDialogOpen, setIsExportDialogOpen] = useState(false);
  const [isSaveDialogOpen, setIsSaveDialogOpen] = useState(false);
  const [exportFormat, setExportFormat] = useState<'json' | 'txt' | 'csv'>('json');
  const [promptName, setPromptName] = useState('');
  const [promptTags, setPromptTags] = useState('');

  const savePrompt = () => {
    if (!currentPrompt || !currentTemplate) {
      toast.error('Aucun prompt à sauvegarder');
      return;
    }

    if (!promptName.trim()) {
      toast.error('Veuillez donner un nom au prompt');
      return;
    }

    const savedPrompt: SavedPrompt = {
      id: Date.now().toString(),
      name: promptName.trim(),
      content: currentPrompt,
      template: currentTemplate,
      tags: promptTags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0),
      createdAt: new Date(),
      variables: currentVariables || {}
    };

    setSavedPrompts(prev => [savedPrompt, ...prev]);
    setPromptName('');
    setPromptTags('');
    setIsSaveDialogOpen(false);
    
    toast.success('Prompt sauvegardé avec succès !');
  };

  const exportPrompts = () => {
    if (savedPrompts.length === 0) {
      toast.error('Aucun prompt sauvegardé à exporter');
      return;
    }

    let content: string;
    let filename: string;
    let mimeType: string;

    switch (exportFormat) {
      case 'json':
        content = JSON.stringify(savedPrompts, null, 2);
        filename = 'prompts-export.json';
        mimeType = 'application/json';
        break;
      
      case 'txt':
        content = savedPrompts.map(prompt => 
          `=== ${prompt.name} ===\n` +
          `Template: ${prompt.template.name}\n` +
          `Date: ${prompt.createdAt.toLocaleString()}\n` +
          `Tags: ${prompt.tags.join(', ')}\n\n` +
          `${prompt.content}\n\n` +
          '='.repeat(50) + '\n\n'
        ).join('');
        filename = 'prompts-export.txt';
        mimeType = 'text/plain';
        break;
      
      case 'csv':
        const csvHeader = 'Nom,Template,Date,Tags,Contenu\n';
        const csvContent = savedPrompts.map(prompt =>
          `"${prompt.name}","${prompt.template.name}","${prompt.createdAt.toLocaleString()}","${prompt.tags.join('; ')}","${prompt.content.replace(/"/g, '""')}"`
        ).join('\n');
        content = csvHeader + csvContent;
        filename = 'prompts-export.csv';
        mimeType = 'text/csv';
        break;
      
      default:
        return;
    }

    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    toast.success(`Prompts exportés en ${exportFormat.toUpperCase()}`);
    setIsExportDialogOpen(false);
  };

  const importPrompts = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const importedPrompts: SavedPrompt[] = JSON.parse(content);
        
        // Validation basique
        if (Array.isArray(importedPrompts)) {
          setSavedPrompts(prev => [...importedPrompts, ...prev]);
          toast.success(`${importedPrompts.length} prompts importés avec succès !`);
        } else {
          throw new Error('Format invalide');
        }
      } catch (error) {
        toast.error('Erreur lors de l\'import. Vérifiez le format du fichier.');
      }
    };
    reader.readAsText(file);
    
    // Reset input
    event.target.value = '';
  };

  const copyToClipboard = (content: string) => {
    navigator.clipboard.writeText(content);
    toast.success('Prompt copié dans le presse-papiers');
  };

  const sharePrompt = (prompt: SavedPrompt) => {
    if (navigator.share) {
      navigator.share({
        title: `Prompt: ${prompt.name}`,
        text: prompt.content,
        url: window.location.href
      }).catch(() => {
        copyToClipboard(prompt.content);
      });
    } else {
      copyToClipboard(prompt.content);
    }
  };

  const deletePrompt = (id: string) => {
    setSavedPrompts(prev => prev.filter(p => p.id !== id));
    toast.success('Prompt supprimé');
  };

  return (
    <div className="space-y-6">
      {/* Actions principales */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Save className="h-5 w-5" />
            Gestion des Prompts
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          <Dialog open={isSaveDialogOpen} onOpenChange={setIsSaveDialogOpen}>
            <DialogTrigger asChild>
              <Button 
                disabled={!currentPrompt}
                className="flex items-center gap-2"
              >
                <Save className="h-4 w-4" />
                Sauvegarder le prompt actuel
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Sauvegarder le prompt</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="prompt-name">Nom du prompt</Label>
                  <Input
                    id="prompt-name"
                    placeholder="Mon super prompt..."
                    value={promptName}
                    onChange={(e) => setPromptName(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="prompt-tags">Tags (séparés par des virgules)</Label>
                  <Input
                    id="prompt-tags"
                    placeholder="marketing, vente, b2b..."
                    value={promptTags}
                    onChange={(e) => setPromptTags(e.target.value)}
                  />
                </div>
                <div>
                  <Label>Aperçu du prompt</Label>
                  <Textarea
                    value={currentPrompt || ''}
                    readOnly
                    className="h-32"
                  />
                </div>
                <div className="flex gap-2 justify-end">
                  <Button variant="outline" onClick={() => setIsSaveDialogOpen(false)}>
                    Annuler
                  </Button>
                  <Button onClick={savePrompt}>
                    Sauvegarder
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog open={isExportDialogOpen} onOpenChange={setIsExportDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" disabled={savedPrompts.length === 0}>
                <Download className="h-4 w-4 mr-2" />
                Exporter ({savedPrompts.length})
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Exporter les prompts sauvegardés</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label>Format d'export</Label>
                  <div className="flex gap-2 mt-2">
                    {[
                      { value: 'json', label: 'JSON', desc: 'Format complet avec métadonnées' },
                      { value: 'txt', label: 'TXT', desc: 'Texte simple lisible' },
                      { value: 'csv', label: 'CSV', desc: 'Tableau Excel compatible' }
                    ].map(format => (
                      <Button
                        key={format.value}
                        variant={exportFormat === format.value ? 'default' : 'outline'}
                        onClick={() => setExportFormat(format.value as any)}
                        className="flex-1"
                      >
                        {format.label}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2 justify-end">
                  <Button variant="outline" onClick={() => setIsExportDialogOpen(false)}>
                    Annuler
                  </Button>
                  <Button onClick={exportPrompts}>
                    <Download className="h-4 w-4 mr-2" />
                    Exporter
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Button variant="outline" asChild>
            <label className="flex items-center gap-2 cursor-pointer">
              <Upload className="h-4 w-4" />
              Importer
              <input
                type="file"
                accept=".json"
                onChange={importPrompts}
                className="hidden"
              />
            </label>
          </Button>
        </CardContent>
      </Card>

      {/* Liste des prompts sauvegardés */}
      {savedPrompts.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Prompts Sauvegardés ({savedPrompts.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {savedPrompts.map(prompt => (
                <div key={prompt.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-medium">{prompt.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        Template: {prompt.template.name} • {prompt.createdAt.toLocaleDateString()}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {prompt.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(prompt.content)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => sharePrompt(prompt)}
                      >
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => deletePrompt(prompt.id)}
                      >
                        ×
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-muted p-3 rounded text-sm">
                    <p className="line-clamp-3">{prompt.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default PromptExportManager;
