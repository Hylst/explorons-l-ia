
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  PenSquare, 
  Search,
  DollarSign,
  Users,
  BarChart3,
  Lightbulb
} from 'lucide-react';
import LessonSection from '@/components/courses/LessonSection';

interface UseCase {
  title: string;
  description: string;
  parameters: {
    model: string;
    temperature: string;
    otherParams: string;
    rationale: string;
  };
  icon: React.ReactNode;
  category: string;
}

const PracticalApplicationsSection = () => {
  const useCases: UseCase[] = [
    {
      title: "Génération de code",
      description: "Développement assisté, refactoring, documentation automatisée",
      parameters: {
        model: "Code Llama 34B / StarCoder / CodeGPT",
        temperature: "0.1-0.3",
        otherParams: "Top-p: 0.95, Repetition Penalty: 1.0",
        rationale: "Précision maximale requise, tokens prédictibles, contexte technique long"
      },
      icon: <Code className="h-5 w-5 text-blue-500" />,
      category: "Développement"
    },
    {
      title: "Création de contenu",
      description: "Articles, marketing, scénarios, descriptions produits",
      parameters: {
        model: "Claude 3 Opus / GPT-4 / Anthropic Claude",
        temperature: "0.7-0.9",
        otherParams: "Top-p: 0.9, Repetition Penalty: 1.1",
        rationale: "Équilibre créativité/cohérence, variation stylistique, éviter répétitions"
      },
      icon: <PenSquare className="h-5 w-5 text-purple-500" />,
      category: "Création"
    },
    {
      title: "Recherche augmentée",
      description: "Analyse documentaire, recherche scientifique, synthèse d'études",
      parameters: {
        model: "GPT-4 Turbo / Claude 3 Opus avec contexte 128K",
        temperature: "0.2-0.4",
        otherParams: "Max tokens: élevé, Top-p: 0.8",
        rationale: "Exactitude factuelle, cohérence sur long contexte, attribution des sources"
      },
      icon: <Search className="h-5 w-5 text-green-500" />,
      category: "Recherche"
    },
    {
      title: "Optimisation coûts/performances",
      description: "Applications grand public, API services, intégration produits",
      parameters: {
        model: "Llama 2/3 7B-13B quantisés 4-bit",
        temperature: "Variable selon fonction",
        otherParams: "Batch processing, caching de réponses",
        rationale: "Équilibre coût/latence/qualité, optimisation resources, haute disponibilité"
      },
      icon: <DollarSign className="h-5 w-5 text-amber-500" />,
      category: "Optimisation"
    }
  ];

  const selectionMatrix = [
    {
      context: "Budget limité",
      recommendation: "Modèles open-source quantisés (7B-13B)",
      rationale: "Coût: 10-100x moins cher que API commerciales",
      example: "Llama 3 8B quantisé 4-bit sur GPU mid-range"
    },
    {
      context: "Exigence qualité maximale",
      recommendation: "Grands modèles fermés (>70B) dernière génération",
      rationale: "Performance: 10-20% supérieure sur tâches complexes",
      example: "Claude 3 Opus ou GPT-4o"
    },
    {
      context: "Contrainte latence",
      recommendation: "Modèles optimisés avec compilation/distillation",
      rationale: "Vitesse: 5-10x plus rapide que versions standard",
      example: "TensorRT-LLM ou vLLM avec Llama 2/3 7B"
    },
    {
      context: "Domaine hautement spécialisé",
      recommendation: "Fine-tuning (LoRA) sur modèles intermédiaires",
      rationale: "Adaptation: Performances spécifiques domaine +30-50%",
      example: "FinGPT pour finance, BioMedLM pour médecine"
    }
  ];

  return (
    <LessonSection
      title="VI. Applications pratiques et sélection optimale"
      icon={<Users className="h-6 w-6" />}
      delay={5}
    >
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 border border-indigo-200 dark:border-indigo-800 p-6 rounded-lg">
          <p className="text-lg leading-relaxed text-indigo-800 dark:text-indigo-200">
            La sélection et le paramétrage d'un LLM doivent être guidés par votre cas d'usage spécifique, 
            vos contraintes techniques et économiques. Cette section vous guide dans les choix pratiques 
            à faire pour optimiser votre utilisation des LLM.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <h4 className="text-xl font-medium mt-2 mb-4 flex items-center gap-2 text-indigo-700 dark:text-indigo-300">
            <Users className="h-5 w-5" />
            Cas d'usage et paramètres optimaux
          </h4>
          
          {useCases.map((useCase, index) => (
            <Card key={index} className="hover:shadow-md transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    {useCase.icon}
                    {useCase.title}
                  </CardTitle>
                  <Badge variant="outline" className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
                    {useCase.category}
                  </Badge>
                </div>
                <CardDescription>{useCase.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                  <h5 className="font-medium text-sm mb-3">Configuration recommandée</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <Badge variant="secondary" className="flex-shrink-0 mt-0.5">Modèle</Badge>
                      <span>{useCase.parameters.model}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Badge variant="secondary" className="flex-shrink-0 mt-0.5">Temperature</Badge>
                      <span>{useCase.parameters.temperature}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Badge variant="secondary" className="flex-shrink-0 mt-0.5">Autres</Badge>
                      <span>{useCase.parameters.otherParams}</span>
                    </div>
                    <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-muted-foreground"><strong>Pourquoi :</strong> {useCase.parameters.rationale}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <h4 className="text-xl font-medium mb-4 flex items-center gap-2 text-green-700 dark:text-green-300">
            <Lightbulb className="h-5 w-5" />
            Matrice de sélection selon contexte
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {selectionMatrix.map((item, index) => (
              <Card key={index} className="hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">
                    <Badge variant="outline" className="mb-1 bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300">
                      {item.context}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <Badge className="bg-green-500 text-xs mb-1">Recommandation</Badge>
                      <p className="font-medium">{item.recommendation}</p>
                    </div>
                    
                    <div className="text-muted-foreground text-sm">
                      <strong>Gain :</strong> {item.rationale}
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-900 p-2 rounded text-sm">
                      <strong>Exemple :</strong> {item.example}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                <BarChart3 className="h-5 w-5" />
                ROI des paramètres
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-blue-700 dark:text-blue-300">
                <div className="flex items-center justify-between">
                  <span>Temperature</span>
                  <div className="w-1/2 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Taille du contexte</span>
                  <div className="w-1/2 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Taille du modèle</span>
                  <div className="w-1/2 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Quantization</span>
                  <div className="w-1/2 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Fine-tuning</span>
                  <div className="w-1/2 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <p className="text-xs mt-2">
                  Impact relatif sur les performances pour l'effort d'optimisation
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950/20 dark:to-fuchsia-950/20 border-purple-200 dark:border-purple-800 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
                <Lightbulb className="h-5 w-5" />
                Checklist de déploiement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-purple-700 dark:text-purple-300">
                <li className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded border border-purple-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span>Analyser les besoins précis (créativité vs exactitude)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded border border-purple-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span>Mesurer contraintes techniques (latence, coût, RAM)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded border border-purple-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span>Tester plusieurs modèles sur échantillons représentatifs</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded border border-purple-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span>Expérimenter avec températures et autres paramètres</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded border border-purple-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span>Évaluer stratégies d'optimisation (quant, batching)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded border border-purple-500 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span>Monitorer performances en production (feedback loop)</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-950/20 dark:to-green-950/20 border border-emerald-200 dark:border-emerald-800 p-6 rounded-lg">
          <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-3 flex items-center gap-2">
            📝 Note finale importante
          </h4>
          <p className="text-emerald-700 dark:text-emerald-300">
            L'optimisation des paramètres LLM est un processus itératif qui nécessite des tests empiriques.
            Créez une boucle de feedback avec vos utilisateurs pour ajuster progressivement votre configuration.
            Les meilleurs résultats viennent souvent de l'observation directe plutôt que des spécifications théoriques.
          </p>
        </div>
      </div>
    </LessonSection>
  );
};

export default PracticalApplicationsSection;
