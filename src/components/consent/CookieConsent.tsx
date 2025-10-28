import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Cookie, Settings, Shield } from 'lucide-react';
import { useConsent, ConsentPreferences } from '@/hooks/useConsent';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const { 
    showBanner, 
    preferences, 
    acceptAll, 
    acceptNecessaryOnly, 
    saveConsent 
  } = useConsent();
  
  const [tempPreferences, setTempPreferences] = useState<ConsentPreferences>(preferences);
  const [showDetails, setShowDetails] = useState(false);

  if (!showBanner) return null;

  const handlePreferenceChange = (key: keyof ConsentPreferences, checked: boolean) => {
    setTempPreferences(prev => ({
      ...prev,
      [key]: checked
    }));
  };

  const handleSavePreferences = () => {
    saveConsent(tempPreferences);
    setShowDetails(false);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur border-t shadow-lg">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <Cookie className="h-6 w-6 text-primary mt-1" />
              </div>
              
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-2">
                  Gestion des cookies et données personnelles
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Nous utilisons des cookies et stockons des données localement pour améliorer votre expérience. 
                  Vous pouvez choisir quels types de données vous acceptez de partager.{' '}
                  <Link 
                    to="/confidentialite" 
                    className="text-primary hover:underline"
                  >
                    En savoir plus
                  </Link>
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <Button
                    onClick={acceptAll}
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Accepter tout
                  </Button>
                  
                  <Button
                    onClick={acceptNecessaryOnly}
                    variant="secondary"
                  >
                    Essentiel uniquement
                  </Button>
                  
                  <Dialog open={showDetails} onOpenChange={setShowDetails}>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Settings className="h-4 w-4 mr-1" />
                        Personnaliser
                      </Button>
                    </DialogTrigger>
                    
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                          <Shield className="h-5 w-5" />
                          Préférences de confidentialité
                        </DialogTitle>
                        <DialogDescription>
                          Choisissez les types de données que vous acceptez de partager
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-4">
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <Checkbox
                              id="necessary"
                              checked={true}
                              disabled
                              className="mt-1"
                            />
                            <div className="flex-1">
                              <label htmlFor="necessary" className="text-sm font-medium">
                                Cookies essentiels
                              </label>
                              <p className="text-xs text-muted-foreground">
                                Nécessaires au fonctionnement du site
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-start space-x-3">
                            <Checkbox
                              id="functional"
                              checked={tempPreferences.functional}
                              onCheckedChange={(checked) => 
                                handlePreferenceChange('functional', checked as boolean)
                              }
                              className="mt-1"
                            />
                            <div className="flex-1">
                              <label htmlFor="functional" className="text-sm font-medium">
                                Préférences utilisateur
                              </label>
                              <p className="text-xs text-muted-foreground">
                                Mémorisation de vos choix (thème, langue, outils utilisés)
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-start space-x-3">
                            <Checkbox
                              id="analytics"
                              checked={tempPreferences.analytics}
                              onCheckedChange={(checked) => 
                                handlePreferenceChange('analytics', checked as boolean)
                              }
                              className="mt-1"
                            />
                            <div className="flex-1">
                              <label htmlFor="analytics" className="text-sm font-medium">
                                Analytics
                              </label>
                              <p className="text-xs text-muted-foreground">
                                Statistiques d'usage anonymes pour améliorer le site
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex justify-end space-x-2 pt-4">
                          <Button
                            variant="outline"
                            onClick={() => setShowDetails(false)}
                          >
                            Annuler
                          </Button>
                          <Button onClick={handleSavePreferences}>
                            Enregistrer
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CookieConsent;