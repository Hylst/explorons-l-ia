
import { PromptTemplate, PromptCategory } from '../promptTemplatesData';

export const ragCategories: PromptCategory[] = [
  {
    id: 'rag-qa',
    name: 'Q&A Intelligent',
    description: 'Templates pour les systèmes de questions-réponses',
    icon: 'HelpCircle'
  },
  {
    id: 'rag-analysis',
    name: 'Analyse de Documents',
    description: 'Templates pour l\'analyse de corpus documentaires',
    icon: 'FileSearch'
  },
  {
    id: 'rag-synthesis',
    name: 'Synthèse Intelligente',
    description: 'Templates pour la synthèse de connaissances',
    icon: 'BookOpen'
  }
];

export const ragTemplates: PromptTemplate[] = [
  {
    id: 'rag-document-qa',
    name: 'Système Q&A Documentaire Avancé',
    category: 'rag-qa',
    domain: 'RAG System',
    description: 'Crée un système de questions-réponses basé sur des documents avec contexte enrichi',
    template: `Tu es un assistant IA spécialisé dans l'analyse documentaire et la réponse aux questions basées sur des sources spécifiques.

**CONTEXTE DOCUMENTAIRE :**
Base de connaissances : {knowledge_base_type}
Domaine d'expertise : {domain_expertise}
Types de documents : {document_types}
Niveau de spécialisation : {specialization_level}

**DOCUMENTS DE RÉFÉRENCE :**
{retrieved_documents}

**QUESTION UTILISATEUR :**
"{user_question}"

**PARAMÈTRES DE RÉPONSE :**
- Style de réponse : {response_style}
- Niveau de détail : {detail_level}
- Public cible : {target_audience}
- Ton : {response_tone}

**INSTRUCTIONS DE TRAITEMENT :**

1. **ANALYSE DE LA QUESTION :**
   - Identifie l'intention principale
   - Détermine le type de réponse attendu : {expected_answer_type}
   - Évalue la complexité : {question_complexity}

2. **RECHERCHE CONTEXTUELLE :**
   - Analyse les documents fournis
   - Identifie les passages pertinents
   - Évalue la fiabilité des sources
   - Détermine si l'information est complète

3. **CONSTRUCTION DE LA RÉPONSE :**
   - Réponds directement à la question
   - Utilise uniquement les informations des documents fournis
   - Structure ta réponse : {response_structure}
   - Indique le niveau de confiance : {confidence_reporting}

4. **CITATIONS ET SOURCES :**
   - Cite précisément les sources utilisées
   - Format de citation : {citation_format}
   - Indique les numéros de page/section si disponibles
   - Signale les informations contradictoires

5. **GESTION DES LIMITATIONS :**
   - Si l'information n'est pas dans les documents : indique clairement cette limitation
   - Suggère des questions de suivi si pertinent
   - Propose des axes de recherche complémentaires

**QUALITÉ ET VÉRIFICATION :**
- Factualité : Strictement basée sur les documents
- Exhaustivité : {completeness_requirement}
- Précision : {precision_level}
- Transparence : Indique les sources et limites

**FORMAT DE SORTIE :**
## Réponse Principale
[Réponse directe et structurée]

## Sources Utilisées
[Citations précises avec références]

## Niveau de Confiance
[Évaluation de la fiabilité de la réponse]

## Informations Complémentaires
[Contexte additionnel si pertinent]

## Limitations et Suggestions
[Ce qui n'est pas couvert et recommandations]

**SPÉCIALISATIONS AVANCÉES :**
- Analyse multilingue : {multilingual_support}
- Détection de biais : {bias_detection}
- Mise à jour temporelle : {temporal_awareness}
- Cross-référencement : {cross_referencing}

Instructions spéciales : {special_instructions}`,
    variables: [
      { name: 'knowledge_base_type', type: 'select', label: 'Type de base de connaissances', options: ['Documentation technique', 'Base légale/réglementaire', 'Littérature scientifique', 'Documentation d\'entreprise', 'Base encyclopédique', 'Archives historiques', 'Manuels de formation'], required: true },
      { name: 'domain_expertise', type: 'select', label: 'Domaine d\'expertise', options: ['Technique/IT', 'Juridique', 'Médical/Santé', 'Finance', 'RH', 'Marketing', 'Ingénierie', 'Sciences', 'Général'], required: true },
      { name: 'document_types', type: 'select', label: 'Types de documents', options: ['PDFs techniques', 'Articles scientifiques', 'Rapports d\'entreprise', 'Documentations API', 'Textes légaux', 'Manuels utilisateur', 'Base de données'], required: true },
      { name: 'specialization_level', type: 'select', label: 'Niveau de spécialisation', options: ['Grand public', 'Professionnel', 'Expert', 'Académique/Recherche'], required: true },
      { name: 'retrieved_documents', type: 'textarea', label: 'Documents récupérés', placeholder: 'Coller ici les documents/extraits pertinents trouvés par le système RAG...', required: true },
      { name: 'user_question', type: 'textarea', label: 'Question utilisateur', placeholder: 'Quelle est la procédure pour...?', required: true },
      { name: 'response_style', type: 'select', label: 'Style de réponse', options: ['Concis et direct', 'Détaillé et explicatif', 'Structuré et formel', 'Conversationnel', 'Technique/Précis'], required: true },
      { name: 'detail_level', type: 'select', label: 'Niveau de détail', options: ['Synthèse courte', 'Réponse standard', 'Analyse détaillée', 'Étude exhaustive'], required: true },
      { name: 'target_audience', type: 'select', label: 'Public cible', options: ['Débutants', 'Utilisateurs intermédiaires', 'Experts', 'Décideurs', 'Équipe technique'], required: true },
      { name: 'response_tone', type: 'select', label: 'Ton de réponse', options: ['Professionnel', 'Pédagogique', 'Accessible', 'Autoritaire', 'Bienveillant'], required: true },
      { name: 'expected_answer_type', type: 'select', label: 'Type de réponse attendu', options: ['Factuelle', 'Procédurale', 'Comparative', 'Analytique', 'Recommandation', 'Explication'], required: true },
      { name: 'question_complexity', type: 'select', label: 'Complexité question', options: ['Simple', 'Modérée', 'Complexe', 'Multi-facettes'], required: true },
      { name: 'response_structure', type: 'select', label: 'Structure réponse', options: ['Linéaire', 'Points clés', 'Étapes numérotées', 'Paragraphes thématiques', 'Q&A format'], required: true },
      { name: 'confidence_reporting', type: 'select', label: 'Rapport de confiance', options: ['Pourcentage', 'Niveau (Bas/Moyen/Élevé)', 'Qualitatif', 'Détaillé'], required: true },
      { name: 'citation_format', type: 'select', label: 'Format citation', options: ['Académique (APA)', 'Numérotées [1]', 'Nom document (page)', 'URL si disponible', 'Format personnalisé'], required: true },
      { name: 'completeness_requirement', type: 'select', label: 'Exigence exhaustivité', options: ['Réponse partielle OK', 'Couvrir tous les aspects', 'Signaler lacunes', 'Recherche approfondie'], required: true },
      { name: 'precision_level', type: 'select', label: 'Niveau de précision', options: ['Approximations acceptées', 'Précision standard', 'Haute précision', 'Exactitude maximale'], required: true },
      { name: 'multilingual_support', type: 'select', label: 'Support multilingue', options: ['Français uniquement', 'Français + Anglais', 'Multilingue', 'Auto-détection langue'], required: false },
      { name: 'bias_detection', type: 'select', label: 'Détection biais', options: ['Désactivée', 'Standard', 'Renforcée', 'Critique'], required: false },
      { name: 'temporal_awareness', type: 'select', label: 'Conscience temporelle', options: ['Non applicable', 'Dates importantes', 'Informations récentes prioritaires', 'Évolution temporelle'], required: false },
      { name: 'cross_referencing', type: 'select', label: 'Cross-référencement', options: ['Minimal', 'Standard', 'Approfondi', 'Connexions complexes'], required: false },
      { name: 'special_instructions', type: 'textarea', label: 'Instructions spéciales', placeholder: 'Contraintes particulières, format spécifique...', required: false }
    ],
    tags: ['RAG', 'Q&A', 'Document Analysis', 'Knowledge Base'],
    quality: 4.9,
    usageCount: 987
  },
  {
    id: 'rag-knowledge-synthesis',
    name: 'Synthèse de Connaissances Multi-Sources',
    category: 'rag-synthesis',
    domain: 'Knowledge Management',
    description: 'Synthétise et combine des informations provenant de multiples sources documentaires',
    template: `Tu es un expert en synthèse de connaissances, capable d'analyser et de combiner des informations provenant de multiples sources pour créer une vue d'ensemble cohérente et structurée.

**OBJECTIF DE SYNTHÈSE :**
Sujet central : {synthesis_topic}
Angle d'analyse : {analysis_angle}
Objectif final : {synthesis_goal}
Scope temporel : {temporal_scope}

**SOURCES DOCUMENTAIRES :**
{source_documents}

**PARAMÈTRES DE SYNTHÈSE :**
- Niveau d'analyse : {analysis_depth}
- Style de synthèse : {synthesis_style}
- Public cible : {target_readers}
- Longueur souhaitée : {output_length}

**MÉTHODOLOGIE DE SYNTHÈSE :**

## 1. ANALYSE PRÉLIMINAIRE
- Identifie les thèmes récurrents
- Détecte les convergences et divergences
- Évalue la qualité et fiabilité des sources
- Mappe les relations entre concepts

## 2. ORGANISATION CONCEPTUELLE
- Structure thématique : {thematic_structure}
- Priorisation : {priority_criteria}
- Chronologie si applicable : {chronological_approach}
- Perspectives multiples : {multi_perspective}

## 3. SYNTHÈSE INTÉGRATIVE
Crée une synthèse structurée qui :
- Combine les informations complémentaires
- Résout les contradictions apparentes
- Identifie les lacunes de connaissance
- Propose une vision unifiée

## 4. ANALYSE CRITIQUE
- Points de consensus entre sources
- Débats et controverses identifiés
- Limites des informations disponibles
- Biais potentiels des sources

**FORMAT DE SORTIE STRUCTURÉ :**

### SYNTHÈSE EXÉCUTIVE
[Vue d'ensemble en {executive_summary_length}]

### ANALYSE PRINCIPALE
#### Thème 1: [Titre]
- Consensus des sources
- Points de divergence
- Analyse critique
- Sources principales

#### Thème 2: [Titre]
[Même structure]

### INSIGHTS ET TENDANCES
- Patterns émergents
- Implications stratégiques
- Projections/Évolutions

### RECOMMANDATIONS
- Actions suggérées
- Recherches complémentaires
- Points d'attention

### APPENDICES
- Tableau comparatif des sources
- Glossaire des termes clés
- Timeline si pertinente

**CONTRÔLE QUALITÉ :**
- Vérification croisée : {cross_verification}
- Traçabilité des sources : {source_traceability}
- Niveau de certitude : {certainty_levels}
- Mise à jour temporelle : {temporal_updates}

**SPÉCIALISATIONS AVANCÉES :**
- Analyse quantitative : {quantitative_analysis}
- Cartographie conceptuelle : {concept_mapping}
- Analyse de sentiment : {sentiment_analysis}
- Détection de tendances : {trend_detection}

Instructions particulières : {custom_instructions}`,
    variables: [
      { name: 'synthesis_topic', type: 'text', label: 'Sujet de synthèse', placeholder: 'Intelligence artificielle en santé, transformation digitale...', required: true },
      { name: 'analysis_angle', type: 'select', label: 'Angle d\'analyse', options: ['Technique', 'Stratégique', 'Économique', 'Sociétal', 'Réglementaire', 'Historique', 'Prospectif'], required: true },
      { name: 'synthesis_goal', type: 'select', label: 'Objectif final', options: ['Rapport d\'état des lieux', 'Aide à la décision', 'Formation/Éducation', 'Veille stratégique', 'Recherche académique', 'Brief exécutif'], required: true },
      { name: 'temporal_scope', type: 'select', label: 'Scope temporel', options: ['Actuel/Présent', 'Évolution récente (1-2 ans)', 'Tendances moyen terme (3-5 ans)', 'Perspective historique', 'Prospective'], required: true },
      { name: 'source_documents', type: 'textarea', label: 'Documents sources', placeholder: 'Lister ou coller les extraits des documents à synthétiser...', required: true },
      { name: 'analysis_depth', type: 'select', label: 'Profondeur d\'analyse', options: ['Survol général', 'Analyse standard', 'Étude approfondie', 'Recherche exhaustive'], required: true },
      { name: 'synthesis_style', type: 'select', label: 'Style de synthèse', options: ['Analytique/Objectif', 'Narratif/Storytelling', 'Académique/Formel', 'Exécutif/Business', 'Éducatif/Pédagogique'], required: true },
      { name: 'target_readers', type: 'select', label: 'Lecteurs cibles', options: ['Direction générale', 'Experts techniques', 'Équipes opérationnelles', 'Chercheurs', 'Grand public éduqué', 'Étudiants'], required: true },
      { name: 'output_length', type: 'select', label: 'Longueur souhaitée', options: ['Synthèse courte (1-2 pages)', 'Rapport standard (3-5 pages)', 'Étude détaillée (6-10 pages)', 'Document complet (10+ pages)'], required: true },
      { name: 'thematic_structure', type: 'select', label: 'Structure thématique', options: ['Par source', 'Par thème transversal', 'Chronologique', 'Par importance', 'Par controverse', 'Hiérarchique'], required: true },
      { name: 'priority_criteria', type: 'select', label: 'Critères de priorisation', options: ['Fréquence de mention', 'Qualité des sources', 'Impact potentiel', 'Nouveauté/Innovation', 'Consensus scientifique'], required: true },
      { name: 'chronological_approach', type: 'select', label: 'Approche chronologique', options: ['Non applicable', 'Timeline simple', 'Évolution des concepts', 'Phases de développement'], required: false },
      { name: 'multi_perspective', type: 'select', label: 'Perspectives multiples', options: ['Vision unique', 'Perspectives contrastées', 'Analyse multi-acteurs', 'Approche systémique'], required: true },
      { name: 'executive_summary_length', type: 'select', label: 'Longueur synthèse exécutive', options: ['100 mots', '200 mots', '300 mots', '500 mots'], required: true },
      { name: 'cross_verification', type: 'select', label: 'Vérification croisée', options: ['Basique', 'Standard', 'Renforcée', 'Systématique'], required: true },
      { name: 'source_traceability', type: 'select', label: 'Traçabilité sources', options: ['Citations minimales', 'Références standards', 'Traçabilité complète', 'Mapping détaillé'], required: true },
      { name: 'certainty_levels', type: 'select', label: 'Niveaux de certitude', options: ['Binaire (sûr/incertain)', 'Trois niveaux', 'Échelle 1-10', 'Qualitatif détaillé'], required: true },
      { name: 'temporal_updates', type: 'select', label: 'Mise à jour temporelle', options: ['Statique', 'Dates de publication', 'Évolution temporelle', 'Obsolescence signalée'], required: false },
      { name: 'quantitative_analysis', type: 'select', label: 'Analyse quantitative', options: ['Non applicable', 'Statistiques de base', 'Analyse approfondie', 'Modélisation'], required: false },
      { name: 'concept_mapping', type: 'select', label: 'Cartographie conceptuelle', options: ['Aucune', 'Liens simples', 'Réseau conceptuel', 'Ontologie complète'], required: false },
      { name: 'sentiment_analysis', type: 'select', label: 'Analyse de sentiment', options: ['Non applicable', 'Ton général', 'Sentiment par thème', 'Analyse fine'], required: false },
      { name: 'trend_detection', type: 'select', label: 'Détection tendances', options: ['Aucune', 'Tendances évidentes', 'Signaux faibles', 'Prédictions'], required: false },
      { name: 'custom_instructions', type: 'textarea', label: 'Instructions particulières', placeholder: 'Contraintes spécifiques, format particulier...', required: false }
    ],
    tags: ['RAG', 'Synthesis', 'Knowledge Management', 'Multi-Source'],
    quality: 4.8,
    usageCount: 654
  }
];
