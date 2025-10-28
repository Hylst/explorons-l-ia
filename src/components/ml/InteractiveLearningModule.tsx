
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, CheckCircle2, XCircle, HelpCircle, Brain, Target, Layers } from 'lucide-react';

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: 'concepts' | 'algorithms' | 'metrics';
}

const InteractiveLearningModule: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [completedQuestions, setCompletedQuestions] = useState<number[]>([]);

  const quizQuestions: QuizQuestion[] = [
    {
      id: 1,
      question: "Qu'est-ce que l'overfitting (surapprentissage) ?",
      options: [
        "Quand le modèle apprend trop lentement",
        "Quand le modèle mémorise les données d'entraînement mais ne généralise pas bien",
        "Quand le modèle a trop de paramètres",
        "Quand les données sont de mauvaise qualité"
      ],
      correctAnswer: 1,
      explanation: "L'overfitting se produit quand un modèle apprend par cœur les données d'entraînement, incluant le bruit, ce qui lui fait perdre sa capacité à généraliser sur de nouvelles données.",
      category: 'concepts'
    },
    {
      id: 2,
      question: "Quel est l'avantage principal de l'algorithme k-NN ?",
      options: [
        "Il est très rapide à l'entraînement",
        "Il fonctionne bien avec de gros datasets",
        "Il est simple et ne nécessite pas d'entraînement explicite",
        "Il produit des modèles très compacts"
      ],
      correctAnswer: 2,
      explanation: "k-NN est un algorithme d'apprentissage paresseux qui stocke simplement les données d'entraînement et fait les prédictions au moment des requêtes.",
      category: 'algorithms'
    },
    {
      id: 3,
      question: "Que mesure la métrique 'Accuracy' ?",
      options: [
        "Le pourcentage de prédictions correctes",
        "La vitesse du modèle",
        "La complexité du modèle",
        "La taille des données"
      ],
      correctAnswer: 0,
      explanation: "L'accuracy est le rapport entre le nombre de prédictions correctes et le nombre total de prédictions.",
      category: 'metrics'
    },
    {
      id: 4,
      question: "Pourquoi utilise-t-on un ensemble de validation ?",
      options: [
        "Pour accélérer l'entraînement",
        "Pour évaluer les performances du modèle sur des données non vues",
        "Pour réduire la taille du dataset",
        "Pour améliorer l'accuracy"
      ],
      correctAnswer: 1,
      explanation: "L'ensemble de validation permet d'évaluer objectivement les performances du modèle et de détecter le surapprentissage.",
      category: 'concepts'
    },
    {
      id: 5,
      question: "Quel algorithme est généralement le plus interprétable ?",
      options: [
        "Réseau de neurones profond",
        "Random Forest",
        "Arbre de décision simple",
        "SVM avec kernel RBF"
      ],
      correctAnswer: 2,
      explanation: "Un arbre de décision simple offre la meilleure interprétabilité car on peut suivre facilement le chemin de décision.",
      category: 'algorithms'
    }
  ];

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    setShowExplanation(true);
    
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
    
    setCompletedQuestions(prev => [...prev, currentQuestion.id]);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(prev => Math.min(prev + 1, quizQuestions.length - 1));
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex(prev => Math.max(prev - 1, 0));
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setCompletedQuestions([]);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'concepts': return <Brain className="h-4 w-4" />;
      case 'algorithms': return <Target className="h-4 w-4" />;
      case 'metrics': return <Layers className="h-4 w-4" />;
      default: return <HelpCircle className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'concepts': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'algorithms': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'metrics': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

  return (
    <Card className="border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          Module d'Apprentissage Interactif
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="quiz" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="quiz">Quiz Interactif</TabsTrigger>
            <TabsTrigger value="concepts">Concepts Clés</TabsTrigger>
          </TabsList>
          
          <TabsContent value="quiz" className="space-y-6">
            {/* Progression et score */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">
                  Question {currentQuestionIndex + 1} / {quizQuestions.length}
                </span>
                <Badge variant="secondary" className={getCategoryColor(currentQuestion.category)}>
                  {getCategoryIcon(currentQuestion.category)}
                  <span className="ml-1 capitalize">{currentQuestion.category}</span>
                </Badge>
              </div>
              <Badge variant="outline">
                Score: {score} / {completedQuestions.length}
              </Badge>
            </div>

            {/* Barre de progression */}
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Question */}
            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium mb-4">{currentQuestion.question}</h3>
                
                <div className="space-y-3">
                  {currentQuestion.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={showExplanation}
                      className={`w-full text-left p-4 rounded-lg border transition-all ${
                        selectedAnswer === index
                          ? showExplanation
                            ? index === currentQuestion.correctAnswer
                              ? 'border-green-500 bg-green-50 dark:bg-green-950/20'
                              : 'border-red-500 bg-red-50 dark:bg-red-950/20'
                            : 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50 hover:bg-muted/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full border border-current flex items-center justify-center text-sm">
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span>{option}</span>
                        {showExplanation && selectedAnswer === index && (
                          <div className="ml-auto">
                            {index === currentQuestion.correctAnswer ? (
                              <CheckCircle2 className="h-5 w-5 text-green-600" />
                            ) : (
                              <XCircle className="h-5 w-5 text-red-600" />
                            )}
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Explication */}
                {showExplanation && (
                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">
                      💡 Explication
                    </h4>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                      {currentQuestion.explanation}
                    </p>
                  </div>
                )}

                {/* Boutons d'action */}
                <div className="flex justify-between mt-6">
                  <Button 
                    variant="outline" 
                    onClick={handlePreviousQuestion}
                    disabled={currentQuestionIndex === 0}
                  >
                    Précédent
                  </Button>
                  
                  {!showExplanation ? (
                    <Button 
                      onClick={handleSubmitAnswer}
                      disabled={selectedAnswer === null}
                    >
                      Valider
                    </Button>
                  ) : currentQuestionIndex < quizQuestions.length - 1 ? (
                    <Button onClick={handleNextQuestion}>
                      Suivant
                    </Button>
                  ) : (
                    <Button onClick={resetQuiz} variant="outline">
                      Recommencer
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Résultat final */}
            {currentQuestionIndex === quizQuestions.length - 1 && showExplanation && (
              <Card className="border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-950/20">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-medium text-green-800 dark:text-green-200 mb-3">
                    🎉 Quiz terminé !
                  </h3>
                  <p className="text-green-700 dark:text-green-300">
                    Votre score final : <strong>{score} / {quizQuestions.length}</strong>
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                    {score === quizQuestions.length 
                      ? "Parfait ! Vous maîtrisez bien ces concepts."
                      : score >= quizQuestions.length * 0.7
                      ? "Très bien ! Vous avez une bonne compréhension."
                      : "Continuez à apprendre, vous progresserez !"}
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="concepts" className="space-y-6">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-blue-500" />
                    Concepts Fondamentaux
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Surapprentissage (Overfitting)</h4>
                      <p className="text-sm text-muted-foreground">
                        Le modèle mémorise les données d'entraînement au lieu d'apprendre des patterns généralisables.
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Sous-apprentissage (Underfitting)</h4>
                      <p className="text-sm text-muted-foreground">
                        Le modèle est trop simple pour capturer les patterns dans les données.
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Validation Croisée</h4>
                      <p className="text-sm text-muted-foreground">
                        Technique pour évaluer la performance d'un modèle en divisant les données en plusieurs sous-ensembles.
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Régularisation</h4>
                      <p className="text-sm text-muted-foreground">
                        Techniques pour éviter le surapprentissage en pénalisant la complexité du modèle.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Layers className="h-5 w-5 text-purple-500" />
                    Métriques d'Évaluation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Accuracy (Précision)</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Pourcentage de prédictions correctes
                      </p>
                      <code className="text-xs bg-muted p-1 rounded">
                        (VP + VN) / (VP + VN + FP + FN)
                      </code>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Loss (Perte)</h4>
                      <p className="text-sm text-muted-foreground">
                        Mesure l'écart entre les prédictions et les vraies valeurs. Plus elle est faible, mieux c'est.
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">F1-Score</h4>
                      <p className="text-sm text-muted-foreground">
                        Moyenne harmonique entre précision et rappel, utile pour les datasets déséquilibrés.
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">AUC-ROC</h4>
                      <p className="text-sm text-muted-foreground">
                        Mesure la capacité du modèle à distinguer entre les classes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default InteractiveLearningModule;
