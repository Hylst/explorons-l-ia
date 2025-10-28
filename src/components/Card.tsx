
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  link?: string;
  className?: string;
  delay?: number;
}

/**
 * Carte pour afficher des informations avec titre, description et icône
 * @param {string} title - Titre de la carte
 * @param {string} description - Description de la carte
 * @param {ReactNode} icon - Icône à afficher (optionnel)
 * @param {string} link - Lien de destination (optionnel)
 * @param {string} className - Classes CSS additionnelles (optionnel)
 * @param {number} delay - Délai d'animation (optionnel)
 * @returns {JSX.Element} Le composant Card
 */
const Card = ({ title, description, icon, link, className, delay = 0 }: CardProps) => {
  const cardContent = (
    <div className={`glass-card rounded-2xl p-6 h-full transition-all duration-300 hover:shadow-xl ${link ? 'hover:-translate-y-1 cursor-pointer' : ''} ${className || ''}`} style={{ animationDelay: `${delay}ms` }}>
      {icon && <div className="mb-4 text-primary">{icon}</div>}
      <h3 className="heading-sm mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );

  if (link) {
    return (
      <Link to={link} className="block h-full animate-slide-up" style={{ animationDelay: `${delay}ms` }}>
        {cardContent}
      </Link>
    );
  }

  return <div className="animate-slide-up" style={{ animationDelay: `${delay}ms` }}>{cardContent}</div>;
};

export default Card;
