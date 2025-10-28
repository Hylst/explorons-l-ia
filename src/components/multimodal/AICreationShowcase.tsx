
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ImagePlus, 
  Music, 
  MessageSquare, 
  Video,
  ExternalLink,
  FileCode,
  Zap,
  Palette,
  Volume2,
  Braces,
  Sparkles,
  Bot,
  Building,
  FileText
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

/**
 * Composant présentant une galerie d'exemples de créations par IA
 */
const AICreationShowcase = () => {
  const { toast } = useToast();
  
  const handleExampleClick = (url: string | null) => {
    if (!url || url === "#") {
      toast({
        title: "Exemple à venir",
        description: "Cet exemple sera disponible prochainement dans une mise à jour.",
        duration: 3000,
      });
    }
  };

  const showcaseItems = [
    {
      title: "Illustrations génératives",
      category: "Image",
      description: "Série d'illustrations créées avec DALL-E 3 à partir de prompts détaillés",
      imagePath: "/pics/generated_illustration.jpg", // Emplacement de l'image personnalisée
      prompt: "Illustration d'un explorateur futuriste dans une jungle alien luminescente, avec des plantes bioluminescentes et des créatures étranges. Style mélange d'art conceptuel de film et d'aquarelle, palette dominante bleu-violet.",
      tools: ["DALL-E 3", "Midjourney", "Photoshop"],
      link: "https://openai.com/blog/dall-e/",
      icon: <ImagePlus className="h-5 w-5 text-fuchsia-500" aria-hidden="true" />
    },
    {
      title: "Composition ambient",
      category: "Audio",
      description: "Pièce musicale générative créée à partir d'une description d'ambiance",
      imagePath: "/pics/music-creation.jpg", // Emplacement de l'image personnalisée
      customIconSize: "w-12 h-12", // Taille réduite pour l'icône
      customIcon: <Music className="w-12 h-12 text-blue-500/70" aria-hidden="true" />,
      prompt: "Crée une pièce ambient atmosphérique inspirée par une forêt nordique sous la neige. Utilise des pad synthétiques éthérés, des field recordings de vent et de pas dans la neige, et de subtils éléments de piano distant.",
      tools: ["Suno AI", "Soundraw", "Ableton Live"],
      link: "https://www.suno.ai/",
      icon: <Music className="h-5 w-5 text-blue-500" aria-hidden="true" />
    },
    {
      title: "Court-métrage généré par IA",
      category: "Vidéo",
      description: "Séquence vidéo produite à partir d'un script et d'images de référence",
      imagePath: "/pics/video-creation.jpg", // Emplacement de l'image personnalisée
      customIconSize: "w-12 h-12", // Taille réduite pour l'icône
      customIcon: <Video className="w-12 h-12 text-amber-500/70" aria-hidden="true" />,
      prompt: "Crée une courte séquence vidéo montrant une transformation progressive d'une graine en arbre, avec un time-lapse accéléré, une esthétique cinématographique et des détails sur la croissance des racines.",
      tools: ["Runway Gen-2", "Pika Labs", "DaVinci Resolve"],
      link: "https://runwayml.com/",
      icon: <Video className="h-5 w-5 text-amber-500" aria-hidden="true" />
    },
    {
      title: "Dialogue multimodal",
      category: "Conversation",
      description: "Échange avec une IA utilisant texte et images pour résoudre un problème",
      imagePath: "/pics/multimodal-conversation.jpg", // Emplacement de l'image personnalisée
      customIconSize: "w-12 h-12", // Taille réduite pour l'icône
      customIcon: <MessageSquare className="w-12 h-12 text-indigo-500/70" aria-hidden="true" />,
      prompt: "[Image d'un circuit électronique] \"Peux-tu identifier les composants de ce circuit et m'expliquer leur fonction? Ensuite, suggère des améliorations possibles pour optimiser l'efficacité énergétique.\"",
      tools: ["GPT-4 Vision", "Claude Opus", "Gemini"],
      link: "https://openai.com/research/gpt-4v-system-card",
      icon: <MessageSquare className="h-5 w-5 text-indigo-500" aria-hidden="true" />
    },
    {
      title: "Génération de code assistée",
      category: "Code",
      description: "Codage conversationnel pour créer une application web responsive",
      imagePath: "/pics/code-generation.jpg",
      customIconSize: "w-12 h-12",
      customIcon: <FileCode className="w-12 h-12 text-emerald-500/70" aria-hidden="true" />,
      prompt: "Crée une application web React avec un formulaire de contact, validation de champs et envoi par email. Utilise Tailwind CSS pour le style et intègre des animations subtiles lors des soumissions. Ajoute aussi un mode sombre/clair.",
      tools: ["GitHub Copilot", "Claude Opus", "Replit Ghostwriter"],
      link: "https://github.com/features/copilot",
      icon: <FileCode className="h-5 w-5 text-emerald-500" aria-hidden="true" />
    },
    {
      title: "Identité visuelle générée",
      category: "Design",
      description: "Ensemble complet d'éléments visuels pour une nouvelle marque",
      imagePath: "/pics/graphic-design.jpg",
      customIconSize: "w-12 h-12",
      customIcon: <Palette className="w-12 h-12 text-rose-500/70" aria-hidden="true" />,
      prompt: "Génère une identité visuelle complète pour une nouvelle marque de café éthique nommée 'Aurora Bean'. Le style doit être minimaliste avec des touches d'aquarelle, utilisant des tons terreux et un accent turquoise. Inclus logo, palette de couleurs, typographie et modèles d'applications.",
      tools: ["Adobe Firefly", "Midjourney", "Illustrator"],
      link: "https://www.adobe.com/products/firefly.html",
      icon: <Palette className="h-5 w-5 text-rose-500" aria-hidden="true" />
    },
    {
      title: "Avatars personnalisés",
      category: "Personnalisation",
      description: "Série d'avatars d'une même personne dans différents styles artistiques",
      imagePath: "/pics/avatar-placeholder.jpg",
      customIconSize: "w-12 h-12",
      customIcon: <Bot className="w-12 h-12 text-violet-500/70" aria-hidden="true" />,
      prompt: "À partir de ces 5 photos de référence de mon visage, crée une série de 10 avatars stylisés dans différents styles: pixel art, anime, art vectoriel, peinture à l'huile, cyberpunk, etc. Garde une bonne ressemblance tout en adaptant au style artistique.",
      tools: ["Midjourney", "Ready Player Me", "Stable Diffusion"],
      link: "#",
      icon: <Bot className="h-5 w-5 text-violet-500" aria-hidden="true" />
    },
    {
      title: "Voix synthétique émotionnelle",
      category: "Audio",
      description: "Narration vocale expressive pour un documentaire",
      imagePath: "/pics/voice-synthesis.jpg",
      customIconSize: "w-12 h-12",
      customIcon: <Volume2 className="w-12 h-12 text-cyan-500/70" aria-hidden="true" />,
      prompt: "Génère une voix masculine, chaleureuse et engageante avec un léger accent britannique pour narrer un documentaire sur les océans. Le ton doit varier : émerveillé quand il décrit la beauté marine, plus sérieux quand il aborde les défis environnementaux, et inspirant pour la conclusion sur les solutions.",
      tools: ["ElevenLabs", "WellSaid Labs", "Murf.ai"],
      link: "https://elevenlabs.io/",
      icon: <Volume2 className="h-5 w-5 text-cyan-500" aria-hidden="true" />
    }
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {showcaseItems.slice(0, 4).map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden h-full flex flex-col border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg">
              <div className="relative w-full aspect-video bg-muted flex items-center justify-center overflow-hidden">
                {(item.imagePath === "/placeholder.svg" || !item.imagePath.includes(".jpg") && !item.imagePath.includes(".png")) ? (
                  // Afficher une icône générique si pas d'image valide
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10">
                    {item.customIcon}
                  </div>
                ) : (
                  <img 
                    src={item.imagePath} 
                    alt={`Exemple de ${item.title}`} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                )}
                <Badge variant="secondary" className="absolute top-3 left-3 flex items-center gap-1">
                  {item.icon}
                  <span>{item.category}</span>
                </Badge>
              </div>
              <CardHeader className="pb-2">
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="bg-secondary/20 p-3 rounded-lg mb-3">
                  <p className="text-sm font-mono italic">"{item.prompt}"</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {item.tools.map((tool, i) => (
                    <Badge key={i} variant="outline">{tool}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="ghost" size="sm" className="gap-2" asChild onClick={() => handleExampleClick(item.link)}>
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`Voir un exemple de ${item.title} (s'ouvre dans un nouvel onglet)`}
                  >
                    <span>Voir l'exemple</span>
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
      
      <div className="p-6 bg-gradient-to-br from-primary/5 to-secondary/10 border border-primary/10 rounded-xl">
        <h3 className="heading-sm mb-6 flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          Applications professionnelles de l'IA multimodale
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-background/60 rounded-lg border">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Building className="h-4 w-4 text-primary" />
              </div>
              <h4 className="font-medium">Architectures et designs interactifs</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Génération de modèles 3D architecturaux à partir de descriptions textuelles et croquis, avec possibilité de modifications en temps réel par commandes vocales.
            </p>
          </div>
          
          <div className="p-4 bg-background/60 rounded-lg border">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="h-4 w-4 text-primary" />
              </div>
              <h4 className="font-medium">Documents intelligents</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Analyse en temps réel de documents avec extraction automatique d'informations clés, génération de résumés et conversion en différents formats.
            </p>
          </div>
          
          <div className="p-4 bg-background/60 rounded-lg border">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Braces className="h-4 w-4 text-primary" />
              </div>
              <h4 className="font-medium">Développement software accéléré</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Création d'interfaces utilisateur à partir de croquis, génération de code fonctionnel basé sur des descriptions et debugging visuel assisté.
            </p>
          </div>
        </div>
        
        <div className="mt-6 text-sm text-muted-foreground">
          <p className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-primary" />
            <span>En avril 2025, 67% des entreprises du Fortune 500 utilisent activement des technologies d'IA multimodales dans leurs processus créatifs et décisionnels.</span>
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {showcaseItems.slice(4, 8).map((item, index) => (
          <motion.div
            key={index + 4}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden h-full flex flex-col border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg">
              <div className="relative w-full aspect-video bg-muted flex items-center justify-center overflow-hidden">
                {(item.imagePath === "/placeholder.svg" || !item.imagePath.includes(".jpg") && !item.imagePath.includes(".png")) ? (
                  // Afficher une icône générique si pas d'image valide
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10">
                    {item.customIcon}
                  </div>
                ) : (
                  <img 
                    src={item.imagePath} 
                    alt={`Exemple de ${item.title}`} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                )}
                <Badge variant="secondary" className="absolute top-3 left-3 flex items-center gap-1">
                  {item.icon}
                  <span>{item.category}</span>
                </Badge>
              </div>
              <CardHeader className="pb-2">
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="bg-secondary/20 p-3 rounded-lg mb-3">
                  <p className="text-sm font-mono italic">"{item.prompt}"</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {item.tools.map((tool, i) => (
                    <Badge key={i} variant="outline">{tool}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="ghost" size="sm" className="gap-2" asChild onClick={() => handleExampleClick(item.link)}>
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`Voir un exemple de ${item.title} (s'ouvre dans un nouvel onglet)`}
                  >
                    <span>Voir l'exemple</span>
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AICreationShowcase;
