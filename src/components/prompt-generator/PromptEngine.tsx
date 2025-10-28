
import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Wand2, Copy, RefreshCw, Star } from 'lucide-react';
import { toast } from 'sonner';
import { PromptTemplate, PromptVariable } from './promptTemplatesData';

interface PromptEngineProps {
  template: PromptTemplate;
  onPromptGenerated: (prompt: string, template: PromptTemplate, variables: Record<string, string>) => void;
}

const PromptEngine: React.FC<PromptEngineProps> = ({ template, onPromptGenerated }) => {
  const [variables, setVariables] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    template.variables.forEach(variable => {
      initial[variable.name] = variable.defaultValue || '';
    });
    return initial;
  });
  
  const [generatedPrompt, setGeneratedPrompt] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);

  const updateVariable = (name: string, value: string) => {
    setVariables(prev => ({ ...prev, [name]: value }));
  };

  const generatePrompt = () => {
    setIsGenerating(true);
    
    // Vérifier que les variables requises sont remplies
    const missingRequired = template.variables
      .filter(variable => variable.required && !variables[variable.name]?.trim())
      .map(variable => variable.label);

    if (missingRequired.length > 0) {
      toast.error(`Veuillez remplir les champs requis : ${missingRequired.join(', ')}`);
      setIsGenerating(false);
      return;
    }

    // Générer le prompt en remplaçant les variables
    let prompt = template.template;
    template.variables.forEach(variable => {
      const value = variables[variable.name] || '';
      prompt = prompt.replace(new RegExp(`{${variable.name}}`, 'g'), value);
    });

    // Nettoyer les variables non remplacées
    prompt = prompt.replace(/{[^}]+}/g, '[non spécifié]');

    setTimeout(() => {
      setGeneratedPrompt(prompt);
      setIsGenerating(false);
      onPromptGenerated(prompt, template, variables);
      toast.success('Prompt généré avec succès !');
    }, 500);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPrompt);
    toast.success('Prompt copié dans le presse-papiers');
  };

  const resetVariables = () => {
    const initial: Record<string, string> = {};
    template.variables.forEach(variable => {
      initial[variable.name] = variable.defaultValue || '';
    });
    setVariables(initial);
    setGeneratedPrompt('');
  };

  const renderVariableInput = (variable: PromptVariable) => {
    const commonProps = {
      value: variables[variable.name] || '',
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => 
        updateVariable(variable.name, e.target.value)
    };

    switch (variable.type) {
      case 'textarea':
        return (
          <Textarea
            {...commonProps}
            placeholder={variable.placeholder}
            className="min-h-[100px]"
          />
        );
      
      case 'select':
        return (
          <Select 
            value={variables[variable.name] || ''} 
            onValueChange={(value) => updateVariable(variable.name, value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Sélectionner..." />
            </SelectTrigger>
            <SelectContent>
              {variable.options?.map(option => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      
      case 'number':
        return (
          <Input
            {...commonProps}
            type="number"
            placeholder={variable.placeholder}
          />
        );
      
      default:
        return (
          <Input
            {...commonProps}
            placeholder={variable.placeholder}
          />
        );
    }
  };

  const qualityStars = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => i < Math.floor(template.quality));
  }, [template.quality]);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <CardTitle className="flex items-center gap-2">
                <Wand2 className="h-5 w-5" />
                {template.name}
              </CardTitle>
              <p className="text-sm text-muted-foreground">{template.description}</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {qualityStars.map((filled, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${filled ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="text-sm text-muted-foreground ml-1">
                    ({template.quality.toFixed(1)})
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {template.usageCount.toLocaleString()} utilisations
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              {template.tags.map(tag => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            {template.variables.map(variable => (
              <div key={variable.name} className="space-y-2">
                <Label htmlFor={variable.name}>
                  {variable.label}
                  {variable.required && <span className="text-red-500 ml-1">*</span>}
                </Label>
                {renderVariableInput(variable)}
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <Button onClick={generatePrompt} disabled={isGenerating} className="flex-1">
              {isGenerating ? (
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <Wand2 className="h-4 w-4 mr-2" />
              )}
              {isGenerating ? 'Génération...' : 'Générer le prompt'}
            </Button>
            <Button variant="outline" onClick={resetVariables}>
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {generatedPrompt && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Prompt généré</CardTitle>
              <Button variant="outline" size="sm" onClick={copyToClipboard}>
                <Copy className="h-4 w-4 mr-2" />
                Copier
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-muted p-4 rounded-lg">
              <pre className="whitespace-pre-wrap text-sm">{generatedPrompt}</pre>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default PromptEngine;
