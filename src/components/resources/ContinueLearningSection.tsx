
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, Lightbulb, BookMarked, BookCheck, Mail } from 'lucide-react';

interface ContinueLearningProps {
  onOpenQuiz: () => void;
  onOpenAddResourceForm: () => void;
}

export const ContinueLearningSection: React.FC<ContinueLearningProps> = ({
  onOpenQuiz,
  onOpenAddResourceForm
}) => {
  return (
    <section className="section-container bg-muted/30 rounded-3xl py-12">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-primary/10 p-4">
            <BookOpen className="h-8 w-8 text-primary" />
          </div>
        </div>
        <h2 className="heading-lg mb-3">Poursuivre l'apprentissage</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Pour approfondir votre compréhension de l'IA, consultez également notre glossaire des termes techniques et explorez l'histoire des technologies d'intelligence artificielle.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
          <div className="bg-card rounded-xl p-6 shadow-sm border">
            <Lightbulb className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Histoire de l'IA</h3>
            <p className="text-muted-foreground mb-4">Découvrez les moments clés de l'évolution de l'intelligence artificielle à travers notre timeline interactive.</p>
            <Button asChild variant="outline" className="w-full">
              <Link to="/histoire-ia">Explorer la chronologie</Link>
            </Button>
          </div>
          
          <div className="bg-card rounded-xl p-6 shadow-sm border">
            <BookMarked className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Glossaire technique</h3>
            <p className="text-muted-foreground mb-4">Consultez notre glossaire complet des termes techniques liés à l'intelligence artificielle.</p>
            <Button asChild variant="outline" className="w-full">
              <Link to="/glossaire">Consulter le glossaire</Link>
            </Button>
          </div>
        </div>

        <div className="bg-card rounded-xl p-6 shadow-sm border max-w-2xl mx-auto">
          <BookCheck className="h-10 w-10 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Testez vos connaissances</h3>
          <p className="text-muted-foreground mb-4">Mettez à l'épreuve vos connaissances sur l'intelligence artificielle avec notre quiz interactif.</p>
          <Button 
            onClick={onOpenQuiz}
            className="w-full"
          >
            Lancer le quiz
          </Button>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col items-center text-sm text-muted-foreground">
          <div className="flex items-center">
            <Mail className="h-4 w-4 mr-2" />
            <span>Pour suggérer une ressource : </span>
            <a href="mailto:geoffroy.streit@gmail.com" className="ml-1 text-primary hover:underline">
              geoffroy.streit@gmail.com
            </a>
          </div>
          <p className="mt-2 text-xs text-muted-foreground/70">
            Les ressources sont régulièrement mises à jour. Dernière mise à jour: {new Date().toLocaleDateString('fr-FR')}
          </p>
        </div>
        
        <div className="mt-8">
          <Button 
            onClick={onOpenAddResourceForm}
            variant="outline"
            className="gap-2"
          >
            <BookCheck className="h-4 w-4" />
            Proposer une ressource
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContinueLearningSection;
