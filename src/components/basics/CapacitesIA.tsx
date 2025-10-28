
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, Eye, Ear, MessageCircle, Calculator, Target, Users, Brain, Zap, Lightbulb } from 'lucide-react';

const CapacitesIA = () => {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const capacites = [
    {
      id: 'vision',
      icon: <Eye className="h-8 w-8 text-blue-500" />,
      titre: 'Vision par ordinateur',
      description: 'Reconnaître et analyser des images, détecter des objets, lire du texte',
      niveau: 85,
      statut: 'Très avancé',
      couleur: 'text-blue-500',
      exemples: [
        'Reconnaissance faciale (déverrouillage de téléphone)',
        'Diagnostic médical par imagerie',
        'Voitures autonomes (détection d\'obstacles)',
        'OCR - lecture automatique de documents',
        'Réalité augmentée (filtres Snapchat/Instagram)'
      ],
      defis: [
        'Conditions d\'éclairage difficiles',
        'Objets partiellement cachés',
        'Interprétation du contexte'
      ]
    },
    {
      id: 'audio',
      icon: <Ear className="h-8 w-8 text-green-500" />,
      titre: 'Traitement audio',
      description: 'Comprendre la parole, reconnaître des sons, analyser de la musique',
      niveau: 90,
      statut: 'Expert',
      couleur: 'text-green-500',
      exemples: [
        'Assistants vocaux (Siri, Alexa, Google)',
        'Transcription automatique (sous-titres)',
        'Traduction vocale en temps réel',
        'Reconnaissance de musique (Shazam)',
        'Analyse des émotions dans la voix'
      ],
      defis: [
        'Accents et dialectes',
        'Bruit de fond',
        'Conversation naturelle multi-personnes'
      ]
    },
    {
      id: 'langage',
      icon: <MessageCircle className="h-8 w-8 text-purple-500" />,
      titre: 'Traitement du langage',
      description: 'Comprendre et générer du texte, traduire, résumer',
      niveau: 95,
      statut: 'Surhumain',
      couleur: 'text-purple-500',
      exemples: [
        'ChatGPT, Claude, Gemini (conversation)',
        'Google Translate (traduction)',
        'Résumé automatique d\'articles',
        'Génération de code informatique',
        'Rédaction d\'emails et documents'
      ],
      defis: [
        'Compréhension du contexte culturel',
        'Détection de l\'ironie et sarcasme',
        'Raisonnement logique complexe'
      ]
    },
    {
      id: 'calcul',
      icon: <Calculator className="h-8 w-8 text-orange-500" />,
      titre: 'Calcul et optimisation',
      description: 'Résoudre des problèmes mathématiques complexes, optimiser',
      niveau: 98,
      statut: 'Surhumain',
      couleur: 'text-orange-500',
      exemples: [
        'Trading haute fréquence',
        'Optimisation de routes logistiques',
        'Prévisions météorologiques',
        'Calculs scientifiques complexes',
        'Optimisation énergétique de bâtiments'
      ],
      defis: [
        'Problèmes nécessitant de l\'intuition',
        'Optimisation multi-objectifs complexes',
        'Incertitude et données incomplètes'
      ]
    },
    {
      id: 'prediction',
      icon: <Target className="h-8 w-8 text-red-500" />,
      titre: 'Prédiction et analyse',
      description: 'Anticiper des tendances, prévoir des événements',
      niveau: 70,
      statut: 'En développement',
      couleur: 'text-red-500',
      exemples: [
        'Prédiction météo à long terme',
        'Analyse de marchés financiers',
        'Prévision de pannes machines',
        'Recommandations personnalisées',
        'Détection de fraudes'
      ],
      defis: [
        'Événements imprévisibles (cygnes noirs)',
        'Biais dans les données historiques',
        'Évolution rapide des comportements'
      ]
    },
    {
      id: 'interaction',
      icon: <Users className="h-8 w-8 text-teal-500" />,
      titre: 'Interaction sociale',
      description: 'Converser naturellement, comprendre les émotions',
      niveau: 75,
      statut: 'Avancé',
      couleur: 'text-teal-500',
      exemples: [
        'Chatbots de service client',
        'Thérapie assistée par IA',
        'Compagnons virtuels pour seniors',
        'Modération de contenus en ligne',
        'Analyse de sentiment sur réseaux sociaux'
      ],
      defis: [
        'Nuances émotionnelles complexes',
        'Empathie véritable',
        'Adaptation aux personnalités'
      ]
    }
  ];

  const toggleSection = (id: string) => {
    setOpenSections(prev => 
      prev.includes(id) 
        ? prev.filter(s => s !== id)
        : [...prev, id]
    );
  };

  const getStatusColor = (niveau: number) => {
    if (niveau >= 95) return 'bg-purple-500';
    if (niveau >= 85) return 'bg-green-500';
    if (niveau >= 70) return 'bg-blue-500';
    return 'bg-orange-500';
  };

  const getStatusText = (niveau: number) => {
    if (niveau >= 95) return 'Surhumain';
    if (niveau >= 85) return 'Très avancé';
    if (niveau >= 70) return 'Avancé';
    return 'En développement';
  };

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-950/20 dark:to-cyan-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Brain className="h-6 w-6 text-primary" />
            Capacités de l'Intelligence Artificielle
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
              <Lightbulb className="h-6 w-6 text-yellow-500" />
              <div>
                <p className="font-medium">Apprendre</p>
                <p className="text-sm text-muted-foreground">À partir de données et d'expériences</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
              <Target className="h-6 w-6 text-green-500" />
              <div>
                <p className="font-medium">Raisonner</p>
                <p className="text-sm text-muted-foreground">Analyser et tirer des conclusions</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
              <Zap className="h-6 w-6 text-blue-500" />
              <div>
                <p className="font-medium">Agir</p>
                <p className="text-sm text-muted-foreground">Prendre des décisions et résoudre des problèmes</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg">
              <Brain className="h-6 w-6 text-purple-500" />
              <div>
                <p className="font-medium">S'adapter</p>
                <p className="text-sm text-muted-foreground">Améliorer les performances avec l'expérience</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {capacites.map((capacite) => (
          <Card key={capacite.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-3 mb-2">
                {capacite.icon}
                <CardTitle className="text-lg">{capacite.titre}</CardTitle>
              </div>
              <p className="text-sm text-muted-foreground">{capacite.description}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Niveau de maturité</span>
                    <Badge className={`${capacite.couleur} bg-transparent border`}>
                      {capacite.niveau}%
                    </Badge>
                  </div>
                  <Progress value={capacite.niveau} className="mb-2" />
                  <p className="text-xs text-muted-foreground">
                    Statut: {getStatusText(capacite.niveau)}
                  </p>
                </div>

                <Collapsible 
                  open={openSections.includes(capacite.id)}
                  onOpenChange={() => toggleSection(capacite.id)}
                >
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-sm font-medium hover:text-primary transition-colors">
                    Voir les détails
                    <ChevronDown className={`h-4 w-4 transition-transform ${
                      openSections.includes(capacite.id) ? 'rotate-180' : ''
                    }`} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-3 mt-3">
                    <div>
                      <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-1">
                        ✅ Applications réussies :
                      </p>
                      <ul className="text-xs space-y-1">
                        {capacite.exemples.map((exemple, idx) => (
                          <li key={idx} className="text-muted-foreground">• {exemple}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-orange-600 dark:text-orange-400 mb-1">
                        ⚠️ Défis actuels :
                      </p>
                      <ul className="text-xs space-y-1">
                        {capacite.defis.map((defi, idx) => (
                          <li key={idx} className="text-muted-foreground">• {defi}</li>
                        ))}
                      </ul>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CapacitesIA;
