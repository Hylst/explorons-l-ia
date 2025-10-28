
import { ProviderInfo } from './ProviderInfoCard';

export const videoProvidersInfo: ProviderInfo[] = [
  {
    id: 'runway',
    name: 'Runway ML',
    description: 'Leader de la génération vidéo IA avec Gen-3 Alpha. Qualité professionnelle.',
    pricing: {
      free: '125 crédits gratuits',
      paid: '$12 - $76/mois',
      unit: 'pour 625-4500 crédits'
    },
    limits: {
      rateLimit: '10 req/min',
      monthlyLimit: 'Selon plan'
    },
    features: ['Gen-3 Alpha', 'High Quality', 'Professional', 'Motion Control'],
    speed: 'medium',
    reliability: 'production'
  },
  {
    id: 'pika',
    name: 'Pika Labs',
    description: 'Création vidéo IA avec contrôles créatifs avancés et effets spéciaux.',
    pricing: {
      free: '30 générations',
      paid: '$10 - $70/mois',
      unit: 'pour 700-7000 crédits'
    },
    limits: {
      rateLimit: '5 req/min',
      monthlyLimit: 'Selon crédits'
    },
    features: ['Creative Controls', 'Effects', 'Multiple Ratios', 'Upscaling'],
    speed: 'fast',
    reliability: 'stable'
  },
  {
    id: 'stable-video',
    name: 'Stable Video Diffusion',
    description: 'Modèle vidéo open-source de Stability AI avec haute qualité.',
    pricing: {
      free: 'Crédits d\'essai',
      paid: '$20/mois',
      unit: 'pour 1000 crédits'
    },
    limits: {
      rateLimit: '50 req/min',
      monthlyLimit: 'Selon crédits'
    },
    features: ['Open Source', 'High Resolution', 'Customizable', 'SVD Models'],
    speed: 'medium',
    reliability: 'stable'
  },
  {
    id: 'replicate-zeroscope',
    name: 'Replicate ZeroScope',
    description: 'Modèles vidéo open-source hébergés sur Replicate avec API stable.',
    pricing: {
      paid: '$0.003/seconde',
      unit: 'pay-per-use'
    },
    limits: {
      rateLimit: '50 req/min',
      monthlyLimit: 'Pay-per-use'
    },
    features: ['Open Source', 'Multiple Models', 'Flexible Pricing', 'No Subscriptions'],
    speed: 'medium',
    reliability: 'stable'
  },
  {
    id: 'leonardo-motion',
    name: 'Leonardo Motion',
    description: 'Animation d\'images avec IA générative, spécialisé dans le mouvement.',
    pricing: {
      free: '150 tokens/jour',
      paid: '$12 - $48/mois',
      unit: 'pour 8500-25000 tokens'
    },
    limits: {
      rateLimit: '20 req/min',
      dailyLimit: '150 tokens (gratuit)'
    },
    features: ['Image Animation', 'Motion Control', 'High Quality', 'Style Transfer'],
    speed: 'fast',
    reliability: 'stable'
  },
  {
    id: 'luma-dream-machine',
    name: 'Luma Dream Machine',
    description: 'Génération vidéo photorealistic avec qualité cinématographique.',
    pricing: {
      free: '30 générations',
      paid: '$30 - $400/mois',
      unit: 'pour 120-2000 générations'
    },
    limits: {
      rateLimit: '5 req/min',
      monthlyLimit: 'Selon plan'
    },
    features: ['Photorealistic', 'Cinematic Quality', 'Long Duration', 'Text Overlay'],
    speed: 'medium',
    reliability: 'production'
  },
  {
    id: 'haiper',
    name: 'Haiper AI',
    description: 'Création vidéo IA accessible avec interface intuitive et prix abordables.',
    pricing: {
      free: '10 générations',
      paid: '$10 - $30/mois',
      unit: 'pour 300-1500 crédits'
    },
    limits: {
      rateLimit: '10 req/min',
      monthlyLimit: 'Selon crédits'
    },
    features: ['User Friendly', 'Affordable', 'Good Quality', 'Fast Generation'],
    speed: 'fast',
    reliability: 'stable'
  },
  {
    id: 'invideo-ai',
    name: 'InVideo AI',
    description: 'Création vidéo complète avec voix-off, musique et montage automatique.',
    pricing: {
      free: '10 min/mois',
      paid: '$20 - $60/mois',
      unit: 'pour 50-200 min'
    },
    limits: {
      rateLimit: '5 req/min',
      monthlyLimit: 'Selon plan'
    },
    features: ['Complete Videos', 'Voice Over', 'Music', 'Auto Editing'],
    speed: 'fast',
    reliability: 'production'
  },
  {
    id: 'synthesia',
    name: 'Synthesia',
    description: 'Vidéos avec avatars IA parlants dans 120+ langues.',
    pricing: {
      paid: '$30 - $90/mois',
      unit: 'pour 30-90 vidéos'
    },
    limits: {
      rateLimit: '10 req/min',
      monthlyLimit: 'Selon plan'
    },
    features: ['AI Avatars', '120+ Languages', 'Professional', 'Custom Avatars'],
    speed: 'medium',
    reliability: 'production'
  },
  {
    id: 'd-id',
    name: 'D-ID',
    description: 'Création d\'avatars parlants à partir de photos avec lip-sync parfait.',
    pricing: {
      free: '20 crédits',
      paid: '$5.99 - $299/mois',
      unit: 'pour 15-300 min'
    },
    limits: {
      rateLimit: '20 req/min',
      monthlyLimit: 'Selon plan'
    },
    features: ['Photo to Video', 'Lip Sync', 'Multiple Languages', 'API Access'],
    speed: 'fast',
    reliability: 'production'
  }
];
