
import React from 'react';
import { Brain, Database, Calendar, Clock } from 'lucide-react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

/**
 * Composant présentant les différents types de mémoire en IA
 * @returns {JSX.Element} Le composant des types de mémoire en IA
 */
const AIMemoryTypes = () => {
  return (
    <div className="w-full space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-card border rounded-xl p-6 shadow-sm">
          <div className="flex items-start space-x-4 mb-4">
            <div className="bg-primary/10 p-3 rounded-full">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Types de mémoire en IA</h3>
              <p className="text-muted-foreground text-sm">
                Les systèmes d'IA utilisent différents types de mémoire pour traiter et stocker l'information, 
                chacun avec des fonctions spécifiques.
              </p>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-muted/50 rounded-lg border border-border overflow-hidden">
            <svg width="100%" height="200" viewBox="0 0 500 300" className="mx-auto">
              {/* Titre */}
              <text x="250" y="30" textAnchor="middle" fill="currentColor" fontSize="18" fontWeight="bold">Architecture de la mémoire en IA</text>
              
              {/* Mémoire à court terme */}
              <rect x="50" y="70" width="150" height="70" rx="10" fill="rgba(var(--primary), 0.2)" stroke="rgb(var(--primary))" strokeWidth="2" />
              <text x="125" y="105" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="bold">Mémoire à court terme</text>
              <text x="125" y="125" textAnchor="middle" fill="currentColor" fontSize="10">(mémoire de travail)</text>
              
              {/* Mémoire à long terme */}
              <rect x="300" y="70" width="150" height="180" rx="10" fill="rgba(var(--primary), 0.1)" stroke="rgb(var(--primary))" strokeWidth="2" />
              <text x="375" y="95" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="bold">Mémoire à long terme</text>
              
              {/* Sous-types de mémoire à long terme */}
              <rect x="320" y="110" width="110" height="40" rx="5" fill="rgba(var(--primary), 0.3)" stroke="rgb(var(--primary))" strokeWidth="1" />
              <text x="375" y="135" textAnchor="middle" fill="currentColor" fontSize="12">Sémantique</text>
              
              <rect x="320" y="160" width="110" height="40" rx="5" fill="rgba(var(--primary), 0.3)" stroke="rgb(var(--primary))" strokeWidth="1" />
              <text x="375" y="185" textAnchor="middle" fill="currentColor" fontSize="12">Épisodique</text>
              
              <rect x="320" y="210" width="110" height="40" rx="5" fill="rgba(var(--primary), 0.3)" stroke="rgb(var(--primary))" strokeWidth="1" />
              <text x="375" y="235" textAnchor="middle" fill="currentColor" fontSize="12">Procédurale</text>
              
              {/* Mémoire de contexte */}
              <rect x="130" y="180" width="150" height="70" rx="10" fill="rgba(var(--primary), 0.15)" stroke="rgb(var(--primary))" strokeWidth="2" />
              <text x="205" y="215" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="bold">Mémoire de contexte</text>
              
              {/* Flèches */}
              <path d="M200 105 L300 105" fill="none" stroke="rgb(var(--primary))" strokeWidth="2" strokeDasharray="5,5" />
              <path d="M280 215 L300 215" fill="none" stroke="rgb(var(--primary))" strokeWidth="2" strokeDasharray="5,5" />
              <path d="M125 140 L125 180 L130 180" fill="none" stroke="rgb(var(--primary))" strokeWidth="2" strokeDasharray="5,5" />
            </svg>
          </div>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <Clock className="h-5 w-5 mr-2 text-primary" />
                Mémoire à court terme
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Similaire à la RAM d'un ordinateur, elle stocke temporairement les données 
                nécessaires pour exécuter des tâches immédiates. Dans les modèles de langage, 
                elle permet de garder le contexte récent d'une conversation.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <Database className="h-5 w-5 mr-2 text-primary" />
                Mémoire à long terme
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Stocke les connaissances persistantes acquises pendant l'entraînement.
                Se divise en mémoire sémantique (faits, concepts), épisodique (expériences spécifiques) 
                et procédurale (comment effectuer des actions).
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-lg">
                <Calendar className="h-5 w-5 mr-2 text-primary" />
                Mémoire de contexte
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Permet aux modèles de se souvenir des informations précédentes dans une séquence 
                ou conversation. Cruciale pour la compréhension du langage naturel et les interactions 
                prolongées avec les utilisateurs.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg font-medium">Mémoire à court terme (mémoire de travail)</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pl-4 text-muted-foreground">
              <p>
                La mémoire à court terme, ou mémoire de travail, est l'équivalent de la RAM dans un ordinateur. 
                Elle permet à l'IA de stocker et manipuler temporairement les informations nécessaires à une tâche en cours.
              </p>
              <p>
                <strong>Caractéristiques :</strong>
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Capacité limitée</li>
                <li>Durée de rétention courte</li>
                <li>Traitement actif des informations</li>
              </ul>
              <p>
                <strong>Applications :</strong> Traitement du langage naturel, prise de décision séquentielle, analyse contextuelle immédiate.
              </p>
              <p>
                <strong>Implémentation technique :</strong> Dans les réseaux neuronaux récurrents (RNN) et les Long Short-Term Memory (LSTM),
                cette mémoire est implémentée via des états cachés qui sont mis à jour à chaque étape de traitement.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg font-medium">Mémoire à long terme</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pl-4 text-muted-foreground">
              <p>
                La mémoire à long terme stocke des informations de manière persistante, permettant à l'IA de 
                conserver des connaissances sur une période prolongée. Elle est essentielle pour l'apprentissage 
                et l'adaptation.
              </p>
              <p>
                <strong>Sous-types :</strong>
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Mémoire sémantique :</strong> Stocke des connaissances générales, des faits et des concepts.
                  Dans les LLM comme GPT, elle est encodée dans les poids du réseau neuronal.
                </li>
                <li>
                  <strong>Mémoire épisodique :</strong> Stocke des expériences spécifiques dans leur contexte temporel.
                  Utilisée dans les systèmes qui doivent se souvenir d'interactions précédentes.
                </li>
                <li>
                  <strong>Mémoire procédurale :</strong> Stocke des informations sur la manière d'effectuer des actions 
                  ou des tâches. Essentielle pour les robots et systèmes d'automatisation.
                </li>
              </ul>
              <p>
                <strong>Implémentation technique :</strong> Dans les modèles neuronaux, cette mémoire est implémentée 
                à travers les poids du réseau. Pour des utilisations spécifiques, des bases de données externes 
                peuvent être intégrées aux systèmes d'IA.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg font-medium">Mémoire de contexte</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pl-4 text-muted-foreground">
              <p>
                La mémoire de contexte permet à l'IA de prendre en compte le contexte dans lequel elle opère, 
                en se souvenant des interactions et informations précédentes.
              </p>
              <p>
                <strong>Caractéristiques :</strong>
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Maintient la cohérence dans les interactions prolongées</li>
                <li>Permet de comprendre les références implicites</li>
                <li>Essentielle pour la personnalisation des réponses</li>
              </ul>
              <p>
                <strong>Applications :</strong> Chatbots, assistants virtuels, systèmes de recommandation personnalisés.
              </p>
              <p>
                <strong>Implémentation technique :</strong> Dans les modèles Transformer, le mécanisme d'attention 
                permet de capturer les relations contextuelles entre les mots, même à longue distance. Pour les 
                conversations étendues, des techniques comme l'augmentation de contexte ou l'utilisation de bases 
                de connaissances externes peuvent être employées.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg font-medium">Mémoire perceptive</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pl-4 text-muted-foreground">
              <p>
                La mémoire perceptive concerne le traitement et le stockage des informations sensorielles, 
                comme les images, les sons ou les données tactiles.
              </p>
              <p>
                <strong>Applications :</strong> Vision par ordinateur, reconnaissance vocale, robotique.
              </p>
              <p>
                <strong>Implémentation technique :</strong> Dans les réseaux convolutifs (CNN), les premières 
                couches agissent comme une mémoire perceptive, extrayant des caractéristiques visuelles de 
                base à partir des images. Des architectures comme ResNet ou EfficientNet permettent de stocker 
                et traiter des représentations visuelles complexes.
              </p>
              <p>
                Dans les modèles multimodaux comme CLIP ou DALL-E, la mémoire perceptive permet d'établir 
                des connexions entre le langage et les représentations visuelles.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-lg font-medium">Mémoire associative</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pl-4 text-muted-foreground">
              <p>
                La mémoire associative permet de récupérer des informations complètes à partir d'entrées 
                partielles, en établissant des liens entre différentes données.
              </p>
              <p>
                <strong>Caractéristiques :</strong>
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Récupération basée sur la similarité ou l'association</li>
                <li>Tolérance aux entrées incomplètes ou bruitées</li>
                <li>Capacité à généraliser à partir d'exemples</li>
              </ul>
              <p>
                <strong>Applications :</strong> Systèmes de recommandation, recherche d'information, classification d'images.
              </p>
              <p>
                <strong>Implémentation technique :</strong> Les réseaux de Hopfield et les mémoires adressables par contenu 
                (CAM) sont des exemples de systèmes à mémoire associative. Les techniques d'embedding permettent également 
                d'implémenter des fonctionnalités de mémoire associative en transformant les données en vecteurs dans un 
                espace multidimensionnel.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AIMemoryTypes;
