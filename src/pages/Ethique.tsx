
import React from 'react';
import Hero from '../components/Hero';
import EthicalPrinciplesSection from '@/components/ethics/EthicalPrinciplesSection';
import EthicalChallengesSection from '@/components/ethics/EthicalChallengesSection';
import RegulatoryFrameworkSection from '@/components/ethics/RegulatoryFrameworkSection';
import EthicalExamplesSection from '@/components/ethics/EthicalExamplesSection';
import QuizSection from '@/components/ethics/QuizSection';
import ExploreMoreSection from '@/components/common/ExploreMoreSection';

/**
 * Page sur l'éthique de l'IA
 * @returns {JSX.Element} Le composant de la page Éthique
 */
const Ethique = () => {
  const exploreLinks = [
    {
      to: "/niveaux-ia",
      label: "Niveaux d'IA",
      variant: "default" as const
    },
    {
      to: "/ethique-gouvernance",
      label: "Gouvernance de l'IA",
      variant: "outline" as const
    },
    {
      to: "/glossaire",
      label: "Glossaire des termes",
      variant: "secondary" as const
    }
  ];

  return (
    <div className="animate-fade-in">
      <Hero
        title="Éthique de l'IA"
        subtitle="Explorer les enjeux éthiques et sociétaux soulevés par le développement et l'utilisation de l'intelligence artificielle."
      />

      <div className="transform transition-all duration-500 hover:scale-[1.001]">
        <EthicalPrinciplesSection />
      </div>
      
      <div className="transform transition-all duration-500 hover:scale-[1.001]">
        <EthicalChallengesSection />
      </div>
      
      <div className="transform transition-all duration-500 hover:scale-[1.001]">
        <RegulatoryFrameworkSection />
      </div>
      
      <div className="transform transition-all duration-500 hover:scale-[1.001]">
        <EthicalExamplesSection />
      </div>
      
      <div className="transform transition-all duration-500 hover:scale-[1.001]">
        <QuizSection />
      </div>
      
      <div className="transform transition-all duration-500 hover:scale-[1.001]">
        <ExploreMoreSection links={exploreLinks} />
      </div>
    </div>
  );
};

export default Ethique;
