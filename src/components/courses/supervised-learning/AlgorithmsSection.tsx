
import React from 'react';
import LessonSection from '@/components/courses/LessonSection';
import AnalogyBox from '@/components/courses/AnalogyBox';
import QuickFactBox from '@/components/courses/QuickFactBox';
import ExpandableSection from '@/components/courses/ExpandableSection';
import { Cpu, Target, TreePine, Network } from 'lucide-react';

const AlgorithmsSection: React.FC = () => {
  return (
    <LessonSection
      title="Les Algorithmes Stars de l'Apprentissage Supervisé"
      icon={<Cpu className="h-6 w-6" />}
    >
      <div className="space-y-8">
        <div className="prose max-w-none">
          <p className="text-lg leading-relaxed">
            Chaque algorithme d'apprentissage supervisé a sa propre "personnalité" et ses forces. 
            Découvrons les plus populaires et apprenons quand les utiliser !
          </p>
        </div>

        <div className="grid gap-6">
          <ExpandableSection
            title="🏠 Régression Linéaire - Le Plus Simple et Efficace"
            icon={<Target className="h-5 w-5 text-blue-500" />}
            defaultExpanded={true}
          >
            <div className="space-y-4">
              <AnalogyBox
                title="Analogie : Tracer la meilleure ligne"
                content="Imaginez des points dispersés sur un graphique. La régression linéaire trace la ligne droite qui passe le plus près possible de tous les points. C'est comme trouver la tendance générale dans du désordre !"
                variant="info"
              />
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-green-700">✅ Points forts :</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Ultra rapide à entraîner</li>
                    <li>• Facile à comprendre et interpréter</li>
                    <li>• Peu de données nécessaires</li>
                    <li>• Pas de sur-apprentissage</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-red-700">❌ Limitations :</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Seulement pour relations linéaires</li>
                    <li>• Sensible aux valeurs aberrantes</li>
                    <li>• Assume une relation en ligne droite</li>
                  </ul>
                </div>
              </div>
              
              <QuickFactBox
                title="Exemple Pratique"
                description="Prédire le prix d'une maison selon sa surface : chaque m² supplémentaire ajoute environ 2000€ au prix. Simple et efficace !"
                icon="🏡"
              />
            </div>
          </ExpandableSection>

          <ExpandableSection
            title="🌳 Arbres de Décision - L'Algorithme Intuitif"
            icon={<TreePine className="h-5 w-5 text-green-500" />}
          >
            <div className="space-y-4">
              <AnalogyBox
                title="Analogie : Un questionnaire géant"
                content="Un arbre de décision fonctionne comme un questionnaire à choix multiples géant : 'Âge > 30 ans ? Si oui → Salaire > 50k€ ? Si oui → Crédit accordé !' Chaque question mène à la suivante jusqu'à la décision finale."
                variant="info"
              />
              
              <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">Comment ça marche :</h4>
                <div className="space-y-2 text-sm text-green-700 dark:text-green-300">
                  <div>1. <strong>Racine :</strong> La première question la plus importante</div>
                  <div>2. <strong>Branches :</strong> Les différentes réponses possibles</div>
                  <div>3. <strong>Nœuds :</strong> Les questions suivantes</div>
                  <div>4. <strong>Feuilles :</strong> Les décisions finales</div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <QuickFactBox
                  title="Avantages"
                  description="Très facile à comprendre et expliquer. Pas besoin de préparer les données. Gère automatiquement les interactions complexes."
                  icon="👍"
                  variant="success"
                />
                <QuickFactBox
                  title="Inconvénients"
                  description="Peut facilement sur-apprendre. Instable (petit changement = arbre différent). Biais vers certains types de variables."
                  icon="⚠️"
                  variant="warning"
                />
              </div>
            </div>
          </ExpandableSection>

          <ExpandableSection
            title="🌲 Random Forest - La Sagesse Collective"
            icon={<TreePine className="h-5 w-5 text-emerald-500" />}
          >
            <div className="space-y-4">
              <AnalogyBox
                title="Analogie : Un conseil de sages"
                content="Imaginez 100 experts qui donnent chacun leur avis, puis on prend la décision majoritaire. Random Forest crée des centaines d'arbres de décision différents et les fait 'voter' ensemble pour une prédiction plus fiable."
                variant="tip"
              />
              
              <div className="bg-emerald-50 dark:bg-emerald-950/30 p-4 rounded-lg border border-emerald-200">
                <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-3">Le secret de Random Forest :</h4>
                <ul className="space-y-2 text-sm text-emerald-700 dark:text-emerald-300">
                  <li>• <strong>Bagging :</strong> Chaque arbre voit des données différentes</li>
                  <li>• <strong>Features aléatoires :</strong> Chaque arbre utilise des variables différentes</li>
                  <li>• <strong>Vote majoritaire :</strong> La prédiction finale = moyenne des prédictions</li>
                  <li>• <strong>Résultat :</strong> Plus stable et précis qu'un seul arbre</li>
                </ul>
              </div>
              
              <QuickFactBox
                title="Pourquoi c'est magique ?"
                description="Random Forest corrige les erreurs individuelles de chaque arbre grâce à la diversité. C'est le principe 'l'union fait la force' appliqué au machine learning !"
                icon="✨"
                variant="success"
              />
            </div>
          </ExpandableSection>

          <ExpandableSection
            title="🧠 Réseaux de Neurones - L'Inspiration Biologique"
            icon={<Network className="h-5 w-5 text-purple-500" />}
          >
            <div className="space-y-4">
              <AnalogyBox
                title="Analogie : Un cerveau simplifié"
                content="Comme les neurones dans notre cerveau qui se connectent et communiquent, un réseau de neurones artificiel est composé de 'neurones' mathématiques connectés entre eux. Chaque connexion a un 'poids' qui détermine l'importance de l'information transmise."
                variant="info"
              />
              
              <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">Architecture typique :</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="bg-white dark:bg-purple-900/50 p-3 rounded border">
                      <strong>Couche d'entrée</strong><br/>
                      Reçoit les données
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white dark:bg-purple-900/50 p-3 rounded border">
                      <strong>Couches cachées</strong><br/>
                      Traitement et apprentissage
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white dark:bg-purple-900/50 p-3 rounded border">
                      <strong>Couche de sortie</strong><br/>
                      Produit la prédiction
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <QuickFactBox
                  title="Superpouvoir"
                  description="Capable d'apprendre des patterns très complexes et non-linéaires. Excellent pour images, texte, sons."
                  icon="🚀"
                  variant="success"
                />
                <QuickFactBox
                  title="Le prix à payer"
                  description="Besoin de beaucoup de données et de puissance de calcul. Difficile à interpréter ('boîte noire')."
                  icon="💰"
                  variant="warning"
                />
              </div>
            </div>
          </ExpandableSection>
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 p-6 rounded-lg border border-amber-200 dark:border-amber-800">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-4">🎯 Comment choisir le bon algorithme ?</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="font-medium text-amber-700 dark:text-amber-300">Pour débuter :</div>
              <div className="text-amber-600 dark:text-amber-400">Régression linéaire ou Arbres de décision</div>
            </div>
            <div className="space-y-2">
              <div className="font-medium text-amber-700 dark:text-amber-300">Pour la performance :</div>
              <div className="text-amber-600 dark:text-amber-400">Random Forest ou Réseaux de neurones</div>
            </div>
            <div className="space-y-2">
              <div className="font-medium text-amber-700 dark:text-amber-300">Pour l'interprétabilité :</div>
              <div className="text-amber-600 dark:text-amber-400">Régression linéaire ou Arbres de décision</div>
            </div>
            <div className="space-y-2">
              <div className="font-medium text-amber-700 dark:text-amber-300">Pour les données complexes :</div>
              <div className="text-amber-600 dark:text-amber-400">Réseaux de neurones ou SVM</div>
            </div>
          </div>
        </div>
      </div>
    </LessonSection>
  );
};

export default AlgorithmsSection;
