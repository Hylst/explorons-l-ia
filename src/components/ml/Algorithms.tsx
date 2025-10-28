
import { Database, BarChart3, Network, Layers } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import AlgorithmVisualizer from './AlgorithmVisualizer';

interface AlgorithmProps {
  icon: React.ReactNode;
  name: string;
  category: string;
  description: string;
  useCase: string;
  keyFeatures: string[];
  openDefault?: boolean;
}

/**
 * Composant d'algorithme individuel avec description et fonctionnalités clés
 */
const Algorithm = ({ icon, name, category, description, useCase, keyFeatures, openDefault = false }: AlgorithmProps) => {
  return (
    <Collapsible defaultOpen={openDefault} className="rounded-xl overflow-hidden border border-primary/10 shadow-sm mb-4 bg-card">
      <CollapsibleTrigger className="flex items-center w-full px-6 py-4 hover:bg-secondary/20 transition-colors">
        <div className="mr-4 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
        <div className="flex-1 text-left">
          <h3 className="font-semibold">{name}</h3>
          <p className="text-xs text-muted-foreground">{category}</p>
        </div>
        <div className="text-primary ml-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="transform transition-transform collapsible-icon"
          >
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="px-6 py-4 border-t border-border/60">
        <p className="mb-3 text-sm text-muted-foreground">{description}</p>
        <div className="mb-3 bg-secondary/20 p-3 rounded-lg">
          <h4 className="text-sm font-medium mb-1">Cas d'usage typique</h4>
          <p className="text-xs text-muted-foreground">{useCase}</p>
        </div>
        <h4 className="text-sm font-medium mb-2">Caractéristiques clés</h4>
        <ul className="space-y-1.5">
          {keyFeatures.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mr-2 mt-1.5"></span>
              <span className="text-xs text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
};

/**
 * Composant présentant les algorithmes et méthodologies de Machine Learning
 * @returns {JSX.Element} Le composant Algorithms
 */
const Algorithms = () => {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="container px-4 mx-auto max-w-5xl">
        <SectionHeading
          pretitle="Fondamentaux"
          title="Algorithmes et Méthodologies"
          description="Découvrez les algorithmes qui sont au cœur du machine learning et leurs applications."
          center
        />

        {/* Ajout du nouveau composant de visualisation interactive */}
        <AlgorithmVisualizer />

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="glass-card p-4 rounded-xl animate-fade-in">
              <h3 className="font-medium mb-2">Classification</h3>
              <p className="text-sm text-muted-foreground">Attribuer des catégories aux données</p>
            </div>
            <div className="glass-card p-4 rounded-xl animate-fade-in" style={{ animationDelay: '100ms' }}>
              <h3 className="font-medium mb-2">Régression</h3>
              <p className="text-sm text-muted-foreground">Prédire des valeurs continues</p>
            </div>
            <div className="glass-card p-4 rounded-xl animate-fade-in" style={{ animationDelay: '200ms' }}>
              <h3 className="font-medium mb-2">Clustering</h3>
              <p className="text-sm text-muted-foreground">Identifier des groupes naturels</p>
            </div>
          </div>

          <div className="space-y-10">
            {/* Algorithmes de classification */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Algorithmes de classification</h3>
              <div className="space-y-4">
                <Algorithm
                  icon={<Database size={20} />}
                  name="Support Vector Machine (SVM)"
                  category="Classification & Régression"
                  description="Les SVM trouvent l'hyperplan qui sépare optimalement les classes dans un espace de caractéristiques, en maximisant la marge entre les points les plus proches."
                  useCase="Classification d'images, détection de spam, catégorisation de textes"
                  keyFeatures={[
                    "Efficace dans les espaces de grande dimension",
                    "Robuste face au surapprentissage grâce à la régularisation",
                    "Utilise des 'kernels' pour gérer des problèmes non linéaires",
                    "Plus performant quand les classes sont clairement séparables"
                  ]}
                  openDefault={true}
                />
                
                <Algorithm
                  icon={<Network size={20} />}
                  name="Random Forest"
                  category="Classification & Régression"
                  description="Un ensemble d'arbres de décision entraînés sur différents sous-ensembles de données et de caractéristiques, combinant leurs prédictions pour améliorer la précision et éviter le surapprentissage."
                  useCase="Prédiction de risques financiers, détection de fraudes, analyse de données médicales"
                  keyFeatures={[
                    "Haute précision et bonne généralisation",
                    "Robuste aux valeurs aberrantes et au bruit",
                    "Peut gérer des données non normalisées",
                    "Fournit des estimations de l'importance des variables"
                  ]}
                />
                
                <Algorithm
                  icon={<Database size={20} />}
                  name="K-Nearest Neighbors (k-NN)"
                  category="Classification & Régression"
                  description="Classe un point en fonction du vote majoritaire de ses k plus proches voisins, où k est un entier positif défini par l'utilisateur."
                  useCase="Systèmes de recommandation, reconnaissance de formes, estimation de valeurs immobilières"
                  keyFeatures={[
                    "Algorithme simple et intuitif",
                    "Pas d'entraînement explicite (apprentissage paresseux)",
                    "Sensible à l'échelle des caractéristiques",
                    "Performant avec peu de caractéristiques"
                  ]}
                />
              </div>
            </div>

            {/* Algorithmes de clustering */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Algorithmes de clustering</h3>
              <div className="space-y-4">
                <Algorithm
                  icon={<BarChart3 size={20} />}
                  name="K-means"
                  category="Clustering"
                  description="Divise n observations en k clusters, où chaque observation appartient au cluster avec la moyenne la plus proche, servant de prototype du cluster."
                  useCase="Segmentation client, compression d'image, détection d'anomalies"
                  keyFeatures={[
                    "Simple et rapide à exécuter",
                    "Fonctionne bien avec de grands ensembles de données",
                    "Nécessite de spécifier le nombre k de clusters à l'avance",
                    "Sensible à l'initialisation et aux valeurs aberrantes"
                  ]}
                />
                
                <Algorithm
                  icon={<Network size={20} />}
                  name="DBSCAN"
                  category="Clustering"
                  description="Algorithme basé sur la densité qui groupe les points proches et identifie les points isolés comme des anomalies."
                  useCase="Détection d'anomalies, analyse spatiale, segmentation d'images"
                  keyFeatures={[
                    "Ne nécessite pas de spécifier le nombre de clusters",
                    "Peut découvrir des clusters de forme arbitraire",
                    "Identifie naturellement les valeurs aberrantes",
                    "Moins efficace quand les densités varient beaucoup"
                  ]}
                />
                
                <Algorithm
                  icon={<Layers size={20} />}
                  name="Hierarchical Clustering"
                  category="Clustering"
                  description="Crée une hiérarchie de clusters représentée sous forme de dendrogramme, soit de manière agglomérative (bottom-up) soit divisive (top-down)."
                  useCase="Classification taxonomique, analyse de données génomiques, études de marché"
                  keyFeatures={[
                    "Fournit une structure hiérarchique des données",
                    "Ne nécessite pas de spécifier le nombre de clusters a priori",
                    "Visualisation intuitive avec des dendrogrammes",
                    "Moins efficace pour de grands ensembles de données"
                  ]}
                />
              </div>
            </div>

            {/* Réseaux de neurones */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Réseaux de neurones</h3>
              <div className="space-y-4">
                <Algorithm
                  icon={<Layers size={20} />}
                  name="Perceptron multicouche (MLP)"
                  category="Classification & Régression"
                  description="Réseau de neurones composé d'au moins trois couches (entrée, cachées, sortie) qui utilise la rétropropagation pour l'apprentissage supervisé."
                  useCase="Reconnaissance de formes, prévision financière, diagnostic médical"
                  keyFeatures={[
                    "Capable de modéliser des relations non linéaires complexes",
                    "Nécessite généralement de grandes quantités de données",
                    "Sensible aux hyperparamètres et à l'initialisation",
                    "Peut souffrir du surapprentissage sans régularisation"
                  ]}
                />
                
                <Algorithm
                  icon={<Layers size={20} />}
                  name="Réseau de neurones convolutif (CNN)"
                  category="Vision par ordinateur"
                  description="Architecture spécialisée avec des couches de convolution qui extrait automatiquement des caractéristiques hiérarchiques à partir d'images."
                  useCase="Classification d'images, détection d'objets, reconnaissance faciale"
                  keyFeatures={[
                    "Utilise le partage de paramètres et la connectivité locale",
                    "Invariance aux translations et distorsions mineures",
                    "Extrait automatiquement des caractéristiques pertinentes",
                    "Performant sur les données structurées en grille (images, séries temporelles)"
                  ]}
                />
                
                <Algorithm
                  icon={<Network size={20} />}
                  name="Transformer"
                  category="Traitement du langage naturel"
                  description="Architecture basée sur le mécanisme d'attention qui capture efficacement les dépendances à longue distance dans les séquences."
                  useCase="Traduction automatique, génération de texte, résumé automatique"
                  keyFeatures={[
                    "Traitement parallèle des séquences (contrairement aux RNNs)",
                    "Mécanisme d'attention pour capturer les relations entre tous les éléments",
                    "Modèles comme BERT et GPT sont basés sur cette architecture",
                    "Très performant sur de longues séquences"
                  ]}
                />
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 rounded-xl bg-primary/5 border border-primary/10 animate-fade-in">
            <h3 className="font-semibold mb-3">Évaluation et validation des modèles</h3>
            <p className="text-sm text-muted-foreground mb-4">
              L'évaluation rigoureuse des performances d'un modèle est essentielle pour garantir sa fiabilité et son applicabilité.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-background/60 p-4 rounded-lg border border-primary/10">
                <h4 className="font-medium mb-1">Validation croisée</h4>
                <p className="text-xs text-muted-foreground">
                  Technique qui divise les données en plusieurs sous-ensembles pour évaluer la capacité de généralisation du modèle
                </p>
              </div>
              <div className="bg-background/60 p-4 rounded-lg border border-primary/10">
                <h4 className="font-medium mb-1">Métriques de performance</h4>
                <p className="text-xs text-muted-foreground">
                  Précision, rappel, F1-score pour la classification; RMSE, MAE pour la régression
                </p>
              </div>
              <div className="bg-background/60 p-4 rounded-lg border border-primary/10">
                <h4 className="font-medium mb-1">Courbes ROC et AUC</h4>
                <p className="text-xs text-muted-foreground">
                  Évaluation graphique de la performance d'un classifieur binaire en fonction du seuil de discrimination
                </p>
              </div>
              <div className="bg-background/60 p-4 rounded-lg border border-primary/10">
                <h4 className="font-medium mb-1">Matrice de confusion</h4>
                <p className="text-xs text-muted-foreground">
                  Tableau qui visualise les performances d'un algorithme de classification en montrant les vrais/faux positifs/négatifs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Algorithms;
