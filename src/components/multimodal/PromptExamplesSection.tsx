
import React, { useState } from 'react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { 
  ImagePlus, 
  Music, 
  Code, 
  PanelLeft, 
  MessagesSquare,
  Copy,
  Check,
  Brain,
  Lightbulb,
  Sparkles,
  Zap,
  BookOpen,
  MessageSquare,
  PencilRuler
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

/**
 * Section présentant des exemples de prompts efficaces pour différents types d'IA
 */
const PromptExamplesSection = () => {
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);
  const { toast } = useToast();

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(id);
    toast({
      title: "Prompt copié",
      description: "Le prompt a été copié dans votre presse-papiers.",
      duration: 2000,
    });
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const promptTips = [
    {
      title: "Soyez spécifique",
      icon: <PencilRuler size={22} className="text-primary" />,
      description: "Plus vos instructions sont détaillées, meilleurs seront les résultats. Précisez le style, le ton, et les caractéristiques souhaitées.",
      examples: [
        "❌ \"Génère une image d'un paysage\"",
        "✅ \"Génère une image d'un paysage montagneux au coucher du soleil, avec un lac reflétant la lumière dorée, style impressionniste, couleurs chaudes, perspective à hauteur d'homme, premier plan détaillé avec quelques rochers texturés\""
      ]
    },
    {
      title: "Itérez progressivement",
      icon: <Zap size={22} className="text-primary" />,
      description: "Ne cherchez pas la perfection du premier coup. Commencez avec une demande simple, puis affinez progressivement en fonction des résultats.",
      examples: [
        "1️⃣ \"Crée une illustration d'une maison dans la forêt\"",
        "2️⃣ \"Maintenant ajoute plus de détails à la maison, style cabane en bois, et rends la forêt plus dense et mystérieuse\"",
        "3️⃣ \"Parfait, maintenant ajoute une légère brume entre les arbres et une faible lumière provenant des fenêtres\""
      ]
    },
    {
      title: "Utilisez un langage visuel",
      icon: <Lightbulb size={22} className="text-primary" />,
      description: "Pour la génération d'images, utilisez un vocabulaire riche en détails visuels et références artistiques concrètes.",
      examples: [
        "❌ \"Crée une belle image\"",
        "✅ \"Crée une image dans le style de Monet, avec des touches de pinceau visibles, représentant un jardin luxuriant aux couleurs pastel, avec des nénuphars au premier plan, une petite passerelle en bois au milieu, et une atmosphère de début de matinée brumeuse\""
      ]
    },
    {
      title: "Combinez les techniques",
      icon: <Sparkles size={22} className="text-primary" />,
      description: "Associez différentes IA complémentaires pour obtenir des résultats plus riches en utilisant les forces de chaque modèle.",
      examples: [
        "1️⃣ Générer un texte descriptif détaillé avec ChatGPT: \"Décris une scène post-apocalyptique d'une ville abandonnée reprise par la nature\"",
        "2️⃣ Utiliser ce texte pour créer une image avec Midjourney ou DALL-E",
        "3️⃣ Transformer l'image en vidéo avec Runway en ajoutant mouvement et effets",
        "4️⃣ Ajouter une musique générée par Suno AI basée sur la description d'ambiance: \"Composition sombre et atmosphérique évoquant la désolation et la renaissance\""
      ]
    },
    {
      title: "Exploitez les références",
      icon: <BookOpen size={22} className="text-primary" />,
      description: "Fournissez des exemples ou des références pour guider l'IA vers le style ou le résultat souhaité.",
      examples: [
        "❌ \"Écris un poème sur l'océan\"",
        "✅ \"Écris un poème sur l'océan dans le style de Victor Hugo, avec des métaphores puissantes et un rythme semblable à son poème 'Océano Nox'. Utilise des vers de longueur variée et un vocabulaire maritime riche et évocateur.\""
      ]
    },
    {
      title: "Définissez des contraintes",
      icon: <Brain size={22} className="text-primary" />,
      description: "Encadrez les limites de ce que vous attendez pour obtenir des résultats plus ciblés et pertinents.",
      examples: [
        "❌ \"Écris un article de blog\"",
        "✅ \"Écris un article de blog de 800 mots maximum sur l'impact environnemental de l'IA. Structure-le avec introduction, 3 points principaux et conclusion. Inclus des données de 2025, cite au moins 2 sources scientifiques récentes, et adopte un ton informatif mais accessible.\""
      ]
    }
  ];

  const detailedExamples = {
    image: [
      {
        title: "Portrait artistique",
        prompt: "Génère un portrait en gros plan d'une femme âgée aux yeux expressifs, avec des rides profondes qui racontent une histoire de sagesse. Style de peinture à l'huile inspiré de Rembrandt, avec un éclairage dramatique venant de la gauche, créant un fort contraste clair-obscur. Les couleurs dominantes sont des tons de terre chaude et d'ocre, avec un arrière-plan sombre et texturé. L'expression doit être sereine et contemplative. Ajoute quelques détails comme un foulard traditionnel et peut-être un bijou discret qui suggère son héritage culturel.",
        explanation: "Ce prompt est efficace car il spécifie : le sujet principal (femme âgée), le cadrage (gros plan), des détails importants (yeux expressifs, rides), une référence artistique précise (Rembrandt), des éléments techniques (éclairage, contraste), une palette de couleurs, et l'émotion recherchée. Les détails contextuels (foulard, bijou) ajoutent de la richesse à l'image."
      },
      {
        title: "Paysage fantastique",
        prompt: "Crée une illustration de style fantasy d'une cité construite dans les branches d'arbres géants millénaires. L'architecture mélange des éléments elfiques (structures organiques, courbes fluides) et steampunk (engrenages en cuivre, tuyaux émettant de la vapeur). Le temps est au crépuscule avec un ciel violet-orange. Des ponts suspendus relient les différentes sections de la cité, et de petits vaisseaux aériens ressemblant à des libellules mécaniques volent entre les branches. Quelques lanternes magiques émettent une douce lumière bleue. Style d'illustration détaillé, inspiré des artistes conceptuels de films fantastiques modernes, avec une profondeur de champ importante et des détails minutieux.",
        explanation: "Ce prompt fonctionne bien car il combine plusieurs éléments distincts (nature, fantasy, steampunk), précise l'ambiance lumineuse, et ajoute des détails spécifiques qui enrichissent l'image (ponts suspendus, vaisseaux, lanternes). Les références visuelles claires (structures elfiques, libellules mécaniques) guident l'IA, et le style d'illustration demandé oriente le rendu final."
      },
      {
        title: "Scène produit commercial",
        prompt: "Photographie commerciale ultra-réaliste d'une montre connectée moderne sur un poignet masculin. Plan rapproché avec mise au point nette sur la montre. La montre a un design minimaliste avec un cadran noir et un bracelet en cuir marron. L'écran affiche une interface de fitness avec des statistiques claires. L'arrière-plan est flou mais suggère un environnement de bureau moderne avec des tons neutres. Éclairage professionnel de studio avec un key light principal et un rim light subtil pour définir les bords. Rendu photoréaliste de qualité publicitaire, comme une image que l'on pourrait voir dans un magazine de technologie haut de gamme.",
        explanation: "Ce prompt est précis sur tous les aspects techniques d'une photo commerciale: cadrage, mise au point, sujet principal, arrière-plan, éclairage spécifique (key light, rim light). Il définit clairement le produit et son contexte d'utilisation, ainsi que le style visuel final recherché en faisant référence à un standard commercial reconnaissable (publicité magazine)."
      }
    ],
    music: [
      {
        title: "Composition émotionnelle",
        prompt: "Compose une pièce musicale mélancolique pour piano et violoncelle, tempo lent (environ 65 BPM), en tonalité de Sol mineur. La mélodie devrait évoquer un sentiment de nostalgie automnale, comme le souvenir d'un amour perdu. Commence par une introduction douce au piano avec des accords mineurs, puis introduis progressivement le violoncelle avec une ligne mélodique expressive dans le registre grave. Vers le milieu, intègre une modulation vers la tonalité relative majeure (Si bémol) pour un moment d'espoir, avant de revenir à la tonalité mineure initiale pour la conclusion. Durée totale d'environ 2:30. Inspiration: Ludovico Einaudi et Max Richter, avec peut-être quelques influences de musique folk scandinave dans les progressions harmoniques.",
        explanation: "Ce prompt est détaillé et technique: il spécifie les instruments, le tempo, la tonalité, la structure, l'évolution harmonique (y compris une modulation spécifique), la durée et l'ambiance émotionnelle recherchée. Les références à des compositeurs connus et à un style régional aident l'IA à comprendre le style souhaité."
      },
      {
        title: "Ambiance électronique",
        prompt: "Crée un morceau de musique électronique ambient de style lo-fi avec une rythmique hip-hop détendue à 80 BPM. Utilise des samples de piano traités avec reverb et un léger effet de cassette vintage. Ajoute des sons d'ambiance comme la pluie douce et des conversations lointaines filtrées. La structure devrait être progressive: commence par une intro atmosphérique de 20 secondes, puis introduis la batterie et la ligne de basse. Intègre un break au milieu où la plupart des éléments disparaissent sauf les ambiances, puis reviens avec tous les éléments pour la dernière partie. Le morceau devrait avoir une sensation nocturne et urbaine, parfait pour le travail ou l'étude. Références sonores: Nujabes, Chillhop Music, et un peu de Boards of Canada pour les textures atmosphériques.",
        explanation: "Ce prompt excelle par sa précision technique (BPM, effets) et contextuelle (usage prévu pour le travail/étude). Il guide l'IA sur la structure temporelle précise et les éléments sonores spécifiques, tout en fournissant des références pertinentes. Les détails sur les traitements sonores (reverb, effet cassette) et la description de la progression structurelle donnent un cadre clair."
      },
      {
        title: "Musique cinématique",
        prompt: "Compose une pièce orchestrale cinématique pour une scène de révélation épique dans un film de science-fiction. Tempo modéré (90-100 BPM) avec une intensité croissante. Commence par des cordes douces et des nappes de synthétiseur en arrière-plan. Ajoute progressivement des percussions profondes (timbales, grosses caisses) et des cuivres pour les moments de tension. Le climax devrait incorporer un chœur et des cordes puissantes avec une mélodie montante distinctive. Utilise une progression harmonique qui crée un sentiment de découverte et d'émerveillement, peut-être avec quelques accords inattendus pour suggérer l'étrangeté alien. Références: Hans Zimmer (Interstellar), Johann Johannsson (Arrival), et Vangelis (Blade Runner) pour l'équilibre entre orchestral traditionnel et éléments électroniques.",
        explanation: "Ce prompt combine des éléments de narration (contexte cinématique précis) avec des spécifications musicales techniques. Il guide l'IA sur le développement émotionnel (intensité croissante), l'instrumentation spécifique, et même les techniques harmoniques à utiliser. Les références à des compositeurs de films de science-fiction établis orientent clairement le style final."
      }
    ],
    code: [
      {
        title: "Fonction JavaScript",
        prompt: "Écris une fonction JavaScript pour trier un tableau d'objets représentant des produits. Chaque objet a les propriétés suivantes: id (nombre), name (chaîne), price (nombre), category (chaîne) et rating (nombre de 1 à 5). La fonction doit accepter deux paramètres: le tableau à trier et un objet de configuration qui spécifie la propriété de tri et l'ordre (ascendant ou descendant). Par défaut, trie par prix en ordre ascendant. Utilise des méthodes modernes (ES6+) et ajoute des commentaires explicatifs. Gère les cas où la propriété de tri n'existe pas dans les objets. Implémente également une validation des entrées pour s'assurer que le tableau est bien un tableau d'objets avec la structure attendue. Crée un exemple d'utilisation de la fonction après sa définition.",
        explanation: "Ce prompt est efficace car il définit clairement la structure des données d'entrée, les paramètres attendus, les comportements par défaut, et même les exigences techniques (ES6+, commentaires). Il demande également une gestion d'erreur et une validation, ainsi qu'un exemple pratique, ce qui permet d'obtenir un code complet et robuste."
      },
      {
        title: "Animation CSS",
        prompt: "Crée une animation CSS pour un bouton 'Ajouter au panier'. Au survol, le bouton devrait légèrement s'agrandir (scale: 1.05) et changer progressivement de couleur (de bleu #3498db à un bleu plus foncé #2980b9) sur 250ms. Au clic, il devrait avoir un effet de pression (scale: 0.95) pendant 200ms, puis revenir à sa taille normale. Après un clic réussi, ajoute une animation courte (500ms) où une petite icône de panier se déplace du bouton vers le coin supérieur droit de l'écran tout en diminuant de taille. L'animation doit être fluide avec une transition de type 'ease-out'. Ajoute également une petite icône de panier qui se déplace légèrement vers la droite au survol. Utilise des variables CSS pour les couleurs et assure-toi que le code fonctionne sur les navigateurs modernes. Fournis à la fois le HTML, le CSS et éventuellement le JavaScript si nécessaire.",
        explanation: "Ce prompt est précis sur les effets visuels (échelles exactes, codes couleur), les déclencheurs (survol, clic), les durées et le type d'animation. Il spécifie également des préoccupations de compatibilité et des bonnes pratiques (variables CSS). La demande d'une animation complexe (icône se déplaçant après le clic) pousse l'IA à fournir une solution complète intégrant potentiellement du JavaScript."
      },
      {
        title: "API REST Node.js",
        prompt: "Crée une API REST basique avec Node.js et Express pour gérer une collection d'articles de blog. L'API doit prendre en charge les opérations CRUD complètes (Create, Read, Update, Delete). Chaque article doit avoir un id, un titre, un contenu, un auteur, et une date de publication. Utilise une architecture MVC avec des contrôleurs séparés et un service pour la logique métier. Implémente une validation des entrées avec Joi ou une bibliothèque similaire. Ajoute une gestion d'erreurs appropriée avec des codes HTTP significatifs et des messages d'erreur clairs. Inclus également une documentation basique avec des commentaires expliquant le fonctionnement de chaque endpoint. Utilise des pratiques modernes comme async/await pour la gestion des opérations asynchrones. Pour la persistance des données, tu peux simuler une base de données avec un simple tableau en mémoire.",
        explanation: "Ce prompt décrit une structure d'application complète plutôt qu'un simple script, spécifiant l'architecture (MVC), les bibliothèques à utiliser, et les fonctionnalités requises. Il guide l'IA sur les bonnes pratiques (validation, gestion d'erreurs, documentation) tout en laissant de la flexibilité sur l'implémentation exacte. La clarté sur les entités et leurs propriétés aide à générer un modèle de données cohérent."
      }
    ],
    conversation: [
      {
        title: "Analyse de document visuel",
        prompt: "[Image d'un graphique financier jointe] Analyse ce graphique financier et réponds aux questions suivantes: 1) Quelle est la tendance générale du cours de l'action sur la période affichée? 2) Identifie les points de résistance et de support majeurs visibles. 3) Observe-t-on des formations techniques particulières (tête-épaules, double sommet, etc.)? 4) Quels sont les volumes d'échange aux moments clés? 5) En te basant uniquement sur cette analyse technique, quelle pourrait être la projection à court terme? Fournis une analyse synthétique de 3-4 paragraphes basée sur ces observations, en précisant les limites de cette analyse purement technique. Utilise le vocabulaire précis de l'analyse technique financière et explique brièvement les termes spécialisés utilisés.",
        explanation: "Ce prompt est efficace car il fournit une image spécifique et pose des questions précises et techniques qui orientent l'analyse de l'IA. Il demande des observations sur différents aspects (tendance, points techniques, volumes, projections) et spécifie le format de réponse attendu. La demande d'utiliser un vocabulaire spécialisé tout en expliquant les termes permet d'obtenir une réponse à la fois experte et accessible."
      },
      {
        title: "Assistance culinaire visuelle",
        prompt: "[Photo d'ingrédients disponibles dans un réfrigérateur] Voici les ingrédients dont je dispose. Peux-tu me suggérer 3 recettes réalisables, en tenant compte des contraintes suivantes: 1) Repas pour deux personnes 2) Préparation en moins de 30 minutes 3) Régime flexitarien privilégiant les protéines végétales 4) Niveau de difficulté intermédiaire 5) Sans fruits de mer car j'y suis allergique. Pour chaque suggestion, liste les ingrédients nécessaires (en précisant ceux que j'ai déjà et ceux qu'il faudrait ajouter), les étapes de préparation, une estimation calorique par portion, et éventuellement des variations possibles si je souhaite préparer à l'avance certains éléments. Si certains ingrédients visibles dans l'image te semblent de mauvaise qualité ou potentiellement périmés, merci de me le signaler.",
        explanation: "Ce prompt combine une information visuelle (photo des ingrédients) avec des contraintes spécifiques (temps, régime, difficulté, allergies) et une demande structurée. Il guide l'IA pour analyser le contenu visuel dans un contexte précis et fournir des recommandations pratiques. La demande d'ajouter des informations sur les ingrédients potentiellement périmés exploite la capacité de l'IA à évaluer la qualité visuelle des aliments."
      },
      {
        title: "Diagnostic technique avec image",
        prompt: "[Image d'un écran d'ordinateur montrant un message d'erreur] Voici l'erreur qui s'affiche sur mon ordinateur sous Windows 11 lorsque j'essaie de lancer l'application X. Peux-tu: 1) Identifier la nature exacte de cette erreur 2) Expliquer les causes possibles en commençant par les plus probables 3) Me guider étape par étape pour résoudre ce problème, en commençant par les solutions les plus simples avant de passer à des interventions plus complexes 4) M'indiquer si des informations supplémentaires te seraient nécessaires pour affiner le diagnostic. Si tu reconnais un code d'erreur spécifique dans l'image, explique-moi sa signification. Présente les étapes de résolution sous forme numérotée et facile à suivre pour quelqu'un qui n'est pas expert en informatique.",
        explanation: "Ce prompt utilise une image technique pour obtenir un diagnostic et une solution. Il structure clairement la demande en plusieurs points et demande explicitement un format de réponse adapté à un non-expert. La gradation des solutions (des plus simples aux plus complexes) et la demande d'informations supplémentaires potentiellement nécessaires montrent une compréhension du processus de diagnostic technique."
      }
    ]
  };

  const examplesAnimations = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const exampleAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      <div className="mt-8 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="p-5 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/20 border border-primary/10 mb-8"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <MessageSquare size={20} className="text-primary" />
            </div>
            <h3 className="heading-md">Pourquoi le prompting est essentiel</h3>
          </div>
          <p className="text-muted-foreground">
            La qualité de vos prompts détermine directement la qualité des résultats que vous obtiendrez des IA génératives. 
            Un prompt bien conçu agit comme un guide précis qui oriente l'IA vers exactement ce que vous souhaitez obtenir, 
            réduisant le nombre d'itérations nécessaires et améliorant considérablement les résultats.
          </p>
        </motion.div>

        <motion.div 
          variants={examplesAnimations}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {promptTips.map((tip, index) => (
            <motion.div 
              key={index} 
              className="glass-card p-6 rounded-xl h-full"
              variants={exampleAnimation}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
                  {tip.icon}
                </div>
                <h3 className="heading-sm">{tip.title}</h3>
              </div>
              <p className="text-muted-foreground mb-3">{tip.description}</p>
              <div className="bg-secondary/20 p-3 rounded-lg">
                {tip.examples.map((example, exIndex) => (
                  <div key={exIndex} className="mb-2 last:mb-0">
                    <p className="font-mono text-sm">{example}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mt-12">
        <h3 className="heading-md text-center mb-6">Exemples détaillés par domaine</h3>
        
        <Tabs defaultValue="image" className="w-full">
          <TabsList className="grid grid-cols-4 w-full mb-6">
            <TabsTrigger value="image" className="flex gap-2 items-center">
              <ImagePlus size={16} />
              <span>Images</span>
            </TabsTrigger>
            <TabsTrigger value="music" className="flex gap-2 items-center">
              <Music size={16} />
              <span>Musique</span>
            </TabsTrigger>
            <TabsTrigger value="code" className="flex gap-2 items-center">
              <Code size={16} />
              <span>Code</span>
            </TabsTrigger>
            <TabsTrigger value="conversation" className="flex gap-2 items-center">
              <MessagesSquare size={16} />
              <span>Multimodal</span>
            </TabsTrigger>
          </TabsList>

          {Object.entries(detailedExamples).map(([category, examples]) => (
            <TabsContent key={category} value={category} className="space-y-6">
              {examples.map((example, index) => (
                <Card key={index} className="overflow-hidden border-primary/10">
                  <CardHeader className="bg-primary/5 px-6 py-4 border-b border-primary/10">
                    <CardTitle className="font-semibold text-lg flex items-center">
                      <PanelLeft className="mr-2 h-4 w-4 text-primary" />
                      {example.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="relative bg-secondary/20 p-5 font-mono text-sm overflow-x-auto">
                      <div className="max-h-60 overflow-y-auto pr-12">
                        {example.prompt}
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="absolute top-2 right-2" 
                        onClick={() => copyToClipboard(example.prompt, `${category}-${index}`)}
                      >
                        {copiedIndex === `${category}-${index}` ? (
                          <Check className="h-4 w-4 text-green-500" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    <div className="p-4 text-muted-foreground">
                      <p className="mb-2"><strong className="text-foreground">Pourquoi ça marche:</strong></p>
                      <p className="text-sm leading-relaxed">{example.explanation}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>

      <div className="mt-12 bg-gradient-to-br from-primary/5 to-secondary/10 rounded-xl p-6 border border-primary/10">
        <h3 className="heading-sm mb-4">FAQ - Prompting efficace</h3>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Quelle est la longueur idéale d'un prompt?</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">
                La longueur optimale dépend du modèle et de la tâche. Pour les modèles récents comme GPT-4o, Claude 3 Opus ou Gemini, des prompts détaillés de 100-300 mots fonctionnent souvent mieux que des instructions brèves. Pour la génération d'images, 50-100 mots bien structurés suffisent généralement.
              </p>
              <p className="mb-2">
                <strong>Important:</strong> L'important est la qualité et la pertinence des détails, pas simplement la longueur. Un prompt concis mais précis est préférable à un prompt long mais vague.
              </p>
              <div className="p-3 bg-secondary/30 rounded-lg text-sm">
                <p className="font-medium mb-1">Conseil pratique:</p>
                <p>Pour les tâches complexes, structurez votre prompt en sections: contexte, objectif précis, format souhaité, contraintes spécifiques, exemples si nécessaire.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Faut-il adapter son prompting selon les modèles d'IA?</AccordionTrigger>
            <AccordionContent>
              <p className="mb-2">
                Absolument. Chaque modèle a ses propres forces, faiblesses et "dialectes" de prompting. Par exemple:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-3 text-muted-foreground">
                <li><span className="font-medium text-foreground">Midjourney</span> répond bien aux paramètres stylistiques spécifiques (--stylize, --chaos) et aux descriptions riches en adjectifs visuels</li>
                <li><span className="font-medium text-foreground">DALL-E 3</span> excelle avec des descriptions narratives et des instructions séquentielles</li>
                <li><span className="font-medium text-foreground">Stable Diffusion</span> fonctionne mieux avec des mots-clés artistiques précis et des indications techniques</li>
                <li><span className="font-medium text-foreground">Claude</span> performe particulièrement bien avec des instructions longues et nuancées</li>
                <li><span className="font-medium text-foreground">GPT-4</span> gère bien les instructions complexes et le raisonnement structuré</li>
              </ul>
              <p>
                En avril 2025, la plupart des modèles de pointe ont convergé vers des capacités similaires, mais conservent certaines spécificités. Prenez le temps d'explorer la documentation officielle de chaque modèle pour découvrir leurs capacités uniques.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Comment structurer un prompt pour des résultats cohérents?</AccordionTrigger>
            <AccordionContent>
              <p className="mb-3">
                Une structure efficace suit généralement ce modèle:
              </p>
              <ol className="list-decimal pl-5 space-y-2 mb-3">
                <li><span className="font-medium">Contexte/rôle</span> - "Tu es un expert en..." ou "Agis comme un..."</li>
                <li><span className="font-medium">Tâche précise</span> - "Crée/Analyse/Explique..."</li>
                <li><span className="font-medium">Format souhaité</span> - "Sous forme de liste/tableau/paragraphes..."</li>
                <li><span className="font-medium">Contraintes spécifiques</span> - "En utilisant uniquement...", "Sans mentionner..."</li>
                <li><span className="font-medium">Exemples</span> - Si nécessaire, fournir des exemples du résultat attendu</li>
              </ol>
              <div className="p-3 bg-secondary/30 rounded-lg text-sm">
                <p className="font-medium mb-1">Exemple concret:</p>
                <p className="mb-2">❌ "Écris un email de vente"</p>
                <p>✅ "Tu es un spécialiste du marketing digital. Rédige un email de vente pour notre nouveau logiciel de gestion de projet destiné aux PME. L'email doit suivre la structure AIDA (Attention, Intérêt, Désir, Action), faire moins de 250 mots, mettre l'accent sur les gains de productivité et inclure un call-to-action pour une démo gratuite. Le ton doit être professionnel mais conversationnel."</p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Comment améliorer un prompt qui ne donne pas les résultats escomptés?</AccordionTrigger>
            <AccordionContent>
              <p className="mb-3">
                Utilisez une approche itérative et analytique:
              </p>
              <ol className="list-decimal pl-5 space-y-2 mb-3 text-muted-foreground">
                <li><span className="font-medium text-foreground">Identifiez précisément ce qui ne fonctionne pas</span> - Est-ce le style, le contenu, la structure, le niveau de détail?</li>
                <li><span className="font-medium text-foreground">Ajoutez des contraintes spécifiques</span> - Pour corriger les aspects problématiques</li>
                <li><span className="font-medium text-foreground">Reformulez les parties ambiguës</span> - Pour plus de clarté</li>
                <li><span className="font-medium text-foreground">Ajoutez des exemples concrets</span> - De ce que vous recherchez</li>
                <li><span className="font-medium text-foreground">Utilisez le "chain-of-thought"</span> - Demandez à l'IA de raisonner étape par étape</li>
              </ol>
              <p className="mb-2">
                N'hésitez pas à demander à l'IA elle-même comment améliorer votre prompt - c'est souvent très efficace! Par exemple:
              </p>
              <div className="p-3 bg-secondary/30 rounded-lg text-sm">
                <p className="italic">
                "Le résultat que tu m'as fourni n'est pas exactement ce que je cherche. Le texte est trop formel et manque d'exemples concrets. Comment pourrais-je reformuler mon prompt pour obtenir un ton plus conversationnel et des exemples pratiques?"
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Quelles sont les erreurs les plus courantes dans la formulation des prompts?</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li>
                  <span className="font-medium">Être trop vague</span>
                  <p className="text-sm text-muted-foreground">Les instructions générales comme "génère un contenu de qualité" n'offrent pas assez de direction à l'IA.</p>
                </li>
                <li>
                  <span className="font-medium">Inclure trop d'objectifs contradictoires</span>
                  <p className="text-sm text-muted-foreground">Demander un texte qui soit à la fois "très détaillé" et "très concis" crée une confusion.</p>
                </li>
                <li>
                  <span className="font-medium">Négliger le contexte</span>
                  <p className="text-sm text-muted-foreground">Ne pas préciser le public cible, l'usage prévu ou le niveau de connaissance requis.</p>
                </li>
                <li>
                  <span className="font-medium">Ignorer la structure</span>
                  <p className="text-sm text-muted-foreground">Ne pas indiquer comment organiser ou formater l'information.</p>
                </li>
                <li>
                  <span className="font-medium">Abandonner trop rapidement</span>
                  <p className="text-sm text-muted-foreground">L'itération est souvent nécessaire; améliorer progressivement vos prompts en fonction des résultats.</p>
                </li>
              </ul>
              <div className="p-3 bg-secondary/30 rounded-lg text-sm">
                <p className="font-medium mb-1">Conseil de pro:</p>
                <p>Gardez un "journal de prompts" où vous enregistrez vos prompts les plus efficaces et les résultats obtenus. Cela vous permettra d'identifier des modèles et d'améliorer votre technique au fil du temps.</p>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Comment optimiser les prompts pour les usages professionnels?</AccordionTrigger>
            <AccordionContent>
              <p className="mb-3">
                Pour des usages professionnels, certaines considérations supplémentaires s'imposent:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-3">
                <li>
                  <span className="font-medium">Standardisation</span>
                  <p className="text-sm text-muted-foreground">Créez des templates de prompts pour des tâches récurrentes afin d'assurer la cohérence des résultats entre les membres d'une équipe.</p>
                </li>
                <li>
                  <span className="font-medium">Documentation</span>
                  <p className="text-sm text-muted-foreground">Documentez vos prompts efficaces et partagez les meilleures pratiques au sein de votre organisation.</p>
                </li>
                <li>
                  <span className="font-medium">Confidentialité</span>
                  <p className="text-sm text-muted-foreground">Soyez attentif aux informations sensibles incluses dans vos prompts, utilisez des abstractions ou des données anonymisées quand c'est pertinent.</p>
                </li>
                <li>
                  <span className="font-medium">Chaînes de prompts</span>
                  <p className="text-sm text-muted-foreground">Pour des tâches complexes, envisagez des chaînes de prompts où le résultat d'une interaction alimente la suivante.</p>
                </li>
                <li>
                  <span className="font-medium">Vérification systématique</span>
                  <p className="text-sm text-muted-foreground">Établissez des processus de vérification humaine pour les contenus générés, particulièrement pour les usages critiques.</p>
                </li>
              </ul>
              <p>
                En 2025, de nombreuses organisations ont développé des bibliothèques de prompts spécifiques à leur secteur et à leurs besoins, traitées comme des ressources stratégiques qui évoluent continuellement.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default PromptExamplesSection;
