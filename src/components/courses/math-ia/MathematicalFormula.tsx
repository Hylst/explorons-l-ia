
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface MathematicalFormulaProps {
  title: string;
  formula: string;
  explanation: string;
  example?: string;
  type?: 'primary' | 'secondary' | 'accent';
}

const MathematicalFormula: React.FC<MathematicalFormulaProps> = ({
  title,
  formula,
  explanation,
  example,
  type = 'primary'
}) => {
  const colorClasses = {
    primary: 'border-primary/30 bg-primary/5 dark:bg-primary/10',
    secondary: 'border-secondary/30 bg-secondary/5 dark:bg-secondary/10',
    accent: 'border-accent/30 bg-accent/5 dark:bg-accent/10'
  };

  return (
    <Card className={`${colorClasses[type]} border-2`}>
      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h5 className="font-semibold text-foreground">{title}</h5>
            <Badge variant="outline" className="font-mono">{formula}</Badge>
          </div>
          
          <p className="text-sm text-muted-foreground">{explanation}</p>
          
          {example && (
            <div className="bg-card/50 dark:bg-card/30 p-3 rounded border border-border/50">
              <p className="text-xs font-medium text-foreground mb-1">Exemple :</p>
              <p className="text-sm text-muted-foreground font-mono">{example}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MathematicalFormula;
