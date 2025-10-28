
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Image, 
  MessageSquare, 
  BarChart3,
  Zap,
  Database,
  Brain,
  Code,
  Globe,
  Mail,
  ShoppingCart,
  Users,
  ExternalLink
} from 'lucide-react';
import { Node, Edge } from '@xyflow/react';
import { Link } from 'react-router-dom';

interface WorkflowPreset {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  nodes: Node[];
  edges: Edge[];
  estimatedCost: string;
  complexity: 'facile' | 'moyen' | 'avancé';
}

interface WorkflowPresetsProps {
  onLoadPreset: (preset: WorkflowPreset) => void;
}

const workflowPresets: WorkflowPreset[] = [
  {
    id: 'content-generation',
    name: 'Génération de Contenu',
    description: 'Pipeline automatisé pour créer du contenu textuel et visuel optimisé SEO',
    category: 'Création',
    icon: <FileText className="h-4 w-4" />,
    estimatedCost: '$0.15/exécution',
    complexity: 'facile',
    nodes: [
      {
        id: '1',
        type: 'input',
        data: { label: 'Sujet d\'article' },
        position: { x: 100, y: 100 }
      },
      {
        id: '2',
        type: 'default',
        data: { label: 'Recherche SEO' },
        position: { x: 300, y: 50 }
      },
      {
        id: '3',
        type: 'default',
        data: { label: 'Génération texte GPT-4' },
        position: { x: 500, y: 100 }
      },
      {
        id: '4',
        type: 'default',
        data: { label: 'Génération image DALL-E' },
        position: { x: 700, y: 50 }
      },
      {
        id: '5',
        type: 'output',
        data: { label: 'Article complet' },
        position: { x: 900, y: 100 }
      }
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
      { id: 'e1-3', source: '1', target: '3', type: 'smoothstep' },
      { id: 'e2-3', source: '2', target: '3', type: 'smoothstep' },
      { id: 'e3-4', source: '3', target: '4', type: 'smoothstep' },
      { id: 'e4-5', source: '4', target: '5', type: 'smoothstep' }
    ]
  },
  {
    id: 'sentiment-analysis',
    name: 'Analyse de Sentiment Multi-Sources',
    description: 'Analyse avancée des retours clients avec classification et alertes automatiques',
    category: 'Analyse',
    icon: <BarChart3 className="h-4 w-4" />,
    estimatedCost: '$0.08/exécution',
    complexity: 'moyen',
    nodes: [
      {
        id: '1',
        type: 'input',
        data: { label: 'Sources multiples' },
        position: { x: 100, y: 100 }
      },
      {
        id: '2',
        type: 'default',
        data: { label: 'Extraction données' },
        position: { x: 300, y: 50 }
      },
      {
        id: '3',
        type: 'default',
        data: { label: 'Nettoyage NLP' },
        position: { x: 300, y: 150 }
      },
      {
        id: '4',
        type: 'default',
        data: { label: 'Analyse sentiment' },
        position: { x: 500, y: 100 }
      },
      {
        id: '5',
        type: 'default',
        data: { label: 'Classification thématique' },
        position: { x: 700, y: 50 }
      },
      {
        id: '6',
        type: 'output',
        data: { label: 'Rapport & Alertes' },
        position: { x: 900, y: 100 }
      }
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
      { id: 'e1-3', source: '1', target: '3', type: 'smoothstep' },
      { id: 'e2-4', source: '2', target: '4', type: 'smoothstep' },
      { id: 'e3-4', source: '3', target: '4', type: 'smoothstep' },
      { id: 'e4-5', source: '4', target: '5', type: 'smoothstep' },
      { id: 'e5-6', source: '5', target: '6', type: 'smoothstep' }
    ]
  },
  {
    id: 'chatbot-automation',
    name: 'Chatbot Intelligent RAG',
    description: 'Assistant conversationnel avec retrieval augmentation et mémoire contextuelle',
    category: 'Automatisation',
    icon: <MessageSquare className="h-4 w-4" />,
    estimatedCost: '$0.12/exécution',
    complexity: 'avancé',
    nodes: [
      {
        id: '1',
        type: 'input',
        data: { label: 'Question utilisateur' },
        position: { x: 100, y: 100 }
      },
      {
        id: '2',
        type: 'default',
        data: { label: 'Analyse intention' },
        position: { x: 300, y: 50 }
      },
      {
        id: '3',
        type: 'default',
        data: { label: 'Recherche vectorielle' },
        position: { x: 300, y: 150 }
      },
      {
        id: '4',
        type: 'default',
        data: { label: 'Récupération mémoire' },
        position: { x: 500, y: 50 }
      },
      {
        id: '5',
        type: 'default',
        data: { label: 'Fusion contexte RAG' },
        position: { x: 500, y: 150 }
      },
      {
        id: '6',
        type: 'default',
        data: { label: 'Génération LLM' },
        position: { x: 700, y: 100 }
      },
      {
        id: '7',
        type: 'output',
        data: { label: 'Réponse + Mise à jour mémoire' },
        position: { x: 900, y: 100 }
      }
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
      { id: 'e1-3', source: '1', target: '3', type: 'smoothstep' },
      { id: 'e2-4', source: '2', target: '4', type: 'smoothstep' },
      { id: 'e3-5', source: '3', target: '5', type: 'smoothstep' },
      { id: 'e4-6', source: '4', target: '6', type: 'smoothstep' },
      { id: 'e5-6', source: '5', target: '6', type: 'smoothstep' },
      { id: 'e6-7', source: '6', target: '7', type: 'smoothstep' }
    ]
  },
  {
    id: 'code-review-automation',
    name: 'Révision de Code IA',
    description: 'Système automatisé d\'analyse, test et optimisation de code',
    category: 'Développement',
    icon: <Code className="h-4 w-4" />,
    estimatedCost: '$0.25/exécution',
    complexity: 'avancé',
    nodes: [
      {
        id: '1',
        type: 'input',
        data: { label: 'Code source' },
        position: { x: 100, y: 100 }
      },
      {
        id: '2',
        type: 'default',
        data: { label: 'Analyse statique' },
        position: { x: 300, y: 50 }
      },
      {
        id: '3',
        type: 'default',
        data: { label: 'Tests automatisés' },
        position: { x: 300, y: 150 }
      },
      {
        id: '4',
        type: 'default',
        data: { label: 'Détection vulnérabilités' },
        position: { x: 500, y: 50 }
      },
      {
        id: '5',
        type: 'default',
        data: { label: 'Suggestions optimisation' },
        position: { x: 500, y: 150 }
      },
      {
        id: '6',
        type: 'output',
        data: { label: 'Rapport complet' },
        position: { x: 700, y: 100 }
      }
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
      { id: 'e1-3', source: '1', target: '3', type: 'smoothstep' },
      { id: 'e2-4', source: '2', target: '4', type: 'smoothstep' },
      { id: 'e3-5', source: '3', target: '5', type: 'smoothstep' },
      { id: 'e4-6', source: '4', target: '6', type: 'smoothstep' },
      { id: 'e5-6', source: '5', target: '6', type: 'smoothstep' }
    ]
  },
  {
    id: 'ecommerce-personalization',
    name: 'Personnalisation E-commerce',
    description: 'Recommandations produits intelligentes basées sur l\'historique utilisateur',
    category: 'E-commerce',
    icon: <ShoppingCart className="h-4 w-4" />,
    estimatedCost: '$0.18/exécution',
    complexity: 'moyen',
    nodes: [
      {
        id: '1',
        type: 'input',
        data: { label: 'Profil utilisateur' },
        position: { x: 100, y: 100 }
      },
      {
        id: '2',
        type: 'default',
        data: { label: 'Analyse comportement' },
        position: { x: 300, y: 50 }
      },
      {
        id: '3',
        type: 'default',
        data: { label: 'Filtrage collaboratif' },
        position: { x: 300, y: 150 }
      },
      {
        id: '4',
        type: 'default',
        data: { label: 'Scoring ML' },
        position: { x: 500, y: 100 }
      },
      {
        id: '5',
        type: 'output',
        data: { label: 'Recommandations' },
        position: { x: 700, y: 100 }
      }
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
      { id: 'e1-3', source: '1', target: '3', type: 'smoothstep' },
      { id: 'e2-4', source: '2', target: '4', type: 'smoothstep' },
      { id: 'e3-4', source: '3', target: '4', type: 'smoothstep' },
      { id: 'e4-5', source: '4', target: '5', type: 'smoothstep' }
    ]
  },
  {
    id: 'email-campaign-optimizer',
    name: 'Optimiseur Campagne Email',
    description: 'Personnalisation automatique d\'emails avec A/B testing intégré',
    category: 'Marketing',
    icon: <Mail className="h-4 w-4" />,
    estimatedCost: '$0.22/exécution',
    complexity: 'moyen',
    nodes: [
      {
        id: '1',
        type: 'input',
        data: { label: 'Base contacts' },
        position: { x: 100, y: 100 }
      },
      {
        id: '2',
        type: 'default',
        data: { label: 'Segmentation IA' },
        position: { x: 300, y: 100 }
      },
      {
        id: '3',
        type: 'default',
        data: { label: 'Génération contenu A' },
        position: { x: 500, y: 50 }
      },
      {
        id: '4',
        type: 'default',
        data: { label: 'Génération contenu B' },
        position: { x: 500, y: 150 }
      },
      {
        id: '5',
        type: 'default',
        data: { label: 'Test A/B & Envoi' },
        position: { x: 700, y: 100 }
      },
      {
        id: '6',
        type: 'output',
        data: { label: 'Analyse performance' },
        position: { x: 900, y: 100 }
      }
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
      { id: 'e2-3', source: '2', target: '3', type: 'smoothstep' },
      { id: 'e2-4', source: '2', target: '4', type: 'smoothstep' },
      { id: 'e3-5', source: '3', target: '5', type: 'smoothstep' },
      { id: 'e4-5', source: '4', target: '5', type: 'smoothstep' },
      { id: 'e5-6', source: '5', target: '6', type: 'smoothstep' }
    ]
  }
];

