
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronRight, Lightbulb, BookOpen, Target } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface InteractiveSectionProps {
  title: string;
  icon: React.ReactNode;
  items: string[];
  expandedExplanations?: {
    title: string;
    content: string;
  }[];
  color?: 'blue' | 'green' | 'purple' | 'orange';
}

const InteractiveSection: React.FC<InteractiveSectionProps> = ({
  title,
  icon,
  items,
  expandedExplanations,
  color = 'blue'
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const colorClasses = {
    blue: {
      bg: 'bg-blue-50 dark:bg-blue-950/30',
      border: 'border-blue-200 dark:border-blue-800',
      text: 'text-blue-900 dark:text-blue-100',
      accent: 'text-blue-600 dark:text-blue-400'
    },
    green: {
      bg: 'bg-green-50 dark:bg-green-950/30',
      border: 'border-green-200 dark:border-green-800',
      text: 'text-green-900 dark:text-green-100',
      accent: 'text-green-600 dark:text-green-400'
    },
    purple: {
      bg: 'bg-purple-50 dark:bg-purple-950/30',
      border: 'border-purple-200 dark:border-purple-800',
      text: 'text-purple-900 dark:text-purple-100',
      accent: 'text-purple-600 dark:text-purple-400'
    },
    orange: {
      bg: 'bg-orange-50 dark:bg-orange-950/30',
      border: 'border-orange-200 dark:border-orange-800',
      text: 'text-orange-900 dark:text-orange-100',
      accent: 'text-orange-600 dark:text-orange-400'
    }
  };

  const styles = colorClasses[color];

  return (
    <Card className={`${styles.bg} ${styles.border} border-2`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className={styles.accent}>{icon}</div>
            <CardTitle className={`text-lg ${styles.text}`}>{title}</CardTitle>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className={`${styles.accent} hover:bg-white/20`}
          >
            {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            Détails
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className={`${styles.accent} mt-1 font-bold`}>•</span>
                <span className={`${styles.text} leading-relaxed`}>{item}</span>
              </li>
            ))}
          </ul>

          <AnimatePresence>
            {isExpanded && expandedExplanations && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-3 pt-4 border-t border-white/20"
              >
                <h5 className={`font-medium ${styles.accent} flex items-center gap-2`}>
                  <BookOpen className="h-4 w-4" />
                  Explications détaillées
                </h5>
                <div className="grid gap-3">
                  {expandedExplanations.map((explanation, index) => (
                    <div key={index} className="space-y-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedItem(selectedItem === index ? null : index)}
                        className={`w-full justify-start text-left ${styles.text} ${styles.border} bg-white/50 dark:bg-black/20`}
                      >
                        {selectedItem === index ? <ChevronDown className="h-3 w-3 mr-2" /> : <ChevronRight className="h-3 w-3 mr-2" />}
                        {explanation.title}
                      </Button>
                      <AnimatePresence>
                        {selectedItem === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4"
                          >
                            <p className={`text-sm leading-relaxed ${styles.text} bg-white/30 dark:bg-black/20 p-3 rounded-lg`}>
                              {explanation.content}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </CardContent>
    </Card>
  );
};

export default InteractiveSection;
