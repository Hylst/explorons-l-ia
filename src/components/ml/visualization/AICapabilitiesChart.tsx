
import React, { useState } from 'react';
import { 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  RadarChart, 
  ResponsiveContainer, 
  Tooltip,
  Legend
} from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Types d'IA et leurs capacités
const aiCapabilitiesData = [
  {
    capability: 'Traitement du langage',
    LLM: 95,
    NLP: 90,
    CNN: 20,
    RL: 30,
    XAI: 50,
    AGI: 80,
  },
  {
    capability: 'Vision par ordinateur',
    LLM: 40,
    NLP: 20,
    CNN: 95,
    RL: 40,
    XAI: 60,
    AGI: 80,
  },
  {
    capability: 'Raisonnement',
    LLM: 75,
    NLP: 60,
    CNN: 30,
    RL: 70,
    XAI: 65,
    AGI: 90,
  },
  {
    capability: 'Apprentissage continu',
    LLM: 30,
    NLP: 40,
    CNN: 30,
    RL: 90,
    XAI: 40,
    AGI: 85,
  },
  {
    capability: 'Transparence',
    LLM: 30,
    NLP: 40,
    CNN: 20,
    RL: 50,
    XAI: 95,
    AGI: 70,
  },
  {
    capability: 'Adaptabilité',
    LLM: 65,
    NLP: 60,
    CNN: 40,
    RL: 85,
    XAI: 55,
    AGI: 90,
  },
];

// Caractéristiques techniques
const technicalCharacteristicsData = [
  {
    capability: 'Besoin de données',
    LLM: 90,
    NLP: 75,
    CNN: 85,
    RL: 40,
    XAI: 60,
    AGI: 70,
  },
  {
    capability: 'Coût computationnel',
    LLM: 95,
    NLP: 70,
    CNN: 80,
    RL: 75,
    XAI: 60,
    AGI: 90,
  },
  {
    capability: 'Parallélisation',
    LLM: 80,
    NLP: 70,
    CNN: 90,
    RL: 50,
    XAI: 60,
    AGI: 85,
  },
  {
    capability: 'Facilité d\'implémentation',
    LLM: 50,
    NLP: 60,
    CNN: 40,
    RL: 30,
    XAI: 70,
    AGI: 20,
  },
  {
    capability: 'Interprétabilité',
    LLM: 30,
    NLP: 50,
    CNN: 20,
    RL: 40,
    XAI: 95,
    AGI: 60,
  },
];

// Applications pratiques
const practicalApplicationsData = [
  {
    capability: 'Santé',
    LLM: 80,
    NLP: 70,
    CNN: 90,
    RL: 50,
    XAI: 85,
    AGI: 75,
  },
  {
    capability: 'Finance',
    LLM: 85,
    NLP: 75,
    CNN: 60,
    RL: 90,
    XAI: 80,
    AGI: 70,
  },
  {
    capability: 'Transport',
    LLM: 50,
    NLP: 40,
    CNN: 85,
    RL: 95,
    XAI: 75,
    AGI: 65,
  },
  {
    capability: 'Éducation',
    LLM: 95,
    NLP: 85,
    CNN: 40,
    RL: 30,
    XAI: 70,
    AGI: 80,
  },
  {
    capability: 'Création de contenu',
    LLM: 90,
    NLP: 75,
    CNN: 80,
    RL: 40,
    XAI: 50,
    AGI: 85,
  },
];

const AICapabilitiesChart: React.FC = () => {
  const [selectedAITypes, setSelectedAITypes] = useState<string[]>(['LLM', 'CNN', 'RL', 'XAI']);
  
  const colorMap: Record<string, string> = {
    LLM: '#8b5cf6',
    NLP: '#6366f1',
    CNN: '#0ea5e9',
    RL: '#f97316',
    XAI: '#10b981',
    AGI: '#ef4444',
  };
  
  const toggleAIType = (aiType: string) => {
    if (selectedAITypes.includes(aiType)) {
      setSelectedAITypes(selectedAITypes.filter(type => type !== aiType));
    } else {
      setSelectedAITypes([...selectedAITypes, aiType]);
    }
  };
  
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border rounded p-2 shadow-md">
          <p className="font-medium">{payload[0].payload.capability}</p>
          {payload.map((entry: any) => (
            <p key={entry.name} style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    
    return null;
  };
  
  const RenderChart = ({ data }: { data: any[] }) => (
    <div className="w-full h-[500px]">
      <div className="flex flex-wrap gap-2 mb-4 justify-center">
        {Object.keys(colorMap).map((aiType) => (
          <button
            key={aiType}
            onClick={() => toggleAIType(aiType)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              selectedAITypes.includes(aiType)
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground'
            }`}
          >
            {aiType}
          </button>
        ))}
      </div>
      
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius="70%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="capability" tick={{ fill: 'currentColor', fontSize: 12 }} />
          <PolarRadiusAxis angle={90} domain={[0, 100]} />
          
          {selectedAITypes.map((type) => (
            <Radar
              key={type}
              name={type}
              dataKey={type}
              stroke={colorMap[type]}
              fill={colorMap[type]}
              fillOpacity={0.2}
            />
          ))}
          
          <Tooltip content={<CustomTooltip />} />
          <Legend formatter={(value) => <span className="text-sm">{value}</span>} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
  
  return (
    <div className="mt-8 border rounded-lg p-4 animate-fade-in shadow-sm">
      <Tabs defaultValue="capabilities" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="capabilities" className="py-3 whitespace-normal h-auto">Toutes les dimensions</TabsTrigger>
          <TabsTrigger value="technical" className="py-3 whitespace-normal h-auto">Caractéristiques techniques</TabsTrigger>
          <TabsTrigger value="applications" className="py-3 whitespace-normal h-auto">Applications pratiques</TabsTrigger>
        </TabsList>
        
        <TabsContent value="capabilities" className="mt-0">
          <RenderChart data={aiCapabilitiesData} />
        </TabsContent>
        
        <TabsContent value="technical" className="mt-0">
          <RenderChart data={technicalCharacteristicsData} />
        </TabsContent>
        
        <TabsContent value="applications" className="mt-0">
          <RenderChart data={practicalApplicationsData} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AICapabilitiesChart;
