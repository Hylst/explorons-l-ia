
import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  AlertCircle, 
  BarChart, 
  Camera, 
  UserRound, 
  Brain, 
  Building,
  Heart,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Section présentant des exemples réels d'enjeux éthiques liés à l'IA
 */
const EthicalExamplesSection = () => {
  const ethicalCases = [
    {
      title: "L'algorithme d'embauche biaisé",
      scenario: "Marie, directrice des ressources humaines, a mis en place un système d'IA pour présélectionner les CV. Après six mois, elle remarque que les candidats masculins sont systématiquement favorisés pour les postes techniques, reproduisant les biais historiques des données d'entraînement.",
      question: "Comment équilibrer l'efficacité de l'automatisation avec l'équité du recrutement?",
      principles: ["Équité", "Transparence"],
      icon: <Building className="h-5 w-5 text-amber-500" aria-hidden="true" />,
      consequences: {
        positive: "Identification et correction du biais dans l'algorithme",
        negative: "Risque de discrimination et de poursuite juridique"
      }
    },
    {
      title: "Le diagnostic médical autonome",
      scenario: "Un hôpital régional déploie un système d'IA pour diagnostiquer les maladies pulmonaires. Le système atteint 95% de précision, dépassant la moyenne des médecins (92%). Lorsqu'un patient reçoit un diagnostic erroné grave, la question de la responsabilité se pose : qui est responsable - le médecin, l'hôpital, ou les développeurs de l'IA?",
      question: "Comment attribuer la responsabilité médicale dans un système où l'IA participe au diagnostic?",
      principles: ["Responsabilité", "Supervision humaine"],
      icon: <Heart className="h-5 w-5 text-red-500" aria-hidden="true" />,
      consequences: {
        positive: "Amélioration globale des diagnostics et sauvetage de vies",
        negative: "Zone grise juridique et médicale sur la responsabilité"
      }
    },
    {
      title: "La voiture autonome face au dilemme éthique",
      scenario: "Une voiture autonome se retrouve dans une situation où elle doit choisir entre heurter un groupe de piétons ou faire une manœuvre qui mettrait en danger son passager. Les ingénieurs doivent programmer à l'avance ces décisions de vie ou de mort.",
      question: "Quels principes éthiques devraient guider ces algorithmes de décision en situation d'urgence?",
      principles: ["Utilitarisme", "Dignité humaine"],
      icon: <AlertCircle className="h-5 w-5 text-rose-500" aria-hidden="true" />,
      consequences: {
        positive: "Réduction globale des accidents par rapport à la conduite humaine",
        negative: "Décisions algorithmiques controversées sur la valeur des vies"
      }
    },
    {
      title: "La reconnaissance faciale en centre-ville",
      scenario: "La mairie d'une ville moyenne installe un système de reconnaissance faciale pour lutter contre la criminalité. Le taux d'identification des suspects augmente de 30%, mais des citoyens s'inquiètent de la surveillance permanente et des erreurs d'identification touchant particulièrement certains groupes ethniques.",
      question: "Comment concilier sécurité publique et respect de la vie privée?",
      principles: ["Vie privée", "Consentement", "Non-discrimination"],
      icon: <Camera className="h-5 w-5 text-blue-500" aria-hidden="true" />,
      consequences: {
        positive: "Résolution plus rapide de certains crimes",
        negative: "Érosion des libertés civiles et risque de surveillance excessive"
      }
    },
    {
      title: "L'assistant virtuel qui écoute trop",
      scenario: "La famille Dupont a installé un assistant vocal intelligent dans tout leur domicile. Un jour, ils découvrent que des conversations privées ont été enregistrées et utilisées pour leur proposer des publicités ciblées, sans qu'ils aient été clairement informés de cette pratique.",
      question: "Quelles limites établir pour la collecte de données par les systèmes d'IA domestiques?",
      principles: ["Consentement éclairé", "Transparence", "Limitation de la collecte"],
      icon: <UserRound className="h-5 w-5 text-indigo-500" aria-hidden="true" />,
      consequences: {
        positive: "Services personnalisés et commodité accrue",
        negative: "Intrusion dans l'intimité et monétisation des données personnelles"
      }
    },
    {
      title: "Le modèle de langage qui hallucine",
      scenario: "Un étudiant utilise un LLM pour l'aider dans ses recherches juridiques. L'IA génère des citations de jurisprudence qui semblent pertinentes et précises, mais qui s'avèrent être des fabrications complètes. L'étudiant, faisant confiance au système, les inclut dans sa thèse sans vérification.",
      question: "Comment établir un équilibre entre l'assistance de l'IA et la responsabilité de vérification?",
      principles: ["Vérifiabilité", "Intégrité intellectuelle"],
      icon: <Brain className="h-5 w-5 text-violet-500" aria-hidden="true" />,
      consequences: {
        positive: "Prise de conscience des limites de l'IA et renforcement de l'esprit critique",
        negative: "Propagation d'informations erronées et désinformation"
      }
    },
  ];

  return (
    <section className="py-16">
      <SectionHeading
        pretitle="Cas concrets"
        title="Dilemmes éthiques du quotidien"
        description="Explorez des situations réelles où l'utilisation de l'IA soulève des questions éthiques importantes et nous oblige à réfléchir aux valeurs que nous souhaitons préserver."
        center
      />

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {ethicalCases.map((ethicalCase, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full flex flex-col border-t-4" style={{ borderTopColor: `var(--${index % 2 === 0 ? 'primary' : 'secondary'})` }}>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  {ethicalCase.icon}
                  <CardTitle>{ethicalCase.title}</CardTitle>
                </div>
                <CardDescription className="text-base">{ethicalCase.scenario}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-medium text-foreground">{ethicalCase.question}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold mb-2">Principes en jeu :</h4>
                  <div className="flex flex-wrap gap-2">
                    {ethicalCase.principles.map((principle, i) => (
                      <Badge key={i} variant="outline">{principle}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start space-y-3 border-t pt-4">
                <div className="w-full">
                  <div className="flex items-center gap-1 text-green-600 dark:text-green-400 mb-1">
                    <CheckCircle2 className="h-4 w-4" />
                    <span className="text-sm font-medium">Impact positif potentiel :</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{ethicalCase.consequences.positive}</p>
                </div>
                <div className="w-full">
                  <div className="flex items-center gap-1 text-red-600 dark:text-red-400 mb-1">
                    <XCircle className="h-4 w-4" />
                    <span className="text-sm font-medium">Risque éthique :</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{ethicalCase.consequences.negative}</p>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EthicalExamplesSection;
