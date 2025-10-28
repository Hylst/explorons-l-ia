
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Users } from 'lucide-react';
import { PromptTemplate } from './promptTemplatesData';

interface TemplateCardProps {
  template: PromptTemplate;
  isSelected: boolean;
  onSelect: (template: PromptTemplate) => void;
  isAdvanced?: boolean;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ 
  template, 
  isSelected, 
  onSelect,
  isAdvanced = false 
}) => {
  const getQualityColor = (quality: number) => {
    if (quality >= 4.5) return 'text-green-600';
    if (quality >= 4.0) return 'text-yellow-600';
    return 'text-orange-600';
  };

  return (
    <Card 
      className={`cursor-pointer transition-all hover:shadow-md ${
        isSelected ? 'ring-2 ring-primary' : ''
      }`}
      onClick={() => onSelect(template)}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-lg">{template.name}</h3>
              {isAdvanced && (
                <Badge variant="default" className="text-xs">Avancé</Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              {template.description}
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Star className={`h-4 w-4 ${getQualityColor(template.quality)}`} />
                <span className={getQualityColor(template.quality)}>
                  {template.quality.toFixed(1)}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>{template.usageCount.toLocaleString()}</span>
              </div>
              <Badge variant="outline">{template.domain}</Badge>
            </div>
          </div>
          {isSelected && (
            <div className="ml-2">
              <Badge>Sélectionné</Badge>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-1">
          {template.tags.map(tag => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TemplateCard;
