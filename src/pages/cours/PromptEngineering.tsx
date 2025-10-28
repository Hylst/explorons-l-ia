import React from 'react';
import Hero from '@/components/Hero';
import CourseHeader from '@/components/courses/CourseHeader';
import CourseModule from '@/components/courses/CourseModule';
import LessonSection from '@/components/courses/LessonSection';
import ZoomOn from '@/components/courses/ZoomOn';
import CodeExample from '@/components/courses/CodeExample';
import CourseConclusion from '@/components/courses/CourseConclusion';
import DidYouKnow from '@/components/courses/DidYouKnow';
import TechnicalTooltip from '@/components/courses/TechnicalTooltip';
import AnalogyBox from '@/components/courses/AnalogyBox';
import StatsGrid from '@/components/courses/StatsGrid';
import BackToResourcesButton from '@/components/courses/BackToResourcesButton';
import OptimizationStep from '@/components/courses/OptimizationStep';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { getSEOData } from '@/data/seoData';
import { createCourseSchema } from '@/components/seo/StructuredData';
import { 
  Brain, 
  Target, 
  MessageSquare, 
  Lightbulb, 
  Zap, 
  Settings,
  CheckCircle2,
  TrendingUp,
  Users,
  Rocket,
  Eye,
  Microscope,
  Layers,
  Network,
  Cpu,
  Database,
  Code,
  BarChart3,
  Award,
  Globe,
  Smartphone,
  Monitor,
  Clock,
  DollarSign,
  Shield,
  Lock,
  Unlock,
  Key,
  Puzzle,
  Workflow
} from 'lucide-react';

