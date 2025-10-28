
import React from 'react';
import { Code, Search, Database, ArrowBigRight, Sparkles } from 'lucide-react';
import IASection from './IASection';

const RAGSection = () => {
  const detailsCard = (
    <>
      <h4 className="text-lg font-semibold mb-4">Architecture RAG</h4>
      <div className="mb-6 p-5 rounded-lg bg-secondary/30 border">
        <div className="aspect-[4/3] mb-4 bg-secondary/20 rounded-lg p-3 flex items-center justify-center">
          <svg viewBox="0 0 600 400" className="w-full h-full">
            {/* Database */}
            <rect x="50" y="50" width="150" height="100" rx="5" fill="rgb(var(--primary))" fillOpacity="0.1" stroke="rgb(var(--primary))" strokeWidth="1" />
            <text x="125" y="70" textAnchor="middle" fill="currentColor" fontSize="16">Base de connaissances</text>
            <path d="M90,100 L160,100 M90,120 L160,120 M90,140 L160,140" stroke="rgb(var(--primary))" strokeWidth="1" />
            
            {/* Search Vector DB */}
            <rect x="250" y="50" width="150" height="100" rx="5" fill="rgb(var(--primary))" fillOpacity="0.2" stroke="rgb(var(--primary))" strokeWidth="1" />
            <text x="325" y="70" textAnchor="middle" fill="currentColor" fontSize="16">Recherche</text>
            <text x="325" y="90" textAnchor="middle" fill="currentColor" fontSize="14">vectorielle</text>
            <circle cx="325" cy="120" r="20" fill="none" stroke="rgb(var(--primary))" strokeWidth="1" />
            <path d="M339,134 L350,145" stroke="rgb(var(--primary))" strokeWidth="2" />
            
            {/* LLM */}
            <rect x="450" y="50" width="150" height="100" rx="5" fill="rgb(var(--primary))" fillOpacity="0.3" stroke="rgb(var(--primary))" strokeWidth="1" />
            <text x="525" y="70" textAnchor="middle" fill="currentColor" fontSize="16">LLM</text>
            <path d="M480,100 C500,90 520,110 540,100" stroke="rgb(var(--primary))" strokeWidth="1" fill="none" />
            <path d="M480,120 C500,110 520,130 540,120" stroke="rgb(var(--primary))" strokeWidth="1" fill="none" />
            
            {/* Query */}
            <rect x="250" y="250" width="150" height="60" rx="5" fill="rgb(var(--primary))" fillOpacity="0.1" stroke="rgb(var(--primary))" strokeWidth="1" />
            <text x="325" y="285" textAnchor="middle" fill="currentColor" fontSize="16">Requête utilisateur</text>
            
            {/* Response */}
            <rect x="450" y="250" width="150" height="60" rx="5" fill="rgb(var(--primary))" fillOpacity="0.2" stroke="rgb(var(--primary))" strokeWidth="1" />
            <text x="525" y="285" textAnchor="middle" fill="currentColor" fontSize="16">Réponse enrichie</text>
            
            {/* Connecting arrows */}
            <path d="M200,100 L250,100" stroke="rgb(var(--primary))" strokeWidth="2" fill="none" marker-end="url(#arrowhead)" />
            <path d="M400,100 L450,100" stroke="rgb(var(--primary))" strokeWidth="2" fill="none" marker-end="url(#arrowhead)" />
            <path d="M325,250 L325,150" stroke="rgb(var(--primary))" strokeWidth="2" fill="none" marker-end="url(#arrowhead)" />
            <path d="M525,150 L525,250" stroke="rgb(var(--primary))" strokeWidth="2" fill="none" marker-end="url(#arrowhead)" />
            
            {/* Arrowhead marker */}
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="rgb(var(--primary))" />
              </marker>
            </defs>
          </svg>
        </div>
        <ol className="space-y-3 ml-4 list-decimal">
          <li>
            <span className="font-medium">Indexation des connaissances :</span>{" "}
            <span className="text-muted-foreground">Les documents sont transformés en vecteurs et stockés dans une base vectorielle</span>
          </li>
          <li>
            <span className="font-medium">Recherche sémantique :</span>{" "}
            <span className="text-muted-foreground">Lors d'une requête, le système identifie les informations pertinentes</span>
          </li>
          <li>
            <span className="font-medium">Augmentation :</span>{" "}
            <span className="text-muted-foreground">Le LLM reçoit à la fois la requête et les informations pertinentes</span>
          </li>
          <li>
            <span className="font-medium">Génération :</span>{" "}
            <span className="text-muted-foreground">Le LLM génère une réponse fondée sur les connaissances fournies</span>
          </li>
        </ol>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="p-4 rounded-lg border bg-secondary/20">
          <h5 className="font-medium mb-2 flex items-center gap-2">
            <Database className="h-4 w-4 text-primary" /> Types de bases de données
          </h5>
          <ul className="space-y-1 text-sm">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-primary block flex-shrink-0"></span>
              <span>Bases vectorielles (Pinecone, Weaviate)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-primary block flex-shrink-0"></span>
              <span>Bases hybrides (Postgres+pgvector)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-primary block flex-shrink-0"></span>
              <span>Bases graphes (Neo4j, Neptune)</span>
            </li>
          </ul>
        </div>
        
        <div className="p-4 rounded-lg border bg-secondary/20">
          <h5 className="font-medium mb-2 flex items-center gap-2">
            <Search className="h-4 w-4 text-primary" /> Techniques de recherche
          </h5>
          <ul className="space-y-1 text-sm">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-primary block flex-shrink-0"></span>
              <span>Recherche par similarité cosinus</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-primary block flex-shrink-0"></span>
              <span>Recherche hybride (mots-clés + vecteurs)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-primary block flex-shrink-0"></span>
              <span>Requêtes multi-étapes (décomposition)</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="p-4 rounded-lg bg-secondary/30 border mt-4">
        <h5 className="font-medium mb-2 flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" /> Innovations récentes
        </h5>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <ArrowBigRight className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
            <span><span className="font-medium text-foreground">Hypothetical Document Embeddings (HyDE)</span> - Génère un document hypothétique pour améliorer la recherche</span>
          </li>
          <li className="flex items-start gap-2">
            <ArrowBigRight className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
            <span><span className="font-medium text-foreground">RAG récursif</span> - Affine les recherches en plusieurs passes pour améliorer la précision</span>
          </li>
          <li className="flex items-start gap-2">
            <ArrowBigRight className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
            <span><span className="font-medium text-foreground">RAG multimodal</span> - Exploite des données de différentes modalités (texte, images, audio)</span>
          </li>
        </ul>
      </div>
    </>
  );

  return (
    <IASection
      sectionId="rag-section"
      icon={<Code size={32} className="text-primary" />}
      title="Retrieval-Augmented Generation (RAG)"
      description="Le RAG est une approche qui améliore les LLM en les connectant à des sources d'information externes, 
      leur permettant de fournir des réponses basées sur des données actuelles et vérifiables."
      benefits={[
        "Réduit les hallucinations en ancrant les réponses dans des sources fiables",
        "Permet d'accéder à des informations récentes non incluses dans l'entraînement",
        "Applications : assistants documentaires, systèmes de support client, recherche avancée"
      ]}
      isReversed={true}
      detailsCard={detailsCard}
      delay={1}
    />
  );
};

export default RAGSection;
