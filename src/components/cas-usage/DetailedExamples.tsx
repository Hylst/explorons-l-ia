
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

interface DetailedExample {
  title: string;
  sector: string;
  description: string;
  impact: string;
  technology: string;
  realWorldCase: string;
  image?: string;
}

const detailedExamples: DetailedExample[] = [
  {
    title: "Diagnostic médical assisté par IA",
    sector: "Santé",
    description: "Utilisation d'algorithmes de deep learning pour analyser des images médicales (radiographies, IRM, scanners) et détecter des anomalies avec une précision égale ou supérieure à celle des radiologues humains.",
    impact: "Détection précoce des cancers, réduction des erreurs de diagnostic, accélération du traitement des examens médicaux, amélioration de l'accès aux soins dans les régions sous-desservies.",
    technology: "Réseaux de neurones convolutifs (CNN), vision par ordinateur, apprentissage par transfert, augmentation de données",
    realWorldCase: "L'outil IDx-DR approuvé par la FDA qui détecte la rétinopathie diabétique sans intervention humaine, avec une sensibilité de plus de 87%. En 2025, il est utilisé dans plus de 1000 cliniques à travers le monde.",
    image: "/pics/diagnostic.jpg"
  },
  {
    title: "Systèmes d'alerte précoce en finance",
    sector: "Finance",
    description: "Surveillance continue des transactions et des activités financières pour détecter les comportements frauduleux ou les anomalies avant qu'ils ne causent des dommages significatifs aux institutions et aux clients.",
    impact: "Réduction des pertes dues aux fraudes de plus de 60%, protection des consommateurs contre les vols d'identité, maintien de l'intégrité des systèmes financiers et détection de nouveaux schémas frauduleux.",
    technology: "Apprentissage par renforcement, détection d'anomalies en temps réel, analyse comportementale, graphes de connaissance",
    realWorldCase: "Mastercard utilise l'IA pour analyser plus de 75 milliards de transactions annuelles, réduisant les faux positifs de 50% dans la détection de fraudes tout en améliorant la précision de 30% depuis 2022.",
    image: "/pics/alert_systems.jpg"
  },
  {
    title: "Assistants pédagogiques personnalisés",
    sector: "Éducation",
    description: "Plateformes éducatives qui s'adaptent au rythme, style d'apprentissage et niveau de compétence de chaque étudiant, offrant un contenu et des exercices personnalisés pour maximiser l'efficacité de l'apprentissage.",
    impact: "Amélioration des résultats d'apprentissage de 25 à 40%, réduction des abandons scolaires, soutien aux enseignants dans la différenciation pédagogique, identification précoce des difficultés d'apprentissage.",
    technology: "Systèmes de tutorat intelligents, modèles prédictifs, traitement du langage naturel, analyse de progression",
    realWorldCase: "Duolingo utilise l'IA pour adapter ses leçons de langue en fonction des performances de l'utilisateur, augmentant les taux de rétention de 12% et l'efficacité d'apprentissage de 28% selon une étude indépendante de 2024.",
    image: "/pics/educative.jpg"
  },
  {
    title: "Maintenance prédictive industrielle",
    sector: "Industrie",
    description: "Analyse des données des capteurs des équipements industriels pour prédire les pannes avant qu'elles ne se produisent, permettant une maintenance proactive plutôt que réactive et réduisant les temps d'arrêt coûteux.",
    impact: "Réduction des temps d'arrêt non planifiés jusqu'à 50%, optimisation des coûts de maintenance de 10 à 40%, prolongation de la durée de vie des équipements et amélioration de la sécurité des installations.",
    technology: "Internet des objets (IoT), analyse prédictive, apprentissage automatique, jumeaux numériques, edge computing",
    realWorldCase: "Siemens a réduit les temps d'arrêt non planifiés de 30% dans ses usines de fabrication grâce à ses systèmes de maintenance prédictive, économisant plus de 25 millions d'euros annuellement sur l'ensemble de ses installations.",
    image: "/pics/industrial.jpg"
  },
  {
    title: "Optimisation logistique du dernier kilomètre",
    sector: "Logistique",
    description: "Algorithmes qui optimisent les itinéraires de livraison en tenant compte du trafic en temps réel, des conditions météorologiques, des préférences des clients et de nombreux autres facteurs pour améliorer l'efficacité des livraisons.",
    impact: "Réduction des coûts de livraison de 15 à 20%, diminution de l'empreinte carbone, amélioration de la satisfaction client avec des fenêtres de livraison plus précises et réduction des distances parcourues.",
    technology: "Optimisation combinatoire, algorithmes génétiques, apprentissage par renforcement, GPS et cartographie avancée",
    realWorldCase: "UPS économise annuellement plus de 10 millions de gallons de carburant grâce à son système ORION qui optimise les itinéraires des chauffeurs-livreurs, réduisant les émissions de CO2 de 100 000 tonnes par an.",
    image: "/pics/logistics.jpg"
  },
  {
    title: "Analyse juridique automatisée",
    sector: "Juridique",
    description: "Outils d'IA qui analysent des milliers de documents juridiques pour extraire des informations pertinentes, identifier des précédents et évaluer les risques contractuels, accélérant considérablement le travail des professionnels du droit.",
    impact: "Accélération de la recherche juridique jusqu'à 70%, réduction des coûts pour les clients, amélioration de la précision des analyses et démocratisation de l'accès aux services juridiques.",
    technology: "Traitement du langage naturel (NLP), extraction d'information, classification de texte, systèmes de raisonnement",
    realWorldCase: "JPMorgan Chase utilise le système COIN qui analyse les contrats en quelques secondes, un travail qui prenait auparavant 360 000 heures d'avocat par an, avec une précision dépassant 95% pour certaines tâches d'extraction d'information.",
    image: "/pics/juridic.jpg"
  },
  {
    title: "Agriculture de précision",
    sector: "Agriculture",
    description: "Utilisation de l'IA pour analyser les données des capteurs, les images satellites et les prévisions météorologiques afin d'optimiser l'irrigation, la fertilisation et les traitements des cultures à l'échelle de la plante.",
    impact: "Augmentation des rendements agricoles de 10 à 15%, réduction de l'utilisation d'eau jusqu'à 30%, diminution des intrants chimiques de 20%, amélioration de la durabilité et de la rentabilité agricole.",
    technology: "Vision par ordinateur, apprentissage automatique, IoT agricole, traitement d'images satellites, drones",
    realWorldCase: "Le système de Blue River Technology (acquis par John Deere) utilise la vision par ordinateur pour pulvériser des herbicides uniquement sur les mauvaises herbes, réduisant l'utilisation de produits chimiques de 90% tout en maintenant l'efficacité.",
    image: "/pics/agri.jpg"
  },
  {
    title: "Assistant vocal pour personnes handicapées",
    sector: "Accessibilité",
    description: "Systèmes d'IA qui interprètent la parole, les gestes ou les mouvements oculaires pour permettre aux personnes handicapées de contrôler des appareils, de communiquer et d'interagir avec leur environnement.",
    impact: "Autonomie accrue pour les personnes à mobilité réduite, inclusion numérique, amélioration de la qualité de vie et possibilités d'emploi élargies pour les personnes handicapées.",
    technology: "Reconnaissance vocale, suivi oculaire, interfaces cerveau-machine, traitement du signal, synthèse vocale",
    realWorldCase: "Le projet ORBIT de Microsoft utilise l'IA pour transformer les mouvements oculaires en commandes, permettant à des personnes paralysées de contrôler des ordinateurs et appareils domestiques avec une précision de 98%.",
    image: "/pics/vocal.jpg"
  }
];

