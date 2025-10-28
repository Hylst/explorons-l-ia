import React from 'react';
import { 
  Brain, 
  FileText, 
  Image, 
  Music, 
  Video, 
  MessageSquare, 
  Database, 
  Zap,
  BarChart3,
  Filter,
  Settings,
  Code,
  Globe,
  Mail,
  ShoppingCart,
  Search,
  Shield,
  Puzzle,
  Target,
  Lightbulb,
  Cpu,
  Eye,
  Mic,
  Users,
  Calendar,
  TrendingUp,
  AlertTriangle
} from 'lucide-react';

interface WorkflowNode {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  complexity: 'débutant' | 'intermédiaire' | 'avancé';
  cost: string;
  inputs: string[];
  outputs: string[];
}

interface NodeCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  nodes: WorkflowNode[];
}

export const workflowNodes: WorkflowNode[] = [
  {
    id: 'gpt4-processor',
    name: 'Processeur GPT-4',
    description: 'Traitement de texte avancé avec GPT-4 Turbo',
    icon: React.createElement(Brain, { className: "h-4 w-4" }),
    category: 'llm',
    complexity: 'intermédiaire',
    cost: '$0.03/1K tokens',
    inputs: ['Texte', 'Instructions'],
    outputs: ['Texte généré', 'Métadonnées']
  },
  {
    id: 'claude-3-processor',
    name: 'Processeur Claude 3',
    description: 'Analyse et génération avec Claude 3 Opus',
    icon: React.createElement(MessageSquare, { className: "h-4 w-4" }),
    category: 'llm',
    complexity: 'intermédiaire',
    cost: '$0.015/1K tokens',
    inputs: ['Texte', 'Contexte'],
    outputs: ['Réponse', 'Score confiance']
  },
  {
    id: 'text-embedding',
    name: 'Embedding Vectoriel',
    description: 'Conversion texte en vecteurs pour recherche sémantique',
    icon: React.createElement(Puzzle, { className: "h-4 w-4" }),
    category: 'llm',
    complexity: 'avancé',
    cost: '$0.0001/1K tokens',
    inputs: ['Texte'],
    outputs: ['Vecteur', 'Dimension']
  },
  {
    id: 'sentiment-analyzer',
    name: 'Analyseur de Sentiment',
    description: 'Détection d\'émotion et sentiment dans le texte',
    icon: React.createElement(BarChart3, { className: "h-4 w-4" }),
    category: 'analyse',
    complexity: 'débutant',
    cost: '$0.005/requête',
    inputs: ['Texte'],
    outputs: ['Sentiment', 'Score', 'Émotions']
  },
  {
    id: 'dalle3-generator',
    name: 'Générateur DALL-E 3',
    description: 'Création d\'images haute qualité à partir de texte',
    icon: React.createElement(Image, { className: "h-4 w-4" }),
    category: 'image',
    complexity: 'débutant',
    cost: '$0.04/image',
    inputs: ['Prompt', 'Style'],
    outputs: ['Image', 'URL', 'Métadonnées']
  },
  {
    id: 'midjourney-api',
    name: 'Midjourney API',
    description: 'Génération artistique via l\'API Midjourney',
    icon: React.createElement(Lightbulb, { className: "h-4 w-4" }),
    category: 'image',
    complexity: 'intermédiaire',
    cost: '$0.06/image',
    inputs: ['Prompt', 'Paramètres'],
    outputs: ['Image', 'Variations']
  },
  {
    id: 'image-upscaler',
    name: 'Amélioration d\'Image',
    description: 'Augmentation de résolution et amélioration qualité',
    icon: React.createElement(Eye, { className: "h-4 w-4" }),
    category: 'image',
    complexity: 'intermédiaire',
    cost: '$0.02/image',
    inputs: ['Image source'],
    outputs: ['Image HD', 'Facteur zoom']
  },
  {
    id: 'whisper-transcription',
    name: 'Transcription Whisper',
    description: 'Conversion audio/vidéo en texte avec Whisper',
    icon: React.createElement(Mic, { className: "h-4 w-4" }),
    category: 'audio',
    complexity: 'débutant',
    cost: '$0.006/minute',
    inputs: ['Audio/Vidéo'],
    outputs: ['Transcription', 'Timestamps']
  },
  {
    id: 'elevenlabs-tts',
    name: 'Synthèse Vocale ElevenLabs',
    description: 'Génération de voix réaliste à partir de texte',
    icon: React.createElement(Music, { className: "h-4 w-4" }),
    category: 'audio',
    complexity: 'intermédiaire',
    cost: '$0.30/1K caractères',
    inputs: ['Texte', 'Voix'],
    outputs: ['Audio', 'Format']
  },
  {
    id: 'video-generator',
    name: 'Générateur Vidéo IA',
    description: 'Création de vidéos courtes à partir d\'images et texte',
    icon: React.createElement(Video, { className: "h-4 w-4" }),
    category: 'video',
    complexity: 'avancé',
    cost: '$0.12/seconde',
    inputs: ['Images', 'Script'],
    outputs: ['Vidéo', 'Durée']
  },
  {
    id: 'web-scraper',
    name: 'Extracteur Web',
    description: 'Extraction automatique de données depuis des sites web',
    icon: React.createElement(Globe, { className: "h-4 w-4" }),
    category: 'data',
    complexity: 'intermédiaire',
    cost: '$0.01/page',
    inputs: ['URL', 'Sélecteurs'],
    outputs: ['Données', 'Statut']
  },
  {
    id: 'database-connector',
    name: 'Connecteur Base de Données',
    description: 'Interface avec bases de données SQL et NoSQL',
    icon: React.createElement(Database, { className: "h-4 w-4" }),
    category: 'data',
    complexity: 'avancé',
    cost: 'Variable',
    inputs: ['Requête', 'Paramètres'],
    outputs: ['Résultats', 'Métadonnées']
  },
  {
    id: 'api-connector',
    name: 'Connecteur API',
    description: 'Intégration avec APIs externes et webhooks',
    icon: React.createElement(Zap, { className: "h-4 w-4" }),
    category: 'integration',
    complexity: 'intermédiaire',
    cost: 'Variable',
    inputs: ['Endpoint', 'Headers', 'Payload'],
    outputs: ['Réponse', 'Code statut']
  },
  {
    id: 'condition-gate',
    name: 'Porte Conditionnelle',
    description: 'Routage conditionnel basé sur des règles',
    icon: React.createElement(Filter, { className: "h-4 w-4" }),
    category: 'logic',
    complexity: 'débutant',
    cost: 'Gratuit',
    inputs: ['Données', 'Conditions'],
    outputs: ['Branche A', 'Branche B']
  },
  {
    id: 'loop-processor',
    name: 'Processeur Boucle',
    description: 'Exécution itérative sur des ensembles de données',
    icon: React.createElement(Settings, { className: "h-4 w-4" }),
    category: 'logic',
    complexity: 'intermédiaire',
    cost: 'Gratuit',
    inputs: ['Collection', 'Logique'],
    outputs: ['Résultats', 'Compteur']
  },
  {
    id: 'aggregator',
    name: 'Agrégateur',
    description: 'Fusion et agrégation de données multiples',
    icon: React.createElement(Target, { className: "h-4 w-4" }),
    category: 'logic',
    complexity: 'débutant',
    cost: 'Gratuit',
    inputs: ['Données A', 'Données B', 'Données C'],
    outputs: ['Résultat agrégé']
  },
  {
    id: 'email-sender',
    name: 'Envoyeur Email',
    description: 'Envoi d\'emails personnalisés en masse',
    icon: React.createElement(Mail, { className: "h-4 w-4" }),
    category: 'communication',
    complexity: 'débutant',
    cost: '$0.001/email',
    inputs: ['Destinataires', 'Template'],
    outputs: ['Statut envoi', 'Statistiques']
  },
  {
    id: 'recommendation-engine',
    name: 'Moteur de Recommandation',
    description: 'Suggestions personnalisées basées sur ML',
    icon: React.createElement(ShoppingCart, { className: "h-4 w-4" }),
    category: 'ml',
    complexity: 'avancé',
    cost: '$0.02/recommandation',
    inputs: ['Profil utilisateur', 'Historique'],
    outputs: ['Recommandations', 'Scores']
  },
  {
    id: 'security-scanner',
    name: 'Scanner Sécurité',
    description: 'Analyse de vulnérabilités et détection d\'anomalies',
    icon: React.createElement(Shield, { className: "h-4 w-4" }),
    category: 'security',
    complexity: 'avancé',
    cost: '$0.05/scan',
    inputs: ['Code/URL', 'Règles'],
    outputs: ['Rapport', 'Vulnérabilités']
  }
];

