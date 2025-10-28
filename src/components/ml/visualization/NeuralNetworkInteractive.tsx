
import React, { useState, useEffect, useRef } from 'react';
import NeuralNetworkNode from './NeuralNetworkNode';
import NeuralNetworkConnection from './NeuralNetworkConnection';

// Types
interface Node {
  id: number;
  x: number;
  y: number;
  layer: number;
  active: boolean;
}

interface Connection {
  id: string;
  from: number;
  to: number;
  active: boolean;
}

const NeuralNetworkInteractive: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isInit, setIsInit] = useState(false);

  // Initialize the neural network
  useEffect(() => {
    if (containerRef.current && !isInit) {
      const rect = containerRef.current.getBoundingClientRect();
      setDimensions({ width: rect.width, height: rect.height });
      
      initializeNetwork(rect.width, rect.height);
      setIsInit(true);
    }
  }, [containerRef, isInit]);

  // Create network nodes and connections
  const initializeNetwork = (width: number, height: number) => {
    // Define network structure
    const layers = 4;
    const nodesPerLayer = [6, 8, 8, 4];
    const newNodes: Node[] = [];
    const newConnections: Connection[] = [];
    
    // Create nodes
    let nodeId = 0;
    for (let l = 0; l < layers; l++) {
      const layerNodes = nodesPerLayer[l];
      const xPos = width * (l + 1) / (layers + 1);
      
      for (let n = 0; n < layerNodes; n++) {
        const yPos = height * (n + 1) / (layerNodes + 1);
        newNodes.push({
          id: nodeId,
          x: xPos,
          y: yPos,
          layer: l,
          active: false
        });
        
        // Connect to previous layer
        if (l > 0) {
          const prevLayerStart = newNodes.findIndex(node => node.layer === l - 1);
          const prevLayerCount = nodesPerLayer[l - 1];
          
          for (let prev = prevLayerStart; prev < prevLayerStart + prevLayerCount; prev++) {
            newConnections.push({
              id: `${newNodes[prev].id}-${nodeId}`,
              from: newNodes[prev].id,
              to: nodeId,
              active: false
            });
          }
        }
        
        nodeId++;
      }
    }
    
    setNodes(newNodes);
    setConnections(newConnections);
  };

  // Update active nodes based on mouse position
  useEffect(() => {
    if (!isInit || nodes.length === 0) return;
    
    // Find distances to mouse
    const activeNodes = nodes.map(node => {
      const dx = node.x - mousePos.x;
      const dy = node.y - mousePos.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      return {
        ...node,
        active: distance < 100 // Activate nodes within 100px of mouse
      };
    });

    // Update connections based on active nodes
    const activeConnections = connections.map(conn => {
      const fromNode = activeNodes.find(n => n.id === conn.from);
      const toNode = activeNodes.find(n => n.id === conn.to);
      return {
        ...conn,
        active: (fromNode?.active || toNode?.active)
      };
    });
    
    setNodes(activeNodes);
    setConnections(activeConnections);
  }, [mousePos, isInit, nodes, connections]);

  // Handle mouse movement
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  // Handle touch movement for mobile
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    setMousePos({
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top
    });
  };

  // Render connections
  const renderConnections = () => {
    return connections.map(conn => {
      const fromNode = nodes.find(n => n.id === conn.from);
      const toNode = nodes.find(n => n.id === conn.to);
      if (!fromNode || !toNode) return null;
      
      return (
        <NeuralNetworkConnection
          key={conn.id}
          id={conn.id}
          x1={fromNode.x}
          y1={fromNode.y}
          x2={toNode.x}
          y2={toNode.y}
          active={conn.active}
        />
      );
    });
  };

  // Render nodes
  const renderNodes = () => {
    return nodes.map(node => (
      <NeuralNetworkNode
        key={node.id}
        id={node.id}
        x={node.x}
        y={node.y}
        active={node.active}
      />
    ));
  };

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full bg-gradient-to-br from-black/90 to-purple-950/50 relative overflow-hidden rounded-xl border border-purple-700/30"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/20" />
      
      {/* Title overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h2 className="text-white text-xl md:text-3xl font-bold text-center px-6 py-3 bg-black/50 backdrop-blur-sm rounded-lg">
          Explorez le Réseau Neural
        </h2>
      </div>
      
      {/* Render connections */}
      <svg className="absolute inset-0 w-full h-full">
        {renderConnections()}
      </svg>
      
      {/* Render nodes */}
      <div className="absolute inset-0">
        {renderNodes()}
      </div>
      
      {/* Instructions */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-white/70 text-sm backdrop-blur-sm py-2">
        Déplacez votre souris ou votre doigt pour activer les neurones
      </div>
    </div>
  );
};

export default NeuralNetworkInteractive;
