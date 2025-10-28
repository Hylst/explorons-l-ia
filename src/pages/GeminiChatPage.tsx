
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import GeminiChat from '@/components/chat/GeminiChat';

/**
 * Page dédiée au chat avec l'assistant IA Gemini
 * @returns {JSX.Element} Le composant de la page de chat avec Gemini
 */
const GeminiChatPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Assistant IA</h1>
      <p className="text-lg mb-6">
        Posez vos questions sur l'intelligence artificielle à notre assistant IA spécialisé.
      </p>
      
      <Card className="w-full max-w-4xl mx-auto h-[600px] shadow-lg">
        <CardContent className="p-0 h-full">
          <GeminiChat />
        </CardContent>
      </Card>
      
      <div className="mt-8 max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Conseils pour interagir avec l'IA</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Posez des questions claires et spécifiques pour obtenir de meilleures réponses</li>
          <li>N'hésitez pas à demander des explications supplémentaires si nécessaire</li>
          <li>L'assistant peut expliquer des concepts d'IA, aider à résoudre des problèmes techniques, ou suggérer des ressources</li>
          <li>Les réponses sont générées automatiquement et peuvent parfois contenir des erreurs</li>
        </ul>
      </div>
    </div>
  );
};

export default GeminiChatPage;
