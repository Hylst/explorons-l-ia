
import { Resource } from '../resourcesData';
import { extractVideoId } from '@/services/youtubeService';

const videoResources = [
  {
    title: "Dossier : l'intelligence artificielle",
    source: "ARTE Family",
    description: "Documentaire complet d'ARTE sur l'intelligence artificielle en français",
    link: "https://www.youtube.com/watch?v=TfL-H8goDF0",
    type: "vidéo",
    year: 2024,
    tags: ["documentaire", "français", "arte"]
  },
  {
    title: "Intelligence artificielle, une révolution : entre fascination et inquiétude",
    source: "FRANCE 24",
    description: "Analyse approfondie de la révolution IA par France 24",
    link: "https://www.youtube.com/watch?v=YIUnMOM-nI4",
    type: "vidéo",
    year: 2024,
    tags: ["actualité", "français", "révolution"]
  },
  {
    title: "FORMATION INTELLIGENCE ARTIFICIELLE : Le Cours COMPLET pour Tout Savoir ! - 2025",
    source: "Vincent OG",
    description: "Formation complète en français sur l'intelligence artificielle",
    link: "https://www.youtube.com/watch?v=uJZ4kycF8bc",
    type: "vidéo",
    year: 2025,
    tags: ["formation", "français", "complet"]
  },
  {
    title: "Quels sont les risques de l'intelligence artificielle pour les enfants ?",
    source: "FRANCE 24",
    description: "Analyse des risques de l'IA pour les plus jeunes par France 24",
    link: "https://www.youtube.com/watch?v=W96zBFEqTDY",
    type: "vidéo",
    year: 2024,
    tags: ["enfants", "risques", "français"]
  },
  {
    title: "Le B.A.-BA de l'intelligence artificielle | Une leçon de géopolitique",
    source: "ARTE",
    description: "Les bases de l'IA expliquées dans une perspective géopolitique par ARTE",
    link: "https://www.youtube.com/watch?v=Zjr1bqE8Bg0",
    type: "vidéo",
    year: 2024,
    tags: ["géopolitique", "bases", "arte"]
  },
  {
    title: "Comment ces IA inventent-elles des images ?",
    source: "ScienceEtonnante",
    description: "Explication du fonctionnement des IA génératives d'images en français",
    link: "https://www.youtube.com/watch?v=tdelUss-5hY",
    type: "vidéo",
    year: 2023,
    tags: ["génération", "images", "science"]
  },
  {
    title: "Une intelligence artificielle peut-elle être créative ?",
    source: "ScienceEtonnante",
    description: "Exploration de la créativité artificielle par David Louapre",
    link: "https://www.youtube.com/watch?v=xuBzQ38DNhE",
    type: "vidéo",
    year: 2023,
    tags: ["créativité", "philosophie", "science"]
  },
  {
    title: "Le deep learning",
    source: "ScienceEtonnante",
    description: "Introduction claire au deep learning en français",
    link: "https://www.youtube.com/watch?v=trWrEWfhTVg",
    type: "vidéo",
    year: 2022,
    tags: ["deep learning", "technique", "vulgarisation"]
  },
  {
    title: "Comment les I.A. font-elles pour comprendre notre langue ?",
    source: "ScienceEtonnante",
    description: "Explication du traitement du langage naturel par les IA",
    link: "https://www.youtube.com/watch?v=CsQNF9s78Nc",
    type: "vidéo",
    year: 2023,
    tags: ["nlp", "langage", "compréhension"]
  },
  {
    title: "Ce qui se cache derrière le fonctionnement de ChatGPT",
    source: "ScienceEtonnante",
    description: "Analyse technique du fonctionnement de ChatGPT en français",
    link: "https://www.youtube.com/watch?v=7ell8KEbhJo",
    type: "vidéo",
    year: 2023,
    tags: ["chatgpt", "llm", "explication"]
  },
  {
    title: "Les 4 étapes pour entrainer un LLM",
    source: "ScienceEtonnante",
    description: "Guide complet de l'entraînement des modèles de langage",
    link: "https://www.youtube.com/watch?v=YcIbZGTRMjI",
    type: "vidéo",
    year: 2024,
    tags: ["entraînement", "llm", "technique"]
  },
  {
    title: "[REPLAY] - La carte de l'IA",
    source: "Machine Learnia",
    description: "Vue d'ensemble complète du paysage de l'intelligence artificielle",
    link: "https://www.youtube.com/watch?v=mT6NnslbNLM",
    type: "vidéo",
    year: 2024,
    tags: ["panorama", "carte", "formation"]
  },
  {
    title: "FORMATION MACHINE LEARNING",
    source: "Machine Learnia",
    description: "Formation complète en machine learning en français",
    link: "https://www.youtube.com/watch?v=EUD07IiviJg",
    type: "vidéo",
    year: 2023,
    tags: ["machine learning", "formation", "français"]
  },
  {
    title: "But what is a neural network?",
    source: "3Blue1Brown",
    description: "Explication visuelle exceptionnelle des réseaux de neurones avec animations claires",
    link: "https://www.youtube.com/watch?v=aircAruvnKk",
    type: "vidéo",
    year: 2017,
    tags: ["réseaux de neurones", "visuel", "fondamentaux"]
  },
  {
    title: "Transformer Neural Networks Explained",
    source: "CodeEmporium",
    description: "Explication détaillée de l'architecture Transformer qui révolutionne l'IA",
    link: "https://www.youtube.com/watch?v=4Bdc55j80l8",
    type: "vidéo",
    year: 2021,
    tags: ["transformer", "architecture", "NLP"]
  },
  {
    title: "How Large Language Models Work",
    source: "Andrej Karpathy",
    description: "Explication technique des LLM par l'ex-directeur IA de Tesla",
    link: "https://www.youtube.com/watch?v=zjkBMFhNj_g",
    type: "vidéo",
    year: 2023,
    tags: ["LLM", "technique", "expert"]
  }
];

// Génération automatique des videoId pour toutes les vidéos
export const videos: Resource[] = videoResources.map(video => ({
  ...video,
  videoId: extractVideoId(video.link) || undefined
}));
