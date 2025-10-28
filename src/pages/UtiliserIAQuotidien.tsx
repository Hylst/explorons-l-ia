
import React from 'react';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Smartphone, 
  Mail, 
  Search, 
  Calendar, 
  Camera, 
  MessageSquare, 
  BookOpen, 
  Shield, 
  Lightbulb,
  Target,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  User,
  Clock,
  Globe
} from 'lucide-react';

const UtiliserIAQuotidien = () => {
  return (
    <>
      <Hero
        title="Comment utiliser intelligemment les intelligences artificielles au quotidien"
        subtitle="Guide pratique pour intégrer efficacement l'IA dans votre vie personnelle et professionnelle"
      />

      <section className="section-container">
        {/* En-tête du cours */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex flex-wrap gap-3 mb-6">
            <Badge variant="default">Usage quotidien</Badge>
            <Badge variant="secondary">Productivité</Badge>
            <Badge variant="outline">Débutant</Badge>
            <Badge variant="outline">2024</Badge>
          </div>
          
          <div className="bg-muted/50 rounded-lg p-6 mb-8">
            <div className="flex items-center gap-4 mb-4">
              <User className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium">Auteur : Geoffroy Streit</p>
                <p className="text-sm text-muted-foreground">Consultant passionné en Intelligence Artificielle</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Durée estimée : 2-3 heures</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-primary" />
                <span>Niveau : Débutant</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-primary" />
                <span>Public : Particuliers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <SectionHeading
            title="Introduction"
            description="L'intelligence artificielle n'est plus une technologie du futur, elle fait déjà partie de notre quotidien. Ce cours vous apprend à l'utiliser de manière intelligente et responsable."
          />
          
          <Card className="mt-6">
            <CardContent className="pt-6">
              <p className="text-lg mb-4">
                Chaque jour, vous utilisez probablement déjà plusieurs outils d'IA sans vous en rendre compte : 
                votre smartphone, vos applications de navigation, vos plateformes de streaming, vos moteurs de recherche...
              </p>
              <p className="mb-4">
                Ce cours vous permettra de comprendre comment optimiser ces usages et découvrir de nouveaux outils 
                pour améliorer votre productivité personnelle et professionnelle, tout en restant conscient des enjeux éthiques.
              </p>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <h4 className="font-medium flex items-center gap-2 mb-2">
                  <Lightbulb className="h-4 w-4" />
                  Objectif principal
                </h4>
                <p className="text-sm">
                  Devenir un utilisateur averti et efficace de l'IA au quotidien, 
                  capable de tirer parti de ses avantages tout en évitant ses pièges.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Module 1 : Reconnaissance de l'IA */}
        <div className="max-w-4xl mx-auto mb-16">
          <SectionHeading
            title="Module 1 : Reconnaître l'IA dans votre quotidien"
            description="Identifiez les outils d'IA que vous utilisez déjà sans le savoir"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Smartphone className="h-5 w-5 text-primary" />
                  Smartphone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Assistant vocal (Siri, Google Assistant)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Reconnaissance faciale pour le déverrouillage
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Correction automatique et prédiction de texte
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Organisation automatique des photos
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Search className="h-5 w-5 text-primary" />
                  Navigation & Recherche
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Optimisation d'itinéraires GPS
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Algorithmes de recherche Google
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Recommandations de lieux
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Prédiction du trafic
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Mail className="h-5 w-5 text-primary" />
                  Communication
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Filtrage anti-spam
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Traduction automatique
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Suggestions de réponse automatique
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                    Transcription vocale
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Module 2 : Optimiser l'usage actuel */}
        <div className="max-w-4xl mx-auto mb-16">
          <SectionHeading
            title="Module 2 : Optimiser vos outils actuels"
            description="Tirez le meilleur parti des IA que vous utilisez déjà"
          />
          
          <div className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Assistants vocaux : au-delà des questions basiques
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3 text-green-600">✅ Utilisations efficaces</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Créer des listes de courses collaboratives</li>
                      <li>• Programmer des rappels contextuels</li>
                      <li>• Contrôler plusieurs appareils connectés</li>
                      <li>• Dicter des notes longues en mains-libres</li>
                      <li>• Obtenir des briefings d'actualités personnalisés</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3 text-amber-600">⚠️ Limites à connaître</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Écoute permanente (vie privée)</li>
                      <li>• Compréhension limitée du contexte</li>
                      <li>• Dépendance à internet</li>
                      <li>• Erreurs de reconnaissance vocale</li>
                      <li>• Stockage des données personnelles</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="h-5 w-5 text-primary" />
                  Photos et médias : organisation intelligente
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Techniques d'optimisation :</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Utilisez la recherche par visage pour retrouver rapidement des personnes</li>
                      <li>• Exploitez la reconnaissance d'objets ("chien", "montagne", "voiture")</li>
                      <li>• Organisez par lieux grâce à la géolocalisation</li>
                      <li>• Créez des albums automatiques pour les événements</li>
                      <li>• Partagez intelligemment selon les personnes présentes</li>
                    </ul>
                  </div>
                  <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                    <h4 className="font-medium flex items-center gap-2 mb-2 text-amber-800 dark:text-amber-200">
                      <Shield className="h-4 w-4" />
                      Conseil vie privée
                    </h4>
                    <p className="text-sm text-amber-700 dark:text-amber-300">
                      Vérifiez régulièrement les paramètres de partage automatique et 
                      désactivez la reconnaissance faciale si vous préférez plus de confidentialité.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Module 3 : Nouveaux outils d'IA */}
        <div className="max-w-4xl mx-auto mb-16">
          <SectionHeading
            title="Module 3 : Découvrir de nouveaux outils d'IA"
            description="Intégrez de nouveaux assistants IA pour booster votre productivité"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>ChatGPT et assistants conversationnels</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-medium">Usages pratiques :</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Rédaction et amélioration d'emails</li>
                    <li>• Planification de voyages</li>
                    <li>• Aide aux devoirs et apprentissage</li>
                    <li>• Brainstorming créatif</li>
                    <li>• Résumés de documents longs</li>
                  </ul>
                  <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3 mt-4">
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      <strong>Astuce :</strong> Soyez précis dans vos demandes et donnez du contexte 
                      pour obtenir des réponses plus pertinentes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Outils de création assistée</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-medium">Applications créatives :</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Génération d'images (DALL-E, Midjourney)</li>
                    <li>• Aide à l'écriture (Grammarly, DeepL)</li>
                    <li>• Création de présentations</li>
                    <li>• Montage photo automatique</li>
                    <li>• Composition musicale assistée</li>
                  </ul>
                  <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-lg p-3 mt-4">
                    <p className="text-sm text-purple-700 dark:text-purple-300">
                      <strong>Important :</strong> Toujours vérifier les droits d'usage et 
                      mentionner l'usage d'IA si requis.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Module 4 : Bonnes pratiques */}
        <div className="max-w-4xl mx-auto mb-16">
          <SectionHeading
            title="Module 4 : Bonnes pratiques et éthique"
            description="Utilisez l'IA de manière responsable et efficace"
          />
          
          <div className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Règles d'or de l'utilisation responsable
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3 text-green-600">✅ À faire</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Vérifier les informations importantes
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Garder votre esprit critique
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Respecter la confidentialité des données
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Mentionner l'usage d'IA quand nécessaire
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        Rester maître de vos décisions
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3 text-red-600">❌ À éviter</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        Faire confiance aveuglément
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        Partager des données sensibles
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        Déléguer des décisions importantes
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        Ignorer les biais potentiels
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                        Devenir dépendant des outils IA
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Protection de la vie privée</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <h4 className="font-medium">Actions concrètes :</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm">
                      <li>• Vérifiez les paramètres de confidentialité</li>
                      <li>• Limitez les données personnelles partagées</li>
                      <li>• Utilisez des comptes distincts si nécessaire</li>
                      <li>• Lisez les conditions d'utilisation des outils</li>
                    </ul>
                    <ul className="space-y-2 text-sm">
                      <li>• Supprimez régulièrement vos historiques</li>
                      <li>• Désactivez les fonctions non essentielles</li>
                      <li>• Préférez les alternatives respectueuses de la vie privée</li>
                      <li>• Sauvegardez vos données importantes localement</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Conclusion et ressources */}
        <div className="max-w-4xl mx-auto mb-16">
          <SectionHeading
            title="Conclusion : Devenir un utilisateur IA averti"
            description="Récapitulatif et prochaines étapes pour continuer votre apprentissage"
          />
          
          <Card className="mt-6">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3">Ce que vous avez appris :</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Identifier et optimiser les IA de votre quotidien
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Utiliser de nouveaux outils d'IA générative
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Adopter une approche éthique et responsable
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Protéger votre vie privée tout en profitant des avantages de l'IA
                    </li>
                  </ul>
                </div>

                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                  <h4 className="font-medium flex items-center gap-2 mb-3">
                    <ArrowRight className="h-4 w-4" />
                    Pour aller plus loin
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Explorez d'autres cours sur les aspects techniques de l'IA</li>
                    <li>• Participez à des communautés d'utilisateurs d'IA</li>
                    <li>• Testez régulièrement de nouveaux outils</li>
                    <li>• Restez informé des évolutions technologiques et réglementaires</li>
                    <li>• Partagez vos découvertes avec votre entourage</li>
                  </ul>
                </div>

                <div className="flex justify-center">
                  <Button asChild>
                    <a href="/ressources">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Explorer d'autres ressources
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default UtiliserIAQuotidien;
