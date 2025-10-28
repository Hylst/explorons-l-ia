
import React from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Zap, Settings } from 'lucide-react';

interface PresetsTabProps {
  applyPreset: (preset: { input: number; output: number }) => void;
}

const PresetsTab: React.FC<PresetsTabProps> = ({ applyPreset }) => {
  const presetConfigs = [
    { name: 'Chatbot simple', input: 150, output: 200, description: 'Assistant conversationnel basique' },
    { name: 'Génération de contenu', input: 100, output: 800, description: 'Articles, blogs, descriptions' },
    { name: 'Assistant de code', input: 300, output: 400, description: 'Génération et révision de code' },
    { name: 'Analyse de documents', input: 2000, output: 300, description: 'Extraction d\'informations' },
    { name: 'Traduction', input: 500, output: 500, description: 'Traduction multilingue' },
    { name: 'Résumé automatique', input: 1500, output: 200, description: 'Synthèse de textes longs' },
    { name: 'Support client', input: 200, output: 250, description: 'Réponses FAQ automatisées' },
    { name: 'Création marketing', input: 80, output: 600, description: 'Publicités, slogans, emails' },
    { name: 'Recherche académique', input: 1000, output: 400, description: 'Analyse scientifique' },
    { name: 'Tutoriel interactif', input: 300, output: 700, description: 'Formation et explications' }
  ];

  const advancedPresets = [
    { name: 'RAG Enterprise', input: 3000, output: 800, description: 'Recherche augmentée par génération' },
    { name: 'Agent autonome', input: 500, output: 1200, description: 'IA qui planifie et exécute' },
    { name: 'Fine-tuning data', input: 2500, output: 100, description: 'Préparation de données d\'entraînement' },
    { name: 'Multi-agent workflow', input: 800, output: 1500, description: 'Coordination de plusieurs agents' },
    { name: 'Code review complet', input: 1500, output: 600, description: 'Analyse approfondie de code' },
    { name: 'Creative writing', input: 200, output: 2000, description: 'Écriture créative longue' }
  ];

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        <Label>Presets rapides</Label>
        <div className="grid grid-cols-1 gap-2">
          {presetConfigs.map((preset, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => applyPreset(preset)}
              className="justify-start h-auto p-3"
            >
              <div className="flex items-start gap-2 w-full">
                <Zap className="h-4 w-4 mt-0.5 text-primary" />
                <div className="text-left">
                  <div className="font-medium text-sm">{preset.name}</div>
                  <div className="text-xs text-muted-foreground">{preset.description}</div>
                  <div className="text-xs text-primary mt-1">
                    {preset.input} → {preset.output} tokens
                  </div>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <Label>Presets avancés</Label>
        <div className="grid grid-cols-1 gap-2">
          {advancedPresets.map((preset, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => applyPreset(preset)}
              className="justify-start h-auto p-3 border-dashed"
            >
              <div className="flex items-start gap-2 w-full">
                <Settings className="h-4 w-4 mt-0.5 text-orange-500" />
                <div className="text-left">
                  <div className="font-medium text-sm">{preset.name}</div>
                  <div className="text-xs text-muted-foreground">{preset.description}</div>
                  <div className="text-xs text-orange-500 mt-1">
                    {preset.input} → {preset.output} tokens
                  </div>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PresetsTab;
