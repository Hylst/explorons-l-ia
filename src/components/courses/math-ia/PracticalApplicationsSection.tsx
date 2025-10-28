
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Camera, MessageSquare, Car, Stethoscope, TrendingUp } from 'lucide-react';
import ConceptIllustration from './ConceptIllustration';
import DidYouKnow from '../DidYouKnow';

const PracticalApplicationsSection: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <Card className="border-l-4 border-l-emerald-500 bg-gradient-to-r from-emerald-50/50 to-teal-50/50 dark:from-emerald-950/20 dark:to-teal-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Brain className="h-5 w-5 text-emerald-500" />
            Applications Concrètes : Les Maths au Service de l'IA
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed mb-4 text-foreground">
            Maintenant que vous maîtrisez les concepts mathématiques fondamentaux, découvrons comment 
            ils se combinent pour créer des applications d'IA révolutionnaires qui transforment notre quotidien.
          </p>
          
          <div className="bg-emerald-100/50 dark:bg-emerald-900/30 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800">
            <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-2">🎯 L'Union fait la Force</h4>
            <p className="text-emerald-700 dark:text-emerald-300">
              Chaque application d'IA combine plusieurs domaines mathématiques. Par exemple, un système 
              de reconnaissance vocale utilise l'algèbre linéaire pour traiter le signal, les probabilités 
              pour gérer l'incertitude, et l'optimisation pour améliorer ses performances !
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Applications par domaine */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ConceptIllustration
          icon={Camera}
          title="Vision par Ordinateur"
          description="Comment l'IA 'voit' et comprend les images"
          examples={[
            { label: "Matrice d'image", value: "RGB [255,128,0]", description: "Pixels → Vecteurs" },
            { label: "Convolution", value: "f * g", description: "Détection de motifs" },
            { label: "Softmax", value: "P(chat) = 0.85", description: "Classification probabiliste" }
          ]}
          bgColor="bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-950/20"
        />

        <ConceptIllustration
          icon={MessageSquare}
          title="Traitement du Langage"
          description="L'IA qui comprend et génère du texte"
          examples={[
            { label: "Word2Vec", value: "chat → [0.2, 0.8, ...]", description: "Mots → Vecteurs" },
            { label: "Attention", value: "A = QK^T/√d", description: "Relations contextuelles" },
            { label: "Backprop", value: "∂L/∂θ", description: "Apprentissage par gradient" }
          ]}
          bgColor="bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20"
        />

        <ConceptIllustration
          icon={Car}
          title="Véhicules Autonomes"
          description="L'IA qui prend des décisions de conduite"
          examples={[
            { label: "Capteurs", value: "LIDAR → nuage 3D", description: "Données spatiales" },
            { label: "Kalman Filter", value: "x = Ax + Bu", description: "Estimation d'état" },
            { label: "Q-Learning", value: "Q(s,a)", description: "Décisions optimales" }
          ]}
          bgColor="bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20"
        />

        <ConceptIllustration
          icon={Stethoscope}
          title="IA Médicale"
          description="Diagnostic et analyse médicale assistés"
          examples={[
            { label: "Imagerie", value: "CNN + Transfer", description: "Détection anomalies" },
            { label: "Bayésien", value: "P(maladie|symptômes)", description: "Diagnostic probabiliste" },
            { label: "Régression", value: "y = βx + ε", description: "Prédiction pronostic" }
          ]}
          bgColor="bg-gradient-to-br from-red-50/50 to-rose-50/50 dark:from-red-950/20 dark:to-rose-950/20"
        />

        <ConceptIllustration
          icon={TrendingUp}
          title="Finance Algorithmique"
          description="Trading et analyse financière automatisés"
          examples={[
            { label: "Série temporelle", value: "LSTM/GRU", description: "Prédiction prix" },
            { label: "Portfolio", value: "min σ², max μ", description: "Optimisation risque/rendement" },
            { label: "Monte Carlo", value: "E[X] ≈ Σxi/n", description: "Simulation scénarios" }
          ]}
          bgColor="bg-gradient-to-br from-amber-50/50 to-orange-50/50 dark:from-amber-950/20 dark:to-orange-950/20"
        />

        <ConceptIllustration
          icon={Brain}
          title="IA Générative"
          description="Création de contenu par l'IA"
          examples={[
            { label: "VAE", value: "KL(q||p)", description: "Espace latent" },
            { label: "GAN", value: "min max V(D,G)", description: "Jeu antagoniste" },
            { label: "Diffusion", value: "∇log p(x)", description: "Génération par bruit" }
          ]}
          bgColor="bg-gradient-to-br from-indigo-50/50 to-violet-50/50 dark:from-indigo-950/20 dark:to-violet-950/20"
        />
      </div>

      {/* Cas d'étude détaillé */}
      <Card className="bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-lg text-blue-800 dark:text-blue-200">
            🔬 Cas d'Étude : ChatGPT et les Mathématiques
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-foreground">
            Analysons comment ChatGPT utilise chacun des 4 piliers mathématiques :
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-card/50 dark:bg-card/30 p-4 rounded-lg border border-border/50">
                <h5 className="font-semibold text-foreground mb-2">🔢 Algèbre Linéaire</h5>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• <strong>Embeddings :</strong> Chaque mot → vecteur de 12,288 dimensions</li>
                  <li>• <strong>Attention :</strong> Matrices Q, K, V pour relations contextuelles</li>
                  <li>• <strong>Transformations :</strong> Couches linéaires W × x + b</li>
                </ul>
              </div>
              
              <div className="bg-card/50 dark:bg-card/30 p-4 rounded-lg border border-border/50">
                <h5 className="font-semibold text-foreground mb-2">📊 Probabilités</h5>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• <strong>Prédiction :</strong> P(mot suivant | contexte)</li>
                  <li>• <strong>Sampling :</strong> Temperature et top-k pour la créativité</li>
                  <li>• <strong>Softmax :</strong> Conversion scores → probabilités</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-card/50 dark:bg-card/30 p-4 rounded-lg border border-border/50">
                <h5 className="font-semibold text-foreground mb-2">📈 Calcul Différentiel</h5>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• <strong>Backpropagation :</strong> ∂L/∂θ pour tous les 175B paramètres</li>
                  <li>• <strong>Adam :</strong> Optimiseur adaptatif avec momentum</li>
                  <li>• <strong>Gradient clipping :</strong> Stabilisation de l'apprentissage</li>
                </ul>
              </div>
              
              <div className="bg-card/50 dark:bg-card/30 p-4 rounded-lg border border-border/50">
                <h5 className="font-semibold text-foreground mb-2">📋 Statistiques</h5>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• <strong>Layer Norm :</strong> Normalisation pour stabilité</li>
                  <li>• <strong>Dropout :</strong> Régularisation stochastique</li>
                  <li>• <strong>Perplexité :</strong> Métrique de qualité du modèle</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-purple-100/50 dark:bg-purple-900/30 rounded-lg border border-purple-200 dark:border-purple-800">
            <p className="text-sm font-medium text-purple-800 dark:text-purple-200">
              💡 Résultat : Cette symphonie mathématique permet à ChatGPT de comprendre et générer 
              du texte avec une fluidité quasi-humaine !
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Impact sociétal */}
      <Card className="bg-gradient-to-r from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-lg text-green-800 dark:text-green-200">
            🌍 Impact Sociétal des Mathématiques en IA
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-card/50 dark:bg-card/30 rounded-lg border border-border/50">
              <h5 className="font-semibold text-foreground mb-2">🏥 Santé</h5>
              <p className="text-sm text-muted-foreground mb-2">
                Diagnostic précoce du cancer, découverte de médicaments, personnalisation des traitements
              </p>
              <Badge variant="outline" className="text-xs">Sauve des vies</Badge>
            </div>
            
            <div className="p-4 bg-card/50 dark:bg-card/30 rounded-lg border border-border/50">
              <h5 className="font-semibold text-foreground mb-2">🌱 Environnement</h5>
              <p className="text-sm text-muted-foreground mb-2">
                Optimisation énergétique, prédiction climatique, gestion des ressources
              </p>
              <Badge variant="outline" className="text-xs">Protège la planète</Badge>
            </div>
            
            <div className="p-4 bg-card/50 dark:bg-card/30 rounded-lg border border-border/50">
              <h5 className="font-semibold text-foreground mb-2">🎓 Éducation</h5>
              <p className="text-sm text-muted-foreground mb-2">
                Personnalisation de l'apprentissage, assistants pédagogiques, accessibilité
              </p>
              <Badge variant="outline" className="text-xs">Démocratise le savoir</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Le saviez-vous */}
      <DidYouKnow
        items={[
          {
            title: "AlphaFold et les protéines",
            content: "AlphaFold utilise l'algèbre linéaire pour prédire la structure 3D des protéines, révolutionnant la biologie"
          },
          {
            title: "DALL-E et la créativité",
            content: "DALL-E génère des images en navigant dans un espace latent de 512 dimensions grâce aux VAE"
          },
          {
            title: "GPT-4 et la complexité",
            content: "GPT-4 effectue environ 100 billions d'opérations mathématiques pour générer une seule phrase"
          }
        ]}
      />

      {/* Perspectives d'avenir */}
      <Card className="bg-gradient-to-r from-violet-50/50 to-fuchsia-50/50 dark:from-violet-950/20 dark:to-fuchsia-950/20 border-violet-200 dark:border-violet-800">
        <CardHeader>
          <CardTitle className="text-lg text-violet-800 dark:text-violet-200">
            🚀 L'Avenir : Nouvelles Frontières Mathématiques
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-foreground">
              Les mathématiques continuent d'évoluer pour répondre aux défis de l'IA de demain :
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h5 className="font-semibold text-foreground">🔬 Recherches Actuelles</h5>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• <strong>Informatique quantique :</strong> Algorithmes exponentiellement plus rapides</li>
                  <li>• <strong>Apprentissage fédéré :</strong> IA distribuée préservant la confidentialité</li>
                  <li>• <strong>IA neuromorphique :</strong> Circuits inspirés du cerveau humain</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h5 className="font-semibold text-foreground">🎯 Défis Mathématiques</h5>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• <strong>Interprétabilité :</strong> Comprendre les "boîtes noires"</li>
                  <li>• <strong>Efficacité énergétique :</strong> IA verte et durable</li>
                  <li>• <strong>AGI :</strong> Intelligence artificielle générale</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PracticalApplicationsSection;
