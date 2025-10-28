
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Trash2, Download, Save, History } from 'lucide-react';
import { toast } from 'sonner';

interface SavedCalculation {
  id: string;
  name: string;
  date: string;
  provider: string;
  model: string;
  inputTokens: number;
  outputTokens: number;
  totalCost: number;
  usageType: string;
}

interface CostSaverProps {
  currentCalculation: {
    provider: string;
    model: string;
    inputTokens: number;
    outputTokens: number;
    totalCost: number;
    usageType: string;
  } | null;
}

const CostSaver: React.FC<CostSaverProps> = ({ currentCalculation }) => {
  const [savedCalculations, setSavedCalculations] = useState<SavedCalculation[]>([]);
  const [saveName, setSaveName] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('savedCostCalculations');
    if (saved) {
      setSavedCalculations(JSON.parse(saved));
    }
  }, []);

  const saveCalculation = () => {
    if (!currentCalculation || !saveName.trim()) {
      toast.error('Veuillez entrer un nom pour sauvegarder');
      return;
    }

    const newSave: SavedCalculation = {
      id: Date.now().toString(),
      name: saveName.trim(),
      date: new Date().toLocaleDateString('fr-FR'),
      ...currentCalculation
    };

    const updated = [...savedCalculations, newSave];
    setSavedCalculations(updated);
    localStorage.setItem('savedCostCalculations', JSON.stringify(updated));
    setSaveName('');
    toast.success('Calcul sauvegardé avec succès');
  };

  const deleteCalculation = (id: string) => {
    const updated = savedCalculations.filter(calc => calc.id !== id);
    setSavedCalculations(updated);
    localStorage.setItem('savedCostCalculations', JSON.stringify(updated));
    toast.success('Calcul supprimé');
  };

  const exportToCSV = () => {
    if (savedCalculations.length === 0) {
      toast.error('Aucun calcul à exporter');
      return;
    }

    const headers = ['Nom', 'Date', 'Fournisseur', 'Modèle', 'Tokens Entrée', 'Tokens Sortie', 'Coût Total', 'Type Usage'];
    const csvContent = [
      headers.join(','),
      ...savedCalculations.map(calc => [
        calc.name,
        calc.date,
        calc.provider,
        calc.model,
        calc.inputTokens,
        calc.outputTokens,
        calc.totalCost,
        calc.usageType
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cost-calculations-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
    toast.success('Export CSV téléchargé');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <History className="h-5 w-5" />
          Sauvegarde & Historique
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {currentCalculation && (
          <div className="space-y-3">
            <div className="flex gap-2">
              <div className="flex-1">
                <Label htmlFor="save-name">Nom de la sauvegarde</Label>
                <Input
                  id="save-name"
                  value={saveName}
                  onChange={(e) => setSaveName(e.target.value)}
                  placeholder="Calcul projet X..."
                />
              </div>
              <Button onClick={saveCalculation} className="mt-6">
                <Save className="h-4 w-4 mr-2" />
                Sauvegarder
              </Button>
            </div>
          </div>
        )}

        <div className="flex justify-between items-center">
          <h4 className="font-medium">Calculs sauvegardés ({savedCalculations.length})</h4>
          {savedCalculations.length > 0 && (
            <Button variant="outline" size="sm" onClick={exportToCSV}>
              <Download className="h-4 w-4 mr-2" />
              Exporter CSV
            </Button>
          )}
        </div>

        <div className="space-y-2 max-h-64 overflow-y-auto">
          {savedCalculations.length === 0 ? (
            <p className="text-muted-foreground text-sm text-center py-4">
              Aucun calcul sauvegardé
            </p>
          ) : (
            savedCalculations.map((calc) => (
              <div key={calc.id} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex-1">
                  <div className="font-medium">{calc.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {calc.provider} {calc.model} - ${calc.totalCost.toFixed(4)} ({calc.date})
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => deleteCalculation(calc.id)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default CostSaver;
