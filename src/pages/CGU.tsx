import React from 'react';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Users, Shield, AlertTriangle } from 'lucide-react';

const CGU = () => {
  return (
    <>
      <Hero
        title="Conditions Générales d'Utilisation"
        subtitle="Règles d'utilisation de la plateforme Explorons l'IA"
      />

      <section className="section-container">
        <div className="max-w-3xl mx-auto">
          <Card className="mb-8">
            <CardContent className="pt-6">
              <div className="flex justify-center mb-6">
                <div className="p-3 rounded-full bg-primary/10">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
              </div>
              
              <SectionHeading
                title="Objet et champ d'application"
                description="Conditions d'utilisation de nos services"
                center
              />
              
              <div className="space-y-4 mt-4">
                <p className="text-muted-foreground">
                  Les présentes Conditions Générales d'Utilisation (CGU) régissent l'utilisation de la plateforme 
                  Explorons l'IA accessible à l'adresse <strong>exploronslia.app</strong> et de tous ses services associés.
                </p>
                <p className="text-muted-foreground">
                  En accédant au site, vous acceptez sans réserve les présentes CGU.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <SectionHeading
                title="Services proposés"
                description="Description de nos outils et ressources"
              />
              
              <div className="space-y-4 mt-4">
                <h3 className="text-lg font-medium">Contenu éducatif</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Cours et tutoriels sur l'intelligence artificielle</li>
                  <li>Guides pratiques et ressources pédagogiques</li>
                  <li>Actualités et analyses du secteur IA</li>
                </ul>
                
                <h3 className="text-lg font-medium mt-6">Outils interactifs</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Générateur de prompts IA</li>
                  <li>Calculateur de coûts pour modèles IA</li>
                  <li>Simulateur d'entraînement de modèles</li>
                  <li>Détecteur de contenu généré par IA</li>
                  <li>Assistant IA conversationnel</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <SectionHeading
                title="Utilisation des services"
                description="Règles et limitations d'usage"
              />
              
              <div className="space-y-4 mt-4">
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-medium">Usage personnel et éducatif</h3>
                </div>
                <p className="text-muted-foreground">
                  Les services sont destinés à un usage personnel, éducatif et professionnel dans le cadre 
                  de l'apprentissage de l'intelligence artificielle.
                </p>
                
                <h3 className="text-lg font-medium mt-6">Limitations d'usage</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Certains outils ont des limites d'utilisation (5 requêtes par jour pour l'assistant IA)</li>
                  <li>L'utilisation commerciale intensive nécessite notre accord préalable</li>
                  <li>La revente ou redistribution du contenu est interdite</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <SectionHeading
                title="Données personnelles et assistant IA"
                description="Traitement des données par nos services"
              />
              
              <div className="space-y-4 mt-4">
                <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-5 w-5 text-amber-600" />
                    <span className="font-medium text-amber-800 dark:text-amber-200">
                      Important concernant l'assistant IA
                    </span>
                  </div>
                  <ul className="text-sm text-amber-700 dark:text-amber-300 space-y-1">
                    <li>• Vos conversations sont envoyées à des services IA tiers (Deepseek)</li>
                    <li>• Ne partagez jamais d'informations sensibles ou confidentielles</li>
                    <li>• Les conversations peuvent être conservées temporairement</li>
                    <li>• Utilisez l'assistant pour des questions générales sur l'IA uniquement</li>
                  </ul>
                </div>
                
                <h3 className="text-lg font-medium">Stockage local</h3>
                <p className="text-muted-foreground">
                  Nous utilisons le stockage local de votre navigateur pour :
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Mémoriser vos préférences (thème, paramètres)</li>
                  <li>Sauvegarder vos créations localement (prompts, configurations)</li>
                  <li>Compter les utilisations des outils avec limitations</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <SectionHeading
                title="Propriété intellectuelle"
                description="Droits d'auteur et licences"
              />
              
              <div className="space-y-4 mt-4">
                <p className="text-muted-foreground">
                  Le contenu de ce site (textes, images, codes, tutoriels) est protégé par le droit d'auteur 
                  et appartient à Geoffroy Streit ou à ses partenaires.
                </p>
                <h3 className="text-lg font-medium">Utilisation autorisée</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Consultation et apprentissage personnel</li>
                  <li>Citation avec mention de la source</li>
                  <li>Partage des liens vers les ressources</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <SectionHeading
                title="Responsabilité et garanties"
                description="Limitations de responsabilité"
              />
              
              <div className="space-y-4 mt-4">
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-medium">Clause de non-responsabilité</h3>
                </div>
                <p className="text-muted-foreground">
                  Les informations fournies sur ce site sont données à titre informatif et éducatif. 
                  Nous nous efforçons d'assurer leur exactitude mais ne garantissons pas leur exhaustivité.
                </p>
                
                <h3 className="text-lg font-medium mt-6">Utilisation des outils IA</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Les résultats générés par nos outils sont fournis sans garantie</li>
                  <li>L'utilisateur est responsable de la vérification des résultats</li>
                  <li>Nous ne sommes pas responsables des décisions prises sur la base de ces résultats</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <SectionHeading
                title="Modification des CGU"
                description="Évolution de nos conditions"
              />
              
              <div className="space-y-4 mt-4">
                <p className="text-muted-foreground">
                  Nous nous réservons le droit de modifier ces CGU à tout moment. Les modifications 
                  prendront effet dès leur publication sur le site.
                </p>
                <p className="text-muted-foreground">
                  <strong>Dernière mise à jour :</strong> {new Date().toLocaleDateString('fr-FR')}
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8">
            <div className="bg-primary/5 rounded-lg p-4 inline-flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              <span className="text-sm">
                Pour toute question concernant ces CGU, contactez{' '}
                <a 
                  href="mailto:geoffroy.streit@gmail.com" 
                  className="text-primary hover:underline font-medium"
                >
                  geoffroy.streit@gmail.com
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CGU;