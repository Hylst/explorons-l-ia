
import React from 'react';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface StatItem {
  value: string;
  description: string;
  bgGradient?: string;
}

interface StatsGridProps {
  stats: StatItem[];
  columns?: number;
}

const StatsGrid: React.FC<StatsGridProps> = ({ 
  stats, 
  columns = 3 
}) => {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2", 
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
  }[columns] || "grid-cols-1 md:grid-cols-3";

  return (
    <div className={`grid ${gridCols} gap-4 mt-6`}>
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <Card className={`text-center p-4 ${stat.bgGradient || 'bg-gradient-to-br from-primary/5 to-primary/10'} hover:shadow-md transition-all duration-300`}>
            <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
            <p className="text-sm text-muted-foreground">{stat.description}</p>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsGrid;