const WorkflowPresets: React.FC<WorkflowPresetsProps> = ({ onLoadPreset }) => {
  const getComplexityColor = (complexity: WorkflowPreset['complexity']) => {
    switch (complexity) {
      case 'facile':
        return 'bg-green-100 text-green-800';
      case 'moyen':
        return 'bg-yellow-100 text-yellow-800';
      case 'avancé':
        return 'bg-red-100 text-red-800';
    }
  };

  const categories = [...new Set(workflowPresets.map(preset => preset.category))];

  return (
    <div className="space-y-6">
      {/* Lien retour vers les ressources */}
      <div className="mb-4 p-3 bg-primary/5 rounded-lg border border-primary/20">
        <div className="flex items-center gap-2 text-sm">
          <Globe className="h-4 w-4 text-primary" />
          <span className="text-muted-foreground">Découvrez plus d'outils IA dans</span>
          <Button variant="link" className="p-0 h-auto text-primary font-medium" asChild>
            <Link to="/ressources?tab=outils#resources" className="flex items-center gap-1">
              la section Ressources
              <ExternalLink className="h-3 w-3" />
            </Link>
          </Button>
        </div>
      </div>

      {categories.map(category => (
        <div key={category}>
          <h3 className="font-semibold text-lg mb-3 text-primary">{category}</h3>
          <div className="space-y-4">
            {workflowPresets
              .filter(preset => preset.category === category)
              .map(preset => (
                <Card key={preset.id} className="hover:shadow-md transition-shadow border-l-4 border-l-primary/30">
                  <CardHeader className="pb-2">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        {preset.icon}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-base mb-1">
                          {preset.name}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground mb-2">
                          {preset.description}
                        </p>
                        <div className="flex gap-2 mb-2">
                          <Badge 
                            className={`text-xs ${getComplexityColor(preset.complexity)}`}
                            variant="secondary"
                          >
                            {preset.complexity}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {preset.estimatedCost}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex justify-between items-center mb-3">
                      <div className="text-xs text-muted-foreground">
                        {preset.nodes.length} nœuds • {preset.edges.length} connexions
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      onClick={() => onLoadPreset(preset)}
                      className="w-full"
                    >
                      Charger ce preset
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      ))}

      {/* Section créateur */}
      <div className="mt-8 p-4 bg-secondary/10 rounded-lg border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
            <Users className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-semibold text-sm">Créé par Geoffroy Streit</h4>
            <p className="text-xs text-muted-foreground">
              Expert en optimisation de workflows IA et automatisation intelligente
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowPresets;