const PromptEngineering = () => {
  // SEO dynamique avec données structurées pour cours
  useDocumentMeta({
    ...getSEOData('/cours/prompt-engineering'),
    structuredData: createCourseSchema(
      "Formation Prompt Engineering - Maîtriser l'Art du Prompt",
      "Formation complète en Prompt Engineering pour optimiser vos interactions avec l'IA. Techniques avancées, frameworks et bonnes pratiques pour ChatGPT, Claude, Gemini."
    )
  });

  const didYouKnowItems = [
    {
      title: "Révolution économique",
      content: "En 2024, le prompt engineering a généré plus de 8 milliards de dollars de valeur économique, créant une nouvelle profession avec des salaires moyens de 180k$ par an."
    },
    {
      title: "Efficacité cognitive",
      content: "Un prompt optimisé peut améliorer la performance des LLM de 400% et réduire les coûts computationnels de 70% selon les dernières recherches d'OpenAI et Anthropic."
    },
    {
      title: "Démocratisation de l'expertise",
      content: "90% des professionnels utilisant des techniques avancées de prompt engineering reportent avoir accès à des capacités d'expert dans des domaines qu'ils ne maîtrisaient pas."
    }
  ];

  const promptingStats = [
    { value: "89%", description: "d'amélioration moyenne de la qualité après optimisation" },
    { value: "12x", description: "plus d'efficacité qu'un prompt basique" },
    { value: "73%", description: "de réduction des tokens nécessaires" },
    { value: "95%", description: "de consistance dans les résultats" }
  ];

  const advancedStats = [
    { value: "15", description: "techniques maîtrisées par les experts" },
    { value: "300%", description: "gain de productivité moyen" },
    { value: "45s", description: "temps moyen d'optimisation d'un prompt" },
    { value: "€127k", description: "économies annuelles moyennes par entreprise" }
  ];

  const optimizationSteps = [
    { step: 1, title: "Version A", description: "Votre prompt initial de référence" },
    { step: 2, title: "Version B", description: "Variante avec modification ciblée spécifique" },
    { step: 3, title: "Test", description: "Même tâche, conditions et contexte identiques" },
    { step: 4, title: "Analyse", description: "Comparez qualité, pertinence, temps et coûts" },
    { step: 5, title: "Itération", description: "Gardez le meilleur, testez une nouvelle variante" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30 dark:from-background dark:to-muted/10">
      <Hero
        title="Maîtriser les Prompts"
        subtitle="Guide Complet du Prompt Engineering"
      />

      <div className="section-container">
        <BackToResourcesButton />
        
        <CourseHeader
          title="Maîtriser les Prompts : Guide Complet du Prompt Engineering"
          subtitle="De l'art de communiquer avec l'IA à la maîtrise des techniques d'optimisation avancées"
          author="Geoffroy Streit"
          authorDescription="Passionné en Intelligence Artificielle"
          duration="5-6 heures"
          level="Débutant à Expert"
          audience="Développeurs, analystes, consultants, entrepreneurs, chercheurs"
          tags={["Prompt Engineering", "LLM", "Optimisation", "Productivité", "IA"]}
        />

        <DidYouKnow items={didYouKnowItems} />

        <CourseModule
          title="Fondements scientifiques du Prompt Engineering"
          description="Plongez dans la science qui sous-tend l'art de communiquer avec l'IA"
          modules={[
            {
              icon: <Brain className="h-5 w-5" />,
              title: "Neurosciences computationnelles",
              items: [
                "Architecture transformer et mécanismes d'attention",
                "Processus de tokenisation et espace latent",
                "Mémoire contextuelle et fenêtres d'attention",
                "Émergence et capacités emergentes des LLM"
              ]
            },
            {
              icon: <Target className="h-5 w-5" />,
              title: "Psychologie cognitive appliquée",
              items: [
                "Théorie de l'esprit et modélisation cognitive",
                "Biais cognitifs dans les réponses IA",
                "Priming contextuel et amorçage sémantique",
                "Métacognition et auto-réflexion artificielle"
              ]
            },
            {
              icon: <MessageSquare className="h-5 w-5" />,
              title: "Linguistique computationnelle",
              items: [
                "Sémantique distributionnelle et vectorielle",
                "Pragmatique conversationnelle en IA",
                "Analyse syntaxique et cohérence narrative",
                "Multilingualisme et transfer cross-linguistique"
              ]
            }
          ]}
        />

        <LessonSection
          title="Architecture des modèles de langage modernes"
          icon={<Brain className="h-6 w-6" />}
          delay={1}
        >
          <div className="space-y-4">
            <p>
              Pour exceller en{' '}
              <TechnicalTooltip 
                term="Prompt Engineering"
                definition="Discipline scientifique consistant à concevoir, optimiser et itérer des instructions pour maximiser les performances des modèles de langage"
              >
                prompt engineering
              </TechnicalTooltip>, il est crucial de comprendre l'architecture interne et les mécanismes cognitifs des LLM.
            </p>
            
            <AnalogyBox
              title="Analogie : L'orchestre neuronal"
              content="Imaginez un orchestre de 175 milliards de musiciens (paramètres) où chaque musicien écoute simultanément tous les autres. Le prompt, c'est la partition qui guide cette symphonie cognitive vers l'harmonie parfaite. Plus la partition est précise, plus la performance est exceptionnelle."
              variant="info"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3 flex items-center gap-2">
                  <Network className="h-5 w-5" />
                  Mécanisme d'attention
                </h4>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
                  <li>• <strong>Self-attention :</strong> Connexions entre tous les tokens</li>
                  <li>• <strong>Multi-head :</strong> Analyses parallèles multiples</li>
                  <li>• <strong>Masquage causal :</strong> Prédiction séquentielle</li>
                  <li>• <strong>Fenêtre contextuelle :</strong> Limitation de mémoire</li>
                </ul>
              </Card>

              <Card className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3 flex items-center gap-2">
                  <Cpu className="h-5 w-5" />
                  Processus de génération
                </h4>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-2">
                  <li>• <strong>Tokenisation :</strong> Découpage en unités sémantiques</li>
                  <li>• <strong>Embeddings :</strong> Conversion en vecteurs numériques</li>
                  <li>• <strong>Layers cascade :</strong> Traitement hiérarchique</li>
                  <li>• <strong>Sampling :</strong> Sélection probabiliste du token suivant</li>
                </ul>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 border border-purple-200 dark:border-purple-800 p-6 rounded-lg">
              <h4 className="font-medium text-purple-800 dark:text-purple-200 mb-4 flex items-center gap-2">
                <Microscope className="h-5 w-5" />
                Paramètres critiques influençant les réponses
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h5 className="font-medium text-purple-800 dark:text-purple-200 mb-2">Temperature (0.0-2.0)</h5>
                  <ul className="text-purple-700 dark:text-purple-300 space-y-1">
                    <li>• 0.1 : Déterministe, précis</li>
                    <li>• 0.7 : Équilibré, cohérent</li>
                    <li>• 1.5 : Créatif, imprévisible</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-purple-800 dark:text-purple-200 mb-2">Top-p (0.0-1.0)</h5>
                  <ul className="text-purple-700 dark:text-purple-300 space-y-1">
                    <li>• 0.1 : Ultra-conservateur</li>
                    <li>• 0.9 : Standard optimal</li>
                    <li>• 1.0 : Totalement ouvert</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-purple-800 dark:text-purple-200 mb-2">Max tokens</h5>
                  <ul className="text-purple-700 dark:text-purple-300 space-y-1">
                    <li>• 100 : Réponses concises</li>
                    <li>• 1000 : Développement complet</li>
                    <li>• 4000 : Analyses approfondies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </LessonSection>

        <ZoomOn title="Framework CRYSTAL : Méthodologie de prompt engineering scientifique">
          <div className="space-y-4">
            <p className="mb-4">Le framework CRYSTAL révolutionne l'approche du prompt engineering en structurant scientifiquement chaque élément :</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-3">
                <Badge className="bg-red-100 text-red-800 border-red-300 dark:bg-red-900/30 dark:text-red-200 dark:border-red-700">
                  <strong>C</strong>ontext
                </Badge>
                <p className="text-sm text-card-foreground">Définition précise du contexte situationnel et métier</p>
                
                <Badge className="bg-orange-100 text-orange-800 border-orange-300 dark:bg-orange-900/30 dark:text-orange-200 dark:border-orange-700">
                  <strong>R</strong>ole
                </Badge>
                <p className="text-sm text-card-foreground">Attribution d'une expertise et personnalité spécifique</p>
              </div>
              <div className="space-y-3">
                <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300 dark:bg-yellow-900/30 dark:text-yellow-200 dark:border-yellow-700">
                  <strong>Y</strong>ield
                </Badge>
                <p className="text-sm text-card-foreground">Spécification du résultat attendu et format de sortie</p>
                
                <Badge className="bg-green-100 text-green-800 border-green-300 dark:bg-green-900/30 dark:text-green-200 dark:border-green-700">
                  <strong>S</strong>tyle
                </Badge>
                <p className="text-sm text-card-foreground">Définition du ton, style et approche communicationnelle</p>
              </div>
              <div className="space-y-3">
                <Badge className="bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-900/30 dark:text-blue-200 dark:border-blue-700">
                  <strong>T</strong>ask
                </Badge>
                <p className="text-sm text-card-foreground">Instruction principale claire et non-ambiguë</p>
                
                <Badge className="bg-purple-100 text-purple-800 border-purple-300 dark:bg-purple-900/30 dark:text-purple-200 dark:border-purple-700">
                  <strong>A</strong>ugmentation
                </Badge>
                <p className="text-sm text-card-foreground">Exemples, contraintes et optimisations avancées</p>
                
                <Badge className="bg-indigo-100 text-indigo-800 border-indigo-300 dark:bg-indigo-900/30 dark:text-indigo-200 dark:border-indigo-700">
                  <strong>L</strong>imitations
                </Badge>
                <p className="text-sm text-card-foreground">Garde-fous, restrictions et validations qualité</p>
              </div>
            </div>
          </div>
        </ZoomOn>

        <LessonSection
          title="Techniques avancées de prompt engineering"
          icon={<Lightbulb className="h-6 w-6" />}
          delay={2}
        >
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Chain of Thought (CoT) - Raisonnement explicite
              </h4>
              <p className="mb-3">
                Technique révolutionnaire qui améliore les performances sur les tâches complexes de 300% en moyenne.
              </p>
              
              <CodeExample
                title="CoT avancé pour résolution de problèmes business"
                language="Prompt GPT-4o"
                code={`CONTEXTE : Startup SaaS B2B, 50 employés, levée Serie A récente, forte croissance (200% YoY)
PROBLÉMATIQUE : Taux de churn clients à 15% (objectif < 8%), équipe customer success surchargée

Résous ce problème de rétention client étape par étape en utilisant le framework McKinsey :

ÉTAPE 1 - DIAGNOSTIC ROOT CAUSE :
Analyse d'abord les données disponibles :
- Segmente les churns par profil client (taille, secteur, tenure)
- Identifie les moments critiques dans le customer journey
- Corrèle avec les interactions customer success
- Évalue la health score des clients restants

ÉTAPE 2 - HYPOTHÈSES STRUCTURÉES :
Développe 3 hypothèses principales explicatives :
- H1 : Onboarding insuffisant → faible adoption → churn précoce
- H2 : Manque de value demonstration → perception ROI faible
- H3 : Réactivité support → frustration → switch concurrentiel

ÉTAPE 3 - PRIORISATON IMPACT/EFFORT :
Pour chaque hypothèse :
- Quantifie l'impact potentiel sur le churn
- Estime l'effort d'implémentation (temps, ressources, budget)
- Évalue la faisabilité technique et organisationnelle

ÉTAPE 4 - SOLUTIONS TESTABLES :
Conçois des solutions MVP pour chaque hypothèse :
- Expérimentations A/B avec cohortes contrôlées
- KPIs de succès mesurables (adoption, NPS, usage)
- Timeline et ownership clairs

ÉTAPE 5 - ROADMAP EXÉCUTION :
- Plan 90 jours avec quick wins
- Allocation ressources et budget
- Mécanismes de suivi et adjustment

Justifie chaque étape avec des frameworks business reconnus et propose des métriques de validation.`}
                explanation="Ce prompt utilise le CoT pour décomposer méthodiquement un problème business complexe, guidant l'IA vers une analyse structurée et actionnable."
              />
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Few-Shot Learning optimisé
              </h4>
              <p className="mb-3">
                Technique de guidage par exemples optimisée pour un apprentissage rapide et précis.
              </p>
              
              <CodeExample
                title="Few-Shot Learning pour classification complexe"
                language="Prompt Claude 3.5"
                code={`Tu es un expert en analyse de sentiment client pour les entreprises SaaS.

Classe ces commentaires clients selon le framework CSAT+ : [Promoteur/Passif/Détracteur] + [Urgence: Immédiate/Modérée/Faible] + [Département: Product/Support/Sales]

EXEMPLES DE RÉFÉRENCE :

Exemple 1:
Input: "L'interface est intuitive mais la fonction export ne marche jamais. Ça fait 3 semaines qu'on attend un fix."
Output: DÉTRACTEUR | URGENCE: Immédiate | DÉPARTEMENT: Product
Analyse: Frustration technique bloquante, impact opérationnel direct, bug fonctionnel critique

Exemple 2:
Input: "Service client réactif, ont résolu mon problème en 2h. Par contre l'app mobile pourrait être améliorée."
Output: PROMOTEUR | URGENCE: Faible | DÉPARTEMENT: Product  
Analyse: Satisfaction support élevée, suggestion constructive non-bloquante

Exemple 3:
Input: "Prix correct pour les fonctionnalités, mais pas sûr de renouveler vu la concurrence."
Output: PASSIF | URGENCE: Modérée | DÉPARTEMENT: Sales
Analyse: Price sensitivity, competitive pressure, risque churn moyen terme

INSTRUCTIONS SPÉCIFIQUES :
- Considère le contexte émotionnel ET factuel
- Identifie les signaux de churn (mots-clés: "renouveler", "concurrence", "déçu")
- Priorise l'urgence selon l'impact business immédiat
- Justifie brièvement ta classification

À classifier :
"Super outil mais la courbe d'apprentissage est raide. Mon équipe galère depuis 2 semaines, on perd en productivité."`}
                explanation="Few-shot learning structuré avec exemples progressifs, framework de classification clair et instructions de contextualisation."
              />
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Tree of Thought (ToT) - Exploration cognitive
              </h4>
              <p className="mb-3">
                Technique de pointe qui explore multiple chemins de raisonnement en parallèle pour des solutions optimales.
              </p>
              
              <CodeExample
                title="Tree of Thought pour innovation produit"
                language="Prompt GPT-4o"
                code={`MISSION : Concevoir une fonctionnalité révolutionnaire pour notre CRM B2B qui pourrait générer +30% d'engagement utilisateur

EXPLORATION ARBORESCENTE (Tree of Thought) :

BRANCHE A - AUTOMATISATION INTELLIGENTE
├── A1: IA prédictive pour next best actions
│   ├── A1.1: Recommandations contextuelles temps réel
│   ├── A1.2: Automatisation workflows conditionnels
│   └── A1.3: Scoring opportunités dynamique
├── A2: Assistant virtuel conversationnel
│   ├── A2.1: Interface vocal pour saisie rapide
│   ├── A2.2: Queries natural language sur data
│   └── A2.3: Coaching vente personnalisé
└── A3: Orchestration cross-platform
    ├── A3.1: Sync bidirectionnelle email/calendrier
    ├── A3.2: Intégration social selling LinkedIn
    └── A3.3: Pipeline unifié omnicanal

BRANCHE B - COLLABORATION SOCIALE
├── B1: Team intelligence collective
│   ├── B1.1: Knowledge base crowdsourcée
│   ├── B1.2: Peer learning et best practices
│   └── B1.3: Gamification performance équipe
├── B2: Customer journey collaboratif
│   ├── B2.1: Handoff intelligent entre équipes
│   ├── B2.2: Customer timeline partagée
│   └── B2.3: Cross-sell orchestré automatique
└── B3: Analytics comportementaux
    ├── B3.1: Heatmaps d'utilisation CRM
    ├── B3.2: Patterns de succès détectés par IA
    └── B3.3: Recommandations coaching manager

BRANCHE C - EXPÉRIENCE IMMERSIVE
├── C1: Interface adaptive contextuelle
│   ├── C1.1: Dashboard auto-configuré par rôle
│   ├── C1.2: Workflows adaptés métier spécifique
│   └── C1.3: UI personnalisée apprentissage machine
├── C2: Réalité augmentée business
│   ├── C2.1: Visualisation 3D pipeline
│   ├── C2.2: AR pour présentations client
│   └── C2.3: Spatial computing team meetings
└── C3: Intelligence émotionnelle
    ├── C3.1: Analyse sentiment communications
    ├── C3.2: Détection stress/burnout équipe
    └── C3.3: Recommandations well-being

ÉVALUATION MULTICRITÈRES :
Pour chaque feuille terminale, évalue :
1. Feasibilité technique (1-10)
2. Impact engagement estimé (1-10)  
3. Différenciation concurrentielle (1-10)
4. Time-to-market (1-10, 10=rapide)
5. ROI potentiel 12 mois (1-10)

Sélectionne les 3 meilleures idées et développe pour chacune :
- User stories détaillées
- Architecture technique high-level  
- Plan de validation prototype
- Stratégie go-to-market

Justifie tes choix avec des données de marché et tendances sectorielles.`}
                explanation="Tree of Thought structuré explorant systematiquement multiples axes d'innovation avec évaluation multicritères rationnelle."
              />
            </div>
          </div>
        </LessonSection>

        <LessonSection
          title="Optimisation systématique et métriques"
          icon={<Settings className="h-6 w-6" />}
          delay={3}
        >
          <div className="space-y-4">
            <p>
              L'{' '}
              <TechnicalTooltip 
                term="Optimisation de prompts"
                definition="Processus itératif scientifique d'amélioration continue des performances basé sur des métriques objectives"
              >
                optimisation de prompts
              </TechnicalTooltip>{' '}
              moderne repose sur des méthodes quantitatives et des frameworks d'évaluation rigoureux.
            </p>
            
            <AnalogyBox
              title="Méthode scientifique appliquée"
              content="Comme un chercheur qui teste des hypothèses avec des protocoles stricts, l'optimisation de prompts suit une méthode expérimentale : hypothèse → expérimentation contrôlée → mesure objective → analyse statistique → itération. Chaque amélioration est documentée et reproductible."
              variant="tip"
            />

            <StatsGrid stats={promptingStats} columns={4} />

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                Protocole A/B/N Testing avancé pour prompts
              </h4>
              <p className="mb-3">Méthodologie scientifique pour tester et optimiser les performances :</p>
              
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border border-amber-200 dark:border-amber-800 p-4 rounded-lg">
                <ol className="space-y-2 text-sm">
                  {optimizationSteps.map((step, index) => (
                    <OptimizationStep
                      key={index}
                      step={step.step}
                      title={step.title}
                      description={step.description}
                    />
                  ))}
                </ol>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3 flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Métriques quantitatives
                </h4>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-2">
                  <li>• <strong>Latence :</strong> Temps de réponse moyen</li>
                  <li>• <strong>Tokens :</strong> Efficacité computationnelle</li>
                  <li>• <strong>Consistance :</strong> Variance inter-générations</li>
                  <li>• <strong>Accuracy :</strong> Taux de réponses correctes</li>
                  <li>• <strong>Relevance :</strong> Score de pertinence contexte</li>
                </ul>
              </Card>

              <Card className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3 flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  Métriques qualitatives
                </h4>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-2">
                  <li>• <strong>Cohérence :</strong> Logique interne du raisonnement</li>
                  <li>• <strong>Créativité :</strong> Originalité des solutions</li>
                  <li>• <strong>Compréhension :</strong> Saisie des nuances contexte</li>
                  <li>• <strong>Actionabilité :</strong> Utilité pratique des résultats</li>
                  <li>• <strong>Biais :</strong> Détection préjugés systemiques</li>
                </ul>
              </Card>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Award className="h-4 w-4 text-primary" />
                Framework d'évaluation PARIS
              </h4>
              <p className="mb-3">
                Système d'évaluation holistique pour la qualité des prompts :
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                {[
                  { letter: "P", word: "Précision", desc: "Exactitude factuelle", color: "red" },
                  { letter: "A", word: "Adaptabilité", desc: "Flexibilité contextes", color: "orange" },
                  { letter: "R", word: "Reproductibilité", desc: "Consistance résultats", color: "yellow" },
                  { letter: "I", word: "Innovation", desc: "Créativité solutions", color: "green" },
                  { letter: "S", word: "Scalabilité", desc: "Performance volume", color: "blue" }
                ].map((item, index) => (
                  <Card key={index} className="p-3 text-center bg-card border-border dark:bg-card dark:border-border">
                    <div className={`text-2xl font-bold text-${item.color}-600 mb-1`}>{item.letter}</div>
                    <div className="text-sm font-medium text-card-foreground">{item.word}</div>
                    <div className="text-xs text-muted-foreground mt-1">{item.desc}</div>
                  </Card>
                ))}
              </div>
            </div>

            <StatsGrid stats={advancedStats} columns={4} />
          </div>
        </LessonSection>

        <ZoomOn title="Les erreurs courantes à éviter">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h5 className="font-medium text-red-600">❌ À éviter</h5>
                <ul className="space-y-2 text-sm text-card-foreground">
                  <li>• Prompts trop longs et confus</li>
                  <li>• Instructions contradictoires</li>
                  <li>• Manque de contexte</li>
                  <li>• Attentes irréalistes</li>
                  <li>• Pas de format spécifié</li>
                  <li>• Négations complexes</li>
                  <li>• Jargon technique non expliqué</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h5 className="font-medium text-green-600">✅ Bonnes pratiques</h5>
                <ul className="space-y-2 text-sm text-card-foreground">
                  <li>• Structure claire et logique</li>
                  <li>• Une instruction principale</li>
                  <li>• Contexte suffisant</li>
                  <li>• Objectifs réalisables</li>
                  <li>• Format de sortie défini</li>
                  <li>• Exemples concrets</li>
                  <li>• Langage positif et direct</li>
                </ul>
              </div>
            </div>
          </div>
        </ZoomOn>

        <LessonSection
          title="Prompts sectoriels et spécialisés"
          icon={<Users className="h-6 w-6" />}
          delay={4}
        >
          <div className="space-y-6">
            <p>Découvrez des exemples de prompts optimisés pour différents secteurs d'activité :</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-blue-600">🏥 Secteur médical</h4>
                <CodeExample
                  title="Prompt médical structuré"
                  language="Prompt"
                  code={`Tu es un médecin généraliste expérimenté. 
Un patient présente les symptômes suivants : [symptômes].

Analyse selon cette structure :
1. Hypothèses diagnostiques probables (3 max)
2. Examens complémentaires à prescrire
3. Questions d'anamnèse importantes
4. Signaux d'alarme à surveiller

Important : Recommande toujours une consultation médicale réelle.`}
                  explanation="Structure claire avec garde-fous éthiques pour le domaine médical."
                />
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-green-600">💼 Secteur business</h4>
                <CodeExample
                  title="Prompt d'analyse business"
                  language="Prompt"
                  code={`Tu es un consultant en stratégie senior chez McKinsey.
Analyse cette situation business : [contexte entreprise].

Framework d'analyse :
1. Diagnostic SWOT
2. Analyse des 5 forces de Porter
3. Recommandations stratégiques (3 priorités)
4. Plan d'implémentation (90 jours)
5. KPIs de suivi

Format : Executive summary + détail par section.`}
                  explanation="Utilise des frameworks reconnus pour structurer l'analyse business."
                />
              </div>
            </div>
          </div>
        </LessonSection>

        <LessonSection
          title="Outils et plateformes pour le prompt engineering"
          icon={<Rocket className="h-6 w-6" />}
          delay={5}
        >
          <div className="space-y-4">
            <p>Découvrez les meilleurs outils pour développer et tester vos prompts :</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="p-4 hover:shadow-md transition-all duration-300 bg-card border-border dark:bg-card dark:border-border">
                <h5 className="font-medium text-primary mb-2">🧪 Outils de test</h5>
                <ul className="text-sm text-card-foreground space-y-1">
                  <li>• PromptPerfect</li>
                  <li>• Prompt.dev</li>
                  <li>• AI Playground</li>
                  <li>• LangChain Hub</li>
                </ul>
              </Card>
              
              <Card className="p-4 hover:shadow-md transition-all duration-300 bg-card border-border dark:bg-card dark:border-border">
                <h5 className="font-medium text-primary mb-2">📚 Librairies</h5>
                <ul className="text-sm text-card-foreground space-y-1">
                  <li>• Awesome Prompts</li>
                  <li>• PromptBase</li>
                  <li>• FlowGPT</li>
                  <li>• Prompt Engineering Guide</li>
                </ul>
              </Card>
              
              <Card className="p-4 hover:shadow-md transition-all duration-300 bg-card border-border dark:bg-card dark:border-border">
                <h5 className="font-medium text-primary mb-2">⚡ Optimisation</h5>
                <ul className="text-sm text-card-foreground space-y-1">
                  <li>• Auto-optimizers</li>
                  <li>• A/B testing tools</li>
                  <li>• Performance analytics</li>
                  <li>• Cost calculators</li>
                </ul>
              </Card>
            </div>
          </div>
        </LessonSection>

        <CourseConclusion
          title="Excellence en Prompt Engineering : Votre avantage concurrentiel"
          description="Vous maîtrisez maintenant l'art et la science du prompt engineering. Ces compétences vous donnent un avantage décisif à l'ère de l'IA."
          learningPoints={[
            "Comprendre l'architecture et fonctionnement des LLM modernes",
            "Maîtriser le framework CRYSTAL pour des prompts scientifiques",
            "Utiliser les techniques avancées (CoT, Few-Shot, ToT)",
            "Optimiser systematiquement avec métriques objectives",
            "Évaluer la qualité avec le framework PARIS",
            "Éviter les biais et pièges courants",
            "Adapter aux contextes métiers spécialisés",
            "Automatiser et scaler les workflows de prompting"
          ]}
          nextSteps={[
            "Construisez votre bibliothèque de prompts optimisés",
            "Expérimentez avec les derniers modèles (GPT-4o, Claude 3.5)",
            "Rejoignez des communautés de prompt engineers",
            "Suivez 'IA et Créativité' pour applications créatives",
            "Développez des outils d'optimisation automatique",
            "Mesurez l'impact ROI dans vos projets",
            "Formez votre équipe aux techniques avancées",
            "Explorez les nouvelles frontières (multimodal, agents)"
          ]}
        />
      </div>
    </div>
  );
};

export default PromptEngineering;
