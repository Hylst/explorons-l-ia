
import { PromptTemplate, PromptCategory } from '../promptTemplatesData';

export const technicalCategories: PromptCategory[] = [
  {
    id: 'api-documentation',
    name: 'Documentation API',
    description: 'Templates pour documenter et tester des APIs',
    icon: 'Code2'
  },
  {
    id: 'system-architecture',
    name: 'Architecture Système',
    description: 'Templates pour concevoir des architectures techniques',
    icon: 'Network'
  }
];

export const technicalTemplates: PromptTemplate[] = [
  {
    id: 'api-documentation-generator',
    name: 'Générateur Documentation API',
    category: 'api-documentation',
    domain: 'Développement',
    description: 'Génère une documentation API complète et professionnelle',
    template: `Tu es un architecte logiciel expert en documentation d'API. Crée une documentation complète pour l'API : "{nom_api}".

**INFORMATIONS GÉNÉRALES :**
- Nom de l'API : {nom_api}
- Version : {version_api}
- Type d'API : {type_api}
- Domaine métier : {domaine_metier}
- Authentification : {type_auth}

**ARCHITECTURE :**
- Base URL : {base_url}
- Protocole : {protocole}
- Format des données : {format_donnees}
- Rate limiting : {rate_limiting}
- Versioning : {strategie_versioning}

**ENDPOINTS PRINCIPAUX :**
Pour chaque endpoint, documente :
- Méthode HTTP
- URL et paramètres
- Headers requis
- Body de la requête (avec exemples)
- Réponses possibles (codes de statut)
- Exemples de réponses JSON

**AUTHENTIFICATION & SÉCURITÉ :**
- Type : {type_auth}
- Processus d'obtention des clés
- Gestion des tokens
- Scopes et permissions : {scopes_permissions}
- Bonnes pratiques de sécurité

**GESTION D'ERREURS :**
- Codes d'erreur standardisés
- Messages d'erreur détaillés
- Gestion des exceptions
- Retry policies : {retry_policies}

**EXEMPLES D'USAGE :**
- Cas d'usage courants : {cas_usage}
- Code samples en : {langages_exemples}
- SDKs disponibles : {sdks_disponibles}
- Tutoriels step-by-step

**RÉFÉRENCE COMPLÈTE :**
- Schémas de données (modèles)
- Dictionnaire des champs
- Contraintes de validation
- Limites et quotas : {limites_quotas}

**ENVIRONNEMENTS :**
- Sandbox/Test : {env_test}
- Production : {env_prod}
- Staging : {env_staging}

Génère une documentation claire, exhaustive et orientée développeur avec des exemples pratiques et testables.`,
    variables: [
      { name: 'nom_api', type: 'text', label: 'Nom de l\'API', placeholder: 'Payment API, User Management API...', required: true },
      { name: 'version_api', type: 'text', label: 'Version', placeholder: 'v1.0, v2.3.1...', required: true },
      { name: 'type_api', type: 'select', label: 'Type d\'API', options: ['REST', 'GraphQL', 'gRPC', 'WebSocket', 'SOAP'], required: true },
      { name: 'domaine_metier', type: 'select', label: 'Domaine métier', options: ['E-commerce', 'Finance', 'Social Media', 'IoT', 'Santé', 'Éducation', 'Logistique'], required: true },
      { name: 'type_auth', type: 'select', label: 'Authentification', options: ['API Key', 'OAuth 2.0', 'JWT', 'Basic Auth', 'Bearer Token'], required: true },
      { name: 'base_url', type: 'text', label: 'Base URL', placeholder: 'https://api.example.com/v1', required: true },
      { name: 'protocole', type: 'select', label: 'Protocole', options: ['HTTPS', 'HTTP/2', 'WebSocket'], required: true },
      { name: 'format_donnees', type: 'select', label: 'Format données', options: ['JSON', 'XML', 'Protocol Buffers', 'MessagePack'], required: true },
      { name: 'rate_limiting', type: 'select', label: 'Rate limiting', options: ['1000 req/h', '10000 req/h', 'Aucune limite', 'Selon plan'], required: true },
      { name: 'strategie_versioning', type: 'select', label: 'Versioning', options: ['URL path', 'Header', 'Query parameter', 'Accept header'], required: true },
      { name: 'scopes_permissions', type: 'textarea', label: 'Scopes/Permissions', placeholder: 'read:users, write:orders, admin...', required: true },
      { name: 'retry_policies', type: 'select', label: 'Retry policies', options: ['Exponential backoff', 'Linear backoff', 'Aucune', 'Custom'], required: true },
      { name: 'cas_usage', type: 'textarea', label: 'Cas d\'usage', placeholder: 'Créer utilisateur, processer paiement...', required: true },
      { name: 'langages_exemples', type: 'text', label: 'Langages exemples', placeholder: 'JavaScript, Python, PHP...', required: true },
      { name: 'sdks_disponibles', type: 'text', label: 'SDKs disponibles', placeholder: 'Node.js, Python, Java...', required: false },
      { name: 'limites_quotas', type: 'text', label: 'Limites/Quotas', placeholder: '100MB/request, 1000 calls/day...', required: true },
      { name: 'env_test', type: 'text', label: 'Environnement test', placeholder: 'https://sandbox.api.example.com', required: false },
      { name: 'env_prod', type: 'text', label: 'Environnement prod', placeholder: 'https://api.example.com', required: true },
      { name: 'env_staging', type: 'text', label: 'Environnement staging', placeholder: 'https://staging.api.example.com', required: false }
    ],
    tags: ['API', 'Documentation', 'Développement', 'Technique'],
    quality: 4.8,
    usageCount: 1456
  },
  {
    id: 'system-architecture-designer',
    name: 'Concepteur Architecture Système',
    category: 'system-architecture',
    domain: 'Architecture',
    description: 'Conçoit des architectures système scalables et robustes',
    template: `Tu es un architecte système senior. Conçois une architecture complète pour : "{nom_systeme}".

**CONTEXTE DU PROJET :**
- Nom du système : {nom_systeme}
- Domaine d'application : {domaine_application}
- Taille utilisateurs : {taille_utilisateurs}
- Contraintes business : {contraintes_business}
- Budget technique : {budget_technique}

**EXIGENCES FONCTIONNELLES :**
- Fonctionnalités principales : {fonctionnalites_principales}
- Intégrations requises : {integrations_requises}
- Workflows métier : {workflows_metier}
- Règles business : {regles_business}

**EXIGENCES NON-FONCTIONNELLES :**
- Performance : {exigences_performance}
- Scalabilité : {exigences_scalabilite}
- Disponibilité : {exigences_disponibilite}
- Sécurité : {niveau_securite}
- Compliance : {exigences_compliance}

**ARCHITECTURE GLOBALE :**
- Pattern architectural : {pattern_architectural}
- Style d'architecture : {style_architecture}
- Décomposition en services : {decomposition_services}
- Communication inter-services : {communication_services}

**INFRASTRUCTURE :**
- Hébergement : {type_hebergement}
- Base de données : {strategie_bdd}
- Cache : {strategie_cache}
- Monitoring : {strategie_monitoring}
- CI/CD : {strategie_cicd}

**TECHNOLOGIES RECOMMANDÉES :**
- Backend : {technologies_backend}
- Frontend : {technologies_frontend}
- Base de données : {choix_bdd}
- Message broker : {message_broker}
- Container orchestration : {orchestration}

**SÉCURITÉ :**
- Authentification/Autorisation : {securite_auth}
- Chiffrement : {strategie_chiffrement}
- Network security : {securite_reseau}
- Data protection : {protection_donnees}

**DÉPLOIEMENT & OPÉRATIONS :**
- Stratégie de déploiement : {strategie_deploiement}
- Environnements : {gestion_environnements}
- Backup/Recovery : {strategie_backup}
- Disaster recovery : {disaster_recovery}

**MIGRATION & ÉVOLUTION :**
- Plan de migration : {plan_migration}
- Gestion des versions : {gestion_versions}
- Roadmap technique : {roadmap_evolution}

Fournis un design détaillé avec diagrammes, justifications techniques et recommandations d'implémentation.`,
    variables: [
      { name: 'nom_systeme', type: 'text', label: 'Nom du système', placeholder: 'E-commerce Platform, CRM System...', required: true },
      { name: 'domaine_application', type: 'select', label: 'Domaine', options: ['E-commerce', 'FinTech', 'HealthTech', 'EdTech', 'IoT', 'SaaS B2B'], required: true },
      { name: 'taille_utilisateurs', type: 'select', label: 'Taille utilisateurs', options: ['< 1K', '1K - 10K', '10K - 100K', '100K - 1M', '> 1M'], required: true },
      { name: 'contraintes_business', type: 'textarea', label: 'Contraintes business', placeholder: 'Time to market, budget, réglementations...', required: true },
      { name: 'budget_technique', type: 'select', label: 'Budget technique', options: ['Limité', 'Modéré', 'Confortable', 'Élevé'], required: true },
      { name: 'fonctionnalites_principales', type: 'textarea', label: 'Fonctionnalités principales', placeholder: 'Gestion utilisateurs, paiements, notifications...', required: true },
      { name: 'integrations_requises', type: 'textarea', label: 'Intégrations requises', placeholder: 'API tierces, ERP, CRM...', required: false },
      { name: 'workflows_metier', type: 'textarea', label: 'Workflows métier', placeholder: 'Processus de commande, validation...', required: true },
      { name: 'regles_business', type: 'textarea', label: 'Règles business', placeholder: 'Contraintes métier spécifiques...', required: false },
      { name: 'exigences_performance', type: 'select', label: 'Performance', options: ['< 100ms', '< 500ms', '< 1s', '< 2s'], required: true },
      { name: 'exigences_scalabilite', type: 'select', label: 'Scalabilité', options: ['Croissance lente', 'Croissance modérée', 'Croissance rapide', 'Pics soudains'], required: true },
      { name: 'exigences_disponibilite', type: 'select', label: 'Disponibilité', options: ['99%', '99.9%', '99.99%', '99.999%'], required: true },
      { name: 'niveau_securite', type: 'select', label: 'Niveau sécurité', options: ['Standard', 'Élevé', 'Critique', 'Militaire'], required: true },
      { name: 'exigences_compliance', type: 'text', label: 'Compliance', placeholder: 'RGPD, PCI-DSS, HIPAA...', required: false },
      { name: 'pattern_architectural', type: 'select', label: 'Pattern architectural', options: ['Monolithe', 'Microservices', 'Service-Oriented', 'Event-Driven', 'Serverless'], required: true },
      { name: 'style_architecture', type: 'select', label: 'Style architecture', options: ['Layered', 'Hexagonal', 'Clean Architecture', 'Domain-Driven'], required: true },
      { name: 'decomposition_services', type: 'select', label: 'Décomposition services', options: ['Par domaine métier', 'Par fonctionnalité', 'Par données', 'Hybride'], required: true },
      { name: 'communication_services', type: 'select', label: 'Communication services', options: ['REST API', 'GraphQL', 'Message Queue', 'Event Streaming'], required: true },
      { name: 'type_hebergement', type: 'select', label: 'Hébergement', options: ['On-premise', 'Cloud Public', 'Cloud Privé', 'Hybride'], required: true },
      { name: 'strategie_bdd', type: 'select', label: 'Stratégie BDD', options: ['SQL unique', 'NoSQL unique', 'Polyglot', 'Database per service'], required: true },
      { name: 'strategie_cache', type: 'select', label: 'Stratégie cache', options: ['In-memory', 'Distributed cache', 'CDN', 'Multi-level'], required: true },
      { name: 'strategie_monitoring', type: 'select', label: 'Monitoring', options: ['Basique', 'APM complet', 'Observability', 'Full stack'], required: true },
      { name: 'strategie_cicd', type: 'select', label: 'CI/CD', options: ['Basique', 'GitOps', 'DevOps avancé', 'Platform Engineering'], required: true },
      { name: 'technologies_backend', type: 'text', label: 'Technologies backend', placeholder: 'Node.js, Java, Python...', required: true },
      { name: 'technologies_frontend', type: 'text', label: 'Technologies frontend', placeholder: 'React, Vue.js, Angular...', required: false },
      { name: 'choix_bdd', type: 'text', label: 'Choix BDD', placeholder: 'PostgreSQL, MongoDB, Redis...', required: true },
      { name: 'message_broker', type: 'select', label: 'Message broker', options: ['RabbitMQ', 'Apache Kafka', 'Redis Pub/Sub', 'AWS SQS'], required: false },
      { name: 'orchestration', type: 'select', label: 'Orchestration', options: ['Docker Swarm', 'Kubernetes', 'Nomad', 'Serverless'], required: true },
      { name: 'securite_auth', type: 'select', label: 'Auth/Authz', options: ['JWT + RBAC', 'OAuth 2.0', 'SAML', 'Zero Trust'], required: true },
      { name: 'strategie_chiffrement', type: 'select', label: 'Chiffrement', options: ['TLS only', 'End-to-end', 'At rest + in transit', 'Envelope encryption'], required: true },
      { name: 'securite_reseau', type: 'select', label: 'Sécurité réseau', options: ['Firewall basique', 'WAF + DDoS', 'Network segmentation', 'Zero Trust Network'], required: true },
      { name: 'protection_donnees', type: 'select', label: 'Protection données', options: ['Chiffrement basique', 'Tokenization', 'Anonymization', 'Privacy by design'], required: true },
      { name: 'strategie_deploiement', type: 'select', label: 'Déploiement', options: ['Blue/Green', 'Rolling updates', 'Canary', 'Feature flags'], required: true },
      { name: 'gestion_environnements', type: 'select', label: 'Environnements', options: ['Dev/Prod', 'Dev/Test/Prod', 'Feature branches', 'GitOps'], required: true },
      { name: 'strategie_backup', type: 'select', label: 'Backup/Recovery', options: ['Daily backups', 'Continuous backup', 'Point-in-time recovery', 'Cross-region'], required: true },
      { name: 'disaster_recovery', type: 'select', label: 'Disaster recovery', options: ['RTO 24h', 'RTO 4h', 'RTO 1h', 'Active-active'], required: true },
      { name: 'plan_migration', type: 'select', label: 'Plan migration', options: ['Big bang', 'Phased migration', 'Strangler pattern', 'Parallel run'], required: false },
      { name: 'gestion_versions', type: 'select', label: 'Gestion versions', options: ['Semantic versioning', 'Calendar versioning', 'Continuous deployment', 'Feature toggles'], required: true },
      { name: 'roadmap_evolution', type: 'textarea', label: 'Roadmap évolution', placeholder: 'Plans d\'évolution technique...', required: false }
    ],
    tags: ['Architecture', 'Système', 'Conception', 'Scalabilité'],
    quality: 4.9,
    usageCount: 987
  }
];
