import React from 'react';
import Hero from '@/components/Hero';
import CourseHeader from '@/components/courses/CourseHeader';
import ConceptsSection from '@/components/courses/supervised-learning/ConceptsSection';
import TypesSection from '@/components/courses/supervised-learning/TypesSection';
import AlgorithmsSection from '@/components/courses/supervised-learning/AlgorithmsSection';
import ApplicationsSection from '@/components/courses/supervised-learning/ApplicationsSection';
import ChallengesSection from '@/components/courses/supervised-learning/ChallengesSection';
import AlgorithmInteractiveSchema from '@/components/courses/supervised-learning/AlgorithmInteractiveSchema';
import ConceptIllustration from '@/components/courses/supervised-learning/ConceptIllustration';
import DetailedProcessExample from '@/components/courses/supervised-learning/DetailedProcessExample';
import PerformanceVisualizer from '@/components/courses/supervised-learning/PerformanceVisualizer';
import DataTrainingSimulator from '@/components/courses/supervised-learning/DataTrainingSimulator';
import InteractiveChart from '@/components/courses/supervised-learning/InteractiveChart';
import LessonSection from '@/components/courses/LessonSection';
import DidYouKnow from '@/components/courses/DidYouKnow';
import CourseConclusion from '@/components/courses/CourseConclusion';
import BackToResourcesButton from '@/components/courses/BackToResourcesButton';
import { Brain, Lightbulb, BookOpen, Zap, Target, TreePine } from 'lucide-react';
import DecisionTreeInteractive from '@/components/courses/supervised-learning/DecisionTreeInteractive';
import RandomForestVisualization from '@/components/courses/supervised-learning/RandomForestVisualization';
import NeuralNetworkVisualization from '@/components/courses/supervised-learning/NeuralNetworkVisualization';

