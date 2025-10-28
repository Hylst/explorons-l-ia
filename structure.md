# IA Explorer — Structure et Logique de l’Application

## Catégorie et Finalité
- Catégorie: Éducation, Productivité, Utilitaires (cf. `public/manifest.json`)
- Finalité: Vulgarisation et formation à l’IA en français, avec cours, visualisations et ressources, accessible sur desktop et mobile.

## Vue d’ensemble
- Stack: React 18 + TypeScript, Vite, Tailwind CSS, Shadcn/UI
- Animations: Framer Motion
- Graphiques: Recharts
- Routage: React Router
- Données: Données statiques (`src/data/`), services utilitaires (`src/lib/`, `src/services/`), hooks personnalisés (`src/hooks/`)
- SEO: Données SEO structurées (`src/data/seoData.ts`), balises meta via `useDocumentMeta`, JSON-LD via `StructuredData.tsx`, Sitemap/Robots dans `public/`

## Structure du Projet
```
IA-Explorer/
├── public/                 # Assets et fichiers statiques (favicon, manifest, sitemap, robots)
├── src/
│   ├── components/         # Composants réutilisables et fonctionnels
│   │   ├── seo/            # SEO (StructuredData, Breadcrumbs)
│   │   ├── ui/             # UI Shadcn (boutons, inputs, etc.)
│   │   ├── resources/      # Ressources (cartes, listes, filtres)
│   │   ├── ml/             # Visualisations ML
│   │   ├── news/           # Actualités (flux)
│   │   ├── glossary/       # Glossaire
│   │   ├── timeline/       # Histoire/Chronologie
│   │   └── types-ia/       # Types d’IA
│   ├── pages/              # Pages principales (routing)
│   ├── hooks/              # Hooks (theme, document meta, audit, etc.)
│   ├── data/               # Données (SEO, contenu statique)
│   ├── lib/                # Utilitaires (formatters, helpers)
│   ├── utils/              # Outils (générateur de sitemap)
│   ├── layouts/            # Layouts globaux
│   └── main.tsx            # Entrée React
├── index.html              # Shell HTML, meta OG/Twitter, favicon
├── vite.config.ts          # Config Vite (plugin react-swc, alias @)
└── README.md, CHANGELOG.md # Documentation
```

## Routage et Navigation
- Entrée: `src/main.tsx` rend `App.tsx` (selon structure) dans `#root`
- Header/navigation: `src/components/Header.tsx` (menu desktop/mobile, toggle thème, liens)
- Pages typiques: Accueil, Les Bases, Types d’IA, Machine Learning, Deep Learning, Cas d’usage, Ressources, Éthique, Actualités, À propos
- React Router: routes déclarées dans `src/pages/` et/ou un routeur central (selon implémentation), navigation via `Link` et menus du `Header`

## Logique Applicative
- Hooks:
  - `useDocumentMeta`: génère titre, description, canonical, og/twitter meta
  - Hooks de thème et d’état (ex: `useTheme`, `useResourceAudit`)
- Services:
  - Audit des ressources (vérifications, CORS)
  - Intégration YouTube (ID, miniatures)
- Composants:
  - UI (Shadcn) + composants métier (resources, courses, glossary, etc.)
  - Visualisations interactives (Framer Motion, Recharts)

## SEO et Données Structurées
- `src/data/seoData.ts`: titres, descriptions, keywords, Open Graph, Twitter Card, structured data par page
- `src/components/seo/StructuredData.tsx`: JSON-LD (Organization, Website, Article, Course, Breadcrumb)
- `src/components/seo/Breadcrumbs.tsx`: BreadcrumbList schema
- `src/hooks/useDocumentMeta.ts`: balises meta (canonical, og, twitter)
- `public/sitemap.xml`: liste des pages à indexer
- `public/robots.txt`: directives pour crawlers (inclut `Sitemap`)
- Domaine: `https://ai-avenir.hylst.app`

## Dépendances clés
- Runtime: `react`, `react-dom`
- Build: `vite`, `@vitejs/plugin-react-swc`
- UI: `tailwindcss`, `shadcn/ui`, `lucide-react`
- Routage: `react-router-dom`
- Animations: `framer-motion`
- Graphiques: `recharts`
- État async: `@tanstack/react-query`
- Formulaires: `react-hook-form`, `@hookform/resolvers`, `zod`
- Divers: `clsx`, `class-variance-authority`

## Relations entre Composants et Fichiers
- `Header.tsx` lie navigation aux pages, gère thème
- Pages consomment données et utilitaires des dossiers `data/`, `lib/`, `services/`
- SEO:
  - `seoData.ts` → utilisé par `useDocumentMeta` et `StructuredData.tsx`
  - `Breadcrumbs.tsx` (JSON-LD) lié au routing des pages
  - `sitemapGenerator.ts` génère des entrées selon `baseUrl`
- Public:
  - `manifest.json` (PWA meta), `favicon.ico`, `robots.txt`, `sitemap.xml`
- Vite:
  - `vite.config.ts` gère alias `@` vers `src`, plugins (react-swc, lovable-tagger)

## Conventions et Style
- TypeScript partout pour robustesse
- Tailwind CSS avec `shadcn/ui` pour cohérence visuelle
- Alias `@` vers `src` pour imports propres
- Données SEO centralisées pour uniformité

## Sécurité et Performance
- CORS: limitations pour audit côté client
- Lazy loading recommandé pour pages lourdes
- Cache et mémoïsation avec React Query lorsque pertinent

## Tests et Qualité
- ESLint configuré
- Propositions: tests unitaires et intégration (non présents par défaut)

## Points d’attention
- Exécution `npm run dev` sous Windows peut être bloquée par l’exécution des scripts PowerShell (voir README — Dépannage)
- Garder cohérence des URLs de domaine (`ai-avenir.hylst.app`) dans SEO, sitemap, robots et structured data