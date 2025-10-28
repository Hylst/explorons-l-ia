import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Save, Send, Copy, Download, Eye, EyeOff, ExternalLink, BookOpen, Trash2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { useToast } from "@/hooks/use-toast";
import LLMProviderSelector from './LLMProviderSelector';

interface LLMProvider {
  id: string;
  name: string;
  apiUrl: string;
  models: string[];
  headers: (apiKey: string) => Record<string, string>;
  buildPayload: (prompt: string, model: string) => any;
  parseResponse: (response: any) => string;
}

const llmProviders: LLMProvider[] = [
  {
    id: 'openai',
    name: 'OpenAI',
    apiUrl: 'https://api.openai.com/v1/chat/completions',
    models: ['gpt-4o', 'gpt-4o-mini', 'gpt-3.5-turbo', 'o1-preview', 'o1-mini'],
    headers: (apiKey: string) => ({
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }),
    buildPayload: (prompt: string, model: string) => ({
      model,
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7
    }),
    parseResponse: (response: any) => response.choices?.[0]?.message?.content || 'Pas de réponse'
  },
  {
    id: 'anthropic',
    name: 'Anthropic',
    apiUrl: 'https://api.anthropic.com/v1/messages',
    models: ['claude-3-5-sonnet-20241022', 'claude-3-5-haiku-20241022', 'claude-3-opus-20240229'],
    headers: (apiKey: string) => ({
      'x-api-key': apiKey,
      'Content-Type': 'application/json',
      'anthropic-version': '2023-06-01'
    }),
    buildPayload: (prompt: string, model: string) => ({
      model,
      max_tokens: 1024,
      messages: [{ role: 'user', content: prompt }]
    }),
    parseResponse: (response: any) => response.content?.[0]?.text || 'Pas de réponse'
  },
  {
    id: 'google',
    name: 'Google Gemini',
    apiUrl: 'https://generativelanguage.googleapis.com/v1beta/models',
    models: ['gemini-2.0-flash-exp', 'gemini-1.5-pro', 'gemini-1.5-flash'],
    headers: (apiKey: string) => ({
      'Content-Type': 'application/json'
    }),
    buildPayload: (prompt: string, model: string) => ({
      contents: [{ parts: [{ text: prompt }] }]
    }),
    parseResponse: (response: any) => response.candidates?.[0]?.content?.parts?.[0]?.text || 'Pas de réponse'
  },
  {
    id: 'deepseek',
    name: 'DeepSeek',
    apiUrl: 'https://api.deepseek.com/chat/completions',
    models: ['deepseek-chat', 'deepseek-reasoner'],
    headers: (apiKey: string) => ({
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }),
    buildPayload: (prompt: string, model: string) => ({
      model,
      messages: [{ role: 'user', content: prompt }]
    }),
    parseResponse: (response: any) => response.choices?.[0]?.message?.content || 'Pas de réponse'
  },
  {
    id: 'openrouter',
    name: 'OpenRouter',
    apiUrl: 'https://openrouter.ai/api/v1/chat/completions',
    models: [
      'anthropic/claude-3.5-sonnet',
      'openai/gpt-4o-mini',
      'meta-llama/llama-3.2-90b-vision',
      'google/gemini-flash-1.5',
      'mistralai/mistral-large'
    ],
    headers: (apiKey: string) => ({
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'https://testapiai.com',
      'X-Title': 'Test API IA'
    }),
    buildPayload: (prompt: string, model: string) => ({
      model,
      messages: [{ role: 'user', content: prompt }]
    }),
    parseResponse: (response: any) => response.choices?.[0]?.message?.content || 'Pas de réponse'
  },
  {
    id: 'xai',
    name: 'X.AI / Grok',
    apiUrl: 'https://api.x.ai/v1/chat/completions',
    models: ['grok-beta', 'grok-vision-beta'],
    headers: (apiKey: string) => ({
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }),
    buildPayload: (prompt: string, model: string) => ({
      model,
      messages: [{ role: 'user', content: prompt }]
    }),
    parseResponse: (response: any) => response.choices?.[0]?.message?.content || 'Pas de réponse'
  },
  {
    id: 'mistral',
    name: 'Mistral AI',
    apiUrl: 'https://api.mistral.ai/v1/chat/completions',
    models: ['mistral-large-latest', 'mistral-medium-latest', 'mistral-small-latest'],
    headers: (apiKey: string) => ({
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }),
    buildPayload: (prompt: string, model: string) => ({
      model,
      messages: [{ role: 'user', content: prompt }]
    }),
    parseResponse: (response: any) => response.choices?.[0]?.message?.content || 'Pas de réponse'
  },
  {
    id: 'cerebras',
    name: 'Cerebras',
    apiUrl: 'https://api.cerebras.ai/v1/chat/completions',
    models: ['llama3.1-8b', 'llama3.1-70b'],
    headers: (apiKey: string) => ({
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }),
    buildPayload: (prompt: string, model: string) => ({
      model,
      messages: [{ role: 'user', content: prompt }]
    }),
    parseResponse: (response: any) => response.choices?.[0]?.message?.content || 'Pas de réponse'
  },
  {
    id: 'sambanova',
    name: 'SambaNova',
    apiUrl: 'https://api.sambanova.ai/v1/chat/completions',
    models: ['Meta-Llama-3.1-8B-Instruct', 'Meta-Llama-3.1-70B-Instruct'],
    headers: (apiKey: string) => ({
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }),
    buildPayload: (prompt: string, model: string) => ({
      model,
      messages: [{ role: 'user', content: prompt }]
    }),
    parseResponse: (response: any) => response.choices?.[0]?.message?.content || 'Pas de réponse'
  },
  {
    id: 'together',
    name: 'Together AI',
    apiUrl: 'https://api.together.xyz/v1/chat/completions',
    models: ['meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo', 'meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo'],
    headers: (apiKey: string) => ({
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }),
    buildPayload: (prompt: string, model: string) => ({
      model,
      messages: [{ role: 'user', content: prompt }]
    }),
    parseResponse: (response: any) => response.choices?.[0]?.message?.content || 'Pas de réponse'
  },
  {
    id: 'fireworks',
    name: 'Fireworks AI',
    apiUrl: 'https://api.fireworks.ai/inference/v1/chat/completions',
    models: ['accounts/fireworks/models/llama-v3p1-8b-instruct', 'accounts/fireworks/models/llama-v3p1-70b-instruct'],
    headers: (apiKey: string) => ({
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }),
    buildPayload: (prompt: string, model: string) => ({
      model,
      messages: [{ role: 'user', content: prompt }]
    }),
    parseResponse: (response: any) => response.choices?.[0]?.message?.content || 'Pas de réponse'
  },
  {
    id: 'replicate',
    name: 'Replicate',
    apiUrl: 'https://api.replicate.com/v1/predictions',
    models: ['meta/meta-llama-3-8b-instruct', 'meta/meta-llama-3-70b-instruct'],
    headers: (apiKey: string) => ({
      'Authorization': `Token ${apiKey}`,
      'Content-Type': 'application/json'
    }),
    buildPayload: (prompt: string, model: string) => ({
      version: 'latest',
      input: {
        prompt: prompt,
        max_new_tokens: 1024
      }
    }),
    parseResponse: (response: any) => {
      if (response.output) {
        return Array.isArray(response.output) ? response.output.join('') : response.output;
      }
      return 'Pas de réponse';
    }
  },
  {
    id: 'cohere',
    name: 'Cohere',
    apiUrl: 'https://api.cohere.ai/v1/generate',
    models: ['command', 'command-light', 'command-nightly'],
    headers: (apiKey: string) => ({
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }),
    buildPayload: (prompt: string, model: string) => ({
      model,
      prompt,
      max_tokens: 1024
    }),
    parseResponse: (response: any) => response.generations?.[0]?.text || 'Pas de réponse'
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    apiUrl: 'https://api.perplexity.ai/chat/completions',
    models: ['llama-3.1-sonar-small-128k-online', 'llama-3.1-sonar-large-128k-online'],
    headers: (apiKey: string) => ({
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }),
    buildPayload: (prompt: string, model: string) => ({
      model,
      messages: [{ role: 'user', content: prompt }]
    }),
    parseResponse: (response: any) => response.choices?.[0]?.message?.content || 'Pas de réponse'
  },
  {
    id: 'groq',
    name: 'Groq',
    apiUrl: 'https://api.groq.com/openai/v1/chat/completions',
    models: ['llama3-8b-8192', 'llama3-70b-8192', 'mixtral-8x7b-32768'],
    headers: (apiKey: string) => ({
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }),
    buildPayload: (prompt: string, model: string) => ({
      model,
      messages: [{ role: 'user', content: prompt }]
    }),
    parseResponse: (response: any) => response.choices?.[0]?.message?.content || 'Pas de réponse'
  }
];

