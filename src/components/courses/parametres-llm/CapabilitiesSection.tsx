
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  BookOpen, 
  AlertCircle,
  ArrowUpRight,
  XCircle,
  Sparkles
} from 'lucide-react';
import LessonSection from '@/components/courses/LessonSection';
import TechnicalTooltip from '@/components/courses/TechnicalTooltip';

const CapabilitiesSection = () => {
  const emergentCapabilities = [
    {
      name: "Raisonnement chaîné",
      description: "Capacité à décomposer un problème en sous-étapes logiques",
      example: "\"Pensons pas à pas\" → résolution de problèmes mathématiques complexes",
      threshold: "Apparaît vers 10-20B paramètres, fort dans les modèles >100B",
      icon: <Brain className="h-5 w-5 text-blue-500" />
    },
    {
      name: "In-Context Learning",
      description: "Adaptation à une tâche via des exemples dans le prompt",
      example: "Apprentissage de patterns à partir de quelques exemples (few-shot learning)",
      threshold: "Apparaît graduellement avec la taille, fort à partir de 70B+",
      icon: <BookOpen className="h-5 w-5 text-green-500" />
    },
    {
      name: "Instruction Following",
      description: "Compréhension et exécution de consignes complexes",
      example: "\"Transforme ce texte en style poétique, puis résume-le en 3 lignes\"",
      threshold: "Nécessite fine-tuning spécifique (RLHF) en plus de scale",
      icon: <ArrowUpRight className="h-5 w-5 text-purple-500" />
    },
    {
      name: "Capacités multimodales",
      description: "Traitement conjoint texte/image/audio",
      example: "Décrire des images, générer du texte en fonction d'images",
      threshold: "Nécessite entraînement spécifique avec données multi-modales",
      icon: <Sparkles className="h-5 w-5 text-amber-500" />
    }
  ];

  const limitations = [
    {
      type: "Biais des données",
      explanation: "Réflexion des stéréotypes présents dans les données d'entraînement",
      impact: "Renforcement potentiel de préjugés sociaux, culturels ou historiques",
      mitigation: "Filtrage des données, entraînement RLHF avec feedbacks humains",
    },
    {
      type: "Hallucinations",
      explanation: "Génération de faits plausibles mais incorrects",
      impact: "Risque de fausses informations convaincantes, erreurs subtiles",
      mitigation: "RAG, fine-tuning sur données factuelles, paramètre temperature bas",
    },
    {
      type: "Manque de bon sens",
      explanation: "Erreurs sur des connaissances implicites évidentes pour humains",
      impact: "Acceptation de prémisses absurdes, raisonnements illogiques",
      mitigation: "RLHF, fine-tuning avec exemples contraires, prompting spécifique",
    },
    {
      type: "Limitation de contexte",
      explanation: "Oubli des informations hors limite de tokens",
      impact: "Incohérence sur de longs documents, impossibilité de suivre des instructions compliquées",
      mitigation: "Chunking, résumés intermédiaires, modèles à contexte étendu",
    }
  ];

  return (
    <LessonSection
      title="IV. Capacités Émergentes et Limitations Structurelles"
      icon={<Sparkles className="h-6 w-6" />}
      delay={3}
    >
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border border-purple-200 dark:border-purple-800 p-6 rounded-lg">
          <p className="text-lg leading-relaxed text-purple-800 dark:text-purple-200">
            Les capacités émergentes sont des fonctionnalités qui apparaissent spontanément avec l'augmentation 
            de la taille des modèles, sans avoir été explicitement programmées. Ces capacités sont contrebalancées 
            par des limitations structurelles inhérentes aux LLM actuels.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-medium mb-4 flex items-center gap-2 text-purple-700 dark:text-purple-300">
            <Sparkles className="h-5 w-5" />
            Capacités émergentes
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {emergentCapabilities.map((capability, index) => (
              <Card key={index} className="hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    {capability.icon}
                    <TechnicalTooltip 
                      term={capability.name}
                      definition={capability.description}
                    >
                      {capability.name}
                    </TechnicalTooltip>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-muted-foreground text-sm">{capability.description}</p>
                    
                    <div>
                      <Badge variant="outline" className="text-xs mb-1">Exemple</Badge>
                      <p className="text-sm">{capability.example}</p>
                    </div>
                    
                    <div className="bg-purple-50 dark:bg-purple-950/30 p-2 rounded text-sm">
                      <strong>Seuil d'émergence :</strong> {capability.threshold}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-medium mb-4 flex items-center gap-2 text-red-700 dark:text-red-300">
            <AlertCircle className="h-5 w-5" />
            Limitations structurelles
          </h4>
          
          <div className="grid grid-cols-1 gap-4">
            {limitations.map((limitation, index) => (
              <Card key={index} className="hover:shadow-md transition-all duration-300 border-red-200 dark:border-red-900/50">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <XCircle className="h-5 w-5 text-red-500" />
                    <TechnicalTooltip 
                      term={limitation.type}
                      definition={limitation.explanation}
                    >
                      {limitation.type}
                    </TechnicalTooltip>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-muted-foreground text-sm">{limitation.explanation}</p>
                    
                    <div>
                      <Badge variant="destructive" className="text-xs mb-1">Impact potentiel</Badge>
                      <p className="text-sm">{limitation.impact}</p>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-950/30 p-2 rounded text-sm border border-green-200 dark:border-green-900/50">
                      <strong>Stratégies d'atténuation :</strong> {limitation.mitigation}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 border border-amber-200 dark:border-amber-800 p-6 rounded-lg">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-3 flex items-center gap-2">
            💡 Point important à retenir
          </h4>
          <p className="text-amber-700 dark:text-amber-300">
            Les capacités émergentes suivent généralement une courbe en "S" avec la taille du modèle : 
            peu d'amélioration jusqu'à un certain seuil, puis amélioration rapide, suivie d'un plateau. 
            Ce seuil d'émergence varie selon les capacités et explique pourquoi certaines tâches nécessitent 
            des modèles beaucoup plus grands que d'autres.
          </p>
        </div>
      </div>
    </LessonSection>
  );
};

export default CapabilitiesSection;
