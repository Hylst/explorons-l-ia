
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calculator } from 'lucide-react';

interface VectorVisualizationProps {
  vectorA: number[];
  vectorB: number[];
  operation: 'addition' | 'scalar';
  scalar?: number;
}

const VectorVisualization: React.FC<VectorVisualizationProps> = ({ 
  vectorA, 
  vectorB, 
  operation, 
  scalar = 2 
}) => {
  const result = operation === 'addition' 
    ? [vectorA[0] + vectorB[0], vectorA[1] + vectorB[1]]
    : [vectorA[0] * scalar, vectorA[1] * scalar];

  return (
    <Card className="bg-card/50 dark:bg-card/50 border-primary/20">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Calculator className="h-5 w-5 text-primary" />
          Visualisation Interactive
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <h5 className="font-semibold">Opération :</h5>
            {operation === 'addition' ? (
              <div className="flex items-center gap-2 text-sm">
                <Badge variant="outline">[{vectorA.join(', ')}]</Badge>
                <span>+</span>
                <Badge variant="outline">[{vectorB.join(', ')}]</Badge>
                <ArrowRight className="h-4 w-4" />
                <Badge variant="default">[{result.join(', ')}]</Badge>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-sm">
                <Badge variant="outline">{scalar}</Badge>
                <span>×</span>
                <Badge variant="outline">[{vectorA.join(', ')}]</Badge>
                <ArrowRight className="h-4 w-4" />
                <Badge variant="default">[{result.join(', ')}]</Badge>
              </div>
            )}
          </div>
          
          <div className="bg-muted/30 dark:bg-muted/20 p-4 rounded-lg">
            <h5 className="font-semibold mb-2">Interprétation géométrique</h5>
            <p className="text-sm text-muted-foreground">
              {operation === 'addition' 
                ? "L'addition de vecteurs correspond à placer bout à bout les flèches"
                : "La multiplication scalaire étire ou rétrécit le vecteur"
              }
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VectorVisualization;
