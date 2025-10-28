
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { CheckCircle2, XCircle, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/SectionHeading';

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface CourseQuizProps {
  title: string;
  questions: QuizQuestion[];
}

const CourseQuiz: React.FC<CourseQuizProps> = ({ title, questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const handleOptionChange = (value: string) => {
    setSelectedOption(parseInt(value));
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    
    setIsSubmitted(true);
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
    setCompleted(false);
  };

  const currentQuiz = questions[currentQuestion];

  return (
    <div className="my-12">
      <SectionHeading title={title} />
      
      <Card className="mt-6">
        <CardContent className="p-6">
          {!completed ? (
            <>
              <div className="mb-6 flex justify-between items-center">
                <span className="text-sm font-medium">
                  Question {currentQuestion + 1} sur {questions.length}
                </span>
                <span className="text-sm text-muted-foreground">
                  Score: {score}
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium mb-4">{currentQuiz.question}</h3>
                
                <RadioGroup 
                  value={selectedOption?.toString()} 
                  onValueChange={handleOptionChange}
                  className="space-y-3"
                  disabled={isSubmitted}
                >
                  {currentQuiz.options.map((option, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center space-x-2 p-3 rounded-md border ${
                        isSubmitted && index === currentQuiz.correctAnswer
                          ? 'border-green-500 bg-green-50 dark:bg-green-950/20'
                          : isSubmitted && index === selectedOption && index !== currentQuiz.correctAnswer
                          ? 'border-red-500 bg-red-50 dark:bg-red-950/20'
                          : 'border-input'
                      }`}
                    >
                      <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                      <Label 
                        htmlFor={`option-${index}`}
                        className="flex-1 cursor-pointer py-1"
                      >
                        {option}
                      </Label>
                      {isSubmitted && index === currentQuiz.correctAnswer && (
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      )}
                      {isSubmitted && index === selectedOption && index !== currentQuiz.correctAnswer && (
                        <XCircle className="h-5 w-5 text-red-500" />
                      )}
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {isSubmitted && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mb-6 p-4 bg-muted rounded-md"
                >
                  <div className="flex gap-2 mb-2">
                    <HelpCircle className="h-5 w-5 text-primary shrink-0" />
                    <h4 className="font-medium">Explication</h4>
                  </div>
                  <p className="text-muted-foreground">{currentQuiz.explanation}</p>
                </motion.div>
              )}

              <div className="flex justify-end gap-4">
                {!isSubmitted ? (
                  <Button
                    onClick={handleSubmit}
                    disabled={selectedOption === null}
                  >
                    Vérifier
                  </Button>
                ) : (
                  <Button onClick={handleNext}>
                    {currentQuestion < questions.length - 1 ? 'Question suivante' : 'Voir les résultats'}
                  </Button>
                )}
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <h3 className="text-2xl font-bold mb-4">Quiz terminé!</h3>
              <p className="text-lg mb-6">
                Vous avez obtenu {score} sur {questions.length} points
              </p>
              <div className="text-xl font-medium mb-8">
                {score === questions.length ? (
                  <div className="flex justify-center items-center gap-2 text-green-500">
                    <CheckCircle2 className="h-6 w-6" />
                    <span>Parfait!</span>
                  </div>
                ) : score >= questions.length / 2 ? (
                  <span className="text-primary">Bon travail!</span>
                ) : (
                  <span className="text-amber-500">Continuez à apprendre!</span>
                )}
              </div>
              <Button onClick={handleRestart}>Recommencer le quiz</Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CourseQuiz;
