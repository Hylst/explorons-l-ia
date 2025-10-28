import React from 'react';

interface StructuredDataProps {
  data: object;
  id?: string;
}

/**
 * Composant pour injecter des données structurées Schema.org
 */
const StructuredData: React.FC<StructuredDataProps> = ({ data, id = 'structured-data' }) => {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

// Données structurées pré-configurées
export const OrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Explorons l'IA",
  "description": "Guide complet de l'intelligence artificielle en français",
  "url": import.meta.env?.VITE_SITE_URL || "",
  "logo": `${import.meta.env?.VITE_SITE_URL || ''}/pics/ia_explorer.jpg`,
  "sameAs": [
    "https://github.com/ai-avenir",
    "https://linkedin.com/company/ai-avenir"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "email": "geoffroy.streit@gmail.com"
  },
  "founder": {
    "@type": "Person",
    "name": "Geoffroy Streit",
    "email": "geoffroy.streit@gmail.com"
  }
};

export const WebSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Explorons l'IA",
  "description": "Guide complet de l'intelligence artificielle en français",
  "url": import.meta.env?.VITE_SITE_URL || "",
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${import.meta.env?.VITE_SITE_URL || ''}/ressources?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};

// Helper pour créer un schéma d'article
export const createArticleSchema = (title: string, description: string, author = "Geoffroy Streit", datePublished?: string, dateModified?: string) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": title,
  "description": description,
  "author": {
    "@type": "Person",
    "name": author
  },
  "publisher": {
    "@type": "Organization",
    "name": "Explorons l'IA",
    "logo": {
      "@type": "ImageObject",
      "url": `${import.meta.env?.VITE_SITE_URL || ''}/pics/ia_explorer.jpg`
    }
  },
  "datePublished": datePublished || new Date().toISOString(),
  "dateModified": dateModified || new Date().toISOString(),
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": typeof window !== 'undefined' ? window.location.href : ''
  }
});

// Helper pour créer un schéma de cours
export const createCourseSchema = (name: string, description: string, provider = "Explorons l'IA") => ({
  "@context": "https://schema.org",
  "@type": "Course",
  "name": name,
  "description": description,
  "provider": {
    "@type": "Organization",
    "name": provider,
    "url": import.meta.env?.VITE_SITE_URL || ""
  },
  "educationalLevel": "Beginner to Advanced",
  "teaches": description,
  "inLanguage": "fr-FR",
  "availableLanguage": "French",
  "isAccessibleForFree": true
});

// Helper pour créer un schéma d'application logicielle
export const createSoftwareApplicationSchema = (name: string, description: string, category = "BusinessApplication") => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": name,
  "description": description,
  "applicationCategory": category,
  "operatingSystem": "Web Browser",
  "browserRequirements": "Requires JavaScript. Requires HTML5.",
  "softwareVersion": "1.0",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock"
  },
  "creator": {
    "@type": "Organization",
    "name": "Explorons l'IA"
  }
});

// Helper pour créer un schéma FAQ
export const createFAQSchema = (questions: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": questions.map(qa => ({
    "@type": "Question",
    "name": qa.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": qa.answer
    }
  }))
});

export default StructuredData;