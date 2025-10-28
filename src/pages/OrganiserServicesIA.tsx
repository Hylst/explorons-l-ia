
import React from 'react';
import Hero from '@/components/Hero';
import CourseHeader from '@/components/courses/CourseHeader';
import CourseModule from '@/components/courses/CourseModule';
import CourseConclusion from '@/components/courses/CourseConclusion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  FolderTree, 
  Tags, 
  Calendar, 
  FileText, 
  Image, 
  MessageSquare, 
  Settings, 
  Lightbulb,
  Target,
  CheckCircle2,
  AlertTriangle,
  Star,
  Archive,
  Filter,
  Search
} from 'lucide-react';

const OrganiserServicesIA = () => {
  const headerProps = {
    title: "Comment organiser les différents types de services IA que l'on utilise ?",
    subtitle: "Méthode structurée pour gérer efficacement votre écosystème d'outils IA personnels",
    author: "Geoffroy Streit",
    authorDescription: "Consultant passionné en Intelligence Artificielle",
    duration: "2-3 heures",
    level: "Débutant",
    audience: "Particuliers",
    tags: ["Organisation", "Gestion", "Services IA", "2024"]
  };

  const module1Data = [
    {
      icon: <Tags className="h-5 w-5 text-primary" />,
      title: "Catégorisation par usage",
      items: [
        "Création et génération de contenu",
        "Analyse et traitement de données",
        "Communication et traduction",
        "Organisation et productivité",
        "Apprentissage et formation"
      ]
    },
    {
      icon: <Target className="h-5 w-5 text-primary" />,
      title: "Classification par objectif",
      items: [
        "Outils de travail quotidien",
        "Assistants créatifs",
        "Solutions d'apprentissage",
        "Outils de divertissement",
        "Services spécialisés"
      ]
    },
    {
      icon: <Star className="h-5 w-5 text-primary" />,
      title: "Niveau de priorité",
      items: [
        "Essentiels (usage quotidien)",
        "Importants (usage régulier)",
        "Utiles (usage occasionnel)",
        "Expérimentaux (tests)",
        "Archivés (plus utilisés)"
      ]
    }
  ];

  const module2Data = [
    {
      icon: <FolderTree className="h-5 w-5 text-primary" />,
      title: "Structure par dossiers",
      items: [
        "Création de dossiers thématiques",
        "Sous-catégories par type d'usage",
        "Organisation hiérarchique logique",
        "Nommage cohérent des dossiers",
        "Système de couleurs et icônes"
      ]
    },
    {
      icon: <FileText className="h-5 w-5 text-primary" />,
      title: "Documentation des outils",
      items: [
        "Fiche descriptive pour chaque outil",
        "Notes d'utilisation personnelles",
        "Exemples de prompts efficaces",
        "Cas d'usage réussis",
        "Limitations et alternatives"
      ]
    },
    {
      icon: <Settings className="h-5 w-5 text-primary" />,
      title: "Gestion des accès",
      items: [
        "Inventaire des comptes créés",
        "Gestion des mots de passe",
        "Suivi des abonnements payants",
        "Historique des versions utilisées",
        "Sauvegarde des configurations"
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
          description="Face à la multiplication des outils IA, une organisation efficace devient essentielle pour maximiser leur potentiel."
        >
          <Card>
            <CardContent className="pt-6">
              <p className="text-lg mb-4">
                Avec l'explosion du nombre d'outils et services IA disponibles, il devient crucial 
                de développer une méthode d'organisation personnelle. Sans structure claire, 
                vous risquez de perdre du temps, d'oublier des outils utiles ou de mal exploiter leur potentiel.
              </p>
              <p className="mb-4">
                Ce cours vous propose une approche méthodique pour créer votre écosystème IA personnel, 
                optimisé selon vos besoins et habitudes d'utilisation.
              </p>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <h4 className="font-medium flex items-center gap-2 mb-2">
                  <Lightbulb className="h-4 w-4" />
                  Objectif principal
                </h4>
                <p className="text-sm">
                  Créer un système d'organisation personnel qui vous permet de retrouver 
                  rapidement le bon outil IA pour chaque situation.
                </p>
              </div>
            </CardContent>
          </Card>
        </CourseModule>

        {/* Module 1 : Inventaire et catégorisation */}
        <CourseModule
          title="Module 1 : Inventaire et catégorisation"
          description="Identifiez et classez tous vos outils IA selon une logique claire"
          modules={module1Data}
        />

        {/* Module 2 : Méthodes d'organisation */}
        <CourseModule
          title="Module 2 : Méthodes d'organisation pratiques"
          description="Mettez en place des systèmes concrets pour gérer vos outils IA"
          modules={module2Data}
        />

        {/* Module 3 : Outils de gestion */}
        <CourseModule
          title="Module 3 : Outils et plateformes de gestion"
          description="Découvrez les solutions pour centraliser et optimiser votre écosystème IA"
        >
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Solutions de gestion recommandées</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">📊 Tableurs et bases de données</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Google Sheets ou Excel pour inventaire</li>
                      <li>• Notion pour documentation complète</li>
                      <li>• Airtable pour classification avancée</li>
                      <li>• Obsidian pour liens entre outils</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">🔖 Gestionnaires de favoris</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Raindrop.io pour organisation visuelle</li>
                      <li>• Pocket pour sauvegarde d'articles</li>
                      <li>• Chrome Collections par thèmes</li>
                      <li>• Bookmarks natifs du navigateur</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5 text-primary" />
                  Système de recherche efficace
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h4 className="font-medium">Techniques de recherche rapide :</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium mb-2 text-green-600">Mots-clés stratégiques</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• Tags par fonctionnalité principale</li>
                        <li>• Mots-clés par domaine d'application</li>
                        <li>• Indicateurs de coût (gratuit/payant)</li>
                        <li>• Niveau de complexité d'usage</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2 text-blue-600">Organisation visuelle</h5>
                      <ul className="space-y-1 text-sm">
                        <li>• Codes couleur par catégorie</li>
                        <li>• Icônes représentatives</li>
                        <li>• Captures d'écran des interfaces</li>
                        <li>• Logos des services</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CourseModule>

        {/* Module 4 : Maintenance et évolution */}
        <CourseModule
          title="Module 4 : Maintenance et évolution de votre écosystème"
          description="Gardez votre organisation à jour et adaptée à vos besoins changeants"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Routine de maintenance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium mb-2">Hebdomadaire :</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Ajout des nouveaux outils découverts</li>
                      <li>• Mise à jour des notes d'utilisation</li>
                      <li>• Nettoyage des outils non utilisés</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Mensuelle :</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Révision des catégories</li>
                      <li>• Optimisation de l'organisation</li>
                      <li>• Sauvegarde de la structure</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Archive className="h-5 w-5 text-primary" />
                  Gestion des changements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Archivage des outils obsolètes
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Migration vers de nouveaux outils
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Adaptation aux nouveaux besoins
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Partage avec la communauté
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </CourseModule>

        {/* Template pratique */}
        <CourseModule
          title="Module 5 : Template et exemples concrets"
          description="Modèles prêts à utiliser pour organiser immédiatement vos outils IA"
        >
          <Card>
            <CardHeader>
              <CardTitle>📋 Template d'organisation IA personnelle</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                  <h4 className="font-medium mb-3">Structure de dossiers recommandée :</h4>
                  <div className="font-mono text-sm space-y-1">
                    <div>📁 Mon Écosystème IA/</div>
                    <div className="ml-4">├── 🎨 Création & Design/</div>
                    <div className="ml-8">│   ├── Génération d'images</div>
                    <div className="ml-8">│   ├── Édition vidéo</div>
                    <div className="ml-8">│   └── Design graphique</div>
                    <div className="ml-4">├── ✍️ Rédaction & Communication/</div>
                    <div className="ml-8">│   ├── Assistants de rédaction</div>
                    <div className="ml-8">│   ├── Traduction</div>
                    <div className="ml-8">│   └── Correction</div>
                    <div className="ml-4">├── 📊 Productivité & Organisation/</div>
                    <div className="ml-8">│   ├── Planification</div>
                    <div className="ml-8">│   ├── Prise de notes</div>
                    <div className="ml-8">│   └── Gestion de tâches</div>
                    <div className="ml-4">├── 🎓 Apprentissage & Recherche/</div>
                    <div className="ml-8">│   ├── Moteurs de recherche IA</div>
                    <div className="ml-8">│   ├── Tutoriels assistés</div>
                    <div className="ml-8">│   └── Analyse de documents</div>
                    <div className="ml-4">└── 🧪 Expérimental/</div>
                    <div className="ml-8">│   ├── Nouveaux outils à tester</div>
                    <div className="ml-8">│   └── Outils spécialisés</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Exemple de fiche outil :</h4>
                  <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <div className="space-y-2 text-sm">
                      <div><strong>Nom :</strong> ChatGPT</div>
                      <div><strong>Catégorie :</strong> Rédaction & Communication</div>
                      <div><strong>Usage principal :</strong> Assistant de rédaction et brainstorming</div>
                      <div><strong>Coût :</strong> Freemium (20€/mois pour Pro)</div>
                      <div><strong>Fréquence d'usage :</strong> Quotidienne ⭐⭐⭐</div>
                      <div><strong>Notes personnelles :</strong> Excellent pour les premiers jets, attention à vérifier les faits</div>
                      <div><strong>Prompts favoris :</strong> "Aide-moi à structurer cette idée...", "Reformule ce texte pour..."</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </CourseModule>

        {/* Conclusion */}
        <CourseConclusion
          title="Conclusion : Maîtriser votre écosystème IA"
          description="Récapitulatif et conseils pour maintenir une organisation efficace dans la durée"
          learningPoints={[
            "Créer une taxonomie personnalisée de vos outils IA",
            "Mettre en place des systèmes de documentation efficaces",
            "Utiliser les bons outils pour centraliser votre écosystème",
            "Développer des routines de maintenance régulières",
            "Adapter votre organisation à l'évolution de vos besoins"
          ]}
          nextSteps={[
            "Implémenter immédiatement le template proposé",
            "Automatiser certains aspects de votre organisation",
            "Rejoindre des communautés de partage d'outils IA",
            "Développer votre propre méthodologie avancée",
            "Partager vos découvertes avec d'autres utilisateurs"
          ]}
        />
      </section>
    </>
  );
};

export default OrganiserServicesIA;
