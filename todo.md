# IA Explorer — TODO & Améliorations

## Contenu & Pédagogie
- Enrichir la section Histoire avec frises détaillées et repères clés
- Ajouter des études de cas sectorielles (santé, finance, industrie)
- Étendre les cours (NLP avancé, Vision par ordinateur, Reinforcement Learning)
- Créer des quiz par section avec score et feedback
- Rédiger une FAQ IA (questions courantes, mythes vs réalités)

## UX/UI
- Améliorer la cohérence des icônes (migration complète vers `lucide-react`)
- Ajouter un mode “Lecture” pour les articles longs
- Implémenter la recherche globale (CMDK) sur contenus et glossaire
- Ajouter des breadcrumbs visibles et liens rapides
- Optimiser les pages lourdes avec lazy loading et skeletons

## SEO & Découverte
- Ajouter des FAQPage Schema pour les sections clés
- Générer un sitemap dynamique à partir des routes
- Vérifier canonicals sur toutes les pages et pages d’articles
- Ajouter `alternate` hreflang si traduction future (EN)

## Accessibilité
- Vérifier ARIA et focus management sur les composants interactifs
- Adapter les contrastes couleur pour WCAG AA/AAA
- Navigation clavier complète sur menus et modales

## Technique & Performance
- Ajouter tests unitaires (components, hooks) et d’intégration (routing)
- Mettre en place analytics (plausible/matomo) respectueux de la vie privée
- Implémenter une persistance (Supabase) pour ressources et signalements
- Déporter l’audit des liens côté serveur (éviter limites CORS)
- Activer code-splitting fin sur visualisations

## PWA & Mobile
- Finaliser PWA (service worker, cache stratégique)
- Ajouter icônes adaptatives et splash screens
- Tester la performance Lighthouse sur mobile (< 1.5s LCP)

## Communauté & Contribution
- Modèle d’issue GitHub (bug, contenu, suggestion)
- Guide de contribution (structure, conventions, PR checklist)
- Page “Crédits” et partenariats

## Sécurité
- Audit des dépendances et mises à jour régulières
- Vérification des ressources externes (malicieux/obsolètes)
- Politique de confidentialité détaillée et RGPD

## Déploiement
- Script CI pour build/test/lint
- Préparation déploiement Vercel/Netlify avec preview

## Priorités immédiates (Semaine)
- Sitemap dynamique depuis routes + baseUrl configurable (prod/staging)
- Tests unitaires pour hooks (useDocumentMeta) et composants SEO (StructuredData, Breadcrumbs)
- Accessibilité: focus management, ARIA roles audit, contrastes WCAG AA
- PWA: icônes PNG 192/512, cache `/assets` Vite, stratégie offline

## Audit — Incohérences et améliorations proposées
- Service Worker: chemins `/static/*` à remplacer par `/assets/*`, ajouter `activate` pour cleanup, versioning.
- Canonical/og:url: base hardcodée `ai-avenir.hylst.app`; exposer env `VITE_SITE_URL` et fallback `window.location.origin`; propager à sitemap/robots.
- Manifest icons: ajouter PNG 192x192 et 512x512 et `purpose: maskable`; conserver SVG pour UI.
- JSON-LD logo: utiliser `ImageObject` vers un PNG (512x512), héberger `logo.png` et référencer.
- Index meta: éviter doublons OG/Twitter avec `useDocumentMeta`; confirmer que la logique remplace les existants; sinon alléger metas statiques.
- AnimatedLogo accessibilité: retirer `aria-hidden` de l’image ou la rendre décorative correctement; alt bref et pertinent.
- Robots/sitemap sur Vercel: domaine preview différent; automatiser via env la génération du `baseUrl`.
- Lighthouse: vérifier PWA installability, performance (LCP < 1.5s), best practices.
- Cache images: ajouter `Cache-Control` sur `/pics/*` via `vercel.json` headers.
- Script externe `gptengineer`: retirer en production si non nécessaire.
- Favicon/mask-icon: index.html inclut désormais `/logo.svg` et `/favicon.ico`; ajouter icônes PNG multi-tailles (192/512) pour Android/iOS splash.
- Erreur sur `sitemap.xml` preview: stack trace TypeError lié à script tiers (probablement gptengineer ou injection); vérifier chargement uniquement sur pages HTML et exclure ressources XML/JSON.
- Meta canonical par défaut: `useDocumentMeta` fallback sur `https://ai-avenir.hylst.app`; remplacer par env dynamique pour preview/déploiements.
- Service worker stratégie: adopter cache-first sur `/assets` et network-first avec fallback pour pages; vérifier purge des anciens caches et respect des CORS.