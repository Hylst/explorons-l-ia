
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle
} from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";
import IAQuiz from './IAQuiz';

export const QuizDialog = ({ 
  isOpen, 
  onClose 
}: { 
  isOpen: boolean; 
  onClose: () => void;
}) => {
  const isMobile = useIsMobile();

  // Use Drawer for mobile, Dialog for desktop
  if (isMobile) {
    return (
      <Drawer open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <DrawerContent className="px-4 pb-6 pt-4 max-h-[90vh] overflow-y-auto">
          <DrawerHeader className="px-0">
            <DrawerTitle>Quiz IA</DrawerTitle>
          </DrawerHeader>
          <IAQuiz onClose={onClose} />
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Quiz IA</DialogTitle>
        </DialogHeader>
        <IAQuiz onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
};
