
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Cpu, Network, ArrowRight, Brain, Database, EyeIcon, MessageSquare } from 'lucide-react';

const AIArchitecturesVisualization = () => {
  const [selectedArch, setSelectedArch] = useState('transformer');
  
  const architectures = [
    {
      id: 'transformer',
      name: 'Transformers',
      icon: <MessageSquare className="h-5 w-5" />,
      description: 'Architecture basée sur des mécanismes d\'attention qui excelle dans le traitement du langage naturel.',
      components: [
        { name: 'Couche d\'Embedding', description: 'Transforme les tokens en vecteurs denses' },
        { name: 'Encodeur', description: 'Traite le contexte d\'entrée' },
        { name: 'Décodeur', description: 'Génère les sorties séquentiellement' },
        { name: 'Mécanisme d\'Attention', description: 'Permet au modèle de se focaliser sur différentes parties de l\'entrée' },
        { name: 'Feed-Forward Networks', description: 'Transforme les représentations intermédiaires' }
      ],
      applications: ['Modèles de langage (GPT, BERT)', 'Traduction automatique', 'Génération de texte', 'Question-réponse'],
      advantages: ['Traitement parallèle efficace', 'Capture les dépendances à longue distance', 'Adaptable à différentes tâches'],
      limitations: ['Coût computationnel élevé', 'Longueur de contexte limitée', 'Besoin de grandes quantités de données']
    },
    {
      id: 'cnn',
      name: 'Réseaux Convolutifs (CNN)',
      icon: <EyeIcon className="h-5 w-5" />,
      description: 'Architecture spécialisée dans le traitement de données structurées en grille comme les images.',
      components: [
        { name: 'Couches Convolutives', description: 'Détectent des motifs locaux avec des filtres glissants' },
        { name: 'Pooling', description: 'Réduit la dimensionnalité tout en préservant les caractéristiques importantes' },
        { name: 'Couches Entièrement Connectées', description: 'Intègrent les caractéristiques pour la classification finale' },
        { name: 'Fonctions d\'Activation', description: 'Introduisent la non-linéarité (ReLU, etc.)' },
        { name: 'Batch Normalization', description: 'Normalise les activations pour accélérer l\'apprentissage' }
      ],
      applications: ['Reconnaissance d\'images', 'Classification d\'objets', 'Détection faciale', 'Imagerie médicale'],
      advantages: ['Invariance à la translation', 'Partage de paramètres efficace', 'Extraction hiérarchique de caractéristiques'],
      limitations: ['Sensibilité aux rotations/déformations', 'Besoin de grandes quantités d\'exemples annotés', 'Visualisation/interprétation difficile']
    },
    {
      id: 'rnn',
      name: 'Réseaux Récurrents (RNN/LSTM)',
      icon: <Network className="h-5 w-5" />,
      description: 'Architecture avec des connexions cycliques permettant le traitement de séquences et données temporelles.',
      components: [
        { name: 'Cellules Récurrentes', description: 'Maintiennent un état interne qui évolue avec l\'entrée séquentielle' },
        { name: 'Portes (dans LSTM/GRU)', description: 'Contrôlent le flux d\'information (oubli, entrée, sortie)' },
        { name: 'Couche de Sortie', description: 'Transforme l\'état interne en prédictions' },
        { name: 'Bidirectionnalité', description: 'Permet l\'analyse de la séquence dans les deux sens' },
        { name: 'Attention (dans certaines variantes)', description: 'Focalise sur les parties importantes de la séquence' }
      ],
      applications: ['Prédiction de séries temporelles', 'Analyse de sentiments', 'Reconnaissance vocale', 'Génération de musique'],
      advantages: ['Capture des dépendances temporelles', 'Flexibilité pour les entrées de longueur variable', 'Mémoire contextuelle'],
      limitations: ['Problème de gradient vanishing/exploding', 'Difficulté à capturer les dépendances à très long terme', 'Entraînement séquentiel lent']
    },
    {
      id: 'gan',
      name: 'Réseaux Adversaires (GAN)',
      icon: <Brain className="h-5 w-5" />,
      description: 'Architecture composée de deux réseaux en compétition: un générateur et un discriminateur.',
      components: [
        { name: 'Générateur', description: 'Crée des données synthétiques à partir de bruit aléatoire' },
        { name: 'Discriminateur', description: 'Distingue les données réelles des données générées' },
        { name: 'Fonction de Perte Adversariale', description: 'Maximise la performance du discriminateur tout en trompant celui-ci' },
        { name: 'Espace Latent', description: 'Représentation compressée des caractéristiques des données' },
        { name: 'Variantes Conditionnelles', description: 'Permettent de guider la génération avec des conditions spécifiques' }
      ],
      applications: ['Génération d\'images', 'Style transfer', 'Super-résolution', 'Création artistique par IA'],
      advantages: ['Génération de données très réalistes', 'Apprentissage non supervisé', 'Capture des distributions complexes'],
      limitations: ['Instabilité d\'entraînement', 'Mode collapse', 'Difficulté d\'évaluation objective']
    }
  ];
  
  const selectedArchitecture = architectures.find(arch => arch.id === selectedArch) || architectures[0];
  
  return (
    <div className="w-full mt-24 mb-24">
      <h3 className="heading-sm mb-6">Architectures d'IA : anatomie des modèles avancés</h3>
      
      <div className="mb-8">
        <p className="text-muted-foreground mb-6">
          Différentes architectures de réseaux neuronaux sont conçues pour résoudre des problèmes spécifiques. 
          Chacune possède des caractéristiques uniques qui la rendent adaptée à certains types de données et de tâches.
        </p>
        
        <div className="flex flex-wrap gap-3">
          {architectures.map((arch) => (
            <motion.button
              key={arch.id}
              type="button" 
              onClick={() => setSelectedArch(arch.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all cursor-pointer ${
                selectedArch === arch.id 
                ? "bg-primary text-primary-foreground border-primary" 
                : "bg-secondary/40 border-border hover:bg-secondary"
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {arch.icon}
              <span>{arch.name}</span>
            </motion.button>
          ))}
        </div>
      </div>
      
      <motion.div 
        key={selectedArch}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-5 gap-6"
      >
        <div className="lg:col-span-3 order-2 lg:order-1">
          <Card className="h-full border-primary/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <div className="p-2 rounded-full bg-primary/10">
                  {selectedArchitecture.icon}
                </div>
                {selectedArchitecture.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <p className="text-muted-foreground mb-4">{selectedArchitecture.description}</p>
              </div>
              
              <div className="mb-36">
                <h4 className="font-medium mb-4">Structure et composants</h4>
                <div className="grid grid-cols-1 gap-4">
                  {selectedArchitecture.components.map((component, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/40 border border-border">
                      <div className="mt-1 inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h5 className="font-medium">{component.name}</h5>
                        <p className="text-sm text-muted-foreground">{component.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-36 mb-12 relative">
                <Tabs defaultValue="applications" className="relative z-20">
                  <TabsList className="relative z-10 bg-background">
                    <TabsTrigger value="applications">Applications</TabsTrigger>
                    <TabsTrigger value="advantages">Avantages</TabsTrigger>
                    <TabsTrigger value="limitations">Limitations</TabsTrigger>
                  </TabsList>
                  <TabsContent value="applications" className="p-4 mt-4 rounded-lg bg-secondary/20 border relative z-10">
                    <ul className="space-y-1">
                      {selectedArchitecture.applications.map((app, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <ArrowRight className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                  <TabsContent value="advantages" className="p-4 mt-4 rounded-lg bg-secondary/20 border relative z-10">
                    <ul className="space-y-1">
                      {selectedArchitecture.advantages.map((adv, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="inline-flex items-center justify-center w-5 h-5 mt-0.5 mr-1 rounded-full bg-primary/10 text-primary text-xs">+</span>
                          <span>{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                  <TabsContent value="limitations" className="p-4 mt-4 rounded-lg bg-secondary/20 border relative z-10">
                    <ul className="space-y-1">
                      {selectedArchitecture.limitations.map((lim, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="inline-flex items-center justify-center w-5 h-5 mt-0.5 mr-1 rounded-full bg-secondary text-muted-foreground text-xs">-</span>
                          <span>{lim}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-2 order-1 lg:order-2">
          <Card className="h-full border-primary/10">
            <CardHeader>
              <CardTitle className="text-lg">Points clés</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 rounded-lg bg-secondary/30">
                <h4 className="flex items-center gap-2 font-medium mb-2">
                  <Cpu className="h-4 w-4 text-primary" />
                  Principe fondamental
                </h4>
                <p className="text-sm text-muted-foreground">
                  {selectedArch === 'transformer' && "Utilise des mécanismes d'attention pour pondérer l'importance de chaque élément d'une séquence."}
                  {selectedArch === 'cnn' && "Applique des filtres de convolution pour détecter des motifs locaux dans une grille de données."}
                  {selectedArch === 'rnn' && "Maintient un état interne qui évolue avec chaque élément d'une séquence temporelle."}
                  {selectedArch === 'gan' && "Oppose deux réseaux dans un jeu à somme nulle : l'un génère, l'autre discrimine."}
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-secondary/30">
                <h4 className="flex items-center gap-2 font-medium mb-2">
                  <Database className="h-4 w-4 text-primary" />
                  Données adaptées
                </h4>
                <p className="text-sm text-muted-foreground">
                  {selectedArch === 'transformer' && "Texte, code, séquences structurées de grande longueur."}
                  {selectedArch === 'cnn' && "Images, vidéos, données spatiales structurées en grille."}
                  {selectedArch === 'rnn' && "Séries temporelles, texte, audio, données séquentielles."}
                  {selectedArch === 'gan' && "Images, audio, ou toute donnée pour laquelle on peut distinguer le réel du faux."}
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-secondary/30">
                <h4 className="flex items-center gap-2 font-medium mb-2">
                  <Network className="h-4 w-4 text-primary" />
                  Innovation clé
                </h4>
                <p className="text-sm text-muted-foreground">
                  {selectedArch === 'transformer' && "Le mécanisme d'attention multi-têtes qui permet au modèle de se concentrer sur différentes parties de l'entrée simultanément."}
                  {selectedArch === 'cnn' && "Les opérations de convolution qui permettent d'extraire des caractéristiques hiérarchiques avec un nombre réduit de paramètres."}
                  {selectedArch === 'rnn' && "Les cellules LSTM qui résolvent le problème de disparition du gradient dans les séquences longues."}
                  {selectedArch === 'gan' && "L'apprentissage par compétition qui améliore progressivement la qualité des données générées."}
                </p>
              </div>
              
              {/* Schéma d'architecture agrandi de 20% */}
              <div className="p-4 rounded-lg bg-secondary/30 mt-8">
                <h4 className="flex items-center gap-2 font-medium mb-3">
                  <Brain className="h-4 w-4 text-primary" />
                  Schéma d'architecture
                </h4>
                <div className="w-full aspect-square rounded-lg bg-secondary/20 flex items-center justify-center p-4">
                  {selectedArch === 'transformer' && (
                    <svg viewBox="0 0 250 166" width="120%" height="120%">
                      <rect x="83" y="16" width="83" height="133" rx="5" fill="rgb(var(--primary))" fillOpacity="0.2" />
                      <text x="125" y="12" textAnchor="middle" fill="currentColor" fontSize="12">Transformer</text>
                      
                      <rect x="91" y="33" width="67" height="50" rx="3" fill="rgb(var(--primary))" fillOpacity="0.3" />
                      <text x="125" y="45" textAnchor="middle" fill="currentColor" fontSize="10">Encodeur</text>
                      
                      <rect x="91" y="91" width="67" height="50" rx="3" fill="rgb(var(--primary))" fillOpacity="0.3" />
                      <text x="125" y="104" textAnchor="middle" fill="currentColor" fontSize="10">Décodeur</text>
                      
                      <line x1="125" y1="83" x2="125" y2="91" stroke="rgb(var(--primary))" strokeWidth="2" />
                      
                      <rect x="25" y="75" width="50" height="16" rx="3" fill="rgb(var(--primary))" fillOpacity="0.2" />
                      <text x="50" y="85" textAnchor="middle" fill="currentColor" fontSize="8">Entrée</text>
                      
                      <rect x="175" y="75" width="50" height="16" rx="3" fill="rgb(var(--primary))" fillOpacity="0.2" />
                      <text x="200" y="85" textAnchor="middle" fill="currentColor" fontSize="8">Sortie</text>
                      
                      <line x1="75" y1="83" x2="91" y2="58" stroke="rgb(var(--primary))" strokeWidth="2" />
                      <line x1="158" y1="116" x2="175" y2="83" stroke="rgb(var(--primary))" strokeWidth="2" />
                    </svg>
                  )}
                  
                  {selectedArch === 'cnn' && (
                    <svg viewBox="0 0 333 125" width="120%" height="120%">
                      <text x="166" y="12" textAnchor="middle" fill="currentColor" fontSize="12">Architecture CNN</text>
                      
                      <rect x="25" y="33" width="50" height="50" rx="3" fill="rgb(var(--primary))" fillOpacity="0.2" />
                      <text x="50" y="62" textAnchor="middle" fill="currentColor" fontSize="10">Image</text>
                      
                      <rect x="91" y="37" width="42" height="42" rx="3" fill="rgb(var(--primary))" fillOpacity="0.3" />
                      <text x="112" y="62" textAnchor="middle" fill="currentColor" fontSize="8">Conv1</text>
                      
                      <rect x="150" y="41" width="33" height="33" rx="3" fill="rgb(var(--primary))" fillOpacity="0.3" />
                      <text x="166" y="62" textAnchor="middle" fill="currentColor" fontSize="8">Conv2</text>
                      
                      <rect x="200" y="45" width="25" height="25" rx="3" fill="rgb(var(--primary))" fillOpacity="0.3" />
                      <text x="212" y="62" textAnchor="middle" fill="currentColor" fontSize="8">Pool</text>
                      
                      <rect x="241" y="37" width="50" height="8" rx="3" fill="rgb(var(--primary))" fillOpacity="0.3" />
                      <rect x="241" y="50" width="50" height="8" rx="3" fill="rgb(var(--primary))" fillOpacity="0.3" />
                      <rect x="241" y="62" width="50" height="8" rx="3" fill="rgb(var(--primary))" fillOpacity="0.3" />
                      <text x="266" y="83" textAnchor="middle" fill="currentColor" fontSize="8">Fully Connected</text>
                      
                      <line x1="75" y1="58" x2="91" y2="58" stroke="rgb(var(--primary))" strokeWidth="2" />
                      <line x1="133" y1="58" x2="150" y2="58" stroke="rgb(var(--primary))" strokeWidth="2" />
                      <line x1="183" y1="58" x2="200" y2="58" stroke="rgb(var(--primary))" strokeWidth="2" />
                      <line x1="225" y1="58" x2="241" y2="58" stroke="rgb(var(--primary))" strokeWidth="2" />
                    </svg>
                  )}
                  
                  {selectedArch === 'rnn' && (
                    <svg viewBox="0 0 333 125" width="120%" height="120%">
                      <text x="166" y="12" textAnchor="middle" fill="currentColor" fontSize="12">Architecture RNN</text>
                      
                      <rect x="41" y="50" width="33" height="33" rx="16" fill="rgb(var(--primary))" fillOpacity="0.3" />
                      <text x="58" y="66" textAnchor="middle" fill="currentColor" fontSize="10">X₁</text>
                      
                      <rect x="125" y="50" width="33" height="33" rx="16" fill="rgb(var(--primary))" fillOpacity="0.3" />
                      <text x="141" y="66" textAnchor="middle" fill="currentColor" fontSize="10">X₂</text>
                      
                      <rect x="208" y="50" width="33" height="33" rx="16" fill="rgb(var(--primary))" fillOpacity="0.3" />
                      <text x="225" y="66" textAnchor="middle" fill="currentColor" fontSize="10">X₃</text>
                      
                      <rect x="83" y="50" width="33" height="33" rx="3" fill="rgb(var(--primary))" fillOpacity="0.2" />
                      <text x="100" y="66" textAnchor="middle" fill="currentColor" fontSize="10">h₁</text>
                      
                      <rect x="166" y="50" width="33" height="33" rx="3" fill="rgb(var(--primary))" fillOpacity="0.2" />
                      <text x="183" y="66" textAnchor="middle" fill="currentColor" fontSize="10">h₂</text>
                      
                      <rect x="250" y="50" width="33" height="33" rx="3" fill="rgb(var(--primary))" fillOpacity="0.2" />
                      <text x="266" y="66" textAnchor="middle" fill="currentColor" fontSize="10">h₃</text>
                      
                      <line x1="75" y1="66" x2="83" y2="66" stroke="rgb(var(--primary))" strokeWidth="2" />
                      <line x1="116" y1="66" x2="125" y2="66" stroke="rgb(var(--primary))" strokeWidth="2" />
                      <line x1="158" y1="66" x2="166" y2="66" stroke="rgb(var(--primary))" strokeWidth="2" />
                      <line x1="200" y1="66" x2="208" y2="66" stroke="rgb(var(--primary))" strokeWidth="2" />
                      <line x1="241" y1="66" x2="250" y2="66" stroke="rgb(var(--primary))" strokeWidth="2" />
                      
                      <path d="M116,41 C125,33 158,33 166,41" fill="none" stroke="rgb(var(--primary))" strokeWidth="2" />
                      <path d="M200,41 C208,33 241,33 250,41" fill="none" stroke="rgb(var(--primary))" strokeWidth="2" />
                    </svg>
                  )}
                  
                  {selectedArch === 'gan' && (
                    <svg viewBox="0 0 333 166" width="120%" height="120%">
                      <text x="166" y="12" textAnchor="middle" fill="currentColor" fontSize="12">Architecture GAN</text>
                      
                      <rect x="41" y="33" width="67" height="42" rx="3" fill="rgb(var(--primary))" fillOpacity="0.2" />
                      <text x="75" y="54" textAnchor="middle" fill="currentColor" fontSize="10">Bruit aléatoire</text>
                      
                      <rect x="133" y="33" width="67" height="42" rx="3" fill="rgb(var(--primary))" fillOpacity="0.3" />
                      <text x="166" y="54" textAnchor="middle" fill="currentColor" fontSize="10">Générateur</text>
                      
                      <rect x="225" y="33" width="67" height="42" rx="3" fill="rgb(var(--primary))" fillOpacity="0.2" />
                      <text x="258" y="54" textAnchor="middle" fill="currentColor" fontSize="10">Image générée</text>
                      
                      <rect x="133" y="100" width="67" height="42" rx="3" fill="rgb(var(--primary))" fillOpacity="0.3" />
                      <text x="166" y="121" textAnchor="middle" fill="currentColor" fontSize="10">Discriminateur</text>
                      
                      <rect x="41" y="100" width="67" height="42" rx="3" fill="rgb(var(--primary))" fillOpacity="0.2" />
                      <text x="75" y="121" textAnchor="middle" fill="currentColor" fontSize="10">Image réelle</text>
                      
                      <rect x="225" y="100" width="67" height="42" rx="3" fill="rgb(var(--primary))" fillOpacity="0.2" />
                      <text x="258" y="121" textAnchor="middle" fill="currentColor" fontSize="10">Vrai/Faux</text>
                      
                      <line x1="108" y1="54" x2="133" y2="54" stroke="rgb(var(--primary))" strokeWidth="2" />
                      <line x1="200" y1="54" x2="225" y2="54" stroke="rgb(var(--primary))" strokeWidth="2" />
                      
                      <line x1="108" y1="121" x2="133" y2="121" stroke="rgb(var(--primary))" strokeWidth="2" />
                      <line x1="200" y1="121" x2="225" y2="121" stroke="rgb(var(--primary))" strokeWidth="2" />
                      
                      <line x1="258" y1="75" x2="258" y2="100" stroke="rgb(var(--primary))" strokeWidth="2" />
                      <line x1="258" y1="75" x2="200" y2="75" stroke="rgb(var(--primary))" strokeWidth="2" />
                      <line x1="200" y1="75" x2="166" y2="75" stroke="rgb(var(--primary))" strokeWidth="2" />
                      <line x1="166" y1="75" x2="166" y2="100" stroke="rgb(var(--primary))" strokeWidth="2" />
                    </svg>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
};

export default AIArchitecturesVisualization;
