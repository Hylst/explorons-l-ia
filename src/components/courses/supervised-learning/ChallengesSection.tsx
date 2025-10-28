
import React from 'react';
import LessonSection from '@/components/courses/LessonSection';
import AnalogyBox from '@/components/courses/AnalogyBox';
import QuickFactBox from '@/components/courses/QuickFactBox';
import ExpandableSection from '@/components/courses/ExpandableSection';
import { AlertTriangle, Shield, CheckCircle, TrendingUp } from 'lucide-react';

const ChallengesSection: React.FC = () => {
  return (
    <LessonSection
      title="Défis et Bonnes Pratiques : Éviter les Pièges Courants"
      icon={<Shield className="h-6 w-6" />}
    >
      <div className="space-y-8">
        <div className="prose max-w-none">
          <p className="text-lg leading-relaxed">
            L'apprentissage supervisé est puissant, mais comme tout outil puissant, il faut savoir 
            l'utiliser correctement. Découvrons les défis principaux et comment les surmonter !
          </p>
        </div>

        <div className="grid gap-6">
          <ExpandableSection
            title="⚠️ Le Sur-apprentissage (Overfitting) - L'Ennemi N°1"
            icon={<AlertTriangle className="h-5 w-5 text-red-500" />}
            defaultExpanded={true}
          >
            <div className="space-y-6">
              <AnalogyBox
                title="Analogie : L'étudiant qui apprend par cœur"
                content="Imaginez un étudiant qui mémorise parfaitement tous les exercices du manuel, mais échoue à l'examen car les questions sont légèrement différentes. C'est exactement le sur-apprentissage : le modèle 'connaît par cœur' les données d'entraînement mais ne généralise pas."
                variant="info"
              />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-800 dark:text-red-200 mb-3">🚨 Signes de sur-apprentissage :</h4>
                  <ul className="space-y-2 text-sm text-red-700 dark:text-red-300">
                    <li>• Performance parfaite sur données d'entraînement</li>
                    <li>• Performance médiocre sur nouvelles données</li>
                    <li>• Écart grandissant entre train et validation</li>
                    <li>• Modèle très complexe avec peu de données</li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">✅ Solutions pratiques :</h4>
                  <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
                    <li>• Plus de données d'entraînement</li>
                    <li>• Validation croisée (cross-validation)</li>
                    <li>• Régularisation (L1, L2, Dropout)</li>
                    <li>• Early stopping pendant l'entraînement</li>
                  </ul>
                </div>
              </div>

              <QuickFactBox
                title="Règle d'or"
                description="Toujours séparer vos données : 60% entraînement, 20% validation, 20% test. Ne JAMAIS toucher aux données de test avant la fin !"
                icon="🔒"
                variant="default"
              />
            </div>
          </ExpandableSection>

          <ExpandableSection
            title="📊 Qualité des Données - La Fondation de Tout"
            icon={<CheckCircle className="h-5 w-5 text-blue-500" />}
          >
            <div className="space-y-6">
              <AnalogyBox
                title="Analogie : Cuisiner avec de mauvais ingrédients"
                content="Même le meilleur chef ne peut pas faire un bon plat avec des ingrédients pourris. En machine learning, 'Garbage In, Garbage Out' : des données de mauvaise qualité donnent des modèles de mauvaise qualité."
                variant="info"
              />

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">🧹 Nettoyage</h4>
                  <ul className="text-sm space-y-1 text-blue-700 dark:text-blue-300">
                    <li>• Supprimer doublons</li>
                    <li>• Corriger erreurs saisie</li>
                    <li>• Gérer valeurs manquantes</li>
                    <li>• Détecter outliers</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">⚖️ Équilibrage</h4>
                  <ul className="text-sm space-y-1 text-green-700 dark:text-green-300">
                    <li>• Classes représentées</li>
                    <li>• Pas de biais systémique</li>
                    <li>• Diversité des exemples</li>
                    <li>• Distribution réaliste</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">🔄 Préparation</h4>
                  <ul className="text-sm space-y-1 text-purple-700 dark:text-purple-300">
                    <li>• Normalisation/Standardisation</li>
                    <li>• Encodage variables catégorielles</li>
                    <li>• Feature engineering</li>
                    <li>• Sélection variables pertinentes</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-3">💡 La règle 80/20 du Data Science :</h4>
                <p className="text-sm text-amber-700 dark:text-amber-300">
                  Les data scientists passent 80% de leur temps à nettoyer et préparer les données, 
                  et seulement 20% à construire des modèles. C'est normal et c'est crucial !
                </p>
              </div>
            </div>
          </ExpandableSection>

          <ExpandableSection
            title="🎯 Biais et Équité - L'IA Responsable"
            icon={<TrendingUp className="h-5 w-5 text-purple-500" />}
          >
            <div className="space-y-6">
              <AnalogyBox
                title="Analogie : Le miroir déformant"
                content="Si vous apprenez à reconnaître les visages en ne regardant que des photos d'hommes blancs, vous aurez du mal à reconnaître les femmes ou les personnes d'autres origines. L'IA reflète les biais présents dans ses données d'entraînement."
                variant="info"
              />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-purple-700">⚠️ Types de biais courants :</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Biais de sélection :</strong> Données non représentatives</li>
                    <li>• <strong>Biais historique :</strong> Reproduire inégalités passées</li>
                    <li>• <strong>Biais de confirmation :</strong> Chercher ce qu'on veut trouver</li>
                    <li>• <strong>Biais d'échantillonnage :</strong> Groupes sous-représentés</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-purple-700">✅ Comment les éviter :</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Diversité des données :</strong> Toutes populations représentées</li>
                    <li>• <strong>Audit régulier :</strong> Tester sur différents groupes</li>
                    <li>• <strong>Équipe diverse :</strong> Perspectives multiples</li>
                    <li>• <strong>Transparence :</strong> Expliquer les décisions</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-800 dark:text-red-200 mb-3">🚨 Exemples réels problématiques :</h4>
                <ul className="space-y-2 text-sm text-red-700 dark:text-red-300">
                  <li>• Systèmes de reconnaissance faciale moins précis sur peaux foncées</li>
                  <li>• Algorithmes de recrutement favorisant les hommes</li>
                  <li>• Systèmes de crédit discriminant certaines communautés</li>
                  <li>• IA médicale moins efficace sur certaines populations</li>
                </ul>
              </div>
            </div>
          </ExpandableSection>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <QuickFactBox
            title="Checklist Qualité"
            description="Avant de déployer : Données propres ✓ Validation croisée ✓ Test sur groupes divers ✓ Performance stable ✓ Explicabilité ✓"
            icon="📋"
            variant="success"
          />
          
          <QuickFactBox
            title="Amélioration Continue"
            description="Un modèle n'est jamais fini ! Surveillez ses performances, collectez feedback, et réentraînez régulièrement avec nouvelles données."
            icon="🔄"
            variant="default"
          />
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30 p-6 rounded-lg border border-green-200 dark:border-green-800">
          <h4 className="font-semibold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Les Bonnes Pratiques à Retenir
          </h4>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="space-y-2">
              <div className="font-medium text-green-700 dark:text-green-300">🎯 Commencer Simple</div>
              <div className="text-green-600 dark:text-green-400">Modèle simple qui marche {'>'}  Modèle complexe qui échoue</div>
            </div>
            <div className="space-y-2">
              <div className="font-medium text-green-700 dark:text-green-300">📊 Mesurer Constamment</div>
              <div className="text-green-600 dark:text-green-400">Ce qui n'est pas mesuré ne peut pas être amélioré</div>
            </div>
            <div className="space-y-2">
              <div className="font-medium text-green-700 dark:text-green-300">🤝 Collaborer</div>
              <div className="text-green-600 dark:text-green-400">Impliquer experts métier et utilisateurs finaux</div>
            </div>
          </div>
        </div>
      </div>
    </LessonSection>
  );
};

export default ChallengesSection;
