import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BreadcrumbItem {
  title: string;
  href?: string;
}

interface BreadcrumbsProps {
  className?: string;
  customItems?: BreadcrumbItem[];
}

const routeTitles: Record<string, string> = {
  '': 'Accueil',
  'niveaux-ia': 'Niveaux d\'IA',
  'types-ia': 'Types d\'IA',
  'machine-learning': 'Machine Learning',
  'cas-usage': 'Cas d\'Usage',
  'ethique': 'Éthique',
  'ressources': 'Ressources',
  'les-bases': 'Les Bases',
  'coder-avec-ia': 'Coder avec l\'IA',
  'cours': 'Cours',
  'prompt-engineering': 'Prompt Engineering',
  'ia-creativite': 'IA et Créativité',
  'ia-entreprise': 'IA Entreprise',
  'ia-ethique': 'IA Éthique',
  'nlp-llm-comprehension': 'NLP et LLM',
  'deep-learning-pratique': 'Deep Learning',
  'apprentissage-supervise': 'Apprentissage Supervisé',
  'apprentissage-non-supervise': 'Apprentissage Non Supervisé',
  'bases-mathematiques-ia': 'Mathématiques pour l\'IA',
  'parametres-llm': 'Paramètres LLM',
  'chain-of-prompts': 'Chain of Prompts',
  'calculateur-couts-ia': 'Calculateur Coûts IA',
  'generateur-prompts': 'Générateur Prompts',
  'detecteur-contenu-ia': 'Détecteur Contenu IA',
  'test-api-ia': 'Test API IA',
  'simulateur-ia': 'Simulateur IA',
  'comparateur-modeles-ia': 'Comparateur Modèles IA',
  'optimiseur-workflow-ia': 'Optimiseur Workflow IA'
};

/**
 * Composant Breadcrumbs pour la navigation hiérarchique
 */
const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ className, customItems }) => {
  const location = useLocation();
  
  if (customItems) {
    return (
      <nav 
        className={cn("flex items-center space-x-2 text-sm text-muted-foreground", className)}
        aria-label="Fil d'Ariane"
      >
        <div className="flex items-center space-x-2">
          {customItems.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && <ChevronRight className="h-4 w-4" />}
              {item.href ? (
                <Link 
                  to={item.href}
                  className="hover:text-foreground transition-colors"
                  aria-current={index === customItems.length - 1 ? "page" : undefined}
                >
                  {item.title}
                </Link>
              ) : (
                <span className="text-foreground font-medium" aria-current="page">
                  {item.title}
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </nav>
    );
  }

  // Génération automatique à partir de l'URL
  const pathSegments = location.pathname.split('/').filter(Boolean);
  
  if (pathSegments.length === 0) {
    return null; // Pas de breadcrumbs sur la page d'accueil
  }

  const breadcrumbItems: BreadcrumbItem[] = [
    { title: 'Accueil', href: '/' }
  ];

  let currentPath = '';
  pathSegments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const title = routeTitles[segment] || segment.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
    
    breadcrumbItems.push({
      title,
      href: index === pathSegments.length - 1 ? undefined : currentPath
    });
  });

  // Schema.org structured data for breadcrumbs
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.title,
      "item": item.href ? `https://ai-avenir.hylst.app${item.href}` : undefined
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <nav 
        className={cn("flex items-center space-x-2 text-sm text-muted-foreground", className)}
        aria-label="Fil d'Ariane"
      >
        <div className="flex items-center space-x-2">
          <Home className="h-4 w-4" />
          {breadcrumbItems.map((item, index) => (
            <React.Fragment key={index}>
              {index > 0 && <ChevronRight className="h-4 w-4" />}
              {item.href ? (
                <Link 
                  to={item.href}
                  className="hover:text-foreground transition-colors"
                  aria-current={index === breadcrumbItems.length - 1 ? "page" : undefined}
                >
                  {item.title}
                </Link>
              ) : (
                <span className="text-foreground font-medium" aria-current="page">
                  {item.title}
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Breadcrumbs;