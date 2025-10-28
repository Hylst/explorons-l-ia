
export interface PromptTemplate {
  id: string;
  name: string;
  category: string;
  domain: string;
  description: string;
  template: string;
  variables: PromptVariable[];
  tags: string[];
  quality: number; // 1-5 rating
  usageCount: number;
}

export interface PromptVariable {
  name: string;
  type: 'text' | 'select' | 'number' | 'textarea';
  label: string;
  placeholder?: string;
  options?: string[];
  required: boolean;
  defaultValue?: string;
}

export interface PromptCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const promptCategories: PromptCategory[] = [
  {
    id: 'writing',
    name: 'Rédaction',
    description: 'Templates pour la création de contenu écrit',
    icon: 'PenTool'
  },
  {
    id: 'analysis',
    name: 'Analyse',
    description: 'Templates pour l\'analyse et la synthèse',
    icon: 'BarChart3'
  },
  {
    id: 'coding',
    name: 'Programmation',
    description: 'Templates pour l\'assistance au développement',
    icon: 'Code'
  },
  {
    id: 'creative',
    name: 'Créatif',
    description: 'Templates pour la création artistique et créative',
    icon: 'Palette'
  },
  {
    id: 'business',
    name: 'Business',
    description: 'Templates pour les besoins professionnels',
    icon: 'Briefcase'
  },
  {
    id: 'education',
    name: 'Éducation',
    description: 'Templates pour l\'enseignement et l\'apprentissage',
    icon: 'GraduationCap'
  }
];

