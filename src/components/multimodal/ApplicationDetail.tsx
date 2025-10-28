
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { AppExample } from './ApplicationsData';

interface ApplicationDetailProps {
  application: AppExample;
  onBack: () => void;
}

const ApplicationDetail: React.FC<ApplicationDetailProps> = ({ application, onBack }) => {
  const IconComponent = application.iconComponent;

  return (
    <div className="animate-fade-in">
      <Button 
        variant="ghost" 
        onClick={onBack} 
        className="mb-6 flex items-center gap-2"
        aria-label="Retour à la liste des applications"
      >
        <ArrowLeft size={16} />
        <span>Retour aux applications</span>
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-full bg-primary/10">
              <IconComponent size={32} className="text-primary" />
            </div>
            <h2 className="heading-md">{application.title}</h2>
          </div>

          <div className="aspect-[16/9] w-full mb-6 overflow-hidden rounded-lg">
            <img 
              src={application.imagePath} 
              alt={application.title} 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mb-8">
            <h3 className="heading-sm mb-3">Description</h3>
            <p className="text-muted-foreground">{application.description}</p>
            {application.detailedDescription && (
              <div className="mt-4 space-y-3">
                {application.detailedDescription.map((paragraph, i) => (
                  <p key={i} className="text-muted-foreground">{paragraph}</p>
                ))}
              </div>
            )}
          </div>

          <div className="mb-8">
            <h3 className="heading-sm mb-3">Exemples de prompts</h3>
            <div className="grid grid-cols-1 gap-4">
              {application.examples.map((example, i) => (
                <Card key={i} className="overflow-hidden bg-secondary/5 border-primary/10">
                  <CardContent className="p-4">
                    <p className="font-mono text-sm">{example}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h3 className="heading-sm mb-3">Ressources utiles</h3>
            <ul className="space-y-2">
              {application.resources?.map((resource, i) => (
                <li key={i}>
                  <a 
                    href={resource.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-1"
                  >
                    <span>{resource.title}</span>
                    <ExternalLink size={14} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <Card className="sticky top-24">
            <CardContent className="p-6">
              <h3 className="heading-sm mb-4">Outils populaires</h3>
              <div className="space-y-3 mb-6">
                {application.tools.map((tool, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 bg-secondary/20 rounded-md">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span>{tool}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h4 className="font-medium text-sm">Compatibilité</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-1 p-1.5 bg-secondary/10 rounded">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    <span>Web</span>
                  </div>
                  <div className="flex items-center gap-1 p-1.5 bg-secondary/10 rounded">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    <span>Mobile</span>
                  </div>
                  <div className="flex items-center gap-1 p-1.5 bg-secondary/10 rounded">
                    <span className={`w-1.5 h-1.5 rounded-full bg-${application.compatibility?.api ? 'green' : 'yellow'}-500`}></span>
                    <span>API</span>
                  </div>
                  <div className="flex items-center gap-1 p-1.5 bg-secondary/10 rounded">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    <span>Desktop</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetail;
