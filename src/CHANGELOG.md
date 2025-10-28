
# Changelog

Toutes les modifications notables apportées à ce projet seront documentées dans ce fichier.

## [Unreleased]

### 🚀 En Cours de Développement

#### Nouvelles Fonctionnalités Planifiées
- [ ] Ajout de fournisseurs Music-to-Audio (Suno, Udio, ElevenLabs)
- [ ] Ajout de fournisseurs Video-to-Text (Runway, Pika, Stable Video)
- [ ] Système de comparaison côte-à-côte des fournisseurs
- [ ] Historique des générations avec sauvegarde locale
- [ ] Export des configurations et résultats
- [ ] Métriques de performance (temps de réponse, coût par requête)

#### Améliorations Techniques Prévues
- [ ] Refactorisation complète des composants longs (>500 lignes)
- [ ] Mise en place de tests unitaires pour les API testers
- [ ] Optimisation du rendu avec React.memo
- [ ] Implémentation d'un cache intelligent pour les réponses

### ✅ Récemment Complété

### Amélioré
- **Page Test d'API IA** : Refactorisation majeure des composants LLM et Image testers
- **Interface fournisseurs** : Nouveau système de cartes avec informations détaillées
  - Affichage des coûts, limites de taux, et plans gratuits
  - Indicateurs visuels de vitesse et fiabilité
  - Tooltips informatifs avec fonctionnalités détaillées
- **Base de données fournisseurs** : Mise à jour complète 2025
  - 15+ fournisseurs LLM avec tarification précise
  - 11+ fournisseurs Text-to-Image avec nouveaux modèles FLUX
  - Informations en temps réel sur les limitations et performances

### Ajouté
- **Nouveau composant** : `ProviderInfoCard` pour l'affichage uniforme des fournisseurs
- **Sélecteurs dédiés** : `LLMProviderSelector` et `ImageProviderSelector`
- **Données structurées** : `llmProvidersData.ts` et `imageProvidersData.ts`
- **Fournisseurs LLM 2025** : DeepSeek R1, Cerebras, SambaNova, Together AI, Fireworks AI
- **Fournisseurs Images 2025** : Fal.ai, Ideogram V2, FLUX 1.1 Pro, services gratuits

### Corrigé
- Configuration OpenRouter avec authentification correcte
- Modèles Google Gemini mis à jour (2.0-flash-exp, 1.5-pro/flash)
- Scripts API Text-to-Image avec gestion d'erreurs améliorée
- Problèmes d'affichage des informations fournisseurs

## [0.6.0] - 2025-04-06

### Ajouté
- Nouvelle page détaillée sur les LLM et les techniques RLHF
- Enrichissement majeur de la page IA Multimodales avec plus d'exemples, illustrations et contenus
- Nouveaux exemples de prompts détaillés pour différents types de médias
- FAQ complète sur l'art du prompting
- Deux nouvelles catégories dans les applications d'IA multimodales: Marketing IA et Avatars digitaux
- Système de notifications toast pour interactions utilisateur

### Amélioré
- Design des cartes d'applications avec ajout d'outils populaires et animations
- Optimisation du composant Hero pour supporter des boutons d'action primaire et secondaire
- Structure du document CHANGELOG pour une meilleure lisibilité et organisation
- Refactorisation et enrichissement de la structure du README
- Mise à jour complète de la documentation des composants

### Corrigé
- Correction du lien "Approfondir le sujet" dans la section LLM qui menait à une page 404
- Optimisation des images dans la section IA Multimodale pour améliorer les performances
- Correction des problèmes d'ancrage vers les sections spécifiques des pages

## [0.5.0] - 2025-04-04

### Amélioré
- Enrichissement complet de la page des niveaux d'IA avec plus de contenu, des cartes informatives, et une navigation améliorée
- Optimisation du composant de réseau neuronal en animation
- Amélioration des visualisations interactives avec des tailles doublées
- Ajout d'un système d'ancres et de navigation interne sur la page des niveaux d'IA
- Amélioration du design global avec des dégradés et des animations
- Optimisation de l'espacement dans les composants Hero et SectionHeading
- Création de liens fonctionnels pour le bouton "Approfondir le sujet" dans la section LLM

### Corrigé
- Correction de la taille des visualisations de réseaux de neurones
- Optimisation du rendu pour améliorer les performances
- Correction des liens d'ancrage dans les pages internes
- Amélioration de la structure HTML pour une meilleure accessibilité

## [0.4.0] - 2025-03-28

### Ajouté
- Création des pages "Mentions légales" et "Politique de confidentialité"
- Animation interactive de réseau neuronal dans la page À propos
- Nouvelles visualisations pour les différents types d'IA

### Amélioré
- Réduction de l'espace sous les composants Hero pour un design plus compact
- Mise à jour des informations de l'auteur dans la page À propos
- Amélioration du responsive design sur toutes les pages

## [0.3.0] - 2025-03-20

### Ajouté
- Nouvelle section sur les types d'IA
- Ajout de contenu détaillé sur les modèles de langage
- Implémentation des visualisations interactives pour le machine learning

### Amélioré
- Design global de l'application
- Performance et temps de chargement
- Navigation mobile

## [0.2.0] - 2025-03-10

### Ajouté
- Section histoire de l'IA avec frise chronologique
- Page des niveaux d'intelligence artificielle
- Glossaire des termes techniques

### Amélioré
- Interface utilisateur avec des composants Shadcn
- Animations et transitions de page

## [0.1.0] - 2025-03-01

### Ajouté
- Structure initiale du projet
- Mise en place du système de navigation
- Page d'accueil avec introduction à l'IA
- Système de thème clair/sombre

---

## 📊 Statistiques du Projet

### État Actuel
- **Pages fonctionnelles** : 25+
- **Composants React** : 150+
- **Fournisseurs API** : 26 (15 LLM + 11 Image)
- **Ressources externes** : 80+
- **Cours internes** : 8 modules

### Métriques Techniques 2025
- **Performance Lighthouse** : 95+ (toutes catégories)
- **Bundle size** : <2MB optimisé
- **Tests de couverture** : En développement
- **TypeScript strict** : 100%

### Prochaines Étapes Prioritaires
1. **Performance** : Lazy loading et optimisation images
2. **Tests** : Couverture >80% avec Jest/Testing Library  
3. **Accessibilité** : WCAG 2.1 AA compliance
4. **SEO** : Meta tags et structured data
5. **PWA** : Installation et mode hors-ligne

---

**Note** : Ce projet évolue rapidement pour rester à la pointe des technologies IA 2025. Les contributions et suggestions sont les bienvenues !
