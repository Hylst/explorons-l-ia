
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Brain, TrendingUp, Sparkles, Cog, Info, Lightbulb, Target, Network } from 'lucide-react';

const ConceptsFoundamentaux = () => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const concepts = [
    {
      id: 'ia',
      icon: <Brain className="h-5 w-5" />,
      title: 'Intelligence Artificielle',
      description: 'Système informatique capable d\'effectuer des tâches qui nécessitent normalement l\'intelligence humaine.',
      badge: 'Concept général',
      details: 'L\'IA englobe tous les systèmes capables de percevoir, raisonner, apprendre et agir de manière autonome.',
      examples: ['Reconnaissance vocale', 'Jeux d\'échecs', 'Diagnostic médical']
    },
    {
      id: 'ml',
      icon: <TrendingUp className="h-5 w-5" />,
      title: 'Machine Learning',
      description: 'Méthode qui permet aux machines d\'apprendre automatiquement à partir de données.',
      badge: 'Sous-domaine de l\'IA',
      details: 'Le ML utilise des algorithmes pour identifier des patterns dans les données et faire des prédictions.',
      examples: ['Filtres anti-spam', 'Recommandations Netflix', 'Reconnaissance d\'images']
    },
    {
      id: 'dl',
      icon: <Sparkles className="h-5 w-5" />,
      title: 'Deep Learning',
      description: 'Technique utilisant des réseaux de neurones artificiels pour apprendre des patterns complexes.',
      badge: 'Sous-domaine du ML',
      details: 'Inspiré du cerveau humain, il utilise plusieurs couches de neurones artificiels pour traiter l\'information.',
      examples: ['GPT-4', 'Reconnaissance faciale', 'Voitures autonomes']
    },
    {
      id: 'algo',
      icon: <Cog className="h-5 w-5" />,
      title: 'Algorithme',
      description: 'Ensemble d\'instructions que suit l\'ordinateur pour résoudre un problème spécifique.',
      badge: 'Fondement technique',
      details: 'C\'est la "recette" que suit la machine pour traiter les données et prendre des décisions.',
      examples: ['Tri de données', 'Calcul d\'itinéraire', 'Compression d\'images']
    }
  ];

  const apprentissageTypes = [
    {
      type: 'Supervisé',
      icon: <Target className="h-6 w-6 text-blue-500" />,
      description: 'Apprend avec des exemples étiquetés',
      example: 'Montrer 1000 photos de chats étiquetées "chat"',
      usage: 'Classification, prédiction'
    },
    {
      type: 'Non supervisé',
      icon: <Brain className="h-6 w-6 text-green-500" />,
      description: 'Trouve des patterns cachés dans les données',
      example: 'Analyser des achats pour grouper les clients',
      usage: 'Clustering, réduction de dimension'
    },
    {
      type: 'Par renforcement',
      icon: <Lightbulb className="h-6 w-6 text-orange-500" />,
      description: 'Apprend par essai-erreur avec récompenses',
      example: 'AlphaGo apprenant le jeu de Go',
      usage: 'Jeux, robotique, optimisation'
    }
  ];

  return (
    <TooltipProvider>
      <div className="space-y-8">
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-primary" />
              Concepts fondamentaux de l'IA
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="definitions" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="definitions">Définitions</TabsTrigger>
                <TabsTrigger value="apprentissage">Types d'apprentissage</TabsTrigger>
                <TabsTrigger value="hierarchie">Hiérarchie</TabsTrigger>
              </TabsList>
              
              <TabsContent value="definitions" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {concepts.map((concept) => (
                    <Card key={concept.id} className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          {concept.icon}
                          {concept.title}
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent side="top" className="max-w-xs">
                              <p>{concept.details}</p>
                            </TooltipContent>
                          </Tooltip>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-3">
                          {concept.description}
                        </p>
                        <Badge variant="outline" className="mb-3">{concept.badge}</Badge>
                        <div className="space-y-1">
                          <p className="text-xs font-medium text-muted-foreground">Exemples :</p>
                          <ul className="text-xs space-y-0.5">
                            {concept.examples.map((example, idx) => (
                              <li key={idx}>• {example}</li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="apprentissage" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {apprentissageTypes.map((type, idx) => (
                    <Card key={idx} className="text-center hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="mx-auto mb-2">{type.icon}</div>
                        <CardTitle className="text-lg">{type.type}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-3">
                          {type.description}
                        </p>
                        <div className="bg-secondary/20 p-3 rounded-lg mb-3">
                          <p className="text-xs font-medium mb-1">Exemple :</p>
                          <p className="text-xs">{type.example}</p>
                        </div>
                        <Badge variant="secondary" className="text-xs">{type.usage}</Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="hierarchie" className="space-y-6">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-full max-w-md">
                    <div className="bg-primary/10 border-2 border-primary rounded-lg p-4 text-center">
                      <h3 className="font-semibold text-lg">Intelligence Artificielle</h3>
                      <p className="text-sm text-muted-foreground">Domaine général</p>
                    </div>
                    <div className="flex justify-center my-2">
                      <div className="w-px h-8 bg-border"></div>
                    </div>
                    <div className="bg-secondary/20 border border-secondary rounded-lg p-4 text-center">
                      <h3 className="font-semibold">Machine Learning</h3>
                      <p className="text-sm text-muted-foreground">Apprentissage automatique</p>
                    </div>
                    <div className="flex justify-center my-2">
                      <div className="w-px h-8 bg-border"></div>
                    </div>
                    <div className="bg-accent/20 border border-accent rounded-lg p-4 text-center">
                      <h3 className="font-semibold">Deep Learning</h3>
                      <p className="text-sm text-muted-foreground">Réseaux de neurones profonds</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </TooltipProvider>
  );
};

export default ConceptsFoundamentaux;
