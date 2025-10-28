
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from '@/components/ui/badge';
import { Mail, Github, Linkedin, Heart, Code, BookOpen, Users, MessageSquare, Lightbulb, Target, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import NeuralNetworkInteractive from '@/components/ml/visualization/NeuralNetworkInteractive';

const About = () => {
  const author = {
    name: "Geoffroy Streit",
    role: "Créateur & Développeur",
    bio: "Passionné d'IA et d'éducation numérique, adepte de technologies innovantes. Ancien ingénieur optronique et commercial en reconversion IT, en veille, expérimentation, et autoformation sur les technologies IA tout en demeurant en recherche de sens et d'humanité. À travers Explorons l'IA, il souhaite partager sa passion et ses connaissances au plus grand nombre dans un esprit d'accessibilité et de vulgarisation responsable.",
    avatar: "https://media.licdn.com/dms/image/v2/D4E35AQH9f-ZzX_KpKA/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1676036508605?e=1748595600&v=beta&t=lHIMXq0q3OKW90k25IiFsFLgm80CA4Bz0Lh5_be8Er8",
    initials: "GS",
    links: {
      email: "geoffroy.streit@gmail.com",
      github: "https://github.com/gstreit",
      linkedin: "https://linkedin.com/in/gstreit"
    }
  };

  return (
    <>
      <Hero
        title="À propos d'Explorons l'IA"
        subtitle="Découvrez la mission derrière Explorons l'IA et comment ce projet contribue à rendre l'intelligence artificielle plus accessible et compréhensible pour tous."
      />

      <section className="py-8 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="h-[300px] relative mb-12 rounded-xl overflow-hidden border border-primary/20 shadow-lg">
            <NeuralNetworkInteractive />
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            pretitle="La mission"
            title="Démystifier l'intelligence artificielle pour tous"
            description="Explorons l'IA a été créé avec un objectif clair : rendre l'IA accessible et compréhensible pour le grand public francophone, tout en encourageant une approche réfléchie et éthique de ces technologies."
            center
          />

          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-primary/5 to-blue-50 dark:to-blue-950/20 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">Une approche pédagogique et responsable</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">🎯 Vision éducative</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Transformer la complexité de l'IA en connaissances accessibles, en proposant des explications claires, 
                    des visualisations interactives et des exemples concrets qui permettent à chacun de comprendre 
                    les enjeux et opportunités de l'intelligence artificielle.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">🌍 Impact social</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Contribuer à une société mieux informée sur l'IA, capable de prendre des décisions éclairées 
                    sur l'adoption et l'usage de ces technologies. Promouvoir une IA au service de l'humanité 
                    plutôt qu'une technologie subie.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">🔬 Rigueur scientifique</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Maintenir un haut niveau de précision technique tout en gardant le contenu accessible. 
                    Chaque concept est expliqué avec ses nuances, ses limites et ses applications pratiques, 
                    loin du sensationnalisme médiatique.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">⚖️ Éthique et transparence</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Aborder les questions éthiques, les biais potentiels et les enjeux sociétaux de l'IA. 
                    Encourager une réflexion critique sur l'impact de ces technologies sur notre société 
                    et notre avenir collectif.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="bg-card shadow-sm">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Éducation</CardTitle>
                <CardDescription>Fournir des ressources pédagogiques de qualité sur l'IA en français</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-card shadow-sm">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Accessibilité</CardTitle>
                <CardDescription>Rendre les concepts complexes d'IA compréhensibles pour tous les publics</CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-card shadow-sm">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Dialogue</CardTitle>
                <CardDescription>Favoriser une compréhension critique des enjeux éthiques et sociétaux de l'IA</CardDescription>
              </CardHeader>
            </Card>
          </div>
          
          <SectionHeading
            pretitle="Le créateur"
            title="L'auteur d'Explorons l'IA"
            description="Découvrez le passionné qui a conçu et développé cette ressource éducative sur l'intelligence artificielle."
            center
          />
          
          <div className="max-w-2xl mx-auto">
            <Card className="bg-card shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="h-16 w-16 border-2 border-primary/20">
                    <AvatarImage src={author.avatar} alt={author.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-medium">
                      {author.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold">{author.name}</h3>
                    <p className="text-sm text-muted-foreground">{author.role}</p>
                    <div className="flex gap-1 mt-1 flex-wrap">
                      <Badge variant="outline" className="text-xs">#ia</Badge>
                      <Badge variant="outline" className="text-xs">#optronique</Badge>
                      <Badge variant="outline" className="text-xs">#éducation</Badge>
                      <Badge variant="outline" className="text-xs">#reconversion</Badge>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4">{author.bio}</p>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-1" asChild>
                    <a href={`mailto:${author.links.email}`}>
                      <Mail className="h-3.5 w-3.5" />
                      <span className="text-xs">Email</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1 cursor-default opacity-75">
                    <Github className="h-3.5 w-3.5" />
                    <span className="text-xs">GitHub</span>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1 cursor-default opacity-75">
                    <Linkedin className="h-3.5 w-3.5" />
                    <span className="text-xs">LinkedIn</span>
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Nouvelle section - Recherche de projets */}
          <div className="mt-16 max-w-3xl mx-auto">
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800">
              <CardHeader className="text-center">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-xl text-green-800 dark:text-green-200">À la recherche de nouveaux défis</CardTitle>
                <CardDescription className="text-green-700 dark:text-green-300">
                  Projets techniques innovants et équipes dynamiques
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm">
                  <p className="text-green-800 dark:text-green-200 leading-relaxed">
                    Je suis actuellement à la recherche de <strong>projets techniques innovants</strong> qui ont du sens pour l'humanité, 
                    et d'<strong>équipes dynamiques</strong> en capacité d'adaptation et de travail en bonne intelligence.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-white/50 dark:bg-green-950/30 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Lightbulb className="h-4 w-4 text-green-600 dark:text-green-400" />
                        <span className="font-semibold text-green-800 dark:text-green-200">Nouvelles énergies</span>
                      </div>
                      <p className="text-xs text-green-700 dark:text-green-300">
                        Solutions durables et technologies propres
                      </p>
                    </div>
                    
                    <div className="bg-white/50 dark:bg-green-950/30 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Globe className="h-4 w-4 text-green-600 dark:text-green-400" />
                        <span className="font-semibold text-green-800 dark:text-green-200">Optique / Électronique</span>
                      </div>
                      <p className="text-xs text-green-700 dark:text-green-300">
                        Systèmes avancés et innovation technique
                      </p>
                    </div>
                    
                    <div className="bg-white/50 dark:bg-green-950/30 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Heart className="h-4 w-4 text-green-600 dark:text-green-400" />
                        <span className="font-semibold text-green-800 dark:text-green-200">Impact humain</span>
                      </div>
                      <p className="text-xs text-green-700 dark:text-green-300">
                        Technologies au service de l'humanité
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-green-700 dark:text-green-300 text-center mt-4 font-medium">
                    Mon expertise en IA, combinée à mon background technique et commercial, 
                    me permet d'apporter une vision transversale aux projets innovants.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 max-w-2xl mx-auto text-center">
            <div className="bg-primary/5 border border-primary/10 rounded-xl p-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Contribuer au projet</h3>
              <p className="text-muted-foreground mb-4">
                Explorons l'IA est un projet en constante évolution. Vous pouvez contribuer en suggérant des améliorations, 
                en signalant des erreurs ou en proposant du contenu.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button variant="default" className="gap-2" asChild>
                  <a href={`mailto:${author.links.email}`}>
                    <Mail className="h-4 w-4" />
                    <span>Contacter l'auteur</span>
                  </a>
                </Button>
                <Button variant="outline" className="gap-2 cursor-default opacity-75">
                  <Code className="h-4 w-4" />
                  <span>Voir le code source</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
