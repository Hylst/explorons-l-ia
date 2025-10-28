import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Scale, Eye, Users, AlertTriangle, CheckCircle, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/SectionHeading';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

const EthiqueGouvernance = () => {
  useDocumentMeta({
    title: "Éthique et Gouvernance de l'IA - Guide Complet | AI Avenir",
    description: "Découvrez les enjeux éthiques et de gouvernance de l'IA : régulations, biais, transparence, responsabilité et meilleures pratiques.",
    keywords: "éthique IA, gouvernance IA, régulation IA, biais algorithmes, transparence IA, IA responsable, RGPD IA",
    ogTitle: "Éthique et Gouvernance de l'Intelligence Artificielle",
    ogDescription: "Guide complet sur les enjeux éthiques et réglementaires de l'IA",
    ogType: "article"
  });

  const ethicalPrinciples = [
    {
      title: "Transparence",
      description: "Les décisions algorithmiques doivent être explicables et compréhensibles",
      icon: <Eye className="h-6 w-6" />,
      examples: ["Explicabilité des modèles", "Documentation des processus", "Communication claire des limitations"]
    },
    {
      title: "Équité",
      description: "Éviter les discriminations et assurer un traitement juste pour tous",
      icon: <Scale className="h-6 w-6" />,
      examples: ["Détection des biais", "Représentativité des données", "Tests d'équité réguliers"]
    },
    {
      title: "Responsabilité",
      description: "Définir clairement les responsabilités et les mécanismes de recours",
      icon: <Users className="h-6 w-6" />,
      examples: ["Chaîne de responsabilité", "Mécanismes d'audit", "Processus de recours"]
    },
    {
      title: "Respect de la vie privée",
      description: "Protéger les données personnelles et respecter la confidentialité",
      icon: <Shield className="h-6 w-6" />,
      examples: ["Minimisation des données", "Consentement éclairé", "Anonymisation"]
    }
  ];

  const regulations = [
    {
      title: "AI Act (UE)",
      description: "Première réglementation complète sur l'IA au niveau mondial",
      status: "En vigueur",
      scope: "Union Européenne",
      keyPoints: [
        "Classification des systèmes IA par niveau de risque",
        "Obligations spécifiques selon les catégories",
        "Interdiction de certaines pratiques",
        "Supervision par des autorités nationales"
      ]
    },
    {
      title: "RGPD",
      description: "Règlement sur la protection des données personnelles",
      status: "En vigueur",
      scope: "Union Européenne",
      keyPoints: [
        "Droit à l'explication des décisions automatisées",
        "Consentement pour le traitement des données",
        "Droit à l'effacement et à la portabilité",
        "Privacy by design"
      ]
    },
    {
      title: "Executive Order (USA)",
      description: "Directive présidentielle sur l'IA sûre et sécurisée",
      status: "En cours",
      scope: "États-Unis",
      keyPoints: [
        "Standards de sécurité pour l'IA",
        "Protection contre les risques systémiques",
        "Promotion de l'innovation responsable",
        "Coordination interagences"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation retour */}
      <div className="section-container py-4">
        <Button variant="ghost" size="sm" asChild>
          <Link to="/niveaux-ia" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Retour aux Niveaux d'IA
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="section-container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="h-4 w-4" />
            Enjeux Sociétaux
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Éthique et Gouvernance de l'IA
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Comprendre les enjeux éthiques, réglementaires et de gouvernance pour 
            développer et déployer l'IA de manière responsable et bénéfique pour la société.
          </p>
        </motion.div>
      </section>

      {/* Principes Éthiques */}
      <section className="section-container py-16">
        <SectionHeading
          pretitle="Fondamentaux"
          title="Principes Éthiques de l'IA"
          description="Les piliers d'une intelligence artificielle responsable et bénéfique"
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {ethicalPrinciples.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 text-primary rounded-lg">
                      {principle.icon}
                    </div>
                    <CardTitle className="text-lg">{principle.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{principle.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm text-primary">Applications pratiques :</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {principle.examples.map((example, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Réglementations */}
      <section className="section-container py-16">
        <SectionHeading
          pretitle="Cadre Légal"
          title="Réglementations Internationales"
          description="Panorama des principales réglementations sur l'IA dans le monde"
          center
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
          {regulations.map((regulation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-primary/20">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{regulation.title}</CardTitle>
                    <div className="inline-flex items-center gap-1 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-2 py-1 rounded-full text-xs">
                      <CheckCircle className="w-3 h-3" />
                      {regulation.status}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Globe className="w-4 h-4" />
                    {regulation.scope}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{regulation.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm text-primary">Points clés :</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {regulation.keyPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary/60 rounded-full flex-shrink-0 mt-2" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Navigation Section */}
      <section className="section-container py-16">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            pretitle="Explorer"
            title="Approfondir le Sujet"
            description="Découvrez d'autres aspects importants de l'intelligence artificielle"
            center
          />

          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" variant="default">
              <Link to="/ethique">Éthique de l'IA</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/cours/ia-ethique">Cours IA Éthique</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/niveaux-ia">Niveaux d'IA</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EthiqueGouvernance;