export const nodeCategories: NodeCategory[] = [
  {
    id: 'llm',
    name: 'LLM & NLP',
    icon: React.createElement(Brain, { className: "h-4 w-4" }),
    color: 'bg-purple-100 text-purple-800',
    nodes: workflowNodes.filter(node => node.category === 'llm')
  },
  {
    id: 'image',
    name: 'Génération Images',
    icon: React.createElement(Image, { className: "h-4 w-4" }),
    color: 'bg-blue-100 text-blue-800',
    nodes: workflowNodes.filter(node => node.category === 'image')
  },
  {
    id: 'audio',
    name: 'Audio & Voix',
    icon: React.createElement(Music, { className: "h-4 w-4" }),
    color: 'bg-green-100 text-green-800',
    nodes: workflowNodes.filter(node => node.category === 'audio')
  },
  {
    id: 'video',
    name: 'Vidéo',
    icon: React.createElement(Video, { className: "h-4 w-4" }),
    color: 'bg-red-100 text-red-800',
    nodes: workflowNodes.filter(node => node.category === 'video')
  },
  {
    id: 'data',
    name: 'Données',
    icon: React.createElement(Database, { className: "h-4 w-4" }),
    color: 'bg-yellow-100 text-yellow-800',
    nodes: workflowNodes.filter(node => node.category === 'data')
  },
  {
    id: 'integration',
    name: 'Intégrations',
    icon: React.createElement(Zap, { className: "h-4 w-4" }),
    color: 'bg-orange-100 text-orange-800',
    nodes: workflowNodes.filter(node => node.category === 'integration')
  },
  {
    id: 'logic',
    name: 'Logique',
    icon: React.createElement(Settings, { className: "h-4 w-4" }),
    color: 'bg-gray-100 text-gray-800',
    nodes: workflowNodes.filter(node => node.category === 'logic')
  },
  {
    id: 'analyse',
    name: 'Analyse',
    icon: React.createElement(BarChart3, { className: "h-4 w-4" }),
    color: 'bg-teal-100 text-teal-800',
    nodes: workflowNodes.filter(node => node.category === 'analyse')
  },
  {
    id: 'communication',
    name: 'Communication',
    icon: React.createElement(Mail, { className: "h-4 w-4" }),
    color: 'bg-pink-100 text-pink-800',
    nodes: workflowNodes.filter(node => node.category === 'communication')
  },
  {
    id: 'ml',
    name: 'Machine Learning',
    icon: React.createElement(Cpu, { className: "h-4 w-4" }),
    color: 'bg-indigo-100 text-indigo-800',
    nodes: workflowNodes.filter(node => node.category === 'ml')
  },
  {
    id: 'security',
    name: 'Sécurité',
    icon: React.createElement(Shield, { className: "h-4 w-4" }),
    color: 'bg-rose-100 text-rose-800',
    nodes: workflowNodes.filter(node => node.category === 'security')
  }
];
