import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Brain, Layers, Zap, MessageSquare, Code, BookOpen, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/SectionHeading';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

const LLMDetails = () => {
  useDocumentMeta({
    title: "Modèles de Langage (LLM) - Guide Complet | AI Avenir",
    description: "Découvrez tout sur les Large Language Models (LLM) : architecture, fonctionnement, RLHF, applications pratiques et avancées récentes.",
    keywords: "LLM, Large Language Models, GPT, BERT, transformers, RLHF, intelligence artificielle, NLP",
    ogTitle: "Guide Complet des Modèles de Langage (LLM)",
    ogDescription: "Architecture, fonctionnement et applications des LLM modernes",
    ogType: "article"
  });

  const architectureSteps = [
    {
      title: "Tokenisation",
      description: "Le texte est décomposé en tokens (mots, sous-mots, caractères)",
      icon: <Layers className="h-5 w-5" />
    },
    {
      title: "Embeddings",
      description: "Conversion des tokens en vecteurs numériques dans un espace latent",
      icon: <Brain className="h-5 w-5" />
    },
    {
      title: "Attention",
      description: "Mécanisme permettant au modèle de se concentrer sur les parties pertinentes",
      icon: <Zap className="h-5 w-5" />
    },
    {
      title: "Génération",
      description: "Production de nouveaux tokens basée sur les probabilités calculées",
      icon: <MessageSquare className="h-5 w-5" />
    }
  ];

  const applications = [
    {
      title: "Assistants Conversationnels",
      description: "ChatGPT, Claude, Bard - interaction naturelle avec l'utilisateur",
      examples: ["Service client automatisé", "Tuteurs virtuels", "Compagnons de discussion"]
    },
    {
      title: "Génération de Code",
      description: "GitHub Copilot, CodeT5 - assistance au développement",
      examples: ["Autocomplétion de code", "Génération de tests", "Documentation automatique"]
    },
    {
      title: "Création de Contenu",
      description: "Rédaction d'articles, résumés, traductions",
      examples: ["Articles de blog", "Résumés exécutifs", "Traduction multilingue"]
    },
    {
      title: "Analyse de Données",
      description: "Extraction d'insights, classification, sentiment analysis",
      examples: ["Analyse de sentiment", "Classification de documents", "Extraction d'entités"]
    }
  ];

  const rlhfSteps = [
    {
      step: "1",
      title: "Pré-entraînement",
      description: "Le modèle apprend sur un large corpus de texte pour acquérir des connaissances générales"
    },
    {
      step: "2", 
      title: "Supervised Fine-Tuning",
      description: "Ajustement sur des exemples de conversations de haute qualité"
    },
    {
      step: "3",
      title: "Reward Model",
      description: "Un modèle de récompense est entraîné pour évaluer la qualité des réponses"
    },
    {
      step: "4",
      title: "PPO Training",
      description: "Optimisation par renforcement pour aligner le modèle sur les préférences humaines"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation retour */}
      <div className="section-container py-4">
        <Button variant="ghost" size="sm" asChild>
          <Link to="/types-ia" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Retour aux Types d'IA
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="section-container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Brain className="h-4 w-4" />
            Guide Approfondi
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Modèles de Langage (LLM)
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Découvrez l'architecture, le fonctionnement et les applications des Large Language Models, 
            ces modèles révolutionnaires qui transforment l'interaction homme-machine.
          </p>
        </motion.div>
      </section>

      {/* Architecture Section */}
      <section className="section-container py-16">
        <SectionHeading
          pretitle="Fonctionnement"
          title="Architecture des LLM"
          description="Comprendre les mécanismes internes qui permettent aux LLM de traiter et générer du langage naturel"
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {architectureSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mb-4">
                    {step.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* RLHF Section */}
      <section className="section-container py-16">
        <SectionHeading
          pretitle="Avancées Récentes"
          title="RLHF : Apprentissage par Renforcement"
          description="Le Reinforcement Learning from Human Feedback révolutionne l'alignement des LLM"
          center
        />

        <div className="max-w-4xl mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rlhfSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-primary/70 text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="section-container py-16">
        <SectionHeading
          pretitle="Cas d'Usage"
          title="Applications Pratiques"
          description="Les domaines où les LLM excellent et transforment les industries"
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {applications.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">{app.title}</h3>
                  <p className="text-muted-foreground mb-4">{app.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm text-primary">Exemples :</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {app.examples.map((example, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary/60 rounded-full flex-shrink-0" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Navigation Section */}
      <section className="section-container py-16">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            pretitle="Explorer"
            title="Découvrez Plus"
            description="Approfondissez vos connaissances en explorant les autres aspects de l'IA"
            center
          />

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" variant="default">
              <Link to="/types-ia">Types d'IA</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/cours/prompt-engineering">Prompt Engineering</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/cours/parametres-llm">Paramètres LLM</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LLMDetails;