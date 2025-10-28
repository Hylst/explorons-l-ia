import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, XCircle, BookOpen } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Badge } from "@/components/ui/badge";

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

const quizQuestions: Question[] = [
  // Fondamentaux de l'IA (12 questions)
  {
    id: 1,
    text: "Quelle est l'année généralement considérée comme marquant la naissance de l'IA?",
    options: ["1943", "1956", "1965", "1970"],
    correctAnswer: 1,
    explanation: "La conférence de Dartmouth en 1956 est considérée comme l'événement fondateur du domaine de l'intelligence artificielle.",
    category: "Fondamentaux"
  },
  {
    id: 2,
    text: "Qui est l'auteur du test de Turing?",
    options: ["John McCarthy", "Alan Turing", "Marvin Minsky", "Claude Shannon"],
    correctAnswer: 1,
    explanation: "Alan Turing a proposé ce test en 1950 pour évaluer la capacité d'une machine à imiter le comportement intelligent humain.",
    category: "Fondamentaux"
  },
  {
    id: 3,
    text: "Qu'est-ce qu'un réseau de neurones artificiels?",
    options: [
      "Un système expert basé sur des règles", 
      "Un modèle inspiré du cerveau humain avec des couches de neurones interconnectés", 
      "Un algorithme de clustering de données",
      "Un système de stockage de connaissances"
    ],
    correctAnswer: 1,
    explanation: "Les réseaux de neurones sont des modèles inspirés du fonctionnement des neurones biologiques, organisés en couches interconnectées.",
    category: "Fondamentaux"
  },
  {
    id: 4,
    text: "Qu'est-ce que l'apprentissage profond (deep learning)?",
    options: [
      "Un type d'IA qui imite parfaitement la conscience humaine", 
      "Un sous-ensemble de l'apprentissage automatique utilisant des réseaux de neurones à plusieurs couches", 
      "Une méthode pour stocker de grandes quantités de données",
      "Une technique pour programmer des robots"
    ],
    correctAnswer: 1,
    explanation: "Le deep learning est une branche de l'apprentissage automatique utilisant des réseaux de neurones comportant de nombreuses couches (d'où le terme 'profond').",
    category: "Fondamentaux"
  },
  {
    id: 5,
    text: "Que signifie l'acronyme AGI dans le contexte de l'IA?",
    options: ["Artificial Global Intelligence", "Artificial General Intelligence", "Advanced Gaming Intelligence", "Automated General Interface"],
    correctAnswer: 1,
    explanation: "AGI signifie Artificial General Intelligence, une forme d'IA qui égalerait ou dépasserait l'intelligence humaine dans tous les domaines.",
    category: "Fondamentaux"
  },
  {
    id: 6,
    text: "Quelle est la différence principale entre l'IA faible et l'IA forte?",
    options: [
      "La puissance de calcul requise", 
      "L'IA faible est spécialisée, l'IA forte a une intelligence générale", 
      "Le coût de développement",
      "La vitesse de traitement"
    ],
    correctAnswer: 1,
    explanation: "L'IA faible est conçue pour des tâches spécifiques, tandis que l'IA forte aurait une intelligence générale comparable à celle des humains.",
    category: "Fondamentaux"
  },
  {
    id: 7,
    text: "Qu'est-ce que l'apprentissage par renforcement?",
    options: [
      "Un type d'apprentissage où l'IA est récompensée pour les bonnes décisions", 
      "Une méthode pour renforcer les connexions neuronales", 
      "Une technique pour améliorer les performances matérielles",
      "Un processus pour valider les données d'entraînement"
    ],
    correctAnswer: 0,
    explanation: "L'apprentissage par renforcement est une méthode où un agent apprend à prendre des décisions en recevant des récompenses ou des pénalités selon ses actions.",
    category: "Fondamentaux"
  },
  {
    id: 8,
    text: "Qu'est-ce qu'un algorithme d'apprentissage supervisé?",
    options: [
      "Un algorithme qui fonctionne sans données d'entraînement",
      "Un algorithme qui apprend à partir d'exemples étiquetés",
      "Un algorithme qui surveille d'autres algorithmes",
      "Un algorithme qui nécessite une supervision humaine constante"
    ],
    correctAnswer: 1,
    explanation: "L'apprentissage supervisé utilise des données d'entraînement étiquetées pour apprendre à faire des prédictions sur de nouvelles données.",
    category: "Fondamentaux"
  },
  {
    id: 9,
    text: "Qu'est-ce que l'overfitting en machine learning?",
    options: [
      "Quand un modèle a trop de paramètres",
      "Quand un modèle mémorise les données d'entraînement au lieu de généraliser",
      "Quand un modèle est trop complexe à comprendre",
      "Quand un modèle prend trop de temps à s'entraîner"
    ],
    correctAnswer: 1,
    explanation: "L'overfitting se produit quand un modèle apprend par cœur les données d'entraînement et perd sa capacité à généraliser sur de nouvelles données.",
    category: "Fondamentaux"
  },
  {
    id: 10,
    text: "Qu'est-ce qu'un ensemble de validation en machine learning?",
    options: [
      "Des données utilisées pour entraîner le modèle",
      "Des données utilisées pour évaluer les performances du modèle pendant l'entraînement",
      "Des données utilisées pour tester le modèle final",
      "Des données utilisées pour nettoyer le dataset"
    ],
    correctAnswer: 1,
    explanation: "L'ensemble de validation est utilisé pour évaluer et ajuster les hyperparamètres du modèle pendant l'entraînement.",
    category: "Fondamentaux"
  },
  {
    id: 11,
    text: "Qu'est-ce que la rétropropagation dans les réseaux de neurones?",
    options: [
      "Une méthode pour propager les données vers l'avant",
      "Un algorithme pour ajuster les poids en calculant les gradients de l'erreur",
      "Une technique pour réduire la taille du réseau",
      "Un processus pour valider les résultats"
    ],
    correctAnswer: 1,
    explanation: "La rétropropagation est l'algorithme standard pour entraîner les réseaux de neurones en calculant les gradients de l'erreur et en ajustant les poids.",
    category: "Fondamentaux"
  },
  {
    id: 12,
    text: "Qu'est-ce qu'un hyperparamètre en machine learning?",
    options: [
      "Un paramètre très important du modèle",
      "Un paramètre qui contrôle le processus d'apprentissage",
      "Un paramètre qui change pendant l'entraînement",
      "Un paramètre calculé automatiquement"
    ],
    correctAnswer: 1,
    explanation: "Les hyperparamètres sont des configurations qui contrôlent le processus d'apprentissage (comme le taux d'apprentissage) et doivent être définis avant l'entraînement.",
    category: "Fondamentaux"
  },

  // Traitement du Langage Naturel (12 questions)
  {
    id: 13,
    text: "Que signifie l'acronyme NLP dans le contexte de l'IA?",
    options: [
      "Natural Language Processing", 
      "Neural Learning Protocol", 
      "Network Layer Protocol",
      "New Learning Paradigm"
    ],
    correctAnswer: 0,
    explanation: "NLP signifie Natural Language Processing (Traitement du Langage Naturel), une branche de l'IA qui traite les interactions entre les ordinateurs et le langage humain.",
    category: "NLP"
  },
  {
    id: 14,
    text: "Quelle technique est à la base des modèles de langage comme GPT?",
    options: ["Apprentissage supervisé", "Apprentissage par renforcement", "Transformers", "Réseaux de neurones convolutifs"],
    correctAnswer: 2,
    explanation: "Les transformers, introduits en 2017, sont l'architecture fondamentale des grands modèles de langage comme GPT.",
    category: "NLP"
  },
  {
    id: 15,
    text: "Qu'est-ce que l'IA multimodale?",
    options: [
      "Une IA qui peut fonctionner sur différents systèmes d'exploitation", 
      "Une IA qui peut traiter et combiner différents types de données (texte, images, son)", 
      "Une IA qui fonctionne avec plusieurs utilisateurs simultanément",
      "Une IA qui utilise plusieurs algorithmes en parallèle"
    ],
    correctAnswer: 1,
    explanation: "L'IA multimodale peut traiter et comprendre différents types d'entrées comme le texte, les images et le son, souvent simultanément.",
    category: "NLP"
  },
  {
    id: 16,
    text: "Qu'est-ce qu'un token en NLP?",
    options: [
      "Une clé d'authentification",
      "Une unité de base pour traiter le texte (mot, sous-mot ou caractère)",
      "Un type de réseau de neurones",
      "Une mesure de performance"
    ],
    correctAnswer: 1,
    explanation: "Un token est une unité de base utilisée pour diviser et traiter le texte, pouvant être un mot, un sous-mot ou même un caractère.",
    category: "NLP"
  },
  {
    id: 17,
    text: "Qu'est-ce que l'attention dans les modèles Transformer?",
    options: [
      "La capacité du modèle à se concentrer",
      "Un mécanisme qui permet au modèle de pondérer l'importance des différents éléments d'entrée",
      "Une technique d'optimisation",
      "Un type de fonction d'activation"
    ],
    correctAnswer: 1,
    explanation: "Le mécanisme d'attention permet aux modèles de pondérer l'importance relative des différents éléments d'une séquence d'entrée.",
    category: "NLP"
  },
  {
    id: 18,
    text: "Qu'est-ce que BERT?",
    options: [
      "Un type de robot",
      "Un modèle de langage bidirectionnel pré-entraîné",
      "Un langage de programmation",
      "Un algorithme de classification"
    ],
    correctAnswer: 1,
    explanation: "BERT (Bidirectional Encoder Representations from Transformers) est un modèle qui comprend le contexte des mots en regardant à la fois à gauche et à droite.",
    category: "NLP"
  },
  {
    id: 19,
    text: "Qu'est-ce que le fine-tuning en NLP?",
    options: [
      "L'optimisation du matériel",
      "L'adaptation d'un modèle pré-entraîné à une tâche spécifique",
      "Le réglage de la vitesse de traitement",
      "La correction des erreurs de syntaxe"
    ],
    correctAnswer: 1,
    explanation: "Le fine-tuning consiste à adapter un modèle déjà pré-entraîné sur de grandes quantités de données à une tâche ou un domaine spécifique.",
    category: "NLP"
  },
  {
    id: 20,
    text: "Qu'est-ce qu'un embedding en NLP?",
    options: [
      "Une technique de compression",
      "Une représentation vectorielle dense des mots ou phrases",
      "Un type de base de données",
      "Une méthode de chiffrement"
    ],
    correctAnswer: 1,
    explanation: "Les embeddings sont des représentations vectorielles qui capturent la signification sémantique des mots ou phrases dans un espace multidimensionnel.",
    category: "NLP"
  },
  {
    id: 21,
    text: "Qu'est-ce que le RAG (Retrieval-Augmented Generation)?",
    options: [
      "Un type de réseau de neurones",
      "Une technique qui combine recherche d'information et génération de texte",
      "Un algorithme d'optimisation",
      "Une méthode de validation"
    ],
    correctAnswer: 1,
    explanation: "RAG combine la recherche d'informations pertinentes dans une base de connaissances avec la génération de texte pour produire des réponses plus précises.",
    category: "NLP"
  },
  {
    id: 22,
    text: "Qu'est-ce que la génération augmentée par récupération améliore?",
    options: [
      "La vitesse de traitement",
      "La précision factuelle et la pertinence des réponses générées",
      "La taille du modèle",
      "La consommation énergétique"
    ],
    correctAnswer: 1,
    explanation: "RAG améliore la qualité des réponses en permettant au modèle d'accéder à des informations externes et actualisées lors de la génération.",
    category: "NLP"
  },
  {
    id: 23,
    text: "Qu'est-ce que le prompt engineering?",
    options: [
      "La conception de processeurs",
      "L'art de formuler des instructions efficaces pour les modèles de langage",
      "La programmation rapide",
      "L'optimisation de code"
    ],
    correctAnswer: 1,
    explanation: "Le prompt engineering consiste à concevoir et optimiser les instructions données aux modèles de langage pour obtenir les meilleurs résultats.",
    category: "NLP"
  },
  {
    id: 24,
    text: "Qu'est-ce que la hallucination en IA?",
    options: [
      "Un bug du système",
      "Quand l'IA génère des informations fausses mais plausibles",
      "Un type de visualisation",
      "Une technique d'apprentissage"
    ],
    correctAnswer: 1,
    explanation: "Les hallucinations se produisent quand un modèle d'IA génère des informations qui semblent cohérentes mais qui sont factuellement incorrectes.",
    category: "NLP"
  },

  // Applications et Usage Quotidien (12 questions)
  {
    id: 25,
    text: "Quel est l'avantage principal des assistants vocaux comme Alexa ou Google Assistant?",
    options: [
      "Ils consomment peu d'énergie",
      "Ils permettent une interaction naturelle en langage parlé",
      "Ils sont moins chers que les autres interfaces",
      "Ils fonctionnent sans internet"
    ],
    correctAnswer: 1,
    explanation: "Les assistants vocaux révolutionnent l'interaction humain-machine en permettant une communication naturelle par la voix.",
    category: "Usage Quotidien"
  },
  {
    id: 26,
    text: "Comment l'IA améliore-t-elle les recommandations sur les plateformes de streaming?",
    options: [
      "En analysant les préférences et comportements des utilisateurs",
      "En proposant toujours les contenus les plus populaires",
      "En choisissant aléatoirement",
      "En suivant un algorithme fixe"
    ],
    correctAnswer: 0,
    explanation: "L'IA analyse les habitudes de visionnage, les évaluations et les comportements pour personnaliser les recommandations de contenu.",
    category: "Usage Quotidien"
  },
  {
    id: 27,
    text: "Dans quel domaine l'IA est-elle le plus utilisée au quotidien?",
    options: [
      "La recherche spatiale",
      "Les réseaux sociaux et moteurs de recherche",
      "L'agriculture",
      "La construction"
    ],
    correctAnswer: 1,
    explanation: "L'IA est omniprésente dans les services numériques que nous utilisons quotidiennement : recherche, réseaux sociaux, recommandations, etc.",
    category: "Usage Quotidien"
  },
  {
    id: 28,
    text: "Comment l'IA peut-elle aider dans la rédaction d'emails professionnels?",
    options: [
      "En écrivant automatiquement tous les emails",
      "En suggérant des améliorations de ton, grammaire et structure",
      "En envoyant les emails à notre place",
      "En créant de fausses adresses email"
    ],
    correctAnswer: 1,
    explanation: "L'IA peut assister la rédaction en proposant des corrections, des améliorations stylistiques et en adaptant le ton au contexte professionnel.",
    category: "Usage Quotidien"
  },
  {
    id: 29,
    text: "Quel est l'intérêt de l'IA dans les applications de navigation GPS?",
    options: [
      "Calculer uniquement la distance",
      "Optimiser les itinéraires en temps réel selon le trafic et les conditions",
      "Afficher de la publicité",
      "Consommer moins de batterie"
    ],
    correctAnswer: 1,
    explanation: "L'IA optimise les trajets en analysant en temps réel le trafic, les accidents, les travaux et les conditions météorologiques.",
    category: "Usage Quotidien"
  },
  {
    id: 30,
    text: "Comment l'IA peut-elle améliorer la gestion de photos personnelles?",
    options: [
      "En supprimant automatiquement les photos",
      "En organisant, étiquetant et recherchant des photos par contenu",
      "En réduisant leur taille uniquement",
      "En les imprimant automatiquement"
    ],
    correctAnswer: 1,
    explanation: "L'IA peut reconnaître les visages, objets et scènes dans les photos pour les organiser automatiquement et permettre des recherches avancées.",
    category: "Usage Quotidien"
  },
  {
    id: 31,
    text: "Quel conseil important pour utiliser ChatGPT efficacement?",
    options: [
      "Lui donner des instructions très vagues",
      "Être précis dans ses demandes et donner du contexte",
      "Ne jamais relire ses réponses",
      "L'utiliser uniquement pour des questions simples"
    ],
    correctAnswer: 1,
    explanation: "Pour obtenir de meilleurs résultats avec l'IA, il faut être spécifique, donner du contexte et itérer sur ses demandes.",
    category: "Usage Quotidien"
  },
  {
    id: 32,
    text: "Comment l'IA peut-elle aider dans l'apprentissage de langues?",
    options: [
      "En remplaçant complètement les professeurs",
      "En personnalisant les exercices et en corrigeant la prononciation",
      "En traduisant tout automatiquement",
      "En mémorisant à notre place"
    ],
    correctAnswer: 1,
    explanation: "L'IA peut adapter l'apprentissage au niveau de chacun, corriger la prononciation en temps réel et proposer des exercices personnalisés.",
    category: "Usage Quotidien"
  },
  {
    id: 33,
    text: "Quelle précaution prendre avec les outils d'IA générative pour le travail?",
    options: [
      "Les utiliser sans restriction",
      "Vérifier et valider toujours les résultats générés",
      "Ne jamais les utiliser",
      "Les utiliser uniquement le weekend"
    ],
    correctAnswer: 1,
    explanation: "Il est essentiel de toujours vérifier, corriger et valider les contenus générés par l'IA avant de les utiliser professionnellement.",
    category: "Usage Quotidien"
  },
  {
    id: 34,
    text: "Comment l'IA peut-elle aider dans la planification de voyages?",
    options: [
      "En réservant automatiquement sans notre accord",
      "En suggérant des itinéraires personnalisés selon nos préférences",
      "En choisissant toujours les options les plus chères",
      "En annulant nos réservations"
    ],
    correctAnswer: 1,
    explanation: "L'IA peut analyser nos préférences, budget et contraintes pour proposer des itinéraires et recommandations de voyage personnalisés.",
    category: "Usage Quotidien"
  },
  {
    id: 35,
    text: "Quel est l'avantage de l'IA dans les applications de fitness?",
    options: [
      "Elle fait l'exercice à notre place",
      "Elle adapte les programmes d'entraînement à nos progrès et objectifs",
      "Elle compte uniquement les pas",
      "Elle remplace l'équipement sportif"
    ],
    correctAnswer: 1,
    explanation: "L'IA peut personnaliser les programmes d'entraînement, suivre les progrès et adapter les exercices selon nos capacités et objectifs.",
    category: "Usage Quotidien"
  },
  {
    id: 36,
    text: "Comment bien collaborer avec l'IA dans un projet créatif?",
    options: [
      "Laisser l'IA créer sans intervention",
      "Utiliser l'IA comme outil d'inspiration et d'assistance, pas de remplacement",
      "Éviter complètement l'IA",
      "Copier exactement ce que propose l'IA"
    ],
    correctAnswer: 1,
    explanation: "L'IA est un excellent outil créatif quand elle est utilisée comme assistant pour générer des idées, explorer des options et affiner nos concepts.",
    category: "Usage Quotidien"
  },

  // Éthique et Société (12 questions)
  {
    id: 37,
    text: "Quel principe éthique exige que les systèmes d'IA soient compréhensibles et explicables?",
    options: ["Sécurité", "Transparence", "Équité", "Responsabilité"],
    correctAnswer: 1,
    explanation: "La transparence exige que les décisions et le fonctionnement des systèmes d'IA soient compréhensibles et explicables.",
    category: "Éthique"
  },
  {
    id: 38,
    text: "Qu'est-ce que le biais algorithmique?",
    options: [
      "Un choix volontaire fait par les concepteurs d'IA", 
      "Un problème technique impossible à résoudre", 
      "Une distorsion systématique dans les résultats d'un algorithme",
      "Une erreur de programmation"
    ],
    correctAnswer: 2,
    explanation: "Le biais algorithmique est une distorsion systématique qui peut conduire à des discriminations dans les résultats d'un système d'IA.",
    category: "Éthique"
  },
  {
    id: 39,
    text: "Quelle réglementation européenne encadre l'utilisation des données personnelles?",
    options: ["AI Act", "RGPD", "Digital Services Act", "ePrivacy"],
    correctAnswer: 1,
    explanation: "Le RGPD (Règlement Général sur la Protection des Données) encadre le traitement des données personnelles en Europe.",
    category: "Éthique"
  },
  {
    id: 40,
    text: "Quelle approche de l'IA Act européen classe les systèmes d'IA selon leur niveau de risque?",
    options: [
      "Approche par secteur", 
      "Approche par technologie", 
      "Approche par risque",
      "Approche par finalité"
    ],
    correctAnswer: 2,
    explanation: "L'IA Act adopte une approche basée sur les risques, classifiant les systèmes selon leur potentiel de nuire.",
    category: "Éthique"
  },
  {
    id: 41,
    text: "Quel concept désigne la capacité à vérifier qui est responsable des décisions d'un système d'IA?",
    options: [
      "Traçabilité", 
      "Explicabilité", 
      "Imputabilité",
      "Certification"
    ],
    correctAnswer: 0,
    explanation: "La traçabilité permet de suivre et d'identifier les responsabilités dans les décisions prises par un système d'IA.",
    category: "Éthique"
  },
  {
    id: 42,
    text: "Quel risque principal pose l'IA générative concernant la désinformation?",
    options: [
      "La lenteur de génération",
      "La création facile de contenus faux mais crédibles",
      "Le coût élevé",
      "La complexité technique"
    ],
    correctAnswer: 1,
    explanation: "L'IA générative peut créer rapidement des textes, images ou vidéos fausses mais très réalistes, facilitant la désinformation.",
    category: "Éthique"
  },
  {
    id: 43,
    text: "Qu'est-ce que la fracture numérique dans le contexte de l'IA?",
    options: [
      "Un problème technique des puces",
      "L'inégalité d'accès aux technologies d'IA selon les populations",
      "La séparation entre IA et robotique",
      "Un conflit entre entreprises tech"
    ],
    correctAnswer: 1,
    explanation: "La fracture numérique désigne les inégalités d'accès et d'usage des technologies d'IA selon les régions, revenus ou générations.",
    category: "Éthique"
  },
  {
    id: 44,
    text: "Quel principe vise à s'assurer que l'IA bénéficie à tous équitablement?",
    options: ["Efficacité", "Rentabilité", "Justice et équité", "Innovation"],
    correctAnswer: 2,
    explanation: "Le principe de justice et équité vise à garantir que les bénéfices de l'IA soient distribués équitablement dans la société.",
    category: "Éthique"
  },
  {
    id: 45,
    text: "Pourquoi la diversité des équipes de développement d'IA est-elle importante?",
    options: [
      "Pour réduire les coûts",
      "Pour éviter les biais et représenter différentes perspectives",
      "Pour accélérer le développement",
      "Pour respecter les quotas"
    ],
    correctAnswer: 1,
    explanation: "Des équipes diversifiées permettent d'identifier et de réduire les biais, tout en représentant mieux la diversité des utilisateurs finaux.",
    category: "Éthique"
  },
  {
    id: 46,
    text: "Qu'est-ce que l'IA responsable?",
    options: [
      "Une IA qui ne fait jamais d'erreur",
      "Une approche qui intègre éthique, transparence et responsabilité dans le développement d'IA",
      "Une IA développée par des entreprises responsables",
      "Une IA qui consomme peu d'énergie"
    ],
    correctAnswer: 1,
    explanation: "L'IA responsable intègre des considérations éthiques, de transparence et de responsabilité dès la conception des systèmes.",
    category: "Éthique"
  },
  {
    id: 47,
    text: "Quel défi pose l'IA dans le monde du travail?",
    options: [
      "Elle est trop lente",
      "Elle nécessite une adaptation des compétences et peut automatiser certains emplois",
      "Elle est trop coûteuse",
      "Elle ne fonctionne pas bien"
    ],
    correctAnswer: 1,
    explanation: "L'IA transforme le marché du travail en automatisant certaines tâches tout en créant de nouveaux besoins de compétences.",
    category: "Éthique"
  },
  {
    id: 48,
    text: "Comment assurer la protection de la vie privée avec l'IA?",
    options: [
      "En évitant complètement l'IA",
      "En appliquant des principes de minimisation des données et de consentement éclairé",
      "En utilisant seulement des données publiques",
      "En ne collectant que des données anonymes"
    ],
    correctAnswer: 1,
    explanation: "La protection de la vie privée nécessite de minimiser la collecte de données, d'obtenir un consentement éclairé et d'appliquer des mesures de sécurité appropriées.",
    category: "Éthique"
  }
];

