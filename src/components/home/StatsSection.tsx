
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, BookOpen, Sparkles, Zap, Users, TrendingUp, Clock, Star } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { 
      number: "50+", 
      label: "Concepts expliqués", 
      icon: <Brain className="w-6 h-6" />,
      description: "Depuis les bases jusqu'aux concepts avancés"
    },
    { 
      number: "100+", 
      label: "Ressources validées", 
      icon: <BookOpen className="w-6 h-6" />,
      description: "Articles, cours et outils vérifiés"
    },
    { 
      number: "25+", 
      label: "Cas d'usage concrets", 
      icon: <Sparkles className="w-6 h-6" />,
      description: "Applications réelles dans divers secteurs"
    },
    { 
      number: "15+", 
      label: "Outils interactifs", 
      icon: <Zap className="w-6 h-6" />,
      description: "Simulateurs et visualisations"
    },
    { 
      number: "10K+", 
      label: "Apprenants actifs", 
      icon: <Users className="w-6 h-6" />,
      description: "Communauté grandissante"
    },
    { 
      number: "95%", 
      label: "Satisfaction", 
      icon: <Star className="w-6 h-6" />,
      description: "Retours positifs des utilisateurs"
    },
    { 
      number: "24/7", 
      label: "Mise à jour", 
      icon: <Clock className="w-6 h-6" />,
      description: "Contenu actualisé en continu"
    },
    { 
      number: "3x", 
      label: "Croissance", 
      icon: <TrendingUp className="w-6 h-6" />,
      description: "Expansion rapide du contenu"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container px-4 mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
            L'IA Explorer en chiffres
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez l'impact de notre plateforme d'apprentissage de l'intelligence artificielle
          </p>
          <p className="text-sm text-muted-foreground/70 mt-2 italic">
            * Les statistiques "Apprenants actifs", "Satisfaction", "Mise à jour" et "Croissance" sont des données de démonstration/lancement
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              className="text-center group cursor-pointer hover:scale-105 transition-transform duration-300 bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-lg"
            >
              <div className="flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base font-medium mb-2">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
