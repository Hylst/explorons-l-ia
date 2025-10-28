import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: object;
}

/**
 * Hook pour gérer dynamiquement les meta tags SEO
 */
export const useDocumentMeta = (seoData: SEOData) => {
  const location = useLocation();

  useEffect(() => {
    // Titre de la page
    if (seoData.title) {
      document.title = seoData.title;
    }

    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && seoData.description) {
      metaDescription.setAttribute('content', seoData.description);
    }

    // Meta keywords
    if (seoData.keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', seoData.keywords);
    }

    // Meta author
    if (seoData.author) {
      let metaAuthor = document.querySelector('meta[name="author"]');
      if (!metaAuthor) {
        metaAuthor = document.createElement('meta');
        metaAuthor.setAttribute('name', 'author');
        document.head.appendChild(metaAuthor);
      }
      metaAuthor.setAttribute('content', seoData.author);
    }

    // Canonical URL
    const siteUrl = import.meta.env?.VITE_SITE_URL || (typeof window !== 'undefined' ? `${window.location.protocol}//${window.location.host}` : '');
    const canonicalUrl = seoData.canonical || `${siteUrl}${location.pathname}`;
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // Open Graph tags
    const updateMetaProperty = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    if (seoData.ogTitle || seoData.title) {
      updateMetaProperty('og:title', seoData.ogTitle || seoData.title);
    }
    if (seoData.ogDescription || seoData.description) {
      updateMetaProperty('og:description', seoData.ogDescription || seoData.description);
    }
    if (seoData.ogImage) {
      updateMetaProperty('og:image', seoData.ogImage);
    }
    if (seoData.ogType) {
      updateMetaProperty('og:type', seoData.ogType);
    }
    updateMetaProperty('og:url', canonicalUrl);

    // Twitter Card tags
    const updateMetaName = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    if (seoData.twitterCard) {
      updateMetaName('twitter:card', seoData.twitterCard);
    }
    if (seoData.twitterTitle || seoData.title) {
      updateMetaName('twitter:title', seoData.twitterTitle || seoData.title);
    }
    if (seoData.twitterDescription || seoData.description) {
      updateMetaName('twitter:description', seoData.twitterDescription || seoData.description);
    }
    if (seoData.twitterImage || seoData.ogImage) {
      updateMetaName('twitter:image', seoData.twitterImage || seoData.ogImage || '');
    }

    // Structured Data
    if (seoData.structuredData) {
      let structuredDataScript = document.querySelector('script[type="application/ld+json"]#page-structured-data');
      if (!structuredDataScript) {
        structuredDataScript = document.createElement('script');
        structuredDataScript.setAttribute('type', 'application/ld+json');
        structuredDataScript.setAttribute('id', 'page-structured-data');
        document.head.appendChild(structuredDataScript);
      }
      structuredDataScript.textContent = JSON.stringify(seoData.structuredData);
    }

    // Nettoyage au démontage du composant
    return () => {
      // Restaurer les valeurs par défaut si nécessaire
      document.title = "Explorons l'IA — Guide complet Intelligence Artificielle";
    };
  }, [seoData, location.pathname]);
};