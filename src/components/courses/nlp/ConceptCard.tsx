
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

interface ConceptCardProps {
  title: string;
  description: string;
  example: string;
  difficulty: 'Débutant' | 'Intermédiaire' | 'Avancé';
  icon: React.ReactNode;
  analogy?: string;
  technicalDetails?: string[];
  applications?: string[];
}

const ConceptCard: React.FC<ConceptCardProps> = ({
  title,
  description,
  example,
  difficulty,
  icon,
  analogy,
  technicalDetails,
  applications
}) => {
  const getDifficultyColor = (level: ConceptCardProps['difficulty']) => {
    switch (level) {
      case 'Débutant': return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermédiaire': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Avancé': return 'bg-red-100 text-red-800 border-red-200';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="h-full hover:shadow-lg transition-all duration-300">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="text-primary">{icon}</div>
              <div>
                <CardTitle className="text-lg">{title}</CardTitle>
                <Badge className={getDifficultyColor(difficulty)}>
                  {difficulty}
                </Badge>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h5 className="font-medium mb-2">Description</h5>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>

          {analogy && (
            <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
              <h5 className="font-medium text-blue-800 mb-1">Analogie</h5>
              <p className="text-sm text-blue-700">{analogy}</p>
            </div>
          )}

          <div>
            <h5 className="font-medium mb-2">Exemple concret</h5>
            <code className="text-sm bg-gray-100 p-2 rounded block">
              {example}
            </code>
          </div>

          {technicalDetails && (
            <div>
              <h5 className="font-medium mb-2">Détails techniques</h5>
              <ul className="text-sm space-y-1">
                {technicalDetails.map((detail, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {applications && (
            <div>
              <h5 className="font-medium mb-2">Applications</h5>
              <div className="flex flex-wrap gap-1">
                {applications.map((app, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {app}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ConceptCard;
