export interface PricingTier {
  name: string;
  inputPrice: number; // prix per 1M input tokens
  outputPrice: number; // prix per 1M output tokens
  currency: string;
}

export interface AIProvider {
  id: string;
  name: string;
  description: string;
  models: {
    id: string;
    name: string;
    type: 'text' | 'image' | 'audio' | 'video' | 'embedding' | 'multimodal';
    pricing: PricingTier[];
    contextLength: number;
    features: string[];
    recommended?: boolean;
    category?: string;
    speed?: 'très-rapide' | 'rapide' | 'modéré' | 'lent';
    quality?: 'basic' | 'standard' | 'premium' | 'flagship';
  }[];
  website: string;
  apiUrl: string;
  region?: string;
}

export const aiProvidersData: AIProvider[] = [
  {
    id: 'openai',
    name: 'OpenAI',
    description: 'Leader mondial des modèles de langage avec GPT-4 et o1',
    website: 'https://openai.com',
    apiUrl: 'https://api.openai.com',
    region: 'US',
    models: [
      {
        id: 'gpt-5',
        name: 'GPT-5',
        type: 'multimodal',
        contextLength: 200000,
        features: ['Reasoning', 'Coding', 'Agentic Tasks', 'Multimodal'],
        recommended: true,
        category: 'Flagship LLM',
        speed: 'modéré',
        quality: 'flagship',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 1.25,
            outputPrice: 10.00,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'gpt-5-mini',
        name: 'GPT-5 Mini',
        type: 'multimodal',
        contextLength: 200000,
        features: ['Rapide', 'Économique', 'Tâches définies'],
        recommended: true,
        category: 'Premium LLM',
        speed: 'rapide',
        quality: 'premium',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 0.25,
            outputPrice: 2.00,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'gpt-5-nano',
        name: 'GPT-5 Nano',
        type: 'text',
        contextLength: 200000,
        features: ['Très rapide', 'Classification', 'Résumé'],
        recommended: false,
        category: 'Économique LLM',
        speed: 'très-rapide',
        quality: 'standard',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 0.05,
            outputPrice: 0.40,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'gpt-4o',
        name: 'GPT-4o',
        type: 'multimodal',
        contextLength: 128000,
        features: ['Multimodal', 'Code', 'Vision', 'Audio'],
        recommended: false,
        category: 'Premium LLM',
        speed: 'rapide',
        quality: 'premium',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 5.00,
            outputPrice: 15.00,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'gpt-4o-mini',
        name: 'GPT-4o Mini',
        type: 'multimodal',
        contextLength: 128000,
        features: ['Rapide', 'Économique', 'Vision'],
        recommended: true,
        category: 'Économique LLM',
        speed: 'très-rapide',
        quality: 'premium',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 0.15,
            outputPrice: 0.60,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'gpt-4-turbo',
        name: 'GPT-4 Turbo',
        type: 'multimodal',
        contextLength: 128000,
        features: ['Vision', 'JSON Mode', 'Function Calling'],
        category: 'Premium LLM',
        speed: 'rapide',
        quality: 'premium',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 10.00,
            outputPrice: 30.00,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'gpt-3.5-turbo',
        name: 'GPT-3.5 Turbo',
        type: 'text',
        contextLength: 16385,
        features: ['Économique', 'Rapide', 'Function Calling'],
        category: 'Économique LLM',
        speed: 'très-rapide',
        quality: 'standard',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 0.50,
            outputPrice: 1.50,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'o1-preview',
        name: 'o1-preview',
        type: 'text',
        contextLength: 128000,
        features: ['Raisonnement avancé', 'Mathématiques', 'Sciences'],
        category: 'Recherche',
        speed: 'lent',
        quality: 'flagship',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 15.00,
            outputPrice: 60.00,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'o1-mini',
        name: 'o1-mini',
        type: 'text',
        contextLength: 128000,
        features: ['Raisonnement', 'Code', 'Mathématiques'],
        category: 'Recherche',
        speed: 'modéré',
        quality: 'premium',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 3.00,
            outputPrice: 12.00,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'dall-e-3',
        name: 'DALL-E 3',
        type: 'image',
        contextLength: 0,
        features: ['HD', 'Créatif', 'Style personnalisé'],
        category: 'Text-to-Image',
        speed: 'modéré',
        quality: 'flagship',
        pricing: [
          {
            name: 'Standard (1024x1024)',
            inputPrice: 40.00,
            outputPrice: 0,
            currency: 'USD'
          },
          {
            name: 'HD (1024x1024)',
            inputPrice: 80.00,
            outputPrice: 0,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'dall-e-2',
        name: 'DALL-E 2',
        type: 'image',
        contextLength: 0,
        features: ['Créatif', 'Artistique'],
        category: 'Text-to-Image',
        speed: 'rapide',
        quality: 'standard',
        pricing: [
          {
            name: 'Standard (1024x1024)',
            inputPrice: 20.00,
            outputPrice: 0,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'whisper-1',
        name: 'Whisper',
        type: 'audio',
        contextLength: 0,
        features: ['Transcription', 'Multilingue', 'Précis'],
        category: 'Audio-to-Text',
        speed: 'rapide',
        quality: 'premium',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 6.00,
            outputPrice: 0,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'tts-1',
        name: 'TTS-1',
        type: 'audio',
        contextLength: 0,
        features: ['Synthèse vocale', 'Naturel', 'Rapide'],
        category: 'Text-to-Audio',
        speed: 'très-rapide',
        quality: 'standard',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 15.00,
            outputPrice: 0,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'tts-1-hd',
        name: 'TTS-1 HD',
        type: 'audio',
        contextLength: 0,
        features: ['Synthèse vocale HD', 'Très naturel', 'Qualité studio'],
        category: 'Text-to-Audio',
        speed: 'rapide',
        quality: 'flagship',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 30.00,
            outputPrice: 0,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'text-embedding-3-large',
        name: 'Text Embedding 3 Large',
        type: 'embedding',
        contextLength: 8191,
        features: ['Embeddings', 'Recherche sémantique'],
        category: 'Embedding',
        speed: 'très-rapide',
        quality: 'premium',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 0.13,
            outputPrice: 0,
            currency: 'USD'
          }
        ]
      }
    ]
  },
  {
    id: 'anthropic',
    name: 'Anthropic Claude',
    description: 'IA constitutionnelle avec Claude 3.5 Sonnet',
    website: 'https://anthropic.com',
    apiUrl: 'https://api.anthropic.com',
    region: 'US',
    models: [
      {
        id: 'claude-opus-4-1',
        name: 'Claude Opus 4.1',
        type: 'multimodal',
        contextLength: 200000,
        features: ['Raisonnement avancé', 'Tâches complexes', 'Code expert', 'Vision'],
        recommended: true,
        category: 'Flagship LLM',
        speed: 'modéré',
        quality: 'flagship',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 15.00,
            outputPrice: 75.00,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'claude-sonnet-4',
        name: 'Claude Sonnet 4',
        type: 'multimodal',
        contextLength: 1000000,
        features: ['Équilibre optimal', 'Contexte très long', 'Hybrid reasoning', 'Code'],
        recommended: true,
        category: 'Premium LLM',
        speed: 'rapide',
        quality: 'flagship',
        pricing: [
          {
            name: 'Standard (≤200k tokens)',
            inputPrice: 3.00,
            outputPrice: 15.00,
            currency: 'USD'
          },
          {
            name: 'Extended (>200k tokens)',
            inputPrice: 6.00,
            outputPrice: 15.00,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'claude-3-5-sonnet',
        name: 'Claude 3.5 Sonnet',
        type: 'multimodal',
        contextLength: 200000,
        features: ['Analyse longue', 'Raisonnement', 'Code', 'Vision'],
        recommended: false,
        category: 'Premium LLM',
        speed: 'rapide',
        quality: 'premium',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 3.00,
            outputPrice: 15.00,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'claude-3-5-haiku',
        name: 'Claude 3.5 Haiku',
        type: 'multimodal',
        contextLength: 200000,
        features: ['Très rapide', 'Économique', 'Vision'],
        recommended: true,
        category: 'Économique LLM',
        speed: 'très-rapide',
        quality: 'premium',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 0.80,
            outputPrice: 4.00,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'claude-3-opus',
        name: 'Claude 3 Opus',
        type: 'multimodal',
        contextLength: 200000,
        features: ['Analyse complexe', 'Créativité', 'Raisonnement avancé'],
        category: 'Premium LLM',
        speed: 'modéré',
        quality: 'flagship',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 15.00,
            outputPrice: 75.00,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'claude-3-haiku',
        name: 'Claude 3 Haiku',
        type: 'text',
        contextLength: 200000,
        features: ['Rapide', 'Économique', 'Analyse de documents'],
        category: 'Économique LLM',
        speed: 'très-rapide',
        quality: 'standard',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 0.25,
            outputPrice: 1.25,
            currency: 'USD'
          }
        ]
      }
    ]
  },
  {
    id: 'google',
    name: 'Google Gemini',
    description: 'Modèles multimodaux de Google',
    website: 'https://gemini.google.com',
    apiUrl: 'https://generativelanguage.googleapis.com',
    region: 'Global',
    models: [
      {
        id: 'gemini-2-5-pro',
        name: 'Gemini 2.5 Pro',
        type: 'multimodal',
        contextLength: 2000000,
        features: ['Raisonnement complexe', 'Code expert', 'Multimodal avancé'],
        recommended: true,
        category: 'Flagship LLM',
        speed: 'rapide',
        quality: 'flagship',
        pricing: [
          {
            name: 'Standard (≤200k tokens)',
            inputPrice: 1.25,
            outputPrice: 10.00,
            currency: 'USD'
          },
          {
            name: 'Extended (>200k tokens)',
            inputPrice: 2.50,
            outputPrice: 15.00,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'gemini-2-5-flash',
        name: 'Gemini 2.5 Flash',
        type: 'multimodal',
        contextLength: 1000000,
        features: ['Hybrid reasoning', 'Thinking budgets', 'Multimodal'],
        recommended: true,
        category: 'Premium LLM',
        speed: 'très-rapide',
        quality: 'premium',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 0.30,
            outputPrice: 2.50,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'gemini-2-5-flash-lite',
        name: 'Gemini 2.5 Flash-Lite',
        type: 'multimodal',
        contextLength: 1000000,
        features: ['Usage à grande échelle', 'Très économique', 'Multimodal'],
        recommended: true,
        category: 'Économique LLM',
        speed: 'très-rapide',
        quality: 'standard',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 0.10,
            outputPrice: 0.40,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'gemini-1-5-pro',
        name: 'Gemini 1.5 Pro',
        type: 'multimodal',
        contextLength: 2000000,
        features: ['Contexte très long', 'Multimodal', 'Code', 'Audio'],
        recommended: false,
        category: 'Premium LLM',
        speed: 'rapide',
        quality: 'premium',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 1.25,
            outputPrice: 5.00,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'gemini-1-5-flash',
        name: 'Gemini 1.5 Flash',
        type: 'multimodal',
        contextLength: 1000000,
        features: ['Très rapide', 'Économique', 'Multimodal'],
        recommended: true,
        category: 'Économique LLM',
        speed: 'très-rapide',
        quality: 'premium',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 0.075,
            outputPrice: 0.30,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'gemini-1-0-pro',
        name: 'Gemini 1.0 Pro',
        type: 'multimodal',
        contextLength: 32768,
        features: ['Équilibré', 'Multimodal', 'Raisonnement'],
        category: 'Standard LLM',
        speed: 'rapide',
        quality: 'standard',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 0.50,
            outputPrice: 1.50,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'gemini-vision-pro',
        name: 'Gemini Vision Pro',
        type: 'multimodal',
        contextLength: 32768,
        features: ['Vision avancée', 'OCR', 'Analyse d\'images'],
        category: 'Vision',
        speed: 'rapide',
        quality: 'flagship',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 2.50,
            outputPrice: 7.50,
            currency: 'USD'
          }
        ]
      }
    ]
  },
  {
    id: 'stability',
    name: 'Stability AI',
    description: 'Spécialiste de la génération d\'images avec Stable Diffusion',
    website: 'https://stability.ai',
    apiUrl: 'https://api.stability.ai',
    region: 'Global',
    models: [
      {
        id: 'stable-diffusion-xl',
        name: 'Stable Diffusion XL',
        type: 'image',
        contextLength: 0,
        features: ['Haute résolution', 'Créatif', 'Style personnalisé'],
        recommended: true,
        category: 'Text-to-Image',
        speed: 'modéré',
        quality: 'flagship',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 30.00,
            outputPrice: 0,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'stable-video-diffusion',
        name: 'Stable Video Diffusion',
        type: 'video',
        contextLength: 0,
        features: ['Génération vidéo', 'Image-to-Video', 'Créatif'],
        category: 'Text-to-Video',
        speed: 'lent',
        quality: 'premium',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 200.00,
            outputPrice: 0,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'stable-audio',
        name: 'Stable Audio',
        type: 'audio',
        contextLength: 0,
        features: ['Génération musicale', 'Effets sonores', 'Haute qualité'],
        category: 'Text-to-Audio',
        speed: 'modéré',
        quality: 'premium',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 50.00,
            outputPrice: 0,
            currency: 'USD'
          }
        ]
      }
    ]
  },
  {
    id: 'runwayml',
    name: 'RunwayML',
    description: 'Outils IA créatifs pour la génération vidéo et image',
    website: 'https://runwayml.com',
    apiUrl: 'https://api.runwayml.com',
    region: 'US',
    models: [
      {
        id: 'gen-3-alpha',
        name: 'Gen-3 Alpha',
        type: 'video',
        contextLength: 0,
        features: ['Génération vidéo', 'Haute qualité', 'Contrôle temporel'],
        recommended: true,
        category: 'Text-to-Video',
        speed: 'lent',
        quality: 'flagship',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 500.00,
            outputPrice: 0,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'gen-2',
        name: 'Gen-2',
        type: 'video',
        contextLength: 0,
        features: ['Text-to-Video', 'Image-to-Video', 'Stylisation'],
        category: 'Text-to-Video',
        speed: 'modéré',
        quality: 'premium',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 300.00,
            outputPrice: 0,
            currency: 'USD'
          }
        ]
      }
    ]
  },
  {
    id: 'eleven-labs',
    name: 'ElevenLabs',
    description: 'Synthèse vocale IA ultra-réaliste',
    website: 'https://elevenlabs.io',
    apiUrl: 'https://api.elevenlabs.io',
    region: 'Global',
    models: [
      {
        id: 'eleven-multilingual-v2',
        name: 'Multilingual v2',
        type: 'audio',
        contextLength: 0,
        features: ['29 langues', 'Voix naturelles', 'Clonage vocal'],
        recommended: true,
        category: 'Text-to-Audio',
        speed: 'rapide',
        quality: 'flagship',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 300.00,
            outputPrice: 0,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'eleven-turbo-v2',
        name: 'Turbo v2',
        type: 'audio',
        contextLength: 0,
        features: ['Ultra-rapide', 'Faible latence', 'Streaming'],
        category: 'Text-to-Audio',
        speed: 'très-rapide',
        quality: 'premium',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 200.00,
            outputPrice: 0,
            currency: 'USD'
          }
        ]
      }
    ]
  },
  {
    id: 'mistral',
    name: 'Mistral AI',
    description: 'Startup française avec modèles performants',
    website: 'https://mistral.ai',
    apiUrl: 'https://api.mistral.ai',
    region: 'EU',
    models: [
      {
        id: 'mistral-large',
        name: 'Mistral Large',
        type: 'text',
        contextLength: 128000,
        features: ['Français natif', 'Performant', 'Code', 'Function Calling'],
        recommended: true,
        category: 'Premium LLM',
        speed: 'rapide',
        quality: 'flagship',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 2.00,
            outputPrice: 6.00,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'mistral-medium',
        name: 'Mistral Medium',
        type: 'text',
        contextLength: 32768,
        features: ['Équilibré', 'Français', 'Polyvalent'],
        category: 'Standard LLM',
        speed: 'rapide',
        quality: 'premium',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 2.70,
            outputPrice: 8.10,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'mistral-small',
        name: 'Mistral Small',
        type: 'text',
        contextLength: 32768,
        features: ['Économique', 'Français', 'Rapide'],
        recommended: true,
        category: 'Économique LLM',
        speed: 'très-rapide',
        quality: 'standard',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 0.20,
            outputPrice: 0.60,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'codestral',
        name: 'Codestral',
        type: 'text',
        contextLength: 32768,
        features: ['Code spécialisé', 'Programmation', 'Débogage'],
        category: 'Code LLM',
        speed: 'rapide',
        quality: 'premium',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 0.20,
            outputPrice: 0.60,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'pixtral-large',
        name: 'Pixtral Large',
        type: 'multimodal',
        contextLength: 128000,
        features: ['Vision', 'Multimodal', 'Analyse d\'images'],
        category: 'Vision',
        speed: 'rapide',
        quality: 'flagship',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 3.00,
            outputPrice: 9.00,
            currency: 'USD'
          }
        ]
      }
    ]
  },
  {
    id: 'cohere',
    name: 'Cohere',
    description: 'Modèles spécialisés pour l\'entreprise et RAG',
    website: 'https://cohere.ai',
    apiUrl: 'https://api.cohere.ai',
    region: 'Global',
    models: [
      {
        id: 'command-r-plus',
        name: 'Command R+',
        type: 'text',
        contextLength: 128000,
        features: ['RAG optimisé', 'Multilingue', 'Entreprise'],
        recommended: true,
        category: 'RAG',
        speed: 'rapide',
        quality: 'flagship',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 3.00,
            outputPrice: 15.00,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'command-r',
        name: 'Command R',
        type: 'text',
        contextLength: 128000,
        features: ['RAG', 'Économique', 'Multilingue'],
        recommended: true,
        category: 'RAG',
        speed: 'rapide',
        quality: 'premium',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 0.50,
            outputPrice: 1.50,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'embed-english-v3',
        name: 'Embed English v3',
        type: 'embedding',
        contextLength: 512,
        features: ['Embeddings', 'Anglais', 'Recherche'],
        category: 'Embedding',
        speed: 'très-rapide',
        quality: 'premium',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 0.10,
            outputPrice: 0,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'embed-multilingual-v3',
        name: 'Embed Multilingual v3',
        type: 'embedding',
        contextLength: 512,
        features: ['Embeddings', 'Multilingue', 'Recherche sémantique'],
        category: 'Embedding',
        speed: 'très-rapide',
        quality: 'premium',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 0.10,
            outputPrice: 0,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'rerank-english-v3',
        name: 'Rerank English v3',
        type: 'text',
        contextLength: 4096,
        features: ['Reranking', 'RAG', 'Pertinence'],
        category: 'RAG',
        speed: 'très-rapide',
        quality: 'premium',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 2.00,
            outputPrice: 0,
            currency: 'USD'
          }
        ]
      }
    ]
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    description: 'Modèles optimisés pour la recherche et l\'analyse',
    website: 'https://perplexity.ai',
    apiUrl: 'https://api.perplexity.ai',
    region: 'US',
    models: [
      {
        id: 'sonar-large-online',
        name: 'Sonar Large Online',
        type: 'text',
        contextLength: 127072,
        features: ['Recherche web', 'Temps réel', 'Citations'],
        recommended: true,
        category: 'RAG',
        speed: 'modéré',
        quality: 'premium',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 1.00,
            outputPrice: 1.00,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'sonar-small-online',
        name: 'Sonar Small Online',
        type: 'text',
        contextLength: 127072,
        features: ['Recherche web', 'Économique', 'Rapide'],
        category: 'RAG',
        speed: 'rapide',
        quality: 'standard',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 0.20,
            outputPrice: 0.20,
            currency: 'USD'
          }
        ]
      }
    ]
  },
  {
    id: 'xai',
    name: 'xAI (Grok)',
    description: 'Modèles d\'IA par Elon Musk avec accès temps réel',
    website: 'https://x.ai',
    apiUrl: 'https://api.x.ai',
    region: 'US',
    models: [
      {
        id: 'grok-beta',
        name: 'Grok Beta',
        type: 'text',
        contextLength: 131072,
        features: ['Temps réel', 'Twitter/X intégré', 'Humour'],
        recommended: true,
        category: 'Premium LLM',
        speed: 'rapide',
        quality: 'premium',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 5.00,
            outputPrice: 15.00,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'grok-vision-beta',
        name: 'Grok Vision Beta',
        type: 'multimodal',
        contextLength: 131072,
        features: ['Vision', 'Analyse d\'images', 'Temps réel'],
        category: 'Vision',
        speed: 'rapide',
        quality: 'premium',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 8.00,
            outputPrice: 24.00,
            currency: 'USD'
          }
        ]
      }
    ]
  },
  {
    id: 'meta',
    name: 'Meta AI',
    description: 'Modèles Llama de Meta, open source',
    website: 'https://ai.meta.com',
    apiUrl: 'https://api.together.xyz',
    region: 'Global',
    models: [
      {
        id: 'llama-3-1-405b',
        name: 'Llama 3.1 405B',
        type: 'text',
        contextLength: 128000,
        features: ['Open source', 'Très performant', 'Multilingue'],
        recommended: true,
        category: 'Premium LLM',
        speed: 'modéré',
        quality: 'flagship',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 5.00,
            outputPrice: 15.00,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'llama-3-1-70b',
        name: 'Llama 3.1 70B',
        type: 'text',
        contextLength: 128000,
        features: ['Open source', 'Équilibré', 'Code'],
        recommended: true,
        category: 'Standard LLM',
        speed: 'rapide',
        quality: 'premium',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 0.88,
            outputPrice: 0.88,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'llama-3-1-8b',
        name: 'Llama 3.1 8B',
        type: 'text',
        contextLength: 128000,
        features: ['Open source', 'Économique', 'Rapide'],
        category: 'Économique LLM',
        speed: 'très-rapide',
        quality: 'standard',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 0.18,
            outputPrice: 0.18,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'llama-3-2-vision',
        name: 'Llama 3.2 Vision',
        type: 'multimodal',
        contextLength: 128000,
        features: ['Vision', 'Open source', 'Multimodal'],
        category: 'Vision',
        speed: 'rapide',
        quality: 'premium',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 1.50,
            outputPrice: 1.50,
            currency: 'USD'
          }
        ]
      }
    ]
  },
  {
    id: 'groq',
    name: 'Groq',
    description: 'Inférence ultra-rapide avec puces spécialisées',
    website: 'https://groq.com',
    apiUrl: 'https://api.groq.com',
    region: 'US',
    models: [
      {
        id: 'llama-3-1-70b-versatile',
        name: 'Llama 3.1 70B Versatile',
        type: 'text',
        contextLength: 131072,
        features: ['Ultra-rapide', 'Groq LPU', 'Versatile'],
        recommended: true,
        category: 'Standard LLM',
        speed: 'très-rapide',
        quality: 'premium',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 0.59,
            outputPrice: 0.79,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'mixtral-8x7b-32768',
        name: 'Mixtral 8x7B',
        type: 'text',
        contextLength: 32768,
        features: ['Ultra-rapide', 'MoE', 'Multilingue'],
        category: 'Standard LLM',
        speed: 'très-rapide',
        quality: 'premium',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 0.24,
            outputPrice: 0.24,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'gemma2-9b-it',
        name: 'Gemma2 9B IT',
        type: 'text',
        contextLength: 8192,
        features: ['Ultra-rapide', 'Léger', 'Instruction-tuned'],
        category: 'Économique LLM',
        speed: 'très-rapide',
        quality: 'standard',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 0.20,
            outputPrice: 0.20,
            currency: 'USD'
          }
        ]
      }
    ]
  },
  {
    id: 'together',
    name: 'Together AI',
    description: 'Plateforme d\'inférence pour modèles open source',
    website: 'https://together.ai',
    apiUrl: 'https://api.together.xyz',
    region: 'US',
    models: [
      {
        id: 'qwen-2-5-72b-instruct',
        name: 'Qwen 2.5 72B Instruct',
        type: 'text',
        contextLength: 131072,
        features: ['Multilingue', 'Code', 'Math'],
        recommended: true,
        category: 'Premium LLM',
        speed: 'rapide',
        quality: 'flagship',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 0.90,
            outputPrice: 0.90,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'deepseek-coder-33b-instruct',
        name: 'DeepSeek Coder 33B',
        type: 'text',
        contextLength: 16384,
        features: ['Code spécialisé', 'Programmation', 'Debug'],
        category: 'Code LLM',
        speed: 'rapide',
        quality: 'premium',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 0.80,
            outputPrice: 0.80,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'llama-3-2-11b-vision',
        name: 'Llama 3.2 11B Vision',
        type: 'multimodal',
        contextLength: 131072,
        features: ['Vision', 'Multimodal', 'Open source'],
        category: 'Vision',
        speed: 'rapide',
        quality: 'premium',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 0.18,
            outputPrice: 0.18,
            currency: 'USD'
          }
        ]
      }
    ]
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'Génération d\'images artistiques haut de gamme',
    website: 'https://midjourney.com',
    apiUrl: 'https://api.midjourney.com',
    region: 'US',
    models: [
      {
        id: 'midjourney-v6',
        name: 'Midjourney v6',
        type: 'image',
        contextLength: 0,
        features: ['Artistique', 'Haute qualité', 'Style unique'],
        recommended: true,
        category: 'Text-to-Image',
        speed: 'modéré',
        quality: 'flagship',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 100.00,
            outputPrice: 0,
            currency: 'USD'
          }
        ]
      },
      {
        id: 'midjourney-niji',
        name: 'Midjourney Niji',
        type: 'image',
        contextLength: 0,
        features: ['Style anime', 'Manga', 'Illustration'],
        category: 'Text-to-Image',
        speed: 'modéré',
        quality: 'premium',
        pricing: [
          {
            name: 'Standard',
            inputPrice: 80.00,
            outputPrice: 0,
            currency: 'USD'
          }
        ]
      }
    ]
  }
];

