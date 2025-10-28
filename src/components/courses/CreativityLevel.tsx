
import React from 'react';
import { Card } from '@/components/ui/card';

interface CreativityLevelProps {
  level: number;
  title: string;
  description: string;
  color: 'blue' | 'green' | 'purple';
}

const CreativityLevel: React.FC<CreativityLevelProps> = ({ 
  level, 
  title, 
  description, 
  color 
}) => {
  const colorClasses = {
    blue: {
      card: "bg-blue-50 border-blue-200 dark:bg-blue-950/30 dark:border-blue-800",
      title: "text-blue-800 dark:text-blue-200",
      text: "text-blue-700 dark:text-blue-300"
    },
    green: {
      card: "bg-green-50 border-green-200 dark:bg-green-950/30 dark:border-green-800",
      title: "text-green-800 dark:text-green-200", 
      text: "text-green-700 dark:text-green-300"
    },
    purple: {
      card: "bg-purple-50 border-purple-200 dark:bg-purple-950/30 dark:border-purple-800",
      title: "text-purple-800 dark:text-purple-200",
      text: "text-purple-700 dark:text-purple-300"
    }
  };

  const styles = colorClasses[color];

  return (
    <Card className={`p-4 ${styles.card}`}>
      <h5 className={`font-medium ${styles.title} mb-2`}>
        {level}. {title}
      </h5>
      <p className={`text-sm ${styles.text}`}>{description}</p>
    </Card>
  );
};

export default CreativityLevel;
