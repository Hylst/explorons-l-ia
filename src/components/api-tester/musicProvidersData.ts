
import { ProviderInfo } from './ProviderInfoCard';

export const musicProvidersInfo: ProviderInfo[] = [
  {
    id: 'suno',
    name: 'Suno AI',
    description: 'Génération musicale haute qualité avec paroles et instrumentaux. Leader du marché.',
    pricing: {
      free: '50 crédits/mois',
      paid: '$10 - $30/mois',
      unit: 'pour 500-2000 crédits'
    },
    limits: {
      rateLimit: '10 req/min',
      monthlyLimit: 'Selon plan'
    },
    features: ['Lyrics Generation', 'Multiple Genres', 'High Quality', 'Commercial Use'],
    speed: 'medium',
    reliability: 'production'
  },
  {
    id: 'udio',
    name: 'Udio',
    description: 'Création musicale IA de haute qualité avec contrôles avancés et styles variés.',
    pricing: {
      free: '10 générations/jour',
      paid: '$10 - $30/mois',
      unit: 'pour 400-1200 crédits'
    },
    limits: {
      rateLimit: '5 req/min',
      dailyLimit: '10 générations (gratuit)'
    },
    features: ['Style Control', 'Audio Quality', 'Multiple Formats', 'Extended Length'],
    speed: 'medium',
    reliability: 'production'
  },
  {
    id: 'musicgen',
    name: 'MusicGen (Meta)',
    description: 'Modèle open-source de Meta via HuggingFace. Gratuit mais avec limitations.',
    pricing: {
      free: 'Gratuit',
      paid: '$9/mois',
      unit: 'HuggingFace Pro'
    },
    limits: {
      rateLimit: '1 req/20sec (gratuit)',
      dailyLimit: 'Limité par queue'
    },
    features: ['Open Source', 'Multiple Models', 'Research Use', 'Customizable'],
    speed: 'slow',
    reliability: 'experimental'
  },
  {
    id: 'replicate-musicgen',
    name: 'Replicate MusicGen',
    description: 'MusicGen hébergé sur Replicate avec API stable et scalable.',
    pricing: {
      paid: '$0.0023/seconde',
      unit: 'pay-per-use'
    },
    limits: {
      rateLimit: '50 req/min',
      monthlyLimit: 'Pay-per-use'
    },
    features: ['Stable API', 'Multiple Models', 'Scalable', 'No Queues'],
    speed: 'fast',
    reliability: 'stable'
  },
  {
    id: 'elevenlabs-music',
    name: 'ElevenLabs Music',
    description: 'Génération de musique et effets sonores avec qualité audio exceptionnelle.',
    pricing: {
      free: '1000 chars/mois',
      paid: '$5 - $99/mois',
      unit: 'pour 30k-500k chars'
    },
    limits: {
      rateLimit: '2 req/sec',
      monthlyLimit: 'Selon plan'
    },
    features: ['High Fidelity', 'Sound Effects', 'Voice Synthesis', 'API Stable'],
    speed: 'fast',
    reliability: 'production'
  },
  {
    id: 'mubert',
    name: 'Mubert API',
    description: 'Musique générative en temps réel avec styles personnalisables et royalty-free.',
    pricing: {
      free: 'Plan développeur',
      paid: '$99 - $499/mois',
      unit: 'usage commercial'
    },
    limits: {
      rateLimit: '100 req/jour (gratuit)',
      monthlyLimit: 'Selon plan'
    },
    features: ['Real-time', 'Royalty Free', 'Multiple Styles', 'Commercial Rights'],
    speed: 'ultra-fast',
    reliability: 'stable'
  },
  {
    id: 'audiocraft',
    name: 'AudioCraft (Meta)',
    description: 'Suite complète de génération audio incluant MusicGen et SoundGen.',
    pricing: {
      free: 'Open Source',
    },
    limits: {
      rateLimit: 'Auto-hébergé',
      dailyLimit: 'Illimité'
    },
    features: ['Open Source', 'Self-hosted', 'Research', 'Customizable'],
    speed: 'medium',
    reliability: 'experimental'
  },
  {
    id: 'beatoven',
    name: 'Beatoven.ai',
    description: 'Musique adaptative pour contenu avec synchronisation automatique et styles variés.',
    pricing: {
      free: '15 min/mois',
      paid: '$6 - $20/mois',
      unit: 'pour 60-500 min'
    },
    limits: {
      rateLimit: '10 req/min',
      monthlyLimit: 'Selon plan'
    },
    features: ['Adaptive Music', 'Content Sync', 'Multiple Moods', 'Copyright Free'],
    speed: 'fast',
    reliability: 'stable'
  },
  {
    id: 'freesound',
    name: 'FreeSound API (Gratuit)',
    description: 'Base de données collaborative de sons et échantillons audio libres.',
    pricing: {
      free: 'Gratuit',
    },
    limits: {
      rateLimit: '2000 req/jour',
      dailyLimit: 'Illimité'
    },
    features: ['Sound Samples', 'Creative Commons', 'Search API', 'Community'],
    speed: 'ultra-fast',
    reliability: 'stable'
  },
  {
    id: 'soundraw',
    name: 'Soundraw (Freemium)',
    description: 'Génération musicale avec interface simple et téléchargements gratuits limités.',
    pricing: {
      free: '3 téléchargements/mois',
      paid: '$16 - $35/mois',
      unit: 'usage illimité'
    },
    limits: {
      rateLimit: '5 req/min',
      monthlyLimit: 'Selon plan'
    },
    features: ['Simple Interface', 'Multiple Genres', 'Royalty Free', 'Instant Download'],
    speed: 'fast',
    reliability: 'stable'
  }
];
