import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";

const PasswordForm = ({ onPasswordVerified }: { onPasswordVerified: () => void }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const verifyPassword = () => {
    const currentDay = new Date().getDate(); // Gets the day of the month (1-31)
    const correctPassword = `farine${currentDay}`;
    
    if (password === correctPassword) {
      onPasswordVerified();
      setError('');
    } else {
      setError('Mot de passe incorrect');
    }
  };

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <p className="text-muted-foreground">
          Cette fonctionnalité est réservée aux administrateurs. Veuillez entrer le mot de passe pour continuer.
        </p>
      </div>
      
      <div className="space-y-2">
        <Input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full"
        />
        {error && <p className="text-destructive text-sm">{error}</p>}
      </div>
      
      <Button onClick={verifyPassword} className="w-full">
        Continuer
      </Button>
    </div>
  );
};

const resourceSchema = z.object({
  title: z.string().min(3, "Le titre doit contenir au moins 3 caractères"),
  author: z.string().min(2, "L'auteur doit contenir au moins 2 caractères"),
  description: z.string().min(10, "La description doit contenir au moins 10 caractères"),
  link: z.string().url("Veuillez entrer une URL valide"),
  type: z.enum(["book", "article", "video", "course", "website"]),
  level: z.enum(["Débutant", "Intermédiaire", "Avancé", "Tous niveaux"]),
  language: z.enum(["FR", "EN"]),
  year: z.number().min(1950).max(new Date().getFullYear()).optional(),
  topics: z.string().optional()
});

type ResourceFormValues = z.infer<typeof resourceSchema>;

export const AddResourceForm = ({ 
  isOpen, 
  onClose 
}: { 
  isOpen: boolean; 
  onClose: () => void;
}) => {
  const [isPasswordVerified, setIsPasswordVerified] = useState(false);
  const isMobile = useIsMobile();
  
  const form = useForm<ResourceFormValues>({
    resolver: zodResolver(resourceSchema),
    defaultValues: {
      title: "",
      author: "",
      description: "",
      link: "",
      type: "article",
      level: "Tous niveaux",
      language: "FR",
      topics: ""
    }
  });

  const onSubmit = (data: ResourceFormValues) => {
    // In a real app, this would send the data to a server
    console.log("Resource submitted:", data);
    
    toast({
      title: "Ressource proposée avec succès",
      description: "Votre ressource sera examinée par un administrateur avant d'être publiée."
    });
    
    form.reset();
    onClose();
    setIsPasswordVerified(false);
  };

  const handleClose = () => {
    form.reset();
    onClose();
    setIsPasswordVerified(false);
  };

  const FormContent = (
    <>
      {!isPasswordVerified ? (
        <PasswordForm onPasswordVerified={() => setIsPasswordVerified(true)} />
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Titre *</FormLabel>
                  <FormControl>
                    <Input placeholder="Titre de la ressource" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Auteur *</FormLabel>
                  <FormControl>
                    <Input placeholder="Auteur ou organisation" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type *</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Type de ressource" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="article">Article</SelectItem>
                        <SelectItem value="book">Livre</SelectItem>
                        <SelectItem value="video">Vidéo</SelectItem>
                        <SelectItem value="course">Cours</SelectItem>
                        <SelectItem value="website">Site Web</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="level"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Niveau *</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Niveau" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Débutant">Débutant</SelectItem>
                        <SelectItem value="Intermédiaire">Intermédiaire</SelectItem>
                        <SelectItem value="Avancé">Avancé</SelectItem>
                        <SelectItem value="Tous niveaux">Tous niveaux</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="language"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Langue *</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Langue" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="FR">Français</SelectItem>
                        <SelectItem value="EN">Anglais</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="year"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Année de publication</FormLabel>
                  <FormControl>
                    <Input 
                      type="number" 
                      placeholder="Année (ex: 2023)" 
                      min={1950}
                      max={new Date().getFullYear()}
                      onChange={e => field.onChange(e.target.value ? parseInt(e.target.value) : undefined)}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormDescription>
                    Année de publication de la ressource (optionnel)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description *</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Description de la ressource" 
                      className="min-h-[100px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="topics"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sujets</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Sujets séparés par des virgules (ex: deep learning, éthique, NLP)" 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    Liste de sujets abordés, séparés par des virgules (optionnel)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lien *</FormLabel>
                  <FormControl>
                    <Input placeholder="https://exemple.fr" {...field} />
                  </FormControl>
                  <FormDescription>
                    URL de la ressource (commençant par http:// ou https://)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <DialogFooter>
              <Button type="button" variant="outline" onClick={handleClose}>
                Annuler
              </Button>
              <Button type="submit">Soumettre</Button>
            </DialogFooter>
          </form>
        </Form>
      )}
    </>
  );

  // Use Drawer for mobile, Dialog for desktop
  if (isMobile) {
    return (
      <Drawer open={isOpen} onOpenChange={(open) => !open && handleClose()}>
        <DrawerContent className="px-4 pb-6 pt-4 max-h-[90vh] overflow-y-auto">
          <div className="mx-auto w-full max-w-lg">
            <h3 className="text-lg font-semibold mb-4 text-center">
              {!isPasswordVerified ? "Accès limité" : "Proposer une ressource"}
            </h3>
            {FormContent}
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {!isPasswordVerified ? "Accès limité" : "Proposer une ressource"}
          </DialogTitle>
          <DialogDescription>
            {!isPasswordVerified 
              ? "Cette fonctionnalité est protégée par un mot de passe."
              : "Remplissez le formulaire ci-dessous pour proposer une ressource."
            }
          </DialogDescription>
        </DialogHeader>
        {FormContent}
      </DialogContent>
    </Dialog>
  );
};
