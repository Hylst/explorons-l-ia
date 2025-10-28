import React from 'react';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  FileText, 
  Database, 
  Shield, 
  Clock, 
  Users, 
  Server,
  Info
} from 'lucide-react';

const RegistreTraitements = () => {
  const traitements = [
    {
      id: 1,
      nom: "Assistant IA Conversationnel",
      finalite: "Fournir une assistance éducative sur l'Intelligence Artificielle",
      baseLegale: "Consentement (Art. 6.1.a RGPD)",
      donneesCollectees: [
        "Messages de conversation",
        "Adresse IP (temporaire)"
      ],
      destinataires: ["Deepseek AI (sous-traitant)"],
      dureeConservation: "Aucune conservation - traitement en temps réel",
      transfertHorsUE: "Oui - vers la Chine (Deepseek AI)",
      mesuresSecurite: ["Chiffrement HTTPS", "Pas de stockage permanent", "Anonymisation"],
      status: "Actif"
    },
    {
      id: 2,
      nom: "Préférences utilisateur",
      finalite: "Mémoriser les choix de l'utilisateur (thème, consentements)",
      baseLegale: "Consentement (Art. 6.1.a RGPD)",
      donneesCollectees: [
        "Préférences de thème",
        "Consentements cookies",
        "Historique d'usage des outils"
      ],
      destinataires: ["Stockage local uniquement"],
      dureeConservation: "Jusqu'à révocation du consentement",
      transfertHorsUE: "Non",
      mesuresSecurite: ["Stockage local (localStorage)", "Chiffrement côté client"],
      status: "Actif"
    },
    {
      id: 3,
      nom: "Gestion des demandes RGPD",
      finalite: "Traiter les demandes d'exercice de droits RGPD",
      baseLegale: "Obligation légale (Art. 6.1.c RGPD)",
      donneesCollectees: [
        "Adresse email",
        "Type de demande",
        "Message de la demande"
      ],
      destinataires: ["DPO interne", "Équipe technique"],
      dureeConservation: "3 ans après traitement de la demande",
      transfertHorsUE: "Non",
      mesuresSecurite: ["Accès restreint", "Audit trail", "Chiffrement"],
      status: "Actif"
    },
    {
      id: 4,
      nom: "Statistiques d'usage anonymes",
      finalite: "Améliorer l'expérience utilisateur et les contenus",
      baseLegale: "Consentement (Art. 6.1.a RGPD)",
      donneesCollectees: [
        "Pages visitées (anonymisées)",
        "Outils utilisés (anonymisés)",
        "Durée de session"
      ],
      destinataires: ["Équipe développement"],
      dureeConservation: "12 mois maximum",
      transfertHorsUE: "Non",
      mesuresSecurite: ["Anonymisation", "Agrégation des données"],
      status: "Optionnel"
    }
  ];

  const getBadgeVariant = (status: string) => {
    switch (status) {
      case "Actif":
        return "default";
      case "Optionnel":
        return "secondary";
      default:
        return "outline";
    }
  };

  const getRiskLevel = (transfertHorsUE: string, donneesCollectees: string[]) => {
    if (transfertHorsUE === "Oui") return { level: "Élevé", color: "text-red-600" };
    if (donneesCollectees.some(d => d.includes("email") || d.includes("IP"))) {
      return { level: "Moyen", color: "text-orange-600" };
    }
    return { level: "Faible", color: "text-green-600" };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <Hero title="Registre des Traitements" />
      
      <div className="container mx-auto px-4 py-4">
        <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
          Documentation complète des traitements de données personnelles conformément au RGPD
        </p>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Alert className="mb-8">
          <Info className="h-4 w-4" />
          <AlertDescription>
            Ce registre documente tous les traitements de données personnelles effectués par Explorons l'IA, 
            conformément à l'article 30 du RGPD. Il est mis à jour régulièrement pour refléter les évolutions.
          </AlertDescription>
        </Alert>

        <div className="grid gap-6">
          {traitements.map((traitement) => {
            const risk = getRiskLevel(traitement.transfertHorsUE, traitement.donneesCollectees);
            
            return (
              <Card key={traitement.id} className="shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Database className="h-5 w-5 text-primary" />
                        {traitement.nom}
                      </CardTitle>
                      <p className="text-muted-foreground mt-1">
                        {traitement.finalite}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant={getBadgeVariant(traitement.status)}>
                        {traitement.status}
                      </Badge>
                      <Badge variant="outline" className={risk.color}>
                        Risque {risk.level}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold flex items-center gap-2 mb-2">
                          <Shield className="h-4 w-4 text-blue-600" />
                          Base légale
                        </h4>
                        <p className="text-sm text-muted-foreground bg-muted/50 p-2 rounded">
                          {traitement.baseLegale}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold flex items-center gap-2 mb-2">
                          <FileText className="h-4 w-4 text-green-600" />
                          Données collectées
                        </h4>
                        <ul className="text-sm space-y-1">
                          {traitement.donneesCollectees.map((donnee, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-current rounded-full"></span>
                              {donnee}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold flex items-center gap-2 mb-2">
                          <Users className="h-4 w-4 text-purple-600" />
                          Destinataires
                        </h4>
                        <ul className="text-sm space-y-1">
                          {traitement.destinataires.map((dest, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-current rounded-full"></span>
                              {dest}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold flex items-center gap-2 mb-2">
                          <Clock className="h-4 w-4 text-orange-600" />
                          Durée de conservation
                        </h4>
                        <p className="text-sm text-muted-foreground bg-muted/50 p-2 rounded">
                          {traitement.dureeConservation}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold flex items-center gap-2 mb-2">
                          <Server className="h-4 w-4 text-red-600" />
                          Transfert hors UE
                        </h4>
                        <p className="text-sm text-muted-foreground bg-muted/50 p-2 rounded">
                          {traitement.transfertHorsUE}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Mesures de sécurité</h4>
                        <ul className="text-sm space-y-1">
                          {traitement.mesuresSecurite.map((mesure, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                              {mesure}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>
          <p className="mt-2">
            Pour toute question sur ce registre, contactez notre DPO : 
            <a href="mailto:dpo@exploronslia.app" className="text-primary hover:underline ml-1">
              dpo@exploronslia.app
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistreTraitements;