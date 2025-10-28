
import React from 'react';
import CodeExample from '@/components/courses/CodeExample';
import ZoomOn from '@/components/courses/ZoomOn';
import Illustration from '@/components/courses/Illustration';

const DeploymentAIAppsModule: React.FC = () => {
  return (
    <div className="space-y-4">
      <p>
        Le déploiement et la maintenance d'applications intégrant l'intelligence artificielle présentent des défis uniques 
        qui vont au-delà des applications traditionnelles. Des considérations spéciales doivent être prises en compte pour 
        assurer la stabilité, la performance et la pertinence continue de ces applications dans un environnement de production.
      </p>

      <Illustration 
        src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" 
        alt="Centre de données représentant l'infrastructure de déploiement pour applications IA"
        caption="Le déploiement d'applications IA nécessite une infrastructure robuste et des processus de surveillance adaptés"
        width="2/3"
      />

      <div className="mt-4">
        <h4 className="font-medium mb-3">Stratégies de déploiement pour les applications IA</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4">
            <h5 className="font-medium mb-2">Blue/Green Deployment</h5>
            <p className="text-sm">
              Maintenir deux environnements identiques (bleu et vert) et basculer le trafic de l'un à l'autre lors des mises à jour. 
              Particulièrement utile pour les mises à jour de modèles d'IA qui peuvent avoir des impacts significatifs sur le comportement.
            </p>
            <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
              <li><strong>Avantages</strong>: Déploiement sans temps d'arrêt, possibilité de rollback immédiat</li>
              <li><strong>Inconvénients</strong>: Duplication des ressources, complexité de synchronisation des états</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h5 className="font-medium mb-2">Déploiement progressif (Canary)</h5>
            <p className="text-sm">
              Déployer la nouvelle version pour un petit pourcentage des utilisateurs avant de l'étendre progressivement. 
              Idéal pour tester les performances et la précision des nouveaux modèles d'IA en conditions réelles.
            </p>
            <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
              <li><strong>Avantages</strong>: Détection précoce des problèmes, réduction des risques</li>
              <li><strong>Inconvénients</strong>: Temps de déploiement plus long, nécessite une infrastructure de routage avancée</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h5 className="font-medium mb-2">Shadow Deployment</h5>
            <p className="text-sm">
              Exécuter la nouvelle version du modèle en parallèle de la version en production, en lui envoyant des copies des requêtes réelles 
              mais sans utiliser ses résultats. Permet de comparer les performances avant la mise en production.
            </p>
            <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
              <li><strong>Avantages</strong>: Test avec des données réelles sans impact sur les utilisateurs</li>
              <li><strong>Inconvénients</strong>: Consommation accrue de ressources, complexité de l'infrastructure</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h5 className="font-medium mb-2">A/B Testing</h5>
            <p className="text-sm">
              Diviser les utilisateurs en groupes et comparer les performances de différentes versions du modèle. 
              Crucial pour évaluer non seulement la précision technique, mais aussi l'impact sur les métriques commerciales.
            </p>
            <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
              <li><strong>Avantages</strong>: Décisions basées sur des données réelles d'utilisation</li>
              <li><strong>Inconvénients</strong>: Nécessite un bon setup d'analyse et des métriques claires</li>
            </ul>
          </div>
        </div>
      </div>

      <ZoomOn title="MLOps : DevOps pour le Machine Learning">
        <p>
          MLOps (Machine Learning Operations) adapte les principes DevOps au cycle de vie des modèles d'IA/ML :
        </p>
        <div className="mt-2 space-y-3">
          <div>
            <h5 className="font-medium text-sm mb-1">Principales composantes du MLOps</h5>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <ul className="list-disc pl-4 space-y-1">
                  <li><strong>Intégration continue (CI)</strong> pour l'automatisation des tests</li>
                  <li><strong>Déploiement continu (CD)</strong> pour la mise en production fiable</li>
                  <li><strong>Versionnement</strong> des modèles, données et code</li>
                </ul>
              </div>
              <div>
                <ul className="list-disc pl-4 space-y-1">
                  <li><strong>Monitoring</strong> des performances et de la dérive des modèles</li>
                  <li><strong>Reproductibilité</strong> des expériences et entraînements</li>
                  <li><strong>Gouvernance</strong> et traçabilité des décisions d'IA</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="font-medium text-sm mb-1">Différences clés entre DevOps et MLOps</h5>
            <div className="overflow-x-auto">
              <table className="min-w-full text-xs">
                <thead className="bg-muted/20">
                  <tr>
                    <th className="p-1 text-left">Aspect</th>
                    <th className="p-1 text-left">DevOps traditionnel</th>
                    <th className="p-1 text-left">MLOps</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-muted">
                  <tr>
                    <td className="p-1">Focus principal</td>
                    <td className="p-1">Code et configuration</td>
                    <td className="p-1">Code, données, modèles et configuration</td>
                  </tr>
                  <tr>
                    <td className="p-1">Tests</td>
                    <td className="p-1">Tests unitaires, d'intégration</td>
                    <td className="p-1">+ Tests de modèles (biais, précision, robustesse)</td>
                  </tr>
                  <tr>
                    <td className="p-1">Versionnement</td>
                    <td className="p-1">Code source</td>
                    <td className="p-1">Code source + données d'entraînement + modèles</td>
                  </tr>
                  <tr>
                    <td className="p-1">Monitoring</td>
                    <td className="p-1">Performance système, erreurs</td>
                    <td className="p-1">+ Dérive des données, précision du modèle, équité</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <p className="text-sm mt-2">
            L'adoption de MLOps est essentielle pour industrialiser les déploiements d'IA et passer des projets expérimentaux 
            à des solutions robustes fonctionnant à grande échelle en production.
          </p>
        </div>
      </ZoomOn>

      <div className="mt-6">
        <h4 className="font-medium mb-3">Monitoring et observabilité des applications IA</h4>
        <div className="space-y-4">
          <div className="bg-muted/20 p-4 rounded-lg">
            <h5 className="font-medium mb-2">Métriques système traditionnelles</h5>
            <p className="text-sm">
              Les métriques de base à surveiller pour toute application, mais particulièrement importantes pour les applications IA 
              qui peuvent avoir des besoins en ressources variables et élevés:
            </p>
            <ul className="list-disc pl-5 mt-2 text-sm grid grid-cols-2 gap-2">
              <li>Utilisation CPU/GPU</li>
              <li>Consommation mémoire</li>
              <li>Latence des requêtes</li>
              <li>Taux d'erreur</li>
              <li>Trafic et charge</li>
              <li>Taux de requêtes</li>
              <li>Temps de réponse</li>
              <li>Utilisation du stockage</li>
            </ul>
          </div>
          
          <div className="bg-muted/20 p-4 rounded-lg">
            <h5 className="font-medium mb-2">Métriques spécifiques aux modèles IA</h5>
            <p className="text-sm">
              Au-delà des métriques système, les applications IA nécessitent un monitoring spécialisé de la performance 
              et du comportement des modèles:
            </p>
            <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
              <li><strong>Précision et autres métriques de ML</strong>: Suivre l'évolution des métriques de performance du modèle (précision, rappel, F1-score, etc.)</li>
              <li><strong>Confiance des prédictions</strong>: Distribution des scores de confiance pour détecter les cas limites ou incertains</li>
              <li><strong>Consommation de tokens</strong>: Pour les LLMs, suivi de l'utilisation des tokens pour contrôler les coûts et optimiser les prompts</li>
              <li><strong>Taux d'utilisation des fallbacks</strong>: Fréquence à laquelle le système recourt à des réponses par défaut ou des modèles de secours</li>
              <li><strong>Temps d'inférence</strong>: Temps nécessaire au modèle pour produire une prédiction, distinct de la latence réseau</li>
            </ul>
          </div>
          
          <div className="bg-muted/20 p-4 rounded-lg">
            <h5 className="font-medium mb-2">Détection de dérive (drift)</h5>
            <p className="text-sm">
              Les modèles d'IA peuvent se dégrader au fil du temps à mesure que les données du monde réel s'éloignent des données d'entraînement. 
              La détection de ces dérives est cruciale:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-2">
              <div>
                <h6 className="text-sm font-medium">Types de dérive à monitorer</h6>
                <ul className="list-disc pl-5 text-sm mt-1 space-y-1">
                  <li><strong>Dérive des données</strong>: Changement dans la distribution des données d'entrée</li>
                  <li><strong>Dérive conceptuelle</strong>: Changement dans la relation entre entrées et sorties</li>
                  <li><strong>Dérive de prédiction</strong>: Changement dans la distribution des sorties du modèle</li>
                  <li><strong>Dérive d'étiquettes</strong>: Évolution des définitions des classes ou catégories</li>
                </ul>
              </div>
              <div>
                <h6 className="text-sm font-medium">Techniques de détection</h6>
                <ul className="list-disc pl-5 text-sm mt-1 space-y-1">
                  <li>Tests statistiques (Kolmogorov-Smirnov, chi-carré)</li>
                  <li>Monitoring des distributions avec alertes</li>
                  <li>Modèles de détection d'anomalies</li>
                  <li>Feedback humain et vérification périodique</li>
                  <li>Comparaison avec versions de référence</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CodeExample 
        title="Mise en place d'un système de monitoring pour modèles IA avec Prometheus et Grafana"
        language="python"
        code={`# monitoring.py
# Système de monitoring pour applications IA avec Prometheus et Flask

from flask import Flask, request, jsonify
from prometheus_client import Counter, Histogram, Gauge, Summary, generate_latest, CONTENT_TYPE_LATEST
import time
import numpy as np
from datetime import datetime
import threading
import pandas as pd
from scipy.stats import ks_2samp

app = Flask(__name__)

# Configuration
MODEL_NAME = "sentiment_analysis_model"
MODEL_VERSION = "v1.2"
DRIFT_DETECTION_INTERVAL = 3600  # Vérification de dérive toutes les heures

# Métriques Prometheus pour le monitoring
REQUEST_COUNT = Counter('model_requests_total', 'Total des requêtes au modèle',
                       ['model_name', 'model_version', 'status'])

LATENCY = Histogram('model_latency_seconds', 'Temps de réponse du modèle',
                   ['model_name', 'model_version'],
                   buckets=[0.05, 0.1, 0.25, 0.5, 1.0, 2.5, 5.0, 10.0])

PREDICTION_SCORE = Histogram('model_confidence_score', 'Distribution des scores de confiance',
                            ['model_name', 'model_version', 'prediction'],
                            buckets=[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.95, 0.99])

INPUT_LENGTH = Histogram('model_input_length', 'Longueur des entrées textuelles',
                        ['model_name', 'model_version'],
                        buckets=[10, 20, 50, 100, 200, 500, 1000, 2000, 5000])

TOKEN_COUNT = Counter('model_tokens_total', 'Nombre total de tokens traités',
                     ['model_name', 'model_version', 'type'])

ERROR_COUNT = Counter('model_errors_total', 'Erreurs du modèle par type',
                     ['model_name', 'model_version', 'error_type'])

DRIFT_SCORE = Gauge('model_drift_score', 'Score de dérive des données',
                   ['model_name', 'model_version', 'drift_type'])

# Stockage des prédictions récentes pour détection de dérive
recent_inputs = pd.DataFrame(columns=['timestamp', 'input_length', 'embedding_dim1', 'embedding_dim2'])
recent_predictions = pd.DataFrame(columns=['timestamp', 'prediction', 'confidence'])

# Stockage des données de référence (baseline)
baseline_inputs = None
baseline_predictions = None

# Fonction simulant un embedding pour la démonstration
def simulate_embedding(text):
    # En production, remplacer par un vrai embedding
    return np.array([hash(text) % 100, len(text) % 100]) / 100.0

# Endpoint pour les métriques Prometheus
@app.route('/metrics')
def metrics():
    return generate_latest(), 200, {'Content-Type': CONTENT_TYPE_LATEST}

# Endpoint pour la prédiction
@app.route('/predict', methods=['POST'])
def predict():
    start_time = time.time()
    
    try:
        data = request.json
        text = data.get('text', '')
        
        # Enregistrer la taille de l'entrée
        INPUT_LENGTH.labels(model_name=MODEL_NAME, model_version=MODEL_VERSION).observe(len(text))
        
        # Simuler le comptage de tokens (à remplacer par la vraie logique)
        tokens = len(text.split())
        TOKEN_COUNT.labels(model_name=MODEL_NAME, model_version=MODEL_VERSION, type='input').inc(tokens)
        
        # Simuler l'inférence du modèle (à remplacer par le vrai modèle)
        confidence = 0.5 + 0.4 * np.random.random()
        prediction = 'positive' if confidence > 0.7 else 'negative'
        
        # Simuler les tokens de sortie
        output_tokens = len(prediction.split()) + 2
        TOKEN_COUNT.labels(model_name=MODEL_NAME, model_version=MODEL_VERSION, type='output').inc(output_tokens)
        
        # Enregistrer le score de confiance
        PREDICTION_SCORE.labels(model_name=MODEL_NAME, model_version=MODEL_VERSION, 
                               prediction=prediction).observe(confidence)
        
        # Stocker les données pour détection de dérive
        embedding = simulate_embedding(text)
        new_input = pd.DataFrame({
            'timestamp': [datetime.now()],
            'input_length': [len(text)],
            'embedding_dim1': [embedding[0]],
            'embedding_dim2': [embedding[1]]
        })
        
        new_prediction = pd.DataFrame({
            'timestamp': [datetime.now()],
            'prediction': [prediction],
            'confidence': [confidence]
        })
        
        global recent_inputs, recent_predictions
        recent_inputs = pd.concat([recent_inputs, new_input]).tail(1000)
        recent_predictions = pd.concat([recent_predictions, new_prediction]).tail(1000)
        
        # Enregistrer la requête réussie
        REQUEST_COUNT.labels(model_name=MODEL_NAME, model_version=MODEL_VERSION, status='success').inc()
        
        # Calculer la latence
        latency = time.time() - start_time
        LATENCY.labels(model_name=MODEL_NAME, model_version=MODEL_VERSION).observe(latency)
        
        return jsonify({
            'prediction': prediction,
            'confidence': confidence,
            'latency_ms': latency * 1000
        })
        
    except Exception as e:
        # Enregistrer l'erreur
        error_type = type(e).__name__
        ERROR_COUNT.labels(model_name=MODEL_NAME, model_version=MODEL_VERSION, error_type=error_type).inc()
        REQUEST_COUNT.labels(model_name=MODEL_NAME, model_version=MODEL_VERSION, status='error').inc()
        
        return jsonify({
            'error': str(e),
            'error_type': error_type
        }), 500

# Endpoint pour créer une baseline pour la détection de dérive
@app.route('/establish-baseline', methods=['POST'])
def establish_baseline():
    global baseline_inputs, baseline_predictions, recent_inputs, recent_predictions
    
    baseline_inputs = recent_inputs.copy()
    baseline_predictions = recent_predictions.copy()
    
    return jsonify({
        'status': 'success',
        'baseline_samples': len(baseline_inputs)
    })

# Fonction de détection de dérive exécutée périodiquement
def detect_drift():
    global baseline_inputs, baseline_predictions, recent_inputs, recent_predictions
    
    while True:
        time.sleep(DRIFT_DETECTION_INTERVAL)
        
        if baseline_inputs is None or recent_inputs.empty:
            continue
            
        try:
            # Détection de dérive sur les entrées
            if len(recent_inputs) > 10 and len(baseline_inputs) > 10:
                # Test de Kolmogorov-Smirnov pour la dérive des entrées
                ks_stat_dim1, p_value_dim1 = ks_2samp(
                    baseline_inputs['embedding_dim1'].values, 
                    recent_inputs['embedding_dim1'].values
                )
                DRIFT_SCORE.labels(model_name=MODEL_NAME, model_version=MODEL_VERSION, 
                                  drift_type='input_embedding_dim1').set(ks_stat_dim1)
                
                # Dérive de distribution des prédictions
                baseline_pos_ratio = sum(baseline_predictions['prediction'] == 'positive') / len(baseline_predictions)
                current_pos_ratio = sum(recent_predictions['prediction'] == 'positive') / len(recent_predictions)
                prediction_drift = abs(baseline_pos_ratio - current_pos_ratio)
                DRIFT_SCORE.labels(model_name=MODEL_NAME, model_version=MODEL_VERSION, 
                                  drift_type='prediction_distribution').set(prediction_drift)
                
                # Dérive de confiance moyenne
                baseline_conf = baseline_predictions['confidence'].mean()
                current_conf = recent_predictions['confidence'].mean()
                conf_drift = abs(baseline_conf - current_conf)
                DRIFT_SCORE.labels(model_name=MODEL_NAME, model_version=MODEL_VERSION, 
                                  drift_type='confidence_mean').set(conf_drift)
                
                print(f"Drift detection - Input: {ks_stat_dim1:.3f}, Pred: {prediction_drift:.3f}, Conf: {conf_drift:.3f}")
        except Exception as e:
            print(f"Error in drift detection: {str(e)}")

# Démarrer le thread de détection de dérive
drift_thread = threading.Thread(target=detect_drift, daemon=True)
drift_thread.start()

# Fonction de health check
@app.route('/health')
def health_check():
    return jsonify({'status': 'ok', 'model': MODEL_NAME, 'version': MODEL_VERSION})

if __name__ == '__main__':
    # Établir une baseline initiale pour la démonstration
    dummy_data = {'text': 'This is sample text for baseline establishment.'}
    for _ in range(100):
        dummy_data['text'] = f"Sample text {_} with some variations."
        predict()
        
    establish_baseline()
    
    app.run(host='0.0.0.0', port=5000)

# --------------------------------------------------------------------------

# docker-compose.yml pour déployer l'infrastructure de monitoring

version: '3.8'

services:
  model-service:
    build: .
    ports:
      - "5000:5000"
    volumes:
      - ./app:/app
    restart: always
    networks:
      - ai-monitoring

  prometheus:
    image: prom/prometheus:latest
    ports:
      - "9090:9090"
    volumes:
      - ./prometheus/prometheus.yml:/etc/prometheus/prometheus.yml
      - prometheus-data:/prometheus
    command:
      - '--config.file=/etc/prometheus/prometheus.yml'
      - '--storage.tsdb.path=/prometheus'
      - '--web.console.libraries=/usr/share/prometheus/console_libraries'
      - '--web.console.templates=/usr/share/prometheus/consoles'
    networks:
      - ai-monitoring

  grafana:
    image: grafana/grafana:latest
    ports:
      - "3000:3000"
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin_secret
      - GF_USERS_ALLOW_SIGN_UP=false
    volumes:
      - grafana-data:/var/lib/grafana
      - ./grafana/provisioning:/etc/grafana/provisioning
      - ./grafana/dashboards:/var/lib/grafana/dashboards
    depends_on:
      - prometheus
    networks:
      - ai-monitoring

  alertmanager:
    image: prom/alertmanager:latest
    ports:
      - "9093:9093"
    volumes:
      - ./alertmanager/alertmanager.yml:/etc/alertmanager/alertmanager.yml
      - alertmanager-data:/alertmanager
    command:
      - '--config.file=/etc/alertmanager/alertmanager.yml'
      - '--storage.path=/alertmanager'
    networks:
      - ai-monitoring

networks:
  ai-monitoring:
    driver: bridge

volumes:
  prometheus-data:
  grafana-data:
  alertmanager-data:

# --------------------------------------------------------------------------

# prometheus/prometheus.yml

global:
  scrape_interval: 15s
  evaluation_interval: 15s

alerting:
  alertmanagers:
    - static_configs:
        - targets: ['alertmanager:9093']

rule_files:
  - "/etc/prometheus/rules/*.yml"

scrape_configs:
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']

  - job_name: 'model-service'
    metrics_path: /metrics
    scrape_interval: 5s
    static_configs:
      - targets: ['model-service:5000']
    metric_relabel_configs:
      - source_labels: [__name__]
        regex: '(model_.*)'
        action: keep

# --------------------------------------------------------------------------

# alertmanager/alertmanager.yml

global:
  resolve_timeout: 5m

route:
  group_by: ['alertname']
  group_wait: 10s
  group_interval: 10s
  repeat_interval: 1h
  receiver: 'email-notifications'

receivers:
  - name: 'email-notifications'
    email_configs:
      - to: 'alerts@example.com'
        from: 'prometheus@example.com'
        smarthost: 'smtp.example.com:587'
        auth_username: 'alertmanager'
        auth_password: 'password'
  
  - name: 'slack-notifications'
    slack_configs:
      - api_url: '${process.env.VITE_SLACK_WEBHOOK_URL || "https://hooks.slack.com/services/YOUR_SLACK_WEBHOOK_URL"}'
        channel: '#ml-alerts'
        title: '{{ .GroupLabels.alertname }}'
        text: '{{ .CommonAnnotations.description }}'

# Règles d'alerte pour les modèles d'IA
inhibit_rules:
  - source_match:
      severity: 'critical'
    target_match:
      severity: 'warning'
    equal: ['alertname', 'instance']`}
        explanation="Ce code démontre la mise en place d'un système de monitoring complet pour une application IA, utilisant Prometheus et Grafana. Il inclut des métriques standards (latence, taux d'erreur) ainsi que des métriques spécifiques à l'IA comme la distribution des scores de confiance et la détection de dérive des données. La solution surveille activement la qualité des prédictions et alerte automatiquement lorsque les performances se dégradent. Ce type d'infrastructure de monitoring est essentiel pour maintenir des applications IA fiables en production."
      />

      <div className="mt-6">
        <h4 className="font-medium mb-3">Gestion des versions de modèles</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4">
            <h5 className="font-medium mb-2">Stratégies de versionnement</h5>
            <p className="text-sm">
              Un système robuste de versionnement est essentiel pour les modèles d'IA, permettant de suivre leur évolution 
              et de revenir à des versions précédentes si nécessaire:
            </p>
            <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
              <li><strong>Versionnement sémantique</strong>: Format MAJOR.MINOR.PATCH pour les modèles, reflétant l'ampleur des changements</li>
              <li><strong>Métadonnées essentielles</strong>: Données d'entraînement utilisées, hyperparamètres, métriques de performance</li>
              <li><strong>Versionnement des datasets</strong>: Traçabilité complète des données utilisées pour chaque version</li>
              <li><strong>Reproductibilité</strong>: Environnements containerisés pour garantir des résultats constants</li>
            </ul>
          </div>
          <div className="border rounded-lg p-4">
            <h5 className="font-medium mb-2">Registres de modèles</h5>
            <p className="text-sm">
              Les registres de modèles sont des dépôts centralisés qui stockent les modèles d'IA et leurs métadonnées associées, 
              facilitant leur gestion et leur déploiement:
            </p>
            <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
              <li><strong>MLflow Model Registry</strong>: Solution open-source complète pour le versionnement des modèles</li>
              <li><strong>AWS Model Registry</strong>: Intégration avec l'écosystème AWS pour le déploiement</li>
              <li><strong>Azure ML Registry</strong>: Gestion de modèles dans l'environnement Azure</li>
              <li><strong>Google Vertex AI Model Registry</strong>: Solution intégrée à la plateforme cloud de Google</li>
              <li><strong>Registry personnalisé</strong>: Solution sur mesure pour des besoins spécifiques</li>
            </ul>
          </div>
        </div>
      </div>

      <ZoomOn title="Ré-entraînement des modèles : approches et automatisation">
        <p>
          Le ré-entraînement périodique des modèles est crucial pour maintenir leur précision face à l'évolution des données et des attentes :
        </p>
        <div className="space-y-3 mt-2">
          <div>
            <h5 className="font-medium text-sm mb-1">Stratégies de ré-entraînement</h5>
            <div className="grid md:grid-cols-2 gap-2">
              <div>
                <h6 className="text-xs font-medium">Ré-entraînement basé sur le calendrier</h6>
                <ul className="list-disc pl-4 text-xs mt-1 space-y-1">
                  <li>Planification régulière (quotidienne, hebdomadaire, mensuelle)</li>
                  <li>Simple à mettre en œuvre et prévisible</li>
                  <li>Peut être inefficace si les données changent peu ou trop rapidement</li>
                </ul>
              </div>
              <div>
                <h6 className="text-xs font-medium">Ré-entraînement basé sur les performances</h6>
                <ul className="list-disc pl-4 text-xs mt-1 space-y-1">
                  <li>Déclenché lorsque les métriques passent sous un seuil</li>
                  <li>Plus efficace en termes de ressources</li>
                  <li>Nécessite un monitoring robuste des performances</li>
                </ul>
              </div>
              <div>
                <h6 className="text-xs font-medium">Ré-entraînement basé sur les données</h6>
                <ul className="list-disc pl-4 text-xs mt-1 space-y-1">
                  <li>Déclenché lorsque suffisamment de nouvelles données sont disponibles</li>
                  <li>Ou lorsque la distribution des données change significativement</li>
                  <li>Adapté aux environnements très dynamiques</li>
                </ul>
              </div>
              <div>
                <h6 className="text-xs font-medium">Ré-entraînement hybride</h6>
                <ul className="list-disc pl-4 text-xs mt-1 space-y-1">
                  <li>Combinaison de plusieurs stratégies</li>
                  <li>Par exemple : calendrier régulier + déclenchement sur dégradation</li>
                  <li>Offre le meilleur équilibre entre proactivité et réactivité</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h5 className="font-medium text-sm mb-1">Pipeline de ré-entraînement automatisé</h5>
            <ol className="list-decimal pl-5 text-xs space-y-1">
              <li><strong>Collecte et validation des données</strong> : Intégration continue de nouvelles données avec validation qualitative</li>
              <li><strong>Prétraitement et feature engineering</strong> : Application des mêmes transformations que le modèle initial</li>
              <li><strong>Entraînement avec recherche d'hyperparamètres</strong> : Optimisation des paramètres du modèle</li>
              <li><strong>Évaluation comparative</strong> : Comparaison avec le modèle en production sur des métriques clés</li>
              <li><strong>Tests de régression</strong> : Vérification que le nouveau modèle ne régresse pas sur des cas critiques</li>
              <li><strong>Validation humaine</strong> (optionnelle) : Vérification manuelle avant mise en production</li>
              <li><strong>Déploiement progressif</strong> : Remplacement graduel de l'ancien modèle</li>
              <li><strong>Monitoring post-déploiement</strong> : Surveillance attentive après la mise en production</li>
            </ol>
          </div>
          
          <p className="text-xs mt-2">
            L'automatisation du ré-entraînement réduit considérablement la maintenance manuelle requise pour les modèles d'IA 
            en production, mais nécessite un investissement initial dans une infrastructure MLOps robuste.
          </p>
        </div>
      </ZoomOn>

      <div className="mt-6">
        <h4 className="font-medium mb-3">Optimisation des coûts pour les applications IA</h4>
        <div className="space-y-4">
          <div className="bg-muted/20 p-4 rounded-lg">
            <h5 className="font-medium mb-2">Stratégies d'optimisation des coûts API</h5>
            <p className="text-sm">
              Les coûts liés à l'utilisation d'APIs d'IA tierces peuvent rapidement devenir significatifs. Voici des stratégies pour les optimiser:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-2">
              <div>
                <h6 className="text-sm font-medium">Optimisation des requêtes</h6>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Réduction de la taille des prompts par prétraitement</li>
                  <li>Batch processing pour réduire le nombre d'appels API</li>
                  <li>Streaming des réponses pour l'expérience utilisateur</li>
                  <li>Utilisation de modèles plus petits pour les tâches simples</li>
                </ul>
              </div>
              <div>
                <h6 className="text-sm font-medium">Stratégies de caching</h6>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Cache de réponses pour les requêtes identiques ou similaires</li>
                  <li>Utilisation de Redis ou autres systèmes de cache distribués</li>
                  <li>Invalidation intelligente basée sur la pertinence temporelle</li>
                  <li>Compression des données mises en cache</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-muted/20 p-4 rounded-lg">
            <h5 className="font-medium mb-2">Optimisation des ressources d'infrastructure</h5>
            <p className="text-sm">
              L'infrastructure nécessaire pour exécuter des modèles d'IA peut représenter un coût significatif:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-2">
              <div>
                <h6 className="text-sm font-medium">Sélection optimale des instances</h6>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Choix des instances adaptées à chaque type de modèle</li>
                  <li>Instances Spot/Preemptible pour les tâches batch</li>
                  <li>Auto-scaling basé sur la demande réelle</li>
                  <li>Utilisation des instances réservées pour les charges prévisibles</li>
                </ul>
              </div>
              <div>
                <h6 className="text-sm font-medium">Optimisation des modèles</h6>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Quantification des modèles (int8, float16)</li>
                  <li>Distillation pour réduire la taille des modèles</li>
                  <li>Optimisation du graph de calcul (ONNX, TensorRT)</li>
                  <li>Pruning pour éliminer les connexions peu importantes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CodeExample 
        title="Implémentation d'un système de cache pour requêtes LLM avec Redis"
        language="typescript"
        code={`// src/services/cachingLLMService.ts

import { createClient } from 'redis';
import { LLMService, Message, LLMResponse, LLMCompletionOptions } from './llmService';
import crypto from 'crypto';

interface CacheConfig {
  ttl: number;                  // Durée de vie du cache en secondes
  namespace: string;            // Espace de noms pour les clés Redis
  similarityThreshold?: number; // Seuil de similarité pour le cache fuzzy (optionnel)
  excludePatterns?: RegExp[];   // Patterns de requêtes à ne pas mettre en cache
}

/**
 * Service qui ajoute une couche de cache aux appels de LLM pour réduire les coûts
 * et améliorer les performances
 */
export class CachingLLMService {
  private llmService: LLMService;
  private redisClient: ReturnType<typeof createClient>;
  private config: CacheConfig;
  private tokenUsage = {
    saved: 0,
    total: 0
  };

  constructor(
    llmService: LLMService, 
    redisUrl: string,
    config: CacheConfig = { ttl: 86400, namespace: 'llm:cache:' }
  ) {
    this.llmService = llmService;
    this.config = config;
    
    // Initialisation du client Redis
    this.redisClient = createClient({
      url: redisUrl
    });
    
    this.redisClient.on('error', (err) => console.error('Redis Client Error', err));
    this.redisClient.connect().catch(err => console.error('Failed to connect to Redis', err));
    
    // Intervalle pour afficher les statistiques d'utilisation du cache
    setInterval(() => {
      const savedPercentage = this.tokenUsage.total > 0 
        ? (this.tokenUsage.saved / this.tokenUsage.total * 100).toFixed(2)
        : '0.00';
      
      console.log(\`Cache stats: Saved \${this.tokenUsage.saved} tokens out of \${this.tokenUsage.total} (\${savedPercentage}%)\`);
    }, 3600000); // Toutes les heures
  }

  /**
   * Génère une clé de cache unique pour une requête LLM
   */
  private generateCacheKey(options: LLMCompletionOptions): string {
    // Filtrer les propriétés qui affectent le déterminisme
    const cacheableOptions = {
      messages: options.messages,
      model: options.model,
      max_tokens: options.max_tokens,
      functions: options.functions,
      function_call: options.function_call
    };
    
    // Température basse = réponses déterministes qui peuvent être mises en cache
    // Température élevée = réponses variables qui ne devraient pas être mises en cache
    const shouldCache = options.temperature === undefined || options.temperature < 0.2;
    
    if (!shouldCache) {
      return ''; // Clé vide = pas de cache
    }
    
    // Vérifier les patterns d'exclusion
    if (this.config.excludePatterns) {
      const messageStr = JSON.stringify(options.messages);
      for (const pattern of this.config.excludePatterns) {
        if (pattern.test(messageStr)) {
          return ''; // Ne pas mettre en cache les requêtes correspondant aux patterns
        }
      }
    }
    
    // Générer un hash SHA-256 des options pour une clé compacte
    const hash = crypto
      .createHash('sha256')
      .update(JSON.stringify(cacheableOptions))
      .digest('hex');
    
    return \`\${this.config.namespace}\${hash}\`;
  }

  /**
   * Effectue une requête au LLM avec mise en cache
   */
  async complete(options: LLMCompletionOptions): Promise<LLMResponse> {
    // Ne pas utiliser le cache pour le streaming
    if (options.stream) {
      return this.llmService.complete(options);
    }
    
    const cacheKey = this.generateCacheKey(options);
    
    // Si cacheKey est vide, ne pas utiliser le cache
    if (!cacheKey) {
      return this.llmService.complete(options);
    }
    
    try {
      // Vérifier si la réponse est en cache
      const cachedResponse = await this.redisClient.get(cacheKey);
      
      if (cachedResponse) {
        const response: LLMResponse = JSON.parse(cachedResponse);
        console.log(\`Cache hit for key \${cacheKey}\`);
        
        // Mettre à jour les statistiques d'utilisation
        if (response.usage) {
          this.tokenUsage.saved += response.usage.total_tokens;
          this.tokenUsage.total += response.usage.total_tokens;
        }
        
        return response;
      }
      
      // Cache miss - faire l'appel API et mettre en cache le résultat
      console.log(\`Cache miss for key \${cacheKey}\`);
      const response = await this.llmService.complete(options);
      
      // Mettre à jour les statistiques d'utilisation
      if (response.usage) {
        this.tokenUsage.total += response.usage.total_tokens;
      }
      
      // Mettre en cache la réponse
      await this.redisClient.set(cacheKey, JSON.stringify(response), {
        EX: this.config.ttl
      });
      
      return response;
    } catch (error) {
      console.error('Error with caching LLM service:', error);
      // En cas d'erreur avec Redis, fallback sur l'appel API direct
      return this.llmService.complete(options);
    }
  }

  /**
   * Version streaming qui ne peut pas être mise en cache
   */
  async completeStream(
    options: LLMCompletionOptions, 
    onChunk: (chunk: string) => void, 
    onDone: (fullText: string) => void
  ): Promise<void> {
    // Le streaming ne peut pas être mis en cache, appeler directement le service
    return this.llmService.completeStream(options, onChunk, onDone);
  }
  
  /**
   * Implémenter un système de cache "fuzzy" basé sur la similarité des requêtes
   * Utile pour les applications conversationnelles où les questions peuvent être similaires
   */
  async findSimilarCachedResponse(messages: Message[]): Promise<LLMResponse | null> {
    if (!this.config.similarityThreshold) {
      return null; // Fonctionnalité désactivée
    }
    
    try {
      // Récupérer toutes les clés dans l'espace de noms
      const keys = await this.redisClient.keys(\`\${this.config.namespace}*\`);
      
      // Pour chaque clé, récupérer la requête originale et comparer la similarité
      // Note: Ceci est une implémentation simplifiée. Dans un système de production,
      // on utiliserait des techniques plus avancées comme des embeddings vectoriels.
      
      // Dans cet exemple, nous simulons simplement la recherche de similarité
      return null;
    } catch (error) {
      console.error('Error in similarity cache search:', error);
      return null;
    }
  }
  
  /**
   * Invalider une entrée spécifique du cache
   */
  async invalidateCache(options: LLMCompletionOptions): Promise<void> {
    const cacheKey = this.generateCacheKey(options);
    if (cacheKey) {
      await this.redisClient.del(cacheKey);
    }
  }
  
  /**
   * Vider tout le cache
   */
  async clearCache(): Promise<void> {
    const keys = await this.redisClient.keys(\`\${this.config.namespace}*\`);
    if (keys.length > 0) {
      await this.redisClient.del(keys);
    }
  }
  
  /**
   * Obtenir des statistiques sur l'utilisation du cache
   */
  getStats() {
    return {
      savedTokens: this.tokenUsage.saved,
      totalTokens: this.tokenUsage.total,
      savingsPercentage: this.tokenUsage.total > 0 
        ? (this.tokenUsage.saved / this.tokenUsage.total * 100)
        : 0,
      estimatedCostSavings: this.tokenUsage.saved * 0.0001 // Approximation simplifiée
    };
  }
}

// Exemple d'utilisation
// -------------------------------------------------------------------------------
// const llmService = new LLMService('your-api-key');
// const cachingService = new CachingLLMService(llmService, 'redis://localhost:6379', {
//   ttl: 86400, // 24 heures
//   namespace: 'myapp:llm:cache:',
//   excludePatterns: [/private/i, /sensitive/i] // Ne pas mettre en cache les requêtes contenant ces mots
// });
// 
// // Utiliser comme le service LLM normal
// const response = await cachingService.complete({
//   messages: [{ role: 'user', content: 'Qui a écrit Les Misérables?' }],
//   model: 'gpt-3.5-turbo',
//   temperature: 0.1 // Température basse pour mise en cache
// });
`}
        explanation="Ce code implémente un système de cache pour les requêtes LLM avec Redis, afin de réduire les coûts API et améliorer les performances. Il met en cache les réponses pour les requêtes identiques, avec une température basse (réponses déterministes). Le système exclut certains types de requêtes du cache, comme celles contenant des informations sensibles, et maintient des statistiques sur les économies réalisées. Cette optimisation peut réduire significativement les coûts d'API pour les applications en production avec des requêtes répétitives."
      />

      <div className="mt-6">
        <h4 className="font-medium mb-3">Bonnes pratiques pour les mises à jour et la maintenance</h4>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h5 className="font-medium mb-2">Communication des changements</h5>
            <p className="text-sm mb-2">
              Les mises à jour de modèles d'IA peuvent entraîner des changements subtils de comportement. Une communication claire est essentielle:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li><strong>Changelog détaillé</strong> pour chaque nouvelle version du modèle ou de l'application</li>
              <li><strong>Documentation des changements comportementaux attendus</strong> et des améliorations de performances</li>
              <li><strong>Période de préavis</strong> pour les mises à jour majeures qui pourraient affecter l'expérience utilisateur</li>
              <li><strong>Canaux de feedback</strong> dédiés pour signaler les problèmes après mise à jour</li>
            </ul>
          </div>
          
          <div className="border rounded-lg p-4">
            <h5 className="font-medium mb-2">Jeux de tests de régression</h5>
            <p className="text-sm mb-2">
              Les jeux de tests spécifiques à l'IA sont cruciaux pour garantir que les mises à jour n'introduisent pas de régressions:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li><strong>Collection de cas de référence</strong> représentatifs des différents scénarios d'utilisation</li>
              <li><strong>Tests golden</strong> avec entrées/sorties attendues pour vérifier la cohérence des prédictions</li>
              <li><strong>Tests de robustesse</strong> pour évaluer la résilience aux entrées mal formées ou limites</li>
              <li><strong>Évaluation des biais</strong> pour s'assurer que les mises à jour n'introduisent pas de nouveaux biais</li>
              <li><strong>Tests de charge</strong> pour valider les performances sous conditions de stress</li>
            </ul>
          </div>
          
          <div className="border rounded-lg p-4">
            <h5 className="font-medium mb-2">Plan de rollback</h5>
            <p className="text-sm mb-2">
              Un plan de rollback bien défini est essentiel pour réagir rapidement en cas de problème après déploiement:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li><strong>Critères de déclenchement</strong> clairs pour initier un rollback (seuils de performance, taux d'erreur)</li>
              <li><strong>Processus documenté</strong> pour revenir rapidement à la version précédente</li>
              <li><strong>Tests réguliers</strong> du processus de rollback pour garantir son fonctionnement</li>
              <li><strong>Responsabilités définies</strong> pour savoir qui peut décider et exécuter un rollback</li>
              <li><strong>Plan de communication</strong> pour informer les parties prenantes en cas de rollback</li>
            </ul>
          </div>
        </div>
      </div>

      <ZoomOn title="Feedback humain et apprentissage continu">
        <p>
          Au-delà des métriques automatisées, le feedback humain joue un rôle crucial dans l'amélioration continue des applications IA :
        </p>
        <div className="space-y-3 mt-2">
          <div>
            <h5 className="font-medium text-sm mb-1">Systèmes de collecte de feedback</h5>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li><strong>Feedback explicite</strong>: Boutons "pouce haut/bas", évaluations étoilées, rapports d'erreurs</li>
              <li><strong>Feedback implicite</strong>: Temps passé, taux de rebond, comportements après prédiction</li>
              <li><strong>Annotations humaines</strong>: Experts qui étiquettent des données difficiles pour l'amélioration ciblée</li>
              <li><strong>Entretiens utilisateurs</strong>: Sessions qualitatives pour comprendre les besoins non satisfaits</li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-medium text-sm mb-1">Intégration du feedback dans le cycle d'amélioration</h5>
            <ol className="list-decimal pl-5 text-sm space-y-1">
              <li><strong>Collecte structurée</strong>: Organiser le feedback selon les types de problèmes et de cas d'usage</li>
              <li><strong>Priorisation</strong>: Identifier les problèmes à fort impact ou récurrents</li>
              <li><strong>Analyse des causes</strong>: Déterminer si les problèmes viennent des données, du modèle ou de l'intégration</li>
              <li><strong>Correction ciblée</strong>: 
                <ul className="list-disc pl-4 text-xs mt-1">
                  <li>Ajout de données d'entraînement pour les cas problématiques</li>
                  <li>Ajustement des prompts ou paramètres</li>
                  <li>Fine-tuning sur des données spécifiques</li>
                  <li>Logique business pour gérer les cas particuliers</li>
                </ul>
              </li>
              <li><strong>Validation</strong>: Tester les améliorations sur les cas problématiques identifiés</li>
              <li><strong>Déploiement et suivi</strong>: Mesurer l'impact des corrections sur les métriques globales</li>
            </ol>
          </div>
          
          <p className="text-sm mt-1">
            Un système efficace d'apprentissage par feedback crée une boucle vertueuse où chaque interaction utilisateur contribue 
            potentiellement à l'amélioration du système, rendant l'application IA de plus en plus pertinente et précise au fil du temps.
          </p>
        </div>
      </ZoomOn>

      <Illustration 
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" 
        alt="Équipe de développement en train de déployer et monitorer une application IA"
        caption="Le déploiement réussi d'applications IA requiert une collaboration étroite entre data scientists, ingénieurs et équipes opérationnelles"
        width="full"
      />

      <p className="mt-6">
        Le déploiement et la maintenance d'applications IA représentent un défi continu qui va bien au-delà du simple lancement 
        initial. En mettant en place des stratégies robustes de monitoring, de gestion des versions, d'optimisation des coûts et 
        de mise à jour, vous pouvez créer des applications IA qui non seulement fonctionnent correctement, mais s'améliorent 
        continuellement au fil du temps. Les bonnes pratiques présentées dans ce module vous aideront à anticiper et résoudre les 
        défis spécifiques aux applications pilotées par l'intelligence artificielle.
      </p>
      
      <p className="mt-4 text-muted-foreground">
        Vous avez maintenant complété l'ensemble des modules de ce cours sur le développement d'applications avec l'IA. Vous disposez 
        des connaissances et des outils nécessaires pour concevoir, développer et maintenir des solutions basées sur l'IA, qu'il 
        s'agisse d'applications traditionnelles intégrant des fonctionnalités d'IA ou de projets No Code enrichis par l'intelligence artificielle.
      </p>
    </div>
  );
};

export default DeploymentAIAppsModule;
