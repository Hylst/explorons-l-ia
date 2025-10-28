
import React from 'react';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, BookOpen, ChevronRight, FileText, MessageCircle, BarChart, Code, Share2 } from 'lucide-react';
import LessonSection from '@/components/courses/LessonSection';
import CodeExample from '@/components/courses/CodeExample';
import ZoomOn from '@/components/courses/ZoomOn';
import Illustration from '@/components/courses/Illustration';
import CourseQuiz, { QuizQuestion } from '@/components/courses/CourseQuiz';

/**
 * Page du cours sur le Traitement du Langage Naturel
 * @returns {JSX.Element} Le composant de la page
 */
const NLPConcepts = () => {
  const quizQuestions: QuizQuestion[] = [
    {
      question: "Qu'est-ce que le tokenization en NLP?",
      options: [
        "L'extraction de mots-clés d'un texte",
        "La division du texte en unités significatives comme des mots ou sous-mots",
        "La classification des mots par catégories grammaticales",
        "L'encodage de texte en représentation binaire"
      ],
      correctAnswer: 1,
      explanation: "La tokenization est le processus de découpage du texte en unités plus petites (tokens) comme des mots, des sous-mots ou des caractères, qui servent d'entrée aux algorithmes de traitement du langage."
    },
    {
      question: "Quelle est la principale différence entre Word2Vec et BERT?",
      options: [
        "Word2Vec est supervisé, BERT est non supervisé",
        "Word2Vec produit des embeddings statiques, BERT produit des embeddings contextuels",
        "Word2Vec est pour l'anglais uniquement, BERT est multilingue",
        "Word2Vec est pour la traduction, BERT est pour la classification"
      ],
      correctAnswer: 1,
      explanation: "Word2Vec crée des embeddings statiques où chaque mot a une représentation unique, tandis que BERT génère des embeddings contextuels où la représentation d'un mot varie selon son contexte dans la phrase."
    },
    {
      question: "Quelle architecture est à la base des modèles comme GPT et BERT?",
      options: [
        "Convolutional Neural Network (CNN)",
        "Recurrent Neural Network (RNN)",
        "Transformer",
        "Generative Adversarial Network (GAN)"
      ],
      correctAnswer: 2,
      explanation: "L'architecture Transformer, introduite dans le papier 'Attention is All You Need', est la base des modèles de langage modernes comme GPT (utilisant uniquement l'encodeur) et BERT (utilisant uniquement le décodeur)."
    },
    {
      question: "Qu'est-ce que le fine-tuning dans le contexte des modèles de langage?",
      options: [
        "La réduction de la taille du modèle pour l'optimiser",
        "L'ajustement des hyperparamètres pour améliorer la performance",
        "L'adaptation d'un modèle préentraîné à une tâche spécifique",
        "Le nettoyage du texte pour améliorer les résultats"
      ],
      correctAnswer: 2,
      explanation: "Le fine-tuning est le processus d'adaptation d'un modèle préentraîné à une tâche spécifique en continuant l'entraînement sur un jeu de données plus petit et spécialisé."
    },
    {
      question: "Quel est l'objectif de l'attention dans les modèles Transformer?",
      options: [
        "Réduire le temps d'entraînement",
        "Permettre au modèle de se concentrer sur différentes parties de l'entrée lors du traitement",
        "Augmenter la taille du vocabulaire du modèle",
        "Convertir le texte en vecteurs numériques"
      ],
      correctAnswer: 1,
      explanation: "Le mécanisme d'attention permet au modèle de pondérer différemment l'importance des mots d'entrée lors du traitement, permettant ainsi de capturer les dépendances à longue distance et les relations contextuelles."
    }
  ];

  return (
    <>
      <Hero
        title="Traitement du Langage Naturel (NLP) : Concepts et Outils"
        subtitle="Maîtrisez les techniques modernes de compréhension et génération automatique du langage"
      />

      <section className="section-container mb-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <div className="mb-8">
              <SectionHeading title="À propos de ce cours" />
              <p className="text-lg mb-4">
                Le traitement du langage naturel (NLP) est l'un des domaines les plus dynamiques de l'intelligence artificielle. Ce cours vous présente les concepts fondamentaux et les techniques avancées qui permettent aux machines de comprendre et de générer du langage humain.
              </p>
              <p className="mb-4">
                Des modèles de type transformer comme BERT et GPT aux techniques d'embedding et d'analyse sémantique, vous découvrirez comment développer des applications puissantes qui interagissent avec le langage naturel de façon intelligente.
              </p>
            </div>

            <div className="mb-8">
              <SectionHeading title="Ce que vous apprendrez" />
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Les fondements théoriques du traitement automatique du langage</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Les techniques de prétraitement et de tokenisation du texte</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Les modèles d'embedding et de représentation vectorielle des mots</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>L'architecture et le fonctionnement des modèles transformer</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>La mise en œuvre de projets NLP concrets (classification, génération, QA)</span>
                </li>
              </ul>
            </div>

            <div className="mb-10">
              <SectionHeading title="Plan du cours" />
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      Module 1: Introduction au NLP
                    </h3>
                    <p className="text-muted-foreground">Histoire du NLP, applications modernes, défis particuliers et opportunités actuelles.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      Module 2: Prétraitement et tokenisation du texte
                    </h3>
                    <p className="text-muted-foreground">Nettoyage de texte, normalisation, tokenisation par mots et sous-mots, stemming et lemmatisation.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <BarChart className="h-5 w-5 text-primary" />
                      Module 3: Représentation vectorielle du texte
                    </h3>
                    <p className="text-muted-foreground">Bag of words, TF-IDF, word embeddings (Word2Vec, GloVe, FastText) et contextual embeddings.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <MessageCircle className="h-5 w-5 text-primary" />
                      Module 4: Les modèles transformer et l'attention
                    </h3>
                    <p className="text-muted-foreground">Architecture transformer, mécanisme d'attention, modèles BERT, GPT et leurs variantes.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      Module 5: Classification de texte et analyse de sentiment
                    </h3>
                    <p className="text-muted-foreground">Techniques de classification, fine-tuning de modèles préentraînés, analyse de sentiment et d'émotion.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      Module 6: Génération de texte et résumé automatique
                    </h3>
                    <p className="text-muted-foreground">Modèles génératifs, techniques de decoding, évaluation de texte généré et résumé extractif vs abstractif.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                      <MessageCircle className="h-5 w-5 text-primary" />
                      Module 7: Question-réponse et dialogue
                    </h3>
                    <p className="text-muted-foreground">Systèmes de QA, extraction d'information, chatbots et agents conversationnels avancés.</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contenu détaillé des leçons */}
            <LessonSection title="Introduction au Traitement du Langage Naturel" icon={<MessageSquare size={24} />} delay={1}>
              <p>
                Le Traitement du Langage Naturel (NLP) est un domaine de l'intelligence artificielle qui se concentre sur l'interaction entre les ordinateurs et les langues humaines. L'objectif est de permettre aux machines de comprendre, interpréter et générer du langage humain de manière utile et significative.
              </p>
              
              <ZoomOn title="Les défis du langage naturel pour les machines">
                <p>
                  Comprendre le langage humain représente un défi majeur pour les machines en raison de plusieurs facteurs :
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li><strong>Ambiguïté :</strong> Un même mot peut avoir plusieurs sens selon le contexte</li>
                  <li><strong>Sarcasme et ironie :</strong> Détection difficile sans indices paralinguistiques</li>
                  <li><strong>Référence implicite :</strong> Comprendre à quoi se réfèrent les pronoms</li>
                  <li><strong>Connaissance du monde :</strong> De nombreux textes font référence à des connaissances externes</li>
                  <li><strong>Évolution constante :</strong> Le langage change rapidement avec l'apparition de nouveaux termes</li>
                </ul>
              </ZoomOn>

              <Illustration 
                src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" 
                alt="Visualisation de mots connectés représentant le traitement du langage naturel"
                caption="Le NLP transforme le langage humain en représentations que les machines peuvent comprendre et traiter"
                width="2/3"
              />

              <p className="mt-4">
                Les applications du NLP sont omniprésentes dans notre vie quotidienne : moteurs de recherche, assistants vocaux, systèmes de traduction automatique, correcteurs orthographiques, analyse de sentiment sur les réseaux sociaux, et plus récemment, modèles génératifs de texte comme ChatGPT.
              </p>
            </LessonSection>

            <LessonSection title="Prétraitement et tokenisation du texte" icon={<FileText size={24} />} delay={2}>
              <p>
                Le prétraitement est une étape cruciale en NLP qui consiste à nettoyer et préparer le texte brut pour qu'il puisse être analysé efficacement par les algorithmes. La tokenisation, quant à elle, divise le texte en unités élémentaires (tokens) que la machine pourra traiter.
              </p>

              <CodeExample 
                title="Prétraitement basique avec NLTK"
                language="python"
                code={`import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
import string

# Téléchargement des ressources nécessaires (à faire une seule fois)
# nltk.download('punkt')
# nltk.download('stopwords')
# nltk.download('wordnet')

def pretraiter_texte(texte):
    # Conversion en minuscules
    texte = texte.lower()
    
    # Tokenisation
    tokens = word_tokenize(texte)
    
    # Suppression des ponctuations
    tokens = [mot for mot in tokens if mot not in string.punctuation]
    
    # Suppression des stop words (mots fréquents comme "le", "la", "et", etc.)
    stop_words = set(stopwords.words('french'))
    tokens = [mot for mot in tokens if mot not in stop_words]
    
    # Lemmatisation (réduction des mots à leur forme de base)
    lemmatiseur = WordNetLemmatizer()
    tokens = [lemmatiseur.lemmatize(mot) for mot in tokens]
    
    return tokens

# Exemple
texte = "Les voitures autonomes utilisent l'intelligence artificielle pour naviguer sur les routes."
tokens = pretraiter_texte(texte)
print(tokens)`}
                explanation="Ce code illustre un pipeline classique de prétraitement de texte en NLP : conversion en minuscules, tokenisation, suppression des ponctuations et mots vides, puis lemmatisation."
              />

              <ZoomOn title="Tokenisation par sous-mots">
                <p>
                  La tokenisation par sous-mots (subword tokenization) est une approche moderne qui décompose les mots en unités plus petites, permettant de :
                </p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Gérer efficacement les mots hors vocabulaire</li>
                  <li>Capturer la morphologie des mots (préfixes, suffixes)</li>
                  <li>Réduire la taille du vocabulaire tout en maintenant la couverture</li>
                </ul>
                <p className="mt-2">
                  Les algorithmes comme BPE (Byte-Pair Encoding), WordPiece et SentencePiece sont couramment utilisés dans les modèles modernes comme BERT et GPT.
                </p>
              </ZoomOn>

              <CodeExample 
                title="Tokenisation avec un modèle BERT"
                language="python"
                code={`from transformers import BertTokenizer

# Charger le tokenizer BERT
tokenizer = BertTokenizer.from_pretrained('bert-base-multilingual-cased')

# Texte à tokeniser
texte = "Le transfert d'apprentissage en NLP est très efficace!"

# Tokenisation avec BERT (retourne les IDs et le texte divisé en tokens)
tokens_ids = tokenizer.encode(texte, add_special_tokens=True)
tokens = tokenizer.convert_ids_to_tokens(tokens_ids)

print("Tokens IDs:", tokens_ids)
print("Tokens:", tokens)

# Afficher comment BERT divise en sous-mots
for token in tokens:
    if token.startswith('##'):
        print(f"Sous-mot: {token[2:]}")
    else:
        print(f"Début de mot ou mot complet: {token}")`}
                explanation="Cet exemple montre comment fonctionne la tokenisation avec BERT, qui utilise WordPiece pour segmenter le texte en sous-mots. Les préfixes '##' indiquent la continuation d'un mot."
              />

              <Illustration 
                src="https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" 
                alt="Document texte avec des mots mis en évidence"
                caption="La tokenisation transforme le flux continu de texte en unités discrètes pour le traitement"
                width="2/3"
              />
            </LessonSection>

            <LessonSection title="Modèles d'embedding et représentation vectorielle" icon={<Share2 size={24} />} delay={3}>
              <p>
                Les embeddings sont des représentations vectorielles denses de mots ou de phrases qui capturent les relations sémantiques et syntaxiques. Ils constituent la pierre angulaire des approches modernes en NLP.
              </p>

              <ZoomOn title="Évolution des représentations de texte">
                <div className="space-y-2">
                  <p>
                    <strong>1. One-hot encoding :</strong> Représentation binaire et creuse où chaque mot est un vecteur de la taille du vocabulaire.
                  </p>
                  <p>
                    <strong>2. Bag of Words / TF-IDF :</strong> Représentations basées sur la fréquence des mots, ignorant la sémantique et l'ordre.
                  </p>
                  <p>
                    <strong>3. Word embeddings statiques :</strong> Word2Vec, GloVe, FastText - représentations denses capturant le sens mais fixes pour chaque mot.
                  </p>
                  <p>
                    <strong>4. Embeddings contextuels :</strong> ELMo, BERT, GPT - représentations dynamiques qui changent selon le contexte du mot dans la phrase.
                  </p>
                </div>
              </ZoomOn>

              <CodeExample 
                title="Word embeddings avec Gensim (Word2Vec)"
                language="python"
                code={`import gensim
from gensim.models import Word2Vec
import matplotlib.pyplot as plt
from sklearn.decomposition import PCA

# Corpus d'exemple
corpus = [
    ["le", "chat", "mange", "une", "souris"],
    ["le", "chien", "aboie", "après", "un", "chat"],
    ["j'aime", "les", "chats", "et", "les", "chiens"],
    ["le", "renard", "chasse", "dans", "les", "bois"],
    ["le", "loup", "hurle", "à", "la", "lune"]
]

# Entraîner un modèle Word2Vec
model = Word2Vec(sentences=corpus, vector_size=100, window=5, min_count=1, workers=4)

# Tester la similarité entre des mots
print(f"Similarité entre 'chat' et 'chien': {model.wv.similarity('chat', 'chien')}")
print(f"Similarité entre 'chat' et 'souris': {model.wv.similarity('chat', 'souris')}")

# Trouver les mots les plus similaires à 'chat'
most_similar = model.wv.most_similar('chat', topn=3)
print(f"Mots les plus similaires à 'chat': {most_similar}")

# Visualiser les embeddings en 2D
def plot_embeddings(model, words):
    # Extraire les vecteurs
    word_vectors = [model.wv[w] for w in words]
    
    # Réduire à 2 dimensions avec PCA
    pca = PCA(n_components=2)
    result = pca.fit_transform(word_vectors)
    
    # Créer le graph
    plt.figure(figsize=(10, 8))
    plt.scatter(result[:, 0], result[:, 1], c='blue')
    
    # Ajouter les labels
    for i, word in enumerate(words):
        plt.annotate(word, xy=(result[i, 0], result[i, 1]))
        
    plt.title('Visualisation 2D des embeddings de mots')
    plt.show()

# Visualisation des mots sélectionnés
animal_words = ['chat', 'chien', 'souris', 'renard', 'loup']
plot_embeddings(model, animal_words)`}
                explanation="Cet exemple montre comment créer des embeddings de mots avec Word2Vec, calculer des similarités, et visualiser les relations entre les mots dans un espace vectoriel réduit."
              />

              <p className="mt-4">
                Les embeddings contextuels, comme ceux produits par BERT, représentent une avancée majeure par rapport aux embeddings statiques car ils prennent en compte le contexte complet d'une phrase pour déterminer la signification d'un mot.
              </p>

              <CodeExample 
                title="Embeddings contextuels avec BERT"
                language="python"
                code={`from transformers import BertModel, BertTokenizer
import torch

# Charger le modèle et le tokenizer
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertModel.from_pretrained('bert-base-uncased')

# Fonction pour obtenir les embeddings BERT d'une phrase
def get_bert_embeddings(text):
    # Tokenisation
    inputs = tokenizer(text, return_tensors="pt", padding=True, truncation=True)
    
    # Obtenir les embeddings
    with torch.no_grad():
        outputs = model(**inputs)
    
    # Les embeddings de la dernière couche cachée
    last_hidden_states = outputs.last_hidden_state
    
    # Soit on prend l'embedding du token [CLS] (premier token)
    cls_embedding = last_hidden_states[:, 0, :].numpy()
    
    # Soit on moyenne tous les tokens pour avoir une représentation de la phrase
    mean_embedding = torch.mean(last_hidden_states, dim=1).numpy()
    
    return cls_embedding, mean_embedding

# Tester avec différentes occurrences d'un même mot dans des contextes différents
sentences = [
    "The bank is on the river.",
    "I need to go to the bank to get some money."
]

for sentence in sentences:
    cls_emb, mean_emb = get_bert_embeddings(sentence)
    print(f"Phrase: {sentence}")
    print(f"Taille de l'embedding CLS: {cls_emb.shape}")
    print(f"Premiers éléments de l'embedding: {cls_emb[0][:5]}")
    print("---")`}
                explanation="Ce code illustre comment obtenir des embeddings contextuels avec BERT. Contrairement aux embeddings statiques, le même mot ('bank') aura différentes représentations vectorielles selon qu'il désigne une banque ou la rive d'une rivière."
              />

              <Illustration 
                src="https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80" 
                alt="Répartition des mots dans un espace vectoriel"
                caption="Les embeddings projettent les mots dans un espace vectoriel où les mots sémantiquement proches sont regroupés"
                width="2/3"
              />
            </LessonSection>

            {/* Quiz du cours */}
            <CourseQuiz
              title="Quiz : Traitement du Langage Naturel"
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
                    <p>Intermédiaire à Avancé</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-1">Durée</h4>
                    <p>7 semaines (4-6 heures/semaine)</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-1">Prérequis</h4>
                    <p>Bonnes connaissances en Python et expérience de base en Deep Learning. Une familiarité avec PyTorch ou TensorFlow est recommandée.</p>
                  </div>
                  
                  <div className="pt-2">
                    <h4 className="font-medium text-sm text-muted-foreground mb-2">Ressources</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <span>Matériel de cours complet</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-primary" />
                        <span>Notebooks pratiques</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-primary" />
                        <span>Exemples de code annotés</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <MessageCircle className="h-4 w-4 text-primary" />
                        <span>Projets d'application réels</span>
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

export default NLPConcepts;
