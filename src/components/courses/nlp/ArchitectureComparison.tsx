
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

interface Architecture {
  name: string;
  year: string;
  pros: string[];
  cons: string[];
  keyFeature: string;
  complexity: 'Faible' | 'Moyenne' | 'Élevée';
}

const ArchitectureComparison: React.FC = () => {
  const architectures: Architecture[] = [
    {
      name: "RNN/LSTM",
      year: "1990-1997",
      keyFeature: "Mémoire séquentielle",
      complexity: "Moyenne",
      pros: [
        "Traitement séquentiel naturel",
        "Capture des dépendances temporelles",
        "Relativement simple à comprendre"
      ],
      cons: [
        "Problème du gradient qui disparaît",
        "Traitement séquentiel lent",
        "Difficulté avec les longues séquences"
      ]
    },
    {
      name: "Attention",
      year: "2015",
      keyFeature: "Focus sélectif",
      complexity: "Moyenne",
      pros: [
        "Capture des relations à long terme",
        "Parallélisation possible",
        "Interprétabilité des poids d'attention"
      ],
      cons: [
        "Complexité quadratique",
        "Encore dépendant des RNN",
        "Consommation mémoire importante"
      ]
    },
    {
      name: "Transformer",
      year: "2017",
      keyFeature: "Self-attention pure",
      complexity: "Élevée",
      pros: [
        "Parallélisation complète",
        "Capture excellente des dépendances",
        "Scalabilité exceptionnelle",
        "Base des LLM modernes"
      ],
      cons: [
        "Complexité conceptuelle élevée",
        "Coût computationnel important",
        "Besoins en données massifs"
      ]
    }
  ];

  const getComplexityColor = (complexity: Architecture['complexity']) => {
    switch (complexity) {
      case 'Faible': return 'bg-green-100 text-green-800';
      case 'Moyenne': return 'bg-yellow-100 text-yellow-800';
      case 'Élevée': return 'bg-red-100 text-red-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-4">Évolution des architectures NLP</h3>
        <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
          <span>1990s</span>
          <ArrowRight className="h-4 w-4" />
          <span>2015</span>
          <ArrowRight className="h-4 w-4" />
          <span>2017</span>
          <ArrowRight className="h-4 w-4" />
          <span>Aujourd'hui</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {architectures.map((arch, index) => (
          <Card key={index} className="relative overflow-hidden">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{arch.name}</CardTitle>
                <Badge variant="outline">{arch.year}</Badge>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-primary">{arch.keyFeature}</p>
                <Badge className={getComplexityColor(arch.complexity)}>
                  Complexité: {arch.complexity}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h5 className="font-medium text-green-700 mb-2 flex items-center gap-1">
                  <CheckCircle2 className="h-4 w-4" />
                  Avantages
                </h5>
                <ul className="text-sm space-y-1">
                  {arch.pros.map((pro, i) => (
                    <li key={i} className="text-green-600">• {pro}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-red-700 mb-2 flex items-center gap-1">
                  <XCircle className="h-4 w-4" />
                  Limitations
                </h5>
                <ul className="text-sm space-y-1">
                  {arch.cons.map((con, i) => (
                    <li key={i} className="text-red-600">• {con}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ArchitectureComparison;
