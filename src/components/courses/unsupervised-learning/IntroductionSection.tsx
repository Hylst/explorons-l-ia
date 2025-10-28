
import React from 'react';
import { Lightbulb } from 'lucide-react';
import AnalogyBox from '../AnalogyBox';

const IntroductionSection: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto mb-16">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-2xl p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Lightbulb className="h-7 w-7 text-amber-500" />
          Introduction : Qu'est-ce que l'apprentissage non supervisé ?
        </h2>
        
        <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 space-y-4">
          <p>
            Imaginez que vous êtes un explorateur qui découvre une nouvelle terre avec des milliers d'objets mystérieux éparpillés. 
            Votre mission ? Comprendre l'organisation de ces objets, identifier des groupes naturels, et découvrir des patterns cachés... 
            mais sans aucune indication préalable sur ce qu'il faut chercher !
          </p>
          
          <p>
            C'est exactement le défi de l'<strong>apprentissage non supervisé</strong> : analyser des données brutes pour y découvrir 
            des structures cachées, des groupes naturels, ou des relations intéressantes, sans avoir d'exemples de "bonnes réponses" 
            pour guider l'algorithme.
          </p>
          
          <p>
            Contrairement à l'apprentissage supervisé qui apprend à partir d'exemples étiquetés (comme "cette photo contient un chat"), 
            l'apprentissage non supervisé explore des données sans étiquettes et tente de révéler leur organisation intrinsèque.
          </p>
        </div>
      </div>

      <AnalogyBox
        title="Analogie : Le détective des données"
        content="Un détective qui arrive sur une scène de crime sans témoin ni indices évidents. Il doit observer attentivement tous les éléments présents, identifier des patterns, regrouper les indices similaires, et formuler des hypothèses sur ce qui s'est passé. L'apprentissage non supervisé fonctionne de la même manière avec les données !"
        variant="info"
      />
    </div>
  );
};

export default IntroductionSection;
