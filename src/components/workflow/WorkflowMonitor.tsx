import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  CheckCircle, 
  Clock, 
  AlertCircle, 
  XCircle,
  Activity,
  DollarSign,
  Timer
} from 'lucide-react';
import { Node, Edge } from '@xyflow/react';

interface WorkflowMonitorProps {
  isExecuting: boolean;
  nodes: Node[];
  edges: Edge[];
}

interface ExecutionLog {
  id: string;
  timestamp: string;
  nodeId: string;
  nodeName: string;
  status: 'pending' | 'running' | 'completed' | 'error';
  message: string;
  duration?: number;
  cost?: number;
}

interface WorkflowMetrics {
  totalNodes: number;
  completedNodes: number;
  failedNodes: number;
  totalCost: number;
  totalDuration: number;
  currentStep: string;
}

const WorkflowMonitor: React.FC<WorkflowMonitorProps> = ({ 
  isExecuting, 
  nodes, 
  edges 
}) => {
  const [logs, setLogs] = useState<ExecutionLog[]>([]);
  const [metrics, setMetrics] = useState<WorkflowMetrics>({
    totalNodes: nodes.length,
    completedNodes: 0,
    failedNodes: 0,
    totalCost: 0,
    totalDuration: 0,
    currentStep: 'En attente'
  });

  useEffect(() => {
    if (isExecuting) {
      simulateExecution();
    }
  }, [isExecuting, nodes]);

  const simulateExecution = async () => {
    setLogs([]);
    setMetrics(prev => ({ ...prev, completedNodes: 0, failedNodes: 0, totalCost: 0 }));

    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      const startTime = Date.now();
      
      // Fix the type issue by ensuring nodeName is always a string
      const nodeName = typeof node.data?.label === 'string' ? node.data.label : `Node ${i + 1}`;
      
      // Log de début
      const startLog: ExecutionLog = {
        id: `${node.id}-start`,
        timestamp: new Date().toLocaleTimeString(),
        nodeId: node.id,
        nodeName,
        status: 'running',
        message: 'Exécution en cours...'
      };
      
      setLogs(prev => [...prev, startLog]);
      setMetrics(prev => ({ ...prev, currentStep: startLog.nodeName }));

      // Simulation de traitement
      await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));
      
      const duration = Date.now() - startTime;
      const cost = Math.random() * 0.05; // Coût simulé
      const isSuccess = Math.random() > 0.1; // 90% de succès

      // Log de fin
      const endLog: ExecutionLog = {
        id: `${node.id}-end`,
        timestamp: new Date().toLocaleTimeString(),
        nodeId: node.id,
        nodeName: startLog.nodeName,
        status: isSuccess ? 'completed' : 'error',
        message: isSuccess ? 'Terminé avec succès' : 'Erreur lors de l\'exécution',
        duration,
        cost: isSuccess ? cost : 0
      };

      setLogs(prev => [...prev, endLog]);
      setMetrics(prev => ({
        ...prev,
        completedNodes: isSuccess ? prev.completedNodes + 1 : prev.completedNodes,
        failedNodes: isSuccess ? prev.failedNodes : prev.failedNodes + 1,
        totalCost: prev.totalCost + (isSuccess ? cost : 0),
        totalDuration: prev.totalDuration + duration
      }));

      if (!isSuccess) {
        break; // Arrêt en cas d'erreur
      }
    }

    setMetrics(prev => ({ ...prev, currentStep: 'Terminé' }));
  };

  const getStatusIcon = (status: ExecutionLog['status']) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-4 w-4 text-muted-foreground" />;
      case 'running':
        return <Activity className="h-4 w-4 text-blue-500 animate-pulse" />;
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'error':
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
    }
  };

  const progress = (metrics.completedNodes / metrics.totalNodes) * 100;

  return (
    <div className="p-4 space-y-4">
      {/* Métriques générales */}
      <div className="grid grid-cols-2 gap-2">
        <Card>
          <CardContent className="p-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <div>
                <p className="text-xs text-muted-foreground">Complétés</p>
                <p className="text-sm font-semibold">{metrics.completedNodes}/{metrics.totalNodes}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-3">
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-blue-500" />
              <div>
                <p className="text-xs text-muted-foreground">Coût</p>
                <p className="text-sm font-semibold">${metrics.totalCost.toFixed(3)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Progression */}
      <Card>
        <CardContent className="p-3">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progression</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
            <p className="text-xs text-muted-foreground">
              Étape actuelle: {metrics.currentStep}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Logs d'exécution */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm">Logs d'exécution</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-64">
            <div className="p-3 space-y-2">
              {logs.length === 0 ? (
                <p className="text-xs text-muted-foreground text-center py-4">
                  Aucun log disponible
                </p>
              ) : (
                logs.map(log => (
                  <div key={log.id} className="flex items-start gap-2 text-xs">
                    {getStatusIcon(log.status)}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium truncate">{log.nodeName}</span>
                        <Badge 
                          variant={log.status === 'completed' ? 'default' : 
                                  log.status === 'error' ? 'destructive' : 'secondary'}
                          className="text-xs"
                        >
                          {log.status}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground">{log.message}</p>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <span>{log.timestamp}</span>
                        {log.duration && (
                          <span className="flex items-center gap-1">
                            <Timer className="h-3 w-3" />
                            {log.duration}ms
                          </span>
                        )}
                        {log.cost && (
                          <span className="flex items-center gap-1">
                            <DollarSign className="h-3 w-3" />
                            ${log.cost.toFixed(3)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkflowMonitor;