export const getProviderById = (id: string) => {
  return aiProvidersData.find(provider => provider.id === id);
};

export const getModelById = (providerId: string, modelId: string) => {
  const provider = getProviderById(providerId);
  return provider?.models.find(model => model.id === modelId);
};

export const getRecommendedModels = () => {
  const recommendedModels: Array<{provider: string, model: any}> = [];
  aiProvidersData.forEach(provider => {
    provider.models.forEach(model => {
      if (model.recommended) {
        recommendedModels.push({ provider: provider.name, model });
      }
    });
  });
  return recommendedModels;
};

export const getModelsByCategory = (category: string) => {
  const models: Array<{provider: string, model: any}> = [];
  aiProvidersData.forEach(provider => {
    provider.models.forEach(model => {
      if (model.category === category) {
        models.push({ provider: provider.name, model });
      }
    });
  });
  return models;
};

export const getModelsByType = (type: string) => {
  const models: Array<{provider: string, model: any}> = [];
  aiProvidersData.forEach(provider => {
    provider.models.forEach(model => {
      if (model.type === type) {
        models.push({ provider: provider.name, model });
      }
    });
  });
  return models;
};

export const getModelsBySpeed = (speed: string) => {
  const models: Array<{provider: string, model: any}> = [];
  aiProvidersData.forEach(provider => {
    provider.models.forEach(model => {
      if (model.speed === speed) {
        models.push({ provider: provider.name, model });
      }
    });
  });
  return models;
};

export const getCheapestModels = (limit: number = 5) => {
  const allModels: Array<{provider: string, model: any, avgPrice: number}> = [];
  
  aiProvidersData.forEach(provider => {
    provider.models.forEach(model => {
      if (model.type === 'text' && model.pricing[0]) {
        const avgPrice = (model.pricing[0].inputPrice + model.pricing[0].outputPrice) / 2;
        allModels.push({ provider: provider.name, model, avgPrice });
      }
    });
  });
  
  return allModels
    .sort((a, b) => a.avgPrice - b.avgPrice)
    .slice(0, limit);
};

export const getModelCategories = () => {
  const categories = new Set<string>();
  aiProvidersData.forEach(provider => {
    provider.models.forEach(model => {
      if (model.category) {
        categories.add(model.category);
      }
    });
  });
  return Array.from(categories).sort();
};

export const getModelTypes = () => {
  const types = new Set<string>();
  aiProvidersData.forEach(provider => {
    provider.models.forEach(model => {
      types.add(model.type);
    });
  });
  return Array.from(types);
};
