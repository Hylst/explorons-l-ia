
import React from 'react';
import SectionHeading from '../SectionHeading';

const FutureIntegration = () => {
  return (
    <section className="section-container bg-secondary/30 rounded-3xl my-12">
      <SectionHeading
        pretitle="Convergence"
        title="L'avenir réside dans l'intégration"
        description="Les frontières entre ces différents types d'IA s'estompent progressivement. Les systèmes les plus performants combinent souvent plusieurs approches pour tirer parti de leurs forces respectives."
        center
      />

      <div className="max-w-3xl mx-auto mt-8 glass-card rounded-2xl p-8 animate-fade-in">
        <h3 className="heading-sm mb-4">Tendances émergentes</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs">●</span>
            <p>Modèles multimodaux intégrant texte, image, audio et vidéo</p>
          </li>
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs">●</span>
            <p>Systèmes hybrides combinant apprentissage profond et raisonnement symbolique</p>
          </li>
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs">●</span>
            <p>Architectures modulaires permettant de composer différentes capacités</p>
          </li>
          <li className="flex items-start">
            <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs">●</span>
            <p>IA collaborative intégrant étroitement l'humain dans la boucle de décision</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FutureIntegration;
