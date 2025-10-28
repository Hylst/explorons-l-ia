import { Resource } from '../resourcesData';

export const courses: Resource[] = [
  // Cours internes (développés dans l'app)
  {
    title: "Les Bases de l'Apprentissage Supervisé : Guide Pratique et Interactif",
    source: "Explorons l'IA",
    description: "Découvrez les fondamentaux de l'apprentissage supervisé avec des exemples concrets, des analogies simples et des visualisations interactives. Parfait pour débuter en machine learning.",
    link: "/cours/apprentissage-supervise",
    type: "cours",
    year: 2024,
    tags: ["Apprentissage Supervisé", "Machine Learning", "Débutant", "Interactif", "Interne"],
    isInternal: true
  },
  {
    title: "Apprentissage Non Supervisé : Découvrir les Structures Cachées",
    source: "Explorons l'IA",
    description: "Explorez les techniques d'apprentissage non supervisé : clustering, réduction de dimensionnalité et règles d'association. Apprenez à identifier des patterns cachés dans vos données sans exemples étiquetés.",
    link: "/cours/apprentissage-non-supervise",
    type: "cours",
    year: 2024,
    tags: ["Apprentissage Non Supervisé", "Clustering", "Machine Learning", "Analyse de Données", "Interne"],
    isInternal: true
  },
  {
    title: "Les Bases Mathématiques derrière l'Intelligence Artificielle",
    source: "Explorons l'IA",
    description: "Guide complet et accessible pour comprendre les fondements mathématiques de l'IA : algèbre linéaire, calcul différentiel, probabilités et statistiques. Avec des exemples concrets et des visualisations interactives.",
    link: "/cours/bases-mathematiques-ia",
    type: "cours",
    year: 2024,
    tags: ["Mathématiques", "Algèbre Linéaire", "Probabilités", "Statistiques", "Fondamentaux", "Interne"],
    isInternal: true
  },
  {
    title: "Maîtriser les Prompts : Guide Complet du Prompt Engineering",
    source: "Explorons l'IA",
    description: "Guide complet pour apprendre l'art du prompt engineering. Découvrez les techniques avancées, les bonnes pratiques et les méthodes pour optimiser vos interactions avec l'IA.",
    link: "/cours/prompt-engineering",
    type: "cours",
    year: 2024,
    tags: ["Prompt Engineering", "Communication IA", "Pratique", "Interne"],
    isInternal: true
  },
  {
    title: "Chain of Prompts : Maîtriser l'Art de l'Enchaînement d'Invites",
    source: "Explorons l'IA",
    description: "Apprenez à construire des conversations complexes avec l'IA en enchaînant des requêtes successives. Technique essentielle pour résoudre des problèmes complexes et obtenir des résultats précis.",
    link: "/cours/chain-of-prompts",
    type: "cours",
    year: 2024,
    tags: ["Chain of Prompts", "Conversation IA", "Technique avancée", "Productivité", "Interne"],
    isInternal: true
  },
  {
    title: "Paramètres des LLM : Comprendre et Optimiser les Modèles de Langage",
    source: "Explorons l'IA",
    description: "Découvrez tous les paramètres qui caractérisent un LLM : architecture, hyperparamètres, optimisations et métriques. Apprenez à choisir et configurer le bon modèle selon vos besoins.",
    link: "/cours/parametres-llm",
    type: "cours",
    year: 2024,
    tags: ["LLM", "Paramètres", "Architecture", "Optimisation", "Technique", "Interne"],
    isInternal: true
  },
  {
    title: "IA et Créativité : Révolutionner votre Processus Créatif",
    source: "Explorons l'IA", 
    description: "Explorez comment l'IA transforme la créativité dans tous les domaines. Apprenez à utiliser les outils d'IA générative pour amplifier votre potentiel créatif.",
    link: "/cours/ia-creativite",
    type: "cours",
    year: 2024,
    tags: ["Créativité", "Design", "Art numérique", "Innovation", "Interne"],
    isInternal: true
  },
  {
    title: "Deep Learning Pratique : De la Théorie à l'Application",
    source: "Explorons l'IA",
    description: "Cours pratique sur le deep learning avec des projets concrets. Apprenez à construire, entraîner et déployer vos premiers modèles de deep learning.",
    link: "/cours/deep-learning-pratique", 
    type: "cours",
    year: 2024,
    tags: ["Deep Learning", "Pratique", "Projets", "Neural Networks", "Interne"],
    isInternal: true
  },
  {
    title: "IA Éthique et Responsable : Guide Pratique",
    source: "Explorons l'IA",
    description: "Formation complète sur les enjeux éthiques de l'IA. Apprenez à développer et utiliser l'IA de manière responsable et éthique.",
    link: "/cours/ia-ethique",
    type: "cours", 
    year: 2024,
    tags: ["Éthique", "Responsabilité", "Gouvernance", "Société", "Interne"],
    isInternal: true
  },
  {
    title: "IA pour l'Entreprise : Stratégie et Implémentation",
    source: "Explorons l'IA",
    description: "Guide stratégique pour intégrer l'IA en entreprise. De l'analyse des besoins au déploiement, découvrez les meilleures pratiques.",
    link: "/cours/ia-entreprise",
    type: "cours",
    year: 2024, 
    tags: ["Entreprise", "Stratégie", "Transformation", "ROI", "Interne"],
    isInternal: true
  },
  {
    title: "NLP et LLM : Comprendre le Traitement du Langage",
    source: "Explorons l'IA",
    description: "Cours approfondi sur le NLP et les LLM. Comprenez le fonctionnement des modèles de langage et leurs applications pratiques.",
    link: "/cours/nlp-comprehension",
    type: "cours",
    year: 2024,
    tags: ["NLP", "LLM", "Langage", "Transformers", "Interne"], 
    isInternal: true
  },
  {
    title: "Green IT : Impact Environnemental de l'IA et du Numérique",
    source: "Explorons l'IA",
    description: "Comprendre et réduire l'empreinte écologique de l'IA, du cloud, des smartphones et du numérique. Données scientifiques, analogies concrètes et solutions pratiques.",
    link: "/cours/ia-environnement",
    type: "cours",
    year: 2024,
    tags: ["Green IT", "Environnement", "Développement durable", "IA", "Datacenter", "Interne"],
    isInternal: true
  },

  // Cours externes existants
  {
    title: "Machine Learning A-Z™: Hands-On Python & R In Data Science",
    source: "Udemy",
    description: "Learn to create Machine Learning Algorithms in Python and R from two Data Science experts. Code Included.",
    link: "https://www.udemy.com/course/machinelearning/",
    type: "cours",
    year: 2020,
    tags: ["Machine Learning", "Python", "R", "Data Science"]
  },
  {
    title: "Deep Learning Specialization",
    source: "Coursera",
    description: "Master Deep Learning, and Break into AI. Build and train neural network architectures such as CNNs, RNNs, LSTMs, Transformers and more.",
    link: "https://www.coursera.org/specializations/deep-learning",
    type: "cours",
    year: 2018,
    tags: ["Deep Learning", "Neural Networks", "CNN", "RNN"]
  },
  {
    title: "AI For Everyone",
    source: "Coursera",
    description: "This course is a non-technical introduction to AI. It cuts through the hype to explain what AI is, what it can do, how it works, and how to spot opportunities to apply AI to problems.",
    link: "https://www.coursera.org/learn/ai-for-everyone",
    type: "cours",
    year: 2019,
    tags: ["AI", "Non-Technical", "Introduction"]
  },
  {
    title: "TensorFlow in Practice Specialization",
    source: "Coursera",
    description: "Learn how to use TensorFlow to build scalable AI-powered applications with deep learning.",
    link: "https://www.coursera.org/specializations/tensorflow-in-practice",
    type: "cours",
    year: 2020,
    tags: ["TensorFlow", "AI", "Deep Learning", "Python"]
  },
  {
    title: "Mathematics for Machine Learning Specialization",
    source: "Coursera",
    description: "Learn the mathematics behind machine learning. Master linear algebra, calculus, and probability, and see how to apply it in Python.",
    link: "https://www.coursera.org/specializations/mathematics-machine-learning",
    type: "cours",
    year: 2020,
    tags: ["Mathematics", "Machine Learning", "Linear Algebra", "Calculus", "Probability", "Python"]
  },
  {
    title: "IBM AI Engineering Professional Certificate",
    source: "Coursera",
    description: "Start your journey to becoming an AI Engineer. No degree or prior experience required.",
    link: "https://www.coursera.org/professional-certificates/ibm-ai-engineering",
    type: "cours",
    year: 2020,
    tags: ["AI Engineering", "Professional Certificate"]
  },
  {
    title: "Google AI Platform: From Start to Scale",
    source: "Coursera",
    description: "Learn how to build and deploy production-ready AI models on Google Cloud Platform (GCP).",
    link: "https://www.coursera.org/specializations/google-ai-platform",
    type: "cours",
    year: 2020,
    tags: ["Google Cloud", "AI", "Deployment"]
  },
  {
    title: "Advanced Machine Learning Specialization",
    source: "Coursera",
    description: "Go beyond the foundations of Machine Learning, and master advanced techniques.",
    link: "https://www.coursera.org/specializations/advanced-machine-learning",
    type: "cours",
    year: 2015,
    tags: ["Machine Learning", "Advanced Techniques"]
  },
  {
    title: "Natural Language Processing Specialization",
    source: "Coursera",
    description: "Learn how to use natural language processing to build innovative products.",
    link: "https://www.coursera.org/specializations/natural-language-processing",
    type: "cours",
    year: 2018,
    tags: ["Natural Language Processing"]
  },
  {
    title: "AWS Machine Learning Specialization",
    source: "Coursera",
    description: "Learn how to use Amazon Web Services (AWS) to build, train, and deploy machine learning models at scale.",
    link: "https://www.coursera.org/specializations/aws-machine-learning",
    type: "cours",
    year: 2019,
    tags: ["AWS", "Machine Learning"]
  }
];

