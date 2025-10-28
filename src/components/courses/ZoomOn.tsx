
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

interface ZoomOnProps {
  title: string;
  children: React.ReactNode;
}

const ZoomOn: React.FC<ZoomOnProps> = ({ title, children }) => {
  return (
    <motion.div 
      className="my-6"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden border-primary/50">
        <div className="bg-primary/10 px-4 py-2 flex items-center gap-2">
          <Search className="h-4 w-4 text-primary" />
          <h4 className="font-medium text-primary">Zoom sur : {title}</h4>
        </div>
        <CardContent className="p-4 text-sm">
          {children}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ZoomOn;
