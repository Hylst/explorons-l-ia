
import React, { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';
import Quiz from '@/components/ethics/Quiz';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Lightbulb, History } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const QuizSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('quiz');

  return (
    <section className="section-container bg-muted/40 rounded-3xl py-16">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          pretitle="Testez vos connaissances"
          title="Quiz interactif sur l'éthique de l'IA"
          description="Mettez à l'épreuve votre compréhension des principes éthiques et des enjeux liés à l'intelligence artificielle."
          center
        />
        
        <Tabs
          defaultValue="quiz"
          className="mt-8"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <div className="flex justify-center mb-6">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="quiz" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span className="hidden sm:inline">Quiz</span>
              </TabsTrigger>
              <TabsTrigger value="ressources" className="flex items-center gap-2">
                <Lightbulb className="h-4 w-4" />
                <span className="hidden sm:inline">Ressources</span>
              </TabsTrigger>
              <TabsTrigger value="historique" className="flex items-center gap-2">
                <History className="h-4 w-4" />
                <span className="hidden sm:inline">Historique</span>
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="quiz" className="mt-4">
            <div className="bg-card rounded-lg shadow-sm">
              <Quiz />
            </div>
          </TabsContent>
          
          <TabsContent value="ressources" className="mt-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">Ressources pour approfondir</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <p>
                      <span className="font-medium">Déclaration de Montréal pour l'IA responsable</span> - 
                      Un cadre éthique qui propose des principes directeurs pour le développement de l'IA.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <p>
                      <span className="font-medium">AI Ethics Guidelines Global Inventory</span> - 
                      Une collection de lignes directrices éthiques pour l'IA du monde entier.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <p>
                      <span className="font-medium">L'AI Act européen</span> - 
                      Premier cadre juridique complet sur l'intelligence artificielle au monde.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <p>
                      <span className="font-medium">Observatoire des impacts de l'IA</span> - 
                      Un organisme qui évalue les conséquences sociales, économiques et éthiques de l'IA.
                    </p>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button variant="outline" onClick={() => setActiveTab('quiz')}>
                    Retourner au quiz
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="historique" className="mt-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">Historique de l'éthique en IA</h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary/30 pl-4 py-1">
                    <p className="text-sm text-muted-foreground">1942</p>
                    <p className="font-medium">Les Trois Lois de la Robotique</p>
                    <p className="text-sm">Isaac Asimov propose dans ses nouvelles les premières règles éthiques pour les robots.</p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-4 py-1">
                    <p className="text-sm text-muted-foreground">1956</p>
                    <p className="font-medium">Conférence de Dartmouth</p>
                    <p className="text-sm">Début officiel de la recherche en IA, avec déjà des questionnements éthiques.</p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-4 py-1">
                    <p className="text-sm text-muted-foreground">2016</p>
                    <p className="font-medium">Création du Partnership on AI</p>
                    <p className="text-sm">Alliance d'entreprises technologiques pour établir des bonnes pratiques en IA.</p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-4 py-1">
                    <p className="text-sm text-muted-foreground">2018</p>
                    <p className="font-medium">Déclaration de Montréal</p>
                    <p className="text-sm">Publication de principes pour une IA responsable et éthique.</p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-4 py-1">
                    <p className="text-sm text-muted-foreground">2021</p>
                    <p className="font-medium">UNESCO - Recommandation sur l'éthique de l'IA</p>
                    <p className="text-sm">Premier instrument normatif mondial sur l'éthique de l'IA.</p>
                  </div>
                  <div className="border-l-2 border-primary/30 pl-4 py-1">
                    <p className="text-sm text-muted-foreground">2023</p>
                    <p className="font-medium">Adoption de l'AI Act européen</p>
                    <p className="text-sm">Premier cadre réglementaire complet sur l'IA au monde.</p>
                  </div>
                </div>
                <div className="mt-6">
                  <Button variant="outline" onClick={() => setActiveTab('quiz')}>
                    Retourner au quiz
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default QuizSection;
