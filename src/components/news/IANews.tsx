
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Rss, ExternalLink, Calendar, Clock } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  source: string;
  categories?: string[];
}

interface RssFeed {
  id: string;
  name: string;
  url: string;
  logo?: string;
}

const IANews = () => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("all");

  // Liste des flux RSS français et internationaux de qualité
  const rssFeeds: RssFeed[] = [
    {
      id: "interstices",
      name: "Interstices",
      url: "https://api.rss2json.com/v1/api.json?rss_url=https://interstices.info/feed/",
      logo: "https://interstices.info/favicon.ico"
    },
    {
      id: "inria",
      name: "INRIA Actualités",
      url: "https://api.rss2json.com/v1/api.json?rss_url=https://www.inria.fr/rss.xml",
      logo: "https://www.inria.fr/favicon.ico"
    },
    {
      id: "usbek-rica",
      name: "Usbek & Rica",
      url: "https://api.rss2json.com/v1/api.json?rss_url=https://usbeketrica.com/feed",
      logo: "https://usbeketrica.com/favicon.ico"
    },
    {
      id: "siecle-digital",
      name: "Siècle Digital",
      url: "https://api.rss2json.com/v1/api.json?rss_url=https://siecledigital.fr/feed/",
      logo: "https://siecledigital.fr/favicon.ico"
    },
    {
      id: "hal-science",
      name: "HAL Science",
      url: "https://api.rss2json.com/v1/api.json?rss_url=https://hal.science/search/index/q/*/fq/docType_s:ART/fq/submitType_s:notice/fq/keyword_s:intelligence%20artificielle/sort/submittedDate_tdate%20desc/rss",
      logo: "https://hal.science/favicon.ico"
    },
    {
      id: "numerama",
      name: "Numerama IA",
      url: "https://api.rss2json.com/v1/api.json?rss_url=https://www.numerama.com/tag/intelligence-artificielle/feed/",
      logo: "https://www.numerama.com/favicon.ico"
    },
    {
      id: "futura-sciences",
      name: "Futura Sciences",
      url: "https://api.rss2json.com/v1/api.json?rss_url=https://www.futura-sciences.com/rss/tech/actualites.xml",
      logo: "https://www.futura-sciences.com/favicon.ico"
    }
  ];

  // Fonction pour formater les dates
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric', 
      month: 'long', 
      year: 'numeric'
    });
  };

  // Fonction améliorée pour parser un flux RSS
  const parseRSS = async (feed: RssFeed) => {
    try {
      console.log(`Tentative de chargement du flux: ${feed.name}`);
      const response = await fetch(feed.url);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      
      if (data.status !== 'ok') {
        console.warn(`Flux ${feed.name} non disponible:`, data.message);
        return [];
      }
      
      const parsedItems: NewsItem[] = data.items
        .filter((item: any) => item && item.title) // Filtrer les éléments valides
        .slice(0, 10) // Limiter à 10 articles par flux
        .map((item: any) => ({
          title: item.title || "Sans titre",
          link: item.link || "#",
          pubDate: item.pubDate || new Date().toISOString(),
          description: item.description ? item.description.replace(/<[^>]*>/g, '').substring(0, 200) + '...' : "",
          source: feed.name,
          categories: item.categories || []
        }));
      
      console.log(`Flux ${feed.name} chargé avec succès: ${parsedItems.length} articles`);
      return parsedItems;
      
    } catch (error) {
      console.warn(`Impossible de charger le flux ${feed.name}:`, error);
      return [];
    }
  };

  // Chargement des flux RSS
  useEffect(() => {
    const fetchAllFeeds = async () => {
      setLoading(true);
      try {
        const allPromises = rssFeeds.map(feed => parseRSS(feed));
        const results = await Promise.allSettled(allPromises);
        
        // Traiter les résultats réussis uniquement
        const allItems = results
          .filter((result): result is PromiseSettledResult<NewsItem[]> & { status: 'fulfilled' } => result.status === 'fulfilled')
          .flatMap(result => result.value)
          .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
        
        console.log(`Total d'articles chargés: ${allItems.length}`);
        setNewsItems(allItems);
        
        if (allItems.length === 0) {
          toast({
            title: "Aucune actualité disponible",
            description: "Tous les flux RSS sont temporairement indisponibles.",
            variant: "destructive"
          });
        }
        
      } catch (error) {
        console.error("Erreur lors du chargement des flux:", error);
        toast({
          title: "Erreur de chargement",
          description: "Impossible de charger les actualités pour le moment.",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    fetchAllFeeds();
    
    // Rafraîchissement automatique toutes les 30 minutes
    const interval = setInterval(fetchAllFeeds, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Filtrer les articles selon l'onglet actif
  const filteredNews = activeTab === "all" 
    ? newsItems 
    : newsItems.filter(item => item.source === rssFeeds.find(feed => feed.id === activeTab)?.name);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-2">
        <Rss className="w-5 h-5 text-primary" />
        <h2 className="text-2xl font-bold tracking-tight">Actualités de l'IA</h2>
      </div>
      
      <Tabs defaultValue="all" onValueChange={setActiveTab}>
        <TabsList className="mb-4 flex-wrap h-auto">
          <TabsTrigger value="all">Tous les flux ({newsItems.length})</TabsTrigger>
          {rssFeeds.map(feed => {
            const count = newsItems.filter(item => item.source === feed.name).length;
            return (
              <TabsTrigger key={feed.id} value={feed.id}>
                {feed.name} ({count})
              </TabsTrigger>
            );
          })}
        </TabsList>

        <TabsContent value={activeTab} className="mt-0">
          {loading ? (
            <div className="grid gap-4">
              {[1, 2, 3].map(i => (
                <Card key={i}>
                  <CardHeader>
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/4" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-20 w-full" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : filteredNews.length === 0 ? (
            <Card>
              <CardContent className="py-10 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                  <Rss className="h-10 w-10 text-muted-foreground" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">Aucune actualité disponible</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Les flux RSS sont temporairement indisponibles. Veuillez réessayer plus tard.
                </p>
              </CardContent>
            </Card>
          ) : (
            <ScrollArea className="h-[600px] pr-4">
              <div className="grid gap-4">
                {filteredNews.map((item, index) => (
                  <Card key={`${item.source}-${index}`} className="group overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between mb-1">
                        <Badge variant="outline" className="text-xs">
                          {item.source}
                        </Badge>
                        <div className="flex items-center text-muted-foreground text-xs">
                          <Calendar className="h-3 w-3 mr-1" />
                          {formatDate(item.pubDate)}
                        </div>
                      </div>
                      <CardTitle className="text-lg hover:text-primary transition-colors">
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          {item.title}
                        </a>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {item.description}
                      </p>
                    </CardContent>
                    <CardFooter className="pt-0 flex justify-between items-center">
                      {item.categories && item.categories.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {item.categories.slice(0, 3).map((cat, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {cat}
                            </Badge>
                          ))}
                          {item.categories.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{item.categories.length - 3}
                            </Badge>
                          )}
                        </div>
                      )}
                      <Button variant="ghost" size="sm" className="ml-auto" asChild>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          Lire <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default IANews;
