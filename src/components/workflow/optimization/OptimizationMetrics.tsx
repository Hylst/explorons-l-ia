
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  BarChart3, 
  CheckCircle, 
  Clock, 
  DollarSign 
} from 'lucide-react';

interface WorkflowAnalytics {
  totalExecutions: number;
  successRate: number;
  averageDuration: number;
  totalCost: number;
}

interface OptimizationMetricsProps {
  analytics: WorkflowAnalytics;
}

const OptimizationMetrics: React.FC<OptimizationMetricsProps> = ({ analytics }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-blue-500" />
            <div>
              <p className="text-xs text-muted-foreground">Exécutions</p>
              <p className="text-lg font-semibold">{analytics.totalExecutions}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <div>
              <p className="text-xs text-muted-foreground">Taux de succès</p>
              <p className="text-lg font-semibold">{analytics.successRate}%</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-orange-500" />
            <div>
              <p className="text-xs text-muted-foreground">Durée moy.</p>
              <p className="text-lg font-semibold">{(analytics.averageDuration / 1000).toFixed(1)}s</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-green-500" />
            <div>
              <p className="text-xs text-muted-foreground">Coût total</p>
              <p className="text-lg font-semibold">${analytics.totalCost}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OptimizationMetrics;
