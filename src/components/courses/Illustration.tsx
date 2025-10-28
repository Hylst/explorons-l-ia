
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from 'lucide-react';

interface IllustrationProps {
  src: string;
  alt: string;
  caption?: string;
  width?: string;
}

const Illustration: React.FC<IllustrationProps> = ({ 
  src, 
  alt, 
  caption,
  width = "full" 
}) => {
  const widthClasses = {
    "full": "w-full",
    "2/3": "w-full md:w-2/3 mx-auto",
    "1/2": "w-full md:w-1/2 mx-auto",
  }[width] || "w-full";
  
  return (
    <div className={`my-6 ${widthClasses}`}>
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <img 
            src={src} 
            alt={alt} 
            className="w-full h-auto"
          />
        </CardContent>
      </Card>
      {caption && (
        <div className="flex items-center gap-2 mt-2 text-sm text-center justify-center text-muted-foreground">
          <Image className="h-4 w-4" />
          <p>{caption}</p>
        </div>
      )}
    </div>
  );
};

export default Illustration;
