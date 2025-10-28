
import React from 'react';
import { motion } from 'framer-motion';

interface NeuralNetworkNodeProps {
  id: number;
  x: number;
  y: number;
  active: boolean;
}

const NeuralNetworkNode: React.FC<NeuralNetworkNodeProps> = ({ id, x, y, active }) => {
  // Animation variants
  const nodeVariants = {
    active: { scale: 1.2, opacity: 1 },
    inactive: { scale: 1, opacity: 0.5 }
  };

  return (
    <motion.div
      key={id}
      className="absolute rounded-full bg-purple-500"
      style={{ left: x, top: y, marginLeft: -5, marginTop: -5 }}
      initial={{ width: 10, height: 10, opacity: 0.5 }}
      animate={active ? "active" : "inactive"}
      variants={nodeVariants}
      transition={{ duration: 0.3 }}
    />
  );
};

export default NeuralNetworkNode;
