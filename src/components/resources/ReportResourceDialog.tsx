
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { userReportService } from '@/services/userReportService';
import { UserReport } from '@/services/linkAuditService';

interface ReportResourceDialogProps {
  isOpen: boolean;
  onClose: () => void;
  resourceId: string;
  resourceTitle: string;
}

const REPORT_TYPES: Array<{ value: UserReport['reportType']; label: string }> = [
  { value: 'broken-link', label: 'Lien cassé' },
  { value: 'incorrect-content', label: 'Contenu incorrect' },
  { value: 'outdated', label: 'Contenu obsolète' },
  { value: 'spam', label: 'Spam ou contenu inapproprié' },
  { value: 'other', label: 'Autre' }
];

export const ReportResourceDialog: React.FC<ReportResourceDialogProps> = ({
  isOpen,
  onClose,
  resourceId,
  resourceTitle
}) => {
  const [reportType, setReportType] = useState<UserReport['reportType'] | ''>('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!reportType || !description.trim()) {
      toast.error('Veuillez remplir tous les champs');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const reportId = userReportService.submitReport({
        resourceId,
        reportType,
        description: description.trim()
      });

      toast.success('Votre signalement a été envoyé. Merci de nous aider à améliorer la qualité des ressources !');
      
      // Reset du formulaire
      setReportType('');
      setDescription('');
      onClose();
      
    } catch (error) {
      console.error('Erreur lors de l\'envoi du signalement:', error);
      toast.error('Erreur lors de l\'envoi du signalement. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Signaler un problème</DialogTitle>
          <DialogDescription>
            Ressource : "{resourceTitle}"
            <br />
            Aidez-nous à maintenir la qualité des ressources en signalant les problèmes que vous rencontrez.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="report-type">Type de problème</Label>
            <Select value={reportType} onValueChange={(value) => setReportType(value as UserReport['reportType'])}>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionnez le type de problème" />
              </SelectTrigger>
              <SelectContent>
                {REPORT_TYPES.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description du problème</Label>
            <Textarea
              id="description"
              placeholder="Décrivez le problème que vous avez rencontré..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              required
            />
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Annuler
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Envoi...' : 'Envoyer le signalement'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
