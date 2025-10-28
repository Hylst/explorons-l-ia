import React, { useState, useRef } from 'react';
import Hero from '@/components/Hero';
import { AddResourceForm } from '@/components/resources/AddResourceForm';
import { QuizDialog } from '@/components/resources/QuizDialog';

// Composants refactorisés
import ResourcesHeader from '@/components/resources/ResourcesHeader';
import ResourceFilters from '@/components/resources/ResourceFilters';
import UnifiedResourcesTabsSection from '@/components/resources/UnifiedResourcesTabsSection';
import ContinueLearningSection from '@/components/resources/ContinueLearningSection';
import { QualityControlSection } from '@/components/resources/QualityControlSection';

// Données
import { 
  realResources, 
  scientificPublications, 
  iaTools 
} from '@/components/resources/resourcesData';

// Hook pour l'audit
import { useResourceAudit } from '@/hooks/useResourceAudit';

/**
 * Page présentant des ressources externes pour approfondir les connaissances en IA
 * @returns {JSX.Element} Le composant de la page Ressources
 */
const Ressources = () => {
  const [showAddResourceForm, setShowAddResourceForm] = useState(false);
  const [showQuizDialog, setShowQuizDialog] = useState(false);
  
  // Lire le paramètre tab depuis l'URL
  const [activeTab, setActiveTab] = useState(() => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('tab') || 'toutes';
  });
  
  // Filtres
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all');
  
  // Référence pour le défilement
  const resourcesRef = useRef<HTMLDivElement>(null);
  
  // Options pour les filtres
  const allTopics = Array.from(new Set(
    realResources.flatMap(resource => resource.tags || [])
  )).sort();
  
  const allYears = Array.from(new Set(
    realResources.filter(r => r.year).map(r => r.year!)
  )).sort((a, b) => b - a);
  
  // Ressources filtrées
  const filteredResources = realResources.filter(resource => {
    const matchesSearch = 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (resource.source && resource.source.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesLevel = selectedLevel === 'all';
    const matchesTopic = selectedTopic === 'all' || (resource.tags && resource.tags.includes(selectedTopic));
    const matchesYear = selectedYear === 'all' || resource.year === parseInt(selectedYear);
    const matchesLanguage = selectedLanguage === 'all';

    return matchesSearch && matchesLevel && matchesTopic && matchesYear && matchesLanguage;
  });
  
  // Publications scientifiques filtrées
  const filteredScientificPublications = scientificPublications.filter(pub => {
    const matchesSearch = 
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      pub.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesYear = selectedYear === 'all' || pub.year === parseInt(selectedYear);

    return matchesSearch && matchesYear;
  });
  
  // Outils IA filtrés
  const filteredIATools = iaTools.filter(tool => {
    const matchesSearch = 
      tool.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesSearch;
  });
  
  // Hook d'audit pour toutes les ressources
  const {
    auditResults,
    qualityScores,
    isAuditing,
    auditAllResources,
    auditResource
  } = useResourceAudit(filteredResources);
  
  // Fonction pour défiler vers les ressources
  const scrollToResources = () => {
    resourcesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Écouter les événements de changement d'onglet
  React.useEffect(() => {
    const handleTabUpdate = (event: CustomEvent) => {
      setActiveTab(event.detail);
    };
    
    window.addEventListener('updateActiveTab', handleTabUpdate as EventListener);
    return () => window.removeEventListener('updateActiveTab', handleTabUpdate as EventListener);
  }, []);

  // Mettre à jour l'URL quand l'onglet change
  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (activeTab !== 'toutes') {
      urlParams.set('tab', activeTab);
    } else {
      urlParams.delete('tab');
    }
    const newUrl = `${window.location.pathname}${urlParams.toString() ? '?' + urlParams.toString() : ''}${window.location.hash}`;
    window.history.replaceState(null, '', newUrl);
  }, [activeTab]);

  return (
    <>
      <Hero
        title="Ressources d'apprentissage"
        subtitle="Une sélection de ressources francophones gratuites et accessibles en ligne pour approfondir vos connaissances sur l'intelligence artificielle."
      />

      <section className="section-container">
        <ResourcesHeader 
          onScrollToResources={scrollToResources}
          onOpenQuiz={() => setShowQuizDialog(true)}
        />
        
        <div id="resources" ref={resourcesRef} className="mt-10 scroll-mt-20">
          <ResourceFilters 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedLevel={selectedLevel}
            setSelectedLevel={setSelectedLevel}
            selectedTopic={selectedTopic}
            setSelectedTopic={setSelectedTopic}
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
            selectedLanguage={selectedLanguage}
            setSelectedLanguage={setSelectedLanguage}
            allTopics={allTopics}
            allYears={allYears}
          />
          
          <UnifiedResourcesTabsSection 
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            filteredResources={filteredResources}
            filteredScientificPublications={filteredScientificPublications}
            filteredIATools={filteredIATools}
          />
        </div>
      </section>

      <ContinueLearningSection 
        onOpenQuiz={() => setShowQuizDialog(true)}
        onOpenAddResourceForm={() => setShowAddResourceForm(true)}
      />

      {/* Section de contrôle qualité déplacée en bas de page */}
      <section className="section-container">
        <QualityControlSection
          auditResults={auditResults}
          qualityScores={qualityScores}
          isAuditing={isAuditing}
          onAuditAll={auditAllResources}
          resources={filteredResources}
        />
      </section>
      
      <AddResourceForm 
        isOpen={showAddResourceForm} 
        onClose={() => setShowAddResourceForm(false)} 
      />

      <QuizDialog
        isOpen={showQuizDialog}
        onClose={() => setShowQuizDialog(false)}
      />
    </>
  );
};

export default Ressources;
