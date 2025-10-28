
import React from 'react';
import { BarChart3 } from 'lucide-react';
import IASection from './IASection';

const XAISection = () => {
  const detailsCard = (
    <>
      <h4 className="text-lg font-semibold mb-4">Techniques d'explicabilité</h4>
      <div className="space-y-3">
        <div className="p-3 rounded-lg bg-secondary/40">
          <h5 className="font-medium">LIME (Local Interpretable Model-agnostic Explanations)</h5>
          <p className="text-sm text-muted-foreground">
            Approxime localement le modèle complexe par un modèle plus simple et interprétable.
          </p>
        </div>
        <div className="p-3 rounded-lg bg-secondary/40">
          <h5 className="font-medium">SHAP (SHapley Additive exPlanations)</h5>
          <p className="text-sm text-muted-foreground">
            Attribue à chaque caractéristique une valeur d'importance basée sur la théorie des jeux.
          </p>
        </div>
        <div className="p-3 rounded-lg bg-secondary/40">
          <h5 className="font-medium">Cartes d'activation et attention</h5>
          <p className="text-sm text-muted-foreground">
            Visualise les régions d'une image ou les mots d'un texte qui influencent le plus la décision.
          </p>
        </div>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        Ces techniques permettent d'ouvrir la "boîte noire" des algorithmes complexes, 
        facilitant leur audit, leur amélioration et leur acceptation dans des contextes critiques.
      </p>
    </>
  );

  return (
    <IASection
      sectionId="xai-section"
      icon={<BarChart3 size={32} className="text-primary" />}
      title="IA Explicable (XAI)"
      description="L'IA explicable (XAI) désigne des systèmes d'intelligence artificielle dont les décisions 
      peuvent être comprises et interprétées par les humains, contrairement aux 'boîtes noires'."
      benefits={[
        "Essentielle dans les domaines réglementés comme la finance et la santé",
        "Favorise la confiance des utilisateurs et facilite la détection des biais",
        "Permet de répondre aux exigences légales comme le 'droit à l'explication' du RGPD"
      ]}
      isReversed={true}
      detailsCard={detailsCard}
      delay={5}
    />
  );
};

export default XAISection;
