
import { PromptTemplate, PromptCategory } from '../promptTemplatesData';

export const visionCategories: PromptCategory[] = [
  {
    id: 'vision-analysis',
    name: 'Analyse Visuelle',
    description: 'Templates pour l\'analyse d\'images par IA',
    icon: 'Eye'
  },
  {
    id: 'vision-ocr',
    name: 'OCR & Texte',
    description: 'Templates pour la reconnaissance de texte',
    icon: 'FileText'
  },
  {
    id: 'vision-medical',
    name: 'Vision Médicale',
    description: 'Templates pour l\'analyse d\'images médicales',
    icon: 'Stethoscope'
  }
];

export const visionTemplates: PromptTemplate[] = [
  {
    id: 'vision-detailed-analysis',
    name: 'Analyse Détaillée d\'Image',
    category: 'vision-analysis',
    domain: 'Computer Vision',
    description: 'Analyse complète et structurée d\'images avec IA de vision',
    template: `Analyse cette image de manière détaillée selon les critères suivants :

**CONTEXTE D'ANALYSE :**
- Type d'analyse : {analysis_type}
- Niveau de détail : {detail_level}
- Objectif principal : {main_objective}
- Domaine d'application : {application_domain}

**STRUCTURE D'ANALYSE DEMANDÉE :**

### 1. DESCRIPTION GÉNÉRALE
- Vue d'ensemble de l'image
- Sujet principal et contexte
- Composition et cadrage
- Qualité et caractéristiques techniques

### 2. ÉLÉMENTS VISUELS DÉTAILLÉS
- Objets identifiés : {objects_to_identify}
- Personnes (si applicable) : {person_analysis}
- Texte visible : {text_extraction}
- Couleurs dominantes et palette
- Éclairage et ambiance

### 3. ANALYSE CONTEXTUELLE
- Lieu et environnement : {location_context}
- Époque/période estimée : {time_context}
- Style artistique/photographique
- Émotion et mood transmis

### 4. ANALYSE TECHNIQUE
- Qualité de l'image : {quality_assessment}
- Résolution et netteté
- Exposition et balance des blancs
- Techniques photographiques utilisées

### 5. INTERPRÉTATION ET INSIGHTS
- Signification possible : {interpretation_focus}
- Éléments remarquables ou inhabituels
- Contexte culturel ou social
- Recommandations d'amélioration (si applicable)

### 6. DONNÉES STRUCTURÉES
Format JSON avec :
- Tags et mots-clés
- Coordonnées des objets principaux
- Métadonnées détectées
- Score de confiance pour chaque élément

**INSTRUCTIONS SPÉCIALES :**
{special_instructions}

**FOCUS PARTICULIER SUR :**
{specific_focus}

**ÉVITER DANS L'ANALYSE :**
{avoid_elements}

Fournis une analyse professionnelle, précise et structurée selon ce framework.`,
    variables: [
      { name: 'analysis_type', type: 'select', label: 'Type d\'analyse', options: ['Générale complète', 'Focus objets', 'Analyse artistique', 'Sécurité/Surveillance', 'E-commerce produit', 'Scientifique', 'Légale/Expertise'], required: true },
      { name: 'detail_level', type: 'select', label: 'Niveau de détail', options: ['Basique', 'Intermédiaire', 'Avancé', 'Expert/Forensique'], required: true },
      { name: 'main_objective', type: 'textarea', label: 'Objectif principal', placeholder: 'Catalogage, identification, évaluation qualité...', required: true },
      { name: 'application_domain', type: 'select', label: 'Domaine d\'application', options: ['E-commerce', 'Sécurité', 'Médical', 'Artistique', 'Scientifique', 'Éducatif', 'Marketing', 'Légal'], required: true },
      { name: 'objects_to_identify', type: 'textarea', label: 'Objets à identifier', placeholder: 'Véhicules, personnes, animaux, produits...', required: false },
      { name: 'person_analysis', type: 'select', label: 'Analyse des personnes', options: ['Aucune', 'Comptage seulement', 'Âge/Genre estimé', 'Émotions', 'Activités', 'Vêtements/Style'], required: false },
      { name: 'text_extraction', type: 'select', label: 'Extraction de texte', options: ['Non nécessaire', 'Texte visible', 'Panneaux/Signalisation', 'Documents', 'Handwriting', 'Tout texte'], required: false },
      { name: 'location_context', type: 'select', label: 'Contexte de lieu', options: ['Non important', 'Intérieur/Extérieur', 'Ville/Nature', 'Pays/Région', 'Lieu spécifique'], required: false },
      { name: 'time_context', type: 'select', label: 'Contexte temporel', options: ['Non important', 'Heure du jour', 'Saison', 'Époque historique', 'Tendance mode'], required: false },
      { name: 'quality_assessment', type: 'select', label: 'Évaluation qualité', options: ['Non nécessaire', 'Basique (flou/net)', 'Technique (ISO, ouverture)', 'Professionnelle complète'], required: false },
      { name: 'interpretation_focus', type: 'textarea', label: 'Focus d\'interprétation', placeholder: 'Symbolisme, message, valeur commerciale...', required: false },
      { name: 'special_instructions', type: 'textarea', label: 'Instructions spéciales', placeholder: 'Contraintes particulières, aspects sensibles...', required: false },
      { name: 'specific_focus', type: 'textarea', label: 'Focus spécifique', placeholder: 'Éléments particuliers à analyser en priorité', required: false },
      { name: 'avoid_elements', type: 'textarea', label: 'Éléments à éviter', placeholder: 'Aspects à ne pas mentionner ou analyser', required: false }
    ],
    tags: ['Vision IA', 'Analyse', 'Computer Vision', 'GPT-4V'],
    quality: 4.9,
    usageCount: 2847
  },
  {
    id: 'vision-ocr-advanced',
    name: 'OCR et Extraction de Texte Avancée',
    category: 'vision-ocr',
    domain: 'OCR & Text Recognition',
    description: 'Extraction et analyse de texte dans les images avec formatage',
    template: `Effectue une extraction de texte complète et intelligente de cette image :

**PARAMÈTRES D'EXTRACTION :**
- Type de document : {document_type}
- Langue principale : {primary_language}
- Langues supplémentaires : {additional_languages}
- Qualité d'image : {image_quality}
- Orientation : {text_orientation}

**TRAITEMENT DEMANDÉ :**

### 1. EXTRACTION BRUTE
- Tout le texte visible dans l'ordre de lecture naturel
- Respect de la structure originale (colonnes, tableaux, listes)
- Indication des zones illisibles ou incertaines
- Niveau de confiance pour chaque section

### 2. FORMATAGE ET STRUCTURE
- Type de formatage : {output_format}
- Conservation de la mise en forme : {preserve_formatting}
- Correction des erreurs évidentes : {auto_correction}
- Segmentation par sections/paragraphes

### 3. ANALYSE LINGUISTIQUE
- Correction orthographique : {spell_check}
- Détection de la langue par segment
- Traduction si demandée : {translation_target}
- Identification des termes techniques/spécialisés

### 4. MÉTADONNÉES
- Informations sur la fonte et taille (si détectable)
- Couleur du texte et contraste
- Qualité de lecture (excellent/bon/moyen/faible)
- Coordonnées des blocs de texte principaux

### 5. EXTRACTION SPÉCIALISÉE
- Dates et heures : {extract_dates}
- Numéros (téléphone, références) : {extract_numbers}
- Adresses emails/sites web : {extract_contacts}
- Montants et devises : {extract_amounts}
- Codes (QR, barres, références) : {extract_codes}

### 6. VALIDATION ET VÉRIFICATION
- Cohérence du contenu extrait
- Détection d'éventuelles erreurs d'extraction
- Suggestions d'amélioration de l'image source
- Évaluation de la fiabilité globale

**SORTIE FINALE :**
Format : {final_output_format}
Encodage : UTF-8
Structure : {output_structure}

**INSTRUCTIONS PARTICULIÈRES :**
{special_ocr_instructions}`,
    variables: [
      { name: 'document_type', type: 'select', label: 'Type de document', options: ['Document scanné', 'Photo de document', 'Capture d\'écran', 'Panneau/Affichage', 'Manuscrit', 'Livre/Magazine', 'Facture/Reçu', 'Carte/ID'], required: true },
      { name: 'primary_language', type: 'select', label: 'Langue principale', options: ['Français', 'Anglais', 'Espagnol', 'Allemand', 'Italien', 'Chinois', 'Japonais', 'Arabe', 'Auto-détection'], required: true },
      { name: 'additional_languages', type: 'text', label: 'Langues supplémentaires', placeholder: 'Autres langues présentes', required: false },
      { name: 'image_quality', type: 'select', label: 'Qualité d\'image', options: ['Excellente', 'Bonne', 'Moyenne', 'Faible', 'Très dégradée'], required: true },
      { name: 'text_orientation', type: 'select', label: 'Orientation du texte', options: ['Normale', 'Rotée 90°', 'Rotée 180°', 'Rotée 270°', 'Multiple orientations', 'Auto-détection'], required: true },
      { name: 'output_format', type: 'select', label: 'Format de sortie', options: ['Texte brut', 'Markdown', 'HTML', 'JSON structuré', 'Conserve formatage original'], required: true },
      { name: 'preserve_formatting', type: 'select', label: 'Conservation mise en forme', options: ['Aucune', 'Basique (paragraphes)', 'Avancée (titres, listes)', 'Complète (tableaux, colonnes)'], required: true },
      { name: 'auto_correction', type: 'select', label: 'Correction automatique', options: ['Aucune', 'Fautes évidentes', 'Orthographe complète', 'Grammaire basique'], required: true },
      { name: 'spell_check', type: 'select', label: 'Vérification orthographique', options: ['Non', 'Signaler erreurs', 'Corriger et signaler', 'Correction silencieuse'], required: true },
      { name: 'translation_target', type: 'select', label: 'Traduction vers', options: ['Aucune', 'Français', 'Anglais', 'Espagnol', 'Allemand', 'Autre'], required: false },
      { name: 'extract_dates', type: 'select', label: 'Extraire dates', options: ['Non', 'Oui, format original', 'Oui, format standardisé', 'Oui, avec validation'], required: false },
      { name: 'extract_numbers', type: 'select', label: 'Extraire numéros', options: ['Non', 'Téléphones seulement', 'Références seulement', 'Tous numéros'], required: false },
      { name: 'extract_contacts', type: 'select', label: 'Extraire contacts', options: ['Non', 'Emails seulement', 'URLs seulement', 'Emails et URLs'], required: false },
      { name: 'extract_amounts', type: 'select', label: 'Extraire montants', options: ['Non', 'Avec devise', 'Sans devise', 'Avec analyse'], required: false },
      { name: 'extract_codes', type: 'select', label: 'Extraire codes', options: ['Non', 'Codes-barres', 'QR codes', 'Références alphanumériques', 'Tous codes'], required: false },
      { name: 'final_output_format', type: 'select', label: 'Format final', options: ['Texte simple', 'JSON structuré', 'Markdown', 'CSV (si tableau)', 'XML'], required: true },
      { name: 'output_structure', type: 'select', label: 'Structure de sortie', options: ['Linéaire', 'Par sections', 'Hiérarchique', 'Tabulaire'], required: true },
      { name: 'special_ocr_instructions', type: 'textarea', label: 'Instructions spéciales', placeholder: 'Contraintes ou besoins particuliers...', required: false }
    ],
    tags: ['OCR', 'Extraction Texte', 'Vision IA', 'Document Processing'],
    quality: 4.8,
    usageCount: 1965
  }
];
