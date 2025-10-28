
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  radius: number;
  category?: string;
}

interface Connection {
  source: string;
  target: string;
  strength: number;
}

interface AINodeGraphProps {
  onNodeSelect: (nodeId: string) => void;
}

const AINodeGraph: React.FC<AINodeGraphProps> = ({ onNodeSelect }) => {
  const [selectedNode, setSelectedNode] = useState<string | null>('LLM');
  const [nodes, setNodes] = useState<Node[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  
  // Initialize graph nodes and connections
  useEffect(() => {
    // Define nodes with optimized positioning for better visualization
    const graphNodes: Node[] = [
      { id: 'LLM', label: 'LLM', x: 30, y: 45, radius: 28, category: 'language' },
      { id: 'CNN', label: 'CNN', x: 60, y: 25, radius: 28, category: 'vision' },
      { id: 'RL', label: 'RL', x: 75, y: 65, radius: 28, category: 'decision' },
      { id: 'XAI', label: 'XAI', x: 20, y: 70, radius: 28, category: 'explainability' },
      { id: 'AGI', label: 'AGI', x: 50, y: 50, radius: 32, category: 'general' },
      { id: 'NLP', label: 'NLP', x: 15, y: 30, radius: 25, category: 'language' },
      { id: 'RAG', label: 'RAG', x: 40, y: 20, radius: 25, category: 'hybrid' },
      { id: 'GAN', label: 'GAN', x: 80, y: 40, radius: 25, category: 'generative' },
      { id: 'DRL', label: 'DRL', x: 68, y: 82, radius: 24, category: 'decision' },
      { id: 'BERT', label: 'BERT', x: 12, y: 15, radius: 22, category: 'language' },
      { id: 'RNN', label: 'RNN', x: 32, y: 80, radius: 24, category: 'sequential' },
      { id: 'SVM', label: 'SVM', x: 86, y: 15, radius: 22, category: 'classical' }
    ];
    
    // Define connections with more relationships
    const graphConnections: Connection[] = [
      { source: 'LLM', target: 'CNN', strength: 0.7 },
      { source: 'LLM', target: 'AGI', strength: 0.8 },
      { source: 'LLM', target: 'NLP', strength: 0.9 },
      { source: 'LLM', target: 'RAG', strength: 0.9 },
      { source: 'BERT', target: 'LLM', strength: 0.8 },
      { source: 'BERT', target: 'NLP', strength: 0.9 },
      { source: 'CNN', target: 'RL', strength: 0.6 },
      { source: 'CNN', target: 'GAN', strength: 0.8 },
      { source: 'CNN', target: 'SVM', strength: 0.5 },
      { source: 'RL', target: 'AGI', strength: 0.9 },
      { source: 'RL', target: 'DRL', strength: 0.9 },
      { source: 'DRL', target: 'AGI', strength: 0.7 },
      { source: 'XAI', target: 'LLM', strength: 0.5 },
      { source: 'XAI', target: 'AGI', strength: 0.7 },
      { source: 'XAI', target: 'CNN', strength: 0.6 },
      { source: 'XAI', target: 'SVM', strength: 0.5 },
      { source: 'CNN', target: 'AGI', strength: 0.8 },
      { source: 'NLP', target: 'LLM', strength: 0.9 },
      { source: 'RAG', target: 'LLM', strength: 0.8 },
      { source: 'RAG', target: 'NLP', strength: 0.7 },
      { source: 'GAN', target: 'CNN', strength: 0.8 },
      { source: 'GAN', target: 'AGI', strength: 0.6 },
      { source: 'RNN', target: 'NLP', strength: 0.7 },
      { source: 'RNN', target: 'LLM', strength: 0.6 },
      { source: 'RNN', target: 'DRL', strength: 0.5 },
      { source: 'SVM', target: 'XAI', strength: 0.6 },
    ];
    
    setNodes(graphNodes);
    setConnections(graphConnections);
  }, []);
  
  const handleNodeClick = (nodeId: string) => {
    setSelectedNode(nodeId);
    onNodeSelect(nodeId);
  };

  const handleNodeHover = (nodeId: string | null) => {
    setHoveredNode(nodeId);
  };
  
  // Calculate positions for SVG viewport
  const viewBox = "0 0 100 100";

  // Get category color
  const getCategoryColor = (category?: string) => {
    const colors: Record<string, string> = {
      'language': 'rgb(var(--primary))',
      'vision': '#0ea5e9',
      'decision': '#f97316',
      'explainability': '#10b981',
      'general': '#ef4444',
      'hybrid': '#8b5cf6',
      'generative': '#ec4899',
      'sequential': '#a855f7',
      'classical': '#6366f1'
    };
    return category ? colors[category] || 'rgb(var(--primary))' : 'rgb(var(--primary))';
  };
  
  return (
    <div className="w-full h-full">
      <svg viewBox={viewBox} className="w-full h-full">
        {/* Moved legend to the top right corner with better positioning */}
        <g transform="translate(70, 5)" className="text-xs">
          <rect x="0" y="0" width="28" height="40" rx="2" fill="rgba(0,0,0,0.1)" />
          <text x="14" y="6" textAnchor="middle" fill="currentColor" fontSize="3.5">Catégories</text>
          
          <g transform="translate(2, 10)">
            <circle r="1.2" fill={getCategoryColor('language')} />
            <text x="3" y="0.5" fontSize="2.2" fill="currentColor">language</text>
          </g>
          <g transform="translate(2, 14)">
            <circle r="1.2" fill={getCategoryColor('vision')} />
            <text x="3" y="0.5" fontSize="2.2" fill="currentColor">vision</text>
          </g>
          <g transform="translate(2, 18)">
            <circle r="1.2" fill={getCategoryColor('decision')} />
            <text x="3" y="0.5" fontSize="2.2" fill="currentColor">decision</text>
          </g>
          <g transform="translate(2, 22)">
            <circle r="1.2" fill={getCategoryColor('explainability')} />
            <text x="3" y="0.5" fontSize="2.2" fill="currentColor">explainability</text>
          </g>
          <g transform="translate(2, 26)">
            <circle r="1.2" fill={getCategoryColor('general')} />
            <text x="3" y="0.5" fontSize="2.2" fill="currentColor">general</text>
          </g>
          <g transform="translate(2, 30)">
            <circle r="1.2" fill={getCategoryColor('hybrid')} />
            <text x="3" y="0.5" fontSize="2.2" fill="currentColor">hybrid</text>
          </g>
          <g transform="translate(2, 34)">
            <circle r="1.2" fill={getCategoryColor('generative')} />
            <text x="3" y="0.5" fontSize="2.2" fill="currentColor">generative</text>
          </g>
        </g>

        {/* Render connections */}
        {connections.map((connection) => {
          const source = nodes.find(node => node.id === connection.source);
          const target = nodes.find(node => node.id === connection.target);
          
          if (!source || !target) return null;
          
          const isHighlighted = 
            selectedNode === source.id || 
            selectedNode === target.id ||
            hoveredNode === source.id ||
            hoveredNode === target.id;
          
          return (
            <motion.line
              key={`${source.id}-${target.id}`}
              x1={source.x}
              y1={source.y}
              x2={target.x}
              y2={target.y}
              stroke={isHighlighted ? getCategoryColor(source.category) : "#9ca3af"}
              strokeWidth={isHighlighted ? 1.5 : 1}
              strokeOpacity={isHighlighted ? 0.8 : 0.3}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          );
        })}
        
        {/* Render nodes */}
        {nodes.map((node) => {
          const isSelected = selectedNode === node.id;
          const isHovered = hoveredNode === node.id;
          const isHighlighted = isSelected || isHovered;
          const categoryColor = getCategoryColor(node.category);

          return (
            <g 
              key={node.id}
              onClick={() => handleNodeClick(node.id)}
              onMouseEnter={() => handleNodeHover(node.id)}
              onMouseLeave={() => handleNodeHover(null)}
              className="cursor-pointer"
              transform={`translate(${node.x}, ${node.y})`}
            >
              <motion.circle
                r={node.radius * (isHighlighted ? 1.2 : 1) / 10}
                fill={isHighlighted ? categoryColor : "rgb(var(--primary-foreground))"}
                stroke={isHighlighted ? categoryColor : "rgb(var(--primary))"}
                strokeWidth={isHighlighted ? 2 : 1}
                fillOpacity={isHighlighted ? 0.2 : 0.1}
                whileHover={{ 
                  scale: 1.1,
                  fillOpacity: 0.3,
                  transition: { duration: 0.2 }
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: "backOut", delay: 0.2 }}
              />
              {/* Pulse animation for selected node */}
              {isSelected && (
                <motion.circle
                  r={node.radius * 1.3 / 10}
                  fill="transparent"
                  stroke={categoryColor}
                  strokeWidth={1}
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 0, 0.7],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                />
              )}
              <text
                textAnchor="middle"
                dy="0.3em"
                fontSize="4"
                fontWeight={isHighlighted ? "bold" : "normal"}
                fill={isHighlighted ? categoryColor : "currentColor"}
              >
                {node.label}
              </text>
              
              {/* Show tooltip with description on hover */}
              {isHovered && (
                <g>
                  <rect
                    x="-20"
                    y="5"
                    width="40"
                    height="6"
                    fill="rgba(0,0,0,0.8)"
                    rx="1"
                  />
                  <text
                    textAnchor="middle"
                    fill="white"
                    fontSize="2.5"
                    x="0"
                    y="9"
                  >
                    {node.category}
                  </text>
                </g>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default AINodeGraph;
