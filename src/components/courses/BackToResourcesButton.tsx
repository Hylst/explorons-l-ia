
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BackToResourcesButton: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/ressources?tab=cours', { replace: true });
  };

  return (
    <div className="mb-6">
      <Button 
        variant="outline" 
        onClick={handleBack}
        className="flex items-center gap-2 hover:bg-primary/5"
      >
        <ArrowLeft className="h-4 w-4" />
        Retour aux cours
      </Button>
    </div>
  );
};

export default BackToResourcesButton;
