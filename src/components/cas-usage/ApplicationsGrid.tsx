
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileVideo, Bot, Zap, Factory, Network, Brain, CheckCircle,
  MessageCircle, Camera, Search, CloudLightning, Sparkles, Database,
  BarChart
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface ApplicationType {
  name: string;
  icon: React.ReactNode;
  description: string;
  examples: string[];
}

const applications: ApplicationType[] = [
  {
    name: "Reconnaissance d'images",
    icon: <Camera className="h-5 w-5" />,
    description: "Identification et classification d'objets, de personnes ou de scènes dans des images et vidéos avec une précision parfois supérieure à celle des humains.",
    examples: [
      "Diagnostic médical par analyse d'images radiologiques",
      "Reconnaissance faciale pour la sécurité et l'authentification",
      "Contrôle qualité automatisé dans les chaînes de production",
      "Identification d'espèces animales et végétales",
      "Analyse satellite pour l'agriculture et l'urbanisme"
    ]
  },
  {
    name: "Traitement du langage naturel",
    icon: <MessageCircle className="h-5 w-5" />,
    description: "Compréhension, génération et traduction de textes et de la parole humaine, permettant des interactions homme-machine plus naturelles.",
    examples: [
      "Assistants virtuels comme Gemini, Claude ou GPT",
      "Analyse des sentiments dans les réseaux sociaux",
      "Traduction automatique et sous-titrage en temps réel",
      "Résumé automatique de longs documents",
      "Génération de rapports à partir de données structurées"
    ]
  },
  {
    name: "Systèmes de recommandation",
    icon: <Zap className="h-5 w-5" />,
    description: "Prédiction des préférences utilisateurs pour suggérer des produits ou contenus pertinents, créant des expériences personnalisées.",
    examples: [
      "Recommandations de films sur Netflix ou produits sur Amazon",
      "Suggestions personnalisées de musique sur Spotify",
      "Fil d'actualité personnalisé sur les réseaux sociaux",
      "Recommandations d'articles scientifiques ou académiques",
      "Suggestions de parcours d'apprentissage adaptatifs"
    ]
  },
  {
    name: "Robotique intelligente",
    icon: <Factory className="h-5 w-5" />,
    description: "Robots dotés de capacités de perception, de prise de décision et d'adaptation, capables d'interagir avec leur environnement.",
    examples: [
      "Robots autonomes dans les entrepôts logistiques",
      "Robots chirurgicaux assistants pour opérations de précision",
      "Véhicules autonomes et drones de livraison",
      "Robots d'assistance personnelle pour les personnes âgées",
      "Systèmes automatisés d'inspection d'infrastructures"
    ]
  },
  {
    name: "Prévision et optimisation",
    icon: <Network className="h-5 w-5" />,
    description: "Analyse de données historiques pour prédire des tendances et optimiser des processus, améliorant l'efficacité opérationnelle.",
    examples: [
      "Prévision de la demande pour la gestion des stocks",
      "Maintenance prédictive dans l'industrie",
      "Optimisation de la consommation énergétique des bâtiments",
      "Prédiction des défaillances dans les systèmes critiques",
      "Optimisation des grilles tarifaires en fonction de la demande"
    ]
  },
  {
    name: "Assistance à la décision",
    icon: <Brain className="h-5 w-5" />,
    description: "Systèmes d'aide à la prise de décision basés sur l'analyse de données complexes, supportant les décideurs dans divers domaines.",
    examples: [
      "Aide au diagnostic médical et plans de traitement",
      "Évaluation des risques dans les assurances et la finance",
      "Analyse prédictive pour les décisions commerciales stratégiques",
      "Optimisation des chaînes logistiques mondiales",
      "Systèmes d'aide à la décision judiciaire"
    ]
  },
  {
    name: "Recherche d'information",
    icon: <Search className="h-5 w-5" />,
    description: "Systèmes capables de comprendre des requêtes complexes et d'extraire des informations pertinentes de vastes ensembles de données.",
    examples: [
      "Moteurs de recherche sémantiques comprenant l'intention",
      "Assistants de recherche scientifique et académique",
      "Analyse et extraction d'informations de documents légaux",
      "Systèmes de questions-réponses basés sur des bases de connaissances",
      "Recherche multimodale combinant texte et images"
    ]
  },
  {
    name: "Génération de contenu",
    icon: <Sparkles className="h-5 w-5" />,
    description: "Création automatique de textes, images, musique et vidéos avec un niveau de qualité et de personnalisation croissant.",
    examples: [
      "Génération d'articles, de rapports et de contenus marketing",
      "Création d'images et d'illustrations sur mesure",
      "Composition musicale assistée par IA",
      "Génération de vidéos explicatives à partir de textes",
      "Création de voix off réalistes pour divers contenus"
    ]
  },
  {
    name: "Analyse prédictive",
    icon: <BarChart className="h-5 w-5" />,
    description: "Utilisation de données historiques pour prévoir les tendances futures et anticiper les comportements ou événements.",
    examples: [
      "Prévision des ventes et de la demande des consommateurs",
      "Anticipation des tendances des marchés financiers",
      "Prédiction des risques de santé publique et épidémies",
      "Modélisation des comportements clients et prévention de l'attrition",
      "Prévision des besoins en ressources pour les entreprises"
    ]
  },
  {
    name: "Informatique en nuage",
    icon: <CloudLightning className="h-5 w-5" />,
    description: "Optimisation des infrastructures cloud avec des systèmes d'IA qui améliorent l'efficacité, la sécurité et les performances.",
    examples: [
      "Allocation dynamique des ressources selon les besoins",
      "Détection et prévention des intrusions en temps réel",
      "Optimisation de la consommation énergétique des centres de données",
      "Prédiction et gestion des défaillances d'infrastructure",
      "Équilibrage de charge intelligent entre serveurs"
    ]
  },
  {
    name: "IA pour la recherche",
    icon: <Database className="h-5 w-5" />,
    description: "Accélération de la recherche scientifique par l'analyse de données massives et la modélisation complexe de phénomènes.",
    examples: [
      "Découverte de médicaments et simulation moléculaire",
      "Analyse du génome et recherche génétique",
      "Modélisation climatique et prévision environnementale",
      "Recherche en physique des particules et astrophysique",
      "Simulation de matériaux avancés et nanotechnologies"
    ]
  },
  {
    name: "Interfaces conversationnelles",
    icon: <Bot className="h-5 w-5" />,
    description: "Agents conversationnels capables d'interactions naturelles avec les humains dans divers contextes et pour différentes tâches.",
    examples: [
      "Assistants personnels intégrés aux appareils mobiles",
      "Chatbots de service client disponibles 24/7",
      "Assistants virtuels spécialisés dans des domaines complexes",
      "Interfaces vocales pour l'accessibilité numérique",
      "Agents conversationnels pour la formation et l'éducation"
    ]
  }
];

const ApplicationsGrid: React.FC<{ activeTab: string }> = ({ activeTab }) => {
  if (activeTab !== "applications") return null;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {applications.map((application, index) => (
        <motion.div
          key={application.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="h-full border-primary/10 hover:border-primary/30 transition-all hover:shadow-md">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  {application.icon}
                </div>
                <CardTitle className="text-lg">{application.name}</CardTitle>
              </div>
              <CardDescription>{application.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <h4 className="text-sm font-medium mb-2">Applications concrètes:</h4>
              <ul className="space-y-1">
                {application.examples.map((example, i) => (
                  <li key={i} className="text-sm flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{example}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default ApplicationsGrid;
