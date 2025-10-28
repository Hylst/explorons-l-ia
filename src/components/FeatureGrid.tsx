
import { ReactNode } from 'react';

interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
}

/**
 * Grille de fonctionnalités avec icônes, titres et descriptions
 * @param {Feature[]} features - Liste des fonctionnalités à afficher
 * @param {number} columns - Nombre de colonnes (2, 3 ou 4)
 * @returns {JSX.Element} Le composant FeatureGrid
 */
const FeatureGrid = ({ features, columns = 3 }: FeatureGridProps) => {
  const getGridCols = () => {
    switch (columns) {
      case 2: return 'grid-cols-1 sm:grid-cols-2';
      case 3: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
      case 4: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';
      default: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
    }
  };

  return (
    <div className={`grid ${getGridCols()} gap-6 md:gap-8`}>
      {features.map((feature, index) => (
        <div 
          key={index} 
          className="p-6 rounded-2xl glass-card animate-slide-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-primary/10 text-primary">
            {feature.icon}
          </div>
          <h3 className="heading-sm mb-2">{feature.title}</h3>
          <p className="text-muted-foreground">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;
