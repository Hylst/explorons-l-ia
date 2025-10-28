
import React from 'react';
import { motion } from 'framer-motion';

interface NeuralNetworkConnectionProps {
  id: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  active: boolean;
}

const NeuralNetworkConnection: React.FC<NeuralNetworkConnectionProps> = ({ id, x1, y1, x2, y2, active }) => {
  return (
    <motion.line
      key={id}
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={active ? "#9b87f5" : "#333"}
      strokeWidth={active ? 1.5 : 0.5}
      initial={{ opacity: 0.3 }}
      animate={{ 
        opacity: active ? 0.8 : 0.3,
        strokeWidth: active ? 1.5 : 0.5
      }}
      transition={{ duration: 0.3 }}
    />
  );
};

export default NeuralNetworkConnection;
