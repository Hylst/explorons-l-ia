
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Cpu, Globe, Lightbulb, Zap, ShieldCheck, Server } from 'lucide-react';

interface EmergingTechnology {
  title: string;
  description: string;
  icon: React.ReactNode;
  examples: string[];
  year: string;
}

const technologies: EmergingTechnology[] = [
  {
    title: "IA neuromorphique",
    description: "Puces et systèmes inspirés du cerveau humain qui révolutionnent l'efficacité énergétique et les capacités d'apprentissage des systèmes d'IA.",
    icon: <Brain className="h-6 w-6 text-purple-500" />,
    examples: [
      "Processeurs Loihi d'Intel pour le traitement sensible au contexte",
      "SpiNNaker de l'Université de Manchester pour la simulation neuronale",
      "Puces TrueNorth d'IBM avec architecture synaptique"
    ],
    year: "2023-2025"
  },
  {
    title: "IA quantique",
    description: "Intégration de l'informatique quantique et de l'IA pour résoudre des problèmes auparavant insolubles grâce à une puissance de calcul exponentielle.",
    icon: <Cpu className="h-6 w-6 text-blue-500" />,
    examples: [
      "Optimisation des réseaux de transport mondiaux",
      "Découverte de médicaments par simulation moléculaire complexe",
      "Cryptographie post-quantique et sécurité avancée"
    ],
    year: "2024-2026"
  },
  {
    title: "IA fédérée",
    description: "Apprentissage collaboratif permettant aux modèles d'apprendre de données décentralisées sans compromettre la confidentialité des utilisateurs.",
    icon: <Globe className="h-6 w-6 text-green-500" />,
    examples: [
      "Applications médicales préservant les données sensibles des patients",
      "Smartphones apprenant de l'usage sans partager de données personnelles",
      "Collaboration inter-entreprises sans partage de données propriétaires"
    ],
    year: "2023-2025"
  },
  {
    title: "IA symbolique + connexionniste",
    description: "Systèmes hybrides combinant l'apprentissage profond avec le raisonnement symbolique pour une intelligence plus complète et interprétable.",
    icon: <Lightbulb className="h-6 w-6 text-amber-500" />,
    examples: [
      "LLMs augmentés avec des capacités de raisonnement logique",
      "Systèmes capables d'expliquer leur raisonnement étape par étape",
      "IA pour la recherche scientifique avec vérification formelle"
    ],
    year: "2023-2025"
  },
  {
    title: "IA embarquée (Edge AI)",
    description: "Algorithmes d'IA optimisés pour fonctionner directement sur des appareils périphériques, réduisant la latence et améliorant la confidentialité.",
    icon: <Zap className="h-6 w-6 text-orange-500" />,
    examples: [
      "IA dans les véhicules autonomes pour décisions en temps réel",
      "Appareils médicaux portables avec diagnostic instantané",
      "Caméras de sécurité avec analyse vidéo intégrée"
    ],
    year: "2022-2025"
  },
  {
    title: "IA transparente (XAI)",
    description: "Méthodes et techniques permettant de comprendre, interpréter et expliquer les décisions des systèmes d'IA complexes.",
    icon: <ShieldCheck className="h-6 w-6 text-teal-500" />,
    examples: [
      "Diagnostic médical avec justification des conclusions",
      "Systèmes d'évaluation de crédit avec explications claires",
      "IA juridique avec traçabilité des raisonnements"
    ],
    year: "2022-2025"
  },
  {
    title: "Agents autonomes multi-domaines",
    description: "Systèmes d'IA capables d'agir de manière autonome dans de multiples environnements et de s'adapter à de nouveaux défis sans reprogrammation.",
    icon: <Server className="h-6 w-6 text-indigo-500" />,
    examples: [
      "Assistants virtuels capables de résoudre des problèmes complexes",
      "Systèmes de planification stratégique pour entreprises",
      "Agents de recherche scientifique automatisés"
    ],
    year: "2024-2026"
  }
];

const EmergingTechnologies: React.FC = () => {
  return (
    <div className="py-8">
      <h3 className="heading-sm mb-6 text-center">Technologies émergentes de l'IA en 2025</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full border-primary/10 hover:shadow-md transition-all">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10">
                    {tech.icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{tech.title}</CardTitle>
                    <p className="text-xs text-muted-foreground">{tech.year}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">{tech.description}</p>
                <div className="space-y-2">
                  {tech.examples.map((example, i) => (
                    <div key={i} className="text-xs bg-secondary/20 p-2 rounded-md">
                      {example}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EmergingTechnologies;
