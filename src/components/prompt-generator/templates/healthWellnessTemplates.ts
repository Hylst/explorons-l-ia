
import { PromptTemplate, PromptCategory } from '../promptTemplatesData';

export const healthWellnessCategories: PromptCategory[] = [
  {
    id: 'fitness-nutrition',
    name: 'Fitness & Nutrition',
    description: 'Templates pour la santé physique et la nutrition',
    icon: 'Dumbbell'
  },
  {
    id: 'mental-wellness',
    name: 'Bien-être Mental',
    description: 'Templates pour la santé mentale et le développement personnel',
    icon: 'Brain'
  }
];

export const healthWellnessTemplates: PromptTemplate[] = [
  {
    id: 'personalized-fitness-plan',
    name: 'Plan Fitness Personnalisé',
    category: 'fitness-nutrition',
    domain: 'Santé & Fitness',
    description: 'Crée un programme d\'entraînement adapté aux besoins individuels',
    template: `Tu es un coach sportif certifié et nutritionniste. Crée un plan fitness complet pour {nom_utilisateur}.

**PROFIL UTILISATEUR :**
- Âge : {age_utilisateur}
- Niveau actuel : {niveau_fitness}
- Objectif principal : {objectif_fitness}
- Temps disponible : {temps_entrainement}
- Équipement : {equipement_disponible}

**CONTRAINTES & PRÉFÉRENCES :**
- Limitations physiques : {limitations_physiques}
- Activités préférées : {activites_preferees}
- Jours d'entraînement : {jours_semaine}
- Lieu d'entraînement : {lieu_entrainement}

**PROGRAMME D'ENTRAÎNEMENT :**
- Durée du programme : {duree_programme}
- Fréquence : {frequence_seances}
- Intensité : {niveau_intensite}
- Progression : {methode_progression}

**STRUCTURE HEBDOMADAIRE :**
- Cardio : {repartition_cardio}
- Musculation : {repartition_muscu}
- Flexibilité : {repartition_souplesse}
- Récupération : {jours_repos}

**SÉANCES DÉTAILLÉES :**
Pour chaque jour d'entraînement :
- Échauffement (10-15 min)
- Exercices principaux avec séries/répétitions
- Retour au calme et étirements
- Conseils techniques et sécurité

**NUTRITION ASSOCIÉE :**
- Besoins caloriques : {objectif_calorique}
- Répartition macronutriments
- Timing des repas/collations
- Hydratation et supplémentation

**SUIVI & PROGRESSION :**
- Métriques à suivre
- Tests d'évaluation périodiques
- Ajustements du programme
- Motivation et conseils psychologiques`,
    variables: [
      { name: 'nom_utilisateur', type: 'text', label: 'Nom utilisateur', placeholder: 'Marie, Jean...', required: true },
      { name: 'age_utilisateur', type: 'select', label: 'Âge', options: ['18-25', '26-35', '36-45', '46-55', '56-65', '65+'], required: true },
      { name: 'niveau_fitness', type: 'select', label: 'Niveau fitness', options: ['Débutant', 'Intermédiaire', 'Avancé', 'Expert'], required: true },
      { name: 'objectif_fitness', type: 'select', label: 'Objectif principal', options: ['Perte de poids', 'Prise de muscle', 'Tonification', 'Endurance', 'Force', 'Bien-être général'], required: true },
      { name: 'temps_entrainement', type: 'select', label: 'Temps par séance', options: ['30 min', '45 min', '1h', '1h30', '2h+'], required: true },
      { name: 'equipement_disponible', type: 'select', label: 'Équipement', options: ['Aucun (poids du corps)', 'Basique (haltères, tapis)', 'Salle complète', 'Home gym'], required: true },
      { name: 'limitations_physiques', type: 'text', label: 'Limitations physiques', placeholder: 'Mal de dos, genoux sensibles...', required: false },
      { name: 'activites_preferees', type: 'text', label: 'Activités préférées', placeholder: 'Course, yoga, musculation...', required: false },
      { name: 'jours_semaine', type: 'select', label: 'Jours d\'entraînement', options: ['3 jours/semaine', '4 jours/semaine', '5 jours/semaine', '6 jours/semaine'], required: true },
      { name: 'lieu_entrainement', type: 'select', label: 'Lieu', options: ['Domicile', 'Salle de sport', 'Extérieur', 'Mixte'], required: true },
      { name: 'duree_programme', type: 'select', label: 'Durée programme', options: ['4 semaines', '8 semaines', '12 semaines', '6 mois'], required: true },
      { name: 'frequence_seances', type: 'select', label: 'Fréquence séances', options: ['3x/semaine', '4x/semaine', '5x/semaine', '6x/semaine'], required: true },
      { name: 'niveau_intensite', type: 'select', label: 'Intensité', options: ['Faible', 'Modérée', 'Élevée', 'Très élevée'], required: true },
      { name: 'methode_progression', type: 'select', label: 'Méthode progression', options: ['Progressive overload', 'Periodisation', 'Circuit training', 'HIIT'], required: true },
      { name: 'repartition_cardio', type: 'select', label: 'Cardio (%)', options: ['20%', '30%', '40%', '50%'], required: true },
      { name: 'repartition_muscu', type: 'select', label: 'Musculation (%)', options: ['40%', '50%', '60%', '70%'], required: true },
      { name: 'repartition_souplesse', type: 'select', label: 'Souplesse (%)', options: ['10%', '15%', '20%', '25%'], required: true },
      { name: 'jours_repos', type: 'select', label: 'Jours de repos', options: ['1 jour/semaine', '2 jours/semaine', '3 jours/semaine'], required: true },
      { name: 'objectif_calorique', type: 'select', label: 'Objectif calorique', options: ['Déficit (perte)', 'Maintenance', 'Surplus (prise)'], required: true }
    ],
    tags: ['Fitness', 'Santé', 'Entraînement', 'Personnalisé'],
    quality: 4.9,
    usageCount: 2678
  },
  {
    id: 'mindfulness-meditation-guide',
    name: 'Guide Méditation & Pleine Conscience',
    category: 'mental-wellness',
    domain: 'Bien-être Mental',
    description: 'Crée des séances de méditation et exercices de pleine conscience',
    template: `Tu es un instructeur de méditation et thérapeute en pleine conscience. Crée un guide complet pour {nom_pratiquant}.

**PROFIL DU PRATIQUANT :**
- Expérience : {niveau_meditation}
- Objectif : {objectif_meditation}
- Temps disponible : {duree_seance}
- Moment préféré : {moment_pratique}
- Environnement : {environnement_pratique}

**DÉFIS PERSONNELS :**
- Problématiques : {problematiques_stress}
- Difficultés actuelles : {difficultes_meditation}
- Attentes : {attentes_resultats}
- Style de vie : {rythme_vie}

**PROGRAMME PERSONNALISÉ :**
- Durée du programme : {duree_programme_meditation}
- Progression : {progression_meditation}
- Techniques privilégiées : {techniques_preferees}
- Fréquence : {frequence_pratique}

**SÉANCE TYPE :**
1. **Préparation (2-3 min)**
   - Installation confortable
   - Régulation de la respiration
   - Intention de la séance

2. **Cœur de séance ({duree_principale} min)**
   - Technique principale : {technique_principale}
   - Guidance détaillée
   - Points d'attention spécifiques

3. **Intégration (2-3 min)**
   - Retour progressif
   - Ancrage des bénéfices
   - Transition douce

**TECHNIQUES SPÉCIALISÉES :**
- Méditation de la respiration : {respiration_technique}
- Scan corporel : {body_scan_approche}
- Méditation marchée : {marche_consciente}
- Compassion : {loving_kindness}

**OUTILS PRATIQUES :**
- Mantras personnalisés : {mantras_suggeres}
- Visualisations : {visualisations_guidees}
- Ancres d'attention : {ancres_attention}
- Gestion des pensées : {gestion_mental}

**INTÉGRATION QUOTIDIENNE :**
- Micro-pratiques (1-3 min)
- Pleine conscience dans les activités
- Rituels de transition
- Exercices d'urgence anti-stress

Développe un programme progressif avec des exercices concrets, des conseils personnalisés et des stratégies pour maintenir une pratique régulière.`,
    variables: [
      { name: 'nom_pratiquant', type: 'text', label: 'Nom du pratiquant', placeholder: 'Sophie, Marc...', required: true },
      { name: 'niveau_meditation', type: 'select', label: 'Niveau méditation', options: ['Débutant complet', 'Débutant', 'Intermédiaire', 'Avancé'], required: true },
      { name: 'objectif_meditation', type: 'select', label: 'Objectif principal', options: ['Réduction du stress', 'Meilleur sommeil', 'Concentration', 'Gestion émotions', 'Développement personnel'], required: true },
      { name: 'duree_seance', type: 'select', label: 'Durée séance', options: ['5-10 min', '10-15 min', '15-20 min', '20-30 min', '30+ min'], required: true },
      { name: 'moment_pratique', type: 'select', label: 'Moment préféré', options: ['Matin au réveil', 'Pause déjeuner', 'Fin de journée', 'Avant coucher', 'Variable'], required: true },
      { name: 'environnement_pratique', type: 'select', label: 'Environnement', options: ['Domicile calme', 'Bureau/travail', 'Nature/extérieur', 'Transport', 'Partout'], required: true },
      { name: 'problematiques_stress', type: 'select', label: 'Problématiques stress', options: ['Anxiété générale', 'Stress professionnel', 'Insomnie', 'Colère/irritabilité', 'Tristesse/déprime'], required: true },
      { name: 'difficultes_meditation', type: 'select', label: 'Difficultés méditation', options: ['Mental agité', 'Manque de temps', 'Difficulté concentration', 'Impatience résultats', 'Régularité'], required: false },
      { name: 'attentes_resultats', type: 'select', label: 'Attentes résultats', options: ['Immédiat (quelques jours)', 'Court terme (1-2 semaines)', 'Moyen terme (1 mois)', 'Long terme (3+ mois)'], required: true },
      { name: 'rythme_vie', type: 'select', label: 'Rythme de vie', options: ['Très chargé', 'Modérément occupé', 'Équilibré', 'Plutôt tranquille'], required: true },
      { name: 'duree_programme_meditation', type: 'select', label: 'Durée programme', options: ['1 semaine', '2 semaines', '1 mois', '3 mois'], required: true },
      { name: 'progression_meditation', type: 'select', label: 'Type progression', options: ['Graduelle douce', 'Modérée', 'Intensive', 'À mon rythme'], required: true },
      { name: 'techniques_preferees', type: 'text', label: 'Techniques préférées', placeholder: 'Respiration, body scan, visualisation...', required: false },
      { name: 'frequence_pratique', type: 'select', label: 'Fréquence pratique', options: ['Quotidienne', '5-6x/semaine', '3-4x/semaine', 'Occasionnelle'], required: true },
      { name: 'duree_principale', type: 'select', label: 'Durée cœur séance', options: ['5', '10', '15', '20', '25'], required: true },
      { name: 'technique_principale', type: 'select', label: 'Technique principale', options: ['Respiration consciente', 'Scan corporel', 'Méditation ouverte', 'Concentration sur un objet'], required: true },
      { name: 'respiration_technique', type: 'select', label: 'Technique respiration', options: ['4-7-8', 'Cohérence cardiaque', 'Respiration abdominale', 'Observation naturelle'], required: false },
      { name: 'body_scan_approche', type: 'select', label: 'Approche body scan', options: ['Tête aux pieds', 'Pieds à la tête', 'Par zones', 'Sensations globales'], required: false },
      { name: 'marche_consciente', type: 'select', label: 'Marche consciente', options: ['Lente et délibérée', 'Rythme normal', 'Focus sur les pas', 'Conscience environnement'], required: false },
      { name: 'loving_kindness', type: 'select', label: 'Pratique compassion', options: ['Auto-compassion', 'Vers proches', 'Universelle', 'Situations difficiles'], required: false },
      { name: 'mantras_suggeres', type: 'text', label: 'Mantras suggérés', placeholder: '"Je suis calme", "Ici et maintenant"...', required: false },
      { name: 'visualisations_guidees', type: 'text', label: 'Visualisations', placeholder: 'Lieu paisible, lumière dorée...', required: false },
      { name: 'ancres_attention', type: 'select', label: 'Ancres d\'attention', options: ['Respiration', 'Sensations corporelles', 'Sons ambiants', 'Visualisation'], required: true },
      { name: 'gestion_mental', type: 'select', label: 'Gestion du mental', options: ['Observer sans juger', 'Retour doux à l\'ancre', 'Étiquetage pensées', 'Acceptation bienveillante'], required: true }
    ],
    tags: ['Méditation', 'Bien-être', 'Stress', 'Mental'],
    quality: 4.8,
    usageCount: 1845
  }
];
