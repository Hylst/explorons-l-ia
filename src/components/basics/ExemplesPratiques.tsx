
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Smartphone, Music, ShoppingCart, Car, Stethoscope, Banknote, GraduationCap, Factory, Shield, Camera, MessageSquare, Calculator } from 'lucide-react';

const ExemplesPratiques = () => {
  const [selectedCategory, setSelectedCategory] = useState('quotidien');

  const exemplesQuotidien = [
    {
      icon: <Smartphone className="h-6 w-6" />,
      titre: 'Assistant vocal',
      description: 'Siri, Alexa, Google Assistant',
      details: 'Reconnaissance vocale, traitement du langage naturel, actions automatisées',
      usage: '4,2 milliards d\'utilisateurs dans le monde',
      color: 'bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800'
    },
    {
      icon: <Music className="h-6 w-6" />,
      titre: 'Recommandations musicales',
      description: 'Spotify, Apple Music, YouTube Music',
      details: 'Analyse des préférences, apprentissage collaboratif, découverte personnalisée',
      usage: 'Plus de 500 millions d\'utilisateurs Spotify',
      color: 'bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800'
    },
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      titre: 'E-commerce intelligent',
      description: 'Amazon, Netflix, réseaux sociaux',
      details: 'Système de recommandation, prédiction des achats, personnalisation',
      usage: '35% des revenus Amazon via recommandations',
      color: 'bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800'
    },
    {
      icon: <Car className="h-6 w-6" />,
      titre: 'Navigation GPS',
      description: 'Google Maps, Waze, Apple Plans',
      details: 'Optimisation d\'itinéraires, prédiction du trafic, navigation en temps réel',
      usage: 'Plus d\'1 milliard d\'utilisateurs Google Maps',
      color: 'bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800'
    },
    {
      icon: <Camera className="h-6 w-6" />,
      titre: 'Photos intelligentes',
      description: 'Google Photos, iCloud, reconnaissance faciale',
      details: 'Classification automatique, recherche par contenu, améliorations automatiques',
      usage: 'Plus de 4 milliards de photos traitées quotidiennement',
      color: 'bg-pink-50 dark:bg-pink-950/20 border-pink-200 dark:border-pink-800'
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      titre: 'Filtres anti-spam',
      description: 'Gmail, Outlook, filtrage intelligent',
      details: 'Classification de texte, détection d\'anomalies, apprentissage adaptatif',
      usage: '99,9% de précision sur Gmail',
      color: 'bg-cyan-50 dark:bg-cyan-950/20 border-cyan-200 dark:border-cyan-800'
    }
  ];

  const exemplesProfessionnels = [
    {
      icon: <Stethoscope className="h-6 w-6" />,
      titre: 'Diagnostic médical',
      description: 'Imagerie médicale, détection précoce de maladies',
      details: 'IA surpassant les radiologues pour détecter certains cancers, analyse de scans en quelques secondes',
      impact: '94% de précision vs 88% pour les médecins (cancer du sein)',
      color: 'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800'
    },
    {
      icon: <Banknote className="h-6 w-6" />,
      titre: 'Finance et trading',
      description: 'Détection de fraude, trading algorithmique',
      details: 'Analyse de patterns suspects, trading haute fréquence, évaluation de risques',
      impact: '90% des transactions boursières utilisent l\'IA',
      color: 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800'
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      titre: 'Éducation personnalisée',
      description: 'Plateformes d\'apprentissage adaptatif',
      details: 'Parcours individualisés, détection des difficultés, recommandations de contenu',
      impact: '+23% d\'amélioration des résultats scolaires',
      color: 'bg-indigo-50 dark:bg-indigo-950/20 border-indigo-200 dark:border-indigo-800'
    },
    {
      icon: <Factory className="h-6 w-6" />,
      titre: 'Industrie 4.0',
      description: 'Maintenance prédictive, automatisation',
      details: 'Prédiction de pannes, optimisation de production, robotique collaborative',
      impact: '-20% coûts de maintenance, +15% productivité',
      color: 'bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      titre: 'Cybersécurité',
      description: 'Détection d\'intrusions, analyse de menaces',
      details: 'Identification de comportements suspects, réponse automatisée aux attaques',
      impact: '99% de détection de nouvelles menaces',
      color: 'bg-slate-50 dark:bg-slate-950/20 border-slate-200 dark:border-slate-800'
    },
    {
      icon: <Calculator className="h-6 w-6" />,
      titre: 'Recherche scientifique',
      description: 'Découverte de médicaments, simulation',
      details: 'Accélération de la recherche, modélisation moléculaire, prédictions climatiques',
      impact: 'Réduction de 10 ans à 2 ans pour développer un médicament',
      color: 'bg-violet-50 dark:bg-violet-950/20 border-violet-200 dark:border-violet-800'
    }
  ];

  const statistiques = {
    quotidien: {
      utilisateurs: '5+ milliards',
      croissance: '+45% par an',
      economie: '2 000 milliards $'
    },
    professionnel: {
      entreprises: '80% des grandes entreprises',
      productivite: '+25% en moyenne',
      emplois: '2.3 millions d\'emplois créés'
    }
  };

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20">
        <CardHeader>
          <CardTitle>L'IA dans notre quotidien</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="quotidien">Usage personnel</TabsTrigger>
              <TabsTrigger value="professionnel">Applications professionnelles</TabsTrigger>
            </TabsList>
            
            <TabsContent value="quotidien" className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{statistiques.quotidien.utilisateurs}</div>
                  <div className="text-sm text-muted-foreground">Utilisateurs quotidiens</div>
                </div>
                <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{statistiques.quotidien.croissance}</div>
                  <div className="text-sm text-muted-foreground">Croissance annuelle</div>
                </div>
                <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">{statistiques.quotidien.economie}</div>
                  <div className="text-sm text-muted-foreground">Marché mondial IA</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {exemplesQuotidien.map((exemple, index) => (
                  <Card key={index} className={`hover:shadow-md transition-shadow ${exemple.color}`}>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        {exemple.icon}
                        <div>
                          <CardTitle className="text-lg">{exemple.titre}</CardTitle>
                          <p className="text-sm text-muted-foreground">{exemple.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-3">{exemple.details}</p>
                      <Badge variant="secondary" className="text-xs">
                        📊 {exemple.usage}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="professionnel" className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{statistiques.professionnel.entreprises}</div>
                  <div className="text-sm text-muted-foreground">Adoptent l'IA</div>
                </div>
                <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{statistiques.professionnel.productivite}</div>
                  <div className="text-sm text-muted-foreground">Gain de productivité</div>
                </div>
                <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">{statistiques.professionnel.emplois}</div>
                  <div className="text-sm text-muted-foreground">Nouveaux emplois IA</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {exemplesProfessionnels.map((exemple, index) => (
                  <Card key={index} className={`hover:shadow-md transition-shadow ${exemple.color}`}>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        {exemple.icon}
                        <div>
                          <CardTitle className="text-lg">{exemple.titre}</CardTitle>
                          <p className="text-sm text-muted-foreground">{exemple.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm mb-3">{exemple.details}</p>
                      <Badge variant="default" className="text-xs">
                        📈 {exemple.impact}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExemplesPratiques;
