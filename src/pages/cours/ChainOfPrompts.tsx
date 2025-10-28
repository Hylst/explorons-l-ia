
import React from 'react';
import BackToResourcesButton from '@/components/courses/BackToResourcesButton';
import CourseHeader from '@/components/courses/CourseHeader';
import IntroductionSection from '@/components/courses/chainofprompts/IntroductionSection';
import ChainConceptsSection from '@/components/courses/chainofprompts/ChainConceptsSection';
import TechnicalArchitectureSection from '@/components/courses/chainofprompts/TechnicalArchitectureSection';
import PracticalApplicationsSection from '@/components/courses/chainofprompts/PracticalApplicationsSection';
import CourseConclusion from '@/components/courses/CourseConclusion';

const ChainOfPrompts = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <BackToResourcesButton />
      
      <CourseHeader
        title="Maîtriser le Chain of Prompts"
        subtitle="Apprenez à construire des conversations intelligentes avec l'IA pour obtenir des résultats précis et personnalisés"
        author="Explorons l'IA"
        authorDescription="Plateforme pédagogique spécialisée en intelligence artificielle"
        duration="45-60 minutes"
        level="Débutant à Intermédiaire"
        audience="Professionnels, étudiants, curieux"
        tags={["Chain of Prompts", "Prompt Engineering", "Communication IA", "Méthodologie"]}
      />

      {/* Introduction pédagogique */}
      <IntroductionSection />
      
      {/* Concepts approfondis */}
      <ChainConceptsSection />
      
      {/* Architecture technique */}
      <TechnicalArchitectureSection />
      
      {/* Applications pratiques */}
      <PracticalApplicationsSection />
      
      {/* Conclusion */}
      <CourseConclusion
        title="Conclusion : Maîtrisez l'art de la conversation avec l'IA"
        description="Vous avez maintenant les clés pour créer des chaînes de prompts efficaces et obtenir des résultats précis avec l'IA."
        learningPoints={[
          "Comprendre les mécanismes du chain of prompts et ses avantages",
          "Maîtriser les techniques de décomposition de problèmes complexes",
          "Appliquer les bonnes pratiques pour une communication optimale avec l'IA",
          "Utiliser les patterns avancés d'enchaînement selon le contexte",
          "Mesurer et optimiser l'efficacité de vos chaînes de prompts"
        ]}
        nextSteps={[
          "Pratiquez avec des cas concrets dans votre domaine professionnel",
          "Explorez le cours sur le Prompt Engineering pour approfondir",
          "Testez les patterns convergents et itératifs sur des projets réels",
          "Rejoignez des communautés pour partager vos expériences",
          "Consultez les ressources avancées sur l'optimisation des prompts"
        ]}
      />
    </div>
  );
};

export default ChainOfPrompts;
