
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import { Brain, Database, Bot, Workflow, BarChart3, Network, Share2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import TypesOfML from '../components/ml/TypesOfML';
import DeepLearning from '../components/ml/DeepLearning';
import Algorithms from '../components/ml/Algorithms';
import MLVisualizations from '../components/ml/MLVisualizations';
import NeuralNetworkAnimation from '../components/ml/NeuralNetworkAnimation';

/**
 * Page sur les différentes approches de Machine Learning
 * @returns {JSX.Element} Le composant de la page Machine Learning
 */
const MachineLearning = () => {
  return (
    <>
      <Hero
        title="Machine Learning"
        subtitle="Découvrez les différentes approches d'apprentissage automatique : supervisé, non supervisé, par renforcement et bien plus encore."
      />

      <section className="section-container">
        <SectionHeading
          pretitle="Fondamentaux"
          title="Qu'est-ce que le Machine Learning ?"
          description="Le machine learning est un sous-domaine de l'intelligence artificielle qui permet aux ordinateurs d'apprendre et de s'améliorer à partir de l'expérience sans être explicitement programmés."
          center
        />

        <div className="mt-12 max-w-4xl mx-auto glass-card rounded-2xl p-8 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Principes fondamentaux</h3>
              <p className="text-muted-foreground mb-4">
                Le machine learning repose sur l'idée que les systèmes peuvent apprendre à partir de données,
                identifier des modèles et prendre des décisions avec une intervention humaine minimale.
              </p>
              <p className="text-muted-foreground">
                Contrairement à la programmation traditionnelle où des règles explicites sont codées,
                le machine learning permet aux systèmes de générer leurs propres règles en analysant des données.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 rounded-full bg-primary/5 animate-pulse"></div>
                <div className="absolute inset-4 rounded-full bg-primary/10 animate-pulse [animation-delay:200ms]"></div>
                <div className="absolute inset-8 rounded-full bg-primary/15 animate-pulse [animation-delay:400ms]"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Brain className="w-20 h-20 text-primary/80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intégration des nouveaux composants */}
      <TypesOfML />
      
      {/* Section d'animation de réseau de neurones */}
      <section id="neural-network-animation" className="section-container py-12 bg-secondary/10">
        <SectionHeading
          pretitle="Visualisation interactive"
          title="Comment fonctionne un réseau de neurones"
          description="Observez l'activation des neurones et le flux de données à travers les différentes couches du réseau."
          center
        />
        
        <div className="mt-8 flex justify-center">
          <NeuralNetworkAnimation />
        </div>
      </section>
      
      {/* Ajout des visualisations interactives */}
      <section id="ml-visualizations">
        <MLVisualizations />
      </section>
      
      <section id="deep-learning">
        <DeepLearning />
      </section>
      <Algorithms />

      <section className="section-container bg-secondary/30 rounded-3xl my-12">
        <SectionHeading
          pretitle="Mise en œuvre"
          title="Du concept à la pratique"
          description="La mise en œuvre d'un projet de machine learning suit généralement un processus structuré en plusieurs étapes clés."
          center
        />

        <div className="mt-10 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-xl animate-fade-in">
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">1</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">Compréhension du problème</h3>
              <p className="text-sm text-muted-foreground text-center">
                Définir clairement l'objectif, les métriques de succès et la valeur commerciale du projet
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">2</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">Collecte et préparation</h3>
              <p className="text-sm text-muted-foreground text-center">
                Acquérir, nettoyer et transformer les données pour les rendre exploitables
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">3</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">Choix de l'approche</h3>
              <p className="text-sm text-muted-foreground text-center">
                Sélectionner la technique de machine learning la plus appropriée au problème
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">4</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">Modélisation</h3>
              <p className="text-sm text-muted-foreground text-center">
                Développer le modèle, le former sur les données d'entraînement et l'optimiser
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">5</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">Évaluation</h3>
              <p className="text-sm text-muted-foreground text-center">
                Mesurer les performances du modèle sur des données de test selon les métriques définies
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl animate-fade-in" style={{ animationDelay: '500ms' }}>
              <div className="mb-4 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">6</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">Déploiement</h3>
              <p className="text-sm text-muted-foreground text-center">
                Intégrer le modèle dans un environnement de production et le rendre accessible
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            pretitle="Exploration"
            title="Découvrez plus"
            description="Approfondissez vos connaissances en explorant les autres sections du site."
            center
          />

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="animate-fade-in">
              <Link to="/niveaux-ia">
                Niveaux d'IA
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="animate-fade-in" style={{ animationDelay: '100ms' }}>
              <Link to="/types-ia">
                Types d'IA
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <Link to="/cas-usage">
                Cas d'usage
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default MachineLearning;
