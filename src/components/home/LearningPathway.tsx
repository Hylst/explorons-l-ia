
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Brain, 
  Zap, 
  Target, 
  Trophy, 
  ArrowRight,
  Clock,
  Users,
  CheckCircle
} from 'lucide-react';

const LearningPathway = () => {
  const pathwaySteps = [
    {
      level: "Débutant",
      title: "Découvrir l'IA",
      description: "Comprendre les bases et concepts fondamentaux",
      icon: <Brain className="w-6 h-6" />,
      duration: "2-3 semaines",
      difficulty: "Facile",
      color: "from-green-500 to-emerald-500",
      topics: ["Qu'est-ce que l'IA ?", "Types d'IA", "Applications courantes"],
      link: "/les-bases"
    },
    {
      level: "Intermédiaire",
      title: "Maîtriser les Techniques",
      description: "Apprendre le Machine Learning et Deep Learning",
      icon: <Zap className="w-6 h-6" />,
      duration: "4-6 semaines",
      difficulty: "Modéré",
      color: "from-blue-500 to-cyan-500",
      topics: ["Machine Learning", "Réseaux de neurones", "Algorithmes"],
      link: "/machine-learning"
    },
    {
      level: "Avancé",
      title: "Applications Pratiques",
      description: "Implémenter des projets concrets et spécialisés",
      icon: <Target className="w-6 h-6" />,
      duration: "6-8 semaines",
      difficulty: "Difficile",
      color: "from-purple-500 to-pink-500",
      topics: ["Projets réels", "Optimisation", "Déploiement"],
      link: "/cas-usage"
    },
    {
      level: "Expert",
      title: "Innovation & Recherche",
      description: "Contribuer aux avancées et créer de nouvelles solutions",
      icon: <Trophy className="w-6 h-6" />,
      duration: "En continu",
      difficulty: "Expert",
      color: "from-orange-500 to-red-500",
      topics: ["Recherche", "Innovation", "Leadership"],
      link: "/ressources"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      "Facile": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
      "Modéré": "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
      "Difficile": "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
      "Expert": "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"
    };
    return colors[difficulty as keyof typeof colors] || colors["Facile"];
  };

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="container px-4 mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
            <GraduationCap className="w-4 h-4" />
            Parcours d'Apprentissage
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Votre progression vers la maîtrise de l'IA
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Suivez un parcours structuré et progressif pour développer vos compétences en intelligence artificielle, 
            des concepts de base jusqu'à l'expertise avancée.
          </p>
        </motion.div>

        <div className="space-y-8">
          {pathwaySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Connection line */}
              {index < pathwaySteps.length - 1 && (
                <div className="absolute left-1/2 top-full w-0.5 h-8 bg-gradient-to-b from-primary/30 to-transparent transform -translate-x-1/2 z-0"></div>
              )}
              
              <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-card/70 backdrop-blur-sm border-border/50">
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <CardContent className="p-8 relative z-10">
                  <div className="grid md:grid-cols-3 gap-6 items-center">
                    {/* Icon and Level */}
                    <div className="text-center md:text-left">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        {step.icon}
                      </div>
                      <div className="text-sm font-medium text-muted-foreground mb-1">{step.level}</div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-1">
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="w-4 h-4 text-primary" />
                          <span>{step.duration}</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(step.difficulty)}`}>
                            {step.difficulty}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Topics and Action */}
                    <div className="text-center md:text-right">
                      <div className="mb-4">
                        <h4 className="text-sm font-medium mb-2 text-muted-foreground">Sujets couverts :</h4>
                        <div className="space-y-1">
                          {step.topics.map((topic, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm justify-center md:justify-end">
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              <span>{topic}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Button 
                        asChild 
                        className="group-hover:scale-105 transition-transform duration-300"
                      >
                        <Link to={step.link} className="flex items-center gap-2">
                          Commencer
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-2xl p-8 border border-primary/20">
            <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-2xl font-bold mb-4">Rejoignez notre communauté d'apprenants</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Plus de 10,000 personnes suivent déjà nos parcours d'apprentissage. 
              Commencez votre voyage vers la maîtrise de l'IA dès aujourd'hui.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:shadow-lg transition-all duration-300">
              <Link to="/les-bases">Commencer maintenant</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LearningPathway;
