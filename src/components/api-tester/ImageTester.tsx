import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Save, Send, Download, Eye, EyeOff, ZoomIn, ExternalLink, BookOpen, Trash2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import ImageProviderSelector from './ImageProviderSelector';

interface ImageProvider {
  id: string;
  name: string;
  apiUrl: string;
  models?: string[];
  headers: (apiKey: string) => Record<string, string>;
  buildPayload: (prompt: string, model?: string) => any;
  parseResponse: (response: any) => string;
  requiresApiKey?: boolean;
}

const imageProviders: ImageProvider[] = [
  {
    id: 'openai',
    name: 'OpenAI DALL-E',
    apiUrl: 'https://api.openai.com/v1/images/generations',
    models: ['dall-e-3', 'dall-e-2'],
    requiresApiKey: true,
    headers: (apiKey: string) => ({
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }),
    buildPayload: (prompt: string, model: string = 'dall-e-3') => ({
      model,
      prompt,
      n: 1,
      size: '1024x1024'
    }),
    parseResponse: (response: any) => response.data?.[0]?.url || ''
  },
  {
    id: 'stability',
    name: 'Stability AI',
    apiUrl: 'https://api.stability.ai/v2beta/stable-image/generate/ultra',
    requiresApiKey: true,
    headers: (apiKey: string) => ({
      'Authorization': `Bearer ${apiKey}`,
      'Accept': 'image/*'
    }),
    buildPayload: (prompt: string) => {
      const formData = new FormData();
      formData.append('prompt', prompt);
      formData.append('output_format', 'webp');
      return formData;
    },
    parseResponse: (response: any) => {
      return URL.createObjectURL(response);
    }
  },
  {
    id: 'replicate',
    name: 'Replicate',
    apiUrl: 'https://api.replicate.com/v1/predictions',
    models: ['black-forest-labs/flux-1.1-pro', 'black-forest-labs/flux-schnell', 'stability-ai/sdxl'],
    requiresApiKey: true,
    headers: (apiKey: string) => ({
      'Authorization': `Token ${apiKey}`,
      'Content-Type': 'application/json'
    }),
    buildPayload: (prompt: string, model: string = 'black-forest-labs/flux-schnell') => ({
      version: model,
      input: { prompt }
    }),
    parseResponse: (response: any) => response.output?.[0] || ''
  },
  {
    id: 'huggingface',
    name: 'Hugging Face Inference',
    apiUrl: 'https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-schnell',
    models: ['black-forest-labs/FLUX.1-schnell', 'black-forest-labs/FLUX.1-dev', 'stabilityai/stable-diffusion-xl-base-1.0'],
    requiresApiKey: true,
    headers: (apiKey: string) => ({
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }),
    buildPayload: (prompt: string) => ({
      inputs: prompt
    }),
    parseResponse: (response: any) => {
      return URL.createObjectURL(response);
    }
  },
  {
    id: 'fal',
    name: 'Fal.ai',
    apiUrl: 'https://fal.run/fal-ai/flux/schnell',
    models: ['flux-schnell', 'flux-dev', 'flux-pro'],
    requiresApiKey: true,
    headers: (apiKey: string) => ({
      'Authorization': `Key ${apiKey}`,
      'Content-Type': 'application/json'
    }),
    buildPayload: (prompt: string) => ({
      prompt,
      num_images: 1,
      image_size: 'square_hd'
    }),
    parseResponse: (response: any) => response.images?.[0]?.url || ''
  },
  {
    id: 'together',
    name: 'Together AI',
    apiUrl: 'https://api.together.xyz/v1/images/generations',
    models: ['black-forest-labs/FLUX.1-schnell-Free', 'runwayml/stable-diffusion-v1-5'],
    requiresApiKey: true,
    headers: (apiKey: string) => ({
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }),
    buildPayload: (prompt: string, model: string = 'black-forest-labs/FLUX.1-schnell-Free') => ({
      model,
      prompt,
      width: 1024,
      height: 1024,
      steps: 4,
      n: 1
    }),
    parseResponse: (response: any) => response.data?.[0]?.url || ''
  },
  {
    id: 'fireworks',
    name: 'Fireworks AI',
    apiUrl: 'https://api.fireworks.ai/inference/v1/image_generation/accounts/fireworks/models/flux-1-schnell',
    requiresApiKey: true,
    headers: (apiKey: string) => ({
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }),
    buildPayload: (prompt: string) => ({
      prompt,
      width: 1024,
      height: 1024,
      steps: 4
    }),
    parseResponse: (response: any) => response.images?.[0]?.url || ''
  },
  {
    id: 'ideogram',
    name: 'Ideogram',
    apiUrl: 'https://api.ideogram.ai/generate',
    models: ['V_2', 'V_2_TURBO'],
    requiresApiKey: true,
    headers: (apiKey: string) => ({
      'Api-Key': apiKey,
      'Content-Type': 'application/json'
    }),
    buildPayload: (prompt: string, model: string = 'V_2') => ({
      image_request: {
        prompt,
        model,
        magic_prompt_option: 'AUTO'
      }
    }),
    parseResponse: (response: any) => response.data?.[0]?.url || ''
  },
  {
    id: 'pollinations',
    name: 'Pollinations AI (Gratuit)',
    apiUrl: 'https://image.pollinations.ai/prompt',
    requiresApiKey: false,
    headers: () => ({}),
    buildPayload: (prompt: string) => prompt,
    parseResponse: (response: any) => response
  },
  {
    id: 'dezgo',
    name: 'DeZGO (Gratuit)',
    apiUrl: 'https://api.dezgo.com/text2image',
    requiresApiKey: false,
    headers: () => ({
      'Content-Type': 'application/x-www-form-urlencoded'
    }),
    buildPayload: (prompt: string) => {
      const params = new URLSearchParams();
      params.append('prompt', prompt);
      params.append('model', 'flux');
      params.append('width', '1024');
      params.append('height', '1024');
      return params;
    },
    parseResponse: (response: any) => {
      return URL.createObjectURL(response);
    }
  },
  {
    id: 'prodia',
    name: 'Prodia (Gratuit)',
    apiUrl: 'https://api.prodia.com/v1/sd/generate',
    requiresApiKey: false,
    headers: () => ({
      'Content-Type': 'application/json'
    }),
    buildPayload: (prompt: string) => ({
      prompt,
      model: 'sdxl',
      steps: 25,
      cfg_scale: 7,
      width: 1024,
      height: 1024
    }),
    parseResponse: (response: any) => response.imageUrl || ''
  }
];

