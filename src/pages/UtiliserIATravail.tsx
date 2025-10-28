
import React from 'react';
import Hero from '@/components/Hero';
import CourseHeader from '@/components/courses/CourseHeader';
import CourseModule from '@/components/courses/CourseModule';
import CourseConclusion from '@/components/courses/CourseConclusion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Briefcase, 
  Users, 
  MessageSquare, 
  FileText, 
  Calendar, 
  BarChart3, 
  Shield, 
  Lightbulb,
  Target,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Zap,
  Clock,
  Settings
} from 'lucide-react';

const UtiliserIATravail = () => {
  const headerProps = {
    title: "Comment utiliser intelligemment les intelligences artificielles au travail",
    subtitle: "Guide complet pour intégrer efficacement l'IA dans votre environnement professionnel",
    author: "Geoffroy Streit",
    authorDescription: "Consultant passionné en Intelligence Artificielle",
    duration: "3-4 heures",
    level: "Intermédiaire",
    audience: "Professionnels",
    tags: ["Usage professionnel", "Productivité", "Stratégie", "2024"]
  };

  const module1Data = [
    {
      icon: <Briefcase className="h-5 w-5 text-primary" />,
      title: "Environnement professionnel",
      items: [
        "Analyse des besoins spécifiques de votre poste",
        "Identification des tâches automatisables",
        "Évaluation du ROI des outils IA",
        "Cartographie des processus métier",
        "Définition des objectifs d'amélioration"
      ]
    },
    {
      icon: <Users className="h-5 w-5 text-primary" />,
      title: "Collaboration et équipe",
      items: [
        "Formation des collaborateurs",
        "Création d'une culture IA positive",
        "Partage des bonnes pratiques",
        "Gestion du changement",
        "Communication sur les bénéfices"
      ]
    },
    {
      icon: <Target className="h-5 w-5 text-primary" />,
      title: "Stratégie d'adoption",
      items: [
        "Approche progressive par étapes",
        "Test et validation des outils",
        "Mesure des performances",
        "Ajustement continu",
        "Planification à long terme"
      ]
    }
  ];

  const module2Data = [
    {
      icon: <MessageSquare className="h-5 w-5 text-primary" />,
      title: "Communication assistée",
      items: [
        "Rédaction d'emails professionnels",
        "Préparation de présentations",
        "Amélioration de la syntaxe et du style",
        "Traduction multilingue",
        "Synthèse de réunions"
      ]
    },
    {
      icon: <FileText className="h-5 w-5 text-primary" />,
      title: "Gestion documentaire",
      items: [
        "Analyse et résumé de documents",
        "Extraction d'informations clés",
        "Classification automatique",
        "Recherche intelligente",
        "Génération de rapports"
      ]
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-primary" />,
      title: "Analyse et décision",
      items: [
        "Analyse de données en temps réel",
        "Détection de tendances",
        "Aide à la prise de décision",
        "Prévisions et projections",
        "Optimisation des processus"
      ]
    }
  ];

  return (
    <>
      <Hero
        title={headerProps.title}
        subtitle={headerProps.subtitle}
      />

      <section className="section-container">
        <CourseHeader {...headerProps} />

        {/* Introduction */}
        <CourseModule
          title="Introduction"
          description="L'IA transforme le monde du travail. Ce cours vous apprend à l'intégrer stratégiquement dans votre environnement professionnel."
        >
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg mb-4">
                L'intelligence artificielle n'est plus un luxe technologique mais un avantage concurrentiel essentiel. 
                Dans un environnement professionnel de plus en plus compétitif, savoir utiliser l'IA efficacement 
                peut faire la différence entre subir le changement et le maîtriser.
              </p>
              <p className="mb-4">
                Ce cours s'adresse aux professionnels qui souhaitent optimiser leur productivité, améliorer 
                la qualité de leur travail et développer de nouvelles compétences en phase avec les évolutions technologiques.
              </p>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <h4 className="font-medium flex items-center gap-2 mb-2">
                  <Lightbulb className="h-4 w-4" />
                  Objectif principal
                </h4>
                <p className="text-sm">
                  Développer une approche stratégique et méthodique de l'intégration de l'IA 
                  dans votre activité professionnelle pour maximiser votre efficacité.
                </p>
              </div>
            </CardContent>
          </Card>
        </CourseModule>

        {/* Module 1 : Diagnostic et stratégie */}
        <CourseModule
          title="Module 1 : Diagnostic et stratégie d'adoption"
          description="Établissez les fondations d'une intégration réussie de l'IA dans votre travail"
          modules={module1Data}
        />

        {/* Module 2 : Outils pratiques */}
        <CourseModule
          title="Module 2 : Outils et applications concrètes"
          description="Découvrez les outils IA les plus efficaces pour votre domaine d'activité"
          modules={module2Data}
        />

        {/* Module 3 : Gestion et gouvernance */}
        <CourseModule
          title="Module 3 : Gestion et gouvernance de l'IA"
          description="Mettez en place un cadre de gouvernance pour une utilisation responsable"
        >
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Sécurité et confidentialité
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3 text-green-600">✅ Bonnes pratiques</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Chiffrement des données sensibles
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Validation des outils avant déploiement
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Formation sur la sécurité IA
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Audit régulier des accès
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3 text-red-600">❌ Risques à éviter</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        Partage de données confidentielles
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        Dépendance excessive aux outils IA
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        Négligence de la validation humaine
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        Non-conformité réglementaire
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5 text-primary" />
                  Gouvernance et contrôle
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h4 className="font-medium">Framework de gouvernance :</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm">
                      <li>• Définition des politiques d'usage</li>
                      <li>• Désignation de responsables IA</li>
                      <li>• Mise en place de comités de validation</li>
                      <li>• Création de processus d'approbation</li>
                    </ul>
                    <ul className="space-y-2 text-sm">
                      <li>• Suivi des performances et ROI</li>
                      <li>• Gestion des incidents et risques</li>
                      <li>• Formation continue des équipes</li>
                      <li>• Veille technologique et réglementaire</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CourseModule>

        {/* Module 4 : Optimisation et évolution */}
        <CourseModule
          title="Module 4 : Optimisation continue et évolution"
          description="Maintenez et améliorez votre écosystème IA professionnel"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Optimisation des performances
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Analyse des métriques d'utilisation</li>
                  <li>• Identification des goulots d'étranglement</li>
                  <li>• Optimisation des workflows</li>
                  <li>• Automatisation avancée</li>
                  <li>• Intégration inter-outils</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Évolution et mise à jour
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Veille sur les nouvelles technologies</li>
                  <li>• Test de nouveaux outils</li>
                  <li>• Migration vers des solutions plus performantes</li>
                  <li>• Adaptation aux évolutions métier</li>
                  <li>• Feedback et amélioration continue</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </CourseModule>

        {/* Conclusion */}
        <CourseConclusion
          title="Conclusion : Maîtriser l'IA au travail"
          description="Récapitulatif et prochaines étapes pour devenir un professionnel IA-ready"
          learningPoints={[
            "Établir un diagnostic précis de vos besoins en IA",
            "Sélectionner et déployer les outils adaptés à votre métier",
            "Mettre en place une gouvernance efficace et sécurisée",
            "Optimiser continuellement votre écosystème IA",
            "Former et accompagner vos équipes dans la transformation"
          ]}
          nextSteps={[
            "Approfondir vos connaissances sur des outils spécialisés",
            "Rejoindre des communautés professionnelles IA",
            "Participer à des formations certifiantes",
            "Développer une expertise sectorielle en IA",
            "Accompagner d'autres professionnels dans leur transformation"
          ]}
        />
      </section>
    </>
  );
};

export default UtiliserIATravail;
