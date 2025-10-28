
import React from 'react';
import { 
  Card, 
  CardContent 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from 'lucide-react';
import { IAToolResource } from './resourcesData';

interface IAToolCardProps {
  tool: IAToolResource;
}

export const IAToolCard: React.FC<IAToolCardProps> = ({ tool }) => {
  const isInternalTool = tool.link.startsWith('/');
  
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-3">
          <Badge>{tool.category}</Badge>
        </div>
        <h3 className="text-lg font-medium mb-2">{tool.name}</h3>
        <p className="text-sm text-muted-foreground mb-4 flex-grow">{tool.description}</p>
        <Button variant="outline" size="sm" className="w-full gap-2 mt-auto" asChild>
          {isInternalTool ? (
            <a href={tool.link}>
              <ExternalLink className="h-4 w-4" />
              Utiliser l'outil
            </a>
          ) : (
            <a href={tool.link} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              Visiter
            </a>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default IAToolCard;
