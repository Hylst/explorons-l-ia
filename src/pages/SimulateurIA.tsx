
import React from 'react';
import SimulatorHeader from '@/components/ml/simulator/SimulatorHeader';
import TrainingSimulator from '@/components/ml/TrainingSimulator';
import { DataPoint } from '@/components/ml/DatasetGenerator';

const SimulateurIA: React.FC = () => {
  // Default dataset for demonstration
  const defaultDataset: DataPoint[] = Array.from({ length: 200 }, (_, i) => ({
    x: Math.random() * 10,
    y: Math.random() * 10,
    label: Math.random() > 0.5 ? 1 : 0, // Use numeric labels (0 or 1)
  }));

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <SimulatorHeader />
        <TrainingSimulator 
          dataset={defaultDataset}
          algorithm="neural_network"
        />
      </div>
    </div>
  );
};

export default SimulateurIA;
