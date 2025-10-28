// Générateur de sitemap dynamique

interface SitemapEntry {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

// Routes principales avec leurs métadonnées
const routes: SitemapEntry[] = [
  // Page d'accueil
  { url: '/', changefreq: 'daily', priority: 1.0 },
  
  // Pages principales
  { url: '/niveaux-ia', changefreq: 'weekly', priority: 0.9 },
  { url: '/types-ia', changefreq: 'weekly', priority: 0.9 },
  { url: '/machine-learning', changefreq: 'weekly', priority: 0.9 },
  { url: '/cas-usage', changefreq: 'weekly', priority: 0.9 },
  { url: '/ethique', changefreq: 'weekly', priority: 0.9 },
  { url: '/les-bases', changefreq: 'weekly', priority: 0.9 },
  { url: '/coder-avec-ia', changefreq: 'weekly', priority: 0.8 },
  
  // Pages de cours
  { url: '/cours/prompt-engineering', changefreq: 'weekly', priority: 0.8 },
  { url: '/cours/ia-creativite', changefreq: 'weekly', priority: 0.8 },
  { url: '/cours/ia-entreprise', changefreq: 'weekly', priority: 0.8 },
  { url: '/cours/ia-ethique', changefreq: 'weekly', priority: 0.8 },
  { url: '/cours/nlp-llm-comprehension', changefreq: 'weekly', priority: 0.8 },
  { url: '/cours/deep-learning-pratique', changefreq: 'weekly', priority: 0.8 },
  { url: '/cours/apprentissage-supervise', changefreq: 'weekly', priority: 0.8 },
  { url: '/cours/apprentissage-non-supervise', changefreq: 'weekly', priority: 0.8 },
  { url: '/cours/bases-mathematiques-ia', changefreq: 'weekly', priority: 0.8 },
  { url: '/cours/parametres-llm', changefreq: 'weekly', priority: 0.8 },
  { url: '/cours/chain-of-prompts', changefreq: 'weekly', priority: 0.8 },
  
  // Outils
  { url: '/calculateur-couts-ia', changefreq: 'monthly', priority: 0.7 },
  { url: '/generateur-prompts', changefreq: 'monthly', priority: 0.7 },
  { url: '/detecteur-contenu-ia', changefreq: 'monthly', priority: 0.7 },
  { url: '/test-api-ia', changefreq: 'monthly', priority: 0.7 },
  { url: '/simulateur-ia', changefreq: 'monthly', priority: 0.7 },
  { url: '/comparateur-modeles-ia', changefreq: 'weekly', priority: 0.7 },
  { url: '/optimiseur-workflow-ia', changefreq: 'monthly', priority: 0.7 },
  
  // Pages de ressources
  { url: '/ressources', changefreq: 'weekly', priority: 0.8 },
  { url: '/glossaire', changefreq: 'monthly', priority: 0.6 },
  { url: '/actualites', changefreq: 'daily', priority: 0.6 },
  
  // Pages spécialisées
  { url: '/histoire-ia', changefreq: 'monthly', priority: 0.6 },
  { url: '/ia-multimodale', changefreq: 'weekly', priority: 0.7 },
  { url: '/nlp-concepts', changefreq: 'weekly', priority: 0.7 },
  { url: '/premier-modele-ml', changefreq: 'monthly', priority: 0.6 },
  { url: '/utiliser-ia-travail', changefreq: 'weekly', priority: 0.7 },
  { url: '/organiser-services-ia', changefreq: 'monthly', priority: 0.6 },
  { url: '/utiliser-ia-quotidien', changefreq: 'weekly', priority: 0.7 },
  { url: '/ia-expliquee-aux-enfants', changefreq: 'monthly', priority: 0.6 },
  { url: '/deep-learning', changefreq: 'weekly', priority: 0.7 },
  { url: '/ia-marketing-vente', changefreq: 'weekly', priority: 0.6 },
  { url: '/ia-environnement', changefreq: 'monthly', priority: 0.5 },
  { url: '/ethique-gouvernance', changefreq: 'monthly', priority: 0.6 },
  { url: '/python-ia', changefreq: 'monthly', priority: 0.6 },
  
  // Pages légales
  { url: '/mentions-legales', changefreq: 'yearly', priority: 0.3 },
  { url: '/confidentialite', changefreq: 'yearly', priority: 0.3 },
  { url: '/about', changefreq: 'monthly', priority: 0.4 }
];

/**
 * Génère le XML du sitemap
 */
export const generateSitemapXML = (): string => {
  const baseUrl = 'https://ai-avenir.hylst.app';
  const now = new Date().toISOString().split('T')[0]; // Format YYYY-MM-DD
  
  const sitemapEntries = routes.map(route => {
    const url = `${baseUrl}${route.url}`;
    const lastmod = route.lastmod || now;
    const changefreq = route.changefreq || 'weekly';
    const priority = route.priority || 0.5;
    
    return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('\n');
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>`;
};

/**
 * Génère et télécharge le sitemap
 */
export const downloadSitemap = (): void => {
  const sitemapXML = generateSitemapXML();
  const blob = new Blob([sitemapXML], { type: 'application/xml' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = 'sitemap.xml';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  URL.revokeObjectURL(url);
};

/**
 * Sauvegarde le sitemap dans le dossier public (simulation)
 */
export const generateSitemapForProduction = (): string => {
  return generateSitemapXML();
};

export { routes };