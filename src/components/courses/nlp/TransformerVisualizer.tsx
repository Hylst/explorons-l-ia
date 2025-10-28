
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Brain, Layers, Zap, Eye, Network } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TransformerVisualizer: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [showAttention, setShowAttention] = useState(false);

  const steps = [
    {
      title: "1. Tokenisation",
      description: "Le texte est découpé en tokens (mots ou sous-mots)",
      example: "\"Hello world\" → [\"Hello\", \"world\"]",
      color: "bg-blue-100 border-blue-300"
    },
    {
      title: "2. Embeddings",
      description: "Chaque token devient un vecteur de nombres",
      example: "\"Hello\" → [0.2, -0.1, 0.8, ...]",
      color: "bg-green-100 border-green-300"
    },
    {
      title: "3. Positional Encoding",
      description: "Ajout d'informations sur la position des mots",
      example: "Position 1, Position 2, ...",
      color: "bg-purple-100 border-purple-300"
    },
    {
      title: "4. Self-Attention",
      description: "Chaque mot 'regarde' tous les autres mots",
      example: "\"Hello\" fait attention à \"world\" et vice-versa",
      color: "bg-orange-100 border-orange-300"
    },
    {
      title: "5. Feed Forward",
      description: "Transformation non-linéaire des représentations",
      example: "Enrichissement des représentations",
      color: "bg-red-100 border-red-300"
    },
    {
      title: "6. Sortie",
      description: "Génération du token suivant ou classification",
      example: "Prédiction: \"!\" (probabilité: 0.8)",
      color: "bg-yellow-100 border-yellow-300"
    }
  ];

  const attentionMatrix = [
    { from: "Le", to: "chat", weight: 0.1 },
    { from: "Le", to: "mange", weight: 0.2 },
    { from: "chat", to: "Le", weight: 0.8 },
    { from: "chat", to: "mange", weight: 0.7 },
    { from: "mange", to: "Le", weight: 0.1 },
    { from: "mange", to: "chat", weight: 0.9 }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
          <Brain className="h-6 w-6 text-primary" />
          Anatomie d'un Transformer
        </h3>
        <p className="text-muted-foreground">
          Explorez étape par étape comment un Transformer traite le texte
        </p>
      </div>

      {/* Contrôles */}
      <div className="flex flex-wrap gap-2 justify-center">
        {steps.map((_, index) => (
          <Button
            key={index}
            variant={activeStep === index ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveStep(index)}
          >
            Étape {index + 1}
          </Button>
        ))}
        <Button
          variant={showAttention ? "default" : "outline"}
          size="sm"
          onClick={() => setShowAttention(!showAttention)}
          className="ml-4"
        >
          <Eye className="h-4 w-4 mr-1" />
          Attention
        </Button>
      </div>

      {/* Visualisation principale */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Étape active */}
        <Card className="h-fit">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="h-5 w-5" />
              {steps[activeStep].title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className={`p-4 rounded-lg border-2 ${steps[activeStep].color}`}>
                  <p className="font-medium mb-2">{steps[activeStep].description}</p>
                  <code className="text-sm bg-white/50 px-2 py-1 rounded">
                    {steps[activeStep].example}
                  </code>
                </div>
                
                {/* Visualisation spécifique à l'étape */}
                {activeStep === 3 && (
                  <div className="space-y-2">
                    <h5 className="font-medium">Mécanisme d'attention simplifié :</h5>
                    <div className="grid grid-cols-3 gap-2 text-center text-sm">
                      <div className="bg-blue-50 p-2 rounded">Query (Q)</div>
                      <div className="bg-green-50 p-2 rounded">Key (K)</div>
                      <div className="bg-orange-50 p-2 rounded">Value (V)</div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Attention = softmax(Q·K^T)·V
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </CardContent>
        </Card>

        {/* Matrice d'attention */}
        {showAttention && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Network className="h-5 w-5" />
                Matrice d'attention
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Exemple avec la phrase : "Le chat mange"
                </p>
                <div className="space-y-2">
                  {attentionMatrix.map((attention, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Badge variant="outline" className="min-w-[60px]">
                        {attention.from}
                      </Badge>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-500"
                          style={{ width: `${attention.weight * 100}%` }}
                        />
                      </div>
                      <Badge variant="outline" className="min-w-[60px]">
                        {attention.to}
                      </Badge>
                      <span className="text-xs text-muted-foreground min-w-[40px]">
                        {(attention.weight * 100).toFixed(0)}%
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  Plus la barre est longue, plus l'attention est forte entre les mots
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Architecture globale */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Architecture complète d'un Transformer
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 text-center">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg border-2 transition-all cursor-pointer ${
                  activeStep === index 
                    ? step.color + ' scale-105 shadow-lg' 
                    : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className="text-sm font-medium mb-1">
                  {step.title.split('.')[1]}
                </div>
                <div className="text-xs text-muted-foreground">
                  Étape {index + 1}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TransformerVisualizer;
