
import React from 'react';
import { AppExample } from './ApplicationsData';

interface ExamplePromptsProps {
  selectedExample: string | null;
  applications: AppExample[];
}

const ExamplePrompts: React.FC<ExamplePromptsProps> = ({ selectedExample, applications }) => {
  if (!selectedExample) return null;
  
  const selectedApp = applications.find(e => e.id === selectedExample);
  if (!selectedApp) return null;
  
  return (
    <div className="mt-10 p-6 border border-primary/10 rounded-xl bg-secondary/5">
      <h3 className="heading-sm mb-4">Exemples de prompts pour {selectedApp.title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {selectedApp.examples.map((example, i) => (
          <div key={i} className="bg-secondary/20 p-4 rounded-lg border border-primary/5">
            <p className="text-sm font-mono">{example}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamplePrompts;
