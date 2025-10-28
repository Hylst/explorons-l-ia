
import React from 'react';
import Hero from '@/components/Hero';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowRight, 
  BarChart4, 
  MessageCircle, 
  Users, 
  Target, 
  TrendingUp, 
  Megaphone,
  Bot,
  ShoppingCart, 
  LineChart
} from 'lucide-react';

const IAMarketingVente = () => {
  return (
    <>
      <Hero
        title="IA pour le Marketing et la Vente"
        subtitle="Comment l'intelligence artificielle transforme le marketing et la vente et comment en tirer parti pour votre entreprise"
      />

      <section className="section-container py-12">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Une révolution dans la relation client</h2>
          <p className="text-lg text-muted-foreground">
            L'IA transforme radicalement le marketing et la vente en permettant une personnalisation sans précédent, 
            une analyse prédictive des comportements clients et une automatisation intelligente des tâches répétitives.
          </p>
        </div>

        <Tabs defaultValue="personnalisation" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
            <TabsTrigger value="personnalisation">Personnalisation</TabsTrigger>
            <TabsTrigger value="analyse">Analyse prédictive</TabsTrigger>
            <TabsTrigger value="automatisation">Automatisation</TabsTrigger>
            <TabsTrigger value="chatbots">Chatbots</TabsTrigger>
            <TabsTrigger value="optimisation">Relation client</TabsTrigger>
          </TabsList>
          
          <TabsContent value="personnalisation" className="px-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Target className="h-6 w-6 mr-2 text-primary" />
                  Personnalisation à grande échelle
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-medium mb-3">
                      Marketing véritablement sur mesure
                    </h4>
                    <p className="mb-4 text-muted-foreground">
                      L'IA permet d'analyser des milliers de points de données utilisateur pour créer des expériences entièrement personnalisées :
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                        <span>Recommandations de produits basées sur l'historique d'achat, le comportement de navigation et les préférences démontrées</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                        <span>Contenu dynamique qui s'adapte automatiquement aux intérêts spécifiques de chaque visiteur</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                        <span>Emails personnalisés avec des offres et du contenu pertinent basés sur le comportement récent</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="text-lg font-medium mb-3">Exemple concret</h4>
                    <p className="mb-4">
                      Une plateforme e-commerce utilisant l'IA pour la personnalisation a constaté :
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <TrendingUp className="h-5 w-5 mr-2 text-green-500" />
                        <span>Augmentation de 35% du taux de conversion</span>
                      </li>
                      <li className="flex items-center">
                        <ShoppingCart className="h-5 w-5 mr-2 text-green-500" />
                        <span>Hausse de 28% de la valeur moyenne des commandes</span>
                      </li>
                      <li className="flex items-center">
                        <Users className="h-5 w-5 mr-2 text-green-500" />
                        <span>Réduction de 40% du taux d'abandon de panier</span>
                      </li>
                    </ul>
                    
                    <div className="mt-6 p-3 bg-primary/10 rounded-lg">
                      <p className="text-sm italic">
                        "L'IA nous a permis de traiter chaque client comme un individu unique, même avec des millions d'utilisateurs. La différence en termes d'engagement et de conversion a été spectaculaire."
                      </p>
                      <p className="text-sm mt-2 font-medium">— Directeur marketing d'une entreprise e-commerce</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 border-t pt-6">
                  <h4 className="text-lg font-medium mb-3">Technologies d'IA utilisées</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-card p-4 rounded-lg border">
                      <h5 className="font-medium mb-2">Systèmes de recommandation</h5>
                      <p className="text-sm text-muted-foreground">
                        Algorithmes qui analysent les comportements passés pour prédire les intérêts futurs et recommander des produits pertinents.
                      </p>
                    </div>
                    <div className="bg-card p-4 rounded-lg border">
                      <h5 className="font-medium mb-2">Segmentation dynamique</h5>
                      <p className="text-sm text-muted-foreground">
                        Création et mise à jour automatique de segments clients basés sur des comportements en temps réel.
                      </p>
                    </div>
                    <div className="bg-card p-4 rounded-lg border">
                      <h5 className="font-medium mb-2">Personnalisation de contenu</h5>
                      <p className="text-sm text-muted-foreground">
                        Génération et adaptation automatique du contenu marketing en fonction des préférences individuelles.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="analyse" className="px-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <BarChart4 className="h-6 w-6 mr-2 text-primary" />
                  Analyse prédictive des comportements
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-medium mb-3">
                      Intelligence anticipative
                    </h4>
                    <p className="mb-4 text-muted-foreground">
                      L'IA permet d'anticiper les besoins et comportements des clients avant même qu'ils ne les expriment :
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                        <span>Prédiction des intentions d'achat basée sur les modèles comportementaux</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                        <span>Identification précoce des signaux de désabonnement ou d'attrition</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                        <span>Optimisation des prix en temps réel basée sur la demande prévue et les comportements concurrentiels</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="text-lg font-medium mb-3">Étude de cas</h4>
                    <p className="mb-4">
                      Un service d'abonnement utilisant l'analyse prédictive a pu :
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <LineChart className="h-5 w-5 mr-2 text-green-500" />
                        <span>Réduire le taux d'attrition de 25%</span>
                      </li>
                      <li className="flex items-center">
                        <TrendingUp className="h-5 w-5 mr-2 text-green-500" />
                        <span>Augmenter la durée de vie client de 40%</span>
                      </li>
                      <li className="flex items-center">
                        <Users className="h-5 w-5 mr-2 text-green-500" />
                        <span>Améliorer le taux de conversion des offres de 30%</span>
                      </li>
                    </ul>
                    
                    <div className="mt-6 p-3 bg-primary/10 rounded-lg">
                      <p className="text-sm italic">
                        "L'analyse prédictive nous permet d'identifier les clients à risque avant qu'ils ne pensent à nous quitter, transformant notre approche de la fidélisation."
                      </p>
                      <p className="text-sm mt-2 font-medium">— Responsable CRM d'un service par abonnement</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 border-t pt-6">
                  <h4 className="text-lg font-medium mb-3">Applications marketing concrètes</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-card p-4 rounded-lg border">
                      <h5 className="font-medium mb-2">Prévention de l'attrition</h5>
                      <p className="text-sm text-muted-foreground">
                        Identification proactive des clients susceptibles de partir et intervention ciblée pour les retenir.
                      </p>
                    </div>
                    <div className="bg-card p-4 rounded-lg border">
                      <h5 className="font-medium mb-2">Pricing dynamique</h5>
                      <p className="text-sm text-muted-foreground">
                        Ajustement automatique des prix en fonction de multiples facteurs (demande, concurrence, profil client).
                      </p>
                    </div>
                    <div className="bg-card p-4 rounded-lg border">
                      <h5 className="font-medium mb-2">Scoring de leads</h5>
                      <p className="text-sm text-muted-foreground">
                        Évaluation automatique de la qualité des prospects et priorisation des efforts de vente.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="automatisation" className="px-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Megaphone className="h-6 w-6 mr-2 text-primary" />
                  Automatisation des campagnes
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-medium mb-3">
                      Marketing augmenté par l'IA
                    </h4>
                    <p className="mb-4 text-muted-foreground">
                      L'IA transforme l'exécution des campagnes marketing à chaque niveau :
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                        <span>Génération et optimisation automatique de contenu publicitaire (textes, images, vidéos)</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                        <span>Sélection automatique des canaux optimaux pour chaque segment de clientèle</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                        <span>Test A/B intelligent qui optimise continuellement les campagnes en temps réel</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="text-lg font-medium mb-3">Résultats obtenus</h4>
                    <p className="mb-4">
                      Une agence de marketing utilisant l'automatisation par IA a constaté :
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <TrendingUp className="h-5 w-5 mr-2 text-green-500" />
                        <span>Réduction de 70% du temps de création de campagnes</span>
                      </li>
                      <li className="flex items-center">
                        <ShoppingCart className="h-5 w-5 mr-2 text-green-500" />
                        <span>Augmentation de 50% du ROI publicitaire</span>
                      </li>
                      <li className="flex items-center">
                        <Users className="h-5 w-5 mr-2 text-green-500" />
                        <span>Amélioration de 45% du taux d'engagement</span>
                      </li>
                    </ul>
                    
                    <div className="mt-6 p-3 bg-primary/10 rounded-lg">
                      <p className="text-sm italic">
                        "L'IA a complètement transformé notre façon de concevoir et d'exécuter les campagnes. Nous pouvons désormais créer, tester et optimiser à une échelle et une vitesse impossibles auparavant."
                      </p>
                      <p className="text-sm mt-2 font-medium">— Directeur créatif d'une agence marketing</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 border-t pt-6">
                  <h4 className="text-lg font-medium mb-3">Outils d'automatisation par IA</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-card p-4 rounded-lg border">
                      <h5 className="font-medium mb-2">Générateurs de contenu</h5>
                      <p className="text-sm text-muted-foreground">
                        Outils qui créent automatiquement des textes, images et vidéos optimisés pour différents canaux.
                      </p>
                    </div>
                    <div className="bg-card p-4 rounded-lg border">
                      <h5 className="font-medium mb-2">Orchestration omnicanale</h5>
                      <p className="text-sm text-muted-foreground">
                        Plateformes qui synchronisent les messages à travers les différents canaux pour une expérience cohérente.
                      </p>
                    </div>
                    <div className="bg-card p-4 rounded-lg border">
                      <h5 className="font-medium mb-2">Optimisation en temps réel</h5>
                      <p className="text-sm text-muted-foreground">
                        Systèmes qui ajustent automatiquement les paramètres des campagnes pour maximiser les performances.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="chatbots" className="px-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Bot className="h-6 w-6 mr-2 text-primary" />
                  Chatbots commerciaux avancés
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-medium mb-3">
                      Vente conversationnelle intelligente
                    </h4>
                    <p className="mb-4 text-muted-foreground">
                      Les chatbots IA modernes vont bien au-delà des simples FAQ pour devenir de véritables assistants commerciaux :
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                        <span>Compréhension contextuelle avancée des intentions et besoins des clients</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                        <span>Recommandations personnalisées de produits basées sur la conversation</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                        <span>Escalade intelligente vers des agents humains avec transfert de contexte complet</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="text-lg font-medium mb-3">Impact commercial</h4>
                    <p className="mb-4">
                      Une entreprise B2C utilisant des chatbots IA pour la vente a observé :
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <TrendingUp className="h-5 w-5 mr-2 text-green-500" />
                        <span>Augmentation de 24% du taux de conversion</span>
                      </li>
                      <li className="flex items-center">
                        <ShoppingCart className="h-5 w-5 mr-2 text-green-500" />
                        <span>Hausse de 35% des ventes supplémentaires</span>
                      </li>
                      <li className="flex items-center">
                        <Users className="h-5 w-5 mr-2 text-green-500" />
                        <span>Réduction de 60% des coûts de service client</span>
                      </li>
                    </ul>
                    
                    <div className="mt-6 p-3 bg-primary/10 rounded-lg">
                      <p className="text-sm italic">
                        "Notre chatbot IA ne se contente pas de répondre aux questions, il guide activement les clients dans leur parcours d'achat et génère un retour sur investissement impressionnant."
                      </p>
                      <p className="text-sm mt-2 font-medium">— Responsable e-commerce d'une entreprise B2C</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 border-t pt-6">
                  <h4 className="text-lg font-medium mb-3">Fonctionnalités avancées des chatbots commerciaux</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-card p-4 rounded-lg border">
                      <h5 className="font-medium mb-2">Achat conversationnel</h5>
                      <p className="text-sm text-muted-foreground">
                        Permet aux clients de rechercher, comparer et acheter des produits entièrement via conversation.
                      </p>
                    </div>
                    <div className="bg-card p-4 rounded-lg border">
                      <h5 className="font-medium mb-2">Support omnicanal</h5>
                      <p className="text-sm text-muted-foreground">
                        Intégration sur le site web, les applications mobiles, les réseaux sociaux et les plateformes de messagerie.
                      </p>
                    </div>
                    <div className="bg-card p-4 rounded-lg border">
                      <h5 className="font-medium mb-2">Analyse émotionnelle</h5>
                      <p className="text-sm text-muted-foreground">
                        Détection de l'état émotionnel du client pour adapter la réponse et l'approche commerciale.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="optimisation" className="px-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <MessageCircle className="h-6 w-6 mr-2 text-primary" />
                  Optimisation de la relation client
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-medium mb-3">
                      Expérience client augmentée
                    </h4>
                    <p className="mb-4 text-muted-foreground">
                      L'IA transforme profondément la gestion de la relation client à toutes les étapes :
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                        <span>Création de parcours client entièrement personnalisés et adaptatifs</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                        <span>Analyse des sentiments dans les interactions pour une réponse appropriée</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                        <span>Résolution proactive des problèmes avant qu'ils n'impactent la satisfaction client</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="text-lg font-medium mb-3">Résultats mesurés</h4>
                    <p className="mb-4">
                      Une entreprise utilisant l'IA pour optimiser sa relation client a observé :
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <TrendingUp className="h-5 w-5 mr-2 text-green-500" />
                        <span>Augmentation de 40% du score NPS</span>
                      </li>
                      <li className="flex items-center">
                        <ShoppingCart className="h-5 w-5 mr-2 text-green-500" />
                        <span>Hausse de 30% de la valeur client à vie (CLV)</span>
                      </li>
                      <li className="flex items-center">
                        <Users className="h-5 w-5 mr-2 text-green-500" />
                        <span>Amélioration de 45% du taux de rétention</span>
                      </li>
                    </ul>
                    
                    <div className="mt-6 p-3 bg-primary/10 rounded-lg">
                      <p className="text-sm italic">
                        "L'IA nous a permis de passer d'une approche réactive à une stratégie proactive dans nos relations clients. Nous anticipons désormais leurs besoins avant qu'ils ne les expriment."
                      </p>
                      <p className="text-sm mt-2 font-medium">— Directeur de l'expérience client</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 border-t pt-6">
                  <h4 className="text-lg font-medium mb-3">Technologies d'optimisation de la relation client</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-card p-4 rounded-lg border">
                      <h5 className="font-medium mb-2">CRM augmenté par l'IA</h5>
                      <p className="text-sm text-muted-foreground">
                        Systèmes qui automatisent la gestion des contacts et suggèrent les prochaines actions optimales.
                      </p>
                    </div>
                    <div className="bg-card p-4 rounded-lg border">
                      <h5 className="font-medium mb-2">Analyse prédictive des besoins</h5>
                      <p className="text-sm text-muted-foreground">
                        Anticipation des besoins futurs des clients pour une approche proactive.
                      </p>
                    </div>
                    <div className="bg-card p-4 rounded-lg border">
                      <h5 className="font-medium mb-2">Personnalisation dynamique</h5>
                      <p className="text-sm text-muted-foreground">
                        Adaptation instantanée de l'expérience en fonction des comportements et préférences.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      <section className="section-container py-12 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Pour aller plus loin</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Tendances émergentes</h3>
                <p className="mb-4 text-muted-foreground">
                  Découvrez les dernières innovations en IA marketing qui façonneront le futur de la relation client :
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Marketing hyper-personnalisé basé sur l'IA multimodale</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Commerce conversationnel via assistants IA avancés</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Prédiction du comportement client par analyse émotionnelle</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Conseils d'implémentation</h3>
                <p className="mb-4 text-muted-foreground">
                  Comment intégrer efficacement ces solutions d'IA dans votre stratégie marketing :
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Commencez par des projets pilotes à impact rapide et mesurable</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Assurez-vous que vos données client sont structurées et accessibles</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Formez vos équipes à collaborer efficacement avec les systèmes IA</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default IAMarketingVente;
