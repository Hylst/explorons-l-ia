
export interface ImageFeatures {
  colorHistogram: number[];
  textureFeatures: number[];
  edgeDistribution: number[];
  frequencyDomain: number[];
}

export class AdvancedImageAnalysis {
  static async extractFeatures(imageData: ImageData): Promise<ImageFeatures> {
    const { data, width, height } = imageData;
    
    return {
      colorHistogram: this.calculateColorHistogram(data),
      textureFeatures: this.calculateTextureFeatures(data, width, height),
      edgeDistribution: this.calculateEdgeDistribution(data, width, height),
      frequencyDomain: this.calculateFrequencyFeatures(data, width, height)
    };
  }

  private static calculateColorHistogram(data: Uint8ClampedArray): number[] {
    const histogram = {
      r: new Array(256).fill(0),
      g: new Array(256).fill(0),
      b: new Array(256).fill(0),
      hsv: new Array(360).fill(0)
    };
    
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      
      histogram.r[r]++;
      histogram.g[g]++;
      histogram.b[b]++;
      
      // Convert to HSV for hue histogram
      const hsv = this.rgbToHsv(r, g, b);
      const hue = Math.floor(hsv.h);
      if (hue >= 0 && hue < 360) {
        histogram.hsv[hue]++;
      }
    }
    
