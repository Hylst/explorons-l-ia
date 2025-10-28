
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
import InfoTooltip from '@/components/courses/InfoTooltip';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Building2, 
  TrendingUp, 
  Target, 
  Users, 
  DollarSign, 
  Shield,
  Lightbulb,
  BarChart3,
  Cog,
  Rocket,
  AlertTriangle,
  CheckCircle2,
  Brain,
  Database,
  Network,
  Zap,
  Globe,
  Settings,
  Factory,
  ShoppingCart,
  FileText,
  Calculator
} from 'lucide-react';

const IAEntreprise = () => {
  const headerProps = {
    title: "IA pour l'Entreprise : Stratégie et Implémentation",
    subtitle: "Transformez votre organisation avec l'intelligence artificielle",
    author: "Geoffroy Streit",
    authorDescription: "Promoteur de transformation digitale et IA d'entreprise",
    duration: "4-5 heures",
    level: "Intermédiaire à Avancé",
    audience: "Dirigeants, managers, consultants et chefs de projet",
    tags: ["IA Entreprise", "Stratégie", "Transformation", "ROI", "Gouvernance", "2024"]
  };

  const strategicApproachSteps = [
    {
      title: "Audit de maturité digitale",
      description: "Évaluer l'état actuel de votre infrastructure et de vos processus",
      result: "Score de maturité et identification des gaps technologiques"
    },
    {
      title: "Identification des cas d'usage",
      description: "Cartographier les opportunités d'amélioration par l'IA",
      result: "Liste priorisée de 5-10 cas d'usage avec impact potentiel"
    },
    {
      title: "Calcul du ROI prévisionnel",
      description: "Estimer les bénéfices et coûts de chaque initiative",
      result: "Business case détaillé avec timeline de retour sur investissement"
    },
    {
      title: "Roadmap de déploiement",
      description: "Planifier l'implémentation par phases",
      result: "Planning sur 18-24 mois avec jalons et métriques de succès"
    }
  ];

  const module1Data = [
    {
      icon: <Target className="h-5 w-5 text-primary" />,
      title: "Diagnostic stratégique approfondi",
      items: [
        "Évaluation de la maturité digitale (niveau 1-5)",
        "Identification des cas d'usage prioritaires",
        "Analyse de l'écosystème concurrentiel",
        "Cartographie des ressources disponibles",
        "Définition des objectifs stratégiques SMART",
        "Assessment des risques et opportunités"
      ]
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-primary" />,
      title: "Business case et calcul ROI",
      items: [
        "Méthodologie de calcul ROI spécifique IA",
        "Métriques de performance clés (KPIs)",
        "Analyse coûts-bénéfices détaillée",
        "Modèles de financement et budgétisation",
        "Présentation aux décideurs et comité de direction",
        "Outils de simulation financière"
      ]
    },
    {
      icon: <Users className="h-5 w-5 text-primary" />,
      title: "Conduite du changement et adoption",
      items: [
        "Stratégie de gestion de la résistance",
        "Programme de formation multi-niveaux",
        "Communication interne et ambassadeurs",
        "Accompagnement utilisateurs et support",
        "Développement d'une culture data-driven",
        "Mesure de l'adoption et ajustements"
      ]
    }
  ];

  const didYouKnowItems = [
    {
      title: "Impact ROI concret",
      content: "Selon une étude McKinsey 2024, les entreprises qui adoptent l'IA de manière stratégique voient une augmentation de leur marge opérationnelle de 3 à 15% en moyenne, avec des gains de productivité pouvant atteindre 40% dans certains processus."
    },
    {
      title: "Facteur critique humain",
      content: "70% des projets IA échouent non pas pour des raisons techniques, mais à cause de la résistance au changement et du manque d'adoption par les utilisateurs. L'investissement dans la formation est donc crucial."
    },
    {
      title: "Approche agile payante",
      content: "Les entreprises qui déploient l'IA de façon progressive (approche agile avec MVPs) réduisent leur time-to-market de 40% et leurs risques d'échec de 60% par rapport aux approches big-bang."
    },
    {
      title: "Données : l'or noir moderne",
      content: "Une entreprise moyenne n'exploite que 20% de ses données disponibles. L'IA peut révéler la valeur cachée des 80% restants, créant de nouveaux flux de revenus estimés à 15-25% du CA."
    }
  ];

  const roiMetrics = [
    { label: "Réduction des coûts", value: "15-30%", trend: "down" as const },
    { label: "Gain de productivité", value: "25-40%", trend: "up" as const },
    { label: "Amélioration qualité", value: "20-35%", trend: "up" as const },
    { label: "Time-to-market", value: "-40%", trend: "down" as const }
  ];

  const implementationMetrics = [
    { label: "Taux de succès projets", value: "85%", trend: "up" as const },
    { label: "Délai moyen déploiement", value: "6-12 mois", trend: "stable" as const },
    { label: "ROI moyen atteint", value: "200-350%", trend: "up" as const },
    { label: "Adoption utilisateurs", value: "75%", trend: "up" as const }
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

        {/* Introduction enrichie */}
        <CourseModule
          title="Introduction : L'IA comme levier de transformation stratégique"
          description="Comprendre les enjeux business et les opportunités concrètes de l'IA en entreprise"
        >
          <Alert className="mb-6 bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
            <Lightbulb className="h-5 w-5 text-blue-600" />
            <AlertDescription>
              <strong>Objectif pédagogique :</strong> À la fin de ce module, vous saurez évaluer le potentiel de l'IA 
              pour votre organisation et identifier les quick wins pour commencer votre transformation.
            </AlertDescription>
          </Alert>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Brain className="h-5 w-5 text-primary" />
                    Pourquoi l'IA maintenant ?
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    L'intelligence artificielle n'est plus une technologie d'avenir : c'est un impératif 
                    stratégique pour rester compétitif. Les entreprises qui tardent à adopter l'IA 
                    risquent d'être distancées par leurs concurrents plus agiles.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Maturité technologique atteinte</li>
                    <li>• Coûts d'implémentation en baisse</li>
                    <li>• Talent IA plus accessible</li>
                    <li>• Pression concurrentielle croissante</li>
                  </ul>
                </div>
                <QuickFactBox
                  title="État du marché IA 2024"
                  facts={roiMetrics}
                  variant="success"
                />
              </div>
            </CardContent>
          </Card>
              
          <ZoomOn title="L'IA comme avantage concurrentiel durable">
            <div className="space-y-4">
              <p className="mb-3">
                Dans un monde où les données sont le nouveau pétrole, l'IA permet aux entreprises 
                de transformer cette ressource en avantage concurrentiel durable. Elle ne se contente 
                pas d'automatiser : elle augmente l'intelligence collective de l'organisation.
              </p>
              
              <ExpandableSection 
                title="Les 4 leviers de valeur de l'IA en entreprise" 
                icon={<TrendingUp className="h-4 w-4" />}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="pt-4">
                      <h5 className="font-medium mb-2">1. Efficacité opérationnelle</h5>
                      <p className="text-sm text-muted-foreground">Automatisation des tâches répétitives, optimisation des processus</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-4">
                      <h5 className="font-medium mb-2">2. Innovation produit/service</h5>
                      <p className="text-sm text-muted-foreground">Nouvelles fonctionnalités, personnalisation, expérience client</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-4">
                      <h5 className="font-medium mb-2">3. Aide à la décision</h5>
                      <p className="text-sm text-muted-foreground">Analytics prédictifs, insights data-driven, optimisation</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-4">
                      <h5 className="font-medium mb-2">4. Nouveaux modèles économiques</h5>
                      <p className="text-sm text-muted-foreground">Monétisation des données, services IA, plateformes</p>
                    </CardContent>
                  </Card>
                </div>
              </ExpandableSection>

              <p className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4 text-sm">
                <strong>Point clé :</strong> L'IA réussie n'est pas celle qui remplace l'humain, 
                mais celle qui l'augmente et lui permet de se concentrer sur des tâches à plus haute valeur ajoutée.
              </p>
            </div>
          </ZoomOn>

          <InteractiveExample
            title="Exemple pratique : Transformation d'une PME industrielle"
            description="Suivons le parcours de MetalTech, PME de 150 employés spécialisée dans l'usinage de précision"
            steps={strategicApproachSteps}
            finalMessage="En 18 mois, MetalTech a réduit ses coûts de 20%, amélioré sa qualité de 30% et augmenté sa capacité de production de 25%, pour un ROI de 280%."
          />
        </CourseModule>

        {/* Module 1 enrichi */}
        <CourseModule
          title="Module 1 : Élaborer sa stratégie IA gagnante"
          description="Méthodologie complète pour construire une stratégie IA alignée sur vos objectifs business"
          modules={module1Data}
        />

        <div className="max-w-4xl mx-auto mb-12">
          <ExpandableSection 
            title="🎯 Framework d'évaluation de la maturité IA" 
            icon={<Target className="h-4 w-4" />}
          >
            <div className="space-y-6">
              <p className="text-sm text-muted-foreground">
                Avant de définir votre stratégie, évaluez votre niveau de maturité actuel avec notre framework en 5 dimensions :
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Database className="h-4 w-4" />
                      Données & Infrastructure
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs space-y-2">
                    <div className="flex justify-between">
                      <span>Niveau 1:</span>
                      <span>Données en silos</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Niveau 3:</span>
                      <span>Data warehouse centralisé</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Niveau 5:</span>
                      <span>Data mesh & temps réel</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Talents & Compétences
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs space-y-2">
                    <div className="flex justify-between">
                      <span>Niveau 1:</span>
                      <span>Pas de compétences IA</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Niveau 3:</span>
                      <span>Équipe IA dédiée</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Niveau 5:</span>
                      <span>IA intégrée partout</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Settings className="h-4 w-4" />
                      Gouvernance & Processus
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs space-y-2">
                    <div className="flex justify-between">
                      <span>Niveau 1:</span>
                      <span>Aucune gouvernance</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Niveau 3:</span>
                      <span>Comité IA établi</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Niveau 5:</span>
                      <span>IA by design</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Alert>
                <InfoTooltip content="Un assessment complet prend généralement 2-3 semaines avec interviews et audit technique" />
                <AlertDescription className="ml-6">
                  <strong>Conseil pratique :</strong> Commencez par un auto-diagnostic rapide, puis faites appel 
                  à un consultant externe pour un assessment objectif avant de lancer des projets importants.
                </AlertDescription>
              </Alert>
            </div>
          </ExpandableSection>

          <ExpandableSection 
            title="💰 Calculateur ROI IA simplifié" 
            icon={<Calculator className="h-4 w-4" />}
          >
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Utilisez cette formule simplifiée pour estimer le ROI de vos projets IA :
              </p>
              
              <Card className="bg-blue-50 dark:bg-blue-950/30">
                <CardContent className="pt-4">
                  <div className="text-center space-y-2">
                    <p className="text-lg font-mono">
                      ROI = ((Gains - Coûts) / Coûts) × 100
                    </p>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p><strong>Gains</strong> = Économies + Revenus supplémentaires + Gains de productivité</p>
                      <p><strong>Coûts</strong> = Développement + Licence + Formation + Maintenance</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h5 className="font-medium mb-2">Exemple : Chatbot service client</h5>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Économies : 200k€/an (agents)</li>
                    <li>• Revenus : +50k€/an (satisfaction)</li>
                    <li>• Coûts : 150k€ (développement + 1ère année)</li>
                    <li>• <strong>ROI Année 1 : 67%</strong></li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Exemple : IA prédictive maintenance</h5>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Économies : 500k€/an (pannes évitées)</li>
                    <li>• Productivité : +300k€/an</li>
                    <li>• Coûts : 400k€ (solution + formation)</li>
                    <li>• <strong>ROI Année 1 : 100%</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </ExpandableSection>
        </div>

        <DidYouKnow items={didYouKnowItems} />

        {/* Module 2 enrichi */}
        <CourseModule
          title="Module 2 : Mise en œuvre opérationnelle et architecture"
          description="De la stratégie à l'exécution : construire et déployer vos solutions IA"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <QuickFactBox
              title="Métriques de succès implémentation"
              facts={implementationMetrics}
              variant="default"
            />
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-500" />
                  Points d'attention critiques
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <span>Qualité et gouvernance des données (80% des échecs)</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                  <span>Résistance au changement utilisateurs</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Sous-estimation des coûts de maintenance</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cog className="h-5 w-5 text-primary" />
                  Infrastructure et gouvernance avancée
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Badge variant="secondary">Architecture technique</Badge>
                  <ul className="text-sm space-y-2">
                    <li>• Architecture cloud hybride et edge computing</li>
                    <li>• MLOps et pipelines de déploiement automatisés</li>
                    <li>• Gouvernance des données et data lineage</li>
                    <li>• Sécurité et conformité (RGPD, sectorielles)</li>
                    <li>• Monitoring et observabilité des modèles</li>
                    <li>• Intégration API et microservices</li>
                  </ul>
                  
                  <ExpandableSection title="Détails techniques architecture">
                    <div className="space-y-3 text-xs">
                      <div>
                        <h6 className="font-medium">Stack technologique recommandée :</h6>
                        <ul className="mt-1 space-y-1">
                          <li>• Cloud : AWS/Azure/GCP avec Kubernetes</li>
                          <li>• ML Platform : MLflow, Kubeflow ou Databricks</li>
                          <li>• Monitoring : Prometheus + Grafana + Evidently</li>
                          <li>• Données : Apache Airflow + dbt + Snowflake</li>
                        </ul>
                      </div>
                    </div>
                  </ExpandableSection>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Rocket className="h-5 w-5 text-primary" />
                  Stratégie de déploiement et scale
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Badge variant="secondary">Méthodologie agile</Badge>
                  <ul className="text-sm space-y-2">
                    <li>• Approche MVP puis scale progressif</li>
                    <li>• Centre d'excellence IA (CoE) et community</li>
                    <li>• Partenariats stratégiques et écosystème</li>
                    <li>• Mesure continue et optimisation</li>
                    <li>• Plan de contingence et rollback</li>
                    <li>• Formation continue et upskilling</li>
                  </ul>

                  <ExpandableSection title="Roadmap de montée en charge">
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between py-1 border-b">
                        <span>Phase 1 (0-6 mois)</span>
                        <span>1-2 pilots + équipe noyau</span>
                      </div>
                      <div className="flex justify-between py-1 border-b">
                        <span>Phase 2 (6-12 mois)</span>
                        <span>3-5 projets + CoE établi</span>
                      </div>
                      <div className="flex justify-between py-1 border-b">
                        <span>Phase 3 (12-18 mois)</span>
                        <span>10+ projets + adoption large</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span>Phase 4 (18+ mois)</span>
                        <span>IA intégrée + innovation continue</span>
                      </div>
                    </div>
                  </ExpandableSection>
                </div>
              </CardContent>
            </Card>
          </div>
        </CourseModule>

        {/* Module 3 enrichi avec plus de détails sectoriels */}
        <CourseModule
          title="Module 3 : Cas d'usage sectoriels et retours d'expérience"
          description="Applications concrètes et success stories par industrie"
        >
          <Alert className="mb-6 bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            <AlertDescription>
              <strong>Focus pratique :</strong> Cette section présente des cas d'usage réels avec ROI mesurés 
              et retours d'expérience d'entreprises qui ont réussi leur transformation IA.
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-medium mb-3">Services Financiers</h4>
                <div className="space-y-3">
                  <div className="text-sm space-y-1">
                    <div className="flex justify-between">
                      <span>Détection fraude</span>
                      <Badge variant="outline">ROI: 400%</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Credit scoring</span>
                      <Badge variant="outline">+30% précision</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Trading algorithmique</span>
                      <Badge variant="outline">+15% performance</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Chatbots clients</span>
                      <Badge variant="outline">-40% coûts</Badge>
                    </div>
                  </div>
                  
                  <ExpandableSection title="Success story : Crédit Agricole">
                    <div className="text-left space-y-2 text-xs">
                      <p><strong>Défi :</strong> Détection fraude en temps réel sur 50M de transactions/jour</p>
                      <p><strong>Solution :</strong> ML pipeline avec feature engineering avancé</p>
                      <p><strong>Résultats :</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• 95% de fraudes détectées (vs 60% avant)</li>
                        <li>• Faux positifs réduits de 80%</li>
                        <li>• 200M€ de pertes évitées/an</li>
                        <li>• ROI de 400% dès la première année</li>
                      </ul>
                    </div>
                  </ExpandableSection>
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <ShoppingCart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-medium mb-3">Retail & E-commerce</h4>
                <div className="space-y-3">
                  <div className="text-sm space-y-1">
                    <div className="flex justify-between">
                      <span>Recommandations</span>
                      <Badge variant="outline">+25% ventes</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Pricing dynamique</span>
                      <Badge variant="outline">+15% marge</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Gestion stocks</span>
                      <Badge variant="outline">-30% ruptures</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Personnalisation</span>
                      <Badge variant="outline">+40% engagement</Badge>
                    </div>
                  </div>

                  <ExpandableSection title="Success story : Sephora">
                    <div className="text-left space-y-2 text-xs">
                      <p><strong>Défi :</strong> Personnaliser l'expérience pour 25M de clients</p>
                      <p><strong>Solution :</strong> IA de recommandation + réalité augmentée</p>
                      <p><strong>Résultats :</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• +35% taux de conversion en ligne</li>
                        <li>• +50% engagement app mobile</li>
                        <li>• 2x temps passé sur le site</li>
                        <li>• ROI de 280% sur l'investissement IA</li>
                      </ul>
                    </div>
                  </ExpandableSection>
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Factory className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-medium mb-3">Industrie & Manufacture</h4>
                <div className="space-y-3">
                  <div className="text-sm space-y-1">
                    <div className="flex justify-between">
                      <span>Maintenance prédictive</span>
                      <Badge variant="outline">-60% pannes</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Contrôle qualité</span>
                      <Badge variant="outline">+90% précision</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Optimisation énergie</span>
                      <Badge variant="outline">-25% consommation</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Supply chain</span>
                      <Badge variant="outline">+20% efficacité</Badge>
                    </div>
                  </div>

                  <ExpandableSection title="Success story : Michelin">
                    <div className="text-left space-y-2 text-xs">
                      <p><strong>Défi :</strong> Optimiser la production dans 120 usines mondiales</p>
                      <p><strong>Solution :</strong> Jumeaux numériques + IA prédictive</p>
                      <p><strong>Résultats :</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• +15% productivité globale</li>
                        <li>• -30% coûts de maintenance</li>
                        <li>• -20% consommation énergétique</li>
                        <li>• 500M€ d'économies sur 3 ans</li>
                      </ul>
                    </div>
                  </ExpandableSection>
                </div>
              </CardContent>
            </Card>
          </div>

          <ExpandableSection 
            title="🎯 Comment choisir votre premier cas d'usage ?" 
            icon={<Target className="h-4 w-4" />}
            defaultExpanded
          >
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Le succès de votre transformation IA dépend en grande partie du choix de votre premier projet. 
                Voici notre framework de sélection éprouvé :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Critères de sélection</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Impact business</span>
                      <div className="flex items-center gap-1">
                        <span className="text-xs">Élevé</span>
                        <InfoTooltip content="Potentiel de gain > 500k€ ou amélioration métrique clé > 20%" />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Faisabilité technique</span>
                      <div className="flex items-center gap-1">
                        <span className="text-xs">Moyenne à élevée</span>
                        <InfoTooltip content="Technologies matures, données disponibles, équipe compétente" />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Résistance au changement</span>
                      <div className="flex items-center gap-1">
                        <span className="text-xs">Faible</span>
                        <InfoTooltip content="Utilisateurs motivés, sponsor fort, processus non critique" />
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Temps de déploiement</span>
                      <div className="flex items-center gap-1">
                        <span className="text-xs">3-6 mois max</span>
                        <InfoTooltip content="Pour démontrer la valeur rapidement et maintenir l'engagement" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Quick wins recommandés</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Chatbot service client (FAQ)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Classification automatique documents</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Détection d'anomalies simples</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Recommandations produits</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Prédiction de la demande</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </ExpandableSection>
        </CourseModule>

        {/* Conclusion enrichie */}
        <CourseConclusion
          title="Conclusion : Vers une entreprise augmentée par l'IA"
          description="Récapitulatif de votre parcours et feuille de route pour l'action"
          learningPoints={[
            "Élaborer une stratégie IA alignée sur les objectifs business avec framework de maturité",
            "Calculer et présenter le ROI de vos projets IA avec méthodes éprouvées",
            "Gérer la transformation organisationnelle et la conduite du changement",
            "Implémenter une architecture et gouvernance des données robustes",
            "Déployer et faire évoluer vos solutions IA avec approche agile",
            "Choisir les bons cas d'usage et mesurer les résultats"
          ]}
          nextSteps={[
            "Réaliser un audit de maturité IA complet de votre organisation",
            "Identifier et prioriser 3-5 cas d'usage avec calcul ROI détaillé",
            "Constituer votre équipe projet IA et définir la gouvernance",
            "Lancer un pilote avec mesure d'impact et retours utilisateurs",
            "Développer votre centre d'excellence IA et plan de scale",
            "Établir un programme de formation et de montée en compétences"
          ]}
        />

        <Alert className="mb-8 bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
          <Lightbulb className="h-5 w-5 text-blue-600" />
          <AlertDescription>
            <strong>Pour aller plus loin :</strong> Consultez notre calculateur de coûts IA, 
            explorez les études de cas sectorielles détaillées, et rejoignez notre communauté 
            de praticiens pour échanger sur vos défis spécifiques.
          </AlertDescription>
        </Alert>
      </section>
    </>
  );
};

export default IAEntreprise;
