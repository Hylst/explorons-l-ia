
import React, { useState } from 'react';
import Hero from '@/components/Hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Workflow, 
  MousePointer, 
  BarChart4, 
  Play,
  Settings,
  TrendingUp,
  Zap,
  Database,
  GitBranch,
  User,
  Brain,
  Rocket,
  Shield
} from 'lucide-react';
import WorkflowEditor from '@/components/workflow/WorkflowEditor';
import WorkflowOptimizer from '@/components/workflow/WorkflowOptimizer';
import WorkflowCreator from '@/components/workflow/WorkflowCreator';

import { Node, Edge } from '@xyflow/react';

const OptimiseurWorkflowIA = () => {
  const [currentWorkflow, setCurrentWorkflow] = useState<{nodes: Node[], edges: Edge[]} | null>(null);

  const handleWorkflowSave = (workflow: {nodes: Node[], edges: Edge[]}) => {
    setCurrentWorkflow(workflow);
    console.log('Workflow sauvegardé:', workflow);
  };

  const handleWorkflowExecute = async (nodes: Node[], edges: Edge[]) => {
    console.log('Exécution du workflow:', { nodes, edges });
    // Ici on pourrait intégrer avec des APIs réelles
  };

  return (
    <>
      <Hero
        title="Optimiseur de Workflow IA"
        subtitle="Créez, optimisez et automatisez des chaînes de traitement IA complexes avec une interface visuelle intuitive et des analyses avancées"
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
        
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">Interface d'Optimisation Avancée</h2>
            <p className="text-muted-foreground">
              Construisez des pipelines IA performants avec monitoring en temps réel
            </p>
          </div>
          <WorkflowCreator />
        </div>

        <Tabs defaultValue="editor" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="editor" className="flex items-center gap-2">
              <MousePointer className="h-4 w-4" />
              Éditeur Visual
            </TabsTrigger>
            <TabsTrigger value="optimizer" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Analytics & Optimisation
            </TabsTrigger>
            <TabsTrigger value="features" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Fonctionnalités
            </TabsTrigger>
          </TabsList>

          <TabsContent value="editor" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Workflow className="h-5 w-5" />
                  Éditeur de Workflow Avancé
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Interface drag & drop avec bibliothèque étendue de nœuds IA et presets prêts à l'emploi
                </p>
              </CardHeader>
              <CardContent>
                <WorkflowEditor 
                  onSave={handleWorkflowSave}
                  onExecute={handleWorkflowExecute}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="optimizer" className="mt-6">
            {currentWorkflow ? (
              <WorkflowOptimizer 
                nodes={currentWorkflow.nodes}
                edges={currentWorkflow.edges}
              />
            ) : (
              <Card>
                <CardContent className="p-12 text-center">
                  <BarChart4 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Aucun workflow à analyser</h3>
                  <p className="text-muted-foreground mb-4">
                    Créez et sauvegardez un workflow dans l'éditeur pour accéder aux analyses avancées et suggestions d'optimisation IA.
                  </p>
                  <Button variant="outline">
                    Aller à l'éditeur
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="features" className="mt-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MousePointer className="h-5 w-5" />
                    Interface Visual Avancée
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Créez des pipelines IA sophistiqués avec une interface intuitive et des outils professionnels.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• 15+ nœuds IA pré-configurés</li>
                    <li>• Presets de workflows prêts</li>
                    <li>• Validation en temps réel</li>
                    <li>• Export/Import JSON</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Play className="h-5 w-5" />
                    Exécution & Monitoring Pro
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Surveillez l'exécution avec des métriques détaillées et une gestion d'erreurs avancée.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Logs détaillés en temps réel</li>
                    <li>• Métriques de coût et performance</li>
                    <li>• Retry automatique intelligent</li>
                    <li>• Alertes et notifications</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5" />
                    IA d'Optimisation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Suggestions automatiques pour optimiser performance, coûts et fiabilité.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Analyse prédictive des coûts</li>
                    <li>• Détection de goulots d'étranglement</li>
                    <li>• Suggestions d'optimisation IA</li>
                    <li>• Benchmarking automatique</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5" />
                    Connecteurs IA Étendus
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Intégration native avec les principales plateformes IA et services cloud.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• OpenAI (GPT-4, DALL-E, Whisper)</li>
                    <li>• Anthropic Claude 3</li>
                    <li>• Services Google, Azure, AWS</li>
                    <li>• APIs personnalisées</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Rocket className="h-5 w-5" />
                    Déploiement & Scaling
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Déployez vos workflows avec mise à l'échelle automatique et haute disponibilité.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Auto-scaling intelligent</li>
                    <li>• Load balancing</li>
                    <li>• Déploiement multi-région</li>
                    <li>• Monitoring 24/7</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Sécurité & Gouvernance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Sécurité enterprise avec contrôle d'accès, audit et conformité.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Chiffrement end-to-end</li>
                    <li>• Audit trails complets</li>
                    <li>• RBAC granulaire</li>
                    <li>• Conformité RGPD/SOC2</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Section créateur */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  À propos du créateur
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Geoffroy Streit</h4>
                    <p className="text-muted-foreground mb-2">
                      Consultant passionné en Intelligence Artificielle
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="secondary">IA & Machine Learning</Badge>
                      <Badge variant="secondary">Optimisation de Performance</Badge>
                      <Badge variant="secondary">Architecture Cloud</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
};

export default OptimiseurWorkflowIA;
