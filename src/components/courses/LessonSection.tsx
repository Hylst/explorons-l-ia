
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import SectionHeading from '@/components/SectionHeading';
import { motion } from 'framer-motion';

interface LessonSectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  delay?: number;
}

const LessonSection: React.FC<LessonSectionProps> = ({ 
  title, 
  icon, 
  children,
  delay = 0
}) => {
  return (
    <motion.div 
      className="mb-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <SectionHeading 
        title={title} 
        pretitle="Leçon"
      />
      <Card>
        <CardContent className="p-6">
          <div className="flex gap-4 items-start">
            <div className="text-primary shrink-0 mt-1">
              {icon}
            </div>
            <div className="space-y-4">
              {children}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default LessonSection;
