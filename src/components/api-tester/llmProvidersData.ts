
import { Badge } from '@/components/ui/badge';
import { Clock, DollarSign, Zap, Star, Shield, Globe } from 'lucide-react';

export interface LLMProviderInfo {
  id: string;
  name: string;
  description: string;
  models?: string[];
  pricing: {
    free?: string;
    paid?: string;
    unit?: string;
  };
  limits: {
    rateLimit?: string;
    dailyLimit?: string;
    monthlyLimit?: string;
  };
  speed: 'Très rapide' | 'Rapide' | 'Moyen' | 'Lent';
  reliability: 'experimental' | 'stable' | 'production';
  features: string[];
  website: string;
  docsUrl: string;
  keyUrl: string;
  pros: string[];
  cons: string[];
  useCases: string[];
  limitations?: string[];
  badge?: {
    text: string;
    variant: 'default' | 'secondary' | 'destructive' | 'outline';
  };
}

export const llmProvidersInfo: LLMProviderInfo[] = [
  {
    id: 'openai',
    name: 'OpenAI',
    description: 'Leader mondial des modèles de langage avec GPT-4 et o1',
    models: ['gpt-4o', 'gpt-4o-mini', 'gpt-3.5-turbo', 'o1-preview', 'o1-mini'],
    pricing: {
      free: 'Limité gratuit via ChatGPT',
      paid: '$20/mois pour usage Plus',
      unit: 'par requête'
    },
    limits: {
      rateLimit: '3 req/min (gratuit)',
      dailyLimit: 'Variable selon plan',
      monthlyLimit: 'Selon abonnement'
    },
    speed: 'Rapide',
    reliability: 'production',
    features: ['Multimodal', 'Code', 'Raisonnement', 'Vision', 'Audio'],
    website: 'https://openai.com',
    docsUrl: 'https://platform.openai.com/docs',
    keyUrl: 'https://platform.openai.com/api-keys',
    pros: ['Qualité exceptionnelle', 'Multimodal natif', 'Documentation complète'],
    cons: ['Coût élevé', 'Limites strictes', 'Censure parfois excessive'],
    useCases: ['Assistant IA', 'Génération de code', 'Analyse de documents', 'Création de contenu'],
    badge: { text: 'Leader', variant: 'default' }
  },
  {
    id: 'anthropic',
    name: 'Anthropic Claude',
    description: 'IA constitutionnelle avec Claude 3.5 Sonnet, excellent pour l\'analyse',
    models: ['claude-3-5-sonnet-20241022', 'claude-3-5-haiku-20241022', 'claude-3-opus-20240229'],
    pricing: {
      free: 'Usage gratuit limité',
      paid: '$20/mois pour Pro',
      unit: 'par token'
    },
    limits: {
      rateLimit: '5 req/min (gratuit)',
      dailyLimit: 'Variable selon plan',
      monthlyLimit: 'Selon abonnement'
    },
    speed: 'Rapide',
    reliability: 'production',
    features: ['Analyse longue', 'Éthique', 'Code', 'Raisonnement'],
    website: 'https://anthropic.com',
    docsUrl: 'https://docs.anthropic.com',
    keyUrl: 'https://console.anthropic.com/keys',
    pros: ['Très sûr', 'Excellent raisonnement', 'Contexte très long'],
    cons: ['Plus cher qu\'OpenAI', 'Moins multimodal', 'Parfois trop prudent'],
    useCases: ['Recherche', 'Analyse juridique', 'Rédaction technique', 'Code complexe'],
    badge: { text: 'Sécurisé', variant: 'secondary' }
  },
  {
    id: 'google',
    name: 'Google Gemini',
    description: 'Modèles multimodaux de Google avec Gemini 2.0 Flash',
    models: ['gemini-2.0-flash-exp', 'gemini-1.5-pro', 'gemini-1.5-flash'],
    pricing: {
      free: '15 requêtes/min gratuit',
      paid: 'Payant après limites',
      unit: 'par requête'
    },
    limits: {
      rateLimit: '15 req/min (gratuit)',
      dailyLimit: '1500 req/jour',
      monthlyLimit: 'Variable'
    },
    speed: 'Très rapide',
    reliability: 'stable',
    features: ['Multimodal', 'Vision', 'Code', 'Intégration Google'],
    website: 'https://gemini.google.com',
    docsUrl: 'https://ai.google.dev/gemini-api/docs',
    keyUrl: 'https://aistudio.google.com/app/apikey',
    pros: ['Gratuit généreux', 'Très rapide', 'Multimodal natif'],
    cons: ['Moins créatif', 'Parfois incohérent', 'Limites géographiques'],
    useCases: ['Prototypage', 'Analyse d\'images', 'Traduction', 'Résumés'],
    badge: { text: 'Gratuit+', variant: 'outline' }
  },
  {
    id: 'deepseek',
    name: 'DeepSeek',
    description: 'Modèles chinois performants avec DeepSeek V3 et Reasoner',
    models: ['deepseek-chat', 'deepseek-reasoner'],
    pricing: {
      free: 'Usage gratuit généreux',
      paid: 'Très économique',
      unit: 'par token'
    },
    limits: {
      rateLimit: '60 req/min',
      dailyLimit: 'Généreux',
      monthlyLimit: 'Variable'
    },
    speed: 'Rapide',
    reliability: 'stable',
    features: ['Raisonnement', 'Code', 'Mathématiques', 'Prix bas'],
    website: 'https://deepseek.com',
    docsUrl: 'https://platform.deepseek.com/api-docs',
    keyUrl: 'https://platform.deepseek.com/api_keys',
    pros: ['Très économique', 'Bon en maths/code', 'API stable'],
    cons: ['Moins créatif', 'Parfois répétitif', 'Support en anglais'],
    useCases: ['Développement', 'Calculs', 'Analyse technique', 'Prototypage'],
    badge: { text: 'Économique', variant: 'secondary' }
  },
  {
    id: 'openrouter',
    name: 'OpenRouter',
    description: 'Agrégateur donnant accès à de nombreux modèles via une seule API',
    models: [
      'anthropic/claude-3.5-sonnet',
      'openai/gpt-4o-mini',
      'meta-llama/llama-3.2-90b-vision',
      'google/gemini-flash-1.5',
      'mistralai/mistral-large',
      'microsoft/phi-3-mini-128k-instruct',
      'qwen/qwen-2.5-72b-instruct'
    ],
    pricing: {
      free: 'Certains modèles gratuits',
      paid: 'Variable selon modèle',
      unit: 'par token'
    },
    limits: {
      rateLimit: 'Variable par modèle',
      dailyLimit: 'Selon fournisseur',
      monthlyLimit: 'Variable'
    },
    speed: 'Moyen',
    reliability: 'stable',
    features: ['Multi-fournisseurs', 'Prix transparents', 'Statistiques', 'Comparaison'],
    website: 'https://openrouter.ai',
    docsUrl: 'https://openrouter.ai/docs',
    keyUrl: 'https://openrouter.ai/keys',
    pros: ['Accès unifié', 'Prix comparés', 'Modèles variés', 'Statistiques'],
    cons: ['Qualité variable', 'Complexité choix', 'Pas de support direct'],
    useCases: ['Comparaison modèles', 'Tests A/B', 'Optimisation coûts', 'Exploration'],
    badge: { text: 'Agrégateur', variant: 'outline' },
    limitations: ['Certains modèles peuvent être temporairement indisponibles', 'Taux de limitation variables selon les fournisseurs amont']
  },
  {
    id: 'xai',
    name: 'X.AI / Grok',
    description: 'IA de X (ex-Twitter) avec accès temps réel et style décontracté',
    models: ['grok-beta', 'grok-vision-beta', 'grok-2-latest'],
    pricing: {
      free: 'Limité via X Premium',
      paid: '$16/mois via X Premium+',
      unit: 'par requête'
    },
    limits: {
      rateLimit: '10 req/min',
      dailyLimit: 'Selon abonnement X',
      monthlyLimit: 'Variable'
    },
    speed: 'Rapide',
    reliability: 'stable',
    features: ['Temps réel', 'Données X', 'Style décontracté', 'Vision'],
    website: 'https://x.ai',
    docsUrl: 'https://docs.x.ai/api',
    keyUrl: 'https://console.x.ai/',
    pros: ['Accès temps réel', 'Style unique', 'Intégration X', 'Moins censuré'],
    cons: ['API récente', 'Documentation limitée', 'Moins mature'],
    useCases: ['Analyse actualités', 'Contenu social', 'Recherche temps réel', 'Chat décontracté'],
    badge: { text: 'Temps réel', variant: 'default' }
  },
  {
    id: 'mistral',
    name: 'Mistral AI',
    description: 'Startup française avec des modèles performants et ouverts',
    models: ['mistral-large-latest', 'mistral-medium-latest', 'mistral-small-latest'],
    pricing: {
      free: 'Tier gratuit disponible',
      paid: 'Freemium puis payant',
      unit: 'par token'
    },
    limits: {
      rateLimit: '5 req/min (gratuit)',
      dailyLimit: 'Variable',
      monthlyLimit: 'Selon plan'
    },
    speed: 'Rapide',
    reliability: 'production',
    features: ['Open source', 'Multilingue', 'Code', 'Français natif'],
    website: 'https://mistral.ai',
    docsUrl: 'https://docs.mistral.ai/',
    keyUrl: 'https://console.mistral.ai/api-keys/',
    pros: ['Français excellent', 'Open source', 'Prix compétitif', 'Européen'],
    cons: ['Moins multimodal', 'Écosystème plus petit', 'Moins de fonctionnalités'],
    useCases: ['Contenu français', 'Conformité RGPD', 'Applications locales', 'Code'],
    badge: { text: '🇫🇷 Français', variant: 'secondary' }
  },
  {
    id: 'cerebras',
    name: 'Cerebras',
    description: 'Inférence ultra-rapide avec processeurs spécialisés WSE',
    models: ['llama3.1-8b', 'llama3.1-70b'],
    pricing: {
      free: 'Usage gratuit généreux',
      paid: 'Gratuit puis payant',
      unit: 'par token'
    },
    limits: {
      rateLimit: '30 req/min',
      dailyLimit: 'Généreux',
      monthlyLimit: 'Variable'
    },
    speed: 'Très rapide',
    reliability: 'stable',
    features: ['Ultra-rapide', 'Llama optimisé', 'Hardware dédié', 'API simple'],
    website: 'https://cerebras.ai',
    docsUrl: 'https://docs.cerebras.ai/',
    keyUrl: 'https://cloud.cerebras.ai/platform',
    pros: ['Vitesse exceptionnelle', 'Gratuit généreux', 'Latence très faible'],
    cons: ['Modèles limités', 'Pas de multimodal', 'Nouveau service'],
    useCases: ['Applications temps réel', 'Chatbots rapides', 'Gaming', 'Prototypage'],
    badge: { text: '⚡ Ultra-rapide', variant: 'default' }
  },
  {
    id: 'sambanova',
    name: 'SambaNova',
    description: 'Plateforme d\'IA avec modèles Llama optimisés pour l\'entreprise',
    models: ['Meta-Llama-3.1-8B-Instruct', 'Meta-Llama-3.1-70B-Instruct'],
    pricing: {
      free: 'Usage développeur gratuit',
      paid: 'Gratuit puis entreprise',
      unit: 'par token'
    },
    limits: {
      rateLimit: '10 req/min',
      dailyLimit: 'Variable',
      monthlyLimit: 'Selon plan'
    },
    speed: 'Rapide',
    reliability: 'stable',
    features: ['Llama optimisé', 'Enterprise', 'API stable', 'Support complet'],
    website: 'https://sambanova.ai',
    docsUrl: 'https://docs.sambanova.ai/',
    keyUrl: 'https://cloud.sambanova.ai/',
    pros: ['Gratuit généreux', 'Focus entreprise', 'API stable', 'Support qualité'],
    cons: ['Choix modèles limité', 'Moins connu', 'Pas de multimodal'],
    useCases: ['Applications entreprise', 'Développement', 'Intégrations B2B', 'Production'],
    badge: { text: 'Enterprise', variant: 'secondary' }
  },
  {
    id: 'together',
    name: 'Together AI',
    description: 'Plateforme collaborative pour modèles open source optimisés',
    models: ['meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo', 'meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo'],
    pricing: {
      free: 'Crédits d\'essai gratuits',
      paid: 'Pay-per-use économique',
      unit: 'par token'
    },
    limits: {
      rateLimit: '600 req/min',
      dailyLimit: 'Variable',
      monthlyLimit: 'Selon crédits'
    },
    speed: 'Rapide',
    reliability: 'stable',
    features: ['Open source', 'Optimisé', 'Prix transparents', 'Fine-tuning'],
    website: 'https://together.ai',
    docsUrl: 'https://docs.together.ai/',
    keyUrl: 'https://api.together.xyz/settings/api-keys',
    pros: ['Prix compétitifs', 'Open source', 'Fine-tuning facile', 'Transparence'],
    cons: ['Moins de modèles propriétaires', 'Support communautaire', 'Moins mature'],
    useCases: ['Fine-tuning', 'Recherche', 'Développement économique', 'Expérimentation'],
    badge: { text: 'Open Source', variant: 'outline' }
  },
  {
    id: 'fireworks',
    name: 'Fireworks AI',
    description: 'Inférence optimisée pour modèles open source avec focus performance',
    models: ['accounts/fireworks/models/llama-v3p1-8b-instruct', 'accounts/fireworks/models/llama-v3p1-70b-instruct'],
    pricing: {
      free: 'Crédits gratuits au démarrage',
      paid: 'Pay-per-token économique',
      unit: 'par token'
    },
    limits: {
      rateLimit: '600 req/min',
      dailyLimit: 'Variable',
      monthlyLimit: 'Selon crédits'
    },
    speed: 'Très rapide',
    reliability: 'stable',
    features: ['Performance optimisée', 'Latence faible', 'Open source', 'API simple'],
    website: 'https://fireworks.ai',
    docsUrl: 'https://docs.fireworks.ai/',
    keyUrl: 'https://fireworks.ai/api-keys',
    pros: ['Très rapide', 'Prix attractifs', 'Optimisations poussées', 'API claire'],
    cons: ['Sélection limitée', 'Moins de fonctionnalités', 'Support basique'],
    useCases: ['Applications performance', 'Production économique', 'Chatbots rapides', 'Prototypage'],
    badge: { text: 'Performance', variant: 'default' }
  },
  {
    id: 'replicate',
    name: 'Replicate',
    description: 'Plateforme pour exécuter des modèles ML en production facilement',
    models: ['meta/meta-llama-3-8b-instruct', 'meta/meta-llama-3-70b-instruct'],
    pricing: {
      free: 'Crédits gratuits mensuels',
      paid: 'Pay-per-second',
      unit: 'par seconde'
    },
    limits: {
      rateLimit: 'Variable',
      dailyLimit: 'Selon crédits',
      monthlyLimit: 'Variable'
    },
    speed: 'Moyen',
    reliability: 'stable',
    features: ['Modèles variés', 'Scaling auto', 'API REST', 'Communauté'],
    website: 'https://replicate.com',
    docsUrl: 'https://replicate.com/docs',
    keyUrl: 'https://replicate.com/account/api-tokens',
    pros: ['Facilité d\'usage', 'Scaling automatique', 'Modèles communauté', 'Prix au second'],
    cons: ['Démarrage plus lent', 'Coût variable', 'Moins optimisé'],
    useCases: ['Expérimentation', 'Prototypage', 'Modèles spécialisés', 'Tests ponctuels'],
    badge: { text: 'Communauté', variant: 'outline' }
  },
  {
    id: 'cohere',
    name: 'Cohere',
    description: 'Spécialiste NLP entreprise avec modèles Command optimisés',
    models: ['command', 'command-light', 'command-nightly'],
    pricing: {
      free: 'Usage gratuit limité',
      paid: 'Freemium puis entreprise',
      unit: 'par token'
    },
    limits: {
      rateLimit: '5 req/min (gratuit)',
      dailyLimit: 'Variable',
      monthlyLimit: 'Selon plan'
    },
    speed: 'Rapide',
    reliability: 'production',
    features: ['Enterprise NLP', 'RAG optimisé', 'Embeddings', 'Classification'],
    website: 'https://cohere.ai',
    docsUrl: 'https://docs.cohere.com/docs',
    keyUrl: 'https://dashboard.cohere.com/api-keys',
    pros: ['Excellent pour RAG', 'Enterprise-ready', 'API robuste', 'Embeddings qualité'],
    cons: ['Moins créatif', 'Focus entreprise', 'Prix élevé en volume'],
    useCases: ['RAG systems', 'Search enterprise', 'Classification', 'Embeddings'],
    badge: { text: 'RAG Expert', variant: 'secondary' }
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    description: 'Moteur de recherche IA avec sources et citations automatiques',
    models: ['llama-3.1-sonar-small-128k-online', 'llama-3.1-sonar-large-128k-online'],
    pricing: {
      free: '5 requêtes/4h gratuit',
      paid: '$20/mois pour Pro',
      unit: 'par requête'
    },
    limits: {
      rateLimit: '5 req/4h (gratuit)',
      dailyLimit: 'Variable selon plan',
      monthlyLimit: 'Selon abonnement'
    },
    speed: 'Rapide',
    reliability: 'stable',
    features: ['Recherche temps réel', 'Citations', 'Sources vérifiées', 'Web access'],
    website: 'https://perplexity.ai',
    docsUrl: 'https://docs.perplexity.ai/',
    keyUrl: 'https://www.perplexity.ai/settings/api',
    pros: ['Sources automatiques', 'Info actualisée', 'Citations précises', 'Interface clean'],
    cons: ['API récente', 'Limites strictes', 'Coût par requête élevé'],
    useCases: ['Recherche factuelle', 'Veille info', 'Fact-checking', 'Rapports sourced'],
    badge: { text: 'Recherche', variant: 'default' }
  },
  {
    id: 'groq',
    name: 'Groq',
    description: 'Inférence ultra-rapide avec processeurs LPU dédiés',
    models: ['llama3-8b-8192', 'llama3-70b-8192', 'mixtral-8x7b-32768'],
    pricing: {
      free: '30 req/min gratuit',
      paid: 'Gratuit puis payant',
      unit: 'par token'
    },
    limits: {
      rateLimit: '30 req/min (gratuit)',
      dailyLimit: '14400 req/jour',
      monthlyLimit: 'Variable'
    },
    speed: 'Très rapide',
    reliability: 'stable',
    features: ['LPU hardware', 'Latence minimale', 'Débit élevé', 'API simple'],
    website: 'https://groq.com',
    docsUrl: 'https://console.groq.com/docs',
    keyUrl: 'https://console.groq.com/keys',
    pros: ['Vitesse record', 'Gratuit généreux', 'Latence ultra-faible', 'Fiable'],
    cons: ['Choix modèles limité', 'Pas de fine-tuning', 'Hardware spécialisé'],
    useCases: ['Applications temps réel', 'Chatbots instantanés', 'Gaming', 'Streaming'],
    badge: { text: '🚀 Record vitesse', variant: 'default' }
  }
];
