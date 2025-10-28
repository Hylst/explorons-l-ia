
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, TrendingDown, Link, ArrowRight } from 'lucide-react';

const UnsupervisedTypesComparison: React.FC = () => {
  const [activeType, setActiveType] = useState<'clustering' | 'reduction' | 'association'>('clustering');

  const types = {
    clustering: {
      title: "Clustering (Regroupement)",
      icon: <Users className="h-5 w-5" />,
      color: "bg-blue-100 border-blue-300 text-blue-800",
      description: "Diviser les données en groupes naturels",
      objective: "Identifier des segments homogènes dans les données",
      algorithms: ["K-means", "DBSCAN", "Clustering hiérarchique", "GMM"],
      examples: [
        "Segmentation de clientèle",
        "Classification d'images",
        "Analyse de réseaux sociaux",
        "Regroupement de documents"
      ],
      whenToUse: "Quand vous voulez découvrir des groupes naturels dans vos données",
      output: "Groupes de données similaires"
    },
    reduction: {
      title: "Réduction de Dimensionnalité",
      icon: <TrendingDown className="h-5 w-5" />,
      color: "bg-green-100 border-green-300 text-green-800",
      description: "Simplifier les données complexes",
      objective: "Réduire le nombre de variables tout en gardant l'information importante",
      algorithms: ["PCA", "t-SNE", "UMAP", "LDA"],
      examples: [
        "Visualisation de données complexes",
        "Compression d'images",
        "Analyse génomique",
        "Réduction du bruit"
      ],
      whenToUse: "Quand vos données ont trop de dimensions ou pour la visualisation",
      output: "Données simplifiées avec moins de dimensions"
    },
    association: {
      title: "Règles d'Association",
      icon: <Link className="h-5 w-5" />,
      color: "bg-purple-100 border-purple-300 text-purple-800",
      description: "Découvrir des relations entre éléments",
      objective: "Identifier des patterns de co-occurrence",
      algorithms: ["Apriori", "FP-Growth", "Eclat"],
      examples: [
        "Analyse du panier de marché",
        "Recommandations de produits",
        "Analyse de navigation web",
        "Détection de fraude"
      ],
      whenToUse: "Quand vous cherchez des associations fréquentes entre éléments",
      output: "Règles du type 'Si A alors B'"
    }
  };

  const currentType = types[activeType];

  return (
    <div className="space-y-6">
      <div className="flex gap-2 justify-center mb-6 flex-wrap">
        <Button
          variant={activeType === 'clustering' ? 'default' : 'outline'}
          onClick={() => setActiveType('clustering')}
          className="flex items-center gap-2"
          size="sm"
        >
          <Users className="h-4 w-4" />
          Clustering
        </Button>
        <Button
          variant={activeType === 'reduction' ? 'default' : 'outline'}
          onClick={() => setActiveType('reduction')}
          className="flex items-center gap-2"
          size="sm"
        >
          <TrendingDown className="h-4 w-4" />
          Réduction
        </Button>
        <Button
          variant={activeType === 'association' ? 'default' : 'outline'}
          onClick={() => setActiveType('association')}
          className="flex items-center gap-2"
          size="sm"
        >
          <Link className="h-4 w-4" />
          Association
        </Button>
      </div>

      <Card className="transition-all duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <Badge className={currentType.color}>
              {currentType.icon}
              {currentType.title}
            </Badge>
          </CardTitle>
          <p className="text-muted-foreground">{currentType.description}</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-muted/30 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Objectif principal</h4>
            <p className="text-sm">{currentType.objective}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-3">Algorithmes populaires</h4>
              <div className="flex flex-wrap gap-2">
                {currentType.algorithms.map((algo, index) => (
                  <Badge key={index} variant="secondary">{algo}</Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Type de résultat</h4>
              <div className="flex items-center gap-2 text-sm bg-primary/10 p-3 rounded-lg">
                <ArrowRight className="h-4 w-4 text-primary" />
                {currentType.output}
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Exemples d'applications</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {currentType.examples.map((example, index) => (
                <div key={index} className="text-sm p-2 bg-muted/50 rounded flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  {example}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-400 p-4 rounded-r-lg">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
              💡 Quand l'utiliser ?
            </h4>
            <p className="text-blue-700 dark:text-blue-300 text-sm">
              {currentType.whenToUse}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UnsupervisedTypesComparison;
