
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Info, DollarSign, Clock, Zap, Users } from 'lucide-react';

export interface ProviderInfo {
  id: string;
  name: string;
  pricing: {
    free?: string;
    paid?: string;
    unit?: string;
  };
  limits: {
    rateLimit?: string;
    dailyLimit?: string;
    monthlyLimit?: string;
  };
  features: string[];
  speed: 'slow' | 'medium' | 'fast' | 'ultra-fast';
  reliability: 'experimental' | 'stable' | 'production';
  description: string;
}

interface ProviderInfoCardProps {
  provider: ProviderInfo;
  isSelected?: boolean;
  onClick?: () => void;
}

const ProviderInfoCard: React.FC<ProviderInfoCardProps> = ({ 
  provider, 
  isSelected = false, 
  onClick 
}) => {
  const getSpeedColor = (speed: string) => {
    switch (speed) {
      case 'ultra-fast': return 'bg-green-500';
      case 'fast': return 'bg-blue-500';
      case 'medium': return 'bg-yellow-500';
      case 'slow': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getReliabilityColor = (reliability: string) => {
    switch (reliability) {
      case 'production': return 'text-green-600';
      case 'stable': return 'text-blue-600';
      case 'experimental': return 'text-orange-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <TooltipProvider>
      <Card 
        className={`cursor-pointer transition-all duration-200 ${
          isSelected 
            ? 'ring-2 ring-primary bg-primary/5 dark:bg-primary/10' 
            : 'hover:shadow-md'
        }`}
        onClick={onClick}
      >
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">{provider.name}</CardTitle>
            <div className="flex gap-1">
              {provider.pricing.free && (
                <Badge variant="secondary" className="text-xs">
                  Gratuit
                </Badge>
              )}
              <Badge 
                variant="outline" 
                className={`text-xs ${getReliabilityColor(provider.reliability)}`}
              >
                {provider.reliability}
              </Badge>
            </div>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {provider.description}
          </p>
        </CardHeader>
        <CardContent className="space-y-3">
          {/* Vitesse */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              <span className="text-sm">Vitesse</span>
            </div>
            <div className="flex items-center gap-2">
              <div className={`h-2 w-8 rounded ${getSpeedColor(provider.speed)}`} />
              <span className="text-xs capitalize">{provider.speed}</span>
            </div>
          </div>

          {/* Tarification */}
          {(provider.pricing.free || provider.pricing.paid) && (
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                <span className="text-sm">Prix</span>
              </div>
              <div className="text-right">
                {provider.pricing.free && (
                  <div className="text-xs text-green-600">{provider.pricing.free}</div>
                )}
                {provider.pricing.paid && (
                  <div className="text-xs text-muted-foreground">
                    {provider.pricing.paid}
                    {provider.pricing.unit && ` ${provider.pricing.unit}`}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Limites */}
          {(provider.limits.rateLimit || provider.limits.dailyLimit) && (
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm">Limites</span>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="h-3 w-3" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="text-xs space-y-1">
                      {provider.limits.rateLimit && (
                        <div>Taux: {provider.limits.rateLimit}</div>
                      )}
                      {provider.limits.dailyLimit && (
                        <div>Quotidien: {provider.limits.dailyLimit}</div>
                      )}
                      {provider.limits.monthlyLimit && (
                        <div>Mensuel: {provider.limits.monthlyLimit}</div>
                      )}
                    </div>
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="text-right">
                {provider.limits.rateLimit && (
                  <div className="text-xs">{provider.limits.rateLimit}</div>
                )}
                {provider.limits.dailyLimit && (
                  <div className="text-xs text-muted-foreground">
                    {provider.limits.dailyLimit}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Fonctionnalités */}
          {provider.features.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-4 w-4" />
                <span className="text-sm">Fonctionnalités</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {provider.features.slice(0, 3).map((feature, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {feature}
                  </Badge>
                ))}
                {provider.features.length > 3 && (
                  <Tooltip>
                    <TooltipTrigger>
                      <Badge variant="outline" className="text-xs">
                        +{provider.features.length - 3}
                      </Badge>
                    </TooltipTrigger>
                    <TooltipContent>
                      <div className="text-xs space-y-1">
                        {provider.features.slice(3).map((feature, index) => (
                          <div key={index}>{feature}</div>
                        ))}
                      </div>
                    </TooltipContent>
                  </Tooltip>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </TooltipProvider>
  );
};

export default ProviderInfoCard;
