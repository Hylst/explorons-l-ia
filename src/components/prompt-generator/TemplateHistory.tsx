
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { History, TestTube, RotateCcw, Play } from 'lucide-react';
import { PromptTemplate } from './promptTemplatesData';

interface GeneratedPrompt {
  id: string;
  content: string;
  template: PromptTemplate;
  timestamp: Date;
  testResults?: any[];
}

interface TemplateHistoryProps {
  generatedPrompts: GeneratedPrompt[];
  onTemplateReuse: (template: PromptTemplate) => void;
  onPromptTest: (prompt: string) => void;
}

const TemplateHistory: React.FC<TemplateHistoryProps> = ({
  generatedPrompts,
  onTemplateReuse,
  onPromptTest
}) => {
  if (generatedPrompts.length === 0) {
    return (
      <div className="text-center py-12">
        <History className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
        <h3 className="text-lg font-semibold mb-2">Aucun historique</h3>
        <p className="text-muted-foreground">
          Vos prompts générés apparaîtront ici pour un accès rapide.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History className="h-5 w-5" />
            Historique des prompts générés
            <Badge variant="secondary">{generatedPrompts.length}</Badge>
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Retrouvez et réutilisez vos derniers prompts générés
          </p>
        </CardHeader>
      </Card>
      
      <div className="space-y-4">
        {generatedPrompts.map(prompt => (
          <Card key={prompt.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div>
                    <h4 className="font-medium">{prompt.template.name}</h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{prompt.timestamp.toLocaleString()}</span>
                      <Badge variant="outline" className="text-xs">
                        {prompt.template.domain}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {prompt.testResults && prompt.testResults.length > 0 && (
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <TestTube className="h-4 w-4" />
                      <span>{prompt.testResults.length} test{prompt.testResults.length > 1 ? 's' : ''}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="bg-muted p-3 rounded text-sm mb-3">
                <p className="line-clamp-3">{prompt.content}</p>
              </div>
              
              <div className="flex items-center gap-2">
                <Button 
                  size="sm"
                  variant="outline"
                  onClick={() => onTemplateReuse(prompt.template)}
                  className="text-sm"
                >
                  <RotateCcw className="h-4 w-4 mr-1" />
                  Réutiliser template
                </Button>
                <Button 
                  size="sm"
                  variant="outline"
                  onClick={() => onPromptTest(prompt.content)}
                  className="text-sm"
                >
                  <Play className="h-4 w-4 mr-1" />
                  Tester prompt
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TemplateHistory;
