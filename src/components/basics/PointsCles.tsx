
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, AlertTriangle, BookOpen, TrendingUp, Users, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const PointsCles = () => {
  const possibilites = [
    'Traiter de grandes quantités de données en quelques secondes',
    'Identifier des patterns invisibles à l\'œil humain',
    'Automatiser des tâches répétitives et chronophages',
    'Faire des prédictions basées sur l\'analyse de données',
    'Apprendre et s\'améliorer en continu avec l\'expérience',
    'Fonctionner 24h/24, 7j/7 sans fatigue',
    'Analyser plusieurs sources d\'information simultanément'
  ];

  const limites = [
    'Besoin de grandes quantités de données de qualité',
    'Difficulté avec des situations totalement nouvelles ou rares',
    'Manque de véritable compréhension contextuelle du monde',
    'Peut reproduire et amplifier des biais humains',
    'Résultats parfois difficiles à expliquer (boîte noire)',
    'Consommation énergétique importante pour l\'entraînement',
    'Vulnérabilité aux attaques adversariales'
  ];

  const tendancesFutures = [
    {
      titre: 'IA Générative créative',
      description: 'Création de contenu (texte, images, vidéos, code) de plus en plus sophistiqué',
      icon: <Brain className="h-5 w-5 text-purple-500" />
    },
    {
      titre: 'IA Multimodale',
      description: 'Systèmes combinant texte, images, audio et vidéo en une seule interface',
      icon: <TrendingUp className="h-5 w-5 text-blue-500" />
    },
    {
      titre: 'IA Personnalisée',
      description: 'Assistants adaptatifs qui apprennent vos préférences spécifiques',
      icon: <Users className="h-5 w-5 text-green-500" />
    },
    {
      titre: 'IA Explicable',
      description: 'Systèmes capables d\'expliquer leurs décisions de manière compréhensible',
      icon: <BookOpen className="h-5 w-5 text-orange-500" />
    }
  ];

  const mythesRealites = [
    {
      mythe: 'L\'IA va remplacer tous les emplois',
      realite: 'L\'IA transforme les emplois et en crée de nouveaux, plutôt que de les supprimer massivement'
    },
    {
      mythe: 'L\'IA comprend vraiment comme les humains',
      realite: 'L\'IA traite des patterns statistiques sans véritable compréhension sémantique'
    },
    {
      mythe: 'L\'IA est toujours objective',
      realite: 'L\'IA peut hériter des biais présents dans ses données d\'entraînement'
    },
    {
      mythe: 'Plus de données = toujours mieux',
      realite: 'La qualité et la pertinence des données sont plus importantes que la quantité'
    }
  ];

  return (
    <div className="space-y-8">
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            Points clés à retenir
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-green-700 dark:text-green-400 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Ce que l'IA peut faire aujourd'hui
              </h3>
              <ul className="space-y-3">
                {possibilites.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-orange-700 dark:text-orange-400 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Limites actuelles importantes
              </h3>
              <ul className="space-y-3">
                {limites.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Tendances d'avenir</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {tendancesFutures.map((tendance, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-secondary/20 rounded-lg">
                  {tendance.icon}
                  <div>
                    <h4 className="font-medium text-sm">{tendance.titre}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{tendance.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Mythes vs Réalités</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mythesRealites.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Badge variant="destructive" className="text-xs">Mythe</Badge>
                    <p className="text-sm">{item.mythe}</p>
                  </div>
                  <div className="flex items-start gap-2 pl-4">
                    <Badge variant="default" className="text-xs">Réalité</Badge>
                    <p className="text-sm text-muted-foreground">{item.realite}</p>
                  </div>
                  {index < mythesRealites.length - 1 && <hr className="my-3" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="text-center bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20">
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold mb-3">🚀 Prêt à explorer plus loin ?</h3>
          <p className="text-muted-foreground mb-6">
            Maintenant que vous maîtrisez les bases, découvrez les applications concrètes de l'IA
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/types-ia">
              <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                🤖 Types d'IA
              </Badge>
            </Link>
            <Link to="/machine-learning">
              <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                🧠 Machine Learning
              </Badge>
            </Link>
            <Link to="/cas-usage">
              <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                💼 Cas d'usage
              </Badge>
            </Link>
            <Link to="/ressources">
              <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                📚 Ressources
              </Badge>
            </Link>
            <Link to="/cas-usage">
              <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                🎯 IA au quotidien
              </Badge>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PointsCles;
