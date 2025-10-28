
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Bot, Brain, ChevronRight, Lightbulb, BookOpen, Network, Braces } from 'lucide-react';

const ResourceLinks: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      <Card className="bg-card shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg">Types d'IA</CardTitle>
          </div>
          <CardDescription>Comprendre les différentes catégories d'intelligence artificielle</CardDescription>
        </CardHeader>
        <CardContent className="pt-0 pb-4">
          <ul className="space-y-2 mt-2">
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-primary" />
              <span className="text-sm">IA symbolique vs connexionniste</span>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-primary" />
              <span className="text-sm">IA faible, forte et générale</span>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-primary" />
              <span className="text-sm">Modèles génératifs et prédictifs</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter className="pt-0">
          <Button variant="outline" size="sm" asChild className="w-full">
            <Link to="/types-ia">Explorer les types d'IA</Link>
          </Button>
        </CardFooter>
      </Card>
      
      <Card className="bg-card shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg">Machine Learning</CardTitle>
          </div>
          <CardDescription>Découvrir les techniques d'apprentissage automatique</CardDescription>
        </CardHeader>
        <CardContent className="pt-0 pb-4">
          <ul className="space-y-2 mt-2">
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-primary" />
              <span className="text-sm">Apprentissage supervisé et non supervisé</span>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-primary" />
              <span className="text-sm">Réseaux de neurones et deep learning</span>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-primary" />
              <span className="text-sm">Algorithmes et modèles populaires</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter className="pt-0">
          <Button variant="outline" size="sm" asChild className="w-full">
            <Link to="/machine-learning">Explorer le Machine Learning</Link>
          </Button>
        </CardFooter>
      </Card>
      
      <Card className="bg-card shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <Network className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg">IA Multimodale</CardTitle>
          </div>
          <CardDescription>Comprendre les systèmes qui intègrent plusieurs types de données</CardDescription>
        </CardHeader>
        <CardContent className="pt-0 pb-4">
          <ul className="space-y-2 mt-2">
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-primary" />
              <span className="text-sm">Vision-langage, audio-texte, multimédia</span>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-primary" />
              <span className="text-sm">Applications créatives et professionnelles</span>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-primary" />
              <span className="text-sm">L'art du prompting multimodal</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter className="pt-0">
          <Button variant="outline" size="sm" asChild className="w-full">
            <Link to="/ia-multimodale">Explorer l'IA Multimodale</Link>
          </Button>
        </CardFooter>
      </Card>
      
      <Card className="bg-card shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg">IA et éthique</CardTitle>
          </div>
          <CardDescription>Comprendre les implications éthiques des technologies d'IA</CardDescription>
        </CardHeader>
        <CardContent className="pt-0 pb-4">
          <ul className="space-y-2 mt-2">
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-primary" />
              <span className="text-sm">Équité, transparence et responsabilité</span>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-primary" />
              <span className="text-sm">Cadres réglementaires en développement</span>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-primary" />
              <span className="text-sm">Défis éthiques des systèmes autonomes</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter className="pt-0">
          <Button variant="outline" size="sm" asChild className="w-full">
            <Link to="/ethique">Explorer l'éthique de l'IA</Link>
          </Button>
        </CardFooter>
      </Card>
      
      <Card className="bg-card shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg">Glossaire IA</CardTitle>
          </div>
          <CardDescription>Comprendre le vocabulaire technique de l'intelligence artificielle</CardDescription>
        </CardHeader>
        <CardContent className="pt-0 pb-4">
          <ul className="space-y-2 mt-2">
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-primary" />
              <span className="text-sm">Termes techniques et concepts clés</span>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-primary" />
              <span className="text-sm">Définitions précises et accessibles</span>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-primary" />
              <span className="text-sm">Références aux applications pratiques</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter className="pt-0">
          <Button variant="outline" size="sm" asChild className="w-full">
            <Link to="/glossaire">Explorer le glossaire</Link>
          </Button>
        </CardFooter>
      </Card>
      
      <Card className="bg-card shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <Braces className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg">LLM et RLHF</CardTitle>
          </div>
          <CardDescription>Découvrir les avancées des grands modèles de langage</CardDescription>
        </CardHeader>
        <CardContent className="pt-0 pb-4">
          <ul className="space-y-2 mt-2">
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-primary" />
              <span className="text-sm">Architecture des modèles transformers</span>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-primary" />
              <span className="text-sm">Apprentissage par renforcement avec feedback humain</span>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="h-4 w-4 text-primary" />
              <span className="text-sm">Agents autonomes et systèmes avancés</span>
            </li>
          </ul>
        </CardContent>
        <CardFooter className="pt-0">
          <Button variant="outline" size="sm" asChild className="w-full">
            <Link to="/types-ia/llm">Explorer les LLM et RLHF</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ResourceLinks;