export const promptTemplates: PromptTemplate[] = [
  {
    id: 'blog-article',
    name: 'Article de Blog SEO',
    category: 'writing',
    domain: 'Marketing',
    description: 'Génère un article de blog optimisé SEO sur un sujet donné',
    template: `Tu es un expert en rédaction SEO. Écris un article de blog complet et optimisé sur le sujet suivant : "{topic}".

L'article doit :
- Faire environ {wordCount} mots
- Cibler le public : {audience}
- Avoir un ton : {tone}
- Inclure des mots-clés SEO pertinents
- Être structuré avec des titres H2 et H3
- Inclure une introduction accrocheuse et une conclusion

Objectifs de l'article : {objectives}`,
    variables: [
      { name: 'topic', type: 'text', label: 'Sujet principal', placeholder: 'Intelligence artificielle dans le marketing', required: true },
      { name: 'wordCount', type: 'select', label: 'Nombre de mots', options: ['800', '1200', '1500', '2000'], required: true, defaultValue: '1200' },
      { name: 'audience', type: 'select', label: 'Public cible', options: ['Débutants', 'Intermédiaire', 'Experts', 'Grand public'], required: true },
      { name: 'tone', type: 'select', label: 'Ton', options: ['Professionnel', 'Décontracté', 'Technique', 'Pédagogique'], required: true },
      { name: 'objectives', type: 'textarea', label: 'Objectifs spécifiques', placeholder: 'Informer, convaincre, éduquer...', required: false }
    ],
    tags: ['SEO', 'Marketing', 'Blog', 'Contenu'],
    quality: 4.5,
    usageCount: 1250
  },
  {
    id: 'code-review',
    name: 'Revue de Code',
    category: 'coding',
    domain: 'Développement',
    description: 'Analyse et critique constructive d\'un code source',
    template: `Tu es un développeur senior expert. Analyse le code suivant en {language} et fournis une revue détaillée :

\`\`\`{language}
{code}
\`\`\`

Dans ta revue, aborde :
1. **Qualité du code** : lisibilité, conventions, structure
2. **Performance** : optimisations possibles
3. **Sécurité** : vulnérabilités potentielles
4. **Bonnes pratiques** : respect des standards
5. **Suggestions d'amélioration** : modifications concrètes

Niveau d'expertise du développeur : {level}
Focus particulier : {focus}`,
    variables: [
      { name: 'language', type: 'select', label: 'Langage', options: ['JavaScript', 'Python', 'Java', 'C#', 'TypeScript', 'Go', 'Rust'], required: true },
      { name: 'code', type: 'textarea', label: 'Code à analyser', placeholder: 'Colle ton code ici...', required: true },
      { name: 'level', type: 'select', label: 'Niveau du développeur', options: ['Junior', 'Intermédiaire', 'Senior'], required: true },
      { name: 'focus', type: 'select', label: 'Focus principal', options: ['Performance', 'Sécurité', 'Maintenabilité', 'Architecture'], required: false }
    ],
    tags: ['Code', 'Review', 'Qualité', 'Développement'],
    quality: 4.8,
    usageCount: 890
  },
  {
    id: 'market-analysis',
    name: 'Analyse de Marché',
    category: 'analysis',
    domain: 'Business',
    description: 'Analyse complète d\'un marché ou secteur d\'activité',
    template: `Tu es un analyste de marché senior. Effectue une analyse complète du marché : "{market}".

Structure ton analyse selon les axes suivants :

## 1. Vue d'ensemble du marché
- Taille et croissance
- Tendances principales

## 2. Analyse concurrentielle
- Acteurs principaux
- Positionnement

## 3. Analyse SWOT
- Forces et faiblesses du marché
- Opportunités et menaces

## 4. Segmentation
- Segments clients principaux : {segments}

## 5. Recommandations stratégiques
- Pour une entreprise souhaitant : {objective}

Région d'analyse : {region}
Horizon temporel : {timeframe}`,
    variables: [
      { name: 'market', type: 'text', label: 'Marché à analyser', placeholder: 'SaaS B2B en France', required: true },
      { name: 'segments', type: 'text', label: 'Segments clients', placeholder: 'PME, Grandes entreprises, Startups', required: false },
      { name: 'objective', type: 'select', label: 'Objectif', options: ['entrer sur le marché', 'lancer un produit', 'faire une acquisition', 'investir'], required: true },
      { name: 'region', type: 'select', label: 'Région', options: ['France', 'Europe', 'Amérique du Nord', 'Global'], required: true },
      { name: 'timeframe', type: 'select', label: 'Horizon', options: ['6 mois', '1 an', '3 ans', '5 ans'], required: true }
    ],
    tags: ['Analyse', 'Marché', 'Business', 'Stratégie'],
    quality: 4.6,
    usageCount: 654
  },
  {
    id: 'creative-story',
    name: 'Histoire Créative',
    category: 'creative',
    domain: 'Littérature',
    description: 'Génère une histoire originale selon des paramètres créatifs',
    template: `Tu es un écrivain talentueux. Écris une histoire captivante avec les éléments suivants :

**Genre** : {genre}
**Longueur** : {length}
**Personnage principal** : {character}
**Cadre/Époque** : {setting}
**Thème central** : {theme}

L'histoire doit :
- Avoir un début accrocheur
- Développer une intrigue cohérente
- Inclure des dialogues naturels
- Se terminer de manière satisfaisante

Style d'écriture : {style}
Public cible : {audience}

Éléments à inclure obligatoirement : {elements}`,
    variables: [
      { name: 'genre', type: 'select', label: 'Genre', options: ['Science-fiction', 'Fantasy', 'Thriller', 'Romance', 'Historique', 'Horreur', 'Comédie'], required: true },
      { name: 'length', type: 'select', label: 'Longueur', options: ['Nouvelle (1000 mots)', 'Histoire courte (2000 mots)', 'Histoire longue (3000+ mots)'], required: true },
      { name: 'character', type: 'text', label: 'Personnage principal', placeholder: 'Un détective retraité, une IA consciente...', required: true },
      { name: 'setting', type: 'text', label: 'Cadre', placeholder: 'Paris en 2045, un village médiéval...', required: true },
      { name: 'theme', type: 'text', label: 'Thème', placeholder: 'L\'amitié, la rédemption, le progrès...', required: true },
      { name: 'style', type: 'select', label: 'Style', options: ['Descriptif', 'Dialogue intensif', 'Action', 'Contemplatif'], required: false },
      { name: 'audience', type: 'select', label: 'Public', options: ['Enfants', 'Adolescents', 'Adultes', 'Tout public'], required: true },
      { name: 'elements', type: 'textarea', label: 'Éléments spécifiques', placeholder: 'Un objet mystérieux, une révélation surprenante...', required: false }
    ],
    tags: ['Créatif', 'Histoire', 'Fiction', 'Écriture'],
    quality: 4.3,
    usageCount: 432
  },
  {
    id: 'lesson-plan',
    name: 'Plan de Cours',
    category: 'education',
    domain: 'Enseignement',
    description: 'Crée un plan de cours structuré et pédagogique',
    template: `Tu es un enseignant expérimenté en {subject}. Crée un plan de cours détaillé pour enseigner : "{topic}".

## Informations du cours
- **Niveau** : {level}
- **Durée** : {duration}
- **Nombre d'élèves** : {students}
- **Modalité** : {modality}

## Structure du plan

### 1. Objectifs pédagogiques
(Ce que les élèves doivent savoir/savoir faire à la fin)

### 2. Prérequis
(Connaissances nécessaires)

### 3. Déroulement détaillé
- Introduction (10 min)
- Développement (activités principales)
- Synthèse et évaluation

### 4. Matériel nécessaire

### 5. Différenciation pédagogique
(Adaptations pour différents profils d'élèves)

### 6. Évaluation
- Formative (pendant le cours)
- Sommative (fin de séquence)

Approche pédagogique privilégiée : {approach}`,
    variables: [
      { name: 'subject', type: 'select', label: 'Matière', options: ['Mathématiques', 'Sciences', 'Histoire', 'Français', 'Anglais', 'Informatique', 'Physique', 'Autres'], required: true },
      { name: 'topic', type: 'text', label: 'Sujet du cours', placeholder: 'Les fractions, la Révolution française...', required: true },
      { name: 'level', type: 'select', label: 'Niveau', options: ['Primaire', 'Collège', 'Lycée', 'Université', 'Formation adulte'], required: true },
      { name: 'duration', type: 'select', label: 'Durée', options: ['30 min', '45 min', '1h', '1h30', '2h'], required: true },
      { name: 'students', type: 'select', label: 'Nombre d\'élèves', options: ['1-10', '11-20', '21-30', '30+'], required: true },
      { name: 'modality', type: 'select', label: 'Modalité', options: ['Présentiel', 'Distanciel', 'Hybride'], required: true },
      { name: 'approach', type: 'select', label: 'Approche', options: ['Magistrale', 'Interactive', 'Par projet', 'Collaborative', 'Inversée'], required: false }
    ],
    tags: ['Éducation', 'Pédagogie', 'Cours', 'Enseignement'],
    quality: 4.7,
    usageCount: 789
  }
];

export const getTemplatesByCategory = (categoryId: string): PromptTemplate[] => {
  return promptTemplates.filter(template => template.category === categoryId);
};

export const getTemplateById = (id: string): PromptTemplate | undefined => {
  return promptTemplates.find(template => template.id === id);
};

export const searchTemplates = (query: string): PromptTemplate[] => {
  const lowerQuery = query.toLowerCase();
  return promptTemplates.filter(template => 
    template.name.toLowerCase().includes(lowerQuery) ||
    template.description.toLowerCase().includes(lowerQuery) ||
    template.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};
