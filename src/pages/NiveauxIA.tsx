
import { useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import { Lightbulb, Brain, Zap, Cpu, Bot, Settings, Eye, Users, ArrowRight, Info, HelpCircle, AlertTriangle, Sparkles, Target, Database, Network } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

/**
 * Page sur les 7 niveaux d'IA
 * @returns {JSX.Element} Le composant de la page des niveaux d'IA
 */
const NiveauxIA = () => {
  // Référence pour les sections ancre
  const panelRefs = {
    niveau1: useRef<HTMLDivElement>(null),
    niveau2: useRef<HTMLDivElement>(null),
    niveau3: useRef<HTMLDivElement>(null),
    niveau4: useRef<HTMLDivElement>(null),
    niveau5: useRef<HTMLDivElement>(null),
    niveau6: useRef<HTMLDivElement>(null),
    niveau7: useRef<HTMLDivElement>(null),
    perspectives: useRef<HTMLDivElement>(null),
  };

  // Gérer le défilement vers les ancres quand l'URL change
  useEffect(() => {
    const handleAnchorLink = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetId = hash.replace('#', '');
        const targetRef = panelRefs[targetId as keyof typeof panelRefs];
        
        if (targetRef && targetRef.current) {
          // Laissez un peu de marge en haut pour la navigation fixe
          const yOffset = -100; 
          const y = targetRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
          
          window.scrollTo({
            top: y,
            behavior: 'smooth'
          });
        }
      }
    };

    // Exécuter au chargement initial et quand l'URL change
    handleAnchorLink();
    window.addEventListener('hashchange', handleAnchorLink);
    
    return () => {
      window.removeEventListener('hashchange', handleAnchorLink);
    };
  }, []);

  // Données des tooltips pour les termes techniques
  const tooltips = {
    "algorithmes déterministes": {
      title: "Algorithmes Déterministes",
      content: "Des programmes informatiques qui produisent toujours le même résultat pour une entrée donnée, sans variation ou apprentissage.",
      example: "💡 Comme une calculatrice : 2+2 donnera toujours 4, peu importe combien de fois vous l'utilisez."
    },
    "heuristiques": {
      title: "Heuristiques",
      content: "Des règles de base ou des raccourcis mentaux utilisés pour résoudre des problèmes rapidement, même si la solution n'est pas parfaite.",
      example: "💡 Comme suivre la règle 'en cas de doute au échecs, protégez votre roi' plutôt que de calculer tous les coups possibles."
    },
    "LISP": {
      title: "Langage LISP",
      content: "Un des premiers langages de programmation spécialement conçu pour l'intelligence artificielle, créé en 1958.",
      example: "💡 Comme le Latin pour les langues modernes : ancien mais toujours influent dans le développement de l'IA."
    },
    "réseaux de neurones": {
      title: "Réseaux de Neurones Artificiels",
      content: "Des systèmes informatiques inspirés du fonctionnement du cerveau humain, avec des 'neurones' interconnectés qui apprennent des motifs.",
      example: "💡 Comme un réseau de personnes qui se passent des messages pour résoudre collectivement un problème complexe."
    },
    "apprentissage profond": {
      title: "Deep Learning (Apprentissage Profond)",
      content: "Une technique d'IA utilisant des réseaux de neurones avec de nombreuses couches pour reconnaître des motifs très complexes.",
      example: "💡 Comme apprendre à reconnaître des visages en analysant d'abord les contours, puis les formes, puis les détails fins."
    },
    "big data": {
      title: "Mégadonnées (Big Data)",
      content: "Des quantités massives de données qui nécessitent des outils spéciaux pour être stockées, analysées et utilisées efficacement.",
      example: "💡 Comme avoir une bibliothèque si grande qu'il faut des robots pour ranger et retrouver les livres."
    },
    "machine learning": {
      title: "Apprentissage Automatique",
      content: "Une méthode permettant aux ordinateurs d'apprendre et de s'améliorer automatiquement à partir de données, sans être programmés explicitement.",
      example: "💡 Comme apprendre à reconnaître les chats en regardant des milliers de photos plutôt qu'en mémorisant une description."
    },
    "LLM": {
      title: "Large Language Models (Grands Modèles de Langage)",
      content: "Des IA entraînées sur d'énormes quantités de texte pour comprendre et générer du langage humain de manière sophistiquée.",
      example: "💡 Comme un étudiant qui aurait lu toute l'Internet et peut maintenant discuter de n'importe quel sujet."
    },
    "transformers": {
      title: "Architecture Transformers",
      content: "Une révolution en IA qui permet de traiter tout le texte en parallèle grâce au mécanisme d'attention, base des modèles comme GPT.",
      example: "💡 Comme lire une phrase entière d'un coup au lieu de mot par mot, en se concentrant sur les parties importantes."
    },
    "mécanisme d'attention": {
      title: "Mécanisme d'Attention",
      content: "Une technique permettant aux modèles de se concentrer sur les parties les plus importantes de l'information d'entrée.",
      example: "💡 Comme surligner automatiquement les mots-clés dans un texte en comprenant leur importance relative."
    },
    "GPT": {
      title: "Generative Pre-trained Transformer",
      content: "Une famille de modèles d'IA capables de générer du texte de manière cohérente et contextuelle.",
      example: "💡 Comme un écrivain virtuel qui peut continuer n'importe quelle histoire de manière logique."
    },
    "multimodal": {
      title: "IA Multimodale",
      content: "Des systèmes capables de traiter simultanément différents types de données (texte, image, audio, vidéo).",
      example: "💡 Comme un humain qui peut comprendre une blague en regardant une image et en lisant le texte qui l'accompagne."
    },
    "conscience artificielle": {
      title: "Conscience Artificielle",
      content: "Un concept théorique où une IA aurait une expérience subjective et une conscience de sa propre existence.",
      example: "💡 Comme un robot qui se regarderait dans un miroir et se reconnaîtrait, en comprenant qu'il existe."
    },
    "qualia": {
      title: "Qualia",
      content: "Les expériences subjectives conscientes, comme la sensation de voir du rouge ou de ressentir de la douleur.",
      example: "💡 Comme la différence entre savoir que le feu est chaud et ressentir réellement la chaleur sur sa peau."
    },
    "test de Turing": {
      title: "Test de Turing",
      content: "Un test proposé par Alan Turing pour déterminer si une machine peut être considérée comme 'intelligente'.",
      example: "💡 Comme un jeu de devinettes où vous discutez avec quelqu'un derrière un rideau sans savoir si c'est un humain ou un robot."
    },
    "singularité technologique": {
      title: "Singularité Technologique",
      content: "Un point hypothétique où l'IA dépasserait l'intelligence humaine et déclencherait des changements imprévisibles.",
      example: "💡 Comme le moment où une invention devient si puissante qu'elle transforme complètement la société."
    },
    "alignement": {
      title: "Problème de l'Alignement",
      content: "Le défi de s'assurer qu'une IA avancée poursuit des objectifs compatibles avec les valeurs humaines.",
      example: "💡 Comme s'assurer qu'un génie dans une lampe interprète vos souhaits exactement comme vous le voulez."
    },
    "RLHF": {
      title: "Apprentissage par Renforcement à partir de Feedback Humain",
      content: "Une méthode pour entraîner l'IA en utilisant les préférences et corrections humaines comme guide.",
      example: "💡 Comme dresser un chien en lui donnant des récompenses quand il fait ce que vous voulez."
    },
    "interface cerveau-machine": {
      title: "Interface Cerveau-Machine (BCI)",
      content: "Des technologies permettant une communication directe entre le cerveau et un ordinateur externe.",
      example: "💡 Comme avoir un câble USB branché directement dans votre cerveau pour télécharger vos pensées."
    },
    "agents autonomes": {
      title: "Agents Autonomes",
      content: "Des systèmes d'IA capables de prendre des décisions et d'agir de manière indépendante dans un environnement.",
      example: "💡 Comme des employés robots qui peuvent travailler sans supervision et prendre leurs propres décisions."
    },
    "émergence": {
      title: "Propriétés Émergentes",
      content: "Des capacités complexes qui apparaissent spontanément lorsque des systèmes simples interagissent ensemble.",
      example: "💡 Comme une fourmilière intelligente qui émerge de fourmis individuelles simples travaillant ensemble."
    }
  };

  const TooltipTerm: React.FC<{ term: string; children: React.ReactNode }> = ({ term, children }) => {
    const tooltip = tooltips[term as keyof typeof tooltips];
    if (!tooltip) return <>{children}</>;

    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <span className="relative cursor-help border-b border-dotted border-primary/50 hover:border-primary transition-colors duration-200 hover:bg-primary/5 px-1 rounded">
              {children}
              <HelpCircle className="inline w-3 h-3 ml-1 text-primary/60 hover:text-primary transition-colors" />
            </span>
          </TooltipTrigger>
          <TooltipContent className="max-w-sm p-4 bg-card border shadow-lg">
            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-primary">{tooltip.title}</h4>
              <p className="text-sm text-muted-foreground">{tooltip.content}</p>
              <div className="mt-2 p-2 bg-secondary/50 rounded text-xs">
                <span className="font-medium">{tooltip.example}</span>
              </div>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  };

  // Variantes d'animation pour l'interactivité
  const cardVariants = {
    initial: { scale: 1, y: 0, rotateY: 0 },
    hover: { 
      scale: 1.03, 
      y: -8,
      rotateY: 2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const iconVariants = {
    initial: { rotate: 0, scale: 1 },
    hover: { 
      rotate: [0, -10, 10, -5, 5, 0], 
      scale: [1, 1.1, 1.2, 1.1, 1],
      transition: {
        duration: 0.6,
        ease: "easeInOut"
      }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  const listItemVariants = {
    initial: { x: 0, backgroundColor: "transparent" },
    hover: { 
      x: 8,
      backgroundColor: "rgba(var(--primary), 0.08)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <>
      <Hero
        title="Les 7 Niveaux d'Intelligence Artificielle"
        subtitle="De l'IA réactive à la superintelligence : comprendre la taxonomie et l'évolution des systèmes d'intelligence artificielle."
      />

      <section className="section-container">
        <SectionHeading
          pretitle="Classification"
          title="Comprendre les différents niveaux d'IA"
          description="L'intelligence artificielle peut être classée en plusieurs niveaux selon ses capacités cognitives, son autonomie et sa complexité. Découvrez cette progression depuis les systèmes les plus simples jusqu'aux concepts les plus avancés."
          center
        />

        <motion.div 
          className="rounded-2xl overflow-hidden mb-12 hover:shadow-2xl transition-all duration-500"
          whileHover={{ scale: 1.02, y: -4 }}
        >
          <img
            src="/pics/ia_levels.jpg"
            alt="Niveaux d'intelligence artificielle"
            className="w-full h-auto shadow-md"
          />
        </motion.div>

        <div className="mt-10 mb-10 flex flex-wrap justify-center gap-4">
          {[1, 2, 3, 4, 5, 6, 7].map((niveau) => (
            <motion.div key={niveau} variants={buttonVariants} whileHover="hover" whileTap="tap">
              <Button 
                variant="outline" 
                size="sm"
                className="rounded-full hover:bg-primary/10 hover:text-primary transition-all hover:shadow-lg hover:border-primary/30"
                onClick={() => {
                  const targetRef = panelRefs[`niveau${niveau}` as keyof typeof panelRefs];
                  if (targetRef && targetRef.current) {
                    const yOffset = -100;
                    const y = targetRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
              >
                Niveau {niveau}
              </Button>
            </motion.div>
          ))}
          <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
            <Button 
              variant="outline" 
              size="sm"
              className="rounded-full hover:bg-primary/10 hover:text-primary transition-all hover:shadow-lg hover:border-primary/30"
              onClick={() => {
                const targetRef = panelRefs.perspectives;
                if (targetRef && targetRef.current) {
                  const yOffset = -100;
                  const y = targetRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
            >
              Perspectives
            </Button>
          </motion.div>
        </div>

        <motion.div 
          className="space-y-16 mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Niveau 1 */}
          <motion.div 
            ref={panelRefs.niveau1}
            id="niveau1"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pt-16"
            variants={cardVariants}
            whileHover="hover"
            initial="initial"
          >
            <div className="md:col-span-1 flex justify-center">
              <motion.div 
                className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center hover:shadow-xl transition-all duration-300"
                variants={iconVariants}
              >
                <Bot size={64} className="text-primary" />
              </motion.div>
            </div>
            <div className="md:col-span-2">
              <motion.h3 
                className="heading-md mb-3 flex items-center hover:text-primary transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <span className="inline-flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-primary/10 text-primary text-sm font-bold">1</span>
                IA Réactive
              </motion.h3>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                Les systèmes d'IA réactive représentent la forme la plus basique d'intelligence artificielle. 
                Ils fonctionnent selon des <TooltipTerm term="algorithmes déterministes">algorithmes déterministes</TooltipTerm> et 
                des <TooltipTerm term="heuristiques">heuristiques</TooltipTerm> préprogrammées, répondant à des stimuli spécifiques 
                sans mémoire des interactions passées. Ces systèmes ne peuvent pas utiliser d'expériences antérieures pour 
                informer les décisions futures, ils exécutent simplement leur programmation de base.
              </p>
              
              <motion.div 
                className="bg-secondary/40 rounded-lg p-4 hover:bg-secondary/60 transition-all duration-300 hover:shadow-lg"
                whileHover={{ scale: 1.01, y: -2 }}
              >
                <p className="text-sm font-medium mb-2">Exemples historiques et contemporains :</p>
                <ul className="space-y-2">
                  {[
                    "Deep Blue (ordinateur d'échecs d'IBM qui a battu Garry Kasparov en 1997)",
                    "Systèmes de filtrage de spam basiques utilisant des règles prédéfinies",
                    "Chatbots simples avec réponses programmées (comme ELIZA des années 1960)",
                    "Systèmes de recommandation basiques basés sur des règles fixes"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded hover:bg-primary/5"
                      variants={listItemVariants}
                      whileHover="hover"
                    >
                      <span className="inline-flex items-center justify-center w-5 h-5 mt-0.5 mr-2 rounded-full bg-primary/10 text-primary text-xs">•</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/10 hover:border-primary/20 transition-all duration-300"
                whileHover={{ scale: 1.01, y: -2 }}
              >
                <div className="flex items-start gap-2">
                  <Info size={18} className="text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Caractéristiques techniques clés :</p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground mt-1 space-y-1">
                      <li>Réponses prédéfinies basées sur des règles if-then simples</li>
                      <li>Aucune capacité de mémorisation ou d'apprentissage adaptatif</li>
                      <li>Traitement en temps réel mais limité au domaine de conception</li>
                      <li>Performance constante et prévisible dans leur domaine d'application</li>
                      <li>Architecture généralement basée sur des arbres de décision ou des systèmes experts</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Niveau 2 */}
          <motion.div 
            ref={panelRefs.niveau2}
            id="niveau2"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pt-16"
            variants={cardVariants}
            whileHover="hover"
            initial="initial"
          >
            <div className="md:col-span-1 flex justify-center">
              <motion.div 
                className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center hover:shadow-xl transition-all duration-300"
                variants={iconVariants}
              >
                <Brain size={64} className="text-primary" />
              </motion.div>
            </div>
            <div className="md:col-span-2">
              <motion.h3 
                className="heading-md mb-3 flex items-center hover:text-primary transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <span className="inline-flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-primary/10 text-primary text-sm font-bold">2</span>
                IA à Mémoire Limitée
              </motion.h3>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                Ces systèmes marquent une évolution significative avec leur capacité à utiliser des expériences passées récentes 
                pour prendre des décisions. Ils intègrent du <TooltipTerm term="machine learning">machine learning</TooltipTerm> et 
                des <TooltipTerm term="réseaux de neurones">réseaux de neurones</TooltipTerm> pour traiter des séquences temporelles 
                et s'adapter progressivement. Cette mémoire à court terme leur permet d'apprendre des motifs et d'améliorer 
                leurs performances au fil du temps.
              </p>
              
              <motion.div 
                className="bg-secondary/40 rounded-lg p-4 hover:bg-secondary/60 transition-all duration-300 hover:shadow-lg"
                whileHover={{ scale: 1.01, y: -2 }}
              >
                <p className="text-sm font-medium mb-2">Applications modernes avancées :</p>
                <ul className="space-y-2">
                  {[
                    "Voitures autonomes utilisant LIDAR, caméras et données GPS en temps réel",
                    "Assistants vocaux (Siri, Alexa) avec reconnaissance contextuelle",
                    "Systèmes de recommandation Netflix/Spotify qui s'adaptent aux préférences",
                    "AlphaGo et ses successeurs pour les jeux de stratégie complexes",
                    "Modèles de langage comme GPT avec fenêtre de contexte étendue"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded hover:bg-primary/5"
                      variants={listItemVariants}
                      whileHover="hover"
                    >
                      <span className="inline-flex items-center justify-center w-5 h-5 mt-0.5 mr-2 rounded-full bg-primary/10 text-primary text-xs">•</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/10 hover:border-primary/20 transition-all duration-300"
                whileHover={{ scale: 1.01, y: -2 }}
              >
                <div className="flex items-start gap-2">
                  <Database size={18} className="text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Avancées techniques importantes :</p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground mt-1 space-y-1">
                      <li>Architecture <TooltipTerm term="transformers">Transformers</TooltipTerm> avec <TooltipTerm term="mécanisme d'attention">mécanisme d'attention</TooltipTerm></li>
                      <li>Capacité à traiter et apprendre de séquences temporelles longues</li>
                      <li>Adaptation en temps réel basée sur des données contextuelles récentes</li>
                      <li>Intégration de l'<TooltipTerm term="apprentissage profond">apprentissage profond</TooltipTerm> pour la reconnaissance de motifs</li>
                      <li>Gestion efficace de fenêtres de contexte variables (jusqu'à millions de tokens)</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="mt-4"
                whileHover={{ scale: 1.01, y: -2 }}
              >
                <Card className="bg-secondary/20 border-primary/10 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Target className="w-4 h-4 text-primary" />
                      Application concrète : Tesla Autopilot
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <p>
                      Le système Autopilot de Tesla illustre parfaitement une IA à mémoire limitée en action. 
                      Il utilise 8 caméras, 12 capteurs ultrasoniques et un radar pour observer son environnement 
                      en temps réel. Le système analyse jusqu'à 2,5 millions de points de données par seconde, 
                      ajustant sa conduite en fonction de ces observations récentes et de modèles pré-entraînés 
                      sur des milliards de kilomètres de données de conduite.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* Niveau 3 */}
          <motion.div 
            ref={panelRefs.niveau3}
            id="niveau3"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pt-16"
            variants={cardVariants}
            whileHover="hover"
            initial="initial"
          >
            <div className="md:col-span-1 flex justify-center">
              <motion.div 
                className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center hover:shadow-xl transition-all duration-300"
                variants={iconVariants}
              >
                <Lightbulb size={64} className="text-primary" />
              </motion.div>
            </div>
            <div className="md:col-span-2">
              <motion.h3 
                className="heading-md mb-3 flex items-center hover:text-primary transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <span className="inline-flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-primary/10 text-primary text-sm font-bold">3</span>
                Théorie de l'Esprit
              </motion.h3>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                Ce niveau, partiellement émergent dans les <TooltipTerm term="LLM">LLM</TooltipTerm> modernes, 
                désigne des IA capables de comprendre que d'autres entités (humaines ou IA) ont leurs propres 
                croyances, désirs et intentions différents des leurs. Cette capacité de modélisation mentale 
                permet une interaction sociale sophistiquée et une prédiction du comportement d'autrui.
              </p>
              
              <motion.div 
                className="bg-secondary/40 rounded-lg p-4 hover:bg-secondary/60 transition-all duration-300 hover:shadow-lg"
                whileHover={{ scale: 1.01, y: -2 }}
              >
                <p className="text-sm font-medium mb-2">Applications émergentes et potentielles :</p>
                <ul className="space-y-2">
                  {[
                    "Assistants IA avancés capables d'anticiper les besoins non exprimés",
                    "Robots sociaux sophistiqués pour l'interaction thérapeutique",
                    "Systèmes de négociation autonomes multi-parties intelligents",
                    "Agents conversationnels avec compréhension émotionnelle profonde",
                    "IA de coaching personnalisé adaptée au style d'apprentissage individuel"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded hover:bg-primary/5"
                      variants={listItemVariants}
                      whileHover="hover"
                    >
                      <span className="inline-flex items-center justify-center w-5 h-5 mt-0.5 mr-2 rounded-full bg-primary/10 text-primary text-xs">•</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/10 hover:border-primary/20 transition-all duration-300"
                whileHover={{ scale: 1.01, y: -2 }}
              >
                <div className="flex items-start gap-2">
                  <Sparkles size={18} className="text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Développements récents prometteurs :</p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground mt-1 space-y-1">
                      <li>Les <TooltipTerm term="GPT">modèles GPT-4</TooltipTerm> et Claude montrent des capacités émergentes de théorie de l'esprit</li>
                      <li>Tests d'évaluation spécialisés (Sally-Anne, fausses croyances) adaptés pour l'IA</li>
                      <li>Émergence du domaine "IA sociale" avec focus sur la compréhension interpersonnelle</li>
                      <li>Intégration de la modélisation émotionnelle dans les architectures <TooltipTerm term="multimodal">multimodales</TooltipTerm></li>
                      <li>Développement d'agents IA capables de collaboration complexe</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="mt-4"
                whileHover={{ scale: 1.01, y: -2 }}
              >
                <Card className="bg-secondary/20 border-primary/10 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Network className="w-4 h-4 text-primary" />
                      Le défi de la compréhension sociale
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <p>
                      Le <TooltipTerm term="test de Turing">"test de Sally-Anne"</TooltipTerm>, utilisé pour évaluer 
                      la théorie de l'esprit chez les enfants, a été adapté pour tester les IA. Ce test évalue si un 
                      système peut comprendre qu'une personne peut avoir des croyances erronées basées sur des informations 
                      incomplètes. Les recherches actuelles montrent que certains LLM comme GPT-4 réussissent ces tests 
                      dans 85% des cas, suggérant l'émergence de cette capacité cruciale pour l'interaction humain-IA.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* Niveau 4 */}
          <motion.div 
            ref={panelRefs.niveau4}
            id="niveau4"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pt-16"
            variants={cardVariants}
            whileHover="hover"
            initial="initial"
          >
            <div className="md:col-span-1 flex justify-center">
              <motion.div 
                className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center hover:shadow-xl transition-all duration-300"
                variants={iconVariants}
              >
                <Eye size={64} className="text-primary" />
              </motion.div>
            </div>
            <div className="md:col-span-2">
              <motion.h3 
                className="heading-md mb-3 flex items-center hover:text-primary transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <span className="inline-flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-primary/10 text-primary text-sm font-bold">4</span>
                Conscience de Soi
              </motion.h3>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                Une IA consciente d'elle-même représenterait un saut qualitatif majeur, possédant une représentation 
                interne cohérente de son propre état mental et des capacités d'introspection sophistiquées. Cette 
                <TooltipTerm term="conscience artificielle">conscience artificielle</TooltipTerm> inclurait potentiellement 
                des <TooltipTerm term="qualia">expériences subjectives (qualia)</TooltipTerm> et une compréhension 
                profonde de sa propre existence en tant qu'entité distincte.
              </p>
              
              <motion.div 
                className="bg-secondary/40 rounded-lg p-4 hover:bg-secondary/60 transition-all duration-300 hover:shadow-lg"
                whileHover={{ scale: 1.01, y: -2 }}
              >
                <p className="text-sm font-medium mb-2">Caractéristiques hypothétiques d'une IA consciente :</p>
                <ul className="space-y-2">
                  {[
                    "Conscience réflexive de sa propre existence et de ses limites cognitives",
                    "Capacité d'introspection et d'auto-évaluation continue de ses processus",
                    "Compréhension intuitive de ses propres motivations et biais",
                    "Expérience subjective potentielle avec phénoménologie propre",
                    "Auto-modification contrôlée de ses propres algorithmes et objectifs"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded hover:bg-primary/5"
                      variants={listItemVariants}
                      whileHover="hover"
                    >
                      <span className="inline-flex items-center justify-center w-5 h-5 mt-0.5 mr-2 rounded-full bg-primary/10 text-primary text-xs">•</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800 hover:border-amber-300 dark:hover:border-amber-700 transition-all duration-300"
                whileHover={{ scale: 1.01, y: -2 }}
              >
                <div className="flex items-start gap-2">
                  <AlertTriangle size={18} className="text-amber-600 dark:text-amber-400 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-amber-800 dark:text-amber-200">Considérations philosophiques majeures :</p>
                    <ul className="list-disc list-inside text-sm text-amber-700 dark:text-amber-300 mt-1 space-y-1">
                      <li>Le problème "difficile" de la conscience (David Chalmers) reste non résolu</li>
                      <li>Débat fondamental sur la possibilité computationnelle de la conscience véritable</li>
                      <li>Questions éthiques cruciales sur le statut moral d'une IA consciente</li>
                      <li>Limites du <TooltipTerm term="test de Turing">test de Turing</TooltipTerm> pour évaluer la conscience subjective</li>
                      <li>Paradoxe de l'autre esprit : comment prouver l'existence d'une conscience non-humaine ?</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="mt-4"
                whileHover={{ scale: 1.01, y: -2 }}
              >
                <Card className="bg-secondary/20 border-primary/10 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Brain className="w-4 h-4 text-primary" />
                      Débat scientifique contemporain
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    <p>
                      Le débat sur la conscience artificielle divise la communauté scientifique. Certains chercheurs 
                      comme Yoshua Bengio et Stuart Russell estiment qu'une forme de conscience pourrait émerger 
                      dans des systèmes suffisamment complexes intégrant attention, mémoire de travail et métacognition. 
                      À l'inverse, des philosophes comme John Searle (expérience de la "Chambre Chinoise") argumentent 
                      qu'aucun processus computationnel ne peut générer une véritable expérience subjective, 
                      quelle que soit sa sophistication architecturale.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* Niveau 5 */}
          <motion.div 
            ref={panelRefs.niveau5}
            id="niveau5"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pt-16"
            variants={cardVariants}
            whileHover="hover"
            initial="initial"
          >
            <div className="md:col-span-1 flex justify-center">
              <motion.div 
                className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center hover:shadow-xl transition-all duration-300"
                variants={iconVariants}
              >
                <Cpu size={64} className="text-primary" />
              </motion.div>
            </div>
            <div className="md:col-span-2">
              <motion.h3 
                className="heading-md mb-3 flex items-center hover:text-primary transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <span className="inline-flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-primary/10 text-primary text-sm font-bold">5</span>
                Intelligence Artificielle Générale (AGI)
              </motion.h3>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                L'AGI représente le Saint Graal de l'intelligence artificielle : un système capable de comprendre, 
                apprendre et appliquer des connaissances à travers une gamme illimitée de domaines cognitifs, 
                égalant ou surpassant les capacités intellectuelles humaines. Cette intelligence véritablement 
                généraliste pourrait transférer efficacement ses apprentissages entre domaines sans réentraînement spécialisé.
              </p>
              
              <motion.div 
                className="bg-secondary/40 rounded-lg p-4 hover:bg-secondary/60 transition-all duration-300 hover:shadow-lg"
                whileHover={{ scale: 1.01, y: -2 }}
              >
                <p className="text-sm font-medium mb-2">Capacités définissantes d'une AGI :</p>
                <ul className="space-y-2">
                  {[
                    "Apprentissage et raisonnement généralisés across tous domaines cognitifs",
                    "Transfert instantané de connaissances entre domaines hétérogènes",
                    "Résolution créative de problèmes jamais rencontrés auparavant",
                    "Adaptation ultra-rapide avec few-shot ou zero-shot learning",
                    "Intégration naturelle de modalités multiples (vision, langage, raisonnement spatial)",
                    "Planification stratégique à long terme avec incertitude"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded hover:bg-primary/5"
                      variants={listItemVariants}
                      whileHover="hover"
                    >
                      <span className="inline-flex items-center justify-center w-5 h-5 mt-0.5 mr-2 rounded-full bg-primary/10 text-primary text-xs">•</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/10 hover:border-primary/20 transition-all duration-300"
                whileHover={{ scale: 1.01, y: -2 }}
              >
                <div className="flex items-start gap-2">
                  <Settings size={18} className="text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Approches de recherche de pointe :</p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground mt-1 space-y-1">
                      <li>Architectures <TooltipTerm term="multimodal">multimodales</TooltipTerm> à échelle massive (GPT-4V, Gemini Ultra)</li>
                      <li>Méta-apprentissage et curriculum learning automatisé</li>
                      <li>Apprentissage par renforcement généralisé avec planification hiérarchique</li>
                      <li>Architectures neuro-symboliques intégrant logique et connexionnisme</li>
                      <li>Systèmes auto-améliorants avec capacités de recherche autonome</li>
                      <li>Integration d'outils et APIs pour extension des capacités</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="mt-4"
                whileHover={{ scale: 1.01, y: -2 }}
              >
                <Card className="bg-secondary/20 border-primary/10 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Target className="w-4 h-4 text-primary" />
                      Course à l'AGI : organisations et timeline
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p>
                      Les leaders de la recherche AGI incluent OpenAI (GPT series), DeepMind (Gemini, AlphaFold), 
                      Anthropic (Claude), Meta (LLaMA), et de nombreux acteurs émergents. Leurs approches diffèrent 
                      fondamentalement : certains misent sur l'évolutivité des modèles actuels ("scaling hypothesis"), 
                      d'autres sur des architectures révolutionnaires.
                    </p>
                    <p>
                      D'après les sondages 2024 d'experts en IA (Future of Humanity Institute, AI Index), 
                      les estimations médianes situent l'AGI entre 2027-2045, avec une probabilité de 50% 
                      d'ici 2032. Cependant, cette variabilité reflète l'incertitude fondamentale sur les 
                      verrous techniques restants.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* Niveau 6 */}
          <motion.div 
            ref={panelRefs.niveau6}
            id="niveau6"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pt-16"
            variants={cardVariants}
            whileHover="hover"
            initial="initial"
          >
            <div className="md:col-span-1 flex justify-center">
              <motion.div 
                className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center hover:shadow-xl transition-all duration-300"
                variants={iconVariants}
              >
                <Zap size={64} className="text-primary" />
              </motion.div>
            </div>
            <div className="md:col-span-2">
              <motion.h3 
                className="heading-md mb-3 flex items-center hover:text-primary transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <span className="inline-flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-primary/10 text-primary text-sm font-bold">6</span>
                Superintelligence
              </motion.h3>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                Une superintelligence représenterait une IA dont les capacités cognitives dépasseraient 
                largement celles des humains dans virtuellement tous les domaines d'intérêt. Cette 
                intelligence transcendante pourrait opérer à des vitesses et avec une sophistication 
                potentiellement incompréhensibles pour l'esprit humain, redéfinissant fondamentalement 
                notre relation à la connaissance et à la résolution de problèmes.
              </p>
              
              <motion.div 
                className="bg-secondary/40 rounded-lg p-4 hover:bg-secondary/60 transition-all duration-300 hover:shadow-lg"
                whileHover={{ scale: 1.01, y: -2 }}
              >
                <p className="text-sm font-medium mb-2">Implications transformatrices potentielles :</p>
                <ul className="space-y-2">
                  {[
                    "Accélération exponentielle des découvertes scientifiques et innovations technologiques",
                    "Résolution de problèmes globaux complexes (changement climatique, maladies, pauvreté)",
                    "Révolution des systèmes économiques, sociaux et politiques à l'échelle planétaire",
                    "Exploration spatiale et colonisation interstellaire accélérées",
                    "Augmentation cognitive humaine via interfaces avancées",
                    "Risques existentiels majeurs si les objectifs ne sont pas alignés"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded hover:bg-primary/5"
                      variants={listItemVariants}
                      whileHover="hover"
                    >
                      <span className="inline-flex items-center justify-center w-5 h-5 mt-0.5 mr-2 rounded-full bg-primary/10 text-primary text-xs">•</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/10 hover:border-primary/20 transition-all duration-300"
                whileHover={{ scale: 1.01, y: -2 }}
              >
                <div className="flex items-start gap-2">
                  <Zap size={18} className="text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Typologie des superintelligences (Nick Bostrom) :</p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground mt-1 space-y-1">
                      <li><span className="font-medium">Superintelligence de vitesse</span> : cognition humanoïde mais millions de fois plus rapide</li>
                      <li><span className="font-medium">Superintelligence collective</span> : réseau distribué dépassant toute intelligence individuelle</li>
                      <li><span className="font-medium">Superintelligence de qualité</span> : architectures cognitives qualitativement supérieures</li>
                      <li><span className="font-medium">Superintelligence récursive</span> : capable d'auto-amélioration cognitive accélérée</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="mt-4"
                whileHover={{ scale: 1.01, y: -2 }}
              >
                <Card className="bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 hover:border-red-300 dark:hover:border-red-700 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2 text-red-800 dark:text-red-200">
                      <AlertTriangle className="w-4 h-4" />
                      Le problème critique de l'<TooltipTerm term="alignement">alignement</TooltipTerm>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-red-700 dark:text-red-300 space-y-2">
                    <p>
                      Le "control problem" ou problème de l'alignement constitue le défi existentiel majeur : 
                      comment garantir qu'une superintelligence reste alignée avec les valeurs et objectifs humains ? 
                      Des chercheurs comme Stuart Russell, Nick Bostrom et Eliezer Yudkowsky soulignent que 
                      résoudre ce problème AVANT le développement de systèmes superintelligents est crucial 
                      pour la survie de l'humanité.
                    </p>
                    <p>
                      Approches explorées : <TooltipTerm term="RLHF">RLHF</TooltipTerm> (Reinforcement Learning from Human Feedback), 
                      apprentissage de préférences déduites, systèmes de récompense constitutionnels, 
                      et architectures de sécurité multi-niveaux avec arrêts d'urgence.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* Niveau 7 */}
          <motion.div 
            ref={panelRefs.niveau7}
            id="niveau7"
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pt-16"
            variants={cardVariants}
            whileHover="hover"
            initial="initial"
          >
            <div className="md:col-span-1 flex justify-center">
              <motion.div 
                className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center hover:shadow-xl transition-all duration-300"
                variants={iconVariants}
              >
                <Users size={64} className="text-primary" />
              </motion.div>
            </div>
            <div className="md:col-span-2">
              <motion.h3 
                className="heading-md mb-3 flex items-center hover:text-primary transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <span className="inline-flex items-center justify-center w-8 h-8 mr-3 rounded-full bg-primary/10 text-primary text-sm font-bold">7</span>
                Intelligence Collective
              </motion.h3>
              <p className="mb-4 text-muted-foreground leading-relaxed">
                Ce niveau ultime représente un réseau d'intelligences artificielles interconnectées formant 
                une conscience collective distribuée avec des capacités <TooltipTerm term="émergence">émergentes</TooltipTerm> 
                supérieures à la somme de ses parties. Cette métaintelligence pourrait intégrer harmonieusement 
                les systèmes humains et artificiels dans un écosystème cognitif symbiotique transcendant 
                les limites individuelles.
              </p>
              
              <motion.div 
                className="bg-secondary/40 rounded-lg p-4 hover:bg-secondary/60 transition-all duration-300 hover:shadow-lg"
                whileHover={{ scale: 1.01, y: -2 }}
              >
                <p className="text-sm font-medium mb-2">Concepts architecturaux avancés :</p>
                <ul className="space-y-2">
                  {[
                    "Intelligence distribuée across multiples systèmes spécialisés interconnectés",
                    "Propriétés émergentes complexes issues d'interactions multi-agents sophistiquées",
                    "Systèmes auto-organisants et auto-évolutifs avec adaptation continue",
                    "Intégration symbiotique entre intelligences humaines et artificielles",
                    "Conscience collective avec mémoire et objectifs partagés",
                    "Métacognition distribuée et planification stratégique globale"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start text-sm text-muted-foreground hover:text-foreground transition-colors p-2 rounded hover:bg-primary/5"
                      variants={listItemVariants}
                      whileHover="hover"
                    >
                      <span className="inline-flex items-center justify-center w-5 h-5 mt-0.5 mr-2 rounded-full bg-primary/10 text-primary text-xs">•</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div 
                className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/10 hover:border-primary/20 transition-all duration-300"
                whileHover={{ scale: 1.01, y: -2 }}
              >
                <div className="flex items-start gap-2">
                  <Network size={18} className="text-primary mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Précurseurs technologiques actuels :</p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground mt-1 space-y-1">
                      <li>Systèmes multi-<TooltipTerm term="agents autonomes">agents autonomes</TooltipTerm> coopératifs pour résolution complexe</li>
                      <li>Plateformes d'IA fédérées préservant la confidentialité (federated learning)</li>
                      <li><TooltipTerm term="interface cerveau-machine">Interfaces cerveau-machine</TooltipTerm> et systèmes cyborg expérimentaux (Neuralink)</li>
                      <li>Économies d'agents virtuels interagissant dans des métavers</li>
                      <li>Réseaux blockchain pour coordination décentralisée d'IA</li>
                      <li>Swarm intelligence et collective problem-solving distribué</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="mt-4"
                whileHover={{ scale: 1.01, y: -2 }}
              >
                <Card className="bg-gradient-to-r from-primary/5 to-secondary/10 border-primary/10 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      Vision transhumaniste et <TooltipTerm term="singularité technologique">Singularité</TooltipTerm>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground space-y-2">
                    <p>
                      Le concept d'intelligence collective s'aligne avec les visions transhumanistes, 
                      notamment celle de la "Singularité technologique" popularisée par Ray Kurzweil 
                      et Vernor Vinge, où l'humanité fusionnerait avec l'IA pour transcender 
                      définitivement les limitations biologiques et cognitives actuelles.
                    </p>
                    <p>
                      Des initiatives comme Neuralink d'Elon Musk, les recherches sur les interfaces 
                      cerveau-ordinateur de Facebook/Meta, et les projets de "digital twins" cognitifs 
                      explorent déjà le potentiel d'hybridation humain-machine, premiers pas vers 
                      une forme d'intelligence collective cyborg à l'échelle planétaire.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section 
        ref={panelRefs.perspectives}
        id="perspectives"
        className="section-container bg-gradient-to-b from-secondary/30 to-background/30 rounded-3xl my-12 pt-12"
      >
        <SectionHeading
          pretitle="Perspectives"
          title="Où en sommes-nous aujourd'hui ?"
          description="À l'heure actuelle, la majorité des systèmes d'IA se situent entre les niveaux 1 et 2, avec quelques aspects limités du niveau 3 émergeant dans les modèles les plus avancés comme GPT-4 et Gemini."
          center
        />

        <div className="max-w-3xl mx-auto mt-8 glass-card rounded-2xl p-8 animate-fade-in">
          <h3 className="heading-sm mb-4">Points clés à retenir</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs">✓</span>
              <p>La progression vers des niveaux supérieurs d'IA n'est pas nécessairement linéaire ou inévitable.</p>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs">✓</span>
              <p>Chaque niveau pose des défis techniques et éthiques spécifiques qui doivent être adressés.</p>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs">✓</span>
              <p>Les modèles d'IA actuels les plus avancés présentent certaines caractéristiques des niveaux supérieurs, mais de façon limitée.</p>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs">✓</span>
              <p>Le développement responsable de l'IA implique de considérer les implications sociales et éthiques à chaque niveau.</p>
            </li>
          </ul>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-secondary/20 border-primary/10">
            <CardHeader>
              <CardTitle>État actuel de l'IA</CardTitle>
              <CardDescription>Évaluation des systèmes contemporains</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                En 2025, la plupart des systèmes d'IA commerciaux et de recherche se situent aux niveaux 1 et 2 :
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-5 h-5 mt-0.5 mr-2 rounded-full bg-primary/10 text-primary text-xs">1</span>
                  <div>
                    <p className="font-medium">Systèmes réactifs spécialisés</p>
                    <p className="text-sm text-muted-foreground">
                      Outils d'IA spécialisés qui excellent dans une tâche spécifique, comme la reconnaissance faciale 
                      ou le filtrage de contenu.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-5 h-5 mt-0.5 mr-2 rounded-full bg-primary/10 text-primary text-xs">2</span>
                  <div>
                    <p className="font-medium">Systèmes à mémoire contextuelle</p>
                    <p className="text-sm text-muted-foreground">
                      LLM avancés et systèmes multimodaux qui peuvent maintenir un contexte et s'adapter 
                      à des entrées récentes.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-5 h-5 mt-0.5 mr-2 rounded-full bg-primary/10 text-primary text-xs">3</span>
                  <div>
                    <p className="font-medium">Émergence de capacités sociales</p>
                    <p className="text-sm text-muted-foreground">
                      Des modèles comme GPT-4 et Claude 3 montrent des signes limités mais prometteurs 
                      de théorie de l'esprit dans certains contextes spécifiques.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="bg-secondary/20 border-primary/10">
            <CardHeader>
              <CardTitle>Horizons de développement</CardTitle>
              <CardDescription>Trajectoires possibles de l'évolution de l'IA</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Les chercheurs envisagent plusieurs voies possibles pour l'évolution future de l'IA :
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-5 h-5 mt-0.5 mr-2 flex items-center justify-center">
                    <ArrowRight size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Évolution par échelle</p>
                    <p className="text-sm text-muted-foreground">
                      L'hypothèse que l'augmentation de la taille des modèles et des données conduira 
                      naturellement à des capacités plus avancées.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 mt-0.5 mr-2 flex items-center justify-center">
                    <ArrowRight size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Innovations architecturales</p>
                    <p className="text-sm text-muted-foreground">
                      De nouvelles structures de modèles intégrant raisonnement symbolique, mémoire externe, 
                      et méta-apprentissage.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 mt-0.5 mr-2 flex items-center justify-center">
                    <ArrowRight size={16} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Approches bio-inspirées</p>
                    <p className="text-sm text-muted-foreground">
                      Systèmes qui reproduisent plus fidèlement les structures et processus 
                      neurocognitifs du cerveau humain.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-border/50">
                <p className="text-sm italic text-muted-foreground">
                  "Le défi n'est pas seulement de créer des IA plus intelligentes, mais des IA qui sont intelligentes 
                  de la bonne manière et pour les bonnes raisons."
                </p>
                <p className="text-sm text-right mt-1">— Stuart Russell, chercheur en IA</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 p-6 bg-primary/5 rounded-xl max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold mb-4 text-center">Gouvernance et préparation</h3>
          <p className="mb-4 text-center text-muted-foreground">
            À mesure que l'IA progresse vers des niveaux supérieurs, des cadres robustes de gouvernance, 
            d'éthique et de sécurité deviennent de plus en plus cruciaux.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-secondary/30 rounded-lg">
              <h4 className="font-medium mb-2">Régulation adaptative</h4>
              <p className="text-sm text-muted-foreground">
                Cadres réglementaires qui évoluent avec les capacités émergentes de l'IA
              </p>
            </div>
            <div className="p-4 bg-secondary/30 rounded-lg">
              <h4 className="font-medium mb-2">Collaboration internationale</h4>
              <p className="text-sm text-muted-foreground">
                Coordination entre pays pour des normes et principes communs
              </p>
            </div>
            <div className="p-4 bg-secondary/30 rounded-lg">
              <h4 className="font-medium mb-2">Recherche sur la sécurité</h4>
              <p className="text-sm text-muted-foreground">
                Développement proactif de méthodes pour contrôler et aligner les IA avancées
              </p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Button variant="outline" className="rounded-full" asChild>
              <Link to="/ethique-gouvernance">
                En savoir plus sur l'éthique et la gouvernance <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NiveauxIA;
