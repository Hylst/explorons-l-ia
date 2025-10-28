
import React from 'react';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart, BookOpen, ChevronRight, Database, LineChart, Settings, ArrowRight, Code, FileText } from 'lucide-react';
import LessonSection from '@/components/courses/LessonSection';
import CodeExample from '@/components/courses/CodeExample';
import ZoomOn from '@/components/courses/ZoomOn';
import Illustration from '@/components/courses/Illustration';
import CourseQuiz, { QuizQuestion } from '@/components/courses/CourseQuiz';

/**
 * Page du cours sur la création d'un premier modèle de machine learning
 * @returns {JSX.Element} Le composant de la page
 */
const PremierModeleML = () => {
  const quizQuestions: QuizQuestion[] = [
    {
      question: "Quelle est la différence principale entre l'apprentissage supervisé et non-supervisé?",
      options: [
        "L'apprentissage supervisé utilise plus de données",
        "L'apprentissage supervisé utilise des données étiquetées, l'apprentissage non-supervisé utilise des données non étiquetées",
        "L'apprentissage supervisé est plus rapide que l'apprentissage non-supervisé",
        "L'apprentissage non-supervisé est toujours plus précis"
      ],
      correctAnswer: 1,
      explanation: "L'apprentissage supervisé utilise des données où la réponse correcte (étiquette) est fournie, permettant au modèle d'apprendre à prédire ces étiquettes. L'apprentissage non-supervisé n'a pas d'étiquettes et cherche à découvrir des structures cachées dans les données."
    },
    {
      question: "Quelle technique devrait être utilisée pour évaluer correctement la performance d'un modèle de ML?",
      options: [
        "Utiliser tout le dataset pour l'entraînement et l'évaluation",
        "Validation croisée (cross-validation)",
        "Évaluer uniquement sur les données d'entraînement",
        "Évaluer uniquement sur les dernières données collectées"
      ],
      correctAnswer: 1,
      explanation: "La validation croisée divise les données en plusieurs sous-ensembles pour entraîner et évaluer le modèle sur différentes parties des données, offrant une évaluation plus robuste de sa capacité de généralisation."
    },
    {
      question: "Qu'est-ce que le surapprentissage (overfitting) en machine learning?",
      options: [
        "Quand le modèle est trop simple pour capturer les tendances des données",
        "Quand le modèle s'adapte trop bien aux données d'entraînement et généralise mal",
        "Quand le modèle est entraîné sur trop d'époques",
        "Quand le modèle a trop de paramètres à optimiser"
      ],
      correctAnswer: 1,
      explanation: "Le surapprentissage se produit lorsqu'un modèle capture le bruit dans les données d'entraînement plutôt que les véritables relations sous-jacentes, ce qui nuit à sa performance sur de nouvelles données."
    },
    {
      question: "Quel algorithme parmi les suivants N'est PAS un algorithme de classification?",
      options: [
        "Random Forest",
        "Régression logistique",
        "Régression linéaire",
        "Support Vector Machine (SVM)"
      ],
      correctAnswer: 2,
      explanation: "La régression linéaire est un algorithme de régression qui prédit une valeur continue, tandis que les autres options sont des algorithmes de classification qui prédisent des catégories discrètes."
    },
    {
      question: "Quelle est l'étape la plus importante avant d'entraîner un modèle de machine learning?",
      options: [
        "Normaliser toutes les données",
        "Explorer et comprendre les données",
        "Choisir le modèle le plus complexe possible",
        "Maximiser le nombre de caractéristiques (features)"
      ],
      correctAnswer: 1,
      explanation: "Explorer et comprendre les données est crucial pour identifier les problèmes potentiels (valeurs manquantes, outliers), comprendre les relations et guider le choix des techniques de prétraitement et des modèles appropriés."
    }
  ];

  return (
    <>
      <Hero
        title="Construire son Premier Modèle de Machine Learning (pas à pas)"
        subtitle="Un guide pratique pour développer et déployer votre premier modèle d'apprentissage automatique"
      />

      <section className="section-container mb-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <div className="mb-8">
              <SectionHeading title="À propos de ce cours" />
              <p className="text-lg mb-4">
                Ce cours pratique vous guide étape par étape dans la création de votre premier modèle de machine learning, de l'analyse initiale des données jusqu'au déploiement d'une solution fonctionnelle.
              </p>
              <p className="mb-4">
                Conçu comme un parcours complet, chaque module vous permettra d'acquérir les compétences nécessaires pour mener à bien un projet de machine learning de bout en bout, avec des exemples concrets et des cas d'usage réels.
              </p>
            </div>

            <div className="mb-8">
              <SectionHeading title="Ce que vous apprendrez" />
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Les étapes clés d'un projet de machine learning complet</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>L'exploration, la préparation et le prétraitement des données</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>La sélection, l'entraînement et l'évaluation de modèles avec scikit-learn</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>L'optimisation des hyperparamètres et l'amélioration de la performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Le déploiement et la maintenance de modèles en production</span>
                </li>
              </ul>
            </div>

            <div className="mb-10">
              <SectionHeading title="Plan du cours" />
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Database className="h-5 w-5 text-primary" />
                      Module 1: Définition du problème et collecte des données
                    </h3>
                    <p className="text-muted-foreground">Formulation du problème, identification des sources de données, stratégies de collecte et considérations éthiques.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <BarChart className="h-5 w-5 text-primary" />
                      Module 2: Exploration et visualisation des données
                    </h3>
                    <p className="text-muted-foreground">Techniques d'analyse exploratoire, statistiques descriptives, visualisations pertinentes et identification des patterns.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Settings className="h-5 w-5 text-primary" />
                      Module 3: Préparation et prétraitement des données
                    </h3>
                    <p className="text-muted-foreground">Nettoyage des données, gestion des valeurs manquantes, encodage des variables catégorielles et normalisation.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <ArrowRight className="h-5 w-5 text-primary" />
                      Module 4: Sélection de caractéristiques et feature engineering
                    </h3>
                    <p className="text-muted-foreground">Techniques de sélection de variables, création de nouvelles caractéristiques et transformation de données.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <LineChart className="h-5 w-5 text-primary" />
                      Module 5: Construction et entraînement du modèle
                    </h3>
                    <p className="text-muted-foreground">Choix de l'algorithme, split des données, entraînement du modèle et validation croisée.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Settings className="h-5 w-5 text-primary" />
                      Module 6: Évaluation et optimisation
                    </h3>
                    <p className="text-muted-foreground">Métriques d'évaluation, analyse des erreurs, optimisation des hyperparamètres et techniques avancées.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <ArrowRight className="h-5 w-5 text-primary" />
                      Module 7: Déploiement et maintenance
                    </h3>
                    <p className="text-muted-foreground">Sérialisation du modèle, création d'API, déploiement en production et surveillance de la performance.</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contenu détaillé des leçons */}
            <LessonSection title="Définition du problème et collecte des données" icon={<Database size={24} />} delay={1}>
              <p>
                Tout projet de machine learning commence par une définition claire du problème à résoudre et par la collecte de données pertinentes. Cette étape fondamentale détermine en grande partie le succès ou l'échec de votre projet.
              </p>

              <ZoomOn title="Types de problèmes en Machine Learning">
                <p>Il est essentiel d'identifier la nature de votre problème pour choisir les bons outils et approches :</p>
                <div className="mt-2 space-y-2">
                  <p>
                    <strong>Classification :</strong> Prédire une catégorie (ex: spam/non-spam, fraude/légitime)
                  </p>
                  <p>
                    <strong>Régression :</strong> Prédire une valeur numérique (ex: prix, température, ventes)
                  </p>
                  <p>
                    <strong>Clustering :</strong> Regrouper des données similaires sans étiquettes prédéfinies
                  </p>
                  <p>
                    <strong>Détection d'anomalies :</strong> Identifier des observations inhabituelles
                  </p>
                  <p>
                    <strong>Système de recommandation :</strong> Suggérer des items pertinents aux utilisateurs
                  </p>
                </div>
              </ZoomOn>

              <Illustration 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" 
                alt="Visualisation de données structurées"
                caption="La qualité des données est un facteur déterminant dans la performance finale de votre modèle"
                width="2/3"
              />

              <p className="mt-4">
                La collecte de données peut impliquer diverses sources : bases de données existantes, APIs, web scraping, capteurs, ou création de données spécifiques via des enquêtes. Il est crucial de s'assurer que les données collectées sont représentatives du problème réel.
              </p>

              <CodeExample 
                title="Chargement de jeux de données avec scikit-learn"
                language="python"
                code={`import numpy as np
import pandas as pd
from sklearn import datasets
import matplotlib.pyplot as plt
import seaborn as sns

# Charger des jeux de données intégrés
iris = datasets.load_iris()
boston = datasets.load_boston()
cancer = datasets.load_breast_cancer()

# Créer un DataFrame pandas à partir du jeu de données Iris
iris_df = pd.DataFrame(data=iris.data, columns=iris.feature_names)
iris_df['target'] = iris.target
iris_df['species'] = pd.Categorical.from_codes(iris.target, iris.target_names)

# Afficher les premières lignes
print("Aperçu du jeu de données Iris:")
print(iris_df.head())

# Informations sur le jeu de données
print("\\nInformations sur le jeu de données:")
print(f"Nombre d'échantillons: {len(iris_df)}")
print(f"Nombre de caractéristiques: {len(iris.feature_names)}")
print(f"Classes cibles: {iris.target_names}")
print(f"Distribution des classes: {np.bincount(iris.target)}")

# Statistiques descriptives
print("\\nStatistiques descriptives:")
print(iris_df.describe())

# Visualisation simple
plt.figure(figsize=(10, 6))
sns.scatterplot(x='sepal length (cm)', y='sepal width (cm)', 
                hue='species', data=iris_df, palette='viridis')
plt.title('Distribution des espèces d\'iris par dimensions des sépales')
plt.show()`}
                explanation="Ce code montre comment charger des jeux de données intégrés dans scikit-learn et effectuer une analyse exploratoire initiale avec pandas et des visualisations."
              />
            </LessonSection>

            <LessonSection title="Exploration et visualisation des données" icon={<BarChart size={24} />} delay={2}>
              <p>
                L'exploration des données (EDA - Exploratory Data Analysis) est une étape cruciale qui vous permet de comprendre la structure, les distributions et les relations dans vos données avant de construire un modèle.
              </p>

              <CodeExample 
                title="Analyse exploratoire avec pandas et seaborn"
                language="python"
                code={`import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

# Charger un jeu de données réel
from sklearn.datasets import fetch_california_housing
housing = fetch_california_housing()
df = pd.DataFrame(housing.data, columns=housing.feature_names)
df['target'] = housing.target

# Afficher la forme et les informations du DataFrame
print(f"Forme du DataFrame: {df.shape}")
print("\\nAperçu des données:")
print(df.head())

# Vérifier les valeurs manquantes
print("\\nVérification des valeurs manquantes:")
print(df.isnull().sum())

# Statistiques descriptives
print("\\nStatistiques descriptives:")
print(df.describe())

# Visualiser la distribution de la variable cible
plt.figure(figsize=(10, 6))
sns.histplot(df['target'], kde=True)
plt.title('Distribution des prix des logements')
plt.xlabel('Prix médian (en 100 000$)')
plt.show()

# Corrélation entre les variables
plt.figure(figsize=(12, 8))
correlation_matrix = df.corr()
sns.heatmap(correlation_matrix, annot=True, cmap='coolwarm', fmt=".2f")
plt.title('Matrice de corrélation')
plt.show()

# Visualiser quelques relations bivariées
plt.figure(figsize=(16, 10))
plt.subplot(2, 3, 1)
sns.scatterplot(x='MedInc', y='target', data=df, alpha=0.5)
plt.title('Prix vs Revenu médian')

plt.subplot(2, 3, 2)
sns.scatterplot(x='HouseAge', y='target', data=df, alpha=0.5)
plt.title('Prix vs Âge des maisons')

plt.subplot(2, 3, 3)
sns.scatterplot(x='AveRooms', y='target', data=df, alpha=0.5)
plt.title('Prix vs Nombre moyen de pièces')

plt.subplot(2, 3, 4)
sns.boxplot(x=pd.qcut(df['MedInc'], 5), y='target', data=df)
plt.title('Distribution des prix par quintile de revenu')
plt.xlabel('Quintile de revenu médian')

plt.subplot(2, 3, 5)
sns.boxplot(x=pd.qcut(df['Population'], 5), y='target', data=df)
plt.title('Distribution des prix par quintile de population')
plt.xlabel('Quintile de population')

plt.tight_layout()
plt.show()

# Identifier les outliers
plt.figure(figsize=(15, 10))
for i, feature in enumerate(housing.feature_names):
    plt.subplot(3, 3, i+1)
    sns.boxplot(y=df[feature])
    plt.title(f'Boxplot de {feature}')

plt.tight_layout()
plt.show()`}
                explanation="Ce code illustre diverses techniques d'analyse exploratoire : statistiques descriptives, visualisation des distributions, analyse de corrélation, et identification d'outliers."
              />

              <ZoomOn title="Importance de la visualisation des données">
                <p>
                  "Une image vaut mille mots" est particulièrement vrai en data science. La visualisation permet de :
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Identifier rapidement des tendances et patterns que les statistiques pourraient masquer</li>
                  <li>Détecter des anomalies ou valeurs aberrantes</li>
                  <li>Comprendre les relations entre variables</li>
                  <li>Communiquer efficacement les insights découverts</li>
                  <li>Guider les décisions sur le prétraitement des données et la sélection de modèles</li>
                </ul>
              </ZoomOn>

              <Illustration 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" 
                alt="Tableaux de bord avec visualisations de données"
                caption="Les visualisations révèlent des insights cruciaux avant même de construire un modèle"
                width="2/3"
              />
            </LessonSection>

            <LessonSection title="Construction et entraînement du modèle" icon={<LineChart size={24} />} delay={3}>
              <p>
                La construction et l'entraînement d'un modèle sont au cœur de tout projet de machine learning. Cette étape implique de sélectionner un algorithme approprié, de préparer les données pour l'entraînement et de configurer le processus d'apprentissage.
              </p>

              <CodeExample 
                title="Entraînement et évaluation d'un modèle avec scikit-learn"
                language="python"
                code={`import numpy as np
import pandas as pd
from sklearn.datasets import load_diabetes
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LinearRegression, Ridge, Lasso
from sklearn.ensemble import RandomForestRegressor, GradientBoostingRegressor
from sklearn.metrics import mean_squared_error, r2_score
import matplotlib.pyplot as plt

# Charger les données
diabetes = load_diabetes()
X = diabetes.data
y = diabetes.target

# Diviser en ensemble d'entraînement et de test
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Standardiser les caractéristiques (important pour de nombreux algorithmes)
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Définir plusieurs modèles à comparer
models = {
    'Régression Linéaire': LinearRegression(),
    'Ridge': Ridge(alpha=1.0),
    'Lasso': Lasso(alpha=0.1),
    'Random Forest': RandomForestRegressor(n_estimators=100, random_state=42),
    'Gradient Boosting': GradientBoostingRegressor(n_estimators=100, random_state=42)
}

# Comparer les modèles avec validation croisée
cv_results = {}
for name, model in models.items():
    scores = cross_val_score(model, X_train_scaled, y_train, 
                           cv=5, scoring='neg_mean_squared_error')
    cv_results[name] = -scores.mean()
    print(f"{name} - MSE CV: {-scores.mean():.2f} (±{scores.std():.2f})")

# Sélectionner et entraîner le meilleur modèle
best_model_name = min(cv_results, key=cv_results.get)
best_model = models[best_model_name]
print(f"\\nMeilleur modèle: {best_model_name}")

# Entraîner sur l'ensemble complet d'entraînement
best_model.fit(X_train_scaled, y_train)

# Évaluer sur l'ensemble de test
y_pred = best_model.predict(X_test_scaled)
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)
print(f"Performance sur l'ensemble de test:")
print(f"MSE: {mse:.2f}")
print(f"RMSE: {np.sqrt(mse):.2f}")
print(f"R²: {r2:.2f}")

# Visualiser les prédictions vs réalité
plt.figure(figsize=(10, 6))
plt.scatter(y_test, y_pred, alpha=0.7)
plt.plot([y_test.min(), y_test.max()], [y_test.min(), y_test.max()], 'r--')
plt.xlabel('Valeurs réelles')
plt.ylabel('Prédictions')
plt.title(f'Prédictions vs Réalité - {best_model_name}')
plt.show()

# Si c'est un modèle qui fournit des importances de caractéristiques
if hasattr(best_model, 'feature_importances_'):
    importances = best_model.feature_importances_
    indices = np.argsort(importances)[::-1]
    
    plt.figure(figsize=(12, 6))
    plt.bar(range(X.shape[1]), importances[indices])
    plt.xticks(range(X.shape[1]), [diabetes.feature_names[i] for i in indices], rotation=90)
    plt.title('Importance des caractéristiques')
    plt.tight_layout()
    plt.show()`}
                explanation="Ce code illustre le processus complet d'entraînement et d'évaluation de modèles : division des données, standardisation, comparaison de plusieurs algorithmes avec validation croisée, sélection et évaluation finale du meilleur modèle."
              />

              <ZoomOn title="Comparaison des algorithmes courants">
                <div className="space-y-3">
                  <p>
                    <strong>Régression linéaire/logistique :</strong> 
                    Simples, interprétables, rapides, mais limités aux relations linéaires.
                  </p>
                  <p>
                    <strong>Arbres de décision :</strong> 
                    Faciles à comprendre, gèrent bien les données hétérogènes, mais peuvent surapprendre.
                  </p>
                  <p>
                    <strong>Random Forest et Gradient Boosting :</strong> 
                    Très performants, robustes, moins sujets au surapprentissage, mais moins interprétables.
                  </p>
                  <p>
                    <strong>Support Vector Machines :</strong> 
                    Efficaces en haute dimension avec séparation claire, mais peuvent être lents sur de grands jeux de données.
                  </p>
                  <p>
                    <strong>K-Nearest Neighbors :</strong> 
                    Simple et intuitif, mais peut être coûteux en calcul pour de grands ensembles.
                  </p>
                </div>
                <p className="mt-3">
                  Le choix de l'algorithme dépend de la taille et nature des données, la complexité du problème, l'interprétabilité requise, et les contraintes de ressources.
                </p>
              </ZoomOn>

              <Illustration 
                src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" 
                alt="Représentation visuelle d'un modèle d'apprentissage automatique"
                caption="La validation croisée permet d'évaluer plus robustement la performance de votre modèle"
                width="2/3"
              />
            </LessonSection>

            <LessonSection title="Optimisation et déploiement du modèle" icon={<Settings size={24} />} delay={4}>
              <p>
                Une fois le modèle de base créé, il est essentiel d'optimiser ses performances et de le préparer au déploiement pour qu'il puisse générer de la valeur en environnement réel.
              </p>

              <CodeExample 
                title="Optimisation des hyperparamètres et déploiement"
                language="python"
                code={`import numpy as np
import pandas as pd
from sklearn.datasets import load_wine
from sklearn.model_selection import train_test_split, GridSearchCV
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, confusion_matrix
import matplotlib.pyplot as plt
import seaborn as sns
import joblib
import pickle

# Charger les données
wine = load_wine()
X = wine.data
y = wine.target
feature_names = wine.feature_names
target_names = wine.target_names

# Diviser en ensemble d'entraînement et de test
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Normaliser les données
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Définir le modèle et l'espace de recherche des hyperparamètres
rf = RandomForestClassifier(random_state=42)
param_grid = {
    'n_estimators': [50, 100, 200],
    'max_depth': [None, 10, 20, 30],
    'min_samples_split': [2, 5, 10],
    'min_samples_leaf': [1, 2, 4]
}

# Recherche par grille avec validation croisée
print("Optimisation des hyperparamètres en cours...")
grid_search = GridSearchCV(
    estimator=rf, 
    param_grid=param_grid,
    cv=5, 
    n_jobs=-1, 
    scoring='accuracy',
    verbose=1
)

grid_search.fit(X_train_scaled, y_train)

# Meilleurs hyperparamètres et score
print(f"\\nMeilleurs hyperparamètres: {grid_search.best_params_}")
print(f"Meilleur score de validation croisée: {grid_search.best_score_:.4f}")

# Évaluer sur l'ensemble de test
best_model = grid_search.best_estimator_
y_pred = best_model.predict(X_test_scaled)

print("\\nRapport de classification sur l'ensemble de test:")
print(classification_report(y_test, y_pred, target_names=target_names))

# Visualiser la matrice de confusion
plt.figure(figsize=(10, 8))
cm = confusion_matrix(y_test, y_pred)
sns.heatmap(cm, annot=True, fmt='d', cmap='Blues', xticklabels=target_names, yticklabels=target_names)
plt.xlabel('Prédictions')
plt.ylabel('Valeurs réelles')
plt.title('Matrice de confusion')
plt.show()

# Importance des caractéristiques
importances = best_model.feature_importances_
indices = np.argsort(importances)[::-1]

plt.figure(figsize=(12, 8))
plt.title('Importance des caractéristiques')
plt.bar(range(X.shape[1]), importances[indices], align='center')
plt.xticks(range(X.shape[1]), [feature_names[i] for i in indices], rotation=90)
plt.tight_layout()
plt.show()

# Sauvegarder le modèle et le scaler pour le déploiement
print("\\nSauvegarde du modèle et des préprocesseurs...")
joblib.dump(best_model, 'wine_classifier_model.joblib')
joblib.dump(scaler, 'wine_classifier_scaler.joblib')

# Exemple d'utilisation du modèle sauvegardé
print("\\nTest de chargement et utilisation du modèle sauvegardé:")
loaded_model = joblib.load('wine_classifier_model.joblib')
loaded_scaler = joblib.load('wine_classifier_scaler.joblib')

# Simuler une nouvelle donnée
new_wine_sample = X_test[0].reshape(1, -1)
new_wine_scaled = loaded_scaler.transform(new_wine_sample)
prediction = loaded_model.predict(new_wine_scaled)
prediction_proba = loaded_model.predict_proba(new_wine_scaled)

print(f"Catégorie prédite: {target_names[prediction[0]]}")
for i, proba in enumerate(prediction_proba[0]):
    print(f"Probabilité {target_names[i]}: {proba:.4f}")`}
                explanation="Ce code montre comment optimiser les hyperparamètres d'un modèle avec GridSearchCV, évaluer sa performance, et le sauvegarder pour un déploiement futur. Il illustre également comment charger et utiliser le modèle sauvegardé pour faire des prédictions sur de nouvelles données."
              />

              <ZoomOn title="Considérations pour le déploiement">
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Reproductibilité :</strong> Fixer toutes les sources de randomisation avec des random_state</li>
                  <li><strong>Pipeline complet :</strong> Sauvegarder non seulement le modèle, mais aussi tous les préprocesseurs</li>
                  <li><strong>Surveillance :</strong> Mettre en place des métriques pour suivre la performance du modèle en production</li>
                  <li><strong>Dérive des données :</strong> Prévoir un mécanisme pour détecter quand le modèle devient obsolète</li>
                  <li><strong>Mise à jour :</strong> Établir un processus pour réentraîner et redéployer le modèle régulièrement</li>
                  <li><strong>Documentation :</strong> Documenter en détail le modèle, ses entrées, sorties et limites</li>
                </ul>
              </ZoomOn>

              <CodeExample 
                title="Déploiement simple avec Flask"
                language="python"
                code={`from flask import Flask, request, jsonify
import numpy as np
import joblib

# Charger le modèle et le scaler
model = joblib.load('wine_classifier_model.joblib')
scaler = joblib.load('wine_classifier_scaler.joblib')
target_names = ['class_0', 'class_1', 'class_2']  # À remplacer par vos classes réelles

# Créer l'application Flask
app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Récupérer les données de la requête
        data = request.json
        features = np.array(data['features']).reshape(1, -1)
        
        # Prétraiter les données
        scaled_features = scaler.transform(features)
        
        # Faire la prédiction
        prediction = int(model.predict(scaled_features)[0])
        probabilities = model.predict_proba(scaled_features)[0].tolist()
        
        # Préparer la réponse
        response = {
            'prediction': prediction,
            'predicted_class': target_names[prediction],
            'probabilities': {target_names[i]: prob for i, prob in enumerate(probabilities)}
        }
        
        return jsonify(response)
    
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)

# Pour faire une requête à cette API:
'''
import requests
import json

url = 'http://localhost:5000/predict'
data = {
    'features': [12.0, 3.6, 2.5, 6.2, 1.2, 2.3, 3.4, 1.6, 2.9, 3.8, 1.2, 2.8, 3.0]
}
headers = {'Content-Type': 'application/json'}

response = requests.post(url, data=json.dumps(data), headers=headers)
print(response.json())
'''`}
                explanation="Cet exemple montre comment créer une API simple avec Flask pour servir votre modèle de machine learning en production. Les utilisateurs peuvent envoyer des données via une requête POST et recevoir des prédictions en réponse."
              />

              <Illustration 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" 
                alt="Interface utilisateur d'application utilisant un modèle de machine learning"
                caption="Le déploiement transforme votre modèle en une solution utilisable qui génère de la valeur"
                width="2/3"
              />
            </LessonSection>

            {/* Quiz du cours */}
            <CourseQuiz
              title="Quiz : Construction d'un modèle de Machine Learning"
              questions={quizQuestions}
            />

          </div>

          <div className="md:w-1/3">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Informations sur le cours</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-1">Auteur</h4>
                    <p>Geoffroy Streit</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-1">Niveau</h4>
                    <p>Intermédiaire</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-1">Durée</h4>
                    <p>6 semaines (3-5 heures/semaine)</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-1">Prérequis</h4>
                    <p>Connaissance de base en Python et familiarité avec les concepts fondamentaux de statistiques et d'analyse de données.</p>
                  </div>
                  
                  <div className="pt-2">
                    <h4 className="font-medium text-sm text-muted-foreground mb-2">Ressources</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <span>Guide pas-à-pas</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Database className="h-4 w-4 text-primary" />
                        <span>Jeux de données d'exemple</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <LineChart className="h-4 w-4 text-primary" />
                        <span>Notebooks commentés</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Settings className="h-4 w-4 text-primary" />
                        <span>Projet complet</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default PremierModeleML;
