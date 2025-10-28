
import React from 'react';
import Hero from '@/components/Hero';
import CourseHeader from '@/components/courses/CourseHeader';
import CourseModule from '@/components/courses/CourseModule';
import CourseConclusion from '@/components/courses/CourseConclusion';
import ZoomOn from '@/components/courses/ZoomOn';
import DidYouKnow from '@/components/courses/DidYouKnow';
import AnalogyBox from '@/components/courses/AnalogyBox';
import TechnicalTooltip from '@/components/courses/TechnicalTooltip';
import CodeExample from '@/components/courses/CodeExample';
import InteractiveExample from '@/components/courses/InteractiveExample';
import QuickFactBox from '@/components/courses/QuickFactBox';
import InfoTooltip from '@/components/courses/InfoTooltip';
import ExpandableSection from '@/components/courses/ExpandableSection';
import StatsGrid from '@/components/courses/StatsGrid';
import BackToResourcesButton from '@/components/courses/BackToResourcesButton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  Layers, 
  Zap, 
  Code, 
  Database, 
  Camera,
  Cpu,
  ChartBar,
  Target,
  Settings,
  Lightbulb,
  Rocket,
  Users,
  Clock,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  BookOpen,
  Play,
  Download,
  Wrench
} from 'lucide-react';

const DeepLearningPratique = () => {
  const headerProps = {
    title: "Deep Learning Pratique",
    subtitle: "De la théorie aux applications industrielles : maîtrisez les réseaux de neurones profonds",
    author: "Dr. Geoffroy Streit",
    authorDescription: "Passionné en Intelligence Artificielle",
    duration: "12-16 semaines (8-10h/semaine)",
    level: "Intermédiaire à Expert",
    audience: "Développeurs, Data Scientists, Ingénieurs ML, Chercheurs",
    tags: ["Deep Learning", "TensorFlow", "PyTorch", "Production", "MLOps", "2024"]
  };

  const statsData = [
    {
      value: "97%",
      description: "Taux de réussite des participants",
      bgGradient: "from-green-50 to-green-100 dark:from-green-950/50 dark:to-green-900/50"
    },
    {
      value: "45+",
      description: "Projets pratiques inclus",
      bgGradient: "from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50"
    },
    {
      value: "120h",
      description: "Contenu vidéo et exercices",
      bgGradient: "from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/50"
    },
    {
      value: "24/7",
      description: "Support communautaire",
      bgGradient: "from-orange-50 to-orange-100 dark:from-orange-950/50 dark:to-orange-900/50"
    }
  ];

  const quickFacts = [
    {
      label: "Croissance du marché DL",
      value: "+35% /an",
      trend: "up" as const,
      context: "Le marché du deep learning croît de 35% par an selon McKinsey 2024"
    },
    {
      label: "Demande d'experts DL",
      value: "+250%",
      trend: "up" as const,
      context: "Augmentation de la demande d'experts deep learning depuis 2020"
    },
    {
      label: "Salaire moyen DL Engineer",
      value: "€85-140k",
      trend: "up" as const,
      context: "Fourchette salariale en Europe pour un ingénieur deep learning expérimenté"
    }
  ];

  const didYouKnowItems = [
    {
      title: "Origine du terme",
      content: "Le terme 'Deep Learning' a été popularisé par Geoffrey Hinton en 2006, mais les premiers réseaux de neurones multicouches datent des années 1940 avec le travail de McCulloch et Pitts."
    },
    {
      title: "Puissance de calcul",
      content: "L'entraînement de GPT-4 a nécessité environ 25 000 GPU NVIDIA A100 pendant plusieurs mois, consommant l'équivalent électrique d'une petite ville."
    },
    {
      title: "Inspiration biologique",
      content: "Un neurone biologique peut traiter jusqu'à 1000 signaux par seconde, mais un neurone artificiel moderne peut effectuer des millions d'opérations par seconde."
    },
    {
      title: "Révolution ImageNet",
      content: "En 2012, AlexNet a réduit l'erreur de classification sur ImageNet de 26% à 15%, marquant le début de la révolution deep learning en vision par ordinateur."
    }
  ];

  const practicalProjects = [
    {
      title: "Classification d'images médicales",
      description: "Développez un système de diagnostic automatisé pour détecter des pathologies sur des radiographies pulmonaires",
      difficulty: "Intermédiaire",
      duration: "3-4 semaines",
      technologies: ["TensorFlow", "OpenCV", "DICOM"],
      outcomes: ["Précision >95%", "Déploiement clinique", "Certification FDA"]
    },
    {
      title: "Système de recommandation en temps réel",
      description: "Construisez un moteur de recommandation pour une plateforme e-commerce avec apprentissage continu",
      difficulty: "Avancé",
      duration: "4-5 semaines",
      technologies: ["PyTorch", "Redis", "Kafka", "MLflow"],
      outcomes: ["+25% engagement", "Latence <50ms", "A/B Testing"]
    },
    {
      title: "Génération de texte créatif",
      description: "Créez un assistant d'écriture basé sur Transformer pour générer du contenu marketing personnalisé",
      difficulty: "Expert",
      duration: "5-6 semaines",
      technologies: ["Transformers", "Hugging Face", "FastAPI", "Docker"],
      outcomes: ["Fine-tuning GPT", "API REST", "Interface web"]
    }
  ];

  return (
    <>
      <BackToResourcesButton />
      
      <Hero
        title={headerProps.title}
        subtitle={headerProps.subtitle}
      />

      <section className="section-container">
        <CourseHeader {...headerProps} />

        {/* Introduction immersive */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/30 dark:via-purple-950/30 dark:to-pink-950/30 rounded-2xl p-8 mb-8 border border-primary/10">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  🚀 Bienvenue dans l'ère du Deep Learning industriel !
                </h3>
                <p className="text-lg text-muted-foreground">
                  Préparez-vous à transformer votre compréhension de l'IA et à devenir un architecte de solutions intelligentes
                </p>
              </div>
            </div>
            
            <div className="space-y-4 text-foreground">
              <p className="text-lg">
                Imaginez pouvoir créer des systèmes qui <strong>voient</strong> comme un radiologue expérimenté, 
                qui <strong>comprennent</strong> le langage mieux qu'un traducteur professionnel, 
                ou qui <strong>prédisent</strong> les tendances du marché avec une précision surnaturelle.
              </p>
              <p>
                Ce n'est plus de la science-fiction ! Le deep learning révolutionne actuellement tous les secteurs :
                de la médecine personnalisée aux voitures autonomes, en passant par la finance algorithmique 
                et la créativité assistée par IA.
              </p>
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mt-4">
                <p className="font-medium text-primary mb-2">🎯 Votre mission dans ce cours :</p>
                <p className="text-sm">
                  Passer du statut de spectateur à celui d'<strong>architecte de l'intelligence artificielle</strong>. 
                  Vous allez non seulement comprendre les concepts, mais surtout apprendre à construire, 
                  optimiser et déployer des modèles de deep learning en production.
                </p>
              </div>
            </div>
          </div>

          <AnalogyBox
            title="Le Deep Learning, c'est comme apprendre à cuisiner dans un restaurant étoilé"
            content="Au début, vous suivez des recettes simples (modèles pré-entraînés). Puis vous apprenez les techniques fondamentales (architectures, optimisation). Enfin, vous créez vos propres plats innovants (modèles custom) et gérez une brigade complète (pipeline ML en production). Chaque étape demande de la pratique, mais le résultat en vaut la peine !"
            variant="info"
          />
        </div>

        <StatsGrid stats={statsData} />

        <QuickFactBox 
          title="📊 Marché & Opportunités" 
          facts={quickFacts} 
          variant="success" 
        />

        {/* Module 1 : Fondamentaux et environnement */}
        <ExpandableSection 
          title="Module 1 : Fondamentaux et Configuration de l'Environnement"
          defaultExpanded={true}
          icon={<Settings className="h-5 w-5" />}
        >
          <div className="space-y-6">
            <ZoomOn title="Pourquoi commencer par l'environnement ? L'analogie de l'atelier">
              <p className="mb-3">
                Imaginez un charpentier qui essaie de construire une maison avec des outils défaillants : 
                même le meilleur artisan échouera ! De même, un environnement de développement mal configuré 
                peut transformer votre apprentissage en cauchemar.
              </p>
              <p className="mb-3">
                Ce module vous donne les <TechnicalTooltip term="Outils professionnels" definition="Ensemble d'outils intégrés permettant le développement, l'entraînement et le déploiement efficace de modèles DL">outils professionnels</TechnicalTooltip> 
                utilisés dans l'industrie, pas des solutions bricolées.
              </p>
              <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mt-4">
                <h5 className="font-medium mb-2 flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 text-blue-600" />
                  Approche pédagogique progressive
                </h5>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Installation guidée :</strong> Scripts automatisés pour éviter les erreurs</li>
                  <li>• <strong>Environnements isolés :</strong> Docker containers prêts à l'emploi</li>
                  <li>• <strong>Monitoring intégré :</strong> Outils de surveillance des performances</li>
                  <li>• <strong>Best practices :</strong> Configuration selon les standards industriels</li>
                </ul>
              </div>
            </ZoomOn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cpu className="h-5 w-5 text-primary" />
                    Configuration Hardware & Cloud
                    <InfoTooltip content="Apprenez à optimiser vos ressources selon votre budget et vos objectifs" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <InteractiveExample
                    title="Calculateur de configuration optimale"
                    description="Déterminez la configuration idéale pour vos projets deep learning"
                    steps={[
                      {
                        title: "Évaluation du budget",
                        description: "Définissez votre budget disponible pour hardware/cloud",
                        result: "Budget optimisé selon vos contraintes"
                      },
                      {
                        title: "Définition des objectifs",
                        description: "Précisez si c'est pour recherche, prototypage ou production",
                        result: "Objectifs clarifiés et priorisés"
                      },
                      {
                        title: "Choix GPU local vs cloud",
                        description: "Comparez les options selon vos besoins",
                        result: "Recommandation personnalisée"
                      },
                      {
                        title: "Configuration automatique",
                        description: "Génération des scripts d'installation",
                        result: "Environnement prêt à l'emploi"
                      }
                    ]}
                    finalMessage="Configuration personnalisée avec scripts d'installation automatique générés selon vos besoins spécifiques."
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    Stack Technologique Moderne
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">PyTorch 2.0+</span>
                      <Badge variant="default">Production Ready</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">TensorFlow 2.14+</span>
                      <Badge variant="secondary">Enterprise</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Hugging Face Hub</span>
                      <Badge variant="outline">Community</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">MLflow + Weights & Biases</span>
                      <Badge variant="default">MLOps</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <CodeExample
              title="Installation automatisée avec Docker Compose"
              language="yaml"
              code={`version: '3.8'
services:
  deeplearning-dev:
    build:
      context: .
      dockerfile: Dockerfile.gpu
    runtime: nvidia
    environment:
      - NVIDIA_VISIBLE_DEVICES=all
      - WANDB_API_KEY=\${WANDB_API_KEY}
    volumes:
      - ./notebooks:/workspace/notebooks
      - ./data:/workspace/data
      - ./models:/workspace/models
    ports:
      - "8888:8888"  # Jupyter Lab
      - "6006:6006"  # TensorBoard
      - "8080:8080"  # MLflow UI
    
  mlflow-server:
    image: python:3.11-slim
    command: >
      bash -c "pip install mlflow boto3 &&
               mlflow server 
               --backend-store-uri postgresql://\${DB_USER}:\${DB_PASS}@postgres:5432/mlflow
               --default-artifact-root s3://\${S3_BUCKET}/artifacts
               --host 0.0.0.0 --port 5000"
    ports:
      - "5000:5000"
    depends_on:
      - postgres
    
  postgres:
    image: postgres:15
    environment:
      POSTGRES_DB: mlflow
      POSTGRES_USER: \${DB_USER}
      POSTGRES_PASSWORD: \${DB_PASS}
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:`}
              explanation="Cette configuration Docker vous donne un environnement de développement complet avec GPU support, tracking d'expériences, et base de données intégrée."
            />
          </div>
        </ExpandableSection>

        {/* Module 2 : Architecture et Design Patterns */}
        <ExpandableSection 
          title="Module 2 : Architectures Avancées et Design Patterns"
          icon={<Layers className="h-5 w-5" />}
        >
          <div className="space-y-6">
            <ZoomOn title="Au-delà des tutoriels : construire des architectures robustes">
              <p className="mb-3">
                La différence entre un développeur amateur et un expert ? L'amateur copie-colle des tutorials, 
                l'expert comprend les <TechnicalTooltip term="Design patterns" definition="Modèles de conception réutilisables qui résolvent des problèmes communs en architecture logicielle">design patterns</TechnicalTooltip> 
                et adapte les architectures aux contraintes réelles.
              </p>
              <p className="mb-3">
                Dans ce module, vous allez apprendre à penser comme un architecte logiciel appliqué au ML :
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Modularité :</strong> Comment structurer votre code pour la maintenabilité</li>
                <li><strong>Scalabilité :</strong> Concevoir pour gérer des millions d'exemples</li>
                <li><strong>Résilience :</strong> Gérer les pannes et les cas d'edge</li>
                <li><strong>Observabilité :</strong> Monitorer et déboguer vos modèles en production</li>
              </ul>
            </ZoomOn>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {practicalProjects.map((project, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant={
                        project.difficulty === "Intermédiaire" ? "default" :
                        project.difficulty === "Avancé" ? "secondary" : "destructive"
                      }>
                        {project.difficulty}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {project.duration}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                    
                    <div className="space-y-3">
                      <div>
                        <h5 className="text-sm font-medium mb-2">Technologies utilisées :</h5>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech, i) => (
                            <Badge key={i} variant="outline" className="text-xs">{tech}</Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-medium mb-2">Objectifs :</h5>
                        <ul className="text-xs space-y-1">
                          {project.outcomes.map((outcome, i) => (
                            <li key={i} className="flex items-center gap-1">
                              <CheckCircle2 className="h-3 w-3 text-green-500" />
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <AnalogyBox
              title="L'architecture d'un modèle DL, c'est comme concevoir un gratte-ciel"
              content="Les fondations (preprocessing) doivent être solides, la structure (layers) doit être adaptée à l'usage, les systèmes (activation, normalization) doivent fonctionner ensemble, et tout doit être construit pour durer (maintenance). Un architecte ne commence jamais sans plan détaillé !"
              variant="tip"
            />
          </div>
        </ExpandableSection>

        {/* Module 3 : Production et MLOps */}
        <ExpandableSection 
          title="Module 3 : Déploiement Production et MLOps"
          icon={<Rocket className="h-5 w-5" />}
        >
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/30 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-orange-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">
                    Le fossé entre recherche et production
                  </h4>
                  <p className="text-orange-700 dark:text-orange-300 text-sm mb-3">
                    95% des modèles de ML ne dépassent jamais le stade de prototype. Pourquoi ? 
                    Parce que faire fonctionner un modèle sur son laptop et le déployer pour servir 
                    des millions d'utilisateurs sont deux défis complètement différents.
                  </p>
                  <div className="bg-orange-100 dark:bg-orange-900/50 rounded p-3">
                    <p className="text-xs text-orange-800 dark:text-orange-200">
                      <strong>Objectif de ce module :</strong> Vous donner les compétences pour faire partie des 5% 
                      qui réussissent à déployer leurs modèles en production avec succès.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Pipeline CI/CD pour ML
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <InteractiveExample
                    title="Déploiement automatisé avec MLflow"
                    description="Apprenez à mettre en place un pipeline complet de déploiement"
                    steps={[
                      {
                        title: "Versioning automatique",
                        description: "Configuration du versioning automatique des modèles",
                        result: "Modèles versionnés et traçables"
                      },
                      {
                        title: "Tests de régression",
                        description: "Mise en place de tests automatisés de performance",
                        result: "Validation automatique des performances"
                      },
                      {
                        title: "Déploiement graduel",
                        description: "Configuration du déploiement blue-green",
                        result: "Déploiement sans interruption de service"
                      },
                      {
                        title: "Monitoring temps réel",
                        description: "Configuration des alertes et métriques",
                        result: "Surveillance continue avec rollback automatique"
                      }
                    ]}
                    finalMessage="Pipeline production-ready avec rollback automatique et monitoring complet configuré."
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Monitoring et Observabilité
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span>Data Drift Detection</span>
                      <Badge variant="default">Alertes temps réel</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Model Performance</span>
                      <Badge variant="secondary">Métriques custom</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Infrastructure Health</span>
                      <Badge variant="outline">Auto-scaling</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Business Impact</span>
                      <Badge variant="default">ROI tracking</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <CodeExample
              title="API de prédiction haute performance avec FastAPI"
              language="python"
              code={`from fastapi import FastAPI, HTTPException, BackgroundTasks
from pydantic import BaseModel
import torch
import asyncio
from prometheus_client import Counter, Histogram, generate_latest
import logging
from typing import List, Optional
import numpy as np

# Métriques Prometheus
PREDICTION_COUNTER = Counter('predictions_total', 'Total predictions made')
PREDICTION_LATENCY = Histogram('prediction_duration_seconds', 'Prediction latency')
ERROR_COUNTER = Counter('prediction_errors_total', 'Total prediction errors')

app = FastAPI(title="DeepLearning Production API", version="2.0.0")

class PredictionRequest(BaseModel):
    features: List[float]
    model_version: Optional[str] = "latest"
    
class PredictionResponse(BaseModel):
    prediction: float
    confidence: float
    model_version: str
    latency_ms: float

class ModelManager:
    def __init__(self):
        self.models = {}
        self.load_models()
    
    def load_models(self):
        """Chargement des modèles avec versioning"""
        try:
            # Chargement du modèle principal
            self.models["latest"] = torch.jit.load("models/model_latest.pt")
            self.models["latest"].eval()
            
            # Chargement du modèle de fallback
            self.models["stable"] = torch.jit.load("models/model_stable.pt") 
            self.models["stable"].eval()
            
            logging.info("Modèles chargés avec succès")
        except Exception as e:
            logging.error(f"Erreur chargement modèles: {e}")
            raise
    
    async def predict(self, features: np.ndarray, version: str = "latest") -> tuple:
        """Prédiction asynchrone avec gestion d'erreurs"""
        try:
            model = self.models.get(version, self.models["stable"])
            
            with torch.no_grad():
                input_tensor = torch.FloatTensor(features).unsqueeze(0)
                
                # Prédiction avec timeout
                prediction = await asyncio.wait_for(
                    asyncio.to_thread(model, input_tensor),
                    timeout=5.0
                )
                
                confidence = torch.softmax(prediction, dim=1).max().item()
                result = prediction.argmax().item()
                
                return result, confidence
                
        except asyncio.TimeoutError:
            ERROR_COUNTER.inc()
            raise HTTPException(status_code=408, detail="Timeout de prédiction")
        except Exception as e:
            ERROR_COUNTER.inc()
            logging.error(f"Erreur prédiction: {e}")
            raise HTTPException(status_code=500, detail="Erreur interne")

model_manager = ModelManager()

@app.post("/predict", response_model=PredictionResponse)
async def predict(request: PredictionRequest, background_tasks: BackgroundTasks):
    """Endpoint de prédiction avec monitoring"""
    start_time = time.time()
    
    try:
        # Validation des features
        if len(request.features) != 784:  # Exemple: MNIST
            raise HTTPException(status_code=400, detail="Nombre de features incorrect")
        
        # Normalisation
        features = np.array(request.features) / 255.0
        
        # Prédiction
        prediction, confidence = await model_manager.predict(
            features, request.model_version
        )
        
        latency_ms = (time.time() - start_time) * 1000
        
        # Métriques
        PREDICTION_COUNTER.inc()
        PREDICTION_LATENCY.observe(latency_ms / 1000)
        
        # Log asynchrone pour analytics
        background_tasks.add_task(
            log_prediction, request.features, prediction, confidence
        )
        
        return PredictionResponse(
            prediction=prediction,
            confidence=confidence,
            model_version=request.model_version,
            latency_ms=latency_ms
        )
        
    except Exception as e:
        ERROR_COUNTER.inc()
        raise

async def log_prediction(features, prediction, confidence):
    """Logging asynchrone pour analytics"""
    # Ici: envoi vers système d'analytics, détection de drift, etc.
    pass

@app.get("/health")
async def health_check():
    """Health check pour load balancer"""
    return {"status": "healthy", "models_loaded": len(model_manager.models)}

@app.get("/metrics")
async def metrics():
    """Métriques Prometheus"""
    return Response(generate_latest(), media_type="text/plain")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, workers=4)`}
              explanation="Cette API de production inclut le versioning des modèles, monitoring Prometheus, gestion d'erreurs robuste, et prédictions asynchrones optimisées."
            />
          </div>
        </ExpandableSection>

        <DidYouKnow items={didYouKnowItems} />

        {/* Module Bonus : Optimisation et Debugging */}
        <ExpandableSection 
          title="Module Bonus : Optimisation Avancée et Debugging"
          icon={<Wrench className="h-5 w-5" />}
        >
          <div className="space-y-6">
            <ZoomOn title="Devenir un 'modèle whisperer' : l'art du debugging DL">
              <p className="mb-3">
                Les meilleurs praticiens du deep learning ne sont pas ceux qui connaissent toutes les architectures par cœur, 
                mais ceux qui savent <strong>diagnostiquer et résoudre</strong> les problèmes rapidement.
              </p>
              <p className="mb-3">
                Ce module bonus vous transforme en détective du ML : vous apprendrez à 'lire' vos modèles, 
                à identifier les goulots d'étranglement, et à optimiser là où ça compte vraiment.
              </p>
              <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                <h5 className="font-medium mb-2">🔍 Techniques de debugging avancées :</h5>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Analyse des gradients :</strong> Détecter les problèmes d'apprentissage</li>
                  <li>• <strong>Visualisation des activations :</strong> Comprendre ce que "voit" votre modèle</li>
                  <li>• <strong>Profiling mémoire/GPU :</strong> Optimiser les performances</li>
                  <li>• <strong>A/B testing de modèles :</strong> Valider les améliorations</li>
                </ul>
              </div>
            </ZoomOn>

            <div className="bg-slate-50 dark:bg-slate-950/30 border border-slate-200 dark:border-slate-800 rounded-lg p-6">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Brain className="h-5 w-5 text-primary" />
                Checklist du praticien expert
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium mb-2 text-green-700 dark:text-green-400">✅ Avant l'entraînement</h5>
                  <ul className="text-sm space-y-1">
                    <li>• Analyse exploratoire poussée des données</li>
                    <li>• Validation de l'architecture sur subset</li>
                    <li>• Configuration du monitoring</li>
                    <li>• Tests de sanity check</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2 text-blue-700 dark:text-blue-400">🔧 Pendant l'entraînement</h5>
                  <ul className="text-sm space-y-1">
                    <li>• Surveillance des métriques en temps réel</li>
                    <li>• Ajustement dynamique des hyperparamètres</li>
                    <li>• Sauvegarde automatique des checkpoints</li>
                    <li>• Détection précoce du surapprentissage</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ExpandableSection>

        {/* Communauté et ressources */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Rejoignez la Communauté DL Practitioners
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-medium mb-1">Forum d'entraide</h4>
                <p className="text-sm text-muted-foreground">Questions, partage de code, debugging collaboratif</p>
              </div>
              <div className="text-center p-4 bg-green-50 dark:bg-green-950/30 rounded-lg">
                <Play className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <h4 className="font-medium mb-1">Sessions live</h4>
                <p className="text-sm text-muted-foreground">Webinaires, live coding, Q&A avec experts</p>
              </div>
              <div className="text-center p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
                <Download className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h4 className="font-medium mb-1">Ressources premium</h4>
                <p className="text-sm text-muted-foreground">Templates, datasets, modèles pré-entraînés</p>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <Button className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                Rejoindre la communauté (2500+ membres)
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Conclusion enrichie */}
        <CourseConclusion
          title="🎓 Félicitations ! Vous êtes maintenant un Expert DL Production-Ready"
          description="Votre transformation est complète : de simple curieux à architecte de l'intelligence artificielle. Voici le bilan de votre parcours extraordinaire et vos prochains défis."
          learningPoints={[
            "🔧 Maîtrise complète de l'écosystème DL (PyTorch, TensorFlow, MLflow, etc.)",
            "🏗️ Capacité à concevoir des architectures robustes et scalables",
            "🚀 Compétences en déploiement production et MLOps avancés",
            "🔍 Expertise en debugging, optimisation et monitoring de modèles",
            "📊 Compréhension approfondie des métriques business et techniques",
            "🎯 45+ projets pratiques dans votre portfolio",
            "🌟 Réseau professionnel dans la communauté DL"
          ]}
          nextSteps={[
            "🚀 Contribuer à des projets open source (Hugging Face, PyTorch, etc.)",
            "📝 Publier vos recherches dans des conférences (NeurIPS, ICML, ICLR)",
            "💼 Postuler pour des postes d'ML Engineer Senior / Staff",
            "🎓 Considérer un doctorat en IA si la recherche vous passionne",
            "🏢 Lancer votre startup IA ou rejoindre une scale-up innovante",
            "👥 Mentorer la prochaine génération de praticiens DL",
            "🌍 Participer à des projets d'IA à impact social positif"
          ]}
        />

        {/* Call-to-action final */}
        <div className="max-w-2xl mx-auto text-center bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-2xl p-8 border border-primary/20">
          <h3 className="text-2xl font-bold mb-4">🚀 Prêt à transformer votre carrière ?</h3>
          <p className="text-muted-foreground mb-6">
            Le deep learning n'attend pas. Chaque jour, de nouvelles opportunités se créent, 
            de nouveaux défis émergent, de nouvelles frontières sont repoussées.
          </p>
          <p className="font-medium mb-6 text-primary">
            La question n'est pas de savoir si l'IA va transformer votre secteur, 
            mais si vous serez acteur ou spectateur de cette transformation.
          </p>
          <Button size="lg" className="mr-4">
            Commencer maintenant
          </Button>
          <Button variant="outline" size="lg">
            Télécharger le programme complet
          </Button>
        </div>
      </section>
    </>
  );
};

export default DeepLearningPratique;
