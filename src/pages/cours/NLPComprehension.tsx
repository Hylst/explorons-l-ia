import React from 'react';
import Hero from '@/components/Hero';
import CourseHeader from '@/components/courses/CourseHeader';
import CourseModule from '@/components/courses/CourseModule';
import CourseConclusion from '@/components/courses/CourseConclusion';
import ZoomOn from '@/components/courses/ZoomOn';
import DidYouKnow from '@/components/courses/DidYouKnow';
import TechnicalTooltip from '@/components/courses/TechnicalTooltip';
import AnalogyBox from '@/components/courses/AnalogyBox';
import ConceptCard from '@/components/courses/nlp/ConceptCard';
import ArchitectureComparison from '@/components/courses/nlp/ArchitectureComparison';
import TransformerVisualizer from '@/components/courses/nlp/TransformerVisualizer';
import InteractiveSection from '@/components/courses/nlp/InteractiveSection';
import PracticalExample from '@/components/courses/nlp/PracticalExample';
import HistoricalComparison from '@/components/courses/nlp/HistoricalComparison';
import LLMStatsShowcase from '@/components/courses/nlp/LLMStatsShowcase';
import FutureApplications from '@/components/courses/nlp/FutureApplications';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MessageSquare, 
  Brain, 
  Layers, 
  Zap, 
  Book, 
  Languages,
  Cpu,
  Network,
  Target,
  FileText,
  Bot,
  Lightbulb,
  Scissors,
  Hash,
  Calculator,
  Eye,
  Shuffle,
  TrendingUp,
  Users,
  Globe,
  Shield,
  AlertTriangle,
  Sparkles,
  Code,
  Database,
  ChartBar,
  Clock,
  Rocket,
  History,
  Compass
} from 'lucide-react';

