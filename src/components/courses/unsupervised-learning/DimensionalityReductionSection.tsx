
import React from 'react';
import { TrendingUp, Database } from 'lucide-react';
import LessonSection from '../LessonSection';
import AnalogyBox from '../AnalogyBox';
import ExpandableSection from '../ExpandableSection';
import DimensionalityReductionDemo from './DimensionalityReductionDemo';

const DimensionalityReductionSection: React.FC = () => {
  return (
    <LessonSection 
      title="Réduction de dimensionnalité : Simplifier pour mieux comprendre" 
      icon={<TrendingUp className="h-6 w-6" />}
    >
      <div className="space-y-6">
        <p className="text-lg">
          Imaginez que vous essayez de comprendre un objet complexe en 3D en ne regardant que son ombre en 2D. 
          La réduction de dimensionnalité fait exactement cela : elle projette des données complexes à haute dimension 
          dans un espace plus simple, tout en préservant les informations les plus importantes.
        </p>

        <AnalogyBox
          title="L'analogie de la carte géographique"
          content="Une carte est une projection 2D de notre monde 3D. Elle perd certaines informations (comme le relief), mais permet de naviguer efficacement. La réduction de dimensionnalité crée des 'cartes' de données complexes."
          variant="tip"
        />

        <DimensionalityReductionDemo />

        <ExpandableSection title="Applications pratiques" icon={<Database className="h-5 w-5" />}>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Visualisation de données</h4>
                <p className="text-sm">Représenter graphiquement des datasets avec des centaines de variables.</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/30 dark:to-teal-950/30 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Compression d'images</h4>
                <p className="text-sm">Réduire la taille des fichiers tout en préservant la qualité visuelle.</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Recommandations</h4>
                <p className="text-sm">Identifier des utilisateurs similaires dans un espace de préférences simplifié.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Détection d'anomalies</h4>
                <p className="text-sm">Identifier des points inhabituels dans un espace de dimension réduite.</p>
              </div>
            </div>
          </div>
        </ExpandableSection>
      </div>
    </LessonSection>
  );
};

export default DimensionalityReductionSection;
