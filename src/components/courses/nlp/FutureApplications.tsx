
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Microscope, 
  Stethoscope, 
  Scale, 
  GraduationCap, 
  Briefcase, 
  Palette, 
  Code,
  Calendar,
  MapPin,
  Sparkles,
  Zap
} from 'lucide-react';
import { motion } from 'framer-motion';

interface FutureApplication {
  title: string;
  description: string;
  currentState: string;
  futureVision: string;
  timeline: string;
  icon: React.ReactNode;
  category: 'révolutionnaire' | 'transformateur' | 'évolutif';
  examples: string[];
}

const FutureApplications: React.FC = () => {
  const applications: FutureApplication[] = [
    {
      title: "Assistant médical universel",
      description: "IA capable de diagnostiquer, prescrire et accompagner les patients",
      currentState: "Assistants spécialisés pour la radiologie",
      futureVision: "Médecin virtuel accessible 24h/24 dans toutes les langues",
      timeline: "2028-2035",
      icon: <Stethoscope className="h-6 w-6" />,
      category: "révolutionnaire",
      examples: [
        "Diagnostic instantané par photo/description",
        "Plans de traitement personnalisés",
        "Surveillance continue de la santé",
        "Prévention proactive des maladies"
      ]
    },
    {
      title: "Compagnon éducatif adaptatif",
      description: "Tuteur IA personnalisé pour chaque apprenant",
      currentState: "Khan Academy et Duolingo avec IA basique",
      futureVision: "Professeur virtuel comprenant style d'apprentissage unique",
      timeline: "2025-2030",
      icon: <GraduationCap className="h-6 w-6" />,
      category: "transformateur",
      examples: [
        "Adaptation temps réel au rythme d'apprentissage",
        "Création de contenus sur mesure",
        "Évaluation continue et bienveillante",
        "Support émotionnel pendant l'apprentissage"
      ]
    },
    {
      title: "Avocat numérique accessible",
      description: "Conseil juridique de qualité pour tous",
      currentState: "Chatbots juridiques simples",
      futureVision: "Avocat IA maîtrisant tous les domaines du droit",
      timeline: "2030-2040",
      icon: <Scale className="h-6 w-6" />,
      category: "révolutionnaire",
      examples: [
        "Rédaction automatique de contrats",
        "Analyse de jurisprudence en temps réel",
        "Conseils juridiques préventifs",
        "Représentation dans les litiges simples"
      ]
    },
    {
      title: "Partenaire créatif multidisciplinaire",
      description: "Collaborateur IA pour tous les arts et la création",
      currentState: "DALL-E, Midjourney, GitHub Copilot",
      futureVision: "Directeur artistique IA maîtrisant tous les médiums",
      timeline: "2026-2032",
      icon: <Palette className="h-6 w-6" />,
      category: "transformateur",
      examples: [
        "Films entiers générés à partir d'un script",
        "Musique adaptative à l'émotion du moment",
        "Design architectural optimisé et esthétique",
        "Romans interactifs personnalisés"
      ]
    },
    {
      title: "Scientifique augmenté",
      description: "Accélération massive de la découverte scientifique",
      currentState: "AlphaFold pour les protéines",
      futureVision: "IA générant et testant des hypothèses scientifiques",
      timeline: "2028-2040",
      icon: <Microscope className="h-6 w-6" />,
      category: "révolutionnaire",
      examples: [
        "Découverte de nouveaux médicaments en jours",
        "Résolution de problèmes mathématiques complexes",
        "Simulation d'expériences impossibles",
        "Synthèse de littérature scientifique globale"
      ]
    },
    {
      title: "Manager personnel omniscient",
      description: "Assistant qui optimise votre vie personnelle et professionnelle",
      currentState: "Calendriers intelligents, Siri/Alexa",
      futureVision: "Gestionnaire de vie comprenant vos objectifs profonds",
      timeline: "2025-2028",
      icon: <Briefcase className="h-6 w-6" />,
      category: "évolutif",
      examples: [
        "Planification automatique des objectifs à long terme",
        "Négociation de contrats et salaires",
        "Réseautage intelligent et opportunités",
        "Équilibre vie pro/perso optimisé"
      ]
    }
  ];

  const getCategoryColor = (category: FutureApplication['category']) => {
    switch (category) {
      case 'révolutionnaire': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      case 'transformateur': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
      case 'évolutif': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-4 text-foreground">Applications futures du NLP</h3>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Explorez les domaines où l'IA conversationnelle va révolutionner nos vies 
          dans les prochaines années. Ces applications ne sont plus de la science-fiction.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {applications.map((app, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-primary">{app.icon}</div>
                    <div>
                      <CardTitle className="text-lg text-foreground">{app.title}</CardTitle>
                      <Badge className={getCategoryColor(app.category)}>
                        {app.category}
                      </Badge>
                    </div>
                  </div>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {app.timeline}
                  </Badge>
                </div>
                <p className="text-muted-foreground">{app.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded-lg border-l-4 border-blue-400">
                    <h5 className="font-medium text-blue-900 dark:text-blue-100 mb-1">Aujourd'hui</h5>
                    <p className="text-sm text-blue-800 dark:text-blue-200">{app.currentState}</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded-lg border-l-4 border-green-400">
                    <h5 className="font-medium text-green-900 dark:text-green-100 mb-1">Vision future</h5>
                    <p className="text-sm text-green-800 dark:text-green-200">{app.futureVision}</p>
                  </div>
                </div>

                <div>
                  <h5 className="font-medium text-foreground mb-2 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    Exemples concrets
                  </h5>
                  <ul className="space-y-1">
                    {app.examples.map((example, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
        <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
          <Zap className="h-5 w-5 text-primary" />
          Implications sociétales
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <h5 className="font-medium mb-2 text-foreground">Opportunités :</h5>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Démocratisation de l'expertise</li>
              <li>• Réduction des inégalités d'accès</li>
              <li>• Augmentation de la productivité</li>
              <li>• Nouvelles formes de créativité</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium mb-2 text-foreground">Défis :</h5>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Transformation des métiers</li>
              <li>• Questions de responsabilité</li>
              <li>• Dépendance technologique</li>
              <li>• Régulation nécessaire</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium mb-2 text-foreground">Préparation :</h5>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Formation continue indispensable</li>
              <li>• Développement de l'esprit critique</li>
              <li>• Collaboration homme-IA</li>
              <li>• Éthique et gouvernance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureApplications;
