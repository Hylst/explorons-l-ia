
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MessageSquare, 
  ArrowRight, 
  CheckCircle2,
  Brain,
  Target,
  Lightbulb
} from 'lucide-react';
import LessonSection from '@/components/courses/LessonSection';
import TechnicalTooltip from '@/components/courses/TechnicalTooltip';
import AnalogyBox from '@/components/courses/AnalogyBox';
import InteractiveExample from '@/components/courses/InteractiveExample';

const ChainConceptsSection = () => {
  const exampleSteps = [
    { title: "Contexte initial", description: "Définir clairement l'objectif global et le contexte" },
    { title: "Décomposition", description: "Identifier les sous-tâches et leur séquence logique" },
    { title: "Premier prompt", description: "Lancer avec une requête ciblée et spécifique" },
    { title: "Validation", description: "Vérifier la réponse avant de poursuivre l'enchaînement" },
    { title: "Itération", description: "Construire sur la réponse précédente avec précision" }
  ];

  return (
    <LessonSection
      title="Qu'est-ce que le Chain of Prompts ?"
      icon={<MessageSquare className="h-6 w-6" />}
      delay={1}
    >
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-800 p-6 rounded-lg">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3 flex items-center gap-2">
            <Brain className="h-5 w-5" />
            Définition technique
          </h4>
          <p className="text-blue-700 dark:text-blue-300">
            Le{' '}
            <TechnicalTooltip 
              term="Chain of Prompts"
              definition="Technique de communication avec l'IA consistant à enchaîner plusieurs requêtes successives, chaque nouvelle requête s'appuyant sur la réponse précédente pour construire progressivement une solution complexe"
            >
              chain of prompts
            </TechnicalTooltip>{' '}
            (chaîne de requêtes) est une technique fondamentale de communication avec l'IA qui transforme des problèmes complexes en séquences de micro-interactions ciblées.
          </p>
        </div>
        
        <AnalogyBox
          title="Analogie : L'architecte et l'artisan"
          content="Imaginez construire une cathédrale. Au lieu de dire 'Construisez-moi une cathédrale' (prompt unique), vous commencez par 'Dessinez les fondations' (prompt 1), puis 'Érigez les piliers selon ce plan' (prompt 2), puis 'Ajoutez la voûte sur ces piliers' (prompt 3). Chaque étape s'appuie sur la précédente, créant progressivement un chef-d'œuvre."
          variant="info"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3 flex items-center gap-2">
              <ArrowRight className="h-5 w-5" />
              Processus séquentiel
            </h4>
            <ol className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
              <li>1. <strong>Prompt initial :</strong> Question ou instruction de base</li>
              <li>2. <strong>Réponse IA :</strong> Première solution ou information</li>
              <li>3. <strong>Prompt de suivi :</strong> Refinement basé sur la réponse</li>
              <li>4. <strong>Itération :</strong> Répétition jusqu'au résultat optimal</li>
            </ol>
          </Card>

          <Card className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800">
            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              Avantages clés
            </h4>
            <ul className="text-sm text-green-700 dark:text-green-300 space-y-2">
              <li>• <strong>Précision :</strong> Résultats 5x plus précis</li>
              <li>• <strong>Contrôle :</strong> Validation à chaque étape</li>
              <li>• <strong>Flexibilité :</strong> Correction et adaptation en temps réel</li>
              <li>• <strong>Complexité :</strong> Gestion de tâches sophistiquées</li>
            </ul>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 border border-purple-200 dark:border-purple-800 p-6 rounded-lg">
          <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-4 flex items-center gap-2">
            <Target className="h-5 w-5" />
            Mécanismes psychologiques
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <h5 className="font-medium text-purple-800 dark:text-purple-200 mb-2">Décomposition cognitive</h5>
              <p className="text-purple-700 dark:text-purple-300">
                Réduit la charge mentale en divisant les problèmes complexes en micro-tâches gérables.
              </p>
            </div>
            <div>
              <h5 className="font-medium text-purple-800 dark:text-purple-200 mb-2">Construction progressive</h5>
              <p className="text-purple-700 dark:text-purple-300">
                Permet à l'IA de construire une compréhension contextuelle enrichie étape par étape.
              </p>
            </div>
            <div>
              <h5 className="font-medium text-purple-800 dark:text-purple-200 mb-2">Validation continue</h5>
              <p className="text-purple-700 dark:text-purple-300">
                Offre des points de contrôle pour corriger et affiner le processus en cours de route.
              </p>
            </div>
          </div>
        </div>

        <InteractiveExample
          title="Exemple concret : Création d'une stratégie marketing"
          description="Démonstration étape par étape d'un chain of prompts efficace"
          steps={exampleSteps}
          finalMessage="Stratégie marketing complète et personnalisée avec plan d'action détaillé"
        />

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border border-amber-200 dark:border-amber-800 p-4 rounded-lg">
          <h5 className="font-medium text-amber-800 dark:text-amber-200 mb-2 flex items-center gap-2">
            <Lightbulb className="h-4 w-4" />
            Point clé à retenir
          </h5>
          <p className="text-sm text-amber-700 dark:text-amber-300">
            Le chain of prompts transforme une conversation avec l'IA en dialogue structuré, proche d'un travail d'équipe 
            où chaque interaction fait progresser intelligemment vers l'objectif final.
          </p>
        </div>
      </div>
    </LessonSection>
  );
};

export default ChainConceptsSection;
