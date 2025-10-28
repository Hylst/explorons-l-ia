
import React from 'react';
import { Sparkles, Target, Zap, Brain, Users, TrendingUp } from 'lucide-react';
import { templateStats } from './templates';

const PromptGeneratorHeader = () => {
  return (
    <div className="space-y-6">
      {/* Header principal */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Générateur de Prompts Intelligent
          </h1>
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Créez des prompts professionnels optimisés pour tous types d'IA : LLM, génération d'images, 
          audio, vidéo et systèmes RAG avec nos templates spécialisés
        </p>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center p-4 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200">
          <div className="text-3xl font-bold text-purple-700">{templateStats.totalTemplates}+</div>
          <div className="text-sm text-purple-600">Templates Spécialisés</div>
        </div>
        <div className="text-center p-4 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
          <div className="text-3xl font-bold text-blue-700">{templateStats.totalCategories}</div>
          <div className="text-sm text-blue-600">Catégories IA</div>
        </div>
        <div className="text-center p-4 rounded-lg bg-gradient-to-br from-green-50 to-green-100 border border-green-200">
          <div className="text-3xl font-bold text-green-700">95%+</div>
          <div className="text-sm text-green-600">Taux de Satisfaction</div>
        </div>
        <div className="text-center p-4 rounded-lg bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200">
          <div className="text-3xl font-bold text-orange-700">50K+</div>
          <div className="text-sm text-orange-600">Prompts Générés</div>
        </div>
      </div>

      {/* Fonctionnalités clés */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="flex items-start gap-4 p-4 rounded-lg border bg-card">
          <div className="p-2 rounded-lg bg-primary/10">
            <Target className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold">Templates Spécialisés</h3>
            <p className="text-sm text-muted-foreground">
              Plus de {templateStats.totalTemplates} templates optimisés pour chaque type d'IA et cas d'usage
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 rounded-lg border bg-card">
          <div className="p-2 rounded-lg bg-primary/10">
            <Zap className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold">Génération Instantanée</h3>
            <p className="text-sm text-muted-foreground">
              Créez des prompts professionnels en quelques clics avec nos formulaires intelligents
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 p-4 rounded-lg border bg-card">
          <div className="p-2 rounded-lg bg-primary/10">
            <Brain className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold">IA Multi-Modale</h3>
            <p className="text-sm text-muted-foreground">
              Support pour LLM, images, audio, vidéo, vision IA et systèmes RAG
            </p>
          </div>
        </div>
      </div>

      {/* Avantages business */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-xl p-6 border">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-foreground">
              <Users className="h-5 w-5 text-primary" />
              Pour les Professionnels
            </h3>
            <ul className="space-y-2 text-sm text-foreground">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                Gain de temps considérable dans la création de prompts
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                Templates validés par des experts en IA
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                Optimisation pour tous les modèles d'IA populaires
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-foreground">
              <TrendingUp className="h-5 w-5 text-primary" />
              Résultats Garantis
            </h3>
            <ul className="space-y-2 text-sm text-foreground">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                Amélioration de la qualité des réponses IA
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                Consistance et reproductibilité des résultats
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                Intégration facile dans vos workflows existants
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptGeneratorHeader;
