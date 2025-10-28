
import { ProviderInfo } from './ProviderInfoCard';

export const imageProvidersInfo: ProviderInfo[] = [
  {
    id: 'openai',
    name: 'OpenAI DALL-E',
    description: 'DALL-E 3 génère des images haute qualité avec compréhension textuelle avancée.',
    pricing: {
      paid: '0.040$ - 0.120$',
      unit: '/ image'
    },
    limits: {
      rateLimit: '50 req/min',
      dailyLimit: 'Selon tier'
    },
    features: ['Haute Qualité', 'Text Understanding', 'Style Control', '1024x1024'],
    speed: 'medium',
    reliability: 'production'
  },
  {
    id: 'stability',
    name: 'Stability AI',
    description: 'Créateur de Stable Diffusion. Ultra génère des images photoréalistes exceptionnelles.',
    pricing: {
      paid: '0.040$ - 0.080$',
      unit: '/ image'
    },
    limits: {
      rateLimit: '150 req/min',
      monthlyLimit: 'Selon plan'
    },
    features: ['Photorealistic', 'Multiple Styles', 'High Res', 'Fast Generation'],
    speed: 'fast',
    reliability: 'production'
  },
  {
    id: 'replicate',
    name: 'Replicate',
    description: 'Accès à FLUX 1.1 Pro et nombreux modèles. Plateforme flexible pour l\'expérimentation.',
    pricing: {
      paid: '0.003$ - 0.055$',
      unit: '/ image'
    },
    limits: {
      rateLimit: '50 req/min',
      monthlyLimit: 'Pay-per-use'
    },
    features: ['FLUX 1.1 Pro', 'Multiple Models', 'Flexible', 'Experimental'],
    speed: 'medium',
    reliability: 'stable'
  },
  {
    id: 'huggingface',
    name: 'Hugging Face',
    description: 'Hub de modèles open-source. FLUX.1-schnell rapide et gratuit avec limitations.',
    pricing: {
      free: 'Limité',
      paid: '0.023$ - 0.048$',
      unit: '/ 1k chars'
    },
    limits: {
      rateLimit: '1 req/sec (gratuit)',
      dailyLimit: '100 req/jour'
    },
    features: ['Open Source', 'FLUX Models', 'Community', 'Free Tier'],
    speed: 'slow',
    reliability: 'experimental'
  },
  {
    id: 'fal',
    name: 'Fal.ai',
    description: 'API ultra-rapide spécialisée dans FLUX. Optimisé pour la vitesse et la qualité.',
    pricing: {
      paid: '0.0055$ - 0.035$',
      unit: '/ image'
    },
    limits: {
      rateLimit: '100 req/min',
      dailyLimit: 'Illimité'
    },
    features: ['Ultra Fast', 'FLUX Optimized', 'Low Latency', 'High Quality'],
    speed: 'ultra-fast',
    reliability: 'stable'
  },
  {
    id: 'together',
    name: 'Together AI',
    description: 'FLUX schnell gratuit et modèles Stable Diffusion. Excellent rapport qualité-prix.',
    pricing: {
      free: 'FLUX Schnell',
      paid: '0.003$ - 0.010$',
      unit: '/ image'
    },
    limits: {
      rateLimit: '300 req/min',
      dailyLimit: 'Illimité'
    },
    features: ['Free FLUX', 'Multiple Models', 'Cost Effective', 'Fast'],
    speed: 'fast',
    reliability: 'stable'
  },
  {
    id: 'fireworks',
    name: 'Fireworks AI',
    description: 'FLUX-1-schnell optimisé pour la vitesse. Inférence rapide et économique.',
    pricing: {
      paid: '0.003$',
      unit: '/ image'
    },
    limits: {
      rateLimit: '500 req/min',
      dailyLimit: 'Illimité'
    },
    features: ['Super Fast', 'FLUX Optimized', 'Low Cost', '4 Steps'],
    speed: 'ultra-fast',
    reliability: 'stable'
  },
  {
    id: 'ideogram',
    name: 'Ideogram',
    description: 'Excellent pour le texte dans les images. V2 Turbo offre vitesse et précision textuelle.',
    pricing: {
      paid: '0.008$ - 0.032$',
      unit: '/ image'
    },
    limits: {
      rateLimit: '50 req/min',
      monthlyLimit: 'Selon plan'
    },
    features: ['Text in Images', 'Typography', 'Magic Prompt', 'V2 Model'],
    speed: 'fast',
    reliability: 'stable'
  },
  {
    id: 'pollinations',
    name: 'Pollinations AI',
    description: 'Service complètement gratuit et illimité. Qualité correcte pour usage non-commercial.',
    pricing: {
      free: 'Illimité',
    },
    limits: {
      rateLimit: 'Aucune limite',
      dailyLimit: 'Illimité'
    },
    features: ['Totalement Gratuit', 'Illimité', 'No API Key', 'Community'],
    speed: 'medium',
    reliability: 'experimental'
  },
  {
    id: 'dezgo',
    name: 'DeZGO',
    description: 'FLUX gratuit sans clé API. Idéal pour tester et prototyper rapidement.',
    pricing: {
      free: 'FLUX gratuit',
    },
    limits: {
      rateLimit: '1 req/10sec',
      dailyLimit: 'Limité'
    },
    features: ['Free FLUX', 'No API Key', 'Quick Test', 'Prototype'],
    speed: 'slow',
    reliability: 'experimental'
  },
  {
    id: 'prodia',
    name: 'Prodia',
    description: 'SDXL gratuit avec queue système. Bon pour usage occasionnel sans frais.',
    pricing: {
      free: 'SDXL gratuit',
    },
    limits: {
      rateLimit: 'Queue system',
      dailyLimit: 'Limité'
    },
    features: ['Free SDXL', 'Queue System', 'No Cost', 'Basic Quality'],
    speed: 'slow',
    reliability: 'experimental'
  }
];
