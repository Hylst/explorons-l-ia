
import React from 'react';
import Hero from '@/components/Hero';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from '@/components/ui/card';
import { 
  ArrowRight, 
  CloudSun, 
  Gauge, 
  Trees, 
  Droplets, 
  Leaf,
  CloudRain,
  Scan,
  LineChart,
  Tractor,
  Factory
} from 'lucide-react';

const IAEnvironnement = () => {
  return (
    <>
      <Hero
        title="IA et Développement Durable"
        subtitle="Comment l'intelligence artificielle peut contribuer à un avenir plus écologique et durable"
      />

      <section className="section-container py-12">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">L'IA au service de la planète</h2>
          <p className="text-lg text-muted-foreground">
            L'intelligence artificielle offre des solutions puissantes pour relever les défis environnementaux 
            et accélérer la transition vers un développement plus durable.
          </p>
        </div>

        <Tabs defaultValue="climat" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
            <TabsTrigger value="climat">Modélisation climatique</TabsTrigger>
            <TabsTrigger value="ressources">Optimisation ressources</TabsTrigger>
            <TabsTrigger value="surveillance">Surveillance environnementale</TabsTrigger>
            <TabsTrigger value="agriculture">Agriculture de précision</TabsTrigger>
            <TabsTrigger value="empreinte">Réduction carbone</TabsTrigger>
          </TabsList>
          
          <TabsContent value="climat" className="px-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <CloudSun className="h-6 w-6 mr-2 text-primary" />
                  Modélisation et prévision climatique
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-medium mb-3">
                      Prévisions climatiques de haute précision
                    </h4>
                    <p className="mb-4 text-muted-foreground">
                      L'IA révolutionne notre capacité à comprendre et prévoir les phénomènes climatiques :
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                        <span>Modèles climatiques avancés intégrant des milliards de points de données historiques</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                        <span>Analyse des modèles météorologiques complexes pour des prévisions plus précises</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                        <span>Simulation d'événements climatiques extrêmes pour améliorer la préparation</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="text-lg font-medium mb-3">Impacts concrets</h4>
                    <p className="mb-4">
                      Des projets de modélisation climatique assistés par IA ont permis :
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CloudRain className="h-5 w-5 mr-2 text-green-500" />
                        <span>Amélioration de 40% de la précision des prévisions à long terme</span>
                      </li>
                      <li className="flex items-center">
                        <Gauge className="h-5 w-5 mr-2 text-green-500" />
                        <span>Réduction de 30% du temps de calcul des modèles climatiques complexes</span>
                      </li>
                      <li className="flex items-center">
                        <LineChart className="h-5 w-5 mr-2 text-green-500" />
                        <span>Projection plus précise des impacts du changement climatique à l'échelle locale</span>
                      </li>
                    </ul>
                    
                    <div className="mt-6 p-3 bg-primary/10 rounded-lg">
                      <p className="text-sm italic">
                        "L'IA nous permet enfin de modéliser avec précision les interactions complexes entre océans, atmosphère et surfaces terrestres, révolutionnant notre compréhension du climat."
                      </p>
                      <p className="text-sm mt-2 font-medium">— Chercheur en climatologie</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 border-t pt-6">
                  <h4 className="text-lg font-medium mb-3">Applications concrètes</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-card p-4 rounded-lg border">
                      <h5 className="font-medium mb-2">Alerte précoce</h5>
                      <p className="text-sm text-muted-foreground">
                        Systèmes d'alerte avancés pour les phénomènes météorologiques extrêmes basés sur l'apprentissage profond.
                      </p>
                    </div>
                    <div className="bg-card p-4 rounded-lg border">
                      <h5 className="font-medium mb-2">Adaptation climatique</h5>
                      <p className="text-sm text-muted-foreground">
                        Outils d'aide à la décision pour les stratégies d'adaptation au changement climatique.
                      </p>
                    </div>
                    <div className="bg-card p-4 rounded-lg border">
                      <h5 className="font-medium mb-2">Simulation d'impacts</h5>
                      <p className="text-sm text-muted-foreground">
                        Modèles permettant de simuler les impacts des politiques environnementales sur l'évolution du climat.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="ressources" className="px-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Droplets className="h-6 w-6 mr-2 text-primary" />
                  Gestion optimisée des ressources
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-medium mb-3">
                      Ressources naturelles préservées
                    </h4>
                    <p className="mb-4 text-muted-foreground">
                      L'IA permet une utilisation plus efficiente des ressources naturelles limitées :
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                        <span>Réseaux intelligents pour l'optimisation de la distribution d'eau et d'énergie</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                        <span>Détection précoce des fuites et inefficiences dans les systèmes de distribution</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                        <span>Prévision de la demande pour une allocation optimale des ressources</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="text-lg font-medium mb-3">Résultats mesurés</h4>
                    <p className="mb-4">
                      Des projets d'optimisation des ressources par IA ont permis :
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <Droplets className="h-5 w-5 mr-2 text-green-500" />
                        <span>Réduction de 25% de la consommation d'eau dans les zones urbaines</span>
                      </li>
                      <li className="flex items-center">
                        <Gauge className="h-5 w-5 mr-2 text-green-500" />
                        <span>Économie d'énergie de 15-20% dans les réseaux électriques intelligents</span>
                      </li>
                      <li className="flex items-center">
                        <LineChart className="h-5 w-5 mr-2 text-green-500" />
                        <span>Diminution de 30% des pertes dans les systèmes de distribution d'eau</span>
                      </li>
                    </ul>
                    
                    <div className="mt-6 p-3 bg-primary/10 rounded-lg">
                      <p className="text-sm italic">
                        "Les systèmes d'IA nous ont permis d'optimiser la distribution d'eau en temps réel, en tenant compte des conditions météorologiques, des modèles de consommation et de l'état des infrastructures."
                      </p>
                      <p className="text-sm mt-2 font-medium">— Responsable d'un service municipal des eaux</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 border-t pt-6">
                  <h4 className="text-lg font-medium mb-3">Technologies clés</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-card p-4 rounded-lg border">
                      <h5 className="font-medium mb-2">Réseaux de capteurs intelligents</h5>
                      <p className="text-sm text-muted-foreground">
                        Systèmes IoT couplés à l'IA pour surveiller et optimiser l'utilisation des ressources en temps réel.
                      </p>
                    </div>
                    <div className="bg-card p-4 rounded-lg border">
                      <h5 className="font-medium mb-2">Modèles prédictifs</h5>
                      <p className="text-sm text-muted-foreground">
                        Algorithmes anticipant la demande et les besoins en ressources pour une allocation optimale.
                      </p>
                    </div>
                    <div className="bg-card p-4 rounded-lg border">
                      <h5 className="font-medium mb-2">Optimisation multi-contraintes</h5>
                      <p className="text-sm text-muted-foreground">
                        Systèmes d'IA qui équilibrent efficacement les besoins concurrents des différents utilisateurs de ressources.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="surveillance" className="px-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Scan className="h-6 w-6 mr-2 text-primary" />
                  Surveillance environnementale
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-medium mb-3">
                      Détection et prévention avancées
                    </h4>
                    <p className="mb-4 text-muted-foreground">
                      L'IA transforme notre capacité à surveiller et protéger les écosystèmes :
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                        <span>Analyse d'images satellites pour la détection précoce de la déforestation</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                        <span>Surveillance acoustique des écosystèmes pour identifier les perturbations</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                        <span>Suivi des populations d'espèces menacées par reconnaissance visuelle</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="text-lg font-medium mb-3">Impact sur la conservation</h4>
                    <p className="mb-4">
                      Des projets de surveillance environnementale par IA ont permis :
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <Trees className="h-5 w-5 mr-2 text-green-500" />
                        <span>Réduction de 80% du temps nécessaire pour détecter la déforestation illégale</span>
                      </li>
                      <li className="flex items-center">
                        <Leaf className="h-5 w-5 mr-2 text-green-500" />
                        <span>Identification de 35% plus d'espèces menacées dans les zones surveillées</span>
                      </li>
                      <li className="flex items-center">
                        <LineChart className="h-5 w-5 mr-2 text-green-500" />
                        <span>Détection de pollution 72 heures plus tôt que les méthodes traditionnelles</span>
                      </li>
                    </ul>
                    
                    <div className="mt-6 p-3 bg-primary/10 rounded-lg">
                      <p className="text-sm italic">
                        "Nos drones équipés d'IA peuvent désormais surveiller des zones forestières immenses en quelques heures, identifiant automatiquement les activités illégales que nous n'aurions jamais pu détecter auparavant."
                      </p>
                      <p className="text-sm mt-2 font-medium">— Responsable d'une ONG environnementale</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 border-t pt-6">
                  <h4 className="text-lg font-medium mb-3">Systèmes de surveillance innovants</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-card p-4 rounded-lg border">
                      <h5 className="font-medium mb-2">Réseaux de capteurs autonomes</h5>
                      <p className="text-sm text-muted-foreground">
                        Dispositifs interconnectés qui surveillent en continu les paramètres environnementaux clés.
                      </p>
                    </div>
                    <div className="bg-card p-4 rounded-lg border">
                      <h5 className="font-medium mb-2">Analyse d'images satellites</h5>
                      <p className="text-sm text-muted-foreground">
                        Traitement automatisé d'images de télédétection pour détecter les changements environnementaux.
                      </p>
                    </div>
                    <div className="bg-card p-4 rounded-lg border">
                      <h5 className="font-medium mb-2">Bioacoustique intelligente</h5>
                      <p className="text-sm text-muted-foreground">
                        Analyse des sons naturels pour évaluer la biodiversité et détecter les perturbations écologiques.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="agriculture" className="px-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Tractor className="h-6 w-6 mr-2 text-primary" />
                  Agriculture de précision
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-medium mb-3">
                      Production alimentaire optimisée
                    </h4>
                    <p className="mb-4 text-muted-foreground">
                      L'IA transforme l'agriculture pour la rendre plus productive et durable :
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                        <span>Application ciblée d'eau, d'engrais et de pesticides basée sur les besoins réels</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                        <span>Détection précoce des maladies des cultures par analyse d'images</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                        <span>Prévision des rendements pour une planification optimale des récoltes</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="text-lg font-medium mb-3">Bénéfices environnementaux</h4>
                    <p className="mb-4">
                      L'agriculture de précision assistée par IA a permis :
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <Droplets className="h-5 w-5 mr-2 text-green-500" />
                        <span>Réduction de 30% de la consommation d'eau en agriculture</span>
                      </li>
                      <li className="flex items-center">
                        <Leaf className="h-5 w-5 mr-2 text-green-500" />
                        <span>Diminution de 50% de l'utilisation de pesticides</span>
                      </li>
                      <li className="flex items-center">
                        <LineChart className="h-5 w-5 mr-2 text-green-500" />
                        <span>Augmentation de 20% des rendements avec moins d'intrants</span>
                      </li>
                    </ul>
                    
                    <div className="mt-6 p-3 bg-primary/10 rounded-lg">
                      <p className="text-sm italic">
                        "L'agriculture de précision basée sur l'IA nous a permis de réduire drastiquement notre impact environnemental tout en augmentant nos rendements. C'est un changement de paradigme complet."
                      </p>
                      <p className="text-sm mt-2 font-medium">— Agriculteur utilisant l'IA</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 border-t pt-6">
                  <h4 className="text-lg font-medium mb-3">Technologies agricoles innovantes</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-card p-4 rounded-lg border">
                      <h5 className="font-medium mb-2">Drones agricoles intelligents</h5>
                      <p className="text-sm text-muted-foreground">
                        Surveillance aérienne des cultures avec analyse d'images en temps réel pour détecter problèmes et besoins.
                      </p>
                    </div>
                    <div className="bg-card p-4 rounded-lg border">
                      <h5 className="font-medium mb-2">Robots de désherbage</h5>
                      <p className="text-sm text-muted-foreground">
                        Machines autonomes qui identifient et éliminent les mauvaises herbes sans herbicides chimiques.
                      </p>
                    </div>
                    <div className="bg-card p-4 rounded-lg border">
                      <h5 className="font-medium mb-2">Irrigation intelligente</h5>
                      <p className="text-sm text-muted-foreground">
                        Systèmes qui ajustent l'arrosage en fonction de multiples paramètres (humidité du sol, météo, stade de croissance).
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="empreinte" className="px-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 flex items-center">
                  <Factory className="h-6 w-6 mr-2 text-primary" />
                  Réduction de l'empreinte carbone
                </h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-medium mb-3">
                      Décarbonation intelligente
                    </h4>
                    <p className="mb-4 text-muted-foreground">
                      L'IA offre des solutions innovantes pour réduire les émissions de gaz à effet de serre :
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                        <span>Optimisation des procédés industriels pour minimiser la consommation d'énergie</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                        <span>Gestion intelligente des bâtiments réduisant leur consommation énergétique</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                        <span>Optimisation des chaînes logistiques pour réduire les émissions de transport</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted p-6 rounded-lg">
                    <h4 className="text-lg font-medium mb-3">Impact climatique</h4>
                    <p className="mb-4">
                      Des projets d'IA pour la réduction carbone ont permis :
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <Factory className="h-5 w-5 mr-2 text-green-500" />
                        <span>Réduction de 25% des émissions dans des usines équipées d'IA</span>
                      </li>
                      <li className="flex items-center">
                        <Gauge className="h-5 w-5 mr-2 text-green-500" />
                        <span>Diminution de 30% de la consommation énergétique des bâtiments intelligents</span>
                      </li>
                      <li className="flex items-center">
                        <LineChart className="h-5 w-5 mr-2 text-green-500" />
                        <span>Baisse de 15% des émissions dans les chaînes d'approvisionnement optimisées</span>
                      </li>
                    </ul>
                    
                    <div className="mt-6 p-3 bg-primary/10 rounded-lg">
                      <p className="text-sm italic">
                        "L'IA nous a permis d'identifier des opportunités d'efficacité énergétique que nous n'aurions jamais trouvées avec les méthodes traditionnelles, transformant notre approche de la durabilité."
                      </p>
                      <p className="text-sm mt-2 font-medium">— Directeur développement durable d'une entreprise industrielle</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 border-t pt-6">
                  <h4 className="text-lg font-medium mb-3">Solutions innovantes</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-card p-4 rounded-lg border">
                      <h5 className="font-medium mb-2">Jumeaux numériques</h5>
                      <p className="text-sm text-muted-foreground">
                        Répliques virtuelles de systèmes physiques permettant de simuler et d'optimiser leur fonctionnement.
                      </p>
                    </div>
                    <div className="bg-card p-4 rounded-lg border">
                      <h5 className="font-medium mb-2">Optimisation des réseaux énergétiques</h5>
                      <p className="text-sm text-muted-foreground">
                        Systèmes intelligents équilibrant production et consommation d'énergie renouvelable.
                      </p>
                    </div>
                    <div className="bg-card p-4 rounded-lg border">
                      <h5 className="font-medium mb-2">Capture et séquestration de carbone</h5>
                      <p className="text-sm text-muted-foreground">
                        Technologies optimisées par IA pour capturer et stocker le CO2 de manière plus efficace.
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
                <h3 className="text-xl font-bold mb-2">Défis et considérations</h3>
                <p className="mb-4 text-muted-foreground">
                  Aspects importants à considérer pour une utilisation responsable de l'IA environnementale :
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Empreinte carbone des modèles d'IA eux-mêmes (consommation énergétique)</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Accessibilité des technologies pour les pays en développement</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Intégration des savoirs traditionnels dans les systèmes d'IA environnementale</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Perspectives d'avenir</h3>
                <p className="mb-4 text-muted-foreground">
                  Innovations prometteuses à l'horizon pour l'IA environnementale :
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>IA quantique pour modéliser des écosystèmes entiers avec une précision sans précédent</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Réseaux de capteurs autonomes et auto-reconfigurables pour la surveillance environnementale</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                    <span>Solutions de capture carbone bio-inspirées développées grâce à l'IA</span>
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

export default IAEnvironnement;
