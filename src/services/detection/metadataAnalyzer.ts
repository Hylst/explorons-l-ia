
export interface FileMetadata {
  format: string;
  creationDate?: Date;
  modificationDate?: Date;
  software?: string;
  camera?: string;
  gpsData?: { lat: number; lng: number };
  compressionRatio?: number;
  bitDepth?: number;
  colorSpace?: string;
  hasTransparency?: boolean;
  thumbnailSize?: number;
  exifVersion?: string;
  iccProfile?: string;
}

export interface MetadataIndicator {
  type: 'suspicious' | 'normal' | 'artificial';
  description: string;
  confidence: number;
  weight: number;
}

export class MetadataAnalyzer {
  static async analyzeImageMetadata(file: File): Promise<{ metadata: FileMetadata; indicators: MetadataIndicator[] }> {
    const indicators: MetadataIndicator[] = [];
    const metadata: FileMetadata = { format: file.type };

    try {
      const arrayBuffer = await file.arrayBuffer();
      const dataView = new DataView(arrayBuffer);

      // Analyse JPEG
      if (file.type === 'image/jpeg') {
        const jpegAnalysis = this.analyzeJPEGStructure(dataView);
        Object.assign(metadata, jpegAnalysis.metadata);
        indicators.push(...jpegAnalysis.indicators);
      }

      // Analyse PNG
      if (file.type === 'image/png') {
        const pngAnalysis = this.analyzePNGStructure(dataView);
        Object.assign(metadata, pngAnalysis.metadata);
        indicators.push(...pngAnalysis.indicators);
      }

      // Vérifications générales
      const generalAnalysis = this.performGeneralMetadataAnalysis(file, metadata);
      indicators.push(...generalAnalysis);

    } catch (error) {
      console.error('Erreur analyse métadonnées:', error);
      indicators.push({
        type: 'suspicious',
        description: 'Impossible de lire les métadonnées - fichier potentiellement corrompu ou artificiel',
        confidence: 0.6,
        weight: 0.4
      });
    }

    return { metadata, indicators };
  }

  private static analyzeJPEGStructure(dataView: DataView): { metadata: Partial<FileMetadata>; indicators: MetadataIndicator[] } {
    const metadata: Partial<FileMetadata> = {};
    const indicators: MetadataIndicator[] = [];

    // Vérifier la signature JPEG
    if (dataView.getUint16(0) !== 0xFFD8) {
      indicators.push({
        type: 'suspicious',
        description: 'Signature JPEG invalide',
        confidence: 0.9,
        weight: 0.8
      });
      return { metadata, indicators };
    }

    let offset = 2;
    let hasExif = false;
    let hasPhotoshopData = false;
    let hasJFIF = false;
    let compressionQuality = 0;

    while (offset < dataView.byteLength - 4) {
      const marker = dataView.getUint16(offset);
      
      if (marker === 0xFFE0) { // JFIF
        hasJFIF = true;
      } else if (marker === 0xFFE1) { // EXIF
        const segmentLength = dataView.getUint16(offset + 2);
        const exifHeader = dataView.getUint32(offset + 4);
        if (exifHeader === 0x45786966) { // "Exif"
          hasExif = true;
          // Extraire des données EXIF basiques
          try {
            const exifData = this.parseBasicExif(dataView, offset + 8, segmentLength - 4);
            Object.assign(metadata, exifData);
          } catch (e) {
            // EXIF corrompu
          }
        }
      } else if (marker === 0xFFED) { // Photoshop
        hasPhotoshopData = true;
      } else if (marker >= 0xFFC0 && marker <= 0xFFC3) { // SOF
        // Analyser la qualité de compression
        compressionQuality = this.estimateJpegQuality(dataView, offset);
      } else if (marker === 0xFFDA) { // Start of scan
        break;
      }

      const segmentLength = dataView.getUint16(offset + 2);
      offset += 2 + segmentLength;
    }

    // Évaluer les indicateurs
    if (!hasExif && !hasJFIF) {
      indicators.push({
        type: 'artificial',
        description: 'Absence totale de métadonnées - caractéristique des images générées',
        confidence: 0.8,
        weight: 0.7
      });
    }

    if (hasPhotoshopData) {
      indicators.push({
        type: 'normal',
        description: 'Présence de données Photoshop - image probablement éditée par un humain',
        confidence: 0.6,
        weight: 0.5
      });
    }

    if (compressionQuality > 95) {
      indicators.push({
        type: 'suspicious',
        description: `Qualité JPEG très élevée (${compressionQuality}%) - inhabituel pour une photo naturelle`,
        confidence: 0.5,
        weight: 0.3
      });
    } else if (compressionQuality < 50) {
      indicators.push({
        type: 'suspicious',
        description: `Qualité JPEG très basse (${compressionQuality}%) - potentielle compression artificielle`,
        confidence: 0.4,
        weight: 0.3
      });
    }

    metadata.compressionRatio = compressionQuality / 100;
    return { metadata, indicators };
  }

