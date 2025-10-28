
export interface TextIndicator {
  type: string;
  description: string;
  weight: number;
  confidence: number;
}

export class TextDetectionEngine {
  private readonly aiKeywords = [
    'furthermore', 'moreover', 'additionally', 'consequently', 'however',
    'comprehensive', 'multifaceted', 'holistic', 'nuanced', 'facilitate',
    'optimize', 'leverage', 'implement', 'utilize', 'enhance', 'streamline'
  ];

  private readonly aiPhrases = [
    'it is important to note',
    'it is worth noting',
    'in conclusion',
    'to summarize',
    'in summary',
    'as previously mentioned',
    'it should be emphasized',
    'from this perspective'
  ];

  analyzeTextIndicators(text: string): TextIndicator[] {
    const indicators: TextIndicator[] = [];
    
    // Analyse de la perplexité (mesure de prévisibilité)
    const perplexity = this.calculatePerplexity(text);
    if (perplexity < 50) {
      indicators.push({ 
        type: 'perplexity', 
        description: `Perplexité très faible (${perplexity.toFixed(1)}) - texte très prévisible`, 
        weight: 0.6,
        confidence: Math.min((50 - perplexity) / 50, 1)
      });
    }

    // Analyse de l'entropie lexicale
    const entropy = this.calculateLexicalEntropy(text);
    if (entropy < 3.5) {
      indicators.push({ 
        type: 'entropy', 
        description: `Entropie lexicale faible (${entropy.toFixed(2)}) - vocabulaire répétitif`, 
        weight: 0.4,
        confidence: (3.5 - entropy) / 3.5
      });
    }

    // Détection de patterns IA spécifiques
    const aiKeywordCount = this.countAIKeywords(text);
    if (aiKeywordCount.count > 0) {
      const density = aiKeywordCount.count / aiKeywordCount.totalWords;
      if (density > 0.02) {
        indicators.push({ 
          type: 'ai_keywords', 
          description: `Forte densité de mots-clés IA (${(density * 100).toFixed(1)}%)`, 
          weight: 0.5,
          confidence: Math.min(density / 0.05, 1)
        });
      }
    }

    // Analyse des phrases typiques d'IA
    const phraseMatches = this.detectAIPhrases(text);
    if (phraseMatches.length > 0) {
      indicators.push({ 
        type: 'ai_phrases', 
        description: `${phraseMatches.length} expressions typiques d'IA détectées`, 
        weight: 0.6,
        confidence: Math.min(phraseMatches.length / 5, 1)
      });
    }

    // Analyse de la variation de longueur des phrases
    const sentenceVariation = this.analyzeSentenceVariation(text);
    if (sentenceVariation.coefficient < 0.3) {
      indicators.push({ 
        type: 'sentence_uniformity', 
        description: `Phrases très uniformes (coefficient: ${sentenceVariation.coefficient.toFixed(2)})`, 
        weight: 0.4,
        confidence: (0.3 - sentenceVariation.coefficient) / 0.3
      });
    }

    // Analyse de la complexité syntaxique
    const syntacticComplexity = this.calculateSyntacticComplexity(text);
    if (syntacticComplexity > 0.8) {
      indicators.push({ 
        type: 'syntax_complexity', 
        description: `Complexité syntaxique élevée (${syntacticComplexity.toFixed(2)}) - structure très régulière`, 
        weight: 0.3,
        confidence: (syntacticComplexity - 0.8) / 0.2
      });
    }

    // Analyse de la distribution des mots-outils
    const functionWordAnalysis = this.analyzeFunctionWords(text);
    if (functionWordAnalysis.anomaly > 0.6) {
      indicators.push({ 
        type: 'function_words', 
        description: `Distribution anormale des mots-outils (score: ${functionWordAnalysis.anomaly.toFixed(2)})`, 
        weight: 0.4,
        confidence: functionWordAnalysis.anomaly
      });
    }

    return indicators;
  }

