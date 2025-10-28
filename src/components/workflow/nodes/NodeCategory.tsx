
import React from 'react';
import { Badge } from '@/components/ui/badge';
import NodeCard from './NodeCard';

interface WorkflowNode {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  complexity: 'débutant' | 'intermédiaire' | 'avancé';
  cost: string;
  inputs: string[];
  outputs: string[];
}

interface NodeCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  nodes: WorkflowNode[];
}

interface NodeCategoryProps {
  category: NodeCategory;
  filteredNodes: WorkflowNode[];
  onNodeDragStart: (node: WorkflowNode) => (e: React.DragEvent) => void;
}

const NodeCategorySection: React.FC<NodeCategoryProps> = ({ 
  category, 
  filteredNodes, 
  onNodeDragStart 
}) => {
  if (filteredNodes.length === 0) return null;

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 font-medium text-sm">
        {category.icon}
        <span>{category.name}</span>
        <Badge variant="outline" className="text-xs">
          {filteredNodes.length}
        </Badge>
      </div>
      
      <div className="space-y-3">
        {filteredNodes.map(node => (
          <NodeCard
            key={node.id}
            node={node}
            onDragStart={onNodeDragStart(node)}
          />
        ))}
      </div>
    </div>
  );
};

export default NodeCategorySection;
