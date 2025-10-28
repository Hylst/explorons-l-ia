
import { ScientificPublication } from '../resourcesData';

export const scientificPublications: ScientificPublication[] = [
  {
    title: "Attention Is All You Need",
    authors: ["Ashish Vaswani", "Noam Shazeer", "Niki Parmar", "Jakob Uszkoreit"],
    journal: "Advances in Neural Information Processing Systems",
    year: 2017,
    description: "Article fondateur sur l'architecture Transformer, base des LLMs modernes comme GPT et BERT",
    link: "https://arxiv.org/abs/1706.03762"
  },
  {
    title: "Language Models are Few-Shot Learners",
    authors: ["Tom B. Brown", "Benjamin Mann", "Nick Ryder", "Melanie Subbiah"],
    journal: "Advances in Neural Information Processing Systems",
    year: 2020,
    description: "Présentation de GPT-3 et démonstration des capacités few-shot des grands modèles de langage",
    link: "https://arxiv.org/abs/2005.14165"
  },
  {
    title: "Deep Residual Learning for Image Recognition",
    authors: ["Kaiming He", "Xiangyu Zhang", "Shaoqing Ren", "Jian Sun"],
    journal: "IEEE Conference on Computer Vision and Pattern Recognition",
    year: 2016,
    description: "Introduction des réseaux résiduels (ResNet) qui ont révolutionné la vision par ordinateur",
    link: "https://arxiv.org/abs/1512.03385"
  },
  {
    title: "Generative Adversarial Networks",
    authors: ["Ian J. Goodfellow", "Jean Pouget-Abadie", "Mehdi Mirza", "Bing Xu"],
    journal: "Advances in Neural Information Processing Systems",
    year: 2014,
    description: "Article fondateur sur les GANs, révolutionnant la génération d'images synthétiques",
    link: "https://arxiv.org/abs/1406.2661"
  },
  {
    title: "BERT: Pre-training of Deep Bidirectional Transformers",
    authors: ["Jacob Devlin", "Ming-Wei Chang", "Kenton Lee", "Kristina Toutanova"],
    journal: "North American Chapter of the Association for Computational Linguistics",
    year: 2019,
    description: "Présentation de BERT, modèle bidirectionnel qui a marqué une étape majeure en NLP",
    link: "https://arxiv.org/abs/1810.04805"
  },
  {
    title: "Mastering the Game of Go with Deep Neural Networks",
    authors: ["David Silver", "Aja Huang", "Chris J. Maddison", "Arthur Guez"],
    journal: "Nature",
    year: 2016,
    description: "AlphaGo : première IA à battre un champion du monde au jeu de Go, marquant l'histoire de l'IA",
    link: "https://www.nature.com/articles/nature16961"
  },
  {
    title: "Training language models to follow instructions with human feedback",
    authors: ["Long Ouyang", "Jeff Wu", "Xu Jiang", "Diogo Almeida"],
    journal: "Advances in Neural Information Processing Systems",
    year: 2022,
    description: "Méthodes RLHF (Reinforcement Learning from Human Feedback) utilisées pour aligner les modèles comme ChatGPT",
    link: "https://arxiv.org/abs/2203.02155"
  },
  {
    title: "Constitutional AI: Harmlessness from AI Feedback",
    authors: ["Yuntao Bai", "Andy Jones", "Kamal Ndousse", "Amanda Askell"],
    journal: "arXiv preprint",
    year: 2022,
    description: "Méthode Constitutional AI développée par Anthropic pour entraîner des assistants IA plus sûrs et alignés",
    link: "https://arxiv.org/abs/2212.08073"
  },
  {
    title: "PaLM: Scaling Language Modeling with Pathways",
    authors: ["Aakanksha Chowdhery", "Sharan Narang", "Jacob Devlin", "Maarten Bosma"],
    journal: "Journal of Machine Learning Research",
    year: 2022,
    description: "Présentation du modèle PaLM de 540B paramètres et de ses capacités émergentes impressionnantes",
    link: "https://arxiv.org/abs/2204.02311"
  },
  {
    title: "Flamingo: a Visual Language Model for Few-Shot Learning",
    authors: ["Jean-Baptiste Alayrac", "Jeff Donahue", "Pauline Luc", "Antoine Miech"],
    journal: "Advances in Neural Information Processing Systems",
    year: 2022,
    description: "Modèle multimodal pionnier pour l'apprentissage few-shot combinant vision et langage",
    link: "https://arxiv.org/abs/2204.14198"
  },
  {
    title: "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models",
    authors: ["Jason Wei", "Xuezhi Wang", "Dale Schuurmans", "Maarten Bosma"],
    journal: "Advances in Neural Information Processing Systems",
    year: 2022,
    description: "Technique de prompting chain-of-thought pour améliorer significativement le raisonnement des LLMs",
    link: "https://arxiv.org/abs/2201.11903"
  },
  {
    title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks",
    authors: ["Patrick Lewis", "Ethan Perez", "Aleksandra Piktus", "Fabio Petroni"],
    journal: "Advances in Neural Information Processing Systems",
    year: 2020,
    description: "Introduction du RAG (Retrieval-Augmented Generation) pour combiner génération et récupération d'informations",
    link: "https://arxiv.org/abs/2005.11401"
  },
  {
    title: "Model-Agnostic Meta-Learning for Fast Adaptation of Deep Networks",
    authors: ["Chelsea Finn", "Pieter Abbeel", "Sergey Levine"],
    journal: "International Conference on Machine Learning",
    year: 2017,
    description: "MAML : algorithme d'apprentissage méta pour l'adaptation rapide des réseaux de neurones à de nouvelles tâches",
    link: "https://arxiv.org/abs/1703.03400"
  },
  {
    title: "Diffusion Models Beat GANs on Image Synthesis",
    authors: ["Prafulla Dhariwal", "Alexander Quinn Nichol"],
    journal: "Advances in Neural Information Processing Systems",
    year: 2021,
    description: "Démonstration de la supériorité des modèles de diffusion sur les GANs pour la synthèse d'images de haute qualité",
    link: "https://arxiv.org/abs/2105.05233"
  }
];
