
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface QuickFact {
  label: string;
  value: string;
  trend?: 'up' | 'down' | 'stable';
  context?: string;
}

interface QuickFactBoxProps {
  title: string;
  description?: string;
  icon?: string;
  facts?: QuickFact[];
  variant?: 'default' | 'success' | 'warning' | 'destructive';
}

const QuickFactBox: React.FC<QuickFactBoxProps> = ({ 
  title, 
  description,
  icon,
  facts = [], 
  variant = 'default' 
}) => {
  const getTrendIcon = (trend?: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-3 w-3 text-green-500" />;
      case 'down':
        return <TrendingDown className="h-3 w-3 text-red-500" />;
      case 'stable':
        return <Minus className="h-3 w-3 text-gray-500" />;
      default:
        return null;
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'success':
        return 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/30';
      case 'warning':
        return 'border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-950/30';
      case 'destructive':
        return 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/30';
      default:
        return 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/30';
    }
  };

  return (
    <Card className={`${getVariantStyles()}`}>
      <CardContent className="pt-4">
        <div className="flex items-center gap-2 mb-3">
          {icon && <span className="text-2xl">{icon}</span>}
          <h4 className="font-medium">{title}</h4>
        </div>
        {description && (
          <p className="text-sm text-muted-foreground mb-3">{description}</p>
        )}
        {facts.length > 0 && (
          <div className="space-y-2">
            {facts.map((fact, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{fact.label}</span>
                <div className="flex items-center gap-1">
                  <Badge variant="outline">{fact.value}</Badge>
                  {getTrendIcon(fact.trend)}
                </div>
              </div>
            ))}
          </div>
        )}
        {facts.some(f => f.context) && (
          <div className="mt-3 pt-3 border-t text-xs text-muted-foreground">
            {facts.find(f => f.context)?.context}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default QuickFactBox;
