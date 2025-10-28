
import React from 'react';
import Hero from '@/components/Hero';
import AIMemoryTypes from '@/components/memory/AIMemoryTypes';
import ConceptsFoundamentaux from '@/components/basics/ConceptsFoundamentaux';
import AnalogiePedagogique from '@/components/basics/AnalogiePedagogique';
import CapacitesIA from '@/components/basics/CapacitesIA';
import ExemplesPratiques from '@/components/basics/ExemplesPratiques';
import PointsCles from '@/components/basics/PointsCles';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Brain, Users } from 'lucide-react';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { getSEOData } from '@/data/seoData';
import { createArticleSchema } from '@/components/seo/StructuredData';

const LesBases = () => {
  // SEO dynamique avec données structurées pour article
  useDocumentMeta({
    ...getSEOData('/les-bases'),
    structuredData: createArticleSchema(
      "Les Bases de l'Intelligence Artificielle",
      "Guide complet pour comprendre les concepts fondamentaux de l'IA, expliqués simplement avec des analogies et exemples pratiques."
    )
  });

  return (
    <>
      <Hero
        title="Les bases de l'IA"
        subtitle="Découvrez les concepts fondamentaux de l'intelligence artificielle expliqués simplement et de manière accessible à tous."
      />

      <section className="section-container">
        <div className="max-w-full mx-auto space-y-12">
          
          {/* Texte d'introduction */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Brain className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-100">
                      Bienvenue dans l'univers de l'Intelligence Artificielle
                    </h2>
                    <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-3">
                      <p>
                        L'intelligence artificielle peut sembler complexe et intimidante, mais elle repose sur des principes 
                        que nous pouvons tous comprendre. <strong>Imaginez un système capable d'apprendre</strong>, tout comme 
                        un enfant qui découvre le monde en observant, en expérimentant et en s'améliorant.
                      </p>
                      <p>
                        Dans cette section, nous démystifions l'IA en utilisant des <strong>analogies simples</strong>, 
                        des <strong>exemples concrets</strong> et des <strong>démonstrations interactives</strong>. 
                        Que vous soyez débutant ou simplement curieux, vous découvrirez comment l'IA fonctionne, 
                        ce qu'elle peut faire aujourd'hui, et pourquoi elle transforme notre quotidien.
                      </p>
                      <div className="flex items-center gap-6 pt-2">
                        <div className="flex items-center gap-2 text-sm">
                          <Lightbulb className="h-4 w-4 text-yellow-500" />
                          <span>Concepts expliqués simplement</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="h-4 w-4 text-green-500" />
                          <span>Accessible à tous</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Concepts fondamentaux */}
          <ConceptsFoundamentaux />

          {/* Analogie pédagogique */}
          <AnalogiePedagogique />

          {/* Capacités de l'IA */}
          <CapacitesIA />

          {/* Exemples pratiques */}
          <ExemplesPratiques />

          {/* Section Mémoire dans les systèmes d'IA */}
          <AIMemoryTypes />

          {/* Points clés à retenir */}
          <PointsCles />

        </div>
      </section>
    </>
  );
};

export default LesBases;
