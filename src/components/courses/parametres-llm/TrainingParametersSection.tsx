
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  TrendingUp,
  Clock,
  Zap,
  Target,
  Settings2,
  BookOpen,
  Car
} from 'lucide-react';
import LessonSection from '@/components/courses/LessonSection';
import TechnicalTooltip from '@/components/courses/TechnicalTooltip';
import AnalogyBox from '@/components/courses/AnalogyBox';

const TrainingParametersSection = () => {
  const trainingParams = [
    {
      param: "Learning Rate",
      description: "La 'vitesse d'apprentissage' - à quelle vitesse le modèle ajuste sa compréhension",
      role: "Contrôle la rapidité d'adaptation pendant l'entraînement",
      values: "1e-4 à 1e-6 (très petit !)",
      impact: "Trop élevé = apprentissage chaotique, trop bas = apprentissage trop lent",
      analogy: "Comme la vitesse en voiture : trop vite et vous ratez les virages, trop lent et vous n'arrivez jamais !",
      icon: <TrendingUp className="h-5 w-5 text-blue-500" />
    },
    {
      param: "Batch Size",
      description: "Le nombre d'exemples que le modèle 'étudie' simultanément à chaque étape",
      role: "Détermine la stabilité et la vitesse d'entraînement",
      values: "512 à 1M+ exemples par batch",
      impact: "↑ Batch = plus stable mais plus de mémoire, ↓ Batch = moins stable mais plus rapide",
      analogy: "Comme étudier : réviser 10 mots à la fois vs 1000 mots. Plus c'est gros, plus c'est stable mais plus c'est lourd !",
      icon: <BookOpen className="h-5 w-5 text-green-500" />
    },
    {
      param: "Optimiseur",
      description: "L'algorithme qui 'guide' l'apprentissage du modèle",
      role: "Détermine comment le modèle corrige ses erreurs",
      values: "Adam, AdamW, SGD, RMSprop...",
      impact: "Chaque optimiseur a ses forces : AdamW est le plus populaire pour les LLM",
      analogy: "Comme un professeur particulier : chacun a sa méthode pour vous faire progresser efficacement",
      icon: <Target className="h-5 w-5 text-purple-500" />
    },
    {
      param: "Warm-up Steps",
      description: "Une période d'échauffement où l'apprentissage commence doucement",
      role: "Évite les 'chocs' au début de l'entraînement",
      values: "Généralement 1% du total des étapes",
      impact: "Stabilise l'apprentissage initial et améliore les performances finales",
      analogy: "Comme l'échauffement avant le sport : on commence doucement pour éviter les blessures !",
      icon: <Clock className="h-5 w-5 text-orange-500" />
    },
    {
      param: "Weight Decay",
      description: "Une technique pour empêcher le modèle de 'trop apprendre par cœur'",
      role: "Régularisation contre le surapprentissage",
      values: "0.01 à 0.1",
      impact: "Aide le modèle à généraliser plutôt qu'à mémoriser",
      analogy: "Comme réviser en comprenant plutôt qu'en apprenant par cœur : plus efficace à long terme !",
      icon: <Settings2 className="h-5 w-5 text-red-500" />
    }
  ];

  return (
    <LessonSection
      title="II. Hyperparamètres d'Entraînement"
      icon={<GraduationCap className="h-6 w-6" />}
      delay={1}
    >
      <div className="space-y-6">
        {/* Introduction avec analogie */}
        <AnalogyBox 
          title="🎓 L'entraînement d'un LLM, c'est comme..."
          content="Imaginez enseigner à un élève très doué mais qui apprend différemment des humains. Les hyperparamètres d'entraînement, ce sont vos 'méthodes pédagogiques' : la vitesse à laquelle vous enseignez, le nombre d'exemples par leçon, votre style de correction... Ces choix déterminent si votre élève deviendra un génie ou restera confus !"
          variant="tip"
        />

        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 border border-amber-200 dark:border-amber-800 p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <GraduationCap className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
            <div>
              <p className="text-lg leading-relaxed text-amber-800 dark:text-amber-200">
                Les hyperparamètres d'entraînement sont les <strong>"réglages pédagogiques"</strong> utilisés 
                pour enseigner au modèle. Contrairement à l'architecture, ces paramètres peuvent être ajustés 
                pour optimiser l'apprentissage, mais une fois l'entraînement terminé, c'est fini !
              </p>
              <p className="text-amber-700 dark:text-amber-300 mt-2 text-sm">
                💡 <strong>Important :</strong> Ces paramètres coûtent des millions à optimiser car modifier 
                l'entraînement = recommencer depuis zéro avec des milliers de GPU !
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-medium mb-4 flex items-center gap-2">
            <Settings2 className="h-5 w-5 text-primary" />
            Les 5 hyperparamètres clés que tout le monde devrait connaître
          </h4>
          
          {trainingParams.map((param, index) => (
            <Card key={index} className="hover:shadow-md transition-all duration-300">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-lg">
                  {param.icon}
                  <TechnicalTooltip 
                    term={param.param}
                    definition={param.description}
                  >
                    {param.param}
                  </TechnicalTooltip>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">{param.description}</p>
                  
                  {/* Analogie */}
                  <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-400 p-3 rounded-r-lg">
                    <div className="flex items-start gap-2">
                      <Car className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-1">💡 Analogie :</p>
                        <p className="text-sm text-blue-700 dark:text-blue-300">{param.analogy}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Badge variant="outline" className="text-xs mb-2">
                        Rôle technique
                      </Badge>
                      <p className="text-sm">{param.role}</p>
                    </div>
                    <div>
                      <Badge variant="outline" className="text-xs mb-2">
                        Valeurs typiques
                      </Badge>
                      <p className="text-sm font-mono bg-gray-100 dark:bg-gray-800 p-2 rounded">
                        {param.values}
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-orange-50 dark:bg-orange-950/30 p-3 rounded-lg">
                    <p className="text-sm font-medium text-orange-800 dark:text-orange-200 mb-1">
                      ⚖️ Impact sur les performances :
                    </p>
                    <p className="text-sm text-orange-700 dark:text-orange-300">{param.impact}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Section coûts et réalités */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 border-red-200 dark:border-red-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-300">
                <Zap className="h-5 w-5" />
                💸 La réalité des coûts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-red-600 dark:text-red-400">
                <li>• <strong>GPT-3 :</strong> ~4.6 millions $ d'entraînement</li>
                <li>• <strong>PaLM :</strong> ~9 millions $ estimés</li>
                <li>• <strong>GPT-4 :</strong> {'>'} 100 millions $ (rumeur)</li>
                <li>• <strong>Temps :</strong> Plusieurs mois avec des milliers de GPU</li>
                <li>• <strong>Électricité :</strong> Équivalent à une ville de 10 000 habitants !</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                <Target className="h-5 w-5" />
                🎯 Pourquoi c'est important pour VOUS
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-green-600 dark:text-green-400">
                <li>• <strong>Compréhension :</strong> Pourquoi certains modèles excellent dans certains domaines</li>
                <li>• <strong>Sélection :</strong> Choisir un modèle selon son entraînement</li>
                <li>• <strong>Attentes :</strong> Comprendre les limites techniques</li>
                <li>• <strong>Fine-tuning :</strong> Adapter intelligemment un modèle pré-entraîné</li>
                <li>• <strong>Veille :</strong> Anticiper les évolutions futures</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Guide pratique */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20 border border-purple-200 dark:border-purple-800 p-6 rounded-lg">
          <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-3 flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            📚 Ce qu'il faut retenir en pratique
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="font-medium text-purple-700 dark:text-purple-300 mb-2">✅ Pour bien choisir un modèle :</h5>
              <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                <li>• Regardez les benchmarks sur VOS tâches spécifiques</li>
                <li>• Vérifiez la date et qualité des données d'entraînement</li>
                <li>• Testez avec VOS propres exemples</li>
                <li>• Considérez le fine-tuning si besoin spécialisé</li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-purple-700 dark:text-purple-300 mb-2">🚫 Évitez ces erreurs :</h5>
              <ul className="text-sm text-purple-600 dark:text-purple-400 space-y-1">
                <li>• Choisir uniquement sur la taille (gros ≠ forcément meilleur)</li>
                <li>• Ignorer la spécialisation du modèle</li>
                <li>• Oublier les coûts d'usage à long terme</li>
                <li>• Ne pas tester sur vos données réelles</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </LessonSection>
  );
};

export default TrainingParametersSection;
