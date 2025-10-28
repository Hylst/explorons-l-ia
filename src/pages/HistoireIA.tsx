import React, { useState } from 'react';
import { Bot, BookOpen, Brain, Lightbulb, CalendarDays, Award, Mail, ExternalLink, Globe, Clock, FileText, Sparkles, TrendingUp, Users, Zap } from 'lucide-react';
import { Timeline } from '@/components';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';

const HistoireIA = () => {
  const [activeEra, setActiveEra] = useState("golden-age");

  // Technical terms with educational tooltips
  const technicalTerms = {
    "intelligence artificielle": {
      explanation: "Capacité d'une machine à imiter les fonctions cognitives humaines",
      example: "Reconnaissance vocale, traduction automatique, diagnostic médical",
      analogy: "Comme donner un cerveau artificiel à une machine"
    },
    "apprentissage automatique": {
      explanation: "Méthodes permettant aux machines d'apprendre à partir de données sans être explicitement programmées",
      example: "Un algorithme qui apprend à reconnaître des emails spam",
      analogy: "Comme apprendre à reconnaître des visages en en voyant beaucoup"
    },
    "réseaux de neurones": {
      explanation: "Modèles informatiques inspirés du fonctionnement du cerveau humain",
      example: "Utilisés pour la reconnaissance d'images et le traitement du langage",
      analogy: "Comme un réseau de neurones artificiels qui communiquent entre eux"
    },
    "algorithmes": {
      explanation: "Suite d'instructions précises pour résoudre un problème ou effectuer une tâche",
      example: "Algorithme de recommandation de Netflix ou de recherche Google",
      analogy: "Comme une recette de cuisine avec des étapes précises à suivre"
    },
    "données massives": {
      explanation: "Ensembles de données si volumineux qu'ils nécessitent des outils spéciaux pour les traiter",
      example: "Tous les posts Facebook, recherches Google, ou achats Amazon",
      analogy: "Comme une bibliothèque si grande qu'il faut des robots pour s'y retrouver"
    },
    "puissance de calcul": {
      explanation: "Capacité d'un système informatique à effectuer des opérations complexes rapidement",
      example: "Les GPU modernes peuvent faire des millions de calculs par seconde",
      analogy: "Comme avoir un cerveau qui peut réfléchir des millions de fois plus vite qu'un humain"
    }
  };

  const TechnicalTermTooltip = ({ term, children }: { term: string; children: React.ReactNode }) => {
    const termData = technicalTerms[term.toLowerCase() as keyof typeof technicalTerms];
    if (!termData) return <>{children}</>;

    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <span className="text-primary font-medium cursor-help border-b border-primary/30 border-dotted hover:border-primary transition-colors">
              {children}
            </span>
          </TooltipTrigger>
          <TooltipContent className="max-w-sm p-4 space-y-2 bg-card border border-border shadow-lg">
            <div className="font-semibold text-foreground">{term}</div>
            <div className="text-sm text-muted-foreground">{termData.explanation}</div>
            {termData.example && (
              <div className="text-xs bg-primary/5 p-2 rounded border-l-2 border-primary">
                <span className="font-medium text-primary">Exemple :</span> {termData.example}
              </div>
            )}
            {termData.analogy && (
              <div className="text-xs bg-secondary/50 p-2 rounded border-l-2 border-secondary">
                <span className="font-medium text-secondary-foreground">Analogie :</span> {termData.analogy}
              </div>
            )}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  };

  // Définition des ères de l'IA avec plus de détails
  const eras = [
    {
      id: "inception",
      title: "Les débuts (1940-1960)",
      description: "Période fondatrice où les concepts théoriques et les premières expérimentations établissent les bases de l'intelligence artificielle moderne.",
      events: [
        { year: "1943", event: "Premier modèle de neurone artificiel par McCulloch et Pitts - Introduction des concepts mathématiques de base" },
        { year: "1950", event: "Test de Turing proposé dans l'article 'Computing Machinery and Intelligence' - Définition de l'intelligence machine" },
        { year: "1956", event: "Conférence de Dartmouth où le terme 'Intelligence Artificielle' est officiellement adopté par la communauté scientifique" },
        { year: "1958", event: "Création du langage LISP par John McCarthy - Premier langage de programmation dédié à l'IA" },
      ],
      color: "from-blue-500/20 to-purple-500/20",
      icon: <Brain className="h-5 w-5" />
    },
    {
      id: "golden-age",
      title: "L'âge d'or (1960-1975)",
      description: "Période d'optimisme intense où les premiers systèmes d'IA démontrent des capacités prometteuses et captivent l'imagination du public.",
      events: [
        { year: "1964", event: "ELIZA, programme révolutionnaire de traitement du langage naturel par Joseph Weizenbaum" },
        { year: "1965", event: "DENDRAL, premier système expert capable d'identifier les structures moléculaires complexes" },
        { year: "1968", event: "HAL 9000 dans '2001, l'Odyssée de l'espace' influence profondément la perception populaire de l'IA" },
        { year: "1969", event: "Première démonstration de SHRDLU capable de manipuler des objets virtuels par commandes linguistiques" },
      ],
      color: "from-yellow-500/20 to-orange-500/20",
      icon: <Sparkles className="h-5 w-5" />
    },
    {
      id: "winter",
      title: "L'hiver de l'IA (1975-1990)",
      description: "Période de désillusion majeure et de réduction drastique des financements suite à des résultats en deçà des attentes très élevées.",
      events: [
        { year: "1973", event: "Rapport Lighthill au Royaume-Uni critique sévèrement les promesses non tenues de l'IA" },
        { year: "1984", event: "Effondrement spectaculaire du marché des systèmes experts et des machines LISP" },
        { year: "1986", event: "Publication révolutionnaire de 'Parallel Distributed Processing' introduisant la rétropropagation efficace" },
        { year: "1988", event: "Regain progressif d'intérêt pour les réseaux de neurones artificiels et l'apprentissage automatique" },
      ],
      color: "from-gray-500/20 to-slate-500/20",
      icon: <Clock className="h-5 w-5" />
    },
    {
      id: "revival",
      title: "Renaissance (1990-2010)",
      description: "Renouveau progressif avec l'émergence d'approches statistiques robustes et la résolution de problèmes spécifiques concrets.",
      events: [
        { year: "1997", event: "Deep Blue d'IBM bat historiquement Garry Kasparov aux échecs, marquant un tournant symbolique" },
        { year: "2005", event: "Robot Stanley remporte spectaculairement le DARPA Grand Challenge de conduite autonome" },
        { year: "2006", event: "Geoffrey Hinton introduit les méthodes d'apprentissage profond efficaces qui révolutionnent le domaine" },
        { year: "2008", event: "Lancement stratégique de l'ImageNet par Fei-Fei Li, catalyseur de la vision par ordinateur moderne" },
      ],
      color: "from-green-500/20 to-emerald-500/20",
      icon: <TrendingUp className="h-5 w-5" />
    },
    {
      id: "modern",
      title: "Ère moderne (2010-présent)",
      description: "Explosion spectaculaire des capacités avec l'apprentissage profond, la disponibilité des données massives et la puissance de calcul sans précédent.",
      events: [
        { year: "2011", event: "Watson d'IBM remporte brillamment Jeopardy!, démontrant la compréhension du langage naturel" },
        { year: "2012", event: "AlexNet révolutionne la vision par ordinateur au concours ImageNet avec une précision inégalée" },
        { year: "2016", event: "AlphaGo bat magistralement le champion du monde de Go Lee Sedol dans un exploit considéré impossible" },
        { year: "2020", event: "GPT-3 démontre des capacités de génération de texte d'une qualité quasi-humaine impressionnante" },
        { year: "2022", event: "Explosion mondiale des IA génératives avec DALL-E 2, Midjourney et Stable Diffusion" },
        { year: "2023", event: "Déploiement massif des assistants IA conversationnels comme ChatGPT et Claude auprès du grand public" },
      ],
      color: "from-purple-500/20 to-pink-500/20",
      icon: <Zap className="h-5 w-5" />
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <>
      <Hero
        title="Histoire de l'Intelligence Artificielle"
        subtitle="Découvrez les événements clés et l'évolution fascinante de l'intelligence artificielle à travers les époques, des premiers concepts théoriques aux révolutions contemporaines."
      />
      
      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="mb-8 rounded-2xl overflow-hidden shadow-2xl group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <img 
                src="/pics/history.jpg" 
                alt="Histoire de l'Intelligence Artificielle" 
                className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>
          
          <SectionHeading
            pretitle="Chronologie Interactive"
            title="Évolution de l'IA à travers le temps"
            description="Explorez les moments décisifs qui ont façonné le développement de l'intelligence artificielle depuis ses origines théoriques jusqu'aux révolutions contemporaines de l'IA générative."
            center
            animated
          />
          
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Timeline />
          </motion.div>

          {/* Section améliorée: Navigation par ères */}
          <motion.section 
            className="mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <SectionHeading
                title="Grandes Périodes de l'IA"
                description="Naviguez à travers les différentes époques qui ont marqué l'évolution de l'intelligence artificielle"
                animated
              />
            </motion.div>
            
            <Tabs defaultValue={activeEra} onValueChange={setActiveEra} className="w-full">
              <motion.div variants={itemVariants}>
                <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full mb-6 bg-secondary/30 p-1 rounded-xl">
                  {eras.map(era => (
                    <TabsTrigger 
                      key={era.id} 
                      value={era.id} 
                      className="text-xs md:text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-200 rounded-lg"
                    >
                      <div className="flex items-center gap-1">
                        {era.icon}
                        <span className="hidden md:inline">{era.title.split('(')[0]}</span>
                        <span className="md:hidden">{era.title.split(' ')[0]}</span>
                      </div>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </motion.div>
              
              {eras.map(era => (
                <TabsContent key={era.id} value={era.id} className="animate-fade-in">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className={`border-2 hover:border-primary/50 transition-all duration-300 bg-gradient-to-br ${era.color} backdrop-blur-sm`}>
                      <CardHeader className="relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full -translate-y-16 translate-x-16" />
                        <CardTitle className="flex items-center relative z-10">
                          <div className="p-2 bg-primary/10 rounded-full mr-3">
                            <CalendarDays className="h-5 w-5 text-primary" />
                          </div>
                          {era.title}
                        </CardTitle>
                        <CardDescription className="text-base leading-relaxed relative z-10">
                          {era.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {era.events.map((event, index) => (
                            <motion.div 
                              key={index}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1, duration: 0.4 }}
                              className="group"
                            >
                              <motion.div
                                className="flex items-start hover:bg-secondary/20 p-3 rounded-lg transition-all duration-200"
                                whileHover={{ scale: 1.02, x: 5 }}
                              >
                                <div className="flex-shrink-0 mr-4 mt-1">
                                  <motion.div 
                                    className="w-16 h-8 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm shadow-lg"
                                    whileHover={{ scale: 1.1, rotate: 2 }}
                                  >
                                    {event.year}
                                  </motion.div>
                                </div>
                                <div className="bg-card/80 p-4 rounded-lg flex-grow border border-border/50 group-hover:border-primary/30 transition-colors shadow-sm">
                                  <p className="text-sm leading-relaxed">{event.event}</p>
                                </div>
                              </motion.div>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.section>

          {/* Section améliorée: Défis et Impacts */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Lightbulb className="mr-3 h-6 w-6 text-primary" />
                Défis et Controverses
              </h2>
              <div className="space-y-6">
                <motion.div 
                  className="p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl border border-secondary/20 hover:border-secondary/40 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex gap-4">
                    <motion.div 
                      className="p-3 bg-primary/10 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: 10 }}
                    >
                      <Bot className="h-6 w-6 text-primary" />
                    </motion.div>
                    <div>
                      <h5 className="font-bold mb-2 text-lg">Défis éthiques grandissants</h5>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Questions de biais, vie privée, désinformation, impact sur l'emploi deviennent centrales dans le développement responsable de l'<TechnicalTermTooltip term="intelligence artificielle">intelligence artificielle</TechnicalTermTooltip>.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Alert className="border-2 border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50">
                    <Lightbulb className="h-4 w-4 text-yellow-600" />
                    <AlertTitle className="text-yellow-800 font-bold">L'hiver de l'IA</AlertTitle>
                    <AlertDescription className="text-yellow-700">
                      L'histoire de l'IA a connu plusieurs "hivers" - périodes de désillusion et de réduction des financements suite à des attentes trop élevées. Le premier s'est produit dans les années 1970, et un autre dans les années 1990.
                    </AlertDescription>
                  </Alert>
                </motion.div>

                <motion.div 
                  className="p-6 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 rounded-xl border border-yellow-200 hover:border-yellow-300 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex gap-4">
                    <motion.div 
                      className="p-3 bg-yellow-500/10 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: -10 }}
                    >
                      <Lightbulb className="h-6 w-6 text-yellow-600" />
                    </motion.div>
                    <div>
                      <h5 className="font-bold mb-2 text-lg">Promesses exagérées</h5>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        L'enthousiasme pour l'IA a souvent conduit à des prédictions trop optimistes sur ses capacités à court terme, créant des cycles d'engouement suivis de déceptions profondes.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Users className="mr-3 h-6 w-6 text-primary" />
                Impacts Culturels
              </h2>
              <div className="space-y-6">
                <motion.p 
                  className="text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  L'<TechnicalTermTooltip term="intelligence artificielle">intelligence artificielle</TechnicalTermTooltip> a profondément influencé notre culture populaire, de HAL 9000 dans "2001: l'Odyssée de l'espace" aux récits contemporains sur la singularité technologique.
                </motion.p>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: "Littérature", content: "Isaac Asimov avec ses 'Trois lois de la robotique' a façonné notre vision de l'éthique des machines.", icon: <BookOpen className="h-4 w-4" /> },
                    { title: "Cinéma", content: "De 'Metropolis' (1927) à 'Her' (2013), le cinéma explore notre relation avec l'intelligence artificielle.", icon: <Globe className="h-4 w-4" /> }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="p-4 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-xl border border-secondary/20 hover:border-primary/30 transition-all duration-300"
                      whileHover={{ scale: 1.05, rotate: 1 }}
                    >
                      <div className="flex items-center mb-2">
                        {item.icon}
                        <h5 className="font-bold ml-2">{item.title}</h5>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.content}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="border-2 hover:border-primary/30 transition-all duration-300 bg-gradient-to-br from-card to-primary/5">
                    <CardHeader>
                      <CardTitle className="text-base flex items-center">
                        <Globe className="mr-2 h-4 w-4 text-primary" />
                        IA dans la culture populaire
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 gap-3 text-sm">
                      {[
                        { work: "2001, l'Odyssée de l'espace (1968)", character: "HAL 9000" },
                        { work: "Blade Runner (1982)", character: "Réplicants" },
                        { work: "Terminator (1984)", character: "Skynet" },
                        { work: "Matrix (1999)", character: "Intelligence artificielle collective" },
                        { work: "Her (2013)", character: "Samantha" }
                      ].map((item, index) => (
                        <motion.div 
                          key={index}
                          className="flex justify-between items-center border-b pb-2 hover:bg-secondary/10 p-2 rounded transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <span className="font-medium">{item.work}</span>
                          <span className="text-muted-foreground text-xs">{item.character}</span>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Section améliorée: Figures emblématiques */}
          <motion.div 
            className="mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants}>
              <SectionHeading
                title="Figures Emblématiques"
                description="Découvrez les pionniers qui ont façonné l'intelligence artificielle"
                animated
              />
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Alan Turing",
                  contribution: "Fondements théoriques, test de Turing",
                  years: "1912-1954",
                  description: "Mathématicien britannique, père de l'informatique moderne"
                },
                {
                  name: "John McCarthy",
                  contribution: "Terme 'Intelligence Artificielle', LISP",
                  years: "1927-2011",
                  description: "Informaticien américain qui a créé le terme 'IA'"
                },
                {
                  name: "Marvin Minsky",
                  contribution: "Co-fondateur du laboratoire d'IA du MIT",
                  years: "1927-2016",
                  description: "Pionnier de l'IA et des sciences cognitives"
                },
                {
                  name: "Geoffrey Hinton",
                  contribution: "Pionnier de l'apprentissage profond",
                  years: "1947-présent",
                  description: "Révolutionnaire du deep learning moderne"
                },
                {
                  name: "Yann LeCun",
                  contribution: "CNNs, apprentissage profond",
                  years: "1960-présent",
                  description: "Inventeur des réseaux de neurones convolutifs"
                },
                {
                  name: "Yoshua Bengio",
                  contribution: "Apprentissage profond, réseaux de neurones",
                  years: "1964-présent",
                  description: "Expert mondial en apprentissage automatique"
                },
                {
                  name: "Fei-Fei Li",
                  contribution: "Vision par ordinateur, ImageNet",
                  years: "1976-présent",
                  description: "Pionnière de la vision par ordinateur moderne"
                },
                {
                  name: "Andrew Ng",
                  contribution: "Apprentissage machine, éducation en IA",
                  years: "1976-présent",
                  description: "Démocratisateur de l'enseignement de l'IA"
                }
              ].map((person, index) => (
                <motion.div 
                  key={index} 
                  className="group p-6 border-2 border-border rounded-xl text-center hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-card to-secondary/5 hover:shadow-xl"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <motion.div 
                    className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="text-xl font-bold text-primary">{person.name.split(' ').map(n => n[0]).join('')}</span>
                  </motion.div>
                  <h5 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{person.name}</h5>
                  <p className="text-xs text-muted-foreground mb-2 font-medium">{person.years}</p>
                  <p className="text-sm mb-2 font-medium text-foreground">{person.contribution}</p>
                  <p className="text-xs text-muted-foreground italic">{person.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Publications Fondatrices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Computing Machinery and Intelligence",
                  author: "Alan Turing",
                  year: "1950",
                  description: "Article fondateur introduisant le célèbre 'test de Turing' et questionnant la possibilité des machines pensantes."
                },
                {
                  title: "A Logical Calculus of the Ideas Immanent in Nervous Activity",
                  author: "Warren McCulloch et Walter Pitts",
                  year: "1943",
                  description: "Premier modèle mathématique d'un neurone artificiel, posant les bases des réseaux neuronaux."
                },
                {
                  title: "A Proposal for the Dartmouth Summer Research Project on Artificial Intelligence",
                  author: "John McCarthy et al.",
                  year: "1955",
                  description: "Document proposant la conférence de Dartmouth qui a officialisé le terme 'Intelligence Artificielle'."
                },
                {
                  title: "Perceptrons",
                  author: "Marvin Minsky et Seymour Papert",
                  year: "1969",
                  description: "Ouvrage démontrant les limitations des perceptrons simples, contribuant au premier hiver de l'IA."
                }
              ].map((publication, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="bg-secondary/5">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">{publication.title}</CardTitle>
                      <span className="text-primary font-bold">{publication.year}</span>
                    </div>
                    <CardDescription>{publication.author}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-sm">{publication.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <section className="bg-muted/30 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Ressources pour approfondir</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center">
                    <FileText className="h-4 w-4 mr-2" />
                    Articles académiques
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ExternalLink className="h-3 w-3 mr-2 text-primary" />
                      <a href="https://hal.science/hal-01983226" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Histoire de l'intelligence artificielle (Ganascia, 2018)</a>
                    </li>
                    <li className="flex items-center">
                      <ExternalLink className="h-3 w-3 mr-2 text-primary" />
                      <a href="https://arxiv.org/abs/2004.08271" target="_blank" rel="noopener noreferrer" className="hover:text-primary">A Brief History of AI (Haenlein, 2020)</a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Livres recommandés
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <ul className="space-y-2">
                    <li>Histoire de l'intelligence artificielle (Jean-Claude Heudin)</li>
                    <li>Homo Deus: Une brève histoire de l'avenir (Yuval Noah Harari)</li>
                    <li>The Quest for Artificial Intelligence (Nils J. Nilsson)</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center">
                    <Globe className="h-4 w-4 mr-2" />
                    Sites internet
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ExternalLink className="h-3 w-3 mr-2 text-primary" />
                      <a href="https://www.interstices.info/domaine/intelligence-artificielle/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Interstices - Intelligence Artificielle</a>
                    </li>
                    <li className="flex items-center">
                      <ExternalLink className="h-3 w-3 mr-2 text-primary" />
                      <a href="https://histoire-ia.fr/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Histoire-IA.fr</a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Button asChild variant="outline">
                <Link to="/ressources">
                  Explorer toutes nos ressources
                </Link>
              </Button>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default HistoireIA;
