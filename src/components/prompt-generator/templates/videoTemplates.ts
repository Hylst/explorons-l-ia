
import { PromptTemplate, PromptCategory } from '../promptTemplatesData';

export const videoCategories: PromptCategory[] = [
  {
    id: 'video-commercial',
    name: 'Commercial',
    description: 'Templates pour la création de vidéos commerciales',
    icon: 'Video'
  },
  {
    id: 'video-creative',
    name: 'Créatif',
    description: 'Templates pour la création artistique et narrative',
    icon: 'Film'
  },
  {
    id: 'video-educational',
    name: 'Éducatif',
    description: 'Templates pour le contenu éducatif et explicatif',
    icon: 'PlayCircle'
  }
];

export const videoTemplates: PromptTemplate[] = [
  {
    id: 'video-product-showcase',
    name: 'Showcase Produit Dynamique',
    category: 'video-commercial',
    domain: 'Marketing Vidéo',
    description: 'Crée des prompts pour des vidéos de présentation produit engageantes',
    template: `Génère une vidéo de showcase produit avec les spécifications suivantes :

**PRODUIT ET CONTEXTE :**
- Produit : {product_name}
- Catégorie : {product_category}
- USP principal : {unique_selling_point}
- Public cible : {target_demographic}

**CONCEPT CRÉATIF :**
- Style visuel : {visual_style}
- Approche narrative : {narrative_approach}
- Mood/Ambiance : {video_mood}
- Palette de couleurs : {color_palette}

**STRUCTURE VIDÉO :**
- Durée totale : {video_duration}
- Hook d'ouverture : {opening_hook}
- Développement : {development_style}
- Call-to-action : {cta_type}

**ÉLÉMENTS VISUELS :**
- Type de prises : {shot_types}
- Mouvements de caméra : {camera_movements}
- Éclairage : {lighting_style}
- Environnement : {setting_environment}

**MOTION ET ANIMATION :**
- Transitions : {transition_style}
- Effets visuels : {visual_effects}
- Graphiques animés : {motion_graphics}
- Rythme montage : {editing_pace}

**AUDIO ET MUSIQUE :**
- Style musical : {music_style}
- Voix off : {voiceover_style}
- Effets sonores : {sound_effects}
- Mix audio : {audio_mix}

**SPÉCIFICATIONS TECHNIQUES :**
- Résolution : {video_resolution}
- Frame rate : {frame_rate}
- Format de sortie : {output_format}
- Ratio d'aspect : {aspect_ratio}

**PLATEFORMES ET USAGE :**
- Plateforme principale : {primary_platform}
- Optimisations : {platform_optimizations}
- Versions dérivées : {derivative_versions}

**PROMPT POUR IA VIDÉO :**
Create a {video_duration} {visual_style} product showcase video featuring {product_name}. 

Visual Style: {detailed_visual_description}
Scene Description: {scene_breakdown}
Camera Work: {camera_specifications}
Lighting: {lighting_description}
Post-Production: {post_production_notes}

Technical Settings:
- Resolution: {video_resolution}
- Style: {ai_video_style}
- Motion: {motion_intensity}
- Quality: Professional commercial grade

Keywords: {video_keywords}
Negative Prompts: {negative_prompts}

**RÉFÉRENCES ET INSPIRATION :**
Style de référence : {reference_style}
Marques d'inspiration : {brand_references}`,
    variables: [
      { name: 'product_name', type: 'text', label: 'Nom du produit', placeholder: 'iPhone 15, Tesla Model Y, Nike Air Max...', required: true },
      { name: 'product_category', type: 'select', label: 'Catégorie produit', options: ['Tech/Électronique', 'Mode/Lifestyle', 'Automobile', 'Beauté/Cosmétiques', 'Alimentaire', 'Sport/Fitness', 'Maison/Déco', 'Services'], required: true },
      { name: 'unique_selling_point', type: 'textarea', label: 'USP principal', placeholder: 'Révolutionnaire, écologique, abordable...', required: true },
      { name: 'target_demographic', type: 'select', label: 'Cible démographique', options: ['Gen Z (16-24)', 'Millennials (25-40)', 'Gen X (41-56)', 'Boomers (57+)', 'Familles', 'Professionnels', 'Early adopters'], required: true },
      { name: 'visual_style', type: 'select', label: 'Style visuel', options: ['Cinématique', 'Minimaliste', 'Dynamique/Énergique', 'Lifestyle', 'Tech/Futuriste', 'Naturel/Organique', 'Luxe/Premium', 'Playful/Fun'], required: true },
      { name: 'narrative_approach', type: 'select', label: 'Approche narrative', options: ['Démonstration directe', 'Storytelling émotionnel', 'Problem-solution', 'Avant/après', 'Témoignage utilisateur', 'Comparaison', 'Unboxing experience'], required: true },
      { name: 'video_mood', type: 'select', label: 'Mood/Ambiance', options: ['Inspirant', 'Excitant', 'Sophistiqué', 'Accessible', 'Innovant', 'Chaleureux', 'Professionnel', 'Aventureux'], required: true },
      { name: 'color_palette', type: 'select', label: 'Palette couleurs', options: ['Brand colors', 'Monochrome', 'Couleurs vives', 'Tons neutres', 'Gradient moderne', 'Naturel/terreux', 'Néon/cyber'], required: true },
      { name: 'video_duration', type: 'select', label: 'Durée vidéo', options: ['15 secondes', '30 secondes', '60 secondes', '90 secondes', '2-3 minutes', '5+ minutes'], required: true },
      { name: 'opening_hook', type: 'select', label: 'Hook d\'ouverture', options: ['Question provocante', 'Stat surprenante', 'Problème relatable', 'Révélation dramatique', 'Action immédiate', 'Teaser mystérieux'], required: true },
      { name: 'development_style', type: 'select', label: 'Style développement', options: ['Démonstration étape par étape', 'Montage rapide features', 'Progression narrative', 'Comparaison visuelle', 'Lifestyle integration'], required: true },
      { name: 'cta_type', type: 'select', label: 'Type de CTA', options: ['Visite website', 'Achète maintenant', 'Essai gratuit', 'Télécharge app', 'Découvre plus', 'Contacte-nous'], required: true },
      { name: 'shot_types', type: 'select', label: 'Types de prises', options: ['Macro/Détails', 'Plans larges', 'Portraits', 'Action/Mouvement', 'Overhead shots', 'Mix équilibré'], required: true },
      { name: 'camera_movements', type: 'select', label: 'Mouvements caméra', options: ['Statique/Tripod', 'Travelling fluide', 'Handheld dynamique', 'Drone/Aérien', 'Gimbal sophistiqué', 'Rotation/Orbit'], required: true },
      { name: 'lighting_style', type: 'select', label: 'Style éclairage', options: ['Studio professionnel', 'Naturel/Fenêtre', 'Dramatique/Contrasté', 'Soft/Diffus', 'Neon/Coloré', 'Golden hour'], required: true },
      { name: 'setting_environment', type: 'select', label: 'Environnement', options: ['Studio blanc', 'Lifestyle home', 'Urbain/Ville', 'Nature/Extérieur', 'Bureau moderne', 'Industriel/Loft'], required: true },
      { name: 'transition_style', type: 'select', label: 'Style transitions', options: ['Cuts nets', 'Morphing fluide', 'Wipes créatifs', 'Zoom transitions', 'Match cuts', 'Beat sync'], required: true },
      { name: 'visual_effects', type: 'select', label: 'Effets visuels', options: ['Minimal/Naturel', 'Légers (color grading)', 'Modérés (particules)', 'Avancés (VFX)', 'Futuristic (hologrammes)', 'Stylisés (glitch)'], required: true },
      { name: 'motion_graphics', type: 'select', label: 'Graphiques animés', options: ['Aucun', 'Texte animé simple', 'Infographies', 'Logo animations', 'UI elements', 'Complex graphics'], required: true },
      { name: 'editing_pace', type: 'select', label: 'Rythme montage', options: ['Lent/Contemplatif', 'Modéré', 'Rapide/Énergique', 'Variable/Dynamique', 'Beat-driven'], required: true },
      { name: 'music_style', type: 'select', label: 'Style musical', options: ['Corporate upbeat', 'Electronic/Modern', 'Cinematic orchestral', 'Indie/Alternative', 'Hip-hop/Urban', 'Ambient/Minimal', 'Pop commercial'], required: true },
      { name: 'voiceover_style', type: 'select', label: 'Style voix off', options: ['Aucune', 'Professionnel/Neutre', 'Conversationnel', 'Énergique/Enthousiaste', 'Sophistiqué/Premium', 'Jeune/Décontracté'], required: true },
      { name: 'sound_effects', type: 'select', label: 'Effets sonores', options: ['Minimaux', 'Réalistes', 'Stylisés', 'Futuristes', 'Organic/Naturels'], required: true },
      { name: 'audio_mix', type: 'select', label: 'Mix audio', options: ['Standard', 'Bass heavy', 'Vocal focused', 'Immersive/Spatial', 'Broadcast ready'], required: true },
      { name: 'video_resolution', type: 'select', label: 'Résolution', options: ['1080p', '4K', '8K', 'Vertical 9:16', 'Square 1:1'], required: true },
      { name: 'frame_rate', type: 'select', label: 'Frame rate', options: ['24fps (cinéma)', '30fps (standard)', '60fps (smooth)', '120fps (slow-mo)'], required: true },
      { name: 'output_format', type: 'select', label: 'Format sortie', options: ['MP4 H.264', 'MP4 H.265', 'ProRes', 'DNxHD', 'WebM'], required: true },
      { name: 'aspect_ratio', type: 'select', label: 'Ratio d\'aspect', options: ['16:9 (horizontal)', '9:16 (vertical)', '1:1 (carré)', '4:5 (portrait)', '21:9 (cinéma)'], required: true },
      { name: 'primary_platform', type: 'select', label: 'Plateforme principale', options: ['YouTube', 'Instagram', 'TikTok', 'LinkedIn', 'Facebook', 'Twitter', 'Website', 'TV/Broadcast'], required: true },
      { name: 'platform_optimizations', type: 'select', label: 'Optimisations', options: ['Mobile-first', 'Desktop optimized', 'Cross-platform', 'Platform-specific'], required: true },
      { name: 'derivative_versions', type: 'select', label: 'Versions dérivées', options: ['Version courte/longue', 'Multi-formats', 'Multi-langues', 'A/B test versions'], required: false },
      { name: 'detailed_visual_description', type: 'textarea', label: 'Description visuelle détaillée', placeholder: 'Décrivez l\'esthétique souhaitée...', required: true },
      { name: 'scene_breakdown', type: 'textarea', label: 'Décomposition des scènes', placeholder: 'Scène 1: Introduction, Scène 2: Démonstration...', required: true },
      { name: 'camera_specifications', type: 'textarea', label: 'Spécifications caméra', placeholder: 'Plan large, travelling avant, gros plan...', required: true },
      { name: 'lighting_description', type: 'text', label: 'Description éclairage', placeholder: 'Soft key light, rim lighting...', required: false },
      { name: 'post_production_notes', type: 'textarea', label: 'Notes post-production', placeholder: 'Color grading, effects, transitions...', required: false },
      { name: 'ai_video_style', type: 'text', label: 'Style IA vidéo', placeholder: 'photorealistic, cinematic, commercial...', required: false },
      { name: 'motion_intensity', type: 'select', label: 'Intensité mouvement', options: ['Subtle', 'Moderate', 'Dynamic', 'Extreme'], required: false },
      { name: 'video_keywords', type: 'textarea', label: 'Mots-clés vidéo', placeholder: 'premium, sleek, innovative, dynamic...', required: false },
      { name: 'negative_prompts', type: 'textarea', label: 'Prompts négatifs', placeholder: 'blurry, low quality, amateur...', required: false },
      { name: 'reference_style', type: 'text', label: 'Style de référence', placeholder: 'Apple ads, Nike campaigns...', required: false },
      { name: 'brand_references', type: 'text', label: 'Références marques', placeholder: 'Tesla, Apple, Nike...', required: false }
    ],
    tags: ['Text-to-Video', 'Marketing', 'Produit', 'Commercial'],
    quality: 4.7,
    usageCount: 1456
  }
];
