
export interface DetectionPreset {
  id: string;
  name: string;
  description: string;
  fileTypes: string[];
  settings: {
    sensitivity: 'low' | 'medium' | 'high';
    focusAreas: string[];
    thresholds: {
      text?: number;
      image?: number;
      audio?: number;
    };
  };
}

export const detectionPresets: DetectionPreset[] = [
  {
    id: 'academic',
    name: 'Contrôle Académique',
    description: 'Optimisé pour détecter les devoirs et dissertations générés par IA',
    fileTypes: ['text/plain', 'application/pdf', 'text/html'],
    settings: {
      sensitivity: 'high',
      focusAreas: ['patterns', 'vocabulary', 'structure'],
      thresholds: { text: 0.6 }
    }
  },
  {
    id: 'journalistic',
    name: 'Vérification Journalistique',
    description: 'Détection d\'articles et contenus médiatiques générés par IA',
    fileTypes: ['text/plain', 'text/html', 'application/pdf'],
    settings: {
      sensitivity: 'medium',
      focusAreas: ['patterns', 'sources', 'style'],
      thresholds: { text: 0.7 }
    }
  },
  {
    id: 'creative',
    name: 'Contenu Créatif',
    description: 'Analyse d\'images, musiques et vidéos générées par IA',
    fileTypes: ['image/*', 'audio/*', 'video/*'],
    settings: {
      sensitivity: 'medium',
      focusAreas: ['artifacts', 'metadata', 'quality'],
      thresholds: { image: 0.6, audio: 0.65 }
    }
  },
  {
    id: 'social_media',
    name: 'Réseaux Sociaux',
    description: 'Détection de contenu IA sur les plateformes sociales',
    fileTypes: ['image/*', 'text/plain', 'audio/*'],
    settings: {
      sensitivity: 'low',
      focusAreas: ['patterns', 'artifacts', 'filename'],
      thresholds: { text: 0.8, image: 0.7, audio: 0.75 }
    }
  },
  {
    id: 'legal',
    name: 'Vérification Juridique',
    description: 'Analyse rigoureuse pour contextes légaux et officiels',
    fileTypes: ['text/plain', 'application/pdf', 'image/*'],
    settings: {
      sensitivity: 'high',
      focusAreas: ['all'],
      thresholds: { text: 0.5, image: 0.5, audio: 0.6 }
    }
  },
  {
    id: 'marketing',
    name: 'Contenu Marketing',
    description: 'Détection de contenus marketing et publicitaires IA',
    fileTypes: ['text/plain', 'image/*', 'video/*'],
    settings: {
      sensitivity: 'medium',
      focusAreas: ['patterns', 'style', 'artifacts'],
      thresholds: { text: 0.75, image: 0.65 }
    }
  }
];

export const getPresetById = (id: string): DetectionPreset | undefined => {
  return detectionPresets.find(preset => preset.id === id);
};

export const getPresetsForFileType = (fileType: string): DetectionPreset[] => {
  return detectionPresets.filter(preset => 
    preset.fileTypes.some(type => 
      type === fileType || 
      type.endsWith('/*') && fileType.startsWith(type.replace('/*', ''))
    )
  );
};
