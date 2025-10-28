
# Changelog - IA Explorer

## Version Actuelle - Janvier 2025

### ✅ Fonctionnalités Implémentées

#### Structure de l'Application
- **Architecture React/TypeScript** avec routage React Router
- **Design System** : Tailwind CSS + Shadcn UI
- **Thèmes** : Support mode sombre/clair
- **Responsive** : Interface adaptative mobile/desktop

#### Pages et Sections Principales
- **Accueil** (`/`) : Introduction et navigation
- **Les Bases** (`/les-bases`) : Concepts fondamentaux de l'IA
- **Types d'IA** (`/types-ia`) : Classification des différents types d'IA
- **Machine Learning** (`/machine-learning`) : Cours et visualisations ML
- **Deep Learning** (`/deep-learning`) : Concepts avancés
- **Cas d'Usage** (`/cas-usage`) : Applications pratiques
- **Ressources** (`/ressources`) : Centre de ressources externes
- **Cours Internes** : Modules de formation intégrés
- **Éthique** (`/ethique`) : Considérations éthiques de l'IA
- **Actualités** (`/actualites`) : Veille technologique
- **Chat IA** : Assistant conversationnel intégré

#### Système de Ressources
- **Base de données complète** : 80+ ressources catégorisées
- **Filtrage avancé** : Par type, année, sujet, langue
- **Onglets organisés** : Toutes, Cours, Publications, Outils, Vidéos
- **Miniatures YouTube** : Intégration automatique pour les vidéos
- **Système d'audit** : Vérification automatique des liens
- **Signalement utilisateur** : Interface de rapport de problèmes
- **Score qualité** : Évaluation automatique des ressources

#### Fonctionnalités Techniques
- **Service YouTube** : Extraction automatique des IDs et miniatures
- **Service d'audit** : Vérification périodique des liens (avec gestion CORS)
- **Hooks personnalisés** : `useResourceAudit`, `useTheme`, etc.
- **Composants réutilisables** : Cards, dialogs, formulaires
- **Gestion d'état** : React Query pour les données asynchrones

### 🔧 Corrections Récentes

#### Problèmes Résolus
- **Onglet Cours manquant** : Restauré dans la section ressources
- **Audit des liens défaillant** : Correction du service avec gestion CORS appropriée
- **Miniatures YouTube** : Implémentation complète avec fallback
- **Positionnement du contrôle qualité** : Déplacé en bas de page

#### Améliorations Techniques
- **Gestion d'erreurs améliorée** : Meilleure classification des erreurs réseau
- **Performance optimisée** : Réduction des requêtes avec cache intelligent
- **Interface utilisateur** : Indicateurs visuels de qualité des ressources

### 🚧 Points d'Attention et Améliorations Futures

#### Limitations Actuelles
- **CORS Limitations** : L'audit des liens côté client est limité par les politiques CORS
- **Validation de contenu** : Fonctionnalité limitée sans service backend
- **Cache local** : Stockage temporaire en mémoire seulement

#### Recommandations d'Amélioration
1. **Service Backend** : Implémenter un service serveur pour l'audit complet des liens
2. **Base de données** : Migration vers une solution persistante (Supabase configuré)
3. **Analytics** : Ajout de métriques d'utilisation
4. **PWA** : Transformation en Progressive Web App
5. **Tests** : Implémentation de tests unitaires et d'intégration

#### Structure des Fichiers
```
src/
├── components/          # Composants réutilisables
│   ├── ui/             # Composants UI de base (Shadcn)
│   ├── resources/      # Composants spécifiques aux ressources
│   ├── courses/        # Composants des cours
│   └── ...
├── pages/              # Pages de l'application
├── services/           # Services métier
├── hooks/              # Hooks personnalisés
├── data/               # Données statiques
└── lib/                # Utilitaires
```

### 📊 Métriques de l'Application
- **Pages** : 20+ pages fonctionnelles
- **Composants** : 100+ composants React
- **Ressources** : 80+ ressources externes référencées
- **Cours internes** : 8 modules de formation
- **Langues** : Français (principal), ressources multilingues

### 🔗 Liens et Dépendances
- **React** 18.3.1 + **TypeScript**
- **Vite** pour le build
- **Tailwind CSS** + **Shadcn UI**
- **React Router** pour la navigation
- **React Query** pour la gestion d'état
- **Framer Motion** pour les animations
- **Supabase** (configuré mais non utilisé actuellement)

---

### 📝 Changements Récents (Domaine, SEO, Docs)
- Remplacement de toutes les occurrences `ai-avenir.lovable.app` → `ai-avenir.hylst.app` (SEO, structured data, sitemap, robots, canonical)
- Mise à jour de `index.html` (auteur, og:image/twitter:image, favicon, twitter:site)
- Mise à jour de `src/data/seoData.ts`, `StructuredData.tsx`, `useDocumentMeta.ts`, `Breadcrumbs.tsx`, `public/sitemap.xml`, `public/robots.txt`, `src/utils/sitemapGenerator.ts`
- Ajout d’un bloc de **dépannage Windows** dans `README.md` pour l’erreur PowerShell `PSSecurityException`
- Mise à jour de `.gitignore` (env, caches, coverage)
- Création de `structure.md` décrivant l’architecture, le routage et les relations entre composants

### ❓ Développement local — Pourquoi `npm run dev` peut échouer
- Sous Windows, PowerShell peut bloquer l’exécution de `npm.ps1`. Utiliser `npm.cmd run dev`, `npx vite`, ou ajuster la politique via `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`.

**Note** : Cette application est un projet éducatif visant à démocratiser l'accès aux connaissances en intelligence artificielle en français.
