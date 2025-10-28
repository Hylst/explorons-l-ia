
import React from 'react';
import BackToResourcesButton from '@/components/courses/BackToResourcesButton';
import CourseHeader from '@/components/courses/CourseHeader';
import PedagogicalPreface from '@/components/courses/parametres-llm/PedagogicalPreface';
import ArchitectureSection from '@/components/courses/parametres-llm/ArchitectureSection';
import TrainingParametersSection from '@/components/courses/parametres-llm/TrainingParametersSection';
import InferenceParametersSection from '@/components/courses/parametres-llm/InferenceParametersSection';
import CapabilitiesSection from '@/components/courses/parametres-llm/CapabilitiesSection';
import OptimizationSection from '@/components/courses/parametres-llm/OptimizationSection';
import PracticalApplicationsSection from '@/components/courses/parametres-llm/PracticalApplicationsSection';
import CourseConclusion from '@/components/courses/CourseConclusion';

const ParametresLLM = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <BackToResourcesButton />
      
      <CourseHeader
        title="Bien paramétrer son LLM et gérer l'incertitude"
        subtitle="Comprendre les paramètres clés des modèles de langage et leurs impacts sur la génération"
        author="Explorons l'IA"
        authorDescription="Plateforme pédagogique spécialisée en intelligence artificielle"
        duration="40-50 minutes"
        level="Intermédiaire"
        audience="Professionnels, data scientists, étudiants"
        tags={["LLM", "paramètres", "génération", "contrôle", "incertitude"]}
      />

      {/* Préambule pédagogique */}
      <PedagogicalPreface />

      {/* Section Architecture */}
      <ArchitectureSection />
      
      {/* Section Paramètres d'entraînement */}
      <TrainingParametersSection />
      
      {/* Section Paramètres d'inférence */}
      <InferenceParametersSection />
      
      {/* Section Capacités émergentes */}
      <CapabilitiesSection />
      
      {/* Section Optimisations */}
      <OptimizationSection />
      
      {/* Section Applications pratiques */}
      <PracticalApplicationsSection />
      
      {/* Conclusion */}
      <CourseConclusion
        title="Conclusion : Vous maîtrisez maintenant les paramètres des LLM !"
        description="Félicitations ! Vous avez acquis une compréhension approfondie des paramètres qui caractérisent un LLM et savez désormais comment les utiliser pour optimiser vos projets d'IA."
        learningPoints={[
          "Comprendre l'architecture fondamentale des LLM et son impact direct sur les performances",
          "Maîtriser les hyperparamètres d'entraînement et d'inférence pour des résultats optimaux",
          "Identifier les capacités émergentes et anticiper les limitations structurelles",
          "Appliquer les bonnes techniques d'optimisation selon votre contexte d'usage",
          "Choisir le modèle idéal en fonction de vos besoins métier et contraintes techniques",
          "Éviter les pièges courants et optimiser les coûts de déploiement"
        ]}
        nextSteps={[
          "Expérimentez avec différents paramètres d'inférence sur vos cas d'usage réels",
          "Explorez les benchmarks pour comparer les modèles dans votre domaine spécifique",
          "Testez les techniques de quantization pour optimiser vos coûts de déploiement",
          "Suivez l'évolution des nouvelles architectures (MoE, nouveaux Transformers)",
          "Rejoignez des communautés techniques pour partager vos expériences d'optimisation",
          "Consultez régulièrement LLM Explorer et Papers With Code pour rester à jour"
        ]}
      />
    </div>
  );
};

export default ParametresLLM;
