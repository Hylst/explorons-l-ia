
import { PromptTemplate, PromptCategory } from './promptTemplatesData';

// Nouvelles catégories avancées
export const advancedCategories: PromptCategory[] = [
  {
    id: 'sales',
    name: 'Vente',
    description: 'Templates pour l\'optimisation des ventes et négociations',
    icon: 'DollarSign'
  },
  {
    id: 'hr',
    name: 'Ressources Humaines',
    description: 'Templates pour le recrutement et la gestion RH',
    icon: 'Users'
  },
  {
    id: 'finance',
    name: 'Finance',
    description: 'Templates pour l\'analyse financière et comptable',
    icon: 'Calculator'
  },
  {
    id: 'legal',
    name: 'Juridique',
    description: 'Templates pour les documents et conseils juridiques',
    icon: 'Scale'
  }
];

// Templates avancés
export const advancedPromptTemplates: PromptTemplate[] = [
  {
    id: 'sales-pitch-generator',
    name: 'Générateur de Pitch de Vente',
    category: 'sales',
    domain: 'Vente B2B',
    description: 'Crée un pitch de vente personnalisé et convaincant',
    template: `Tu es un expert en vente B2B avec 15 ans d'expérience. Crée un pitch de vente irrésistible pour : "{product_service}".

**INFORMATIONS CLIENT :**
- Entreprise cible : {target_company}
- Secteur d'activité : {industry}
- Taille de l'entreprise : {company_size}
- Budget estimé : {budget_range}
- Décideur principal : {decision_maker}
- Pain points identifiés : {pain_points}

**STRUCTURE DU PITCH (Duration: {pitch_duration}) :**

## 1. ACCROCHE (30 secondes)
- Hook personnalisé basé sur leur secteur
- Statistique choc ou question provocante

## 2. PROBLÉMATIQUE (60 secondes)
- Identification du problème spécifique
- Coût de l'inaction
- Impact sur leur business

## 3. SOLUTION (90 secondes)
- Présentation de notre solution : {product_service}
- Bénéfices directs pour {target_company}
- Différenciateurs vs concurrence

## 4. PREUVE SOCIALE (45 secondes)
- Témoignage client similaire
- Résultats chiffrés obtenus
- Case study pertinente

## 5. OBJECTIONS & RÉPONSES (60 secondes)
- Anticipation des objections communes
- Réponses préparées et convaincantes

## 6. APPEL À L'ACTION (30 secondes)
- Next step clair et précis
- Création d'urgence : {urgency_factor}

**STYLE DE COMMUNICATION :** {communication_style}
**CHANNEL DE PRÉSENTATION :** {presentation_channel}

Adapte le ton et les exemples au profil du décideur et à la culture d'entreprise de {target_company}.`,
    variables: [
      { name: 'product_service', type: 'text', label: 'Produit/Service', placeholder: 'Logiciel CRM, Formation, Consulting...', required: true },
      { name: 'target_company', type: 'text', label: 'Entreprise cible', placeholder: 'Apple, Total, BNP Paribas...', required: true },
      { name: 'industry', type: 'select', label: 'Secteur', options: ['Tech', 'Finance', 'Industrie', 'Retail', 'Santé', 'Éducation', 'Énergie', 'Autres'], required: true },
      { name: 'company_size', type: 'select', label: 'Taille entreprise', options: ['Startup (<50)', 'PME (50-500)', 'ETI (500-5000)', 'Grande entreprise (5000+)'], required: true },
      { name: 'budget_range', type: 'select', label: 'Budget estimé', options: ['< 10K€', '10-50K€', '50-200K€', '200K-1M€', '> 1M€'], required: true },
      { name: 'decision_maker', type: 'select', label: 'Décideur', options: ['CEO/PDG', 'Directeur Commercial', 'DSI/CTO', 'CFO', 'Directeur Opérationnel', 'Manager'], required: true },
      { name: 'pain_points', type: 'textarea', label: 'Points de douleur identifiés', placeholder: 'Perte de temps, coûts élevés, inefficacité...', required: true },
      { name: 'pitch_duration', type: 'select', label: 'Durée du pitch', options: ['5 minutes', '10 minutes', '15 minutes', '30 minutes'], required: true },
      { name: 'communication_style', type: 'select', label: 'Style communication', options: ['Formel et technique', 'Relationnel et storytelling', 'Direct et chiffré', 'Consultative'], required: true },
      { name: 'presentation_channel', type: 'select', label: 'Canal présentation', options: ['Appel téléphonique', 'Visioconférence', 'Rendez-vous physique', 'Présentation email'], required: true },
      { name: 'urgency_factor', type: 'text', label: 'Facteur d\'urgence', placeholder: 'Offre limitée, fin d\'exercice, nouveau projet...', required: false }
    ],
    tags: ['Vente', 'B2B', 'Pitch', 'Négociation'],
    quality: 4.8,
    usageCount: 945
  },
  {
    id: 'job-interview-prep',
    name: 'Préparation Entretien RH',
    category: 'hr',
    domain: 'Recrutement',
    description: 'Guide complet pour préparer et conduire un entretien de recrutement',
    template: `Tu es un expert RH avec une spécialisation en recrutement. Prépare un guide complet d'entretien pour le poste : "{job_title}".

**DÉTAILS DU POSTE :**
- Titre : {job_title}
- Département : {department}
- Niveau : {seniority_level}
- Type de contrat : {contract_type}
- Salaire prévu : {salary_range}
- Lieu : {location}
- Manager de référence : {hiring_manager}

**COMPÉTENCES RECHERCHÉES :**
- Techniques : {technical_skills}
- Comportementales : {soft_skills}
- Expérience requise : {required_experience}

**GUIDE D'ENTRETIEN STRUCTURÉ :**

## 1. PRÉPARATION (15 min avant)
### Questions d'évaluation préparées
### Grille de notation standardisée
### Review du CV et portfolio

## 2. ACCUEIL ET PRÉSENTATION (10 min)
### Script d'accueil personnalisé
### Présentation de l'entreprise et du poste
### Déroulé de l'entretien

## 3. QUESTIONS COMPORTEMENTALES (20 min)
Méthode STAR (Situation, Tâche, Action, Résultat) :

### Leadership et Initiative
### Gestion des conflits
### Adaptation au changement
### Travail en équipe

## 4. ÉVALUATION TECHNIQUE (25 min)
### Questions spécifiques à {job_title}
### Cas pratiques ou exercices
### Discussion sur l'expérience passée

## 5. QUESTIONS SITUATIONNELLES (15 min)
### Mise en situation professionnelle
### Résolution de problèmes
### Priorisation et gestion du temps

## 6. QUESTIONS DU CANDIDAT (10 min)
### Réponses aux interrogations
### Vente du poste et de l'entreprise

## 7. CONCLUSION (5 min)
### Next steps explicites
### Timeline de décision
### Coordonnées de suivi

**GRILLE D'ÉVALUATION :**
- Compétences techniques : /20
- Fit culturel : /20  
- Motivation : /20
- Communication : /20
- Leadership potentiel : /20

**RED FLAGS À SURVEILLER :**
- Incohérences dans le parcours
- Manque de préparation
- Attitude négative
- Soft skills inadéquates

Adapte les questions au profil {seniority_level} et au contexte {department}.`,
    variables: [
      { name: 'job_title', type: 'text', label: 'Titre du poste', placeholder: 'Développeur Full-Stack, Chef de projet...', required: true },
      { name: 'department', type: 'select', label: 'Département', options: ['IT/Tech', 'Marketing', 'Ventes', 'Finance', 'RH', 'Opérations', 'R&D'], required: true },
      { name: 'seniority_level', type: 'select', label: 'Niveau de séniorité', options: ['Junior (0-2 ans)', 'Confirmé (3-5 ans)', 'Senior (6-10 ans)', 'Expert (10+ ans)', 'Management'], required: true },
      { name: 'contract_type', type: 'select', label: 'Type de contrat', options: ['CDI', 'CDD', 'Freelance', 'Stage', 'Alternance'], required: true },
      { name: 'salary_range', type: 'select', label: 'Fourchette salariale', options: ['< 35K€', '35-45K€', '45-60K€', '60-80K€', '80K€+'], required: true },
      { name: 'location', type: 'select', label: 'Lieu', options: ['Paris', 'Lyon', 'Toulouse', 'Marseille', 'Remote', 'Hybride'], required: true },
      { name: 'hiring_manager', type: 'text', label: 'Manager recruteur', placeholder: 'Directeur IT, Chef de service...', required: true },
      { name: 'technical_skills', type: 'textarea', label: 'Compétences techniques', placeholder: 'Technologies, outils, certifications...', required: true },
      { name: 'soft_skills', type: 'textarea', label: 'Compétences comportementales', placeholder: 'Leadership, communication, adaptabilité...', required: true },
      { name: 'required_experience', type: 'textarea', label: 'Expérience requise', placeholder: 'Secteurs, projets similaires, environnements...', required: true }
    ],
    tags: ['RH', 'Recrutement', 'Entretien', 'Évaluation'],
    quality: 4.7,
    usageCount: 672
  },
  {
    id: 'financial-analysis-report',
    name: 'Rapport d\'Analyse Financière',
    category: 'finance',
    domain: 'Finance d\'Entreprise',
    description: 'Génère une analyse financière complète d\'une entreprise',
    template: `Tu es un analyste financier senior certifié CFA. Réalise une analyse financière approfondie de : "{company_name}".

**DONNÉES FINANCIÈRES :**
- Entreprise : {company_name}
- Secteur d'activité : {business_sector}
- Période d'analyse : {analysis_period}
- Chiffre d'affaires : {revenue}
- Résultat net : {net_income}
- Total actifs : {total_assets}
- Dettes totales : {total_debt}
- Capitaux propres : {equity}

**CONTEXTE D'ANALYSE :**
- Objectif : {analysis_purpose}
- Public cible : {target_audience}
- Comparaison sectorielle : {sector_benchmark}

**RAPPORT D'ANALYSE FINANCIÈRE COMPLET :**

## SYNTHÈSE EXÉCUTIVE
### Points clés et recommandations principales
### Note globale de santé financière (/20)

## 1. ANALYSE DE LA RENTABILITÉ
### Ratios de marge :
- Marge brute : {calculate_gross_margin}%
- Marge opérationnelle
- Marge nette

### Évolution temporelle et analyse des tendances
### Comparaison sectorielle

## 2. ANALYSE DE LA LIQUIDITÉ
### Ratios de liquidité :
- Ratio de liquidité générale
- Ratio de liquidité réduite  
- Ratio de liquidité immédiate

### Gestion du BFR (Besoin en Fonds de Roulement)
### Cycle de conversion de trésorerie

## 3. ANALYSE DE L'ENDETTEMENT
### Structure du financement :
- Ratio d'endettement global
- Ratio d'autonomie financière
- Couverture des intérêts

### Qualité de la dette et échéanciers
### Capacité de remboursement

## 4. ANALYSE DE L'ACTIVITÉ
### Ratios de rotation :
- Rotation des stocks
- Rotation des créances clients
- Rotation des dettes fournisseurs

### Efficacité opérationnelle

## 5. ANALYSE DE LA VALORISATION
### Multiples de valorisation
### Évaluation par les flux de trésorerie
### Valeur comptable vs valeur de marché

## 6. FORCES ET FAIBLESSES
### Atouts financiers identifiés
### Risques et points d'attention
### Opportunités d'amélioration

## 7. RECOMMANDATIONS STRATÉGIQUES
### Actions prioritaires à court terme
### Orientations à moyen/long terme
### Plan de suivi des KPIs

**ANNEXES :**
- Détail des calculs
- Graphiques d'évolution
- Comparaisons sectorielles

Niveau de détail adapté à : {target_audience}`,
    variables: [
      { name: 'company_name', type: 'text', label: 'Nom de l\'entreprise', placeholder: 'LVMH, Carrefour, Airbus...', required: true },
      { name: 'business_sector', type: 'select', label: 'Secteur d\'activité', options: ['Technologie', 'Retail', 'Industrie', 'Services', 'Finance', 'Santé', 'Énergie', 'Immobilier'], required: true },
      { name: 'analysis_period', type: 'select', label: 'Période d\'analyse', options: ['Dernier exercice', '3 derniers exercices', '5 derniers exercices', 'Données trimestrielles'], required: true },
      { name: 'revenue', type: 'text', label: 'Chiffre d\'affaires (M€)', placeholder: '250', required: true },
      { name: 'net_income', type: 'text', label: 'Résultat net (M€)', placeholder: '25', required: true },
      { name: 'total_assets', type: 'text', label: 'Total actifs (M€)', placeholder: '500', required: true },
      { name: 'total_debt', type: 'text', label: 'Dettes totales (M€)', placeholder: '200', required: true },
      { name: 'equity', type: 'text', label: 'Capitaux propres (M€)', placeholder: '300', required: true },
      { name: 'analysis_purpose', type: 'select', label: 'Objectif de l\'analyse', options: ['Due diligence', 'Investissement', 'Crédit bancaire', 'Évaluation interne', 'Audit'], required: true },
      { name: 'target_audience', type: 'select', label: 'Public cible', options: ['Direction générale', 'Investisseurs', 'Banquiers', 'Analystes', 'Conseil d\'administration'], required: true },
      { name: 'sector_benchmark', type: 'text', label: 'Benchmark sectoriel', placeholder: 'CAC 40, SBF 250, secteur spécifique...', required: false }
    ],
    tags: ['Finance', 'Analyse', 'Ratios', 'Valorisation'],
    quality: 4.9,
    usageCount: 423
  },
  {
    id: 'legal-contract-review',
    name: 'Analyse de Contrat Juridique',
    category: 'legal',
    domain: 'Droit des Affaires',
    description: 'Guide d\'analyse et de révision d\'un contrat commercial',
    template: `Tu es un avocat d'affaires senior spécialisé en droit commercial. Effectue une analyse juridique complète du contrat : "{contract_type}".

**INFORMATIONS CONTRACTUELLES :**
- Type de contrat : {contract_type}
- Parties contractantes : {contracting_parties}
- Objet du contrat : {contract_object}
- Valeur du contrat : {contract_value}
- Durée prévue : {contract_duration}
- Juridiction applicable : {applicable_law}
- Niveau de risque perçu : {risk_level}

**CONTEXTE BUSINESS :**
- Enjeux commerciaux : {business_stakes}
- Rapport de force : {negotiation_power}
- Urgence de signature : {signature_urgency}

**ANALYSE JURIDIQUE STRUCTURÉE :**

## 1. CONTRÔLE DE FORME ET VALIDITÉ
### Vérifications préliminaires :
- Capacité juridique des parties
- Pouvoirs de signature
- Formalisme requis respecté
- Cohérence des références

## 2. ANALYSE DES CLAUSES ESSENTIELLES

### 2.1 OBJET ET PRESTATIONS
- Définition précise des obligations
- Spécifications techniques
- Niveaux de service (SLA)
- Livrables et jalons

### 2.2 CONDITIONS FINANCIÈRES
- Prix et modalités de révision
- Conditions de paiement
- Pénalités de retard
- Garanties financières

### 2.3 DURÉE ET RÉSILIATION
- Période d'engagement
- Conditions de renouvellement
- Motifs de résiliation
- Préavis et indemnités

## 3. IDENTIFICATION DES RISQUES JURIDIQUES

### 3.1 RISQUES CONTRACTUELS MAJEURS
- Déséquilibre des obligations
- Clauses abusives potentielles
- Garanties insuffisantes
- Force majeure mal définie

### 3.2 RISQUES DE RESPONSABILITÉ
- Limitation/exclusion de responsabilité
- Assurances obligatoires
- Indemnisation en cas de dommages
- Responsabilité des sous-traitants

### 3.3 RISQUES OPÉRATIONNELS
- Confidentialité et protection des données
- Propriété intellectuelle
- Non-concurrence
- Dépendance économique

## 4. CLAUSES PROBLÉMATIQUES IDENTIFIÉES
### Liste détaillée avec qualification du risque
### Impact potentiel sur {contracting_parties}
### Solutions de renégociation proposées

## 5. RECOMMANDATIONS STRATÉGIQUES

### 5.1 MODIFICATIONS INDISPENSABLES
### 5.2 AMÉLIORATIONS SOUHAITABLES  
### 5.3 POINTS DE VIGILANCE AU SUIVI

## 6. NÉGOCIATION ET CONTREPARTIES
### Arguments juridiques pour la renégociation
### Positions alternatives acceptables
### Deal breakers absolus

**CONCLUSION ET AVIS JURIDIQUE :**
- Niveau de risque global : {risk_assessment}/10
- Recommandation de signature : OUI/NON/CONDITIONNEL
- Actions prioritaires avant signature

Analyse adaptée au niveau de risque {risk_level} et aux enjeux {business_stakes}.`,
    variables: [
      { name: 'contract_type', type: 'select', label: 'Type de contrat', options: ['Contrat de vente', 'Contrat de prestation', 'Partenariat commercial', 'Licence/Franchise', 'Contrat de distribution', 'Joint-venture', 'Autre'], required: true },
      { name: 'contracting_parties', type: 'text', label: 'Parties contractantes', placeholder: 'Notre société / Partenaire XYZ', required: true },
      { name: 'contract_object', type: 'textarea', label: 'Objet du contrat', placeholder: 'Description détaillée de l\'objet contractuel', required: true },
      { name: 'contract_value', type: 'select', label: 'Valeur du contrat', options: ['< 50K€', '50-200K€', '200K€-1M€', '1-5M€', '> 5M€'], required: true },
      { name: 'contract_duration', type: 'select', label: 'Durée', options: ['< 1 an', '1-3 ans', '3-5 ans', '> 5 ans', 'Indéterminée'], required: true },
      { name: 'applicable_law', type: 'select', label: 'Droit applicable', options: ['Droit français', 'Droit européen', 'Common Law', 'Droit international', 'Autre'], required: true },
      { name: 'risk_level', type: 'select', label: 'Niveau de risque', options: ['Faible', 'Modéré', 'Élevé', 'Critique'], required: true },
      { name: 'business_stakes', type: 'textarea', label: 'Enjeux commerciaux', placeholder: 'Impact sur le business, objectifs stratégiques...', required: true },
      { name: 'negotiation_power', type: 'select', label: 'Rapport de force', options: ['Position forte', 'Équilibré', 'Position faible', 'Situation de dépendance'], required: true },
      { name: 'signature_urgency', type: 'select', label: 'Urgence signature', options: ['Immédiate', 'Dans la semaine', 'Dans le mois', 'Pas d\'urgence'], required: true }
    ],
    tags: ['Juridique', 'Contrat', 'Analyse', 'Risk Management'],
    quality: 4.8,
    usageCount: 234
  }
];

export const getAllAdvancedTemplates = (): PromptTemplate[] => {
  return advancedPromptTemplates;
};

export const getAdvancedTemplatesByCategory = (categoryId: string): PromptTemplate[] => {
  return advancedPromptTemplates.filter(template => template.category === categoryId);
};
