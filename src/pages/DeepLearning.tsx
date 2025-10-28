
import React from 'react';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, BookOpen, ChevronRight, BarChart, Network, Layers, Code, Zap, Target, Lightbulb } from 'lucide-react';
import LessonSection from '@/components/courses/LessonSection';
import CodeExample from '@/components/courses/CodeExample';
import ZoomOn from '@/components/courses/ZoomOn';
import Illustration from '@/components/courses/Illustration';
import CourseQuiz, { QuizQuestion } from '@/components/courses/CourseQuiz';
import BackToResourcesButton from '@/components/courses/BackToResourcesButton';
import DidYouKnow from '@/components/courses/DidYouKnow';
import AnalogyBox from '@/components/courses/AnalogyBox';
import TechnicalTooltip from '@/components/courses/TechnicalTooltip';
import StatsGrid from '@/components/courses/StatsGrid';
import CourseHeader from '@/components/courses/CourseHeader';
import CourseModule from '@/components/courses/CourseModule';
import CourseConclusion from '@/components/courses/CourseConclusion';

/**
 * Page du cours sur le Deep Learning pratique
 * @returns {JSX.Element} Le composant de la page
 */
const DeepLearning = () => {
  const quizQuestions: QuizQuestion[] = [
    {
      question: "Quelle est la principale différence entre TensorFlow et PyTorch?",
      options: [
        "TensorFlow est uniquement pour le deep learning, PyTorch pour le machine learning classique",
        "TensorFlow utilise le graphe statique par défaut, PyTorch utilise une approche de graphe dynamique",
        "TensorFlow est open source, PyTorch est propriétaire",
        "TensorFlow ne peut pas être utilisé pour la vision par ordinateur"
      ],
      correctAnswer: 1,
      explanation: "TensorFlow utilise traditionnellement un graphe statique (bien que TF 2.x ait ajouté un mode eager), tandis que PyTorch utilise une approche de graphe dynamique qui permet un débogage plus facile et une flexibilité dans la construction des modèles."
    },
    {
      question: "Quel est le rôle des fonctions d'activation dans un réseau de neurones?",
      options: [
        "Elles déterminent la vitesse d'apprentissage du modèle",
        "Elles introduisent des non-linéarités dans le modèle",
        "Elles servent uniquement à normaliser les données",
        "Elles contrôlent le nombre de couches du réseau"
      ],
      correctAnswer: 1,
      explanation: "Les fonctions d'activation introduisent des non-linéarités dans le modèle, permettant au réseau d'apprendre des relations complexes et non linéaires dans les données."
    },
    {
      question: "Qu'est-ce que le problème de disparition du gradient (vanishing gradient) dans les réseaux de neurones profonds?",
      options: [
        "Les gradients deviennent trop grands et causent une explosion de l'apprentissage",
        "Les gradients deviennent très petits et l'apprentissage ralentit ou s'arrête",
        "Les couches cachées disparaissent pendant l'entraînement",
        "Le réseau ne peut pas apprendre de motifs locaux"
      ],
      correctAnswer: 1,
      explanation: "Le problème de disparition du gradient survient lorsque les gradients deviennent extrêmement petits lors de la rétropropagation, ce qui rend l'apprentissage très lent ou impossible dans les couches profondes du réseau."
    },
    {
      question: "Quelle architecture est spécifiquement conçue pour la vision par ordinateur?",
      options: [
        "RNN (Recurrent Neural Network)",
        "Transformer",
        "CNN (Convolutional Neural Network)",
        "AE (Autoencoder)"
      ],
      correctAnswer: 2,
      explanation: "Les réseaux de neurones convolutifs (CNN) sont spécialement conçus pour traiter des données avec une topologie en grille comme les images, grâce à leurs opérations de convolution qui captent les motifs locaux et la hiérarchie de caractéristiques."
    },
    {
      question: "Qu'est-ce que le transfert learning (apprentissage par transfert)?",
      options: [
        "Transférer un modèle d'un framework à un autre (TensorFlow à PyTorch)",
        "Utiliser un modèle préentraîné et le réajuster sur une nouvelle tâche",
        "Transférer l'apprentissage d'un utilisateur à un autre",
        "L'apprentissage de plusieurs tâches simultanément"
      ],
      correctAnswer: 1,
      explanation: "L'apprentissage par transfert est une technique où un modèle développé pour une tâche est réutilisé comme point de départ pour un modèle sur une seconde tâche, permettant d'exploiter les connaissances acquises précédemment."
    }
  ];

  const didYouKnowItems = [
    {
      title: "Inspiration biologique",
      content: "Les réseaux de neurones artificiels s'inspirent du fonctionnement du cerveau humain, mais de manière très simplifiée. Un neurone biologique a environ 7000 connexions synaptiques en moyenne."
    },
    {
      title: "Puissance de calcul",
      content: "L'entraînement de GPT-3 a nécessité environ 314 zettajoules d'énergie, équivalent à la consommation électrique de 126 foyers danois pendant un an."
    },
    {
      title: "Données d'entraînement",
      content: "ImageNet, l'un des datasets les plus influents en vision par ordinateur, contient plus de 14 millions d'images étiquetées dans plus de 20 000 catégories."
    }
  ];

  const statsData = [
    {
      value: "175B",
      description: "Paramètres dans GPT-3",
      bgGradient: "from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50"
    },
    {
      value: "99.9%",
      description: "Précision en reconnaissance faciale",
      bgGradient: "from-green-50 to-green-100 dark:from-green-950/50 dark:to-green-900/50"
    },
    {
      value: "2012",
      description: "Révolution AlexNet en vision",
      bgGradient: "from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/50"
    }
  ];

  const learningModules = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Fondamentaux théoriques",
      items: [
        "Neurones artificiels et perceptrons",
        "Fonctions d'activation et leurs propriétés",
        "Rétropropagation et optimisation",
        "Régularisation et généralisation"
      ]
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Implémentation pratique",
      items: [
        "TensorFlow et Keras en pratique",
        "PyTorch pour la recherche",
        "Préparation et augmentation des données",
        "Débogage et optimisation des modèles"
      ]
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Applications concrètes",
      items: [
        "Classification d'images médicales",
        "Détection d'objets en temps réel",
        "Génération de texte créatif",
        "Prédiction de séries temporelles"
      ]
    }
  ];

  return (
    <>
      <BackToResourcesButton />
      
      <Hero
        title="Deep Learning Pratique : De la Théorie à l'Application"
        subtitle="Maîtrisez l'art des réseaux de neurones profonds à travers une approche progressive et pratique, de la théorie fondamentale aux applications industrielles"
      />

      <section className="section-container mb-10">
        <CourseHeader
          title="Deep Learning Pratique"
          subtitle="Un voyage complet dans l'univers des réseaux de neurones profonds"
          author="Dr. Geoffroy Streit"
          authorDescription="Consultant passionné en Intelligence Artificielle"
          duration="10-12 semaines (6-8h/semaine)"
          level="Intermédiaire à Avancé"
          audience="Développeurs, Data Scientists, Ingénieurs IA"
          tags={["Deep Learning", "TensorFlow", "PyTorch", "Pratique", "Projets"]}
        />

        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4 text-primary">🚀 Bienvenue dans l'aventure du Deep Learning !</h3>
            <p className="text-lg mb-4 text-foreground">
              Imaginez pouvoir créer des systèmes qui reconnaissent des visages dans une foule, qui comprennent le langage humain, 
              ou qui génèrent des œuvres d'art originales. C'est exactement ce que vous allez apprendre dans ce cours !
            </p>
            <p className="mb-4 text-foreground">
              Le Deep Learning n'est plus de la science-fiction. Aujourd'hui, il révolutionne la médecine avec des diagnostics 
              plus précis, transforme l'industrie automobile avec les voitures autonomes, et change notre façon de communiquer 
              avec les assistants vocaux intelligents.
            </p>
            <p className="font-medium text-primary">
              Ce cours vous guide pas à pas, de la compréhension des concepts fondamentaux jusqu'à la création de vos propres 
              modèles prêts pour la production. Préparez-vous à transformer votre carrière !
            </p>
          </div>

          <AnalogyBox
            title="Le Deep Learning, c'est comme apprendre à conduire"
            content="Au début, vous devez consciemment penser à chaque action : vérifier les rétroviseurs, actionner le clignotant, évaluer les distances. Avec la pratique, ces actions deviennent automatiques. De même, un réseau de neurones 'apprend' en ajustant progressivement ses connexions jusqu'à reconnaître automatiquement des motifs complexes dans les données."
            variant="info"
          />
        </div>

        <DidYouKnow items={didYouKnowItems} />

        <StatsGrid stats={statsData} />

        <CourseModule
          title="Programme du cours"
          description="Un parcours structuré en 7 modules, chacun construisant sur les connaissances précédentes"
          modules={learningModules}
        />

        <div className="max-w-4xl mx-auto">
          {/* Module 1: Introduction et Fondamentaux */}
          <LessonSection title="Module 1 : Introduction et Fondamentaux du Deep Learning" icon={<Brain size={24} />} delay={1}>
            <p className="text-lg mb-4">
              Bienvenue dans le monde fascinant du Deep Learning ! Avant de plonger dans le code, prenons le temps de comprendre 
              ce qui rend cette technologie si révolutionnaire.
            </p>
            
            <ZoomOn title="Qu'est-ce qui rend le Deep Learning si spécial ?">
              <p className="mb-3">
                Contrairement aux approches traditionnelles de programmation où nous écrivons des règles explicites, 
                le Deep Learning permet aux machines d'apprendre ces règles automatiquement à partir d'exemples.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Apprentissage automatique des caractéristiques :</strong> Plus besoin d'extraire manuellement les features importantes</li>
                <li><strong>Capacité de généralisation :</strong> Un modèle bien entraîné peut traiter des données qu'il n'a jamais vues</li>
                <li><strong>Évolutivité :</strong> Plus de données = de meilleures performances (contrairement aux algorithmes classiques)</li>
              </ul>
            </ZoomOn>

            <Illustration 
              src="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" 
              alt="Réseau de neurones connectés, représentation visuelle du deep learning"
              caption="Le Deep Learning s'inspire du fonctionnement du cerveau humain avec des couches de neurones interconnectés"
              width="2/3"
            />

            <h4 className="text-xl font-semibold mt-6 mb-3">Le neurone artificiel : brique de base</h4>
            <p className="mb-4">
              Tout commence par un <TechnicalTooltip term="Neurone artificiel" definition="Unité de calcul élémentaire qui reçoit des entrées, les pondère, et produit une sortie via une fonction d'activation">neurone artificiel</TechnicalTooltip>, 
              une version simplifiée d'un neurone biologique.
            </p>

            <CodeExample 
              title="Implémentation d'un neurone simple"
              language="python"
              code={`import numpy as np
import matplotlib.pyplot as plt

class Neurone:
    def __init__(self, nb_entrees):
        # Initialisation aléatoire des poids (distribution normale)
        self.poids = np.random.normal(0, 0.1, nb_entrees)
        self.biais = np.random.normal(0, 0.1)
        
    def sigmoid(self, x):
        """Fonction d'activation sigmoid : sortie entre 0 et 1"""
        return 1 / (1 + np.exp(-np.clip(x, -500, 500)))  # clip pour éviter overflow
    
    def relu(self, x):
        """Fonction d'activation ReLU : max(0, x)"""
        return np.maximum(0, x)
    
    def forward(self, entrees, activation='sigmoid'):
        """Propagation avant : calcul de la sortie"""
        # Étape 1: Somme pondérée
        somme_ponderee = np.dot(entrees, self.poids) + self.biais
        
        # Étape 2: Application de la fonction d'activation
        if activation == 'sigmoid':
            sortie = self.sigmoid(somme_ponderee)
        elif activation == 'relu':
            sortie = self.relu(somme_ponderee)
        else:
            raise ValueError("Activation non supportée")
            
        return sortie`}
              explanation="Ce code illustre le fonctionnement d'un neurone artificiel avec deux fonctions d'activation populaires. Remarquez comment les poids et le biais influencent la décision finale."
            />

            <AnalogyBox
              title="Analogie : Le neurone comme un portier de boîte de nuit"
              content="Imaginez un portier qui doit décider qui peut entrer. Il regarde plusieurs critères (âge, tenue, etc.), donne un poids à chacun selon leur importance, fait la somme, et si le total dépasse son seuil, il laisse entrer la personne. C'est exactement ce que fait un neurone artificiel !"
            />
          </LessonSection>

          {/* Module 2: Architectures de réseaux */}
          <LessonSection title="Module 2 : Architectures et Propagation" icon={<Network size={24} />} delay={2}>
            <p className="text-lg mb-4">
              Maintenant que vous comprenez le neurone individuel, découvrons comment les assembler pour créer des 
              <TechnicalTooltip term="Réseau de neurones multicouches" definition="Architecture composée de plusieurs couches de neurones où chaque couche reçoit les sorties de la couche précédente">réseaux de neurones multicouches</TechnicalTooltip> 
              capables de résoudre des problèmes complexes.
            </p>

            <ZoomOn title="L'architecture feedforward : le modèle de base">
              <p className="mb-3">
                Dans un réseau feedforward, l'information circule dans une seule direction, de l'entrée vers la sortie :
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li><strong>Couche d'entrée :</strong> Reçoit les données brutes (pixels d'image, mots, etc.)</li>
                <li><strong>Couches cachées :</strong> Extraient progressivement des caractéristiques de plus en plus abstraites</li>
                <li><strong>Couche de sortie :</strong> Produit la prédiction finale</li>
              </ol>
            </ZoomOn>

            <CodeExample 
              title="Réseau de neurones complet avec TensorFlow"
              language="python"
              code={`import tensorflow as tf
from tensorflow import keras
import numpy as np

# Configuration simple d'un réseau dense
def creer_modele_simple(input_dim, output_dim):
    model = keras.Sequential([
        keras.layers.Dense(128, activation='relu', input_shape=(input_dim,)),
        keras.layers.Dropout(0.2),  # Régularisation
        keras.layers.Dense(64, activation='relu'),
        keras.layers.Dropout(0.2),
        keras.layers.Dense(output_dim, activation='softmax')
    ])
    
    model.compile(
        optimizer='adam',
        loss='categorical_crossentropy',
        metrics=['accuracy']
    )
    
    return model

# Exemple d'utilisation
model = creer_modele_simple(784, 10)  # MNIST: 28x28 pixels -> 10 classes
model.summary()`}
              explanation="Cette implémentation montre comment créer un réseau simple avec TensorFlow/Keras. Notez l'utilisation du dropout pour éviter le surapprentissage."
            />

            <AnalogyBox
              title="La rétropropagation : apprendre de ses erreurs"
              content="Imaginez un chef cuisiner qui goûte son plat et réalise qu'il est trop salé. Il va 'remonter' sa recette : peut-être a-t-il mis trop de sel à l'étape 3, ou utilisé un bouillon trop salé à l'étape 1. La rétropropagation fonctionne de même : elle part de l'erreur finale et remonte pour identifier quels 'ingrédients' (poids) ajuster."
              variant="tip"
            />
          </LessonSection>

          {/* Module 3: Applications pratiques */}
          <LessonSection title="Module 3 : Applications Concrètes" icon={<Target size={24} />} delay={3}>
            <p className="text-lg mb-4">
              Passons maintenant aux applications concrètes ! Nous allons voir comment appliquer le Deep Learning 
              à des problèmes réels avec des exemples pratiques.
            </p>

            <ZoomOn title="Classification d'images avec CNN">
              <p className="mb-3">
                Les réseaux de neurones convolutifs (CNN) sont particulièrement efficaces pour l'analyse d'images 
                car ils exploitent la structure spatiale des données.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Convolution :</strong> Détecte les motifs locaux (contours, textures)</li>
                <li><strong>Pooling :</strong> Réduit la dimensionnalité tout en gardant l'information importante</li>
                <li><strong>Couches denses :</strong> Combine les caractéristiques pour la classification finale</li>
              </ul>
            </ZoomOn>

            <CodeExample 
              title="CNN pour classification d'images"
              language="python"
              code={`import tensorflow as tf
from tensorflow.keras import layers

def creer_cnn(input_shape, num_classes):
    model = tf.keras.Sequential([
        # Premier bloc convolutionnel
        layers.Conv2D(32, (3, 3), activation='relu', input_shape=input_shape),
        layers.BatchNormalization(),
        layers.MaxPooling2D((2, 2)),
        
        # Deuxième bloc
        layers.Conv2D(64, (3, 3), activation='relu'),
        layers.BatchNormalization(),
        layers.MaxPooling2D((2, 2)),
        
        # Troisième bloc
        layers.Conv2D(128, (3, 3), activation='relu'),
        layers.BatchNormalization(),
        layers.MaxPooling2D((2, 2)),
        
        # Classification
        layers.GlobalAveragePooling2D(),
        layers.Dropout(0.5),
        layers.Dense(num_classes, activation='softmax')
    ])
    
    return model

# Exemple pour CIFAR-10
model = creer_cnn((32, 32, 3), 10)
model.compile(
    optimizer='adam',
    loss='categorical_crossentropy',
    metrics=['accuracy']
)`}
              explanation="Ce CNN utilise des techniques modernes comme la BatchNormalization et le GlobalAveragePooling pour améliorer les performances et réduire le surapprentissage."
            />
          </LessonSection>

          {/* Quiz */}
          <div className="mt-16">
            <CourseQuiz 
              questions={quizQuestions}
              title="Quiz : Testez vos connaissances"
            />
          </div>

          {/* Conclusion */}
          <div className="mt-16">
            <CourseConclusion
              title="Félicitations ! Vous maîtrisez maintenant les fondamentaux du Deep Learning"
              description="Vous avez accompli un parcours remarquable dans l'apprentissage du Deep Learning. Voici ce que vous avez acquis et les prochaines étapes pour continuer votre progression."
              learningPoints={[
                "Compréhension des réseaux de neurones et de leur fonctionnement",
                "Maîtrise des architectures CNN pour la vision par ordinateur", 
                "Connaissance des bonnes pratiques d'entraînement",
                "Capacité à implémenter des modèles avec TensorFlow/Keras"
              ]}
              nextSteps={[
                "Explorez les architectures avancées comme les Transformers",
                "Créez votre propre projet de classification d'images",
                "Rejoignez des communautés de Deep Learning pour échanger"
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default DeepLearning;
