
import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Folder, ChevronDown, ChevronRight } from 'lucide-react';
import { PromptTemplate } from './promptTemplatesData';
import { 
  promptTemplates, 
  promptCategories
} from './promptTemplatesData';
import { 
  enhancedPromptTemplates, 
  enhancedPromptCategories 
} from './enhancedPromptTemplates';
import { 
  allSpecializedTemplates, 
  allSpecializedCategories 
} from './templates';
import TemplateFilters from './TemplateFilters';
import TemplateCard from './TemplateCard';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface TemplateSelectorProps {
  onTemplateSelect: (template: PromptTemplate) => void;
  selectedTemplate?: PromptTemplate;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ 
  onTemplateSelect, 
  selectedTemplate 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'quality' | 'usage' | 'name'>('quality');
  const [viewMode, setViewMode] = useState<'list' | 'categories'>('categories');
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());

  // Combiner tous les templates et catégories avec validation de type
  const allTemplates = useMemo(() => {
    const validateTemplate = (template: any): template is PromptTemplate => {
      return template && 
             typeof template.id === 'string' &&
             typeof template.name === 'string' &&
             typeof template.category === 'string' &&
             typeof template.domain === 'string' &&
             typeof template.description === 'string' &&
             typeof template.template === 'string' &&
             Array.isArray(template.variables) &&
             Array.isArray(template.tags) &&
             typeof template.quality === 'number' &&
             typeof template.usageCount === 'number';
    };

    const combinedTemplates = [
      ...promptTemplates, 
      ...enhancedPromptTemplates,
      ...allSpecializedTemplates
    ];

    return combinedTemplates.filter(validateTemplate);
  }, []);

  const allCategories = useMemo(() => {
    return [
      ...promptCategories, 
      ...enhancedPromptCategories,
      ...allSpecializedCategories
    ];
  }, []);

  const filteredTemplates = useMemo(() => {
    let templates = searchQuery 
      ? allTemplates.filter(template => 
          template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          template.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        )
      : selectedCategory === 'all' 
        ? allTemplates 
        : allTemplates.filter(template => template.category === selectedCategory);

    templates.sort((a, b) => {
      switch (sortBy) {
        case 'quality':
          return b.quality - a.quality;
        case 'usage':
          return b.usageCount - a.usageCount;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return templates;
  }, [allTemplates, searchQuery, selectedCategory, sortBy]);

  const templatesByCategory = useMemo(() => {
    const grouped = new Map<string, PromptTemplate[]>();
    
    filteredTemplates.forEach(template => {
      if (!grouped.has(template.category)) {
        grouped.set(template.category, []);
      }
      grouped.get(template.category)!.push(template);
    });

    return grouped;
  }, [filteredTemplates]);

  const getCategoryCount = (categoryId: string) => {
    return allTemplates.filter(template => template.category === categoryId).length;
  };

  const getCategoryInfo = (categoryId: string) => {
    return allCategories.find(cat => cat.id === categoryId);
  };

  const isAdvancedTemplate = (template: PromptTemplate) => {
    return [...enhancedPromptTemplates, ...allSpecializedTemplates].some(t => t.id === template.id);
  };

  const toggleCategoryExpansion = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  return (
    <div className="space-y-4">
      {/* En-tête avec statistiques */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Bibliothèque de Templates IA ({allTemplates.length})
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            {allCategories.length} catégories • {allTemplates.length} templates professionnels pour LLM, génération d'images, audio, vidéo et systèmes RAG
          </p>
        </CardHeader>
        <CardContent>
          <TemplateFilters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            sortBy={sortBy}
            onSortChange={(sort) => setSortBy(sort as 'quality' | 'usage' | 'name')}
            categories={allCategories}
            getCategoryCount={getCategoryCount}
            totalTemplates={allTemplates.length}
          />
          
          {/* Toggle view mode */}
          <div className="flex gap-2 mt-4">
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-1 text-sm rounded ${
                viewMode === 'list' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              Vue Liste
            </button>
            <button
              onClick={() => setViewMode('categories')}
              className={`px-3 py-1 text-sm rounded ${
                viewMode === 'categories' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              Vue Catégories
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Affichage des templates */}
      {filteredTemplates.length === 0 ? (
        <Card>
          <CardContent className="text-center py-8">
            <p className="text-muted-foreground">Aucun template trouvé pour votre recherche.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {viewMode === 'list' ? (
            // Vue Liste classique
            <div className="grid gap-4">
              {filteredTemplates.map(template => (
                <TemplateCard
                  key={template.id}
                  template={template}
                  isSelected={selectedTemplate?.id === template.id}
                  onSelect={onTemplateSelect}
                  isAdvanced={isAdvancedTemplate(template)}
                />
              ))}
            </div>
          ) : (
            // Vue par catégories
            <div className="space-y-4">
              {Array.from(templatesByCategory.entries()).map(([categoryId, templates]) => {
                const categoryInfo = getCategoryInfo(categoryId);
                const isExpanded = expandedCategories.has(categoryId);
                
                return (
                  <Card key={categoryId} className="overflow-hidden">
                    <Collapsible
                      open={isExpanded}
                      onOpenChange={() => toggleCategoryExpansion(categoryId)}
                    >
                      <CollapsibleTrigger className="w-full">
                        <CardHeader className="hover:bg-muted/50 transition-colors">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Folder className="h-5 w-5 text-primary" />
                              <div className="text-left">
                                <CardTitle className="text-lg">
                                  {categoryInfo?.name || categoryId}
                                </CardTitle>
                                <p className="text-sm text-muted-foreground">
                                  {categoryInfo?.description || 'Templates spécialisés'} • {templates.length} template{templates.length > 1 ? 's' : ''}
                                </p>
                              </div>
                            </div>
                            {isExpanded ? (
                              <ChevronDown className="h-5 w-5 text-muted-foreground" />
                            ) : (
                              <ChevronRight className="h-5 w-5 text-muted-foreground" />
                            )}
                          </div>
                        </CardHeader>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent className="pt-0">
                          <div className="grid gap-3">
                            {templates.map(template => (
                              <TemplateCard
                                key={template.id}
                                template={template}
                                isSelected={selectedTemplate?.id === template.id}
                                onSelect={onTemplateSelect}
                                isAdvanced={isAdvancedTemplate(template)}
                              />
                            ))}
                          </div>
                        </CardContent>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Statistiques de recherche */}
      {filteredTemplates.length > 0 && (
        <div className="text-center text-sm text-muted-foreground">
          {filteredTemplates.length} template{filteredTemplates.length > 1 ? 's' : ''} trouvé{filteredTemplates.length > 1 ? 's' : ''}
          {searchQuery && ` pour "${searchQuery}"`}
          {selectedCategory !== 'all' && ` dans la catégorie sélectionnée`}
          {viewMode === 'categories' && ` • Organisés en ${templatesByCategory.size} catégorie${templatesByCategory.size > 1 ? 's' : ''}`}
        </div>
      )}
    </div>
  );
};

export default TemplateSelector;
