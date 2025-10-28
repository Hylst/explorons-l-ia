
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface InteractiveFeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  gradient: string;
  features: string[];
  delay?: number;
}

const InteractiveFeatureCard: React.FC<InteractiveFeatureCardProps> = ({
  title,
  description,
  icon,
  link,
  gradient,
  features,
  delay = 0
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <Card className="relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer bg-card/50 backdrop-blur-sm border-border/50">
        {/* Gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
        
        {/* Animated border */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-xl transition-colors duration-500"></div>
        
        <CardContent className="p-6 relative z-10">
          <div className="mb-4 transform group-hover:scale-125 group-hover:rotate-6 transition-all duration-500">
            {icon}
          </div>
          
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-muted-foreground mb-4 text-sm">
            {description}
          </p>

          <motion.div
            initial={false}
            animate={{ height: isExpanded ? 'auto' : 0 }}
            className="overflow-hidden"
          >
            <div className="space-y-2 mb-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Sparkles className="h-3 w-3 text-primary/60" />
                  {feature}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-xs"
            >
              {isExpanded ? 'Moins' : 'Plus d\'infos'}
            </Button>
            
            <Button variant="link" className="p-0 group-hover:gap-2 transition-all duration-300" asChild>
              <Link to={link} className="flex items-center gap-1 text-xs">
                Explorer
                <ChevronRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </CardContent>
        
        {/* Floating particles effect */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
        <div className="absolute bottom-4 left-4 w-1 h-1 bg-secondary/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{ animationDelay: '0.5s' }}></div>
      </Card>
    </motion.div>
  );
};

export default InteractiveFeatureCard;
