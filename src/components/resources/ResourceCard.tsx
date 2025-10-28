
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, BookOpen, Video, Globe, FileText, Newspaper, Wrench, Flag, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { extractVideoId, getYouTubeThumbnail } from '@/services/youtubeService';
import { QualityIndicator } from './QualityIndicator';
import { ReportResourceDialog } from './ReportResourceDialog';
import { LinkAuditResult } from '@/services/linkAuditService';

interface ResourceCardProps {
  title: string;
  source?: string;
  description: string;
  link: string;
  type: string;
  year?: number;
  tags?: string[];
  isInternal?: boolean;
  videoId?: string;
  auditResult?: LinkAuditResult;
  qualityScore?: number;
  onAuditRequest?: () => void;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ 
  title, 
  source, 
  description, 
  link, 
  type, 
  year, 
  tags,
  isInternal = false,
  videoId,
  auditResult,
  qualityScore,
  onAuditRequest
}) => {
  const navigate = useNavigate();
  const [showReportDialog, setShowReportDialog] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);
  const [thumbnailError, setThumbnailError] = useState(false);

  // Récupération de la miniature YouTube
  useEffect(() => {
    const isVideoType = type.toLowerCase() === 'vidéo';
    const isYouTubeLink = link.includes('youtube.com') || link.includes('youtu.be');
    
    if (isVideoType && isYouTubeLink) {
      const id = videoId || extractVideoId(link);
      console.log('Extracting video ID for:', title, 'ID:', id, 'Original link:', link);
      
      if (id) {
        // Essaie d'abord la qualité moyenne, puis fait un fallback
        const qualities = ['mqdefault', 'hqdefault', 'default'];
        let currentQualityIndex = 0;
        
        const tryThumbnail = (qualityIndex: number) => {
          if (qualityIndex >= qualities.length) {
            console.warn('Aucune miniature disponible pour:', title);
            return;
          }
          
          const quality = qualities[qualityIndex];
          const thumbnailUrl = `https://img.youtube.com/vi/${id}/${quality}.jpg`;
          
          // Test de l'existence de la miniature
          const img = new Image();
          img.onload = () => {
            setThumbnailUrl(thumbnailUrl);
            setThumbnailError(false);
            console.log('Miniature chargée pour:', title, thumbnailUrl);
          };
          img.onerror = () => {
            console.warn('Miniature non disponible:', thumbnailUrl);
            tryThumbnail(qualityIndex + 1);
          };
          img.src = thumbnailUrl;
        };
        
        tryThumbnail(currentQualityIndex);
      }
    }
  }, [videoId, link, type, title]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isInternal) {
      navigate(link);
    } else {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  const handleThumbnailError = () => {
    setThumbnailError(true);
    setThumbnailUrl(null);
  };

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'cours':
        return <BookOpen className="h-4 w-4 text-primary" />;
      case 'vidéo':
        return <Video className="h-4 w-4 text-primary" />;
      case 'site web':
        return <Globe className="h-4 w-4 text-primary" />;
      case 'livre':
        return <FileText className="h-4 w-4 text-primary" />;
      case 'article':
        return <Newspaper className="h-4 w-4 text-primary" />;
      case 'outil':
        return <Wrench className="h-4 w-4 text-primary" />;
      default:
        return <FileText className="h-4 w-4 text-primary" />;
    }
  };

  const getAuditStatusBadge = () => {
    if (!auditResult) return null;
    
    const statusConfig = {
      success: { label: 'Vérifié', variant: 'default' as const, color: 'text-green-600' },
      error: { label: 'Erreur', variant: 'destructive' as const, color: 'text-red-600' },
      redirect: { label: 'Redirection', variant: 'secondary' as const, color: 'text-yellow-600' },
      timeout: { label: 'Timeout', variant: 'outline' as const, color: 'text-orange-600' }
    };
    
    const config = statusConfig[auditResult.status];
    
    return (
      <Badge variant={config.variant} className={`text-xs ${config.color}`}>
        {config.label}
      </Badge>
    );
  };

  return (
    <>
      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
        <CardContent className="p-6 h-full flex flex-col">
          {/* Miniature YouTube pour les vidéos */}
          {thumbnailUrl && !thumbnailError && (
            <div className="mb-4 rounded-lg overflow-hidden bg-gray-100">
              <img 
                src={thumbnailUrl}
                alt={`Miniature de ${title}`}
                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                onError={handleThumbnailError}
                loading="lazy"
              />
            </div>
          )}
          
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-2 flex-wrap">
              {getTypeIcon(type)}
              <Badge variant="secondary" className="text-xs">
                {type}
              </Badge>
              {isInternal && (
                <Badge variant="default" className="text-xs bg-primary/10 text-primary">
                  Interne
                </Badge>
              )}
              {getAuditStatusBadge()}
            </div>
            {year && (
              <span className="text-xs text-muted-foreground">{year}</span>
            )}
          </div>
          
          <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          
          {source && (
            <p className="text-sm text-primary mb-2 font-medium">{source}</p>
          )}
          
          <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">
            {description}
          </p>
          
          {/* Score de qualité */}
          {qualityScore !== undefined && (
            <div className="mb-3">
              <QualityIndicator score={qualityScore} />
            </div>
          )}
          
          {/* Informations d'audit */}
          {auditResult && (
            <div className="text-xs text-muted-foreground mb-3">
              Vérifié le {auditResult.lastChecked.toLocaleDateString()} 
              {auditResult.responseTime && ` (${auditResult.responseTime}ms)`}
            </div>
          )}
          
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-4">
              {tags.slice(0, 3).map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {tags.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{tags.length - 3}
                </Badge>
              )}
            </div>
          )}
          
          <div className="flex gap-2 mt-auto">
            <Button 
              onClick={handleClick}
              variant="outline" 
              size="sm" 
              className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
            >
              {isInternal ? 'Suivre le cours' : 'Accéder'}
              <ExternalLink className="ml-2 h-3 w-3" />
            </Button>
            
            <Button
              onClick={() => setShowReportDialog(true)}
              variant="ghost"
              size="sm"
              className="px-2"
              title="Signaler un problème"
            >
              <Flag className="h-3 w-3" />
            </Button>
            
            {onAuditRequest && (
              <Button
                onClick={onAuditRequest}
                variant="ghost"
                size="sm"
                className="px-2"
                title="Vérifier le lien"
              >
                <RefreshCw className="h-3 w-3" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <ReportResourceDialog
        isOpen={showReportDialog}
        onClose={() => setShowReportDialog(false)}
        resourceId={link}
        resourceTitle={title}
      />
    </>
  );
};

export default ResourceCard;
