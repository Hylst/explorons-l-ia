
/**
 * Service pour interagir avec l'API YouTube et récupérer les métadonnées des vidéos
 */

export interface YouTubeThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface YouTubeVideoData {
  id: string;
  title: string;
  thumbnail: YouTubeThumbnail;
  duration?: string;
  viewCount?: string;
  publishedAt?: string;
}

/**
 * Extrait l'ID de la vidéo depuis une URL YouTube
 */
export const extractVideoId = (url: string): string | null => {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/watch\?.*v=([^&\n?#]+)/,
    /youtu\.be\/([^&\n?#]+)/
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      // Nettoie l'ID en supprimant les paramètres additionnels
      return match[1].split('&')[0].split('?')[0];
    }
  }
  
  return null;
};

/**
 * Génère l'URL de la miniature YouTube
 * Utilise l'API publique de YouTube sans clé API
 */
export const getYouTubeThumbnail = (videoId: string, quality: 'default' | 'medium' | 'high' | 'maxres' = 'medium'): string => {
  const qualityMap = {
    'default': 'default',
    'medium': 'mqdefault',
    'high': 'hqdefault',
    'maxres': 'maxresdefault'
  };
  
  return `https://img.youtube.com/vi/${videoId}/${qualityMap[quality]}.jpg`;
};

/**
 * Vérifie si une miniature YouTube existe
 */
export const checkThumbnailExists = async (url: string): Promise<boolean> => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};

/**
 * Récupère les données d'une vidéo YouTube avec fallback sur les miniatures
 */
export const getYouTubeVideoData = async (videoId: string): Promise<YouTubeVideoData | null> => {
  try {
    // Essaie d'abord la haute qualité, puis fait un fallback
    const qualities: Array<'maxres' | 'high' | 'medium' | 'default'> = ['maxres', 'high', 'medium', 'default'];
    
    for (const quality of qualities) {
      const thumbnailUrl = getYouTubeThumbnail(videoId, quality);
      const exists = await checkThumbnailExists(thumbnailUrl);
      
      if (exists) {
        return {
          id: videoId,
          title: '', // Sera rempli par les données de ressource existantes
          thumbnail: {
            url: thumbnailUrl,
            width: quality === 'maxres' ? 1280 : quality === 'high' ? 480 : quality === 'medium' ? 320 : 120,
            height: quality === 'maxres' ? 720 : quality === 'high' ? 360 : quality === 'medium' ? 180 : 90
          }
        };
      }
    }
    
    return null;
  } catch (error) {
    console.error('Erreur lors de la récupération des données YouTube:', error);
    return null;
  }
};

/**
 * Génère l'URL d'intégration YouTube
 */
export const getYouTubeEmbedUrl = (videoId: string): string => {
  return `https://www.youtube.com/embed/${videoId}`;
};
