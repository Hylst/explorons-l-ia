
import React from 'react';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Clock, Eye, XCircle } from 'lucide-react';

const Confidentialite = () => {
  return (
    <>
      <Hero
        title="Politique de Confidentialité"
        subtitle="Comment nous protégeons et traitons vos données personnelles"
      />

      <section className="section-container">
        <div className="max-w-3xl mx-auto">
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-6">
                <div className="p-3 rounded-full bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
              </div>
              
              <SectionHeading
                title="Introduction"
                description="Notre engagement envers la protection de vos données"
                center
              />
              
              <div className="space-y-4 mt-4">
                <p className="text-muted-foreground">
                  Chez Explorons l'IA, nous prenons la protection de vos données personnelles très au sérieux. 
                  Cette politique de confidentialité détaille les types de données que nous collectons réellement, 
                  comment nous les utilisons et les protégeons, conformément au RGPD.
                </p>
                <p className="text-muted-foreground">
                  En utilisant notre site, vous acceptez les pratiques décrites dans cette politique. 
                  Vous pouvez gérer vos préférences de confidentialité à tout moment via notre 
                  <a href="/gestion-donnees-rgpd" className="text-primary hover:underline"> centre de gestion des données</a>.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <SectionHeading
                title="Données collectées"
                description="Les informations que nous recueillons et pourquoi"
              />
              
              <div className="space-y-4 mt-4">
                <h3 className="text-lg font-medium">Données stockées localement (localStorage)</h3>
                <p className="text-muted-foreground">
                  Nous stockons certaines données uniquement sur votre appareil via le localStorage de votre navigateur :
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li><strong>Préférences utilisateur :</strong> Thème sombre/clair, paramètres d'affichage</li>
                  <li><strong>Consentements :</strong> Vos choix de confidentialité et cookies</li>
                  <li><strong>Usage des outils :</strong> Compteurs d'utilisation (ex: 5 requêtes/jour pour l'assistant IA)</li>
                  <li><strong>Créations sauvegardées :</strong> Prompts générés, configurations d'outils</li>
                </ul>

                <h3 className="text-lg font-medium mt-6">Données de l'assistant IA</h3>
                <p className="text-muted-foreground">
                  Lorsque vous utilisez notre assistant IA conversationnel :
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li><strong>Messages envoyés :</strong> Vos questions et conversations sont transmises à Deepseek AI</li>
                  <li><strong>Réponses générées :</strong> Les réponses de l'IA peuvent être temporairement conservées</li>
                  <li><strong>Métadonnées :</strong> Horodatage et comptage des interactions</li>
                </ul>

                <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800 mt-4">
                  <p className="text-sm text-amber-800 dark:text-amber-200">
                    <strong>Important :</strong> Ne partagez jamais d'informations personnelles, sensibles ou confidentielles 
                    avec l'assistant IA. Les conversations sont traitées par des services tiers.
                  </p>
                </div>

                <h3 className="text-lg font-medium mt-6">Données de contact volontaires</h3>
                <p className="text-muted-foreground">
                  Uniquement si vous nous contactez directement :
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Adresse email (pour vous répondre)</li>
                  <li>Message ou question soumise</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <SectionHeading
                title="Utilisation des données"
                description="Comment nous utilisons vos informations"
              />
              
              <div className="space-y-4 mt-4">
                <p className="text-muted-foreground">
                  Nous utilisons les données collectées uniquement pour les finalités suivantes et selon les bases légales du RGPD :
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li><strong>Fonctionnement technique (intérêt légitime) :</strong> Assurer le bon fonctionnement des outils</li>
                  <li><strong>Préférences utilisateur (consentement) :</strong> Mémoriser vos choix et paramètres</li>
                  <li><strong>Assistant IA (consentement) :</strong> Fournir des réponses personnalisées via Deepseek</li>
                  <li><strong>Support utilisateur (intérêt légitime) :</strong> Répondre à vos questions et demandes</li>
                  <li><strong>Amélioration du service (consentement) :</strong> Analyser l'usage pour améliorer l'expérience</li>
                </ul>

                <h3 className="text-lg font-medium mt-6">Partage avec des tiers</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li><strong>Deepseek AI (Chine) :</strong> Pour le fonctionnement de l'assistant IA conversationnel</li>
                  <li><strong>Supabase (USA) :</strong> Hébergement sécurisé de certaines fonctionnalités</li>
                  <li><strong>Aucun autre partage :</strong> Nous ne vendons ni ne louons vos données à des tiers</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <SectionHeading
                title="Conservation des données"
                description="Durée de conservation de vos informations"
              />
              
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-5 w-5 text-primary" />
                <p className="text-muted-foreground">
                  Nous ne conservons vos données personnelles que pendant la durée nécessaire pour répondre aux finalités pour lesquelles elles ont été collectées.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <SectionHeading
                title="Vos droits"
                description="Contrôle sur vos données personnelles"
              />
              
              <div className="space-y-4 mt-4">
                <p className="text-muted-foreground">
                  Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li><strong>Droit d'accès</strong> - Vous pouvez demander une copie des données personnelles que nous détenons à votre sujet</li>
                  <li><strong>Droit de rectification</strong> - Vous pouvez nous demander de corriger ou compléter les données vous concernant</li>
                  <li><strong>Droit à l'effacement</strong> - Vous pouvez nous demander de supprimer vos données</li>
                  <li><strong>Droit à la limitation du traitement</strong> - Vous pouvez nous demander de limiter l'utilisation de vos données</li>
                  <li><strong>Droit d'opposition</strong> - Vous pouvez vous opposer au traitement de vos données</li>
                  <li><strong>Droit à la portabilité</strong> - Vous pouvez demander à recevoir vos données dans un format structuré</li>
                </ul>
                
                <p className="text-muted-foreground mt-4">
                  Pour exercer ces droits, contactez-nous à <a href="mailto:geoffroy.streit@gmail.com" className="text-primary hover:underline">geoffroy.streit@gmail.com</a>.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <SectionHeading
                title="Cookies"
                description="Utilisation des cookies sur notre site"
              />
              
              <div className="space-y-4 mt-4">
                <p className="text-muted-foreground">
                  Notre site utilise des cookies pour améliorer votre expérience de navigation. Les cookies sont de petits fichiers texte stockés sur votre appareil qui nous aident à :
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Comprendre comment vous utilisez notre site</li>
                  <li>Mémoriser vos préférences</li>
                  <li>Fournir des fonctionnalités pertinentes</li>
                </ul>
                
                <div className="flex items-center gap-3 mt-6">
                  <XCircle className="h-5 w-5 text-primary" />
                  <p className="text-muted-foreground">
                    Vous pouvez contrôler et/ou supprimer les cookies comme vous le souhaitez via les paramètres de votre navigateur.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <SectionHeading
                title="Modifications de la politique de confidentialité"
                description="Comment nous vous informons des changements"
              />
              
              <div className="space-y-4 mt-4">
                <p className="text-muted-foreground">
                  Nous pouvons mettre à jour cette politique de confidentialité de temps à autre pour refléter 
                  des changements dans nos pratiques ou pour d'autres raisons opérationnelles, légales ou réglementaires.
                  Toute modification importante vous sera notifiée via une bannière sur le site.
                </p>
                <p className="text-muted-foreground">
                  <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')} 
                  (mise en conformité RGPD complète)
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8">
            <div className="bg-primary/5 rounded-lg p-4 inline-flex items-center gap-2">
              <Eye className="h-5 w-5 text-primary" />
              <span className="text-sm">Pour toute question concernant cette politique, contactez <a href="mailto:geoffroy.streit@gmail.com" className="text-primary hover:underline font-medium">geoffroy.streit@gmail.com</a></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Confidentialite;
