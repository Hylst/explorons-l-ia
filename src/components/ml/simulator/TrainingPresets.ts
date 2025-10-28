
export interface TrainingPreset {
  id: string;
  name: string;
  description: string;
  algorithm: 'neural_network' | 'svm' | 'random_forest' | 'knn';
  hyperparameters: {
    maxEpochs: number;
    learningRate: number;
    batchSize: number;
    regularization?: number;
    momentum?: number;
    dropout?: number;
  };
  dataset: {
    type: 'classification' | 'regression' | 'clustering';
    size: number;
    noiseLevel: number;
    numFeatures?: number;
    numClasses?: number;
  };
  expectedPerformance: {
    accuracy: number;
    convergenceEpoch: number;
    trainingTime: number;
  };
}

export const TRAINING_PRESETS: TrainingPreset[] = [
  {
    id: 'beginner_classification',
    name: 'Classification Simple',
    description: 'Dataset simple avec 2 classes bien séparées - Idéal pour débuter',
    algorithm: 'neural_network',
    hyperparameters: {
      maxEpochs: 100,
      learningRate: 1,
      batchSize: 32,
      dropout: 0.2
    },
    dataset: {
      type: 'classification',
      size: 200,
      noiseLevel: 5,
      numClasses: 2
    },
    expectedPerformance: {
      accuracy: 95,
      convergenceEpoch: 60,
      trainingTime: 3000
    }
  },
  {
    id: 'complex_multiclass',
    name: 'Multi-Classes Complexe',
    description: 'Dataset avec 5 classes et du bruit - Pour utilisateurs avancés',
    algorithm: 'random_forest',
    hyperparameters: {
      maxEpochs: 200,
      learningRate: 0.5,
      batchSize: 64,
      regularization: 0.01
    },
    dataset: {
      type: 'classification',
      size: 1000,
      noiseLevel: 25,
      numClasses: 5
    },
    expectedPerformance: {
      accuracy: 82,
      convergenceEpoch: 150,
      trainingTime: 8000
    }
  },
  {
    id: 'regression_smooth',
    name: 'Régression Polynomiale',
    description: 'Régression sur fonction quadratique avec peu de bruit',
    algorithm: 'neural_network',
    hyperparameters: {
      maxEpochs: 150,
      learningRate: 2,
      batchSize: 32,
      momentum: 0.9
    },
    dataset: {
      type: 'regression',
      size: 300,
      noiseLevel: 10
    },
    expectedPerformance: {
      accuracy: 88,
      convergenceEpoch: 100,
      trainingTime: 4500
    }
  },
  {
    id: 'overfitting_demo',
    name: 'Démonstration Surapprentissage',
    description: 'Configuration pour observer le phénomène de surapprentissage',
    algorithm: 'neural_network',
    hyperparameters: {
      maxEpochs: 300,
      learningRate: 5,
      batchSize: 16,
      dropout: 0
    },
    dataset: {
      type: 'classification',
      size: 100,
      noiseLevel: 30,
      numClasses: 3
    },
    expectedPerformance: {
      accuracy: 75,
      convergenceEpoch: 80,
      trainingTime: 10000
    }
  },
  {
    id: 'fast_convergence',
    name: 'Convergence Rapide',
    description: 'Paramètres optimisés pour une convergence très rapide',
    algorithm: 'knn',
    hyperparameters: {
      maxEpochs: 50,
      learningRate: 3,
      batchSize: 64
    },
    dataset: {
      type: 'classification',
      size: 150,
      noiseLevel: 5,
      numClasses: 2
    },
    expectedPerformance: {
      accuracy: 92,
      convergenceEpoch: 30,
      trainingTime: 1500
    }
  }
];
