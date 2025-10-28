import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { getSEOData } from '@/data/seoData';

/**
 * Composant HOC pour gérer automatiquement le SEO des pages
 */
interface SEOManagerProps {
  children: React.ReactNode;
  customSEO?: any;
}

const SEOManager: React.FC<SEOManagerProps> = ({ children, customSEO }) => {
  const location = useLocation();
  
  // Utilise les données SEO personnalisées ou celles par défaut basées sur la route
  const seoData = customSEO || getSEOData(location.pathname);
  
  useDocumentMeta(seoData);
  
  return <>{children}</>;
};

export default SEOManager;