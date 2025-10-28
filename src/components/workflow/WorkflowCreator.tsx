
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { User } from 'lucide-react';

const WorkflowCreator: React.FC = () => {
  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <User className="h-4 w-4" />
      <span>Créé par</span>
      <Badge variant="outline" className="font-medium">
        Geoffroy Streit
      </Badge>
    </div>
  );
};

export default WorkflowCreator;
