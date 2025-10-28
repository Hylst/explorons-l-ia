
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { TreePine, Play, Pause, RotateCcw, ChevronDown, ChevronRight } from 'lucide-react';

interface TreeNode {
  id: string;
  question: string;
  feature: string;
  threshold?: number;
  samples: number;
  gini: number;
  prediction?: string;
  left?: TreeNode;
  right?: TreeNode;
  depth: number;
  isExpanded: boolean;
}

const sampleData = [
  { age: 25, salary: 30000, experience: 1, approved: false },
  { age: 35, salary: 55000, experience: 8, approved: true },
  { age: 45, salary: 75000, experience: 15, approved: true },
  { age: 22, salary: 25000, experience: 0, approved: false },
  { age: 55, salary: 95000, experience: 25, approved: true },
  { age: 28, salary: 40000, experience: 3, approved: false },
  { age: 40, salary: 65000, experience: 12, approved: true },
  { age: 30, salary: 50000, experience: 5, approved: true }
];

const DecisionTreeInteractive: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set(['root']));
  
  const [treeStructure, setTreeStructure] = useState<TreeNode>({
    id: 'root',
    question: 'Racine de l\'arbre',
    feature: 'age',
    threshold: 30,
    samples: 8,
    gini: 0.5,
    depth: 0,
    isExpanded: true,
    left: {
      id: 'left1',
      question: 'Salaire < 35000€ ?',
      feature: 'salary',
      threshold: 35000,
      samples: 3,
      gini: 0.44,
      depth: 1,
      isExpanded: false,
      left: {
        id: 'left2',
        question: 'Rejet',
        feature: '',
        samples: 2,
        gini: 0.0,
        prediction: 'Non approuvé',
        depth: 2,
        isExpanded: false
      },
      right: {
        id: 'right2',
        question: 'Approbation',
        feature: '',
        samples: 1,
        gini: 0.0,
        prediction: 'Approuvé',
        depth: 2,
        isExpanded: false
      }
    },
    right: {
      id: 'right1',
      question: 'Expérience > 7 ans ?',
      feature: 'experience',
      threshold: 7,
      samples: 5,
      gini: 0.32,
      depth: 1,
      isExpanded: false,
      left: {
        id: 'left3',
        question: 'Rejet partiel',
        feature: '',
        samples: 1,
        gini: 0.0,
        prediction: 'Non approuvé',
        depth: 2,
        isExpanded: false
      },
      right: {
        id: 'right3',
        question: 'Approbation forte',
        feature: '',
        samples: 4,
        gini: 0.0,
        prediction: 'Approuvé',
        depth: 2,
        isExpanded: false
      }
    }
  });

  const steps = [
    {
      title: 'Données Initiales',
      description: 'Analyse de toutes les demandes de crédit avec leurs caractéristiques',
      focusNode: 'root'
    },
    {
      title: 'Première Division : Âge',
      description: 'L\'algorithme choisit l\'âge comme critère le plus discriminant',
      focusNode: 'root'
    },
    {
      title: 'Branche Gauche : Jeunes',
      description: 'Pour les moins de 30 ans, on examine maintenant le salaire',
      focusNode: 'left1'
    },
    {
      title: 'Branche Droite : Plus Âgés',
      description: 'Pour les 30 ans et plus, l\'expérience devient déterminante',
      focusNode: 'right1'
    },
    {
      title: 'Feuilles Finales',
      description: 'L\'arbre produit ses décisions finales basées sur le chemin suivi',
      focusNode: 'all'
    }
  ];

  const toggleNode = (nodeId: string) => {
    setExpandedNodes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(nodeId)) {
        newSet.delete(nodeId);
      } else {
        newSet.add(nodeId);
      }
      return newSet;
    });
  };

  const handlePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      return;
    }

    setIsPlaying(true);
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= steps.length - 1) {
          setIsPlaying(false);
          clearInterval(interval);
          return prev;
        }
        // Auto-expand relevant nodes
        const nextStep = steps[prev + 1];
        if (nextStep.focusNode !== 'all') {
          setExpandedNodes(prevNodes => new Set([...prevNodes, nextStep.focusNode]));
        } else {
          setExpandedNodes(new Set(['root', 'left1', 'right1']));
        }
        return prev + 1;
      });
    }, 3000);
  };

  const renderNode = (node: TreeNode, isHighlighted: boolean = false) => {
    const isExpanded = expandedNodes.has(node.id);
    const isLeaf = !node.left && !node.right;
    
    return (
      <div key={node.id} className="flex flex-col items-center">
        <div
          className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
            isHighlighted 
              ? 'border-primary bg-primary/10 shadow-lg scale-105' 
              : isLeaf 
                ? 'border-green-300 bg-green-50 dark:bg-green-950/30' 
                : 'border-blue-300 bg-blue-50 dark:bg-blue-950/30'
          } hover:shadow-md`}
          onClick={() => !isLeaf && toggleNode(node.id)}
        >
          <div className="flex items-center gap-2 mb-2">
            {!isLeaf && (
              <div className="text-blue-600">
                {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
              </div>
            )}
            <div className="font-semibold text-sm">{node.question}</div>
          </div>
          
          <div className="space-y-1 text-xs">
            <div className="flex justify-between">
              <span>Échantillons:</span>
              <Badge variant="outline">{node.samples}</Badge>
            </div>
            <div className="flex justify-between">
              <span>Gini:</span>
              <Badge variant={node.gini === 0 ? "default" : "secondary"}>{node.gini.toFixed(2)}</Badge>
            </div>
            {node.prediction && (
              <div className="mt-2 p-2 bg-white dark:bg-gray-800 rounded border">
                <div className="font-semibold text-center text-xs">
                  → {node.prediction}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Branches */}
        {isExpanded && (node.left || node.right) && (
          <div className="flex flex-col items-center mt-4">
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="flex gap-8">
              {node.left && (
                <div className="flex flex-col items-center">
                  <div className="text-xs text-gray-600 mb-2">OUI</div>
                  <div className="w-px h-4 bg-gray-300"></div>
                  {renderNode(node.left, steps[currentStep]?.focusNode === node.left.id)}
                </div>
              )}
              {node.right && (
                <div className="flex flex-col items-center">
                  <div className="text-xs text-gray-600 mb-2">NON</div>
                  <div className="w-px h-4 bg-gray-300"></div>
                  {renderNode(node.right, steps[currentStep]?.focusNode === node.right.id)}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <Card className="border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TreePine className="h-6 w-6 text-green-600" />
          Arbre de Décision Interactif - Approbation de Crédit
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Découvrez comment un arbre de décision apprend à prendre des décisions étape par étape
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Contrôles */}
        <div className="flex items-center gap-4">
          <Button
            onClick={handlePlay}
            size="sm"
            className="flex items-center gap-2"
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            {isPlaying ? 'Pause' : 'Démarrer la construction'}
          </Button>
          <Button 
            onClick={() => {
              setCurrentStep(0);
              setIsPlaying(false);
              setExpandedNodes(new Set(['root']));
            }}
            size="sm" 
            variant="outline"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>
          <div className="text-sm text-muted-foreground">
            Étape {currentStep + 1} / {steps.length}
          </div>
        </div>

        {/* Progression */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">Construction de l'arbre</span>
            <span className="text-sm text-muted-foreground">
              {Math.round(((currentStep + 1) / steps.length) * 100)}%
            </span>
          </div>
          <Progress value={((currentStep + 1) / steps.length) * 100} className="h-2" />
        </div>

        {/* Étape actuelle */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-4 rounded-lg border border-green-200 dark:border-green-800">
          <div className="flex items-center gap-3 mb-2">
            <Badge variant="secondary">Étape {currentStep + 1}</Badge>
            <h3 className="font-semibold text-green-800 dark:text-green-200">
              {steps[currentStep].title}
            </h3>
          </div>
          <p className="text-sm text-green-700 dark:text-green-300">
            {steps[currentStep].description}
          </p>
        </div>

        {/* Données d'exemple */}
        <div className="bg-white dark:bg-gray-900/50 p-4 rounded-lg border">
          <h4 className="font-semibold mb-3">Données d'entraînement :</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-1">Âge</th>
                  <th className="text-left p-1">Salaire</th>
                  <th className="text-left p-1">Expérience</th>
                  <th className="text-left p-1">Décision</th>
                </tr>
              </thead>
              <tbody>
                {sampleData.slice(0, 4).map((row, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-1">{row.age}</td>
                    <td className="p-1">{row.salary.toLocaleString()}€</td>
                    <td className="p-1">{row.experience} ans</td>
                    <td className="p-1">
                      <Badge variant={row.approved ? "default" : "destructive"} className="text-xs">
                        {row.approved ? 'Approuvé' : 'Rejeté'}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text-xs text-muted-foreground mt-2">
              ... et {sampleData.length - 4} autres exemples
            </div>
          </div>
        </div>

        {/* Visualisation de l'arbre */}
        <div className="bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-gray-900/50 p-6 rounded-lg border overflow-x-auto">
          <h4 className="font-semibold mb-4 text-center">Structure de l'Arbre de Décision</h4>
          <div className="flex justify-center min-w-max">
            {renderNode(treeStructure, steps[currentStep]?.focusNode === 'root')}
          </div>
        </div>

        {/* Métriques et explications */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">
              🎯 Comment l'arbre choisit les questions
            </h4>
            <ul className="text-sm space-y-2 text-blue-700 dark:text-blue-300">
              <li>• <strong>Calcul du Gini :</strong> Mesure la "pureté" de chaque groupe</li>
              <li>• <strong>Gain d'information :</strong> Choisit la division qui réduit le plus l'impureté</li>
              <li>• <strong>Critère d'arrêt :</strong> S'arrête quand un groupe est pur (Gini = 0)</li>
            </ul>
          </div>
          
          <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">
              ✨ Avantages des arbres de décision
            </h4>
            <ul className="text-sm space-y-2 text-green-700 dark:text-green-300">
              <li>• <strong>Interprétable :</strong> Facile à comprendre et expliquer</li>
              <li>• <strong>Pas de préparation :</strong> Gère les données brutes</li>
              <li>• <strong>Interactions :</strong> Détecte automatiquement les relations complexes</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DecisionTreeInteractive;
