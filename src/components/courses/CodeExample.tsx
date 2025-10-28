
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code } from 'lucide-react';

interface CodeExampleProps {
  title: string;
  language: string;
  code: string;
  explanation?: string;
}

const CodeExample: React.FC<CodeExampleProps> = ({ 
  title, 
  language, 
  code,
  explanation 
}) => {
  return (
    <div className="my-6">
      <div className="flex items-center gap-2 mb-2">
        <Code className="h-4 w-4 text-primary" />
        <h4 className="font-medium">{title}</h4>
      </div>
      <Card className="overflow-hidden">
        <div className="bg-muted px-4 py-2 border-b text-xs font-mono text-muted-foreground">
          {language}
        </div>
        <CardContent className="p-0">
          <pre className="p-4 text-sm overflow-x-auto">
            <code>{code}</code>
          </pre>
        </CardContent>
      </Card>
      {explanation && (
        <p className="mt-2 text-sm text-muted-foreground">{explanation}</p>
      )}
    </div>
  );
};

export default CodeExample;
