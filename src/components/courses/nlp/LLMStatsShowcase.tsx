
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Database, Zap, Users, Globe, DollarSign, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

interface Stat {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
  comparison?: string;
  color: string;
}

const LLMStatsShowcase: React.FC = () => {
  const stats: Stat[] = [
    {
      icon: <Database className="h-6 w-6" />,
      title: "Données d'entraînement",
      value: "45 TB",
      description: "Volume de texte utilisé pour GPT-3",
      comparison: "≈ 45 millions de livres ou 22 millions d'articles Wikipédia",
      color: "blue"
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Paramètres",
      value: "175B",
      description: "Nombre de paramètres dans GPT-3",
      comparison: "≈ 3x le nombre de synapses dans un cerveau de souris",
      color: "purple"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Puissance de calcul",
      value: "3,14×10²³",
      description: "FLOPs pour entraîner GPT-3",
      comparison: "≈ 1000x la puissance de tous les superordinateurs de 1993",
      color: "orange"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Coût d'entraînement",
      value: "$4.6M",
      description: "Coût estimé pour entraîner GPT-3",
      comparison: "≈ Prix de 1000 voitures de luxe",
      color: "green"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Adoption",
      value: "100M",
      description: "Utilisateurs ChatGPT en 2 mois",
      comparison: "Record d'adoption le plus rapide de l'histoire",
      color: "red"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Langues supportées",
      value: "100+",
      description: "Langues comprises par GPT-4",
      comparison: "≈ 95% des langues parlées par 1M+ personnes",
      color: "teal"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 text-blue-100',
      purple: 'from-purple-500 to-purple-600 text-purple-100',
      orange: 'from-orange-500 to-orange-600 text-orange-100',
      green: 'from-green-500 to-green-600 text-green-100',
      red: 'from-red-500 to-red-600 text-red-100',
      teal: 'from-teal-500 to-teal-600 text-teal-100'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-4 text-foreground">L'échelle impressionnante des LLM</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Des chiffres qui donnent le vertige et révèlent l'ampleur de la révolution en cours
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full hover:shadow-lg transition-all duration-300 overflow-hidden">
              <CardHeader className={`bg-gradient-to-r ${getColorClasses(stat.color)} text-white`}>
                <div className="flex items-center gap-3">
                  {stat.icon}
                  <div>
                    <CardTitle className="text-lg text-white">{stat.title}</CardTitle>
                    <div className="text-3xl font-bold text-white mt-2">{stat.value}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                  {stat.comparison && (
                    <div className="bg-muted/50 p-3 rounded-lg border-l-2 border-primary">
                      <p className="text-xs text-muted-foreground font-medium">
                        💡 Pour perspective : {stat.comparison}
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 p-6 rounded-lg border border-primary/20">
        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
          <Zap className="h-5 w-5 text-primary" />
          L'explosion exponentielle
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <h5 className="font-medium mb-2 text-foreground">Évolution temporelle :</h5>
            <ul className="space-y-1 text-muted-foreground">
              <li>• 2018 : GPT-1 (117M paramètres)</li>
              <li>• 2019 : GPT-2 (1.5B paramètres)</li>
              <li>• 2020 : GPT-3 (175B paramètres)</li>
              <li>• 2023 : GPT-4 (~1.8T paramètres)</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium mb-2 text-foreground">Coûts croissants :</h5>
            <ul className="space-y-1 text-muted-foreground">
              <li>• GPT-1 : ~$1,000</li>
              <li>• GPT-2 : ~$50,000</li>
              <li>• GPT-3 : ~$4.6M</li>
              <li>• GPT-4 : {'>'}$100M (estimé)</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium mb-2 text-foreground">Impact énergétique :</h5>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Entraînement GPT-3 : 1,287 MWh</li>
              <li>• ≈ Consommation de 120 foyers/an</li>
              <li>• ≈ 552 tonnes CO2 émises</li>
              <li>• Équivalent à 300 vols Paris-NY</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LLMStatsShowcase;
