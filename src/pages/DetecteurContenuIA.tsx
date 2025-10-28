
import React from 'react';
import Hero from '@/components/Hero';
import { AIContentDetector } from '@/components/detection/AIContentDetector';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, FileText, Image, Music, Zap, BarChart3, Download } from 'lucide-react';

const DetecteurContenuIA = () => {
  return (
    <>
      <Hero
        title="Détecteur de Contenu IA"
        subtitle="Analysez et détectez si un contenu (texte, image, audio) a été généré par une IA. Outil de vérification et d'authentification avec rapports détaillés."
      />
      
      <section className="section-container">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 bg-primary/10 px-4 py-2 rounded-lg mb-6">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium">Outil fonctionnel avec moteurs de détection avancés</span>
          </div>
        </div>

        {/* Fonctionnalités principales */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Détection de texte
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Analysez si un texte a été généré par ChatGPT, Claude, ou d'autres modèles de langage avec une précision élevée.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Analyse statistique avancée</li>
                <li>• Détection de patterns IA</li>
                <li>• Score de confiance détaillé</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Image className="h-5 w-5" />
                Analyse d'images
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Détectez si une image a été créée par Midjourney, DALL-E, Stable Diffusion ou autres générateurs d'IA.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Analyse des métadonnées EXIF</li>
                <li>• Détection d'artefacts</li>
                <li>• Inspection des patterns visuels</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Music className="h-5 w-5" />
                Détection audio
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Identifiez les voix synthétiques et la musique générée par IA avec des scores de confiance détaillés.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Analyse spectrale</li>
                <li>• Détection de voix clonées</li>
                <li>• Patterns de synthèse vocale</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Fonctionnalités avancées */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Analyse en temps réel
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Obtenez des résultats instantanés avec des explications détaillées pour chaque détection.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Rapports détaillés
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Générez des rapports complets avec scores de confiance, indicateurs et recommandations.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                Export et historique
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Sauvegardez vos analyses et exportez les résultats en JSON ou CSV pour vos besoins.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Interface principale */}
        <AIContentDetector />
      </section>
    </>
  );
};

export default DetecteurContenuIA;
