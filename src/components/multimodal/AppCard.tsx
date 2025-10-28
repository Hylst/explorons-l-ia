
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ArrowRightCircle } from 'lucide-react';
import { AppExample } from './ApplicationsData';
import { Button } from '@/components/ui/button';

interface AppCardProps {
  app: AppExample;
  onExampleClick: (id: string, title: string) => void;
}

const AppCard: React.FC<AppCardProps> = ({ app, onExampleClick }) => {
  const IconComponent = app.iconComponent;
  
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full flex flex-col border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg">
        <div className="aspect-[3/2] w-full overflow-hidden">
          <img 
            src={app.imagePath} 
            alt={app.title} 
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
            loading="lazy"
          />
        </div>
        <div className="p-5 flex flex-col flex-grow">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-full bg-primary/10">
              <IconComponent size={24} className={`text-${app.icon === 'ImagePlus' ? 'fuchsia' : app.icon === 'Music' ? 'blue' : app.icon === 'Code' ? 'emerald' : app.icon === 'Video' ? 'amber' : app.icon === 'MessagesSquare' ? 'indigo' : app.icon === 'FileText' ? 'purple' : app.icon === 'Volume2' ? 'pink' : app.icon === 'Palette' ? 'rose' : app.icon === 'Pencil' ? 'cyan' : app.icon === 'Braces' ? 'orange' : app.icon === 'Building' ? 'lime' : app.icon === 'Users' ? 'violet' : app.icon === 'UserSquare2' ? 'teal' : 'primary'}-500`} />
            </div>
            <h3 className="font-semibold heading-sm">{app.title}</h3>
          </div>
          <p className="text-muted-foreground text-sm flex-grow">{app.description}</p>
          
          <div className="mt-3 mb-4">
            <p className="text-xs font-medium text-muted-foreground mb-1.5">Outils populaires:</p>
            <div className="flex flex-wrap gap-1.5">
              {app.tools.slice(0, 2).map((tool, i) => (
                <span key={i} className="inline-block px-2 py-1 bg-secondary/40 text-xs rounded-full">
                  {tool}
                </span>
              ))}
              {app.tools.length > 2 && (
                <span className="inline-block px-2 py-1 bg-secondary/20 text-xs rounded-full">
                  +{app.tools.length - 2}
                </span>
              )}
            </div>
          </div>
          
          <Button 
            onClick={() => onExampleClick(app.id, app.title)}
            variant="ghost"
            className="mt-auto inline-flex items-center gap-1 text-primary font-medium text-sm hover:bg-primary/5 px-0 justify-start"
            aria-label={`En savoir plus sur ${app.title}`}
          >
            Découvrir <ArrowRightCircle size={14} />
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default AppCard;
