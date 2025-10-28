
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, TrendingUp, Clock } from 'lucide-react';

interface AttentionPointsProps {
  mostExpensiveNode: string;
  bottleneckNode: string;
}

const AttentionPoints: React.FC<AttentionPointsProps> = ({ 
  mostExpensiveNode, 
  bottleneckNode 
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="h-5 w-5 text-amber-500" />
          Points d'attention
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
            <div>
              <p className="font-medium text-sm">Nœud le plus coûteux</p>
              <p className="text-sm text-muted-foreground">{mostExpensiveNode}</p>
            </div>
            <TrendingUp className="h-4 w-4 text-red-500" />
          </div>
          
          <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
            <div>
              <p className="font-medium text-sm">Goulot d'étranglement</p>
              <p className="text-sm text-muted-foreground">{bottleneckNode}</p>
            </div>
            <Clock className="h-4 w-4 text-orange-500" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AttentionPoints;
