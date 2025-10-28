
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, Globe, ExternalLink, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import NodeFilters from './nodes/NodeFilters';
import NodeCategorySection from './nodes/NodeCategory';
import { workflowNodes, nodeCategories } from './data/workflowNodesData';

const WorkflowNodeLibrary: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCategories = nodeCategories.filter(category => {
    if (selectedCategory !== 'all' && category.id !== selectedCategory) return false;
    
    return category.nodes.some(node => 
      node.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      node.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const filteredNodes = (nodes: any[]) => {
    return nodes.filter(node => 
      node.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      node.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const handleNodeDragStart = (node: any) => (e: React.DragEvent) => {
    e.dataTransfer.setData('application/reactflow', JSON.stringify({
      type: 'custom',
      data: { 
        label: node.name,
        description: node.description,
        category: node.category,
        cost: node.cost
      }
    }));
  };

  return (
    <div className="h-full min-h-0 flex flex-col overflow-hidden">
      {/* Lien retour vers les ressources */}
      <div className="mb-4 p-3 bg-primary/5 rounded-lg border border-primary/20 flex-shrink-0">
        <div className="flex items-center gap-2 text-sm">
          <Globe className="h-4 w-4 text-primary" />
          <span className="text-muted-foreground">Découvrez plus d'outils IA dans</span>
          <Button variant="link" className="p-0 h-auto text-primary font-medium" asChild>
            <Link to="/ressources?tab=outils#resources" className="flex items-center gap-1">
              la section Ressources
              <ExternalLink className="h-3 w-3" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Filtres et recherche - position fixe */}
      <div className="flex-shrink-0">
        <NodeFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          nodeCategories={nodeCategories}
          totalNodes={workflowNodes.length}
        />
      </div>

      {/* Container avec scroll pour le contenu des nœuds */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-3 space-y-6">
          {filteredCategories.map(category => {
            const categoryNodes = filteredNodes(category.nodes);
            return (
              <NodeCategorySection
                key={category.id}
                category={category}
                filteredNodes={categoryNodes}
                onNodeDragStart={handleNodeDragStart}
              />
            );
          })}

          {filteredCategories.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <Search className="h-8 w-8 mx-auto mb-2" />
              <p>Aucun nœud trouvé pour "{searchTerm}"</p>
            </div>
          )}
        </div>

        {/* Section créateur */}
        <div className="mt-6 p-3 bg-secondary/10 rounded border text-center mx-3 mb-4">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Geoffroy Streit</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Architecte en workflows IA et automatisation
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkflowNodeLibrary;
