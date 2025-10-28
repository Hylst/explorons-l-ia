
import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const EthicalChallengesSection: React.FC = () => {
  const ethicalChallenges = [
    {
      question: "Comment garantir l'équité algorithmique?",
      answer: "L'équité algorithmique consiste à s'assurer que les systèmes d'IA ne perpétuent pas les biais existants. Cela implique d'utiliser des jeux de données diversifiés, d'auditer régulièrement les modèles pour détecter les biais et de mettre en place des mécanismes de correction. Il est également important d'impliquer des équipes pluridisciplinaires dans le développement des systèmes d'IA."
    },
    {
      question: "Comment concilier IA et respect de la vie privée?",
      answer: "Le respect de la vie privée dans l'IA nécessite l'application de principes comme la minimisation des données, le consentement éclairé, et l'anonymisation. Des techniques comme l'apprentissage fédéré permettent d'entraîner des modèles sans centraliser les données personnelles. La conformité aux réglementations comme le RGPD est également essentielle."
    },
    {
      question: "Quelle gouvernance pour l'IA?",
      answer: "La gouvernance de l'IA implique la création de cadres réglementaires, d'organismes de surveillance et de normes éthiques. Elle doit être à la fois internationale pour éviter les zones de non-droit, mais aussi adaptée aux contextes locaux. Les parties prenantes incluent les gouvernements, les entreprises, les chercheurs, et la société civile."
    },
    {
      question: "Comment attribuer la responsabilité des décisions de l'IA?",
      answer: "L'attribution de responsabilité est complexe dans les systèmes d'IA, notamment avec l'opacité de certains modèles. Des approches incluent la responsabilité du concepteur, de l'utilisateur, ou partagée. Des mécanismes d'explicabilité et de traçabilité sont nécessaires pour établir des chaînes de responsabilité claires."
    },
    {
      question: "Faut-il réglementer l'IA générative?",
      answer: "La réglementation de l'IA générative soulève des questions sur l'équilibre entre innovation et sécurité. Des cadres comme l'AI Act européen proposent une approche basée sur les risques. Les enjeux incluent la désinformation, les droits d'auteur, et l'impact sur l'emploi. L'autorégulation du secteur doit être complétée par des cadres législatifs adaptés."
    },
  ];

  return (
    <section className="section-container bg-secondary/20 rounded-3xl py-16">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          pretitle="Défis"
          title="Questions éthiques majeures"
          description="Le développement de l'IA soulève des questions éthiques complexes qui nécessitent une réflexion approfondie et des réponses nuancées."
          center
        />

        <div className="mt-10 glass-card rounded-xl p-6">
          <Accordion type="single" collapsible className="w-full">
            {ethicalChallenges.map((challenge, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium text-left">
                  {challenge.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {challenge.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default EthicalChallengesSection;
