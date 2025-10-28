
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Lightbulb, TestTube, History, Zap, Save, Sparkles } from 'lucide-react';
import PromptGeneratorHeader from './PromptGeneratorHeader';
import TemplateSelector from './TemplateSelector';
import PromptEngine from './PromptEngine';
import PromptTester from './PromptTester';
import PromptOptimizer from './PromptOptimizer';
import PromptExportManager from './PromptExportManager';
import TemplateHistory from './TemplateHistory';
import { PromptTemplate } from './promptTemplatesData';

interface GeneratedPrompt {
  id: string;
  content: string;
  template: PromptTemplate;
  timestamp: Date;
  testResults?: any[];
}

const PromptGenerator: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<PromptTemplate | undefined>();
  const [currentPrompt, setCurrentPrompt] = useState<string>('');
  const [currentVariables, setCurrentVariables] = useState<Record<string, string>>({});
  const [generatedPrompts, setGeneratedPrompts] = useState<GeneratedPrompt[]>([]);
  const [activeTab, setActiveTab] = useState('templates');

  const handleTemplateSelect = (template: PromptTemplate) => {
    setSelectedTemplate(template);
    // Auto-switch to generator tab when template is selected
    if (activeTab === 'templates') {
      setActiveTab('generator');
    }
  };

  const handlePromptGenerated = (prompt: string, template: PromptTemplate, variables: Record<string, string>) => {
    setCurrentPrompt(prompt);
    setCurrentVariables(variables);
    
    const newGenerated: GeneratedPrompt = {
      id: Date.now().toString(),
      content: prompt,
      template,
      timestamp: new Date()
    };
    
    setGeneratedPrompts(prev => [newGenerated, ...prev.slice(0, 19)]); // Keep last 20
  };

  const handleTestComplete = (result: any) => {
    setGeneratedPrompts(prev => 
      prev.map(prompt => 
        prompt.content === currentPrompt 
          ? { ...prompt, testResults: [...(prompt.testResults || []), result] }
          : prompt
      )
    );
  };

  const handleTemplateReuse = (template: PromptTemplate) => {
    setSelectedTemplate(template);
    setActiveTab('generator');
  };

  const handlePromptTest = (prompt: string) => {
    setCurrentPrompt(prompt);
    setActiveTab('tester');
  };

  return (
    <div className="space-y-6">
      <PromptGeneratorHeader />
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="templates" className="flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            Templates
          </TabsTrigger>
          <TabsTrigger value="generator" className="flex items-center gap-2">
            <Lightbulb className="h-4 w-4" />
            Générateur
          </TabsTrigger>
          <TabsTrigger value="optimizer" className="flex items-center gap-2">
            <Zap className="h-4 w-4" />
            Optimiseur
          </TabsTrigger>
          <TabsTrigger value="tester" className="flex items-center gap-2">
            <TestTube className="h-4 w-4" />
            Testeur
          </TabsTrigger>
          <TabsTrigger value="manager" className="flex items-center gap-2">
            <Save className="h-4 w-4" />
            Export
          </TabsTrigger>
          <TabsTrigger value="history" className="flex items-center gap-2">
            <History className="h-4 w-4" />
            Historique
          </TabsTrigger>
        </TabsList>

        <TabsContent value="templates" className="mt-6">
          <TemplateSelector 
            onTemplateSelect={handleTemplateSelect}
            selectedTemplate={selectedTemplate}
          />
        </TabsContent>

        <TabsContent value="generator" className="mt-6">
          {selectedTemplate ? (
            <PromptEngine 
              template={selectedTemplate}
              onPromptGenerated={handlePromptGenerated}
            />
          ) : (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <Lightbulb className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-3">Sélectionnez un template</h3>
                <p className="text-muted-foreground mb-6">
                  Choisissez parmi plus de {/* dynamic count */} templates professionnels pour LLM, 
                  génération d'images, audio, vidéo et systèmes RAG.
                </p>
                <button 
                  onClick={() => setActiveTab('templates')}
                  className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  <Sparkles className="h-4 w-4 mr-2" />
                  Parcourir les templates
                </button>
              </div>
            </div>
          )}
        </TabsContent>

        <TabsContent value="optimizer" className="mt-6">
          {currentPrompt ? (
            <PromptOptimizer 
              prompt={currentPrompt}
              onOptimizedPrompt={setCurrentPrompt}
            />
          ) : (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <Zap className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-3">Générez un prompt d'abord</h3>
                <p className="text-muted-foreground mb-6">
                  Créez un prompt dans l'onglet "Générateur" pour pouvoir l'analyser et l'optimiser ici.
                </p>
                <button 
                  onClick={() => setActiveTab('generator')}
                  className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  <Lightbulb className="h-4 w-4 mr-2" />
                  Aller au générateur
                </button>
              </div>
            </div>
          )}
        </TabsContent>

        <TabsContent value="tester" className="mt-6">
          {currentPrompt ? (
            <PromptTester 
              prompt={currentPrompt}
              onTestComplete={handleTestComplete}
            />
          ) : (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <TestTube className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-3">Générez un prompt d'abord</h3>
                <p className="text-muted-foreground mb-6">
                  Créez un prompt dans l'onglet "Générateur" pour pouvoir le tester avec différents modèles d'IA.
                </p>
                <button 
                  onClick={() => setActiveTab('generator')}
                  className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  <Lightbulb className="h-4 w-4 mr-2" />
                  Aller au générateur
                </button>
              </div>
            </div>
          )}
        </TabsContent>

        <TabsContent value="manager" className="mt-6">
          <PromptExportManager 
            currentPrompt={currentPrompt}
            currentTemplate={selectedTemplate}
            currentVariables={currentVariables}
          />
        </TabsContent>

        <TabsContent value="history" className="mt-6">
          <TemplateHistory
            generatedPrompts={generatedPrompts}
            onTemplateReuse={handleTemplateReuse}
            onPromptTest={handlePromptTest}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PromptGenerator;
