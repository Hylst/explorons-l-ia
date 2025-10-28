// Configuration SEO pour toutes les pages

export const seoData = {
  // Page d'accueil
  "/": {
    title: "Explorons l'IA — Guide complet Intelligence Artificielle",
    description: "Découvrez l'IA facilement avec Explorons l'IA. Cours, outils gratuits, guides pratiques et ressources pour maîtriser l'intelligence artificielle. Formation IA en français.",
    keywords: "intelligence artificielle, IA, machine learning, cours IA, formation IA, guide IA français, outils IA gratuits",
    ogTitle: "Explorons l'IA — Maîtrisez l'Intelligence Artificielle",
    ogDescription: "Plateforme française pour apprendre l'IA. Cours interactifs, outils gratuits et communauté.",
    ogType: "website",
    ogImage: "/pics/ia_explorer.jpg",
    twitterCard: "summary_large_image",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Explorons l'IA",
      "description": "Guide complet Intelligence Artificielle français",
      "url": `${import.meta.env?.VITE_SITE_URL ?? ''}`,
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${import.meta.env?.VITE_SITE_URL ?? ''}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    }
  },

  // Pages principales
  "/niveaux-ia": {
    title: "7 Niveaux d'Intelligence Artificielle Expliqués | Explorons l'IA",
    description: "Découvrez les 7 niveaux d'IA de l'IA réactive à l'AGI. Comprendre l'évolution de l'intelligence artificielle et ses capacités actuelles et futures.",
    keywords: "niveaux IA, types intelligence artificielle, AGI, IA réactive, IA limitée, classification IA",
    ogTitle: "Les 7 Niveaux d'Intelligence Artificielle",
    ogDescription: "Guide complet des 7 niveaux d'IA : de l'IA réactive aux systèmes conscients. Où en sommes-nous aujourd'hui ?",
    ogImage: "/pics/ia_levels.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Les 7 Niveaux d'Intelligence Artificielle",
      "description": "Guide complet des 7 niveaux d'IA : de l'IA réactive aux systèmes conscients",
      "author": {
        "@type": "Person",
        "name": "Geoffroy Streit"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Explorons l'IA"
      }
    }
  },

  "/types-ia": {
    title: "Types d'IA : LLM, RAG, CNN, NLP - Guide Complet | Explorons l'IA",
    description: "Découvrez tous les types d'IA : LLM, RAG, CNN, NLP, XAI. Technologies expliquées simplement avec exemples concrets et applications pratiques.",
    keywords: "types IA, LLM, RAG, CNN, NLP, machine learning, deep learning, technologies IA",
    ogTitle: "Guide Complet des Types d'Intelligence Artificielle",
    ogDescription: "LLM, RAG, CNN, NLP... Découvrez toutes les technologies d'IA expliquées simplement",
    ogImage: "/pics/ia_explorer.jpg"
  },

  "/machine-learning": {
    title: "Machine Learning Expliqué : Guide Complet 2024 | Explorons l'IA",
    description: "Apprenez le Machine Learning facilement : algorithmes, types d'apprentissage, applications pratiques. Guide complet avec exemples concrets.",
    keywords: "machine learning, apprentissage automatique, algorithmes ML, apprentissage supervisé, non supervisé",
    ogTitle: "Machine Learning : Guide Complet pour Débutants",
    ogDescription: "Maîtrisez les bases du Machine Learning avec notre guide pratique et interactif",
    ogImage: "/pics/ia_explorer.jpg"
  },

  "/cas-usage": {
    title: "Cas d'Usage IA : Applications Concrètes et Exemples | Explorons l'IA",
    description: "Découvrez les applications pratiques de l'IA : génération de code, création musicale, analyse d'images. Exemples concrets d'utilisation de l'IA.",
    keywords: "cas usage IA, applications IA, exemples IA, IA génération code, IA créative, IA analyse",
    ogTitle: "Applications Pratiques de l'Intelligence Artificielle",
    ogDescription: "Explorez les cas d'usage concrets de l'IA dans différents domaines",
    ogImage: "/pics/usage.jpg"
  },

  "/ethique": {
    title: "Éthique de l'IA : Enjeux et Principes | Explorons l'IA",
    description: "Comprendre les enjeux éthiques de l'IA : biais, transparence, responsabilité. Guide complet pour un développement IA responsable.",
    keywords: "éthique IA, IA responsable, biais algorithmes, transparence IA, gouvernance IA",
    ogTitle: "Éthique et Responsabilité en Intelligence Artificielle",
    ogDescription: "Les enjeux éthiques de l'IA expliqués : comment développer une IA responsable ?",
    ogImage: "/pics/ethics.jpg"
  },

  // Pages cours
  "/cours/prompt-engineering": {
    title: "Cours Prompt Engineering : Maîtriser l'Art du Prompt | Explorons l'IA",
    description: "Formation complète en Prompt Engineering. Apprenez à optimiser vos interactions avec l'IA, techniques avancées et bonnes pratiques.",
    keywords: "prompt engineering, prompts IA, optimisation prompts, formation prompt engineering",
    ogTitle: "Formation Prompt Engineering - Niveau Expert",
    ogDescription: "Maîtrisez l'art du prompt engineering avec notre formation complète",
    ogImage: "/pics/assisted-writing.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Prompt Engineering - Formation Complète",
      "description": "Formation complète en Prompt Engineering pour maîtriser l'art du prompt",
      "provider": {
        "@type": "Organization",
        "name": "Explorons l'IA"
      }
    }
  },

  "/cours/ia-creativite": {
    title: "IA et Créativité : Révolutionnez vos Créations | Explorons l'IA",
    description: "Découvrez comment l'IA transforme la créativité. Outils IA créatifs, génération d'art, musique, design. Guide pratique créatif avec IA.",
    keywords: "IA créative, génération art IA, créativité artificielle, outils créatifs IA",
    ogTitle: "IA et Créativité - Transformez votre Processus Créatif",
    ogDescription: "Explorez le potentiel créatif de l'IA : art, musique, design et plus encore",
    ogImage: "/pics/image-generation.jpg"
  },

  // Pages outils
  "/calculateur-couts-ia": {
    title: "Calculateur Coûts IA - Estimez vos Projets IA | Explorons l'IA",
    description: "Calculateur gratuit pour estimer les coûts d'implémentation IA. Comparaison prix API IA, modèles LLM, coûts infrastructure IA.",
    keywords: "calculateur coûts IA, prix API IA, coût implémentation IA, budget projet IA",
    ogTitle: "Calculateur de Coûts IA - Outil Gratuit",
    ogDescription: "Estimez précisément les coûts de vos projets IA avec notre calculateur gratuit",
    ogImage: "/pics/ia_explorer.jpg",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Calculateur Coûts IA",
      "description": "Outil gratuit pour estimer les coûts d'implémentation de projets IA",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web Browser",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "EUR"
      }
    }
  },

  "/generateur-prompts": {
    title: "Générateur de Prompts IA - Créez des Prompts Parfaits | Explorons l'IA",
    description: "Générateur de prompts IA gratuit. Créez des prompts optimisés pour ChatGPT, Claude, Gemini. Templates et exemples de prompts efficaces.",
    keywords: "générateur prompts, prompts ChatGPT, prompts IA, templates prompts, création prompts",
    ogTitle: "Générateur de Prompts IA - Outil Gratuit",
    ogDescription: "Créez des prompts IA parfaits avec notre générateur gratuit et nos templates experts",
    ogImage: "/pics/assisted-writing.jpg"
  },

  "/detecteur-contenu-ia": {
    title: "Détecteur Contenu IA - Analysez le Contenu Généré | Explorons l'IA",
    description: "Détecteur de contenu IA gratuit. Analysez si un texte est généré par IA. Outil de détection IA fiable pour enseignants et professionnels.",
    keywords: "détecteur contenu IA, détecter texte IA, analyse contenu généré, outil détection IA",
    ogTitle: "Détecteur de Contenu IA - Analyse Gratuite",
    ogDescription: "Analysez si un contenu est généré par IA avec notre détecteur gratuit et fiable",
    ogImage: "/pics/ia_explorer.jpg"
  },

  "/test-api-ia": {
    title: "Test API IA - Testez les Meilleurs Modèles IA | Explorons l'IA",
    description: "Testez gratuitement les API IA : GPT, Claude, Gemini, Mistral. Comparaison modèles IA, tests performance, guide d'intégration API.",
    keywords: "test API IA, comparaison modèles IA, API GPT, API Claude, intégration IA",
    ogTitle: "Test API IA - Comparez les Meilleurs Modèles",
    ogDescription: "Testez et comparez les API IA les plus populaires avec notre plateforme gratuite",
    ogImage: "/pics/code-generation.jpg"
  },

  "/simulateur-ia": {
    title: "Simulateur IA - Expérimentez avec les Modèles ML | Explorons l'IA",
    description: "Simulateur Machine Learning interactif. Testez des algorithmes ML, visualisez l'entraînement, expérimentez avec les hyperparamètres.",
    keywords: "simulateur IA, simulateur machine learning, expérience ML, visualisation ML",
    ogTitle: "Simulateur IA Interactif - Expérimentez en Direct",
    ogDescription: "Découvrez le fonctionnement des modèles IA avec notre simulateur interactif",
    ogImage: "/pics/ia_explorer.jpg"
  },

  "/comparateur-modeles-ia": {
    title: "Comparateur Modèles IA - Trouvez le Meilleur Modèle | Explorons l'IA",
    description: "Comparaison complète des modèles IA : GPT-5, Claude 4, Gemini 2.5. Prix, performances, cas d'usage. Guide d'achat modèles IA 2024.",
    keywords: "comparateur modèles IA, GPT vs Claude, meilleur modèle IA, prix modèles IA",
    ogTitle: "Comparateur de Modèles IA - Guide Complet 2024",
    ogDescription: "Trouvez le modèle IA parfait pour vos besoins avec notre comparateur détaillé",
    ogImage: "/pics/ia_explorer.jpg"
  },

  // Pages ressources
  "/ressources": {
    title: "Ressources IA : Cours, Outils, Guides Gratuits | Explorons l'IA",
    description: "Bibliothèque complète de ressources IA : cours gratuits, outils pratiques, livres, articles scientifiques. Tout pour apprendre l'IA.",
    keywords: "ressources IA, cours IA gratuits, outils IA, formation IA, livres IA, articles IA",
    ogTitle: "Ressources IA - Bibliothèque Complète Gratuite",
    ogDescription: "Accédez à la plus grande bibliothèque de ressources IA en français",
    ogImage: "/pics/educative.jpg"
  },

  "/les-bases": {
    title: "Bases de l'IA : Comprendre l'Intelligence Artificielle | Explorons l'IA",
    description: "Apprenez les bases de l'IA simplement. Concepts fondamentaux, analogies, exemples pratiques. Guide IA pour débutants complets.",
    keywords: "bases IA, comprendre IA, IA pour débutants, concepts fondamentaux IA",
    ogTitle: "Les Bases de l'IA - Guide Débutant Complet",
    ogDescription: "Découvrez l'IA de A à Z avec des explications simples et des analogies parlantes",
    ogImage: "/pics/educative.jpg"
  }
};

// Fonction pour obtenir les données SEO d'une route
export const getSEOData = (pathname: string) => {
  return seoData[pathname as keyof typeof seoData] || {
    title: "Explorons l'IA - Guide Intelligence Artificielle",
    description: "Découvrez l'intelligence artificielle avec Explorons l'IA. Formation, outils et ressources pour maîtriser l'IA.",
    keywords: "intelligence artificielle, IA, formation IA, guides IA",
    ogTitle: "Explorons l'IA - Intelligence Artificielle",
    ogDescription: "Votre guide complet pour maîtriser l'intelligence artificielle",
    ogImage: "/pics/ia_explorer.jpg"
  };
};