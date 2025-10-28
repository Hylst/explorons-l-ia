
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Zap, 
  Cpu, 
  FlaskRound,
  GanttChart,
  LineChart,
  ArrowDownToLine
} from 'lucide-react';
import LessonSection from '@/components/courses/LessonSection';
import TechnicalTooltip from '@/components/courses/TechnicalTooltip';
import StatsGrid from '@/components/courses/StatsGrid';
import CodeExample from '@/components/courses/CodeExample';

const OptimizationSection = () => {
  const optimizationStats = [
    { value: "~4x", description: "gain vitesse avec quant 8-bit" },
    { value: "75%", description: "réduction mémoire avec quant 4-bit" },
    { value: "10x", description: "amélioration coût avec MoE" },
    { value: "2-5x", description: "gain vitesse avec compilation" }
  ];

  const quantizationExample = `# Exemple de quantization avec bitsandbytes et transformers

import torch
from transformers import AutoModelForCausalLM, AutoTokenizer

# Chargement avec quantization 8-bit
model = AutoModelForCausalLM.from_pretrained(
    "meta-llama/Llama-2-13b-chat-hf",
    device_map="auto",
    load_in_8bit=True,     # Quantization à 8 bits
    # load_in_4bit=True,   # Alternative : quantization à 4 bits
)

tokenizer = AutoTokenizer.from_pretrained("meta-llama/Llama-2-13b-chat-hf")

# Inférence avec le modèle quantisé
inputs = tokenizer("Explique-moi l'intelligence artificielle", return_tensors="pt").to(model.device)
outputs = model.generate(**inputs, max_length=100)
print(tokenizer.decode(outputs[0]))`;

  const optimizationTechniques = [
    {
      technique: "Quantization",
      description: "Réduction de la précision des poids (ex: FP16 → INT8/4)",
      benefits: "↓ mémoire GPU, ↑ vitesse d'inférence, déploiement sur appareils limités",
      tradeoffs: "Légère perte de qualité, surtout avec 4-bit et moins",
      icon: <ArrowDownToLine className="h-5 w-5 text-blue-500" />
    },
    {
      technique: "Modèles épars (MoE)",
      description: "Sous-réseaux spécialisés activés par token",
      benefits: "↑ capacité effective sans augmenter coûts d'inférence proportionnellement",
      tradeoffs: "Architecture plus complexe, plus difficile à optimiser",
      icon: <GanttChart className="h-5 w-5 text-purple-500" />
    },
    {
      technique: "Fine-tuning optimisé",
      description: "Adaptation ciblée (LoRA, QLoRA) pour un domaine/tâche",
      benefits: "Amélioration des performances sur domaines spécifiques avec ressources limitées",
      tradeoffs: "Potentiel oubli des capacités générales (catastrophic forgetting)",
      icon: <FlaskRound className="h-5 w-5 text-amber-500" />
    },
    {
      technique: "Compilation",
      description: "Optimisation hardware (ex: CUDA kernels pour NVIDIA)",
      benefits: "↑ vitesse d'inférence, ↓ latence, meilleure utilisation des accélérateurs",
      tradeoffs: "Optimisations spécifiques à certains matériels",
      icon: <Cpu className="h-5 w-5 text-green-500" />
    }
  ];

  const performanceMetrics = [
    {
      metric: "Perplexité",
      description: "Mesure la surprise du modèle face à de nouveaux textes",
      interpretation: "Plus basse = meilleure modélisation de la langue",
      typical: "5-15 pour les grands LLM sur texte général",
      icon: <LineChart className="h-5 w-5 text-indigo-500" />
    },
    {
      metric: "Benchmarks",
      description: "Scores sur tests standardisés (MMLU, HumanEval, GSM8K)",
      interpretation: "% de réponses correctes (comparé aux humains experts)",
      typical: "MMLU: 60-90%, HumanEval: 30-80%, GSM8K: 50-95%",
      icon: <GanttChart className="h-5 w-5 text-red-500" />
    },
    {
      metric: "Latence",
      description: "Temps de génération (ms/token)",
      interpretation: "Impact direct sur l'expérience utilisateur",
      typical: "10-100ms/token selon modèle et matériel",
      icon: <Cpu className="h-5 w-5 text-amber-500" />
    },
    {
      metric: "Throughput",
      description: "Nombre de tokens générés par seconde",
      interpretation: "Capacité à servir de multiples requêtes",
      typical: "10-1000 tokens/s selon taille et matériel",
      icon: <Zap className="h-5 w-5 text-green-500" />
    }
  ];

  return (
    <LessonSection
      title="V. Optimisations Techniques et Métriques de Performance"
      icon={<Zap className="h-6 w-6" />}
      delay={4}
    >
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20 border border-green-200 dark:border-green-800 p-6 rounded-lg">
          <p className="text-lg leading-relaxed text-green-800 dark:text-green-200">
            Les techniques d'optimisation permettent de réduire les ressources nécessaires pour exécuter un LLM 
            ou d'améliorer ses performances sur des tâches spécifiques. Ces optimisations sont cruciales pour 
            déployer des modèles en production avec des contraintes de coût et de latence.
          </p>
        </div>

        <StatsGrid stats={optimizationStats} columns={4} />

        <div>
          <h4 className="text-lg font-medium mb-4 flex items-center gap-2 text-blue-700 dark:text-blue-300">
            <Zap className="h-5 w-5" />
            Techniques d'optimisation
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {optimizationTechniques.map((technique, index) => (
              <Card key={index} className="hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    {technique.icon}
                    <TechnicalTooltip 
                      term={technique.technique}
                      definition={technique.description}
                    >
                      {technique.technique}
                    </TechnicalTooltip>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-muted-foreground text-sm">{technique.description}</p>
                    
                    <div>
                      <Badge variant="outline" className="text-xs mb-1 bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-300">Avantages</Badge>
                      <p className="text-sm mb-2">{technique.benefits}</p>
                      
                      <Badge variant="outline" className="text-xs mb-1 bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300">Compromis</Badge>
                      <p className="text-sm">{technique.tradeoffs}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-medium mb-4 flex items-center gap-2 text-purple-700 dark:text-purple-300">
            <LineChart className="h-5 w-5" />
            Métriques de performance
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {performanceMetrics.map((metric, index) => (
              <Card key={index} className="hover:shadow-md transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    {metric.icon}
                    <TechnicalTooltip 
                      term={metric.metric}
                      definition={metric.description}
                    >
                      {metric.metric}
                    </TechnicalTooltip>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-muted-foreground text-sm">{metric.description}</p>
                    
                    <div className="grid grid-cols-1 gap-2">
                      <div>
                        <Badge variant="secondary" className="text-xs mb-1">Interprétation</Badge>
                        <p className="text-sm">{metric.interpretation}</p>
                      </div>
                      
                      <div>
                        <Badge variant="outline" className="text-xs mb-1">Valeurs typiques</Badge>
                        <p className="text-sm">{metric.typical}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <CodeExample
          title="Exemple de quantization avec Transformers"
          language="python"
          code={quantizationExample}
          explanation="La quantization à 8 ou 4 bits permet de réduire significativement l'empreinte mémoire d'un LLM tout en préservant la majeure partie de ses performances."
        />

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-800 p-6 rounded-lg">
          <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3 flex items-center gap-2">
            💡 Conseil pratique : Optimisation progressive
          </h4>
          <ol className="space-y-2 text-blue-700 dark:text-blue-300">
            <li className="flex items-start gap-2">
              <span className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 font-medium">1</span>
              <span>Commencez par une quantization 16-bit (FP16/BF16) qui n'affecte presque pas la qualité</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 font-medium">2</span>
              <span>Utilisez des techniques de batch processing pour maximiser le throughput</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 font-medium">3</span>
              <span>Testez la quantization 8-bit sur votre cas d'usage spécifique</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 font-medium">4</span>
              <span>Pour des contraintes fortes, essayez 4-bit avec calibration sur votre domaine</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 font-medium">5</span>
              <span>En dernier recours, explorez les modèles distillés ou spécialisés pour votre tâche</span>
            </li>
          </ol>
        </div>
      </div>
    </LessonSection>
  );
};

export default OptimizationSection;
