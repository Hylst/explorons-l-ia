import React, { useState } from 'react';
import Hero from '@/components/Hero';
import SectionHeading from '@/components/SectionHeading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useConsent } from '@/hooks/useConsent';
import { 
  Download, 
  Trash2, 
  Eye, 
  Edit3, 
  Shield, 
  CheckCircle, 
  Mail,
  Settings,
  FileText
} from 'lucide-react';
import { toast } from 'sonner';

const GestionDonneesRGPD = () => {
  const { preferences, revokeConsent, hasConsented } = useConsent();
  const [requestForm, setRequestForm] = useState({
    type: '',
    email: '',
    message: ''
  });

  const handleExportData = () => {
    const userData = {
      consentPreferences: preferences,
      consentDate: localStorage.getItem('ai-avenir-consent-date'),
      localStorageData: {
        theme: localStorage.getItem('theme'),
        usageCount: localStorage.getItem('ai-assistant-usage'),
        savedPrompts: localStorage.getItem('saved-prompts'),
        calculatorHistory: localStorage.getItem('calculator-history')
      },
      exportDate: new Date().toISOString()
    };

    const dataStr = JSON.stringify(userData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `ai-avenir-donnees-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    toast.success('Vos données ont été exportées avec succès');
  };

  const handleDeleteAllData = () => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer toutes vos données ? Cette action est irréversible.')) {
      // Supprimer toutes les données localStorage liées à l'application
      const keysToRemove = [
        'ai-avenir-consent',
        'ai-avenir-consent-date',
        'theme',
        'ai-assistant-usage',
        'saved-prompts',
        'calculator-history'
      ];
      
      keysToRemove.forEach(key => localStorage.removeItem(key));
      revokeConsent();
      
      toast.success('Toutes vos données ont été supprimées');
    }
  };

  const handleRightRequest = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Demande RGPD - ${requestForm.type}`;
    const body = `Bonjour,

Je souhaite exercer mon droit ${requestForm.type} concernant mes données personnelles sur AI Avenir.

Email de contact : ${requestForm.email}

Message :
${requestForm.message}

Cordialement`;

    const mailtoLink = `mailto:geoffroy.streit@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
    
    toast.success('Votre demande a été préparée. Envoyez l\'email pour la soumettre.');
  };

  return (
    <>
      <Hero
        title="Gestion de vos données personnelles"
        subtitle="Exercez vos droits RGPD et gérez vos données en toute transparence"
      />

      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
              <TabsTrigger value="rights">Exercer mes droits</TabsTrigger>
              <TabsTrigger value="consent">Consentements</TabsTrigger>
              <TabsTrigger value="data">Mes données</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    État de vos données sur AI Avenir
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="font-medium">Consentement</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {hasConsented ? 'Consentement donné et enregistré' : 'Aucun consentement enregistré'}
                      </p>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="h-5 w-5 text-blue-600" />
                        <span className="font-medium">Données stockées</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Uniquement sur votre appareil (localStorage)
                      </p>
                    </div>
                  </div>

                  <Alert>
                    <Shield className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Transparence totale :</strong> Nous ne collectons que le strict minimum de données 
                      nécessaires au fonctionnement du site. Toutes vos données sont stockées localement 
                      sur votre appareil, sauf les conversations avec l'assistant IA qui sont traitées par nos partenaires.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="rights" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Edit3 className="h-5 w-5" />
                    Exercer vos droits RGPD
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleRightRequest} className="space-y-4">
                    <div>
                      <Label htmlFor="request-type">Type de demande</Label>
                      <select 
                        id="request-type"
                        className="w-full p-2 border rounded-md"
                        value={requestForm.type}
                        onChange={(e) => setRequestForm({...requestForm, type: e.target.value})}
                        required
                      >
                        <option value="">Sélectionnez un droit</option>
                        <option value="d'accès">Droit d'accès - Voir quelles données nous avons</option>
                        <option value="de rectification">Droit de rectification - Corriger mes données</option>
                        <option value="à l'effacement">Droit à l'effacement - Supprimer mes données</option>
                        <option value="à la limitation">Droit à la limitation - Limiter l'usage de mes données</option>
                        <option value="d'opposition">Droit d'opposition - M'opposer au traitement</option>
                        <option value="à la portabilité">Droit à la portabilité - Récupérer mes données</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="email">Votre email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={requestForm.email}
                        onChange={(e) => setRequestForm({...requestForm, email: e.target.value})}
                        placeholder="votre@email.com"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message (optionnel)</Label>
                      <Textarea
                        id="message"
                        value={requestForm.message}
                        onChange={(e) => setRequestForm({...requestForm, message: e.target.value})}
                        placeholder="Décrivez votre demande en détail..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      <Mail className="h-4 w-4 mr-2" />
                      Envoyer ma demande
                    </Button>
                  </form>

                  <Alert className="mt-4">
                    <AlertDescription>
                      <strong>Délai de réponse :</strong> Nous nous engageons à répondre à votre demande 
                      dans un délai d'un mois maximum, conformément au RGPD.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="consent" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Gérer vos consentements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <h3 className="font-medium">État actuel de vos consentements :</h3>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span>Cookies essentiels</span>
                        <span className="text-green-600 font-medium">✓ Accepté</span>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span>Préférences utilisateur</span>
                        <span className={preferences.functional ? "text-green-600" : "text-red-600"}>
                          {preferences.functional ? "✓ Accepté" : "✗ Refusé"}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 bg-muted/50 rounded-lg">
                        <span>Analytics</span>
                        <span className={preferences.analytics ? "text-green-600" : "text-red-600"}>
                          {preferences.analytics ? "✓ Accepté" : "✗ Refusé"}
                        </span>
                      </div>
                    </div>

                    <Button 
                      onClick={revokeConsent}
                      variant="outline"
                      className="w-full mt-4"
                    >
                      Révoquer tous mes consentements
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="data" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-5 w-5" />
                    Vos données stockées
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Voici les données que nous stockons localement sur votre appareil :
                  </p>

                  <div className="space-y-3">
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <strong>Préférences :</strong> Thème, paramètres d'affichage
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <strong>Consentements :</strong> Vos choix de confidentialité
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <strong>Usage :</strong> Compteurs d'utilisation des outils
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <strong>Créations :</strong> Prompts sauvegardés, configurations d'outils
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button onClick={handleExportData} className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      Exporter mes données
                    </Button>
                    
                    <Button 
                      onClick={handleDeleteAllData}
                      variant="destructive" 
                      className="flex-1"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Supprimer toutes mes données
                    </Button>
                  </div>

                  <Alert>
                    <AlertDescription>
                      <strong>Important :</strong> La suppression de vos données effacera tous vos paramètres 
                      et créations sauvegardées. Cette action est irréversible.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default GestionDonneesRGPD;