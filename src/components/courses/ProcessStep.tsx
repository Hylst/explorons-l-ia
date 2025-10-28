
import React from 'react';

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  bgColor?: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ 
  step, 
  title, 
  description, 
  bgColor = "bg-primary" 
}) => {
  return (
    <div className="space-y-2">
      <div className={`${bgColor} text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mx-auto text-sm font-medium`}>
        {step}
      </div>
      <div className="text-center">
        <p className="text-card-foreground font-medium text-sm">
          <strong>{title}</strong>
        </p>
        <p className="text-muted-foreground text-xs mt-1">{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep;
