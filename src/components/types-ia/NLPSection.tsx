
import React from 'react';
import { MessageSquare, FileText, ArrowRight, Languages } from 'lucide-react';
import IASection from './IASection';

const NLPSection = () => {
  const detailsCard = (
    <>
      <h4 className="text-lg font-semibold mb-4">Tâches principales du NLP</h4>
      
      <div className="mb-6 p-5 rounded-lg bg-secondary/30 border">
        <div className="aspect-[3/2] mb-4 bg-secondary/20 rounded-lg p-3 flex items-center justify-center">
          <svg viewBox="0 0 700 400" className="w-full h-full">
            {/* Processing pipeline diagram */}
            {/* Text Input */}
            <rect x="50" y="50" width="600" height="40" rx="5" fill="rgb(var(--primary))" fillOpacity="0.1" stroke="rgb(var(--primary))" strokeWidth="1" />
            <text x="350" y="75" textAnchor="middle" fill="currentColor" fontSize="16">Texte brut</text>
            
            {/* Tokenization */}
            <rect x="50" y="110" width="600" height="40" rx="5" fill="rgb(var(--primary))" fillOpacity="0.15" stroke="rgb(var(--primary))" strokeWidth="1" />
            <text x="350" y="135" textAnchor="middle" fill="currentColor" fontSize="16">Tokenisation</text>
            
            {/* Word Embeddings */}
            <rect x="50" y="170" width="600" height="50" rx="5" fill="rgb(var(--primary))" fillOpacity="0.2" stroke="rgb(var(--primary))" strokeWidth="1" />
            <text x="350" y="195" textAnchor="middle" fill="currentColor" fontSize="16">Plongements lexicaux (Word Embeddings)</text>
            
            {/* Model (Transformer, LSTM, etc) */}
            <rect x="50" y="240" width="600" height="60" rx="5" fill="rgb(var(--primary))" fillOpacity="0.3" stroke="rgb(var(--primary))" strokeWidth="1" />
            <text x="350" y="270" textAnchor="middle" fill="currentColor" fontSize="16">Modèle NLP (Transformer, RNN, etc.)</text>
            
            {/* Task Output */}
            <rect x="150" y="320" width="120" height="40" rx="5" fill="rgb(var(--primary))" fillOpacity="0.25" stroke="rgb(var(--primary))" strokeWidth="1" />
            <text x="210" y="345" textAnchor="middle" fill="currentColor" fontSize="14">Classification</text>
            
            <rect x="290" y="320" width="120" height="40" rx="5" fill="rgb(var(--primary))" fillOpacity="0.25" stroke="rgb(var(--primary))" strokeWidth="1" />
            <text x="350" y="345" textAnchor="middle" fill="currentColor" fontSize="14">Génération</text>
            
            <rect x="430" y="320" width="120" height="40" rx="5" fill="rgb(var(--primary))" fillOpacity="0.25" stroke="rgb(var(--primary))" strokeWidth="1" />
            <text x="490" y="345" textAnchor="middle" fill="currentColor" fontSize="14">Extraction</text>
            
            {/* Connecting arrows */}
            <line x1="350" y1="90" x2="350" y2="110" stroke="rgb(var(--primary))" strokeWidth="2" marker-end="url(#nlp-arrow)" />
            <line x1="350" y1="150" x2="350" y2="170" stroke="rgb(var(--primary))" strokeWidth="2" marker-end="url(#nlp-arrow)" />
            <line x1="350" y1="220" x2="350" y2="240" stroke="rgb(var(--primary))" strokeWidth="2" marker-end="url(#nlp-arrow)" />
            <line x1="210" y1="300" x2="210" y2="320" stroke="rgb(var(--primary))" strokeWidth="2" marker-end="url(#nlp-arrow)" />
            <line x1="350" y1="300" x2="350" y2="320" stroke="rgb(var(--primary))" strokeWidth="2" marker-end="url(#nlp-arrow)" />
            <line x1="490" y1="300" x2="490" y2="320" stroke="rgb(var(--primary))" strokeWidth="2" marker-end="url(#nlp-arrow)" />
            
            <line x1="350" y1="300" x2="210" y2="320" stroke="rgb(var(--primary))" strokeWidth="2" marker-end="url(#nlp-arrow)" />
            <line x1="350" y1="300" x2="490" y2="320" stroke="rgb(var(--primary))" strokeWidth="2" marker-end="url(#nlp-arrow)" />
            
            <defs>
              <marker id="nlp-arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="rgb(var(--primary))" />
              </marker>
            </defs>
          </svg>
        </div>
      </div>
      
      <div className="space-y-3 mb-6">
        <div className="p-3 rounded-lg bg-secondary/30 flex items-start">
          <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">1</span>
          <div>
            <h5 className="font-medium">Analyse grammaticale</h5>
            <p className="text-sm text-muted-foreground">Tokenisation, analyse syntaxique, étiquetage grammatical</p>
          </div>
        </div>
        <div className="p-3 rounded-lg bg-secondary/30 flex items-start">
          <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">2</span>
          <div>
            <h5 className="font-medium">Compréhension sémantique</h5>
            <p className="text-sm text-muted-foreground">Extraction d'entités, analyse de sentiment, résolution de références</p>
          </div>
        </div>
        <div className="p-3 rounded-lg bg-secondary/30 flex items-start">
          <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">3</span>
          <div>
            <h5 className="font-medium">Génération de texte</h5>
            <p className="text-sm text-muted-foreground">Traduction, résumé, dialogue, création de contenu</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="p-4 rounded-lg border bg-secondary/20">
          <h5 className="font-medium mb-2 flex items-center gap-2">
            <FileText className="h-4 w-4 text-primary" /> Applications pratiques
          </h5>
          <ul className="space-y-1 text-sm">
            <li className="flex items-start gap-2">
              <ArrowRight className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
              <span>Assistants virtuels & chatbots</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
              <span>Analyse de sentiment</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
              <span>Traduction automatique</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
              <span>Résumé automatique</span>
            </li>
          </ul>
        </div>
        
        <div className="p-4 rounded-lg border bg-secondary/20">
          <h5 className="font-medium mb-2 flex items-center gap-2">
            <Languages className="h-4 w-4 text-primary" /> Technologies clés
          </h5>
          <ul className="space-y-1 text-sm">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-primary block flex-shrink-0"></span>
              <span><span className="font-medium">Word2Vec/GloVe</span> - Plongements lexicaux</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-primary block flex-shrink-0"></span>
              <span><span className="font-medium">BERT</span> - Encodeur bidirectionnel</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-primary block flex-shrink-0"></span>
              <span><span className="font-medium">GPT</span> - Génération par autoregression</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-primary block flex-shrink-0"></span>
              <span><span className="font-medium">T5</span> - Modèle texte-à-texte</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="p-4 rounded-lg bg-secondary/20 border mb-4">
        <h5 className="font-medium mb-2">Exemple : Analyse de sentiment</h5>
        <div className="text-sm space-y-2">
          <div className="p-2 rounded bg-secondary/30 border-l-4 border-green-500">
            <p className="text-xs font-medium">Texte : "J'ai adoré ce film, c'était extraordinaire !"</p>
            <p className="text-xs text-muted-foreground mt-1">→ Sentiment : Positif (0.92)</p>
          </div>
          <div className="p-2 rounded bg-secondary/30 border-l-4 border-red-500">
            <p className="text-xs font-medium">Texte : "Service client déplorable, je ne reviendrai jamais."</p>
            <p className="text-xs text-muted-foreground mt-1">→ Sentiment : Négatif (0.87)</p>
          </div>
          <div className="p-2 rounded bg-secondary/30 border-l-4 border-yellow-500">
            <p className="text-xs font-medium">Texte : "Le produit est correct mais livraison trop lente."</p>
            <p className="text-xs text-muted-foreground mt-1">→ Sentiment : Mixte (Positif 0.51, Négatif 0.49)</p>
          </div>
        </div>
      </div>
      
      <p className="mt-4 text-sm text-muted-foreground">
        L'avènement des transformers et de l'attention a révolutionné le NLP, permettant 
        une meilleure capture des dépendances à longue distance dans le texte.
        Les modèles pré-entraînés comme BERT et GPT ont établi de nouveaux standards
        de performance dans presque toutes les tâches de NLP.
      </p>
    </>
  );

  return (
    <IASection
      sectionId="nlp-section"
      icon={<MessageSquare size={32} className="text-primary" />}
      title="Traitement du Langage Naturel (NLP)"
      description="Le NLP est un domaine de l'IA qui vise à permettre aux machines de comprendre, 
      interpréter et générer du langage humain de manière utile et significative."
      benefits={[
        "Couvre la compréhension et la génération de texte dans plusieurs langues",
        "Applications : traduction automatique, analyse de sentiment, chatbots",
        "Technologies: word embeddings, transformers, BERT, T5"
      ]}
      isReversed={true}
      detailsCard={detailsCard}
      delay={3}
    />
  );
};

export default NLPSection;
