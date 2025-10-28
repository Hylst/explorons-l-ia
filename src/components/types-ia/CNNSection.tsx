
import React from 'react';
import { Eye, Grid, CheckSquare, PanelBottom } from 'lucide-react';
import IASection from './IASection';

const CNNSection = () => {
  const detailsCard = (
    <>
      <h4 className="text-lg font-semibold mb-4">Structure d'un CNN</h4>
      
      <div className="mb-6 p-5 rounded-lg bg-secondary/30 border">
        <div className="aspect-[3/2] mb-4 bg-secondary/20 rounded-lg p-3 flex items-center justify-center">
          <svg viewBox="0 0 800 400" className="w-full h-full">
            {/* Input Image */}
            <rect x="50" y="150" width="100" height="100" rx="0" fill="rgb(var(--primary))" fillOpacity="0.1" stroke="rgb(var(--primary))" strokeWidth="1" />
            <text x="100" y="135" textAnchor="middle" fill="currentColor" fontSize="14">Image</text>
            
            {/* Conv1 */}
            <rect x="200" y="125" width="80" height="80" rx="0" fill="rgb(var(--primary))" fillOpacity="0.2" stroke="rgb(var(--primary))" strokeWidth="1" />
            <text x="240" y="110" textAnchor="middle" fill="currentColor" fontSize="14">Conv1</text>
            <rect x="200" y="215" width="80" height="20" rx="0" fill="rgb(var(--primary))" fillOpacity="0.1" stroke="rgb(var(--primary))" strokeWidth="1" />
            <text x="240" y="230" textAnchor="middle" fill="currentColor" fontSize="12">Activation</text>
            
            {/* Conv2 */}
            <rect x="330" y="125" width="60" height="60" rx="0" fill="rgb(var(--primary))" fillOpacity="0.3" stroke="rgb(var(--primary))" strokeWidth="1" />
            <text x="360" y="110" textAnchor="middle" fill="currentColor" fontSize="14">Conv2</text>
            <rect x="330" y="195" width="60" height="20" rx="0" fill="rgb(var(--primary))" fillOpacity="0.1" stroke="rgb(var(--primary))" strokeWidth="1" />
            <text x="360" y="210" textAnchor="middle" fill="currentColor" fontSize="12">Activation</text>
            
            {/* Pooling */}
            <rect x="440" y="135" width="40" height="40" rx="0" fill="rgb(var(--primary))" fillOpacity="0.2" stroke="rgb(var(--primary))" strokeWidth="1" />
            <text x="460" y="120" textAnchor="middle" fill="currentColor" fontSize="14">Pool</text>
            
            {/* Flatten */}
            <rect x="530" y="130" width="20" height="50" rx="0" fill="rgb(var(--primary))" fillOpacity="0.1" stroke="rgb(var(--primary))" strokeWidth="1" />
            <text x="540" y="110" textAnchor="middle" fill="currentColor" fontSize="14">Flatten</text>
            
            {/* Fully Connected */}
            <rect x="600" y="125" width="150" height="15" rx="0" fill="rgb(var(--primary))" fillOpacity="0.3" stroke="rgb(var(--primary))" strokeWidth="1" />
            <rect x="600" y="145" width="150" height="15" rx="0" fill="rgb(var(--primary))" fillOpacity="0.3" stroke="rgb(var(--primary))" strokeWidth="1" />
            <rect x="600" y="165" width="150" height="15" rx="0" fill="rgb(var(--primary))" fillOpacity="0.3" stroke="rgb(var(--primary))" strokeWidth="1" />
            <text x="675" y="110" textAnchor="middle" fill="currentColor" fontSize="14">Couches FC</text>
            
            {/* Output */}
            <rect x="600" y="210" width="150" height="40" rx="0" fill="rgb(var(--primary))" fillOpacity="0.2" stroke="rgb(var(--primary))" strokeWidth="1" />
            <text x="675" y="235" textAnchor="middle" fill="currentColor" fontSize="14">Classification</text>
            
            {/* Connecting arrows */}
            <line x1="150" y1="200" x2="200" y2="165" stroke="rgb(var(--primary))" strokeWidth="2" marker-end="url(#arrow)" />
            <line x1="280" y1="165" x2="330" y2="155" stroke="rgb(var(--primary))" strokeWidth="2" marker-end="url(#arrow)" />
            <line x1="390" y1="155" x2="440" y2="155" stroke="rgb(var(--primary))" strokeWidth="2" marker-end="url(#arrow)" />
            <line x1="480" y1="155" x2="530" y2="155" stroke="rgb(var(--primary))" strokeWidth="2" marker-end="url(#arrow)" />
            <line x1="550" y1="155" x2="600" y2="155" stroke="rgb(var(--primary))" strokeWidth="2" marker-end="url(#arrow)" />
            <line x1="675" y1="180" x2="675" y2="210" stroke="rgb(var(--primary))" strokeWidth="2" marker-end="url(#arrow)" />
            
            {/* Filter detail */}
            <rect x="180" y="290" width="120" height="80" rx="5" fill="rgb(var(--primary))" fillOpacity="0.05" stroke="rgb(var(--primary))" strokeWidth="1" />
            <text x="240" y="280" textAnchor="middle" fill="currentColor" fontSize="12">Filtre de convolution</text>
            
            <rect x="190" y="300" width="20" height="20" rx="0" fill="rgb(var(--primary))" fillOpacity="0.2" stroke="none" />
            <rect x="210" y="300" width="20" height="20" rx="0" fill="rgb(var(--primary))" fillOpacity="0.3" stroke="none" />
            <rect x="230" y="300" width="20" height="20" rx="0" fill="rgb(var(--primary))" fillOpacity="0.2" stroke="none" />
            
            <rect x="190" y="320" width="20" height="20" rx="0" fill="rgb(var(--primary))" fillOpacity="0.3" stroke="none" />
            <rect x="210" y="320" width="20" height="20" rx="0" fill="rgb(var(--primary))" fillOpacity="0.4" stroke="none" />
            <rect x="230" y="320" width="20" height="20" rx="0" fill="rgb(var(--primary))" fillOpacity="0.3" stroke="none" />
            
            <rect x="190" y="340" width="20" height="20" rx="0" fill="rgb(var(--primary))" fillOpacity="0.2" stroke="none" />
            <rect x="210" y="340" width="20" height="20" rx="0" fill="rgb(var(--primary))" fillOpacity="0.3" stroke="none" />
            <rect x="230" y="340" width="20" height="20" rx="0" fill="rgb(var(--primary))" fillOpacity="0.2" stroke="none" />
            
            {/* Pooling detail */}
            <rect x="400" y="290" width="120" height="80" rx="5" fill="rgb(var(--primary))" fillOpacity="0.05" stroke="rgb(var(--primary))" strokeWidth="1" />
            <text x="460" y="280" textAnchor="middle" fill="currentColor" fontSize="12">Max Pooling 2x2</text>
            
            <rect x="420" y="310" width="35" height="35" rx="0" fill="rgb(var(--primary))" fillOpacity="0.3" stroke="none" />
            <rect x="435" y="310" width="20" height="20" rx="0" fill="rgb(var(--primary))" fillOpacity="0.5" stroke="rgb(var(--primary))" strokeWidth="1" />
            <text x="445" y="324" textAnchor="middle" fill="currentColor" fontSize="8">max</text>
            
            <defs>
              <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="rgb(var(--primary))" />
              </marker>
            </defs>
          </svg>
        </div>
      </div>
      
      <div className="space-y-4 mb-4">
        <div className="p-3 rounded-lg bg-secondary/40">
          <h5 className="font-medium flex items-center gap-2">
            <Grid className="h-4 w-4 text-primary" /> Couches de convolution
          </h5>
          <p className="text-sm text-muted-foreground">
            Appliquent des filtres pour détecter des motifs locaux (contours, textures, formes).
            Chaque filtre détecte un type de caractéristique spécifique.
          </p>
        </div>
        <div className="p-3 rounded-lg bg-secondary/40">
          <h5 className="font-medium flex items-center gap-2">
            <PanelBottom className="h-4 w-4 text-primary" /> Couches de pooling
          </h5>
          <p className="text-sm text-muted-foreground">
            Réduisent la dimension spatiale pour extraire les caractéristiques les plus importantes.
            Le max-pooling conserve les activations les plus fortes.
          </p>
        </div>
        <div className="p-3 rounded-lg bg-secondary/40">
          <h5 className="font-medium flex items-center gap-2">
            <CheckSquare className="h-4 w-4 text-primary" /> Couches entièrement connectées
          </h5>
          <p className="text-sm text-muted-foreground">
            Intègrent toutes les caractéristiques pour la classification finale.
            Elles fonctionnent comme un réseau neuronal classique.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
        <div className="p-3 rounded-lg bg-secondary/20 border">
          <h5 className="text-sm font-medium mb-2">Applications typiques</h5>
          <ul className="space-y-1 text-xs text-muted-foreground">
            <li>• Classification d'images</li>
            <li>• Détection d'objets</li>
            <li>• Segmentation sémantique</li>
            <li>• Reconnaissance faciale</li>
          </ul>
        </div>
        <div className="p-3 rounded-lg bg-secondary/20 border">
          <h5 className="text-sm font-medium mb-2">Architectures populaires</h5>
          <ul className="space-y-1 text-xs text-muted-foreground">
            <li>• ResNet (connexions résiduelles)</li>
            <li>• VGG (architecture profonde simple)</li>
            <li>• EfficientNet (mise à l'échelle optimisée)</li>
            <li>• U-Net (segmentation médicale)</li>
          </ul>
        </div>
      </div>
      
      <p className="mt-4 text-sm text-muted-foreground">
        Cette architecture hiérarchique permet aux CNN d'apprendre progressivement des 
        représentations de plus en plus abstraites d'une image, des contours simples 
        jusqu'aux objets complexes.
      </p>
    </>
  );

  return (
    <IASection
      sectionId="cnn-section"
      icon={<Eye size={32} className="text-primary" />}
      title="Réseaux de Neurones Convolutifs (CNN)"
      description="Les CNN sont des architectures de deep learning spécialement conçues pour traiter des données 
      structurées en grille, comme les images, en utilisant des opérations de convolution."
      benefits={[
        "Excellents pour la reconnaissance d'images, la classification et la segmentation",
        "Utilisés dans la vision par ordinateur, l'imagerie médicale et la surveillance",
        "Architectures connues : ResNet, VGG, EfficientNet"
      ]}
      detailsCard={detailsCard}
      delay={2}
    />
  );
};

export default CNNSection;
