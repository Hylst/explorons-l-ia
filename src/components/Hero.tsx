
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ActionProps {
  label: string;
  href: string;
}

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  centered?: boolean;
  overlap?: boolean;
  gradient?: boolean;
  primaryAction?: ActionProps;
  secondaryAction?: ActionProps;
}

/**
 * Composant Hero pour les entêtes de page
 * @param {HeroProps} props - Les propriétés du composant
 * @returns {JSX.Element} Le composant Hero
 */
const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  centered = true,
  overlap = false,
  gradient = true,
  primaryAction,
  secondaryAction,
}) => {
  // Style conditionnel basé sur les props
  const containerClasses = `
    w-full relative 
    ${overlap ? 'pb-24' : 'pb-12'} 
    ${backgroundImage ? 'pt-36' : 'pt-24'} 
    ${gradient ? 'bg-gradient-to-b from-primary/5 to-background' : 'bg-background'}
  `;

  // Animation des éléments du hero
  const animations = {
    title: {
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
      }
    },
    subtitle: {
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 }
      }
    },
    actions: {
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut', delay: 0.3 }
      }
    }
  };

  return (
    <div className={containerClasses}>
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      <div className="container px-4 mx-auto max-w-6xl relative z-10">
        <div className={`max-w-3xl mx-auto ${centered ? 'text-center' : ''}`}>
          <motion.h1 
            className="heading-xl mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80"
            initial="hidden"
            animate="visible"
            variants={animations.title}
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto"
              initial="hidden"
              animate="visible"
              variants={animations.subtitle}
            >
              {subtitle}
            </motion.p>
          )}
          
          {(primaryAction || secondaryAction) && (
            <motion.div 
              className="mt-8 flex flex-wrap gap-4 justify-center"
              initial="hidden"
              animate="visible"
              variants={animations.actions}
            >
              {primaryAction && (
                <Button asChild size="lg">
                  <a href={primaryAction.href}>
                    {primaryAction.label}
                  </a>
                </Button>
              )}
              
              {secondaryAction && (
                <Button variant="outline" asChild size="lg">
                  <a href={secondaryAction.href}>
                    {secondaryAction.label}
                  </a>
                </Button>
              )}
            </motion.div>
          )}
        </div>
      </div>
      
      {overlap && (
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
      )}
    </div>
  );
};

export default Hero;
