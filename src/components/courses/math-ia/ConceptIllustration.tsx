
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LucideIcon } from 'lucide-react';

interface ConceptIllustrationProps {
  icon: LucideIcon;
  title: string;
  description: string;
  examples: Array<{
    label: string;
    value: string;
    description: string;
  }>;
  bgColor?: string;
}

const ConceptIllustration: React.FC<ConceptIllustrationProps> = ({
  icon: Icon,
  title,
  description,
  examples,
  bgColor = 'bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20'
}) => {
  return (
    <Card className={`${bgColor} border-primary/20`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <Icon className="h-5 w-5 text-primary" />
          {title}
        </CardTitle>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {examples.map((example, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-card/50 dark:bg-card/30 rounded-lg border border-border/50">
              <div className="flex items-center gap-3">
                <Badge variant="secondary" className="min-w-fit">{example.label}</Badge>
                <span className="font-mono text-sm text-foreground">{example.value}</span>
              </div>
              <p className="text-xs text-muted-foreground ml-2">{example.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ConceptIllustration;
