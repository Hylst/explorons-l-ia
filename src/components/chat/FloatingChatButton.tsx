
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MessageCircle, ShieldCheck } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import GeminiChat from './GeminiChat';
import PrivacyNotice from './PrivacyNotice';

const FloatingChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button 
            size="lg" 
            className="rounded-full h-14 w-14 shadow-lg hover:shadow-xl transition-shadow"
          >
            <MessageCircle className="h-6 w-6" />
            <span className="sr-only">Open AI Assistant</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full sm:w-[440px] sm:max-w-md p-0 flex flex-col">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-semibold">Assistant IA</h2>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="anonymous" 
                  checked={isAnonymous}
                  onCheckedChange={(checked) => setIsAnonymous(checked === true)}
                />
                <label htmlFor="anonymous" className="text-sm flex items-center gap-1">
                  <ShieldCheck className="h-3 w-3" />
                  Mode anonyme
                </label>
              </div>
            </div>
            <PrivacyNotice isAnonymous={isAnonymous} />
          </div>
          <div className="flex-1">
            <GeminiChat />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default FloatingChatButton;
