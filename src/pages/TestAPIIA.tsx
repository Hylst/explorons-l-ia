
import React, { useState } from 'react';
import Hero from '@/components/Hero';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageSquare, Image, Music, Video } from 'lucide-react';

// Composants pour chaque type d'API
import LLMTester from '@/components/api-tester/LLMTester';
import ImageTester from '@/components/api-tester/ImageTester';
import MusicTester from '@/components/api-tester/MusicTester';
import VideoTester from '@/components/api-tester/VideoTester';

const TestAPIIA = () => {
  const [activeTab, setActiveTab] = useState("llm");

  const apiTypes = [
    {
      id: "llm",
      name: "LLM (Text-to-Text)",
      icon: MessageSquare,
      description: "Testez les modèles de langage les plus populaires",
      badge: "15+ fournisseurs"
    },
    {
      id: "image",
      name: "Text-to-Image",
      icon: Image,
      description: "Générez des images à partir de descriptions textuelles",
      badge: "11+ fournisseurs"
    },
    {
      id: "music",
      name: "Text-to-Music",
      icon: Music,
      description: "Créez de la musique à partir de prompts textuels",
      badge: "8+ fournisseurs"
    },
    {
      id: "video",
      name: "Text-to-Video",
      icon: Video,
      description: "Générez des vidéos courtes à partir de descriptions",
      badge: "10+ fournisseurs"
    }
  ];

  return (
    <>
      <Hero
        title="Test d'API IA"
        subtitle="Testez et comparez différents modèles d'intelligence artificielle via leurs API. Gérez vos clés API en toute sécurité et explorez les capacités de chaque fournisseur."
      />

      <section className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {apiTypes.map((type) => {
            const IconComponent = type.icon;
            return (
              <Card 
                key={type.id}
                className={`transition-all duration-200 cursor-pointer ${
                  activeTab === type.id 
                    ? 'ring-2 ring-primary bg-primary/5 dark:bg-primary/10' 
                    : 'hover:shadow-md'
                }`}
                onClick={() => setActiveTab(type.id)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <IconComponent className="h-6 w-6 text-primary" />
                    <Badge variant="secondary" className="text-xs">
                      {type.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{type.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="llm" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              LLM
            </TabsTrigger>
            <TabsTrigger value="image" className="flex items-center gap-2">
              <Image className="h-4 w-4" />
              Images
            </TabsTrigger>
            <TabsTrigger value="music" className="flex items-center gap-2">
              <Music className="h-4 w-4" />
              Musique
            </TabsTrigger>
            <TabsTrigger value="video" className="flex items-center gap-2">
              <Video className="h-4 w-4" />
              Vidéo
            </TabsTrigger>
          </TabsList>

          <TabsContent value="llm" className="space-y-6">
            <LLMTester />
          </TabsContent>

          <TabsContent value="image" className="space-y-6">
            <ImageTester />
          </TabsContent>

          <TabsContent value="music" className="space-y-6">
            <MusicTester />
          </TabsContent>

          <TabsContent value="video" className="space-y-6">
            <VideoTester />
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
};

export default TestAPIIA;
