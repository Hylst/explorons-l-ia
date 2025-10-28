
import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import { FeatureGrid } from '@/components';
import { 
  Shield, AlertTriangle, Users, Scale, Sparkles, 
  BrainCircuit
} from 'lucide-react';
import { Card } from '@/components/ui/card';

const EthicalPrinciplesSection: React.FC = () => {
  const ethicalPrinciples = [
    {
      title: "Transparence",
      description: "Les systèmes d'IA doivent être compréhensibles et leurs décisions explicables aux utilisateurs.",
      icon: <BrainCircuit size={24} />,
      imagePath: "/pics/transparency.jpg"
    },
    {
      title: "Responsabilité",
      description: "Les développeurs et utilisateurs d'IA doivent assumer la responsabilité des actions et décisions de ces systèmes.",
      icon: <Shield size={24} />,
      imagePath: "/pics/responsability.jpg"
    },
    {
      title: "Équité",
      description: "Les systèmes d'IA ne doivent pas perpétuer ou amplifier les préjugés et discriminations existants.",
      icon: <Scale size={24} />,
      imagePath: "/pics/equity.jpg"
    },
    {
      title: "Respect de la vie privée",
      description: "Les données personnelles doivent être protégées et utilisées de manière responsable.",
      icon: <Users size={24} />,
      imagePath: "/pics/private.jpg"
    },
    {
      title: "Sécurité",
      description: "Les systèmes d'IA doivent être robustes, sécurisés et résistants aux attaques.",
      icon: <AlertTriangle size={24} />,
      imagePath: "/pics/security.jpg"
    },
    {
      title: "Bénéfice sociétal",
      description: "L'IA doit être développée pour améliorer le bien-être humain et contribuer positivement à la société.",
      icon: <Sparkles size={24} />,
      imagePath: "/pics/societal_benefit.jpg"
    }
  ];

  return (
    <section className="section-container">
      <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
        <img 
          src="/pics/ethics.jpg" 
          alt="Éthique de l'IA" 
          className="w-full h-64 object-cover object-center"
        />
      </div>
    
      <SectionHeading
        pretitle="Fondamentaux"
        title="Principes éthiques fondamentaux"
        description="L'éthique de l'IA repose sur plusieurs principes clés qui guident le développement et l'utilisation responsables des technologies d'intelligence artificielle."
        center
      />

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {ethicalPrinciples.map((principle, index) => (
          <Card key={index} className="overflow-hidden h-full flex flex-col border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg">
            <div className="aspect-[16/9] w-full overflow-hidden">
              <img 
                src={principle.imagePath} 
                alt={principle.title} 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-5 flex-grow">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-full bg-primary/10">
                  {principle.icon}
                </div>
                <h3 className="font-semibold heading-sm">{principle.title}</h3>
              </div>
              <p className="text-muted-foreground">{principle.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default EthicalPrinciplesSection;