  private static analyzePNGStructure(dataView: DataView): { metadata: Partial<FileMetadata>; indicators: MetadataIndicator[] } {
    const metadata: Partial<FileMetadata> = {};
    const indicators: MetadataIndicator[] = [];

    // Vérifier la signature PNG
    const pngSignature = [0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A];
    for (let i = 0; i < 8; i++) {
      if (dataView.getUint8(i) !== pngSignature[i]) {
        indicators.push({
          type: 'suspicious',
          description: 'Signature PNG invalide',
          confidence: 0.9,
          weight: 0.8
        });
        return { metadata, indicators };
      }
    }

    let offset = 8;
    let hasTextChunks = false;
    let hasTransparency = false;
    let hasGamma = false;
    let chunkCount = 0;

    while (offset < dataView.byteLength - 8) {
      const chunkLength = dataView.getUint32(offset);
      const chunkType = String.fromCharCode(
        dataView.getUint8(offset + 4),
        dataView.getUint8(offset + 5),
        dataView.getUint8(offset + 6),
        dataView.getUint8(offset + 7)
      );

      chunkCount++;

      switch (chunkType) {
        case 'IHDR':
          // Header chunk - analyser les dimensions et le format
          const width = dataView.getUint32(offset + 8);
          const height = dataView.getUint32(offset + 12);
          const bitDepth = dataView.getUint8(offset + 16);
          const colorType = dataView.getUint8(offset + 17);
          
          metadata.bitDepth = bitDepth;
          
          // Vérifier des dimensions suspectes
          if ((width === height) && [256, 512, 768, 1024, 1536, 2048].includes(width)) {
            indicators.push({
              type: 'artificial',
              description: `Dimensions carrées standard (${width}x${height}) - typique des générateurs d'IA`,
              confidence: 0.7,
              weight: 0.6
            });
          }
          break;
          
        case 'tRNS':
          hasTransparency = true;
          metadata.hasTransparency = true;
          break;
          
        case 'gAMA':
          hasGamma = true;
          break;
          
        case 'tEXt':
        case 'iTXt':
        case 'zTXt':
          hasTextChunks = true;
          // Analyser le contenu textuel pour des indices de génération
          try {
            const textData = this.extractPNGTextChunk(dataView, offset + 8, chunkLength);
            if (textData.includes('AI') || textData.includes('generated') || textData.includes('synthetic')) {
              indicators.push({
                type: 'artificial',
                description: 'Métadonnées textuelles indiquant une génération IA',
                confidence: 0.9,
                weight: 0.8
              });
            }
          } catch (e) {
            // Ignore les erreurs de parsing
          }
          break;
          
        case 'IEND':
          // Fin du fichier
          offset = dataView.byteLength;
          break;
      }

      if (chunkType === 'IEND') break;
      offset += 12 + chunkLength; // 4 bytes length + 4 bytes type + data + 4 bytes CRC
    }

    // Évaluer la structure globale
    if (chunkCount < 3) {
      indicators.push({
        type: 'suspicious',
        description: 'Structure PNG très simple - peu de chunks métadonnées',
        confidence: 0.5,
        weight: 0.4
      });
    }

    if (!hasTextChunks && !hasGamma) {
      indicators.push({
        type: 'suspicious',
        description: 'Absence de métadonnées étendues - image potentiellement artificielle',
        confidence: 0.6,
        weight: 0.5
      });
    }

    return { metadata, indicators };
  }

