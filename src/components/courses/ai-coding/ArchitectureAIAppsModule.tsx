import React from 'react';
import CodeExample from '@/components/courses/CodeExample';
import ZoomOn from '@/components/courses/ZoomOn';
import Illustration from '@/components/courses/Illustration';

const ArchitectureAIAppsModule: React.FC = () => {
  return (
    <div className="space-y-4">
      <p>
        L'architecture logicielle des applications intégrant l'IA présente des défis uniques et requiert une conception soignée. 
        Une bonne architecture doit non seulement prendre en compte les aspects traditionnels du développement logiciel, mais aussi 
        les particularités des modèles d'IA, comme leur nature probabiliste, leurs besoins en ressources et leur évolution rapide.
      </p>

      <Illustration 
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" 
        alt="Architecture logicielle visualisée comme un plan complexe"
        caption="Une architecture bien conçue est essentielle pour créer des applications IA robustes, évolutives et maintenables"
        width="2/3"
      />

      <div className="mt-4">
        <h4 className="font-medium mb-3">Principes fondamentaux d'architecture pour les applications IA</h4>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="border rounded-lg p-4">
            <h5 className="font-medium mb-2">Séparation des préoccupations</h5>
            <p className="text-sm">
              Isoler les composants d'IA du reste de l'application permet de les développer, tester et mettre à jour indépendamment. 
              Cette séparation facilite également le remplacement des modèles sans affecter l'ensemble du système.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h5 className="font-medium mb-2">Architecture en couches</h5>
            <p className="text-sm">
              Organiser l'application en couches distinctes (présentation, logique métier, accès aux données, traitement IA) 
              améliore la maintenabilité et facilite l'évolution des différentes parties du système au fil du temps.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h5 className="font-medium mb-2">Conception pilotée par les données</h5>
            <p className="text-sm">
              Les modèles d'IA étant fortement dépendants des données, l'architecture doit prévoir des pipelines robustes 
              pour l'ingestion, le nettoyage, la transformation et l'alimentation des modèles en données.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h5 className="font-medium mb-2">Scalabilité</h5>
            <p className="text-sm">
              Les modèles d'IA, particulièrement les LLMs, peuvent nécessiter d'importantes ressources de calcul. 
              L'architecture doit permettre la mise à l'échelle horizontale et verticale pour gérer les charges variables.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h5 className="font-medium mb-2">Observabilité</h5>
            <p className="text-sm">
              La nature parfois imprévisible des modèles d'IA nécessite des systèmes robustes de logging, monitoring 
              et alerting pour surveiller les performances, la précision et détecter les comportements anormaux.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h5 className="font-medium mb-2">Versionnement</h5>
            <p className="text-sm">
              Le versionnement strict des modèles, des données d'entraînement et des interfaces d'API est crucial 
              pour maintenir la cohérence et permettre des rollbacks en cas de problème avec une nouvelle version.
            </p>
          </div>
        </div>
      </div>

      <ZoomOn title="Types d'intégration de l'IA dans les applications">
        <p>
          Il existe plusieurs approches pour intégrer l'intelligence artificielle dans une application, chacune avec ses avantages et inconvénients :
        </p>
        <div className="overflow-x-auto mt-2">
          <table className="min-w-full text-sm">
            <thead className="bg-muted/30">
              <tr>
                <th className="p-2 text-left">Type d'intégration</th>
                <th className="p-2 text-left">Description</th>
                <th className="p-2 text-left">Avantages</th>
                <th className="p-2 text-left">Inconvénients</th>
                <th className="p-2 text-left">Cas d'usage</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-2 font-medium">API tierces</td>
                <td className="p-2">Utilisation de services d'IA comme OpenAI, Google Cloud AI, ou Azure Cognitive Services via des appels API</td>
                <td className="p-2">Rapide à implémenter, pas d'infrastructure spécialisée, mise à jour automatique des modèles</td>
                <td className="p-2">Coûts basés sur l'utilisation, latence réseau, dépendance à un tiers, limites de personnalisation</td>
                <td className="p-2">Startups, prototypes, applications non critiques, cas d'usage standards</td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-medium">Modèles embarqués</td>
                <td className="p-2">Exécution de modèles légers directement dans l'application (navigateur client ou serveur)</td>
                <td className="p-2">Confidentialité des données, fonctionnement hors ligne, latence réduite, pas de coûts par requête</td>
                <td className="p-2">Capacités limitées, empreinte mémoire, mise à jour manuelle des modèles</td>
                <td className="p-2">Applications mobiles, traitement d'images simples, analytics sur appareil, détection en périphérie</td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-medium">Infrastructure dédiée</td>
                <td className="p-2">Déploiement et hébergement de vos propres modèles sur une infrastructure spécialisée</td>
                <td className="p-2">Contrôle total, personnalisation avancée, confidentialité, modèles propriétaires</td>
                <td className="p-2">Complexité, coût initial élevé, gestion de l'infrastructure, expertise requise</td>
                <td className="p-2">Entreprises avec données sensibles, cas d'usage spécialisés, modèles propriétaires</td>
              </tr>
              <tr className="border-t">
                <td className="p-2 font-medium">Approche hybride</td>
                <td className="p-2">Combinaison de services cloud pour les tâches intensives et de modèles légers sur appareil pour certaines fonctions</td>
                <td className="p-2">Flexibilité, résilience, optimisation des coûts, expérience utilisateur améliorée</td>
                <td className="p-2">Complexité d'architecture, synchronisation des modèles, logique de basculement</td>
                <td className="p-2">Applications sophistiquées nécessitant à la fois performance et personnalisation</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ZoomOn>

      <div className="mt-6">
        <h4 className="font-medium mb-3">Patterns d'architecture pour les applications IA</h4>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h5 className="font-medium mb-2">Architecture orientée microservices</h5>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-2/3">
                <p className="text-sm">
                  Décomposer l'application en services autonomes, indépendants et spécialisés. Les fonctionnalités d'IA sont 
                  encapsulées dans des services dédiés qui peuvent être développés, déployés et mis à l'échelle indépendamment.
                </p>
                <div className="mt-2">
                  <h6 className="text-sm font-medium">Avantages pour les applications IA :</h6>
                  <ul className="list-disc pl-5 text-sm mt-1 space-y-1">
                    <li>Mise à l'échelle indépendante des composants gourmands en ressources</li>
                    <li>Facilité pour remplacer ou mettre à jour des modèles spécifiques</li>
                    <li>Isolation des défaillances d'un modèle particulier</li>
                    <li>Possibilité d'utiliser différentes technologies/langages adaptés à chaque modèle</li>
                  </ul>
                </div>
              </div>
              <div className="md:w-1/3 bg-muted/20 p-3 rounded-lg">
                <p className="text-xs font-medium">Exemple concret :</p>
                <p className="text-xs mt-1">Une plateforme e-commerce où les recommandations de produits, la génération de descriptions, la modération de contenu et la détection de fraude sont chacune gérées par des microservices IA séparés pouvant évoluer indépendamment selon la charge.</p>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h5 className="font-medium mb-2">Architecture par événements (Event-driven)</h5>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-2/3">
                <p className="text-sm">
                  Basée sur la production, détection et consommation d'événements. Les composants communiquent de façon asynchrone 
                  via des événements, ce qui découple le producteur du consommateur et permet un traitement parallèle efficace.
                </p>
                <div className="mt-2">
                  <h6 className="text-sm font-medium">Avantages pour les applications IA :</h6>
                  <ul className="list-disc pl-5 text-sm mt-1 space-y-1">
                    <li>Traitement asynchrone des requêtes d'inférence potentiellement longues</li>
                    <li>Meilleure gestion des pics de charge via des files d'attente</li>
                    <li>Possibilité de rejouer des événements pour réentraîner des modèles</li>
                    <li>Résilience accrue face aux pannes ou aux latences élevées</li>
                  </ul>
                </div>
              </div>
              <div className="md:w-1/3 bg-muted/20 p-3 rounded-lg">
                <p className="text-xs font-medium">Exemple concret :</p>
                <p className="text-xs mt-1">Système d'analyse de sentiments pour les réseaux sociaux où les nouveaux posts déclenchent des événements qui sont mis en file d'attente, traités de façon asynchrone par différents modèles d'analyse, puis les résultats sont publiés comme nouveaux événements consommés par un tableau de bord en temps réel.</p>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h5 className="font-medium mb-2">Architecture sans serveur (Serverless)</h5>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-2/3">
                <p className="text-sm">
                  Exécuter du code en réponse à des événements sans gérer l'infrastructure sous-jacente. Les fonctions sont déclenchées 
                  à la demande et facturées uniquement pendant leur exécution effective.
                </p>
                <div className="mt-2">
                  <h6 className="text-sm font-medium">Avantages pour les applications IA :</h6>
                  <ul className="list-disc pl-5 text-sm mt-1 space-y-1">
                    <li>Mise à l'échelle automatique pour gérer des charges variables</li>
                    <li>Réduction des coûts pour les workloads intermittents</li>
                    <li>Simplification de déploiement et de gestion</li>
                    <li>Concentration sur la logique métier plutôt que l'infrastructure</li>
                  </ul>
                </div>
              </div>
              <div className="md:w-1/3 bg-muted/20 p-3 rounded-lg">
                <p className="text-xs font-medium">Exemple concret :</p>
                <p className="text-xs mt-1">Application de traitement d'images qui utilise des fonctions serverless pour déclencher des analyses IA à chaque nouvel upload d'image, permettant un traitement parallèle massif lors d'importations groupées sans infrastructure permanente.</p>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-4">
            <h5 className="font-medium mb-2">Architecture en couches avec API Gateway</h5>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-2/3">
                <p className="text-sm">
                  Utilisation d'une API Gateway comme point d'entrée unique pour toutes les requêtes clients, qui les route ensuite 
                  vers les services appropriés et orchestre les réponses.
                </p>
                <div className="mt-2">
                  <h6 className="text-sm font-medium">Avantages pour les applications IA :</h6>
                  <ul className="list-disc pl-5 text-sm mt-1 space-y-1">
                    <li>Gestion centralisée de l'authentification et des autorisations</li>
                    <li>Application de limites de taux et politiques de throttling</li>
                    <li>Orchestration de requêtes vers différents modèles d'IA</li>
                    <li>Caching des résultats pour améliorer les performances</li>
                    <li>Traduction des formats de requêtes/réponses entre clients et services</li>
                  </ul>
                </div>
              </div>
              <div className="md:w-1/3 bg-muted/20 p-3 rounded-lg">
                <p className="text-xs font-medium">Exemple concret :</p>
                <p className="text-xs mt-1">Plateforme d'IA conversationnelle où l'API Gateway gère l'authentification des utilisateurs, route les requêtes vers différents modèles linguistiques selon la complexité ou le coût, applique des limites d'utilisation, et orchestre les réponses de plusieurs services spécialisés (traduction, génération d'images, etc.).</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CodeExample 
        title="Architecture microservices pour une application IA de traitement de documents"
        language="typescript"
        code={`// docker-compose.yml
// Architecture d'une application de traitement automatique de documents avec IA

version: '3.8'

services:
  # API Gateway - Point d'entrée unique pour toutes les requêtes
  api-gateway:
    image: api-gateway:latest
    ports:
      - "8080:8080"
    environment:
      - AUTH_SERVICE_URL=http://auth-service:3000
      - DOCUMENT_SERVICE_URL=http://document-service:3001
      - OCR_SERVICE_URL=http://ocr-service:3002
      - CLASSIFICATION_SERVICE_URL=http://classification-service:3003
      - EXTRACTION_SERVICE_URL=http://extraction-service:3004
    depends_on:
      - auth-service
      - document-service
      - ocr-service
      - classification-service
      - extraction-service

  # Service d'authentification et gestion des utilisateurs
  auth-service:
    image: auth-service:latest
    environment:
      - DB_CONNECTION_STRING=mongodb://mongo-auth:27017/auth
      - JWT_SECRET=your_jwt_secret_here
    depends_on:
      - mongo-auth

  # Service de gestion des documents (métadonnées, stockage)
  document-service:
    image: document-service:latest
    environment:
      - DB_CONNECTION_STRING=mongodb://mongo-docs:27017/documents
      - S3_BUCKET=document-storage
      - S3_REGION=us-east-1
    depends_on:
      - mongo-docs

  # Service OCR - Reconnaissance optique de caractères
  ocr-service:
    image: ocr-service:latest
    environment:
      - TESSERACT_LANG=fra+eng
      - REDIS_URL=redis://redis:6379
      - MODEL_PATH=/models/ocr-model.onnx
    volumes:
      - ./models:/models
    deploy:
      resources:
        limits:
          cpus: '2'
          memory: 4G
    depends_on:
      - redis

  # Service de classification de documents par IA
  classification-service:
    image: classification-service:latest
    environment:
      - MODEL_PATH=/models/document-classifier.h5
      - REDIS_URL=redis://redis:6379
      - THRESHOLD=0.75
    volumes:
      - ./models:/models
    deploy:
      resources:
        limits:
          cpus: '2'
          memory: 4G
    depends_on:
      - redis

  # Service d'extraction d'informations (entités, données clés)
  extraction-service:
    image: extraction-service:latest
    environment:
      - NER_MODEL_PATH=/models/ner-model
      - REDIS_URL=redis://redis:6379
      - OPENAI_API_KEY=\${OPENAI_API_KEY}
      - USE_HYBRID_APPROACH=true
    volumes:
      - ./models:/models
    depends_on:
      - redis

  # Service de stockage d'objets compatible S3
  minio:
    image: minio/minio
    ports:
      - "9000:9000"
    volumes:
      - minio-data:/data
    environment:
      - MINIO_ACCESS_KEY=minioadmin
      - MINIO_SECRET_KEY=minioadmin
    command: server /data

  # Base de données pour le service d'authentification
  mongo-auth:
    image: mongo:5
    volumes:
      - mongo-auth-data:/data/db

  # Base de données pour les métadonnées des documents
  mongo-docs:
    image: mongo:5
    volumes:
      - mongo-docs-data:/data/db

  # Cache Redis pour les résultats intermédiaires et le throttling
  redis:
    image: redis:6
    volumes:
      - redis-data:/data

  # File d'attente de messages pour la communication entre services
  rabbitmq:
    image: rabbitmq:3-management
    ports:
      - "5672:5672"
      - "15672:15672"
    volumes:
      - rabbitmq-data:/var/lib/rabbitmq

  # Interface de monitoring et administration
  monitoring:
    image: monitoring-dashboard:latest
    ports:
      - "3000:3000"
    environment:
      - PROMETHEUS_URL=http://prometheus:9090
      - MONGODB_URL=mongodb://mongo-metrics:27017/metrics
    depends_on:
      - prometheus
      - mongo-metrics

  # Collecte de métriques
  prometheus:
    image: prom/prometheus
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
      - prometheus-data:/prometheus

  # Base de données pour les métriques et logs
  mongo-metrics:
    image: mongo:5
    volumes:
      - mongo-metrics-data:/data/db

volumes:
  minio-data:
  mongo-auth-data:
  mongo-docs-data:
  redis-data:
  rabbitmq-data:
  prometheus-data:
  mongo-metrics-data:`}
        explanation="Ce fichier docker-compose.yml illustre une architecture microservices complète pour une application de traitement de documents intelligente. Chaque composant d'IA (OCR, classification, extraction d'entités) est implémenté comme un service indépendant qui peut être développé, déployé et mis à l'échelle séparément. L'architecture inclut également des services de support comme Redis pour le cache, RabbitMQ pour la messagerie asynchrone, et Prometheus pour le monitoring. Cette approche modulaire permet d'adapter les ressources à chaque composant selon ses besoins spécifiques."
      />

      <div className="mt-6">
        <h4 className="font-medium mb-3">Considérations spécifiques à l'intégration des LLMs</h4>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h5 className="font-medium mb-2">Gestion du contexte et des prompts</h5>
            <p className="text-sm">
              Les LLMs nécessitent des stratégies particulières pour la gestion du contexte des conversations et l'optimisation des prompts:
            </p>
            <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
              <li><strong>Prompt engineering</strong>: Conception soignée des prompts système et instructions pour guider le comportement du modèle</li>
              <li><strong>Banque de prompts</strong>: Stockage et versionnement des prompts éprouvés comme des ressources précieuses</li>
              <li><strong>Gestion du contexte</strong>: Mécanismes pour stocker et transmettre le contexte entre les interactions utilisateur</li>
              <li><strong>Fenêtre de contexte</strong>: Stratégies pour gérer les limitations de taille du contexte (résumés, extraction d'information clé)</li>
            </ul>
          </div>

          <div className="border rounded-lg p-4">
            <h5 className="font-medium mb-2">Latence et optimisation des coûts</h5>
            <p className="text-sm">
              Les appels aux LLMs peuvent être coûteux et lents. Une bonne architecture doit intégrer des stratégies d'optimisation:
            </p>
            <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
              <li><strong>Caching</strong>: Mise en cache des réponses pour les requêtes fréquentes ou similaires</li>
              <li><strong>Réduction des tokens</strong>: Prétraitement des entrées pour minimiser la taille des requêtes</li>
              <li><strong>Appels en parallèle</strong>: Organisation des requêtes pour maximiser la parallélisation lorsque possible</li>
              <li><strong>Modèles en cascade</strong>: Utilisation de modèles plus petits/moins coûteux pour les tâches simples</li>
              <li><strong>Streaming</strong>: Configuration du streaming des réponses pour une meilleure expérience utilisateur</li>
            </ul>
          </div>

          <div className="border rounded-lg p-4">
            <h5 className="font-medium mb-2">Augmentation et filtrage</h5>
            <p className="text-sm">
              Les approches architecturales pour améliorer les capacités et la sécurité des LLMs:
            </p>
            <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
              <li><strong>RAG (Retrieval Augmented Generation)</strong>: Architectures pour enrichir les LLMs avec des données externes spécifiques</li>
              <li><strong>Outils et plugins</strong>: Conception modulaire permettant au LLM d'utiliser des outils externes</li>
              <li><strong>Filtrage de contenu</strong>: Composants dédiés pour détecter et bloquer les contenus inappropriés</li>
              <li><strong>Évaluation des réponses</strong>: Systèmes automatisés pour vérifier la qualité et la pertinence des réponses</li>
            </ul>
          </div>
        </div>
      </div>

      <CodeExample 
        title="Architecture pour une application React avec intégration LLM"
        language="typescript"
        code={`// src/services/ai/llmService.ts
// Service centralisant les interactions avec les LLMs

import { createParser } from 'eventsource-parser';

// Types pour une gestion stricte des interactions avec le LLM
export type Message = {
  role: 'system' | 'user' | 'assistant' | 'function';
  content: string;
  name?: string;
  function_call?: {
    name: string;
    arguments: string;
  };
};

export type AIModelType = 'gpt-3.5-turbo' | 'gpt-4' | 'claude-2.1' | 'gemini-pro';

export interface LLMCompletionOptions {
  messages: Message[];
  model: AIModelType;
  temperature?: number;
  stream?: boolean;
  max_tokens?: number;
  functions?: any[];
  function_call?: 'auto' | 'none' | { name: string };
}

export interface LLMResponse {
  content: string;
  function_call?: {
    name: string;
    arguments: any;
  };
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

// Gestionnaire de cache pour réduire les appels API et les coûts
class LLMCache {
  private cache: Map<string, LLMResponse> = new Map();
  private ttl: number = 24 * 60 * 60 * 1000; // 24 heures par défaut
  
  constructor(ttlMs?: number) {
    if (ttlMs) this.ttl = ttlMs;
  }
  
  generateKey(options: LLMCompletionOptions): string {
    // Créer une clé unique basée sur les messages et les paramètres
    // Note: On exclut les paramètres comme temperature qui influencent la variabilité
    const relevantOptions = {
      messages: options.messages,
      model: options.model,
      max_tokens: options.max_tokens,
      functions: options.functions,
      function_call: options.function_call
    };
    
    return JSON.stringify(relevantOptions);
  }
  
  get(options: LLMCompletionOptions): LLMResponse | undefined {
    const key = this.generateKey(options);
    const cached = this.cache.get(key);
    return cached;
  }
  
  set(options: LLMCompletionOptions, response: LLMResponse): void {
    const key = this.generateKey(options);
    this.cache.set(key, response);
    
    // Expirer l'entrée après le TTL
    setTimeout(() => {
      this.cache.delete(key);
    }, this.ttl);
  }
  
  clear(): void {
    this.cache.clear();
  }
}

// Configuration des modèles avec fallbacks
const modelConfig = {
  primary: 'gpt-4' as AIModelType,
  fallback: 'gpt-3.5-turbo' as AIModelType,
  lastResort: 'gemini-pro' as AIModelType,
};

// Service principal pour interagir avec les LLMs
export class LLMService {
  private apiKey: string;
  private baseUrl: string;
  private cache: LLMCache;
  
  constructor(apiKey: string, baseUrl: string = 'https://api.openai.com/v1') {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
    this.cache = new LLMCache();
  }
  
  async complete(options: LLMCompletionOptions): Promise<LLMResponse> {
    // Vérifier le cache d'abord si la température est basse (réponses déterministes)
    if (options.temperature !== undefined && options.temperature < 0.1 && !options.stream) {
      const cached = this.cache.get(options);
      if (cached) return cached;
    }
    
    try {
      const response = await this.makeAPIRequest(options);
      
      // Mettre en cache si non-streaming et déterministe
      if (!options.stream && options.temperature !== undefined && options.temperature < 0.1) {
        this.cache.set(options, response);
      }
      
      return response;
    } catch (error: any) {
      console.error("LLM request failed:", error);
      
      // Stratégie de fallback en cas d'erreur
      if (error.status === 429 && options.model === modelConfig.primary) {
        console.log("Rate limited on primary model, falling back to secondary model");
        options.model = modelConfig.fallback;
        return this.complete(options);
      }
      
      throw error;
    }
  }
  
  async completeStream(options: LLMCompletionOptions, 
                      onChunk: (chunk: string) => void, 
                      onDone: (fullText: string) => void): Promise<void> {
    options.stream = true;
    
    try {
      const response = await fetch(\`\${this.baseUrl}/chat/completions\`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': \`Bearer \${this.apiKey}\`
        },
        body: JSON.stringify({
          model: options.model,
          messages: options.messages,
          temperature: options.temperature ?? 0.7,
          max_tokens: options.max_tokens,
          stream: true,
          functions: options.functions,
          function_call: options.function_call
        }),
      });
      
      if (!response.ok) {
        throw new Error(\`API request failed with status \${response.status}\`);
      }
      
      if (!response.body) {
        throw new Error("Response body is null");
      }
      
      // Traiter le flux de données
      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      const parser = createParser(event => {
        if (event.type === 'event' && event.data !== '[DONE]') {
          try {
            const chunk = JSON.parse(event.data);
            const content = chunk.choices[0]?.delta?.content || '';
            if (content) onChunk(content);
          } catch (e) {
            console.error("Error parsing SSE chunk", e);
          }
        }
      });
      
      let fullText = '';
      
      // Lire le flux
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        const text = decoder.decode(value);
        parser.feed(text);
        
        // Extraire le contenu pour reconstruire le texte complet
        const matches = text.match(/"content":"([^"]*)"/g);
        if (matches) {
          for (const match of matches) {
            const content = match.replace('"content":"', '').replace('"', '');
            fullText += content;
          }
        }
      }
      
      onDone(fullText);
      
    } catch (error) {
      console.error("Streaming request failed:", error);
      throw error;
    }
  }
  
  private async makeAPIRequest(options: LLMCompletionOptions): Promise<LLMResponse> {
    const response = await fetch(\`\${this.baseUrl}/chat/completions\`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': \`Bearer \${this.apiKey}\`
      },
      body: JSON.stringify({
        model: options.model,
        messages: options.messages,
        temperature: options.temperature ?? 0.7,
        max_tokens: options.max_tokens,
        functions: options.functions,
        function_call: options.function_call
      }),
    });
    
    if (!response.ok) {
      throw {
        status: response.status,
        message: \`API request failed with status \${response.status}\`
      };
    }
    
    const data = await response.json();
    
    return {
      content: data.choices[0].message.content || '',
      function_call: data.choices[0].message.function_call,
      usage: data.usage
    };
  }
}

// Export de l'instance singleton du service LLM
export const llmService = new LLMService(
  process.env.REACT_APP_OPENAI_API_KEY || '',
);

// Hook personnalisé pour React
// src/hooks/useLLM.ts
import { useState, useCallback } from 'react';
import { llmService, Message, AIModelType, LLMResponse } from '../services/ai/llmService';

interface UseLLMOptions {
  model?: AIModelType;
  temperature?: number;
  maxTokens?: number;
}

export function useLLM(defaultOptions: UseLLMOptions = {}) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [streamingText, setStreamingText] = useState<string>('');
  
  const complete = useCallback(async (
    messages: Message[],
    options: Partial<UseLLMOptions> = {}
  ): Promise<LLMResponse> => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await llmService.complete({
        messages,
        model: options.model || defaultOptions.model || 'gpt-3.5-turbo',
        temperature: options.temperature ?? defaultOptions.temperature ?? 0.7,
        max_tokens: options.maxTokens ?? defaultOptions.maxTokens,
      });
      
      return response;
    } catch (err) {
      setError(err as Error);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [defaultOptions]);
  
  const streamComplete = useCallback((
    messages: Message[],
    options: Partial<UseLLMOptions> & {
      onChunk?: (chunk: string) => void,
      onDone?: (fullText: string) => void
    } = {}
  ) => {
    setLoading(true);
    setError(null);
    setStreamingText('');
    
    let fullText = '';
    
    const handleChunk = (chunk: string) => {
      fullText += chunk;
      setStreamingText(prev => prev + chunk);
      options.onChunk?.(chunk);
    };
    
    const handleDone = (text: string) => {
      setLoading(false);
      options.onDone?.(text);
    };
    
    llmService.completeStream(
      {
        messages,
        model: options.model || defaultOptions.model || 'gpt-3.5-turbo',
        temperature: options.temperature ?? defaultOptions.temperature ?? 0.7,
        max_tokens: options.maxTokens ?? defaultOptions.maxTokens,
        stream: true
      },
      handleChunk,
      handleDone
    ).catch(err => {
      setLoading(false);
      setError(err);
    });
    
    // Retourner une fonction pour annuler le streaming si nécessaire
    return {
      cancel: () => {
        setLoading(false);
        // Note: l'annulation réelle nécessiterait un AbortController au niveau du fetch
      }
    };
  }, [defaultOptions]);
  
  return {
    complete,
    streamComplete,
    loading,
    error,
    streamingText
  };
}`}
        explanation="Ce code présente une architecture pour intégrer des LLMs (grands modèles de langage) dans une application React. Il montre comment créer un service centralisé qui gère les interactions avec les APIs, implémente des stratégies d'optimisation comme le caching et les fallbacks entre modèles, et expose une interface simple via un hook React. L'architecture inclut également le streaming des réponses pour une meilleure expérience utilisateur. Cette approche isole la complexité des interactions avec les LLMs du reste de l'application et facilite la maintenance."
      />

      <div className="mt-6">
        <h4 className="font-medium mb-3">Défis de sécurité spécifiques aux applications IA</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded-lg p-4">
            <h5 className="font-medium mb-2">Injection de prompts</h5>
            <p className="text-sm">
              Les attaques par injection de prompts tentent de manipuler le comportement des modèles en incluant des instructions 
              malveillantes dans les entrées utilisateur.
            </p>
            <div className="mt-2">
              <h6 className="text-sm font-medium">Stratégies de protection :</h6>
              <ul className="list-disc pl-5 text-sm mt-1 space-y-1">
                <li>Validation et sanitisation strictes des entrées utilisateur</li>
                <li>Utilisation de prompts système verrouillés et inaccessibles aux utilisateurs</li>
                <li>Séparation des entrées utilisateur et des instructions système</li>
                <li>Mise en place de détecteurs d'injection de prompts</li>
              </ul>
            </div>
          </div>
          
          <div className="border rounded-lg p-4">
            <h5 className="font-medium mb-2">Fuites de données et confidentialité</h5>
            <p className="text-sm">
              Les LLMs peuvent mémoriser des données d'entraînement ou révéler des informations sensibles dans leurs réponses.
            </p>
            <div className="mt-2">
              <h6 className="text-sm font-medium">Stratégies de protection :</h6>
              <ul className="list-disc pl-5 text-sm mt-1 space-y-1">
                <li>Ne pas envoyer de données PII (Personally Identifiable Information) aux APIs externes</li>
                <li>Utilisation de modèles fine-tunés sur des données propres et anonymisées</li>
                <li>Mise en place de filtres de sortie pour détecter les informations sensibles</li>
                <li>Considérer des solutions locales ou auto-hébergées pour les données hautement sensibles</li>
              </ul>
            </div>
          </div>
          
          <div className="border rounded-lg p-4">
            <h5 className="font-medium mb-2">Jailbreaking et contournement de restrictions</h5>
            <p className="text-sm">
              Tentatives de contourner les guardrails et restrictions implémentés dans les modèles pour obtenir des contenus inappropriés.
            </p>
            <div className="mt-2">
              <h6 className="text-sm font-medium">Stratégies de protection :</h6>
              <ul className="list-disc pl-5 text-sm mt-1 space-y-1">
                <li>Implémentation de filtres à plusieurs niveaux (entrée et sortie)</li>
                <li>Utilisation de modèles de modération en parallèle</li>
                <li>Mise à jour régulière des défenses face aux nouvelles techniques</li>
                <li>Limitation du contexte fourni au modèle aux informations nécessaires</li>
              </ul>
            </div>
          </div>
          
          <div className="border rounded-lg p-4">
            <h5 className="font-medium mb-2">Déni de service et abus d'API</h5>
            <p className="text-sm">
              Exploitation des APIs d'IA pour épuiser les ressources ou générer des coûts excessifs.
            </p>
            <div className="mt-2">
              <h6 className="text-sm font-medium">Stratégies de protection :</h6>
              <ul className="list-disc pl-5 text-sm mt-1 space-y-1">
                <li>Mise en place de quotas et limites de taux par utilisateur</li>
                <li>Systèmes de détection d'anomalies dans l'utilisation</li>
                <li>Implémentation de budgets maximums par projet/utilisateur</li>
                <li>Monitoring en temps réel des coûts et alertes automatiques</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Illustration 
        src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" 
        alt="Équipe travaillant sur l'architecture d'une application IA"
        caption="Une architecture bien pensée est fondamentale pour créer des applications IA robustes, sécurisées et évolutives"
        width="full"
      />

      <p className="mt-6">
        L'architecture d'une application IA est un élément fondamental de sa réussite. Elle doit être conçue pour répondre aux défis uniques 
        posés par l'intégration de l'intelligence artificielle, comme la gestion de modèles qui évoluent rapidement, les besoins en ressources variables, 
        et les considérations de sécurité spécifiques. En appliquant les principes et patterns présentés dans ce module, vous pourrez créer 
        des applications IA robustes, évolutives et maintenues à long terme.
      </p>
      
      <p className="mt-4 text-muted-foreground">
        Dans le prochain module, nous explorerons les stratégies et bonnes pratiques pour le déploiement et la maintenance des applications IA 
        en production, y compris la gestion des versions des modèles, le monitoring des performances et la détection de dérives.
      </p>
    </div>
  );
};

export default ArchitectureAIAppsModule;
