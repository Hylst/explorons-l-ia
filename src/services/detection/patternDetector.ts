
export interface PatternMatch {
  pattern: string;
  count: number;
  positions: number[];
  confidence: number;
}

export class PatternDetector {
  private static readonly AI_LINGUISTIC_PATTERNS = [
    // Hedge words and phrases
    { pattern: /\b(perhaps|possibly|potentially|likely|presumably|arguably)\b/gi, weight: 0.3 },
    { pattern: /\b(it (?:seems|appears) that|one might (?:argue|suggest))\b/gi, weight: 0.4 },
    { pattern: /\b(to some extent|in many cases|generally speaking)\b/gi, weight: 0.3 },
    
    // Formal connectives
    { pattern: /\b(furthermore|moreover|additionally|consequently|nevertheless)\b/gi, weight: 0.4 },
    { pattern: /\b(in conclusion|to summarize|in summary|as aforementioned)\b/gi, weight: 0.5 },
    { pattern: /\b(it is worth noting|it should be emphasized|it is important to)\b/gi, weight: 0.6 },
    
    // Overly structured language
    { pattern: /\b(firstly|secondly|thirdly|lastly)\b/gi, weight: 0.3 },
    { pattern: /\b(on one hand|on the other hand|in contrast|conversely)\b/gi, weight: 0.4 },
    
    // AI-specific vocabulary
    { pattern: /\b(optimize|leverage|utilize|facilitate|enhance|streamline)\b/gi, weight: 0.3 },
    { pattern: /\b(comprehensive|multifaceted|holistic|nuanced|intricate)\b/gi, weight: 0.4 },
    { pattern: /\b(paradigm|methodology|framework|synergy|innovative)\b/gi, weight: 0.3 }
  ];

  static detectAIPatterns(text: string): PatternMatch[] {
    const matches: PatternMatch[] = [];
    const words = text.match(/\b\w+\b/g) || [];
    const totalWords = words.length;
    
    for (const { pattern, weight } of this.AI_LINGUISTIC_PATTERNS) {
      const patternMatches = Array.from(text.matchAll(pattern));
      
      if (patternMatches.length > 0) {
        const positions = patternMatches.map(match => match.index || 0);
        const density = patternMatches.length / totalWords;
        const confidence = Math.min(density * weight * 10, 1);
        
        matches.push({
          pattern: pattern.source,
          count: patternMatches.length,
          positions,
          confidence
        });
      }
    }
    
    return matches.sort((a, b) => b.confidence - a.confidence);
  }

  static calculateSemanticCoherence(text: string): number {
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    if (sentences.length < 2) return 1;
    
    let coherenceScore = 0;
    
    for (let i = 1; i < sentences.length; i++) {
      const prevWords = new Set(sentences[i - 1].toLowerCase().match(/\b\w+\b/g) || []);
      const currWords = new Set(sentences[i].toLowerCase().match(/\b\w+\b/g) || []);
      
      const intersection = new Set([...prevWords].filter(word => currWords.has(word)));
      const union = new Set([...prevWords, ...currWords]);
      
      const jaccardSimilarity = intersection.size / union.size;
      coherenceScore += jaccardSimilarity;
    }
    
    return coherenceScore / (sentences.length - 1);
  }

  static detectRepetitiveStructures(text: string): number {
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    if (sentences.length < 3) return 0;
    
    const structures = sentences.map(sentence => {
      const words = sentence.trim().toLowerCase().match(/\b\w+\b/g) || [];
      // Create a structural fingerprint based on word length patterns
      return words.map(word => word.length < 4 ? 'S' : word.length < 7 ? 'M' : 'L').join('');
    });
    
    const structureFreq = new Map<string, number>();
    structures.forEach(structure => {
      structureFreq.set(structure, (structureFreq.get(structure) || 0) + 1);
    });
    
    const repetitions = Array.from(structureFreq.values()).filter(freq => freq > 1);
    return repetitions.reduce((sum, freq) => sum + (freq - 1), 0) / sentences.length;
  }

  static analyzeLexicalDiversity(text: string): number {
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    const uniqueWords = new Set(words);
    
    // Type-Token Ratio (TTR)
    const ttr = uniqueWords.size / words.length;
    
    // Moving Average Type-Token Ratio (MATTR) for longer texts
    if (words.length > 100) {
      const windowSize = 50;
      let mattr = 0;
      let windows = 0;
      
      for (let i = 0; i <= words.length - windowSize; i += 10) {
        const window = words.slice(i, i + windowSize);
        const uniqueInWindow = new Set(window);
        mattr += uniqueInWindow.size / windowSize;
        windows++;
      }
      
      return windows > 0 ? mattr / windows : ttr;
    }
    
    return ttr;
  }
}
