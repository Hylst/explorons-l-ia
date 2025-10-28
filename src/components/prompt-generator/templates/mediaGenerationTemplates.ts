
import { PromptTemplate, PromptCategory } from '../promptTemplatesData';

export const mediaGenerationCategories: PromptCategory[] = [
  {
    id: 'media-image-to-image',
    name: 'Image to Image',
    description: 'Templates pour la transformation d\'images',
    icon: 'ImageIcon'
  },
  {
    id: 'media-advanced-video',
    name: 'Vidéo Avancée',
    description: 'Templates pour génération vidéo complexe',
    icon: 'Video'
  },
  {
    id: 'media-3d-generation',
    name: 'Génération 3D',
    description: 'Templates pour contenu 3D et spatial',
    icon: 'Box'
  }
];

export const mediaGenerationTemplates: PromptTemplate[] = [
  {
    id: 'image-to-image-transformation',
    name: 'Transformation Image-to-Image Avancée',
    category: 'media-image-to-image',
    domain: 'Image Processing',
    description: 'Transforme des images existantes avec contrôle précis du style et contenu',
    template: `Transforme cette image selon les spécifications détaillées suivantes :

**IMAGE SOURCE :**
- Type d'image source : {source_image_type}
- Résolution source : {source_resolution}
- Qualité source : {source_quality}
- Éléments à préserver : {preserve_elements}
- Éléments à modifier : {modify_elements}

**TRANSFORMATION DÉSIRÉE :**
- Type de transformation : {transformation_type}
- Style artistique cible : {target_style}
- Intensité de transformation : {transformation_intensity}
- Approche de transformation : {transformation_approach}

**CONTRÔLE DE STYLE :**
- Style visuel : {visual_style_target}
- Palette de couleurs : {color_palette_target}
- Éclairage cible : {lighting_target}
- Texture et matériaux : {texture_materials}
- Atmosphère générale : {atmosphere_target}

**PARAMÈTRES DE PRÉSERVATION :**
- Composition : {preserve_composition}
- Proportions : {preserve_proportions}
- Éléments de premier plan : {preserve_foreground}
- Arrière-plan : {preserve_background}
- Détails spécifiques : {preserve_details}

**MODIFICATIONS SPÉCIFIQUES :**

### Modifications de Style
- Rendu artistique : {artistic_rendering}
- Époque/Era : {era_transformation}
- Genre artistique : {art_genre}
- Technique : {art_technique}

### Modifications Techniques
- Amélioration qualité : {quality_enhancement}
- Correction couleurs : {color_correction}
- Réparation défauts : {defect_repair}
- Upscaling : {upscaling_method}

### Modifications de Contenu
- Ajouts d'éléments : {content_additions}
- Suppressions : {content_removals}
- Replacements : {content_replacements}
- Modifications contextuelles : {context_modifications}

**PARAMÈTRES TECHNIQUES :**
- Méthode de transformation : {transformation_method}
- Strength/Influence : {transformation_strength}
- Guidance scale : {guidance_scale}
- Steps de diffusion : {diffusion_steps}
- Seed (optionnel) : {random_seed}

**CONTRÔLE QUALITÉ :**
- Résolution de sortie : {output_resolution}
- Format de sortie : {output_format}
- Compression : {compression_level}
- Variations : {generate_variations}

**PROMPT TECHNIQUE POUR IA :**
Transform image with {transformation_type}, maintain {preserve_elements}, style: {visual_style_target}, quality: {quality_enhancement}, method: {transformation_method}

**MOTS-CLÉS NÉGATIFS :**
{negative_prompts}

**INSTRUCTIONS SUPPLÉMENTAIRES :**
{additional_instructions}

**VALIDATION :**
- Vérifier la cohérence avec l'image source
- Maintenir la qualité visuelle
- Respecter les contraintes de préservation
- Optimiser pour l'usage : {intended_usage}`,
    variables: [
      { name: 'source_image_type', type: 'select', label: 'Type d\'image source', options: ['Photo réelle', 'Illustration', 'Artwork digital', 'Sketch/Dessin', 'Rendu 3D', 'Capture d\'écran'], required: true },
      { name: 'source_resolution', type: 'select', label: 'Résolution source', options: ['Basse (<512px)', 'Standard (512-1024px)', 'Haute (1024-2048px)', 'Très haute (>2048px)'], required: true },
      { name: 'source_quality', type: 'select', label: 'Qualité source', options: ['Excellente', 'Bonne', 'Moyenne', 'Faible', 'Très dégradée'], required: true },
      { name: 'preserve_elements', type: 'textarea', label: 'Éléments à préserver', placeholder: 'Visage, architecture, objets spécifiques...', required: true },
      { name: 'modify_elements', type: 'textarea', label: 'Éléments à modifier', placeholder: 'Arrière-plan, couleurs, style...', required: true },
      { name: 'transformation_type', type: 'select', label: 'Type de transformation', options: ['Style transfer', 'Genre conversion', 'Époque change', 'Amélioration qualité', 'Correction défauts', 'Artistic rendering', 'Photorealistic'], required: true },
      { name: 'target_style', type: 'select', label: 'Style cible', options: ['Photorealistic', 'Anime/Manga', 'Oil painting', 'Watercolor', 'Digital art', 'Sketch', 'Pop art', 'Vintage', 'Cyberpunk', 'Fantasy'], required: true },
      { name: 'transformation_intensity', type: 'select', label: 'Intensité', options: ['Très subtile (10%)', 'Légère (25%)', 'Modérée (50%)', 'Forte (75%)', 'Complète (90%)'], required: true },
      { name: 'transformation_approach', type: 'select', label: 'Approche', options: ['Préserver l\'essence', 'Transformation créative', 'Amélioration technique', 'Changement radical'], required: true },
      { name: 'visual_style_target', type: 'text', label: 'Style visuel cible', placeholder: 'Cinématographique, minimaliste, baroque...', required: true },
      { name: 'color_palette_target', type: 'select', label: 'Palette couleurs cible', options: ['Conserver originale', 'Tons chauds', 'Tons froids', 'Monochrome', 'Sépia', 'Vibrant', 'Pastel', 'Néon'], required: true },
      { name: 'lighting_target', type: 'select', label: 'Éclairage cible', options: ['Conserver original', 'Golden hour', 'Éclairage studio', 'Dramatique', 'Soft/Diffus', 'Nuit/Sombre', 'Surexposé'], required: true },
      { name: 'texture_materials', type: 'text', label: 'Textures/Matériaux', placeholder: 'Métal, bois, tissu, verre...', required: false },
      { name: 'atmosphere_target', type: 'select', label: 'Atmosphère cible', options: ['Conserver originale', 'Mystique', 'Romantique', 'Énergique', 'Mélancolique', 'Futuriste', 'Nostalgique'], required: true },
      { name: 'preserve_composition', type: 'select', label: 'Préserver composition', options: ['Totalement', 'Partiellement', 'Légères modifications', 'Changements majeurs'], required: true },
      { name: 'preserve_proportions', type: 'select', label: 'Préserver proportions', options: ['Exactement', 'Approximativement', 'Modifications mineures', 'Libre'], required: true },
      { name: 'preserve_foreground', type: 'select', label: 'Premier plan', options: ['Préserver intégralement', 'Styliser seulement', 'Modifications mineures', 'Transformation libre'], required: true },
      { name: 'preserve_background', type: 'select', label: 'Arrière-plan', options: ['Préserver', 'Styliser', 'Remplacer partiellement', 'Remplacer complètement'], required: true },
      { name: 'preserve_details', type: 'textarea', label: 'Détails spécifiques', placeholder: 'Éléments précis à absolument conserver', required: false },
      { name: 'artistic_rendering', type: 'select', label: 'Rendu artistique', options: ['Photorealistic', 'Stylisé', 'Cartoon', 'Painterly', 'Sketch-like', 'Abstract'], required: true },
      { name: 'era_transformation', type: 'select', label: 'Transformation époque', options: ['Actuelle', 'Vintage (50s-70s)', 'Rétro (80s-90s)', 'Victorian', 'Medieval', 'Futuriste'], required: false },
      { name: 'art_genre', type: 'select', label: 'Genre artistique', options: ['Réalisme', 'Impressionnisme', 'Expressionnisme', 'Surréalisme', 'Pop Art', 'Street Art', 'Digital Art'], required: false },
      { name: 'art_technique', type: 'select', label: 'Technique artistique', options: ['Peinture à l\'huile', 'Aquarelle', 'Pastel', 'Charcoal', 'Digital painting', 'Mixed media'], required: false },
      { name: 'quality_enhancement', type: 'select', label: 'Amélioration qualité', options: ['Aucune', 'Légère', 'Modérée', 'Agressive', 'Maximum'], required: true },
      { name: 'color_correction', type: 'select', label: 'Correction couleurs', options: ['Aucune', 'Balance blancs', 'Saturation', 'Contraste', 'Complète'], required: false },
      { name: 'defect_repair', type: 'select', label: 'Réparation défauts', options: ['Aucune', 'Bruit/Grain', 'Flou', 'Artefacts', 'Dommages'], required: false },
      { name: 'upscaling_method', type: 'select', label: 'Méthode upscaling', options: ['Aucun', '2x', '4x', 'AI Super Resolution', 'Vectorisation'], required: false },
      { name: 'content_additions', type: 'textarea', label: 'Ajouts de contenu', placeholder: 'Éléments à ajouter à l\'image', required: false },
      { name: 'content_removals', type: 'textarea', label: 'Suppressions', placeholder: 'Éléments à supprimer', required: false },
      { name: 'content_replacements', type: 'textarea', label: 'Remplacements', placeholder: 'Éléments à remplacer et par quoi', required: false },
      { name: 'context_modifications', type: 'textarea', label: 'Modifications contextuelles', placeholder: 'Changements d\'environnement, saison...', required: false },
      { name: 'transformation_method', type: 'select', label: 'Méthode de transformation', options: ['Stable Diffusion img2img', 'ControlNet', 'InstructPix2Pix', 'DALL-E variations', 'Custom pipeline'], required: true },
      { name: 'transformation_strength', type: 'select', label: 'Force transformation', options: ['0.1-0.3 (subtile)', '0.3-0.5 (légère)', '0.5-0.7 (modérée)', '0.7-0.9 (forte)', '0.9-1.0 (maximale)'], required: true },
      { name: 'guidance_scale', type: 'select', label: 'Guidance scale', options: ['5-7 (créatif)', '7-10 (équilibré)', '10-15 (fidèle)', '15-20 (très fidèle)'], required: true },
      { name: 'diffusion_steps', type: 'select', label: 'Steps de diffusion', options: ['20-30 (rapide)', '30-50 (standard)', '50-100 (qualité)', '100+ (maximum)'], required: true },
      { name: 'random_seed', type: 'text', label: 'Seed (optionnel)', placeholder: 'Nombre pour reproductibilité', required: false },
      { name: 'output_resolution', type: 'select', label: 'Résolution de sortie', options: ['Identique source', '512x512', '768x768', '1024x1024', '1536x1536', '2048x2048'], required: true },
      { name: 'output_format', type: 'select', label: 'Format de sortie', options: ['PNG (qualité max)', 'JPEG (taille optimisée)', 'WebP (moderne)', 'TIFF (professionnel)'], required: true },
      { name: 'compression_level', type: 'select', label: 'Compression', options: ['Aucune', 'Légère', 'Modérée', 'Agressive'], required: true },
      { name: 'generate_variations', type: 'select', label: 'Générer variations', options: ['Non', '2 variations', '4 variations', '8 variations'], required: false },
      { name: 'negative_prompts', type: 'textarea', label: 'Prompts négatifs', placeholder: 'Éléments à éviter (blurry, low quality, deformed...)', required: false },
      { name: 'additional_instructions', type: 'textarea', label: 'Instructions supplémentaires', placeholder: 'Contraintes ou spécifications particulières', required: false },
      { name: 'intended_usage', type: 'select', label: 'Usage prévu', options: ['Personnel', 'Commercial', 'Marketing', 'Artistique', 'Éducatif', 'Médical', 'Technique'], required: true }
    ],
    tags: ['Image-to-Image', 'Transformation', 'IA Générative', 'Style Transfer'],
    quality: 4.9,
    usageCount: 3421
  },
  {
    id: 'advanced-video-generation',
    name: 'Génération Vidéo Cinématique Avancée',
    category: 'media-advanced-video',
    domain: 'Video Generation',
    description: 'Crée des vidéos complexes avec contrôle narratif et cinématographique',
    template: `Génère une vidéo cinématographique professionnelle avec les spécifications suivantes :

**CONCEPT CRÉATIF :**
- Vision créative : {creative_vision}
- Genre cinématographique : {cinematic_genre}
- Mood/Tonalité : {video_mood}
- Message/Thème : {core_message}
- Public cible : {target_audience}

**STRUCTURE NARRATIVE :**

### Acte I - Setup ({setup_duration})
- Hook d'ouverture : {opening_hook}
- Présentation contexte : {context_setup}
- Établissement personnages : {character_setup}
- Ton narratif : {narrative_tone}

### Acte II - Développement ({development_duration})
- Progression narrative : {story_progression}
- Moments clés : {key_moments}
- Tension/Conflit : {narrative_tension}
- Révélations : {story_revelations}

### Acte III - Résolution ({resolution_duration})
- Climax : {climax_moment}
- Résolution : {story_resolution}
- Message final : {final_message}
- Call-to-action : {call_to_action}

**DIRECTION PHOTOGRAPHIQUE :**

### Composition Visuelle
- Style de cadrage : {framing_style}
- Mouvements de caméra : {camera_movements}
- Profondeur de champ : {depth_of_field}
- Ratio d'aspect : {aspect_ratio}

### Éclairage Cinématographique
- Setup d'éclairage : {lighting_setup}
- Palette de couleurs : {color_palette}
- Contraste et mood : {visual_contrast}
- Évolution lumineuse : {lighting_evolution}

### Environnements et Décors
- Locations principales : {main_locations}
- Design production : {production_design}
- Atmosphère visuelle : {visual_atmosphere}
- Époque/Setting : {time_period_setting}

**PERSONNAGES ET CASTING :**
- Personnages principaux : {main_characters}
- Style de performance : {performance_style}
- Costume/Apparence : {costume_design}
- Interactions : {character_interactions}

**AUDIO ET MUSIQUE :**

### Bande Sonore
- Style musical : {music_style}
- Instrumentation : {instrumentation}
- Progression musicale : {musical_progression}
- Moments musicaux clés : {key_musical_moments}

### Design Sonore
- Ambiances sonores : {sound_ambiences}
- Effets sonores : {sound_effects}
- Voix/Narration : {voiceover_style}
- Mix audio : {audio_mix_style}

**SPÉCIFICATIONS TECHNIQUES :**

### Paramètres Vidéo
- Résolution : {video_resolution}
- Frame rate : {frame_rate}
- Durée totale : {total_duration}
- Format de sortie : {output_format}

### Post-Production
- Style de montage : {editing_style}
- Transitions : {transition_style}
- Effets visuels : {visual_effects}
- Color grading : {color_grading}

### Optimisations
- Plateforme principale : {primary_platform}
- Versions alternatives : {alternative_versions}
- Sous-titres : {subtitle_requirements}
- Accessibilité : {accessibility_features}

**PROMPT TECHNIQUE POUR IA VIDÉO :**

Create cinematic {cinematic_genre} video:

Scene Description:
{detailed_scene_description}

Visual Style:
- Cinematography: {cinematography_style}
- Lighting: {lighting_description}
- Color palette: {color_palette}
- Camera work: {camera_work_details}

Technical Settings:
- Duration: {total_duration}
- Resolution: {video_resolution}
- Style: {ai_video_style}
- Motion: {motion_parameters}
- Quality: {quality_settings}

Narrative Elements:
{narrative_elements}

**MOTS-CLÉS CRÉATIFS :**
{creative_keywords}

**RÉFÉRENCES STYLISTIQUES :**
- Directeurs : {director_references}
- Films/Styles : {film_references}
- Techniques : {technique_references}

**CONTRAINTES ET CONSIDÉRATIONS :**
{production_constraints}

**LIVRABLE FINAL :**
{final_deliverable_specs}`,
    variables: [
      { name: 'creative_vision', type: 'textarea', label: 'Vision créative', placeholder: 'Description de l\'idée centrale et de l\'impact souhaité', required: true },
      { name: 'cinematic_genre', type: 'select', label: 'Genre cinématographique', options: ['Drame', 'Action', 'Thriller', 'Comédie', 'Sci-Fi', 'Fantasy', 'Horreur', 'Romance', 'Documentaire', 'Experimental'], required: true },
      { name: 'video_mood', type: 'select', label: 'Mood/Tonalité', options: ['Épique', 'Intime', 'Mystérieux', 'Énergique', 'Mélancolique', 'Inspirant', 'Tension', 'Nostalgie', 'Futuriste'], required: true },
      { name: 'core_message', type: 'textarea', label: 'Message central', placeholder: 'Le message ou thème principal à véhiculer', required: true },
      { name: 'target_audience', type: 'select', label: 'Public cible', options: ['Grand public', 'Jeunes adultes', 'Professionnels', 'Niche spécialisée', 'Enfants/Familles', 'Seniors'], required: true },
      { name: 'setup_duration', type: 'select', label: 'Durée setup', options: ['10-15 sec', '15-30 sec', '30-60 sec', '1-2 min'], required: true },
      { name: 'development_duration', type: 'select', label: 'Durée développement', options: ['30 sec-1 min', '1-2 min', '2-5 min', '5+ min'], required: true },
      { name: 'resolution_duration', type: 'select', label: 'Durée résolution', options: ['5-10 sec', '10-20 sec', '20-30 sec', '30+ sec'], required: true },
      { name: 'opening_hook', type: 'textarea', label: 'Hook d\'ouverture', placeholder: 'Comment captiver l\'attention dès les premières secondes', required: true },
      { name: 'context_setup', type: 'textarea', label: 'Setup du contexte', placeholder: 'Comment établir le cadre et la situation', required: true },
      { name: 'character_setup', type: 'textarea', label: 'Présentation personnages', placeholder: 'Comment introduire les personnages principaux', required: false },
      { name: 'narrative_tone', type: 'select', label: 'Ton narratif', options: ['Sérieux', 'Léger', 'Dramatique', 'Humoristique', 'Poétique', 'Direct', 'Contemplatif'], required: true },
      { name: 'story_progression', type: 'textarea', label: 'Progression narrative', placeholder: 'Comment l\'histoire évolue et se développe', required: true },
      { name: 'key_moments', type: 'textarea', label: 'Moments clés', placeholder: 'Scènes ou moments importants à inclure', required: true },
      { name: 'narrative_tension', type: 'select', label: 'Tension narrative', options: ['Aucune', 'Légère', 'Modérée', 'Forte', 'Intense'], required: true },
      { name: 'story_revelations', type: 'textarea', label: 'Révélations', placeholder: 'Informations révélées au cours du développement', required: false },
      { name: 'climax_moment', type: 'textarea', label: 'Moment climax', placeholder: 'Point culminant de la vidéo', required: true },
      { name: 'story_resolution', type: 'textarea', label: 'Résolution', placeholder: 'Comment l\'histoire se conclut', required: true },
      { name: 'final_message', type: 'textarea', label: 'Message final', placeholder: 'Dernière impression à laisser', required: true },
      { name: 'call_to_action', type: 'select', label: 'Call-to-action', options: ['Aucun', 'Visitez le site', 'Contactez-nous', 'Partagez', 'Abonnez-vous', 'Achetez', 'Inscrivez-vous'], required: false },
      { name: 'framing_style', type: 'select', label: 'Style de cadrage', options: ['Classique', 'Dynamique', 'Intime', 'Épique', 'Expérimental', 'Documentaire'], required: true },
      { name: 'camera_movements', type: 'select', label: 'Mouvements caméra', options: ['Statique', 'Panoramique fluide', 'Travelling', 'Handheld', 'Drone', 'Mixte sophistiqué'], required: true },
      { name: 'depth_of_field', type: 'select', label: 'Profondeur de champ', options: ['Nette partout', 'Bokeh léger', 'Bokeh prononcé', 'Focus pulling', 'Variable'], required: true },
      { name: 'aspect_ratio', type: 'select', label: 'Ratio d\'aspect', options: ['16:9 (standard)', '21:9 (cinéma)', '9:16 (vertical)', '1:1 (carré)', '4:3 (classique)'], required: true },
      { name: 'lighting_setup', type: 'select', label: 'Setup éclairage', options: ['Naturel', 'Studio 3-points', 'Dramatique', 'Soft/Diffus', 'High-key', 'Low-key', 'Mixte'], required: true },
      { name: 'color_palette', type: 'select', label: 'Palette couleurs', options: ['Naturelle', 'Tons chauds', 'Tons froids', 'Monochrome', 'Contraste élevé', 'Pastel', 'Néon/Cyber'], required: true },
      { name: 'visual_contrast', type: 'select', label: 'Contraste visuel', options: ['Subtil', 'Modéré', 'Élevé', 'Dramatique'], required: true },
      { name: 'lighting_evolution', type: 'textarea', label: 'Évolution lumineuse', placeholder: 'Comment l\'éclairage évolue dans la vidéo', required: false },
      { name: 'main_locations', type: 'textarea', label: 'Locations principales', placeholder: 'Lieux et environnements de tournage', required: true },
      { name: 'production_design', type: 'textarea', label: 'Design de production', placeholder: 'Décors, props, design visuel général', required: false },
      { name: 'visual_atmosphere', type: 'select', label: 'Atmosphère visuelle', options: ['Réaliste', 'Stylisée', 'Surréaliste', 'Minimaliste', 'Luxueuse', 'Industrielle', 'Organique'], required: true },
      { name: 'time_period_setting', type: 'select', label: 'Époque/Setting', options: ['Contemporain', 'Futuriste', 'Rétro (80s-90s)', 'Vintage (50s-70s)', 'Historique', 'Intemporel'], required: true },
      { name: 'main_characters', type: 'textarea', label: 'Personnages principaux', placeholder: 'Description des personnages et leur rôle', required: false },
      { name: 'performance_style', type: 'select', label: 'Style de performance', options: ['Naturel', 'Théâtral', 'Minimaliste', 'Énergique', 'Contemplatif'], required: false },
      { name: 'costume_design', type: 'textarea', label: 'Design costume', placeholder: 'Style vestimentaire et apparence', required: false },
      { name: 'character_interactions', type: 'textarea', label: 'Interactions personnages', placeholder: 'Comment les personnages interagissent', required: false },
      { name: 'music_style', type: 'select', label: 'Style musical', options: ['Orchestral', 'Electronic', 'Ambient', 'Rock', 'Jazz', 'Minimal', 'Ethnic', 'Hybrid'], required: true },
      { name: 'instrumentation', type: 'text', label: 'Instrumentation', placeholder: 'Instruments et sons principaux', required: false },
      { name: 'musical_progression', type: 'textarea', label: 'Progression musicale', placeholder: 'Comment la musique évolue', required: false },
      { name: 'key_musical_moments', type: 'textarea', label: 'Moments musicaux clés', placeholder: 'Synchronisation musique-image importante', required: false },
      { name: 'sound_ambiences', type: 'text', label: 'Ambiances sonores', placeholder: 'Sons d\'ambiance et atmosphères', required: false },
      { name: 'sound_effects', type: 'select', label: 'Effets sonores', options: ['Minimaux', 'Réalistes', 'Stylisés', 'Cinématiques', 'Expérimentaux'], required: false },
      { name: 'voiceover_style', type: 'select', label: 'Style voix/narration', options: ['Aucune', 'Narrateur professionnel', 'Conversationnel', 'Dramatique', 'Documentaire'], required: false },
      { name: 'audio_mix_style', type: 'select', label: 'Style mix audio', options: ['Standard', 'Cinématique', 'Immersif', 'Broadcast', 'Surround'], required: false },
      { name: 'video_resolution', type: 'select', label: 'Résolution vidéo', options: ['1080p', '4K', '8K', 'Vertical 9:16', 'Cinéma 21:9'], required: true },
      { name: 'frame_rate', type: 'select', label: 'Frame rate', options: ['24fps (cinéma)', '30fps (standard)', '60fps (fluide)', '120fps (slow-motion)'], required: true },
      { name: 'total_duration', type: 'select', label: 'Durée totale', options: ['30 secondes', '1 minute', '2 minutes', '3-5 minutes', '5-10 minutes', '10+ minutes'], required: true },
      { name: 'output_format', type: 'select', label: 'Format de sortie', options: ['MP4 H.264', 'MP4 H.265/HEVC', 'ProRes', 'DNxHD', 'WebM'], required: true },
      { name: 'editing_style', type: 'select', label: 'Style de montage', options: ['Classique', 'Rythmé', 'Contemplatif', 'Expérimental', 'Match-cut', 'Jump-cut'], required: true },
      { name: 'transition_style', type: 'select', label: 'Style transitions', options: ['Cuts francs', 'Fondus', 'Wipes créatifs', 'Morphing', 'Match-cuts'], required: true },
      { name: 'visual_effects', type: 'select', label: 'Effets visuels', options: ['Aucun', 'Légers', 'Modérés', 'Spectaculaires', 'Artistiques'], required: true },
      { name: 'color_grading', type: 'select', label: 'Color grading', options: ['Naturel', 'Cinématique', 'Stylisé', 'High contrast', 'Vintage', 'Futuriste'], required: true },
      { name: 'primary_platform', type: 'select', label: 'Plateforme principale', options: ['YouTube', 'Instagram', 'TikTok', 'LinkedIn', 'Cinéma/TV', 'Web'], required: true },
      { name: 'alternative_versions', type: 'select', label: 'Versions alternatives', options: ['Aucune', 'Courts extraits', 'Différents formats', 'Langues multiples'], required: false },
      { name: 'subtitle_requirements', type: 'select', label: 'Sous-titres', options: ['Aucun', 'Français', 'Multilingues', 'Captions accessibilité'], required: false },
      { name: 'accessibility_features', type: 'select', label: 'Accessibilité', options: ['Standard', 'Audio-description', 'Contrastes élevés', 'Complète'], required: false },
      { name: 'detailed_scene_description', type: 'textarea', label: 'Description scène détaillée', placeholder: 'Description visuelle précise pour l\'IA', required: true },
      { name: 'cinematography_style', type: 'text', label: 'Style cinématographique', placeholder: 'Style de direction photo', required: true },
      { name: 'lighting_description', type: 'text', label: 'Description éclairage', placeholder: 'Setup d\'éclairage détaillé', required: true },
      { name: 'camera_work_details', type: 'textarea', label: 'Détails caméra', placeholder: 'Mouvements et angles spécifiques', required: true },
      { name: 'ai_video_style', type: 'text', label: 'Style IA vidéo', placeholder: 'Style technique pour l\'IA (realistic, cinematic...)', required: true },
      { name: 'motion_parameters', type: 'text', label: 'Paramètres mouvement', placeholder: 'Contrôle du mouvement et de l\'animation', required: false },
      { name: 'quality_settings', type: 'select', label: 'Paramètres qualité', options: ['Standard', 'High', 'Premium', 'Maximum'], required: true },
      { name: 'narrative_elements', type: 'textarea', label: 'Éléments narratifs', placeholder: 'Structure narrative pour l\'IA', required: true },
      { name: 'creative_keywords', type: 'textarea', label: 'Mots-clés créatifs', placeholder: 'Mots-clés pour guider la création', required: false },
      { name: 'director_references', type: 'text', label: 'Références réalisateurs', placeholder: 'Nolan, Fincher, Kubrick...', required: false },
      { name: 'film_references', type: 'text', label: 'Références films', placeholder: 'Films ou styles de référence', required: false },
      { name: 'technique_references', type: 'text', label: 'Références techniques', placeholder: 'Techniques cinématographiques spécifiques', required: false },
      { name: 'production_constraints', type: 'textarea', label: 'Contraintes production', placeholder: 'Limites, contraintes ou considérations spéciales', required: false },
      { name: 'final_deliverable_specs', type: 'textarea', label: 'Spécifications livrable', placeholder: 'Détails du livrable final attendu', required: true }
    ],
    tags: ['Text-to-Video', 'Cinématique', 'Production Vidéo', 'Storytelling'],
    quality: 4.9,
    usageCount: 1789
  }
];
