
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, User, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const PromptGeneratorBackButton: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToResources = () => {
    navigate('/ressources?tab=outils');
  };

  return (
    <Card className="bg-gradient-to-r from-purple-500/5 to-blue-500/10 dark:from-purple-500/10 dark:to-blue-500/15 border-purple-200 dark:border-purple-800/50 mb-6">
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={handleBackToResources}
              className="flex items-center gap-2 hover:bg-purple-50 dark:hover:bg-purple-900/30"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour aux Outils IA
            </Button>
            
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg">
                <Sparkles className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
                  Générateur de Prompts IA
                </h1>
                <p className="text-muted-foreground">
                  Créez des prompts optimisés pour tous types d'IA
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center">
            <Badge variant="secondary" className="flex items-center gap-2">
              <User className="h-3 w-3" />
              Créé par Geoffroy Streit
            </Badge>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
          <div className="flex items-center gap-2 bg-white/60 dark:bg-gray-900/60 p-3 rounded-lg border border-purple-200/30 dark:border-purple-800/30">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-gray-700 dark:text-gray-200">Génération en temps réel</span>
          </div>
          <div className="flex items-center gap-2 bg-white/60 dark:bg-gray-900/60 p-3 rounded-lg border border-blue-200/30 dark:border-blue-800/30">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            <span className="text-gray-700 dark:text-gray-200">150+ templates spécialisés</span>
          </div>
          <div className="flex items-center gap-2 bg-white/60 dark:bg-gray-900/60 p-3 rounded-lg border border-purple-200/30 dark:border-purple-800/30">
            <div className="w-2 h-2 bg-purple-500 rounded-full" />
            <span className="text-gray-700 dark:text-gray-200">Export & sauvegarde</span>
          </div>
          <div className="flex items-center gap-2 bg-white/60 dark:bg-gray-900/60 p-3 rounded-lg border border-orange-200/30 dark:border-orange-800/30">
            <div className="w-2 h-2 bg-orange-500 rounded-full" />
            <span className="text-gray-700 dark:text-gray-200">Optimisation avancée</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PromptGeneratorBackButton;
