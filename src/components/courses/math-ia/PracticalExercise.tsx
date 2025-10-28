
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, Target } from 'lucide-react';

interface ExerciseStep {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface PracticalExerciseProps {
  title: string;
  description: string;
  steps: ExerciseStep[];
}

const PracticalExercise: React.FC<PracticalExerciseProps> = ({
  title,
  description,
  steps
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    if (answerIndex === steps[currentStep].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const reset = () => {
    setCurrentStep(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
  };

  const currentExercise = steps[currentStep];
  const isCompleted = currentStep >= steps.length;

  return (
    <Card className="bg-gradient-to-br from-green-50/50 to-blue-50/50 dark:from-green-950/20 dark:to-blue-950/20 border-green-200 dark:border-green-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <Target className="h-5 w-5 text-green-600" />
          {title}
        </CardTitle>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex items-center gap-2">
          <Badge variant="outline">
            Étape {Math.min(currentStep + 1, steps.length)} / {steps.length}
          </Badge>
          <Badge variant="secondary">
            Score : {score} / {steps.length}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        {!isCompleted ? (
          <div className="space-y-4">
            <div className="bg-card/50 dark:bg-card/30 p-4 rounded-lg border border-border/50">
              <h5 className="font-medium text-foreground mb-3">{currentExercise.question}</h5>
              <div className="grid gap-2">
                {currentExercise.options.map((option, index) => (
                  <Button
                    key={index}
                    variant={
                      selectedAnswer === index
                        ? index === currentExercise.correctAnswer
                          ? "default"
                          : "destructive"
                        : "outline"
                    }
                    className="justify-start text-left h-auto p-3"
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showExplanation}
                  >
                    <div className="flex items-center gap-2">
                      {showExplanation && (
                        <>
                          {index === currentExercise.correctAnswer ? (
                            <CheckCircle className="h-4 w-4" />
                          ) : selectedAnswer === index ? (
                            <XCircle className="h-4 w-4" />
                          ) : null}
                        </>
                      )}
                      <span>{option}</span>
                    </div>
                  </Button>
                ))}
              </div>
            </div>

            {showExplanation && (
              <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg border border-primary/20">
                <h6 className="font-medium text-foreground mb-2">Explication :</h6>
                <p className="text-sm text-muted-foreground">{currentExercise.explanation}</p>
                <Button onClick={nextStep} className="mt-3" size="sm">
                  {currentStep + 1 < steps.length ? "Question suivante" : "Terminer"}
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center space-y-4">
            <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                Exercice terminé !
              </h5>
              <p className="text-green-700 dark:text-green-300">
                Vous avez obtenu {score} / {steps.length} bonnes réponses.
              </p>
            </div>
            <Button onClick={reset} variant="outline">
              Recommencer
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PracticalExercise;
