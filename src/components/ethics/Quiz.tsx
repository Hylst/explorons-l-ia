
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { CheckCircle2, XCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

const ethicsQuestions: Question[] = [
  {
    id: 1,
    text: "Quel principe éthique exige que les systèmes d'IA soient compréhensibles et explicables?",
    options: ["Sécurité", "Transparence", "Équité", "Responsabilité"],
    correctAnswer: 1
  },
  {
    id: 2,
    text: "Quelle réglementation européenne encadre l'utilisation des données personnelles?",
    options: ["AI Act", "RGPD", "Digital Services Act", "ePrivacy"],
    correctAnswer: 1
  },
  {
    id: 3,
    text: "Qu'est-ce que le biais algorithmique?",
    options: [
      "Un choix volontaire fait par les concepteurs d'IA", 
      "Un problème technique impossible à résoudre", 
      "Une distorsion systématique dans les résultats d'un algorithme",
      "Une erreur de programmation"
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    text: "Quelle approche de l'IA Act européen classe les systèmes d'IA selon leur niveau de risque?",
    options: [
      "Approche par secteur", 
      "Approche par technologie", 
      "Approche par risque",
      "Approche par finalité"
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    text: "Quel concept désigne la capacité à vérifier qui est responsable des décisions d'un système d'IA?",
    options: [
      "Traçabilité", 
      "Explicabilité", 
      "Imputabilité",
      "Certification"
    ],
    correctAnswer: 0
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const { toast } = useToast();

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNext = () => {
    if (selectedOption === null) {
      toast({
        title: "Sélectionnez une réponse",
        description: "Veuillez choisir une option avant de continuer.",
        variant: "destructive",
      });
      return;
    }

    // Check if answer is correct
    if (selectedOption === ethicsQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setShowFeedback(true);

    // Move to next question after delay
    setTimeout(() => {
      setShowFeedback(false);
      setSelectedOption(null);
      
      if (currentQuestion < ethicsQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResults(false);
  };

  if (showResults) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Résultats du quiz</CardTitle>
          <CardDescription>
            Vous avez terminé le quiz sur l'éthique de l'IA!
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <div className="mb-4 text-4xl font-bold text-primary">
            {score} / {ethicsQuestions.length}
          </div>
          <p className="mb-6">
            {score === ethicsQuestions.length 
              ? "Félicitations! Vous maîtrisez parfaitement les principes éthiques de l'IA!" 
              : score > ethicsQuestions.length / 2 
                ? "Bon travail! Vous avez une bonne compréhension des principes éthiques de l'IA."
                : "Continuez à explorer les principes éthiques de l'IA pour améliorer vos connaissances."}
          </p>
        </CardContent>
        <CardFooter className="justify-center">
          <Button onClick={resetQuiz}>Recommencer le quiz</Button>
        </CardFooter>
      </Card>
    );
  }

  const question = ethicsQuestions[currentQuestion];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Question {currentQuestion + 1} sur {ethicsQuestions.length}</CardTitle>
        <CardDescription>
          Testez vos connaissances sur l'éthique de l'IA
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-4">{question.text}</h3>
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <div 
                key={index}
                className={`p-3 rounded-lg border cursor-pointer transition-all
                ${selectedOption === index 
                  ? 'border-primary bg-primary/10' 
                  : 'border-border hover:border-primary/50 hover:bg-secondary/50'
                }
                ${showFeedback 
                  ? index === question.correctAnswer 
                    ? 'border-green-500 bg-green-50 dark:bg-green-950/30' 
                    : selectedOption === index 
                      ? 'border-red-500 bg-red-50 dark:bg-red-950/30' 
                      : ''
                  : ''
                }`}
                onClick={() => !showFeedback && handleOptionSelect(index)}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {showFeedback && index === question.correctAnswer && (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  )}
                  {showFeedback && selectedOption === index && index !== question.correctAnswer && (
                    <XCircle className="h-5 w-5 text-red-500" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <div className="text-sm text-muted-foreground">
          Score actuel: {score} / {currentQuestion}
        </div>
        <Button 
          onClick={handleNext} 
          disabled={selectedOption === null || showFeedback}
        >
          {currentQuestion === ethicsQuestions.length - 1 ? "Terminer" : "Suivant"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Quiz;
