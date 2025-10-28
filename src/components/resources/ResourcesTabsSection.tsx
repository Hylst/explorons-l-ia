
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResourceCard from './ResourceCard';
import ScientificPublicationCard from './ScientificPublicationCard';
import IAToolCard from './IAToolCard';
import { FileText } from 'lucide-react';
import { Resource } from './resourcesData';

interface ResourcesTabsSectionProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
  filteredResources: Resource[];
  filteredScientificPublications: any[];
  filteredIATools: any[];
}

export const ResourcesTabsSection: React.FC<ResourcesTabsSectionProps> = ({
  activeTab,
  setActiveTab,
  filteredResources,
  filteredScientificPublications,
  filteredIATools
}) => {
  return (
    <Tabs defaultValue="toutes" className="w-full mb-8" onValueChange={setActiveTab} value={activeTab}>
      <TabsList className="w-full max-w-4xl mx-auto grid grid-cols-5 mb-4">
        <TabsTrigger value="toutes" className="whitespace-normal">Toutes</TabsTrigger>
        <TabsTrigger value="cours" className="whitespace-normal">Cours</TabsTrigger>
        <TabsTrigger value="livres" className="whitespace-normal">Livres</TabsTrigger>
        <TabsTrigger value="science" className="whitespace-normal">Publications</TabsTrigger>
        <TabsTrigger value="outils" className="whitespace-normal">Outils</TabsTrigger>
      </TabsList>
      
      <TabsContent value="toutes" className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.length > 0 ? (
            filteredResources.map((resource, index) => (
              <ResourceCard 
                key={index} 
                title={resource.title}
                source={resource.source}
                description={resource.description}
                link={resource.link}
                type={resource.type}
                year={resource.year}
                tags={resource.tags}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <FileText className="mx-auto h-12 w-12 text-muted-foreground/50" />
              <h3 className="mt-4 text-lg font-medium">Aucune ressource trouvée</h3>
              <p className="text-muted-foreground">Essayez de modifier vos critères de recherche</p>
            </div>
          )}
        </div>
      </TabsContent>
      
      <TabsContent value="cours" className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources
            .filter(resource => resource.type === "cours")
            .length > 0 ? (
            filteredResources
              .filter(resource => resource.type === "cours")
              .map((resource, index) => (
                <ResourceCard 
                  key={index} 
                  title={resource.title}
                  source={resource.source}
                  description={resource.description}
                  link={resource.link}
                  type={resource.type}
                  year={resource.year}
                  tags={resource.tags}
                />
              ))
          ) : (
            <div className="col-span-full text-center py-10">
              <FileText className="mx-auto h-12 w-12 text-muted-foreground/50" />
              <h3 className="mt-4 text-lg font-medium">Aucune ressource trouvée</h3>
              <p className="text-muted-foreground">Essayez de modifier vos critères de recherche</p>
            </div>
          )}
        </div>
      </TabsContent>
      
      <TabsContent value="livres" className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources
            .filter(resource => resource.type === "livre")
            .length > 0 ? (
            filteredResources
              .filter(resource => resource.type === "livre")
              .map((resource, index) => (
                <ResourceCard 
                  key={index} 
                  title={resource.title}
                  source={resource.source}
                  description={resource.description}
                  link={resource.link}
                  type={resource.type}
                  year={resource.year}
                  tags={resource.tags}
                />
              ))
          ) : (
            <div className="col-span-full text-center py-10">
              <FileText className="mx-auto h-12 w-12 text-muted-foreground/50" />
              <h3 className="mt-4 text-lg font-medium">Aucune ressource trouvée</h3>
              <p className="text-muted-foreground">Essayez de modifier vos critères de recherche</p>
            </div>
          )}
        </div>
      </TabsContent>
      
      <TabsContent value="science" className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredScientificPublications.length > 0 ? (
            filteredScientificPublications.map((pub, index) => (
              <ScientificPublicationCard key={index} publication={pub} />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <FileText className="mx-auto h-12 w-12 text-muted-foreground/50" />
              <h3 className="mt-4 text-lg font-medium">Aucune publication trouvée</h3>
              <p className="text-muted-foreground">Essayez de modifier vos critères de recherche</p>
            </div>
          )}
        </div>
      </TabsContent>
      
      <TabsContent value="outils" className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIATools.length > 0 ? (
            filteredIATools.map((tool, index) => (
              <IAToolCard key={index} tool={tool} />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <FileText className="mx-auto h-12 w-12 text-muted-foreground/50" />
              <h3 className="mt-4 text-lg font-medium">Aucun outil trouvé</h3>
              <p className="text-muted-foreground">Essayez de modifier vos critères de recherche</p>
            </div>
          )}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default ResourcesTabsSection;