const ApprentissageSupervise = () => {
  const didYouKnowFacts = [
    {
      title: "L'apprentissage supervisé représente 70% des applications IA actuelles",
      content: "De la reconnaissance vocale aux recommandations Netflix, l'apprentissage supervisé alimente la majorité des services IA que nous utilisons quotidiennement."
    },
    {
      title: "Un modèle peut apprendre de millions d'exemples en quelques heures", 
      content: "Grâce aux GPU modernes, des algorithmes peuvent traiter des téraoctets de données étiquetées en un temps record, révolutionnant la vitesse de développement."
    },
    {
      title: "80% du temps d'un projet IA est consacré aux données",
      content: "Nettoyer, labelliser et préparer les données représente la majorité du travail. Les algorithmes ne sont que la pointe de l'iceberg !"
    },
    {
      title: "Certains modèles atteignent des performances surhumaines",
      content: "En imagerie médicale, les IA détectent certains cancers avec une précision supérieure aux radiologues experts, sauvant des milliers de vies."
    }
  ];

  return (
    <>
      <Hero
        title="Maîtriser l'Apprentissage Supervisé"
        subtitle="Le guide complet et interactif pour comprendre, pratiquer et exceller dans l'apprentissage supervisé - de la théorie à la pratique professionnelle"
      />

      <div className="section-container">
        <BackToResourcesButton />
        
        <CourseHeader
          title="L'Apprentissage Supervisé : De Débutant à Expert"
          subtitle="Votre parcours complet vers la maîtrise du Machine Learning avec simulations interactives"
          author="Geoffroy Streit"
          authorDescription="Consultant passionné en Intelligence Artificielle"
          level="Débutant à Intermédiaire"
          duration="8-10 heures"
          audience="Étudiants, professionnels, curieux de tech"
          tags={['Machine Learning', 'Classification', 'Régression', 'Algorithmes', 'IA Pratique', 'Data Science']}
        />

        {/* Introduction avec illustrations conceptuelles */}
        <ConceptsSection />

        {/* Illustrations interactives des concepts */}
        <LessonSection
          title="Concepts Visuels Interactifs"
          icon={<Lightbulb className="h-6 w-6" />}
        >
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Les concepts abstraits deviennent concrets grâce à ces illustrations interactives. 
              Explorez visuellement les fondamentaux de l'apprentissage supervisé !
            </p>
            <ConceptIllustration />
          </div>
        </LessonSection>

        {/* Types avec exemples enrichis */}
        <TypesSection />

        {/* Schémas interactifs des algorithmes stars */}
        <LessonSection
          title="Algorithmes en Action - Simulation Interactive"
          icon={<Zap className="h-6 w-6" />}
        >
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Découvrez comment fonctionnent réellement les algorithmes d'apprentissage supervisé 
              grâce à cette simulation interactive étape par étape.
            </p>
            <AlgorithmInteractiveSchema />
          </div>
        </LessonSection>

        {/* NOUVEAUX COMPOSANTS INTERACTIFS DÉTAILLÉS */}
        
        {/* Arbre de Décision Interactif */}
        <LessonSection
          title="🌳 Arbre de Décision - Démonstration Interactive Complète"
          icon={<TreePine className="h-6 w-6" />}
        >
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Plongez dans le fonctionnement d'un arbre de décision avec cet exemple concret 
              d'approbation de crédit. Observez comment l'algorithme construit ses règles de décision 
              en analysant les données étape par étape.
            </p>
            <DecisionTreeInteractive />
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-6 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-4">
                💡 Points clés à retenir sur les Arbres de Décision
              </h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="font-medium text-green-700 dark:text-green-300">Avantages majeurs :</div>
                  <ul className="space-y-1 text-green-600 dark:text-green-400">
                    <li>• Parfaitement interprétable et explicable</li>
                    <li>• Gère naturellement les variables catégorielles</li>
                    <li>• Détecte automatiquement les interactions</li>
                    <li>• Pas besoin de normaliser les données</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <div className="font-medium text-green-700 dark:text-green-300">Applications idéales :</div>
                  <ul className="space-y-1 text-green-600 dark:text-green-400">
                    <li>• Systèmes d'aide à la décision médicale</li>
                    <li>• Scoring de crédit et risque financier</li>
                    <li>• Systèmes de recommandation simples</li>
                    <li>• Analyse de règles métier</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </LessonSection>

        {/* Random Forest Interactif */}
        <LessonSection
          title="🌲 Random Forest - La Puissance de la Collaboration"
          icon={<TreePine className="h-6 w-6" />}
        >
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Découvrez la magie du Random Forest : comment des dizaines d'arbres de décision 
              travaillent ensemble pour créer un modèle plus robuste et précis que chacun individuellement. 
              Expérimentez avec différents nombres d'arbres et observez l'impact sur les performances.
            </p>
            <RandomForestVisualization />
            
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 p-6 rounded-lg border border-emerald-200 dark:border-emerald-800">
              <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-4">
                🌟 Pourquoi Random Forest révolutionne le Machine Learning
              </h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="font-medium text-emerald-700 dark:text-emerald-300">Technique du Bagging :</div>
                  <div className="text-emerald-600 dark:text-emerald-400">
                    Chaque arbre s'entraîne sur un échantillon différent des données, 
                    créant de la diversité et réduisant le sur-apprentissage.
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="font-medium text-emerald-700 dark:text-emerald-300">Sélection de Features :</div>
                  <div className="text-emerald-600 dark:text-emerald-400">
                    À chaque division, seul un sous-ensemble aléatoire des variables est considéré, 
                    forçant les arbres à explorer différentes stratégies.
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="font-medium text-emerald-700 dark:text-emerald-300">Vote Intelligent :</div>
                  <div className="text-emerald-600 dark:text-emerald-400">
                    La décision finale combine les avis de tous les arbres, 
                    souvent pondérés par leur niveau de confiance.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LessonSection>

        {/* Réseau de Neurones Interactif */}
        <LessonSection
          title="🧠 Réseaux de Neurones - L'Intelligence Artificielle en Action"
          icon={<Brain className="h-6 w-6" />}
        >
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Assistez à l'entraînement d'un véritable réseau de neurones ! Observez comment 
              les connexions s'ajustent au fil des époques, comment l'erreur diminue et la précision augmente. 
              Modifiez l'architecture pour voir l'impact sur les performances.
            </p>
            <NeuralNetworkVisualization />
            
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
              <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-4">
                🚀 Les Réseaux de Neurones : Frontière de l'IA Moderne
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="font-medium text-purple-700 dark:text-purple-300">Capacités exceptionnelles :</div>
                  <ul className="space-y-1 text-sm text-purple-600 dark:text-purple-400">
                    <li>• <strong>Approximation universelle :</strong> Peut apprendre n'importe quelle fonction</li>
                    <li>• <strong>Patterns complexes :</strong> Détecte des relations non-linéaires subtiles</li>
                    <li>• <strong>Représentations automatiques :</strong> Crée ses propres features optimales</li>
                    <li>• <strong>Scalabilité :</strong> Performance s'améliore avec plus de données</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <div className="font-medium text-purple-700 dark:text-purple-300">Applications révolutionnaires :</div>
                  <ul className="space-y-1 text-sm text-purple-600 dark:text-purple-400">
                    <li>• <strong>Vision par ordinateur :</strong> Reconnaissance d'images médicales</li>
                    <li>• <strong>Traitement du langage :</strong> Traduction automatique, ChatGPT</li>
                    <li>• <strong>Jeux stratégiques :</strong> AlphaGo, échecs, poker</li>
                    <li>• <strong>Sciences :</strong> Découverte de médicaments, prévision météo</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </LessonSection>

        {/* Visualisation comparative des performances */}
        <LessonSection
          title="Comparateur de Performance"
          icon={<Target className="h-6 w-6" />}
        >
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Comparez objectivement les forces et faiblesses de chaque algorithme 
              pour faire le bon choix selon votre projet.
            </p>
            <PerformanceVisualizer />
          </div>
        </LessonSection>

        {/* Simulateur d'entraînement de données */}
        <LessonSection
          title="Laboratoire d'Entraînement"
          icon={<Brain className="h-6 w-6" />}
        >
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Expérimentez avec différents paramètres et observez en temps réel 
              comment un modèle apprend à partir de vos données.
            </p>
            <DataTrainingSimulator />
          </div>
        </LessonSection>

        {/* Visualisation interactive classique */}
        <LessonSection
          title="Visualisation Interactive : Voir l'IA Apprendre"
          icon={<Brain className="h-6 w-6" />}
        >
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Rien ne vaut l'expérience visuelle pour comprendre ! Cette démonstration interactive 
              vous montre en temps réel comment un algorithme apprend à classifier et faire des régressions.
            </p>
            
            <InteractiveChart />
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">💡 Dans la classification :</h4>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  L'algorithme trace une frontière de décision (ligne jaune) qui sépare au mieux 
                  les deux classes. Chaque nouveau point sera classé selon sa position par rapport à cette ligne.
                </p>
              </div>
              <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">📈 Dans la régression :</h4>
                <p className="text-sm text-green-700 dark:text-green-300">
                  L'algorithme trace la ligne qui passe le plus près possible de tous les points. 
                  Cette ligne permet de prédire la valeur Y pour n'importe quelle valeur X.
                </p>
              </div>
            </div>
          </div>
        </LessonSection>

        {/* Processus détaillé étape par étape */}
        <LessonSection
          title="Projet Complet : De l'Idée à la Production"
          icon={<BookOpen className="h-6 w-6" />}
        >
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Suivons ensemble la création d'un vrai projet de machine learning, depuis l'idée 
              jusqu'au déploiement en production. Chaque étape révèle les défis réels 
              et les solutions pratiques utilisées par les professionnels.
            </p>
            <DetailedProcessExample />
          </div>
        </LessonSection>

        {/* Algorithmes détaillés */}
        <AlgorithmsSection />

        {/* Applications avec cas d'études réels */}
        <ApplicationsSection />

        {/* Défis et bonnes pratiques */}
        <ChallengesSection />

        {/* Faits fascinants enrichis */}
        <DidYouKnow items={didYouKnowFacts} />

        {/* Conclusion enrichie */}
        <CourseConclusion
          title="🎓 Félicitations ! Vous êtes maintenant un Expert en Apprentissage Supervisé"
          summary="Vous maîtrisez maintenant les concepts fondamentaux, les algorithmes principaux, les applications réelles et les bonnes pratiques de l'apprentissage supervisé. Grâce aux simulations interactives, vous avez une compréhension pratique et visuelle des processus d'apprentissage."
          nextSteps={[
            "🐍 Apprenez Python et les bibliothèques essentielles (scikit-learn, pandas, matplotlib)",
            "📊 Pratiquez sur des datasets réels via Kaggle, Google Colab ou GitHub",
            "🧠 Explorez le Deep Learning avec TensorFlow ou PyTorch",
            "☁️ Découvrez le MLOps et le déploiement sur AWS/GCP/Azure",
            "📚 Approfondissez avec des cours avancés (Andrew Ng, Fast.ai)",
            "🤝 Rejoignez des communautés (Reddit r/MachineLearning, Discord AI)",
            "💼 Construisez un portfolio avec 3-5 projets complets sur GitHub",
            "🔬 Expérimentez avec les simulateurs de ce cours pour solidifier vos connaissances"
          ]}
          learningPoints={[
            "Les concepts fondamentaux avec visualisations interactives",
            "La différence pratique entre classification et régression", 
            "Le fonctionnement interne des algorithmes principaux",
            "Le processus complet de développement d'un projet ML",
            "Les applications révolutionnaires dans tous les secteurs",
            "Les défis réels et comment les surmonter en pratique",
            "L'expérience hands-on grâce aux simulations et visualisations"
          ]}
        />
      </div>
    </>
  );
};

export default ApprentissageSupervise;
