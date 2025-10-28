
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { HelpCircle } from 'lucide-react';

interface IASectionProps {
  icon: ReactNode;
  title: string;
  description: string;
  benefits: string[];
  isReversed?: boolean;
  detailsCard: ReactNode;
  delay?: number;
  sectionId?: string;
}

const IASection: React.FC<IASectionProps> = ({ 
  icon, 
  title, 
  description, 
  benefits, 
  isReversed = false,
  detailsCard,
  delay = 0,
  sectionId
}) => {
  const animationClass = isReversed 
    ? "order-1 lg:order-2" 
    : "";
  
  const detailsAnimationClass = isReversed 
    ? "order-2 lg:order-1" 
    : "";

  // Enhanced hover animations with spring effects
  const cardVariants = {
    initial: { scale: 1, rotateY: 0 },
    hover: { 
      scale: 1.02, 
      rotateY: isReversed ? -2 : 2,
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

  const benefitVariants = {
    initial: { x: 0, backgroundColor: "transparent" },
    hover: { 
      x: 8,
      backgroundColor: "rgba(var(--primary), 0.05)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  // Tooltip content for technical terms
  const tooltipContent = {
    "API": {
      title: "Interface de Programmation d'Application",
      content: "Comme un menu de restaurant qui liste ce que vous pouvez commander, une API liste les fonctions disponibles d'un service. Par exemple, l'API de GPT-4 vous permet d'envoyer du texte et de recevoir une réponse générée.",
      example: "Exemple : Une API météo vous donne la température quand vous lui demandez."
    },
    "corpus": {
      title: "Corpus de données",
      content: "Une collection gigantesque de textes utilisée pour entraîner l'IA, comme une bibliothèque contenant millions de livres, articles et sites web.",
      example: "Analogie : C'est comme nourrir un enfant avec tous les livres du monde pour qu'il apprenne à parler."
    },
    "transformers": {
      title: "Architecture Transformers",
      content: "Une méthode révolutionnaire pour traiter le langage qui permet à l'IA de comprendre le contexte en 'prêtant attention' aux mots importants.",
      example: "Comme avoir des lunettes spéciales qui surlignent automatiquement les mots-clés dans un texte."
    }
  };

  const addTooltipsToText = (text: string) => {
    const terms = Object.keys(tooltipContent);
    let processedText = text;
    
    terms.forEach(term => {
      const regex = new RegExp(`\\b${term}\\b`, 'gi');
      const tooltip = tooltipContent[term as keyof typeof tooltipContent];
      
      processedText = processedText.replace(regex, (match) => {
        return `<tooltip-term data-term="${term}" data-title="${tooltip.title}" data-content="${tooltip.content}" data-example="${tooltip.example}">${match}</tooltip-term>`;
      });
    });
    
    return processedText;
  };

  const TooltipTerm: React.FC<{ term: string; title: string; content: string; example: string; children: ReactNode }> = ({ 
    term, title, content, example, children 
  }) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="relative cursor-help border-b border-dotted border-primary/50 hover:border-primary transition-colors">
            {children}
            <HelpCircle className="inline w-3 h-3 ml-1 text-primary/60 hover:text-primary transition-colors" />
          </span>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs p-4 bg-card border shadow-lg">
          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-primary">{title}</h4>
            <p className="text-sm text-muted-foreground">{content}</p>
            {example && (
              <div className="mt-2 p-2 bg-secondary/50 rounded text-xs">
                <span className="font-medium">💡 {example}</span>
              </div>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );

  const renderDescriptionWithTooltips = (text: string) => {
    const parts = text.split(/(transformers|corpus|API)/gi);
    
    return parts.map((part, index) => {
      const lowerPart = part.toLowerCase();
      if (tooltipContent[lowerPart as keyof typeof tooltipContent]) {
        const tooltip = tooltipContent[lowerPart as keyof typeof tooltipContent];
        return (
          <TooltipTerm 
            key={index}
            term={lowerPart}
            title={tooltip.title}
            content={tooltip.content}
            example={tooltip.example}
          >
            {part}
          </TooltipTerm>
        );
      }
      return part;
    });
  };
    
  return (
    <div id={sectionId} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <motion.div 
        className={animationClass}
        initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: delay * 0.1 }}
        viewport={{ once: true }}
        variants={cardVariants}
        whileHover="hover"
      >
        <motion.div 
          className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
          variants={iconVariants}
        >
          {icon}
        </motion.div>
        
        <motion.h3 
          className="heading-lg mb-4 hover:text-primary transition-colors duration-300 cursor-default"
          whileHover={{ scale: 1.02 }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="mb-6 text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300"
          whileHover={{ x: 4 }}
        >
          {renderDescriptionWithTooltips(description)}
        </motion.p>
        
        <motion.div 
          className="bg-secondary/10 hover:bg-secondary/20 p-5 rounded-xl mb-6 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-primary/10"
          whileHover={{ scale: 1.01, y: -2 }}
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <h4 className="font-medium text-base mb-3 cursor-help flex items-center gap-2">
                  Principaux avantages
                  <HelpCircle className="w-4 h-4 text-primary/60 hover:text-primary transition-colors" />
                </h4>
              </TooltipTrigger>
              <TooltipContent>
                <p>Les bénéfices clés de cette technologie d'IA</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <ul className="space-y-2">
            {benefits.map((benefit, index) => (
              <motion.li 
                key={index} 
                className="flex items-start rounded-lg p-2 transition-all duration-200 hover:bg-primary/5"
                variants={benefitVariants}
                whileHover="hover"
                initial="initial"
              >
                <motion.span 
                  className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  +
                </motion.span>
                <span className="hover:font-medium transition-all duration-200">{benefit}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className={`${detailsAnimationClass} glass-card p-6 rounded-2xl hover:shadow-2xl border border-primary/10 hover:border-primary/20 transition-all duration-500`}
        initial={{ opacity: 0, x: isReversed ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: (delay + 0.2) * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ 
          scale: 1.01, 
          y: -5,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 20
          }
        }}
      >
        {detailsCard}
      </motion.div>
    </div>
  );
};

export default IASection;
