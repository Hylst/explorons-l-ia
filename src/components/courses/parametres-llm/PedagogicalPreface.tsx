
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Settings, 
  Lightbulb,
  BookOpen,
  Target,
  Zap,
  Users,
  Car,
  Building
} from 'lucide-react';
import LessonSection from '@/components/courses/LessonSection';
import TechnicalTooltip from '@/components/courses/TechnicalTooltip';
import AnalogyBox from '@/components/courses/AnalogyBox';

const PedagogicalPreface = () => {
  return (
    <LessonSection
      title="Introduction : Pourquoi comprendre les paramètres des LLM ?"
      icon={<BookOpen className="h-6 w-6" />}
      delay={0}
    >
      <div className="space-y-6">
        {/* Introduction humaine et accessible */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-800 p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <Brain className="h-8 w-8 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3">
                Bienvenue dans l'univers fascinant des LLM !
              </h3>
              <p className="text-blue-700 dark:text-blue-300 leading-relaxed mb-4">
                Imaginez que vous voulez acheter une voiture. Vous ne vous contentez pas de dire "je veux une voiture", 
                n'est-ce pas ? Vous regardez la puissance du moteur, la consommation, l'espace de coffre, 
                les options de sécurité... 
              </p>
              <p className="text-blue-700 dark:text-blue-300 leading-relaxed">
                Avec les <TechnicalTooltip 
                  term="LLM (Large Language Models)" 
                  definition="Modèles de langage de grande taille capables de comprendre et générer du texte de manière sophistiquée"
                >
                  LLM
                </TechnicalTooltip>, c'est exactement pareil ! Pour choisir le bon modèle et l'optimiser pour vos besoins, 
                vous devez comprendre ses "caractéristiques techniques" - ce qu'on appelle les paramètres.
              </p>
            </div>
          </div>
        </div>

        {/* Analogie de la voiture */}
        <AnalogyBox 
          title="🚗 Analogie : LLM = Voiture high-tech"
          content="Comme pour choisir une voiture, chaque paramètre d'un LLM a son importance : la 'cylindrée' (nombre de paramètres) détermine la puissance, la 'transmission' (architecture) définit le type d'usage, et les 'réglages' (paramètres d'inférence) permettent d'ajuster les performances selon vos besoins !"
          variant="tip"
        />

        {/* Ce que vous allez apprendre */}
        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800">
          <CardContent className="p-6">
            <h4 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
              <Target className="h-5 w-5" />
              À la fin de ce cours, vous saurez :
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Settings className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-green-700 dark:text-green-300">Décoder l'architecture</p>
                    <p className="text-sm text-green-600 dark:text-green-400">Comprendre pourquoi GPT-4 coûte plus cher que GPT-3.5</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-green-700 dark:text-green-300">Optimiser les performances</p>
                    <p className="text-sm text-green-600 dark:text-green-400">Ajuster temperature et top-p comme un pro</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Building className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-green-700 dark:text-green-300">Choisir le bon modèle</p>
                    <p className="text-sm text-green-600 dark:text-green-400">Selon votre budget et vos besoins métier</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-green-700 dark:text-green-300">Éviter les pièges</p>
                    <p className="text-sm text-green-600 dark:text-green-400">Hallucinations, biais, limitations techniques</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Pourquoi c'est important MAINTENANT */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border border-amber-200 dark:border-amber-800 p-6 rounded-lg">
          <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-3 flex items-center gap-2">
            <Lightbulb className="h-5 w-5" />
            Pourquoi ce cours est crucial en 2024 ?
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Badge className="bg-amber-100 text-amber-800 border-amber-300">💰 Coûts</Badge>
              <p className="text-sm text-amber-700 dark:text-amber-300">
                Utiliser GPT-4 coûte 20x plus cher que GPT-3.5. Savoir quand utiliser quoi peut vous faire économiser des milliers d'euros !
              </p>
            </div>
            <div className="space-y-2">
              <Badge className="bg-amber-100 text-amber-800 border-amber-300">⚡ Performance</Badge>
              <p className="text-sm text-amber-700 dark:text-amber-300">
                Mal configurer les paramètres = réponses incohérentes ou trop lentes. 80% des échecs viennent d'une mauvaise configuration !
              </p>
            </div>
            <div className="space-y-2">
              <Badge className="bg-amber-100 text-amber-800 border-amber-300">🚀 Concurrence</Badge>
              <p className="text-sm text-amber-700 dark:text-amber-300">
                Les entreprises qui maîtrisent ces paramètres prennent une longueur d'avance sur leurs concurrents.
              </p>
            </div>
          </div>
        </div>

        {/* Plan du cours avec analogies */}
        <Card>
          <CardContent className="p-6">
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Feuille de route de notre exploration
            </h4>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800">
                  <h5 className="font-medium text-blue-800 dark:text-blue-200 mb-2">🏗️ I. Architecture</h5>
                  <p className="text-sm text-blue-600 dark:text-blue-400">Le "moteur" du LLM : taille, type, profondeur</p>
                </div>
                <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800">
                  <h5 className="font-medium text-purple-800 dark:text-purple-200 mb-2">🎓 II. Entraînement</h5>
                  <p className="text-sm text-purple-600 dark:text-purple-400">Comment le modèle a "appris" à parler</p>
                </div>
                <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800">
                  <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">⚙️ III. Inférence</h5>
                  <p className="text-sm text-green-600 dark:text-green-400">Les "réglages" que VOUS pouvez contrôler</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800">
                  <h5 className="font-medium text-orange-800 dark:text-orange-200 mb-2">✨ IV. Capacités</h5>
                  <p className="text-sm text-orange-600 dark:text-orange-400">Les "super-pouvoirs" qui émergent</p>
                </div>
                <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800">
                  <h5 className="font-medium text-red-800 dark:text-red-200 mb-2">🚀 V. Optimisation</h5>
                  <p className="text-sm text-red-600 dark:text-red-400">Techniques pour aller plus vite et moins cher</p>
                </div>
                <div className="p-4 rounded-lg bg-teal-50 dark:bg-teal-950/30 border border-teal-200 dark:border-teal-800">
                  <h5 className="font-medium text-teal-800 dark:text-teal-200 mb-2">💼 VI. Pratique</h5>
                  <p className="text-sm text-teal-600 dark:text-teal-400">Applications concrètes et études de cas</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Message d'encouragement */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border border-purple-200 dark:border-purple-800 p-6 rounded-lg text-center">
          <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
            🎯 Prêt(e) pour l'aventure ?
          </h4>
          <p className="text-purple-700 dark:text-purple-300">
            Ne vous inquiétez pas si certains termes vous semblent complexes au début. 
            Nous avons prévu des <strong>infobulles explicatives</strong> sur tous les concepts techniques, 
            des <strong>analogies concrètes</strong> et des <strong>exemples pratiques</strong> pour rendre 
            tout cela accessible et passionnant !
          </p>
        </div>
      </div>
    </LessonSection>
  );
};

export default PedagogicalPreface;
