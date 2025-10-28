
import React from 'react';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';
import { Code, BookOpen, PlayCircle, FileText, ChevronRight, Terminal, Database, BarChart, PenTool, PackageOpen, ArrowRightCircle } from 'lucide-react';
import LessonSection from '@/components/courses/LessonSection';
import CodeExample from '@/components/courses/CodeExample';
import ZoomOn from '@/components/courses/ZoomOn';
import Illustration from '@/components/courses/Illustration';
import CourseQuiz, { QuizQuestion } from '@/components/courses/CourseQuiz';

/**
 * Page du cours d'initiation à Python pour l'IA
 * @returns {JSX.Element} Le composant de la page
 */
const PythonIA = () => {
  const quizQuestions: QuizQuestion[] = [
    {
      question: "Quelle est la syntaxe correcte pour créer une liste en Python?",
      options: [
        "array(1, 2, 3)",
        "[1, 2, 3]",
        "{1, 2, 3}",
        "(1, 2, 3)"
      ],
      correctAnswer: 1,
      explanation: "En Python, une liste est définie à l'aide de crochets [ ]. Les accolades { } sont utilisées pour les ensembles ou les dictionnaires, et les parenthèses ( ) pour les tuples."
    },
    {
      question: "Quelle bibliothèque Python est principalement utilisée pour la manipulation de tableaux numériques en IA?",
      options: [
        "Pandas",
        "Matplotlib",
        "NumPy",
        "Scikit-learn"
      ],
      correctAnswer: 2,
      explanation: "NumPy est la bibliothèque fondamentale pour le calcul scientifique en Python, fournissant des structures de données efficaces pour les tableaux multidimensionnels essentiels au traitement des données en IA."
    },
    {
      question: "Comment importer correctement la bibliothèque Pandas avec son alias conventionnel?",
      options: [
        "import pandas",
        "import pandas as pd",
        "from pandas import *",
        "require pandas"
      ],
      correctAnswer: 1,
      explanation: "La convention en Python est d'importer Pandas avec l'alias 'pd' pour faciliter l'écriture du code tout en indiquant clairement l'origine des fonctions."
    },
    {
      question: "Quelle instruction Python suivante est correcte pour créer une fonction?",
      options: [
        "function maFonction():",
        "def maFonction():",
        "create maFonction():",
        "func maFonction():"
      ],
      correctAnswer: 1,
      explanation: "En Python, le mot-clé 'def' est utilisé pour définir une fonction, suivi du nom de la fonction et de parenthèses pour les paramètres."
    },
    {
      question: "Quelle bibliothèque Python est utilisée pour créer des visualisations de données?",
      options: [
        "NumPy",
        "Scikit-learn",
        "Pandas",
        "Matplotlib"
      ],
      correctAnswer: 3,
      explanation: "Matplotlib est la bibliothèque de visualisation standard en Python, utilisée pour créer des graphiques statiques, interactifs et informatifs."
    },
    {
      question: "Comment gérer les valeurs manquantes dans un DataFrame Pandas?",
      options: [
        "df.remove_missing()",
        "df.clean()",
        "df.dropna()",
        "df.fill(0)"
      ],
      correctAnswer: 2,
      explanation: "La méthode dropna() permet de supprimer les lignes ou colonnes contenant des valeurs manquantes dans un DataFrame Pandas."
    },
    {
      question: "Quelle structure de contrôle est utilisée pour répéter un bloc de code tant qu'une condition est vraie?",
      options: [
        "if-else",
        "for loop",
        "while loop",
        "switch case"
      ],
      correctAnswer: 2,
      explanation: "La boucle while permet d'exécuter un bloc de code répétitivement tant que la condition spécifiée reste vraie."
    }
  ];

  return (
    <>
      <Hero
        title="Initiation à Python pour l'Intelligence Artificielle"
        subtitle="Apprenez les bases de la programmation Python spécifiquement orientées vers les applications d'IA"
      />

      <section className="section-container mb-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <div className="mb-8">
              <SectionHeading title="À propos de ce cours" />
              <p className="text-lg mb-4">
                Python est devenu le langage de programmation de choix pour le développement d'applications d'intelligence artificielle. Ce cours vous guidera à travers les concepts fondamentaux de Python, spécifiquement orientés vers l'utilisation dans le domaine de l'IA.
              </p>
              <p className="mb-4">
                Que vous soyez débutant en programmation ou que vous souhaitiez approfondir vos connaissances en Python pour l'IA, ce cours vous fournira les compétences essentielles pour commencer à développer vos propres solutions d'IA.
              </p>
            </div>

            <div className="mb-8">
              <SectionHeading title="Ce que vous apprendrez" />
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Les bases de la syntaxe Python et les structures de données essentielles</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>La manipulation de données avec NumPy et Pandas</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>La visualisation de données avec Matplotlib et Seaborn</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>L'introduction aux bibliothèques d'IA comme scikit-learn</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Des projets pratiques pour consolider vos connaissances</span>
                </li>
              </ul>
            </div>

            <div className="mb-10">
              <SectionHeading title="Plan du cours" />
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Code className="h-5 w-5 text-primary" />
                      Module 1: Introduction à Python et à son écosystème
                    </h3>
                    <p className="text-muted-foreground">Installation de Python, premiers scripts, variables, types de données, et opérateurs.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Code className="h-5 w-5 text-primary" />
                      Module 2: Structures de données et contrôle de flux
                    </h3>
                    <p className="text-muted-foreground">Listes, dictionnaires, tuples, sets, conditions, boucles et fonctions.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Code className="h-5 w-5 text-primary" />
                      Module 3: Programmation orientée objet en Python
                    </h3>
                    <p className="text-muted-foreground">Classes, objets, héritage, encapsulation et bonnes pratiques de programmation.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Code className="h-5 w-5 text-primary" />
                      Module 4: NumPy et manipulation de tableaux
                    </h3>
                    <p className="text-muted-foreground">Tableaux NumPy, opérations mathématiques et manipulation de données multidimensionnelles.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Code className="h-5 w-5 text-primary" />
                      Module 5: Pandas pour l'analyse de données
                    </h3>
                    <p className="text-muted-foreground">DataFrames, séries, importation/exportation de données et prétraitement pour l'IA.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <Code className="h-5 w-5 text-primary" />
                      Module 6: Visualisation de données et introduction à scikit-learn
                    </h3>
                    <p className="text-muted-foreground">Matplotlib, Seaborn et premiers pas avec scikit-learn pour l'apprentissage automatique.</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contenu détaillé des leçons */}
            <LessonSection title="Introduction à Python et son écosystème" icon={<Terminal size={24} />} delay={1}>
              <p>
                Python est aujourd'hui l'un des langages les plus utilisés dans le domaine de l'intelligence artificielle en raison de sa syntaxe claire, sa facilité d'apprentissage et son vaste écosystème de bibliothèques spécialisées.
              </p>
              
              <ZoomOn title="Pourquoi Python pour l'IA ?">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Syntaxe claire et intuitive qui facilite l'implémentation rapide d'idées</li>
                  <li>Écosystème riche de bibliothèques dédiées à l'IA (NumPy, Pandas, scikit-learn, TensorFlow, PyTorch)</li>
                  <li>Grande communauté qui développe et maintient des outils open-source</li>
                  <li>Intégration facile avec d'autres technologies et systèmes</li>
                  <li>Performance optimisée pour les calculs scientifiques grâce à des bibliothèques compilées en C/C++</li>
                  <li>Possibilité d'extension avec du code C/C++ pour les parties critiques en performance</li>
                </ul>
              </ZoomOn>

              <div className="my-6 grid sm:grid-cols-3 gap-4">
                <div className="bg-muted rounded-lg p-4">
                  <h5 className="font-medium text-center mb-2">Popularité</h5>
                  <div className="text-4xl font-bold text-primary text-center mb-1">#1</div>
                  <p className="text-sm text-center text-muted-foreground">en data science et IA depuis 2017</p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <h5 className="font-medium text-center mb-2">Bibliothèques IA</h5>
                  <div className="text-4xl font-bold text-primary text-center mb-1">200+</div>
                  <p className="text-sm text-center text-muted-foreground">spécifiques à l'IA et au ML</p>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <h5 className="font-medium text-center mb-2">Intégrations</h5>
                  <div className="text-4xl font-bold text-primary text-center mb-1">∞</div>
                  <p className="text-sm text-center text-muted-foreground">compatibilité avec autres systèmes</p>
                </div>
              </div>

              <CodeExample 
                title="Votre premier script Python"
                language="python"
                code={`# Un simple programme pour illustrer la syntaxe Python
print("Bienvenue dans le cours Python pour l'IA !")

# Variables et types de données
nom = "Python"       # chaîne de caractères (string)
version = 3.9        # nombre à virgule flottante (float)
est_puissant = True  # booléen (bool)
liste_libs = ["NumPy", "Pandas", "scikit-learn", "TensorFlow"]  # liste

# Affichage formaté avec f-string (disponible depuis Python 3.6+)
print(f"{nom} version {version} est un langage puissant : {est_puissant}")

# Une simple fonction
def saluer(nom):
    """Cette fonction retourne un message de salutation personnalisé"""
    return f"Bonjour, {nom} !"

# Appel de la fonction
message = saluer("développeur IA")
print(message)

# Parcours d'une liste avec une boucle for
print("Bibliothèques Python populaires pour l'IA:")
for i, lib in enumerate(liste_libs, 1):
    print(f"{i}. {lib}")`}
                explanation="Ce script simple illustre la syntaxe de base de Python, y compris les variables, types de données, f-strings, fonctions, documentation et boucles. La simplicité et la lisibilité du code Python sont des atouts majeurs pour le développement en IA."
              />

              <Illustration 
                src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" 
                alt="Développeur travaillant sur du code Python"
                caption="Python est un langage accessible aux débutants tout en étant puissant pour les applications avancées"
                width="2/3"
              />

              <ZoomOn title="Installation et environnement de développement">
                <p>
                  Pour commencer avec Python pour l'IA, voici les étapes recommandées :
                </p>
                <ol className="list-decimal pl-6 mt-2 mb-2">
                  <li><strong>Installation d'Anaconda</strong> : Une distribution qui inclut Python et de nombreuses bibliothèques scientifiques préinstallées</li>
                  <li><strong>Utilisation de Jupyter Notebook</strong> : Un environnement interactif idéal pour l'exploration de données et le prototypage</li>
                  <li><strong>IDE spécialisés</strong> : PyCharm, VSCode avec extensions Python, ou Spyder pour des projets plus complexes</li>
                  <li><strong>Environnements virtuels</strong> : Utiliser conda ou venv pour isoler les dépendances de chaque projet</li>
                </ol>
                <p className="mt-2">
                  Ces outils facilitent considérablement le développement et l'expérimentation en IA, permettant de se concentrer sur les algorithmes plutôt que sur la configuration technique.
                </p>
              </ZoomOn>
            </LessonSection>

            <LessonSection title="Structures de données pour l'IA" icon={<Database size={24} />} delay={2}>
              <p>
                Les structures de données sont fondamentales en Python, particulièrement pour l'IA où la manipulation efficace des données est essentielle. Python offre plusieurs types de structures de données intégrées qui sont couramment utilisées dans les applications d'IA.
              </p>

              <div className="my-6 bg-muted p-5 rounded-lg">
                <h4 className="font-medium mb-4">Structures de données fondamentales en Python</h4>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium mb-2 flex items-center gap-2">
                      <PackageOpen className="h-4 w-4 text-primary" />
                      Collections ordonnées
                    </h5>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <ArrowRightCircle className="h-4 w-4 text-primary shrink-0 mt-1" />
                        <div>
                          <span className="font-medium">Liste</span> (mutable)
                          <p className="text-xs text-muted-foreground mt-1">
                            <code>[1, 2, 3]</code> — Séquence ordonnée d'éléments, parfaite pour stocker des données qui peuvent changer
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRightCircle className="h-4 w-4 text-primary shrink-0 mt-1" />
                        <div>
                          <span className="font-medium">Tuple</span> (immutable)
                          <p className="text-xs text-muted-foreground mt-1">
                            <code>(1, 2, 3)</code> — Séquence ordonnée non modifiable, utile pour les données qui ne doivent pas changer
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2 flex items-center gap-2">
                      <PackageOpen className="h-4 w-4 text-primary" />
                      Collections non ordonnées
                    </h5>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <ArrowRightCircle className="h-4 w-4 text-primary shrink-0 mt-1" />
                        <div>
                          <span className="font-medium">Dictionnaire</span>
                          <p className="text-xs text-muted-foreground mt-1">
                            <code>{'{"a": 1, "b": 2}'}</code> — Collection de paires clé-valeur, idéale pour les données indexées
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRightCircle className="h-4 w-4 text-primary shrink-0 mt-1" />
                        <div>
                          <span className="font-medium">Ensemble</span> (Set)
                          <p className="text-xs text-muted-foreground mt-1">
                            <code>{'{1, 2, 3}'}</code> — Collection non ordonnée d'éléments uniques, parfaite pour éliminer les doublons
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <CodeExample 
                title="Structures de données essentielles"
                language="python"
                code={`# Listes - collection ordonnée et modifiable
features = ["taille", "poids", "âge", "revenu"]
print(f"Première caractéristique : {features[0]}")

# Ajout et suppression d'éléments
features.append("éducation")  # Ajout à la fin
features.insert(1, "genre")   # Ajout à une position spécifique
features.remove("revenu")     # Suppression par valeur
print(f"Features après modifications : {features}")

# Dictionnaires - collection de paires clé-valeur
modele = {
    "nom": "Random Forest",
    "précision": 0.92,
    "hyperparamètres": {
        "n_estimators": 100,
        "max_depth": 10
    }
}
print(f"Précision du modèle : {modele['précision']}")

# Accès et modification
modele["précision"] = 0.94
print(f"Nouvelle précision : {modele['précision']}")

# Parcours d'un dictionnaire
print("Paramètres du modèle :")
for cle, valeur in modele.items():
    print(f"  - {cle}: {valeur}")

# Tuples - collection ordonnée et non modifiable
dimensions = (1920, 1080)  # Résolution d'image
print(f"Largeur de l'image : {dimensions[0]}px")
# dimensions[0] = 2560  # Erreur! Les tuples sont immutables

# Sets - collection non ordonnée sans doublons
categories = {"sport", "politique", "technologie", "santé", "sport"}
print(f"Nombre de catégories uniques : {len(categories)}")
print(f"Catégories : {categories}")  # Notez que "sport" n'apparaît qu'une fois

# Opérations sur les ensembles
tech_categories = {"technologie", "science", "innovation"}
print(f"Union : {categories | tech_categories}")  # Union des ensembles
print(f"Intersection : {categories & tech_categories}")  # Intersection

# Compréhension de liste - création de liste concise
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
squares = [x**2 for x in numbers if x % 2 == 0]
print(f"Carrés des nombres pairs : {squares}")`}
                explanation="Ce code illustre les principales structures de données en Python : listes, dictionnaires, tuples et ensembles. La compréhension de liste à la fin est une fonctionnalité puissante de Python qui permet de créer des listes de manière concise et expressive."
              />

              <ZoomOn title="NumPy : la fondation des bibliothèques de calcul scientifique">
                <p>
                  NumPy est la bibliothèque fondamentale pour le calcul scientifique en Python. Elle fournit :
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Des tableaux N-dimensionnels efficaces (ndarray)</li>
                  <li>Des fonctions mathématiques sophistiquées pour opérer sur ces tableaux</li>
                  <li>Des outils pour intégrer du code C/C++ et Fortran</li>
                  <li>Une algèbre linéaire, transformée de Fourier, et génération de nombres aléatoires</li>
                </ul>
                <p className="mt-2">
                  NumPy sert de base à presque toutes les bibliothèques d'IA en Python comme Pandas, scikit-learn, TensorFlow et PyTorch.
                </p>
              </ZoomOn>

              <CodeExample 
                title="Manipulation de données avec NumPy"
                language="python"
                code={`import numpy as np

# Création d'un tableau NumPy à partir d'une liste
arr = np.array([1, 2, 3, 4, 5])
print("Tableau NumPy:", arr)
print("Type:", type(arr))
print("Dimensions:", arr.shape)

# Opérations vectorisées (rapides et efficaces)
print("Tableau multiplié par 2:", arr * 2)
print("Carré de chaque élément:", arr ** 2)
print("Somme des éléments:", np.sum(arr))
print("Moyenne des éléments:", np.mean(arr))

# Création d'une matrice 2D
matrice = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print("Matrice:\\n", matrice)
print("Forme de la matrice:", matrice.shape)
print("Dimension de la matrice:", matrice.ndim)

# Sélection d'éléments
print("Première ligne:", matrice[0])
print("Élément (1,2):", matrice[1, 2])  # Ligne 1, colonne 2
print("Sous-matrice:\\n", matrice[0:2, 1:3])  # Lignes 0-1, colonnes 1-2

# Opérations matricielles
print("Transposée de la matrice:\\n", matrice.T)
print("Somme par colonne:", np.sum(matrice, axis=0))
print("Somme par ligne:", np.sum(matrice, axis=1))

# Algèbre linéaire
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
print("Produit matriciel A*B:\\n", np.dot(A, B))
print("Déterminant de A:", np.linalg.det(A))
print("Inverse de A:\\n", np.linalg.inv(A))

# Génération de données aléatoires (utile pour l'initialisation en IA)
donnees_uniformes = np.random.rand(3, 3)  # Distribution uniforme [0, 1]
print("Données aléatoires uniformes:\\n", donnees_uniformes)

donnees_normales = np.random.randn(3, 3)  # Distribution normale μ=0, σ=1
print("Données aléatoires normales:\\n", donnees_normales)

# Création de tableaux spéciaux
print("Tableau de zéros:", np.zeros(5))
print("Matrice identité 3x3:\\n", np.eye(3))
print("Valeurs espacées linéairement:", np.linspace(0, 10, 5))  # 5 points de 0 à 10`}
                explanation="NumPy permet de manipuler efficacement des tableaux multidimensionnels, ce qui est essentiel pour les applications d'IA. Ses opérations vectorisées sont beaucoup plus rapides que les listes Python standards car elles sont implémentées en C."
              />

              <Illustration 
                src="https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" 
                alt="Visualisation de données sous forme de matrices et tableaux"
                caption="NumPy permet de manipuler efficacement des données multidimensionnelles"
                width="2/3"
              />
            </LessonSection>

            <LessonSection title="Visualisation des données avec Python" icon={<BarChart size={24} />} delay={3}>
              <p>
                La visualisation des données est une étape cruciale dans le développement de solutions d'IA. Python offre d'excellentes bibliothèques comme Matplotlib et Seaborn pour créer des visualisations informatives et esthétiques, essentielles pour comprendre les données et communiquer les résultats.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-card p-4 rounded-lg border">
                  <h4 className="font-medium mb-2">Matplotlib</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Bibliothèque fondamentale pour la création de graphiques statiques en Python. Elle offre un contrôle granulaire sur chaque aspect des visualisations.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                    <li>Graphiques linéaires, histogrammes, nuages de points</li>
                    <li>Personnalisation complète des graphiques</li>
                    <li>Création de subplots et figures complexes</li>
                    <li>Base de la plupart des autres bibliothèques de visualisation</li>
                  </ul>
                </div>
                <div className="bg-card p-4 rounded-lg border">
                  <h4 className="font-medium mb-2">Seaborn</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Construit sur Matplotlib, Seaborn simplifie la création de visualisations statistiques complexes avec une esthétique moderne.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                    <li>Palettes de couleurs et thèmes prédéfinis</li>
                    <li>Visualisations statistiques avancées</li>
                    <li>Intégration avec Pandas</li>
                    <li>Représentation élégante des distributions</li>
                  </ul>
                </div>
              </div>

              <CodeExample 
                title="Visualisation avec Matplotlib"
                language="python"
                code={`import matplotlib.pyplot as plt
import numpy as np

# Générer des données
x = np.linspace(0, 10, 100)
y1 = np.sin(x)
y2 = np.cos(x)

# Créer une figure avec deux sous-graphiques
fig, (ax1, ax2) = plt.subplots(2, 1, figsize=(10, 8))

# Premier graphique - courbe sinusoïdale
ax1.plot(x, y1, 'b-', linewidth=2, label='sin(x)')
ax1.set_title('Fonction Sinus')
ax1.set_xlabel('x')
ax1.set_ylabel('sin(x)')
ax1.grid(True)
ax1.legend()

# Deuxième graphique - courbe cosinus
ax2.plot(x, y2, 'r-', linewidth=2, label='cos(x)')
ax2.set_title('Fonction Cosinus')
ax2.set_xlabel('x')
ax2.set_ylabel('cos(x)')
ax2.grid(True)
ax2.legend()

# Ajuster l'espacement
plt.tight_layout()

# Afficher le graphique
plt.show()

# Exemple de graphique plus complexe - nuage de points
plt.figure(figsize=(10, 6))

# Générer des données pour trois groupes
np.random.seed(42)
group1_x = np.random.normal(0, 1, 100)
group1_y = np.random.normal(0, 1, 100)
group2_x = np.random.normal(3, 1, 100)
group2_y = np.random.normal(3, 1, 100)
group3_x = np.random.normal(6, 1, 100)
group3_y = np.random.normal(0, 1, 100)

# Créer le nuage de points avec trois groupes
plt.scatter(group1_x, group1_y, c='blue', alpha=0.6, label='Groupe 1')
plt.scatter(group2_x, group2_y, c='red', alpha=0.6, label='Groupe 2')
plt.scatter(group3_x, group3_y, c='green', alpha=0.6, label='Groupe 3')

plt.title('Nuage de Points avec Trois Groupes')
plt.xlabel('Axe X')
plt.ylabel('Axe Y')
plt.legend()
plt.grid(True, linestyle='--', alpha=0.7)

plt.tight_layout()
plt.show()

# Histogramme avec distribution normale
plt.figure(figsize=(10, 6))

# Générer des données selon une distribution normale
data = np.random.normal(0, 1, 1000)

# Créer l'histogramme
plt.hist(data, bins=30, alpha=0.7, color='purple', edgecolor='black')

# Ajouter des informations statistiques
plt.axvline(data.mean(), color='red', linestyle='dashed', linewidth=2, label=f'Moyenne: {data.mean():.2f}')
plt.axvline(data.mean() + data.std(), color='green', linestyle='dotted', linewidth=2, label=f'Écart-type: {data.std():.2f}')
plt.axvline(data.mean() - data.std(), color='green', linestyle='dotted', linewidth=2)

plt.title('Histogramme d\'une Distribution Normale')
plt.xlabel('Valeur')
plt.ylabel('Fréquence')
plt.legend()
plt.grid(True, alpha=0.3)

plt.tight_layout()
plt.show()`}
                explanation="Matplotlib permet de créer des visualisations personnalisables pour analyser et présenter des données. Cet exemple montre comment créer plusieurs types de graphiques : des courbes, un nuage de points avec plusieurs groupes, et un histogramme avec des lignes de référence statistiques."
              />

              <ZoomOn title="Pandas pour l'analyse de données">
                <p>
                  Pandas est une bibliothèque Python essentielle pour la manipulation et l'analyse de données, offrant des structures de données comme les DataFrames qui sont parfaites pour travailler avec des données tabulaires.
                </p>
                <p className="mt-2">
                  Avantages principaux de Pandas :
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Manipulation intuitive des données avec les DataFrames</li>
                  <li>Fonctions puissantes pour la fusion, le filtrage et la transformation de données</li>
                  <li>Gestion efficace des valeurs manquantes</li>
                  <li>Outils intégrés pour la lecture et l'écriture de divers formats de fichiers (CSV, Excel, SQL, etc.)</li>
                  <li>Intégration facile avec d'autres bibliothèques d'analyse de données et d'apprentissage automatique</li>
                </ul>
              </ZoomOn>

              <CodeExample 
                title="Analyse de données avec Pandas"
                language="python"
                code={`import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Créer un DataFrame
donnees = {
    'nom': ['Alice', 'Bob', 'Charlie', 'David', 'Emma'],
    'age': [25, 30, 35, 40, 45],
    'ville': ['Paris', 'Lyon', 'Marseille', 'Bordeaux', 'Lille'],
    'score_test': [85, 92, 78, 95, 88]
}
df = pd.DataFrame(donnees)

# Afficher les premières lignes
print("Aperçu des données:")
print(df.head())

# Informations sur le DataFrame
print("\nInformation sur le DataFrame:")
print(df.info())

# Statistiques descriptives
print("\nStatistiques descriptives:")
print(df.describe())

# Filtrage des données
print("\nPersonnes de plus de 30 ans:")
print(df[df['age'] > 30])

# Ajout d'une colonne calculée
df['score_normalise'] = (df['score_test'] - df['score_test'].mean()) / df['score_test'].std()
print("\nAvec scores normalisés:")
print(df)

# Groupement et agrégation
print("\nScore moyen par ville:")
print(df.groupby('ville')['score_test'].mean())

print("\nStatistiques par ville:")
print(df.groupby('ville').agg({
    'age': ['mean', 'min', 'max'],
    'score_test': ['mean', 'min', 'max']
}))

# Lecture de données depuis un fichier CSV (exemple commenté)
# df_from_csv = pd.read_csv('data.csv')

# Écriture de données vers un fichier CSV (exemple commenté)
# df.to_csv('resultats.csv', index=False)

# Gestion des valeurs manquantes (exemple avec données simulées)
df_with_na = df.copy()
df_with_na.loc[2, 'score_test'] = None
print("\nDataFrame avec valeur manquante:")
print(df_with_na)

print("\nRemplissage des valeurs manquantes:")
print(df_with_na.fillna(df_with_na['score_test'].mean()))

# Visualisation avec Pandas (qui utilise Matplotlib)
plt.figure(figsize=(12, 5))

# Graphique à barres des scores
plt.subplot(1, 2, 1)
df.plot(kind='bar', x='nom', y='score_test', title='Scores par personne', ax=plt.gca())
plt.ylabel('Score')
plt.xticks(rotation=45)

# Graphique à secteurs pour la distribution des villes
plt.subplot(1, 2, 2)
df['ville'].value_counts().plot(kind='pie', autopct='%1.1f%%', title='Distribution des villes')
plt.ylabel('')

plt.tight_layout()
plt.show()

# Utilisation de seaborn avec pandas pour des visualisations plus avancées
plt.figure(figsize=(12, 5))

# Graphique de distribution avec relation entre âge et score
plt.subplot(1, 2, 1)
sns.scatterplot(data=df, x='age', y='score_test', hue='ville', s=100)
plt.title('Relation entre Âge et Score')

# Distribution des scores
plt.subplot(1, 2, 2)
sns.histplot(df['score_test'], kde=True)
plt.axvline(df['score_test'].mean(), color='red', linestyle='dashed')
plt.title('Distribution des Scores')

plt.tight_layout()
plt.show()`}
                explanation="Pandas est essentiel pour la préparation et l'analyse des données avant de les utiliser dans des modèles d'IA. Ce code illustre la création de DataFrames, les opérations de base comme le filtrage et l'agrégation, ainsi que l'intégration avec les bibliothèques de visualisation pour explorer vos données."
              />

              <Illustration 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" 
                alt="Visualisation de données avec graphiques"
                caption="La visualisation est essentielle pour comprendre les tendances et relations dans les données"
                width="2/3"
              />

              <ZoomOn title="Introduction à scikit-learn pour le Machine Learning">
                <p>
                  Scikit-learn est la bibliothèque de référence pour l'apprentissage automatique en Python. Elle offre des outils simples et efficaces pour l'analyse prédictive, avec une API cohérente.
                </p>
                <ul className="list-disc pl-6 mt-2 mb-2">
                  <li><strong>Prétraitement</strong> : normalisation, encodage des variables catégorielles, gestion des valeurs manquantes</li>
                  <li><strong>Sélection de modèles</strong> : validation croisée, recherche de paramètres</li>
                  <li><strong>Algorithmes</strong> : classification, régression, clustering, réduction de dimension</li>
                  <li><strong>Évaluation</strong> : métriques de performance, matrices de confusion, courbes ROC</li>
                </ul>
                <p className="mt-2">
                  Scikit-learn suit une convention simple pour tous ses modèles : 
                  <code className="ml-2">fit(X, y)</code> pour entraîner,
                  <code className="ml-2">predict(X)</code> pour prédire,
                  <code className="ml-2">score(X, y)</code> pour évaluer.
                </p>
              </ZoomOn>
            </LessonSection>

            <LessonSection title="À vos claviers : Projet pratique Python pour l'IA" icon={<PenTool size={24} />} delay={4}>
              <p>
                La meilleure façon d'apprendre Python pour l'IA est de travailler sur un projet concret. Voici un mini-projet qui utilise les bibliothèques que nous avons vues pour analyser un jeu de données et construire un modèle simple de prédiction.
              </p>

              <CodeExample 
                title="Mini-projet : Analyse et prédiction avec le dataset Iris"
                language="python"
                code={`import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix

# 1. CHARGEMENT ET EXPLORATION DES DONNÉES
# ----------------------------------------

# Charger le célèbre dataset Iris
iris = load_iris()
X = iris.data
y = iris.target
feature_names = iris.feature_names
target_names = iris.target_names

# Créer un DataFrame pour faciliter l'exploration
df = pd.DataFrame(X, columns=feature_names)
df['species'] = [target_names[i] for i in y]  # Ajouter les noms d'espèces

print("Aperçu du dataset Iris:")
print(df.head())

print("\nDimensions:", df.shape)
print("\nStatistiques descriptives:")
print(df.describe())

print("\nDistribution des espèces:")
print(df['species'].value_counts())

# 2. VISUALISATION DES DONNÉES
# ----------------------------

# Paires de nuages de points pour voir les relations entre les variables
plt.figure(figsize=(12, 8))
sns.pairplot(df, hue='species', markers=['o', 's', 'D'])
plt.suptitle('Relations entre les caractéristiques par espèce', y=1.02)
plt.show()

# Distribution des caractéristiques par espèce
plt.figure(figsize=(15, 10))
for i, feature in enumerate(feature_names):
    plt.subplot(2, 2, i+1)
    for species in target_names:
        sns.kdeplot(df[df['species'] == species][feature], label=species)
    plt.title(f'Distribution de {feature}')
    plt.xlabel(feature)
    plt.legend()
plt.tight_layout()
plt.show()

# 3. PRÉTRAITEMENT DES DONNÉES
# ---------------------------

# Division en ensemble d'entraînement et de test
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42, stratify=y)

print(f"\nTaille de l'ensemble d'entraînement: {X_train.shape[0]} échantillons")
print(f"Taille de l'ensemble de test: {X_test.shape[0]} échantillons")

# Normalisation des données
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

print("\nAperçu des données normalisées:")
print(pd.DataFrame(X_train_scaled, columns=feature_names).head())

# 4. CONSTRUCTION ET ÉVALUATION DU MODÈLE
# --------------------------------------

# Entraînement d'un modèle KNN (k-plus proches voisins)
k = 5
knn = KNeighborsClassifier(n_neighbors=k)
knn.fit(X_train_scaled, y_train)

# Prédictions sur l'ensemble de test
y_pred = knn.predict(X_test_scaled)

# Évaluation du modèle
accuracy = accuracy_score(y_test, y_pred)
conf_matrix = confusion_matrix(y_test, y_pred)
class_report = classification_report(y_test, y_pred, target_names=target_names)

print(f"\nPrécision du modèle KNN (k={k}): {accuracy:.4f}")
print("\nMatrice de confusion:")
print(conf_matrix)
print("\nRapport de classification:")
print(class_report)

# Visualisation de la matrice de confusion
plt.figure(figsize=(8, 6))
sns.heatmap(conf_matrix, annot=True, fmt='d', cmap='Blues',
           xticklabels=target_names, yticklabels=target_names)
plt.xlabel('Prédiction')
plt.ylabel('Réalité')
plt.title('Matrice de confusion')
plt.show()

# 5. OPTIMISATION DU PARAMÈTRE K
# ----------------------------

# Tester différentes valeurs de K
k_range = range(1, 31)
scores = []

for k in k_range:
    knn = KNeighborsClassifier(n_neighbors=k)
    knn.fit(X_train_scaled, y_train)
    scores.append(knn.score(X_test_scaled, y_test))

# Visualiser l'impact de K sur la précision
plt.figure(figsize=(10, 6))
plt.plot(k_range, scores, marker='o')
plt.xlabel('Valeur de K')
plt.ylabel('Précision')
plt.title('Précision du modèle KNN en fonction de K')
plt.grid(True)
plt.show()

# Trouver le meilleur K
best_k = k_range[np.argmax(scores)]
best_score = max(scores)
print(f"\nMeilleure valeur de K: {best_k}")
print(f"Meilleure précision: {best_score:.4f}")

# 6. UTILISATION DU MODÈLE POUR PRÉDIRE DE NOUVELLES OBSERVATIONS
# ------------------------------------------------------------

# Créer quelques observations de test
new_flowers = np.array([
    [5.1, 3.5, 1.4, 0.2],  # Probablement une setosa
    [6.3, 3.3, 4.7, 1.6],  # Probablement une versicolor
    [6.9, 3.1, 5.4, 2.1]   # Probablement une virginica
])

# Normaliser les nouvelles observations
new_flowers_scaled = scaler.transform(new_flowers)

# Faire les prédictions
predictions = knn.predict(new_flowers_scaled)
pred_species = [target_names[pred] for pred in predictions]

print("\nPrédictions pour de nouvelles fleurs:")
for i, (flower, species) in enumerate(zip(new_flowers, pred_species)):
    print(f"Fleur {i+1} {flower}: {species}")

# Visualiser les nouvelles fleurs dans l'espace des caractéristiques (sepal length et width)
plt.figure(figsize=(10, 6))

# Tracer les points d'entraînement
for i, species in enumerate(target_names):
    indices = y_train == i
    plt.scatter(X_train[indices, 0], X_train[indices, 1], 
               label=f'Entraînement - {species}', alpha=0.5)

# Tracer les nouvelles fleurs
for i, (flower, species) in enumerate(zip(new_flowers, pred_species)):
    plt.scatter(flower[0], flower[1], marker='*', s=200, 
               label=f'Nouvelle fleur {i+1} - {species}')

plt.xlabel(feature_names[0])
plt.ylabel(feature_names[1])
plt.title('Nouvelles fleurs dans l\'espace des caractéristiques')
plt.legend()
plt.grid(True)
plt.show()

print("\nFélicitations! Vous avez complété votre premier projet de machine learning avec Python!")`}
                explanation="Ce mini-projet complet illustre comment utiliser Python et ses bibliothèques pour analyser des données et construire un modèle de classification. Il inclut l'exploration, la visualisation, le prétraitement, la modélisation, l'évaluation et l'optimisation."
              />

              <div className="my-8 p-5 border border-primary/30 rounded-lg bg-primary/5">
                <h4 className="text-lg font-medium mb-4 flex items-center gap-2">
                  <PlayCircle className="h-5 w-5 text-primary" />
                  Exercices complémentaires
                </h4>
                <p className="mb-4">
                  Pour approfondir vos connaissances, essayez ces exercices qui étendent le projet ci-dessus :
                </p>
                <ol className="list-decimal ml-5 space-y-2">
                  <li>
                    <strong>Testez d'autres algorithmes</strong> : Remplacez KNN par un autre algorithme de classification comme RandomForest, SVM ou LogisticRegression de scikit-learn.
                  </li>
                  <li>
                    <strong>Implémentez une validation croisée</strong> : Utilisez cross_val_score de scikit-learn pour obtenir une estimation plus robuste des performances du modèle.
                  </li>
                  <li>
                    <strong>Créez un pipeline de prétraitement</strong> : Utilisez la classe Pipeline de scikit-learn pour combiner prétraitement et modélisation.
                  </li>
                  <li>
                    <strong>Explorez d'autres jeux de données</strong> : Appliquez ce même workflow à un autre dataset comme Wine, Breast Cancer ou Digits également disponibles dans scikit-learn.
                  </li>
                </ol>
              </div>
            </LessonSection>

            {/* Quiz du cours */}
            <CourseQuiz
              title="Quiz : Python pour l'Intelligence Artificielle"
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
                    <p>Débutant à Intermédiaire</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-1">Durée</h4>
                    <p>6 semaines (3-5 heures/semaine)</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-1">Prérequis</h4>
                    <p>Aucune expérience en programmation requise, mais une familiarité avec les concepts informatiques de base est un plus.</p>
                  </div>
                  
                  <div className="pt-2">
                    <h4 className="font-medium text-sm text-muted-foreground mb-2">Ressources</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <span>Notes de cours complètes</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Code className="h-4 w-4 text-primary" />
                        <span>Exercices pratiques</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <PlayCircle className="h-4 w-4 text-primary" />
                        <span>Vidéos tutorielles</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-primary" />
                        <span>Projets guidés</span>
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

export default PythonIA;
