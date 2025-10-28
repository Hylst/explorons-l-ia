
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Image, 
  Music, 
  Video,
  ArrowRight,
  Brain,
  RefreshCw,
  Sparkles,
  Lightbulb,
  MessageSquare,
  RotateCw,
  Check,
  Play,
  Pause
} from 'lucide-react';

/**
 * Composant illustrant le workflow de création multimodale avec interaction
 */
const InteractiveWorkflow = () => {
  const [step, setStep] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoplayTimeout, setAutoplayTimeout] = useState<NodeJS.Timeout | null>(null);
  const workflowRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      title: "Prompt textuel",
      description: "L'utilisateur fournit une description textuelle détaillée",
      icon: <FileText className="h-8 w-8 text-primary" aria-hidden="true" />,
      color: "bg-primary/10",
      details: "Le prompt peut inclure des instructions précises sur le style, le contenu, le ton et d'autres caractéristiques souhaitées pour les sorties générées.",
      illustration: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&w=600&h=400"
    },
    {
      title: "Traitement IA",
      description: "Les modèles transforment le texte en représentations vectorielles",
      icon: <Brain className="h-8 w-8 text-purple-500" aria-hidden="true" />,
      color: "bg-purple-500/10",
      details: "Les réseaux de neurones profonds encodent le texte en vecteurs de haute dimension, capturant le sens sémantique et les relations conceptuelles.",
      illustration: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&w=600&h=400"
    },
    {
      title: "Génération d'image",
      description: "Création visuelle basée sur l'interprétation du prompt",
      icon: <Image className="h-8 w-8 text-blue-500" aria-hidden="true" />,
      color: "bg-blue-500/10",
      details: "Des modèles de diffusion comme DALL-E, Midjourney ou Stable Diffusion décodent les vecteurs en pixels, créant des images cohérentes avec la description.",
      illustration: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&w=600&h=400"
    },
    {
      title: "Génération audio",
      description: "Production de sons ou musique correspondant au contexte",
      icon: <Music className="h-8 w-8 text-green-500" aria-hidden="true" />,
      color: "bg-green-500/10",
      details: "Des modèles comme AudioLM ou MusicLM génèrent des sons, voix ou compositions musicales basés sur les mêmes vecteurs sémantiques.",
      illustration: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&w=600&h=400"
    },
    {
      title: "Génération vidéo",
      description: "Animation ou séquence vidéo intégrant les éléments précédents",
      icon: <Video className="h-8 w-8 text-amber-500" aria-hidden="true" />,
      color: "bg-amber-500/10",
      details: "Des modèles comme Sora ou Gen-2 animent les images statiques ou créent des séquences vidéo complètes à partir de la description textuelle.",
      illustration: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&w=600&h=400"
    }
  ];

  const nextStep = () => {
    setAnimate(false);
    setTimeout(() => {
      setStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
      setAnimate(true);
    }, 300);
  };

  const resetDemo = () => {
    setAnimate(false);
    setTimeout(() => {
      setStep(0);
      setAnimate(true);
    }, 300);
  };

  const toggleAutoplay = () => {
    if (isPlaying) {
      // Stop autoplay
      if (autoplayTimeout) {
        clearTimeout(autoplayTimeout);
        setAutoplayTimeout(null);
      }
      setIsPlaying(false);
    } else {
      // Start autoplay
      setIsPlaying(true);
      const timeout = setTimeout(() => {
        nextStep();
        // Create a recursive function for autoplay
        const playNextStep = () => {
          const newTimeout = setTimeout(() => {
            setStep((prev) => {
              const newStep = prev === steps.length - 1 ? 0 : prev + 1;
              // If we've completed the cycle, stop autoplay
              if (newStep === 0) {
                setIsPlaying(false);
                return 0;
              }
              const nextTimeout = setTimeout(playNextStep, 3000);
              setAutoplayTimeout(nextTimeout);
              return newStep;
            });
          }, 3000);
          setAutoplayTimeout(newTimeout);
        };
        playNextStep();
      }, 500);
      setAutoplayTimeout(timeout);
    }
  };

  // Gestion des touches de clavier pour l'accessibilité
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!workflowRef.current) return;
      
      // Vérifier si le focus est à l'intérieur du composant
      if (workflowRef.current.contains(document.activeElement)) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault();
          nextStep();
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault();
          setAnimate(false);
          setTimeout(() => {
            setStep((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
            setAnimate(true);
          }, 300);
        } else if (e.key === 'Home') {
          e.preventDefault();
          resetDemo();
        } else if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          toggleAutoplay();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying]);

  // Arrêter l'autoplay quand le composant est démonté
  useEffect(() => {
    return () => {
      if (autoplayTimeout) {
        clearTimeout(autoplayTimeout);
      }
    };
  }, [autoplayTimeout]);

  // Example prompt for demonstration
  const samplePrompt = "Créer une scène de café parisien au coucher du soleil avec des personnes en terrasse, une musique d'accordéon douce en arrière-plan et une légère animation de passants.";

  // Simulated output examples for each step
  const outputExamples = [
    null, // No output for prompt step
    <div className="p-3 bg-purple-500/10 rounded-lg text-xs font-mono overflow-hidden text-muted-foreground">
      {/* Simulated vector representation */}
      [0.23, -0.45, 0.78, 0.12, ...] <span className="animate-pulse">|</span>
    </div>,
    <div className="aspect-video rounded-lg bg-blue-500/10 flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1473091534298-04dcbce3278c?auto=format&w=600&h=400" 
          alt="Visualisation générée par IA d'un café parisien" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>
    </div>,
    <div className="rounded-lg bg-green-500/10 p-4 flex items-center justify-center">
      <div className="w-full space-y-2">
        <div className="flex items-center gap-2">
          <Music className="h-4 w-4 text-green-500" aria-hidden="true" />
          <div className="h-2 bg-green-500/50 rounded-full w-full">
            <div className="h-2 bg-green-500 rounded-full animate-pulse" style={{width: '70%'}}></div>
          </div>
        </div>
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>1:24</span>
          <span>2:15</span>
        </div>
        <div className="flex justify-center gap-4">
          <button 
            className="p-1 rounded-full bg-green-500/20"
            aria-label="Retour au début"
          >
            <RotateCw className="h-3 w-3" aria-hidden="true" />
          </button>
          <button 
            className="p-1 rounded-full bg-green-500/20"
            aria-label="Lire l'audio"
          >
            <Play className="h-3 w-3" aria-hidden="true" />
          </button>
          <button 
            className="p-1 rounded-full bg-green-500/20"
            aria-label="Visualiser la forme d'onde"
          >
            <Music className="h-3 w-3" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>,
    <div className="aspect-video rounded-lg bg-amber-500/10 flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&w=600&h=400" 
          alt="Animation vidéo générée par IA"
          className="w-full h-full object-cover"
        />
        <div className="animate-pulse absolute top-2 right-2 p-1 rounded-full bg-red-500/70">
          <span className="sr-only">Enregistrement en cours</span>
          <div className="w-2 h-2 rounded-full bg-white"></div>
        </div>
      </div>
    </div>
  ];

  return (
    <div 
      className="glass-card p-6 rounded-xl"
      ref={workflowRef}
      tabIndex={0} 
      aria-label="Présentation interactive du workflow de création multimodale. Utilisez les flèches du clavier pour naviguer."
    >
      <h3 className="heading-sm mb-6 flex items-center justify-between">
        <span>Workflow de création multimodale</span>
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={toggleAutoplay}
            className="flex items-center gap-1 text-xs h-8"
            aria-label={isPlaying ? "Arrêter la lecture automatique" : "Démarrer la lecture automatique"}
          >
            {isPlaying ? (
              <>
                <Pause className="h-3 w-3" aria-hidden="true" />
                <span>Arrêter</span>
              </>
            ) : (
              <>
                <Play className="h-3 w-3" aria-hidden="true" />
                <span>Démonstration</span>
              </>
            )}
          </Button>
        </div>
      </h3>
      
      <div className="p-4 border border-primary/20 rounded-lg mb-6 bg-primary/5">
        <div className="flex items-center gap-2 mb-2">
          <MessageSquare className="h-4 w-4 text-primary" aria-hidden="true" />
          <h4 className="font-medium text-sm">Exemple de prompt multimodal</h4>
        </div>
        <p className="text-sm italic text-muted-foreground">{samplePrompt}</p>
      </div>
      
      <div className="relative">
        <div 
          className="flex justify-between mb-4"
          role="progressbar" 
          aria-valuemin={0} 
          aria-valuemax={steps.length - 1} 
          aria-valuenow={step}
          aria-label={`Étape ${step + 1} sur ${steps.length}: ${steps[step].title}`}
        >
          {steps.map((_, index) => (
            <div 
              key={index}
              className={`w-[12%] h-1 rounded-full transition-colors duration-300 ${index <= step ? 'bg-primary' : 'bg-muted'}`}
              aria-hidden="true"
            />
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <motion.div 
            className={`p-5 rounded-lg ${steps[step].color} mb-4`}
            animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                {steps[step].icon}
              </div>
              <div>
                <h4 className="font-medium text-lg">{steps[step].title}</h4>
                <p className="text-muted-foreground">{steps[step].description}</p>
              </div>
            </div>
            
            {/* Illustration ajoutée */}
            <div className="mb-4 rounded-lg overflow-hidden">
              <img 
                src={steps[step].illustration} 
                alt={`Illustration de l'étape: ${steps[step].title}`} 
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="p-3 bg-secondary/20 rounded-lg">
              <p className="text-sm">{steps[step].details}</p>
            </div>
            
            {step > 0 && (
              <div className="mt-4 flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-primary" aria-hidden="true" />
                <p className="text-xs text-muted-foreground">Ce processus utilise une architecture d'IA multimodale avec réseaux de neurones profonds.</p>
              </div>
            )}
          </motion.div>
          
          <motion.div
            className="glass-card p-4 rounded-2xl"
            animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h4 className="font-medium text-sm mb-3 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
              <span>Sortie générée</span>
            </h4>
            
            {step === 0 ? (
              <div className="flex items-center justify-center h-40 border border-dashed border-primary/30 rounded-lg">
                <p className="text-sm text-muted-foreground">Les entrées textuelles sont converties en représentations que l'IA peut traiter</p>
              </div>
            ) : (
              <div className="flex items-center justify-center min-h-40">
                {outputExamples[step]}
              </div>
            )}
          </motion.div>
        </div>
        
        <div 
          className="space-y-2 mt-6"
          role="tablist"
          aria-label="Étapes du workflow multimodal"
        >
          {steps.map((s, idx) => (
            <div 
              key={idx} 
              role="tab"
              aria-selected={step === idx}
              aria-controls={`step-content-${idx}`}
              tabIndex={0}
              className={`flex items-center gap-3 p-2 rounded-md transition-colors cursor-pointer ${
                step === idx ? 'bg-secondary/30' : 'hover:bg-secondary/20'
              }`}
              onClick={() => {
                setAnimate(false);
                setTimeout(() => {
                  setStep(idx);
                  setAnimate(true);
                }, 300);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setAnimate(false);
                  setTimeout(() => {
                    setStep(idx);
                    setAnimate(true);
                  }, 300);
                }
              }}
            >
              <div className={`p-1.5 rounded-full ${step === idx ? s.color : 'bg-secondary/20'}`}>
                {React.cloneElement(s.icon, { className: "h-4 w-4" })}
              </div>
              <span className={`text-sm ${step === idx ? 'font-medium' : 'text-muted-foreground'}`}>
                {s.title}
              </span>
              {step === idx && (
                <div className="ml-auto w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
        
        <div className="flex justify-between mt-6">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={resetDemo}
            className="flex items-center gap-2"
            aria-label="Réinitialiser la démonstration"
          >
            <RefreshCw className="h-4 w-4" aria-hidden="true" />
            <span>Réinitialiser</span>
          </Button>
          <Button 
            onClick={nextStep}
            size="sm"
            className="flex items-center gap-2"
            aria-label="Passer à l'étape suivante"
          >
            <span>Étape suivante</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveWorkflow;
