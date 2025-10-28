
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Shield, ShieldAlert, ShieldCheck, ShieldX } from 'lucide-react';

interface QualityIndicatorProps {
  score: number;
  className?: string;
}

export const QualityIndicator: React.FC<QualityIndicatorProps> = ({ score, className = '' }) => {
  const getQualityInfo = (score: number) => {
    if (score >= 90) {
      return {
        label: 'Excellent',
        color: 'bg-green-500',
        textColor: 'text-green-700',
        icon: ShieldCheck,
        description: 'Ressource de haute qualité, vérifiée et fiable'
      };
    } else if (score >= 70) {
      return {
        label: 'Bon',
        color: 'bg-blue-500',
        textColor: 'text-blue-700',
        icon: Shield,
        description: 'Ressource de bonne qualité avec quelques points d\'attention'
      };
    } else if (score >= 50) {
      return {
        label: 'Moyen',
        color: 'bg-yellow-500',
        textColor: 'text-yellow-700',
        icon: ShieldAlert,
        description: 'Ressource avec des problèmes mineurs détectés'
      };
    } else {
      return {
        label: 'Problème',
        color: 'bg-red-500',
        textColor: 'text-red-700',
        icon: ShieldX,
        description: 'Ressource avec des problèmes importants détectés'
      };
    }
  };

  const qualityInfo = getQualityInfo(score);
  const Icon = qualityInfo.icon;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Badge variant="outline" className={`${className} ${qualityInfo.textColor} border-current`}>
          <Icon className="w-3 h-3 mr-1" />
          {qualityInfo.label}
        </Badge>
      </TooltipTrigger>
      <TooltipContent>
        <div className="text-center">
          <div className="font-medium">Score de qualité: {score}/100</div>
          <div className="text-sm text-muted-foreground mt-1">
            {qualityInfo.description}
          </div>
        </div>
      </TooltipContent>
    </Tooltip>
  );
};