const DetailedExamples: React.FC = () => {
  return (
    <div className="space-y-8 mt-10">
      {detailedExamples.map((example, index) => (
        <motion.div
          key={example.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <Card className="mb-8 overflow-hidden border-primary/10">
            <CardHeader className="bg-primary/5 border-b border-primary/10">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl font-semibold">{example.title}</CardTitle>
                  <CardDescription className="mt-1">Secteur: {example.sector}</CardDescription>
                </div>
                <Badge variant="outline" className="bg-primary/10 text-primary">
                  Cas concret
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {example.image && (
                  <div className="rounded-lg overflow-hidden h-64">
                    <img 
                      src={example.image} 
                      alt={`Illustration: ${example.title}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium uppercase text-muted-foreground mb-1">Description</h4>
                    <p className="text-sm">{example.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-secondary/10 p-4 rounded-lg">
                      <h4 className="text-sm font-medium text-primary mb-2">Impact</h4>
                      <p className="text-sm">{example.impact}</p>
                    </div>
                    
                    <div className="bg-secondary/10 p-4 rounded-lg">
                      <h4 className="text-sm font-medium text-primary mb-2">Technologies</h4>
                      <p className="text-sm">{example.technology}</p>
                    </div>
                    
                    <div className="bg-secondary/10 p-4 rounded-lg">
                      <h4 className="text-sm font-medium text-primary mb-2">Exemple réel</h4>
                      <p className="text-sm">{example.realWorldCase}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default DetailedExamples;
