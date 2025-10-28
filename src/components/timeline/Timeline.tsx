
import React, { useState } from 'react';
import { 
  Calendar, ChevronsUpDown, History, Brain, 
  Bot, Calculator, BrainCircuit, BadgeCheck, 
  Network, Globe, Cpu, Rocket, Car
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from '@/components/ui/collapsible';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { motion } from 'framer-motion';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  details?: string;
  technicalTerms?: Array<{
    term: string;
    explanation: string;
    example?: string;
    analogy?: string;
  }>;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "1950",
    title: "Test de Turing",
    description: "Alan Turing propose un test pour déterminer si une machine peut penser.",
    icon: <Brain className="h-5 w-5" />,
    details: "Le test de Turing propose un critère selon lequel une machine peut être considérée comme 'pensante' si un évaluateur humain ne peut pas distinguer de façon fiable les réponses de la machine de celles d'un humain.",
    technicalTerms: [
      {
        term: "Test de Turing",
        explanation: "Méthode d'évaluation de l'intelligence d'une machine basée sur sa capacité à imiter la conversation humaine",
        example: "ChatGPT passerait probablement le test de Turing dans de nombreuses conversations",
        analogy: "Comme un test à l'aveugle où vous devinez si vous parlez à un humain ou à une machine"
      },
      {
        term: "Intelligence artificielle",
        explanation: "Capacité d'une machine à imiter les fonctions cognitives humaines comme l'apprentissage et la résolution de problèmes",
        example: "Reconnaissance vocale, traduction automatique, conduite autonome",
        analogy: "Comme donner un cerveau artificiel à une machine pour qu'elle puisse 'réfléchir'"
      }
    ]
  },
  {
    year: "1956",
    title: "Conférence de Dartmouth",
    description: "Naissance officielle du terme 'Intelligence Artificielle'.",
    icon: <Calendar className="h-5 w-5" />,
    details: "Organisée par John McCarthy, Marvin Minsky, Nathaniel Rochester et Claude Shannon, cette conférence a défini l'IA comme discipline scientifique et a établi ses objectifs fondamentaux.",
    technicalTerms: [
      {
        term: "Discipline scientifique",
        explanation: "Domaine d'étude structuré avec des méthodes, théories et objectifs définis",
        example: "L'IA combine informatique, mathématiques, psychologie et neurosciences",
        analogy: "Comme créer une nouvelle matière à l'université avec son programme et ses règles"
      }
    ]
  },
  {
    year: "1966-1973",
    title: "Premier hiver de l'IA",
    description: "Période de réduction des financements et de l'intérêt pour l'IA.",
    icon: <History className="h-5 w-5" />,
    details: "Suite à des promesses non tenues et des attentes trop élevées, les gouvernements et les investisseurs ont réduit leurs financements pour la recherche en IA.",
    technicalTerms: [
      {
        term: "Hiver de l'IA",
        explanation: "Périodes de désillusion où les financements et l'intérêt pour l'IA diminuent drastiquement",
        example: "Après l'échec des promesses de traduction automatique parfaite dans les années 60",
        analogy: "Comme un hiver économique où les investissements gèlent par manque de confiance"
      }
    ]
  },
  {
    year: "1980",
    title: "Systèmes experts",
    description: "Développement de systèmes de règles pour résoudre des problèmes complexes.",
    icon: <Calculator className="h-5 w-5" />,
    details: "Ces systèmes utilisaient des règles 'si-alors' pour prendre des décisions dans des domaines spécialisés comme le diagnostic médical ou la prospection pétrolière.",
    technicalTerms: [
      {
        term: "Systèmes experts",
        explanation: "Programmes informatiques qui imitent le raisonnement d'un expert humain dans un domaine spécialisé",
        example: "MYCIN pour le diagnostic médical, DENDRAL pour l'analyse chimique",
        analogy: "Comme avoir un médecin virtuel qui suit un manuel de diagnostic très précis"
      },
      {
        term: "Règles si-alors",
        explanation: "Logique conditionnelle où une action est déclenchée si certaines conditions sont remplies",
        example: "SI fièvre > 38°C ET mal de gorge ALORS prescrire antibiotique",
        analogy: "Comme une recette de cuisine avec des instructions précises selon les ingrédients disponibles"
      }
    ]
  },
  {
    year: "1987-1993",
    title: "Deuxième hiver de l'IA",
    description: "Nouvelle période de désintérêt et de réduction des investissements.",
    icon: <History className="h-5 w-5" />,
    details: "L'effondrement du marché des systèmes experts et des ordinateurs LISP a conduit à une nouvelle période de scepticisme envers l'IA."
  },
  {
    year: "1997",
    title: "Deep Blue",
    description: "L'ordinateur d'IBM bat le champion du monde d'échecs Garry Kasparov.",
    icon: <Cpu className="h-5 w-5" />,
    details: "Cette victoire historique a marqué un tournant dans la perception publique des capacités de l'IA, même si Deep Blue utilisait principalement une approche de force brute.",
    technicalTerms: [
      {
        term: "Force brute",
        explanation: "Méthode qui consiste à explorer toutes les possibilités pour trouver la meilleure solution",
        example: "Deep Blue calculait 200 millions de positions d'échecs par seconde",
        analogy: "Comme résoudre un labyrinthe en essayant tous les chemins possibles très rapidement"
      },
      {
        term: "Calcul parallèle",
        explanation: "Utilisation de plusieurs processeurs simultanément pour accélérer les calculs",
        example: "Deep Blue utilisait 30 processeurs spécialisés pour les échecs",
        analogy: "Comme avoir 30 personnes qui réfléchissent en même temps au lieu d'une seule"
      }
    ]
  },
  {
    year: "2006",
    title: "Deep Learning",
    description: "Émergence du deep learning moderne avec les réseaux de neurones profonds.",
    icon: <BrainCircuit className="h-5 w-5" />,
    details: "Geoffrey Hinton introduit une méthode efficace pour entraîner les réseaux de neurones profonds, ouvrant la voie à une nouvelle ère pour l'IA.",
    technicalTerms: [
      {
        term: "Deep Learning",
        explanation: "Technique d'apprentissage automatique utilisant des réseaux de neurones artificiels avec plusieurs couches",
        example: "Reconnaissance d'images, traduction automatique, génération de texte",
        analogy: "Comme un cerveau artificiel avec plusieurs niveaux de réflexion, du simple au complexe"
      },
      {
        term: "Réseaux de neurones",
        explanation: "Modèles informatiques inspirés du fonctionnement des neurones biologiques",
        example: "Chaque neurone artificiel reçoit des signaux, les traite et transmet le résultat",
        analogy: "Comme un réseau de messagers qui se passent et transforment l'information"
      },
      {
        term: "Rétropropagation",
        explanation: "Algorithme d'apprentissage qui ajuste les poids du réseau en propageant l'erreur vers l'arrière",
        example: "Si l'IA se trompe sur une image de chat, elle ajuste ses connexions pour mieux reconnaître les chats",
        analogy: "Comme corriger ses erreurs en remontant étape par étape pour comprendre où ça a dérapé"
      }
    ]
  },
  {
    year: "2011",
    title: "Watson d'IBM",
    description: "Watson remporte le jeu télévisé Jeopardy! contre des champions humains.",
    icon: <BadgeCheck className="h-5 w-5" />,
    details: "Watson a démontré la capacité de l'IA à comprendre le langage naturel et à traiter des informations complexes et ambiguës.",
    technicalTerms: [
      {
        term: "Traitement du langage naturel",
        explanation: "Capacité des machines à comprendre, interpréter et générer le langage humain",
        example: "Watson comprenait les jeux de mots et références culturelles de Jeopardy!",
        analogy: "Comme apprendre à une machine à parler et comprendre comme un humain"
      },
      {
        term: "Analyse sémantique",
        explanation: "Compréhension du sens des mots et phrases dans leur contexte",
        example: "Distinguer 'la souris mange le fromage' de 'la souris de l'ordinateur'",
        analogy: "Comme comprendre le sens caché derrière les mots, pas seulement les mots eux-mêmes"
      }
    ]
  },
  {
    year: "2012",
    title: "AlexNet",
    description: "Percée majeure dans la reconnaissance d'images avec les réseaux de neurones convolutifs.",
    icon: <Network className="h-5 w-5" />,
    details: "AlexNet a réduit de moitié le taux d'erreur dans la compétition ImageNet, démontrant la puissance des réseaux de neurones profonds pour la vision par ordinateur.",
    technicalTerms: [
      {
        term: "Réseaux de neurones convolutifs (CNN)",
        explanation: "Architecture spécialisée dans l'analyse d'images qui détecte des motifs visuels",
        example: "AlexNet reconnaissait formes, textures et objets dans les images",
        analogy: "Comme des filtres photographiques intelligents qui extraient les détails importants"
      },
      {
        term: "Vision par ordinateur",
        explanation: "Capacité des machines à interpréter et comprendre le contenu visuel",
        example: "Reconnaissance faciale, diagnostic médical par imagerie, voitures autonomes",
        analogy: "Comme donner des yeux et un cerveau à une machine pour qu'elle 'voie' comme nous"
      },
      {
        term: "ImageNet",
        explanation: "Grande base de données d'images étiquetées utilisée pour entraîner et tester les IA visuelles",
        example: "Plus de 14 millions d'images dans 20 000 catégories",
        analogy: "Comme une immense bibliothèque d'images avec des légendes pour apprendre aux machines"
      }
    ]
  },
  {
    year: "2016",
    title: "AlphaGo",
    description: "L'IA de DeepMind bat le champion du monde de Go Lee Sedol.",
    icon: <Globe className="h-5 w-5" />,
    details: "Cette victoire était remarquable car le jeu de Go était considéré comme trop complexe pour être maîtrisé par les ordinateurs en raison du nombre astronomique de configurations possibles.",
    technicalTerms: [
      {
        term: "Apprentissage par renforcement",
        explanation: "Méthode d'apprentissage où l'IA apprend en essayant des actions et en recevant des récompenses",
        example: "AlphaGo s'entraînait en jouant des millions de parties contre elle-même",
        analogy: "Comme apprendre à faire du vélo en tombant et se relevant jusqu'à trouver l'équilibre"
      },
      {
        term: "Arbre de recherche Monte-Carlo",
        explanation: "Algorithme qui explore intelligemment les possibilités futures en simulant des scénarios aléatoires",
        example: "AlphaGo simulait des milliers de fins de parties pour chaque coup possible",
        analogy: "Comme jouer mentalement plusieurs fins de parties pour choisir le meilleur coup"
      }
    ]
  },
  {
    year: "2018",
    title: "Transformer et BERT",
    description: "Révolution dans le traitement du langage naturel avec l'architecture Transformer.",
    icon: <Bot className="h-5 w-5" />,
    details: "Ces modèles ont transformé le NLP en permettant une meilleure compréhension du contexte et des relations entre les mots dans un texte.",
    technicalTerms: [
      {
        term: "Architecture Transformer",
        explanation: "Modèle révolutionnaire qui utilise l'attention pour comprendre les relations entre tous les mots d'un texte",
        example: "Base de GPT, BERT et la plupart des IA modernes de langage",
        analogy: "Comme lire un livre en gardant en mémoire tous les personnages et leurs relations"
      },
      {
        term: "Mécanisme d'attention",
        explanation: "Technique qui permet au modèle de se concentrer sur les parties importantes du texte",
        example: "Dans 'Le chat mange la souris', l'attention lie 'chat' avec 'mange' et 'souris'",
        analogy: "Comme surligner les mots importants dans un texte pour mieux comprendre"
      },
      {
        term: "BERT",
        explanation: "Modèle bidirectionnel qui lit le texte dans les deux sens pour mieux comprendre le contexte",
        example: "Comprend que 'banque' signifie argent dans 'aller à la banque' vs rivière dans 'banque de la Seine'",
        analogy: "Comme lire une phrase en regardant ce qui vient avant ET après chaque mot"
      }
    ]
  },
  {
    year: "2020",
    title: "GPT-3",
    description: "Modèle de langage à grande échelle capable de générer du texte humain.",
    icon: <Bot className="h-5 w-5" />,
    details: "Avec ses 175 milliards de paramètres, GPT-3 a démontré des capacités impressionnantes pour générer du texte cohérent et contextuel sur une variété de sujets.",
    technicalTerms: [
      {
        term: "Modèle de langage génératif",
        explanation: "IA capable de produire du texte nouveau en prédisant le mot suivant le plus probable",
        example: "GPT-3 peut écrire des articles, des poèmes, du code informatique",
        analogy: "Comme un écrivain qui continue votre phrase en devinant ce que vous vouliez dire"
      },
      {
        term: "Paramètres",
        explanation: "Variables internes du modèle qui stockent les connaissances apprises pendant l'entraînement",
        example: "175 milliards de paramètres = 175 milliards de 'souvenirs' différents",
        analogy: "Comme les connexions synaptiques dans un cerveau qui stockent la mémoire"
      },
      {
        term: "Pré-entraînement",
        explanation: "Phase où le modèle apprend sur d'énormes quantités de texte avant d'être spécialisé",
        example: "GPT-3 a lu l'équivalent de millions de livres sur Internet",
        analogy: "Comme étudier toute une bibliothèque avant de passer un examen spécialisé"
      }
    ]
  },
  {
    year: "2023",
    title: "IA générative",
    description: "Explosion des modèles d'IA capables de générer du texte, des images et du code.",
    icon: <Rocket className="h-5 w-5" />,
    details: "L'IA générative est devenue accessible au grand public, permettant la création de contenus créatifs et l'automatisation de tâches complexes.",
    technicalTerms: [
      {
        term: "IA générative",
        explanation: "Intelligence artificielle capable de créer du contenu original (texte, images, audio, vidéo)",
        example: "ChatGPT pour le texte, DALL-E pour les images, GitHub Copilot pour le code",
        analogy: "Comme un artiste polyvalent qui peut peindre, écrire et composer selon vos demandes"
      },
      {
        term: "Prompt engineering",
        explanation: "Art de formuler des instructions précises pour obtenir les meilleurs résultats d'une IA",
        example: "'Écris un poème romantique sur Paris en alexandrins' vs 'écris un poème'",
        analogy: "Comme apprendre à parler à un génie de la lampe pour obtenir exactement ce qu'on veut"
      },
      {
        term: "Fine-tuning",
        explanation: "Processus d'ajustement d'un modèle pré-entraîné pour une tâche spécifique",
        example: "Adapter GPT pour le service client d'une entreprise particulière",
        analogy: "Comme former un médecin généraliste pour devenir spécialiste en cardiologie"
      }
    ]
  },
  {
    year: "2024+",
    title: "IA et robotique avancée",
    description: "Intégration de l'IA dans les systèmes autonomes et la robotique.",
    icon: <Car className="h-5 w-5" />,
    details: "L'avenir de l'IA s'oriente vers des systèmes plus autonomes, capables d'interagir avec le monde physique de manière sûre et efficace.",
    technicalTerms: [
      {
        term: "Systèmes autonomes",
        explanation: "Machines capables de prendre des décisions et d'agir sans intervention humaine constante",
        example: "Voitures autonomes, drones de livraison, robots chirurgicaux",
        analogy: "Comme avoir un chauffeur robotique qui conduit tout seul en évitant les obstacles"
      },
      {
        term: "IA multimodale",
        explanation: "Systèmes qui comprennent et traitent plusieurs types de données simultanément",
        example: "Robot qui voit, entend et touche pour comprendre son environnement",
        analogy: "Comme un humain qui utilise tous ses sens en même temps pour comprendre le monde"
      }
    ]
  }
];

