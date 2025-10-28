
import React from 'react';
import LessonSection from '@/components/courses/LessonSection';
import QuickFactBox from '@/components/courses/QuickFactBox';
import ExpandableSection from '@/components/courses/ExpandableSection';
import ZoomOn from '@/components/courses/ZoomOn';
import { Lightbulb, Heart, ShoppingCart, Car, Building } from 'lucide-react';

const ApplicationsSection: React.FC = () => {
  return (
    <LessonSection
      title="Applications Révolutionnaires dans la Vraie Vie"
      icon={<Lightbulb className="h-6 w-6" />}
    >
      <div className="space-y-8">
        <div className="prose max-w-none">
          <p className="text-lg leading-relaxed">
            L'apprentissage supervisé transforme déjà notre quotidien de manière spectaculaire. 
            Découvrons comment ces algorithmes révolutionnent chaque secteur de notre société !
          </p>
        </div>

        <div className="grid gap-6">
          <ExpandableSection
            title="🏥 Santé & Médecine - Sauver des Vies avec l'IA"
            icon={<Heart className="h-5 w-5 text-red-500" />}
            defaultExpanded={true}
          >
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-red-700">🔬 Diagnostic Médical</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Radiologie :</strong> Détecter cancers sur scanners (précision {'>'}  médecins)</li>
                    <li>• <strong>Dermatologie :</strong> Identifier mélanomes sur photos de peau</li>
                    <li>• <strong>Ophtalmologie :</strong> Dépister rétinopathie diabétique</li>
                    <li>• <strong>Cardiologie :</strong> Analyser ECG pour arythmies</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-red-700">💊 Recherche & Développement</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Drug Discovery :</strong> Prédire efficacité des molécules</li>
                    <li>• <strong>Essais cliniques :</strong> Identifier patients idéaux</li>
                    <li>• <strong>Génomique :</strong> Prédire prédispositions génétiques</li>
                    <li>• <strong>Épidémiologie :</strong> Modéliser propagation maladies</li>
                  </ul>
                </div>
              </div>

              <ZoomOn title="Cas d'étude - Google DeepMind et le cancer du sein">
                <p className="mb-4">
                  En 2020, Google DeepMind a développé un système d'IA qui détecte le cancer du sein 
                  sur les mammographies avec une réduction de 5,7% des faux positifs et 9,4% des faux négatifs 
                  par rapport aux radiologues humains.
                </p>
                <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded border border-green-200">
                  <strong>Impact :</strong> Potentiellement des milliers de vies sauvées grâce à un diagnostic 
                  plus précoce et précis !
                </div>
              </ZoomOn>

              <QuickFactBox
                title="Révolution en cours"
                description="D'ici 2030, on estime que l'IA permettra de diagnostiquer 85% des maladies rares actuellement non détectées, réduisant de 10 ans le délai moyen de diagnostic."
                icon="🚀"
                variant="success"
              />
            </div>
          </ExpandableSection>

          <ExpandableSection
            title="🛒 E-commerce & Marketing - Personnaliser l'Expérience"
            icon={<ShoppingCart className="h-5 w-5 text-blue-500" />}
          >
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">🎯 Recommandations</h4>
                  <ul className="text-sm space-y-1 text-blue-700 dark:text-blue-300">
                    <li>• "Les clients ayant acheté..."</li>
                    <li>• Suggestions personnalisées</li>
                    <li>• Cross-selling intelligent</li>
                    <li>• Playlists musicales sur mesure</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">💰 Pricing Dynamique</h4>
                  <ul className="text-sm space-y-1 text-green-700 dark:text-green-300">
                    <li>• Prix en temps réel</li>
                    <li>• Optimisation des marges</li>
                    <li>• Pricing concurrentiel</li>
                    <li>• Tarifs personnalisés</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">🔍 Analyse Client</h4>
                  <ul className="text-sm space-y-1 text-purple-700 dark:text-purple-300">
                    <li>• Segmentation automatique</li>
                    <li>• Prédiction de churn</li>
                    <li>• Lifetime value</li>
                    <li>• Sentiment analysis</li>
                  </ul>
                </div>
              </div>

              <ZoomOn title="Netflix et ses 200 millions d'utilisateurs personnalisés">
                <p className="mb-4">
                  Netflix utilise plus de 1000 micro-genres et analyse 3 milliards d'heures de visionnage 
                  pour personnaliser les recommandations de chaque utilisateur. Résultat : 80% du contenu 
                  regardé provient des recommandations !
                </p>
                <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded border border-blue-200">
                  <strong>Chiffre clé :</strong> Netflix économise 1 milliard de dollars par an grâce à 
                  son système de recommandation qui réduit le churn client.
                </div>
              </ZoomOn>
            </div>
          </ExpandableSection>

          <ExpandableSection
            title="🚗 Transport & Mobilité - Vers l'Autonomie Complète"
            icon={<Car className="h-5 w-5 text-green-500" />}
          >
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-green-700">🤖 Véhicules Autonomes</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Vision :</strong> Reconnaissance panneaux, piétons, obstacles</li>
                    <li>• <strong>Prédiction :</strong> Comportement autres conducteurs</li>
                    <li>• <strong>Décision :</strong> Freiner, accélérer, tourner</li>
                    <li>• <strong>Planification :</strong> Route optimale en temps réel</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-green-700">🚦 Smart Cities</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Trafic :</strong> Optimisation feux de circulation</li>
                    <li>• <strong>Parking :</strong> Prédiction places disponibles</li>
                    <li>• <strong>Transport public :</strong> Ajustement horaires</li>
                    <li>• <strong>Maintenance :</strong> Prédiction pannes infrastructure</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">🎯 L'écosystème Tesla :</h4>
                <p className="text-sm text-green-700 dark:text-green-300 mb-2">
                  Chaque Tesla collecte des téraoctets de données de conduite qui alimentent 
                  l'apprentissage supervisé pour améliorer l'Autopilot de toute la flotte.
                </p>
                <div className="text-xs text-green-600 dark:text-green-400">
                  <strong>Plus de 3 milliards de miles</strong> de données de conduite analysées !
                </div>
              </div>
            </div>
          </ExpandableSection>

          <ExpandableSection
            title="🏦 Finance & Assurance - Sécuriser et Optimiser"
            icon={<Building className="h-5 w-5 text-yellow-500" />}
          >
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <QuickFactBox
                  title="Détection de Fraude"
                  description="Analyse en temps réel de millions de transactions. PayPal détecte 99.5% des fraudes avec moins de 0.1% de faux positifs."
                  icon="🛡️"
                  variant="warning"
                />
                
                <QuickFactBox
                  title="Scoring Crédit"
                  description="Évaluation automatique du risque emprunteur en analysant 1000+ variables en quelques secondes."
                  icon="📊"
                  variant="success"
                />
                
                <QuickFactBox
                  title="Trading Algorithmique"
                  description="75% des transactions boursières sont automatisées. Les algorithmes analysent news, tendances, sentiments en millisecondes."
                  icon="📈"
                  variant="default"
                />
              </div>

              <ZoomOn title="L'IA prédit les marchés financiers">
                <p className="mb-4">
                  JPMorgan Chase utilise l'apprentissage supervisé pour analyser les contrats légaux : 
                  leur système COIN traite en quelques secondes ce qui prenait 360 000 heures 
                  de travail humain par an !
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-950/30 p-3 rounded border border-yellow-200">
                  <strong>Innovation :</strong> Prédiction des mouvements de marché avec une précision 
                  de 68% sur 24h, surpassant la plupart des traders humains.
                </div>
              </ZoomOn>
            </div>
          </ExpandableSection>
        </div>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 p-6 rounded-lg border border-indigo-200 dark:border-indigo-800">
          <h4 className="font-semibold text-indigo-800 dark:text-indigo-200 mb-4 flex items-center gap-2">
            <Lightbulb className="h-5 w-5" />
            L'Impact Transformationnel
          </h4>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-3">
              <div className="font-medium text-indigo-700 dark:text-indigo-300">📈 Chiffres Impressionnants :</div>
              <ul className="space-y-1 text-indigo-600 dark:text-indigo-400">
                <li>• 2.5 quintillions d'octets de données créés chaque jour</li>
                <li>• 80% des entreprises du Fortune 500 utilisent l'IA</li>
                <li>• Marché de l'IA supervisée : 62 milliards $ en 2024</li>
                <li>• 37% d'amélioration moyenne de productivité</li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="font-medium text-indigo-700 dark:text-indigo-300">🚀 Prochaines Révolutions :</div>
              <ul className="space-y-1 text-indigo-600 dark:text-indigo-400">
                <li>• Médecine personnalisée généralisée</li>
                <li>• Villes entièrement autonomes</li>
                <li>• Éducation adaptative en temps réel</li>
                <li>• Agriculture de précision globale</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </LessonSection>
  );
};

export default ApplicationsSection;
