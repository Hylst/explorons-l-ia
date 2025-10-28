
import React, { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Sparkles, PanelTop, Lightbulb, ArrowRightCircle } from 'lucide-react';
import InteractiveWorkflow from '@/components/multimodal/InteractiveWorkflow';
import AICreationShowcase from '@/components/multimodal/AICreationShowcase';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import ApplicationGrid from './ApplicationGrid';
import ExamplePrompts from './ExamplePrompts';
import { multimodalExamples } from './ApplicationsData';
import ApplicationDetail from './ApplicationDetail';

interface ApplicationsSectionProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

const ApplicationsSection: React.FC<ApplicationsSectionProps> = ({ activeTab, setActiveTab }) => {
  const { toast } = useToast();
  const [selectedExample, setSelectedExample] = useState<string | null>(null);
  const [showDetailView, setShowDetailView] = useState(false);

  const handleExampleClick = (id: string, title: string) => {
    setSelectedExample(id);
    setShowDetailView(true);
    toast({
      title: `Exploration de ${title}`,
      description: "Découvrez les exemples d'utilisation et les outils associés.",
      duration: 3000,
    });
  };

  const handleBackToGrid = () => {
    setShowDetailView(false);
  };

  return (
    <section id="applications-creatives" className="section-container">
      <SectionHeading
        pretitle="Applications créatives"
        title="Les IA multimodales en action"
        description="Les IA actuelles peuvent générer et manipuler divers types de médias, ouvrant de nouvelles possibilités créatives dans de nombreux domaines."
        center
      />

      <Tabs defaultValue="applications" className="mt-10 mb-8" onValueChange={setActiveTab}>
        <div className="flex justify-center mb-8">
          <TabsList className="grid grid-cols-3 w-full max-w-xl">
            <TabsTrigger value="applications" className="flex gap-2 items-center">
              <Sparkles size={16} />
              <span>Applications</span>
            </TabsTrigger>
            <TabsTrigger value="fonctionnement" className="flex gap-2 items-center">
              <PanelTop size={16} />
              <span>Fonctionnement</span>
            </TabsTrigger>
            <TabsTrigger value="showcase" className="flex gap-2 items-center">
              <Lightbulb size={16} />
              <span>Exemples</span>
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="applications" className="animate-fade-in">
          {!showDetailView ? (
            <>
              <ApplicationGrid 
                applications={multimodalExamples} 
                onExampleClick={handleExampleClick} 
              />
              
              <ExamplePrompts 
                selectedExample={selectedExample}
                applications={multimodalExamples}
              />
            </>
          ) : (
            <ApplicationDetail 
              application={multimodalExamples.find(app => app.id === selectedExample) || multimodalExamples[0]} 
              onBack={handleBackToGrid}
            />
          )}
        </TabsContent>
        
        <TabsContent value="fonctionnement" className="animate-fade-in space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="glass-card p-6 rounded-xl">
              <h3 className="heading-sm mb-4 flex items-center gap-2">
                <ArrowRightCircle className="text-primary" size={20} />
                Comment fonctionnent les IA multimodales
              </h3>
              <p className="text-muted-foreground mb-4">
                Les IA multimodales sont capables de traiter et générer différents types de médias (texte, image, son, vidéo) 
                en utilisant une architecture neuronale unifiée qui comprend des encodeurs et décodeurs spécialisés pour chaque modalité.
              </p>
              <p className="text-muted-foreground">
                Elles transforment différents types d'entrées en représentations vectorielles (embeddings) partageant 
                un même espace latent, permettant ainsi des conversions et des interactions entre modalités.
              </p>
            </div>

            <InteractiveWorkflow />
          </div>
        </TabsContent>
        
        <TabsContent value="showcase" className="animate-fade-in">
          <AICreationShowcase />
        </TabsContent>
      </Tabs>

      <div className="my-10 flex justify-center">
        <Button asChild size="lg" className="rounded-full animate-pulse">
          <a href="#prompting-efficace" className="flex items-center gap-2">
            <span>Découvrir l'art du prompting</span>
            <ArrowRightCircle size={18} />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ApplicationsSection;
