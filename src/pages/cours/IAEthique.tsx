
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
  Shield, 
  Scale, 
  Eye, 
  Heart, 
  AlertTriangle, 
  CheckCircle2,
  Users,
  Globe,
  BookOpen,
  Gavel,
  Brain,
  Lock,
  FileText,
  Lightbulb,
  Search,
  Building,
  UserCheck,
  Database,
  Zap,
  Target
} from 'lucide-react';

const IAEthique = () => {
  const headerProps = {
    title: "IA Éthique et Responsable : Guide Pratique",
    subtitle: "Développer et déployer l'IA de manière éthique et responsable",
    author: "Geoffroy Streit",
    authorDescription: "Educateur en IA",
    duration: "3-4 heures",
    level: "Intermédiaire",
    audience: "Développeurs, managers, décideurs et juristes",
    tags: ["IA Éthique", "Responsabilité", "Biais", "Transparence", "RGPD", "Gouvernance", "2024"]
  };

  const ethicalFrameworkSteps = [
    {
      title: "Assessment éthique initial",
      description: "Évaluer les risques éthiques potentiels du système IA",
      result: "Matrice de risques avec score de criticité par dimension éthique"
    },
    {
      title: "Design éthique by design",
      description: "Intégrer les principes éthiques dès la conception",
      result: "Spécifications techniques incluant contraintes éthiques"
    },
    {
      title: "Tests et validation",
      description: "Tester les biais, équité et transparence du modèle",
      result: "Rapport d'audit avec métriques d'équité et recommandations"
    },
    {
      title: "Monitoring continu",
      description: "Surveiller le comportement éthique en production",
      result: "Dashboard de monitoring éthique et alertes automatisées"
    }
  ];

  const module1Data = [
    {
      icon: <Scale className="h-5 w-5 text-primary" />,
      title: "Principes éthiques fondamentaux",
      items: [
        "Équité et non-discrimination algorithmique",
        "Transparence et explicabilité des décisions",
        "Responsabilité et redevabilité des acteurs",
        "Respect de la vie privée et protection des données",
        "Bienfaisance et non-malfaisance (do no harm)",
        "Autonomie humaine et supervision meaningful"
      ]
    },
    {
      icon: <AlertTriangle className="h-5 w-5 text-primary" />,
      title: "Identification et mitigation des risques",
      items: [
        "Biais algorithmiques : sources et détection",
        "Discrimination involontaire et intersectionnelle",
        "Atteintes à la vie privée et surveillance",
        "Manipulation et désinformation à grande échelle",
        "Impact sur l'emploi et inégalités sociales",
        "Dual use et détournement malveillant"
      ]
    },
    {
      icon: <Shield className="h-5 w-5 text-primary" />,
      title: "Cadre réglementaire et conformité",
      items: [
        "IA Act européen : obligations par niveau de risque",
        "RGPD et protection des données personnelles",
        "Standards internationaux (ISO/IEC 23053, 23894)",
        "Certifications et audits éthiques tiers",
        "Conformité sectorielle (santé, finance, etc.)",
        "Responsabilité civile et pénale des développeurs"
      ]
    }
  ];

  const didYouKnowItems = [
    {
      title: "Coût réel des biais algorithmiques",
      content: "Une étude MIT 2023 révèle que les systèmes de reconnaissance faciale ont un taux d'erreur 35% plus élevé pour les femmes à peau foncée. Amazon a dû abandonner son outil de recrutement IA après découverte de biais sexistes systémiques."
    },
    {
      title: "Impact financier de l'IA Act",
      content: "L'IA Act européen impose des amendes jusqu'à 7% du CA mondial pour non-conformité. Plus de 200 entreprises ont déjà investi 500M€+ dans des programmes de conformité anticipée."
    },
    {
      title: "Valeur business de l'explicabilité",
      content: "78% des consommateurs font plus confiance aux entreprises expliquant leurs algorithmes. Les modèles explicables augmentent l'adoption de 40% et réduisent les coûts de support de 25%."
    },
    {
      title: "Paradoxe de la surveillance éthique",
      content: "Pour surveiller l'équité des algorithmes, il faut souvent collecter plus de données sensibles (ethnie, genre), créant de nouveaux risques de privacy. L'équité et la privacy peuvent être en tension."
    }
  ];

  const complianceMetrics = [
    { label: "Coût moyen conformité", value: "2-5M€", trend: "up" as const },
    { label: "Délai mise en conformité", value: "12-24 mois", trend: "stable" as const },
    { label: "Réduction risques juridiques", value: "80%", trend: "up" as const },
    { label: "Amélioration confiance client", value: "+45%", trend: "up" as const }
  ];

  const biasMetrics = [
    { label: "Systèmes avec biais détectés", value: "73%", trend: "down" as const },
    { label: "Coût moyen correction biais", value: "500k€", trend: "stable" as const },
    { label: "Amélioration équité post-audit", value: "+60%", trend: "up" as const },
    { label: "ROI investissement équité", value: "230%", trend: "up" as const }
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
          title="Introduction : L'impératif éthique de l'IA à l'ère de l'IA Act"
          description="Comprendre les enjeux éthiques, légaux et business de l'IA responsable"
        >
          <Alert className="mb-6 bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800">
            <Lightbulb className="h-5 w-5 text-amber-600" />
            <AlertDescription>
              <strong>Objectif pédagogique :</strong> À la fin de ce module, vous maîtriserez les principes 
              de l'IA éthique et saurez mettre en place un framework de gouvernance conforme à l'IA Act européen.
            </AlertDescription>
          </Alert>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Brain className="h-5 w-5 text-primary" />
                    Pourquoi l'éthique IA est stratégique ?
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    L'IA transforme notre société à une vitesse inédite, mais avec cette puissance 
                    vient une responsabilité immense. L'éthique n'est plus optionnelle : c'est un 
                    impératif business, réglementaire et sociétal.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Conformité réglementaire obligatoire (IA Act)</li>
                    <li>• Réduction des risques juridiques et réputationnels</li>
                    <li>• Confiance client et acceptabilité sociale</li>
                    <li>• Avantage concurrentiel et différenciation</li>
                  </ul>
                </div>
                <QuickFactBox
                  title="Impact business IA éthique"
                  facts={complianceMetrics}
                  variant="success"
                />
              </div>
            </CardContent>
          </Card>
              
          <ZoomOn title="L'IA responsable : un enjeu de société et de compétitivité">
            <div className="space-y-4">
              <p className="mb-3">
                Chaque jour, l'IA prend des millions de décisions qui affectent la vie des gens : 
                qui obtient un prêt, qui est embauché, qui reçoit quelle publicité, qui bénéficie 
                de soins médicaux. Ces décisions peuvent perpétuer ou corriger des inégalités.
              </p>
              
              <ExpandableSection 
                title="Les 5 dimensions de l'impact sociétal de l'IA" 
                icon={<Globe className="h-4 w-4" />}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="border-blue-200">
                    <CardContent className="pt-4">
                      <h5 className="font-medium mb-2 flex items-center gap-2">
                        <Users className="h-4 w-4 text-blue-500" />
                        1. Justice et équité
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        Garantir un traitement équitable indépendamment de l'origine, 
                        du genre, de l'âge ou du statut socio-économique
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-green-200">
                    <CardContent className="pt-4">
                      <h5 className="font-medium mb-2 flex items-center gap-2">
                        <Lock className="h-4 w-4 text-green-500" />
                        2. Vie privée et autonomie
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        Respecter le droit à la vie privée et préserver l'autonomie 
                        de décision des individus
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-purple-200">
                    <CardContent className="pt-4">
                      <h5 className="font-medium mb-2 flex items-center gap-2">
                        <Eye className="h-4 w-4 text-purple-500" />
                        3. Transparence et confiance
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        Expliquer les décisions automatisées et maintenir la 
                        confiance du public dans les systèmes IA
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-orange-200">
                    <CardContent className="pt-4">
                      <h5 className="font-medium mb-2 flex items-center gap-2">
                        <Building className="h-4 w-4 text-orange-500" />
                        4. Impact économique et social
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        Anticiper les effets sur l'emploi et accompagner les 
                        transitions professionnelles
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </ExpandableSection>

              <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <h5 className="font-medium mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-500" />
                  Cas réels de dérives éthiques
                </h5>
                <div className="text-sm space-y-2">
                  <p>• <strong>Recrutement (Amazon) :</strong> IA biaisée contre les femmes dans la tech</p>
                  <p>• <strong>Justice prédictive (COMPAS) :</strong> Biais racial dans l'évaluation des risques</p>
                  <p>• <strong>Reconnaissance faciale :</strong> Erreurs disproportionnées selon l'ethnicité</p>
                  <p>• <strong>Crédit scoring :</strong> Discrimination indirecte par code postal</p>
                </div>
              </div>

              <p className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg p-4 text-sm">
                <strong>Opportunité :</strong> Les entreprises qui font de l'éthique IA un avantage concurrentiel 
                gagnent la confiance des clients (+45% selon Edelman), attirent les talents (+60% des développeurs) 
                et réduisent leurs risques réglementaires de 80%.
              </p>
            </div>
          </ZoomOn>

          <InteractiveExample
            title="Cas pratique : Audit éthique d'un système de recommandation"
            description="Suivons l'audit d'un algorithme de recommandation d'offres d'emploi"
            steps={ethicalFrameworkSteps}
            finalMessage="L'audit a révélé des biais de genre (30% moins d'offres tech montrées aux femmes) et permis de corriger le modèle, améliorant l'équité de 60% et la satisfaction utilisateurs de 35%."
          />
        </CourseModule>

        {/* Module 1 enrichi */}
        <CourseModule
          title="Module 1 : Fondamentaux et framework de l'IA éthique"
          description="Maîtriser les concepts essentiels et construire votre framework éthique"
          modules={module1Data}
        />

        <div className="max-w-4xl mx-auto mb-12">
          <ExpandableSection 
            title="🎯 Framework d'évaluation éthique IA" 
            icon={<Target className="h-4 w-4" />}
          >
            <div className="space-y-6">
              <p className="text-sm text-muted-foreground">
                Notre framework d'évaluation en 7 dimensions, aligné sur l'IA Act européen et les standards internationaux :
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Scale className="h-4 w-4" />
                      1. Équité & Non-discrimination
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs space-y-2">
                    <div className="space-y-1">
                      <p><strong>Métriques :</strong> Parité démographique, égalité des chances, parité prédictive</p>
                      <p><strong>Tests :</strong> Analyse par sous-groupes, tests de disparité d'impact</p>
                      <p><strong>Seuils :</strong> Écart max 5% entre groupes, significativité statistique</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      2. Transparence & Explicabilité
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs space-y-2">
                    <div className="space-y-1">
                      <p><strong>Métriques :</strong> LIME scores, SHAP values, feature importance</p>
                      <p><strong>Tests :</strong> Compréhensibilité utilisateur, cohérence explications</p>
                      <p><strong>Exigences :</strong> Explications en langage naturel &lt; 30 secondes</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Lock className="h-4 w-4" />
                      3. Vie privée & Protection données
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs space-y-2">
                    <div className="space-y-1">
                      <p><strong>Techniques :</strong> Privacy by design, differential privacy, federated learning</p>
                      <p><strong>Compliance :</strong> RGPD, minimisation données, consentement éclairé</p>
                      <p><strong>Audit :</strong> Privacy Impact Assessment (PIA) obligatoire</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <UserCheck className="h-4 w-4" />
                      4. Supervision humaine
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-xs space-y-2">
                    <div className="space-y-1">
                      <p><strong>Niveaux :</strong> Human-in-the-loop, on-the-loop, ou out-of-the-loop</p>
                      <p><strong>Décisions critiques :</strong> Supervision obligatoire (santé, justice, etc.)</p>
                      <p><strong>Formation :</strong> Opérateurs certifiés, compréhension des limites IA</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Alert>
                <InfoTooltip content="L'IA Act classe les systèmes en 4 catégories : risque minimal, limité, élevé et inacceptable" />
                <AlertDescription className="ml-6">
                  <strong>IA Act européen :</strong> Obligations différenciées selon le niveau de risque. 
                  Les systèmes à haut risque (recrutement, crédit, justice) nécessitent un audit complet 
                  avant mise sur le marché.
                </AlertDescription>
              </Alert>
            </div>
          </ExpandableSection>

          <ExpandableSection 
            title="🔍 Détection et correction des biais algorithmiques" 
            icon={<Search className="h-4 w-4" />}
          >
            <div className="space-y-4">
              <QuickFactBox
                title="Impact des biais en chiffres"
                facts={biasMetrics}
                variant="warning"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium mb-3">Sources courantes de biais</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <Database className="h-4 w-4 text-red-500 mt-0.5" />
                      <div>
                        <strong>Biais de données :</strong> Échantillons non représentatifs, données historiques biaisées
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Brain className="h-4 w-4 text-orange-500 mt-0.5" />
                      <div>
                        <strong>Biais algorithmiques :</strong> Choix de features, méthodes d'optimisation
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Users className="h-4 w-4 text-blue-500 mt-0.5" />
                      <div>
                        <strong>Biais humains :</strong> Préjugés des développeurs, annotation subjective
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Zap className="h-4 w-4 text-purple-500 mt-0.5" />
                      <div>
                        <strong>Biais de déploiement :</strong> Dérives temporelles, feedback loops
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium mb-3">Techniques de mitigation</h5>
                  <div className="space-y-2 text-sm">
                    <div className="border rounded p-2">
                      <strong>Pré-processing :</strong> Ré-échantillonnage, augmentation données, feature engineering équitable
                    </div>
                    <div className="border rounded p-2">
                      <strong>In-processing :</strong> Contraintes d'équité, régularisation, optimisation multi-objectifs
                    </div>
                    <div className="border rounded p-2">
                      <strong>Post-processing :</strong> Calibration, seuils adaptatifs, correction des outputs
                    </div>
                    <div className="border rounded p-2">
                      <strong>Monitoring :</strong> Métriques continues, alertes dérive, re-entraînement adaptatif
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-blue-50 dark:bg-blue-950/30">
                <CardContent className="pt-4">
                  <h6 className="font-medium mb-2">Outil pratique : Checklist audit biais</h6>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                    <div className="space-y-1">
                      <p>☐ Analyse démographique des données d'entraînement</p>
                      <p>☐ Test de parité démographique par sous-groupes</p>
                      <p>☐ Évaluation de l'égalité des chances</p>
                      <p>☐ Analyse des corrélations avec attributs sensibles</p>
                    </div>
                    <div className="space-y-1">
                      <p>☐ Tests de robustesse et stabilité</p>
                      <p>☐ Évaluation sur données out-of-distribution</p>
                      <p>☐ Analyse des faux positifs/négatifs par groupe</p>
                      <p>☐ Documentation complète des choix méthodologiques</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ExpandableSection>
        </div>

        <DidYouKnow items={didYouKnowItems} />

        {/* Module 2 enrichi */}
        <CourseModule
          title="Module 2 : Méthodologies et outils pour l'IA responsable"
          description="Techniques concrètes et outils pratiques pour développer une IA éthique"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-primary" />
                  Audit et évaluation continue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Badge variant="outline">Méthodologie</Badge>
                  <ul className="text-sm space-y-2">
                    <li>• Tests automatisés de biais algorithmiques</li>
                    <li>• Évaluation multi-critères de l'équité</li>
                    <li>• Algorithmic Impact Assessment (AIA)</li>
                    <li>• Audit de transparence et explicabilité</li>
                    <li>• Validation par panels d'experts diversifiés</li>
                    <li>• Red teaming et tests adverses</li>
                  </ul>
                  
                  <ExpandableSection title="Outils techniques recommandés">
                    <div className="space-y-3 text-xs">
                      <div>
                        <h6 className="font-medium">Bibliothèques Python :</h6>
                        <ul className="mt-1 space-y-1">
                          <li>• <strong>Fairlearn :</strong> Détection et mitigation des biais</li>
                          <li>• <strong>AI Fairness 360 :</strong> Suite complète IBM</li>
                          <li>• <strong>SHAP/LIME :</strong> Explicabilité locale</li>
                          <li>• <strong>What-If Tool :</strong> Analyse interactive Google</li>
                        </ul>
                      </div>
                      <div>
                        <h6 className="font-medium">Plateformes entreprise :</h6>
                        <ul className="mt-1 space-y-1">
                          <li>• <strong>Fiddler AI :</strong> Monitoring et explicabilité</li>
                          <li>• <strong>Arthur AI :</strong> Performance et équité</li>
                          <li>• <strong>Seldon Alibi :</strong> Explications et détection</li>
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
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Bonnes pratiques opérationnelles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Badge variant="outline">Implémentation</Badge>
                  <ul className="text-sm space-y-2">
                    <li>• Équipes diverses et inclusives (genre, origine)</li>
                    <li>• Documentation éthique et traçabilité complète</li>
                    <li>• Tests utilisateurs avec panels représentatifs</li>
                    <li>• Surveillance continue et alertes automatisées</li>
                    <li>• Mécanismes de recours et correction</li>
                    <li>• Formation continue des équipes</li>
                  </ul>

                  <ExpandableSection title="Template de documentation éthique">
                    <div className="space-y-2 text-xs">
                      <div className="border rounded p-2">
                        <strong>1. Contexte et objectifs :</strong> Description du système, cas d'usage, parties prenantes
                      </div>
                      <div className="border rounded p-2">
                        <strong>2. Données :</strong> Sources, biais potentiels, représentativité, protection
                      </div>
                      <div className="border rounded p-2">
                        <strong>3. Modèle :</strong> Architecture, métriques, limitations, incertitudes
                      </div>
                      <div className="border rounded p-2">
                        <strong>4. Évaluation :</strong> Tests d'équité, explicabilité, robustesse
                      </div>
                      <div className="border rounded p-2">
                        <strong>5. Déploiement :</strong> Monitoring, feedback, procédures d'escalade
                      </div>
                    </div>
                  </ExpandableSection>
                </div>
              </CardContent>
            </Card>
          </div>
        </CourseModule>

        {/* Module 3 enrichi */}
        <CourseModule
          title="Module 3 : Gouvernance et conformité réglementaire"
          description="Mettre en place une gouvernance IA robuste et assurer la conformité"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Gavel className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-medium mb-3">Comité d'éthique IA</h4>
                <div className="space-y-2 text-sm">
                  <div>• Composition multidisciplinaire obligatoire</div>
                  <div>• Processus de décision formalisé</div>
                  <div>• Escalade des enjeux critiques</div>
                  <div>• Revue périodique des systèmes</div>
                </div>

                <ExpandableSection title="Guide de mise en place">
                  <div className="text-left space-y-2 text-xs">
                    <p><strong>Composition recommandée :</strong></p>
                    <ul className="ml-4 space-y-1">
                      <li>• Data scientist senior</li>
                      <li>• Juriste spécialisé technologie</li>
                      <li>• Représentant métier/utilisateurs</li>
                      <li>• Expert éthique/philosophie</li>
                      <li>• Risk manager</li>
                      <li>• Représentant société civile (optionnel)</li>
                    </ul>
                    <p className="mt-2"><strong>Fréquence :</strong> Réunion mensuelle + sessions ad hoc</p>
                  </div>
                </ExpandableSection>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-medium mb-3">Charte éthique IA</h4>
                <div className="space-y-2 text-sm">
                  <div>• Valeurs organisationnelles claire</div>
                  <div>• Lignes directrices opérationnelles</div>
                  <div>• Procédures et responsabilités</div>
                  <div>• Formation obligatoire du personnel</div>
                </div>

                <ExpandableSection title="Template de charte">
                  <div className="text-left space-y-2 text-xs">
                    <div>
                      <p><strong>1. Principes fondamentaux</strong></p>
                      <p className="ml-2">Respect de la dignité humaine, équité, transparence</p>
                    </div>
                    <div>
                      <p><strong>2. Engagements concrets</strong></p>
                      <p className="ml-2">Tests systématiques, documentation, formation</p>
                    </div>
                    <div>
                      <p><strong>3. Gouvernance</strong></p>
                      <p className="ml-2">Rôles, responsabilités, processus d'escalade</p>
                    </div>
                    <div>
                      <p><strong>4. Sanctions</strong></p>
                      <p className="ml-2">Mesures disciplinaires en cas de non-respect</p>
                    </div>
                  </div>
                </ExpandableSection>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-medium mb-3">Conformité réglementaire</h4>
                <div className="space-y-2 text-sm">
                  <div>• Veille réglementaire active</div>
                  <div>• DPIA et impact assessments</div>
                  <div>• Registres de conformité tenus</div>
                  <div>• Reporting aux autorités</div>
                </div>

                <ExpandableSection title="Obligations IA Act">
                  <div className="text-left space-y-2 text-xs">
                    <div>
                      <p><strong>Systèmes haut risque :</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• Marquage CE obligatoire</li>
                        <li>• Documentation technique complète</li>
                        <li>• Surveillance post-marché</li>
                        <li>• Notification incidents graves</li>
                      </ul>
                    </div>
                    <div>
                      <p><strong>Délais de mise en conformité :</strong></p>
                      <p className="ml-2">6 mois à 3 ans selon catégorie</p>
                    </div>
                  </div>
                </ExpandableSection>
              </CardContent>
            </Card>
          </div>
        </CourseModule>

        {/* Module 4 enrichi avec plus de cas pratiques */}
        <CourseModule
          title="Module 4 : Études de cas et dilemmes éthiques complexes"
          description="Analyser des situations réelles et développer votre jugement éthique"
        >
          <Card className="mb-6">
            <CardContent className="pt-6">
              <h4 className="font-semibold mb-4">🔥 Cas d'études interactifs avec résolutions</h4>
              
              <div className="space-y-6">
                <ExpandableSection 
                  title="Cas 1 : Algorithme de recrutement discriminatoire" 
                  icon={<AlertTriangle className="h-4 w-4 text-red-500" />}
                  defaultExpanded
                >
                  <div className="space-y-4">
                    <div className="bg-red-50 dark:bg-red-950/30 border-l-4 border-red-400 pl-4">
                      <h5 className="font-medium text-red-700 dark:text-red-400 mb-2">🏢 Contexte</h5>
                      <p className="text-sm mb-2">
                        TechCorp, entreprise de 5000 employés, utilise un algorithme pour présélectionner 
                        les CV. Après 6 mois, l'équipe RH remarque une baisse drastique des candidatures 
                        féminines retenues dans le secteur tech (de 30% à 10%).
                      </p>
                      <p className="text-sm font-medium">
                        <strong>Enjeux identifiés :</strong> Discrimination, équité, transparence, responsabilité légale
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h6 className="font-medium mb-2">🔍 Investigation</h6>
                        <ul className="text-sm space-y-1">
                          <li>• Analyse révèle biais dans données historiques</li>
                          <li>• Modèle apprend que "Java" corrèle avec hommes</li>
                          <li>• Features proxy gender cachées détectées</li>
                          <li>• Aucune supervision sur critères d'équité</li>
                        </ul>
                      </div>
                      <div>
                        <h6 className="font-medium mb-2">⚖️ Solutions appliquées</h6>
                        <ul className="text-sm space-y-1">
                          <li>• Retrait immédiat features biaisées</li>
                          <li>• Re-entraînement avec contraintes d'équité</li>
                          <li>• Tests A/B avec métriques de parité</li>
                          <li>• Supervision humaine sur décisions finales</li>
                        </ul>
                      </div>
                    </div>

                    <Alert className="bg-green-50 dark:bg-green-950/30 border-green-200">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <AlertDescription>
                        <strong>Résultat :</strong> Retour à 28% de candidatures féminines retenues, 
                        amélioration de la qualité globale du recrutement (+15% rétention), 
                        conformité IA Act assurée.
                      </AlertDescription>
                    </Alert>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Cas 2 : IA médicale et explicabilité critique" 
                  icon={<Heart className="h-4 w-4 text-blue-500" />}
                >
                  <div className="space-y-4">
                    <div className="bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-400 pl-4">
                      <h5 className="font-medium text-blue-700 dark:text-blue-400 mb-2">🏥 Contexte</h5>
                      <p className="text-sm mb-2">
                        Un système d'IA de diagnostic d'imagerie médicale atteint 95% de précision 
                        mais ses recommandations ne sont pas explicables. Les médecins s'interrogent 
                        sur la confiance à accorder au système.
                      </p>
                      <p className="text-sm font-medium">
                        <strong>Enjeux :</strong> Explicabilité vs performance, responsabilité médicale, 
                        sécurité patient, acceptabilité professionnelle
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h6 className="font-medium mb-2">⚠️ Dilemmes identifiés</h6>
                        <ul className="text-sm space-y-1">
                          <li>• Performance vs explicabilité (trade-off)</li>
                          <li>• Responsabilité en cas d'erreur</li>
                          <li>• Formation médicale continue nécessaire</li>
                          <li>• Coût/bénéfice du déploiement</li>
                        </ul>
                      </div>
                      <div>
                        <h6 className="font-medium mb-2">🛡️ Approche hybrid adoptée</h6>
                        <ul className="text-sm space-y-1">
                          <li>• Système d'aide (non remplacement)</li>
                          <li>• Explications post-hoc (LIME/SHAP)</li>
                          <li>• Formation médecins sur limites IA</li>
                          <li>• Protocole strict supervision humaine</li>
                        </ul>
                      </div>
                    </div>

                    <Alert className="bg-blue-50 dark:bg-blue-950/30 border-blue-200">
                      <Lightbulb className="h-4 w-4 text-blue-600" />
                      <AlertDescription>
                        <strong>Enseignement :</strong> L'explicabilité parfaite n'est pas toujours 
                        nécessaire si la supervision humaine est adéquate et les bénéfices prouvés. 
                        L'acceptabilité professionnelle est cruciale.
                      </AlertDescription>
                    </Alert>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Cas 3 : Modération de contenu et liberté d'expression" 
                  icon={<Globe className="h-4 w-4 text-green-500" />}
                >
                  <div className="space-y-4">
                    <div className="bg-green-50 dark:bg-green-950/30 border-l-4 border-green-400 pl-4">
                      <h5 className="font-medium text-green-700 dark:text-green-400 mb-2">🌐 Contexte</h5>
                      <p className="text-sm mb-2">
                        Une plateforme sociale mondiale utilise l'IA pour modérer 2 milliards de posts/jour. 
                        Le système sur-modère dans certaines cultures et sous-modère dans d'autres, 
                        créant des tensions sur la liberté d'expression.
                      </p>
                      <p className="text-sm font-medium">
                        <strong>Enjeux :</strong> Liberté d'expression vs protection, biais culturels, 
                        scale global vs nuances locales
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <h6 className="font-medium mb-2">🎯 Solutions multiculturelle</h6>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                          <div className="border rounded p-2">
                            <strong>Modèles localisés :</strong> Adaptation par région/culture
                          </div>
                          <div className="border rounded p-2">
                            <strong>Supervision humaine :</strong> Équipes locales formées
                          </div>
                          <div className="border rounded p-2">
                            <strong>Transparence :</strong> Publication des règles et métriques
                          </div>
                        </div>
                      </div>

                      <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 rounded p-3 text-sm">
                        <strong>Complexité réelle :</strong> Équilibrer protection (harcèlement, 
                        désinformation) et liberté d'expression dans 190+ pays avec codes culturels 
                        différents. Aucune solution parfaite n'existe.
                      </div>
                    </div>
                  </div>
                </ExpandableSection>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🧠 Exercice : Votre comité d'éthique</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Imaginez que vous devez trancher ces dilemmes. Comment votre comité d'éthique 
                aborderait-il ces cas ? Quels critères de décision utiliseriez-vous ?
              </p>
              
              <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 rounded p-4">
                <h5 className="font-medium mb-2">Framework de décision éthique</h5>
                <ol className="text-sm space-y-1 list-decimal list-inside">
                  <li>Identifier toutes les parties prenantes impactées</li>
                  <li>Analyser les bénéfices et risques pour chacune</li>
                  <li>Évaluer les alternatives possibles</li>
                  <li>Appliquer les principes éthiques fondamentaux</li>
                  <li>Considérer les contraintes légales et réglementaires</li>
                  <li>Décider avec transparence et traçabilité</li>
                  <li>Prévoir le monitoring et ajustements futurs</li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </CourseModule>

        {/* Conclusion enrichie */}
        <CourseConclusion
          title="Conclusion : Vers une IA au service de l'humanité"
          description="Récapitulatif et engagement pour une IA responsable et conforme"
          learningPoints={[
            "Maîtriser les principes éthiques fondamentaux et le framework d'évaluation",
            "Identifier, mesurer et corriger les biais algorithmiques avec des outils concrets",
            "Implémenter une gouvernance IA robuste avec comité d'éthique et charte",
            "Assurer la conformité IA Act européen et autres réglementations",
            "Développer une culture de responsabilité et formation continue",
            "Résoudre des dilemmes éthiques complexes avec méthodologie structurée"
          ]}
          nextSteps={[
            "Réaliser un audit éthique complet de vos systèmes IA existants",
            "Rédiger et adopter votre charte éthique IA avec équipes",
            "Former vos développeurs et managers aux enjeux éthiques",
            "Mettre en place votre comité d'éthique IA multidisciplinaire",
            "Suivre l'évolution réglementaire et préparer la conformité IA Act",
            "Développer des métriques d'équité et outils de monitoring continu"
          ]}
        />

        <Alert className="mb-8 bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800">
          <Shield className="h-5 w-5 text-green-600" />
          <AlertDescription>
            <strong>Engagement éthique :</strong> L'IA éthique n'est pas une contrainte mais un 
            avantage concurrentiel. Les entreprises responsables gagnent la confiance, attirent 
            les talents et construisent un futur technologique plus juste et durable.
          </AlertDescription>
        </Alert>
      </section>
    </>
  );
};

export default IAEthique;
