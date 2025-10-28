
import { PromptTemplate, PromptCategory } from '../promptTemplatesData';

export const audioCategories: PromptCategory[] = [
  {
    id: 'audio-music',
    name: 'Musique',
    description: 'Templates pour la création musicale',
    icon: 'Music'
  },
  {
    id: 'audio-voice',
    name: 'Synthèse Vocale',
    description: 'Templates pour la génération de voix',
    icon: 'Mic'
  },
  {
    id: 'audio-effects',
    name: 'Effets Sonores',
    description: 'Templates pour les effets audio',
    icon: 'Volume2'
  }
];

export const audioTemplates: PromptTemplate[] = [
  {
    id: 'audio-music-composition',
    name: 'Composition Musicale IA',
    category: 'audio-music',
    domain: 'Musique',
    description: 'Génère des prompts pour créer des compositions musicales avec l\'IA',
    template: `Crée une composition musicale avec les caractéristiques suivantes :

**STYLE ET GENRE :**
- Genre principal : {music_genre}
- Sous-genre : {music_subgenre}
- Influence stylistique : {style_influence}
- Époque de référence : {era_reference}

**STRUCTURE MUSICALE :**
- Durée souhaitée : {track_duration}
- Tempo (BPM) : {tempo_bpm}
- Signature rythmique : {time_signature}
- Tonalité : {musical_key}
- Structure : {song_structure}

**INSTRUMENTATION :**
- Instruments principaux : {main_instruments}
- Accompagnement : {accompaniment}
- Percussions : {percussion_type}
- Éléments électroniques : {electronic_elements}

**AMBIANCE ET ÉMOTION :**
- Mood général : {overall_mood}
- Énergie : {energy_level}
- Progression émotionnelle : {emotional_arc}
- Ambiance : {atmosphere}

**CARACTÉRISTIQUES TECHNIQUES :**
- Complexité harmonique : {harmonic_complexity}
- Dynamique : {dynamic_range}
- Texture musicale : {musical_texture}
- Production style : {production_style}

**USAGE PRÉVU :**
- Contexte d'utilisation : {usage_context}
- Public cible : {target_audience}
- Plateforme de diffusion : {platform}

**RÉFÉRENCES ARTISTIQUES :**
Dans le style de : {artist_reference}
Inspiration : {inspiration_source}

**SPÉCIFICATIONS TECHNIQUES :**
- Qualité audio : {audio_quality}
- Format de sortie : {output_format}
- Mastering style : {mastering_style}

**ÉLÉMENTS CRÉATIFS SPÉCIAUX :**
{creative_elements}

**MOTS-CLÉS POUR IA MUSICALE :**
{ai_music_keywords}

Paramètres avancés : {advanced_audio_params}`,
    variables: [
      { name: 'music_genre', type: 'select', label: 'Genre musical', options: ['Electronic', 'Rock', 'Pop', 'Hip-Hop', 'Jazz', 'Classical', 'Ambient', 'Folk', 'R&B', 'Reggae', 'Country', 'Blues'], required: true },
      { name: 'music_subgenre', type: 'select', label: 'Sous-genre', options: ['House', 'Techno', 'Dubstep', 'Trap', 'Lo-fi', 'Synthwave', 'Indie', 'Alternative', 'Progressive', 'Experimental'], required: false },
      { name: 'style_influence', type: 'text', label: 'Influences stylistiques', placeholder: 'Années 80, minimalisme, fusion...', required: false },
      { name: 'era_reference', type: 'select', label: 'Époque de référence', options: ['Années 60', 'Années 70', 'Années 80', 'Années 90', '2000s', '2010s', 'Contemporain', 'Futuriste'], required: false },
      { name: 'track_duration', type: 'select', label: 'Durée', options: ['30 secondes', '1 minute', '2 minutes', '3-4 minutes', '5+ minutes', 'Loop infini'], required: true },
      { name: 'tempo_bpm', type: 'select', label: 'Tempo (BPM)', options: ['Très lent (60-80)', 'Lent (80-100)', 'Modéré (100-120)', 'Moyen (120-140)', 'Rapide (140-160)', 'Très rapide (160+)'], required: true },
      { name: 'time_signature', type: 'select', label: 'Signature rythmique', options: ['4/4', '3/4', '2/4', '6/8', '5/4', '7/8', 'Complexe'], required: true },
      { name: 'musical_key', type: 'select', label: 'Tonalité', options: ['C Major', 'G Major', 'D Major', 'A Minor', 'E Minor', 'F# Minor', 'Atonal', 'Modal'], required: false },
      { name: 'song_structure', type: 'select', label: 'Structure', options: ['Intro-Verse-Chorus-Verse-Chorus-Bridge-Chorus-Outro', 'ABABCB', 'Free form', 'Loop based', 'Minimalist'], required: true },
      { name: 'main_instruments', type: 'textarea', label: 'Instruments principaux', placeholder: 'Piano, guitare électrique, synthétiseur...', required: true },
      { name: 'accompaniment', type: 'text', label: 'Accompagnement', placeholder: 'Cordes, brass section, pad synthé...', required: false },
      { name: 'percussion_type', type: 'select', label: 'Type de percussions', options: ['Batterie acoustique', 'Batterie électronique', 'Percussions ethniques', 'Drum machine', 'Hybride', 'Sans percussion'], required: true },
      { name: 'electronic_elements', type: 'select', label: 'Éléments électroniques', options: ['Aucun', 'Légers (reverb, delay)', 'Modérés (synthés, samples)', 'Importants (production électronique)', 'Totalement électronique'], required: true },
      { name: 'overall_mood', type: 'select', label: 'Mood général', options: ['Joyeux', 'Mélancolique', 'Énergique', 'Relaxant', 'Mystérieux', 'Romantique', 'Agressif', 'Contemplatif'], required: true },
      { name: 'energy_level', type: 'select', label: 'Niveau d\'énergie', options: ['Très calme', 'Calme', 'Modéré', 'Énergique', 'Très énergique', 'Explosif'], required: true },
      { name: 'emotional_arc', type: 'select', label: 'Arc émotionnel', options: ['Stable', 'Croissant', 'Décroissant', 'En montagne russe', 'Climax au milieu', 'Build-up final'], required: true },
      { name: 'atmosphere', type: 'select', label: 'Atmosphère', options: ['Intime', 'Épique', 'Urbaine', 'Naturelle', 'Cosmique', 'Nostalgique', 'Futuriste', 'Organique'], required: true },
      { name: 'harmonic_complexity', type: 'select', label: 'Complexité harmonique', options: ['Simple (accords de base)', 'Modérée', 'Complexe (jazz, prog)', 'Très complexe (atonale)'], required: true },
      { name: 'dynamic_range', type: 'select', label: 'Dynamique', options: ['Subtile', 'Modérée', 'Large', 'Extrême'], required: true },
      { name: 'musical_texture', type: 'select', label: 'Texture musicale', options: ['Monophonique', 'Homophonique', 'Polyphonique', 'Dense', 'Sparse', 'Layered'], required: true },
      { name: 'production_style', type: 'select', label: 'Style de production', options: ['Lo-fi', 'Hi-fi', 'Vintage', 'Moderne', 'Overproduced', 'Raw/Live'], required: true },
      { name: 'usage_context', type: 'select', label: 'Contexte d\'usage', options: ['Écoute personnelle', 'Background/Ambiance', 'Danse', 'Film/Pub', 'Jeu vidéo', 'Méditation', 'Sport'], required: true },
      { name: 'target_audience', type: 'select', label: 'Public cible', options: ['Grand public', 'Jeunes (13-25)', 'Adultes (25-45)', 'Matures (45+)', 'Niche/Spécialisé'], required: true },
      { name: 'platform', type: 'select', label: 'Plateforme', options: ['Streaming (Spotify, etc.)', 'Radio', 'Live/Concert', 'Sync (Pub/Film)', 'Réseaux sociaux'], required: false },
      { name: 'artist_reference', type: 'text', label: 'Référence artiste', placeholder: 'Daft Punk, Hans Zimmer, Billie Eilish...', required: false },
      { name: 'inspiration_source', type: 'text', label: 'Source d\'inspiration', placeholder: 'Nature, ville, espace, émotions...', required: false },
      { name: 'audio_quality', type: 'select', label: 'Qualité audio', options: ['Standard (44.1kHz/16bit)', 'CD Quality', 'Hi-Res (96kHz/24bit)', 'Studio Master'], required: true },
      { name: 'output_format', type: 'select', label: 'Format de sortie', options: ['MP3', 'WAV', 'FLAC', 'STEM (multipistes)'], required: true },
      { name: 'mastering_style', type: 'select', label: 'Style de mastering', options: ['Radio ready', 'Streaming optimized', 'Audiophile', 'Vintage', 'Loud'], required: false },
      { name: 'creative_elements', type: 'textarea', label: 'Éléments créatifs spéciaux', placeholder: 'Reverse reverb, glitch effects, field recordings...', required: false },
      { name: 'ai_music_keywords', type: 'textarea', label: 'Mots-clés IA musicale', placeholder: 'dreamy, uplifting, dark, cinematic...', required: false },
      { name: 'advanced_audio_params', type: 'textarea', label: 'Paramètres avancés', placeholder: 'Seed, variations, mixing instructions...', required: false }
    ],
    tags: ['Text-to-Audio', 'Musique', 'Composition', 'IA Audio'],
    quality: 4.6,
    usageCount: 1567
  },
  {
    id: 'audio-voice-synthesis',
    name: 'Synthèse Vocale Professionnelle',
    category: 'audio-voice',
    domain: 'Voice AI',
    description: 'Crée des prompts pour la génération de voix naturelles et expressives',
    template: `Génère une synthèse vocale avec les caractéristiques suivantes :

**CONTENU VOCAL :**
Texte à synthétiser :
"{text_content}"

**CARACTÉRISTIQUES VOCALES :**
- Type de voix : {voice_type}
- Âge apparent : {apparent_age}
- Genre vocal : {voice_gender}
- Accent/Origine : {accent_origin}
- Tessiture : {vocal_range}

**STYLE DE DELIVERY :**
- Ton général : {delivery_tone}
- Rythme d'élocution : {speech_pace}
- Articulation : {articulation_style}
- Emphase : {emphasis_pattern}
- Pauses : {pause_strategy}

**ÉMOTION ET EXPRESSION :**
- Émotion dominante : {primary_emotion}
- Intensité émotionnelle : {emotional_intensity}
- Variation émotionnelle : {emotional_variation}
- Expression faciale (implicite) : {facial_expression}

**CONTEXTE D'USAGE :**
- Application : {use_case}
- Public cible : {target_audience}
- Environnement d'écoute : {listening_environment}
- Durée du contenu : {content_duration}

**QUALITÉ TECHNIQUE :**
- Qualité audio : {audio_fidelity}
- Réduction de bruit : {noise_reduction}
- Normalisation : {audio_normalization}
- Format de sortie : {output_audio_format}

**PARAMÈTRES AVANCÉS :**
- Prosody control : {prosody_settings}
- SSML tags : {ssml_markup}
- Voice cloning : {voice_cloning_ref}
- Custom pronunciation : {custom_pronunciation}

**SPÉCIFICATIONS TECHNIQUES :**
- Provider : {ai_voice_provider}
- Model : {voice_model}
- Language : {target_language}
- Codec : {audio_codec}

**POST-PROCESSING :**
- EQ : {equalization}
- Compression : {dynamic_compression}
- Effects : {voice_effects}
- Spatial audio : {spatial_processing}

**MOTS-CLÉS TECHNIQUES :**
Natural speech synthesis, human-like intonation, professional voice-over quality, {quality_descriptors}

Instructions spéciales : {special_instructions}`,
    variables: [
      { name: 'text_content', type: 'textarea', label: 'Texte à synthétiser', placeholder: 'Bonjour, je suis votre assistant virtuel...', required: true },
      { name: 'voice_type', type: 'select', label: 'Type de voix', options: ['Conversationnelle', 'Narrative', 'Publicitaire', 'Éducative', 'Customer service', 'Broadcast', 'Character voice'], required: true },
      { name: 'apparent_age', type: 'select', label: 'Âge apparent', options: ['Enfant (8-12)', 'Adolescent (13-17)', 'Jeune adulte (18-30)', 'Adulte (30-50)', 'Mature (50+)'], required: true },
      { name: 'voice_gender', type: 'select', label: 'Genre vocal', options: ['Féminin', 'Masculin', 'Non-binaire', 'Androgyне'], required: true },
      { name: 'accent_origin', type: 'select', label: 'Accent/Origine', options: ['Français standard', 'Français du Québec', 'Belge', 'Accent du Sud', 'International', 'Anglais (US)', 'Anglais (UK)', 'Autre'], required: true },
      { name: 'vocal_range', type: 'select', label: 'Tessiture', options: ['Très aiguë', 'Aiguë', 'Medium', 'Grave', 'Très grave'], required: true },
      { name: 'delivery_tone', type: 'select', label: 'Ton général', options: ['Professionnel', 'Amical', 'Autoritaire', 'Bienveillant', 'Énergique', 'Calme', 'Confidentiel', 'Enthousiaste'], required: true },
      { name: 'speech_pace', type: 'select', label: 'Rythme d\'élocution', options: ['Très lent', 'Lent', 'Normal', 'Rapide', 'Très rapide', 'Variable'], required: true },
      { name: 'articulation_style', type: 'select', label: 'Style d\'articulation', options: ['Très précise', 'Claire', 'Naturelle', 'Décontractée', 'Mumbled'], required: true },
      { name: 'emphasis_pattern', type: 'select', label: 'Pattern d\'emphase', options: ['Mots clés', 'Fin de phrase', 'Questions', 'Émotions', 'Uniform', 'Naturel'], required: true },
      { name: 'pause_strategy', type: 'select', label: 'Stratégie de pauses', options: ['Grammaticales', 'Respiratoires', 'Dramatiques', 'Minimales', 'Naturelles'], required: true },
      { name: 'primary_emotion', type: 'select', label: 'Émotion dominante', options: ['Neutre', 'Joie', 'Tristesse', 'Colère', 'Surprise', 'Confiance', 'Inquiétude', 'Excitement'], required: true },
      { name: 'emotional_intensity', type: 'select', label: 'Intensité émotionnelle', options: ['Très subtile', 'Subtile', 'Modérée', 'Marquée', 'Intense'], required: true },
      { name: 'emotional_variation', type: 'select', label: 'Variation émotionnelle', options: ['Stable', 'Légères variations', 'Variations modérées', 'Très expressif'], required: true },
      { name: 'facial_expression', type: 'select', label: 'Expression faciale implicite', options: ['Sourire', 'Concentration', 'Surprise', 'Sérieux', 'Pensif', 'Naturel'], required: false },
      { name: 'use_case', type: 'select', label: 'Application', options: ['Podcast', 'Audiobook', 'E-learning', 'Publicité', 'Assistant virtuel', 'Jeu vidéo', 'Film/Animation', 'IVR/Téléphonie'], required: true },
      { name: 'target_audience', type: 'select', label: 'Public cible', options: ['Enfants', 'Adolescents', 'Adultes', 'Seniors', 'Professionnels', 'Grand public'], required: true },
      { name: 'listening_environment', type: 'select', label: 'Environnement d\'écoute', options: ['Casque', 'Haut-parleurs', 'Mobile', 'Voiture', 'Espace public', 'Bureau'], required: true },
      { name: 'content_duration', type: 'select', label: 'Durée du contenu', options: ['< 30 sec', '30 sec - 2 min', '2-10 min', '10-30 min', '30+ min'], required: true },
      { name: 'audio_fidelity', type: 'select', label: 'Qualité audio', options: ['Téléphone (8kHz)', 'Radio (22kHz)', 'CD Quality (44kHz)', 'Hi-Res (48kHz+)'], required: true },
      { name: 'noise_reduction', type: 'select', label: 'Réduction de bruit', options: ['Aucune', 'Légère', 'Standard', 'Agressive'], required: false },
      { name: 'audio_normalization', type: 'select', label: 'Normalisation', options: ['LUFS-23 (Broadcast)', 'LUFS-16 (Streaming)', 'Peak normalization', 'RMS normalization'], required: false },
      { name: 'output_audio_format', type: 'select', label: 'Format de sortie', options: ['MP3 320kbps', 'WAV 16bit', 'WAV 24bit', 'FLAC', 'AAC'], required: true },
      { name: 'prosody_settings', type: 'textarea', label: 'Contrôle prosodie', placeholder: 'Pitch variations, stress patterns...', required: false },
      { name: 'ssml_markup', type: 'textarea', label: 'Balises SSML', placeholder: '<emphasis>, <break time="1s">, <prosody rate="slow">...', required: false },
      { name: 'voice_cloning_ref', type: 'text', label: 'Référence voice cloning', placeholder: 'URL ou description de la voix de référence', required: false },
      { name: 'custom_pronunciation', type: 'textarea', label: 'Prononciations personnalisées', placeholder: 'Mots techniques, noms propres...', required: false },
      { name: 'ai_voice_provider', type: 'select', label: 'Fournisseur IA', options: ['ElevenLabs', 'Azure Speech', 'Google Cloud TTS', 'Amazon Polly', 'IBM Watson', 'Murf', 'Synthesia'], required: true },
      { name: 'voice_model', type: 'text', label: 'Modèle vocal', placeholder: 'eleven_multilingual_v2, etc.', required: false },
      { name: 'target_language', type: 'select', label: 'Langue cible', options: ['Français (FR)', 'Anglais (US)', 'Anglais (UK)', 'Espagnol', 'Allemand', 'Italien', 'Multilingue'], required: true },
      { name: 'audio_codec', type: 'select', label: 'Codec audio', options: ['PCM', 'MP3', 'AAC', 'Opus', 'Vorbis'], required: false },
      { name: 'equalization', type: 'select', label: 'Égalisation', options: ['Aucune', 'Voix masculine', 'Voix féminine', 'Radio ready', 'Podcast optimized'], required: false },
      { name: 'dynamic_compression', type: 'select', label: 'Compression dynamique', options: ['Aucune', 'Légère', 'Standard', 'Broadcast'], required: false },
      { name: 'voice_effects', type: 'text', label: 'Effets vocaux', placeholder: 'Reverb, delay, chorus...', required: false },
      { name: 'spatial_processing', type: 'select', label: 'Audio spatial', options: ['Mono', 'Stéréo', 'Surround', 'Binaural'], required: false },
      { name: 'quality_descriptors', type: 'text', label: 'Descripteurs qualité', placeholder: 'crisp, warm, authoritative...', required: false },
      { name: 'special_instructions', type: 'textarea', label: 'Instructions spéciales', placeholder: 'Contraintes particulières, style spécifique...', required: false }
    ],
    tags: ['Text-to-Audio', 'Voice', 'TTS', 'Speech Synthesis'],
    quality: 4.8,
    usageCount: 2134
  }
];
