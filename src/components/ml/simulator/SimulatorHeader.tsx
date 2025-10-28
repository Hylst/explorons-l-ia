
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, User, ExternalLink, Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SimulatorHeader: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToResources = () => {
    navigate('/ressources?tab=outils');
  };

  return (
    <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={handleBackToResources}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour aux Outils
            </Button>
            
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Simulateur d'Entraînement IA</h1>
                <p className="text-muted-foreground">
                  Simulez et visualisez l'entraînement de modèles d'IA en temps réel
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="flex items-center gap-2">
              <User className="h-3 w-3" />
              Créé par Geoffroy Streit
            </Badge>
            <Button
              variant="outline"
              size="sm"
              onClick={handleBackToResources}
              className="flex items-center gap-2"
            >
              <ExternalLink className="h-4 w-4" />
              Plus d'Outils IA
            </Button>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-2 bg-white/50 dark:bg-gray-900/50 p-3 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Simulation en temps réel</span>
          </div>
          <div className="flex items-center gap-2 bg-white/50 dark:bg-gray-900/50 p-3 rounded-lg">
            <div className="w-2 h-2 bg-blue-500 rounded-full" />
            <span>Algorithmes multiples</span>
          </div>
          <div className="flex items-center gap-2 bg-white/50 dark:bg-gray-900/50 p-3 rounded-lg">
            <div className="w-2 h-2 bg-purple-500 rounded-full" />
            <span>Analyse pédagogique</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SimulatorHeader;
