
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, User, Download, Zap, HelpCircle } from 'lucide-react';

interface DetectorHeaderProps {
  resultsCount: number;
  onExportAll: () => void;
  onShowBatchProcessor: () => void;
  onShowConfidenceExplainer: () => void;
}

export const DetectorHeader: React.FC<DetectorHeaderProps> = ({
  resultsCount,
  onExportAll,
  onShowBatchProcessor,
  onShowConfidenceExplainer
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Link to="/ressources?tab=outils">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Retour aux outils
          </Button>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <User className="h-4 w-4" />
          <span>Créé par Geoffroy Streit</span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onShowConfidenceExplainer}
            className="flex items-center gap-2"
          >
            <HelpCircle className="h-4 w-4" />
            Aide
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={onShowBatchProcessor}
            className="flex items-center gap-2"
          >
            <Zap className="h-4 w-4" />
            Traitement par lots
          </Button>
          {resultsCount > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={onExportAll}
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Exporter tout ({resultsCount})
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
