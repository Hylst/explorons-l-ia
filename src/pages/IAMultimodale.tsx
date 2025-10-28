import React, { useState } from 'react';
import { useScrollToAnchor } from '@/hooks/useScrollToAnchor';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import ApplicationsSection from '@/components/multimodal/ApplicationsSection';
import PromptingSection from '@/components/multimodal/PromptingSection';
import ExploreMoreSection from '@/components/common/ExploreMoreSection';

/**
 * Page dédiée aux IA multimodales et à la création assistée par IA
 * @returns {JSX.Element} Le composant de la page IA Multimodale
 */
const IAMultimodale = () => {
  const [activeTab, setActiveTab] = useState("applications");
  useScrollToAnchor();

  const exploreLinks = [
    {
      to: "/ethique",
      label: "Éthique de l'IA",
      variant: "default" as const
    },
    {
      to: "/types-ia",
      label: "Types d'IA",
      variant: "outline" as const
    },
    {
      to: "/machine-learning",
      label: "Machine Learning",
      variant: "secondary" as const
    }
  ];

  return (
    <main>
      <Hero
        title="IA et Création Multimodale"
        subtitle="Découvrez comment les technologies d'intelligence artificielle transforment la création dans tous les domaines artistiques et techniques."
        primaryAction={{
          label: "Explorer les exemples",
          href: "#applications-creatives"
        }}
        secondaryAction={{
          label: "Astuces de prompting",
          href: "#prompting-efficace"
        }}
      />

      <section id="applications-creatives">
        <ApplicationsSection activeTab={activeTab} setActiveTab={setActiveTab} />
      </section>
      
      <section id="audio-section">
        <div className="section-container">
          <SectionHeading
            pretitle="Audio & Voix"
            title="IA Audio et Synthèse Vocale"
            description="Découvrez comment l'IA transforme la création et manipulation audio, de la synthèse vocale ultra-réaliste à la génération musicale."
            center
          />
        </div>
      </section>
      
      <section id="prompting-efficace">
        <PromptingSection />
      </section>
      
      <ExploreMoreSection links={exploreLinks} />
    </main>
  );
};

export default IAMultimodale;
