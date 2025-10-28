import { useScrollToAnchor } from '@/hooks/useScrollToAnchor';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import AITypesVisualization from '../components/ml/AITypesVisualization';
import AIComparisonTable from '../components/ml/AIComparisonTable';
import MLApplications from '../components/ml/MLApplications';
import AIArchitecturesVisualization from '../components/ml/AIArchitecturesVisualization';
import TypesOfML from '../components/ml/TypesOfML';

// Import the refactored components
import LLMSection from '../components/types-ia/LLMSection';
import RAGSection from '../components/types-ia/RAGSection';
import CNNSection from '../components/types-ia/CNNSection';
import NLPSection from '../components/types-ia/NLPSection';
import AGISection from '../components/types-ia/AGISection';
import XAISection from '../components/types-ia/XAISection';
import EmergingTrends from '../components/types-ia/EmergingTrends';
import FutureIntegration from '../components/types-ia/FutureIntegration';

/**
 * Page sur les différents types d'IA
 * @returns {JSX.Element} Le composant de la page des types d'IA
 */
const TypesIA = () => {
  useScrollToAnchor();
  
  return (
    <>
      <Hero
        title="Les Types d'Intelligence Artificielle"
        subtitle="Explorez les différentes approches technologiques de l'IA : modèles de langage, réseaux neuronaux, analyse prédictive et plus encore."
      />

      <section className="section-container">
        <SectionHeading
          pretitle="Taxonomie"
          title="Les principales familles d'IA"
          description="L'intelligence artificielle regroupe différentes approches et technologies, chacune avec ses forces, faiblesses et domaines d'application privilégiés."
          center
        />

        <AITypesVisualization />
        
        <div className="mb-12">
          <AIComparisonTable />
        </div>
        
        <TypesOfML />
        
        <AIArchitecturesVisualization />
        
        <MLApplications />

        <div className="mt-24 space-y-24">
          <LLMSection />
          <RAGSection />
          <CNNSection />
          <NLPSection />
          <AGISection />
          <XAISection />
        </div>
      </section>

      <EmergingTrends />
      <FutureIntegration />
    </>
  );
};

export default TypesIA;
