
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Info } from 'lucide-react';

interface AnalogyBoxProps {
  title: string;
  description?: string;
  content?: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'info' | 'tip';
}

const AnalogyBox: React.FC<AnalogyBoxProps> = ({ 
  title, 
  description,
  content,
  icon,
  variant = 'default'
}) => {
  const variantStyles = {
    default: {
      bg: "bg-blue-50 border-l-4 border-blue-400",
      iconColor: "text-blue-400",
      titleColor: "text-blue-800",
      contentColor: "text-blue-700"
    },
    info: {
      bg: "bg-amber-50 border-l-4 border-amber-400", 
      iconColor: "text-amber-400",
      titleColor: "text-amber-800",
      contentColor: "text-amber-700"
    },
    tip: {
      bg: "bg-green-50 border-l-4 border-green-400",
      iconColor: "text-green-400", 
      titleColor: "text-green-800",
      contentColor: "text-green-700"
    }
  };

  const styles = variantStyles[variant];
  const defaultIcon = variant === 'info' ? <Info className="h-5 w-5" /> : <Lightbulb className="h-5 w-5" />;
  const displayContent = content || description;

  return (
    <div className={`${styles.bg} p-4 rounded-r-lg`}>
      <div className="flex items-start">
        <div className={`${styles.iconColor} mt-1 mr-3 flex-shrink-0`}>
          {icon || defaultIcon}
        </div>
        <div>
          <h4 className={`font-medium ${styles.titleColor} mb-1`}>{title}</h4>
          <p className={`${styles.contentColor} text-sm`}>{displayContent}</p>
        </div>
      </div>
    </div>
  );
};

export default AnalogyBox;
