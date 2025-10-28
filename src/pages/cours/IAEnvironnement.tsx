import React from 'react';
import Hero from '@/components/Hero';
import CourseHeader from '@/components/courses/CourseHeader';
import CourseModule from '@/components/courses/CourseModule';
import CourseConclusion from '@/components/courses/CourseConclusion';
import ZoomOn from '@/components/courses/ZoomOn';
import DidYouKnow from '@/components/courses/DidYouKnow';
import BackToResourcesButton from '@/components/courses/BackToResourcesButton';
import ExpandableSection from '@/components/courses/ExpandableSection';
import InteractiveExample from '@/components/courses/InteractiveExample';
import QuickFactBox from '@/components/courses/QuickFactBox';
import AnalogiePedagogique from '@/components/courses/AnalogiePedagogique';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Leaf, 
  Zap, 
  Droplet, 
  Trash2,
  TrendingDown,
  Server,
  Smartphone,
  Cloud,
  AlertTriangle,
  Lightbulb,
  TreePine,
  Thermometer,
  Cpu,
  Factory,
  Recycle,
  Battery,
  Globe,
  BookOpen,
  Target,
  Database
} from 'lucide-react';

const IAEnvironnement = () => {
  const headerProps = {
    title: "Green IT : L'Impact Environnemental de l'IA et du Numérique",
    subtitle: "Comprendre et réduire l'empreinte écologique de nos technologies",
    author: "Geoffroy Streit",
    authorDescription: "Consultant passionné en Intelligence Artificielle",
    duration: "3-4 heures",
    level: "Intermédiaire",
    audience: "Développeurs, décideurs IT, citoyens concernés",
    tags: ["Green IT", "Environnement", "Empreinte carbone", "IA durable", "Écoconception", "2025"]
  };

  const impactMetrics = [
    { label: "Émissions CO₂ numérique 2025", value: "1400Mt/an", trend: "up" as const },
    { label: "Part émissions mondiales", value: "4.2%", trend: "up" as const },
    { label: "Croissance annuelle", value: "+9%", trend: "up" as const },
    { label: "Potentiel réduction GreenIT", value: "-60%", trend: "down" as const }
  ];

  const datacentersMetrics = [
    { label: "Énergie datacenters 2025", value: "460 TWh/an", trend: "up" as const },
    { label: "Refroidissement", value: "40% énergie", trend: "stable" as const },
    { label: "Croissance IA", value: "+26%/an", trend: "up" as const },
    { label: "PUE best-in-class", value: "1.08", trend: "down" as const }
  ];

  const smartphoneMetrics = [
    { label: "Smartphones produits 2025", value: "1.46 milliards", trend: "up" as const },
    { label: "Émissions CO₂ fabrication", value: "80%", trend: "stable" as const },
    { label: "Durée vie moyenne France", value: "2.7 ans", trend: "up" as const },
    { label: "Taux recyclage mondial", value: "22%", trend: "up" as const }
  ];

  const streamingMetrics = [
    { label: "Trafic vidéo mondial 2025", value: "82% internet", trend: "up" as const },
    { label: "Netflix consommation", value: "15 TWh/an", trend: "up" as const },
    { label: "1h streaming HD", value: "36-100g CO₂", trend: "stable" as const },
    { label: "Gaming streaming", value: "2x streaming", trend: "up" as const }
  ];

  const emailStorageMetrics = [
    { label: "Emails envoyés/jour 2025", value: "361 milliards", trend: "up" as const },
    { label: "Stockage cloud mondial", value: "200 Zettaoctets", trend: "up" as const },
    { label: "1 email avec PJ", value: "50g CO₂", trend: "stable" as const },
    { label: "Spam mondial/an", value: "14.5Mt CO₂", trend: "up" as const }
  ];

  const ecoActionsSteps = [
    {
      title: "Audit de l'existant",
      description: "Mesurer l'empreinte carbone actuelle : serveurs, équipements, consommation",
      result: "Baseline carbone : 450 tCO₂e/an, consommation 2.3 GWh/an"
    },
    {
      title: "Optimisation modèles IA",
      description: "Réduire la taille et complexité des modèles sans perdre performance",
      result: "Modèle compressé 75%, précision -2%, consommation -80%"
    },
    {
      title: "Infrastructure verte",
      description: "Migration vers datacenters bas-carbone, énergies renouvelables",
      result: "Émissions -55%, coûts énergétiques -30%"
    },
    {
      title: "Sensibilisation équipes",
      description: "Former les développeurs aux pratiques de code écoresponsable",
      result: "Adoption bonnes pratiques 85%, efficacité énergétique +40%"
    }
  ];

  const module1Data = [
    {
      icon: <Thermometer className="h-5 w-5 text-primary" />,
      title: "L'empreinte carbone du numérique",
      items: [
        "4.2% des émissions mondiales GES 2025 (dépasse l'aviation)",
        "Croissance explosive : +9% par an depuis 2020",
        "3 phases : fabrication (78%), usage (21%), fin de vie (1%)",
        "1 email simple = 4g CO₂, avec PJ lourde = 50g CO₂",
        "Streaming vidéo 2025 : 400Mt CO₂/an (0.8% mondial)",
        "Fabrication d'un smartphone : 70-100 kg CO₂ équivalent"
      ]
    },
    {
      icon: <Cpu className="h-5 w-5 text-primary" />,
      title: "L'IA : une technologie énergivore",
      items: [
        "Entraînement GPT-4 : 1000t+ CO₂ (équivalent vie de 10 américains)",
        "1 requête ChatGPT : 2.9 Wh vs 0.3 Wh Google (10x plus)",
        "Datacenters IA 2025 : 460 TWh/an = Suède entière",
        "Refroidissement : 40% de l'énergie consommée",
        "Effet rebond : efficacité +50%, usage +300% = impact x2",
        "GPU obsolescence : renouvellement tous les 18-24 mois"
      ]
    },
    {
      icon: <Recycle className="h-5 w-5 text-primary" />,
      title: "Ressources et déchets électroniques",
      items: [
        "62Mt déchets électroniques 2025 (+24% depuis 2020)",
        "Taux recyclage mondial : 22.3% seulement",
        "Terres rares : extraction nécessite 200 000L eau/tonne",
        "1 smartphone : 200 kg matières extraites, 70 éléments",
        "Obsolescence logicielle : support limité 3-4 ans",
        "E-waste toxique : plomb, mercure, cadmium dans sols"
      ]
    }
  ];

  const analogyElements = [
    {
      aspect: "Entraînement GPT-4",
      explanation: "C'est comme si vous faisiez 125 allers-retours Paris-New York en avion, ou rouliez 5 millions de km en voiture",
      mathConcept: "~1000-1200 tonnes de CO₂"
    },
    {
      aspect: "Tous les datacenters IA du monde (2025)",
      explanation: "Ils consomment autant d'électricité que la Suède entière sur un an, ou pourraient alimenter 45 millions de foyers français",
      mathConcept: "460 TWh/an, équivalent 0.9% électricité mondiale"
    },
    {
      aspect: "Votre boîte email avec 5000 mails",
      explanation: "Elle pèse autant que 25 bouteilles d'eau de 2L en CO₂, équivalent à 125 km en voiture",
      mathConcept: "~10 kg CO₂ stockés (2g/email × 5000)"
    },
    {
      aspect: "Regarder Netflix 2h/jour pendant un an",
      explanation: "Émet autant de CO₂ que conduire 600 km en voiture thermique, ou chauffer une maison 3 jours",
      mathConcept: "~27-75 kg CO₂/an selon réseau et appareil"
    },
    {
      aspect: "Stocker 1 To de photos dans le cloud",
      explanation: "C'est comme laisser une ampoule 60W allumée en permanence pendant 6 mois",
      mathConcept: "~200 kg CO₂/an pour stockage + transferts"
    },
    {
      aspect: "Un spam de masse à 1 million de personnes",
      explanation: "Émet autant de CO₂ que chauffer une maison pendant un mois d'hiver",
      mathConcept: "~4000 kg CO₂ (4g × 1M emails)"
    }
  ];

  const didYouKnowItems = [
    {
      title: "Vos emails dorment... mais polluent 24/7",
      content: "Un email stocké pollue en continu. Les 361 milliards d'emails envoyés chaque jour en 2025 génèrent autant de CO₂ que 3 millions de voitures. Nettoyer votre boîte mail = éteindre des serveurs."
    },
    {
      title: "Netflix pollue plus que le Costa Rica",
      content: "Netflix consomme 15 TWh/an (2025), soit plus que la consommation électrique totale du Costa Rica. Un épisode de série en 4K = 1.5 kg CO₂, équivalent à un trajet de 7.5 km en voiture."
    },
    {
      title: "Le spam, ce pollueur invisible",
      content: "Les spams représentent 60% des emails mondiaux et génèrent 14.5 millions de tonnes de CO₂/an (2025), soit autant que 3 millions de voitures. 1 spam = 0.3g CO₂, mais multiplié par des milliards..."
    },
    {
      title: "Votre smartphone a un sac à dos écologique de 200 kg",
      content: "Pour fabriquer 1 smartphone de 200g, il faut extraire 200 kg de matières premières de la Terre : 44 kg de roches, 100 kg de sable, 18 kg d'eau, 12 kg de produits chimiques, plus métaux rares."
    },
    {
      title: "L'IA consomme plus que l'Argentine",
      content: "En 2025, les datacenters IA consomment 460 TWh/an, dépassant la consommation électrique de l'Argentine (≈130M habitants). Une requête ChatGPT = allumer une ampoule LED 1 minute."
    },
    {
      title: "Le cloud n'est pas dans les nuages",
      content: "Dire 'c'est dans le cloud' cache la réalité : vos données sont dans des datacenters gourmands en énergie. 1 To de stockage cloud = 200 kg CO₂/an, comme un vol Paris-Berlin aller-retour."
    }
  ];

  return (
    <>
      <Hero
        title={headerProps.title}
        subtitle={headerProps.subtitle}
      />

      <section className="section-container">
        <BackToResourcesButton />
        <CourseHeader {...headerProps} />

        {/* Introduction avec mise en situation */}
        <CourseModule
          title="Introduction : Le coût invisible de notre révolution numérique"
          description="Comprendre l'impact environnemental réel de l'IA, du cloud et de nos smartphones"
        >
          <Alert className="mb-6 bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800">
            <TreePine className="h-5 w-5 text-green-600" />
            <AlertDescription>
              <strong>Mise en situation :</strong> Chaque jour, vous utilisez votre smartphone, recherchez sur Google, 
              streamez des vidéos, utilisez ChatGPT. Ces gestes anodins ont un coût caché : une empreinte carbone 
              collective qui dépasse celle de l'aviation mondiale. Ce cours vous révèle la face cachée du numérique.
            </AlertDescription>
          </Alert>

          <Card className="mb-6 border-amber-200 dark:border-amber-800">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Globe className="h-5 w-5 text-amber-500" />
                    Le mythe du "cloud" dématérialisé
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    On parle de "cloud" (nuage), comme si nos données flottaient dans l'air. La réalité ? 
                    Des millions de serveurs physiques, consommant autant d'électricité qu'un pays entier, 
                    refroidis par des systèmes énergivores, fabriqués avec des métaux rares extraits dans 
                    des conditions sociales et environnementales souvent désastreuses.
                  </p>
                  <div className="bg-amber-50 dark:bg-amber-950/30 p-3 rounded-lg text-xs space-y-1">
                    <p>💡 <strong>Réalité 2025 :</strong> Le numérique c'est :</p>
                    <p>• 35+ milliards d'équipements connectés</p>
                    <p>• 10 000+ datacenters dans le monde</p>
                    <p>• 1,6 million de km de câbles sous-marins</p>
                    <p>• 4.2% des émissions mondiales GES (1400 Mt CO₂)</p>
                    <p>• Croissance +9%/an (double aviation commerciale)</p>
                  </div>
                </div>
                <QuickFactBox
                  title="Impact IA et numérique en 2024"
                  facts={impactMetrics}
                  variant="warning"
                />
              </div>
            </CardContent>
          </Card>

          <ZoomOn title="Pourquoi l'IA est-elle particulièrement polluante ?">
            <div className="space-y-4">
              <p className="mb-3">
                L'intelligence artificielle moderne, et en particulier les grands modèles de langage (LLM) comme 
                GPT-4 ou Claude, nécessitent deux phases extrêmement gourmandes en énergie :
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border-red-200">
                  <CardContent className="pt-4">
                    <h5 className="font-medium mb-2 flex items-center gap-2">
                      <Factory className="h-4 w-4 text-red-500" />
                      Phase 1 : Entraînement (Training)
                    </h5>
                    <p className="text-sm text-muted-foreground mb-2">
                      L'entraînement d'un modèle comme GPT-3 nécessite des milliers de GPU haut de gamme 
                      tournant pendant plusieurs semaines.
                    </p>
                    <div className="text-xs bg-muted/50 p-2 rounded space-y-1">
                      <p>• <strong>Durée :</strong> 2-4 semaines non-stop</p>
                      <p>• <strong>Hardware :</strong> 10 000+ GPU A100</p>
                      <p>• <strong>Énergie :</strong> 1300 MWh (~$5M)</p>
                      <p>• <strong>CO₂ :</strong> 500-1000 tonnes</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-orange-200">
                  <CardContent className="pt-4">
                    <h5 className="font-medium mb-2 flex items-center gap-2">
                      <Zap className="h-4 w-4 text-orange-500" />
                      Phase 2 : Inférence (Usage)
                    </h5>
                    <p className="text-sm text-muted-foreground mb-2">
                      Chaque requête consomme de l'énergie. Avec des millions d'utilisateurs quotidiens, 
                      l'impact cumulé dépasse souvent celui de l'entraînement.
                    </p>
                    <div className="text-xs bg-muted/50 p-2 rounded space-y-1">
                      <p>• <strong>1 requête ChatGPT :</strong> ~0.3 Wh</p>
                      <p>• <strong>vs recherche Google :</strong> 10x plus</p>
                      <p>• <strong>100M requêtes/jour :</strong> 30 MWh/jour</p>
                      <p>• <strong>Annuel :</strong> ~11 GWh = ville 3000 hab</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Alert className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
                <Lightbulb className="h-4 w-4 text-blue-500" />
                <AlertDescription>
                  <strong>Effet rebond (Jevons Paradox) :</strong> Plus l'IA devient efficace, plus on l'utilise. 
                  GPT-4 est 3x plus efficace que GPT-3, mais utilisé 10x plus. Résultat : impact total x3.
                </AlertDescription>
              </Alert>
            </div>
          </ZoomOn>

          <AnalogiePedagogique
            title="🌍 Ordres de grandeur : Comprendre l'impact par l'analogie"
            description="Pour mieux saisir ces chiffres abstraits, voici des comparaisons concrètes"
            elements={analogyElements}
          />

          <ExpandableSection 
            title="📊 Répartition de l'empreinte numérique mondiale" 
            icon={<Target className="h-4 w-4" />}
          >
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground mb-4">
                L'empreinte environnementale du numérique se répartit entre trois grandes catégories :
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="border-blue-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Smartphone className="h-4 w-4 text-blue-500" />
                      Équipements utilisateurs (44%)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs space-y-2">
                    <p className="text-muted-foreground">
                      Smartphones, ordinateurs, tablettes, objets connectés. La fabrication compte pour 70-90% 
                      de leur empreinte totale.
                    </p>
                    <div className="bg-muted/50 p-2 rounded">
                      <p>• 34 milliards d'équipements</p>
                      <p>• Renouvellement tous les 2-3 ans</p>
                      <p>• Fabrication très polluante</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-purple-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Server className="h-4 w-4 text-purple-500" />
                      Datacenters et cloud (28%)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs space-y-2">
                    <p className="text-muted-foreground">
                      Serveurs hébergeant sites web, applications, IA. Consommation électrique continue, 
                      refroidissement massif.
                    </p>
                    <div className="bg-muted/50 p-2 rounded">
                      <p>• 8 000 datacenters mondiaux</p>
                      <p>• 200 TWh/an (1% élec mondiale)</p>
                      <p>• 40% pour refroidissement</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-green-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Cloud className="h-4 w-4 text-green-500" />
                      Réseaux et télécoms (28%)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs space-y-2">
                    <p className="text-muted-foreground">
                      Infrastructures réseau : câbles, antennes 4G/5G, routeurs. Transport des données 
                      entre utilisateurs et serveurs.
                    </p>
                    <div className="bg-muted/50 p-2 rounded">
                      <p>• 1.5M km câbles sous-marins</p>
                      <p>• Millions d'antennes relais</p>
                      <p>• Croissance trafic : +30%/an</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Alert>
                <AlertTriangle className="h-4 w-4 text-amber-500" />
                <AlertDescription>
                  <strong>Attention :</strong> Ces chiffres évoluent rapidement. La 5G, l'IoT et l'IA générative 
                  accélèrent la croissance. Sans action, l'empreinte numérique pourrait doubler d'ici 2030.
                </AlertDescription>
              </Alert>
            </div>
          </ExpandableSection>
        </CourseModule>

        {/* Module 1 : Impact détaillé */}
        <CourseModule
          title="Module 1 : Comprendre les impacts environnementaux"
          description="Décryptage des trois piliers de l'empreinte écologique du numérique"
          modules={module1Data}
        />

        <div className="max-w-4xl mx-auto mb-12 space-y-6">
          <ZoomOn title="🏭 Focus : Les datacenters, usines numériques invisibles">
            <div className="space-y-4">
              <p className="mb-3">
                Les datacenters sont les usines du 21ème siècle : des bâtiments remplis de dizaines de milliers 
                de serveurs, fonctionnant 24/7, générant une chaleur intense nécessitant des systèmes de 
                refroidissement massifs.
              </p>
              
              <QuickFactBox
                title="Datacenters en chiffres"
                facts={datacentersMetrics}
                variant="warning"
              />

              <ExpandableSection 
                title="Les 3 défis majeurs des datacenters" 
                icon={<Server className="h-4 w-4" />}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center gap-2">
                        <Zap className="h-4 w-4" />
                        1. Consommation électrique
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs space-y-2">
                      <p className="text-muted-foreground">
                        Un datacenter moyen consomme autant qu'une ville de 10 000 habitants. 
                        Les plus grands (hyperscalers) : équivalent de plusieurs villes moyennes.
                      </p>
                      <div className="bg-muted/50 p-2 rounded">
                        <p><strong>Moyenne :</strong> 200 MW</p>
                        <p><strong>Hyperscalers :</strong> 500+ MW</p>
                        <p><strong>Coût annuel :</strong> $50-200M</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center gap-2">
                        <Droplet className="h-4 w-4" />
                        2. Consommation d'eau
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs space-y-2">
                      <p className="text-muted-foreground">
                        Les systèmes de refroidissement par évaporation consomment des millions de litres d'eau, 
                        créant tensions dans régions arides.
                      </p>
                      <div className="bg-muted/50 p-2 rounded">
                        <p><strong>Moyen :</strong> 3-5M litres/jour</p>
                        <p><strong>Google (2022) :</strong> 15 milliards L</p>
                        <p><strong>Microsoft :</strong> 5 milliards L</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center gap-2">
                        <Thermometer className="h-4 w-4" />
                        3. Dissipation thermique
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs space-y-2">
                      <p className="text-muted-foreground">
                        40% de l'énergie sert au refroidissement. La chaleur dégagée équivaut à une centrale 
                        thermique, réchauffant parfois les écosystèmes environnants.
                      </p>
                      <div className="bg-muted/50 p-2 rounded">
                        <p><strong>Chaleur produite :</strong> ~200 MW</p>
                        <p><strong>Refroidissement :</strong> 40% énergie</p>
                        <p><strong>PUE optimal :</strong> &lt; 1.2</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </ExpandableSection>

              <Alert className="bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800">
                <Leaf className="h-4 w-4 text-green-500" />
                <AlertDescription>
                  <strong>Solutions émergentes :</strong> Datacenters en Scandinavie (climat froid + électricité hydro), 
                  récupération de chaleur pour chauffage urbain, refroidissement liquide immergé, 
                  intelligence artificielle pour optimiser la climatisation (Google : -40% énergie refroidissement).
                </AlertDescription>
              </Alert>
            </div>
          </ZoomOn>

          <ZoomOn title="📱 Focus : Smartphones et obsolescence programmée">
            <div className="space-y-4">
              <p className="mb-3">
                Votre smartphone est l'objet le plus complexe et le plus polluant que vous possédez. 
                Sa fabrication concentre 70 à 90% de son empreinte carbone totale. Le garder le plus longtemps 
                possible est le geste écologique le plus impactant.
              </p>
              
              <QuickFactBox
                title="Smartphones : L'envers du décor"
                facts={smartphoneMetrics}
                variant="warning"
              />

              <Card className="border-red-200 dark:border-red-800">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    Le vrai coût d'un smartphone
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-sm mb-2">Ressources nécessaires</h5>
                      <ul className="text-xs space-y-1">
                        <li>• <strong>200 kg</strong> de matières premières extraites</li>
                        <li>• <strong>70 matériaux</strong> dont 50 métaux différents</li>
                        <li>• <strong>15-20 terres rares</strong> (lithium, cobalt, néodyme...)</li>
                        <li>• <strong>50-100 kg CO₂</strong> émis lors de la fabrication</li>
                        <li>• <strong>12 000 litres d'eau</strong> pour extraction minéraux</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-sm mb-2">Cycle de vie</h5>
                      <ul className="text-xs space-y-1">
                        <li>• <strong>Durée vie moyenne :</strong> 2-3 ans (France)</li>
                        <li>• <strong>Obsolescence logicielle :</strong> support 2-5 ans</li>
                        <li>• <strong>Taux de réparation :</strong> &lt;30%</li>
                        <li>• <strong>Taux de recyclage :</strong> ~20% monde</li>
                        <li>• <strong>Métaux récupérés :</strong> &lt;5% terres rares</li>
                      </ul>
                    </div>
                  </div>

                  <Alert className="mt-4">
                    <Lightbulb className="h-4 w-4" />
                    <AlertDescription className="text-xs">
                      <strong>Conseil d'or :</strong> Garder son smartphone 4 ans au lieu de 2 divise par deux son impact 
                      environnemental. C'est plus efficace que tous les petits gestes quotidiens (emails, streaming...) réunis.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              <ExpandableSection 
                title="🔋 Batteries et terres rares : la face cachée" 
                icon={<Battery className="h-4 w-4" />}
              >
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Les batteries lithium-ion et l'extraction des terres rares posent des défis environnementaux 
                    et sociaux majeurs.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="pt-4">
                        <h5 className="font-medium text-sm mb-2">Extraction du lithium</h5>
                        <p className="text-xs text-muted-foreground mb-2">
                          Principalement en Amérique du Sud (Argentine, Chili, Bolivie) : pompage d'eau souterraine 
                          dans déserts salins, asséchant nappes phréatiques.
                        </p>
                        <div className="bg-muted/50 p-2 rounded text-xs">
                          <p>• <strong>Eau consommée :</strong> 500 000L / tonne lithium</p>
                          <p>• <strong>Impact :</strong> sécheresses, agriculture détruite</p>
                          <p>• <strong>Communautés :</strong> conflits d'usage de l'eau</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-4">
                        <h5 className="font-medium text-sm mb-2">Extraction du cobalt</h5>
                        <p className="text-xs text-muted-foreground mb-2">
                          70% du cobalt mondial vient de RD Congo, avec conditions de travail souvent inhumaines, 
                          travail des enfants, pollution des sols.
                        </p>
                        <div className="bg-muted/50 p-2 rounded text-xs">
                          <p>• <strong>Mineurs artisanaux :</strong> ~200 000 (dont enfants)</p>
                          <p>• <strong>Salaire :</strong> $1-2/jour dans mines informelles</p>
                          <p>• <strong>Pollution :</strong> métaux lourds dans eau/sols</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Alert className="bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800">
                    <AlertTriangle className="h-4 w-4 text-amber-500" />
                    <AlertDescription className="text-xs">
                      <strong>Dilemme :</strong> Ces matériaux sont essentiels pour la transition énergétique 
                      (batteries véhicules électriques, stockage énergies renouvelables). Il faut améliorer conditions 
                      d'extraction, augmenter recyclage, développer alternatives (batteries sodium, état solide).
                    </AlertDescription>
                  </Alert>
                </div>
              </ExpandableSection>
            </div>
          </ZoomOn>

          <DidYouKnow items={didYouKnowItems} />
        </div>

        {/* Section Streaming et Vidéo */}
        <div className="max-w-4xl mx-auto mb-12">
          <ZoomOn title="📺 L'impact massif du streaming vidéo et des réseaux sociaux">
            <div className="space-y-4">
              <p className="mb-3">
                En 2025, 82% du trafic internet mondial est constitué de vidéos. Netflix, YouTube, TikTok, 
                Twitch... ces plateformes représentent une part colossale de la consommation énergétique 
                du numérique. Et pourtant, ce streaming nous semble si « léger », si immatériel.
              </p>

              <QuickFactBox
                title="Streaming vidéo : les chiffres 2025"
                facts={streamingMetrics}
                variant="warning"
              />

              <Card className="border-red-200 dark:border-red-800">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    Comprendre l'impact du streaming : analogies concrètes
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h5 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Cloud className="h-4 w-4 text-blue-500" />
                        Regarder Netflix 2h/jour pendant 1 an
                      </h5>
                      <p className="text-xs text-muted-foreground mb-2">
                        En Full HD, c'est équivalent à :
                      </p>
                      <ul className="text-xs space-y-1">
                        <li>• Parcourir <strong>600 km en voiture</strong> essence</li>
                        <li>• Faire <strong>3 allers-retours Paris-Lyon</strong> en TGV</li>
                        <li>• Chauffer votre <strong>maison 3 jours</strong> en hiver</li>
                        <li>• Émettre <strong>27-75 kg CO₂</strong> (selon réseau/appareil)</li>
                      </ul>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h5 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Smartphone className="h-4 w-4 text-purple-500" />
                        Scroller TikTok 1h/jour pendant 1 an
                      </h5>
                      <p className="text-xs text-muted-foreground mb-2">
                        Avec lecture automatique vidéos :
                      </p>
                      <ul className="text-xs space-y-1">
                        <li>• Équivaut à <strong>15-40 kg CO₂</strong></li>
                        <li>• Comme <strong>200 km en voiture</strong></li>
                        <li>• <strong>100-300 kWh</strong> d'électricité consommée</li>
                        <li>• Impact x2 si 4G vs WiFi</li>
                      </ul>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h5 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-amber-500" />
                        1 match de foot en direct (4K)
                      </h5>
                      <p className="text-xs text-muted-foreground mb-2">
                        90 minutes en ultra haute définition :
                      </p>
                      <ul className="text-xs space-y-1">
                        <li>• <strong>150-450g CO₂</strong> émis</li>
                        <li>• Comme rouler <strong>2 km en voiture</strong></li>
                        <li>• 6 Go de données téléchargées</li>
                        <li>• <strong>Impact x3</strong> vs qualité standard (720p)</li>
                      </ul>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h5 className="font-semibold text-sm mb-2 flex items-center gap-2">
                        <Target className="h-4 w-4 text-green-500" />
                        Gaming en cloud (GeForce Now, Stadia)
                      </h5>
                      <p className="text-xs text-muted-foreground mb-2">
                        1 heure de jeu en streaming :
                      </p>
                      <ul className="text-xs space-y-1">
                        <li>• <strong>200-400g CO₂</strong> (2x streaming vidéo)</li>
                        <li>• Nécessite GPU distant haute perf</li>
                        <li>• 8-15 Go données transférées</li>
                        <li>• Latence = serveurs + proches = + datacenters</li>
                      </ul>
                    </div>
                  </div>

                  <Alert className="mt-4 bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
                    <Lightbulb className="h-4 w-4 text-blue-500" />
                    <AlertDescription className="text-xs">
                      <strong>Le facteur qualité :</strong> Passer de 4K à 1080p (Full HD) réduit l'impact de 60-70%. 
                      De Full HD à 720p : encore -50%. Sur mobile (petit écran), 720p est amplement suffisant et 
                      divise par 4 votre empreinte carbone streaming.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              <ExpandableSection 
                title="🎬 Pourquoi le streaming est-il si polluant ?" 
                icon={<AlertTriangle className="h-4 w-4" />}
              >
                <div className="space-y-3 text-sm">
                  <p className="text-muted-foreground">
                    Le streaming vidéo sollicite toute la chaîne numérique : de votre appareil aux serveurs Netflix, 
                    en passant par les réseaux de télécommunication et les CDN (Content Delivery Networks).
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <Card>
                      <CardContent className="pt-4">
                        <h5 className="font-medium text-xs mb-2">1. Encodage et stockage</h5>
                        <p className="text-xs text-muted-foreground">
                          Chaque film Netflix existe en 120+ versions (qualités, langues, résolutions). 
                          Stockées dans des datacenters partout dans le monde = énergie permanente.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-4">
                        <h5 className="font-medium text-xs mb-2">2. Transfert réseau</h5>
                        <p className="text-xs text-muted-foreground">
                          Les données transitent par câbles, routeurs, antennes. Plus le débit est élevé 
                          (4K), plus l'infrastructure réseau consomme. 4G pollue 2x plus que WiFi/fibre.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-4">
                        <h5 className="font-medium text-xs mb-2">3. Votre appareil</h5>
                        <p className="text-xs text-muted-foreground">
                          Décoder et afficher la vidéo consomme de l'énergie. Un téléviseur 55" 4K 
                          consomme 5-10x plus qu'une tablette pour le même contenu.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-4 text-xs">
                    <h5 className="font-semibold mb-2">💡 Gestes simples pour réduire l'impact :</h5>
                    <ul className="space-y-1">
                      <li>✅ Préférer <strong>720p sur smartphone</strong>, 1080p sur ordinateur (qualité suffisante)</li>
                      <li>✅ <strong>Télécharger en WiFi</strong> les contenus à regarder hors ligne (trains, avions)</li>
                      <li>✅ Bloquer <strong>lecture automatique</strong> (YouTube, Facebook, Netflix)</li>
                      <li>✅ Privilégier <strong>audio only</strong> pour podcasts/musique (10x moins d'impact)</li>
                      <li>✅ Regarder sur <strong>écran le plus petit</strong> adapté au contexte</li>
                      <li>✅ <strong>WiFi &gt; 4G/5G</strong> : divise l'impact par 2</li>
                    </ul>
                  </div>
                </div>
              </ExpandableSection>
            </div>
          </ZoomOn>
        </div>

        {/* Section Emails et Stockage Cloud */}
        <div className="max-w-4xl mx-auto mb-12">
          <ZoomOn title="📧 L'impact invisible des emails et du stockage cloud">
            <div className="space-y-4">
              <p className="mb-3">
                « C'est juste un email. » On en envoie des centaines par jour sans y penser. Mais chaque email 
                est stocké sur des serveurs, dupliqué pour sécurité, transféré via des réseaux... et consomme 
                de l'énergie 24h/24, 7j/7, tant qu'il existe.
              </p>

              <QuickFactBox
                title="Emails et stockage : chiffres 2025"
                facts={emailStorageMetrics}
                variant="warning"
              />

              <Card className="border-orange-200 dark:border-orange-800">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Database className="h-5 w-5 text-orange-500" />
                    Analogies : Comprendre l'impact des emails et du cloud
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h5 className="font-semibold text-sm mb-2">📨 1 email simple (texte)</h5>
                      <p className="text-xs text-muted-foreground mb-2">
                        <strong>4 grammes de CO₂</strong> = c'est comme :
                      </p>
                      <ul className="text-xs space-y-1">
                        <li>• Laisser une <strong>ampoule LED allumée 6 minutes</strong></li>
                        <li>• Faire <strong>20 mètres en voiture</strong></li>
                        <li>• Produire <strong>1 feuille A4</strong></li>
                      </ul>
                      <p className="text-xs text-muted-foreground mt-2 italic">
                        Multiplié par 361 milliards/jour = 1.4 million tonnes CO₂/jour
                      </p>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h5 className="font-semibold text-sm mb-2">📎 1 email avec pièce jointe (10 Mo)</h5>
                      <p className="text-xs text-muted-foreground mb-2">
                        <strong>50 grammes de CO₂</strong> = c'est comme :
                      </p>
                      <ul className="text-xs space-y-1">
                        <li>• Laisser une <strong>ampoule LED allumée 1h</strong></li>
                        <li>• Faire <strong>250 mètres en voiture</strong></li>
                        <li>• Fabriquer <strong>2 sacs plastique</strong></li>
                      </ul>
                      <p className="text-xs text-muted-foreground mt-2 italic">
                        Envoyé à 10 personnes = 500g CO₂ (2.5 km en voiture)
                      </p>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h5 className="font-semibold text-sm mb-2">🗑️ Votre boîte mail (5000 emails)</h5>
                      <p className="text-xs text-muted-foreground mb-2">
                        <strong>10 kg de CO₂</strong> stockés en continu = c'est comme :
                      </p>
                      <ul className="text-xs space-y-1">
                        <li>• Garder un <strong>frigo ouvert 3 jours</strong></li>
                        <li>• Rouler <strong>50 km en voiture</strong></li>
                        <li>• <strong>50 repas végétariens</strong></li>
                        <li>• <strong>Fabriquer 1 jean</strong></li>
                      </ul>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h5 className="font-semibold text-sm mb-2">☁️ 1 To de données cloud (photos, docs)</h5>
                      <p className="text-xs text-muted-foreground mb-2">
                        <strong>200 kg CO₂/an</strong> (stockage + accès) = équivalent à :
                      </p>
                      <ul className="text-xs space-y-1">
                        <li>• <strong>Vol Paris-Berlin</strong> aller-retour</li>
                        <li>• <strong>1000 km en voiture</strong></li>
                        <li>• Production de <strong>200 kg de viande de bœuf</strong></li>
                        <li>• <strong>Chauffer une maison 10 jours</strong></li>
                      </ul>
                    </div>
                  </div>

                  <Alert className="mt-4">
                    <AlertTriangle className="h-4 w-4 text-amber-500" />
                    <AlertDescription className="text-xs">
                      <strong>Le spam, ce fléau invisible :</strong> 60% des emails mondiaux sont des spams. 
                      Ils génèrent 14.5 millions de tonnes de CO₂/an (2025), soit autant que 3 millions de voitures. 
                      Un bon filtre anti-spam est un geste écologique !
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              <ExpandableSection 
                title="💾 Pourquoi le stockage cloud pollue en continu ?" 
                icon={<Cloud className="h-4 w-4" />}
              >
                <div className="space-y-3 text-sm">
                  <p className="text-muted-foreground">
                    Contrairement à l'envoi d'un email (impact ponctuel), le stockage génère une pollution 
                    <strong> permanente</strong>. Vos photos de vacances 2015 consomment de l'énergie 
                    <strong> chaque seconde</strong>, 24h/24, depuis 10 ans.
                  </p>

                  <Card>
                    <CardContent className="pt-4 space-y-3">
                      <div>
                        <h5 className="font-semibold text-sm mb-2">🔄 Réplication des données</h5>
                        <p className="text-xs text-muted-foreground">
                          Pour sécurité et disponibilité, vos données sont <strong>dupliquées 3-4 fois</strong> 
                          dans différents datacenters. 1 To stocké = réellement 3-4 To sur les serveurs.
                        </p>
                      </div>

                      <div>
                        <h5 className="font-semibold text-sm mb-2">⚡ Consommation permanente</h5>
                        <p className="text-xs text-muted-foreground">
                          Les serveurs tournent 24/7, même la nuit. Refroidissement, redondance, sauvegardes 
                          automatiques : chaque seconde consomme de l'énergie, que vous accédiez aux données ou non.
                        </p>
                      </div>

                      <div>
                        <h5 className="font-semibold text-sm mb-2">🔍 Indexation et recherche</h5>
                        <p className="text-xs text-muted-foreground">
                          Pour retrouver rapidement vos fichiers, le cloud les indexe en permanence. 
                          Plus vous stockez, plus cette indexation consomme de puissance de calcul.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-4">
                    <h5 className="font-semibold text-sm mb-3 flex items-center gap-2">
                      <Trash2 className="h-4 w-4 text-green-600" />
                      🌱 Actions concrètes : nettoyage digital
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      <div>
                        <p className="font-medium mb-1">📧 Emails</p>
                        <ul className="space-y-1">
                          <li>✅ Supprimer emails &gt; 3 mois inutiles</li>
                          <li>✅ Vider régulièrement spam et corbeille</li>
                          <li>✅ Se désabonner newsletters non lues</li>
                          <li>✅ Éviter « Répondre à tous »</li>
                          <li>✅ Compresser pièces jointes</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium mb-1">☁️ Cloud</p>
                        <ul className="space-y-1">
                          <li>✅ Supprimer doublons photos/vidéos</li>
                          <li>✅ Archiver localement (disque dur externe)</li>
                          <li>✅ Vider corbeilles cloud régulièrement</li>
                          <li>✅ Trier fichiers par taille, supprimer gros fichiers obsolètes</li>
                          <li>✅ Limiter synchronisation auto</li>
                        </ul>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-3 italic">
                      💡 <strong>Impact concret :</strong> Supprimer 1000 emails avec PJ = économiser 50 kg CO₂, 
                      équivalent de 250 km en voiture. Un nettoyage annuel massif peut diviser votre empreinte 
                      email par 2-3.
                    </p>
                  </div>
                </div>
              </ExpandableSection>
            </div>
          </ZoomOn>
        </div>

        {/* Module 2 : Solutions et actions */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="h-6 w-6 text-green-600" />
                Module 2 : Agir pour un numérique plus responsable
              </CardTitle>
              <p className="text-muted-foreground">Solutions concrètes à tous les niveaux : individuel, entreprise, société</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <ExpandableSection 
                title="💡 Actions individuelles (tout de suite)" 
                icon={<Lightbulb className="h-4 w-4" />}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center gap-2">
                        <Smartphone className="h-4 w-4" />
                        Équipements
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs space-y-1">
                      <p>✅ Garder son smartphone 4+ ans</p>
                      <p>✅ Réparer plutôt que remplacer</p>
                      <p>✅ Acheter reconditionné (-70% impact)</p>
                      <p>✅ Recycler correctement (e-waste)</p>
                      <p>✅ Désactiver fonctions inutiles</p>
                      <p>✅ Choisir indice réparabilité élevé</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center gap-2">
                        <Cloud className="h-4 w-4" />
                        Usage quotidien
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs space-y-1">
                      <p>✅ Réduire qualité streaming (720p vs 4K)</p>
                      <p>✅ Télécharger vs streamer</p>
                      <p>✅ Désabonner newsletters inutiles</p>
                      <p>✅ Nettoyer boîte mail et cloud</p>
                      <p>✅ Bloquer vidéos auto-play</p>
                      <p>✅ Limiter usage IA générative</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        Sensibilisation
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs space-y-1">
                      <p>✅ Se former (ce cours !)</p>
                      <p>✅ Partager connaissances</p>
                      <p>✅ Mesurer son empreinte (carbonalyser)</p>
                      <p>✅ Suivre acteurs Green IT</p>
                      <p>✅ Exiger transparence marques</p>
                      <p>✅ Voter avec son portefeuille</p>
                    </CardContent>
                  </Card>
                </div>
              </ExpandableSection>

              <ExpandableSection 
                title="🏢 Actions entreprises et développeurs" 
                icon={<Factory className="h-4 w-4" />}
              >
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Écoconception logicielle</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-sm mb-2">Optimisation code</h5>
                          <ul className="text-xs space-y-1">
                            <li>• Algorithms efficaces (complexité O)</li>
                            <li>• Lazy loading, code splitting</li>
                            <li>• Compression images (WebP, AVIF)</li>
                            <li>• Minification, tree-shaking</li>
                            <li>• Cache intelligent</li>
                            <li>• Éviter over-engineering</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-sm mb-2">Modèles IA sobres</h5>
                          <ul className="text-xs space-y-1">
                            <li>• Quantification (16-bit, 8-bit, 4-bit)</li>
                            <li>• Pruning (élagage neurones inutiles)</li>
                            <li>• Distillation (petit modèle apprend du grand)</li>
                            <li>• Modèles légers (Phi-3, Gemma, Mistral-7B)</li>
                            <li>• Edge AI (calcul local vs cloud)</li>
                            <li>• Cache réponses fréquentes</li>
                          </ul>
                        </div>
                      </div>

                      <Alert className="mt-3">
                        <Target className="h-4 w-4" />
                        <AlertDescription className="text-xs">
                          <strong>Exemple concret :</strong> Un modèle IA quantifié à 4-bit consomme 8x moins de mémoire 
                          et 4-6x moins d'énergie qu'en 32-bit, avec seulement 1-2% de perte de précision. Adopté massivement, 
                          cela économiserait l'équivalent énergétique d'une ville de 50 000 habitants.
                        </AlertDescription>
                      </Alert>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Infrastructure et hébergement</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs space-y-2">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="bg-muted/50 p-3 rounded">
                          <h5 className="font-semibold mb-1">Hébergement vert</h5>
                          <p>Choisir datacenters alimentés énergies renouvelables, PUE &lt; 1.3, certifications 
                          environnementales (ISO 14001, Green Grid)</p>
                        </div>
                        <div className="bg-muted/50 p-3 rounded">
                          <h5 className="font-semibold mb-1">Optimisation serveurs</h5>
                          <p>Virtualisation, conteneurisation, auto-scaling, shut down nocturne environnements dev/test, 
                          monitoring consommation</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </ExpandableSection>

              <InteractiveExample
                title="Cas pratique : Stratégie Green IT en entreprise"
                description="Suivons la transformation d'une startup tech vers un numérique responsable"
                steps={ecoActionsSteps}
                finalMessage="Résultat : Émissions -55%, coûts -30%, image de marque +60%, recrutement facilité. ROI positif dès 18 mois. Le Green IT n'est plus un coût, c'est un investissement rentable et différenciant."
              />
            </CardContent>
          </Card>
        </div>

        {/* Ressources et références */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                📚 Ressources et références scientifiques
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-sm">Rapports de référence</h4>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>• <strong>The Shift Project (2019-2023) :</strong> "Impact environnemental du numérique : tendances à 5 ans et gouvernance de la 5G"</li>
                  <li>• <strong>ADEME & ARCEP (2023) :</strong> "Empreinte environnementale du numérique en France"</li>
                  <li>• <strong>IEA (2024) :</strong> "Electricity 2024 - Analysis and forecast to 2026 : Datacenters"</li>
                  <li>• <strong>Nature (2021) :</strong> "Carbon Emissions and Large Neural Network Training" - Patterson et al.</li>
                  <li>• <strong>MIT (2023) :</strong> "AI and Compute: Power Consumption Trends in Machine Learning"</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-sm">Outils de mesure</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="bg-muted/50 p-2 rounded text-xs">
                    <p className="font-medium mb-1">🌿 Carbonalyser (The Shift Project)</p>
                    <p className="text-muted-foreground">Extension navigateur pour mesurer impact carbone de sa navigation</p>
                  </div>
                  <div className="bg-muted/50 p-2 rounded text-xs">
                    <p className="font-medium mb-1">📊 Website Carbon Calculator</p>
                    <p className="text-muted-foreground">Estime empreinte carbone d'un site web</p>
                  </div>
                  <div className="bg-muted/50 p-2 rounded text-xs">
                    <p className="font-medium mb-1">🔍 GreenIT Analysis</p>
                    <p className="text-muted-foreground">Audit écoconception de sites web</p>
                  </div>
                  <div className="bg-muted/50 p-2 rounded text-xs">
                    <p className="font-medium mb-1">⚡ ML CO2 Impact</p>
                    <p className="text-muted-foreground">Calculer empreinte entraînement modèles ML</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-sm">Organismes et labels</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">GreenIT.fr</Badge>
                  <Badge variant="outline">Institut du Numérique Responsable</Badge>
                  <Badge variant="outline">Green Grid (PUE)</Badge>
                  <Badge variant="outline">The Green Web Foundation</Badge>
                  <Badge variant="outline">Climate Neutral Data Centre Pact</Badge>
                  <Badge variant="outline">B Corp Certification</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Conclusion */}
        <CourseConclusion
          title="Conclusion : Vers un numérique soutenable"
          description="L'urgence écologique impose de repenser notre rapport au numérique. Le Green IT n'est pas une option, c'est une nécessité."
          learningPoints={[
            "Le numérique représente 4% des émissions mondiales, en croissance de +8% par an",
            "L'IA est particulièrement énergivore : entraînement ET inférence à grande échelle",
            "70-90% de l'impact d'un smartphone est dans sa fabrication : le garder longtemps est crucial",
            "Les datacenters consomment 1% de l'électricité mondiale, optimisables via PUE &lt; 1.2 et EnR",
            "L'écoconception logicielle peut réduire l'impact de 60% : code efficace, IA sobre, hébergement vert",
            "Le Green IT est rentable : ROI positif, image de marque, attraction talents, conformité réglementaire"
          ]}
          nextSteps={[
            "Mesurer votre empreinte numérique personnelle avec Carbonalyser",
            "Appliquer les actions individuelles : garder équipements 4+ ans, réparer, reconditionné",
            "Pour les développeurs : se former à l'écoconception, utiliser modèles IA légers",
            "Pour les entreprises : réaliser bilan carbone numérique, stratégie Green IT",
            "Sensibiliser votre entourage : partager ce cours, créer discussions",
            "Suivre évolutions réglementaires : lois climat, directives européennes",
            "Explorer nos autres cours : IA éthique, gouvernance responsable"
          ]}
        />
      </section>
    </>
  );
};

export default IAEnvironnement;