// Structure détaillée pour les cours internes seulement
export const internalCoursesData = [
  {
    id: 'apprentissage-supervise',
    title: 'Les Bases de l\'Apprentissage Supervisé : Guide Pratique et Interactif',
    description: 'Découvrez les fondamentaux de l\'apprentissage supervisé avec des exemples concrets, des analogies simples et des visualisations interactives.',
    link: '/cours/apprentissage-supervise',
    category: 'Machine Learning',
    level: 'Débutant',
    duration: '3h',
    tags: ['Apprentissage Supervisé', 'Machine Learning', 'Classification', 'Régression'],
    author: 'Geoffroy Streit',
    year: 2024,
    language: 'Français'
  },
  {
    id: 'apprentissage-non-supervise',
    title: 'Apprentissage Non Supervisé : Découvrir les Structures Cachées',
    description: 'Explorez les techniques d\'apprentissage non supervisé : clustering, réduction de dimensionnalité et règles d\'association.',
    link: '/cours/apprentissage-non-supervise',
    category: 'Machine Learning', 
    level: 'Débutant à Intermédiaire',
    duration: '2h30',
    tags: ['Apprentissage Non Supervisé', 'Clustering', 'Réduction de Dimensionnalité', 'Analyse de Données'],
    author: 'Geoffroy Streit',
    year: 2024,
    language: 'Français'
  },
  {
    id: 'bases-mathematiques-ia',
    title: 'Les Bases Mathématiques derrière l\'Intelligence Artificielle',
    description: 'Guide complet et accessible pour comprendre les fondements mathématiques de l\'IA : algèbre linéaire, calcul différentiel, probabilités et statistiques.',
    link: '/cours/bases-mathematiques-ia',
    category: 'Fondamentaux',
    level: 'Débutant à Intermédiaire',
    duration: '4h',
    tags: ['Mathématiques', 'Algèbre Linéaire', 'Probabilités', 'Statistiques', 'Calcul'],
    author: 'Geoffroy Streit',
    year: 2024,
    language: 'Français'
  },
  {
    id: 'prompt-engineering',
    title: 'Prompt Engineering : Maîtriser l\'art de la communication avec l\'IA',
    description: 'Apprenez à formuler des instructions efficaces pour maximiser les performances des modèles de langage comme ChatGPT, Claude ou Gemini.',
    link: '/cours/prompt-engineering',
    category: 'Pratique',
    level: 'Débutant',
    duration: '2h',
    tags: ['Prompt Engineering', 'LLM', 'ChatGPT', 'Communication IA'],
    author: 'Geoffroy Streit',
    year: 2024,
    language: 'Français'
  },
  {
    id: 'chain-of-prompts',
    title: 'Chain of Prompts : Maîtriser l\'Art de l\'Enchaînement d\'Invites',
    description: 'Technique avancée pour construire des conversations complexes avec l\'IA en enchaînant des requêtes successives pour des résultats optimaux.',
    link: '/cours/chain-of-prompts',
    category: 'Technique',
    level: 'Intermédiaire',
    duration: '3h',
    tags: ['Chain of Prompts', 'Conversation IA', 'Technique avancée', 'Optimisation'],
    author: 'Geoffroy Streit',
    year: 2024,
    language: 'Français'
  },
  {
    id: 'parametres-llm',
    title: 'Paramètres des LLM : Comprendre et Optimiser les Modèles de Langage',
    description: 'Cartographie complète des paramètres techniques et fonctionnels des LLM. Apprenez à choisir et configurer le bon modèle selon vos besoins.',
    link: '/cours/parametres-llm',
    category: 'Technique',
    level: 'Intermédiaire',
    duration: '4h',
    tags: ['LLM', 'Architecture', 'Hyperparamètres', 'Optimisation'],
    author: 'Geoffroy Streit',
    year: 2024,
    language: 'Français'
  },
  {
    id: 'ia-creativite',
    title: 'IA et Créativité : Révolutionner les processus créatifs',
    description: 'Découvrez comment l\'intelligence artificielle transforme les domaines créatifs : art, musique, écriture, design et innovation.',
    link: '/cours/ia-creativite',
    category: 'Créativité',
    level: 'Intermédiaire',
    duration: '3h',
    tags: ['IA Créative', 'Art génératif', 'Design', 'Innovation'],
    author: 'Geoffroy Streit',
    year: 2024,
    language: 'Français'
  },
  {
    id: 'deep-learning-pratique',
    title: 'Deep Learning Pratique : De la théorie à l\'implémentation',
    description: 'Maîtrisez les réseaux de neurones profonds par la pratique avec des projets concrets et des exemples de code.',
    link: '/cours/deep-learning-pratique',
    category: 'Technique',
    level: 'Avancé',
    duration: '5h',
    tags: ['Deep Learning', 'Réseaux de neurones', 'TensorFlow', 'PyTorch'],
    author: 'Geoffroy Streit',
    year: 2024,
    language: 'Français'
  },
  {
    id: 'nlp-llm-comprehension',
    title: 'Comprendre le Traitement du Langage Naturel (NLP) et les LLM',
    description: 'Plongez dans l\'univers du traitement automatique du langage et comprenez le fonctionnement des grands modèles de langage.',
    link: '/cours/nlp-llm-comprehension',
    category: 'Théorique',
    level: 'Intermédiaire',
    duration: '4h',
    tags: ['NLP', 'LLM', 'Transformer', 'Linguistique computationnelle'],
    author: 'Geoffroy Streit',
    year: 2024,
    language: 'Français'
  },
  {
    id: 'ia-entreprise',
    title: 'IA pour l\'Entreprise : Stratégie et Implémentation',
    description: 'Guide complet pour transformer votre organisation avec l\'intelligence artificielle : de la stratégie au déploiement.',
    link: '/cours/ia-entreprise',
    category: 'Business',
    level: 'Intermédiaire',
    duration: '4h',
    tags: ['IA Entreprise', 'Stratégie', 'Transformation digitale', 'ROI'],
    author: 'Geoffroy Streit',
    year: 2024,
    language: 'Français'
  },
  {
    id: 'ia-ethique',
    title: 'IA Éthique et Responsable : Guide Pratique',
    description: 'Apprenez à développer et déployer des systèmes d\'IA éthiques, transparents et respectueux des droits humains.',
    link: '/cours/ia-ethique',
    category: 'Éthique',
    level: 'Intermédiaire',
    duration: '3h',
    tags: ['IA Éthique', 'Responsabilité', 'Biais', 'Transparence', 'RGPD'],
    author: 'Geoffroy Streit',
    year: 2024,
    language: 'Français'
  }
];

// Export principal - utilisé par les autres composants
export const coursesData = courses;
