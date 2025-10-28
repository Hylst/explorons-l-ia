
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface DidYouKnowItem {
  title: string;
  content: string;
}

interface DidYouKnowProps {
  fact?: string;
  items?: DidYouKnowItem[];
  bgGradient?: string;
  borderColor?: string;
}

const DidYouKnow: React.FC<DidYouKnowProps> = ({ 
  fact,
  items = [], 
  bgGradient = "from-primary/5 to-primary/10",
  borderColor = "border-primary/20"
}) => {
  // If a single fact is provided, convert it to items format
  const displayItems = fact ? [{ title: "Le saviez-vous ?", content: fact }] : items;

  return (
    <motion.div 
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <Sparkles className="h-6 w-6 text-primary" />
        Le saviez-vous ?
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className={`h-full bg-gradient-to-br ${bgGradient} ${borderColor} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
              <CardContent className="p-4">
                <h4 className="font-semibold text-primary mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.content}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default DidYouKnow;
