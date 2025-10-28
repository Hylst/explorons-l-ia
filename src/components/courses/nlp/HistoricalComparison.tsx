
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, XCircle, Clock, TrendingUp } from 'lucide-react';

interface Era {
  period: string;
  name: string;
  mainApproach: string;
  keyTechnologies: string[];
  achievements: string[];
  limitations: string[];
  exampleSystem: string;
  impact: 'révolutionnaire' | 'important' | 'modéré' | 'limité';
}

const HistoricalComparison: React.FC = () => {
  const eras: Era[] = [
    {
      period: "1950-1970",
      name: "Ère symbolique",
      mainApproach: "Règles explicites et grammaires formelles",
      keyTechnologies: ["Grammaires génératives", "Analyseurs syntaxiques", "Dictionnaires"],
      achievements: [
        "Première traduction automatique (Georgetown-IBM)",
        "Développement d'ELIZA (1966)",
        "Établissement des bases théoriques"
      ],
      limitations: [
        "Rigidité face aux exceptions",
        "Incapacité à gérer l'ambiguïté",
        "Maintenance complexe des règles",
        "Couverture limitée du vocabulaire"
      ],
      exampleSystem: "Georgetown-IBM (1954) : 60 phrases russe-anglais",
      impact: "modéré"
    },
    {
      period: "1980-2000",
      name: "Ère statistique",
      mainApproach: "Modèles probabilistes et corpus",
      keyTechnologies: ["N-grammes", "HMM", "Alignement statistique", "Corpus parallèles"],
      achievements: [
        "IBM Models pour la traduction",
        "Premiers systèmes de reconnaissance vocale",
        "Analyse syntaxique probabiliste",
        "Émergence du web et des corpus massifs"
      ],
      limitations: [
        "Dépendance aux données d'entraînement",
        "Difficulté avec les phrases longues",
        "Manque de compréhension sémantique",
        "Généralisation limitée"
      ],
      exampleSystem: "CANDIDE d'IBM : traduction français-anglais",
      impact: "important"
    },
    {
      period: "2000-2017",
      name: "Ère neuronale",
      mainApproach: "Réseaux de neurones et apprentissage profond",
      keyTechnologies: ["RNN/LSTM", "Word2Vec", "Seq2Seq", "Attention"],
      achievements: [
        "Google Neural Machine Translation",
        "Embeddings Word2Vec/GloVe",
        "Premiers chatbots neuraux",
        "Amélioration significative de la qualité"
      ],
      limitations: [
        "Traitement séquentiel lent",
        "Problème du gradient qui s'évanouit",
        "Difficultés avec les longues séquences",
        "Coût computationnel élevé"
      ],
      exampleSystem: "Google Translate (2016) : révolution neuronale",
      impact: "révolutionnaire"
    },
    {
      period: "2017-aujourd'hui",
      name: "Ère Transformer",
      mainApproach: "Attention et modèles pré-entraînés",
      keyTechnologies: ["Transformer", "BERT", "GPT", "T5", "Switch Transformer"],
      achievements: [
        "GPT-3/4 et capacités émergentes",
        "BERT et compréhension contextuelle",
        "ChatGPT et adoption grand public",
        "Modèles multimodaux"
      ],
      limitations: [
        "Coût énergétique énorme",
        "Hallucinations et biais",
        "Boîte noire difficile à interpréter",
        "Concentration du pouvoir"
      ],
      exampleSystem: "ChatGPT (2022) : 100M utilisateurs en 2 mois",
      impact: "révolutionnaire"
    }
  ];

  const getImpactColor = (impact: Era['impact']) => {
    switch (impact) {
      case 'révolutionnaire': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      case 'important': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
      case 'modéré': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'limité': return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-4 text-foreground">Évolution historique du NLP</h3>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          De la programmation explicite de règles aux modèles de langage massifs : 
          70 ans d'innovations qui ont transformé notre rapport au langage artificiel.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {eras.map((era, index) => (
          <Card key={index} className="relative overflow-hidden border-l-4 border-primary">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <CardTitle className="text-lg text-foreground">{era.name}</CardTitle>
                    <Badge variant="outline" className="mt-1">{era.period}</Badge>
                  </div>
                </div>
                <Badge className={getImpactColor(era.impact)}>
                  {era.impact}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground italic mt-2">
                "{era.mainApproach}"
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h5 className="font-medium text-foreground mb-2">Technologies clés :</h5>
                <div className="flex flex-wrap gap-2">
                  {era.keyTechnologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-green-700 dark:text-green-400 mb-2 flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4" />
                    Réussites
                  </h5>
                  <ul className="text-sm space-y-1">
                    {era.achievements.map((achievement, i) => (
                      <li key={i} className="text-green-600 dark:text-green-300">
                        • {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-red-700 dark:text-red-400 mb-2 flex items-center gap-1">
                    <XCircle className="h-4 w-4" />
                    Limites
                  </h5>
                  <ul className="text-sm space-y-1">
                    {era.limitations.map((limitation, i) => (
                      <li key={i} className="text-red-600 dark:text-red-300">
                        • {limitation}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-muted/50 p-3 rounded-lg border-l-2 border-primary">
                <h5 className="font-medium text-foreground mb-1 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Système emblématique
                </h5>
                <p className="text-sm text-muted-foreground">{era.exampleSystem}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HistoricalComparison;
