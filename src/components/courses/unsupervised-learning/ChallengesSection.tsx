
import React from 'react';
import { Search } from 'lucide-react';
import LessonSection from '../LessonSection';
import ExpandableSection from '../ExpandableSection';

const ChallengesSection: React.FC = () => {
  return (
    <LessonSection 
      title="Défis et limitations de l'apprentissage non supervisé" 
      icon={<Search className="h-6 w-6" />}
    >
      <div className="space-y-6">
        <div className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-400 p-6 rounded-r-lg">
          <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-3">Principales difficultés</h3>
          <ul className="space-y-2 text-amber-700 dark:text-amber-300">
            <li>• <strong>Évaluation subjective</strong> : Pas de "vérité terrain" pour valider les résultats</li>
            <li>• <strong>Choix des paramètres</strong> : Difficile de déterminer le nombre optimal de clusters</li>
            <li>• <strong>Interprétation</strong> : Les patterns découverts ne sont pas toujours significatifs</li>
            <li>• <strong>Dimensionnalité</strong> : Performance dégradée avec trop de variables</li>
            <li>• <strong>Bruit dans les données</strong> : Sensibilité aux données aberrantes</li>
          </ul>
        </div>

        <ExpandableSection title="Stratégies pour surmonter ces défis">
          <div className="space-y-4 text-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-green-200 dark:border-green-800 p-4 rounded-lg">
                <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Validation croisée</h4>
                <p>Utiliser plusieurs méthodes et comparer les résultats pour identifier les patterns robustes.</p>
              </div>
              <div className="border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Expertise métier</h4>
                <p>Collaborer avec des experts du domaine pour interpréter et valider les découvertes.</p>
              </div>
              <div className="border border-purple-200 dark:border-purple-800 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Préparation des données</h4>
                <p>Nettoyer soigneusement les données et gérer les valeurs aberrantes avant l'analyse.</p>
              </div>
              <div className="border border-orange-200 dark:border-orange-800 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Tests de robustesse</h4>
                <p>Vérifier que les résultats restent cohérents avec différents paramètres.</p>
              </div>
            </div>
          </div>
        </ExpandableSection>
      </div>
    </LessonSection>
  );
};

export default ChallengesSection;