  private calculatePerplexity(text: string): number {
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    if (words.length < 10) return 100;

    // Calcul simplifié de la perplexité basé sur les bigrammes
    const bigrams = new Map<string, number>();
    const unigramCounts = new Map<string, number>();
    
    for (let i = 0; i < words.length - 1; i++) {
      const bigram = `${words[i]} ${words[i + 1]}`;
      bigrams.set(bigram, (bigrams.get(bigram) || 0) + 1);
      unigramCounts.set(words[i], (unigramCounts.get(words[i]) || 0) + 1);
    }

    let logProbSum = 0;
    let count = 0;

    for (const [bigram, freq] of bigrams.entries()) {
      const [w1] = bigram.split(' ');
      const unigramCount = unigramCounts.get(w1) || 1;
      const probability = freq / unigramCount;
      logProbSum += Math.log2(probability);
      count++;
    }

    return count > 0 ? Math.pow(2, -logProbSum / count) : 100;
  }

  private calculateLexicalEntropy(text: string): number {
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    if (words.length === 0) return 0;

    const wordCounts = new Map<string, number>();
    words.forEach(word => {
      wordCounts.set(word, (wordCounts.get(word) || 0) + 1);
    });

    let entropy = 0;
    for (const count of wordCounts.values()) {
      const probability = count / words.length;
      entropy -= probability * Math.log2(probability);
    }

    return entropy;
  }

  private countAIKeywords(text: string): { count: number; totalWords: number } {
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    const aiKeywordCount = words.filter(word => 
      this.aiKeywords.includes(word)
    ).length;

    return { count: aiKeywordCount, totalWords: words.length };
  }

  private detectAIPhrases(text: string): string[] {
    const lowerText = text.toLowerCase();
    return this.aiPhrases.filter(phrase => lowerText.includes(phrase));
  }

  private analyzeSentenceVariation(text: string): { coefficient: number; avgLength: number } {
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    if (sentences.length < 2) return { coefficient: 1, avgLength: 0 };

    const lengths = sentences.map(s => s.trim().length);
    const avgLength = lengths.reduce((sum, len) => sum + len, 0) / lengths.length;
    const variance = lengths.reduce((sum, len) => sum + Math.pow(len - avgLength, 2), 0) / lengths.length;
    const standardDeviation = Math.sqrt(variance);
    const coefficient = avgLength > 0 ? standardDeviation / avgLength : 0;

    return { coefficient, avgLength };
  }

  private calculateSyntacticComplexity(text: string): number {
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    if (sentences.length === 0) return 0;

    let totalComplexity = 0;
    
    for (const sentence of sentences) {
      const words = sentence.trim().split(/\s+/);
      const commas = (sentence.match(/,/g) || []).length;
      const subordinating = (sentence.toLowerCase().match(/\b(that|which|who|whom|whose|when|where|while|although|because|since|if|unless|until)\b/g) || []).length;
      
      // Score de complexité basé sur la longueur, ponctuation, et mots de subordination
      const complexity = (words.length / 20) + (commas / words.length) + (subordinating / words.length);
      totalComplexity += Math.min(complexity, 1);
    }

    return totalComplexity / sentences.length;
  }

  private analyzeFunctionWords(text: string): { anomaly: number } {
    const functionWords = ['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should'];
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    
    if (words.length === 0) return { anomaly: 0 };

    const functionWordCount = words.filter(word => functionWords.includes(word)).length;
    const functionWordRatio = functionWordCount / words.length;
    
    // Ratio normal entre 0.4 et 0.6 pour un texte naturel
    const expectedRatio = 0.5;
    const deviation = Math.abs(functionWordRatio - expectedRatio);
    const anomaly = Math.min(deviation / 0.2, 1);

    return { anomaly };
  }

  calculateConfidence(indicators: TextIndicator[]): number {
    if (indicators.length === 0) return 0;

    // Calcul pondéré de la confiance
    const weightedSum = indicators.reduce((sum, indicator) => 
      sum + (indicator.weight * indicator.confidence), 0
    );
    const totalWeight = indicators.reduce((sum, indicator) => sum + indicator.weight, 0);
    
    const baseConfidence = totalWeight > 0 ? weightedSum / totalWeight : 0;
    
    // Application d'une fonction sigmoïde pour lisser les résultats
    return Math.min(1 / (1 + Math.exp(-5 * (baseConfidence - 0.5))), 0.95);
  }
}
