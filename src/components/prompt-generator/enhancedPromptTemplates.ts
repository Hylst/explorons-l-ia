
import { PromptTemplate, PromptVariable, PromptCategory } from './promptTemplatesData';

// Nouvelles catégories enrichies
export const enhancedPromptCategories: PromptCategory[] = [
  {
    id: 'writing',
    name: 'Rédaction',
    description: 'Templates pour la création de contenu écrit professionnel',
    icon: 'PenTool'
  },
  {
    id: 'analysis',
    name: 'Analyse',
    description: 'Templates pour l\'analyse et la synthèse de données',
    icon: 'BarChart3'
  },
  {
    id: 'coding',
    name: 'Programmation',
    description: 'Templates pour l\'assistance au développement logiciel',
    icon: 'Code'
  },
  {
    id: 'creative',
    name: 'Créatif',
    description: 'Templates pour la création artistique et l\'innovation',
    icon: 'Palette'
  },
  {
    id: 'business',
    name: 'Business',
    description: 'Templates pour les besoins professionnels et stratégiques',
    icon: 'Briefcase'
  },
  {
    id: 'education',
    name: 'Éducation',
    description: 'Templates pour l\'enseignement et la formation',
    icon: 'GraduationCap'
  },
  {
    id: 'marketing',
    name: 'Marketing',
    description: 'Templates pour la communication et la promotion',
    icon: 'Megaphone'
  },
  {
    id: 'research',
    name: 'Recherche',
    description: 'Templates pour la recherche et l\'investigation',
    icon: 'Search'
  }
];

