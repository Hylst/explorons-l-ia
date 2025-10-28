
import React from 'react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

interface NodeCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  nodes: any[];
}

interface NodeFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  nodeCategories: NodeCategory[];
  totalNodes: number;
}

const NodeFilters: React.FC<NodeFiltersProps> = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  nodeCategories,
  totalNodes
}) => {
  return (
    <div className="space-y-3 p-3 bg-background">
      <Input
        placeholder="Rechercher un nœud..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full"
      />
      
      <div className="flex flex-wrap gap-1">
        <Badge
          variant={selectedCategory === 'all' ? 'default' : 'secondary'}
          className="cursor-pointer text-xs"
          onClick={() => setSelectedCategory('all')}
        >
          Tous
        </Badge>
        {nodeCategories.map(category => (
          <Badge
            key={category.id}
            variant={selectedCategory === category.id ? 'default' : 'secondary'}
            className="cursor-pointer text-xs"
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </Badge>
        ))}
      </div>

      <div className="text-xs text-muted-foreground p-2 bg-secondary/20 rounded">
        {totalNodes} nœuds disponibles • {nodeCategories.length} catégories
      </div>
    </div>
  );
};

export default NodeFilters;
