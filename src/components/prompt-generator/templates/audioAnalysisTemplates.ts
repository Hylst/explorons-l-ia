
import { PromptTemplate, PromptCategory } from '../promptTemplatesData';

export const audioAnalysisCategories: PromptCategory[] = [
  {
    id: 'audio-analysis',
    name: 'Analyse Audio',
    description: 'Templates pour l\'analyse de contenu audio',
    icon: 'Waveform'
  },
  {
    id: 'audio-transcription',
    name: 'Transcription Avancée',
    description: 'Templates pour transcription et analyse linguistique',
    icon: 'FileAudio'
  },
  {
    id: 'audio-creative',
    name: 'Audio Créatif',
    description: 'Templates pour création audio avancée',
    icon: 'Music4'
  }
];

export const audioAnalysisTemplates: PromptTemplate[] = [
  {
    id: 'audio-comprehensive-analysis',
    name: 'Analyse Audio Complète et Intelligente',
    category: 'audio-analysis',
    domain: 'Audio Processing',
    description: 'Analyse détaillée de contenu audio : musique, parole, ambiances sonores',
    template: `Effectue une analyse audio complète et professionnelle selon les paramètres suivants :

**PARAMÈTRES D'ANALYSE :**
- Type de contenu audio : {audio_content_type}
- Durée du fichier : {audio_duration}
- Qualité audio source : {source_quality}
- Format source : {source_format}
- Objectif d'analyse : {analysis_objective}

**ANALYSE TECHNIQUE :**

### Caractéristiques Audio
- Fréquence d'échantillonnage : {sample_rate_analysis}
- Profondeur de bits : {bit_depth_analysis}
- Canaux (mono/stéréo) : {channel_analysis}
- Plage dynamique : {dynamic_range_analysis}
- Signal/Bruit ratio : {snr_analysis}

### Analyse Spectrale
- Analyse fréquentielle : {frequency_analysis}
- Harmoniques dominantes : {harmonics_analysis}
- Répartition spectrale : {spectral_distribution}
- Pics et creux notables : {frequency_peaks}
- Bande passante effective : {effective_bandwidth}

**ANALYSE DE CONTENU :**

### Si Musique
- Genre musical : {music_genre_detection}
- Tempo/BPM : {tempo_analysis}
- Tonalité : {key_detection}
- Structure : {music_structure}
- Instruments identifiés : {instrument_detection}
- Qualité de production : {production_quality}

### Si Parole/Voix
- Nombre de locuteurs : {speaker_count}
- Genre des voix : {voice_gender}
- Âge estimé : {estimated_age}
- Accent/Langue : {language_accent}
- Émotion détectée : {emotion_detection}
- Clarté d'élocution : {speech_clarity}

### Si Ambiance/SFX
- Type d'environnement : {environment_type}
- Sons identifiés : {identified_sounds}
- Ambiance générale : {general_ambiance}
- Qualité d'enregistrement : {recording_quality}
- Traitement audio appliqué : {audio_processing}

**ANALYSE AVANCÉE :**

### Qualité et Défauts
- Distorsion : {distortion_analysis}
- Bruit de fond : {background_noise}
- Écrêtage : {clipping_detection}
- Artefacts : {artifacts_detection}
- Suggestions d'amélioration : {improvement_suggestions}

### Métadonnées et Contexte
- Informations techniques : {technical_metadata}
- Contexte d'enregistrement : {recording_context}
- Équipement probable : {probable_equipment}
- Post-traitement détecté : {post_processing}

**ANALYSE CRÉATIVE ET ARTISTIQUE :**

### Émotion et Atmosphere
- Mood général : {overall_mood}
- Énergie : {energy_level}
- Tension/Relaxation : {tension_level}
- Impact émotionnel : {emotional_impact}

### Usage et Applications
- Convient pour : {suitable_for}
- Genre de projet : {project_type}
- Modifications recommandées : {recommended_modifications}
- Potentiel d'utilisation : {usage_potential}

**TRANSCRIPTION (si parole) :**
{transcription_request}

**ANALYSE COMPARATIVE :**
- Comparaison à des standards : {standards_comparison}
- Benchmarks qualité : {quality_benchmarks}
- Classification genre/style : {style_classification}

**RECOMMANDATIONS TECHNIQUES :**

### Optimisations
- Égalisation suggérée : {eq_suggestions}
- Compression recommandée : {compression_advice}
- Effets conseillés : {effects_recommendations}
- Mastering : {mastering_advice}

### Workflow Suggestions
- Outils recommandés : {recommended_tools}
- Étapes de post-production : {post_production_steps}
- Formats de sortie : {output_formats}

**RAPPORT FINAL :**
Format de sortie : {report_format}
Niveau de détail : {detail_level}
Focus spécialisé : {specialized_focus}

**INSTRUCTIONS PARTICULIÈRES :**
{special_instructions}

Génère un rapport structuré, professionnel et actionnable.`,
    variables: [
      { name: 'audio_content_type', type: 'select', label: 'Type de contenu', options: ['Musique', 'Parole/Podcast', 'Ambiance sonore', 'Effets sonores', 'Mixte/Complexe', 'Inconnu'], required: true },
      { name: 'audio_duration', type: 'select', label: 'Durée fichier', options: ['< 30 sec', '30 sec - 2 min', '2-10 min', '10-30 min', '30+ min'], required: true },
      { name: 'source_quality', type: 'select', label: 'Qualité source', options: ['Excellente (studio)', 'Bonne (pro)', 'Moyenne (amateur)', 'Faible (compressé)', 'Très dégradée'], required: true },
      { name: 'source_format', type: 'select', label: 'Format source', options: ['WAV/FLAC (lossless)', 'MP3 haute qualité', 'MP3 standard', 'Format compressé', 'Streaming'], required: true },
      { name: 'analysis_objective', type: 'select', label: 'Objectif d\'analyse', options: ['Qualité technique', 'Identification contenu', 'Amélioration audio', 'Classification', 'Forensique', 'Créatif'], required: true },
      { name: 'sample_rate_analysis', type: 'select', label: 'Analyse sample rate', options: ['Oui, détaillée', 'Oui, basique', 'Non nécessaire'], required: true },
      { name: 'bit_depth_analysis', type: 'select', label: 'Analyse bit depth', options: ['Oui, détaillée', 'Oui, basique', 'Non nécessaire'], required: true },
      { name: 'channel_analysis', type: 'select', label: 'Analyse canaux', options: ['Mono/Stéréo seulement', 'Analyse spatiale', 'Balance L/R', 'Non nécessaire'], required: true },
      { name: 'dynamic_range_analysis', type: 'select', label: 'Analyse plage dynamique', options: ['Complète (LUFS, dB)', 'Basique', 'Non nécessaire'], required: true },
      { name: 'snr_analysis', type: 'select', label: 'Analyse S/N ratio', options: ['Oui, avec mesures', 'Estimation qualitative', 'Non nécessaire'], required: false },
      { name: 'frequency_analysis', type: 'select', label: 'Analyse fréquentielle', options: ['Spectre complet', 'Bandes principales', 'Problèmes seulement', 'Non nécessaire'], required: true },
      { name: 'harmonics_analysis', type: 'select', label: 'Analyse harmoniques', options: ['Détaillée', 'Principales seulement', 'Non nécessaire'], required: false },
      { name: 'spectral_distribution', type: 'select', label: 'Distribution spectrale', options: ['Analyse complète', 'Répartition générale', 'Non nécessaire'], required: false },
      { name: 'frequency_peaks', type: 'select', label: 'Pics fréquentiels', options: ['Tous pics notables', 'Problématiques seulement', 'Non nécessaire'], required: false },
      { name: 'effective_bandwidth', type: 'select', label: 'Bande passante', options: ['Mesure précise', 'Estimation', 'Non nécessaire'], required: false },
      { name: 'music_genre_detection', type: 'select', label: 'Détection genre musical', options: ['Oui, détaillée', 'Oui, basique', 'Non applicable'], required: false },
      { name: 'tempo_analysis', type: 'select', label: 'Analyse tempo', options: ['BPM précis', 'Tempo approximatif', 'Non applicable'], required: false },
      { name: 'key_detection', type: 'select', label: 'Détection tonalité', options: ['Tonalité précise', 'Estimation', 'Non applicable'], required: false },
      { name: 'music_structure', type: 'select', label: 'Structure musicale', options: ['Analyse complète', 'Structure basique', 'Non applicable'], required: false },
      { name: 'instrument_detection', type: 'select', label: 'Détection instruments', options: ['Tous instruments', 'Principaux seulement', 'Non applicable'], required: false },
      { name: 'production_quality', type: 'select', label: 'Qualité production', options: ['Évaluation détaillée', 'Évaluation basique', 'Non applicable'], required: false },
      { name: 'speaker_count', type: 'select', label: 'Nombre locuteurs', options: ['Comptage précis', 'Estimation', 'Non applicable'], required: false },
      { name: 'voice_gender', type: 'select', label: 'Genre des voix', options: ['Identification détaillée', 'Estimation', 'Non applicable'], required: false },
      { name: 'estimated_age', type: 'select', label: 'Âge estimé', options: ['Estimation détaillée', 'Tranches d\'âge', 'Non applicable'], required: false },
      { name: 'language_accent', type: 'select', label: 'Langue/Accent', options: ['Identification précise', 'Estimation', 'Non applicable'], required: false },
      { name: 'emotion_detection', type: 'select', label: 'Détection émotion', options: ['Analyse émotionnelle', 'Estimation mood', 'Non applicable'], required: false },
      { name: 'speech_clarity', type: 'select', label: 'Clarté élocution', options: ['Évaluation détaillée', 'Évaluation basique', 'Non applicable'], required: false },
      { name: 'environment_type', type: 'select', label: 'Type environnement', options: ['Identification détaillée', 'Estimation', 'Non applicable'], required: false },
      { name: 'identified_sounds', type: 'select', label: 'Sons identifiés', options: ['Liste complète', 'Principaux seulement', 'Non applicable'], required: false },
      { name: 'general_ambiance', type: 'select', label: 'Ambiance générale', options: ['Description détaillée', 'Description basique', 'Non applicable'], required: false },
      { name: 'recording_quality', type: 'select', label: 'Qualité enregistrement', options: ['Analyse technique', 'Évaluation générale', 'Non nécessaire'], required: true },
      { name: 'audio_processing', type: 'select', label: 'Traitement audio', options: ['Détection complète', 'Traitement évident', 'Non nécessaire'], required: false },
      { name: 'distortion_analysis', type: 'select', label: 'Analyse distorsion', options: ['Complète', 'Problèmes majeurs', 'Non nécessaire'], required: true },
      { name: 'background_noise', type: 'select', label: 'Bruit de fond', options: ['Analyse détaillée', 'Niveau général', 'Non nécessaire'], required: true },
      { name: 'clipping_detection', type: 'select', label: 'Détection écrêtage', options: ['Oui, avec localisation', 'Oui, général', 'Non nécessaire'], required: true },
      { name: 'artifacts_detection', type: 'select', label: 'Détection artefacts', options: ['Tous artefacts', 'Majeurs seulement', 'Non nécessaire'], required: true },
      { name: 'improvement_suggestions', type: 'select', label: 'Suggestions amélioration', options: ['Détaillées', 'Générales', 'Non demandées'], required: true },
      { name: 'technical_metadata', type: 'select', label: 'Métadonnées techniques', options: ['Extraction complète', 'Principales seulement', 'Non nécessaire'], required: false },
      { name: 'recording_context', type: 'select', label: 'Contexte enregistrement', options: ['Estimation détaillée', 'Estimation générale', 'Non nécessaire'], required: false },
      { name: 'probable_equipment', type: 'select', label: 'Équipement probable', options: ['Analyse équipement', 'Estimation générale', 'Non nécessaire'], required: false },
      { name: 'post_processing', type: 'select', label: 'Post-traitement détecté', options: ['Analyse complète', 'Principaux traitements', 'Non nécessaire'], required: false },
      { name: 'overall_mood', type: 'select', label: 'Mood général', options: ['Analyse émotionnelle', 'Impression générale', 'Non nécessaire'], required: true },
      { name: 'energy_level', type: 'select', label: 'Niveau d\'énergie', options: ['Mesure détaillée', 'Estimation', 'Non nécessaire'], required: true },
      { name: 'tension_level', type: 'select', label: 'Niveau tension', options: ['Analyse tension', 'Estimation', 'Non nécessaire'], required: false },
      { name: 'emotional_impact', type: 'select', label: 'Impact émotionnel', options: ['Évaluation complète', 'Impression générale', 'Non nécessaire'], required: true },
      { name: 'suitable_for', type: 'textarea', label: 'Convient pour', placeholder: 'Types d\'utilisation recommandés', required: true },
      { name: 'project_type', type: 'select', label: 'Type de projet', options: ['Commercial', 'Artistique', 'Éducatif', 'Technique', 'Personnel'], required: true },
      { name: 'recommended_modifications', type: 'textarea', label: 'Modifications recommandées', placeholder: 'Améliorations suggérées', required: false },
      { name: 'usage_potential', type: 'select', label: 'Potentiel d\'utilisation', options: ['Excellent', 'Bon avec modifications', 'Limité', 'Nécessite retraitement'], required: true },
      { name: 'transcription_request', type: 'select', label: 'Demande transcription', options: ['Transcription complète', 'Extraits principaux', 'Non applicable'], required: false },
      { name: 'standards_comparison', type: 'select', label: 'Comparaison standards', options: ['Standards broadcast', 'Standards streaming', 'Standards custom', 'Non nécessaire'], required: false },
      { name: 'quality_benchmarks', type: 'select', label: 'Benchmarks qualité', options: ['Métriques complètes', 'Principales métriques', 'Non nécessaire'], required: false },
      { name: 'style_classification', type: 'select', label: 'Classification style', options: ['Classification détaillée', 'Genre principal', 'Non nécessaire'], required: false },
      { name: 'eq_suggestions', type: 'select', label: 'Suggestions EQ', options: ['Réglages détaillés', 'Corrections générales', 'Non demandées'], required: false },
      { name: 'compression_advice', type: 'select', label: 'Conseils compression', options: ['Paramètres détaillés', 'Conseils généraux', 'Non demandés'], required: false },
      { name: 'effects_recommendations', type: 'select', label: 'Effets recommandés', options: ['Liste détaillée', 'Principaux effets', 'Non demandés'], required: false },
      { name: 'mastering_advice', type: 'select', label: 'Conseils mastering', options: ['Guide complet', 'Conseils généraux', 'Non demandés'], required: false },
      { name: 'recommended_tools', type: 'select', label: 'Outils recommandés', options: ['Liste logiciels', 'Catégories d\'outils', 'Non demandés'], required: false },
      { name: 'post_production_steps', type: 'select', label: 'Étapes post-prod', options: ['Workflow détaillé', 'Étapes principales', 'Non demandées'], required: false },
      { name: 'output_formats', type: 'select', label: 'Formats de sortie', options: ['Recommandations format', 'Format optimal', 'Non demandé'], required: false },
      { name: 'report_format', type: 'select', label: 'Format rapport', options: ['Rapport structuré', 'Format libre', 'JSON technique', 'Résumé exécutif'], required: true },
      { name: 'detail_level', type: 'select', label: 'Niveau détail', options: ['Très détaillé', 'Détaillé', 'Standard', 'Résumé'], required: true },
      { name: 'specialized_focus', type: 'textarea', label: 'Focus spécialisé', placeholder: 'Aspects particuliers à analyser en priorité', required: false },
      { name: 'special_instructions', type: 'textarea', label: 'Instructions particulières', placeholder: 'Contraintes ou besoins spécifiques', required: false }
    ],
    tags: ['Audio Analysis', 'Signal Processing', 'Quality Assessment', 'IA Audio'],
    quality: 4.8,
    usageCount: 1432
  },
  {
    id: 'advanced-music-generation',
    name: 'Composition Musicale IA Avancée',
    category: 'audio-creative',
    domain: 'AI Music Creation',
    description: 'Crée des compositions musicales complexes avec contrôle artistique précis',
    template: `Compose une œuvre musicale originale selon ces spécifications artistiques et techniques :

**VISION ARTISTIQUE :**
- Concept créatif : {creative_concept}
- Message émotionnel : {emotional_message}
- Inspiration principale : {main_inspiration}
- Public cible : {target_audience}
- Usage prévu : {intended_use}

**GENRE ET STYLE :**
- Genre principal : {primary_genre}
- Sous-genres : {sub_genres}
- Influences stylistiques : {style_influences}
- Époque de référence : {era_reference}
- Fusion de styles : {style_fusion}

**STRUCTURE COMPOSITIONNELLE :**

### Architecture Générale
- Durée totale : {total_duration}
- Structure forme : {song_form}
- Nombre de sections : {section_count}
- Transitions : {transition_style}

### Développement Thématique
- Thème principal : {main_theme}
- Motifs secondaires : {secondary_motifs}
- Développement mélodique : {melodic_development}
- Variations thématiques : {thematic_variations}

**PARAMÈTRES MUSICAUX :**

### Harmonique
- Tonalité principale : {main_key}
- Modulations : {modulations}
- Progression d'accords : {chord_progression}
- Complexité harmonique : {harmonic_complexity}
- Couleurs harmoniques : {harmonic_colors}

### Rythmique
- Tempo (BPM) : {tempo}
- Signature rythmique : {time_signature}
- Groove principal : {main_groove}
- Variations rythmiques : {rhythmic_variations}
- Syncopes et accents : {syncopation}

### Mélodique
- Caractère mélodique : {melodic_character}
- Ambitus mélodique : {melodic_range}
- Contour mélodique : {melodic_contour}
- Ornementation : {melodic_ornamentation}
- Phrasé : {melodic_phrasing}

**ORCHESTRATION :**

### Instrumentation Principale
- Instruments lead : {lead_instruments}
- Section rythmique : {rhythm_section}
- Accompagnement : {accompaniment}
- Instruments solo : {solo_instruments}

### Arrangement Détaillé
- Texture musicale : {musical_texture}
- Density arrangement : {arrangement_density}
- Contrepoint : {counterpoint_usage}
- Doublures : {instrument_doubling}

### Production Sonore
- Palette sonore : {sound_palette}
- Traitement audio : {audio_processing}
- Spatialisation : {spatialization}
- Dynamiques : {dynamics_range}

**DÉVELOPPEMENT TEMPOREL :**

### Introduction ({intro_duration})
- Mise en place : {intro_setup}
- Accroche : {intro_hook}
- Buildup : {intro_buildup}

### Développement Principal
- Section A : {section_a_content}
- Section B : {section_b_content}
- Pont/Bridge : {bridge_content}
- Climax : {climax_approach}

### Conclusion
- Résolution : {resolution_style}
- Outro : {outro_treatment}
- Fin : {ending_type}

**PRODUCTION AVANCÉE :**

### Mixing Approach
- Balance instruments : {mixing_balance}
- Traitement fréquentiel : {frequency_treatment}
- Effets spatiaux : {spatial_effects}
- Compression/Dynamique : {dynamic_processing}

### Sound Design
- Textures sonores : {sound_textures}
- Effets créatifs : {creative_effects}
- Layering : {sound_layering}
- Atmosphères : {atmospheric_elements}

**SPÉCIFICATIONS TECHNIQUES :**

### Qualité Audio
- Résolution : {audio_resolution}
- Format de sortie : {output_format}
- Mastering target : {mastering_target}
- Loudness : {loudness_target}

### Versions et Exports
- Version complète : {full_version}
- Versions courtes : {short_versions}
- Stems/Multipistes : {stems_export}
- Formats dérivés : {derivative_formats}

**PROMPT POUR IA MUSICALE :**

Generate music composition:
Genre: {primary_genre} with {style_influences}
Tempo: {tempo} BPM
Key: {main_key}
Duration: {total_duration}
Mood: {emotional_message}
Instruments: {lead_instruments}, {rhythm_section}
Style: {creative_concept}
Structure: {song_form}
Production: {sound_palette}

Advanced parameters:
- Complexity: {harmonic_complexity}
- Groove: {main_groove}  
- Texture: {musical_texture}
- Dynamics: {dynamics_range}

Creative direction: {main_inspiration}

**MOTS-CLÉS CRÉATIFS :**
{creative_keywords}

**RÉFÉRENCES ARTISTIQUES :**
- Artistes : {artist_references}
- Œuvres : {work_references}
- Styles : {style_references}

**CONTRAINTES CRÉATIVES :**
{creative_constraints}

**LIVRABLES ATTENDUS :**
{expected_deliverables}

Crée une composition originale, cohérente et émotionnellement engageante.`,
    variables: [
      { name: 'creative_concept', type: 'textarea', label: 'Concept créatif', placeholder: 'Vision artistique et concept général de l\'œuvre', required: true },
      { name: 'emotional_message', type: 'select', label: 'Message émotionnel', options: ['Joie/Célébration', 'Mélancolie/Nostalgie', 'Énergie/Motivation', 'Sérénité/Paix', 'Tension/Suspense', 'Romantique/Intime', 'Mystérieux/Enigmatique', 'Épique/Héroïque'], required: true },
      { name: 'main_inspiration', type: 'textarea', label: 'Inspiration principale', placeholder: 'Sources d\'inspiration (nature, émotions, concepts...)', required: true },
      { name: 'target_audience', type: 'select', label: 'Public cible', options: ['Grand public', 'Mélomanes', 'Jeunes (13-25)', 'Adultes (25-45)', 'Niche spécialisée', 'Professionnel'], required: true },
      { name: 'intended_use', type: 'select', label: 'Usage prévu', options: ['Écoute personnelle', 'Background/Ambiance', 'Danse/Club', 'Film/Média', 'Concert/Live', 'Thérapie/Relaxation', 'Commercial'], required: true },
      { name: 'primary_genre', type: 'select', label: 'Genre principal', options: ['Electronic', 'Rock', 'Pop', 'Jazz', 'Classical', 'Hip-Hop', 'R&B', 'Folk', 'Ambient', 'World Music', 'Experimental'], required: true },
      { name: 'sub_genres', type: 'text', label: 'Sous-genres', placeholder: 'House, Progressive, Synthwave...', required: false },
      { name: 'style_influences', type: 'text', label: 'Influences stylistiques', placeholder: 'Années 80, minimalisme, jazz fusion...', required: false },
      { name: 'era_reference', type: 'select', label: 'Époque de référence', options: ['Contemporain', 'Années 2010s', 'Années 2000s', 'Années 90s', 'Années 80s', 'Années 70s', 'Classique', 'Futuriste'], required: false },
      { name: 'style_fusion', type: 'textarea', label: 'Fusion de styles', placeholder: 'Mélange de genres ou approches hybrides', required: false },
      { name: 'total_duration', type: 'select', label: 'Durée totale', options: ['1-2 minutes', '2-3 minutes', '3-4 minutes', '4-5 minutes', '5-7 minutes', '7+ minutes'], required: true },
      { name: 'song_form', type: 'select', label: 'Structure forme', options: ['ABABCB (Pop)', 'AABA (Standards)', 'Forme libre', 'Rondo', 'Theme & Variations', 'Forme sonate', 'Minimaliste'], required: true },
      { name: 'section_count', type: 'select', label: 'Nombre de sections', options: ['3-4 sections', '5-6 sections', '7-8 sections', '9+ sections'], required: true },
      { name: 'transition_style', type: 'select', label: 'Style transitions', options: ['Fluides/Seamless', 'Contrastées', 'Progressives', 'Abruptes/Dramatiques', 'Mixtes'], required: true },
      { name: 'main_theme', type: 'textarea', label: 'Thème principal', placeholder: 'Description du thème mélodique principal', required: true },
      { name: 'secondary_motifs', type: 'textarea', label: 'Motifs secondaires', placeholder: 'Thèmes ou motifs complémentaires', required: false },
      { name: 'melodic_development', type: 'select', label: 'Développement mélodique', options: ['Linéaire simple', 'Variations progressives', 'Développement complexe', 'Improvisé/Libre'], required: true },
      { name: 'thematic_variations', type: 'select', label: 'Variations thématiques', options: ['Aucune', 'Légères variations', 'Variations modérées', 'Développement extensif'], required: true },
      { name: 'main_key', type: 'select', label: 'Tonalité principale', options: ['C Major', 'G Major', 'D Major', 'A Major', 'E Major', 'F Major', 'A Minor', 'E Minor', 'B Minor', 'F# Minor', 'Modal', 'Atonale'], required: true },
      { name: 'modulations', type: 'select', label: 'Modulations', options: ['Aucune', 'Une modulation', 'Plusieurs modulations', 'Modulations complexes'], required: false },
      { name: 'chord_progression', type: 'text', label: 'Progression d\'accords', placeholder: 'vi-IV-I-V, ii-V-I...', required: false },
      { name: 'harmonic_complexity', type: 'select', label: 'Complexité harmonique', options: ['Simple (triades)', 'Modérée (7èmes)', 'Avancée (extensions)', 'Jazz complexe', 'Moderne/Atonale'], required: true },
      { name: 'harmonic_colors', type: 'text', label: 'Couleurs harmoniques', placeholder: 'Sus4, add9, altérations...', required: false },
      { name: 'tempo', type: 'select', label: 'Tempo (BPM)', options: ['60-80 (Lent)', '80-100 (Modéré lent)', '100-120 (Modéré)', '120-140 (Moyen)', '140-160 (Rapide)', '160+ (Très rapide)', 'Variable'], required: true },
      { name: 'time_signature', type: 'select', label: 'Signature rythmique', options: ['4/4', '3/4', '2/4', '6/8', '5/4', '7/8', '9/8', 'Mixte/Variable'], required: true },
      { name: 'main_groove', type: 'select', label: 'Groove principal', options: ['Straight', 'Swing', 'Shuffle', 'Latin', 'Funk', 'Reggae', 'Trap', 'Breakbeat'], required: true },
      { name: 'rhythmic_variations', type: 'select', label: 'Variations rythmiques', options: ['Aucune', 'Légères', 'Modérées', 'Complexes'], required: true },
      { name: 'syncopation', type: 'select', label: 'Syncopes et accents', options: ['Minimales', 'Modérées', 'Prononcées', 'Très complexes'], required: true },
      { name: 'melodic_character', type: 'select', label: 'Caractère mélodique', options: ['Lyrique/Chanté', 'Angulaire/Rythmé', 'Orné/Décoratif', 'Minimaliste', 'Virtuose', 'Improvisé'], required: true },
      { name: 'melodic_range', type: 'select', label: 'Ambitus mélodique', options: ['Restreint (1 octave)', 'Modéré (1.5 octaves)', 'Large (2 octaves)', 'Très large (2+ octaves)'], required: true },
      { name: 'melodic_contour', type: 'select', label: 'Contour mélodique', options: ['Ascendant', 'Descendant', 'Ondulant', 'Statique', 'Mixte'], required: true },
      { name: 'melodic_ornamentation', type: 'select', label: 'Ornementation', options: ['Aucune', 'Légère', 'Modérée', 'Riche'], required: false },
      { name: 'melodic_phrasing', type: 'select', label: 'Phrasé mélodique', options: ['Régulier (4 mesures)', 'Irrégulier', 'Libre', 'Conversationnel'], required: true },
      { name: 'lead_instruments', type: 'textarea', label: 'Instruments lead', placeholder: 'Piano, guitare, synthé lead, voix...', required: true },
      { name: 'rhythm_section', type: 'textarea', label: 'Section rythmique', placeholder: 'Batterie, basse, guitare rythmique...', required: true },
      { name: 'accompaniment', type: 'text', label: 'Accompagnement', placeholder: 'Cordes, pads, arpèges...', required: false },
      { name: 'solo_instruments', type: 'text', label: 'Instruments solo', placeholder: 'Instruments pour solos/improvisations', required: false },
      { name: 'musical_texture', type: 'select', label: 'Texture musicale', options: ['Monophonique', 'Homophonique', 'Polyphonique', 'Dense/Layered', 'Sparse/Minimaliste'], required: true },
      { name: 'arrangement_density', type: 'select', label: 'Densité arrangement', options: ['Minimal', 'Léger', 'Moyen', 'Dense', 'Très dense'], required: true },
      { name: 'counterpoint_usage', type: 'select', label: 'Usage contrepoint', options: ['Aucun', 'Léger', 'Modéré', 'Complexe'], required: false },
      { name: 'instrument_doubling', type: 'select', label: 'Doublures instrumentales', options: ['Aucune', 'Légères', 'Modérées', 'Extensives'], required: false },
      { name: 'sound_palette', type: 'select', label: 'Palette sonore', options: ['Acoustique pure', 'Électronique pure', 'Hybride', 'Vintage', 'Moderne', 'Expérimentale'], required: true },
      { name: 'audio_processing', type: 'select', label: 'Traitement audio', options: ['Minimal/Naturel', 'Léger', 'Modéré', 'Lourd/Stylisé'], required: true },
      { name: 'spatialization', type: 'select', label: 'Spatialisation', options: ['Mono centré', 'Stéréo classique', 'Stéréo large', 'Surround', 'Binaural'], required: false },
      { name: 'dynamics_range', type: 'select', label: 'Plage dynamique', options: ['Très large', 'Large', 'Modérée', 'Compressée'], required: true },
      { name: 'intro_duration', type: 'select', label: 'Durée intro', options: ['5-10 sec', '10-20 sec', '20-30 sec', '30+ sec'], required: true },
      { name: 'intro_setup', type: 'select', label: 'Mise en place intro', options: ['Progressive', 'Immédiate', 'Mystérieuse', 'Énergique'], required: true },
      { name: 'intro_hook', type: 'select', label: 'Accroche intro', options: ['Mélodique', 'Rythmique', 'Harmonique', 'Sonore', 'Mixte'], required: true },
      { name: 'intro_buildup', type: 'select', label: 'Buildup intro', options: ['Graduel', 'Rapide', 'Par paliers', 'Aucun'], required: true },
      { name: 'section_a_content', type: 'textarea', label: 'Contenu section A', placeholder: 'Description de la première section principale', required: true },
      { name: 'section_b_content', type: 'textarea', label: 'Contenu section B', placeholder: 'Description de la section contrastante', required: false },
      { name: 'bridge_content', type: 'textarea', label: 'Contenu pont', placeholder: 'Description du pont/transition', required: false },
      { name: 'climax_approach', type: 'textarea', label: 'Approche climax', placeholder: 'Comment construire et atteindre le climax', required: true },
      { name: 'resolution_style', type: 'select', label: 'Style de résolution', options: ['Naturelle', 'Abrupte', 'Fade out', 'Cyclique', 'Ouverte'], required: true },
      { name: 'outro_treatment', type: 'select', label: 'Traitement outro', options: ['Simple fade', 'Coda développée', 'Rappel thème', 'Nouveau matériel'], required: true },
      { name: 'ending_type', type: 'select', label: 'Type de fin', options: ['Conclusion ferme', 'Fade out', 'Fin abrupte', 'Boucle', 'Suspension'], required: true },
      { name: 'mixing_balance', type: 'select', label: 'Balance mixing', options: ['Lead en avant', 'Équilibré', 'Focus rythmique', 'Spatial créatif'], required: true },
      { name: 'frequency_treatment', type: 'select', label: 'Traitement fréquentiel', options: ['Naturel', 'Enhanced', 'Creative EQ', 'Radical shaping'], required: true },
      { name: 'spatial_effects', type: 'select', label: 'Effets spatiaux', options: ['Minimaux', 'Reverb/Delay', 'Créatifs', 'Immersifs'], required: true },
      { name: 'dynamic_processing', type: 'select', label: 'Traitement dynamique', options: ['Minimal', 'Compression légère', 'Shaped', 'Heavily processed'], required: true },
      { name: 'sound_textures', type: 'text', label: 'Textures sonores', placeholder: 'Pads, nappes, textures d\'ambiance...', required: false },
      { name: 'creative_effects', type: 'text', label: 'Effets créatifs', placeholder: 'Distorsion, modulation, granular...', required: false },
      { name: 'sound_layering', type: 'select', label: 'Layering sonore', options: ['Simple', 'Modéré', 'Complexe', 'Très dense'], required: true },
      { name: 'atmospheric_elements', type: 'text', label: 'Éléments atmosphériques', placeholder: 'Field recordings, ambiances, textures...', required: false },
      { name: 'audio_resolution', type: 'select', label: 'Résolution audio', options: ['44.1kHz/16bit', '48kHz/24bit', '96kHz/24bit', '192kHz/32bit'], required: true },
      { name: 'output_format', type: 'select', label: 'Format de sortie', options: ['WAV', 'FLAC', 'MP3 320kbps', 'Multiples formats'], required: true },
      { name: 'mastering_target', type: 'select', label: 'Target mastering', options: ['Streaming (-14 LUFS)', 'Radio (-12 LUFS)', 'Club (-8 LUFS)', 'Audiophile'], required: true },
      { name: 'loudness_target', type: 'select', label: 'Target loudness', options: ['-23 LUFS (broadcast)', '-16 LUFS (streaming)', '-14 LUFS (pop)', 'Custom'], required: true },
      { name: 'full_version', type: 'select', label: 'Version complète', options: ['Oui, durée complète', 'Version étendue', 'Version radio'], required: true },
      { name: 'short_versions', type: 'select', label: 'Versions courtes', options: ['30 sec', '60 sec', '90 sec', 'Multiples'], required: false },
      { name: 'stems_export', type: 'select', label: 'Export stems', options: ['Non nécessaire', 'Stems principaux', 'Tous les stems', 'Grouped stems'], required: false },
      { name: 'derivative_formats', type: 'select', label: 'Formats dérivés', options: ['Instrumentale', 'A cappella', 'Karaoke', 'Remix stems'], required: false },
      { name: 'creative_keywords', type: 'textarea', label: 'Mots-clés créatifs', placeholder: 'Mots-clés pour guider l\'IA musicale', required: false },
      { name: 'artist_references', type: 'text', label: 'Références artistes', placeholder: 'Noms d\'artistes de référence', required: false },
      { name: 'work_references', type: 'text', label: 'Références d\'œuvres', placeholder: 'Titres ou albums de référence', required: false },
      { name: 'style_references', type: 'text', label: 'Références de style', placeholder: 'Styles ou mouvements musicaux', required: false },
      { name: 'creative_constraints', type: 'textarea', label: 'Contraintes créatives', placeholder: 'Limitations ou contraintes spécifiques', required: false },
      { name: 'expected_deliverables', type: 'textarea', label: 'Livrables attendus', placeholder: 'Fichiers et formats à livrer', required: true }
    ],
    tags: ['AI Music', 'Composition', 'Audio Generation', 'Creative AI'],
    quality: 4.9,
    usageCount: 2156
  }
];
