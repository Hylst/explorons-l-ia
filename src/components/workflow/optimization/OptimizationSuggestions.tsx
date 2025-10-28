
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Lightbulb,
  DollarSign,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

interface OptimizationSuggestion {
  id: string;
  type: 'cost' | 'performance' | 'reliability';
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  estimatedSaving: string;
  complexity: 'easy' | 'medium' | 'hard';
}

interface OptimizationSuggestionsProps {
  suggestions: OptimizationSuggestion[];
  onApplySuggestion: (suggestionId: string) => void;
}

const OptimizationSuggestions: React.FC<OptimizationSuggestionsProps> = ({ 
  suggestions, 
  onApplySuggestion 
}) => {
  const getSuggestionIcon = (type: OptimizationSuggestion['type']) => {
    switch (type) {
      case 'cost':
        return <DollarSign className="h-4 w-4 text-green-500" />;
      case 'performance':
        return <TrendingUp className="h-4 w-4 text-blue-500" />;
      case 'reliability':
        return <CheckCircle className="h-4 w-4 text-purple-500" />;
    }
  };

  const getImpactColor = (impact: OptimizationSuggestion['impact']) => {
    switch (impact) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-blue-100 text-blue-800';
    }
  };

  const getComplexityColor = (complexity: OptimizationSuggestion['complexity']) => {
    switch (complexity) {
      case 'easy':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'hard':
        return 'bg-red-100 text-red-800';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-yellow-500" />
          Suggestions d'optimisation
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {suggestions.map(suggestion => (
            <div key={suggestion.id} className="border rounded-lg p-4">
              <div className="flex items-start gap-3">
                {getSuggestionIcon(suggestion.type)}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-medium">{suggestion.title}</h4>
                    <Badge 
                      className={`text-xs ${getImpactColor(suggestion.impact)}`}
                      variant="secondary"
                    >
                      Impact {suggestion.impact}
                    </Badge>
                    <Badge 
                      className={`text-xs ${getComplexityColor(suggestion.complexity)}`}
                      variant="secondary"
                    >
                      {suggestion.complexity}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {suggestion.description}
                  </p>
                  <p className="text-sm font-medium text-green-600">
                    {suggestion.estimatedSaving}
                  </p>
                </div>
                <Button 
                  size="sm" 
                  variant="outline"
                  onClick={() => onApplySuggestion(suggestion.id)}
                >
                  Appliquer
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default OptimizationSuggestions;
