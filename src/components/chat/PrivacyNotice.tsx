import React from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, Info, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PrivacyNoticeProps {
  isAnonymous?: boolean;
}

const PrivacyNotice: React.FC<PrivacyNoticeProps> = ({ isAnonymous = false }) => {
  return (
    <Alert className="mb-4 border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950">
      <Shield className="h-4 w-4 text-blue-600 dark:text-blue-400" />
      <AlertDescription className="text-sm">
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <Info className="h-3 w-3 mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
            <div>
              <p className="font-medium text-blue-800 dark:text-blue-200">
                {isAnonymous ? 'Mode Anonyme Activé' : 'Informations sur vos données'}
              </p>
              {isAnonymous ? (
                <p className="text-blue-700 dark:text-blue-300">
                  Vos messages ne sont pas liés à votre identité et ne sont pas conservés localement.
                </p>
              ) : (
                <p className="text-blue-700 dark:text-blue-300">
                  Vos messages sont envoyés à Deepseek AI pour traitement et peuvent être stockés temporairement.
                </p>
              )}
            </div>
          </div>
          
          <div className="pl-5 space-y-1 text-xs text-blue-600 dark:text-blue-400">
            <div className="flex items-center gap-1">
              <span>•</span>
              <span>Données envoyées : contenu de vos messages uniquement</span>
            </div>
            <div className="flex items-center gap-1">
              <span>•</span>
              <span>Conservation : temporaire, pas de sauvegarde permanente</span>
            </div>
            <div className="flex items-center gap-1">
              <span>•</span>
              <span>Localisation : serveurs Deepseek (hors UE)</span>
            </div>
          </div>
          
          <div className="pt-2 flex flex-wrap gap-2 text-xs">
            <Link 
              to="/confidentialite" 
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
            >
              Politique de confidentialité <ExternalLink className="h-3 w-3" />
            </Link>
            <Link 
              to="/gestion-donnees-rgpd" 
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
            >
              Gestion de mes données <ExternalLink className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </AlertDescription>
    </Alert>
  );
};

export default PrivacyNotice;