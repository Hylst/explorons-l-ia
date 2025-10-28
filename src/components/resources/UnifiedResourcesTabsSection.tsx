
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ResourceCard from './ResourceCard';
import { ScientificPublicationCard } from './ScientificPublicationCard';
import { IAToolCard } from './IAToolCard';
import { Resource, ScientificPublication, IAToolResource } from './resourcesData';
import { useResourceAudit } from '@/hooks/useResourceAudit';

interface UnifiedResourcesTabsSectionProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  filteredResources: Resource[];
  filteredScientificPublications: ScientificPublication[];
  filteredIATools: IAToolResource[];
}

const UnifiedResourcesTabsSection: React.FC<UnifiedResourcesTabsSectionProps> = ({
  activeTab,
  setActiveTab,
  filteredResources,
  filteredScientificPublications,
  filteredIATools
}) => {
  const {
    auditResults,
    qualityScores,
    isAuditing,
    auditAllResources,
    auditResource
  } = useResourceAudit(filteredResources);

  // Calculs pour les compteurs d'onglets
  const coursesCount = filteredResources.filter(r => r.type === 'cours').length;
  const videosCount = filteredResources.filter(r => r.type === 'vidéo').length;

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="toutes">Toutes ({filteredResources.length})</TabsTrigger>
          <TabsTrigger value="cours">Cours ({coursesCount})</TabsTrigger>
          <TabsTrigger value="publications">Publications ({filteredScientificPublications.length})</TabsTrigger>
          <TabsTrigger value="outils">Outils IA ({filteredIATools.length})</TabsTrigger>
          <TabsTrigger value="videos">Vidéos ({videosCount})</TabsTrigger>
        </TabsList>

        <TabsContent value="toutes" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => (
              <ResourceCard
                key={`${resource.link}-${index}`}
                title={resource.title}
                source={resource.source}
                description={resource.description}
                link={resource.link}
                type={resource.type}
                year={resource.year}
                tags={resource.tags}
                isInternal={resource.isInternal}
                videoId={resource.videoId}
                auditResult={auditResults.get(resource.link)}
                qualityScore={qualityScores.get(resource.link)}
                onAuditRequest={() => auditResource(resource)}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="cours" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources
              .filter(resource => resource.type === 'cours')
              .map((resource, index) => (
                <ResourceCard
                  key={`${resource.link}-${index}`}
                  title={resource.title}
                  source={resource.source}
                  description={resource.description}
                  link={resource.link}
                  type={resource.type}
                  year={resource.year}
                  tags={resource.tags}
                  isInternal={resource.isInternal}
                  videoId={resource.videoId}
                  auditResult={auditResults.get(resource.link)}
                  qualityScore={qualityScores.get(resource.link)}
                  onAuditRequest={() => auditResource(resource)}
                />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="publications" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredScientificPublications.map((publication, index) => (
              <ScientificPublicationCard
                key={`${publication.link}-${index}`}
                publication={publication}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="outils" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIATools.map((tool, index) => (
              <IAToolCard
                key={`${tool.link}-${index}`}
                tool={tool}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="videos" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources
              .filter(resource => resource.type === 'vidéo')
              .map((resource, index) => (
                <ResourceCard
                  key={`${resource.link}-${index}`}
                  title={resource.title}
                  source={resource.source}
                  description={resource.description}
                  link={resource.link}
                  type={resource.type}
                  year={resource.year}
                  tags={resource.tags}
                  isInternal={resource.isInternal}
                  videoId={resource.videoId}
                  auditResult={auditResults.get(resource.link)}
                  qualityScore={qualityScores.get(resource.link)}
                  onAuditRequest={() => auditResource(resource)}
                />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UnifiedResourcesTabsSection;
