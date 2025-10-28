
import { PromptTemplate, PromptCategory } from '../promptTemplatesData';

export const socialMediaCategories: PromptCategory[] = [
  {
    id: 'social-content',
    name: 'Contenu Social',
    description: 'Templates pour créer du contenu engageant sur les réseaux sociaux',
    icon: 'Share2'
  },
  {
    id: 'social-strategy',
    name: 'Stratégie Social Media',
    description: 'Templates pour planifier et optimiser sa présence sociale',
    icon: 'TrendingUp'
  }
];

export const socialMediaTemplates: PromptTemplate[] = [
  {
    id: 'viral-content-creator',
    name: 'Créateur de Contenu Viral',
    category: 'social-content',
    domain: 'Social Media',
    description: 'Génère du contenu optimisé pour devenir viral',
    template: `Tu es un expert en création de contenu viral sur les réseaux sociaux. Crée du contenu engageant pour {plateforme} sur le thème : "{sujet_contenu}".

**PARAMÈTRES DU CONTENU :**
- Plateforme : {plateforme}
- Format : {format_contenu}
- Public cible : {audience_cible}
- Objectif : {objectif_engagement}

**STRATÉGIE VIRALE :**
- Hook d'accroche : {type_hook}
- Émotion principale : {emotion_ciblee}
- Tendance à exploiter : {tendance_actuelle}
- Call-to-action : {cta_type}

**ÉLÉMENTS ENGAGEANTS :**
- Titre/Caption : {style_titre}
- Hashtags stratégiques : {strategie_hashtags}
- Moment de publication : {timing_optimal}
- Interaction souhaitée : {type_interaction}

**CONTENU SPÉCIFIQUE :**
- Message principal : {message_cle}
- Angle original : {angle_unique}
- Valeur apportée : {valeur_ajoutee}
- Personnalité de marque : {personnalite_marque}

Crée un contenu qui génère de l'engagement, encourage le partage et maximise la portée organique tout en respectant l'algorithme de {plateforme}.`,
    variables: [
      { name: 'plateforme', type: 'select', label: 'Plateforme', options: ['TikTok', 'Instagram', 'Twitter/X', 'LinkedIn', 'Facebook', 'YouTube Shorts'], required: true },
      { name: 'sujet_contenu', type: 'text', label: 'Sujet du contenu', placeholder: 'Productivité, cuisine, tech, lifestyle...', required: true },
      { name: 'format_contenu', type: 'select', label: 'Format', options: ['Vidéo courte', 'Post image', 'Carrousel', 'Story', 'Reel', 'Thread'], required: true },
      { name: 'audience_cible', type: 'select', label: 'Audience cible', options: ['Gen Z (16-24)', 'Millennials (25-40)', 'Gen X (41-56)', 'Professionnels', 'Parents', 'Entrepreneurs'], required: true },
      { name: 'objectif_engagement', type: 'select', label: 'Objectif', options: ['Likes/Réactions', 'Commentaires', 'Partages', 'Saves', 'Followers', 'Trafic web'], required: true },
      { name: 'type_hook', type: 'select', label: 'Type d\'accroche', options: ['Question provocante', 'Stat surprenante', 'Problème relatable', 'Teaser mystérieux', 'Controverse douce'], required: true },
      { name: 'emotion_ciblee', type: 'select', label: 'Émotion ciblée', options: ['Inspiration', 'Amusement', 'Surprise', 'Empathie', 'Curiosité', 'Fierté'], required: true },
      { name: 'tendance_actuelle', type: 'text', label: 'Tendance à exploiter', placeholder: 'Son viral, hashtag trending, format populaire...', required: false },
      { name: 'cta_type', type: 'select', label: 'Call-to-action', options: ['Commenter', 'Partager', 'Sauvegarder', 'Suivre', 'Visiter lien', 'Tag un ami'], required: true },
      { name: 'style_titre', type: 'select', label: 'Style titre', options: ['Accrocheur/Clickbait', 'Informatif direct', 'Question ouverte', 'Liste numérotée', 'Storytelling'], required: true },
      { name: 'strategie_hashtags', type: 'select', label: 'Stratégie hashtags', options: ['Trending populaires', 'Niche spécialisée', 'Mix populaire/niche', 'Hashtags brandés'], required: true },
      { name: 'timing_optimal', type: 'select', label: 'Timing optimal', options: ['Matin (7-9h)', 'Déjeuner (12-14h)', 'Soirée (18-21h)', 'Weekend'], required: false },
      { name: 'type_interaction', type: 'select', label: 'Interaction souhaitée', options: ['Débat/Discussion', 'Partage d\'expérience', 'Quiz/Sondage', 'Challenge/Défi'], required: true },
      { name: 'message_cle', type: 'textarea', label: 'Message clé', placeholder: 'Le message principal à transmettre...', required: true },
      { name: 'angle_unique', type: 'text', label: 'Angle original', placeholder: 'Ce qui rend ce contenu unique...', required: true },
      { name: 'valeur_ajoutee', type: 'select', label: 'Valeur apportée', options: ['Éducation', 'Divertissement', 'Inspiration', 'Aide pratique', 'Information'], required: true },
      { name: 'personnalite_marque', type: 'select', label: 'Personnalité de marque', options: ['Amicale', 'Professionnelle', 'Humoristique', 'Inspirante', 'Experte'], required: true }
    ],
    tags: ['Social Media', 'Viral', 'Engagement', 'Contenu'],
    quality: 4.6,
    usageCount: 3420
  },
  {
    id: 'social-media-calendar',
    name: 'Planificateur de Contenu Social',
    category: 'social-strategy',
    domain: 'Stratégie Digitale',
    description: 'Crée un calendrier éditorial complet pour les réseaux sociaux',
    template: `Tu es un stratège en social media. Crée un calendrier éditorial pour {duree_planning} sur {plateformes_cibles}.

**PARAMÈTRES DE PLANIFICATION :**
- Durée : {duree_planning}
- Plateformes : {plateformes_cibles}
- Fréquence publication : {frequence_publication}
- Budget contenu : {budget_contenu}

**OBJECTIFS STRATÉGIQUES :**
- Objectif principal : {objectif_principal}
- KPI à suivre : {kpis_prioritaires}
- Audience cible : {audience_principale}
- Thématiques : {thematiques_contenu}

**STRUCTURE DU CALENDRIER :**
- Piliers de contenu : {piliers_contenu}
- Répartition 80/20 : {repartition_contenu}
- Événements/Saisonnalité : {evenements_speciaux}
- Contenu evergreen : {contenu_perenne}

**ORGANISATION HEBDOMADAIRE :**
- Lundi : {theme_lundi}
- Mardi : {theme_mardi}
- Mercredi : {theme_mercredi}
- Jeudi : {theme_jeudi}
- Vendredi : {theme_vendredi}
- Weekend : {theme_weekend}

**FORMATS ET VARIATIONS :**
- Formats primaires : {formats_principaux}
- Formats secondaires : {formats_alternatifs}
- Réutilisation cross-platform : {adaptation_platforms}
- User Generated Content : {strategie_ugc}

Développe un planning détaillé avec des idées concrètes de posts, des suggestions de visuels et des recommandations d'optimisation pour chaque plateforme.`,
    variables: [
      { name: 'duree_planning', type: 'select', label: 'Durée planning', options: ['1 mois', '3 mois', '6 mois', '1 an'], required: true },
      { name: 'plateformes_cibles', type: 'text', label: 'Plateformes cibles', placeholder: 'Instagram, LinkedIn, TikTok...', required: true },
      { name: 'frequence_publication', type: 'select', label: 'Fréquence publication', options: ['Quotidienne', '5 fois/semaine', '3 fois/semaine', 'Hebdomadaire'], required: true },
      { name: 'budget_contenu', type: 'select', label: 'Budget contenu', options: ['Gratuit/Organique', 'Budget limité', 'Budget moyen', 'Budget élevé'], required: true },
      { name: 'objectif_principal', type: 'select', label: 'Objectif principal', options: ['Notoriété', 'Engagement', 'Génération de leads', 'Ventes', 'Éducation audience'], required: true },
      { name: 'kpis_prioritaires', type: 'text', label: 'KPI prioritaires', placeholder: 'Reach, Engagement rate, Conversions...', required: true },
      { name: 'audience_principale', type: 'text', label: 'Audience principale', placeholder: '25-35 ans, entrepreneurs, parents...', required: true },
      { name: 'thematiques_contenu', type: 'textarea', label: 'Thématiques contenu', placeholder: 'Productivité, bien-être, tech, business...', required: true },
      { name: 'piliers_contenu', type: 'textarea', label: 'Piliers de contenu', placeholder: '1. Éducatif 2. Inspirant 3. Divertissant 4. Promotionnel', required: true },
      { name: 'repartition_contenu', type: 'select', label: 'Répartition contenu', options: ['80% Valeur / 20% Promo', '70% Valeur / 30% Promo', '90% Valeur / 10% Promo'], required: true },
      { name: 'evenements_speciaux', type: 'text', label: 'Événements spéciaux', placeholder: 'Black Friday, rentrée, fêtes...', required: false },
      { name: 'contenu_perenne', type: 'select', label: 'Contenu evergreen', options: ['30%', '50%', '70%'], required: true },
      { name: 'theme_lundi', type: 'select', label: 'Thème lundi', options: ['Motivation Monday', 'Tips/Conseils', 'Behind the scenes', 'Éducatif'], required: true },
      { name: 'theme_mardi', type: 'select', label: 'Thème mardi', options: ['Tutorial Tuesday', 'Transformation', 'Tech Talk', 'Tendances'], required: true },
      { name: 'theme_mercredi', type: 'select', label: 'Thème mercredi', options: ['Wisdom Wednesday', 'Q&A', 'Case Study', 'Inspirant'], required: true },
      { name: 'theme_jeudi', type: 'select', label: 'Thème jeudi', options: ['Throwback Thursday', 'Stories/Témoignages', 'Reviews', 'Collaborations'], required: true },
      { name: 'theme_vendredi', type: 'select', label: 'Thème vendredi', options: ['Fun Friday', 'Récap semaine', 'Communauté', 'Divertissement'], required: true },
      { name: 'theme_weekend', type: 'select', label: 'Thème weekend', options: ['Lifestyle', 'Inspiration', 'User Content', 'Pause/Moins de posts'], required: true },
      { name: 'formats_principaux', type: 'text', label: 'Formats principaux', placeholder: 'Posts image, vidéos courtes, carrousels...', required: true },
      { name: 'formats_alternatifs', type: 'text', label: 'Formats alternatifs', placeholder: 'Stories, Lives, Reels, IGTV...', required: false },
      { name: 'adaptation_platforms', type: 'select', label: 'Adaptation cross-platform', options: ['Contenu unique par plateforme', 'Adaptation du même contenu', 'Mix des deux'], required: true },
      { name: 'strategie_ugc', type: 'select', label: 'Stratégie UGC', options: ['Encourager activement', 'Partager occasionnellement', 'Focus sur contenu original'], required: true }
    ],
    tags: ['Social Media', 'Planification', 'Stratégie', 'Calendrier'],
    quality: 4.7,
    usageCount: 1890
  }
];
