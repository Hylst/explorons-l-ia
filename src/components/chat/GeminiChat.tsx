
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Send, Bot, User, Lightbulb, AlertCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import ReactMarkdown from 'react-markdown';
import { useUsageLimit } from "@/hooks/useUsageLimit";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface SuggestionTopicProps {
  title: string;
  onClick: (topic: string) => void;
}

const SuggestionTopic: React.FC<SuggestionTopicProps> = ({ title, onClick }) => (
  <Badge 
    variant="outline" 
    className="px-3 py-1 cursor-pointer hover:bg-primary/10 transition-colors"
    onClick={() => onClick(title)}
  >
    <Lightbulb className="h-3 w-3 mr-1" />
    {title}
  </Badge>
);

const GeminiChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { isLimitReached, getRemainingUsage, incrementUsage } = useUsageLimit();

  const suggestionTopics = [
    "Expliquer le machine learning",
    "Différence entre IA et ML",
    "Comment intégrer ChatGPT dans mon app",
    "Qu'est-ce que le RAG",
    "Exemples de prompts efficaces", 
    "Outils pour développer avec IA"
  ];

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollArea = scrollAreaRef.current;
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSuggestionClick = (topic: string) => {
    setInput(topic);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || isLimitReached) return;

    // Vérifier et incrémenter l'usage avant la requête
    if (!incrementUsage()) {
      toast({
        title: "Limite atteinte",
        description: "Vous avez atteint la limite de 5 utilisations de l'assistant IA.",
        variant: "destructive"
      });
      return;
    }

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('deepseek-chat', {
        body: { prompt: userMessage }
      });
      
      if (error) throw new Error(error.message);
      
      const aiResponse = data.generatedText;
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de communiquer avec l'assistant IA. Veuillez réessayer.",
        variant: "destructive"
      });
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full h-full flex flex-col">
      <div className="flex items-center justify-between gap-2 p-4 border-b">
        <div className="flex items-center gap-2">
          <Bot className="h-5 w-5 text-primary" />
          <h2 className="font-medium">Assistant IA</h2>
        </div>
        <Badge variant={isLimitReached ? "destructive" : "secondary"}>
          {getRemainingUsage()}/5 utilisations
        </Badge>
      </div>

      <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
        <div className="space-y-4">
          {isLimitReached && (
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Vous avez atteint la limite de 5 utilisations de l'assistant IA. Cette limitation aide à protéger les ressources du service.
              </AlertDescription>
            </Alert>
          )}

          {messages.length === 0 && (
            <div className="text-center py-8">
              <Bot className="h-10 w-10 text-primary/30 mx-auto mb-3" />
              <h3 className="text-lg font-medium text-muted-foreground">Comment puis-je vous aider?</h3>
              <p className="text-sm text-muted-foreground mt-2">Posez une question sur l'IA ou cliquez sur une suggestion ci-dessous.</p>
              
              <div className="flex flex-wrap gap-2 justify-center mt-4">
                {suggestionTopics.map((topic, i) => (
                  <SuggestionTopic key={i} title={topic} onClick={handleSuggestionClick} />
                ))}
              </div>
            </div>
          )}

          {messages.map((message, i) => (
            <div
              key={i}
              className={`flex gap-2 ${
                message.role === 'assistant' ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary/10">
                {message.role === 'assistant' ? (
                  <Bot className="h-5 w-5 text-primary" />
                ) : (
                  <User className="h-5 w-5 text-primary" />
                )}
              </div>
              <div
                className={`rounded-lg px-3 py-2 max-w-[80%] ${
                  message.role === 'assistant'
                    ? 'bg-muted prose prose-sm dark:prose-invert'
                    : 'bg-primary text-primary-foreground'
                }`}
              >
                {message.role === 'assistant' ? (
                  <ReactMarkdown>{message.content}</ReactMarkdown>
                ) : (
                  message.content
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary/10">
                <Bot className="h-5 w-5 text-primary" />
              </div>
              <div className="rounded-lg px-3 py-2 bg-muted animate-pulse">
                En train de réfléchir...
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      <form onSubmit={handleSubmit} className="p-4 border-t flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Posez votre question sur l'IA..."
          disabled={isLoading}
        />
        <Button type="submit" disabled={isLoading || !input.trim() || isLimitReached}>
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </Card>
  );
};

export default GeminiChat;
