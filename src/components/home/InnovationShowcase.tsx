
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cpu, 
  Eye, 
  MessageSquare, 
  Music, 
  Palette, 
  Code, 
  Microscope,
  ChevronRight,
  Sparkles
} from 'lucide-react';

const InnovationShowcase = () => {
  const innovations = [
    {
      title: "IA Conversationnelle",
      description: "Chatbots intelligents et assistants virtuels",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      examples: ["ChatGPT", "Claude", "Gemini"],
      link: "/types-ia#llm-section"
    },
    {
      title: "Vision par Ordinateur",
      description: "Reconnaissance et analyse d'images",
      icon: <Eye className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      examples: ["OCR", "Détection d'objets", "Analyse médicale"],
      link: "/types-ia#cnn-section"
    },
    {
      title: "IA Générative",
      description: "Création de contenu automatisée",
      icon: <Palette className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      examples: ["DALL-E", "Midjourney", "Stable Diffusion"],
      link: "/ia-multimodale#applications-creatives"
    },
    {
      title: "Code Intelligence",
      description: "Assistance à la programmation",
      icon: <Code className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      examples: ["GitHub Copilot", "CodeT5", "Tabnine"],
      link: "/cas-usage#code-intelligence"
    },
    {
      title: "IA Audio",
      description: "Synthèse et analyse vocale",
      icon: <Music className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      examples: ["Text-to-Speech", "Music AI", "Podcast AI"],
      link: "/ia-multimodale#audio-section"
    },
    {
      title: "Recherche Scientifique",
      description: "Accélération des découvertes",
      icon: <Microscope className="w-8 h-8" />,
      color: "from-teal-500 to-green-500",
      examples: ["AlphaFold", "Drug Discovery", "Climate AI"],
      link: "/cas-usage#recherche-scientifique"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-dot-pattern opacity-5"></div>
      
      <div className="container px-4 mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
            <Sparkles className="w-4 h-4" />
            Technologies d'Avant-garde
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Innovations IA qui transforment le monde
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explorez les domaines révolutionnaires où l'intelligence artificielle redéfinit les possibilités 
            et créé de nouvelles opportunités dans tous les secteurs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {innovations.map((innovation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
            >
              <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer bg-card/50 backdrop-blur-sm border-border/50 h-full">
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${innovation.color} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
                
                {/* Animated border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-xl transition-colors duration-500"></div>
                
                <CardContent className="p-6 relative z-10 h-full flex flex-col">
                  <div className="mb-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${innovation.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {innovation.icon}
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                      {innovation.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4">
                      {innovation.description}
                    </p>
                  </div>

                  <div className="flex-1">
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2 text-muted-foreground">Exemples populaires :</h4>
                      <div className="flex flex-wrap gap-2">
                        {innovation.examples.map((example, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button 
                    variant="ghost" 
                    size="sm" 
                    asChild 
                    className="group-hover:bg-primary/10 transition-all duration-300 mt-auto"
                  >
                    <Link to={innovation.link} className="flex items-center gap-2">
                      Découvrir
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
                
                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></div>
                <div className="absolute bottom-6 left-6 w-1 h-1 bg-secondary/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" style={{ animationDelay: '0.5s' }}></div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationShowcase;
