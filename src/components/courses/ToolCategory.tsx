
import React from 'react';
import { Card } from '@/components/ui/card';

interface Tool {
  name: string;
  description: string;
}

interface ToolCategoryProps {
  icon: React.ReactNode;
  title: string;
  tools: Tool[];
  color: 'pink' | 'blue' | 'purple';
}

const ToolCategory: React.FC<ToolCategoryProps> = ({ 
  icon, 
  title, 
  tools, 
  color 
}) => {
  const colorClasses = {
    pink: {
      card: "bg-pink-50 border-pink-200 dark:bg-pink-950/30 dark:border-pink-800",
      title: "text-pink-800 dark:text-pink-200",
      text: "text-pink-700 dark:text-pink-300"
    },
    blue: {
      card: "bg-blue-50 border-blue-200 dark:bg-blue-950/30 dark:border-blue-800",
      title: "text-blue-800 dark:text-blue-200",
      text: "text-blue-700 dark:text-blue-300"
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
      <h5 className={`font-medium ${styles.title} mb-3 flex items-center gap-2`}>
        {icon}
        {title}
      </h5>
      <ul className={`text-sm space-y-1 ${styles.text}`}>
        {tools.map((tool, index) => (
          <li key={index}>
            • <strong>{tool.name}</strong> - {tool.description}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ToolCategory;
