
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Sparkles, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap, 
  Bot,
  Search,
  Clock,
  DollarSign,
  BarChart3,
  FileText,
  ShoppingCart,
  Mail,
  Globe,
  MessageSquare,
  Camera,
  Mic,
  Video,
  Database,
  Code,
  Target,
  Brain,
  Cpu,
  Eye,
  Settings,
  Calendar,
  CheckCircle,
  AlertTriangle,
  Filter,
  Share,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface WorkflowTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  complexity: 'débutant' | 'intermédiaire' | 'avancé';
  estimatedTime: string;
  estimatedCost: string;
  useCase: string;
  icon: React.ReactNode;
  tags: string[];
  nodes: any[];
  edges: any[];
}

const workflowTemplates: WorkflowTemplate[] = [
  // Templates E-commerce & Marketing
  {
    id: 'ecommerce-product-content',
    name: 'Génération de Contenu Produit E-commerce',
    description: 'Créez automatiquement des descriptions produits, images et campagnes marketing pour votre boutique en ligne',
    category: 'ecommerce',
    complexity: 'intermédiaire',
    estimatedTime: '15-30 min',
    estimatedCost: '$0.50-2.00/produit',
    useCase: 'Boutiques en ligne, marketplaces',
    icon: <ShoppingCart className="h-5 w-5" />,
    tags: ['E-commerce', 'Marketing', 'Contenu', 'SEO'],
    nodes: [
      { id: '1', type: 'input', data: { label: 'Sujet produit' }, position: { x: 100, y: 100 } },
      { id: '2', type: 'default', data: { label: 'Recherche SEO' }, position: { x: 300, y: 50 } },
      { id: '3', type: 'default', data: { label: 'GPT-4 Description' }, position: { x: 500, y: 100 } },
      { id: '4', type: 'default', data: { label: 'DALL-E Images' }, position: { x: 700, y: 50 } },
      { id: '5', type: 'output', data: { label: 'Fiche produit complète' }, position: { x: 900, y: 100 } }
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
    id: 'social-media-automation',
    name: 'Automatisation Réseaux Sociaux',
    description: 'Génération et programmation automatique de contenu pour tous vos réseaux sociaux avec adaptation du ton',
    category: 'marketing',
    complexity: 'intermédiaire',
    estimatedTime: '20-45 min',
    estimatedCost: '$0.10-0.50/post',
    useCase: 'Community managers, PME',
    icon: <Share className="h-5 w-5" />,
    tags: ['Social Media', 'Automatisation', 'Contenu'],
    nodes: [
      { id: '1', type: 'input', data: { label: 'Calendrier contenu' }, position: { x: 100, y: 100 } },
      { id: '2', type: 'default', data: { label: 'Analyse audience' }, position: { x: 300, y: 50 } },
      { id: '3', type: 'default', data: { label: 'Génération posts' }, position: { x: 500, y: 100 } },
      { id: '4', type: 'default', data: { label: 'Adaptation plateformes' }, position: { x: 700, y: 50 } },
      { id: '5', type: 'default', data: { label: 'Programmation auto' }, position: { x: 700, y: 150 } },
      { id: '6', type: 'output', data: { label: 'Posts programmés' }, position: { x: 900, y: 100 } }
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
      { id: 'e1-3', source: '1', target: '3', type: 'smoothstep' },
      { id: 'e2-3', source: '2', target: '3', type: 'smoothstep' },
      { id: 'e3-4', source: '3', target: '4', type: 'smoothstep' },
      { id: 'e3-5', source: '3', target: '5', type: 'smoothstep' },
      { id: 'e4-6', source: '4', target: '6', type: 'smoothstep' },
      { id: 'e5-6', source: '5', target: '6', type: 'smoothstep' }
    ]
  },
  {
    id: 'email-marketing-personalized',
    name: 'Email Marketing Personnalisé',
    description: 'Campagnes email hyper-personnalisées basées sur le comportement et profil des utilisateurs',
    category: 'marketing',
    complexity: 'avancé',
    estimatedTime: '30-60 min',
    estimatedCost: '$0.02-0.15/email',
    useCase: 'E-commerce, SaaS, services',
    icon: <Mail className="h-5 w-5" />,
    tags: ['Email', 'Personnalisation', 'CRM'],
    nodes: [
      { id: '1', type: 'input', data: { label: 'Base contacts' }, position: { x: 100, y: 100 } },
      { id: '2', type: 'default', data: { label: 'Segmentation IA' }, position: { x: 300, y: 100 } },
      { id: '3', type: 'default', data: { label: 'Personnalisation' }, position: { x: 500, y: 50 } },
      { id: '4', type: 'default', data: { label: 'A/B Testing' }, position: { x: 500, y: 150 } },
      { id: '5', type: 'default', data: { label: 'Envoi optimisé' }, position: { x: 700, y: 100 } },
      { id: '6', type: 'output', data: { label: 'Analytics campagne' }, position: { x: 900, y: 100 } }
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
      { id: 'e2-3', source: '2', target: '3', type: 'smoothstep' },
      { id: 'e2-4', source: '2', target: '4', type: 'smoothstep' },
      { id: 'e3-5', source: '3', target: '5', type: 'smoothstep' },
      { id: 'e4-5', source: '4', target: '5', type: 'smoothstep' },
      { id: 'e5-6', source: '5', target: '6', type: 'smoothstep' }
    ]
  },

  // Templates Service Client & Support
  {
    id: 'customer-support-ai',
    name: 'Support Client IA Multicanal',
    description: 'Chatbot intelligent avec escalade automatique vers les humains et gestion multicanal',
    category: 'service-client',
    complexity: 'avancé',
    estimatedTime: '45-90 min',
    estimatedCost: '$0.05-0.30/conversation',
    useCase: 'Toutes entreprises avec support',
    icon: <MessageSquare className="h-5 w-5" />,
    tags: ['Support', 'Chatbot', 'Multicanal'],
    nodes: [],
    edges: []
  },
  {
    id: 'ticket-classification',
    name: 'Classification Intelligente de Tickets',
    description: 'Tri automatique et routage intelligent des demandes support vers les bons départements',
    category: 'service-client',
    complexity: 'intermédiaire',
    estimatedTime: '25-45 min',
    estimatedCost: '$0.01-0.05/ticket',
    useCase: 'Centres d\'appels, helpdesk',
    icon: <Filter className="h-5 w-5" />,
    tags: ['Classification', 'Routing', 'Efficacité'],
    nodes: [],
    edges: []
  },
  {
    id: 'sentiment-monitoring',
    name: 'Monitoring de Satisfaction Client',
    description: 'Analyse en temps réel du sentiment client sur tous les canaux avec alertes automatiques',
    category: 'analyse',
    complexity: 'intermédiaire',
    estimatedTime: '20-40 min',
    estimatedCost: '$0.10-0.50/jour',
    useCase: 'E-commerce, services, hôtellerie',
    icon: <BarChart3 className="h-5 w-5" />,
    tags: ['Sentiment', 'Monitoring', 'Alertes'],
    nodes: [],
    edges: []
  },

  // Templates Création de Contenu
  {
    id: 'blog-content-pipeline',
    name: 'Pipeline de Création d\'Articles de Blog',
    description: 'Recherche de sujets, rédaction, optimisation SEO et programmation automatique d\'articles',
    category: 'contenu',
    complexity: 'intermédiaire',
    estimatedTime: '30-60 min/article',
    estimatedCost: '$1.00-5.00/article',
    useCase: 'Blogs, sites corporate, agences',
    icon: <FileText className="h-5 w-5" />,
    tags: ['Blog', 'SEO', 'Contenu', 'Automatisation'],
    nodes: [],
    edges: []
  },
  {
    id: 'video-content-creation',
    name: 'Création de Vidéos Automatisée',
    description: 'Génération complète de vidéos : script, voix-off, images, montage et sous-titres',
    category: 'contenu',
    complexity: 'avancé',
    estimatedTime: '45-120 min/vidéo',
    estimatedCost: '$2.00-15.00/vidéo',
    useCase: 'YouTube, formation, marketing',
    icon: <Video className="h-5 w-5" />,
    tags: ['Vidéo', 'Script', 'Voix-off', 'Montage'],
    nodes: [],
    edges: []
  },
  {
    id: 'podcast-production',
    name: 'Production de Podcast Automatisée',
    description: 'Recherche de sujets, génération de scripts, voix IA et post-production automatique',
    category: 'contenu',
    complexity: 'avancé',
    estimatedTime: '60-180 min/épisode',
    estimatedCost: '$3.00-20.00/épisode',
    useCase: 'Podcasters, entreprises, médias',
    icon: <Mic className="h-5 w-5" />,
    tags: ['Podcast', 'Audio', 'Script', 'Automatisation'],
    nodes: [],
    edges: []
  },

  // Templates Ressources Humaines
  {
    id: 'recruitment-screening',
    name: 'Screening Automatisé de CV',
    description: 'Analyse et classement automatique de CV avec matching intelligent des compétences',
    category: 'rh',
    complexity: 'intermédiaire',
    estimatedTime: '20-40 min setup',
    estimatedCost: '$0.10-0.50/CV',
    useCase: 'RH, recrutement, agences',
    icon: <Users className="h-5 w-5" />,
    tags: ['Recrutement', 'CV', 'Matching', 'RH'],
    nodes: [],
    edges: []
  },
  {
    id: 'employee-onboarding',
    name: 'Onboarding Employé Personnalisé',
    description: 'Parcours d\'intégration adaptatif selon le profil et le poste avec suivi automatique',
    category: 'rh',
    complexity: 'intermédiaire',
    estimatedTime: '45-90 min setup',
    estimatedCost: '$2.00-10.00/employé',
    useCase: 'Grandes entreprises, scale-ups',
    icon: <CheckCircle className="h-5 w-5" />,
    tags: ['Onboarding', 'Formation', 'Suivi'],
    nodes: [],
    edges: []
  },
  {
    id: 'performance-analysis',
    name: 'Analyse de Performance RH',
    description: 'Évaluation continue des performances avec recommandations de développement personnalisées',
    category: 'rh',
    complexity: 'avancé',
    estimatedTime: '60-120 min setup',
    estimatedCost: '$1.00-5.00/évaluation',
    useCase: 'RH, management, coaching',
    icon: <TrendingUp className="h-5 w-5" />,
    tags: ['Performance', 'Évaluation', 'Développement'],
    nodes: [],
    edges: []
  },

  // Templates Finances & Comptabilité
  {
    id: 'invoice-processing',
    name: 'Traitement Automatisé des Factures',
    description: 'OCR, extraction de données, validation et saisie automatique en comptabilité',
    category: 'finance',
    complexity: 'intermédiaire',
    estimatedTime: '30-60 min setup',
    estimatedCost: '$0.05-0.25/facture',
    useCase: 'Comptabilité, PME, grands comptes',
    icon: <DollarSign className="h-5 w-5" />,
    tags: ['Factures', 'OCR', 'Comptabilité'],
    nodes: [],
    edges: []
  },
  {
    id: 'expense-monitoring',
    name: 'Surveillance des Dépenses Intelligente',
    description: 'Détection d\'anomalies dans les dépenses avec alertes et recommandations d\'économies',
    category: 'finance',
    complexity: 'intermédiaire',
    estimatedTime: '25-45 min setup',
    estimatedCost: '$0.10-1.00/jour',
    useCase: 'CFO, contrôle de gestion',
    icon: <AlertTriangle className="h-5 w-5" />,
    tags: ['Dépenses', 'Anomalies', 'Alertes'],
    nodes: [],
    edges: []
  },
  {
    id: 'financial-reporting',
    name: 'Reporting Financier Automatisé',
    description: 'Génération automatique de rapports financiers avec analyses prédictives',
    category: 'finance',
    complexity: 'avancé',
    estimatedTime: '45-90 min setup',
    estimatedCost: '$5.00-25.00/rapport',
    useCase: 'Direction financière, investisseurs',
    icon: <BarChart3 className="h-5 w-5" />,
    tags: ['Reporting', 'Prédictif', 'Finance'],
    nodes: [],
    edges: []
  },

  // Templates Sécurité & Conformité
  {
    id: 'security-monitoring',
    name: 'Monitoring Sécurisé Multi-sources',
    description: 'Surveillance continue de la sécurité avec détection d\'anomalies et réponse automatique',
    category: 'securite',
    complexity: 'avancé',
    estimatedTime: '60-180 min setup',
    estimatedCost: '$10.00-50.00/jour',
    useCase: 'IT, cybersécurité, RSSI',
    icon: <Shield className="h-5 w-5" />,
    tags: ['Sécurité', 'Monitoring', 'Anomalies'],
    nodes: [],
    edges: []
  },
  {
    id: 'gdpr-compliance',
    name: 'Conformité RGPD Automatisée',
    description: 'Audit automatique de conformité RGPD avec recommandations et plans d\'action',
    category: 'securite',
    complexity: 'avancé',
    estimatedTime: '90-180 min setup',
    estimatedCost: '$20.00-100.00/audit',
    useCase: 'DPO, juridique, compliance',
    icon: <Eye className="h-5 w-5" />,
    tags: ['RGPD', 'Compliance', 'Audit'],
    nodes: [],
    edges: []
  },

  // Templates Développement & IT
  {
    id: 'code-review-ai',
    name: 'Revue de Code IA Avancée',
    description: 'Analyse automatique de code avec détection de bugs, optimisations et bonnes pratiques',
    category: 'developpement',
    complexity: 'avancé',
    estimatedTime: '30-60 min setup',
    estimatedCost: '$0.05-0.50/fichier',
    useCase: 'Équipes dev, DevOps, CTO',
    icon: <Code className="h-5 w-5" />,
    tags: ['Code', 'Qualité', 'DevOps'],
    nodes: [],
    edges: []
  },
  {
    id: 'automated-testing',
    name: 'Génération de Tests Automatisés',
    description: 'Création automatique de tests unitaires et d\'intégration avec couverture optimale',
    category: 'developpement',
    complexity: 'avancé',
    estimatedTime: '45-90 min setup',
    estimatedCost: '$0.10-1.00/test',
    useCase: 'QA, développeurs, CI/CD',
    icon: <CheckCircle className="h-5 w-5" />,
    tags: ['Tests', 'Automatisation', 'QA'],
    nodes: [],
    edges: []
  },
  {
    id: 'documentation-generator',
    name: 'Générateur de Documentation',
    description: 'Création automatique de documentation technique à partir du code et des spécifications',
    category: 'developpement',
    complexity: 'intermédiaire',
    estimatedTime: '20-40 min setup',
    estimatedCost: '$0.50-5.00/document',
    useCase: 'Équipes dev, product owners',
    icon: <FileText className="h-5 w-5" />,
    tags: ['Documentation', 'Code', 'Technique'],
    nodes: [],
    edges: []
  },

  // Templates Business Intelligence
  {
    id: 'sales-forecasting',
    name: 'Prévision des Ventes IA',
    description: 'Prédictions de ventes précises avec facteurs externes et recommandations stratégiques',
    category: 'business-intelligence',
    complexity: 'avancé',
    estimatedTime: '60-120 min setup',
    estimatedCost: '$10.00-50.00/prévision',
    useCase: 'Direction commerciale, CEO',
    icon: <TrendingUp className="h-5 w-5" />,
    tags: ['Prévisions', 'Ventes', 'Stratégie'],
    nodes: [],
    edges: []
  },
  {
    id: 'customer-segmentation',
    name: 'Segmentation Client Intelligente',
    description: 'Analyse comportementale avancée pour segmentation et personnalisation marketing',
    category: 'business-intelligence',
    complexity: 'avancé',
    estimatedTime: '45-90 min setup',
    estimatedCost: '$5.00-25.00/analyse',
    useCase: 'Marketing, CRM, e-commerce',
    icon: <Target className="h-5 w-5" />,
    tags: ['Segmentation', 'Comportement', 'CRM'],
    nodes: [],
    edges: []
  }
];

const templateCategories = [
  { id: 'all', name: 'Tous les templates', count: workflowTemplates.length },
  { id: 'ecommerce', name: 'E-commerce', count: workflowTemplates.filter(t => t.category === 'ecommerce').length },
  { id: 'marketing', name: 'Marketing', count: workflowTemplates.filter(t => t.category === 'marketing').length },
  { id: 'service-client', name: 'Service Client', count: workflowTemplates.filter(t => t.category === 'service-client').length },
  { id: 'contenu', name: 'Création Contenu', count: workflowTemplates.filter(t => t.category === 'contenu').length },
  { id: 'rh', name: 'Ressources Humaines', count: workflowTemplates.filter(t => t.category === 'rh').length },
  { id: 'finance', name: 'Finance & Compta', count: workflowTemplates.filter(t => t.category === 'finance').length },
  { id: 'securite', name: 'Sécurité', count: workflowTemplates.filter(t => t.category === 'securite').length },
  { id: 'developpement', name: 'Développement', count: workflowTemplates.filter(t => t.category === 'developpement').length },
  { id: 'business-intelligence', name: 'Business Intelligence', count: workflowTemplates.filter(t => t.category === 'business-intelligence').length },
  { id: 'analyse', name: 'Analyse', count: workflowTemplates.filter(t => t.category === 'analyse').length }
];

interface WorkflowTemplateLibraryProps {
  onLoadTemplate: (template: WorkflowTemplate) => void;
}

const WorkflowTemplateLibrary: React.FC<WorkflowTemplateLibraryProps> = ({ onLoadTemplate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'débutant':
        return 'bg-green-100 text-green-800';
      case 'intermédiaire':
        return 'bg-yellow-100 text-yellow-800';
      case 'avancé':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredTemplates = workflowTemplates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="h-full flex flex-col overflow-hidden">
      {/* Lien retour vers les ressources */}
      <div className="mb-4 p-3 bg-primary/5 rounded-lg border border-primary/20 flex-shrink-0">
        <div className="flex items-center gap-2 text-sm">
          <Globe className="h-4 w-4 text-primary" />
          <span className="text-muted-foreground">Plus de templates dans</span>
          <Button variant="link" className="p-0 h-auto text-primary font-medium" asChild>
            <Link to="/ressources?tab=outils#resources" className="flex items-center gap-1">
              la section Ressources
              <ExternalLink className="h-3 w-3" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Filtres et recherche */}
      <div className="space-y-3 p-3 bg-background flex-shrink-0">
        <Input
          placeholder="Rechercher un template..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
        
        <div className="flex flex-wrap gap-1">
          {templateCategories.map(category => (
            <Badge
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'secondary'}
              className="cursor-pointer text-xs"
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name} ({category.count})
            </Badge>
          ))}
        </div>
      </div>

      {/* Liste des templates */}
      <div className="flex-1 overflow-y-auto p-3">
        <div className="space-y-4">
          {filteredTemplates.map(template => (
            <Card key={template.id} className="border-l-4 border-l-primary/30">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded bg-primary/10 text-primary">
                      {template.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-sm font-medium">{template.name}</CardTitle>
                      <p className="text-xs text-muted-foreground mt-1">
                        {template.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-1">
                    <Badge 
                      className={`text-xs ${getComplexityColor(template.complexity)}`}
                      variant="secondary"
                    >
                      {template.complexity}
                    </Badge>
                    {template.tags.slice(0, 3).map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 gap-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{template.estimatedTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-3 w-3" />
                      <span>{template.estimatedCost}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Target className="h-3 w-3" />
                      <span>{template.useCase}</span>
                    </div>
                  </div>

                  <Button
                    onClick={() => onLoadTemplate(template)}
                    className="w-full"
                    size="sm"
                  >
                    <Sparkles className="h-3 w-3 mr-1" />
                    Charger ce template
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {filteredTemplates.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <Search className="h-8 w-8 mx-auto mb-2" />
              <p>Aucun template trouvé pour "{searchTerm}"</p>
            </div>
          )}
        </div>

        {/* Section créateur */}
        <div className="mt-6 p-3 bg-secondary/10 rounded border text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Geoffroy Streit</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Architecte en workflows IA et automatisation
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkflowTemplateLibrary;
