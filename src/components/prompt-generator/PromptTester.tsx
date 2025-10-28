
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TestTube, Play, RotateCcw, CheckCircle, AlertCircle, TrendingUp, Clock, Target } from 'lucide-react';
import { toast } from 'sonner';

interface TestResult {
  id: string;
  timestamp: Date;
  prompt: string;
  response: string;
  score: number;
  criteria: {
    relevance: number;
    clarity: number;
    creativity: number;
    completeness: number;
  };
  feedback: string;
  duration: number;
}

interface PromptTesterProps {
  prompt: string;
  onTestComplete: (result: TestResult) => void;
}

const PromptTester: React.FC<PromptTesterProps> = ({ prompt, onTestComplete }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [currentTest, setCurrentTest] = useState<TestResult | null>(null);
  const [testHistory, setTestHistory] = useState<TestResult[]>([]);
  const [selectedTestType, setSelectedTestType] = useState('standard');
  const [customInput, setCustomInput] = useState('');

  const testScenarios = {
    standard: {
      name: 'Test Standard',
      description: 'Évaluation générale de la qualité du prompt',
      input: 'Utilisez ce prompt dans un contexte normal'
    },
    creative: {
      name: 'Test Créatif',
      description: 'Évalue la capacité créative du prompt',
      input: 'Générez quelque chose de vraiment original et créatif'
    },
    technical: {
      name: 'Test Technique',
      description: 'Teste la précision technique du prompt',
      input: 'Fournissez une réponse technique détaillée et précise'
    },
    edge_cases: {
      name: 'Cas Limites',
      description: 'Teste le comportement dans des situations extrêmes',
      input: 'Répondez à cette demande complexe et ambiguë'
    },
    custom: {
      name: 'Personnalisé',
      description: 'Test avec votre propre scénario',
      input: ''
    }
  };

  const runTest = async () => {
    if (!prompt.trim()) {
      toast.error('Veuillez fournir un prompt à tester');
      return;
    }

    setIsRunning(true);
    const startTime = Date.now();

    // Simulation du test
    setTimeout(() => {
      const testInput = selectedTestType === 'custom' ? customInput : testScenarios[selectedTestType as keyof typeof testScenarios].input;
      const fullPrompt = `${prompt}\n\nContexte de test: ${testInput}`;

      // Simulation d'évaluation basée sur la longueur et la structure du prompt
      const baseScore = Math.min(90, 40 + prompt.length / 10);
      const hasStructure = prompt.includes(':') || prompt.includes('-') || prompt.includes('\n');
      const hasRole = prompt.toLowerCase().includes('tu es') || prompt.toLowerCase().includes('vous êtes');
      const hasExamples = prompt.toLowerCase().includes('exemple');
      
      const relevance = Math.min(100, baseScore + (hasRole ? 15 : 0) + Math.random() * 10);
      const clarity = Math.min(100, baseScore + (hasStructure ? 20 : 0) + Math.random() * 10);
      const creativity = Math.min(100, baseScore + (hasExamples ? 10 : 0) + Math.random() * 15);
      const completeness = Math.min(100, baseScore + (prompt.length > 200 ? 15 : 0) + Math.random() * 10);

      const overallScore = (relevance + clarity + creativity + completeness) / 4;
      const duration = Date.now() - startTime;

      const result: TestResult = {
        id: Date.now().toString(),
        timestamp: new Date(),
        prompt: fullPrompt,
        response: generateMockResponse(overallScore),
        score: Math.round(overallScore),
        criteria: {
          relevance: Math.round(relevance),
          clarity: Math.round(clarity),
          creativity: Math.round(creativity),
          completeness: Math.round(completeness)
        },
        feedback: generateFeedback(overallScore, { relevance, clarity, creativity, completeness }),
        duration
      };

      setCurrentTest(result);
      setTestHistory(prev => [result, ...prev.slice(0, 9)]);
      setIsRunning(false);
      onTestComplete(result);
      toast.success('Test terminé avec succès !');
    }, 2000 + Math.random() * 2000);
  };

  const generateMockResponse = (score: number): string => {
    const responses = [
      'Réponse excellente et détaillée qui répond parfaitement aux attentes.',
      'Bonne réponse avec quelques éléments manquants.',
      'Réponse correcte mais qui pourrait être améliorée.',
      'Réponse basique qui nécessite des améliorations.',
      'Réponse insuffisante qui ne répond pas aux attentes.'
    ];
    
    const index = Math.min(4, Math.floor((100 - score) / 20));
    return responses[index];
  };

  const generateFeedback = (score: number, criteria: any): string => {
    const feedback: string[] = [];
    
    if (criteria.relevance < 70) {
      feedback.push('• Améliorer la pertinence du contexte');
    }
    if (criteria.clarity < 70) {
      feedback.push('• Clarifier les instructions');
    }
    if (criteria.creativity < 70) {
      feedback.push('• Ajouter des éléments créatifs');
    }
    if (criteria.completeness < 70) {
      feedback.push('• Compléter les informations manquantes');
    }
    
    if (feedback.length === 0) {
      return 'Excellent prompt ! Tous les critères sont satisfaisants.';
    }
    
    return `Améliorations suggérées:\n${feedback.join('\n')}`;
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return 'bg-green-100 dark:bg-green-900/20';
    if (score >= 60) return 'bg-yellow-100 dark:bg-yellow-900/20';
    return 'bg-red-100 dark:bg-red-900/20';
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TestTube className="h-5 w-5" />
            Testeur de Prompts
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Tabs value={selectedTestType} onValueChange={setSelectedTestType}>
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="standard">Standard</TabsTrigger>
              <TabsTrigger value="creative">Créatif</TabsTrigger>
              <TabsTrigger value="technical">Technique</TabsTrigger>
              <TabsTrigger value="edge_cases">Cas limites</TabsTrigger>
              <TabsTrigger value="custom">Personnalisé</TabsTrigger>
            </TabsList>

            {Object.entries(testScenarios).map(([key, scenario]) => (
              <TabsContent key={key} value={key} className="space-y-3">
                <div className="p-3 bg-muted/50 rounded-lg">
                  <h4 className="font-medium">{scenario.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{scenario.description}</p>
                  {key === 'custom' ? (
                    <Textarea
                      placeholder="Décrivez votre scénario de test personnalisé..."
                      value={customInput}
                      onChange={(e) => setCustomInput(e.target.value)}
                    />
                  ) : (
                    <p className="text-sm font-mono bg-background p-2 rounded border">
                      {scenario.input}
                    </p>
                  )}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <Button 
            onClick={runTest} 
            disabled={!prompt || isRunning || (selectedTestType === 'custom' && !customInput.trim())}
            className="w-full"
          >
            {isRunning ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Test en cours...
              </>
            ) : (
              <>
                <Play className="h-4 w-4 mr-2" />
                Lancer le test
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Résultats du test actuel */}
      {currentTest && (
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <CardTitle>Résultats du test</CardTitle>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {currentTest.duration}ms
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Score global */}
            <div className={`p-4 rounded-lg ${getScoreBgColor(currentTest.score)}`}>
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Score global</span>
                <span className={`text-2xl font-bold ${getScoreColor(currentTest.score)}`}>
                  {currentTest.score}/100
                </span>
              </div>
              <Progress value={currentTest.score} className="w-full" />
            </div>

            {/* Détail des critères */}
            <div className="grid grid-cols-2 gap-3">
              {Object.entries(currentTest.criteria).map(([criterion, score]) => (
                <div key={criterion} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="capitalize">{criterion === 'relevance' ? 'Pertinence' : 
                                                    criterion === 'clarity' ? 'Clarté' :
                                                    criterion === 'creativity' ? 'Créativité' : 'Complétude'}</span>
                    <span className={getScoreColor(score)}>{score}%</span>
                  </div>
                  <Progress value={score} className="h-2" />
                </div>
              ))}
            </div>

            {/* Feedback */}
            <div className="bg-muted/50 p-3 rounded-lg">
              <h4 className="font-medium mb-2">Feedback détaillé</h4>
              <pre className="text-sm whitespace-pre-wrap text-muted-foreground">
                {currentTest.feedback}
              </pre>
            </div>

            {/* Réponse générée */}
            <div className="bg-muted/50 p-3 rounded-lg">
              <h4 className="font-medium mb-2">Réponse générée</h4>
              <p className="text-sm text-muted-foreground">
                {currentTest.response}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Historique des tests */}
      {testHistory.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Historique des tests ({testHistory.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {testHistory.map((test, index) => (
                <div key={test.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium">
                        Test #{testHistory.length - index}
                      </span>
                      <Badge variant="outline" className="text-xs">
                        {test.timestamp.toLocaleTimeString()}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-1">
                      {test.prompt.substring(0, 100)}...
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-sm font-bold ${getScoreColor(test.score)}`}>
                      {test.score}/100
                    </span>
                    {test.score >= 80 ? (
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-yellow-600" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default PromptTester;
