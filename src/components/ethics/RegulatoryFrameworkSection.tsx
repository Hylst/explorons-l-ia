
import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import { ChevronsRight, GraduationCap, Users } from 'lucide-react';

const RegulatoryFrameworkSection: React.FC = () => {
  return (
    <section className="section-container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeading
            pretitle="Réglementations"
            title="Cadres juridiques et éthiques"
            description="Face aux enjeux éthiques de l'IA, différentes réglementations et initiatives ont émergé pour encadrer le développement et l'utilisation de ces technologies."
          />
          
          <ul className="mt-6 space-y-4">
            <li className="flex gap-2">
              <ChevronsRight className="text-primary mt-1 shrink-0" />
              <div>
                <span className="font-medium">AI Act européen</span> - Premier cadre juridique complet sur l'IA au monde, basé sur une approche par niveau de risque
              </div>
            </li>
            <li className="flex gap-2">
              <ChevronsRight className="text-primary mt-1 shrink-0" />
              <div>
                <span className="font-medium">RGPD</span> - Réglementation européenne sur la protection des données personnelles avec des implications pour les systèmes d'IA
              </div>
            </li>
            <li className="flex gap-2">
              <ChevronsRight className="text-primary mt-1 shrink-0" />
              <div>
                <span className="font-medium">Blueprint for an AI Bill of Rights (USA)</span> - Document proposant des principes pour protéger les citoyens face à l'IA
              </div>
            </li>
            <li className="flex gap-2">
              <ChevronsRight className="text-primary mt-1 shrink-0" />
              <div>
                <span className="font-medium">Initiatives d'autorégulation</span> - Chartes éthiques et principes adoptés par des entreprises et organisations du secteur
              </div>
            </li>
          </ul>
        </div>
        
        <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6')] bg-cover bg-center opacity-20"></div>
          <div className="relative z-10">
            <h3 className="heading-md mb-4">Éducation et sensibilisation</h3>
            <p className="text-muted-foreground mb-6">
              L'éducation aux enjeux éthiques de l'IA est essentielle pour former des citoyens, professionnels et décideurs conscients des implications de ces technologies.
            </p>
            <div className="flex items-center gap-4 mb-4">
              <GraduationCap className="text-primary h-10 w-10" />
              <div>
                <h4 className="font-medium">Formation académique</h4>
                <p className="text-sm text-muted-foreground">Intégration de l'éthique de l'IA dans les cursus technologiques</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Users className="text-primary h-10 w-10" />
              <div>
                <h4 className="font-medium">Sensibilisation du public</h4>
                <p className="text-sm text-muted-foreground">Programmes d'information sur les impacts sociétaux de l'IA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegulatoryFrameworkSection;
