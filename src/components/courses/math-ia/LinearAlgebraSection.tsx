
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Calculator, ArrowRight, RotateCw, Scale } from 'lucide-react';
import InteractiveExample from '../InteractiveExample';
import VectorVisualization from './VectorVisualization';
import MathematicalFormula from './MathematicalFormula';
import ConceptIllustration from './ConceptIllustration';
import PracticalExercise from './PracticalExercise';

const LinearAlgebraSection: React.FC = () => {
  const [vectorA, setVectorA] = useState([3, 2]);
  const [vectorB, setVectorB] = useState([1, 4]);
  const [scalarValue, setScalarValue] = useState([2]);

  const exercises = [
    {
      question: "Que représente le vecteur [255, 128, 0] ?",
      options: [
        "Une position GPS",
        "Une couleur RGB orange",
        "Un score d'étudiant",
        "Une température"
      ],
      correctAnswer: 1,
      explanation: "Le vecteur [255, 128, 0] représente une couleur orange en RGB : Rouge=255, Vert=128, Bleu=0."
    },
    {
      question: "Comment calcule-t-on [2, 3] + [1, 4] ?",
      options: [
        "[2+1, 3+4] = [3, 7]",
        "[2×1, 3×4] = [2, 12]",
        "[2-1, 3-4] = [1, -1]",
        "[2/1, 3/4] = [2, 0.75]"
      ],
      correctAnswer: 0,
      explanation: "L'addition de vecteurs se fait composante par composante : [a, b] + [c, d] = [a+c, b+d]."
    }
  ];

  return (
    <div className="space-y-8">
      {/* Introduction avec analogie améliorée */}
      <Card className="border-l-4 border-l-blue-500 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-foreground">
            <Calculator className="h-5 w-5 text-blue-500" />
            L'Algèbre Linéaire : Le Langage des Données
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed mb-4 text-foreground">
            L'algèbre linéaire est comme le système nerveux de l'IA. Elle permet de manipuler 
            et transformer les données de manière efficace et élégante.
          </p>
          
          <div className="bg-blue-100/50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">💡 Analogie Simple</h4>
            <p className="text-blue-700 dark:text-blue-300">
              Imaginez une image de 1000x1000 pixels. C'est 1 million de nombres ! 
              L'algèbre linéaire nous donne les outils pour manipuler ces énormes quantités 
              de données comme si c'était un seul objet mathématique.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Concepts fondamentaux avec illustrations */}
      <div className="grid md:grid-cols-2 gap-6">
        <ConceptIllustration
          icon={Calculator}
          title="Les Vecteurs : Des Listes Ordonnées"
          description="Un vecteur, c'est simplement une liste de nombres qui représente quelque chose."
          examples={[
            { label: "Position GPS", value: "[48.8566, 2.3522]", description: "Paris" },
            { label: "Couleur RGB", value: "[255, 128, 0]", description: "Orange" },
            { label: "Notes", value: "[16, 14, 18, 12]", description: "Maths, Physique, Anglais, Histoire" }
          ]}
          bgColor="bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20"
        />

        <ConceptIllustration
          icon={Scale}
          title="Les Matrices : Des Tableaux de Nombres"
          description="Une matrice organise plusieurs vecteurs ensemble, comme un tableau Excel."
          examples={[
            { label: "Image 3x3", value: "[[255,128,64],[192,255,128],[64,192,255]]", description: "Pixels RGB" },
            { label: "Base données", value: "[[16,14],[12,18],[15,16]]", description: "Notes étudiants" },
            { label: "Transformation", value: "[[cos(θ),-sin(θ)],[sin(θ),cos(θ)]]", description: "Rotation" }
          ]}
          bgColor="bg-gradient-to-br from-purple-50/50 to-pink-50/50 dark:from-purple-950/20 dark:to-pink-950/20"
        />
      </div>

      {/* Formules mathématiques */}
      <div className="grid md:grid-cols-2 gap-4">
        <MathematicalFormula
          title="Addition de Vecteurs"
          formula="[a,b] + [c,d] = [a+c, b+d]"
          explanation="On additionne composante par composante"
          example="[3,2] + [1,4] = [4,6]"
          type="primary"
        />
        
        <MathematicalFormula
          title="Multiplication Scalaire"
          formula="k × [a,b] = [k×a, k×b]"
          explanation="On multiplie chaque composante par le scalaire"
          example="2 × [3,2] = [6,4]"
          type="secondary"
        />
      </div>

      {/* Visualisation interactive améliorée */}
      <VectorVisualization
        vectorA={vectorA}
        vectorB={vectorB}
        operation="addition"
      />

      <VectorVisualization
        vectorA={vectorA}
        vectorB={vectorB}
        operation="scalar"
        scalar={scalarValue[0]}
      />

      {/* Exemple interactif */}
      <InteractiveExample 
        title="Opérations sur les Vecteurs"
        description="Explorez les opérations fondamentales de l'algèbre linéaire"
        steps={[
          {
            title: "Addition de vecteurs",
            description: "Additionner deux vecteurs : [a,b] + [c,d] = [a+c, b+d]"
          },
          {
            title: "Multiplication par un scalaire",
            description: "Multiplier un vecteur par un nombre : k × [a,b] = [k×a, k×b]"
          },
          {
            title: "Interprétation géométrique",
            description: "Voir les vecteurs comme des flèches dans l'espace"
          }
        ]}
        finalMessage="Ces opérations simples sont la base de tous les calculs en IA !"
      />

      {/* Applications en IA enrichies */}
      <Card className="bg-gradient-to-r from-green-50/50 to-blue-50/50 dark:from-green-950/20 dark:to-blue-950/20 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="text-lg text-green-800 dark:text-green-200">
            🚀 Applications Concrètes en IA
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-card/50 dark:bg-card/30 rounded-lg border border-border/50">
              <div className="flex items-center gap-2 mb-2">
                <RotateCw className="h-5 w-5 text-blue-600" />
                <h5 className="font-semibold text-foreground">Transformation d'images</h5>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Rotation, redimensionnement, filtres - tout est fait avec des matrices
              </p>
              <p className="text-xs bg-blue-100/50 dark:bg-blue-900/30 p-2 rounded border border-blue-200 dark:border-blue-800 text-foreground">
                Une matrice 3x3 peut faire tourner une image de 45°
              </p>
            </div>
            
            <div className="p-4 bg-card/50 dark:bg-card/30 rounded-lg border border-border/50">
              <div className="flex items-center gap-2 mb-2">
                <Scale className="h-5 w-5 text-green-600" />
                <h5 className="font-semibold text-foreground">Réduction de dimensionnalité</h5>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Passer de 1000 dimensions à 2 pour visualiser les données
              </p>
              <p className="text-xs bg-green-100/50 dark:bg-green-900/30 p-2 rounded border border-green-200 dark:border-green-800 text-foreground">
                PCA utilise la décomposition de matrices
              </p>
            </div>
            
            <div className="p-4 bg-card/50 dark:bg-card/30 rounded-lg border border-border/50">
              <div className="flex items-center gap-2 mb-2">
                <ArrowRight className="h-5 w-5 text-purple-600" />
                <h5 className="font-semibold text-foreground">Réseaux de neurones</h5>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Chaque couche est une multiplication matricielle
              </p>
              <p className="text-xs bg-purple-100/50 dark:bg-purple-900/30 p-2 rounded border border-purple-200 dark:border-purple-800 text-foreground">
                Entrée × Poids + Biais = Sortie
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Exercice pratique interactif */}
      <PracticalExercise
        title="Défi Pratique : Comprendre les Multiplications Matricielles"
        description="Testez votre compréhension avec ces exercices interactifs"
        steps={exercises}
      />

      {/* Exemple concret enrichi */}
      <Card className="bg-gradient-to-r from-amber-50/50 to-orange-50/50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-200 dark:border-amber-800">
        <CardHeader>
          <CardTitle className="text-lg text-amber-800 dark:text-amber-200">
            💪 Cas Pratique : Base de Données d'Étudiants
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-foreground">
            Supposons que vous ayez une base de données de 3 étudiants avec leurs notes en 2 matières :
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-card/50 dark:bg-card/30 p-4 rounded-lg border border-border/50">
              <h5 className="font-medium mb-2 text-foreground">Matrice des Notes</h5>
              <div className="font-mono text-sm text-foreground">
                <div>      Math  Phys</div>
                <div>Alice  [16,   14]</div>
                <div>Bob    [12,   18]</div>
                <div>Clara  [15,   16]</div>
              </div>
            </div>
            
            <div className="bg-card/50 dark:bg-card/30 p-4 rounded-lg border border-border/50">
              <h5 className="font-medium mb-2 text-foreground">Coefficients</h5>
              <div className="font-mono text-sm text-foreground">
                <div>Math: coefficient 2</div>
                <div>Phys: coefficient 1</div>
                <div className="mt-2 text-muted-foreground">
                  Matrice × Vecteur = Moyennes pondérées
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-green-100/50 dark:bg-green-900/30 rounded-lg border border-green-200 dark:border-green-800">
            <p className="text-sm font-medium text-green-800 dark:text-green-200">
              Résultat : Alice(15.3), Bob(14), Clara(15.3) - Tout ça en une seule opération matricielle !
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LinearAlgebraSection;
