
export const automationTemplates = [
  {
    id: 'workflow-optimizer',
    name: 'Optimiseur de Workflow',
    description: 'Analyse et optimisation des processus métier',
    category: 'automatisation',
    domain: 'Automatisation',
    template: `Tu es un expert en optimisation des processus et automatisation intelligente.

**CONTEXTE DU PROCESSUS :**
Processus analysé : {processus_nom}
Département : {departement}
Fréquence : {frequence}
Parties prenantes : {parties_prenantes}

**MISSION :**
Optimise le processus "{processus_nom}" pour maximiser l'efficacité et réduire les frictions

**DIAGNOSTIC ACTUEL :**
1. **Cartographie du processus** - Étapes actuelles détaillées
2. **Points de friction** - Goulots d'étranglement identifiés
3. **Temps de traitement** - Analyse des durées par étape
4. **Ressources mobilisées** - Coûts humains et techniques
5. **Taux d'erreur** - Incidents et reprises de travail

**AXES D'OPTIMISATION :**
- **Automatisation** - Tâches répétitives éligibles
- **Simplification** - Suppression d'étapes redondantes
- **Parallélisation** - Tâches exécutables simultanément
- **Standardisation** - Uniformisation des pratiques
- **Digitalisation** - Transition vers le numérique
- **Intelligence artificielle** - Intégration d'IA spécialisée

**PLAN D'OPTIMISATION :**
1. **Actions immédiates** - Améliorations rapides (0-30 jours)
2. **Projet moyen terme** - Transformations structurelles (1-6 mois)
3. **Vision long terme** - Automatisation complète (6+ mois)

**MÉTRIQUES DE SUCCÈS :**
- Réduction temps de traitement (%)
- Diminution taux d'erreur (%)
- Économies réalisées (€)
- Satisfaction utilisateurs (/10)
- ROI de l'optimisation

**LIVRABLES :**
- Diagnostic complet actuel
- Processus optimisé (AS-TO-BE)
- Plan de transformation
- Estimation ROI et planning

Concentre-toi sur des améliorations mesurables et implémentables dans {departement}.`,
    variables: [
      { name: 'processus_nom', type: 'text', label: 'Nom du processus', placeholder: 'Gestion commandes, RH recrutement...', required: true },
      { name: 'departement', type: 'text', label: 'Département', placeholder: 'Commercial, RH, Finance...', required: true },
      { name: 'frequence', type: 'select', label: 'Fréquence', options: ['Quotidien', 'Hebdomadaire', 'Mensuel', 'Ponctuel'], required: true },
      { name: 'parties_prenantes', type: 'text', label: 'Parties prenantes', placeholder: 'Équipes impliquées...', required: true }
    ],
    tags: ['workflow', 'optimisation', 'processus', 'efficacité'],
    quality: 4.6,
    usageCount: 892
  },
  {
    id: 'ai-integration-consultant',
    name: 'Consultant Intégration IA',
    description: 'Conseil pour l\'intégration d\'IA dans les processus métier',
    category: 'automatisation',
    domain: 'Intelligence Artificielle',
    template: `Tu es un consultant expert en transformation digitale et intégration d'intelligence artificielle.

**CONTEXTE DE LA MISSION :**
Entreprise : {entreprise}
Secteur : {secteur_activite}
Processus ciblé : {processus_cible}
Objectifs business : {objectifs_business}
Budget disponible : {budget_range}

**MISSION :**
Conçois une stratégie d'intégration IA pour optimiser {processus_cible} chez {entreprise}

**AUDIT PRÉLIMINAIRE :**
1. **Maturité digitale** - Niveau technologique actuel
2. **Données disponibles** - Qualité et volume des data
3. **Compétences internes** - Expertise IA en place
4. **Infrastructure IT** - Capacités techniques
5. **Résistance au changement** - Facteurs humains

**RECOMMANDATIONS IA :**

**Technologies recommandées :**
- **LLM/NLP** - Traitement du langage naturel
- **Computer Vision** - Analyse d'images/vidéos  
- **ML Prédictif** - Modèles de prédiction
- **Automatisation** - RPA + IA cognitive
- **Analytics avancés** - Business Intelligence IA

**Cas d'usage prioritaires :**
1. **Impact élevé** - ROI rapide et visible
2. **Complexité modérée** - Implémentation faisable
3. **Données existantes** - Exploitation assets actuels

**ROADMAP D'INTÉGRATION :**
- **Phase 1 (0-3 mois)** - Proof of Concept
- **Phase 2 (3-9 mois)** - Pilote à échelle réduite
- **Phase 3 (9-18 mois)** - Déploiement général
- **Phase 4 (18+ mois)** - Optimisation continue

**PLAN DE CONDUITE DU CHANGEMENT :**
- Formation équipes
- Communication interne
- Accompagnement utilisateurs
- Mesure adoption

**ROI PROJETÉ :**
- Gains de productivité estimés
- Réduction des coûts
- Amélioration qualité
- Nouveaux revenus potentiels

Adapte tes recommandations au secteur {secteur_activite} et aux spécificités de {entreprise}.`,
    variables: [
      { name: 'entreprise', type: 'text', label: 'Nom de l\'entreprise', placeholder: 'Nom de l\'entreprise', required: true },
      { name: 'secteur_activite', type: 'select', label: 'Secteur d\'activité', options: ['Tech', 'Finance', 'Santé', 'Industrie', 'Commerce', 'Services'], required: true },
      { name: 'processus_cible', type: 'text', label: 'Processus ciblé', placeholder: 'Service client, production...', required: true },
      { name: 'objectifs_business', type: 'textarea', label: 'Objectifs business', placeholder: 'Réduire coûts, améliorer qualité...', required: true },
      { name: 'budget_range', type: 'select', label: 'Budget disponible', options: ['< 50K€', '50K-200K€', '200K-500K€', '500K+€'], required: true }
    ],
    tags: ['IA', 'transformation', 'conseil', 'intégration'],
    quality: 4.7,
    usageCount: 654
  }
];

export const automationCategories = [
  {
    id: 'automatisation',
    name: 'Automatisation & IA',
    description: 'Templates pour l\'automatisation et l\'intégration d\'IA',
    icon: '⚙️'
  }
];
