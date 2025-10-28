
import React, { useState } from 'react';
import { Book, Link as LinkIcon, Video, FileText, GraduationCap, Globe, Search, Brain, Calendar, Database } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

interface Resource {
  title: string;
  author: string;
  description: string;
  link: string;
  type: 'book' | 'article' | 'video' | 'course' | 'website';
  level?: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Tous niveaux';
  topics?: string[];
  year?: number;
  language?: 'FR' | 'EN' | 'Other';
}

const resources: Resource[] = [
  // Livres et publications en ligne (formats PDF ou web)
  {
    title: "Intelligence artificielle - Une approche moderne",
    author: "Université de Lorraine",
    description: "Version française du livre de référence de Russell et Norvig, disponible gratuitement en ligne.",
    link: "https://www.loria.fr/~nicaud/IAAM/",
    type: "book",
    level: "Intermédiaire",
    language: "FR",
    year: 2022
  },
  {
    title: "Introduction à l'intelligence artificielle",
    author: "Université de Lille",
    description: "Cours complet d'introduction à l'IA disponible en ligne gratuitement.",
    link: "https://www.fil.univ-lille.fr/~varre/portail/ia/",
    type: "book",
    level: "Débutant",
    language: "FR",
    year: 2023
  },
  {
    title: "Intelligence artificielle : des limites du possible",
    author: "Jean-Gabriel Ganascia",
    description: "Un article scientifique qui discute des limites théoriques et pratiques de l'IA.",
    link: "https://www.cairn.info/revue-informatique-et-droit-2020-1-page-65.htm",
    type: "article",
    level: "Tous niveaux",
    language: "FR",
    year: 2020
  },
  
  // Articles
  {
    title: "Intelligence artificielle: état de l'art et perspectives pour la France",
    author: "Office Parlementaire d'Évaluation des Choix Scientifiques et Technologiques",
    description: "Rapport détaillé sur l'état de l'IA en France et les perspectives d'avenir.",
    link: "https://www.senat.fr/notice-rapport/2016/r16-464-1-notice.html",
    type: "article",
    level: "Intermédiaire",
    language: "FR",
    year: 2017
  },
  {
    title: "Éthique et intelligence artificielle: les enjeux éthiques de l'IA",
    author: "CNIL",
    description: "Analyse des enjeux éthiques et des recommandations par la Commission Nationale de l'Informatique et des Libertés.",
    link: "https://www.cnil.fr/fr/intelligence-artificielle/rapport",
    type: "article",
    level: "Tous niveaux",
    language: "FR",
    year: 2023,
    topics: ["éthique", "régulation", "CNIL"]
  },
  {
    title: "Vers une IA de confiance",
    author: "Institut Montaigne",
    description: "Analyse des conditions nécessaires pour développer une IA éthique et responsable.",
    link: "https://www.institutmontaigne.org/analyses/vers-une-ia-de-confiance",
    type: "article",
    level: "Tous niveaux",
    language: "FR",
    year: 2023,
    topics: ["éthique", "confiance", "régulation"]
  },
  {
    title: "L'Europe et l'IA: l'Europe est-elle condamnée à suivre les États-Unis et la Chine?",
    author: "France Stratégie",
    description: "Analyse de la position européenne dans la course mondiale à l'IA.",
    link: "https://www.strategie.gouv.fr/publications/leurope-lia-leurope-condamnee-suivre-etats-unis-chine",
    type: "article",
    level: "Intermédiaire",
    language: "FR",
    year: 2023,
    topics: ["géopolitique", "Europe", "régulation"]
  },
  {
    title: "L'IA générative et la création dans les arts - aspects théoriques et pratiques",
    author: "Laboratoire d'Informatique de Paris 6 (LIP6)",
    description: "Analyse des aspects créatifs de l'IA générative dans le domaine artistique.",
    link: "https://hal.science/hal-04269356/",
    type: "article",
    level: "Intermédiaire",
    language: "FR",
    year: 2023,
    topics: ["IA générative", "création", "arts"]
  },
  {
    title: "Où en est-on de l'IA en 2023 ? Progrès, limites et perspectives",
    author: "Institut national de recherche en sciences et technologies du numérique (INRIA)",
    description: "Un bilan des avancées récentes en IA, avec une analyse des défis actuels.",
    link: "https://www.inria.fr/fr/intelligence-artificielle-progres-limites-perspectives",
    type: "article",
    level: "Tous niveaux",
    language: "FR",
    year: 2023,
    topics: ["état de l'art", "limites", "perspectives"]
  },
  
  // Vidéos
  {
    title: "Introduction à l'intelligence artificielle",
    author: "Science Étonnante",
    description: "Série de vidéos expliquant les concepts fondamentaux de l'IA de manière accessible.",
    link: "https://www.youtube.com/playlist?list=PLtzmb84AoqRS0SN8VKvAxuGOdcINmtYUX",
    type: "video",
    level: "Débutant",
    language: "FR"
  },
  {
    title: "L'intelligence artificielle et le machine learning",
    author: "Institut Mines-Télécom",
    description: "MOOC complet sur l'IA et le machine learning avec cours et exercices pratiques.",
    link: "https://www.fun-mooc.fr/fr/cours/lintelligence-artificielle-avec-python/",
    type: "video",
    level: "Intermédiaire",
    language: "FR",
    year: 2023,
    topics: ["machine learning", "python", "MOOC"]
  },
  {
    title: "IA: les bases du deep learning",
    author: "Lê Nguyên Hoang (Science4All)",
    description: "Explication des fondements mathématiques et techniques du deep learning.",
    link: "https://www.youtube.com/playlist?list=PLtzmb84AoqRRCU9CKVjDi-Z5T4bUOLx_T",
    type: "video",
    level: "Intermédiaire",
    language: "FR",
    year: 2022,
    topics: ["deep learning", "mathématiques", "réseaux de neurones"]
  },
  {
    title: "L'IA peut-elle devenir consciente?",
    author: "Le Vortex",
    description: "Discussion sur la possibilité d'une conscience artificielle et ses implications.",
    link: "https://www.youtube.com/watch?v=MXs_B_oX6G4",
    type: "video",
    level: "Tous niveaux",
    language: "FR",
    year: 2023
  },
  {
    title: "Les grands modèles de langage (LLM): comment ça marche?",
    author: "Monsieur Phi",
    description: "Explication des principes fondamentaux des grands modèles de langage type ChatGPT.",
    link: "https://www.youtube.com/watch?v=R_m4kanV8f0",
    type: "video",
    level: "Tous niveaux",
    language: "FR",
    year: 2023,
    topics: ["LLM", "GPT", "transformers"]
  },
  {
    title: "Intelligence artificielle: la course en avant",
    author: "Arte",
    description: "Documentaire complet sur les avancées de l'IA et ses impacts sur la société.",
    link: "https://www.arte.tv/fr/videos/RC-021477/intelligence-artificielle-la-course-en-avant/",
    type: "video",
    level: "Tous niveaux",
    language: "FR",
    year: 2023,
    topics: ["société", "éthique", "futur"]
  },
  {
    title: "ChatGPT et l'IA : comment tout a changé (et va changer)",
    author: "Primer",
    description: "Analyse approfondie de l'impact de ChatGPT et des grands modèles de langage sur la société.",
    link: "https://www.youtube.com/watch?v=bK322VSAdKQ",
    type: "video",
    level: "Débutant",
    language: "FR",
    year: 2023,
    topics: ["ChatGPT", "LLM", "impact social"]
  },
  
  // Cours
  {
    title: "Introduction au Machine Learning",
    author: "Télécom Paris",
    description: "Cours complet sur les fondamentaux du machine learning, avec une approche théorique et pratique.",
    link: "https://www.fun-mooc.fr/fr/cours/machine-learning-python-scikit-learn/",
    type: "course",
    level: "Intermédiaire",
    language: "FR",
    year: 2023
  },
  {
    title: "Elements of AI",
    author: "Université d'Helsinki",
    description: "Cours gratuit d'introduction à l'IA pour le grand public, disponible en français.",
    link: "https://www.elementsofai.fr/",
    type: "course",
    level: "Débutant",
    language: "FR",
    year: 2022
  },
  {
    title: "L'Intelligence Artificielle pour Tous",
    author: "INRIA",
    description: "Série de cours accessibles sur les concepts fondamentaux de l'IA pour un public non technique.",
    link: "https://www.fun-mooc.fr/fr/cours/lintelligence-artificielle-pour-tous/",
    type: "course",
    level: "Débutant",
    language: "FR",
    year: 2023
  },
  {
    title: "Initiation au Deep Learning",
    author: "ENS Paris-Saclay",
    description: "Introduction complète aux principes du deep learning et à ses applications.",
    link: "https://www.fun-mooc.fr/fr/cours/deep-learning/",
    type: "course",
    level: "Intermédiaire",
    language: "FR",
    year: 2023,
    topics: ["deep learning", "réseaux de neurones", "CNN", "RNN"]
  },
  {
    title: "IA et Société",
    author: "Université de Montréal",
    description: "MOOC sur les enjeux sociétaux et éthiques de l'intelligence artificielle.",
    link: "https://www.fun-mooc.fr/fr/cours/ia-et-societe/",
    type: "course",
    level: "Tous niveaux",
    language: "FR",
    year: 2023,
    topics: ["éthique", "société", "régulation"]
  },
  {
    title: "Intelligence artificielle: applications en santé et biomédecine",
    author: "Université Côte d'Azur",
    description: "Cours sur les applications médicales de l'IA, accessible gratuitement.",
    link: "https://www.fun-mooc.fr/fr/cours/ia-applications-sante-biomedecine/",
    type: "course",
    level: "Intermédiaire",
    language: "FR",
    year: 2023,
    topics: ["santé", "médecine", "applications"]
  },
  
  // Sites web
  {
    title: "IA en France",
    author: "Gouvernement Français",
    description: "Stratégie nationale française pour l'intelligence artificielle, ressources et initiatives.",
    link: "https://www.intelligence-artificielle.gouv.fr/fr",
    type: "website",
    level: "Tous niveaux",
    language: "FR",
    year: 2023
  },
  {
    title: "Interstices - Intelligence Artificielle",
    author: "INRIA",
    description: "Revue de vulgarisation informatique avec de nombreux articles de qualité sur l'IA.",
    link: "https://interstices.info/domaine/intelligence-artificielle/",
    type: "website",
    level: "Tous niveaux",
    language: "FR"
  },
  {
    title: "Observatoire IA Éthique",
    author: "Université de Montréal",
    description: "Ressources et publications sur les aspects éthiques de l'IA.",
    link: "https://observatoire-ia.ulaval.ca/",
    type: "website",
    level: "Tous niveaux",
    language: "FR",
    year: 2023,
    topics: ["éthique", "société", "régulation"]
  },
  {
    title: "CNRS - Dossiers sur l'IA",
    author: "CNRS",
    description: "Dossiers thématiques sur l'intelligence artificielle par le Centre National de la Recherche Scientifique.",
    link: "https://www.cnrs.fr/fr/intelligence-artificielle",
    type: "website",
    level: "Tous niveaux",
    language: "FR",
    year: 2023,
    topics: ["recherche", "vulgarisation", "sciences"]
  },
  {
    title: "Tutoriels Machine Learning en français",
    author: "scikit-learn",
    description: "Documentation et tutoriels en français pour la bibliothèque scikit-learn.",
    link: "https://scikit-learn.org/stable/tutorial/index.html",
    type: "website",
    level: "Intermédiaire",
    language: "FR",
    topics: ["machine learning", "tutoriels", "python"]
  },
  {
    title: "DataScientest - Blog IA",
    author: "DataScientest",
    description: "Articles de fond en français sur l'intelligence artificielle et ses applications.",
    link: "https://datascientest.com/blog/intelligence-artificielle",
    type: "website",
    level: "Tous niveaux",
    language: "FR",
    year: 2023,
    topics: ["machine learning", "data science", "applications"]
  },
  
  // Ressources sur la mémoire en IA
  {
    title: "La mémoire dans les réseaux de neurones récurrents",
    author: "Laboratoire Hubert Curien",
    description: "Explication de la façon dont les réseaux de neurones récurrents et LSTM implémentent différents types de mémoire.",
    link: "https://labh-curien.univ-st-etienne.fr/~noesolignon/enseignements/NeuralNets/slides/rnns.pdf",
    type: "article",
    level: "Intermédiaire",
    topics: ["mémoire", "RNN", "LSTM"],
    year: 2022,
    language: "FR"
  },
  {
    title: "Les mécanismes d'attention dans les modèles de langage",
    author: "Institut de Recherche en Informatique de Toulouse",
    description: "Explication détaillée des mécanismes d'attention utilisés dans les transformers et les LLM.",
    link: "https://www.irit.fr/~Nathalie.Aussenac-Gilles/ENSEIGNEMENT/M2R-IARF/ExposesEtud/2020-2021/Transformers.pdf",
    type: "article",
    level: "Intermédiaire",
    topics: ["transformers", "attention", "NLP"],
    year: 2021,
    language: "FR"
  },
  {
    title: "Cours sur les mécanismes de mémoire en IA",
    author: "INRIA",
    description: "Série de cours approfondis sur les différents mécanismes de mémoire utilisés dans les systèmes d'IA modernes.",
    link: "https://www.fun-mooc.fr/fr/cours/fabrication-numerique/",
    type: "course",
    level: "Intermédiaire",
    topics: ["mémoire", "architectures", "apprentissage"],
    year: 2023,
    language: "FR"
  },
  {
    title: "La mémoire des modèles de langage",
    author: "CNRS Le Journal",
    description: "Article expliquant comment les grands modèles de langage stockent et utilisent l'information.",
    link: "https://lejournal.cnrs.fr/articles/comment-les-ia-generatives-creent-elles-du-contenu",
    type: "article",
    level: "Tous niveaux",
    topics: ["LLM", "mémoire", "transformers"],
    year: 2023,
    language: "FR"
  },
  {
    title: "Comment les IA mémorisent leurs données d'entraînement",
    author: "DataScientest",
    description: "Explications claires sur les mécanismes de mémorisation dans les modèles d'IA et leurs implications pour la confidentialité.",
    link: "https://datascientest.com/memorisation-donnees-ia",
    type: "article",
    level: "Débutant",
    topics: ["mémoire", "données", "confidentialité"],
    year: 2023,
    language: "FR"
  },
  {
    title: "Les transformers expliqués simplement",
    author: "Université Paris-Saclay",
    description: "Explication visuelle détaillée de l'architecture Transformer et de ses mécanismes d'attention.",
    link: "https://perso.limsi.fr/gabor/ens/2021-2022/nlp/02-transformers.pdf",
    type: "website",
    level: "Tous niveaux",
    topics: ["transformers", "visualisation", "NLP"],
    year: 2022,
    language: "FR"
  },
  {
    title: "Comprendre les différents types d'IA en 2023",
    author: "École Normale Supérieure de Lyon",
    description: "Ressource complète qui explique les différentes catégories d'IA, de l'IA faible à l'IA forte.",
    link: "https://ens-lyon.fr/actualite/recherche/intelligence-artificielle-les-avancees-de-la-recherche",
    type: "article",
    level: "Débutant",
    topics: ["types d'IA", "classification", "introduction"],
    year: 2023,
    language: "FR"
  },
  {
    title: "L'IA embarquée : principes et applications",
    author: "CEA Tech",
    description: "Présentation des technologies d'IA adaptées aux systèmes embarqués et à faible consommation.",
    link: "https://www.cea-tech.fr/cea-tech/Pages/2023/intelligence-artificielle-embarquee.aspx",
    type: "article",
    level: "Intermédiaire",
    topics: ["IA embarquée", "edge computing", "optimisation"],
    year: 2023,
    language: "FR"
  }
];

