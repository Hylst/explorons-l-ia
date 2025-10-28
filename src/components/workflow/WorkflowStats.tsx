import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Workflow, 
  Users, 
  TrendingUp, 
  Clock,
  DollarSign,
  Zap,
  Shield,
  Target
} from 'lucide-react';

const WorkflowStats = () => {
  const stats = [
    {
      icon: <Workflow className="h-5 w-5" />,
      label: 'Workflows créés',
      value: '150+',
      color: 'text-blue-600'
    },
    {
      icon: <Users className="h-5 w-5" />,
      label: 'Utilisateurs actifs',
      value: '2,500+',
      color: 'text-green-600'
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      label: 'Gain de productivité',
      value: '85%',
      color: 'text-purple-600'
    },
    {
      icon: <Clock className="h-5 w-5" />,
      label: 'Temps économisé',
      value: '1,200h',
      color: 'text-orange-600'
    },
    {
      icon: <DollarSign className="h-5 w-5" />,
      label: 'Économies générées',
      value: '$45K+',
      color: 'text-emerald-600'
    },
    {
      icon: <Zap className="h-5 w-5" />,
      label: 'Automatisations',
      value: '500+',
      color: 'text-yellow-600'
    },
    {
      icon: <Shield className="h-5 w-5" />,
      label: 'Fiabilité',
      value: '99.9%',
      color: 'text-red-600'
    },
    {
      icon: <Target className="h-5 w-5" />,
      label: 'Précision IA',
      value: '94%',
      color: 'text-indigo-600'
    }
  ];

  return (
    <div className="mb-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">Optimiseur en Action</h3>
        <p className="text-muted-foreground">
          Statistiques en temps réel de l'utilisation et performance
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className={`${stat.color}`}>
                  {stat.icon}
                </div>
                <Badge variant="outline" className="text-xs">
                  Live
                </Badge>
              </div>
              <div className="text-2xl font-bold mb-1">
                {stat.value}
              </div>
              <p className="text-xs text-muted-foreground">
                {stat.label}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Section créateur */}
      <Card className="mt-6 border-l-4 border-l-primary">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold">Créé par Geoffroy Streit</h4>
              <p className="text-sm text-muted-foreground">
                Expert en automatisation IA et optimisation de workflows • En cours de développement
              </p>
              <div className="flex gap-2 mt-2">
                <Badge variant="secondary" className="text-xs">IA & Automatisation</Badge>
                <Badge variant="secondary" className="text-xs">Performance</Badge>
                <Badge variant="secondary" className="text-xs">Innovation</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WorkflowStats;