const APIKeysLinks = () => {
  const apiKeyLinks = [
    { 
      name: 'OpenAI', 
      keyUrl: 'https://platform.openai.com/api-keys',
      docsUrl: 'https://platform.openai.com/docs/api-reference'
    },
    { 
      name: 'Anthropic', 
      keyUrl: 'https://console.anthropic.com/keys',
      docsUrl: 'https://docs.anthropic.com/claude/reference/getting-started'
    },
    { 
      name: 'Google Gemini', 
      keyUrl: 'https://aistudio.google.com/app/apikey',
      docsUrl: 'https://ai.google.dev/gemini-api/docs'
    },
    { 
      name: 'DeepSeek', 
      keyUrl: 'https://platform.deepseek.com/api_keys',
      docsUrl: 'https://platform.deepseek.com/api-docs'
    },
    { 
      name: 'OpenRouter', 
      keyUrl: 'https://openrouter.ai/keys',
      docsUrl: 'https://openrouter.ai/docs'
    },
    { 
      name: 'X.AI / Grok', 
      keyUrl: 'https://console.x.ai/',
      docsUrl: 'https://docs.x.ai/api'
    },
    { 
      name: 'Mistral AI', 
      keyUrl: 'https://console.mistral.ai/api-keys/',
      docsUrl: 'https://docs.mistral.ai/'
    },
    { 
      name: 'Cerebras', 
      keyUrl: 'https://cloud.cerebras.ai/platform',
      docsUrl: 'https://docs.cerebras.ai/'
    },
    { 
      name: 'SambaNova', 
      keyUrl: 'https://cloud.sambanova.ai/',
      docsUrl: 'https://docs.sambanova.ai/'
    },
    { 
      name: 'Together AI', 
      keyUrl: 'https://api.together.xyz/settings/api-keys',
      docsUrl: 'https://docs.together.ai/'
    },
    { 
      name: 'Fireworks AI', 
      keyUrl: 'https://fireworks.ai/api-keys',
      docsUrl: 'https://docs.fireworks.ai/'
    },
    { 
      name: 'Replicate', 
      keyUrl: 'https://replicate.com/account/api-tokens',
      docsUrl: 'https://replicate.com/docs'
    },
    { 
      name: 'Cohere', 
      keyUrl: 'https://dashboard.cohere.com/api-keys',
      docsUrl: 'https://docs.cohere.com/docs'
    },
    { 
      name: 'Perplexity', 
      keyUrl: 'https://www.perplexity.ai/settings/api',
      docsUrl: 'https://docs.perplexity.ai/'
    },
    { 
      name: 'Groq', 
      keyUrl: 'https://console.groq.com/keys',
      docsUrl: 'https://console.groq.com/docs'
    }
  ];

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <ExternalLink className="h-5 w-5" />
          Ressources pour les API LLM
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Clés API et Documentation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {apiKeyLinks.map((link) => (
                <div key={link.name} className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 justify-start gap-2"
                    onClick={() => window.open(link.keyUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4" />
                    {link.name}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => window.open(link.docsUrl, '_blank')}
                    title="Documentation"
                  >
                    <BookOpen className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
          
          <div className="pt-4 border-t">
            <h4 className="font-semibold mb-2">💡 Conseils pratiques</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• <strong>OpenRouter :</strong> Agrégateur avec accès à de nombreux modèles, y compris des versions gratuites</li>
              <li>• <strong>Cerebras & SambaNova :</strong> Inference ultra-rapide avec modèles Llama optimisés</li>
              <li>• <strong>Together AI & Fireworks :</strong> Alternative économique avec bonne performance</li>
              <li>• <strong>Groq :</strong> Spécialisé dans l'inference rapide avec hardware dédié</li>
              <li>• Consultez les limites de taux et tarifs de chaque fournisseur</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const LLMTester = () => {
  const { toast } = useToast();
  const [selectedProvider, setSelectedProvider] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [apiKey, setApiKey] = useState<string>('');
  const [showApiKey, setShowApiKey] = useState<boolean>(false);
  const [prompt, setPrompt] = useState<string>('');
  const [response, setResponse] = useState<string>('');
  const [logs, setLogs] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const savedProvider = localStorage.getItem('llm-provider');
    const savedModel = localStorage.getItem('llm-model');
    const savedApiKey = localStorage.getItem('llm-api-key');
    const savedPrompt = localStorage.getItem('llm-prompt');

    if (savedProvider) setSelectedProvider(savedProvider);
    if (savedModel) setSelectedModel(savedModel);
    if (savedApiKey) setApiKey(savedApiKey);
    if (savedPrompt) setPrompt(savedPrompt);
  }, []);

  useEffect(() => {
    if (selectedProvider) {
      const provider = llmProviders.find(p => p.id === selectedProvider);
      if (provider?.models && provider.models.length > 0 && !selectedModel) {
        setSelectedModel(provider.models[0]);
      }
    }
  }, [selectedProvider, selectedModel]);

  const saveApiKey = () => {
    localStorage.setItem('llm-provider', selectedProvider);
    localStorage.setItem('llm-model', selectedModel);
    localStorage.setItem('llm-api-key', apiKey);
    localStorage.setItem('llm-prompt', prompt);
    addLog('✅ Configuration sauvegardée dans le localStorage');
    toast({
      title: "Configuration sauvegardée",
      description: "Vos paramètres ont été enregistrés dans le stockage local.",
    });
  };

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => `${prev}[${timestamp}] ${message}\n`);
  };

  const clearLogs = () => {
    setLogs('');
    toast({
      title: "Logs effacés",
      description: "Les logs de communication ont été effacés.",
    });
  };

  const testAPI = async () => {
    if (!selectedProvider || !selectedModel || !apiKey || !prompt) {
      addLog('❌ Veuillez remplir tous les champs obligatoires');
      toast({
        title: "Champs manquants",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setResponse('');
    addLog(`🚀 Début du test avec ${selectedProvider} - ${selectedModel}`);
    toast({
      title: "Test en cours",
      description: `Envoi de la requête vers ${selectedProvider}...`,
    });

    try {
      const provider = llmProviders.find(p => p.id === selectedProvider);
      if (!provider) throw new Error('Fournisseur non trouvé');

      let apiUrl = provider.apiUrl;
      
      // Configuration spéciale pour Google Gemini
      if (provider.id === 'google') {
        apiUrl = `${provider.apiUrl}/${selectedModel}:generateContent?key=${apiKey}`;
      }

      const payload = provider.buildPayload(prompt, selectedModel);
      
      addLog(`📡 Envoi de la requête vers ${apiUrl}`);
      addLog(`📝 Payload: ${JSON.stringify(payload, null, 2)}`);

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: provider.headers(apiKey),
        body: JSON.stringify(payload)
      });

      addLog(`📨 Statut de la réponse: ${response.status} ${response.statusText}`);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Erreur API: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      addLog(`📦 Réponse brute: ${JSON.stringify(data, null, 2)}`);

      const parsedResponse = provider.parseResponse(data);
      setResponse(parsedResponse);
      addLog('✅ Test terminé avec succès');
      toast({
        title: "Test réussi",
        description: "La réponse de l'API a été reçue avec succès.",
      });

    } catch (error: any) {
      addLog(`❌ Erreur: ${error.message}`);
      setResponse(`Erreur: ${error.message}`);
      toast({
        title: "Erreur API",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyResponse = () => {
    navigator.clipboard.writeText(response);
    addLog('📋 Réponse copiée dans le presse-papiers');
    toast({
      title: "Copié",
      description: "La réponse a été copiée dans le presse-papiers.",
    });
  };

  const downloadResponse = () => {
    const element = document.createElement('a');
    const file = new Blob([response], { type: 'text/markdown' });
    element.href = URL.createObjectURL(file);
    element.download = `llm-response-${Date.now()}.md`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    addLog('💾 Réponse téléchargée en format .md');
    toast({
      title: "Téléchargement réussi",
      description: "Le fichier a été téléchargé avec succès.",
    });
  };

  const provider = llmProviders.find(p => p.id === selectedProvider);

  return (
    <div className="space-y-6">
      <LLMProviderSelector
        selectedProvider={selectedProvider}
        onProviderSelect={setSelectedProvider}
      />

      {selectedProvider && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Configuration du modèle
              <Badge variant="secondary">{provider?.name}</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Modèle</label>
              <Select 
                value={selectedModel} 
                onValueChange={setSelectedModel}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choisir un modèle" />
                </SelectTrigger>
                <SelectContent>
                  {provider?.models?.map(model => (
                    <SelectItem key={model} value={model}>
                      {model}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Clé API</label>
              <div className="flex gap-2">
                <Input
                  type={showApiKey ? 'text' : 'password'}
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="Entrez votre clé API"
                  className="flex-1"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setShowApiKey(!showApiKey)}
                >
                  {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
                <Button onClick={saveApiKey} className="gap-2">
                  <Save className="h-4 w-4" />
                  Sauvegarder
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Test du modèle</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Prompt</label>
            <Textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Entrez votre question ou prompt..."
              rows={4}
            />
          </div>

          <Button 
            onClick={testAPI} 
            disabled={isLoading || !selectedProvider || !apiKey || !prompt}
            className="w-full gap-2"
          >
            <Send className="h-4 w-4" />
            {isLoading ? 'Test en cours...' : 'Tester l\'API'}
          </Button>
        </CardContent>
      </Card>

      {response && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Réponse
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={copyResponse}>
                  <Copy className="h-4 w-4 mr-2" />
                  Copier
                </Button>
                <Button variant="outline" size="sm" onClick={downloadResponse}>
                  <Download className="h-4 w-4 mr-2" />
                  Télécharger .md
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-muted/30 dark:bg-muted/20 p-4 rounded-lg max-h-96 overflow-y-auto">
              <ReactMarkdown className="prose prose-sm dark:prose-invert max-w-none">
                {response}
              </ReactMarkdown>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Logs de communication
            <Button 
              variant="outline" 
              size="sm" 
              onClick={clearLogs}
              className="gap-2"
            >
              <Trash2 className="h-4 w-4" />
              Effacer les logs
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            value={logs}
            readOnly
            rows={10}
            className="font-mono text-xs bg-muted/30 dark:bg-muted/20"
            placeholder="Les logs d'API apparaîtront ici..."
          />
        </CardContent>
      </Card>

      <APIKeysLinks />
    </div>
  );
};

export default LLMTester;
