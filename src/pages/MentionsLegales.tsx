
import React from 'react';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { Mail } from 'lucide-react';

const MentionsLegales = () => {
  return (
    <>
      <Hero
        title="Mentions Légales"
        subtitle="Informations légales concernant le site Explorons l'IA"
      />

      <section className="section-container">
        <div className="max-w-3xl mx-auto">
          <Card className="mb-8">
            <CardContent className="pt-6">
              <SectionHeading
                title="Éditeur du site"
                description="Informations concernant l'éditeur responsable du site"
              />
              
              <div className="space-y-4 mt-4">
                <p>
                  <strong>Explorons l'IA</strong> est un site web édité par Geoffroy Streit, à titre personnel.
                </p>
                <p>
                  <strong>Adresse email de contact :</strong> <a href="mailto:geoffroy.streit@gmail.com" className="text-primary hover:underline">geoffroy.streit@gmail.com</a>
                </p>
                <p>
                  <strong>Directeur de la publication :</strong> Geoffroy Streit
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <SectionHeading
                title="Hébergement"
                description="Informations concernant l'hébergeur du site"
              />
              
              <div className="space-y-4 mt-4">
                <p>
                  Ce site est hébergé par <strong>OVH SAS</strong>
                </p>
                <p>
                  Siège social : 2 rue Kellermann - 59100 Roubaix - France
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <SectionHeading
                title="Propriété intellectuelle"
                description="Droits d'auteur et licences du contenu"
              />
              
              <div className="space-y-4 mt-4">
                <p>
                  La structure générale, les textes, images, sons, graphiques, documents téléchargeables, bases de données et tout autre élément composant le site sont la propriété exclusive de Geoffroy Streit.
                </p>
                <p>
                  Toute représentation, reproduction, exploitation, rediffusion ou utilisation à quelque titre que ce soit, de tout ou partie des éléments du site est interdite sans l'accord écrit préalable de Geoffroy Streit.
                </p>
                <p>
                  Le non-respect de cette interdiction constitue une contrefaçon susceptible d'engager la responsabilité civile et pénale du contrefacteur.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <SectionHeading
                title="Limitations de responsabilité"
                description="Étendue des responsabilités concernant le site"
              />
              
              <div className="space-y-4 mt-4">
                <p>
                  Geoffroy Streit s'efforce d'assurer au mieux l'exactitude et la mise à jour des informations diffusées sur ce site, dont il se réserve le droit de corriger le contenu à tout moment et sans préavis.
                </p>
                <p>
                  Toutefois, Geoffroy Streit ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.
                </p>
                <p>
                  En conséquence, l'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8">
            <div className="bg-primary/5 rounded-lg p-4 inline-flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-sm">Pour toute question, contactez <a href="mailto:geoffroy.streit@gmail.com" className="text-primary hover:underline font-medium">geoffroy.streit@gmail.com</a></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MentionsLegales;
