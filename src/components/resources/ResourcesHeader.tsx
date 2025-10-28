
import React from 'react';
import { Info } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import SectionHeading from '@/components/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, BookCheck } from 'lucide-react';

interface ResourcesHeaderProps {
  onScrollToResources: () => void;
  onOpenQuiz: () => void;
}

export const ResourcesHeader: React.FC<ResourcesHeaderProps> = ({ 
  onScrollToResources, 
  onOpenQuiz 
}) => {
  return (
    <>
      <Alert className="mb-8 bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800">
        <Info className="h-5 w-5 text-amber-600 dark:text-amber-400" />
        <AlertTitle>Avril 2025 - Site en construction</AlertTitle>
        <AlertDescription className="text-muted-foreground">
          Cette section est en cours de développement. Certaines ressources présentées sont fictives ou servent d'exemples 
          et seront complétées prochainement. Les liens réels sont pleinement fonctionnels et mènent à du contenu de qualité.
        </AlertDescription>
      </Alert>

      <SectionHeading
        pretitle="Bibliothèque"
        title="Ressources Pédagogiques"
        description="Explorez notre collection de ressources en français et gratuites: articles, vidéos, cours et livres soigneusement sélectionnés pour enrichir votre compréhension de l'IA."
        center
      />
      
      <Card className="mb-8 border border-dashed">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="bg-primary/10 p-3 rounded-full">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium mb-1">Contenu en français et accessible</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Notre sélection privilégie les ressources gratuites, accessibles en ligne et en français.
                Utilisez les filtres pour trouver facilement les ressources qui vous intéressent en fonction de votre niveau ou du type de contenu recherché.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button 
                variant="outline" 
                onClick={onScrollToResources}
                className="whitespace-nowrap"
              >
                Voir les ressources
              </Button>
              <Button 
                onClick={onOpenQuiz}
                className="whitespace-nowrap gap-2"
              >
                <BookCheck className="h-4 w-4" />
                Quiz IA
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ResourcesHeader;
