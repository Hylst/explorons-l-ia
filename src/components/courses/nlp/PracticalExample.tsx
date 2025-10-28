
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Code, Play } from 'lucide-react';

interface PracticalExampleProps {
  title: string;
  description: string;
  input: string;
  output: string;
  transformation: string;
  icon: React.ReactNode;
  difficulty?: 'facile' | 'moyen' | 'difficile';
}

const PracticalExample: React.FC<PracticalExampleProps> = ({
  title,
  description,
  input,
  output,
  transformation,
  icon,
  difficulty = 'moyen'
}) => {
  const difficultyColors = {
    facile: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    moyen: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
    difficile: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
  };

  return (
    <Card className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-800/50 border-slate-200 dark:border-slate-700">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-primary">{icon}</div>
            <div>
              <CardTitle className="text-lg text-foreground">{title}</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">{description}</p>
            </div>
          </div>
          <Badge className={difficultyColors[difficulty]}>
            {difficulty}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          {/* Input */}
          <div className="space-y-2">
            <h5 className="font-medium text-foreground flex items-center gap-2">
              <Play className="h-4 w-4 text-blue-500" />
              Entrée
            </h5>
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 p-3 rounded-lg">
              <code className="text-sm text-blue-900 dark:text-blue-100 font-mono break-all">
                {input}
              </code>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <ArrowRight className="h-6 w-6 text-primary" />
          </div>

          {/* Output */}
          <div className="space-y-2">
            <h5 className="font-medium text-foreground flex items-center gap-2">
              <Code className="h-4 w-4 text-green-500" />
              Sortie
            </h5>
            <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 p-3 rounded-lg">
              <code className="text-sm text-green-900 dark:text-green-100 font-mono break-all">
                {output}
              </code>
            </div>
          </div>
        </div>

        {/* Transformation explanation */}
        <div className="bg-purple-50 dark:bg-purple-950/30 border-l-4 border-purple-400 p-4 rounded-r-lg">
          <h5 className="font-medium text-purple-900 dark:text-purple-100 mb-2">Transformation :</h5>
          <p className="text-sm text-purple-800 dark:text-purple-200 leading-relaxed">
            {transformation}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PracticalExample;
