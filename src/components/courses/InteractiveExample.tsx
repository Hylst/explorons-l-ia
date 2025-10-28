
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Play, RotateCcw } from 'lucide-react';

interface ExampleStep {
  title: string;
  description: string;
  result?: string;
}

interface InteractiveExampleProps {
  title: string;
  description: string;
  steps: ExampleStep[];
  finalMessage?: string;
}

const InteractiveExample: React.FC<InteractiveExampleProps> = ({
  title,
  description,
  steps,
  finalMessage
}) => {
  const [currentStep, setCurrentStep] = useState(-1);
  const [isCompleted, setIsCompleted] = useState(false);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const reset = () => {
    setCurrentStep(-1);
    setIsCompleted(false);
  };

  return (
    <Card className="border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-amber-500" />
          {title}
        </CardTitle>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {currentStep >= 0 && (
            <div className="space-y-3">
              {steps.slice(0, currentStep + 1).map((step, index) => (
                <div key={index} className="border-l-2 border-primary pl-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="secondary">Étape {index + 1}</Badge>
                    <h4 className="font-medium">{step.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{step.description}</p>
                  {step.result && (
                    <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded p-2 text-sm">
                      <strong>Résultat :</strong> {step.result}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {isCompleted && finalMessage && (
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-sm">
              <strong>Conclusion :</strong> {finalMessage}
            </div>
          )}

          <div className="flex gap-2">
            {!isCompleted ? (
              <Button onClick={nextStep} size="sm">
                <Play className="h-4 w-4 mr-2" />
                {currentStep === -1 ? 'Commencer' : currentStep < steps.length - 1 ? 'Étape suivante' : 'Finaliser'}
              </Button>
            ) : (
              <Button onClick={reset} size="sm" variant="outline">
                <RotateCcw className="h-4 w-4 mr-2" />
                Recommencer
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InteractiveExample;
