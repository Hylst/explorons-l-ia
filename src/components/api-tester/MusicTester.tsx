import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Save, Send, Download, Eye, EyeOff, Play, Pause, Music, ExternalLink, BookOpen, Trash2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import ProviderInfoCard from './ProviderInfoCard';
import { musicProvidersInfo } from './musicProvidersData';

interface MusicProvider {
  id: string;
  name: string;
  apiUrl: string;
  models?: string[];
  headers: (apiKey: string) => Record<string, string>;
  buildPayload: (prompt: string, model?: string) => any;
  parseResponse: (response: any) => string;
  description?: string;
  pricing?: string;
  freeLimit?: string;
}

const musicProviders: MusicProvider[] = [
  {
    id: 'suno',
    name: 'Suno AI',
    apiUrl: 'https://api.sunoai.com/v1/generate',
    models: ['v3.5', 'v4'],
    description: 'Génération musicale haute qualité avec paroles',
    pricing: '$10/mois pour 500 générations',
    freeLimit: '50 générations/mois',
    headers: (apiKey: string) => ({
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }),
    buildPayload: (prompt: string, model?: string) => ({
      prompt,
      model: model || 'v3.5',
      make_instrumental: false,
      wait_audio: true
    }),
    parseResponse: (response: any) => response.audio_url || ''
  },
  {
    id: 'udio',
    name: 'Udio',
    apiUrl: 'https://api.udio.com/v1/generate',
    models: ['v1.5', 'v2'],
    description: 'Création musicale avec intelligence artificielle',
    pricing: '$20/mois pour 1200 générations',
    freeLimit: '10 générations/jour',
    headers: (apiKey: string) => ({
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }),
    buildPayload: (prompt: string, model?: string) => ({
      prompt,
      model: model || 'v1.5',
      duration: 30,
      quality: 'high'
    }),
    parseResponse: (response: any) => response.audio_url || ''
  },
  {
    id: 'musicgen',
    name: 'MusicGen (Meta)',
    apiUrl: 'https://api-inference.huggingface.co/models/facebook/musicgen-small',
    models: ['musicgen-small', 'musicgen-medium', 'musicgen-large'],
    description: 'Modèle open-source de Meta via HuggingFace',
    pricing: 'Gratuit (HuggingFace)',
    freeLimit: 'Illimité avec délais',
    headers: (apiKey: string) => ({
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }),
    buildPayload: (prompt: string, model?: string) => ({
      inputs: prompt,
      parameters: {
        duration: 30,
        model: model || 'musicgen-small'
      }
    }),
    parseResponse: (response: any) => {
      return URL.createObjectURL(response);
    }
  },
  {
    id: 'replicate-musicgen',
    name: 'Replicate MusicGen',
    apiUrl: 'https://api.replicate.com/v1/predictions',
    models: ['musicgen-small', 'musicgen-medium', 'musicgen-large', 'musicgen-melody'],
    description: 'MusicGen hébergé sur Replicate',
    pricing: '$0.0023/seconde',
    freeLimit: 'Crédits d\'essai gratuits',
    headers: (apiKey: string) => ({
      'Authorization': `Token ${apiKey}`,
      'Content-Type': 'application/json'
    }),
    buildPayload: (prompt: string, model?: string) => ({
      version: 'facebook/musicgen:7a76a8258b23fae65c5a22debb8841d1d7e816b75c2f24218cd2bd8573787906',
      input: {
        prompt,
        model_version: model || 'musicgen-small',
        duration: 30
      }
    }),
    parseResponse: (response: any) => response.output || ''
  },
  {
    id: 'elevenlabs-music',
    name: 'ElevenLabs Music',
    apiUrl: 'https://api.elevenlabs.io/v1/sound-generation',
    models: ['eleven_multilingual_v2', 'eleven_turbo_v2_5'],
    description: 'Génération de musique et effets sonores',
    pricing: '$5/mois pour 10000 caractères',
    freeLimit: '1000 caractères/mois',
    headers: (apiKey: string) => ({
      'xi-api-key': apiKey,
      'Content-Type': 'application/json'
    }),
    buildPayload: (prompt: string, model?: string) => ({
      text: prompt,
      model_id: model || 'eleven_multilingual_v2',
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.5
      }
    }),
    parseResponse: (response: any) => response // Pour les blobs, on retourne directement
  },
  {
    id: 'beatoven',
    name: 'Beatoven.ai',
    apiUrl: 'https://api.beatoven.ai/v1/generate',
    models: ['pop', 'rock', 'jazz', 'classical', 'electronic', 'cinematic'],
    description: 'Musique adaptative pour contenu avec synchronisation automatique',
    pricing: '$6/mois pour 60 minutes',
    freeLimit: '15 min/mois',
    headers: (apiKey: string) => ({
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    }),
    buildPayload: (prompt: string, model?: string) => ({
      prompt,
      genre: model || 'pop',
      duration: 30,
      mood: 'upbeat'
    }),
    parseResponse: (response: any) => response.audio_url || ''
  }
];

