// Types de données
export interface Resource {
  title: string;
  source?: string;
  description: string;
  link: string;
  type: string;
  year?: number;
  tags?: string[];
  isInternal?: boolean;
  videoId?: string; // Ajout pour les vidéos YouTube
}

export interface ScientificPublication {
  title: string;
  authors: string[];
  journal: string;
  year: number;
  description: string;
  link: string;
}

export interface IAToolResource {
  name: string;
  description: string;
  link: string;
  category: string;
  pricing: string;
  features: string[];
}

// Import des données depuis les fichiers séparés
import { websites } from './data/websitesData';
import { books } from './data/booksData';
import { courses } from './data/coursesData';
import { videos } from './data/videosData';
import { articles } from './data/articlesData';
import { scientificPublications } from './data/scientificPublicationsData';
import { iaTools } from './data/toolsData';

// Combine toutes les ressources
export const realResources: Resource[] = [
  ...websites,
  ...books,
  ...courses,
  ...videos,
  ...articles
];

// Export des données spécifiques
export { scientificPublications, iaTools };
