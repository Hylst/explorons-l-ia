
import React from 'react';
import { 
  ImagePlus, Music, Code, Video, 
  MessagesSquare, FileText, Volume2, 
  Pencil, Palette, Braces, Sparkles, 
  Building, Users, UserSquare2
} from 'lucide-react';

export interface AppResource {
  title: string;
  url: string;
}

export interface AppExample {
  id: string;
  title: string;
  icon: string;
  iconComponent: React.ElementType;
  description: string;
  detailedDescription?: string[];
  link: string;
  imagePath: string;
  tools: string[];
  examples: string[];
  resources?: AppResource[];
  compatibility?: {
    web: boolean;
    mobile: boolean;
    api: boolean;
    desktop: boolean;
  };
}

export const multimodalExamples: AppExample[] = [
  {
    id: "generation-images",
    title: "Génération d'images",
    description: "Création d'images à partir de descriptions textuelles avec des modèles comme Midjourney, DALL-E ou Stable Diffusion, permettant de matérialiser des concepts visuels simplement en les décrivant.",
    detailedDescription: [
      "Les modèles de génération d'images transforment des descriptions textuelles en images visuellement cohérentes, offrant un nouvel outil créatif pour les designers, artistes et professionnels du marketing.",
      "Ces technologies utilisent des réseaux antagonistes génératifs (GAN) ou des modèles de diffusion entraînés sur des millions d'images pour comprendre la relation entre le langage et les représentations visuelles.",
      "La qualité des images générées dépend fortement de la précision des prompts, de leur richesse en détails techniques et stylistiques, ainsi que de la capacité du modèle à interpréter correctement ces instructions."
    ],
    icon: "ImagePlus",
    iconComponent: ImagePlus,
    link: "#generation-images",
    imagePath: "/pics/image-generation.jpg",
    tools: ["Midjourney", "DALL-E 3", "Stable Diffusion", "Imagen"],
    examples: [
      "Une forêt enchantée au crépuscule, avec des lanternes flottantes et des créatures magiques, style Studio Ghibli, éclairage volumétrique",
      "Portrait d'une femme âgée, style renaissance italienne, éclairage dramatique Rembrandt, détails texturés, palette de couleurs chaudes",
      "Concept art futuriste d'une ville flottante avec des tours bioniques, architecture biomimétique, perspective aérienne, style cinématique"
    ],
    resources: [
      { title: "Documentation DALL-E 3", url: "https://openai.com/dall-e-3" },
      { title: "Guide complet Midjourney", url: "https://docs.midjourney.com/" },
      { title: "Tutoriels Stable Diffusion", url: "https://stability.ai/learn" }
    ],
    compatibility: {
      web: true,
      mobile: true,
      api: true,
      desktop: true
    }
  },
  {
    id: "creation-musicale",
    title: "Création musicale",
    description: "Composition de musique assistée par IA qui permet de générer des mélodies, arrangements et accompagnements à partir de descriptions textuelles ou d'exemples sonores.",
    detailedDescription: [
      "Les outils de création musicale par IA permettent de composer des morceaux complets, des boucles ou des arrangements en spécifiant simplement le genre, l'ambiance et les instruments souhaités.",
      "Ces technologies utilisent des modèles de génération entraînés sur d'immenses corpus musicaux, capables d'identifier et reproduire les structures harmoniques, mélodiques et rythmiques propres à différents styles.",
      "Particulièrement utiles pour les créateurs de contenu, compositeurs et producteurs, ces outils peuvent servir d'inspiration, de base pour des productions professionnelles ou simplement générer des ambiances sonores personnalisées."
    ],
    icon: "Music",
    iconComponent: Music,
    link: "#creation-musicale",
    imagePath: "/pics/music-creation.jpg",
    tools: ["Suno AI", "MusicLM", "Mubert", "Udio", "Harmonai"],
    examples: [
      "Composition électronique ambient avec des sons d'eau, synthés relaxants, progression lente et réverbération profonde",
      "Mélodie joyeuse au piano avec progression d'accords en Do majeur, tempo modéré, inspiration classique romantique",
      "Musique orchestrale épique avec percussions puissantes, cuivres majestueux et choeur, inspiration Hans Zimmer"
    ],
    resources: [
      { title: "Tutoriels Suno AI", url: "https://suno.com/tutorials" },
      { title: "Guide MusicLM de Google", url: "https://blog.google/technology/ai/musiclm-google-ai-test-kitchen/" },
      { title: "Documentation Mubert API", url: "https://mubert.com/api" }
    ],
    compatibility: {
      web: true,
      mobile: true,
      api: true,
      desktop: true
    }
  },
  {
    id: "generation-code",
    title: "Génération de code",
    description: "Assistance à la programmation qui permet de générer, compléter ou optimiser du code source à partir de descriptions en langage naturel des fonctionnalités souhaitées.",
    detailedDescription: [
      "Les assistants de génération de code peuvent transformer des descriptions en langage naturel en code fonctionnel dans divers langages de programmation, accélérant considérablement le développement.",
      "Au-delà de la simple génération, ces outils peuvent expliquer le code existant, suggérer des optimisations, identifier des bugs et même créer des tests automatisés.",
      "Pour des résultats optimaux, les développeurs doivent formuler des requêtes précises, incluant les contraintes techniques, les bibliothèques préférées et les patterns de conception à utiliser."
    ],
    icon: "Code",
    iconComponent: Code,
    link: "#generation-code",
    imagePath: "/pics/code-generation.jpg",
    tools: ["GitHub Copilot", "Amazon CodeWhisperer", "Tabnine", "Replit Ghostwriter"],
    examples: [
      "Créer une fonction React qui valide un formulaire avec vérification d'email (regex), force du mot de passe et confirmation, avec retour visuel des erreurs",
      "Implémenter une API REST en Express.js pour gérer un système d'inventaire avec authentification JWT, validation des données et connexion MongoDB",
      "Développer une animation CSS pour un menu déroulant responsive avec transition fluide, compatible avec tous les navigateurs modernes"
    ],
    resources: [
      { title: "Documentation GitHub Copilot", url: "https://github.com/features/copilot" },
      { title: "Bonnes pratiques CodeWhisperer", url: "https://aws.amazon.com/codewhisperer/" },
      { title: "Tutoriels Replit Ghostwriter", url: "https://replit.com/site/ghostwriter" }
    ],
    compatibility: {
      web: true,
      mobile: false,
      api: true,
      desktop: true
    }
  },
  {
    id: "creation-video",
    title: "Création vidéo",
    description: "Production de contenus vidéo générés ou modifiés par IA, permettant de créer des animations, effets spéciaux ou transformations à partir de texte ou d'images statiques.",
    detailedDescription: [
      "Les outils de création vidéo par IA permettent de générer des séquences animées à partir de descriptions textuelles ou d'images statiques, ouvrant de nouvelles possibilités créatives sans expertise technique.",
      "Ces technologies peuvent animer des personnages virtuels, générer des transformations entre images, créer des effets spéciaux ou même produire des clips entiers à partir de simples instructions.",
      "Particulièrement utiles pour le marketing, l'éducation et le divertissement, ces outils démocratisent la production vidéo tout en réduisant considérablement les coûts et temps de production."
    ],
    icon: "Video",
    iconComponent: Video,
    link: "#creation-video",
    imagePath: "/pics/video-creation.jpg",
    tools: ["Runway Gen-2", "Synthesia", "D-ID", "Pika Labs", "Luma AI"],
    examples: [
      "Vidéo promotionnelle de 30 secondes présentant un smartphone avec animation 3D du produit, transitions fluides et texte explicatif des fonctionnalités",
      "Transformation d'une photo de paysage en vidéo avec mouvement de caméra cinématique, légère animation des éléments naturels et effets atmosphériques",
      "Personnage animé présentant une formation professionnelle avec synchronisation labiale parfaite, expressions faciales naturelles et gestuelle appropriée"
    ],
    resources: [
      { title: "Tutorials Runway ML", url: "https://runwayml.com/tutorials/" },
      { title: "Guide de démarrage Synthesia", url: "https://www.synthesia.io/resources" },
      { title: "Documentation D-ID API", url: "https://www.d-id.com/api-documentation/" }
    ],
    compatibility: {
      web: true,
      mobile: true,
      api: true,
      desktop: true
    }
  },
  {
    id: "conversation-multimodale",
    title: "Conversation multimodale",
    description: "Dialogues avec des systèmes d'IA capables d'intégrer et analyser simultanément du texte, des images et d'autres types de médias dans la même conversation.",
    detailedDescription: [
      "Les systèmes de conversation multimodale représentent une évolution majeure de l'IA conversationnelle, capables d'analyser et répondre à des contenus combinant texte, images, audio et parfois vidéo.",
      "Ces technologies permettent des interactions plus naturelles et complètes, comme demander des explications sur une image, identifier des éléments visuels ou comprendre des concepts présentés graphiquement.",
      "Les applications sont nombreuses : analyse de documents, aide au diagnostic médical, assistance technique avec photos, éducation interactive ou encore services client avancés."
    ],
    icon: "MessagesSquare",
    iconComponent: MessagesSquare,
    link: "#conversation-multimodale",
    imagePath: "/pics/multimodal-conversation.jpg",
    tools: ["GPT-4o", "Claude Opus", "Gemini", "Anthropic Claude 3 Opus"],
    examples: [
      "Analyse détaillée d'un graphique financier avec identification des tendances principales, anomalies statistiques et recommandations basées sur les données visibles",
      "Explication d'un schéma technique complexe avec annotations sur l'image originale pour identifier chaque composant et clarifier son fonctionnement",
      "Identification des plats dans une photo de repas avec estimation des ingrédients, valeurs nutritionnelles approximatives et suggestions de recettes similaires"
    ],
    resources: [
      { title: "Documentation GPT-4 Vision", url: "https://platform.openai.com/docs/guides/vision" },
      { title: "Guide des capacités de Claude Opus", url: "https://docs.anthropic.com/claude/docs" },
      { title: "Tutoriels multimodaux Gemini", url: "https://ai.google.dev/tutorials/rest_quickstart" }
    ],
    compatibility: {
      web: true,
      mobile: true,
      api: true,
      desktop: true
    }
  },
  {
    id: "redaction-assistee",
    title: "Rédaction assistée",
    description: "Outils d'aide à l'écriture qui suggèrent, complètent ou rédigent intégralement des textes adaptés à différents contextes et formats, du courriel professionnel à l'article spécialisé.",
    detailedDescription: [
      "Les assistants de rédaction IA peuvent générer, reformuler ou améliorer des textes dans différents styles et formats, aidant les utilisateurs à produire rapidement du contenu de qualité.",
      "Ces outils vont au-delà de la simple correction grammaticale, en offrant des suggestions stylistiques, des alternatives lexicales et même des structures argumentatives complètes.",
      "Pour obtenir les meilleurs résultats, il est essentiel de bien spécifier l'audience cible, le ton souhaité, le niveau de formalité et les contraintes spécifiques au type de document."
    ],
    icon: "FileText",
    iconComponent: FileText,
    link: "#redaction-assistee",
    imagePath: "/pics/assisted-writing.jpg",
    tools: ["ChatGPT", "Claude", "Notion AI", "Writer.com", "Jasper"],
    examples: [
      "Rédaction d'un article de blog technique sur l'IA explicable pour un public non-technique, style accessible, ton pédagogique, avec analogies concrètes",
      "Email professionnel pour proposer un partenariat stratégique à une entreprise du secteur financier, ton formel mais engageant, structure claire avec proposition de valeur",
      "Résumé concis d'un rapport de recherche scientifique de 20 pages sur les avancées en apprentissage par renforcement, en conservant les points clés et données essentielles"
    ],
    resources: [
      { title: "Guide d'utilisation ChatGPT pour la rédaction", url: "https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering" },
      { title: "Techniques de rédaction avec Notion AI", url: "https://www.notion.so/help/guides/notion-ai-writing" },
      { title: "Centre de ressources Jasper", url: "https://www.jasper.ai/resources" }
    ],
    compatibility: {
      web: true,
      mobile: true,
      api: true,
      desktop: true
    }
  },
  {
    id: "synthese-vocale",
    title: "Synthèse vocale",
    description: "Conversion de texte en parole naturelle avec contrôle sur les voix, intonations et émotions, permettant de créer des narrations, dialogues ou messages personnalisés.",
    detailedDescription: [
      "Les technologies modernes de synthèse vocale permettent de convertir du texte en parole d'une qualité quasi-humaine, avec contrôle précis sur l'intonation, le rythme et les émotions.",
      "Contrairement aux voix robotiques d'autrefois, ces outils peuvent créer des narrations expressives, des dialogues naturels pour différents personnages et même imiter des accents ou styles vocaux spécifiques.",
      "Les applications sont vastes : livres audio, contenu accessible, voix off pour vidéos, assistants virtuels personnalisés, ou systèmes de communication automatisés avec une touche humaine."
    ],
    icon: "Volume2",
    iconComponent: Volume2,
    link: "#synthese-vocale",
    imagePath: "/pics/voice-synthesis.jpg",
    tools: ["ElevenLabs", "Resemble AI", "Play.ht", "Wellsaid Labs", "Murf.ai"],
    examples: [
      "Narration émotionnelle pour un documentaire sur la conservation marine, voix masculine grave, ton inspirant avec variations dynamiques pour souligner les enjeux",
      "Message d'accueil professionnel pour un standard téléphonique d'entreprise, voix féminine claire et chaleureuse, diction parfaite, rythme mesuré",
      "Livre audio avec différentes voix pour chaque personnage, incluant accents distinctifs et variations émotionnelles suivant l'évolution de l'intrigue"
    ],
    resources: [
      { title: "Documentation API ElevenLabs", url: "https://elevenlabs.io/docs" },
      { title: "Guide des voix Resemble AI", url: "https://www.resemble.ai/docs/" },
      { title: "Tutoriels Play.ht", url: "https://play.ht/blog/category/tutorials/" }
    ],
    compatibility: {
      web: true,
      mobile: true,
      api: true,
      desktop: true
    }
  },
  {
    id: "design-graphique",
    title: "Design graphique",
    description: "Création assistée par IA de designs, logos, maquettes et éléments visuels à partir de descriptions textuelles ou de références, avec possibilité d'ajustements itératifs.",
    detailedDescription: [
      "Les outils de design graphique par IA permettent de créer rapidement des éléments visuels professionnels sans compétences en design, en transformant des idées textuelles en créations visuelles.",
      "Ces technologies peuvent générer des logos, des maquettes de sites web, des illustrations, des templates de présentation et divers éléments graphiques adaptés à différentes plateformes.",
      "Particulièrement utiles pour les entrepreneurs, startups et créateurs de contenu, ces outils accélèrent considérablement le processus de design tout en réduisant les coûts."
    ],
    icon: "Palette",
    iconComponent: Palette,
    link: "#design-graphique",
    imagePath: "/pics/generated_illustration.jpg",
    tools: ["Canva AI", "Adobe Firefly", "Galileo AI", "Designs.ai", "Brandmark"],
    examples: [
      "Logo minimaliste pour une startup technologique dans le domaine de la santé, couleurs bleu-vert, symbole abstrait évoquant la croissance et le bien-être",
      "Affiche promotionnelle pour un festival de musique style rétro années 80, typographie néon, palette vaporwave, imagerie synthwave avec éléments géométriques",
      "Modèle de présentation professionnelle avec palette de couleurs corporate, mise en page aérée, visualisations de données élégantes et typographie sobre"
    ],
    resources: [
      { title: "Tutoriels Canva AI", url: "https://www.canva.com/learn/ai-tools/" },
      { title: "Guide d'utilisation Adobe Firefly", url: "https://www.adobe.com/products/firefly.html" },
      { title: "Documentation Designs.ai", url: "https://designs.ai/resources" }
    ],
    compatibility: {
      web: true,
      mobile: true,
      api: false,
      desktop: true
    }
  },
  {
    id: "edition-contenu",
    title: "Édition de contenu",
    description: "Amélioration et correction de textes existants pour optimiser leur clarté, style, ton et impact, avec adaptations possibles pour différents publics ou formats.",
    detailedDescription: [
      "Les outils d'édition de contenu par IA vont bien au-delà de la simple correction grammaticale en transformant des textes bruts en communications efficaces et engageantes.",
      "Ces technologies peuvent ajuster le niveau de langage, simplifier des concepts complexes, renforcer l'impact émotionnel d'un texte, ou adapter le contenu à différentes audiences.",
      "Utiles pour les professionnels de la communication, rédacteurs et universitaires, ces outils accélèrent le processus d'édition tout en améliorant significativement la qualité du contenu."
    ],
    icon: "Pencil",
    iconComponent: Pencil,
    link: "#edition-contenu",
    imagePath: "/pics/content-editing.jpg",
    tools: ["Grammarly", "DeepL Write", "Hemingway App", "ProWritingAid", "QuillBot"],
    examples: [
      "Amélioration stylistique d'un essai académique pour publication, renforcement de la clarté argumentative, élimination des répétitions et optimisation des transitions",
      "Simplification d'un texte technique sur l'intelligence artificielle pour un public non-spécialiste, avec analogies accessibles et définitions des termes complexes",
      "Correction et reformulation d'une traduction automatique brute d'un document juridique, avec adaptation aux conventions linguistiques et terminologiques du domaine"
    ],
    resources: [
      { title: "Guide avancé Grammarly", url: "https://www.grammarly.com/blog" },
      { title: "Techniques d'édition avec DeepL Write", url: "https://www.deepl.com/write" },
      { title: "Ressources ProWritingAid", url: "https://prowritingaid.com/resources" }
    ],
    compatibility: {
      web: true,
      mobile: true,
      api: true,
      desktop: true
    }
  },
  {
    id: "automatisation-taches",
    title: "Automatisation de tâches",
    description: "Intégration d'IA dans les workflows pour automatiser des processus répétitifs, analyser des données et déclencher des actions basées sur des conditions prédéfinies.",
    detailedDescription: [
      "Les plateformes d'automatisation intelligente permettent de créer des workflows complexes où l'IA intervient pour analyser, décider et agir sans intervention humaine constante.",
      "Ces outils peuvent automatiser le traitement des emails, la catégorisation de documents, l'analyse de données, la génération de rapports ou encore l'extraction d'informations structurées.",
      "En combinant l'IA avec des connecteurs vers différentes applications professionnelles, ces plateformes démultiplient la productivité tout en réduisant les erreurs humaines."
    ],
    icon: "Braces",
    iconComponent: Braces,
    link: "#automatisation-taches",
    imagePath: "/pics/task-automation.jpg",
    tools: ["Zapier AI", "Make.com", "n8n", "Bardeen", "IFTTT"],
    examples: [
      "Automatisation du traitement des demandes clients avec analyse de sentiment, extraction des informations clés et classement par priorité avec réponse automatique pour les cas simples",
      "Système de classification automatique des emails entrants par département, urgence et type de demande, avec transfert intelligent et notification personnalisée",
      "Workflow d'approbation de documents avec extraction automatique des termes clés, comparaison avec les standards de l'entreprise et mise en évidence des points d'attention"
    ],
    resources: [
      { title: "Tutoriels Zapier AI", url: "https://zapier.com/blog/ai" },
      { title: "Guide d'automatisation Make.com", url: "https://www.make.com/en/help" },
      { title: "Documentation n8n et IA", url: "https://docs.n8n.io/" }
    ],
    compatibility: {
      web: true,
      mobile: false,
      api: true,
      desktop: true
    }
  },
  {
    id: "marketing-ia",
    title: "Marketing IA",
    description: "Application de l'intelligence artificielle aux stratégies marketing pour personnaliser les contenus, optimiser les campagnes et analyser les comportements des consommateurs.",
    detailedDescription: [
      "Le marketing IA utilise l'intelligence artificielle pour créer et optimiser des campagnes marketing plus efficaces, personnalisées et basées sur des données comportementales précises.",
      "Ces technologies peuvent générer du contenu marketing adapté à différentes audiences, optimiser le timing et le ciblage des communications, et prédire l'efficacité de différentes approches.",
      "En automatisant l'analyse des tendances et le test des messages, ces outils permettent aux marketeurs de déployer des stratégies plus agiles et mieux adaptées aux préférences individuelles."
    ],
    icon: "Building",
    iconComponent: Building,
    link: "#marketing-ia",
    imagePath: "/pics/ai_marketing.jpg",
    tools: ["Copy.ai", "Persado", "MarketMuse", "Phrasee", "Albert"],
    examples: [
      "Génération de slogans accrocheurs pour une campagne de produits éco-responsables, ton inspirant, focus sur l'impact positif et l'engagement communautaire",
      "Création de contenu personnalisé pour email marketing avec tests A/B automatisés, segmentation avancée et optimisation du taux de conversion basée sur l'historique",
      "Optimisation SEO de textes avec suggestions de mots-clés pertinents, restructuration pour améliorer la lisibilité et adaptation aux intentions de recherche identifiées"
    ],
    resources: [
      { title: "Guide marketing Copy.ai", url: "https://www.copy.ai/resources" },
      { title: "Études de cas Persado", url: "https://www.persado.com/resources/" },
      { title: "Documentation MarketMuse", url: "https://support.marketmuse.com/" }
    ],
    compatibility: {
      web: true,
      mobile: true,
      api: true,
      desktop: true
    }
  },
  {
    id: "education-formation",
    title: "Éducation & Formation",
    description: "Utilisation de l'IA pour créer des expériences d'apprentissage personnalisées, des contenus pédagogiques adaptatifs et des outils d'évaluation intelligents.",
    detailedDescription: [
      "Les technologies d'IA éducative transforment l'apprentissage en proposant des parcours personnalisés qui s'adaptent au rythme, aux préférences et aux difficultés spécifiques de chaque apprenant.",
      "Ces outils peuvent créer des exercices ciblés, générer des explications adaptées à différents niveaux de compréhension et fournir des retours détaillés pour aider à progresser efficacement.",
      "Particulièrement utiles dans l'apprentissage des langues, des sciences et des mathématiques, ces systèmes peuvent identifier précisément les lacunes conceptuelles et proposer des interventions ciblées."
    ],
    icon: "Users",
    iconComponent: Users,
    link: "#education-formation",
    imagePath: "/pics/education.jpg",
    tools: ["Khanmigo", "Duolingo AI", "Quizlet", "Pearson AI", "Coursera Coach"],
    examples: [
      "Module d'apprentissage interactif sur la chimie organique avec visualisations 3D des molécules, explications adaptatives et exercices progressifs basés sur la maîtrise des concepts",
      "Exercices personnalisés de mathématiques qui identifient automatiquement les erreurs de raisonnement et proposent des exemples supplémentaires ciblant précisément les difficultés",
      "Simulation de dialogue pour l'apprentissage des langues avec reconnaissance de la prononciation, adaptation au niveau de l'apprenant et scénarios contextuels progressifs"
    ],
    resources: [
      { title: "Guide Khanmigo pour enseignants", url: "https://www.khanacademy.org/khanmigo" },
      { title: "Recherches Duolingo sur l'IA éducative", url: "https://blog.duolingo.com/" },
      { title: "Ressources pédagogiques Quizlet", url: "https://quizlet.com/teachers" }
    ],
    compatibility: {
      web: true,
      mobile: true,
      api: false,
      desktop: true
    }
  },
  {
    id: "avatars-digitaux",
    title: "Avatars digitaux",
    description: "Création de représentations virtuelles interactives capables de simuler des conversations naturelles, des expressions faciales et des comportements humains.",
    detailedDescription: [
      "Les avatars digitaux représentent la convergence de plusieurs technologies d'IA : génération d'images, synthèse vocale, animation faciale et traitement du langage naturel.",
      "Ces représentations virtuelles peuvent interagir en temps réel avec les utilisateurs, afficher des expressions émotionnelles appropriées et personnaliser leur comportement selon le contexte.",
      "Applications importantes dans la formation, le service client, les présentations virtuelles et le divertissement, ces avatars permettent des interactions plus engageantes qu'un simple texte."
    ],
    icon: "UserSquare2",
    iconComponent: UserSquare2,
    link: "#avatars-digitaux",
    imagePath: "/pics/digital_avatars.jpg",
    tools: ["Ready Player Me", "Inworld AI", "Synthesia", "Soul Machines", "Replica Studios"],
    examples: [
      "Avatar réaliste pour présentateur virtuel d'événements professionnels, capable de présenter du contenu technique, répondre aux questions et maintenir l'engagement de l'audience",
      "Personnage animé pour formation médicale avec expressions faciales réalistes, capacité à démontrer des procédures et à répondre à des questions spécifiques au domaine",
      "Assistant virtuel personnalisé pour service client, avec personnalité adaptée à la marque, capacité à reconnaître les émotions du client et à résoudre efficacement les problèmes courants"
    ],
    resources: [
      { title: "Plateforme Ready Player Me", url: "https://readyplayer.me/developers" },
      { title: "Documentation Inworld AI", url: "https://developers.inworld.ai/" },
      { title: "Guide Synthesia pour créateurs", url: "https://www.synthesia.io/resources" }
    ],
    compatibility: {
      web: true,
      mobile: true,
      api: true,
      desktop: true
    }
  }
];
