
import React from 'react';
import Hero from '../../components/Hero';
import BackToResourcesButton from '../../components/courses/BackToResourcesButton';
import CourseHeader from '../../components/courses/CourseHeader';
import CourseConclusion from '../../components/courses/CourseConclusion';
import LessonSection from '../../components/courses/LessonSection';
import { Calculator, TrendingUp, BarChart3, Sigma, Brain, Target } from 'lucide-react';

// Composants spécialisés pour ce cours
import MathIntroductionSection from '../../components/courses/math-ia/MathIntroductionSection';
import LinearAlgebraSection from '../../components/courses/math-ia/LinearAlgebraSection';
import CalculusSection from '../../components/courses/math-ia/CalculusSection';
import ProbabilityStatsSection from '../../components/courses/math-ia/ProbabilityStatsSection';
import OptimizationSection from '../../components/courses/math-ia/OptimizationSection';
import PracticalApplicationsSection from '../../components/courses/math-ia/PracticalApplicationsSection';

const BasesMathematiquesIA = () => {
  return (
    <>
      <Hero
        title="Les Bases Mathématiques de l'IA"
        subtitle="Comprenez les fondements mathématiques qui permettent à l'intelligence artificielle de fonctionner, avec des explications claires et des exemples concrets"
      />

      <section className="section-container">
        <BackToResourcesButton />
        
        <CourseHeader
          title="Maîtriser les Mathématiques derrière l'IA"
          author="Geoffroy Streit"
          duration="4h"
          level="Débutant à Intermédiaire"
          audience="Étudiants, développeurs, data scientists, curieux des mathématiques"
          tags={["Mathématiques", "Algèbre Linéaire", "Probabilités", "Statistiques", "Optimisation"]}
        />

        {/* Introduction pédagogique */}
        <MathIntroductionSection />

        {/* Section Algèbre Linéaire */}
        <LessonSection 
          title="Algèbre Linéaire : Le Langage des Données" 
          icon={<Calculator className="h-6 w-6" />}
        >
          <LinearAlgebraSection />
        </LessonSection>

        {/* Section Calcul Différentiel */}
        <LessonSection 
          title="Calcul Différentiel : Comment l'IA Apprend" 
          icon={<TrendingUp className="h-6 w-6" />}
        >
          <CalculusSection />
        </LessonSection>

        {/* Section Probabilités et Statistiques */}
        <LessonSection 
          title="Probabilités et Statistiques : Gérer l'Incertitude" 
          icon={<BarChart3 className="h-6 w-6" />}
        >
          <ProbabilityStatsSection />
        </LessonSection>

        {/* Section Optimisation */}
        <LessonSection 
          title="Optimisation : Trouver la Meilleure Solution" 
          icon={<Target className="h-6 w-6" />}
        >
          <OptimizationSection />
        </LessonSection>

        {/* Applications Pratiques */}
        <LessonSection 
          title="Applications Concrètes en IA" 
          icon={<Brain className="h-6 w-6" />}
        >
          <PracticalApplicationsSection />
        </LessonSection>

        <CourseConclusion
          title="Maîtriser les fondements pour exceller en IA"
          summary="Les mathématiques sont le socle sur lequel repose toute l'intelligence artificielle. En comprenant ces concepts fondamentaux, vous disposez des clés pour appréhender, développer et optimiser des systèmes d'IA performants."
          learningPoints={[
            "L'algèbre linéaire permet de manipuler et transformer les données efficacement",
            "Le calcul différentiel est au cœur de l'apprentissage automatique",
            "Les probabilités et statistiques gèrent l'incertitude et l'inférence",
            "L'optimisation trouve les meilleures solutions dans un espace complexe",
            "Ces concepts se combinent pour créer des algorithmes d'IA puissants",
            "La visualisation aide à comprendre les concepts abstraits",
            "La pratique progressive permet d'assimiler ces notions complexes"
          ]}
          nextSteps={[
            "Pratiquer avec des exercices d'algèbre linéaire appliquée",
            "Expérimenter avec des algorithmes d'optimisation",
            "Implémenter des modèles statistiques simples",
            "Étudier des cas d'usage spécifiques à votre domaine",
            "Approfondir les mathématiques du deep learning",
            "Explorer les bibliothèques mathématiques (NumPy, SciPy)",
            "Participer à des projets pratiques combinant théorie et application"
          ]}
        />
      </section>
    </>
  );
};

export default BasesMathematiquesIA;
