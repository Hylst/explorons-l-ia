
import React from 'react';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Calendar, Clock, Lightbulb, Zap, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

/**
 * Page sur l'histoire de l'intelligence artificielle
 * @returns {JSX.Element} Le composant de la page Histoire
 */
const Histoire = () => {
  const timelineEvents = [
    {
      year: "1943",
      title: "Premiers neurones artificiels",
      description: "McCulloch et Pitts créent le premier modèle mathématique d'un neurone artificiel",
      icon: <Brain className="h-5 w-5" />,
      category: "Fondements"
    },
    {
      year: "1950",
      title: "Test de Turing",
      description: "Alan Turing propose le célèbre test pour évaluer l'intelligence d'une machine",
      icon: <Lightbulb className="h-5 w-5" />,
      category: "Théorie"
    },
    {
      year: "1956",
      title: "Naissance du terme 'IA'",
      description: "Conférence de Dartmouth où le terme 'Intelligence Artificielle' est officiellement créé",
      icon: <Calendar className="h-5 w-5" />,
      category: "Histoire"
    },
    {
      year: "1957",
      title: "Le Perceptron",
      description: "Frank Rosenblatt développe le perceptron, ancêtre des réseaux de neurones modernes",
      icon: <Zap className="h-5 w-5" />,
      category: "Algorithmes"
    },
    {
      year: "1997",
      title: "Deep Blue bat Kasparov",
      description: "L'ordinateur IBM Deep Blue devient le premier à battre un champion du monde d'échecs",
      icon: <Brain className="h-5 w-5" />,
      category: "Percée"
    },
    {
      year: "2012",
      title: "Révolution AlexNet",
      description: "AlexNet révolutionne la vision par ordinateur avec les réseaux de neurones convolutifs",
      icon: <Zap className="h-5 w-5" />,
      category: "Deep Learning"
    },
    {
      year: "2022",
      title: "ChatGPT révolutionne l'IA",
      description: "OpenAI lance ChatGPT, démocratisant l'accès aux IA conversationnelles avancées",
      icon: <Lightbulb className="h-5 w-5" />,
      category: "IA Générative"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Fondements": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      "Théorie": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      "Histoire": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      "Algorithmes": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
      "Percée": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
      "Deep Learning": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
      "IA Générative": "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <>
      <Hero
        title="Histoire de l'Intelligence Artificielle"
        subtitle="Découvrez les moments clés, les pionniers et les révolutions qui ont façonné l'IA moderne, des premiers concepts théoriques aux applications révolutionnaires d'aujourd'hui."
      />

      <section className="section-container">
        <div className="max-w-full mx-auto">
          <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/pics/ia-histoire.jpg" 
              alt="Histoire de l'Intelligence Artificielle" 
              className="w-full h-64 object-cover object-center"
            />
          </div>
          
          <SectionHeading
            pretitle="Chronologie"
            title="Les grandes étapes de l'IA"
            description="Un voyage à travers les décennies qui ont façonné l'intelligence artificielle, des premiers concepts théoriques aux révolutions technologiques actuelles."
            center
          />

          {/* Timeline */}
          <div className="relative">
            {/* Ligne verticale */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20"></div>
            
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div key={event.year} className="flex items-start gap-6 relative">
                  {/* Point sur la timeline */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center border-4 border-background shadow-lg">
                      {event.icon}
                    </div>
                  </div>
                  
                  {/* Contenu */}
                  <Card className="flex-1 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-sm font-bold">
                          {event.year}
                        </Badge>
                        <Badge className={getCategoryColor(event.category)}>
                          {event.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{event.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {event.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>Ères de l'IA</CardTitle>
                <CardDescription>Les grandes périodes de développement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold">1940s-1960s :</span> Fondements théoriques
                  </div>
                  <div>
                    <span className="font-semibold">1970s-1980s :</span> Systèmes experts
                  </div>
                  <div>
                    <span className="font-semibold">1990s-2000s :</span> Machine Learning
                  </div>
                  <div>
                    <span className="font-semibold">2010s-aujourd'hui :</span> Deep Learning et IA générative
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle>Ressources pour approfondir</CardTitle>
                <CardDescription>Explorez les concepts et applications actuelles</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button asChild variant="outline" size="sm" className="w-full justify-start">
                    <Link to="/les-bases">
                      <Brain className="h-4 w-4 mr-2" />
                      Les bases de l'IA
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="w-full justify-start">
                    <Link to="/machine-learning">
                      <Zap className="h-4 w-4 mr-2" />
                      Machine Learning
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="w-full justify-start">
                    <Link to="/ethique">
                      <Lightbulb className="h-4 w-4 mr-2" />
                      Éthique de l'IA
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Histoire;
