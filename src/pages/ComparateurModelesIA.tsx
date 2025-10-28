import React, { useState } from 'react';
import Hero from '@/components/Hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { aiProvidersData } from '@/components/cost-calculator/aiProvidersData';
import { 
  BarChart3, 
  Zap, 
  Clock, 
  DollarSign,
  Brain,
  Settings,
  Filter,
  Search,
  TrendingUp,
  Shield,
  Users,
  CheckCircle2,
  Globe,
  Cpu,
  Database
} from 'lucide-react';

const ComparateurModelesIA = () => {
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Transform aiProvidersData into models for comparison
  const models = aiProvidersData.flatMap(provider => 
    provider.models.map(model => {
      // Get pricing from first tier if available
      const firstTier = model.pricing?.[0];
      const inputPrice = firstTier?.inputPrice || 0;
      const outputPrice = firstTier?.outputPrice || 0;
      
      // Categorize models
      let category = 'Autre';
      if (model.type === 'text' || model.name.toLowerCase().includes('gpt') || 
          model.name.toLowerCase().includes('claude') || model.name.toLowerCase().includes('gemini') ||
          model.name.toLowerCase().includes('llama') || model.name.toLowerCase().includes('mistral')) {
        category = 'LLM';
      } else if (model.type === 'image' || model.name.toLowerCase().includes('dall-e') || 
                 model.name.toLowerCase().includes('stable') || model.name.toLowerCase().includes('midjourney')) {
        category = 'Image';
      } else if (model.type === 'audio' || model.name.toLowerCase().includes('whisper') || 
                 model.name.toLowerCase().includes('eleven') || model.name.toLowerCase().includes('tts')) {
        category = 'Audio';
      } else if (model.type === 'video' || model.name.toLowerCase().includes('runway') || 
                 model.name.toLowerCase().includes('video')) {
        category = 'Vidéo';
      } else if (model.name.toLowerCase().includes('embedding') || model.name.toLowerCase().includes('embed')) {
        category = 'Embeddings';
      }

      // Estimate performance based on model characteristics
      let performance = 70;
      if (model.name.toLowerCase().includes('gpt-4') || model.name.toLowerCase().includes('opus')) performance = 95;
      else if (model.name.toLowerCase().includes('gpt-3.5') || model.name.toLowerCase().includes('claude-3')) performance = 90;
      else if (model.name.toLowerCase().includes('gemini-pro')) performance = 88;
      else if (model.name.toLowerCase().includes('llama-2-70b')) performance = 85;
      else if (model.name.toLowerCase().includes('dall-e-3')) performance = 92;
      else if (model.name.toLowerCase().includes('stable-diffusion')) performance = 87;

      // Convert speed from text to number
      let speed = 80;
      if (model.speed === 'très-rapide') speed = 95;
      else if (model.speed === 'rapide') speed = 85;
      else if (model.speed === 'modéré') speed = 70;
      else if (model.speed === 'lent') speed = 60;
      
      // Additional speed adjustments based on model name
      if (model.name.toLowerCase().includes('mini') || model.name.toLowerCase().includes('turbo')) speed = Math.max(speed, 95);
      else if (model.name.toLowerCase().includes('gpt-4')) speed = Math.min(speed, 70);

      return {
        id: `${provider.id}-${model.id}`,
        name: model.name,
        provider: provider.name,
        category,
        pricing: firstTier ? 
          `$${inputPrice.toFixed(4)}/$${outputPrice.toFixed(4)} par 1M tokens` : 
          'Variable',
        performance,
        speed,
        contextLength: model.contextLength ? `${model.contextLength.toLocaleString()}` : 'N/A',
        capabilities: model.features || [],
        strengths: [], // Not available in data structure
        limitations: [], // Not available in data structure
        modelType: model.type,
        multimodal: model.type === 'multimodal',
        region: provider.region,
        apiUrl: provider.apiUrl,
        website: provider.website,
        inputPricePerM: inputPrice,
        outputPricePerM: outputPrice,
        recommended: model.recommended || false,
        quality: model.quality || 'standard'
      };
    })
  );

  // Get unique categories for filter
  const categories = ['all', ...new Set(models.map(m => m.category.toLowerCase()))];

  const filteredModels = models.filter(model => {
    const matchesCategory = filterCategory === 'all' || model.category.toLowerCase() === filterCategory;
    const matchesSearch = model.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         model.provider.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         model.capabilities.some(cap => cap.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleModelSelection = (modelId: string) => {
    setSelectedModels(prev => 
      prev.includes(modelId) 
        ? prev.filter(id => id !== modelId)
        : [...prev, modelId]
    );
  };

  const selectedModelData = models.filter(m => selectedModels.includes(m.id));

  return (
    <>
      <Hero
        title="Comparateur de Modèles IA"
        subtitle="Comparez les performances, coûts et capacités des principaux modèles d'IA pour choisir la solution optimale pour vos projets"
      />
      
      <section className="section-container">
        {/* Bouton retour */}
        <div className="mb-6">
          <Button 
            variant="outline" 
            onClick={() => window.location.href = '/ressources?tab=outils'}
            className="flex items-center gap-2"
          >
            ← Retour aux Outils IA
          </Button>
        </div>

        {/* Info créateur */}
        <Card className="mb-6 border-l-4 border-l-primary">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold">Créé par Geoffroy Streit</h4>
                <p className="text-sm text-muted-foreground">
                  Expert en IA et comparaison de modèles • En cours de développement
                </p>
                <div className="flex gap-2 mt-2">
                  <Badge variant="secondary" className="text-xs">Comparaison IA</Badge>
                  <Badge variant="secondary" className="text-xs">Analyse Technique</Badge>
                  <Badge variant="secondary" className="text-xs">Optimisation</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="browser" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="browser" className="flex items-center gap-2">
              <Search className="h-4 w-4" />
              Parcourir les Modèles
            </TabsTrigger>
            <TabsTrigger value="compare" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Comparaison Détaillée
            </TabsTrigger>
            <TabsTrigger value="recommendations" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Recommandations
            </TabsTrigger>
          </TabsList>

          <TabsContent value="browser" className="mt-6">
            {/* Filtres et recherche */}
            <div className="flex gap-4 mb-6">
              <div className="flex-1">
                <Input
                  placeholder="Rechercher un modèle ou fournisseur..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes catégories</SelectItem>
                  {categories.filter(cat => cat !== 'all').map(category => (
                    <SelectItem key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Grille des modèles */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredModels.map((model) => (
                <Card 
                  key={model.id} 
                  className={`cursor-pointer transition-all ${
                    selectedModels.includes(model.id) 
                      ? 'ring-2 ring-primary bg-primary/5' 
                      : 'hover:shadow-md'
                  }`}
                  onClick={() => toggleModelSelection(model.id)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{model.name}</CardTitle>
                      {selectedModels.includes(model.id) && (
                        <CheckCircle2 className="h-5 w-5 text-primary" />
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{model.provider}</Badge>
                      <Badge variant="secondary">{model.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Type</span>
                        <Badge variant="outline" className="text-xs">{model.modelType}</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Prix</span>
                        <span className="font-medium text-xs">{model.pricing}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Contexte</span>
                        <span className="text-sm">{model.contextLength}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Performance</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-muted rounded-full">
                            <div 
                              className="h-full bg-primary rounded-full" 
                              style={{ width: `${model.performance}%` }}
                            />
                          </div>
                          <span className="text-sm">{model.performance}%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Vitesse</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-muted rounded-full">
                            <div 
                              className="h-full bg-green-500 rounded-full" 
                              style={{ width: `${model.speed}%` }}
                            />
                          </div>
                          <span className="text-sm">{model.speed}%</span>
                        </div>
                      </div>
                      {model.recommended && (
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-green-600">Recommandé</span>
                        </div>
                      )}
                      {model.multimodal && (
                        <Badge variant="secondary" className="text-xs">Multimodal</Badge>
                      )}
                      <div className="flex flex-wrap gap-1 mt-2">
                        {model.capabilities.slice(0, 3).map((cap) => (
                          <Badge key={cap} variant="outline" className="text-xs">
                            {cap}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="compare" className="mt-6">
            {selectedModelData.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <BarChart3 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Aucun modèle sélectionné</h3>
                  <p className="text-muted-foreground mb-4">
                    Sélectionnez au moins 2 modèles dans l'onglet "Parcourir" pour commencer la comparaison.
                  </p>
                  <Button variant="outline">
                    Parcourir les modèles
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">
                    Comparaison de {selectedModelData.length} modèle(s)
                  </h3>
                  <Button 
                    variant="outline" 
                    onClick={() => setSelectedModels([])}
                  >
                    Effacer la sélection
                  </Button>
                </div>

                {/* Tableau de comparaison */}
                <Card>
                  <CardHeader>
                    <CardTitle>Comparaison détaillée</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-2">Critère</th>
                            {selectedModelData.map(model => (
                              <th key={model.id} className="text-left p-2 min-w-32">{model.name}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="p-2 font-medium flex items-center gap-2">
                              <Globe className="h-4 w-4" />
                              Fournisseur
                            </td>
                            {selectedModelData.map(model => (
                              <td key={model.id} className="p-2">{model.provider}</td>
                            ))}
                          </tr>
                          <tr className="border-b">
                            <td className="p-2 font-medium flex items-center gap-2">
                              <Cpu className="h-4 w-4" />
                              Type
                            </td>
                            {selectedModelData.map(model => (
                              <td key={model.id} className="p-2">
                                <Badge variant="outline" className="text-xs">{model.modelType}</Badge>
                              </td>
                            ))}
                          </tr>
                          <tr className="border-b">
                            <td className="p-2 font-medium flex items-center gap-2">
                              <DollarSign className="h-4 w-4" />
                              Prix
                            </td>
                            {selectedModelData.map(model => (
                              <td key={model.id} className="p-2 text-sm">{model.pricing}</td>
                            ))}
                          </tr>
                          <tr className="border-b">
                            <td className="p-2 font-medium flex items-center gap-2">
                              <BarChart3 className="h-4 w-4" />
                              Performance
                            </td>
                            {selectedModelData.map(model => (
                              <td key={model.id} className="p-2">
                                <div className="flex items-center gap-2">
                                  <div className="w-20 h-2 bg-muted rounded-full">
                                    <div 
                                      className="h-full bg-primary rounded-full" 
                                      style={{ width: `${model.performance}%` }}
                                    />
                                  </div>
                                  <span className="text-sm">{model.performance}%</span>
                                </div>
                              </td>
                            ))}
                          </tr>
                          <tr className="border-b">
                            <td className="p-2 font-medium flex items-center gap-2">
                              <Zap className="h-4 w-4" />
                              Vitesse
                            </td>
                            {selectedModelData.map(model => (
                              <td key={model.id} className="p-2">
                                <div className="flex items-center gap-2">
                                  <div className="w-20 h-2 bg-muted rounded-full">
                                    <div 
                                      className="h-full bg-green-500 rounded-full" 
                                      style={{ width: `${model.speed}%` }}
                                    />
                                  </div>
                                  <span className="text-sm">{model.speed}%</span>
                                </div>
                              </td>
                            ))}
                          </tr>
                          <tr className="border-b">
                            <td className="p-2 font-medium flex items-center gap-2">
                              <Database className="h-4 w-4" />
                              Contexte
                            </td>
                            {selectedModelData.map(model => (
                              <td key={model.id} className="p-2">{model.contextLength}</td>
                            ))}
                          </tr>
                          <tr className="border-b">
                            <td className="p-2 font-medium">Qualité</td>
                            {selectedModelData.map(model => (
                              <td key={model.id} className="p-2">
                                <Badge 
                                  variant={model.quality === 'flagship' ? 'default' : 'secondary'} 
                                  className="text-xs"
                                >
                                  {model.quality}
                                </Badge>
                              </td>
                            ))}
                          </tr>
                          <tr className="border-b">
                            <td className="p-2 font-medium">Région</td>
                            {selectedModelData.map(model => (
                              <td key={model.id} className="p-2 text-sm">{model.region || 'Global'}</td>
                            ))}
                          </tr>
                          <tr className="border-b">
                            <td className="p-2 font-medium">Recommandé</td>
                            {selectedModelData.map(model => (
                              <td key={model.id} className="p-2">
                                {model.recommended ? (
                                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                                ) : (
                                  <span className="text-muted-foreground text-sm">-</span>
                                )}
                              </td>
                            ))}
                          </tr>
                          <tr className="border-b">
                            <td className="p-2 font-medium">Multimodal</td>
                            {selectedModelData.map(model => (
                              <td key={model.id} className="p-2">
                                {model.multimodal ? (
                                  <Badge variant="secondary" className="text-xs">Oui</Badge>
                                ) : (
                                  <span className="text-muted-foreground text-sm">Non</span>
                                )}
                              </td>
                            ))}
                          </tr>
                          <tr>
                            <td className="p-2 font-medium">Capacités</td>
                            {selectedModelData.map(model => (
                              <td key={model.id} className="p-2">
                                <div className="flex flex-wrap gap-1">
                                  {model.capabilities.slice(0, 2).map((cap) => (
                                    <Badge key={cap} variant="outline" className="text-xs">
                                      {cap}
                                    </Badge>
                                  ))}
                                  {model.capabilities.length > 2 && (
                                    <span className="text-xs text-muted-foreground">
                                      +{model.capabilities.length - 2}
                                    </span>
                                  )}
                                </div>
                              </td>
                            ))}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </TabsContent>

          <TabsContent value="recommendations" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5" />
                    Pour le développement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Recommandations pour les développeurs et l'intégration d'API
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">GPT-4</Badge>
                      <span className="text-sm">Code complexe et raisonnement</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Claude 3</Badge>
                      <span className="text-sm">Analyse et sécurité</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Rapport qualité/prix
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Meilleurs choix pour optimiser les coûts
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Gemini Pro</Badge>
                      <span className="text-sm">Excellent rapport qualité/prix</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Claude 3</Badge>
                      <span className="text-sm">Contexte long abordable</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Performance maximale
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Pour les tâches critiques nécessitant la meilleure qualité
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">GPT-4</Badge>
                      <span className="text-sm">Raisonnement et créativité</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">DALL-E 3</Badge>
                      <span className="text-sm">Génération d'images</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Vitesse d'exécution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Pour les applications temps réel et à fort volume
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Gemini Pro</Badge>
                      <span className="text-sm">Très rapide et fiable</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Claude 3</Badge>
                      <span className="text-sm">Bon équilibre vitesse/qualité</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
};

export default ComparateurModelesIA;