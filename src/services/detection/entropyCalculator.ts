
export class EntropyCalculator {
  static calculateShannonEntropy(text: string): number {
    const chars = text.split('');
    const frequencies = new Map<string, number>();
    
    // Count character frequencies
    chars.forEach(char => {
      frequencies.set(char, (frequencies.get(char) || 0) + 1);
    });
    
    // Calculate Shannon entropy
    let entropy = 0;
    const totalChars = chars.length;
    
    for (const frequency of frequencies.values()) {
      const probability = frequency / totalChars;
      entropy -= probability * Math.log2(probability);
    }
    
    return entropy;
  }

  static calculateNGramEntropy(text: string, n: number = 2): number {
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    if (words.length < n) return 0;
    
    const ngrams = new Map<string, number>();
    
    for (let i = 0; i <= words.length - n; i++) {
      const ngram = words.slice(i, i + n).join(' ');
      ngrams.set(ngram, (ngrams.get(ngram) || 0) + 1);
    }
    
    let entropy = 0;
    const totalNgrams = ngrams.size;
    
    for (const frequency of ngrams.values()) {
      const probability = frequency / totalNgrams;
      entropy -= probability * Math.log2(probability);
    }
    
    return entropy;
  }

  static calculateBurstiness(text: string): number {
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    const wordCounts = new Map<string, number[]>();
    
    // Track word positions
    words.forEach((word, index) => {
      if (!wordCounts.has(word)) {
        wordCounts.set(word, []);
      }
      wordCounts.get(word)!.push(index);
    });
    
    let totalBurstiness = 0;
    let validWords = 0;
    
    for (const [word, positions] of wordCounts.entries()) {
      if (positions.length > 1) {
        const intervals = [];
        for (let i = 1; i < positions.length; i++) {
          intervals.push(positions[i] - positions[i - 1]);
        }
        
        const meanInterval = intervals.reduce((sum, val) => sum + val, 0) / intervals.length;
        const variance = intervals.reduce((sum, val) => sum + Math.pow(val - meanInterval, 2), 0) / intervals.length;
        const burstiness = (Math.sqrt(variance) - meanInterval) / (Math.sqrt(variance) + meanInterval);
        
        totalBurstiness += Math.max(0, burstiness);
        validWords++;
      }
    }
    
    return validWords > 0 ? totalBurstiness / validWords : 0;
  }
}
