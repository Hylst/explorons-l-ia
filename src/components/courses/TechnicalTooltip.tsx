
import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface TechnicalTooltipProps {
  term: string;
  definition: string;
  children: React.ReactNode;
}

const TechnicalTooltip: React.FC<TechnicalTooltipProps> = ({ 
  term, 
  definition, 
  children 
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="underline decoration-dotted decoration-primary cursor-help">
          {children}
        </TooltipTrigger>
        <TooltipContent className="max-w-xs">
          <div>
            <p className="font-medium mb-1">{term}</p>
            <p className="text-sm">{definition}</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TechnicalTooltip;
