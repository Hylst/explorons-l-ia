
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  HelpCircle, 
  AlertTriangle, 
  CheckCircle, 
  Info,
  Target,
  TrendingUp,
  Shield
} from 'lucide-react';

interface ConfidenceExplainerProps {
  open: boolean;
  onClose: () => void;
}

export const ConfidenceExplainer: React.FC<ConfidenceExplainerProps> = ({
  open,
  onClose
}) => {
  const confidenceLevels = [
    {
      range: '90-100%',
      label: 'Très haute confiance',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      icon: AlertTriangle,
      description: 'Contenu très probablement généré par IA',
      indicators: ['Multiples patterns IA détectés', 'Structure très artificielle', 'Vocabulaire typique des LLM']
    },
    {
      range: '70-89%',
      label: 'Haute confiance',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      icon: AlertTriangle,
      description: 'Contenu probablement généré par IA',
      indicators: ['Plusieurs patterns suspects', 'Cohérence anormale', 'Expressions répétitives']
    },
    {
      range: '50-69%',
      label: 'Confiance modérée',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      icon: Info,
      description: 'Contenu possiblement généré par IA',
      indicators: ['Quelques indicateurs détectés', 'Structure suspecte', 'Analyse approfondie recommandée']
    },
    {
      range: '30-49%',
      label: 'Faible confiance',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      icon: Info,
      description: 'Origine incertaine, probablement humain',
      indicators: ['Peu d\'indicateurs IA', 'Style naturel dominant', 'Variations appropriées']
    },
    {
      range: '0-29%',
      label: 'Très faible confiance',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      icon: CheckCircle,
      description: 'Contenu très probablement d\'origine humaine',
      indicators: ['Aucun pattern IA significatif', 'Style naturel et varié', 'Caractéristiques humaines']
    }
  ];

  const detectionMethods = [
    {
      type: 'Analyse Statistique',
      icon: TrendingUp,
      description: 'Analyse des patterns linguistiques, longueur des phrases, diversité lexicale',
      reliability: 85
    },
    {
      type: 'Détection de Patterns',
      icon: Target,
      description: 'Identification d\'expressions et structures typiques des modèles IA',
      reliability: 90
    },
    {
      type: 'Analyse Métadonnées',
      icon: Shield,
      description: 'Vérification des informations techniques et signatures de fichiers',
      reliability: 95
    }
  ];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <HelpCircle className="h-6 w-6" />
            Comprendre les Niveaux de Confiance
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Niveaux de confiance */}
          <Card>
            <CardHeader>
              <CardTitle>Échelle de Confiance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {confidenceLevels.map((level, index) => {
                const Icon = level.icon;
                return (
                  <div key={index} className={`p-4 rounded-lg border ${level.bgColor} ${level.borderColor}`}>
                    <div className="flex items-start gap-3">
                      <Icon className={`h-5 w-5 mt-0.5 ${level.color}`} />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold">{level.range}</span>
                          <Badge variant="outline" className={level.color}>
                            {level.label}
                          </Badge>
                        </div>
                        <p className="text-sm mb-3">{level.description}</p>
                        <div className="space-y-1">
                          {level.indicators.map((indicator, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs">
                              <div className={`w-1 h-1 rounded-full ${level.color.replace('text-', 'bg-')}`} />
                              {indicator}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Méthodes de détection */}
          <Card>
            <CardHeader>
              <CardTitle>Méthodes de Détection</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {detectionMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <div key={index} className="p-4 rounded-lg border bg-muted/30">
                    <div className="flex items-start gap-3">
                      <Icon className="h-5 w-5 mt-0.5 text-primary" />
                      <div className="flex-1">
                        <h4 className="font-medium mb-2">{method.type}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium">Fiabilité:</span>
                          <Progress value={method.reliability} className="h-2 flex-1 max-w-32" />
                          <span className="text-xs text-muted-foreground">{method.reliability}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Recommandations */}
          <Card>
            <CardHeader>
              <CardTitle>Recommandations d'Usage</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
                <h4 className="font-medium text-blue-900 mb-1">Contexte Académique</h4>
                <p className="text-sm text-blue-700">
                  Utilisez le preset "Contrôle Académique" pour une sensibilité élevée. 
                  Scores {'>'}60% nécessitent une vérification manuelle.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-green-50 border border-green-200">
                <h4 className="font-medium text-green-900 mb-1">Vérification Journalistique</h4>
                <p className="text-sm text-green-700">
                  Le preset "Journalistique" offre un équilibre. 
                  Scores {'>'}70% indiquent un contenu suspect.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-orange-50 border border-orange-200">
                <h4 className="font-medium text-orange-900 mb-1">Usage Juridique</h4>
                <p className="text-sm text-orange-700">
                  Le preset "Juridique" maximise la précision. 
                  Tous les scores {'>'} 50% doivent être examinés.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};