// Templates enrichis avec de nouveaux exemples
export const enhancedPromptTemplates: PromptTemplate[] = [
  {
    id: 'email-campaign',
    name: 'Campagne Email Marketing',
    category: 'marketing',
    domain: 'Marketing Digital',
    description: 'Génère une campagne email complète avec sujet accrocheur et contenu personnalisé',
    template: `Tu es un expert en email marketing. Crée une campagne email complète pour : "{campaign_goal}".

**Détails de la campagne :**
- Public cible : {target_audience}
- Produit/Service : {product_service}
- Ton souhaité : {tone}
- Objectif principal : {primary_objective}

**Livrables attendus :**

1. **OBJET DE L'EMAIL** (5 variations)
   - Version principale
   - Version urgence
   - Version curiosité
   - Version bénéfice
   - Version personnalisée

2. **CONTENU DE L'EMAIL**
   - Hook d'ouverture percutant
   - Corps du message structuré
   - Call-to-action clair et incitatif
   - Signature professionnelle

3. **STRATÉGIE DE SUIVI**
   - Email de relance J+3
   - Email de dernière chance J+7

**Contraintes :**
- Longueur max : {max_length} mots
- Inclure : {must_include}
- Éviter : {avoid}

Optimise pour un taux d'ouverture élevé et une conversion maximale.`,
    variables: [
      { name: 'campaign_goal', type: 'text', label: 'Objectif de campagne', placeholder: 'Lancer un nouveau produit, fidéliser les clients...', required: true },
      { name: 'target_audience', type: 'select', label: 'Public cible', options: ['Particuliers 18-35 ans', 'Particuliers 35-55 ans', 'Professionnels B2B', 'Entrepreneurs', 'Étudiants'], required: true },
      { name: 'product_service', type: 'text', label: 'Produit/Service', placeholder: 'Formation en ligne, logiciel SaaS...', required: true },
      { name: 'tone', type: 'select', label: 'Ton', options: ['Professionnel', 'Amical', 'Urgent', 'Décontracté', 'Premium'], required: true },
      { name: 'primary_objective', type: 'select', label: 'Objectif principal', options: ['Vendre', 'Informer', 'Fidéliser', 'Recruter', 'Sensibiliser'], required: true },
      { name: 'max_length', type: 'select', label: 'Longueur max', options: ['200', '300', '500', '800'], required: true, defaultValue: '300' },
      { name: 'must_include', type: 'textarea', label: 'Éléments à inclure', placeholder: 'Promotion spéciale, témoignage client...', required: false },
      { name: 'avoid', type: 'textarea', label: 'Éléments à éviter', placeholder: 'Mots spam, termes techniques...', required: false }
    ],
    tags: ['Email', 'Marketing', 'Conversion', 'Communication'],
    quality: 4.7,
    usageCount: 2150
  },
  {
    id: 'api-documentation',
    name: 'Documentation API',
    category: 'coding',
    domain: 'Développement',
    description: 'Génère une documentation API complète et professionnelle',
    template: `Tu es un expert en documentation technique. Crée une documentation complète pour l'API : "{api_name}".

**Informations de base :**
- Type d'API : {api_type}
- Langage/Framework : {tech_stack}
- Audience : {audience_level}
- Format de réponse : {response_format}

**Structure de la documentation :**

## 1. Introduction
- Description générale de l'API
- Cas d'usage principaux
- Prérequis techniques

## 2. Authentification
- Méthode d'authentification : {auth_method}
- Gestion des clés API
- Exemples de headers

## 3. Endpoints principaux

Pour chaque endpoint :
- URL et méthode HTTP
- Paramètres requis/optionnels
- Exemples de requêtes
- Exemples de réponses
- Codes d'erreur possibles

## 4. Exemples d'intégration
- Code d'exemple en {primary_language}
- Gestion des erreurs
- Bonnes pratiques

## 5. Limites et quotas
- Rate limiting
- Pagination
- Recommandations de performance

Endpoints à documenter : {endpoints_list}
Fonctionnalités spéciales : {special_features}`,
    variables: [
      { name: 'api_name', type: 'text', label: 'Nom de l\'API', placeholder: 'User Management API, Payment Gateway...', required: true },
      { name: 'api_type', type: 'select', label: 'Type d\'API', options: ['REST', 'GraphQL', 'WebSocket', 'gRPC'], required: true },
      { name: 'tech_stack', type: 'select', label: 'Stack technique', options: ['Node.js/Express', 'Python/Django', 'Java/Spring', 'C#/.NET', 'PHP/Laravel', 'Go'], required: true },
      { name: 'audience_level', type: 'select', label: 'Niveau audience', options: ['Développeur débutant', 'Développeur intermédiaire', 'Développeur expert', 'Mixte'], required: true },
      { name: 'response_format', type: 'select', label: 'Format réponse', options: ['JSON', 'XML', 'Protobuf', 'Mixte'], required: true },
      { name: 'auth_method', type: 'select', label: 'Authentification', options: ['API Key', 'OAuth 2.0', 'JWT', 'Basic Auth', 'Custom'], required: true },
      { name: 'primary_language', type: 'select', label: 'Langage principal exemples', options: ['JavaScript', 'Python', 'cURL', 'Java', 'C#', 'PHP'], required: true },
      { name: 'endpoints_list', type: 'textarea', label: 'Liste des endpoints', placeholder: 'GET /users, POST /users, PUT /users/{id}...', required: true },
      { name: 'special_features', type: 'textarea', label: 'Fonctionnalités spéciales', placeholder: 'Webhooks, pagination, filtres avancés...', required: false }
    ],
    tags: ['API', 'Documentation', 'Développement', 'Technique'],
    quality: 4.8,
    usageCount: 1320
  },
  {
    id: 'social-media-strategy',
    name: 'Stratégie Réseaux Sociaux',
    category: 'marketing',
    domain: 'Marketing Digital',
    description: 'Élabore une stratégie complète pour les réseaux sociaux',
    template: `Tu es un expert en marketing digital et réseaux sociaux. Élabore une stratégie complète pour : "{brand_name}".

**Contexte :**
- Secteur d'activité : {industry}
- Objectifs principaux : {main_objectives}
- Budget mensuel : {monthly_budget}
- Équipe disponible : {team_size}
- Plateformes prioritaires : {priority_platforms}

**Livrable : Stratégie 360° des réseaux sociaux**

## 1. ANALYSE DE POSITIONNEMENT
- Analyse concurrentielle (3 concurrents principaux)
- Opportunités de différenciation
- Ton de voix recommandé : {brand_voice}

## 2. STRATÉGIE DE CONTENU
### Planning éditorial mensuel :
- Répartition par type de contenu
- Fréquence de publication par plateforme
- Calendrier thématique

### Mix de contenu :
- {content_mix_educational}% éducatif/informatif
- {content_mix_promotional}% promotionnel
- {content_mix_entertainment}% divertissement
- {content_mix_ugc}% contenu utilisateur

## 3. PLAN D'ENGAGEMENT
- Stratégies d'interaction
- Gestion de communauté
- Collaborations et partenariats

## 4. MESURE DE PERFORMANCE
- KPIs prioritaires
- Outils de mesure recommandés
- Reporting mensuel

Audience cible détaillée : {target_demographic}
Contraintes spéciales : {constraints}`,
    variables: [
      { name: 'brand_name', type: 'text', label: 'Nom de la marque', placeholder: 'Mon Entreprise, StartupTech...', required: true },
      { name: 'industry', type: 'select', label: 'Secteur', options: ['Tech/Digital', 'E-commerce', 'Santé/Bien-être', 'Éducation', 'Finance', 'Mode/Lifestyle', 'B2B Services', 'Restauration', 'Autres'], required: true },
      { name: 'main_objectives', type: 'select', label: 'Objectifs principaux', options: ['Notoriété de marque', 'Génération de leads', 'Ventes directes', 'Fidélisation client', 'Recrutement', 'Thought leadership'], required: true },
      { name: 'monthly_budget', type: 'select', label: 'Budget mensuel', options: ['< 500€', '500-1500€', '1500-5000€', '5000-15000€', '> 15000€'], required: true },
      { name: 'team_size', type: 'select', label: 'Taille équipe', options: ['1 personne (moi)', '2-3 personnes', '4-10 personnes', 'Équipe dédiée', 'Agence externe'], required: true },
      { name: 'priority_platforms', type: 'select', label: 'Plateformes prioritaires', options: ['LinkedIn + Instagram', 'Facebook + Instagram', 'TikTok + Instagram', 'LinkedIn + Twitter', 'YouTube + Instagram', 'Toutes plateformes'], required: true },
      { name: 'brand_voice', type: 'select', label: 'Ton de marque', options: ['Professionnel expert', 'Accessible et humain', 'Innovant et disruptif', 'Premium et sophistiqué', 'Jeune et dynamique'], required: true },
      { name: 'content_mix_educational', type: 'select', label: '% Contenu éducatif', options: ['20', '30', '40', '50', '60'], required: true, defaultValue: '40' },
      { name: 'content_mix_promotional', type: 'select', label: '% Contenu promotionnel', options: ['10', '15', '20', '25', '30'], required: true, defaultValue: '20' },
      { name: 'content_mix_entertainment', type: 'select', label: '% Divertissement', options: ['15', '20', '25', '30'], required: true, defaultValue: '25' },
      { name: 'content_mix_ugc', type: 'select', label: '% Contenu utilisateur', options: ['10', '15', '20', '25'], required: true, defaultValue: '15' },
      { name: 'target_demographic', type: 'textarea', label: 'Démographie cible', placeholder: 'Age, genre, intérêts, comportements...', required: true },
      { name: 'constraints', type: 'textarea', label: 'Contraintes spéciales', placeholder: 'Secteur réglementé, budget limité...', required: false }
    ],
    tags: ['Réseaux sociaux', 'Stratégie', 'Marketing', 'Digital'],
    quality: 4.6,
    usageCount: 1890
  },
  {
    id: 'research-methodology',
    name: 'Méthodologie de Recherche',
    category: 'research',
    domain: 'Recherche Académique',
    description: 'Conçoit une méthodologie de recherche rigoureuse et structurée',
    template: `Tu es un expert en méthodologie de recherche académique. Élabore une méthodologie complète pour le sujet : "{research_topic}".

**Cadre de recherche :**
- Discipline : {academic_field}
- Type de recherche : {research_type}
- Niveau académique : {academic_level}
- Durée prévue : {duration}
- Ressources disponibles : {available_resources}

**MÉTHODOLOGIE DE RECHERCHE COMPLÈTE**

## 1. PROBLÉMATIQUE ET CONTEXTE
### Question de recherche principale
### Questions secondaires
### Justification de l'étude
### État de l'art (structure)

## 2. CADRE THÉORIQUE
### Théories mobilisées
### Concepts clés à définir
### Modèle conceptuel

## 3. HYPOTHÈSES DE RECHERCHE
### Hypothèse principale : {main_hypothesis}
### Hypothèses secondaires
### Variables dépendantes/indépendantes

## 4. MÉTHODOLOGIE
### Approche : {methodology_approach}
### Design de recherche
### Population et échantillonnage
- Critères d'inclusion/exclusion
- Taille d'échantillon recommandée
- Méthode d'échantillonnage

## 5. COLLECTE DE DONNÉES
### Méthodes de collecte : {data_collection_methods}
### Instruments de mesure
### Protocole de collecte
### Considérations éthiques

## 6. ANALYSE DES DONNÉES
### Méthodes d'analyse quantitative/qualitative
### Logiciels recommandés
### Plan d'analyse

## 7. LIMITES ET BIAIS POTENTIELS
### Identification des biais
### Stratégies d'atténuation

Contraintes spécifiques : {specific_constraints}
Résultats attendus : {expected_outcomes}`,
    variables: [
      { name: 'research_topic', type: 'text', label: 'Sujet de recherche', placeholder: 'Impact de l\'IA sur l\'emploi, efficacité pédagogique...', required: true },
      { name: 'academic_field', type: 'select', label: 'Discipline', options: ['Sciences sociales', 'Psychologie', 'Économie', 'Informatique', 'Éducation', 'Management', 'Santé publique', 'Sciences politiques', 'Autres'], required: true },
      { name: 'research_type', type: 'select', label: 'Type de recherche', options: ['Exploratoire', 'Descriptive', 'Explicative', 'Expérimentale', 'Mixte'], required: true },
      { name: 'academic_level', type: 'select', label: 'Niveau académique', options: ['Master', 'Doctorat', 'Post-doctorat', 'Recherche professionnelle'], required: true },
      { name: 'duration', type: 'select', label: 'Durée prévue', options: ['3-6 mois', '6-12 mois', '1-2 ans', '2-3 ans', '3+ ans'], required: true },
      { name: 'available_resources', type: 'select', label: 'Ressources disponibles', options: ['Limitées', 'Standard', 'Importantes', 'Très importantes'], required: true },
      { name: 'main_hypothesis', type: 'text', label: 'Hypothèse principale', placeholder: 'L\'utilisation d\'IA améliore la productivité de 25%...', required: true },
      { name: 'methodology_approach', type: 'select', label: 'Approche méthodologique', options: ['Quantitative', 'Qualitative', 'Mixte (quanti-quali)', 'Études de cas', 'Recherche-action'], required: true },
      { name: 'data_collection_methods', type: 'select', label: 'Méthodes de collecte', options: ['Enquêtes/questionnaires', 'Entretiens', 'Observations', 'Analyse documentaire', 'Expérimentation', 'Méthodes mixtes'], required: true },
      { name: 'specific_constraints', type: 'textarea', label: 'Contraintes spécifiques', placeholder: 'Accès aux données, budget, délais...', required: false },
      { name: 'expected_outcomes', type: 'textarea', label: 'Résultats attendus', placeholder: 'Publications, recommandations pratiques...', required: false }
    ],
    tags: ['Recherche', 'Méthodologie', 'Académique', 'Science'],
    quality: 4.9,
    usageCount: 756
  }
];
