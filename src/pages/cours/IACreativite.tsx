
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
import DomainCard from '@/components/courses/DomainCard';
import CreativityLevel from '@/components/courses/CreativityLevel';
import ToolCategory from '@/components/courses/ToolCategory';
import ProcessStep from '@/components/courses/ProcessStep';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Palette, 
  Lightbulb, 
  Wand2, 
  Camera, 
  Music, 
  PenTool,
  Brain,
  Users,
  Target,
  CheckCircle2,
  Rocket,
  Zap,
  TrendingUp,
  Layers,
  Sparkles,
  Eye,
  Heart,
  Settings,
  Brush,
  Video,
  Mic,
  Globe,
  Smartphone,
  Monitor,
  Headphones,
  Book,
  FileText,
  Play,
  Download,
  Share,
  Star,
  Trophy,
  Clock,
  DollarSign,
  BarChart3,
  Workflow
} from 'lucide-react';

const IACreativite = () => {
  const didYouKnowItems = [
    {
      title: "Révolution créative",
      content: "En 2024, plus de 50 milliards d'images ont été générées par IA, créant une nouvelle économie créative estimée à 13 milliards de dollars."
    },
    {
      title: "Collaboration humain-IA",
      content: "Des études montrent que 89% des créatifs utilisant l'IA reportent une augmentation significative de leur productivité et de leur satisfaction créative."
    },
    {
      title: "Démocratisation créative",
      content: "L'IA a permis à plus de 100 millions de personnes sans formation artistique de créer du contenu visuel professionnel en 2024."
    }
  ];

  const creativeDomains = [
    { 
      icon: <Camera className="h-6 w-6" />, 
      title: "Génération d'images", 
      desc: "DALL-E 3, Midjourney v6, Stable Diffusion XL" 
    },
    { 
      icon: <Music className="h-6 w-6" />, 
      title: "Composition musicale", 
      desc: "Suno v4, AIVA, Udio, Stable Audio" 
    },
    { 
      icon: <PenTool className="h-6 w-6" />, 
      title: "Rédaction créative", 
      desc: "GPT-4o, Claude 3.5, Gemini Pro" 
    },
    { 
      icon: <Video className="h-6 w-6" />, 
      title: "Création vidéo", 
      desc: "Runway Gen-3, Luma Dream Machine, Pika Labs" 
    },
  ];

  const creativityStats = [
    { value: "95%", description: "de temps économisé sur les itérations créatives" },
    { value: "15x", description: "plus d'idées générées par session de brainstorming" },
    { value: "400%", description: "d'amélioration de la productivité créative" },
    { value: "78%", description: "de réduction des coûts de production" }
  ];

  const workflowStats = [
    { value: "85%", description: "de réduction du temps concept-à-prototype" },
    { value: "25x", description: "plus de variations créées simultanément" },
    { value: "92%", description: "de satisfaction créative améliorée" },
    { value: "67%", description: "de nouveaux créatifs formés en 2024" }
  ];

  const creativeProcessSteps = [
    { step: 1, title: "Exploration", description: "Brainstorming IA illimité", bgColor: "bg-blue-500" },
    { step: 2, title: "Focalisation", description: "Sélection intelligente", bgColor: "bg-green-500" },
    { step: 3, title: "Développement", description: "Approfondissement créatif", bgColor: "bg-orange-500" },
    { step: 4, title: "Raffinement", description: "Optimisation assistée", bgColor: "bg-purple-500" },
    { step: 5, title: "Finalisation", description: "Production automatisée", bgColor: "bg-pink-500" }
  ];

  const imageTools = [
    { name: "Midjourney v6", description: "Art conceptuel et imaginatif" },
    { name: "DALL-E 3", description: "Images réalistes et précises" },
    { name: "Stable Diffusion XL", description: "Contrôle avancé et personnalisation" },
    { name: "Adobe Firefly", description: "Intégration workflow professionnel" }
  ];

  const textTools = [
    { name: "GPT-4o", description: "Rédaction polyvalente et créative" },
    { name: "Claude 3.5 Sonnet", description: "Excellence littéraire et analyse" },
    { name: "Jasper AI", description: "Marketing et copywriting optimisé" },
    { name: "Notion AI", description: "Productivité et organisation créative" }
  ];

  const audioVideoTools = [
    { name: "Suno v4", description: "Génération musicale complète" },
    { name: "ElevenLabs", description: "Clonage de voix ultra-réaliste" },
    { name: "Runway Gen-3", description: "Vidéo génératrice haute qualité" },
    { name: "Luma Dream Machine", description: "Animation 3D et effets visuels" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-purple-50/30 to-pink-50/30 dark:from-background dark:via-purple-950/10 dark:to-pink-950/10">
      <Hero
        title="IA et Créativité"
        subtitle="Révolutionner votre Processus Créatif"
      />

      <div className="section-container">
        <BackToResourcesButton />
        
        <CourseHeader
          title="IA et Créativité : Révolutionner votre Processus Créatif"
          subtitle="Maîtrisez l'art de la co-création avec l'intelligence artificielle"
          author="Geoffroy Streit"
          authorDescription="Passionné en Intelligence Artificielle"
          duration="4-5 heures"
          level="Débutant à Expert"
          audience="Créatifs, designers, marketeurs, entrepreneurs, artistes"
          tags={["Créativité", "IA Générative", "Art numérique", "Innovation", "Productivité"]}
        />

        <DidYouKnow 
          items={didYouKnowItems}
          bgGradient="from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20"
          borderColor="border-purple-200 dark:border-purple-800"
        />

        <CourseModule
          title="L'écosystème créatif de l'IA en 2024"
          description="Découvrez les dernières avancées et leur impact révolutionnaire"
          modules={[
            {
              icon: <Palette className="h-5 w-5" />,
              title: "Arts visuels nouvelle génération",
              items: [
                "Génération d'images photorealistic en temps réel",
                "Style transfer et fusion créative avancée", 
                "Création 3D et environnements virtuels",
                "Animation et motion graphics automatisés"
              ]
            },
            {
              icon: <Music className="h-5 w-5" />,
              title: "Audio et multimédia immersifs",
              items: [
                "Composition musicale émotionnellement dirigée",
                "Synthèse vocale indiscernable de l'humain",
                "Podcasts et narrations générées automatiquement",
                "Design sonore spatial et 3D"
              ]
            },
            {
              icon: <PenTool className="h-5 w-5" />,
              title: "Contenu narratif intelligent",
              items: [
                "Storytelling adaptatif et personnalisé",
                "Scripts interactifs et embranchés",
                "Copywriting psychologique et persuasif",
                "Traduction créative et localisation culturelle"
              ]
            }
          ]}
        />

        <LessonSection
          title="Psychologie de la créativité artificielle"
          icon={<Brain className="h-6 w-6" />}
          delay={1}
        >
          <div className="space-y-4">
            <p>
              La{' '}
              <TechnicalTooltip 
                term="Créativité Artificielle"
                definition="Capacité des systèmes IA à générer du contenu original, novateur et artistiquement valable"
              >
                créativité artificielle
              </TechnicalTooltip>{' '}
              repose sur des principes cognitifs fascinants qui imitent et amplifient les processus créatifs humains.
            </p>
            
            <AnalogyBox
              title="L'IA comme super-assistant créatif"
              content="Imaginez un collaborateur créatif qui a étudié tous les styles artistiques de l'humanité, maîtrise toutes les techniques, ne dort jamais, et peut générer des milliers de variations en quelques secondes. Il ne remplace pas votre vision, mais la démultiplie exponentiellement."
              variant="info"
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {creativeDomains.map((domain, index) => (
                <DomainCard
                  key={index}
                  icon={domain.icon}
                  title={domain.title}
                  description={domain.desc}
                  index={index}
                />
              ))}
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-purple-500" />
                Les quatre dimensions de la créativité IA
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <CreativityLevel
                  level={1}
                  title="Génératrice"
                  description="Produit du contenu basé sur des modèles appris, capable de variations infinies dans un style donné"
                  color="blue"
                />
                <CreativityLevel
                  level={2}
                  title="Combinatoire"
                  description="Mélange intelligemment différents styles, concepts et techniques pour créer des hybrides novateurs"
                  color="green"
                />
                <CreativityLevel
                  level={3}
                  title="Transformatrice"
                  description="Réinterprète et transforme radicalement les concepts existants en créations totalement nouvelles"
                  color="purple"
                />
                <CreativityLevel
                  level={4}
                  title="Émergente"
                  description="Développe spontanément de nouveaux styles et approches non programmés explicitement"
                  color="blue"
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-950/20 dark:to-cyan-950/20 border border-indigo-200 dark:border-indigo-800 p-6 rounded-lg">
              <h4 className="font-medium text-indigo-800 dark:text-indigo-200 mb-4 flex items-center gap-2">
                <Eye className="h-5 w-5" />
                Neurosciences de la collaboration créative humain-IA
              </h4>
              <div className="text-sm text-indigo-700 dark:text-indigo-300 space-y-2">
                <p>• <strong>Désinhibition créative :</strong> L'IA supprime la peur du jugement, libérant l'expression authentique</p>
                <p>• <strong>Amplification synaptique :</strong> Multiplication des connexions d'idées par algorithmes associatifs</p>
                <p>• <strong>Flow augmenté :</strong> État de créativité optimale prolongé grâce à la réactivité instantanée de l'IA</p>
                <p>• <strong>Plasticité créative :</strong> Développement accéléré de nouvelles compétences artistiques</p>
              </div>
            </div>
          </div>
        </LessonSection>

        <ZoomOn title="Les 6 piliers de la co-création humain-IA révolutionnaire">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Badge className="bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-900/30 dark:text-blue-200 dark:border-blue-700 shrink-0">1</Badge>
                <div>
                  <h5 className="font-medium mb-1 text-card-foreground">Inspiration Quantique</h5>
                  <p className="text-sm text-muted-foreground">L'IA explore des milliards de possibilités créatives en parallèle pour stimuler votre imagination</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge className="bg-green-100 text-green-800 border-green-300 dark:bg-green-900/30 dark:text-green-200 dark:border-green-700 shrink-0">2</Badge>
                <div>
                  <h5 className="font-medium mb-1 text-card-foreground">Itération Hyper-Vitesse</h5>
                  <p className="text-sm text-muted-foreground">Cycles créatifs accélérés avec feedback instantané et ajustements en temps réel</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Badge className="bg-orange-100 text-orange-800 border-orange-300 dark:bg-orange-900/30 dark:text-orange-200 dark:border-orange-700 shrink-0">3</Badge>
                <div>
                  <h5 className="font-medium mb-1 text-card-foreground">Exécution Parallèle</h5>
                  <p className="text-sm text-muted-foreground">Production simultanée de multiples versions et variations de vos créations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge className="bg-purple-100 text-purple-800 border-purple-300 dark:bg-purple-900/30 dark:text-purple-200 dark:border-purple-700 shrink-0">4</Badge>
                <div>
                  <h5 className="font-medium mb-1 text-card-foreground">Optimisation Prédictive</h5>
                  <p className="text-sm text-muted-foreground">Anticipation des tendances et adaptation proactive aux préférences du public</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Badge className="bg-pink-100 text-pink-800 border-pink-300 dark:bg-pink-900/30 dark:text-pink-200 dark:border-pink-700 shrink-0">5</Badge>
                <div>
                  <h5 className="font-medium mb-1 text-card-foreground">Personnalisation Émotionnelle</h5>
                  <p className="text-sm text-muted-foreground">Adaptation du style et du contenu aux résonances émotionnelles de l'audience cible</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge className="bg-indigo-100 text-indigo-800 border-indigo-300 dark:bg-indigo-900/30 dark:text-indigo-200 dark:border-indigo-700 shrink-0">6</Badge>
                <div>
                  <h5 className="font-medium mb-1 text-card-foreground">Évolution Continue</h5>
                  <p className="text-sm text-muted-foreground">Apprentissage perpétuel et amélioration automatique de votre signature créative</p>
                </div>
              </div>
            </div>
          </div>
        </ZoomOn>

        <LessonSection
          title="Maîtrise avancée du prompt créatif"
          icon={<Wand2 className="h-6 w-6" />}
          delay={2}
        >
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Architecture narrative pour images génératrices
              </h4>
              <p className="mb-3">
                Construisez des prompts qui racontent une histoire complète, engageant l'IA dans un processus narratif créatif.
              </p>
              
              <CodeExample
                title="Prompt narratif multicouche pour Midjourney"
                language="Prompt Midjourney"
                code={`SCÈNE PRINCIPALE : Un marché flottant futuriste au coucher du soleil sur Titan
CONTEXTE NARRATIF : L'humanité a colonisé les lunes de Saturne depuis 200 ans
PERSONNAGES : Marchande alien aux tentacules iridescents négociant avec un cyborg humain
ÉMOTION DOMINANTE : Nostalgie mélangée d'espoir technologique
DÉTAILS SENSORIELS : Vapeurs orangées d'hydrocarbures, reflets métalliques sur l'eau de méthane
STYLE ARTISTIQUE : Fusion entre l'impressionnisme de Monet et l'esthétique cyberpunk de Syd Mead
TECHNIQUE : Peinture numérique hyperdetaillée, éclairage volumétrique cinématographique
COMPOSITION : Plan large avec focus sélectif, règle des tiers, profondeur de champ dramatique
PALETTE : Oranges saturés, bleus électriques, violets profonds, accents dorés
MOOD : Mélancolique mais vibrant d'espoir, commercial mais poétique
--ar 21:9 --style raw --stylize 850 --chaos 25 --v 6`}
                explanation="Ce prompt combine storytelling, direction artistique, spécifications techniques et guidage émotionnel pour des résultats cinématographiques."
              />
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Techniques psycholinguistiques pour la rédaction créative
              </h4>
              <p className="mb-3">
                Utilisez des structures cognitives et des déclencheurs psychologiques pour produire des textes d'impact émotionnel maximal.
              </p>
              
              <CodeExample
                title="Framework psycholinguistique avancé"
                language="Prompt GPT-4o"
                code={`MISSION : Crée une campagne publicitaire révolutionnaire pour une startup de mobilité urbaine

PROFIL PSYCHOLOGIQUE CIBLE :
- Urbains 25-40 ans, écologiquement conscients mais pressés par le temps
- Paradoxe : veulent agir pour l'environnement mais privilégient la praticité
- Déclencheurs émotionnels : culpabilité environnementale, désir de statut social éthique

ARCHITECTURE PERSUASIVE :
1. ACCROCHE : Cognitive dissonance hook (problème/solution inattendue)
2. DÉVELOPPEMENT : Storytelling en arc narratif classique avec data émotionnelle
3. PREUVE SOCIALE : Témoignages de "early adopters" influents
4. URGENCE : FOMO écologique (Fear Of Missing Out environnemental)
5. CALL-TO-ACTION : Simple, immédiat, gratifiant

TONALITÉ LINGUISTIQUE :
- Vocabulaire : 60% technique/innovant, 40% émotionnel/humain
- Rythme : Phrases courtes pour l'impact, longues pour l'explication
- Figures de style : Métaphores technologiques, parallélismes, questions rhétoriques

CONTRAINTES CRÉATIVES :
- Maximum 150 mots par section
- Inclure 3 données chiffrées percutantes
- Utiliser la règle de 3 (3 bénéfices, 3 preuves, 3 actions)
- Éviter le jargon écologique cliché

FORMAT FINAL : 
[Headline punchy] + [Sous-titre explicatif] + [3 paragraphes développement] + [CTA irrésistible]

STYLE : Fusion entre la créativité de Wieden+Kennedy et la précision de McKinsey`}
                explanation="Ce framework utilise la psychologie comportementale, l'architecture persuasive et des contraintes créatives pour maximiser l'impact."
              />
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                Composition musicale émotionnellement dirigée
              </h4>
              <p className="mb-3">
                Créez des architectures musicales qui évoquent des états émotionnels précis et des atmosphères immersives.
              </p>
              
              <CodeExample
                title="Prompt de composition émotionnelle complexe"
                language="Prompt Suno v4"
                code={`CONCEPT : "Le dernier jour sur Terre" - Pièce orchestrale de 4 minutes

STRUCTURE ÉMOTIONNELLE TEMPORELLE :
0:00-0:45 : Aube de la fin (acceptation sereine)
→ Piano solo contemplatif en Do majeur, tempo 60 BPM
→ Ajout progressif des cordes (violons en harmoniques)
→ Ambiance : Debussy rencontre Hans Zimmer

0:45-1:30 : Souvenirs qui remontent (nostalgie douce-amère)
→ Introduction clarinette et violoncelle (mélodies entrelacées)
→ Modulation vers La mineur, tempo légèrement accéléré
→ Textures : Layering subtil, reverb cathédrale

1:30-2:45 : Célébration de la vie (joie désespérée)
→ Explosion orchestrale en Fa majeur, tempo 120 BPM
→ Cuivres héroïques, percussions tribales, chœurs éthérés
→ Style : Fusion symphonique épique et électronique organique

2:45-3:30 : Acceptation finale (paix transcendante)
→ Decrescendo vers piano solo avec synthés ambient
→ Retour vers Do majeur, tempo ralenti à 45 BPM
→ Finale : Silence progressif avec résonance infinie

INSTRUMENTATION SPÉCIFIQUE :
- Base : Piano à queue steinway, cordes symphoniques complètes
- Couleurs : Synthés ambient (type Blade Runner), percussion ethnique
- FX : Reverb convolution de cathédrale, delays temporels créatifs

RÉFÉRENCES ÉMOTIONNELLES :
"Time" de Hans Zimmer + "Gymnopédie" de Satie + "Svefn-g-englar" de Sigur Rós

PRODUCTION : Mastering cinématique, dynamique préservée, spatialisation 7.1`}
                explanation="Ce prompt guide la création d'une œuvre musicale narrative avec précision émotionnelle et technique professionnelle."
              />
            </div>
          </div>
        </LessonSection>

        <LessonSection
          title="Workflows créatifs révolutionnaires"
          icon={<Target className="h-6 w-6" />}
          delay={3}
        >
          <div className="space-y-6">
            <p>
              Les{' '}
              <TechnicalTooltip 
                term="Workflows Créatifs IA"
                definition="Processus structurés combinant multiple outils IA et expertise humaine pour maximiser l'output créatif"
              >
                workflows créatifs IA
              </TechnicalTooltip>{' '}
              modernes transforment radicalement la production créative, multipliant l'efficacité par des facteurs inédits.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border border-blue-200 dark:border-blue-800 p-6 rounded-lg">
              <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-4 flex items-center gap-2">
                <Rocket className="h-5 w-5" />
                Pipeline créatif : De l'idée au produit fini en 30 minutes
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-sm">
                {creativeProcessSteps.map((step, index) => (
                  <ProcessStep
                    key={index}
                    step={step.step}
                    title={step.title}
                    description={step.description}
                    bgColor={step.bgColor}
                  />
                ))}
              </div>
            </div>

            <StatsGrid stats={creativityStats} columns={4} />

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Layers className="h-4 w-4 text-primary" />
                Projet complexe : Création d'un univers transmedia
              </h4>
              <p className="mb-3">
                Exemple concret de workflow multimodal pour créer un univers narratif complet.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-4 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 border-purple-200 dark:border-purple-800">
                  <h5 className="font-medium text-purple-800 dark:text-purple-200 mb-3">Phase 1 : Fondations (30 min)</h5>
                  <ol className="text-sm space-y-1 text-purple-700 dark:text-purple-300">
                    <li>1. Bible narrative avec Claude 3.5 (15 min)</li>
                    <li>2. Concepts visuels avec Midjourney (10 min)</li>
                    <li>3. Palette sonore avec Suno (5 min)</li>
                  </ol>
                </Card>
                
                <Card className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800">
                  <h5 className="font-medium text-green-800 dark:text-green-200 mb-3">Phase 2 : Production (60 min)</h5>
                  <ol className="text-sm space-y-1 text-green-700 dark:text-green-300">
                    <li>4. Character design avec DALL-E (20 min)</li>
                    <li>5. Environnements avec Stable Diffusion (20 min)</li>
                    <li>6. Trailer vidéo avec Runway (20 min)</li>
                  </ol>
                </Card>

                <Card className="p-4 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-orange-200 dark:border-orange-800">
                  <h5 className="font-medium text-orange-800 dark:text-orange-200 mb-3">Phase 3 : Expansion (45 min)</h5>
                  <ol className="text-sm space-y-1 text-orange-700 dark:text-orange-300">
                    <li>7. Scripts interactifs avec ChatGPT (15 min)</li>
                    <li>8. Voix des personnages avec ElevenLabs (15 min)</li>
                    <li>9. Assets marketing avec Canva AI (15 min)</li>
                  </ol>
                </Card>

                <Card className="p-4 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20 border-pink-200 dark:border-pink-800">
                  <h5 className="font-medium text-pink-800 dark:text-pink-200 mb-3">Phase 4 : Déploiement (15 min)</h5>
                  <ol className="text-sm space-y-1 text-pink-700 dark:text-pink-300">
                    <li>10. Site web avec Framer AI (10 min)</li>
                    <li>11. Stratégie sociale avec Jasper (3 min)</li>
                    <li>12. Analytics et optimisation (2 min)</li>
                  </ol>
                </Card>
              </div>
            </div>

            <StatsGrid stats={workflowStats} columns={4} />
            
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border border-amber-200 dark:border-amber-800 p-6 rounded-lg">
              <h4 className="font-medium text-amber-800 dark:text-amber-200 mb-4 flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                Métrique de succès créatif
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h5 className="font-medium text-amber-800 dark:text-amber-200 mb-2">Vitesse de production</h5>
                  <ul className="text-amber-700 dark:text-amber-300 space-y-1">
                    <li>• Concept → Prototype : &lt; 1 heure</li>
                    <li>• Itérations : &lt; 5 minutes</li>
                    <li>• Version finale : &lt; 3 heures</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-amber-800 dark:text-amber-200 mb-2">Qualité créative</h5>
                  <ul className="text-amber-700 dark:text-amber-300 space-y-1">
                    <li>• Originalité : Score &gt; 8/10</li>
                    <li>• Cohérence visuelle : 95%+</li>
                    <li>• Impact émotionnel : Mesuré par neurofeedback</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-amber-800 dark:text-amber-200 mb-2">ROI créatif</h5>
                  <ul className="text-amber-700 dark:text-amber-300 space-y-1">
                    <li>• Coût/heure : -85% vs traditionnel</li>
                    <li>• Taux d'engagement : +300%</li>
                    <li>• Satisfaction client : 96%</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </LessonSection>

        <ZoomOn title="Arsenal créatif 2024 : Outils révolutionnaires par domaine">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ToolCategory
              icon={<Camera className="h-4 w-4" />}
              title="Image & Design"
              tools={imageTools}
              color="pink"
            />
            
            <ToolCategory
              icon={<PenTool className="h-4 w-4" />}
              title="Texte & Copy"
              tools={textTools}
              color="blue"
            />
            
            <ToolCategory
              icon={<Music className="h-4 w-4" />}
              title="Audio & Vidéo"
              tools={audioVideoTools}
              color="purple"
            />
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-3">
            <Card className="p-3 text-center bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-blue-200 dark:border-blue-800">
              <Clock className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-blue-800 dark:text-blue-200">Production temps réel</p>
              <p className="text-xs text-blue-600 dark:text-blue-300">Générations instantanées</p>
            </Card>
            <Card className="p-3 text-center bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800">
              <DollarSign className="h-6 w-6 text-green-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-green-800 dark:text-green-200">Coûts optimisés</p>
              <p className="text-xs text-green-600 dark:text-green-300">-90% vs traditionnel</p>
            </Card>
            <Card className="p-3 text-center bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 border-purple-200 dark:border-purple-800">
              <BarChart3 className="h-6 w-6 text-purple-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-purple-800 dark:text-purple-200">Analytics avancés</p>
              <p className="text-xs text-purple-600 dark:text-purple-300">Performance prédictive</p>
            </Card>
            <Card className="p-3 text-center bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/20 border-orange-200 dark:border-orange-800">
              <Workflow className="h-6 w-6 text-orange-600 mx-auto mb-2" />
              <p className="text-sm font-medium text-orange-800 dark:text-orange-200">Intégration seamless</p>
              <p className="text-xs text-orange-600 dark:text-orange-300">APIs universelles</p>
            </Card>
          </div>
        </ZoomOn>

        <LessonSection
          title="Techniques avancées de création"
          icon={<Zap className="h-6 w-6" />}
          delay={4}
        >
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                Style Transfer et adaptation
              </h4>
              <p className="mb-3">
                Apprenez à adapter des styles existants pour créer votre signature visuelle unique.
              </p>
              
              <CodeExample
                title="Technique de style transfer avancée"
                language="Prompt Midjourney"
                code={`Portrait d'une femme moderne dans le style de Gustav Klimt, mais adapté à l'époque contemporaine :
- Conserve : motifs géométriques dorés, compositions symboliques, richesse décorative
- Modernise : vêtements actuels (blazer, smartphone), arrière-plan urbain, éclairage naturel
- Ajoute : touches de couleurs néon subtiles dans les motifs dorés
- Style : fusion Art nouveau / photographie de mode contemporaine
- Ambiance : sophistiquée mais accessible, luxueuse mais authentique
--ar 3:4 --style raw --stylize 750`}
                explanation="Cette technique crée un pont entre l'art classique et la modernité, générant un style unique."
              />
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-primary" />
                Création de concepts visuels complexes
              </h4>
              <p className="mb-3">
                Maîtrisez l'art de décomposer des idées abstraites en éléments visuels concrets.
              </p>
              
              <AnalogyBox
                title="De l'abstrait au concret"
                content="Transformer 'l'innovation' en image, c'est comme traduire une mélodie en couleurs. Il faut d'abord identifier les émotions et sensations associées, puis les transposer en éléments visuels tangibles : formes, lumières, mouvements."
                variant="tip"
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <Card className="p-4 border-orange-200 bg-orange-50">
                  <h5 className="font-medium text-orange-800 mb-2">Concept abstrait : "Innovation"</h5>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• Émotions : Excitement, curiosité, transformation</li>
                    <li>• Formes : Spirales, explosions, métamorphoses</li>
                    <li>• Couleurs : Gradient électrique, néons</li>
                    <li>• Mouvement : Ascension, expansion, fusion</li>
                  </ul>
                </Card>
                
                <Card className="p-4 border-green-200 bg-green-50">
                  <h5 className="font-medium text-green-800 mb-2">Traduction visuelle</h5>
                  <p className="text-sm text-green-700">
                    "Une spirale de particules lumineuses émergeant d'un prisme cristallin, 
                    se transformant en formes géométriques complexes dans un gradient 
                    électrique bleu-violet, sur fond noir étoilé"
                  </p>
                </Card>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                Collaboration créative avec l'IA
              </h4>
              <p className="mb-3">
                Découvrez comment établir un dialogue créatif productif avec l'IA.
              </p>
              
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 p-4 rounded-lg">
                <h5 className="font-medium text-indigo-800 mb-2">Les 5 phases du dialogue créatif</h5>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-sm">
                  <div className="text-center">
                    <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-1">1</div>
                    <p className="text-indigo-700"><strong>Exploration</strong><br/>Brainstorming libre</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-1">2</div>
                    <p className="text-indigo-700"><strong>Focalisation</strong><br/>Sélection d'idées</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-1">3</div>
                    <p className="text-indigo-700"><strong>Développement</strong><br/>Approfondissement</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-1">4</div>
                    <p className="text-indigo-700"><strong>Raffinement</strong><br/>Optimisation</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-indigo-100 rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-1">5</div>
                    <p className="text-indigo-700"><strong>Finalisation</strong><br/>Validation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LessonSection>

        <LessonSection
          title="Éthique et bonnes pratiques"
          icon={<Users className="h-6 w-6" />}
          delay={5}
        >
          <div className="space-y-4">
            <p>
              L'utilisation créative de l'IA soulève des questions importantes sur 
              l'{' '}
              <TechnicalTooltip 
                term="Authenticité"
                definition="Caractère de ce qui est original et non copié, respectueux des droits d'auteur"
              >
                authenticité
              </TechnicalTooltip>{' '}
              et la propriété intellectuelle.
            </p>
            
            <AnalogyBox
              title="Principes éthiques essentiels"
              content="Utiliser l'IA créative, c'est comme cuisiner avec des ingrédients de qualité : il faut connaître la provenance, respecter les recettes traditionnelles, tout en innovant avec responsabilité. L'éthique, c'est la différence entre un chef respectueux et un simple copieur."
              variant="info"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-4">
                  <h5 className="font-medium text-green-800 mb-2">✅ Bonnes pratiques</h5>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Combiner IA et expertise humaine</li>
                    <li>• Citer les outils utilisés</li>
                    <li>• Respecter les licences d'usage</li>
                    <li>• Développer son style unique</li>
                    <li>• Créditer les inspirations</li>
                    <li>• Vérifier l'originalité des résultats</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-4">
                  <h5 className="font-medium text-red-800 mb-2">❌ À éviter</h5>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Copier des œuvres existantes</li>
                    <li>• Publier sans vérification</li>
                    <li>• Ignorer les droits d'auteur</li>
                    <li>• Dépendre entièrement de l'IA</li>
                    <li>• Tromper sur l'origine du contenu</li>
                    <li>• Utiliser des données privées</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Construire sa signature créative
              </h4>
              <p className="mb-3">
                L'objectif n'est pas de remplacer votre créativité, mais de développer un style unique 
                qui combine vos sensibilités et les capacités de l'IA.
              </p>
              
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 p-4 rounded-lg">
                <h5 className="font-medium text-yellow-800 mb-2">Méthode pour développer votre signature</h5>
                <ol className="text-sm text-yellow-700 space-y-1 list-decimal list-inside">
                  <li>Identifiez vos préférences esthétiques naturelles</li>
                  <li>Expérimentez avec différents styles d'IA</li>
                  <li>Notez les combinaisons qui vous parlent</li>
                  <li>Développez vos prompts signature</li>
                  <li>Créez une cohérence dans vos productions</li>
                  <li>Évoluez progressivement votre style</li>
                </ol>
              </div>
            </div>
          </div>
        </LessonSection>

        <CourseConclusion
          title="Révolutionnez votre créativité avec l'IA"
          description="Vous maîtrisez maintenant l'art de la co-création avec l'IA. Le futur créatif vous appartient !"
          learningPoints={[
            "Comprendre la psychologie de la créativité artificielle",
            "Maîtriser les techniques de prompt créatif avancées", 
            "Construire des workflows révolutionnaires multimodaux",
            "Utiliser l'arsenal d'outils créatifs 2024",
            "Respecter l'éthique et développer sa signature unique",
            "Collaborer efficacement dans l'écosystème créatif IA",
            "Mesurer et optimiser l'impact créatif",
            "Anticiper les tendances et innovations futures"
          ]}
          nextSteps={[
            "Lancez votre premier projet créatif multimodal",
            "Développez votre signature artistique unique avec IA",
            "Rejoignez des communautés de créateurs IA",
            "Suivez 'Prompt Engineering' pour optimiser vos résultats",
            "Expérimentez avec les derniers outils émergents",
            "Créez votre portfolio de créations IA",
            "Participez à des compétitions créatives IA",
            "Monétisez vos créations et expertise"
          ]}
        />
      </div>
    </div>
  );
};

export default IACreativite;
