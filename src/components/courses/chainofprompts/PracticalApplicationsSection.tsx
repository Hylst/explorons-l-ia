
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Code, 
  BarChart3, 
  FileText, 
  Lightbulb,
  Target,
  Zap,
  Rocket
} from 'lucide-react';
import LessonSection from '@/components/courses/LessonSection';
import CodeExample from '@/components/courses/CodeExample';
import StatsGrid from '@/components/courses/StatsGrid';

const PracticalApplicationsSection = () => {
  const practicalStats = [
    { value: "89%", description: "succès avec validation d'étapes" },
    { value: "4.2x", description: "gain productivité développeurs" },
    { value: "45s", description: "temps moyen par itération" },
    { value: "€2.3K", description: "économies mensuelles moyennes" }
  ];

  return (
    <LessonSection
      title="Applications pratiques et cas d'usage métier"
      icon={<Users className="h-6 w-6" />}
      delay={4}
    >
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20 border border-green-200 dark:border-green-800 p-6 rounded-lg">
          <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3 flex items-center gap-2">
            <Target className="h-5 w-5" />
            Domaines d'application privilégiés
          </h4>
          <p className="text-green-700 dark:text-green-300">
            Le chain of prompts excelle dans les domaines nécessitant une approche méthodique : 
            développement, analyse, création de contenu, résolution de problèmes complexes.
          </p>
        </div>

        <StatsGrid stats={practicalStats} columns={4} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-4 text-blue-600 flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Analyse business avancée
            </h4>
            <CodeExample
              title="Workflow d'analyse stratégique"
              language="Business Flow"
              code={`# Étape 1: Analyse préliminaire
"Analyse SWOT de [entreprise] dans le secteur [X]. 
Focus sur les 3 forces/faiblesses principales avec données quantifiées."

# Étape 2: Approfondissement ciblé  
"Pour la faiblesse #2 identifiée (exemple: parts de marché), 
propose un plan d'amélioration en 5 étapes avec timeline et budget."

# Étape 3: Évaluation financière
"Chiffre l'impact ROI de l'étape #3 du plan précédent. 
Hypothèses: budget 500K€, équipe 8 personnes, horizon 18 mois."

# Étape 4: Business case exécutif
"Rédige le business case pour le COMEX basé sur l'analyse précédente. 
Format: problème-solution-ROI-risques. Maximum 2 pages."

# Étape 5: Plan d'action
"Transforme le business case en roadmap opérationnelle 
avec jalons trimestriels et KPI de suivi."`}
              explanation="Progression méthodique de l'analyse macro vers un plan d'action opérationnel chiffré."
            />
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-purple-600 flex items-center gap-2">
              <Code className="h-5 w-5" />
              Développement assisté par IA
            </h4>
            <CodeExample
              title="Chain de développement optimisé"
              language="Dev Flow"
              code={`# Étape 1: Architecture et planification
"Conçois l'architecture d'une API REST pour [fonctionnalité]. 
Stack: Node.js + Express + PostgreSQL. Patterns: Clean Architecture."

# Étape 2: Implémentation des modèles
"Implémente les modèles de données basés sur l'architecture précédente. 
Include les validations Joi et relations Sequelize."

# Étape 3: Contrôleurs et routes
"Crée les contrôleurs et routes pour l'API. 
Gestion d'erreurs avec middleware personnalisé et logging Winston."

# Étape 4: Tests unitaires et intégration
"Génère une suite de tests Jest couvrant 90% du code. 
Include mocks pour base de données et services externes."

# Étape 5: Documentation et déploiement
"Rédige la documentation Swagger et script de déploiement Docker. 
Include les variables d'environnement et healthchecks."`}
              explanation="Workflow complet du design à la production avec bonnes pratiques intégrées."
            />
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-orange-600 flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Création de contenu stratégique
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 border-orange-200 dark:border-orange-800">
              <h5 className="font-medium text-orange-800 dark:text-orange-200 mb-2">Phase recherche</h5>
              <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                <li>• Analyse de la cible</li>
                <li>• Recherche concurrentielle</li>
                <li>• Identification des points de douleur</li>
                <li>• Définition des objectifs</li>
              </ul>
            </Card>
            
            <Card className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800">
              <h5 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Phase création</h5>
              <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                <li>• Structure du contenu</li>
                <li>• Rédaction par sections</li>
                <li>• Optimisation SEO</li>
                <li>• Intégration des CTA</li>
              </ul>
            </Card>
            
            <Card className="p-4 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20 border-green-200 dark:border-green-800">
              <h5 className="font-medium text-green-800 dark:text-green-200 mb-2">Phase optimisation</h5>
              <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                <li>• Tests A/B des titres</li>
                <li>• Adaptation aux formats</li>
                <li>• Personnalisation par canal</li>
                <li>• Mesure de performance</li>
              </ul>
            </Card>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border border-indigo-200 dark:border-indigo-800 p-6 rounded-lg">
          <h4 className="font-medium text-indigo-800 dark:text-indigo-200 mb-4 flex items-center gap-2">
            <Rocket className="h-5 w-5" />
            Template universel en 5 phases (version enrichie)
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-sm">
            {[
              { 
                step: "1", 
                title: "CONTEXTE", 
                desc: "Objectif, contraintes, success criteria",
                color: "bg-blue-500"
              },
              { 
                step: "2", 
                title: "EXPLORATION", 
                desc: "Collecte d'infos, analyse préliminaire",
                color: "bg-green-500"
              },
              { 
                step: "3", 
                title: "ANALYSE", 
                desc: "Traitement, structuration, insights",
                color: "bg-yellow-500"
              },
              { 
                step: "4", 
                title: "SYNTHÈSE", 
                desc: "Recommandations, plan d'action",
                color: "bg-orange-500"
              },
              { 
                step: "5", 
                title: "VALIDATION", 
                desc: "Tests, métriques, optimisation",
                color: "bg-purple-500"
              }
            ].map((item, index) => (
              <Card key={index} className="p-4 text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <div className={`text-lg font-bold ${item.color} text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2`}>
                  {item.step}
                </div>
                <div className="text-xs font-medium text-gray-800 dark:text-gray-200 mb-1">{item.title}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">{item.desc}</div>
              </Card>
            ))}
          </div>
          <div className="mt-4 p-3 bg-white/50 dark:bg-gray-800/50 rounded-lg">
            <p className="text-xs text-indigo-700 dark:text-indigo-300">
              <strong>Pro-tip :</strong> Chaque phase peut contenir 2-3 prompts selon la complexité. 
              Validez systématiquement avant de passer à la phase suivante.
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-red-600 flex items-center gap-2">
            <Lightbulb className="h-5 w-5" />
            Patterns avancés d'enchaînement
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-4 hover:shadow-md transition-all duration-300">
              <Badge variant="outline" className="mb-2">Pattern Convergent</Badge>
              <h5 className="font-medium mb-2">Exploration parallèle → Synthèse</h5>
              <p className="text-sm text-muted-foreground">
                Explorez 3-4 approches différentes en parallèle, puis convergez vers la meilleure solution hybride.
              </p>
            </Card>
            
            <Card className="p-4 hover:shadow-md transition-all duration-300">
              <Badge variant="outline" className="mb-2">Pattern Itératif</Badge>
              <h5 className="font-medium mb-2">Boucle d'amélioration continue</h5>
              <p className="text-sm text-muted-foreground">
                Cycle répétitif : générer → évaluer → affiner jusqu'à atteindre le niveau de qualité souhaité.
              </p>
            </Card>
            
            <Card className="p-4 hover:shadow-md transition-all duration-300">
              <Badge variant="outline" className="mb-2">Pattern Hiérarchique</Badge>
              <h5 className="font-medium mb-2">Construction par couches</h5>
              <p className="text-sm text-muted-foreground">
                Approche bottom-up ou top-down : fondations → structure → détails → finitions.
              </p>
            </Card>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border border-emerald-200 dark:border-emerald-800 p-6 rounded-lg">
          <h4 className="font-medium text-emerald-800 dark:text-emerald-200 mb-3 flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Métriques de succès d'une chaîne
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">≤ 12</div>
              <div className="text-xs text-emerald-700 dark:text-emerald-300">étapes maximum</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">&gt; 85%</div>
              <div className="text-xs text-emerald-700 dark:text-emerald-300">taux de validation</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">&lt; 3s</div>
              <div className="text-xs text-emerald-700 dark:text-emerald-300">temps/itération</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">5x+</div>
              <div className="text-xs text-emerald-700 dark:text-emerald-300">gain vs prompt unique</div>
            </div>
          </div>
        </div>
      </div>
    </LessonSection>
  );
};

export default PracticalApplicationsSection;
