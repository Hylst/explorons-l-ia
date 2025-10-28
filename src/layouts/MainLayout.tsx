
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingChatButton from '../components/chat/FloatingChatButton';
import SkipLink from '../components/SkipLink';
import StructuredData, { OrganizationSchema, WebSiteSchema } from '../components/seo/StructuredData';
import Breadcrumbs from '../components/seo/Breadcrumbs';

interface MainLayoutProps {
  children: React.ReactNode;
}

/**
 * Layout principal de l'application avec améliorations d'accessibilité
 * @returns {JSX.Element} Le layout avec header, contenu principal et footer
 */
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();

  // Défilement vers le haut à chaque changement de page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300">
      {/* Données structurées globales */}
      <StructuredData data={OrganizationSchema} id="organization-schema" />
      <StructuredData data={WebSiteSchema} id="website-schema" />
      
      <SkipLink />
      <Header />
      <main 
        id="main-content"
        className="flex-grow focus:outline-none" 
        tabIndex={-1}
        role="main"
      >
        {/* Breadcrumbs - affiché sauf sur la page d'accueil */}
        {location.pathname !== '/' && (
          <div className="bg-muted/30 border-b">
            <div className="container mx-auto px-4 py-3">
              <Breadcrumbs />
            </div>
          </div>
        )}
        
        <div className="page-transition">
          {children}
        </div>
      </main>
      <Footer author="Geoffroy Streit" email="geoffroy.streit@gmail.com" />
      <FloatingChatButton />
    </div>
  );
};

export default MainLayout;