const IAQuiz = ({ onClose }: { onClose: () => void }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { toast } = useToast();

  // Filtrer les questions par catégorie
  const categories = Array.from(new Set(quizQuestions.map(q => q.category)));
  const filteredQuestions = selectedCategory === 'all' 
    ? quizQuestions 
    : quizQuestions.filter(q => q.category === selectedCategory);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResults(false);
    setShowFeedback(false);
  };

  const handleOptionSelect = (optionIndex: number) => {
    if (showFeedback) return;
    setSelectedOption(optionIndex);
  };

  const handleNext = () => {
    if (selectedOption === null) {
      toast({
        title: "Sélectionnez une réponse",
        description: "Veuillez choisir une option avant de continuer.",
        variant: "destructive",
      });
      return;
    }

    if (selectedOption === filteredQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setShowFeedback(true);

    // Temps d'affichage doublé : de 2000ms à 4000ms
    setTimeout(() => {
      setShowFeedback(false);
      setSelectedOption(null);
      
      if (currentQuestion < filteredQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
      }
    }, 4000); // Augmenté de 2000 à 4000ms
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResults(false);
    setShowFeedback(false);
  };

  if (showResults) {
    const percentage = Math.round((score / filteredQuestions.length) * 100);
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Résultats du quiz</CardTitle>
          <CardDescription>
            Catégorie : {selectedCategory === 'all' ? 'Toutes les catégories' : selectedCategory}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <div className="mb-4 text-4xl font-bold text-primary">
            {score} / {filteredQuestions.length}
          </div>
          <div className="mb-4 text-2xl font-medium">
            {percentage}%
          </div>
          <Progress 
            value={percentage} 
            className="h-2 mb-4"
          />
          <p className="mb-6">
            {percentage >= 90 
              ? "Excellent! Vous maîtrisez parfaitement les concepts de l'IA!" 
              : percentage >= 70 
                ? "Très bien! Vous avez une très bonne compréhension de l'IA."
                : percentage >= 50
                  ? "Bon travail! Vous avez une bonne base en IA."
                  : "Continuez à explorer l'IA pour améliorer vos connaissances."}
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={onClose}>Fermer</Button>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => handleCategoryChange('all')}>
              Changer de catégorie
            </Button>
            <Button onClick={resetQuiz}>Recommencer</Button>
          </div>
        </CardFooter>
      </Card>
    );
  }

  // Écran de sélection de catégorie au début
  if (currentQuestion === 0 && selectedCategory === 'all' && !showFeedback) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Quiz Intelligence Artificielle
          </CardTitle>
          <CardDescription>
            Choisissez une catégorie ou testez-vous sur toutes les questions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            <Button 
              onClick={() => handleCategoryChange('all')}
              className="h-auto p-4 flex flex-col gap-2"
            >
              <span className="font-medium">Toutes les catégories</span>
              <span className="text-sm opacity-80">48 questions</span>
            </Button>
            {categories.map((category) => {
              const categoryQuestions = quizQuestions.filter(q => q.category === category);
              return (
                <Button 
                  key={category}
                  variant="outline"
                  onClick={() => handleCategoryChange(category)}
                  className="h-auto p-4 flex flex-col gap-2"
                >
                  <span className="font-medium">{category}</span>
                  <span className="text-sm opacity-70">{categoryQuestions.length} questions</span>
                </Button>
              );
            })}
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" onClick={onClose} className="w-full">
            Fermer
          </Button>
        </CardFooter>
      </Card>
    );
  }

  const question = filteredQuestions[currentQuestion];
  const progress = ((currentQuestion) / filteredQuestions.length) * 100;

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-2">
            <Badge variant="secondary">{question.category}</Badge>
            <span className="text-sm font-medium text-muted-foreground">
              Question {currentQuestion + 1}/{filteredQuestions.length}
            </span>
          </div>
          <Button variant="ghost" size="sm" onClick={() => handleCategoryChange('all')}>
            Changer de catégorie
          </Button>
        </div>
        <Progress value={progress} className="h-2" />
        <CardDescription>
          Score actuel: {score} / {currentQuestion}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-4">{question.text}</h3>
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <div 
                key={index}
                className={`p-3 rounded-lg border cursor-pointer transition-all
                ${selectedOption === index 
                  ? 'border-primary bg-primary/10' 
                  : 'border-border hover:border-primary/50 hover:bg-secondary/50'
                }
                ${showFeedback 
                  ? index === question.correctAnswer 
                    ? 'border-green-500 bg-green-50 dark:bg-green-950/30' 
                    : selectedOption === index 
                      ? 'border-red-500 bg-red-50 dark:bg-red-950/30' 
                      : ''
                  : ''
                }`}
                onClick={() => handleOptionSelect(index)}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {showFeedback && index === question.correctAnswer && (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  )}
                  {showFeedback && selectedOption === index && index !== question.correctAnswer && (
                    <XCircle className="h-5 w-5 text-red-500" />
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {showFeedback && (
            <div className={`mt-4 p-3 rounded-lg ${
              selectedOption === question.correctAnswer 
                ? 'bg-green-50 text-green-800 dark:bg-green-950/30 dark:text-green-300' 
                : 'bg-red-50 text-red-800 dark:bg-red-950/30 dark:text-red-300'
            }`}>
              <p className="font-medium">
                {selectedOption === question.correctAnswer ? "Correct!" : "Incorrect!"}
              </p>
              <p className="text-sm mt-1">{question.explanation}</p>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <Button variant="outline" onClick={onClose}>
          Quitter
        </Button>
        <Button 
          onClick={handleNext} 
          disabled={selectedOption === null || showFeedback}
        >
          {currentQuestion === filteredQuestions.length - 1 ? "Terminer" : "Suivant"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default IAQuiz;
