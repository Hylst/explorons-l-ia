
import React from 'react';
import { Card } from '@/components/ui/card';

interface DomainCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const DomainCard: React.FC<DomainCardProps> = ({ icon, title, description, index }) => {
  return (
    <Card className="text-center p-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1 bg-card border-border dark:bg-card dark:border-border">
      <div className="text-primary mb-2 flex justify-center">
        {icon}
      </div>
      <h5 className="font-medium text-sm mb-1 text-card-foreground">{title}</h5>
      <p className="text-xs text-muted-foreground">{description}</p>
    </Card>
  );
};

export default DomainCard;
