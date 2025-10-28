
import React from 'react';
import LessonSection from '@/components/courses/LessonSection';
import AnalogyBox from '@/components/courses/AnalogyBox';
import QuickFactBox from '@/components/courses/QuickFactBox';
import { Brain, BookOpen, Target } from 'lucide-react';

const ConceptsSection: React.FC = () => {
  return (
    <LessonSection
      title="Concepts Fondamentaux : Comprendre l'essence de l'apprentissage supervisé"
      icon={<Brain className="h-6 w-6" />}
    >
      <div className="space-y-8">
        <div className="prose max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            L'apprentissage supervisé est comme enseigner à un enfant en lui montrant des exemples 
            avec leurs bonnes réponses. Imaginez que vous voulez apprendre à reconnaître des races 
            de chiens à votre petit frère. Vous lui montrez 1000 photos en disant à chaque fois : 
            "Ça c'est un Golden Retriever", "Ça c'est un Bulldog", etc.
          </p>
          
          <p className="leading-relaxed mb-6">
            Après avoir vu tous ces exemples étiquetés, votre frère devient capable de reconnaître 
            ces races sur de nouvelles photos qu'il n'a jamais vues. C'est exactement ainsi que 
            fonctionne l'apprentissage supervisé !
          </p>
        </div>

        <AnalogyBox
          title="Analogie : L'apprentissage comme à l'école"
          content="Un algorithme d'apprentissage supervisé, c'est comme un élève très attentif qui apprend en regardant des milliers d'exercices corrigés. Plus il voit d'exemples, mieux il comprend les patterns et plus il devient précis dans ses réponses."
          variant="info"
        />

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Les ingrédients essentiels
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="font-semibold text-primary">📊 Données d'entraînement :</span>
                <span>Des exemples avec leurs "bonnes réponses" (étiquettes)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-primary">🧠 Algorithme :</span>
                <span>Le "cerveau" qui apprend à partir des exemples</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-primary">🎯 Fonction de prédiction :</span>
                <span>Le résultat final qui peut faire des prédictions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-primary">✅ Validation :</span>
                <span>Tester sur de nouvelles données pour vérifier la qualité</span>
              </li>
            </ul>
          </div>

          <QuickFactBox
            title="Pourquoi 'Supervisé' ?"
            description="On appelle cela 'supervisé' car nous fournissons la 'supervision' - c'est-à-dire les bonnes réponses - pendant l'apprentissage. C'est comme avoir un professeur qui corrige chaque exercice."
            icon="👨‍🏫"
            variant="success"
          />
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3 flex items-center gap-2">
            <Target className="h-5 w-5" />
            Le processus en 4 étapes clés
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="font-medium text-blue-700 dark:text-blue-300">1. Collecte des données</div>
              <div className="text-blue-600 dark:text-blue-400">Rassembler des exemples étiquetés</div>
            </div>
            <div className="space-y-2">
              <div className="font-medium text-blue-700 dark:text-blue-300">2. Entraînement</div>
              <div className="text-blue-600 dark:text-blue-400">L'algorithme apprend les patterns</div>
            </div>
            <div className="space-y-2">
              <div className="font-medium text-blue-700 dark:text-blue-300">3. Validation</div>
              <div className="text-blue-600 dark:text-blue-400">Tester sur de nouvelles données</div>
            </div>
            <div className="space-y-2">
              <div className="font-medium text-blue-700 dark:text-blue-300">4. Déploiement</div>
              <div className="text-blue-600 dark:text-blue-400">Utiliser le modèle en production</div>
            </div>
          </div>
        </div>
      </div>
    </LessonSection>
  );
};

export default ConceptsSection;
