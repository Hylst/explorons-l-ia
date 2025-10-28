
import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  description?: string;
  pretitle?: string;
  center?: boolean;
  light?: boolean;
  underline?: boolean;
  animated?: boolean;
}

/**
 * Composant d'en-tête de section avec animation et styling paramétrable
 * @param {SectionHeadingProps} props - Les propriétés du composant
 * @returns {JSX.Element} Le composant SectionHeading
 */
const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  description,
  pretitle,
  center = false,
  light = false,
  underline = false,
  animated = true
}) => {
  const containerClasses = `mb-8 ${center ? 'text-center' : ''}`;
  const titleClasses = `heading-lg ${light ? 'text-white' : 'text-foreground'}`;
  const descriptionClasses = `mt-4 text-lg ${light ? 'text-white/80' : 'text-muted-foreground'}`;
  const pretitleClasses = `text-sm uppercase tracking-wider font-medium mb-2 ${light ? 'text-white/60' : 'text-primary'}`;
  
  const animations = {
    container: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    },
    pretitle: {
      hidden: { opacity: 0, y: 10 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    },
    title: {
      hidden: { opacity: 0, y: 15 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    },
    underline: {
      hidden: { width: 0 },
      visible: { width: '60px', transition: { duration: 0.7, ease: 'easeOut' } }
    },
    description: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }
    }
  };

  const content = (
    <div className={containerClasses}>
      {pretitle && (
        <motion.p 
          className={pretitleClasses}
          variants={animations.pretitle}
        >
          {pretitle}
        </motion.p>
      )}

      <motion.h2 
        className={titleClasses}
        variants={animations.title}
      >
        {title}
      </motion.h2>

      {underline && (
        <motion.div 
          className={`h-1 bg-primary rounded-full mt-4 ${center ? 'mx-auto' : ''}`}
          variants={animations.underline}
        />
      )}

      {description && (
        <motion.p 
          className={descriptionClasses}
          variants={animations.description}
        >
          {description}
        </motion.p>
      )}
    </div>
  );

  if (animated) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={animations.container}
      >
        {content}
      </motion.div>
    );
  }

  return content;
};

export default SectionHeading;
