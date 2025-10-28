
import { Share2, Layers, Code, BarChart3 } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

/**
 * Composant présentant le Deep Learning et ses sous-domaines
 * @returns {JSX.Element} Le composant DeepLearning
 */
const DeepLearning = () => {
  return (
    <section className="section-container my-20">
      <SectionHeading
        pretitle="Spécialisation"
        title="Deep Learning et ses sous-domaines"
        description="Le deep learning est une branche avancée du machine learning basée sur des réseaux de neurones artificiels composés de multiples couches pour extraire des caractéristiques de haut niveau."
        center
      />

      <div className="glass-card p-8 rounded-2xl mt-12 animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10">
              <Share2 size={28} className="text-primary" />
            </div>
            <h3 className="heading-md mb-4">Qu'est-ce que le Deep Learning?</h3>
            <p className="text-muted-foreground mb-4">
              Le deep learning utilise des réseaux de neurones artificiels multicouches pour modéliser 
              des abstractions de haut niveau présentes dans les données. Contrairement aux approches 
              traditionnelles, il peut automatiquement découvrir les représentations nécessaires 
              à la détection ou à la classification.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">✓</span>
                <span>Capacité à traiter des données complexes et non structurées</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">✓</span>
                <span>Apprentissage de caractéristiques hiérarchiques</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-primary/10 text-primary text-xs font-bold">✓</span>
                <span>Nécessite de grandes quantités de données et de calcul</span>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="p-6 rounded-xl bg-secondary/20 border border-primary/10">
                <h4 className="text-lg font-semibold mb-3">Structure d'un réseau de neurones profond</h4>
                <div className="space-y-3 relative">
                  <div className="p-3 rounded-lg bg-background/80 border border-primary/10 shadow-sm">
                    <h5 className="font-medium text-sm">Couche d'entrée</h5>
                    <p className="text-xs text-muted-foreground">Reçoit les données brutes</p>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 h-4 w-0.5 bg-primary/20"></div>
                  <div className="p-3 rounded-lg bg-background/80 border border-primary/10 shadow-sm">
                    <h5 className="font-medium text-sm">Couches cachées</h5>
                    <p className="text-xs text-muted-foreground">Extraient des caractéristiques de plus en plus abstraites</p>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 h-4 w-0.5 bg-primary/20"></div>
                  <div className="p-3 rounded-lg bg-background/80 border border-primary/10 shadow-sm">
                    <h5 className="font-medium text-sm">Couche de sortie</h5>
                    <p className="text-xs text-muted-foreground">Génère les prédictions finales</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Computer Vision */}
        <Card className="border-primary/10 shadow-md animate-fade-in">
          <CardHeader className="pb-3">
            <div className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
              <Layers size={24} className="text-primary" />
            </div>
            <CardTitle className="text-xl">Vision par ordinateur</CardTitle>
            <CardDescription>Analyse et compréhension d'images et vidéos</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm text-muted-foreground">
              La vision par ordinateur permet aux machines d'interpréter et d'extraire des informations pertinentes à partir d'images et de vidéos.
            </p>
            <div className="space-y-2">
              <div className="bg-secondary/20 p-2 rounded text-sm">
                <p className="font-medium">Réseaux de neurones convolutifs (CNN)</p>
                <p className="text-xs text-muted-foreground">Architecture spécialisée pour l'extraction de caractéristiques visuelles</p>
              </div>
              <div className="bg-secondary/20 p-2 rounded text-sm">
                <p className="font-medium">Applications</p>
                <p className="text-xs text-muted-foreground">Reconnaissance faciale, détection d'objets, segmentation d'images</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Natural Language Processing */}
        <Card className="border-primary/10 shadow-md animate-fade-in" style={{ animationDelay: '100ms' }}>
          <CardHeader className="pb-3">
            <div className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
              <Code size={24} className="text-primary" />
            </div>
            <CardTitle className="text-xl">Traitement du langage naturel</CardTitle>
            <CardDescription>Analyse et compréhension du langage humain</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm text-muted-foreground">
              Le NLP permet aux machines de comprendre, interpréter et générer du langage humain sous forme écrite ou parlée.
            </p>
            <div className="space-y-2">
              <div className="bg-secondary/20 p-2 rounded text-sm">
                <p className="font-medium">Architectures Transformer</p>
                <p className="text-xs text-muted-foreground">Modèles basés sur l'attention comme BERT, GPT, utilisés pour comprendre le contexte</p>
              </div>
              <div className="bg-secondary/20 p-2 rounded text-sm">
                <p className="font-medium">Applications</p>
                <p className="text-xs text-muted-foreground">Traduction automatique, résumé de texte, création de contenu, chatbots</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Generative AI */}
        <Card className="border-primary/10 shadow-md animate-fade-in" style={{ animationDelay: '200ms' }}>
          <CardHeader className="pb-3">
            <div className="mb-3 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10">
              <BarChart3 size={24} className="text-primary" />
            </div>
            <CardTitle className="text-xl">IA générative</CardTitle>
            <CardDescription>Création de contenu original</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm text-muted-foreground">
              L'IA générative permet de créer de nouveaux contenus (images, textes, sons) qui n'existaient pas auparavant.
            </p>
            <div className="space-y-2">
              <div className="bg-secondary/20 p-2 rounded text-sm">
                <p className="font-medium">Réseaux antagonistes génératifs (GAN)</p>
                <p className="text-xs text-muted-foreground">Deux réseaux en compétition pour générer des données réalistes</p>
              </div>
              <div className="bg-secondary/20 p-2 rounded text-sm">
                <p className="font-medium">Diffusion models</p>
                <p className="text-xs text-muted-foreground">Modèles qui apprennent progressivement à débruiter des données</p>
              </div>
              <div className="bg-secondary/20 p-2 rounded text-sm">
                <p className="font-medium">Applications</p>
                <p className="text-xs text-muted-foreground">Génération d'images, de musique, de textes créatifs</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 p-6 rounded-xl bg-primary/5 border border-primary/10 animate-fade-in" style={{ animationDelay: '300ms' }}>
        <h3 className="text-lg font-semibold mb-2">Tendances émergentes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-background/60 p-4 rounded-lg border border-primary/10">
            <h4 className="font-medium mb-1">Apprentissage contrastif</h4>
            <p className="text-sm text-muted-foreground">
              Technique permettant d'apprendre des représentations utiles en rapprochant des exemples similaires et en éloignant des exemples différents
            </p>
          </div>
          <div className="bg-background/60 p-4 rounded-lg border border-primary/10">
            <h4 className="font-medium mb-1">Apprentissage auto-supervisé</h4>
            <p className="text-sm text-muted-foreground">
              Approche utilisant la structure inhérente des données pour générer automatiquement des signaux de supervision
            </p>
          </div>
          <div className="bg-background/60 p-4 rounded-lg border border-primary/10">
            <h4 className="font-medium mb-1">Few-shot learning</h4>
            <p className="text-sm text-muted-foreground">
              Capacité à apprendre à partir d'un très petit nombre d'exemples, similaire à l'apprentissage humain
            </p>
          </div>
          <div className="bg-background/60 p-4 rounded-lg border border-primary/10">
            <h4 className="font-medium mb-1">Modèles multi-modaux</h4>
            <p className="text-sm text-muted-foreground">
              Architectures capables de traiter et de comprendre simultanément plusieurs types de données (texte, image, son)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeepLearning;