const MusicAPIKeysLinks = () => {
  const apiKeyLinks = [
    { 
      name: 'Suno AI', 
      keyUrl: 'https://app.suno.ai/account',
      docsUrl: 'https://docs.suno.ai/'
    },
    { 
      name: 'Udio', 
      keyUrl: 'https://www.udio.com/settings',
      docsUrl: 'https://docs.udio.com/'
    },
    { 
      name: 'HuggingFace', 
      keyUrl: 'https://huggingface.co/settings/tokens',
      docsUrl: 'https://huggingface.co/docs/api-inference/'
    },
    { 
      name: 'Replicate', 
      keyUrl: 'https://replicate.com/account/api-tokens',
      docsUrl: 'https://replicate.com/docs/reference/http'
    },
    { 
      name: 'ElevenLabs', 
      keyUrl: 'https://elevenlabs.io/app/settings/api-keys',
      docsUrl: 'https://elevenlabs.io/docs/api-reference/sound-generation'
    },
    { 
      name: 'Mubert', 
      keyUrl: 'https://mubert.com/api',
      docsUrl: 'https://mubert.com/api/docs'
    },
    { 
      name: 'Beatoven.ai', 
      keyUrl: 'https://beatoven.ai/dashboard/api',
      docsUrl: 'https://docs.beatoven.ai/'
    }
  ];

  const freeServices = [
    {
      name: 'Soundraw (Freemium)',
      url: 'https://soundraw.io/',
      description: '3 téléchargements gratuits/mois'
    },
    {
      name: 'FreeSound (Gratuit)',
      url: 'https://freesound.org/',
      description: 'Échantillons audio Creative Commons'
    },
    {
      name: 'AIVA (Gratuit)',
      url: 'https://aiva.ai/',
      description: '3 téléchargements gratuits/mois'
    },
    {
      name: 'Amper Music',
      url: 'https://score.ampermusic.com/',
      description: 'Essai gratuit pour créateurs'
    }
  ];

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2">
          <ExternalLink className="h-5 w-5" />
          Ressources pour les API Text-to-Music
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Clés API</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
              {freeServices.map((service) => (
                <Button
                  key={service.name}
                  variant="outline"
                  size="sm"
                  className="justify-start gap-2"
                  onClick={() => window.open(service.url, '_blank')}
                  title={service.description}
                >
                  <ExternalLink className="h-4 w-4" />
                  {service.name}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="pt-4 border-t">
            <p className="text-sm text-muted-foreground">
              💡 <strong>Conseil :</strong> Pour Suno et Udio, vous devez vous inscrire sur leurs sites web pour obtenir des clés API. La plupart nécessitent un abonnement payant pour l'accès API. Essayez d'abord les services gratuits ci-dessus.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const MusicProviderSelector = ({ 
  selectedProvider, 
  onProviderSelect 
}: { 
  selectedProvider: string;
  onProviderSelect: (providerId: string) => void;
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Choisissez un fournisseur Text-to-Music</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {musicProvidersInfo.map((provider) => (
          <ProviderInfoCard
            key={provider.id}
            provider={provider}
            isSelected={selectedProvider === provider.id}
            onClick={() => onProviderSelect(provider.id)}
          />
        ))}
      </div>
    </div>
  );
};

const MusicTester = () => {
  const { toast } = useToast();
  const [selectedProvider, setSelectedProvider] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [apiKey, setApiKey] = useState<string>('');
  const [showApiKey, setShowApiKey] = useState<boolean>(false);
  const [prompt, setPrompt] = useState<string>('');
  const [audioUrl, setAudioUrl] = useState<string>('');
  const [logs, setLogs] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const savedProvider = localStorage.getItem('music-provider');
    const savedModel = localStorage.getItem('music-model');
    const savedApiKey = localStorage.getItem('music-api-key');
    const savedPrompt = localStorage.getItem('music-prompt');

    if (savedProvider) setSelectedProvider(savedProvider);
    if (savedModel) setSelectedModel(savedModel);
    if (savedApiKey) setApiKey(savedApiKey);
    if (savedPrompt) setPrompt(savedPrompt);
  }, []);

  // Présélection automatique du premier modèle quand un fournisseur est choisi
  useEffect(() => {
    if (selectedProvider) {
      const provider = musicProviders.find(p => p.id === selectedProvider);
      if (provider?.models && provider.models.length > 0 && !selectedModel) {
        setSelectedModel(provider.models[0]);
      }
    }
  }, [selectedProvider, selectedModel]);

  const saveApiKey = () => {
    localStorage.setItem('music-provider', selectedProvider);
    localStorage.setItem('music-model', selectedModel);
    localStorage.setItem('music-api-key', apiKey);
    localStorage.setItem('music-prompt', prompt);
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
    if (!selectedProvider || !apiKey || !prompt) {
      addLog('❌ Veuillez remplir tous les champs obligatoires');
      toast({
        title: "Champs manquants",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setAudioUrl('');
    addLog(`🚀 Début de la génération musicale avec ${selectedProvider}`);
    toast({
      title: "Génération en cours",
      description: `Génération de musique avec ${selectedProvider}...`,
    });

    try {
      const provider = musicProviders.find(p => p.id === selectedProvider);
      if (!provider) throw new Error('Fournisseur non trouvé');

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

      // Gestion spéciale pour ElevenLabs qui retourne de l'audio binaire
      if (selectedProvider === 'elevenlabs-music') {
        const audioBlob = await response.blob();
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioUrl(audioUrl);
        addLog('✅ Musique générée avec succès');
      } else if (selectedProvider === 'musicgen') {
        const audioBlob = await response.blob();
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioUrl(audioUrl);
        addLog('✅ Musique générée avec succès');
      } else {
        const data = await response.json();
        addLog(`📦 Réponse brute: ${JSON.stringify(data, null, 2)}`);
        
        const parsedAudioUrl = provider.parseResponse(data);
        setAudioUrl(parsedAudioUrl);
        addLog('✅ Musique générée avec succès');
      }

      toast({
        title: "Musique générée",
        description: "La musique a été générée avec succès.",
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

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const downloadAudio = async () => {
    if (!audioUrl) return;

    try {
      const response = await fetch(audioUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const element = document.createElement('a');
      element.href = url;
      element.download = `generated-music-${Date.now()}.mp3`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      window.URL.revokeObjectURL(url);
      addLog('💾 Audio téléchargé');
      toast({
        title: "Téléchargement",
        description: "L'audio a été téléchargé avec succès.",
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

  const provider = musicProviders.find(p => p.id === selectedProvider);

  return (
    <div className="space-y-6">
      <MusicProviderSelector 
        selectedProvider={selectedProvider}
        onProviderSelect={setSelectedProvider}
      />

      {selectedProvider && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              Configuration du fournisseur
              <Badge variant="secondary">{provider?.name}</Badge>
            </CardTitle>
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
          <CardTitle>Génération de musique</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Prompt de description</label>
            <Textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Décrivez la musique que vous souhaitez générer (ex: 'upbeat jazz with piano and saxophone')"
              rows={4}
            />
          </div>

          <Button 
            onClick={testAPI} 
            disabled={isLoading || !selectedProvider || !apiKey || !prompt}
            className="w-full gap-2"
          >
            <Send className="h-4 w-4" />
            {isLoading ? 'Génération en cours...' : 'Générer la musique'}
          </Button>
        </CardContent>
      </Card>

      {audioUrl && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Audio généré
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={togglePlay}>
                  {isPlaying ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                  {isPlaying ? 'Pause' : 'Lecture'}
                </Button>
                <Button variant="outline" size="sm" onClick={downloadAudio}>
                  <Download className="h-4 w-4 mr-2" />
                  Télécharger
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              <audio
                ref={audioRef}
                src={audioUrl}
                controls
                className="w-full max-w-lg"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              >
                Votre navigateur ne supporte pas la lecture audio.
              </audio>
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

      <MusicAPIKeysLinks />
    </div>
  );
};

export default MusicTester;
