
import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, EyeIcon, Bot, BarChart3, Zap, 
  Braces, Sparkles, FileCode, BookOpen
} from 'lucide-react';

interface AITypeExplanationProps {
  selectedType: string;
}

const AITypeExplanation: React.FC<AITypeExplanationProps> = ({ selectedType }) => {
  const typeIcons: Record<string, React.ReactNode> = {
    "LLM": <MessageSquare className="w-5 h-5 text-primary" />,
    "CNN": <EyeIcon className="w-5 h-5 text-blue-500" />,
    "RL": <Bot className="w-5 h-5 text-orange-500" />,
    "XAI": <BarChart3 className="w-5 h-5 text-green-500" />,
    "AGI": <Zap className="w-5 h-5 text-red-500" />,
    "NLP": <BookOpen className="w-5 h-5 text-indigo-500" />,
    "RAG": <FileCode className="w-5 h-5 text-violet-500" />,
    "GAN": <Sparkles className="w-5 h-5 text-pink-500" />,
    "DRL": <Bot className="w-5 h-5 text-amber-500" />,
    "BERT": <Braces className="w-5 h-5 text-blue-400" />,
    "RNN": <Braces className="w-5 h-5 text-purple-500" />,
    "SVM": <Braces className="w-5 h-5 text-indigo-400" />
  };

  const explanations: Record<string, { 
    type: string; 
    description: string; 
    applications: string[];
    strengths: string[];
    limitations: string[];
  }> = {
    "LLM": {
      type: "Modèles de Langage (LLM)",
      description: "Ces modèles traitent et génèrent du texte en se basant sur d'énormes corpus de données textuelles. Ils excellent dans la compréhension contextuelle et peuvent générer du contenu cohérent, traduire des langues, résumer des textes et répondre à des questions.",
      applications: [
        "Création de contenu (articles, marketing, emails)",
        "Assistants virtuels et chatbots",
        "Traduction automatique et résumé de documents"
      ],
      strengths: [
        "Capacité à comprendre des nuances linguistiques complexes",
        "Polyvalence dans différents domaines d'application",
        "Adaptation à différents styles et formats de texte"
      ],
      limitations: [
        "Risque de génération d'inexactitudes (hallucinations)",
        "Biais potentiels reflétant les données d'entraînement",
        "Difficulté à raisonner sur des problèmes mathématiques complexes"
      ]
    },
    "CNN": {
      type: "Réseaux de Neurones Convolutifs (CNN)",
      description: "Spécialisés dans le traitement d'images, les CNN utilisent des filtres qui scannent les données visuelles pour identifier des motifs. Ils sont essentiels pour la reconnaissance d'objets, la classification d'images et même l'analyse médicale.",
      applications: [
        "Reconnaissance faciale et d'objets",
        "Diagnostic médical par imagerie",
        "Conduite autonome et systèmes de vision industriels"
      ],
      strengths: [
        "Excellente performance dans l'analyse d'images",
        "Capacité à détecter des caractéristiques hiérarchiques",
        "Robustesse aux variations de position dans l'image"
      ],
      limitations: [
        "Besoin de grandes quantités de données étiquetées",
        "Sensibilité aux attaques adversarielles",
        "Difficulté à expliquer les décisions prises"
      ]
    },
    "RL": {
      type: "Apprentissage par Renforcement (RL)",
      description: "Ces systèmes apprennent par essai-erreur via un système de récompenses. Particulièrement efficaces pour les jeux, la robotique et les systèmes de contrôle, ils développent des stratégies optimales sans supervision directe.",
      applications: [
        "Jeux (échecs, go, jeux vidéo)",
        "Robotique et contrôle de systèmes",
        "Optimisation de processus industriels"
      ],
      strengths: [
        "Capacité à trouver des solutions innovantes",
        "Adaptation continue à l'environnement",
        "Apprentissage sans données étiquetées"
      ],
      limitations: [
        "Difficulté à apprendre de récompenses rares",
        "Instabilité potentielle durant l'apprentissage",
        "Problème d'exploration vs exploitation"
      ]
    },
    "XAI": {
      type: "IA Explicable (XAI)",
      description: "L'IA explicable vise à rendre compréhensibles les décisions des systèmes complexes. Ces approches permettent aux humains de comprendre pourquoi une IA a pris une décision particulière, essentiel dans les domaines comme la médecine ou la finance.",
      applications: [
        "Prise de décision médicale et diagnostic",
        "Systèmes d'évaluation de crédit explicables",
        "Audit et conformité des systèmes d'IA"
      ],
      strengths: [
        "Transparence accrue des systèmes d'IA",
        "Renforcement de la confiance des utilisateurs",
        "Facilité d'identification et correction des biais"
      ],
      limitations: [
        "Compromis potentiel avec la performance",
        "Parfois difficile à implémenter sur des modèles très complexes",
        "Les explications peuvent simplifier excessivement"
      ]
    },
    "AGI": {
      type: "Intelligence Artificielle Générale (AGI)",
      description: "L'AGI représente des systèmes capables de comprendre, d'apprendre et d'appliquer des connaissances à travers différents domaines au niveau humain ou supérieur. Elle reste un objectif théorique poursuivi par la recherche.",
      applications: [
        "Recherche scientifique pluridisciplinaire",
        "Résolution de problèmes complexes globaux",
        "Transfert d'apprentissage entre domaines distincts"
      ],
      strengths: [
        "Polyvalence et adaptabilité à tout type de problème",
        "Capacité d'apprentissage continue et autonome",
        "Possibilité de raisonnement abstrait et créatif"
      ],
      limitations: [
        "Encore largement théorique, pas pleinement réalisée",
        "Défis éthiques et sécuritaires majeurs",
        "Besoins computationnels potentiellement massifs"
      ]
    },
    "NLP": {
      type: "Traitement du Langage Naturel (NLP)",
      description: "Le NLP permet aux ordinateurs de comprendre, interpréter et générer le langage humain. Ces technologies sont à la base des assistants virtuels, de l'analyse de sentiment, de la traduction automatique et de l'extraction d'informations de textes.",
      applications: [
        "Assistants virtuels et chatbots",
        "Analyse de sentiment et d'opinion",
        "Traduction automatique et classification de documents"
      ],
      strengths: [
        "Traitement efficace de grandes quantités de texte",
        "Capacité à identifier des thèmes et tendances",
        "Outils polyvalents pour différentes tâches linguistiques"
      ],
      limitations: [
        "Difficulté avec les ambiguïtés linguistiques",
        "Dépendance aux données d'entraînement",
        "Challenges avec les langues peu représentées"
      ]
    },
    "RAG": {
      type: "Génération Augmentée par Récupération (RAG)",
      description: "Les systèmes RAG améliorent les réponses des modèles de langage en recherchant des informations pertinentes dans une base de connaissances externe avant de générer une réponse. Ils combinent ainsi la puissance générative des LLM avec des informations factuelles précises.",
      applications: [
        "Assistants de recherche scientifique",
        "Systèmes de réponse aux questions spécialisés",
        "Documentation technique interactive"
      ],
      strengths: [
        "Réponses plus précises et factuelles",
        "Réduction des hallucinations des LLM",
        "Capacité à utiliser des informations à jour"
      ],
      limitations: [
        "Dépendance à la qualité de la base de connaissance",
        "Complexité d'intégration et de maintenance",
        "Défis de pertinence et d'extraction d'information"
      ]
    },
    "GAN": {
      type: "Réseaux Antagonistes Génératifs (GAN)",
      description: "Les GAN utilisent deux réseaux neuronaux qui s'affrontent : un générateur qui crée des contenus et un discriminateur qui tente de distinguer le vrai du faux. Cette compétition permet de créer des images, sons ou vidéos d'un réalisme impressionnant.",
      applications: [
        "Création d'images photoréalistes",
        "Amplification de résolution d'images",
        "Synthèse de voix et modification de visages"
      ],
      strengths: [
        "Génération de contenu d'un réalisme remarquable",
        "Capacité à apprendre des distributions complexes",
        "Flexibilité pour différents types de médias"
      ],
      limitations: [
        "Instabilité durant l'entraînement",
        "Difficulté à contrôler précisément le résultat",
        "Risques éthiques (deepfakes, etc.)"
      ]
    },
    "DRL": {
      type: "Apprentissage par Renforcement Profond (DRL)",
      description: "Combinaison de l'apprentissage par renforcement avec les réseaux de neurones profonds, permettant aux agents d'apprendre directement à partir de données brutes complexes comme des images, et de développer des stratégies sophistiquées.",
      applications: [
        "Jeux vidéo complexes et environnements 3D",
        "Robotique avancée et manipulation d'objets",
        "Optimisation de systèmes énergétiques"
      ],
      strengths: [
        "Traitement direct de données complexes et non structurées",
        "Capacité à apprendre des comportements sophistiqués",
        "Performance supérieure dans des environnements dynamiques"
      ],
      limitations: [
        "Extrêmement gourmand en ressources de calcul",
        "Difficulté à transférer l'apprentissage entre tâches",
        "Convergence parfois lente ou instable"
      ]
    },
    "BERT": {
      type: "Bidirectional Encoder Representations from Transformers (BERT)",
      description: "Modèle de langage basé sur l'architecture Transformer qui analyse un texte en tenant compte du contexte bidirectionnel, permettant une compréhension plus nuancée du langage naturel et des relations entre les mots.",
      applications: [
        "Recherche documentaire avancée",
        "Systèmes de questions-réponses",
        "Classification de textes et analyse de sentiment"
      ],
      strengths: [
        "Compréhension contextuelle bidirectionnelle",
        "Performances excellentes sur diverses tâches linguistiques",
        "Capacité à s'adapter à des domaines spécifiques"
      ],
      limitations: [
        "Ressources importantes nécessaires pour l'entraînement",
        "Limite de longueur des séquences traitées",
        "Moins efficace pour la génération que les modèles autorégressifs"
      ]
    },
    "RNN": {
      type: "Réseaux de Neurones Récurrents (RNN)",
      description: "Réseaux neuronaux spécialement conçus pour traiter des séquences de données en maintenant un état interne qui agit comme une mémoire, permettant d'analyser des données temporelles comme le texte ou les séries chronologiques.",
      applications: [
        "Traduction automatique et reconnaissance vocale",
        "Prédiction de séries temporelles",
        "Génération de texte et musique"
      ],
      strengths: [
        "Gestion efficace des données séquentielles",
        "Capacité à capturer des dépendances temporelles",
        "Architecture adaptable à différentes longueurs d'entrée"
      ],
      limitations: [
        "Problème de disparition du gradient sur de longues séquences",
        "Difficulté à paralléliser l'entraînement",
        "Souvent supplantés par les Transformers pour le texte"
      ]
    },
    "SVM": {
      type: "Machines à Vecteurs de Support (SVM)",
      description: "Algorithmes d'apprentissage supervisé qui trouvent l'hyperplan optimal séparant différentes classes de données, particulièrement efficaces pour la classification et la régression sur des ensembles de données à haute dimensionnalité.",
      applications: [
        "Classification de textes et d'images",
        "Détection d'anomalies et de fraudes",
        "Prédiction en bio-informatique"
      ],
      strengths: [
        "Performance avec relativement peu de données",
        "Efficacité dans les espaces à haute dimension",
        "Robustesse contre le sur-apprentissage"
      ],
      limitations: [
        "Difficulté à interpréter les décisions prises",
        "Sensibilité aux choix des hyperparamètres",
        "Moins adapté aux très grands jeux de données"
      ]
    }
  };

  const currentExplanation = explanations[selectedType];
  if (!currentExplanation) return null;
  
  const typeIcon = typeIcons[selectedType] || <MessageSquare className="w-5 h-5 text-primary" />;

  return (
    <motion.div 
      className="p-6 mb-8 border rounded-xl bg-secondary/5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      key={selectedType}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 rounded-full bg-primary/10">
          {typeIcon}
        </div>
        <h3 className="text-xl font-semibold">{currentExplanation.type}</h3>
      </div>
      
      <p className="text-muted-foreground mb-6">{currentExplanation.description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <h4 className="font-medium text-sm text-primary">Applications</h4>
          <ul className="space-y-1">
            {currentExplanation.applications.map((app, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="inline-block w-1 h-1 rounded-full bg-primary mt-1.5"></span>
                <span>{app}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="space-y-2">
          <h4 className="font-medium text-sm text-green-600">Forces</h4>
          <ul className="space-y-1">
            {currentExplanation.strengths.map((strength, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="inline-block w-1 h-1 rounded-full bg-green-500 mt-1.5"></span>
                <span>{strength}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="space-y-2">
          <h4 className="font-medium text-sm text-amber-600">Limites</h4>
          <ul className="space-y-1">
            {currentExplanation.limitations.map((limitation, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="inline-block w-1 h-1 rounded-full bg-amber-500 mt-1.5"></span>
                <span>{limitation}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default AITypeExplanation;
