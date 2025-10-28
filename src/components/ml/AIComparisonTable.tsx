
import React, { useState } from 'react';
import { Check, X, HelpCircle, AlertTriangle, BadgeCheck } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AIComparisonItem {
  feature: string;
  llm: {
    value: boolean | string | 'partial';
    notes?: string;
  };
  cnn: {
    value: boolean | string | 'partial';
    notes?: string;
  };
  rl: {
    value: boolean | string | 'partial';
    notes?: string;
  };
  xai: {
    value: boolean | string | 'partial';
    notes?: string;
  };
}

interface ApplicationItem {
  domain: string;
  applications: string[];
  aiTypes: ('LLM' | 'CNN' | 'RL' | 'XAI')[];
  maturity: 'émergent' | 'établi' | 'mature';
}

const AIComparisonTable: React.FC = () => {
  const [view, setView] = useState<'capacités' | 'applications'>('capacités');
  
  const comparisonData: AIComparisonItem[] = [
    {
      feature: "Traitement du langage naturel",
      llm: { value: true, notes: "Capacité fondamentale des LLM" },
      cnn: { value: false, notes: "Pas conçu pour le traitement de texte" },
      rl: { value: 'partial', notes: "Peut être combiné avec des modèles de langage" },
      xai: { value: 'partial', notes: "Peut expliquer les décisions basées sur le texte" }
    },
    {
      feature: "Traitement d'images",
      llm: { value: 'partial', notes: "Possible avec des architectures multimodales" },
      cnn: { value: true, notes: "Spécialité première des CNN" },
      rl: { value: 'partial', notes: "Peut prendre des décisions basées sur des images" },
      xai: { value: true, notes: "Peut expliquer les décisions basées sur des images" }
    },
    {
      feature: "Apprentissage continu",
      llm: { value: false, notes: "Nécessite généralement un réentraînement" },
      cnn: { value: false, notes: "Souffre d'oubli catastrophique" },
      rl: { value: true, notes: "S'améliore continuellement par interaction" },
      xai: { value: 'partial', notes: "Dépend de l'architecture sous-jacente" }
    },
    {
      feature: "Capacité de raisonnement",
      llm: { value: true, notes: "Via les techniques de CoT et de fine-tuning" },
      cnn: { value: false, notes: "Limité aux patterns visuels" },
      rl: { value: true, notes: "Peut développer des stratégies complexes" },
      xai: { value: 'partial', notes: "Se concentre sur l'explication du raisonnement" }
    },
    {
      feature: "Transparence des décisions",
      llm: { value: false, notes: "Boîte noire avec hallucinations possibles" },
      cnn: { value: false, notes: "Difficile d'interpréter les couches profondes" },
      rl: { value: 'partial', notes: "Les politiques peuvent être examinées" },
      xai: { value: true, notes: "Objectif principal de l'XAI" }
    },
    {
      feature: "Besoin de grandes quantités de données",
      llm: { value: true, notes: "Nécessite d'énormes corpus de texte" },
      cnn: { value: true, notes: "Nécessite beaucoup d'images étiquetées" },
      rl: { value: false, notes: "Apprend par interaction plutôt que par données étiquetées" },
      xai: { value: 'partial', notes: "Dépend du modèle sous-jacent" }
    }
  ];
  
  const applicationData: ApplicationItem[] = [
    {
      domain: "Santé",
      applications: ["Diagnostic assisté par IA", "Analyse d'imagerie médicale", "Prévision de l'évolution des patients"],
      aiTypes: ["LLM", "CNN", "XAI"],
      maturity: "établi"
    },
    {
      domain: "Finance",
      applications: ["Détection de fraude", "Trading algorithmique", "Évaluation de risque explicable"],
      aiTypes: ["LLM", "RL", "XAI"],
      maturity: "mature"
    },
    {
      domain: "Transport",
      applications: ["Véhicules autonomes", "Optimisation d'itinéraires", "Analyse de trafic"],
      aiTypes: ["CNN", "RL", "XAI"],
      maturity: "émergent"
    },
    {
      domain: "Industrie",
      applications: ["Maintenance prédictive", "Contrôle qualité visuel", "Optimisation de processus"],
      aiTypes: ["CNN", "RL", "XAI"],
      maturity: "établi"
    },
    {
      domain: "Création de contenu",
      applications: ["Génération de texte", "Création d'images", "Assistants créatifs"],
      aiTypes: ["LLM", "CNN"],
      maturity: "émergent"
    }
  ];
  
  const renderValue = (value: boolean | string | 'partial', notes?: string) => {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex justify-center">
              {value === true ? (
                <Check className="text-green-500" />
              ) : value === false ? (
                <X className="text-red-500" />
              ) : (
                <AlertTriangle className="text-amber-500 h-4 w-4" />
              )}
            </div>
          </TooltipTrigger>
          {notes && (
            <TooltipContent>
              <p className="max-w-[200px] text-xs">{notes}</p>
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
    );
  };
  
  const getMaturityBadge = (maturity: 'émergent' | 'établi' | 'mature') => {
    switch(maturity) {
      case 'émergent':
        return <Badge variant="outline" className="bg-blue-500/10 text-blue-600 border-blue-200">Émergent</Badge>;
      case 'établi':
        return <Badge variant="outline" className="bg-amber-500/10 text-amber-600 border-amber-200">Établi</Badge>;
      case 'mature':
        return <Badge variant="outline" className="bg-green-500/10 text-green-600 border-green-200">Mature</Badge>;
    }
  };
  
  return (
    <div className="w-full mt-12 mb-28 animate-fade-in">
      <Tabs defaultValue="capacités" className="w-full">
        <div className="sticky top-0 bg-background pt-2 pb-4 z-20">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 relative">
            <TabsTrigger value="capacités">Capacités techniques</TabsTrigger>
            <TabsTrigger value="applications">Applications par domaine</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="capacités" className="mt-2">
          <div className="rounded-md border">
            <Table>
              <TableCaption>Comparaison des capacités par type d'IA</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[250px]">Capacité</TableHead>
                  <TableHead className="text-center">LLM</TableHead>
                  <TableHead className="text-center">CNN</TableHead>
                  <TableHead className="text-center">RL</TableHead>
                  <TableHead className="text-center">XAI</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.feature}</TableCell>
                    <TableCell>{renderValue(item.llm.value, item.llm.notes)}</TableCell>
                    <TableCell>{renderValue(item.cnn.value, item.cnn.notes)}</TableCell>
                    <TableCell>{renderValue(item.rl.value, item.rl.notes)}</TableCell>
                    <TableCell>{renderValue(item.xai.value, item.xai.notes)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="mt-3 text-sm text-muted-foreground flex items-center">
            <HelpCircle className="w-4 h-4 mr-2" />
            <span>Survolez les icônes pour voir les détails explicatifs</span>
          </div>
        </TabsContent>
        
        <TabsContent value="applications" className="mt-2">
          <div className="rounded-md border">
            <Table>
              <TableCaption>Applications par domaine et types d'IA utilisés</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Domaine</TableHead>
                  <TableHead>Applications</TableHead>
                  <TableHead className="text-center">Types d'IA</TableHead>
                  <TableHead className="text-center">Maturité</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {applicationData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.domain}</TableCell>
                    <TableCell>
                      <ul className="list-disc ml-5 text-sm space-y-1">
                        {item.applications.map((app, i) => (
                          <li key={i}>{app}</li>
                        ))}
                      </ul>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex flex-wrap gap-1 justify-center">
                        {item.aiTypes.map((type, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {type}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      {getMaturityBadge(item.maturity)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AIComparisonTable;