  private static parseBasicExif(dataView: DataView, offset: number, length: number): Partial<FileMetadata> {
    const metadata: Partial<FileMetadata> = {};
    
    try {
      // Vérifier l'endianness
      const byteOrder = dataView.getUint16(offset);
      const littleEndian = byteOrder === 0x4949;
      
      // Lire le magic number TIFF
      const tiffMagic = littleEndian ? dataView.getUint16(offset + 2, true) : dataView.getUint16(offset + 2, false);
      if (tiffMagic !== 42) return metadata;
      
      // Lire l'offset vers le premier IFD
      const ifdOffset = littleEndian ? dataView.getUint32(offset + 4, true) : dataView.getUint32(offset + 4, false);
      
      // Analyser le premier IFD
      const ifdStart = offset + ifdOffset;
      if (ifdStart + 2 > dataView.byteLength) return metadata;
      
      const numEntries = littleEndian ? dataView.getUint16(ifdStart, true) : dataView.getUint16(ifdStart, false);
      
      for (let i = 0; i < Math.min(numEntries, 50); i++) { // Limiter pour éviter les boucles infinies
        const entryOffset = ifdStart + 2 + (i * 12);
        if (entryOffset + 12 > dataView.byteLength) break;
        
        const tag = littleEndian ? dataView.getUint16(entryOffset, true) : dataView.getUint16(entryOffset, false);
        
        switch (tag) {
          case 0x010F: // Make
            metadata.camera = 'Detected';
            break;
          case 0x0110: // Model
            metadata.camera = metadata.camera ? metadata.camera + ' Model' : 'Model';
            break;
          case 0x0131: // Software
            metadata.software = 'Detected';
            break;
          case 0x8769: // EXIF SubIFD
            metadata.exifVersion = 'Present';
            break;
        }
      }
    } catch (e) {
      // Ignore les erreurs de parsing EXIF
    }
    
    return metadata;
  }

  private static estimateJpegQuality(dataView: DataView, sofOffset: number): number {
    // Estimation très basique de la qualité JPEG
    // Dans un vrai système, on analyserait les tables de quantification
    try {
      const frameLength = dataView.getUint16(sofOffset + 2);
      const precision = dataView.getUint8(sofOffset + 4);
      
      // Estimation basée sur la précision et d'autres facteurs
      if (precision === 8) {
        return Math.random() * 20 + 70; // Simulation - dans la vraie vie, analyser les tables Q
      }
      return Math.random() * 30 + 60;
    } catch (e) {
      return 75; // Valeur par défaut
    }
  }

  private static extractPNGTextChunk(dataView: DataView, offset: number, length: number): string {
    const bytes = [];
    for (let i = 0; i < Math.min(length, 100); i++) { // Limiter la lecture
      const byte = dataView.getUint8(offset + i);
      if (byte === 0) break; // Null terminator
      if (byte >= 32 && byte <= 126) { // Caractères imprimables
        bytes.push(String.fromCharCode(byte));
      }
    }
    return bytes.join('');
  }

  private static performGeneralMetadataAnalysis(file: File, metadata: FileMetadata): MetadataIndicator[] {
    const indicators: MetadataIndicator[] = [];
    
    // Analyser la taille du fichier par rapport aux dimensions estimées
    const estimatedPixels = 1000000; // Estimation - dans la vraie vie, extraire des métadonnées
    const expectedSize = estimatedPixels * 3; // 3 bytes par pixel RGB
    const actualSize = file.size;
    
    const sizeRatio = actualSize / expectedSize;
    
    if (sizeRatio < 0.1) {
      indicators.push({
        type: 'suspicious',
        description: 'Taille de fichier anormalement petite - compression excessive ou dimensions incorrectes',
        confidence: 0.6,
        weight: 0.4
      });
    } else if (sizeRatio > 5) {
      indicators.push({
        type: 'suspicious',
        description: 'Taille de fichier anormalement grande - données cachées ou qualité excessive',
        confidence: 0.5,
        weight: 0.3
      });
    }

    // Analyser le nom du fichier
    if (file.name.match(/^(img|image|photo)_?\d+\.(jpg|png)$/i)) {
      indicators.push({
        type: 'suspicious',
        description: 'Nom de fichier générique - pattern typique des images générées automatiquement',
        confidence: 0.4,
        weight: 0.2
      });
    }

    return indicators;
  }

  static calculateMetadataConfidence(indicators: MetadataIndicator[]): number {
    if (indicators.length === 0) return 0;

    const weightedSum = indicators.reduce((sum, indicator) => {
      const score = indicator.type === 'artificial' ? indicator.confidence : 
                   indicator.type === 'suspicious' ? indicator.confidence * 0.7 : 
                   -indicator.confidence * 0.3; // Les indicateurs normaux réduisent le score
      return sum + (score * indicator.weight);
    }, 0);

    const totalWeight = indicators.reduce((sum, indicator) => sum + indicator.weight, 0);
    
    const baseScore = totalWeight > 0 ? weightedSum / totalWeight : 0;
    return Math.max(0, Math.min(1, baseScore));
  }
}