const resourceIcons = {
  book: <Book className="h-5 w-5" />,
  article: <FileText className="h-5 w-5" />,
  video: <Video className="h-5 w-5" />,
  course: <GraduationCap className="h-5 w-5" />,
  website: <Globe className="h-5 w-5" />
};

const allTopics = Array.from(new Set(
  resources.flatMap(resource => resource.topics || [])
)).sort();

const allYears = Array.from(new Set(
  resources.filter(r => r.year).map(r => r.year)
)).sort((a, b) => b! - a!);

const ExternalResources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all');

  const filteredResources = resources.filter(resource => {
    const matchesSearch = 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.author.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLevel = selectedLevel === 'all' || resource.level === selectedLevel;
    const matchesTopic = selectedTopic === 'all' || resource.topics?.includes(selectedTopic);
    const matchesYear = selectedYear === 'all' || resource.year === parseInt(selectedYear);
    const matchesLanguage = selectedLanguage === 'all' || resource.language === selectedLanguage;

    return matchesSearch && matchesLevel && matchesTopic && matchesYear && matchesLanguage;
  });

  return (
    <div className="w-full space-y-8">
      <div className="bg-card border rounded-xl p-6 shadow-sm mb-8">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="bg-primary/10 p-4 rounded-full">
            <Brain className="h-8 w-8 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-3">Mémoire dans les systèmes d'IA</h3>
            <p className="text-muted-foreground mb-6">
              Les systèmes d'IA modernes utilisent différents types de mémoire pour stocker et traiter l'information.
              Ces illustrations montrent les principales architectures de mémoire et leurs applications.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="bg-muted/30 rounded-lg p-4 border">
                <h4 className="font-medium mb-2 flex items-center">
                  <Database className="h-4 w-4 mr-2 text-primary" />
                  Mémoire dans les réseaux récurrents
                </h4>
                <div className="h-[180px] bg-card rounded-md flex items-center justify-center p-4">
                  <svg viewBox="0 0 400 150" width="100%" height="100%">
                    <rect x="150" y="30" width="100" height="60" rx="10" fill="rgba(var(--primary), 0.1)" stroke="rgb(var(--primary))" strokeWidth="2" />
                    <text x="200" y="65" textAnchor="middle" fill="currentColor" fontSize="14">RNN Cell</text>
                    
                    <rect x="300" y="40" width="80" height="40" rx="5" fill="rgba(var(--primary), 0.2)" stroke="rgb(var(--primary))" strokeWidth="1" />
                    <text x="340" y="65" textAnchor="middle" fill="currentColor" fontSize="12">État caché</text>
                    
                    <rect x="20" y="40" width="80" height="40" rx="5" fill="rgba(var(--primary), 0.2)" stroke="rgb(var(--primary))" strokeWidth="1" />
                    <text x="60" y="65" textAnchor="middle" fill="currentColor" fontSize="12">Entrée X</text>
                    
                    <rect x="160" y="120" width="80" height="30" rx="5" fill="rgba(var(--primary), 0.2)" stroke="rgb(var(--primary))" strokeWidth="1" />
                    <text x="200" y="140" textAnchor="middle" fill="currentColor" fontSize="12">Sortie Y</text>
                    
                    <path d="M100 60 L150 60" fill="none" stroke="rgb(var(--primary))" strokeWidth="2" markerEnd="url(#arrowhead)" />
                    <path d="M250 60 L300 60" fill="none" stroke="rgb(var(--primary))" strokeWidth="2" markerEnd="url(#arrowhead)" />
                    <path d="M340 80 C340 100 100 100 100 60" fill="none" stroke="rgb(var(--primary))" strokeWidth="2" strokeDasharray="5,3" markerEnd="url(#arrowhead)" />
                    <path d="M200 90 L200 120" fill="none" stroke="rgb(var(--primary))" strokeWidth="2" markerEnd="url(#arrowhead)" />
                    
                    <defs>
                      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="rgb(var(--primary))" />
                      </marker>
                    </defs>
                  </svg>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Les réseaux récurrents maintiennent un état interne qui agit comme une mémoire à court terme</p>
              </div>
              
              <div className="bg-muted/30 rounded-lg p-4 border">
                <h4 className="font-medium mb-2 flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-primary" />
                  Mémoire dans les Transformers
                </h4>
                <div className="h-[180px] bg-card rounded-md flex items-center justify-center p-4">
                  <svg viewBox="0 0 400 150" width="100%" height="100%">
                    <rect x="150" y="20" width="120" height="50" rx="5" fill="rgba(var(--primary), 0.1)" stroke="rgb(var(--primary))" strokeWidth="2" />
                    <text x="210" y="50" textAnchor="middle" fill="currentColor" fontSize="14">Attention</text>
                    
                    <rect x="20" y="90" width="100" height="40" rx="5" fill="rgba(var(--primary), 0.2)" stroke="rgb(var(--primary))" strokeWidth="1" />
                    <text x="70" y="115" textAnchor="middle" fill="currentColor" fontSize="12">Query</text>
                    
                    <rect x="150" y="90" width="100" height="40" rx="5" fill="rgba(var(--primary), 0.2)" stroke="rgb(var(--primary))" strokeWidth="1" />
                    <text x="200" y="115" textAnchor="middle" fill="currentColor" fontSize="12">Key</text>
                    
                    <rect x="280" y="90" width="100" height="40" rx="5" fill="rgba(var(--primary), 0.2)" stroke="rgb(var(--primary))" strokeWidth="1" />
                    <text x="330" y="115" textAnchor="middle" fill="currentColor" fontSize="12">Value</text>
                    
                    <path d="M70 90 L150 70" fill="none" stroke="rgb(var(--primary))" strokeWidth="2" markerEnd="url(#arrowhead)" />
                    <path d="M200 90 L200 70" fill="none" stroke="rgb(var(--primary))" strokeWidth="2" markerEnd="url(#arrowhead)" />
                    <path d="M330 90 L250 70" fill="none" stroke="rgb(var(--primary))" strokeWidth="2" markerEnd="url(#arrowhead)" />
                    
                    <defs>
                      <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="rgb(var(--primary))" />
                      </marker>
                    </defs>
                  </svg>
                </div>
                <p className="text-xs text-muted-foreground mt-2">L'attention permet aux Transformers de maintenir des relations contextuelles entre les mots à longue distance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher des ressources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <Select value={selectedLevel} onValueChange={setSelectedLevel}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Niveau" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous niveaux</SelectItem>
              <SelectItem value="Débutant">Débutant</SelectItem>
              <SelectItem value="Intermédiaire">Intermédiaire</SelectItem>
              <SelectItem value="Avancé">Avancé</SelectItem>
              <SelectItem value="Tous niveaux">Tous niveaux</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={selectedTopic} onValueChange={setSelectedTopic}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Sujet" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous sujets</SelectItem>
              {allTopics.map(topic => (
                <SelectItem key={topic} value={topic}>{topic}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Année" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes années</SelectItem>
              {allYears.map(year => (
                <SelectItem key={year} value={year?.toString() || ''}>{year}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Langue" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes langues</SelectItem>
              <SelectItem value="FR">Français</SelectItem>
              <SelectItem value="EN">Anglais</SelectItem>
              <SelectItem value="Other">Autre</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="flex justify-center mb-8 max-w-[95%] mx-auto overflow-auto">
          <TabsTrigger value="all">Tous</TabsTrigger>
          <TabsTrigger value="book">Livres</TabsTrigger>
          <TabsTrigger value="article">Articles</TabsTrigger>
          <TabsTrigger value="video">Vidéos</TabsTrigger>
          <TabsTrigger value="course">Cours</TabsTrigger>
          <TabsTrigger value="website">Sites Web</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredResources.length > 0 ? (
            filteredResources.map((resource, index) => (
              <ResourceCard key={index} resource={resource} />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <FileText className="mx-auto h-12 w-12 text-muted-foreground/50" />
              <h3 className="mt-4 text-lg font-medium">Aucune ressource trouvée</h3>
              <p className="text-muted-foreground">Essayez de modifier vos critères de recherche</p>
            </div>
          )}
        </TabsContent>
        
        {(['book', 'article', 'video', 'course', 'website'] as const).map(type => (
          <TabsContent key={type} value={type} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredResources.filter(r => r.type === type).length > 0 ? (
              filteredResources.filter(r => r.type === type).map((resource, index) => (
                <ResourceCard key={index} resource={resource} />
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <FileText className="mx-auto h-12 w-12 text-muted-foreground/50" />
                <h3 className="mt-4 text-lg font-medium">Aucune ressource trouvée</h3>
                <p className="text-muted-foreground">Essayez de modifier vos critères de recherche</p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

const ResourceCard = ({ resource }: { resource: Resource }) => {
  const icon = resourceIcons[resource.type];
  
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-primary/10 p-2 rounded-full">
              {icon}
            </div>
            <CardTitle className="text-lg">{resource.title}</CardTitle>
          </div>
        </div>
        <CardDescription>Par {resource.author}{resource.year ? ` (${resource.year})` : ''}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm">{resource.description}</p>
        <div className="mt-2 flex flex-wrap gap-1">
          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold mt-2">
            {resource.level || "Tous niveaux"}
          </span>
          <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary mt-2">
            {resource.type === 'book' ? 'Livre' : 
             resource.type === 'article' ? 'Article' : 
             resource.type === 'video' ? 'Vidéo' : 
             resource.type === 'course' ? 'Cours' : 'Site Web'}
          </span>
          {resource.language && (
            <span className="inline-flex items-center rounded-full bg-secondary/20 px-2.5 py-0.5 text-xs mt-2">
              {resource.language}
            </span>
          )}
        </div>
        {resource.topics && resource.topics.length > 0 && (
          <div className="mt-3">
            <div className="flex flex-wrap gap-1">
              {resource.topics.map((topic, i) => (
                <span key={i} className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-xs mt-1">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full gap-2" asChild>
          <a href={resource.link} target="_blank" rel="noopener noreferrer">
            <LinkIcon className="h-4 w-4" />
            Consulter
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ExternalResources;

