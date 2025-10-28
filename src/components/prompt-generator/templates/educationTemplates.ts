
import { PromptTemplate, PromptCategory } from '../promptTemplatesData';

export const educationCategories: PromptCategory[] = [
  {
    id: 'course-creation',
    name: 'Création de Cours',
    description: 'Templates pour créer du contenu pédagogique',
    icon: 'BookOpen'
  },
  {
    id: 'assessment',
    name: 'Évaluation',
    description: 'Templates pour créer des évaluations et quiz',
    icon: 'CheckSquare'
  },
  {
    id: 'tutoring',
    name: 'Tutorat IA',
    description: 'Templates pour l\'assistance pédagogique',
    icon: 'Users'
  }
];

export const educationTemplates: PromptTemplate[] = [
  {
    id: 'interactive-course-creator',
    name: 'Créateur de Cours Interactif',
    category: 'course-creation',
    domain: 'Pédagogie',
    description: 'Génère un cours structuré avec activités interactives',
    template: `Tu es un expert en ingénierie pédagogique. Crée un cours interactif complet sur : "{subject}".

## 📚 Informations du Cours
**Sujet :** {subject}
**Public :** {audience}
**Niveau :** {level}
**Durée :** {duration}
**Modalité :** {modality}

## 🎯 Objectifs Pédagogiques
À la fin de ce cours, les apprenants seront capables de :
1. [Objectif cognitif] - Comprendre {cognitiveGoal}
2. [Objectif procédural] - Appliquer {proceduralGoal}  
3. [Objectif attitude] - {attitudeGoal}

## 📋 Prérequis
- {prerequisites}

## 📖 Structure du Cours

### Module 1 : Introduction ({introductionTime})
**Accroche :** {hook}
- Présentation du sujet
- Enjeux et applications
- **Activité brise-glace :** {icebreaker}

### Module 2 : Concepts Fondamentaux ({conceptsTime})
- Définitions clés
- Principes de base
- **Activité interactive :** {interactiveActivity1}
- **Quiz de compréhension :** 5 questions

### Module 3 : Applications Pratiques ({practiceTime})
- Études de cas
- Exercices guidés
- **Projet pratique :** {practicalProject}

### Module 4 : Approfondissement ({advancedTime})
- Concepts avancés : {advancedConcepts}
- Tendances actuelles
- **Discussion de groupe :** {groupDiscussion}

### Module 5 : Synthèse et Évaluation ({assessmentTime})
- Récapitulatif
- **Évaluation finale :** {finalAssessment}
- Ressources pour aller plus loin

## 🎮 Éléments Interactifs
- **Gamification :** {gamification}
- **Outils collaboratifs :** {collaborativeTools}
- **Simulations :** {simulations}

## 📊 Méthodes d'Évaluation
- Évaluation formative : {formativeAssessment}
- Évaluation sommative : {summativeAssessment}
- Auto-évaluation : {selfAssessment}

## 📚 Ressources Complémentaires
- Lectures recommandées
- Vidéos explicatives
- Exercices supplémentaires
- Communauté d'apprentissage

## 🔄 Adaptation Pédagogique
**Différenciation :** {differentiation}
**Support pour difficultés :** {support}`,
    variables: [
      { name: 'subject', type: 'text', label: 'Sujet du cours', placeholder: 'Intelligence artificielle, Marketing digital...', required: true },
      { name: 'audience', type: 'select', label: 'Public cible', options: ['Étudiants', 'Professionnels', 'Grand public', 'Experts'], required: true },
      { name: 'level', type: 'select', label: 'Niveau', options: ['Débutant', 'Intermédiaire', 'Avancé', 'Expert'], required: true },
      { name: 'duration', type: 'select', label: 'Durée totale', options: ['2h', '4h', '8h', '16h', '32h'], required: true },
      { name: 'modality', type: 'select', label: 'Modalité', options: ['Présentiel', 'Distanciel', 'Hybride', 'E-learning'], required: true },
      { name: 'cognitiveGoal', type: 'text', label: 'Objectif cognitif', placeholder: 'les principes de base...', required: true },
      { name: 'proceduralGoal', type: 'text', label: 'Objectif procédural', placeholder: 'les techniques apprises...', required: true },
      { name: 'attitudeGoal', type: 'text', label: 'Objectif attitudinal', placeholder: 'adopter une approche critique...', required: true },
      { name: 'prerequisites', type: 'text', label: 'Prérequis', placeholder: 'Connaissances de base en...', required: false },
      { name: 'hook', type: 'text', label: 'Accroche', placeholder: 'Question provocante, statistique...', required: true },
      { name: 'icebreaker', type: 'text', label: 'Brise-glace', placeholder: 'Quiz, sondage, témoignage...', required: false },
      { name: 'interactiveActivity1', type: 'text', label: 'Activité interactive', placeholder: 'Carte mentale, débat, simulation...', required: true },
      { name: 'practicalProject', type: 'text', label: 'Projet pratique', placeholder: 'Création d\'un prototype...', required: true },
      { name: 'advancedConcepts', type: 'text', label: 'Concepts avancés', placeholder: 'Techniques expertes...', required: false },
      { name: 'groupDiscussion', type: 'text', label: 'Discussion de groupe', placeholder: 'Éthique, impacts, défis...', required: false },
      { name: 'finalAssessment', type: 'select', label: 'Évaluation finale', options: ['QCM', 'Projet', 'Présentation', 'Portfolio'], required: true },
      { name: 'gamification', type: 'text', label: 'Gamification', placeholder: 'Points, badges, classement...', required: false },
      { name: 'collaborativeTools', type: 'text', label: 'Outils collaboratifs', placeholder: 'Forum, wiki, chat...', required: false },
      { name: 'simulations', type: 'text', label: 'Simulations', placeholder: 'Cas pratiques, jeux de rôle...', required: false },
      { name: 'formativeAssessment', type: 'text', label: 'Évaluation formative', placeholder: 'Quiz réguliers, feedback...', required: true },
      { name: 'summativeAssessment', type: 'text', label: 'Évaluation sommative', placeholder: 'Examen final, projet...', required: true },
      { name: 'selfAssessment', type: 'text', label: 'Auto-évaluation', placeholder: 'Grilles, réflexion...', required: false },
      { name: 'differentiation', type: 'text', label: 'Différenciation', placeholder: 'Parcours adaptatifs...', required: false },
      { name: 'support', type: 'text', label: 'Support difficultés', placeholder: 'Tutorat, ressources...', required: false },
      { name: 'introductionTime', type: 'text', label: 'Temps introduction', placeholder: '30 min', required: false },
      { name: 'conceptsTime', type: 'text', label: 'Temps concepts', placeholder: '1h', required: false },
      { name: 'practiceTime', type: 'text', label: 'Temps pratique', placeholder: '1h30', required: false },
      { name: 'advancedTime', type: 'text', label: 'Temps avancé', placeholder: '1h', required: false },
      { name: 'assessmentTime', type: 'text', label: 'Temps évaluation', placeholder: '30 min', required: false }
    ],
    tags: ['Éducation', 'Cours', 'Pédagogie', 'Interactif'],
    quality: 4.9,
    usageCount: 567
  }
];