const TechnicalTermTooltip = ({ term }: { term: { term: string; explanation: string; example?: string; analogy?: string } }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <span className="text-primary font-medium cursor-help border-b border-primary/30 border-dotted hover:border-primary transition-colors">
          {term.term}
        </span>
      </TooltipTrigger>
      <TooltipContent className="max-w-sm p-4 space-y-2 bg-card border border-border shadow-lg">
        <div className="font-semibold text-foreground">{term.term}</div>
        <div className="text-sm text-muted-foreground">{term.explanation}</div>
        {term.example && (
          <div className="text-xs bg-primary/5 p-2 rounded border-l-2 border-primary">
            <span className="font-medium text-primary">Exemple :</span> {term.example}
          </div>
        )}
        {term.analogy && (
          <div className="text-xs bg-secondary/50 p-2 rounded border-l-2 border-secondary">
            <span className="font-medium text-secondary-foreground">Analogie :</span> {term.analogy}
          </div>
        )}
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

const Timeline = () => {
  const [openItems, setOpenItems] = useState<{[key: string]: boolean}>({});

  const toggleItem = (year: string) => {
    setOpenItems(prev => ({
      ...prev,
      [year]: !prev[year]
    }));
  };

  const renderTextWithTooltips = (text: string, technicalTerms?: Array<{term: string; explanation: string; example?: string; analogy?: string}>) => {
    if (!technicalTerms || technicalTerms.length === 0) {
      return text;
    }

    let result = text;
    const elements: React.ReactNode[] = [];
    let lastIndex = 0;

    // Sort terms by length (longest first) to avoid partial matches
    const sortedTerms = [...technicalTerms].sort((a, b) => b.term.length - a.term.length);

    sortedTerms.forEach((termObj, termIndex) => {
      const regex = new RegExp(`\\b${termObj.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
      let match;
      const newElements: React.ReactNode[] = [];
      let currentLastIndex = lastIndex;

      while ((match = regex.exec(result)) !== null) {
        // Add text before the match
        if (match.index > currentLastIndex) {
          newElements.push(result.slice(currentLastIndex, match.index));
        }

        // Add the tooltip component
        newElements.push(
          <TechnicalTermTooltip key={`${termIndex}-${match.index}`} term={termObj} />
        );

        currentLastIndex = match.index + match[0].length;
        
        // Replace the matched text with a placeholder to avoid re-matching
        result = result.slice(0, match.index) + '___REPLACED___' + result.slice(match.index + match[0].length);
        regex.lastIndex = match.index + '___REPLACED___'.length;
      }

      if (newElements.length > 0) {
        elements.push(...newElements);
        if (currentLastIndex < result.length) {
          elements.push(result.slice(currentLastIndex));
        }
        lastIndex = result.length;
      }
    });

    if (elements.length === 0) {
      return text;
    }

    // Clean up the replaced placeholders
    return elements.map((element, index) => {
      if (typeof element === 'string') {
        return element.replace(/___REPLACED___/g, '');
      }
      return element;
    });
  };

  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-primary/70 before:to-muted md:before:mx-auto md:before:ml-0">
      {timelineEvents.map((event, index) => (
        <motion.div 
          key={event.year} 
          className={`relative flex items-start md:justify-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="md:w-1/2 md:px-8">
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <Card className={`w-full ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} transform transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 border-2 hover:border-primary/30 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm`}>
                <CardHeader className="relative overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2">
                      <motion.h3 
                        className="text-lg font-bold text-foreground group-hover:text-primary transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        {renderTextWithTooltips(event.title, event.technicalTerms)}
                      </motion.h3>
                      <motion.span 
                        className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary ring-2 ring-primary/20 hover:ring-primary/40 transition-all"
                        whileHover={{ scale: 1.1, rotate: 2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {event.year}
                      </motion.span>
                    </div>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {renderTextWithTooltips(event.description, event.technicalTerms)}
                    </CardDescription>
                  </div>
                </CardHeader>
                
                {event.details && (
                  <Collapsible open={openItems[event.year]} onOpenChange={() => toggleItem(event.year)}>
                    <CollapsibleTrigger asChild>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="w-full flex justify-between hover:bg-primary/5 transition-all duration-200 border-t border-border/50"
                        >
                          <span className="font-medium">Plus de détails</span>
                          <motion.div
                            animate={{ rotate: openItems[event.year] ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronsUpDown className="h-4 w-4" />
                          </motion.div>
                        </Button>
                      </motion.div>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CardContent className="pt-4 bg-secondary/20 border-t border-border/30">
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {renderTextWithTooltips(event.details!, event.technicalTerms)}
                          </p>
                          {event.technicalTerms && event.technicalTerms.length > 0 && (
                            <div className="mt-4 p-3 bg-primary/5 rounded-lg border border-primary/20">
                              <h5 className="text-xs font-semibold text-primary mb-2 uppercase tracking-wide">
                                Concepts clés à retenir
                              </h5>
                              <div className="flex flex-wrap gap-2">
                                {event.technicalTerms.map((term, i) => (
                                  <TechnicalTermTooltip key={i} term={term} />
                                ))}
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </motion.div>
                    </CollapsibleContent>
                  </Collapsible>
                )}
              </Card>
            </motion.div>
          </div>
          
          <motion.div 
            className="absolute left-4 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80 text-white shadow-lg md:relative md:left-0 md:top-0 ring-4 ring-background"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
            >
              {event.icon}
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
