import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import { ChevronRight, BookOpen, Lightbulb, Sparkles, BarChart3, Brain, Code, Zap, TrendingUp, Users, Shield, Rocket, Globe, Star, GraduationCap, Target, Palette, Clock, Cpu, Database, Calculator, Microscope, FlaskConical, FileText, Settings, Smartphone, Monitor } from "lucide-react";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";
import { getSEOData } from "@/data/seoData";

/**
 * Page d'accueil du site AI Avenir
 * @returns {JSX.Element} Le composant de la page d'accueil
 */
const Index = () => {
  // SEO dynamique
  useDocumentMeta(getSEOData('/'));

  const keyFeatures = [
    {
      icon: <Brain className="w-12 h-12 text-primary" />,
      title: "Niveaux d'IA",
      description: "Découvrez les 7 niveaux d'intelligence artificielle, de l'IA réactive aux systèmes conscients.",
      link: "/niveaux-ia",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-primary" />,
      title: "Types d'IA",
      description: "Explorez les différentes technologies d'IA comme les LLM, RAG, CNN, NLP et plus encore.",
      link: "/types-ia",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-primary" />,
      title: "Machine Learning",
      description: "Comprenez les principes fondamentaux du machine learning et ses différentes approches.",
      link: "/machine-learning",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: <Sparkles className="w-12 h-12 text-primary" />,
      title: "Cas d'usage",
      description: "Découvrez comment l'IA révolutionne différents domaines comme la génération de code, la musique, et plus.",
      link: "/cas-usage",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      icon: <BookOpen className="w-12 h-12 text-primary" />,
      title: "Éthique",
      description: "Explorez les questions éthiques liées au développement et à l'utilisation de l'IA.",
      link: "/ethique",
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      icon: <Code className="w-12 h-12 text-primary" />,
      title: "Coder avec l'IA",
      description: "Apprenez à utiliser l'IA pour améliorer votre productivité en développement.",
      link: "/coder-avec-ia",
      gradient: "from-cyan-500 to-blue-600"
    },
    // Nouvelles cards pour les cours internes
    {
      icon: <GraduationCap className="w-12 h-12 text-primary" />,
      title: "Prompt Engineering",
      description: "Maîtrisez l'art de la communication avec l'IA. Guide complet pour optimiser vos interactions.",
      link: "/cours/prompt-engineering",
      gradient: "from-violet-500 to-purple-600"
    },
    {
      icon: <Palette className="w-12 h-12 text-primary" />,
      title: "IA et Créativité",
      description: "Révolutionnez votre processus créatif avec les outils d'IA générative.",
      link: "/cours/ia-creativite",
      gradient: "from-rose-500 to-pink-600"
    },
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: "IA pour l'Entreprise",
      description: "Stratégie et implémentation de l'IA en entreprise. De l'analyse au déploiement.",
      link: "/cours/ia-entreprise",
      gradient: "from-emerald-500 to-green-600"
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "IA Éthique",
      description: "Développez et utilisez l'IA de manière responsable et éthique.",
      link: "/cours/ia-ethique",
      gradient: "from-slate-500 to-gray-600"
    },
    {
      icon: <Brain className="w-12 h-12 text-primary" />,
      title: "NLP et LLM",
      description: "Comprenez le traitement du langage naturel et les grands modèles de langage.",
      link: "/cours/nlp-comprehension",
      gradient: "from-teal-500 to-cyan-600"
    },
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: "Deep Learning Pratique",
      description: "De la théorie à l'application : construisez vos premiers modèles de deep learning.",
      link: "/cours/deep-learning-pratique",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  // Nouvelles cards pour les pages spécialisées non accessibles depuis le menu
  const specializedPages = [
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: "Histoire de l'IA",
      description: "Explorez l'évolution fascinante de l'intelligence artificielle depuis ses origines.",
      link: "/histoire-ia",
      gradient: "from-amber-500 to-yellow-600"
    },
    {
      icon: <Cpu className="w-12 h-12 text-primary" />,
      title: "IA Multimodale",
      description: "Découvrez les modèles qui combinent texte, image, audio et vidéo pour des expériences immersives.",
      link: "/ia-multimodale",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      icon: <Database className="w-12 h-12 text-primary" />,
      title: "Concepts NLP",
      description: "Approfondissez votre compréhension du traitement du langage naturel et de ses applications.",
      link: "/nlp-concepts",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: <Calculator className="w-12 h-12 text-primary" />,
      title: "Calculateur Coûts IA",
      description: "Estimez les coûts d'implémentation et d'utilisation des solutions d'IA pour vos projets.",
      link: "/calculateur-couts-ia",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: <Microscope className="w-12 h-12 text-primary" />,
      title: "Simulateur IA",
      description: "Expérimentez avec différents modèles d'IA dans un environnement de simulation interactive.",
      link: "/simulateur-ia",
      gradient: "from-red-500 to-pink-600"
    },
    {
      icon: <FlaskConical className="w-12 h-12 text-primary" />,
      title: "Premier Modèle ML",
      description: "Guide pas à pas pour créer et entraîner votre premier modèle de machine learning.",
      link: "/premier-modele-ml",
      gradient: "from-violet-500 to-purple-600"
    },
    {
      icon: <FileText className="w-12 h-12 text-primary" />,
      title: "Utiliser l'IA au Travail",
      description: "Stratégies pratiques pour intégrer l'IA dans votre environnement professionnel quotidien.",
      link: "/utiliser-ia-travail",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: <Settings className="w-12 h-12 text-primary" />,
      title: "Organiser Services IA",
      description: "Architecture et organisation des services d'IA en entreprise pour une efficacité optimale.",
      link: "/organiser-services-ia",
      gradient: "from-slate-500 to-gray-600"
    },
    {
      icon: <Smartphone className="w-12 h-12 text-primary" />,
      title: "IA au Quotidien",
      description: "Découvrez comment l'IA transforme déjà votre vie quotidienne et comment en tirer parti.",
      link: "/utiliser-ia-quotidien",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      icon: <Monitor className="w-12 h-12 text-primary" />,
      title: "IA Expliquée aux Enfants",
      description: "Ressources pédagogiques pour faire découvrir l'IA aux plus jeunes de manière ludique.",
      link: "/ia-expliquee-aux-enfants",
      gradient: "from-yellow-500 to-orange-600"
    }
  ];

  const stats = [
    { number: "50+", label: "Concepts expliqués", icon: <Brain className="w-6 h-6" /> },
    { number: "100+", label: "Ressources validées", icon: <BookOpen className="w-6 h-6" /> },
    { number: "25+", label: "Cas d'usage concrets", icon: <Sparkles className="w-6 h-6" /> },
    { number: "10+", label: "Outils interactifs", icon: <Zap className="w-6 h-6" /> }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      title: "Restez à la pointe",
      description: "Suivez les dernières évolutions de l'IA avec nos contenus mis à jour régulièrement"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Communauté active",
      description: "Rejoignez une communauté passionnée d'apprenants et d'experts en IA"
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Approche éthique",
      description: "Comprenez les enjeux éthiques pour un développement responsable de l'IA"
    },
    {
      icon: <Rocket className="w-8 h-8 text-orange-600" />,
      title: "Carrière boostée",
      description: "Développez les compétences IA les plus recherchées sur le marché"
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero section with enhanced visuals */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-background via-primary/5 to-secondary/20 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="container px-4 mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary animate-fade-in">
                <Star className="w-4 h-4" />
                Plateforme #1 pour apprendre l'IA
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold !leading-tight animate-slide-up">
                Maîtrisez l'IA 
                <span className="block bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  du concept à la pratique
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground animate-slide-up leading-relaxed" style={{ animationDelay: '100ms' }}>
                Explorez le monde fascinant de l'intelligence artificielle à travers nos ressources pédagogiques 
                interactives, nos outils pratiques et notre communauté d'experts.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
                <Button asChild size="lg" className="group relative overflow-hidden">
                  <Link to="/niveaux-ia" className="flex items-center gap-2">
                    <span className="relative z-10">Commencer l'exploration</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <Link to="/ressources" className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    Parcourir les ressources
                  </Link>
                </Button>
              </div>

              {/* Stats section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 animate-fade-in" style={{ animationDelay: '300ms' }}>
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group cursor-pointer">
                    <div className="flex items-center justify-center mb-2 text-primary group-hover:scale-110 transition-transform">
                      {stat.icon}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative h-64 md:h-96 rounded-2xl bg-gradient-to-tr from-primary/20 to-purple-600/20 p-1 animate-fade-in group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1677442135072-d406c3ce761a')] bg-cover bg-center rounded-2xl opacity-70 mix-blend-overlay group-hover:opacity-90 transition-opacity"></div>
              <div className="relative h-full w-full rounded-xl border border-primary/20 backdrop-blur-sm flex items-center justify-center p-6 group-hover:border-primary/40 transition-colors">
                <div className="text-center">
                  <Globe className="w-12 h-12 mx-auto mb-4 text-primary animate-spin-slow" />
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">L'avenir est IA</h3>
                  <p className="text-muted-foreground">Préparez-vous aux technologies qui transforment notre monde</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <section className="py-20 bg-background/50 backdrop-blur-sm">
        <div className="container px-4 mx-auto max-w-6xl">
          <SectionHeading 
            pretitle="Pourquoi nous choisir"
            title="Votre réussite, notre mission"
            description="Découvrez les avantages uniques de notre plateforme d'apprentissage de l'IA"
            center={true}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="relative group bg-card/50 backdrop-blur-sm rounded-xl border p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced key topics section */}
      <section className="py-20 bg-background">
        <div className="container px-4 mx-auto max-w-6xl">
          <SectionHeading 
            pretitle="Explorez nos thématiques"
            title="Une approche complète de l'IA"
            description="Parcourez nos sections thématiques pour comprendre tous les aspects de l'intelligence artificielle, des fondamentaux techniques aux considérations éthiques."
            center={true}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {keyFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="relative group bg-card rounded-xl border p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Animated border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-xl transition-colors duration-500"></div>
                
                <div className="relative z-10">
                  <div className="mb-4 transform group-hover:scale-125 group-hover:rotate-6 transition-all duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <Button variant="link" className="p-0 group-hover:gap-2 transition-all duration-300" asChild>
                    <Link to={feature.link} className="flex items-center gap-1">
                      En savoir plus 
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
                
                {/* Floating particles effect */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-secondary/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{ animationDelay: '0.5s' }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nouvelle section pour les pages spécialisées */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container px-4 mx-auto max-w-6xl">
          <SectionHeading 
            pretitle="Explorez plus en profondeur"
            title="Ressources spécialisées et outils avancés"
            description="Découvrez nos pages dédiées aux aspects spécialisés de l'IA, outils pratiques et guides approfondis pour aller plus loin."
            center={true}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {specializedPages.map((page, index) => (
              <div 
                key={index} 
                className="relative group bg-card rounded-xl border p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${page.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Animated border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-xl transition-colors duration-500"></div>
                
                <div className="relative z-10">
                  <div className="mb-4 transform group-hover:scale-125 group-hover:rotate-6 transition-all duration-500">
                    {page.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{page.title}</h3>
                  <p className="text-muted-foreground mb-4">{page.description}</p>
                  <Button variant="link" className="p-0 group-hover:gap-2 transition-all duration-300" asChild>
                    <Link to={page.link} className="flex items-center gap-1">
                      Découvrir 
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
                
                {/* Floating particles effect */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-secondary/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{ animationDelay: '0.5s' }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-purple-500/5 to-pink-500/10 border-y relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        <div className="container px-4 mx-auto max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-sm font-medium text-primary mb-6 animate-fade-in">
            <Rocket className="w-4 h-4" />
            Rejoignez plus de 10,000 apprenants
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Prêt à maîtriser l'IA ?
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: '100ms' }}>
            Commencez votre voyage à travers les différents niveaux et types d'intelligence artificielle. 
            Découvrez comment cette technologie révolutionne notre monde et comment vous pouvez en faire partie.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: '200ms' }}>
            <Button size="lg" asChild className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Link to="/niveaux-ia" className="flex items-center gap-2">
                <span className="relative z-10">Commencer maintenant</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-2 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" asChild className="group hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-primary/50">
              <Link to="/cas-usage" className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                Voir les applications
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
