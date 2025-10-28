import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BookOpen, Search, BookMarked } from 'lucide-react';

interface GlossaryTerm {
  term: string;
  definition: string;
  category: 'general' | 'technical' | 'ethical' | 'memory' | 'advanced';
}

const aiTerms: GlossaryTerm[] = [
  // GENERAL TERMS
  {
    term: "Intelligence Artificielle",
    definition: "Ensemble de technologies permettant à des machines de simuler des fonctions cognitives humaines comme l'apprentissage, la résolution de problèmes et la prise de décision.",
    category: "general"
  },
  {
    term: "Machine Learning",
    definition: "Branche de l'IA qui permet aux systèmes d'apprendre et de s'améliorer à partir de l'expérience sans être explicitement programmés.",
    category: "general"
  },
  {
    term: "IA étroite (ou faible)",
    definition: "IA conçue et entraînée pour une tâche spécifique, comme la reconnaissance d'images ou la traduction automatique.",
    category: "general"
  },
  {
    term: "IA générale (ou forte)",
    definition: "IA hypothétique possédant des capacités cognitives comparables à celles des humains, capable de résoudre n'importe quel problème intellectuel.",
    category: "general"
  },
  {
    term: "Agents intelligents",
    definition: "Entités autonomes qui perçoivent leur environnement via des capteurs, interprètent les données et agissent en conséquence pour atteindre des objectifs spécifiques.",
    category: "general"
  },
  {
    term: "Singularité technologique",
    definition: "Point hypothétique où l'IA dépasserait l'intelligence humaine, entraînant des changements imprévisibles dans la civilisation et l'évolution technologique.",
    category: "general"
  },
  {
    term: "IA multimodale",
    definition: "Système capable de traiter et d'analyser simultanément des informations provenant de plusieurs modalités (texte, image, son, vidéo) pour une compréhension plus complète.",
    category: "general"
  },
  {
    term: "Interface cerveau-machine",
    definition: "Technologie permettant une communication directe entre le cerveau et un dispositif externe, souvent assistée par des algorithmes d'IA pour interpréter les signaux neurologiques.",
    category: "general"
  },
  {
    term: "Effet de vallée dérangeante",
    definition: "Phénomène où un robot ou une IA présentant une ressemblance presque parfaite mais pas tout à fait avec un humain provoque un sentiment de malaise ou de rejet.",
    category: "general"
  },
  {
    term: "Système expert",
    definition: "Système informatique qui émule la capacité de prise de décision d'un expert humain dans un domaine spécifique, en utilisant une base de connaissances et des règles d'inférence.",
    category: "general"
  },
  
  // TECHNICAL TERMS
  {
    term: "Deep Learning",
    definition: "Sous-ensemble du machine learning basé sur des réseaux de neurones artificiels avec plusieurs couches (réseaux profonds) pour modéliser des abstractions de haut niveau.",
    category: "technical"
  },
  {
    term: "Réseau de neurones",
    definition: "Modèle de calcul inspiré du fonctionnement des neurones biologiques, constitué de nœuds interconnectés organisés en couches qui transmettent et traitent des signaux.",
    category: "technical"
  },
  {
    term: "NLP (Natural Language Processing)",
    definition: "Domaine de l'IA qui se concentre sur l'interaction entre les ordinateurs et le langage humain, permettant aux machines de comprendre, interpréter et générer du texte.",
    category: "technical"
  },
  {
    term: "Apprentissage supervisé",
    definition: "Technique d'apprentissage où l'algorithme est entraîné sur des données étiquetées, avec des entrées et sorties connues.",
    category: "technical"
  },
  {
    term: "Apprentissage non supervisé",
    definition: "Technique d'apprentissage où l'algorithme trouve des structures ou des motifs dans des données non étiquetées.",
    category: "technical"
  },
  {
    term: "Apprentissage par renforcement",
    definition: "Technique d'apprentissage où un agent apprend à prendre des décisions en effectuant des actions dans un environnement pour maximiser une récompense.",
    category: "technical"
  },
  {
    term: "IA générative",
    definition: "Systèmes d'IA capables de créer du contenu original comme du texte, des images, de la musique ou de la vidéo à partir de données d'entraînement.",
    category: "technical"
  },
  {
    term: "Data mining",
    definition: "Processus d'extraction de connaissances et de motifs à partir de grandes quantités de données.",
    category: "technical"
  },
  {
    term: "API (Application Programming Interface)",
    definition: "Interface permettant à différents logiciels de communiquer entre eux, souvent utilisée pour accéder à des services d'IA.",
    category: "technical"
  },
  {
    term: "Computer vision",
    definition: "Domaine de l'IA qui permet aux ordinateurs de voir, identifier et traiter des images comme le font les humains.",
    category: "technical"
  },
  {
    term: "Transformer",
    definition: "Architecture de réseau neuronal qui utilise des mécanismes d'attention pour traiter les séquences de données, permettant de capturer les dépendances à long terme dans les textes.",
    category: "technical"
  },
  {
    term: "Attention (mécanisme d')",
    definition: "Technique utilisée dans les réseaux de neurones qui permet au modèle de se concentrer sur différentes parties des données d'entrée lors du traitement.",
    category: "technical"
  },
  {
    term: "Embeddings",
    definition: "Représentations vectorielles de mots, phrases ou autres entités qui capturent leur signification sémantique dans un espace multidimensionnel.",
    category: "technical"
  },
  {
    term: "Transfer learning",
    definition: "Technique qui permet de réutiliser un modèle préentraîné sur une tâche pour améliorer l'apprentissage sur une tâche différente mais connexe.",
    category: "technical"
  },
  {
    term: "Fine-tuning",
    definition: "Processus d'ajustement d'un modèle préentraîné sur des données spécifiques à une tâche pour améliorer ses performances sur cette tâche.",
    category: "technical"
  },
  {
    term: "CNN (Convolutional Neural Network)",
    definition: "Type de réseau neuronal profond spécialement conçu pour traiter des données structurées en grille, comme les images, en utilisant des opérations de convolution.",
    category: "technical"
  },
  {
    term: "RNN (Recurrent Neural Network)",
    definition: "Type de réseau neuronal avec des connexions en boucle permettant de mémoriser des informations séquentielles, particulièrement adapté au traitement de séquences temporelles.",
    category: "technical"
  },
  {
    term: "LSTM (Long Short-Term Memory)",
    definition: "Variante avancée de RNN conçue pour résoudre le problème de la disparition du gradient, capable de retenir des informations sur de longues périodes.",
    category: "technical"
  },
  {
    term: "GAN (Generative Adversarial Network)",
    definition: "Architecture composée de deux réseaux en compétition (générateur et discriminateur) qui s'entraînent mutuellement pour produire des données synthétiques indiscernables des données réelles.",
    category: "technical"
  },
  {
    term: "RAG (Retrieval-Augmented Generation)",
    definition: "Technique combinant la récupération d'informations externes avec la génération de texte pour produire des réponses plus précises et contextuelles.",
    category: "technical"
  },
  {
    term: "Diffusion Models",
    definition: "Classe de modèles génératifs qui créent des données en apprenant à inverser un processus de diffusion (bruit ajouté progressivement), largement utilisés pour la génération d'images.",
    category: "technical"
  },
  {
    term: "Overfitting",
    definition: "Situation où un modèle apprend trop spécifiquement les données d'entraînement, au point de perdre sa capacité à généraliser sur de nouvelles données.",
    category: "technical"
  },
  {
    term: "Underfitting",
    definition: "Situation où un modèle est trop simpliste pour capturer la complexité des données, entraînant de mauvaises performances tant sur les données d'entraînement que sur les nouvelles données.",
    category: "technical"
  },
  {
    term: "Batch normalization",
    definition: "Technique qui normalise les activations d'une couche précédente pour chaque mini-batch, accélérant l'entraînement et améliorant la stabilité des réseaux profonds.",
    category: "technical"
  },
  {
    term: "Epoch",
    definition: "Passage complet de l'ensemble des données d'entraînement à travers l'algorithme d'apprentissage une fois, généralement répété plusieurs fois lors de l'entraînement.",
    category: "technical"
  },
  
  // ETHICAL TERMS
  {
    term: "Biais algorithmique",
    definition: "Erreur systématique dans un système d'IA qui conduit à des résultats injustes ou discriminatoires, souvent le reflet de préjugés sociaux existants dans les données d'entraînement.",
    category: "ethical"
  },
  {
    term: "Transparence algorithmique",
    definition: "Principe selon lequel les processus, caractéristiques et décisions d'un algorithme doivent être visibles et compréhensibles pour les utilisateurs et parties prenantes.",
    category: "ethical"
  },
  {
    term: "Explicabilité",
    definition: "Capacité d'un système d'IA à expliquer ses décisions ou prédictions d'une manière compréhensible par les humains.",
    category: "ethical"
  },
  {
    term: "Boîte noire",
    definition: "Système d'IA dont le fonctionnement interne n'est pas visible ou compréhensible pour les utilisateurs ou même les développeurs.",
    category: "ethical"
  },
  {
    term: "RGPD",
    definition: "Règlement Général sur la Protection des Données, cadre juridique de l'UE qui définit les règles relatives à la protection des données personnelles.",
    category: "ethical"
  },
  {
    term: "AI Act",
    definition: "Proposition de règlement européen visant à encadrer le développement et l'utilisation de l'intelligence artificielle selon une approche basée sur les risques.",
    category: "ethical"
  },
  {
    term: "IA responsable",
    definition: "Approche du développement et de l'utilisation de l'IA qui prend en compte les implications éthiques, sociales et environnementales des systèmes d'IA.",
    category: "ethical"
  },
  {
    term: "IA éthique",
    definition: "Conception, développement et déploiement de systèmes d'IA conformes aux principes éthiques comme la transparence, l'équité, la non-malveillance et le respect de l'autonomie humaine.",
    category: "ethical"
  },
  {
    term: "Consentement éclairé",
    definition: "Principe exigeant que les individus soient pleinement informés sur la façon dont leurs données seront utilisées par les systèmes d'IA avant de donner leur autorisation.",
    category: "ethical"
  },
  {
    term: "Droit à l'oubli",
    definition: "Droit des personnes à demander l'effacement de leurs données personnelles des bases de données et systèmes d'IA, reconnu notamment par le RGPD.",
    category: "ethical"
  },
  {
    term: "Privacy by Design",
    definition: "Approche qui intègre la protection de la vie privée dès la conception des systèmes d'IA, plutôt que comme une réflexion après-coup.",
    category: "ethical"
  },
  {
    term: "Fracture numérique",
    definition: "Inégalités dans l'accès et l'utilisation des technologies d'IA entre différents groupes sociaux, régions ou pays.",
    category: "ethical"
  },
  {
    term: "Gouvernance de l'IA",
    definition: "Ensemble des processus, règles et institutions qui régissent le développement, le déploiement et l'utilisation des systèmes d'IA à différents niveaux.",
    category: "ethical"
  },
  
  // MEMORY TERMS
  {
    term: "Mémoire à court terme",
    definition: "Composante de la mémoire d'un système d'IA qui stocke temporairement les informations nécessaires au traitement d'une tâche en cours, similaire à la RAM d'un ordinateur.",
    category: "memory"
  },
  {
    term: "Mémoire à long terme",
    definition: "Stockage persistant des connaissances et expériences acquises par un système d'IA au cours de son apprentissage, permettant leur réutilisation future.",
    category: "memory"
  },
  {
    term: "Mémoire épisodique",
    definition: "Type de mémoire à long terme qui permet à un système d'IA de se souvenir d'événements spécifiques ou d'expériences passées dans leur contexte temporel.",
    category: "memory"
  },
  {
    term: "Mémoire sémantique",
    definition: "Type de mémoire à long terme qui stocke des connaissances générales, des faits et des concepts indépendamment de l'expérience personnelle.",
    category: "memory"
  },
  {
    term: "Mémoire procédurale",
    definition: "Stockage des séquences d'actions ou de procédures permettant à un système d'IA d'effectuer des tâches sans avoir à réapprendre les étapes.",
    category: "memory"
  },
  {
    term: "Mémoire de travail",
    definition: "Système cognitif permettant le stockage temporaire et la manipulation des informations nécessaires à l'exécution de tâches complexes.",
    category: "memory"
  },
  {
    term: "Mémoire de contexte",
    definition: "Capacité d'un modèle d'IA à se souvenir et à utiliser les informations des interactions ou séquences précédentes dans une conversation ou un traitement de données.",
    category: "memory"
  },
  {
    term: "Mémoire associative",
    definition: "Système de stockage qui permet de récupérer des informations à partir d'un contenu partiel, en établissant des liens entre différentes données.",
    category: "memory"
  },
  {
    term: "Mémoire perceptive",
    definition: "Capacité d'un système d'IA à stocker et à traiter des informations sensorielles comme les images, les sons ou les données tactiles.",
    category: "memory"
  },
  {
    term: "Context window",
    definition: "Quantité de texte ou de données qu'un modèle d'IA peut traiter simultanément, définissant sa capacité à maintenir le contexte dans une conversation ou un document.",
    category: "memory"
  },
  {
    term: "Multi-hop reasoning",
    definition: "Capacité d'un système d'IA à effectuer plusieurs étapes de raisonnement en utilisant des informations précédemment stockées pour résoudre des problèmes complexes.",
    category: "memory"
  },
  {
    term: "In-context learning",
    definition: "Capacité d'un modèle d'IA à apprendre de nouvelles tâches à partir d'exemples fournis dans le contexte d'entrée, sans modification de ses paramètres.",
    category: "memory"
  },
  
  // ADVANCED TERMS
  {
    term: "XAI (Explainable AI)",
    definition: "Domaine de l'IA visant à rendre les systèmes d'IA plus transparents et explicables, permettant aux utilisateurs de comprendre pourquoi certaines décisions ont été prises.",
    category: "advanced"
  },
  {
    term: "Féderated Learning",
    definition: "Technique d'apprentissage où le modèle est entraîné sur plusieurs appareils décentralisés sans partager les données brutes, préservant ainsi la confidentialité.",
    category: "advanced"
  },
  {
    term: "Zero-shot learning",
    definition: "Capacité d'un modèle d'IA à effectuer des tâches pour lesquelles il n'a jamais été explicitement entraîné, en utilisant ses connaissances générales.",
    category: "advanced"
  },
  {
    term: "Few-shot learning",
    definition: "Capacité d'un modèle d'IA à apprendre une nouvelle tâche à partir d'un très petit nombre d'exemples, contrairement aux approches traditionnelles nécessitant de grandes quantités de données.",
    category: "advanced"
  },
  {
    term: "Neurosymbolic AI",
    definition: "Approche hybride combinant l'apprentissage profond (connexionniste) avec le raisonnement symbolique pour bénéficier des avantages des deux paradigmes.",
    category: "advanced"
  },
  {
    term: "Knowledge Graph",
    definition: "Représentation des connaissances sous forme de graphe, avec des entités et leurs relations, permettant aux systèmes d'IA d'organiser et d'interroger des informations complexes.",
    category: "advanced"
  },
  {
    term: "Reinforcement Learning from Human Feedback (RLHF)",
    definition: "Méthode d'entraînement des modèles d'IA qui utilise les retours humains pour affiner les comportements du modèle au-delà de ce qui est possible avec l'apprentissage supervisé traditionnel.",
    category: "advanced"
  },
  {
    term: "Foundation Model",
    definition: "Modèle d'IA massif entraîné sur d'énormes quantités de données diverses, qui peut être adapté à une grande variété de tâches en aval avec un minimum d'ajustements.",
    category: "advanced"
  },
  {
    term: "Self-supervised learning",
    definition: "Approche d'apprentissage où le modèle génère ses propres signaux de supervision à partir des données non étiquetées, en prédisant certaines parties des données à partir d'autres parties.",
    category: "advanced"
  },
  {
    term: "Quantum Machine Learning",
    definition: "Domaine émergent qui explore l'utilisation de l'informatique quantique pour améliorer ou accélérer les algorithmes d'apprentissage automatique traditionnels.",
    category: "advanced"
  },
  {
    term: "Digital Twin",
    definition: "Réplique virtuelle d'un objet, processus ou système physique, souvent enrichie par l'IA pour simuler, analyser et optimiser le comportement de son homologue réel.",
    category: "advanced"
  },
  {
    term: "Edge AI",
    definition: "Déploiement d'algorithmes d'IA directement sur des appareils périphériques plutôt que dans le cloud, permettant des analyses en temps réel avec une meilleure confidentialité et moins de latence.",
    category: "advanced"
  },
  {
    term: "GPT (Generative Pre-trained Transformer)",
    definition: "Famille de modèles de langage basés sur l'architecture Transformer, préentraînés sur d'énormes corpus de texte et capables de générer du contenu textuel cohérent et contextuel.",
    category: "advanced"
  },
  {
    term: "LLM (Large Language Model)",
    definition: "Modèle d'IA de grande taille entraîné sur d'immenses quantités de texte, capable de comprendre et générer du langage humain avec un niveau de sophistication élevé.",
    category: "advanced"
  },
  {
    term: "Hallucination (en IA)",
    definition: "Phénomène où un modèle génératif produit des informations qui semblent plausibles mais sont factuellement incorrectes ou inventées, n'existant pas dans ses données d'entraînement.",
    category: "advanced"
  },
  {
    term: "Alignment (alignement)",
    definition: "Processus visant à s'assurer que les systèmes d'IA agissent conformément aux intentions et valeurs humaines, minimisant les comportements non désirés ou dangereux.",
    category: "advanced"
  },
  
  // NEW TERMS
  {
    term: "Apprentissage Continu",
    definition: "Capacité d'un système d'IA à continuer d'apprendre et d'améliorer ses performances au fil du temps, en intégrant de nouvelles données et expériences sans nécessiter de réentraînement complet.",
    category: "general"
  },
  {
    term: "Intelligence Augmentée",
    definition: "Approche qui vise à utiliser l'IA comme complément à l'intelligence humaine plutôt que comme remplacement, créant une synergie entre capacités humaines et technologiques.",
    category: "general"
  },
  {
    term: "Intelligence Collective",
    definition: "Forme d'intelligence qui émerge de la collaboration entre plusieurs agents intelligents, qu'ils soient humains ou artificiels, permettant de résoudre des problèmes complexes.",
    category: "general"
  },
  
  {
    term: "Pruning (Élagage)",
    definition: "Technique qui consiste à réduire la taille d'un modèle d'IA en supprimant les connexions ou paramètres les moins importants, permettant d'améliorer l'efficacité sans perte significative de performance.",
    category: "technical"
  },
  {
    term: "Quantization (Quantification)",
    definition: "Processus de réduction de la précision numérique des paramètres d'un modèle d'IA, permettant de diminuer sa taille et d'accélérer l'inférence avec un impact minimal sur les performances.",
    category: "technical"
  },
  {
    term: "Distillation de Modèle",
    definition: "Technique où un modèle plus petit (étudiant) est entraîné pour reproduire le comportement d'un modèle plus grand et plus performant (enseignant), permettant des déploiements plus efficaces.",
    category: "technical"
  },
  {
    term: "Mixture of Experts (MoE)",
    definition: "Architecture de réseau neuronal où plusieurs sous-réseaux spécialisés (experts) sont combinés avec un mécanisme de routage qui sélectionne les experts les plus appropriés pour chaque entrée.",
    category: "technical"
  },
  {
    term: "Parameter-Efficient Fine-Tuning (PEFT)",
    definition: "Ensemble de techniques permettant d'adapter un grand modèle pré-entraîné à une tâche spécifique en modifiant seulement une petite fraction de ses paramètres, économisant ainsi ressources et temps.",
    category: "technical"
  },
  {
    term: "LoRA (Low-Rank Adaptation)",
    definition: "Méthode de fine-tuning efficace qui ajoute des matrices de faible rang aux poids existants d'un grand modèle, permettant de l'adapter à de nouvelles tâches avec beaucoup moins de paramètres à entraîner.",
    category: "technical"
  },
  {
    term: "QLoRA",
    definition: "Extension de LoRA qui combine quantification et adaptation de rang faible pour permettre le fine-tuning de très grands modèles de langage sur du matériel grand public avec des ressources limitées.",
    category: "technical"
  },
  
  {
    term: "Souveraineté Numérique",
    definition: "Capacité d'un État, d'une organisation ou d'un individu à exercer un contrôle sur ses données, infrastructures et compétences en matière d'IA, réduisant ainsi la dépendance à des entités extérieures.",
    category: "ethical"
  },
  {
    term: "Empreinte Carbone de l'IA",
    definition: "Impact environnemental lié à l'entraînement et à l'exploitation des modèles d'IA, particulièrement important pour les grands modèles qui nécessitent d'importantes ressources computationnelles.",
    category: "ethical"
  },
  {
    term: "Principe de Précaution en IA",
    definition: "Approche qui prône une évaluation préalable rigoureuse des risques potentiels avant le déploiement de systèmes d'IA, particulièrement pour ceux susceptibles d'avoir un impact sociétal significatif.",
    category: "ethical"
  },
  
  {
    term: "Mémoire externe",
    definition: "Système permettant à un modèle d'IA d'accéder à des informations stockées séparément de ses paramètres, comme des bases de données ou des vecteurs d'embeddings, augmentant ainsi sa capacité de stockage et sa précision factuelle.",
    category: "memory"
  },
  {
    term: "Système de mémoire hiérarchique",
    definition: "Architecture inspirée de la cognition humaine où différents types de mémoire (court terme, long terme, de travail) sont organisés en niveaux d'accessibilité et de permanence pour optimiser le traitement de l'information.",
    category: "memory"
  },
  {
    term: "Cognitive architecture",
    definition: "Cadre théorique qui modélise les structures et processus mentaux, y compris les systèmes de mémoire, permettant aux systèmes d'IA d'imiter plus fidèlement le fonctionnement cognitif humain.",
    category: "memory"
  },
  
  {
    term: "AI Safety",
    definition: "Domaine de recherche dédié à garantir que les systèmes d'IA avancés restent alignés sur les valeurs humaines et ne causent pas de dommages involontaires, même en cas d'évolution autonome ou d'amélioration récursive.",
    category: "advanced"
  },
  {
    term: "Mechanistic Interpretability",
    definition: "Approche d'explicabilité de l'IA qui cherche à comprendre les mécanismes internes précis par lesquels les modèles traitent l'information et prennent des décisions, au niveau des neurones individuels et de leurs interactions.",
    category: "advanced"
  },
  {
    term: "Agentic AI",
    definition: "Systèmes d'IA dotés d'une forme d'autonomie leur permettant de fixer des objectifs, planifier des actions et interagir avec leur environnement pour atteindre ces objectifs sans intervention humaine constante.",
    category: "advanced"
  },
  {
    term: "Constitutional AI",
    definition: "Approche de développement qui intègre un ensemble de principes ou 'constitution' directement dans la conception d'un système d'IA, guidant son comportement et permettant une forme d'auto-supervision éthique.",
    category: "advanced"
  },
  {
    term: "Multimodal Chain-of-Thought",
    definition: "Extension du raisonnement étape par étape aux modèles multimodaux, permettant de décomposer le traitement d'informations visuelles et textuelles en étapes intermédiaires explicites pour améliorer le raisonnement.",
    category: "advanced"
  },
  {
    term: "System 1 & System 2",
    definition: "Cadre conceptuel inspiré de la psychologie cognitive qui distingue la pensée rapide, intuitive et automatique (Système 1) de la pensée lente, délibérée et analytique (Système 2) dans les architectures d'IA avancées.",
    category: "advanced"
  },
  {
    term: "Scaffolded LLM",
    definition: "Architecture où un grand modèle de langage est augmenté par des composants spécialisés (bases de connaissances, outils externes, modules de raisonnement) formant un 'échafaudage' qui étend ses capacités au-delà du texte seul.",
    category: "advanced"
  },
  {
    term: "Cybernetic AI",
    definition: "Approche qui intègre les principes de la cybernétique dans la conception des systèmes d'IA, mettant l'accent sur les boucles de rétroaction, l'auto-régulation et l'interaction dynamique avec l'environnement.",
    category: "advanced"
  }
];

