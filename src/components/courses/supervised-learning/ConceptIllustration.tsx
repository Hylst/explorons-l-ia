
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, EyeOff, Lightbulb, Target, Database, Brain } from 'lucide-react';

interface IllustrationData {
  id: string;
  title: string;
  description: string;
  visual: React.ReactNode;
  analogy: string;
  keyPoint: string;
}

const illustrations: IllustrationData[] = [
  {
    id: 'supervised-concept',
    title: 'Le Concept de Supervision',
    description: 'L\'apprentissage supervisé, c\'est comme apprendre avec un professeur qui corrige chaque exercice.',
    visual: (
      <div className="flex items-center justify-center h-32 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg">
        <div className="flex items-center gap-6">
          <div className="text-center">
            <Database className="h-8 w-8 text-blue-600 mx-auto mb-2" />
            <div className="text-xs font-semibold">Données + Labels</div>
          </div>
          <div className="text-2xl text-blue-500">→</div>
          <div className="text-center">
            <Brain className="h-8 w-8 text-green-600 mx-auto mb-2" />
            <div className="text-xs font-semibold">Algorithme</div>
          </div>
          <div className="text-2xl text-green-500">→</div>
          <div className="text-center">
            <Target className="h-8 w-8 text-purple-600 mx-auto mb-2" />
            <div className="text-xs font-semibold">Prédictions</div>
          </div>
        </div>
      </div>
    ),
    analogy: '🎓 Comme un élève qui apprend avec un professeur : on montre la question ET la bonne réponse !',
    keyPoint: 'La supervision = avoir les bonnes réponses pendant l\'apprentissage'
  },
  {
    id: 'classification-vs-regression',
    title: 'Classification vs Régression',
    description: 'Deux types de prédictions : deviner une catégorie ou mesurer une valeur.',
    visual: (
      <div className="grid grid-cols-2 gap-4 h-32">
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 rounded-lg p-4 flex flex-col items-center justify-center">
          <div className="text-2xl mb-2">🏷️</div>
          <div className="text-sm font-semibold text-blue-800 dark:text-blue-200">Classification</div>
          <div className="text-xs text-blue-600 dark:text-blue-300">Chat ou Chien ?</div>
        </div>
        <div className="bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 rounded-lg p-4 flex flex-col items-center justify-center">
          <div className="text-2xl mb-2">📊</div>
          <div className="text-sm font-semibold text-green-800 dark:text-green-200">Régression</div>
          <div className="text-xs text-green-600 dark:text-green-300">Prix : 250 000€</div>
        </div>
      </div>
    ),
    analogy: '🎯 Classification = ranger dans des boîtes, Régression = mesurer avec une règle',
    keyPoint: 'Classification → catégories, Régression → valeurs numériques'
  },
  {
    id: 'overfitting-concept',
    title: 'Le Sur-apprentissage (Overfitting)',
    description: 'Quand un modèle apprend "par cœur" au lieu de comprendre les patterns généraux.',
    visual: (
      <div className="grid grid-cols-2 gap-4 h-32">
        <div className="bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30 rounded-lg p-4 flex flex-col items-center justify-center">
          <div className="text-2xl mb-2">🤯</div>
          <div className="text-sm font-semibold text-red-800 dark:text-red-200">Sur-apprentissage</div>
          <div className="text-xs text-red-600 dark:text-red-300">Mémorise tout</div>
        </div>
        <div className="bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 rounded-lg p-4 flex flex-col items-center justify-center">
          <div className="text-2xl mb-2">🎯</div>
          <div className="text-sm font-semibold text-green-800 dark:text-green-200">Bon Équilibre</div>
          <div className="text-xs text-green-600 dark:text-green-300">Comprend les patterns</div>
        </div>
      </div>
    ),
    analogy: '📚 Comme un étudiant qui apprend par cœur vs celui qui comprend les concepts',
    keyPoint: 'Un bon modèle généralise, il ne mémorise pas !'
  },
  {
    id: 'data-quality',
    title: 'Qualité des Données',
    description: 'Des données de qualité sont la fondation d\'un bon modèle d\'IA.',
    visual: (
      <div className="flex items-center justify-center h-32 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg">
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-3xl mb-2">🗑️</div>
            <div className="text-xs font-semibold text-red-600">Données sales</div>
          </div>
          <div className="text-2xl">→</div>
          <div className="text-center">
            <div className="text-3xl mb-2">❌</div>
            <div className="text-xs font-semibold text-red-600">Mauvais modèle</div>
          </div>
          <div className="mx-4 text-gray-400">VS</div>
          <div className="text-center">
            <div className="text-3xl mb-2">✨</div>
            <div className="text-xs font-semibold text-green-600">Données propres</div>
          </div>
          <div className="text-2xl">→</div>
          <div className="text-center">
            <div className="text-3xl mb-2">🎯</div>
            <div className="text-xs font-semibold text-green-600">Excellent modèle</div>
          </div>
        </div>
      </div>
    ),
    analogy: '🍳 Garbage In, Garbage Out - Comme cuisiner avec de mauvais ingrédients !',
    keyPoint: '80% du temps en Data Science = nettoyer et préparer les données'
  }
];

const ConceptIllustration: React.FC = () => {
  const [currentIllustration, setCurrentIllustration] = useState<number>(0);
  const [showAnalogy, setShowAnalogy] = useState<boolean>(true);

  const current = illustrations[currentIllustration];

  return (
    <Card className="border-primary/20">
      <CardContent className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-amber-500" />
            <h3 className="text-lg font-semibold">Illustrations Conceptuelles</h3>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowAnalogy(!showAnalogy)}
            className="flex items-center gap-2"
          >
            {showAnalogy ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            {showAnalogy ? 'Masquer' : 'Afficher'} analogies
          </Button>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap gap-2">
          {illustrations.map((illustration, index) => (
            <Button
              key={illustration.id}
              variant={currentIllustration === index ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentIllustration(index)}
              className="text-xs"
            >
              {illustration.title}
            </Button>
          ))}
        </div>

        {/* Illustration actuelle */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Badge variant="secondary">Concept {currentIllustration + 1}</Badge>
            <h4 className="text-xl font-semibold">{current.title}</h4>
          </div>
          
          <p className="text-muted-foreground leading-relaxed">
            {current.description}
          </p>

          {/* Visual */}
          <div className="border border-border rounded-lg p-4">
            {current.visual}
          </div>

          {/* Analogie */}
          {showAnalogy && (
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
              <div className="flex items-start gap-3">
                <div className="text-2xl">💡</div>
                <div>
                  <div className="font-semibold text-amber-800 dark:text-amber-200 mb-1">Analogie :</div>
                  <div className="text-amber-700 dark:text-amber-300 text-sm">{current.analogy}</div>
                </div>
              </div>
            </div>
          )}

          {/* Point clé */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Target className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <div className="font-semibold text-primary mb-1">Point clé à retenir :</div>
                <div className="text-sm">{current.keyPoint}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation suivant/précédent */}
        <div className="flex justify-between items-center pt-4 border-t">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentIllustration(Math.max(0, currentIllustration - 1))}
            disabled={currentIllustration === 0}
          >
            ← Précédent
          </Button>
          
          <div className="text-sm text-muted-foreground">
            {currentIllustration + 1} / {illustrations.length}
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentIllustration(Math.min(illustrations.length - 1, currentIllustration + 1))}
            disabled={currentIllustration === illustrations.length - 1}
          >
            Suivant →
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConceptIllustration;
