
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';

interface AnalogiePedagogiqueElement {
  aspect: string;
  explanation: string;
  mathConcept: string;
}

interface AnalogiePedagogiqueProps {
  title: string;
  description: string;
  elements: AnalogiePedagogiqueElement[];
}

const AnalogiePedagogique: React.FC<AnalogiePedagogiqueProps> = ({ title, description, elements }) => {
  return (
    <Card className="border-l-4 border-l-amber-500 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-amber-500" />
          {title}
        </CardTitle>
        <p className="text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-4">
          {elements.map((element, index) => (
            <div key={index} className="bg-card p-4 rounded-lg border">
              <h5 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">{element.aspect}</h5>
              <p className="text-sm mb-2">{element.explanation}</p>
              <p className="text-xs text-muted-foreground font-mono bg-muted/50 p-2 rounded">
                {element.mathConcept}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AnalogiePedagogique;
