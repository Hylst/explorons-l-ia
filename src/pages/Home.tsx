
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import InteractiveFeatureCard from '@/components/home/InteractiveFeatureCard';
import StatsSection from '@/components/home/StatsSection';
import InnovationShowcase from '@/components/home/InnovationShowcase';
import LearningPathway from '@/components/home/LearningPathway';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Sparkles, 
  BrainCircuit, 
  GraduationCap, 
  Code, 
  FileSearch2, 
  Lightbulb,
  Brain,
  BarChart3,
  Palette,
  Target,
  Zap,
  BookOpen,
  ChevronRight,
  Star,
  Rocket
} from 'lucide-react';

const Home = () => {
  const mainFeatures = [
    {
      title: "Les Bases de l'IA",
      description: "Découvrez les concepts fondamentaux expliqués simplement avec des analogies et exemples pratiques.",
      icon: <Brain className="w-12 h-12 text-primary" />,
      link: "/les-bases",
      gradient: "from-blue-500 to-purple-600",
      features: [
        "Concepts expliqués simplement",
        "Analogies pédagogiques",
        "Exemples interactifs",
        "Schémas visuels"
      ]
    },
    {
      title: "Types d'IA",
      description: "Explorez les différentes technologies d'IA : LLM, CNN, NLP, RAG et leurs applications.",
      icon: <Lightbulb className="w-12 h-12 text-primary" />,
      link: "/types-ia",
      gradient: "from-amber-500 to-orange-600",
      features: [
        "Classification complète",
        "Technologies actuelles",
        "Comparaisons détaillées",
        "Tendances émergentes"
      ]
    },
    {
      title: "Machine Learning",
      description: "Maîtrisez les algorithmes d'apprentissage automatique avec des visualisations interactives.",
      icon: <BarChart3 className="w-12 h-12 text-primary" />,
      link: "/machine-learning",
      gradient: "from-green-500 to-teal-600",
      features: [
        "Algorithmes expliqués",
        "Visualisations interactives",
        "Exemples pratiques",
        "Applications concrètes"
      ]
    },
    {
      title: "IA Créative",
      description: "Découvrez comment l'IA révolutionne la création artistique, musicale et littéraire.",
      icon: <Palette className="w-12 h-12 text-primary" />,
      link: "/ia-multimodale",
      gradient: "from-pink-500 to-rose-600",
      features: [
        "Génération d'images",
        "Création musicale",
        "Écriture assistée",
        "Outils créatifs"
      ]
    },
    {
      title: "Cas d'Usage",
      description: "Explorez les applications concrètes de l'IA dans différents secteurs d'activité.",
      icon: <Target className="w-12 h-12 text-primary" />,
      link: "/cas-usage",
      gradient: "from-indigo-500 to-blue-600",
      features: [
        "Secteurs d'application",
        "Exemples réels",
        "ROI et impacts",
        "Études de cas"
      ]
    },
    {
      title: "Cours Interactifs",
      description: "Suivez nos cours spécialisés avec simulations et exercices pratiques.",
      icon: <GraduationCap className="w-12 h-12 text-primary" />,
      link: "/cours/apprentissage-supervise",
      gradient: "from-violet-500 to-purple-600",
      features: [
        "Apprentissage supervisé",
        "Prompt Engineering",
        "Deep Learning pratique",
        "Projets guidés"
      ]
    }
  ];

  const quickStartOptions = [
    {
      title: "Nouveau en IA ?",
      description: "Commencez par comprendre les bases",
      icon: <Sparkles className="h-6 w-6" />,
      link: "/les-bases",
      variant: "default" as const
    },
    {
      title: "Développeur ?",
      description: "Explorez les applications pratiques",
      icon: <Code className="h-6 w-6" />,
      link: "/cas-usage",
      variant: "outline" as const
    },
    {
      title: "Étudiant ?",
      description: "Suivez nos cours structurés",
      icon: <BookOpen className="h-6 w-6" />,
      link: "/cours/apprentissage-supervise",
      variant: "secondary" as const
    }
  ];

  return (
    <>
      <Hero
        title="Maîtrisez l'Intelligence Artificielle"
        subtitle="Explorez, apprenez et maîtrisez l'IA à travers nos ressources pédagogiques interactives, nos cours pratiques et notre communauté d'experts."
      />

      {/* Quick Start Section */}
      <section className="section-container bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
            <Star className="w-4 h-4" />
            Commencez votre apprentissage
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Quel est votre profil ?
          </h2>
          <p className="text-muted-foreground mb-8">
            Choisissez votre point d'entrée idéal selon votre niveau et vos objectifs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {quickStartOptions.map((option, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  {option.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{option.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{option.description}</p>
                <Button asChild variant={option.variant} size="sm" className="w-full">
                  <Link to={option.link} className="flex items-center justify-center gap-2">
                    Commencer
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Main Features Section */}
      <section className="section-container">
        <SectionHeading 
          pretitle="Explorez nos contenus"
          title="Une approche complète de l'IA"
          description="Découvrez tous les aspects de l'intelligence artificielle à travers nos sections thématiques interactives et nos ressources pédagogiques."
          center
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {mainFeatures.map((feature, index) => (
            <InteractiveFeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              link={feature.link}
              gradient={feature.gradient}
              features={feature.features}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Innovation Showcase */}
      <InnovationShowcase />

      {/* Learning Pathway */}
      <LearningPathway />

      {/* Why Choose Us Section */}
      <section className="section-container bg-gradient-to-br from-muted/30 to-background">
        <SectionHeading 
          title="Pourquoi choisir Explorons l'IA ?"
          description="Découvrez les avantages uniques de notre plateforme d'apprentissage"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <Card className="hover:shadow-md transition-shadow group">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <Sparkles className="h-10 w-10 mb-4 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">Approche Pédagogique</h3>
              <p className="text-sm text-muted-foreground">
                Contenus structurés avec analogies, visualisations et exemples concrets pour faciliter l'apprentissage.
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow group">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <BrainCircuit className="h-10 w-10 mb-4 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">Contenu Actualisé</h3>
              <p className="text-sm text-muted-foreground">
                Ressources constamment mises à jour pour refléter les dernières avancées en IA.
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-shadow group">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <GraduationCap className="h-10 w-10 mb-4 text-primary group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">Parcours Progressif</h3>
              <p className="text-sm text-muted-foreground">
                Apprentissage guidé du niveau débutant à expert avec des jalons clairs.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-container bg-gradient-to-br from-primary/10 via-purple-500/5 to-pink-500/10 border-y relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-sm font-medium text-primary mb-6">
            <Rocket className="w-4 h-4" />
            Rejoignez plus de 10,000 apprenants
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
            L'avenir appartient à ceux qui maîtrisent l'IA
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Ne restez pas spectateur de la révolution technologique. Commencez dès aujourd'hui votre parcours 
            d'apprentissage et développez les compétences qui définiront demain.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Link to="/les-bases" className="flex items-center gap-2">
                <span className="relative z-10">Commencer l'aventure</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" asChild className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Link to="/ressources" className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                Explorer les ressources
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