const ImageAPIKeysLinks = () => {
  const apiKeyLinks = [
    { 
      name: 'OpenAI DALL-E', 
      keyUrl: 'https://platform.openai.com/api-keys',
      docsUrl: 'https://platform.openai.com/docs/guides/images'
    },
    { 
      name: 'Stability AI', 
      keyUrl: 'https://platform.stability.ai/account/keys',
      docsUrl: 'https://platform.stability.ai/docs/api-reference'
    },
    { 
      name: 'Replicate', 
      keyUrl: 'https://replicate.com/account/api-tokens',
      docsUrl: 'https://replicate.com/docs/reference/http'
    },
    { 
      name: 'Hugging Face', 
      keyUrl: 'https://huggingface.co/settings/tokens',
      docsUrl: 'https://huggingface.co/docs/api-inference'
    },
    { 
      name: 'Fal.ai', 
      keyUrl: 'https://fal.ai/dashboard/keys',
      docsUrl: 'https://fal.ai/docs'
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
      name: 'Ideogram', 
      keyUrl: 'https://ideogram.ai/api',
      docsUrl: 'https://docs.ideogram.ai/'
    }
  ];

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <ExternalLink className="h-5 w-5" />
          Ressources pour les API Text-to-Image 2025
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
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Services gratuits 2025</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <Button
                variant="outline"
                size="sm"
                className="justify-start gap-2"
                onClick={() => window.open('https://pollinations.ai/', '_blank')}
              >
                <ExternalLink className="h-4 w-4" />
                Pollinations AI (Illimité)
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="justify-start gap-2"
                onClick={() => window.open('https://dezgo.com/', '_blank')}
              >
                <ExternalLink className="h-4 w-4" />
                DeZGO (Flux gratuit)
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="justify-start gap-2"
                onClick={() => window.open('https://prodia.com/', '_blank')}
              >
                <ExternalLink className="h-4 w-4" />
                Prodia (SDXL gratuit)
              </Button>
            </div>
          </div>
          
          <div className="pt-4 border-t">
            <h4 className="font-semibold mb-2">💡 Nouveautés 2025</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• <strong>FLUX 1.1 Pro :</strong> Nouvelle version améliorée de Black Forest Labs</li>
              <li>• <strong>Fal.ai :</strong> API rapide et économique pour FLUX</li>
              <li>• <strong>Ideogram V2 :</strong> Excellent pour le texte dans les images</li>
              <li>• <strong>Stability AI Ultra :</strong> Nouvelle version haute qualité</li>
              <li>• Les services gratuits comme Pollinations offrent un excellent rapport qualité/prix</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Fonction utilitaire pour créer un slug à partir du prompt
const createSlugFromPrompt = (prompt: string): string => {
  return prompt
    .split(' ')
    .slice(0, 10) // Prendre max 10 mots
    .join(' ')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Supprimer les caractères spéciaux
    .replace(/\s+/g, '-') // Remplacer les espaces par des tirets
    .replace(/-+/g, '-') // Éviter les tirets multiples
    .trim();
};

const ImageTester = () => {
  const { toast } = useToast();
  const [selectedProvider, setSelectedProvider] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [apiKey, setApiKey] = useState<string>('');
  const [showApiKey, setShowApiKey] = useState<boolean>(false);
  const [prompt, setPrompt] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [logs, setLogs] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const savedProvider = localStorage.getItem('image-provider');
    const savedModel = localStorage.getItem('image-model');
    const savedApiKey = localStorage.getItem('image-api-key');
    const savedPrompt = localStorage.getItem('image-prompt');

    if (savedProvider) setSelectedProvider(savedProvider);
    if (savedModel) setSelectedModel(savedModel);
    if (savedApiKey) setApiKey(savedApiKey);
    if (savedPrompt) setPrompt(savedPrompt);
  }, []);

  // Présélection automatique du premier modèle quand un fournisseur est choisi
  useEffect(() => {
    if (selectedProvider) {
      const provider = imageProviders.find(p => p.id === selectedProvider);
      if (provider?.models && provider.models.length > 0 && !selectedModel) {
        setSelectedModel(provider.models[0]);
      }
    }
  }, [selectedProvider, selectedModel]);

  const saveApiKey = () => {
    localStorage.setItem('image-provider', selectedProvider);
    localStorage.setItem('image-model', selectedModel);
    localStorage.setItem('image-api-key', apiKey);
    localStorage.setItem('image-prompt', prompt);
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
    const provider = imageProviders.find(p => p.id === selectedProvider);
    
    if (!selectedProvider || !prompt) {
      addLog('❌ Veuillez remplir tous les champs obligatoires');
      toast({
        title: "Champs manquants",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }

    if (provider?.requiresApiKey && !apiKey) {
      addLog('❌ Clé API requise pour ce fournisseur');
      toast({
        title: "Clé API manquante",
        description: "Ce fournisseur nécessite une clé API.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setImageUrl('');
    addLog(`🚀 Début de la génération avec ${selectedProvider}`);
    toast({
      title: "Génération en cours",
      description: `Génération d'image avec ${selectedProvider}...`,
    });

    try {
      if (!provider) throw new Error('Fournisseur non trouvé');

      // Gestion spéciale pour Pollinations.ai (GET request)
      if (provider.id === 'pollinations') {
        const encodedPrompt = encodeURIComponent(prompt);
        const imageUrl = `${provider.apiUrl}/${encodedPrompt}`;
        
        addLog(`📡 Requête GET vers ${imageUrl}`);
        
        // Test si l'image se charge correctement
        const img = new Image();
        img.onload = () => {
          setImageUrl(imageUrl);
          addLog('✅ Image générée avec succès');
          toast({
            title: "Image générée",
            description: "L'image a été générée avec succès.",
          });
        };
        img.onerror = () => {
          throw new Error('Impossible de charger l\'image générée');
        };
        img.src = imageUrl;
        return;
      }

      const payload = provider.buildPayload(prompt, selectedModel);
      
      addLog(`📡 Envoi de la requête vers ${provider.apiUrl}`);
      addLog(`📝 Payload: ${JSON.stringify(payload, null, 2)}`);

      const response = await fetch(provider.apiUrl, {
        method: 'POST',
        headers: provider.headers(apiKey),
        body: JSON.stringify(payload)
      });

      addLog(`📨 Statut de la réponse: ${response.status} ${response.statusText}`);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Erreur API: ${response.status} - ${errorText}`);
      }

      let data;
      if (selectedProvider === 'huggingface' || selectedProvider === 'stability' || selectedProvider === 'dezgo') {
        data = await response.blob();
        const imageUrl = URL.createObjectURL(data);
        setImageUrl(imageUrl);
        addLog('✅ Image générée avec succès');
      } else {
        data = await response.json();
        addLog(`📦 Réponse brute: ${JSON.stringify(data, null, 2)}`);
        
        const parsedImageUrl = provider.parseResponse(data);
        setImageUrl(parsedImageUrl);
        addLog('✅ Image générée avec succès');
      }

      toast({
        title: "Image générée",
        description: "L'image a été générée avec succès.",
      });

    } catch (error: any) {
      addLog(`❌ Erreur: ${error.message}`);
      toast({
        title: "Erreur de génération",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const downloadImage = async () => {
    if (!imageUrl) return;

    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const element = document.createElement('a');
      element.href = url;
      
      // Créer un nom de fichier basé sur le prompt
      const slugifiedPrompt = createSlugFromPrompt(prompt);
      const timestamp = Date.now();
      element.download = `${slugifiedPrompt || 'generated-image'}-${timestamp}.webp`;
      
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      window.URL.revokeObjectURL(url);
      addLog('💾 Image téléchargée');
      toast({
        title: "Téléchargement",
        description: "L'image a été téléchargée avec succès.",
      });
    } catch (error: any) {
      addLog(`❌ Erreur lors du téléchargement: ${error.message}`);
      toast({
        title: "Erreur de téléchargement",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const provider = imageProviders.find(p => p.id === selectedProvider);

  return (
    <div className="space-y-6">
      <ImageProviderSelector
        selectedProvider={selectedProvider}
        onProviderSelect={setSelectedProvider}
      />

      {selectedProvider && (
        <Card>
          <CardHeader>
            <CardTitle>Configuration du modèle</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {provider?.models && (
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
                    {provider.models.map(model => (
                      <SelectItem key={model} value={model}>
                        {model}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {provider?.requiresApiKey && (
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Clé API {!provider.requiresApiKey && <span className="text-muted-foreground">(optionnelle)</span>}
                </label>
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
            )}
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Génération d'image</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Prompt de description</label>
            <Textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Décrivez l'image que vous souhaitez générer..."
              rows={4}
            />
          </div>

          <Button 
            onClick={testAPI} 
            disabled={isLoading || !selectedProvider || (provider?.requiresApiKey && !apiKey) || !prompt}
            className="w-full gap-2"
          >
            <Send className="h-4 w-4" />
            {isLoading ? 'Génération en cours...' : 'Générer l\'image'}
          </Button>
        </CardContent>
      </Card>

      {imageUrl && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Image générée
              <div className="flex gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      <ZoomIn className="h-4 w-4 mr-2" />
                      Agrandir
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <DialogHeader>
                      <DialogTitle>Image en taille réelle</DialogTitle>
                    </DialogHeader>
                    <div className="flex justify-center">
                      <img 
                        src={imageUrl} 
                        alt="Image générée" 
                        className="max-w-full max-h-[80vh] object-contain rounded-lg"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
                <Button variant="outline" size="sm" onClick={downloadImage}>
                  <Download className="h-4 w-4 mr-2" />
                  Télécharger
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              <img 
                src={imageUrl} 
                alt="Image générée" 
                className="max-w-full h-auto max-h-96 object-contain rounded-lg border border-border"
              />
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

      <ImageAPIKeysLinks />
    </div>
  );
};

export default ImageTester;