const TermsGlossary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'general' | 'technical' | 'ethical' | 'memory' | 'advanced'>('all');

  const filteredTerms = aiTerms.filter(item => {
    const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  const sortedTerms = [...filteredTerms].sort((a, b) => a.term.localeCompare(b.term));

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground transition-colors duration-200" />
          <Input
            placeholder="Rechercher un terme..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 transition-all duration-300 focus:shadow-lg hover:shadow-md border-2 hover:border-primary/50 focus:border-primary"
          />
        </div>
        <div className="flex overflow-x-auto py-1 gap-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all duration-300 transform hover:scale-105 ${
              activeCategory === 'all' 
                ? 'bg-primary text-primary-foreground shadow-lg' 
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-md'
            }`}
          >
            Tous
          </button>
          <button
            onClick={() => setActiveCategory('general')}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all duration-300 transform hover:scale-105 ${
              activeCategory === 'general' 
                ? 'bg-primary text-primary-foreground shadow-lg' 
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-md'
            }`}
          >
            Généraux
          </button>
          <button
            onClick={() => setActiveCategory('technical')}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all duration-300 transform hover:scale-105 ${
              activeCategory === 'technical' 
                ? 'bg-primary text-primary-foreground shadow-lg' 
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-md'
            }`}
          >
            Techniques
          </button>
          <button
            onClick={() => setActiveCategory('ethical')}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all duration-300 transform hover:scale-105 ${
              activeCategory === 'ethical' 
                ? 'bg-primary text-primary-foreground shadow-lg' 
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-md'
            }`}
          >
            Éthiques
          </button>
          <button
            onClick={() => setActiveCategory('memory')}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all duration-300 transform hover:scale-105 ${
              activeCategory === 'memory' 
                ? 'bg-primary text-primary-foreground shadow-lg' 
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-md'
            }`}
          >
            Mémoire
          </button>
          <button
            onClick={() => setActiveCategory('advanced')}
            className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all duration-300 transform hover:scale-105 ${
              activeCategory === 'advanced' 
                ? 'bg-primary text-primary-foreground shadow-lg' 
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-md'
            }`}
          >
            Avancés
          </button>
        </div>
      </div>

      <div className="mb-4 p-4 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800 transform hover:scale-[1.01] transition-all duration-300 hover:shadow-lg">
        <div className="flex items-start gap-3">
          <BookMarked className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-0.5 animate-pulse" />
          <div>
            <h3 className="font-medium text-yellow-800 dark:text-yellow-400">Glossaire enrichi</h3>
            <p className="text-sm text-yellow-700 dark:text-yellow-300/80">
              Notre glossaire compte maintenant {aiTerms.length} termes liés à l'IA, 
              organisés en 5 catégories pour faciliter votre compréhension du domaine.
            </p>
          </div>
        </div>
      </div>

      {sortedTerms.length === 0 ? (
        <div className="text-center py-10">
          <BookOpen className="mx-auto h-12 w-12 text-muted-foreground/50 animate-bounce" />
          <h3 className="mt-4 text-lg font-medium">Aucun terme trouvé</h3>
          <p className="text-muted-foreground">Essayez une autre recherche ou catégorie</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sortedTerms.map((item, index) => (
            <Card 
              key={index} 
              className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 hover:border-primary/50 cursor-pointer"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex justify-between items-start group-hover:text-primary transition-colors duration-200">
                  <span className="group-hover:scale-105 transition-transform duration-200">{item.term}</span>
                  <span className={`text-xs px-3 py-1 rounded-full transition-all duration-300 group-hover:scale-110 ${
                    item.category === 'general' 
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50' 
                      : item.category === 'technical' 
                        ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 group-hover:bg-purple-200 dark:group-hover:bg-purple-900/50' 
                        : item.category === 'ethical'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 group-hover:bg-green-200 dark:group-hover:bg-green-900/50'
                          : item.category === 'memory'
                            ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 group-hover:bg-amber-200 dark:group-hover:bg-amber-900/50'
                            : 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300 group-hover:bg-pink-200 dark:group-hover:bg-pink-900/50'
                  }`}>
                    {item.category === 'general' 
                      ? 'Général' 
                      : item.category === 'technical' 
                        ? 'Technique' 
                        : item.category === 'ethical'
                          ? 'Éthique'
                          : item.category === 'memory'
                            ? 'Mémoire'
                            : 'Avancé'}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-200">{item.definition}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default TermsGlossary;
