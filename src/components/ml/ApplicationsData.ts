
import React from 'react';
import { Brain, Database, Shield, HeartPulse, Building, Bot, Car, VideoIcon, ShoppingBag, School } from 'lucide-react';

export interface ApplicationExample {
  title: string;
  description: string;
  technologies: string[];
  benefits: string[];
  challenges: string[];
}

export interface AIApplication {
  id: string;
  name: string;
  icon: string; // Changed to string to store icon name
  iconComponent: React.ElementType; // Added to store the actual component reference
  description: string;
  examples: ApplicationExample[];
}

export const applicationsData: AIApplication[] = [
  {
    id: "healthcare",
    name: "Santé",
    icon: "HeartPulse",
    iconComponent: HeartPulse,
    description: "L'IA révolutionne le secteur médical en améliorant le diagnostic, la découverte de médicaments et les soins personnalisés.",
    examples: [
      {
        title: "Détection précoce de maladies",
        description: "Algorithmes qui identifient les signes précoces de maladies comme le cancer à partir d'images médicales.",
        technologies: ["Vision par ordinateur", "CNN", "Deep Learning"],
        benefits: ["Diagnostics plus rapides", "Réduction des erreurs humaines", "Accessibilité accrue aux expertises médicales"],
        challenges: ["Explications des décisions", "Intégration avec les systèmes existants", "Questions réglementaires"]
      },
      {
        title: "Découverte de médicaments",
        description: "Modèles prédictifs qui accélèrent la découverte et le développement de nouveaux traitements.",
        technologies: ["Modèles génératifs", "Apprentissage par renforcement", "Simulation moléculaire"],
        benefits: ["Réduction significative des délais de R&D", "Baisse des coûts de développement", "Personnalisation des traitements"],
        challenges: ["Validation clinique", "Éthique et responsabilité", "Grandes quantités de données nécessaires"]
      }
    ]
  },
  {
    id: "finance",
    name: "Finance",
    icon: "Building",
    iconComponent: Building,
    description: "L'IA transforme les services financiers avec la détection de fraude, les investissements algorithmiques et l'analyse de risque.",
    examples: [
      {
        title: "Détection de fraudes",
        description: "Systèmes qui identifient les transactions suspectes en temps réel en analysant les comportements et tendances.",
        technologies: ["Apprentissage non supervisé", "Détection d'anomalies", "Analyse de graphes"],
        benefits: ["Réduction des pertes financières", "Protection client améliorée", "Adaptation aux nouvelles méthodes de fraude"],
        challenges: ["Faux positifs", "Confidentialité des données", "Complexité technique"]
      },
      {
        title: "Trading algorithmique",
        description: "Modèles prédictifs qui analysent les marchés financiers pour guider les décisions d'investissement.",
        technologies: ["Apprentissage par renforcement", "Séries temporelles", "NLP pour l'analyse de sentiment"],
        benefits: ["Réactivité accrue aux évolutions du marché", "Réduction des biais émotionnels", "Diversification optimisée"],
        challenges: ["Risques systémiques", "Suroptimisation", "Dépendance technologique"]
      }
    ]
  },
  {
    id: "automotive",
    name: "Automobile",
    icon: "Car",
    iconComponent: Car,
    description: "L'IA permet le développement de véhicules autonomes et de systèmes d'assistance à la conduite avancés.",
    examples: [
      {
        title: "Conduite autonome",
        description: "Systèmes intégrant de multiples capteurs et algorithmes pour permettre aux véhicules de naviguer sans intervention humaine.",
        technologies: ["Vision par ordinateur", "Fusion de capteurs", "Apprentissage par renforcement"],
        benefits: ["Réduction des accidents", "Optimisation du trafic", "Accessibilité pour tous"],
        challenges: ["Sécurité critique", "Environnements imprévisibles", "Questions légales et éthiques"]
      },
      {
        title: "Maintenance prédictive",
        description: "Prédiction des pannes et problèmes mécaniques avant qu'ils ne surviennent pour optimiser la maintenance.",
        technologies: ["IoT", "Analyse prédictive", "Traitement de séries temporelles"],
        benefits: ["Réduction des coûts d'entretien", "Fiabilité améliorée", "Durée de vie prolongée des véhicules"],
        challenges: ["Intégration avec les systèmes existants", "Précision des prédictions", "Coûts d'implémentation"]
      }
    ]
  },
  {
    id: "entertainment",
    name: "Divertissement",
    icon: "VideoIcon",
    iconComponent: VideoIcon,
    description: "L'IA révolutionne la création et la personnalisation du contenu dans l'industrie du divertissement.",
    examples: [
      {
        title: "Recommandation de contenu",
        description: "Algorithmes qui analysent les préférences des utilisateurs pour suggérer des films, séries et musiques pertinents.",
        technologies: ["Filtrage collaboratif", "Deep Learning", "Analyse comportementale"],
        benefits: ["Engagement utilisateur accru", "Découverte de contenu facilité", "Fidélisation améliorée"],
        challenges: ["Bulles de filtres", "Diversité des recommandations", "Vie privée"]
      },
      {
        title: "Création de contenu",
        description: "IA générative capable de créer des images, de la musique, des textes et même des séquences vidéo.",
        technologies: ["GAN", "Transformers", "Réseaux neuronaux récurrents"],
        benefits: ["Nouvelles formes d'expression artistique", "Production accélérée", "Réduction des coûts"],
        challenges: ["Droits d'auteur", "Authenticité", "Impact sur les créateurs humains"]
      }
    ]
  },
  {
    id: "retail",
    name: "Commerce",
    icon: "ShoppingBag",
    iconComponent: ShoppingBag,
    description: "L'IA transforme l'expérience d'achat avec la personnalisation, l'optimisation des stocks et le service client automatisé.",
    examples: [
      {
        title: "Personnalisation des achats",
        description: "Systèmes qui adaptent l'expérience d'achat en fonction du comportement et des préférences de chaque client.",
        technologies: ["Apprentissage automatique", "Analyse en temps réel", "NLP"],
        benefits: ["Augmentation des ventes", "Satisfaction client améliorée", "Fidélisation accrue"],
        challenges: ["Équilibre entre personnalisation et vie privée", "Intégration multicanal", "Qualité des données"]
      },
      {
        title: "Gestion intelligente des stocks",
        description: "Prédiction de la demande et optimisation des niveaux de stock pour réduire les coûts et éviter les ruptures.",
        technologies: ["Prévision de séries temporelles", "Optimisation", "Big Data"],
        benefits: ["Réduction des coûts de stockage", "Minimisation des ruptures", "Chaîne d'approvisionnement optimisée"],
        challenges: ["Facteurs externes imprévisibles", "Complexité des chaînes logistiques", "Qualité des données historiques"]
      }
    ]
  },
  {
    id: "education",
    name: "Éducation",
    icon: "School",
    iconComponent: School,
    description: "L'IA permet de personnaliser l'apprentissage, d'automatiser les tâches administratives et d'améliorer l'accès à l'éducation.",
    examples: [
      {
        title: "Apprentissage adaptatif",
        description: "Plateformes qui adaptent le contenu éducatif au rythme et au style d'apprentissage de chaque étudiant.",
        technologies: ["Apprentissage automatique", "Analyse comportementale", "Systèmes de recommandation"],
        benefits: ["Efficacité d'apprentissage améliorée", "Motivation accrue", "Identification précoce des difficultés"],
        challenges: ["Équité et accès", "Protection des données des mineurs", "Intégration pédagogique"]
      },
      {
        title: "Tutorat intelligent",
        description: "Assistants IA qui fournissent un soutien personnalisé et des explications adaptées aux besoins de l'apprenant.",
        technologies: ["NLP", "Systèmes de dialogue", "Modélisation cognitive"],
        benefits: ["Soutien disponible 24/7", "Feedback immédiat", "Adaptation aux différents styles d'apprentissage"],
        challenges: ["Limitations dans la compréhension profonde", "Dépendance technologique", "Rôle des enseignants humains"]
      }
    ]
  },
  {
    id: "security",
    name: "Cybersécurité",
    icon: "Shield",
    iconComponent: Shield,
    description: "L'IA renforce la sécurité informatique avec la détection de menaces, l'analyse comportementale et la réponse automatisée.",
    examples: [
      {
        title: "Détection d'intrusions",
        description: "Systèmes qui identifient les comportements suspects et les tentatives d'accès non autorisés en temps réel.",
        technologies: ["Apprentissage non supervisé", "Détection d'anomalies", "Analyse de réseau"],
        benefits: ["Détection rapide des menaces", "Réduction des faux positifs", "Adaptation aux nouvelles menaces"],
        challenges: ["Course technologique avec les attaquants", "Volumes massifs de données à traiter", "Complexité des attaques modernes"]
      },
      {
        title: "Analyse prédictive des menaces",
        description: "Anticipation des vulnérabilités et des attaques potentielles avant qu'elles ne se manifestent.",
        technologies: ["Big Data", "Analyse comportementale", "Apprentissage profond"],
        benefits: ["Approche proactive", "Protection continue", "Réduction des risques"],
        challenges: ["Précision des prédictions", "Ressources nécessaires", "Complexité d'implémentation"]
      }
    ]
  }
];
