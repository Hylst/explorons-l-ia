
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { User, Clock, Target, Globe } from 'lucide-react';

interface CourseHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  author: string;
  authorDescription?: string;
  duration: string;
  level: string;
  audience?: string;
  tags: string[];
}

const CourseHeader: React.FC<CourseHeaderProps> = ({
  title,
  subtitle,
  description,
  author,
  authorDescription,
  duration,
  level,
  audience,
  tags
}) => {
  return (
    <div className="max-w-4xl mx-auto mb-12">
      <div className="flex flex-wrap gap-3 mb-6">
        {tags.map((tag, index) => (
          <Badge key={index} variant={index === 0 ? "default" : index === 1 ? "secondary" : "outline"}>
            {tag}
          </Badge>
        ))}
      </div>
      
      <div className="bg-muted/50 rounded-lg p-6 mb-8">
        <div className="flex items-center gap-4 mb-4">
          <User className="h-6 w-6 text-primary" />
          <div>
            <p className="font-medium">Auteur : {author}</p>
            <p className="text-sm text-muted-foreground">{authorDescription || description || "Consultant passionné en Intelligence Artificielle"}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <span>Durée estimée : {duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 text-primary" />
            <span>Niveau : {level}</span>
          </div>
          {audience && (
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-primary" />
              <span>Audience : {audience}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
