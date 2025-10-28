
import React from 'react';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Brain, Lightbulb, Bot, Star, BookOpen, Cpu, Network, ArrowRight } from 'lucide-react';

const IAExpliqueeAuxEnfants = () => {
  return (
    <>
      <Hero
        title="L'IA expliquée aux enfants"
        subtitle="Une approche progressive et pédagogique pour comprendre l'intelligence artificielle à partir de 12 ans"
      />

      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <h2 className="text-2xl font-bold mb-4">Salut les explorateurs du futur ! 👋</h2>
              
              <p>
                Imagine que tu puisses créer un ami invisible super intelligent qui peut t'aider à faire tes devoirs,
                composer de la musique, dessiner des images incroyables ou même inventer des histoires. 
                C'est ce qu'on appelle l'intelligence artificielle, ou IA pour faire plus court !
              </p>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Mais au fait, qu'est-ce que l'IA exactement ?</h3>
              
              <p>
                L'intelligence artificielle, c'est un peu comme si on avait appris à un ordinateur à "penser" 
                et à résoudre des problèmes, un peu comme le fait un humain. Sauf que l'ordinateur ne pense pas vraiment
                comme nous - il utilise des mathématiques et des statistiques pour faire semblant d'être intelligent !
              </p>
              
              <div className="bg-primary/10 p-4 rounded-lg my-6">
                <h4 className="text-lg font-semibold flex items-center gap-2">
                  <Lightbulb className="text-primary" size={20} />
                  Le savais-tu ?
                </h4>
                <p className="m-0">
                  Les IA qui créent du texte comme ChatGPT n'ont pas vraiment de "cerveau". 
                  Elles font des prédictions sur quel mot devrait venir après les autres, 
                  un peu comme si tu jouais à deviner la suite d'une phrase, mais en beaucoup plus perfectionné !
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <Card className="shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                  <Star className="text-primary" size={20} />
                  Dans cette section
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <ArrowRight size={16} className="text-primary flex-shrink-0" />
                    <span>Comment fonctionne l'IA</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight size={16} className="text-primary flex-shrink-0" />
                    <span>La magie des données et de l'apprentissage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight size={16} className="text-primary flex-shrink-0" />
                    <span>Les tokens et la fenêtre de contexte</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ArrowRight size={16} className="text-primary flex-shrink-0" />
                    <span>À quoi sert l'IA et ses limites</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-primary/5 shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-2">
                  <Bot size={40} className="text-primary" />
                  <h3 className="text-lg font-bold">As-tu une question ?</h3>
                  <p className="text-muted-foreground text-sm">
                    Utilise notre assistant IA pour poser toutes tes questions sur l'intelligence artificielle !
                  </p>
                  <Button variant="outline" className="mt-2 w-full">
                    Discuter avec l'assistant
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-16">
          <SectionHeading 
            pretitle="Explore par thème"
            title="Les concepts clés de l'IA"
            description="Découvre les concepts importants de l'intelligence artificielle expliqués simplement"
            center
          />
          
          <Tabs defaultValue="fonctionnement" className="mt-8">
            <TabsList className="grid grid-cols-3 max-w-2xl mx-auto">
              <TabsTrigger value="fonctionnement">Comment ça marche</TabsTrigger>
              <TabsTrigger value="concepts">Concepts importants</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
            </TabsList>
            
            <TabsContent value="fonctionnement" className="mt-6 animate-fade-in">
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <h3 className="text-2xl font-bold mb-4">Comment fonctionne l'Intelligence Artificielle ?</h3>
                
                <p>
                  Pour comprendre comment fonctionne une IA, imagine que tu essaies d'apprendre à reconnaître des chats et des chiens. 
                  Comment ferais-tu ? Tu regarderais plein de photos d'animaux, et avec le temps, tu apprendrais à repérer les 
                  différences entre un chat et un chien.
                </p>
                
                <p>
                  L'IA fait exactement ça ! On lui montre des millions d'exemples et elle apprend à reconnaître des motifs. 
                  C'est ce qu'on appelle l'apprentissage automatique ou "machine learning" en anglais.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="bg-secondary/20 p-5 rounded-lg">
                    <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                      <Network className="text-primary" size={20} />
                      Les réseaux de neurones
                    </h4>
                    <p className="text-sm">
                      Les IA modernes utilisent ce qu'on appelle des "réseaux de neurones", qui sont inspirés
                      du fonctionnement de notre cerveau ! Ces réseaux sont composés de milliers ou même de millions
                      de "neurones" artificiels connectés entre eux.
                    </p>
                  </div>
                  
                  <div className="bg-secondary/20 p-5 rounded-lg">
                    <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                      <BookOpen className="text-primary" size={20} />
                      L'apprentissage
                    </h4>
                    <p className="text-sm">
                      Pour qu'une IA devienne "intelligente", elle doit apprendre ! On lui montre des millions d'exemples
                      et on lui dit si ses réponses sont bonnes ou mauvaises. Petit à petit, elle s'améliore,
                      comme quand tu t'entraînes à un jeu vidéo et que tu deviens meilleur avec le temps.
                    </p>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold mt-6 mb-3">La magie des données</h4>
                
                <p>
                  L'IA a besoin d'énormément de données pour apprendre. Par exemple, pour créer ChatGPT, 
                  on a utilisé des milliards de textes provenant d'Internet : des articles, des livres, 
                  des conversations... C'est comme si tu avais lu toute une bibliothèque pour apprendre à écrire !
                </p>
                
                <div className="bg-primary/10 p-4 rounded-lg my-6">
                  <h4 className="text-lg font-semibold flex items-center gap-2">
                    <Cpu className="text-primary" size={20} />
                    La fenêtre de contexte, c'est quoi ?
                  </h4>
                  <p className="m-0">
                    Quand tu discutes avec une IA comme ChatGPT, elle ne se souvient que d'un nombre limité de mots
                    dans votre conversation. C'est ce qu'on appelle la "fenêtre de contexte". Si la conversation 
                    devient trop longue, l'IA peut oublier les choses que tu as dites au début, un peu comme si 
                    elle avait une mémoire à court terme limitée !
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="concepts" className="mt-6 animate-fade-in">
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <h3 className="text-2xl font-bold mb-4">10 Concepts clés à comprendre</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="border rounded-lg p-4 hover:bg-secondary/10 transition-colors">
                    <h4 className="text-lg font-bold mb-2">1. Les tokens</h4>
                    <p>
                      Les tokens sont les petits morceaux de texte que l'IA analyse. Un token peut être un mot entier,
                      une partie d'un mot ou même un simple caractère. C'est comme les briques d'un Lego : l'IA assemble 
                      ces briques pour former des phrases complètes.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4 hover:bg-secondary/10 transition-colors">
                    <h4 className="text-lg font-bold mb-2">2. La fenêtre de contexte</h4>
                    <p>
                      C'est le nombre maximum de tokens que l'IA peut garder en mémoire pendant une conversation.
                      C'est comme si tu ne pouvais te rappeler que des 50 dernières phrases d'une conversation avec ton ami.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4 hover:bg-secondary/10 transition-colors">
                    <h4 className="text-lg font-bold mb-2">3. L'apprentissage supervisé</h4>
                    <p>
                      C'est comme apprendre avec un professeur ! On montre à l'IA des exemples et on lui dit
                      quelle est la bonne réponse. Avec le temps, elle apprend à donner les bonnes réponses toute seule.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4 hover:bg-secondary/10 transition-colors">
                    <h4 className="text-lg font-bold mb-2">4. Le deep learning</h4>
                    <p>
                      C'est une technique d'apprentissage très puissante qui utilise des réseaux de neurones avec plusieurs
                      couches. Plus il y a de couches, plus l'IA peut comprendre des choses complexes, comme reconnaître un visage 
                      ou comprendre une phrase.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4 hover:bg-secondary/10 transition-colors">
                    <h4 className="text-lg font-bold mb-2">5. Les grands modèles de langage (LLM)</h4>
                    <p>
                      Ce sont des IA spécialisées dans la compréhension et la génération de texte, comme ChatGPT.
                      Elles ont appris à partir d'énormes quantités de textes et peuvent ainsi écrire presque comme un humain !
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4 hover:bg-secondary/10 transition-colors">
                    <h4 className="text-lg font-bold mb-2">6. Le biais des algorithmes</h4>
                    <p>
                      Les IA apprennent à partir de données créées par des humains, qui peuvent contenir des erreurs ou des préjugés.
                      L'IA peut donc reproduire ces préjugés si on n'y fait pas attention.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4 hover:bg-secondary/10 transition-colors">
                    <h4 className="text-lg font-bold mb-2">7. L'IA générative</h4>
                    <p>
                      C'est une IA qui peut créer du contenu original : textes, images, musique, vidéos... 
                      Elle a appris le style et les règles à partir d'exemples, et peut ensuite créer de nouvelles choses.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4 hover:bg-secondary/10 transition-colors">
                    <h4 className="text-lg font-bold mb-2">8. Le prompt</h4>
                    <p>
                      C'est la demande ou la question que tu poses à une IA. L'art de bien formuler tes prompts
                      est super important pour obtenir exactement ce que tu veux de l'IA !
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4 hover:bg-secondary/10 transition-colors">
                    <h4 className="text-lg font-bold mb-2">9. L'hallucination de l'IA</h4>
                    <p>
                      Parfois, l'IA invente des informations qui semblent vraies mais qui ne le sont pas.
                      C'est comme si elle "hallucine" et voit des choses qui n'existent pas. C'est pourquoi il faut toujours
                      vérifier les informations qu'elle donne !
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4 hover:bg-secondary/10 transition-colors">
                    <h4 className="text-lg font-bold mb-2">10. L'IA multimodale</h4>
                    <p>
                      C'est une IA qui peut comprendre et traiter différents types d'informations en même temps :
                      du texte, des images, du son... Elle peut voir une image et la décrire, ou créer une image à partir
                      d'une description textuelle.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="applications" className="mt-6 animate-fade-in">
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <h3 className="text-2xl font-bold mb-4">À quoi sert l'IA et quelles sont ses limites ?</h3>
                
                <p>
                  L'intelligence artificielle peut faire plein de choses géniales, mais elle a aussi des limites.
                  Découvrons ensemble ce qu'elle peut faire et ce qu'elle ne peut pas (encore) faire !
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-primary">Ce que l'IA peut faire</h4>
                    <ul className="space-y-3 list-none pl-0">
                      <li className="flex items-start gap-2">
                        <Cpu className="text-green-500 mt-1 flex-shrink-0" size={18} />
                        <span>Répondre à tes questions et t'aider pour tes devoirs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Cpu className="text-green-500 mt-1 flex-shrink-0" size={18} />
                        <span>Créer des dessins, des textes et même de la musique</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Cpu className="text-green-500 mt-1 flex-shrink-0" size={18} />
                        <span>Traduire des textes dans différentes langues</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Cpu className="text-green-500 mt-1 flex-shrink-0" size={18} />
                        <span>Reconnaître des objets et des personnes dans des photos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Cpu className="text-green-500 mt-1 flex-shrink-0" size={18} />
                        <span>Jouer à des jeux comme les échecs ou les jeux vidéo</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Cpu className="text-green-500 mt-1 flex-shrink-0" size={18} />
                        <span>Aider les médecins à diagnostiquer des maladies</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-primary">Ce que l'IA ne peut pas (encore) faire</h4>
                    <ul className="space-y-3 list-none pl-0">
                      <li className="flex items-start gap-2">
                        <Cpu className="text-red-500 mt-1 flex-shrink-0" size={18} />
                        <span>Comprendre vraiment le sens de ce qu'elle dit (elle suit des statistiques)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Cpu className="text-red-500 mt-1 flex-shrink-0" size={18} />
                        <span>Ressentir des émotions comme les humains</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Cpu className="text-red-500 mt-1 flex-shrink-0" size={18} />
                        <span>Avoir une conscience d'elle-même</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Cpu className="text-red-500 mt-1 flex-shrink-0" size={18} />
                        <span>Prendre des décisions éthiques complexes sans aide humaine</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Cpu className="text-red-500 mt-1 flex-shrink-0" size={18} />
                        <span>Faire preuve de créativité originale (elle s'inspire toujours de ce qu'elle a appris)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Cpu className="text-red-500 mt-1 flex-shrink-0" size={18} />
                        <span>Avoir du sens commun ou de l'intuition comme nous</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-primary/10 p-6 rounded-lg my-8">
                  <h4 className="text-xl font-bold mb-3">L'IA du futur</h4>
                  <p>
                    Les scientifiques travaillent constamment à améliorer l'intelligence artificielle. Dans le futur,
                    les IA pourraient devenir encore plus puissantes et capables de faire des choses qu'on ne peut 
                    même pas imaginer aujourd'hui !
                  </p>
                  <p className="mb-0">
                    Certains rêvent même de créer une "intelligence artificielle générale" (IAG) qui serait aussi
                    intelligente qu'un humain dans tous les domaines. Mais pour l'instant, ce n'est que de la
                    science-fiction... ou peut-être pas pour longtemps ? Qui sait ce que nous réserve l'avenir !
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default IAExpliqueeAuxEnfants;
