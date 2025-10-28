
import { PromptTemplate, PromptCategory } from '../promptTemplatesData';

export const gamingCategories: PromptCategory[] = [
  {
    id: 'game-design',
    name: 'Game Design',
    description: 'Templates pour la conception de jeux vidéo',
    icon: 'Gamepad2'
  },
  {
    id: 'narrative-design',
    name: 'Design Narratif',
    description: 'Templates pour créer des histoires et dialogues de jeux',
    icon: 'BookOpen'
  }
];

export const gamingTemplates: PromptTemplate[] = [
  {
    id: 'game-concept-creator',
    name: 'Créateur de Concept de Jeu',
    category: 'game-design',
    domain: 'Game Design',
    description: 'Développe un concept complet de jeu vidéo innovant',
    template: `Tu es un game designer expérimenté. Crée un concept de jeu complet pour : "{titre_jeu}".

**CONCEPT DE BASE :**
- Titre : {titre_jeu}
- Genre principal : {genre_principal}
- Genre secondaire : {genre_secondaire}
- Plateforme cible : {plateforme_cible}
- Public cible : {public_cible}

**PILIER DE DESIGN :**
- Pilier #1 : {pilier_design_1}
- Pilier #2 : {pilier_design_2}
- Pilier #3 : {pilier_design_3}
- Innovation principale : {innovation_principale}

**GAMEPLAY CORE :**
- Mécanique principale : {mecanique_principale}
- Loop de gameplay : {loop_gameplay}
- Progression : {systeme_progression}
- Difficulté : {courbe_difficulte}
- Durée de jeu : {duree_jeu}

**UNIVERS ET CADRE :**
- Setting : {setting_univers}
- Époque : {epoque_jeu}
- Ton général : {ton_general}
- Direction artistique : {direction_artistique}
- Influences : {influences_artistiques}

**PERSONNAGES PRINCIPAUX :**
- Protagoniste : {protagoniste}
- Personnages secondaires : {personnages_secondaires}
- Antagoniste : {antagoniste_principal}
- PNJ importants : {pnj_importants}

**SYSTÈMES DE JEU :**
- Économie interne : {systeme_economie}
- Système de combat : {systeme_combat}
- Exploration : {systeme_exploration}
- Crafting/Construction : {systeme_crafting}
- Multijoueur : {fonctionnalites_multi}

**STRUCTURE NARRATIVE :**
- Acte 1 : {acte_1_resume}
- Acte 2 : {acte_2_resume}
- Acte 3 : {acte_3_resume}
- Quêtes secondaires : {quetes_secondaires}

**MONÉTISATION :**
- Modèle économique : {modele_economique}
- DLC/Extensions : {strategie_dlc}
- Microtransactions : {microtransactions}

**PRODUCTION :**
- Taille d'équipe estimée : {taille_equipe}
- Durée de développement : {duree_developpement}
- Budget estimé : {budget_estime}
- Risques techniques : {risques_techniques}

Développe chaque aspect avec des détails concrets et des références pour créer un document de concept convaincant.`,
    variables: [
      { name: 'titre_jeu', type: 'text', label: 'Titre du jeu', placeholder: 'The Last Guardian, Cyberpunk Chronicles...', required: true },
      { name: 'genre_principal', type: 'select', label: 'Genre principal', options: ['Action', 'RPG', 'Strategy', 'Puzzle', 'Simulation', 'Adventure', 'Horror', 'Racing'], required: true },
      { name: 'genre_secondaire', type: 'select', label: 'Genre secondaire', options: ['Aucun', 'Action', 'RPG', 'Puzzle', 'Platformer', 'Shooter', 'Survival'], required: false },
      { name: 'plateforme_cible', type: 'select', label: 'Plateforme cible', options: ['PC', 'Console', 'Mobile', 'VR', 'Multi-plateformes'], required: true },
      { name: 'public_cible', type: 'select', label: 'Public cible', options: ['Enfants (6-12)', 'Adolescents (13-17)', 'Jeunes adultes (18-25)', 'Adultes (26-40)', 'Tous âges'], required: true },
      { name: 'pilier_design_1', type: 'text', label: 'Pilier design #1', placeholder: 'Exploration libre, Combat tactique...', required: true },
      { name: 'pilier_design_2', type: 'text', label: 'Pilier design #2', placeholder: 'Narration émotionnelle, Créativité...', required: true },
      { name: 'pilier_design_3', type: 'text', label: 'Pilier design #3', placeholder: 'Coopération, Rejouabilité...', required: true },
      { name: 'innovation_principale', type: 'textarea', label: 'Innovation principale', placeholder: 'Mécanique unique qui différencie le jeu...', required: true },
      { name: 'mecanique_principale', type: 'textarea', label: 'Mécanique principale', placeholder: 'Comment le joueur interagit avec le jeu...', required: true },
      { name: 'loop_gameplay', type: 'textarea', label: 'Loop de gameplay', placeholder: 'Cycle répétitif d\'actions du joueur...', required: true },
      { name: 'systeme_progression', type: 'select', label: 'Système progression', options: ['Niveaux/XP', 'Compétences/Skills', 'Équipements', 'Story gates', 'Libre'], required: true },
      { name: 'courbe_difficulte', type: 'select', label: 'Courbe difficulté', options: ['Progressive linéaire', 'Adaptive', 'Pic et vallées', 'Plateau avec pics'], required: true },
      { name: 'duree_jeu', type: 'select', label: 'Durée de jeu', options: ['2-5h', '6-15h', '16-30h', '30-60h', '60h+', 'Infini'], required: true },
      { name: 'setting_univers', type: 'select', label: 'Setting univers', options: ['Fantasy médiéval', 'Science-fiction', 'Moderne/Contemporain', 'Post-apocalyptique', 'Historique', 'Mythologique'], required: true },
      { name: 'epoque_jeu', type: 'text', label: 'Époque', placeholder: 'Futur proche, Moyen-âge, 2150...', required: true },
      { name: 'ton_general', type: 'select', label: 'Ton général', options: ['Sérieux/Dramatique', 'Léger/Humoristique', 'Sombre/Mature', 'Aventure/Épique', 'Mystérieux'], required: true },
      { name: 'direction_artistique', type: 'select', label: 'Direction artistique', options: ['Réaliste', 'Stylisé/Cartoon', 'Pixel art', 'Minimaliste', 'Hyper-réaliste'], required: true },
      { name: 'influences_artistiques', type: 'text', label: 'Influences artistiques', placeholder: 'Studio Ghibli, Cyberpunk, Art nouveau...', required: false },
      { name: 'protagoniste', type: 'textarea', label: 'Protagoniste', placeholder: 'Description du personnage principal...', required: true },
      { name: 'personnages_secondaires', type: 'textarea', label: 'Personnages secondaires', placeholder: 'Compagnons, alliés importants...', required: false },
      { name: 'antagoniste_principal', type: 'textarea', label: 'Antagoniste principal', placeholder: 'Le méchant principal et ses motivations...', required: false },
      { name: 'pnj_importants', type: 'textarea', label: 'PNJ importants', placeholder: 'Marchands, guides, personnages de quêtes...', required: false },
      { name: 'systeme_economie', type: 'select', label: 'Système économie', options: ['Monnaie simple', 'Multi-devises', 'Troc/Échange', 'Ressources', 'Aucun'], required: true },
      { name: 'systeme_combat', type: 'select', label: 'Système combat', options: ['Temps réel', 'Tour par tour', 'Action/Réflexes', 'Stratégique', 'Aucun combat'], required: true },
      { name: 'systeme_exploration', type: 'select', label: 'Système exploration', options: ['Monde ouvert', 'Semi-ouvert', 'Linéaire avec branches', 'Niveaux séparés'], required: true },
      { name: 'systeme_crafting', type: 'select', label: 'Crafting/Construction', options: ['Crafting d\'items', 'Construction de bases', 'Personnalisation', 'Aucun'], required: false },
      { name: 'fonctionnalites_multi', type: 'select', label: 'Fonctionnalités multi', options: ['Solo uniquement', 'Coop local', 'Coop en ligne', 'PvP', 'MMO'], required: true },
      { name: 'acte_1_resume', type: 'textarea', label: 'Résumé Acte 1', placeholder: 'Introduction, setup, premiers défis...', required: true },
      { name: 'acte_2_resume', type: 'textarea', label: 'Résumé Acte 2', placeholder: 'Développement, complications, climax...', required: true },
      { name: 'acte_3_resume', type: 'textarea', label: 'Résumé Acte 3', placeholder: 'Résolution, conclusion, épilogue...', required: true },
      { name: 'quetes_secondaires', type: 'textarea', label: 'Quêtes secondaires', placeholder: 'Types et exemples de quêtes optionnelles...', required: false },
      { name: 'modele_economique', type: 'select', label: 'Modèle économique', options: ['Achat unique', 'Free-to-play', 'Abonnement', 'Early Access', 'Freemium'], required: true },
      { name: 'strategie_dlc', type: 'select', label: 'Stratégie DLC', options: ['Pas de DLC', 'Contenu additionnel', 'Expansions majeures', 'Saisons'], required: false },
      { name: 'microtransactions', type: 'select', label: 'Microtransactions', options: ['Aucune', 'Cosmétiques seulement', 'Commodité', 'Pay-to-win (déconseillé)'], required: false },
      { name: 'taille_equipe', type: 'select', label: 'Taille équipe', options: ['1-5 personnes', '6-15 personnes', '16-50 personnes', '50+ personnes'], required: true },
      { name: 'duree_developpement', type: 'select', label: 'Durée développement', options: ['6 mois', '1 an', '2-3 ans', '3-5 ans', '5+ ans'], required: true },
      { name: 'budget_estime', type: 'select', label: 'Budget estimé', options: ['< 100K€', '100K-500K€', '500K-2M€', '2M-10M€', '10M+€'], required: true },
      { name: 'risques_techniques', type: 'textarea', label: 'Risques techniques', placeholder: 'Défis techniques majeurs à anticiper...', required: false }
    ],
    tags: ['Game Design', 'Concept', 'Jeu Vidéo', 'Innovation'],
    quality: 4.8,
    usageCount: 1234
  }
];
