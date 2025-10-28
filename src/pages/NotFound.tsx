
import { Link } from 'react-router-dom';

/**
 * Page 404 pour les routes non trouvées
 * @returns {JSX.Element} Le composant de la page 404
 */
const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-primary/10">
          <span className="text-4xl font-bold text-primary">404</span>
        </div>
        <h1 className="heading-lg mb-4">Page non trouvée</h1>
        <p className="text-muted-foreground mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
