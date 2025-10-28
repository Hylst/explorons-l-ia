
import React from 'react';
import { Users } from 'lucide-react';
import LessonSection from '../LessonSection';
import ZoomOn from '../ZoomOn';
import DidYouKnow from '../DidYouKnow';
import ClusteringVisualization from './ClusteringVisualization';

const ClusteringSection: React.FC = () => {
  return (
    <LessonSection 
      title="Le clustering : Identifier des groupes naturels" 
      icon={<Users className="h-6 w-6" />}
    >
      <div className="space-y-6">
        <p className="text-lg">
          Le clustering est probablement la technique la plus intuitive de l'apprentissage non supervisé. 
          L'objectif est de diviser un ensemble de données en groupes (clusters) où les éléments d'un même groupe 
          se ressemblent plus entre eux qu'avec les éléments des autres groupes.
        </p>

        <ZoomOn title="Algorithme K-means en action">
          <p className="mb-4">
            K-means est l'un des algorithmes de clustering les plus populaires. Voici comment il fonctionne :
          </p>
          <ol className="list-decimal list-inside space-y-2 text-sm">
            <li>Choisir le nombre de clusters (K) à créer</li>
            <li>Placer aléatoirement K "centres" dans l'espace des données</li>
            <li>Assigner chaque point au centre le plus proche</li>
            <li>Recalculer la position des centres en fonction des points assignés</li>
            <li>Répéter les étapes 3-4 jusqu'à convergence</li>
          </ol>
        </ZoomOn>

        <ClusteringVisualization />

        <DidYouKnow
          items={[
            {
              title: "Clusters naturels",
              content: "Dans la nature, de nombreux phénomènes forment spontanément des clusters : les galaxies dans l'univers, les espèces animales par habitat, ou même les goûts musicaux par génération !"
            },
            {
              title: "Netflix et clustering",
              content: "Netflix utilise le clustering pour regrouper les utilisateurs ayant des goûts similaires et recommander des contenus. Votre profil fait probablement partie d'un cluster !"
            },
            {
              title: "Marketing ciblé",
              content: "Les entreprises utilisent le clustering pour segmenter leurs clients en groupes homogènes et adapter leurs stratégies marketing à chaque segment."
            }
          ]}
        />
      </div>
    </LessonSection>
  );
};

export default ClusteringSection;
