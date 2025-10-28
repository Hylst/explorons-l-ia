
import { Node, Edge } from '@xyflow/react';

export const workflowNodes: Node[] = [
  {
    id: '1',
    type: 'input',
    data: { 
      label: 'Déclencheur',
      description: 'Point d\'entrée du workflow'
    },
    position: { x: 100, y: 100 },
    style: {
      background: '#E3F2FD',
      border: '2px solid #2196F3',
      borderRadius: '8px',
      fontSize: '12px'
    }
  },
  {
    id: '2',
    type: 'default',
    data: { 
      label: 'LLM Processing',
      description: 'Traitement par modèle de langage'
    },
    position: { x: 300, y: 100 },
    style: {
      background: '#F3E5F5',
      border: '2px solid #9C27B0',
      borderRadius: '8px',
      fontSize: '12px'
    }
  },
  {
    id: '3',
    type: 'default',
    data: { 
      label: 'Image Generation',
      description: 'Génération d\'image IA'
    },
    position: { x: 500, y: 100 },
    style: {
      background: '#E8F5E8',
      border: '2px solid #4CAF50',
      borderRadius: '8px',
      fontSize: '12px'
    }
  },
  {
    id: '4',
    type: 'output',
    data: { 
      label: 'Sortie',
      description: 'Résultat final du workflow'
    },
    position: { x: 700, y: 100 },
    style: {
      background: '#FFF3E0',
      border: '2px solid #FF9800',
      borderRadius: '8px',
      fontSize: '12px'
    }
  }
];

export const workflowEdges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#2196F3', strokeWidth: 2 }
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#9C27B0', strokeWidth: 2 }
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
    type: 'smoothstep',
    animated: true,
    style: { stroke: '#4CAF50', strokeWidth: 2 }
  }
];
