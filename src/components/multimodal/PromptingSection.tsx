
import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import PromptExamplesSection from '@/components/multimodal/PromptExamplesSection';

const PromptingSection: React.FC = () => {
  return (
    <section className="section-container bg-muted/30 dark:bg-secondary/10 py-16 rounded-3xl">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          pretitle="Astuces"
          title="L'art du prompting efficace"
          description="Maîtriser la façon de communiquer avec les IA est essentiel pour obtenir les meilleurs résultats. Voici quelques conseils clés et exemples concrets."
          center
        />

        <PromptExamplesSection />
      </div>
    </section>
  );
};

export default PromptingSection;
