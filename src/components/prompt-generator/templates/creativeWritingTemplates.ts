
import { PromptTemplate, PromptCategory } from '../promptTemplatesData';

export const creativeWritingCategories: PromptCategory[] = [
  {
    id: 'creative-fiction',
    name: 'Fiction Créative',
    description: 'Templates pour l\'écriture de fiction et storytelling',
    icon: 'Book'
  },
  {
    id: 'creative-poetry',
    name: 'Poésie & Vers',
    description: 'Templates pour la création poétique',
    icon: 'Feather'
  }
];

export const creativeWritingTemplates: PromptTemplate[] = [
  {
    id: 'story-generator',
    name: 'Générateur d\'Histoire Complète',
    category: 'creative-fiction',
    domain: 'Écriture Créative',
    description: 'Crée une histoire complète avec personnages développés',
    template: `Tu es un écrivain expérimenté spécialisé en {genre_litteraire}. Écris une histoire complète de {longueur} mots sur le thème : "{theme_principal}".

**STRUCTURE NARRATIVE :**
- Genre : {genre_litteraire}
- Ton : {ton_narratif}
- Point de vue : {point_de_vue}
- Public cible : {public_cible}

**DÉVELOPPEMENT DES PERSONNAGES :**
- Protagoniste : {protagoniste}
- Antagoniste : {antagoniste}
- Personnages secondaires : {personnages_secondaires}

**INTRIGUE :**
- Situation initiale : {situation_initiale}
- Élément déclencheur : {declencheur}
- Conflit principal : {conflit}
- Résolution : {type_resolution}

**CADRE SPATIO-TEMPOREL :**
- Époque : {epoque}
- Lieu : {lieu_principal}
- Ambiance : {ambiance}

**ÉLÉMENTS STYLISTIQUES :**
- Registre de langue : {registre}
- Figures de style : {figures_style}
- Rythme : {rythme_narratif}

Développe une intrigue captivante avec des rebondissements, des dialogues naturels et une progression émotionnelle cohérente.`,
    variables: [
      { name: 'genre_litteraire', type: 'select', label: 'Genre littéraire', options: ['Fantasy', 'Science-fiction', 'Policier', 'Romance', 'Thriller', 'Drame', 'Comédie', 'Horreur'], required: true },
      { name: 'longueur', type: 'select', label: 'Longueur', options: ['500', '1000', '2000', '3000', '5000'], required: true },
      { name: 'theme_principal', type: 'text', label: 'Thème principal', placeholder: 'L\'amitié, la vengeance, la découverte...', required: true },
      { name: 'ton_narratif', type: 'select', label: 'Ton narratif', options: ['Léger', 'Dramatique', 'Humoristique', 'Sombre', 'Épique', 'Mélancolique'], required: true },
      { name: 'point_de_vue', type: 'select', label: 'Point de vue', options: ['Première personne', 'Troisième personne', 'Narrateur omniscient'], required: true },
      { name: 'public_cible', type: 'select', label: 'Public cible', options: ['Enfants', 'Adolescents', 'Jeunes adultes', 'Adultes', 'Tous publics'], required: true },
      { name: 'protagoniste', type: 'text', label: 'Protagoniste', placeholder: 'Jeune mage, détective expérimenté...', required: true },
      { name: 'antagoniste', type: 'text', label: 'Antagoniste', placeholder: 'Sorcier maléfique, criminel rusé...', required: false },
      { name: 'personnages_secondaires', type: 'text', label: 'Personnages secondaires', placeholder: 'Ami fidèle, mentor sage...', required: false },
      { name: 'situation_initiale', type: 'text', label: 'Situation initiale', placeholder: 'Village paisible, bureau de police...', required: true },
      { name: 'declencheur', type: 'text', label: 'Élément déclencheur', placeholder: 'Découverte mystérieuse, crime étrange...', required: true },
      { name: 'conflit', type: 'text', label: 'Conflit principal', placeholder: 'Quête dangereuse, enquête complexe...', required: true },
      { name: 'type_resolution', type: 'select', label: 'Type de résolution', options: ['Heureuse', 'Amère-douce', 'Ouverte', 'Tragique', 'Surprise'], required: true },
      { name: 'epoque', type: 'text', label: 'Époque', placeholder: 'Médiéval, moderne, futur...', required: true },
      { name: 'lieu_principal', type: 'text', label: 'Lieu principal', placeholder: 'Royaume fantastique, ville moderne...', required: true },
      { name: 'ambiance', type: 'select', label: 'Ambiance', options: ['Mystérieuse', 'Aventureuse', 'Romantique', 'Oppressante', 'Joyeuse'], required: true },
      { name: 'registre', type: 'select', label: 'Registre de langue', options: ['Familier', 'Courant', 'Soutenu', 'Littéraire'], required: true },
      { name: 'figures_style', type: 'text', label: 'Figures de style', placeholder: 'Métaphores, dialogues, descriptions...', required: false },
      { name: 'rythme_narratif', type: 'select', label: 'Rythme narratif', options: ['Lent et contemplatif', 'Équilibré', 'Rapide et haletant'], required: true }
    ],
    tags: ['Écriture', 'Fiction', 'Histoire', 'Créativité'],
    quality: 4.8,
    usageCount: 2340
  },
  {
    id: 'poetry-generator',
    name: 'Créateur de Poésie Moderne',
    category: 'creative-poetry',
    domain: 'Poésie',
    description: 'Génère des poèmes dans différents styles et formes',
    template: `Tu es un poète accompli maîtrisant tous les styles. Compose un poème sur le thème : "{theme_poetique}".

**FORME POÉTIQUE :**
- Style : {style_poetique}
- Structure : {structure_poeme}
- Longueur : {longueur_poeme}
- Schéma de rimes : {schema_rimes}

**CONTENU THÉMATIQUE :**
- Thème principal : {theme_poetique}
- Émotion dominante : {emotion_dominante}
- Images/Métaphores : {images_metaphores}
- Symbolisme : {symbolisme}

**STYLE ET TECHNIQUE :**
- Registre : {registre_poetique}
- Figures de style : {figures_poetiques}
- Rythme : {rythme_poeme}
- Sonorités : {sonorites}

**INSPIRATION :**
- Mouvement littéraire : {mouvement_litteraire}
- Influence : {influence_poetique}
- Innovation : {innovation_stylistique}

Crée un poème original, évocateur et musicalement harmonieux qui capture l'essence du thème choisi.`,
    variables: [
      { name: 'theme_poetique', type: 'text', label: 'Thème poétique', placeholder: 'L\'amour, la nature, la liberté, la mélancolie...', required: true },
      { name: 'style_poetique', type: 'select', label: 'Style poétique', options: ['Sonnet', 'Vers libre', 'Haïku', 'Ballade', 'Ode', 'Élégie', 'Slam', 'Prose poétique'], required: true },
      { name: 'structure_poeme', type: 'select', label: 'Structure', options: ['Classique (strophes régulières)', 'Moderne (structure libre)', 'Expérimentale'], required: true },
      { name: 'longueur_poeme', type: 'select', label: 'Longueur', options: ['Court (1-2 strophes)', 'Moyen (3-5 strophes)', 'Long (6+ strophes)'], required: true },
      { name: 'schema_rimes', type: 'select', label: 'Schéma de rimes', options: ['ABAB', 'ABBA', 'AABB', 'Vers libres', 'Rimes internes'], required: true },
      { name: 'emotion_dominante', type: 'select', label: 'Émotion dominante', options: ['Joie', 'Mélancolie', 'Passion', 'Sérénité', 'Révolte', 'Nostalgie', 'Espoir'], required: true },
      { name: 'images_metaphores', type: 'text', label: 'Images/Métaphores', placeholder: 'Océan, lumière, oiseaux, tempête...', required: false },
      { name: 'symbolisme', type: 'text', label: 'Symbolisme', placeholder: 'Rose = amour, nuit = mystère...', required: false },
      { name: 'registre_poetique', type: 'select', label: 'Registre poétique', options: ['Lyrique', 'Épique', 'Satirique', 'Élégiaque', 'Pastoral'], required: true },
      { name: 'figures_poetiques', type: 'select', label: 'Figures de style', options: ['Métaphores', 'Personnifications', 'Allitérations', 'Anaphores', 'Oxymores'], required: false },
      { name: 'rythme_poeme', type: 'select', label: 'Rythme', options: ['Alexandrins', 'Octosyllabes', 'Décasyllabes', 'Vers libres'], required: true },
      { name: 'sonorites', type: 'select', label: 'Sonorités', options: ['Douces', 'Percutantes', 'Mélodieuses', 'Contrastées'], required: false },
      { name: 'mouvement_litteraire', type: 'select', label: 'Mouvement littéraire', options: ['Romantisme', 'Symbolisme', 'Surréalisme', 'Contemporain'], required: false },
      { name: 'influence_poetique', type: 'text', label: 'Influence poétique', placeholder: 'Baudelaire, Rimbaud, Apollinaire...', required: false },
      { name: 'innovation_stylistique', type: 'text', label: 'Innovation stylistique', placeholder: 'Mélange de styles, nouveaux rythmes...', required: false }
    ],
    tags: ['Poésie', 'Écriture', 'Art', 'Littérature'],
    quality: 4.7,
    usageCount: 1567
  }
];