    // Normalize histograms
    const totalPixels = data.length / 4;
    return [
      ...histogram.r.map(val => val / totalPixels),
      ...histogram.g.map(val => val / totalPixels),
      ...histogram.b.map(val => val / totalPixels),
      ...histogram.hsv.map(val => val / totalPixels)
    ];
  }

  private static calculateTextureFeatures(data: Uint8ClampedArray, width: number, height: number): number[] {
    const grayscale = this.toGrayscale(data, width, height);
    
    // Local Binary Pattern (LBP)
    const lbp = this.calculateLBP(grayscale, width, height);
    
    // Gray Level Co-occurrence Matrix features
    const glcm = this.calculateGLCM(grayscale, width, height);
    
    return [...lbp, ...glcm];
  }

  private static calculateEdgeDistribution(data: Uint8ClampedArray, width: number, height: number): number[] {
    const grayscale = this.toGrayscale(data, width, height);
    
    // Sobel edge detection
    const edges = this.sobelEdgeDetection(grayscale, width, height);
    
    // Calculate edge orientation histogram
    const orientationHist = new Array(8).fill(0); // 8 orientation bins
    
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        const gx = grayscale[idx + 1] - grayscale[idx - 1];
        const gy = grayscale[idx + width] - grayscale[idx - width];
        
        if (edges[idx] > 0.1) {
          const angle = Math.atan2(gy, gx);
          const bin = Math.floor(((angle + Math.PI) / (2 * Math.PI)) * 8) % 8;
          orientationHist[bin]++;
        }
      }
    }
    
    const totalEdges = orientationHist.reduce((sum, val) => sum + val, 0);
    return totalEdges > 0 ? orientationHist.map(val => val / totalEdges) : orientationHist;
  }

  private static calculateFrequencyFeatures(data: Uint8ClampedArray, width: number, height: number): number[] {
    const grayscale = this.toGrayscale(data, width, height);
    
    // Simple frequency analysis using convolution with different kernels
    const lowPass = this.convolve(grayscale, width, height, [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1]
    ]);
    
    const highPass = this.convolve(grayscale, width, height, [
      [-1, -1, -1],
      [-1, 8, -1],
      [-1, -1, -1]
    ]);
    
    // Calculate energy in different frequency bands
    const lowEnergy = this.calculateEnergy(lowPass);
    const highEnergy = this.calculateEnergy(highPass);
    const totalEnergy = lowEnergy + highEnergy;
    
    return totalEnergy > 0 ? [lowEnergy / totalEnergy, highEnergy / totalEnergy] : [0.5, 0.5];
  }

  private static toGrayscale(data: Uint8ClampedArray, width: number, height: number): number[] {
    const grayscale = new Array(width * height);
    
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      grayscale[i / 4] = 0.299 * r + 0.587 * g + 0.114 * b;
    }
    
    return grayscale;
  }

  private static calculateLBP(grayscale: number[], width: number, height: number): number[] {
    const lbpHistogram = new Array(256).fill(0);
    
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const center = grayscale[y * width + x];
        let lbpValue = 0;
        
        // 8-connected neighbors
        const neighbors = [
          grayscale[(y - 1) * width + (x - 1)],
          grayscale[(y - 1) * width + x],
          grayscale[(y - 1) * width + (x + 1)],
          grayscale[y * width + (x + 1)],
          grayscale[(y + 1) * width + (x + 1)],
          grayscale[(y + 1) * width + x],
          grayscale[(y + 1) * width + (x - 1)],
          grayscale[y * width + (x - 1)]
        ];
        
        for (let i = 0; i < 8; i++) {
          if (neighbors[i] >= center) {
            lbpValue |= (1 << i);
          }
        }
        
        lbpHistogram[lbpValue]++;
      }
    }
    
    const totalPixels = (width - 2) * (height - 2);
    return lbpHistogram.map(val => val / totalPixels);
  }

  private static calculateGLCM(grayscale: number[], width: number, height: number): number[] {
    // Simplified GLCM calculation for contrast, homogeneity, and energy
    const levels = 64; // Reduced gray levels for efficiency
    const glcm = Array(levels).fill(null).map(() => Array(levels).fill(0));
    
    // Quantize to reduced levels
    const quantized = grayscale.map(val => Math.floor((val / 256) * levels));
    
    let count = 0;
    for (let y = 0; y < height - 1; y++) {
      for (let x = 0; x < width - 1; x++) {
        const i = quantized[y * width + x];
        const j = quantized[y * width + (x + 1)];
        if (i < levels && j < levels) {
          glcm[i][j]++;
          count++;
        }
      }
    }
    
    // Normalize
    if (count > 0) {
      for (let i = 0; i < levels; i++) {
        for (let j = 0; j < levels; j++) {
          glcm[i][j] /= count;
        }
      }
    }
    
    // Calculate texture features
    let contrast = 0, homogeneity = 0, energy = 0;
    
    for (let i = 0; i < levels; i++) {
      for (let j = 0; j < levels; j++) {
        const p = glcm[i][j];
        contrast += p * Math.pow(i - j, 2);
        homogeneity += p / (1 + Math.abs(i - j));
        energy += p * p;
      }
    }
    
    return [contrast, homogeneity, energy];
  }

  private static sobelEdgeDetection(grayscale: number[], width: number, height: number): number[] {
    const edges = new Array(width * height).fill(0);
    
    const sobelX = [[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]];
    const sobelY = [[-1, -2, -1], [0, 0, 0], [1, 2, 1]];
    
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        let gx = 0, gy = 0;
        
        for (let ky = 0; ky < 3; ky++) {
          for (let kx = 0; kx < 3; kx++) {
            const pixel = grayscale[(y + ky - 1) * width + (x + kx - 1)];
            gx += pixel * sobelX[ky][kx];
            gy += pixel * sobelY[ky][kx];
          }
        }
        
        edges[y * width + x] = Math.sqrt(gx * gx + gy * gy) / 255;
      }
    }
    
    return edges;
  }

  private static convolve(data: number[], width: number, height: number, kernel: number[][]): number[] {
    const result = new Array(width * height).fill(0);
    const kSize = kernel.length;
    const kHalf = Math.floor(kSize / 2);
    
    for (let y = kHalf; y < height - kHalf; y++) {
      for (let x = kHalf; x < width - kHalf; x++) {
        let sum = 0;
        
        for (let ky = 0; ky < kSize; ky++) {
          for (let kx = 0; kx < kSize; kx++) {
            const py = y + ky - kHalf;
            const px = x + kx - kHalf;
            sum += data[py * width + px] * kernel[ky][kx];
          }
        }
        
        result[y * width + x] = sum;
      }
    }
    
    return result;
  }

  private static calculateEnergy(data: number[]): number {
    return data.reduce((sum, val) => sum + val * val, 0);
  }

  private static rgbToHsv(r: number, g: number, b: number): { h: number; s: number; v: number } {
    r /= 255;
    g /= 255;
    b /= 255;
    
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const diff = max - min;
    
    let h = 0;
    if (diff !== 0) {
      if (max === r) h = ((g - b) / diff) % 6;
      else if (max === g) h = (b - r) / diff + 2;
      else h = (r - g) / diff + 4;
    }
    
    h *= 60;
    if (h < 0) h += 360;
    
    const s = max === 0 ? 0 : diff / max;
    const v = max;
    
    return { h, s, v };
  }
}
