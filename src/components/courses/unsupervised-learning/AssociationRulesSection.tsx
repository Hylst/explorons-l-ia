
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import LessonSection from '../LessonSection';
import InteractiveExample from '../InteractiveExample';
import AssociationRulesDemo from './AssociationRulesDemo';

const AssociationRulesSection: React.FC = () => {
  return (
    <LessonSection 
      title="Règles d'association : Découvrir des liens cachés" 
      icon={<ShoppingCart className="h-6 w-6" />}
    >
      <div className="space-y-6">
        <p className="text-lg">
          "Les personnes qui achètent du pain achètent souvent du lait" - voilà le type de découverte que permettent 
          les règles d'association. Cette technique identifie des relations fréquentes entre différents éléments 
          dans un dataset.
        </p>

        <AssociationRulesDemo />

        <InteractiveExample
          title="Analyse du panier de marché"
          description="Voyons comment un supermarché peut découvrir des associations entre produits"
          steps={[
            {
              title: "Collecte des données",
              description: "Enregistrer tous les achats : Ticket 1 {Pain, Lait, Œufs}, Ticket 2 {Pain, Beurre}, etc.",
              result: "Base de données de 10,000 tickets de caisse"
            },
            {
              title: "Calcul des fréquences",
              description: "Identifier les combinaisons fréquentes : Pain+Lait apparaît dans 30% des tickets",
              result: "Pain → Lait (Support: 30%, Confiance: 80%)"
            },
            {
              title: "Génération des règles",
              description: "Créer des règles : Si Pain alors Lait (probabilité 80%)",
              result: "15 règles d'association découvertes"
            },
            {
              title: "Application pratique",
              description: "Placer le lait près du pain, proposer des promotions groupées",
              result: "Augmentation des ventes de 12%"
            }
          ]}
          finalMessage="Les règles d'association permettent de découvrir des patterns cachés qui peuvent transformer une stratégie commerciale !"
        />
      </div>
    </LessonSection>
  );
};

export default AssociationRulesSection;