const NLPComprehension = () => {
  const headerProps = {
    title: "Comprendre le Traitement du Langage Naturel (NLP) et les LLM",
    subtitle: "Du texte brut aux modèles de langage les plus avancés : un voyage au cœur de la compréhension artificielle",
    author: "Geoffroy Streit",
    authorDescription: "Educateur en intelligence artificielle",
    duration: "6-8 heures",
    level: "Intermédiaire à Avancé",
    audience: "Curieux de technologie, développeurs, étudiants",
    tags: ["NLP", "LLM", "Transformers", "Deep Learning", "IA Générative", "2024"]
  };

  // Données enrichies pour les modules avec explications détaillées
  const module1Data = [
    {
      icon: <Languages className="h-5 w-5 text-primary" />,
      title: "Le défi du langage",
      items: [
        "Pourquoi le langage humain est-il si complexe ?",
        "Ambiguïté, contexte et nuances culturelles",
        "Différences entre communication humaine et machine",
        "Histoire des premières tentatives automatiques",
        "Échecs et leçons des systèmes symboliques",
        "L'évolution vers l'approche statistique"
      ],
      expandedExplanations: [
        {
          title: "Pourquoi le langage humain est-il si complexe ?",
          content: "Le langage humain n'est pas qu'un simple système de symboles. Il porte en lui des millénaires d'évolution culturelle et cognitive. Contrairement aux langages de programmation qui sont précis et sans ambiguïté, le langage naturel regorge d'implicites, de références contextuelles et de sous-entendus. Chaque phrase peut avoir plusieurs interprétations selon le contexte, l'intonation, ou même le silence qui l'entoure. Cette richesse qui fait la beauté du langage humain constitue un défi colossal pour les machines."
        },
        {
          title: "Ambiguïté, contexte et nuances culturelles",
          content: "L'ambiguïté est omniprésente dans le langage. Le mot 'avocat' peut désigner un fruit ou un juriste. La phrase 'Il a vu l'homme avec les jumelles' peut signifier que l'homme avait des jumelles ou que la personne utilisait des jumelles pour le voir. Les nuances culturelles ajoutent une complexité supplémentaire : l'ironie, le sarcasme, les références culturelles partagées, les expressions idiomatiques qui n'ont aucun sens littéral. Ces subtilités nécessitent une connaissance du monde et des conventions sociales."
        },
        {
          title: "Différences entre communication humaine et machine",
          content: "Les humains communiquent avec tout leur être : gestes, expressions faciales, ton de voix, contexte situationnel. Nous inférons constamment les intentions, comblons les blancs, et adaptons notre interprétation en temps réel. Nous utilisons notre expérience du monde, nos émotions, et notre théorie de l'esprit pour comprendre ce que l'autre veut vraiment dire. Les machines, traditionnellement, ont été limitées à des règles explicites et des correspondances directes, incapables de cette flexibilité naturelle."
        },
        {
          title: "Histoire des premières tentatives automatiques",
          content: "Dès les années 1950, les pionniers de l'informatique rêvaient de machines capables de comprendre et traduire les langues. Les premiers systèmes étaient basés sur des dictionnaires bilingues et des règles grammaticales simples. L'optimisme était énorme : on pensait résoudre la traduction automatique en quelques années. La démonstration Georgetown-IBM de 1954 traduisait 60 phrases du russe vers l'anglais, créant un enthousiasme débordant et des prédictions optimistes qui se révéleraient prématurées."
        },
        {
          title: "Échecs et leçons des systèmes symboliques",
          content: "Les approches symboliques des années 60-80 tentaient de codifier toutes les règles du langage. Résultat : des systèmes fragiles, incapables de gérer les exceptions, les néologismes, ou les usages créatifs. Chaque nouvelle règle créait de nouveaux cas particuliers. Cette approche, bien que logique, s'est heurtée à la nature fondamentalement statistique et évolutive du langage. Ces échecs ont enseigné une leçon cruciale : le langage ne peut pas être entièrement capturé par des règles explicites."
        },
        {
          title: "L'évolution vers l'approche statistique",
          content: "Les années 90 marquent un tournant : plutôt que d'essayer de programmer toutes les règles, pourquoi ne pas laisser les machines apprendre des patterns dans d'énormes corpus de texte ? Cette révolution statistique, puis neuronale, a ouvert la voie aux succès actuels du NLP. Les machines ont commencé à 'sentir' le langage plutôt qu'à le disséquer. Cette approche empirique, basée sur les données, s'est révélée beaucoup plus robuste et adaptable."
        }
      ]
    },
    {
      icon: <History className="h-5 w-5 text-primary" />,
      title: "Approches historiques",
      items: [
        "Systèmes à base de règles grammaticales",
        "Dictionnaires et ontologies",
        "Analyse syntaxique et sémantique",
        "Limitations des approches symboliques",
        "Transition vers l'apprentissage automatique",
        "Naissance du NLP moderne"
      ],
      expandedExplanations: [
        {
          title: "Systèmes à base de règles grammaticales",
          content: "Les premiers systèmes NLP tentaient de reproduire l'analyse grammaticale humaine. Ils utilisaient des grammaires formelles, des arbres syntaxiques, et des règles de transformation. Chaque langue nécessitait des années de travail linguistique pour établir toutes les règles. Ces systèmes étaient précis sur les cas qu'ils connaissaient, mais cassants face à l'inattendu. Un système pourrait parfaitement analyser 'Le chat mange la souris' mais échouer sur 'Le chat, affamé, dévore goulûment sa proie'."
        },
        {
          title: "Dictionnaires et ontologies",
          content: "L'idée était séduisante : créer des dictionnaires exhaustifs reliant chaque mot à son sens, ses synonymes, ses relations sémantiques. Des projets comme WordNet ont tenté de cartographier tout le savoir humain en réseaux de concepts. Mais le sens d'un mot dépend tellement de son contexte que ces approches restaient limitées. Le mot 'banque' dans 'banque de données' n'a rien à voir avec 'banque financière', et encore moins avec 'banque de sable'."
        },
        {
          title: "Analyse syntaxique et sémantique",
          content: "Ces systèmes décomposaient méticuleusement chaque phrase : identification du sujet, verbe, complément, puis interprétation du sens global. L'approche était logique mais butait sur la complexité réelle du langage. Une phrase simple comme 'Time flies like an arrow' peut avoir plusieurs analyses syntaxiques valides : est-ce que le temps vole comme une flèche, ou bien les mouches temporelles aiment les flèches ? Cette ambiguïté structurelle rendait l'analyse automatique extrêmement difficile."
        },
        {
          title: "Limitations des approches symboliques",
          content: "Le principal problème était la rigidité. Ces systèmes ne savaient pas gérer l'ambiguïté, les fautes de frappe, les néologismes, ou les usages créatifs. Ils demandaient des années de développement pour chaque langue et domaine. Pire, ils ne s'amélioraient pas avec l'usage, contrairement aux humains. Face à un texte SMS avec des abréviations ou des emojis, ces systèmes étaient complètement perdus. Ils ne pouvaient pas non plus gérer l'évolution naturelle de la langue."
        },
        {
          title: "Transition vers l'apprentissage automatique",
          content: "Les années 90 voient l'émergence d'approches statistiques. Au lieu de programmer des règles, on laisse les algorithmes découvrir des patterns dans de grandes quantités de texte. Les modèles de n-grammes, puis les méthodes d'apprentissage supervisé, commencent à montrer des résultats prometteurs sur des tâches spécifiques. Cette approche était plus tolérante aux variations et pouvait s'améliorer automatiquement avec plus de données."
        },
        {
          title: "Naissance du NLP moderne",
          content: "L'avènement d'internet fournit soudain d'énormes corpus de texte. Les algorithmes d'apprentissage automatique deviennent plus sophistiqués. Les réseaux de neurones font leur retour après des décennies d'hibernation. Cette convergence de données massives, d'algorithmes puissants et de capacité de calcul accrue donne naissance au NLP moderne que nous connaissons. Le machine learning remplace progressivement la programmation explicite de règles."
        }
      ]
    },
    {
      icon: <Compass className="h-5 w-5 text-primary" />,
      title: "Objectifs modernes",
      items: [
        "Compréhension du sens et de l'intention",
        "Génération de texte cohérent et créatif",
        "Traduction fidèle et nuancée",
        "Interaction naturelle homme-machine",
        "Analyse de sentiment et d'émotion",
        "Résumé et synthèse automatiques"
      ],
      expandedExplanations: [
        {
          title: "Compréhension du sens et de l'intention",
          content: "L'objectif ultime n'est plus seulement de reconnaître des mots, mais de saisir ce que la personne veut vraiment dire. Cela implique de comprendre les intentions cachées, les émotions sous-jacentes, et même ce qui n'est pas dit explicitement. Les modèles modernes commencent à développer une forme de 'théorie de l'esprit' artificielle, capable de comprendre que 'Il fait froid ici' peut être une demande implicite de fermer la fenêtre."
        },
        {
          title: "Génération de texte cohérent et créatif",
          content: "Aller au-delà de la simple restitution d'informations pour créer du contenu original, cohérent et adapté au contexte. Cela inclut l'écriture créative, la génération de code, la création de contenus marketing personnalisés, ou même la composition poétique. L'IA devient un partenaire créatif capable de maintenir un style, un ton, et une cohérence narrative sur de longs textes."
        },
        {
          title: "Traduction fidèle et nuancée",
          content: "Dépasser la traduction mot-à-mot pour capturer les nuances culturelles, les jeux de mots, les références implicites. Une bonne traduction moderne préserve non seulement le sens, mais aussi le ton, le style et l'intention de l'auteur original. C'est un défi qui touche à l'essence même de la communication interculturelle, nécessitant une compréhension profonde des deux cultures impliquées."
        },
        {
          title: "Interaction naturelle homme-machine",
          content: "Créer des interfaces où parler à une machine se rapproche de parler à un humain compréhensif. Cela implique de gérer les interruptions, les changements de sujet, les références à des conversations précédentes, et même les silences significatifs. L'objectif est une fluidité conversationnelle naturelle où l'utilisateur oublie qu'il parle à une machine."
        },
        {
          title: "Analyse de sentiment et d'émotion",
          content: "Identifier non seulement ce qui est dit, mais comment c'est dit. Détecter la frustration dans un email de service client, l'enthousiasme dans un avis produit, ou la nostalgie dans un post sur les réseaux sociaux. Cette capacité ouvre des applications en psychologie, marketing, et relations humaines. Elle permet aux machines de répondre de manière empathique et appropriée au contexte émotionnel."
        },
        {
          title: "Résumé et synthèse automatiques",
          content: "Face à l'explosion informationnelle, les systèmes doivent savoir extraire l'essentiel de documents volumineux, synthétiser des points de vue multiples, et présenter l'information de manière structurée et accessible. C'est devenu crucial pour la gestion des connaissances et la prise de décision. L'objectif est de créer des résumés qui capturent non seulement les faits, mais aussi les nuances et les implications."
        }
      ]
    }
  ];

  // Données pour les exemples de défis et solutions
  const challengesData = {
    défis: [
      "Ambiguïté lexicale et syntaxique",
      "Références contextuelles complexes", 
      "Expressions idiomatiques culturelles",
      "Nuances et sous-entendus",
      "Évolution constante du langage"
    ],
    solutions: [
      "Approches statistiques sur corpus massifs",
      "Modèles neuronaux adaptatifs",
      "Mécanismes d'attention contextuelle", 
      "Apprentissage sur données diversifiées",
      "Architectures Transformer révolutionnaires"
    ]
  };

  // Exemples pratiques pour le pipeline NLP
  const nlpProcessSteps = [
    {
      title: "Tokenisation",
      description: "Découpage du texte en unités traitables",
      input: "Bonjour le monde! Comment allez-vous?",
      output: "['Bonjour', 'le', 'monde', '!', 'Comment', 'allez', '-', 'vous', '?']",
      transformation: "Segmentation intelligente basée sur les espaces, la ponctuation et les règles linguistiques spécifiques à chaque langue",
      icon: <Scissors className="h-4 w-4" />,
      difficulty: "facile" as const
    },
    {
      title: "Normalisation",
      description: "Standardisation et nettoyage du texte",
      input: "['Bonjour', 'le', 'monde', '!', 'Comment', 'allez-vous', '?']",
      output: "['bonjour', 'le', 'monde', 'comment', 'allez-vous']",
      transformation: "Conversion en minuscules, suppression de la ponctuation, normalisation Unicode, gestion des caractères spéciaux",
      icon: <Hash className="h-4 w-4" />,
      difficulty: "facile" as const
    },
    {
      title: "Vectorisation",
      description: "Conversion en représentations numériques",
      input: "['bonjour', 'le', 'monde', 'comment', 'allez-vous']",
      output: "[[0.2, -0.1, 0.8, ...], [0.1, 0.5, -0.3, ...], ...]",
      transformation: "Mapping vers des embeddings pré-entraînés qui capturent la sémantique des mots dans un espace vectoriel dense",
      icon: <Calculator className="h-4 w-4" />,
      difficulty: "moyen" as const
    },
    {
      title: "Traitement contextuel",
      description: "Application du modèle NLP avancé",
      input: "Séquence de vecteurs d'embeddings",
      output: "Représentations contextuelles enrichies",
      transformation: "Réseau de neurones Transformer qui analyse les relations entre tous les mots simultanément",
      icon: <Brain className="h-4 w-4" />,
      difficulty: "difficile" as const
    }
  ];

  // Concepts clés enrichis
  const conceptsData = [
    {
      title: "Tokenisation intelligente",
      description: "Processus sophistiqué de découpage du texte en unités sémantiques optimales pour le traitement automatique.",
      example: "\"L'intelligence artificielle\" → [\"L'\", \"intelligence\", \"art\", \"ificielle\"] (sous-mots)",
      difficulty: "Débutant" as const,
      icon: <Scissors className="h-5 w-5" />,
      analogy: "Comme découper une recette de cuisine en ingrédients individuels, mais en gardant ensemble ceux qui vont naturellement ensemble (comme 'pomme de terre').",
      technicalDetails: [
        "Gestion de la ponctuation et des espaces complexes",
        "Traitement des contractions et élisions (n'est, qu'il)",
        "Support multilingue et caractères Unicode variés",
        "Algorithmes BPE et SentencePiece pour les sous-mots",
        "Optimisation pour le vocabulaire spécifique du modèle"
      ],
      applications: ["Preprocessing", "Analyse syntaxique", "Recherche sémantique", "Traduction"]
    },
    {
      title: "Embeddings contextuels",
      description: "Représentations vectorielles dynamiques qui capturent le sens des mots selon leur contexte d'utilisation.",
      example: "'banque' → [0.1, 0.8, -0.3] (rivière) vs [0.7, -0.2, 0.5] (finance)",
      difficulty: "Intermédiaire" as const,
      icon: <Network className="h-5 w-5" />,
      analogy: "Comme un caméléon qui change de couleur selon son environnement : le même mot prend des 'couleurs' différentes selon le contexte.",
      technicalDetails: [
        "Dimensions typiques : 512-4096 pour les modèles modernes",
        "Apprentissage par co-occurrence contextuelle",
        "Propriétés d'analogie sémantique ('roi' - 'homme' + 'femme' ≈ 'reine')",
        "Mise à jour dynamique selon le contexte de la phrase",
        "Capture des relations syntaxiques et sémantiques complexes"
      ],
      applications: ["Similarité sémantique", "Analogies", "Classification", "Clustering", "Recherche"]
    },
    {
      title: "Mécanisme d'attention",
      description: "Innovation révolutionnaire permettant au modèle de se concentrer sur les parties pertinentes de l'entrée lors du traitement.",
      example: "Dans 'Le chat noir mange sa nourriture', 'mange' fait attention à 'chat' et 'nourriture'",
      difficulty: "Avancé" as const,
      icon: <Eye className="h-5 w-5" />,
      analogy: "Comme votre œil qui balaie automatiquement une photo pour se concentrer sur les éléments importants selon ce que vous cherchez.",
      technicalDetails: [
        "Calcul des scores d'attention par produit scalaire",
        "Softmax pour la normalisation des poids",
        "Multi-head attention pour capturer différents types de relations",
        "Self-attention vs cross-attention pour différents usages",
        "Attention causale pour la génération séquentielle"
      ],
      applications: ["Traduction automatique", "Résumé automatique", "Question-réponse", "Génération de texte"]
    },
    {
      title: "Architecture Transformer",
      description: "Architecture révolutionnaire basée uniquement sur l'attention, abandonnant la récurrence pour un traitement parallèle.",
      example: "Encodeur-Décodeur avec 12-96 couches d'attention multi-têtes",
      difficulty: "Avancé" as const,
      icon: <Layers className="h-5 w-5" />,
      analogy: "Comme un orchestre où chaque musicien écoute simultanément tous les autres pour jouer en harmonie parfaite.",
      technicalDetails: [
        "Architecture encodeur-décodeur modulaire",
        "Couches de self-attention et feed-forward",
        "Connexions résiduelles et normalisation",
        "Encodage positionnel pour l'ordre des mots",
        "Parallélisation massive du traitement"
      ],
      applications: ["LLM", "Traduction", "Génération", "Compréhension", "Multimodal"]
    }
  ];

  const didYouKnowItems = [
    {
      title: "Ambiguïté linguistique record",
      content: "La phrase anglaise 'Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo' est grammaticalement correcte ! Elle signifie que les bisons de Buffalo (ville) que d'autres bisons de Buffalo intimident, intimident eux-mêmes d'autres bisons de Buffalo. Cette phrase illustre parfaitement pourquoi le NLP est si complexe."
    },
    {
      title: "Vocabulaire gigantesque de GPT-4",
      content: "GPT-4 utilise un vocabulaire d'environ 100,000 tokens, permettant de représenter efficacement la plupart des langues du monde. Chaque token peut représenter un mot entier, une partie de mot, ou même des caractères spéciaux. Ce vocabulaire a été optimisé pour équilibrer efficacité et couverture linguistique."
    },
    {
      title: "Révolution Transformer",
      content: "L'architecture Transformer a révolutionné le NLP en 2017 avec un seul article : 'Attention is All You Need'. Aujourd'hui, pratiquement tous les grands modèles de langage (GPT, BERT, T5, PaLM, Claude) utilisent cette architecture ou ses variantes. C'est la plus grande révolution architecturale depuis les réseaux de neurones."
    },
    {
      title: "Échelle astronomique des LLM",
      content: "GPT-3 a été entraîné sur environ 45 TB de texte, équivalent à 45 millions de livres ou 22 millions d'articles Wikipédia. L'entraînement a nécessité des milliers de GPU pendant plusieurs semaines, coûtant plusieurs millions de dollars. GPT-4 aurait coûté plus de 100 millions de dollars à entraîner."
    },
    {
      title: "Capacités émergentes mystérieuses",
      content: "Les grands modèles montrent des 'capacités émergentes' : des aptitudes qui apparaissent soudainement au-delà d'une certaine taille, comme le raisonnement mathématique ou la programmation, sans avoir été explicitement entraînés pour ces tâches. C'est l'un des phénomènes les plus fascinants et mystérieux de l'IA moderne."
    },
    {
      title: "Polyglotte numérique",
      content: "Les LLM modernes peuvent traduire entre plus de 100 langues, même pour des paires de langues qu'ils n'ont jamais vues ensemble pendant l'entraînement, grâce à leur représentation interne commune des concepts. Ils développent spontanément une sorte de 'langue universelle' interne."
    }
  ];

  return (
    <>
      <Hero
        title={headerProps.title}
        subtitle={headerProps.subtitle}
      />

      <section className="section-container">
        <CourseHeader {...headerProps} />

        {/* Introduction enrichie et modernisée */}
        <CourseModule
          title="Introduction : L'odyssée de la compréhension artificielle"
          description="Embarquez dans un voyage fascinant à travers l'évolution du traitement du langage naturel"
        >
          <Card className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950/20 dark:via-background dark:to-purple-950/20 border-primary/20">
            <CardContent className="pt-6">
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">🚀 Bienvenue dans l'univers du NLP</h3>
                  <p className="text-lg leading-relaxed text-foreground max-w-4xl mx-auto">
                    Imaginez un monde où vous pourriez discuter avec votre ordinateur comme avec votre meilleur ami, 
                    lui demander d'analyser des milliers de documents en quelques secondes, de traduire 
                    instantanément n'importe quel texte, ou encore de créer des histoires captivantes sur commande. 
                    <strong className="text-primary"> Ce monde n'est plus de la science-fiction : c'est notre réalité d'aujourd'hui</strong>, 
                    rendue possible par les avancées spectaculaires du traitement du langage naturel.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 border-red-200 dark:border-red-800">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-red-900 dark:text-red-100">
                        <Brain className="h-5 w-5" />
                        Le défi titanesque
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-red-800 dark:text-red-200">
                        Le langage humain est l'une des capacités les plus complexes de notre espèce. 
                        Nous jonglons naturellement avec l'ambiguïté, les métaphores, l'ironie, 
                        les références culturelles... Enseigner cette maîtrise à une machine représente 
                        l'un des défis les plus fascinants de l'intelligence artificielle.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30 border-green-200 dark:border-green-800">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-green-900 dark:text-green-100">
                        <Rocket className="h-5 w-5" />
                        L'évolution fulgurante
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-green-800 dark:text-green-200">
                        En seulement quelques décennies, nous sommes passés de simples correcteurs 
                        orthographiques à des IA capables de converser, créer, analyser et comprendre 
                        le langage avec une sophistication qui rivalise parfois avec les humains.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <AnalogyBox 
                  title="Le langage : notre superpouvoir évolutif 🧬"
                  content="Si les humains dominent la planète, c'est en grande partie grâce au langage. Cette capacité unique nous permet de transmettre des idées complexes, de collaborer à grande échelle, et d'accumuler les connaissances de génération en génération. Reproduire artificiellement cette capacité, c'est toucher à l'essence même de l'intelligence humaine."
                  variant="tip"
                />

                <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 dark:border-purple-800">
                  <CardContent className="pt-6">
                    <h4 className="font-medium flex items-center gap-2 mb-4 text-purple-900 dark:text-purple-100">
                      <Lightbulb className="h-5 w-5" />
                      Votre parcours d'apprentissage
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                      <div>
                        <h5 className="font-medium mb-3 text-purple-900 dark:text-purple-100">🎯 Ce que vous découvrirez :</h5>
                        <ul className="space-y-2 text-purple-800 dark:text-purple-200">
                          <li className="flex items-start gap-2">
                            <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                            Comment une machine "lit" et "comprend" un texte
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                            Les étapes de transformation du langage en nombres
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                            L'évolution des correcteurs aux IA conversationnelles
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                            Les secrets des modèles comme ChatGPT et Claude
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-3 text-purple-900 dark:text-purple-100">🚀 Compétences acquises :</h5>
                        <ul className="space-y-2 text-purple-800 dark:text-purple-200">
                          <li className="flex items-start gap-2">
                            <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                            Comprendre les enjeux du NLP moderne
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                            Maîtriser les concepts clés (tokens, embeddings, attention)
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                            Saisir le fonctionnement des Transformers
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                            Appréhender les capacités et limites des LLM
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </CourseModule>

        {/* Module 1 avec sections interactives */}
        <CourseModule
          title="Module 1 : Comprendre le défi de la compréhension automatique"
          description="Plongez dans la complexité fascinante du langage humain et découvrez pourquoi il est si difficile à automatiser"
        >
          <div className="space-y-8">
            {module1Data.map((module, index) => (
              <InteractiveSection 
                key={index} 
                {...module} 
                color={index === 0 ? 'blue' : index === 1 ? 'green' : 'purple'}
              />
            ))}
          </div>
        </CourseModule>

        {/* Comparaison historique enrichie */}
        <div className="my-12">
          <HistoricalComparison />
        </div>

        <ZoomOn title="L'exemple révélateur de la traduction automatique">
          <div className="space-y-6">
            <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-200 dark:border-blue-800">
              <CardContent className="pt-6">
                <p className="text-blue-900 dark:text-blue-100 mb-4">
                  En 1954, lors de la première démonstration publique de traduction automatique, 
                  IBM traduit avec fierté 60 phrases du russe vers l'anglais. Les chercheurs prédisent 
                  alors que le problème sera résolu "dans trois à cinq ans au maximum"...
                </p>
                
                <div className="bg-red-100 dark:bg-red-950/30 p-4 rounded-lg border-l-4 border-red-400">
                  <h5 className="font-medium text-red-900 dark:text-red-100 mb-2">💥 Exemple d'échec historique :</h5>
                  <div className="space-y-2 text-sm">
                    <p className="text-red-800 dark:text-red-200">
                      <strong>Phrase originale (anglais) :</strong> "The spirit is willing, but the flesh is weak."
                    </p>
                    <p className="text-red-800 dark:text-red-200">
                      <strong>Traduction en russe puis retour en anglais :</strong> "The vodka is good, but the meat is rotten."
                    </p>
                  </div>
                </div>

                <p className="text-blue-900 dark:text-blue-100 mt-4">
                  Soixante-dix ans plus tard, nous avons DeepL et Google Translate qui traduisent 
                  instantanément dans plus de 100 langues avec une qualité remarquable. Mais le chemin 
                  a été semé d'embûches qui nous ont appris énormément sur la nature du langage.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <InteractiveSection
                title="Défis identifiés"
                icon={<AlertTriangle className="h-5 w-5" />}
                items={challengesData.défis}
                color="orange"
              />
              <InteractiveSection
                title="Solutions développées"
                icon={<Lightbulb className="h-5 w-5" />}
                items={challengesData.solutions}
                color="green"
              />
            </div>
          </div>
        </ZoomOn>

        {/* Pipeline de traitement avec exemples pratiques */}
        <div className="my-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Pipeline de traitement NLP moderne</h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Découvrez étape par étape comment un texte brut devient compréhensible pour une machine
            </p>
          </div>
          <div className="grid gap-6">
            {nlpProcessSteps.map((step, index) => (
              <PracticalExample key={index} {...step} />
            ))}
          </div>
        </div>

        {/* Module 2 : Concepts fondamentaux */}
        <CourseModule
          title="Module 2 : Les fondamentaux techniques du NLP"
          description="Maîtrisez les concepts essentiels qui transforment le texte en données exploitables"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {conceptsData.map((concept, index) => (
              <ConceptCard key={index} {...concept} />
            ))}
          </div>
        </CourseModule>

        <DidYouKnow items={didYouKnowItems.slice(0, 3)} />

        {/* Module 3 : Révolution Transformer */}
        <CourseModule
          title="Module 3 : La révolution Transformer"
          description="Explorez l'architecture qui a transformé le NLP et donné naissance aux LLM modernes"
        >
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  "Attention Is All You Need" : L'article qui a tout changé
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-lg text-foreground">
                    Le 12 juin 2017, une équipe de Google publie un article de 11 pages qui va 
                    révolutionner l'intelligence artificielle. Le titre, provocateur, annonce 
                    que l'attention est tout ce dont on a besoin. Cette déclaration audacieuse 
                    s'avérera prophétique.
                  </p>
                  
                  <AnalogyBox 
                    title="L'attention : comme votre cerveau lit une phrase"
                    content="Quand vous lisez 'Le chat que j'ai vu hier dormait paisiblement', votre cerveau ne traite pas chaque mot isolément. Il fait automatiquement des liens : 'dormait' se rapporte à 'chat', 'hier' modifie 'vu', etc. Le mécanisme d'attention reproduit exactement cette capacité naturelle."
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-red-50 dark:bg-red-950/20 p-4 rounded-lg">
                      <h5 className="font-medium text-red-900 dark:text-red-100 mb-3">Avant les Transformers (RNN/LSTM)</h5>
                      <ul className="text-red-800 dark:text-red-200 space-y-2 text-sm">
                        <li>• <strong>Traitement séquentiel</strong> : mot par mot, lentement</li>
                        <li>• <strong>Mémoire limitée</strong> : oubli des éléments distants</li>
                        <li>• <strong>Pas de parallélisation</strong> : impossible d'accélérer</li>
                        <li>• <strong>Gradient vanishing</strong> : difficultés d'apprentissage</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg">
                      <h5 className="font-medium text-green-900 dark:text-green-100 mb-3">Avec les Transformers</h5>
                      <ul className="text-green-800 dark:text-green-200 space-y-2 text-sm">
                        <li>• <strong>Traitement parallèle</strong> : tous les mots simultanément</li>
                        <li>• <strong>Attention globale</strong> : chaque mot "voit" tous les autres</li>
                        <li>• <strong>Scalabilité</strong> : plus de données = meilleures performances</li>
                        <li>• <strong>Transfert learning</strong> : réutilisation sur d'autres tâches</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Visualisateur de Transformer */}
            <TransformerVisualizer />
          </div>
        </CourseModule>

        <div className="my-12">
          <ArchitectureComparison />
        </div>

        {/* Module 4 : LLM avec showcase statistiques */}
        <CourseModule
          title="Module 4 : L'ère des Large Language Models (LLM)"
          description="Découvrez comment l'échelle a révélé des capacités émergentes extraordinaires"
        >
          <LLMStatsShowcase />
        </CourseModule>

        <DidYouKnow items={didYouKnowItems.slice(3)} />

        {/* Module 5 : Applications futures */}
        <CourseModule
          title="Module 5 : Applications révolutionnaires et horizon futur"
          description="Explorez l'impact transformateur du NLP sur notre société et ses développements à venir"
        >
          <FutureApplications />
        </CourseModule>

        {/* Conclusion enrichie */}
        <CourseConclusion
          title="Conclusion : Vous maîtrisez maintenant les fondements du NLP moderne"
          description="Récapitulatif de votre parcours et ouverture vers l'avenir"
          learningPoints={[
            "Comprendre les défis fondamentaux du traitement du langage naturel",
            "Maîtriser les concepts clés : tokenisation, embeddings, attention, Transformers",
            "Saisir l'importance révolutionnaire de l'architecture Transformer",
            "Appréhender le fonctionnement et les capacités émergentes des LLM",
            "Identifier les applications concrètes et les enjeux sociétaux",
            "Connaître les horizons futurs et les défis à relever"
          ]}
          nextSteps={[
            "Approfondissez avec les techniques de prompt engineering avancé",
            "Explorez le fine-tuning de modèles pour des tâches spécifiques",
            "Découvrez les modèles multimodaux (GPT-4V, DALL-E, etc.)",
            "Initiez-vous au développement d'applications NLP concrètes",
            "Participez aux communautés de recherche et open source",
            "Suivez les dernières publications scientifiques du domaine"
          ]}
        />
      </section>
    </>
  );
};

export default NLPComprehension;
