
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, FileText, Image, Music } from 'lucide-react';

interface FileUploaderProps {
  onFilesSelected: (files: File[]) => void;
  acceptedTypes?: string[];
  maxFiles?: number;
}

export const FileUploader: React.FC<FileUploaderProps> = ({
  onFilesSelected,
  acceptedTypes = ['text/*', 'image/*', 'audio/*'],
  maxFiles = 10
}) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onFilesSelected(acceptedFiles);
  }, [onFilesSelected]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'text/*': ['.txt', '.doc', '.docx', '.pdf'],
      'image/*': ['.jpg', '.jpeg', '.png', '.gif', '.webp'],
      'audio/*': ['.mp3', '.wav', '.ogg', '.m4a']
    },
    maxFiles
  });

  const getFileTypeIcon = (type: string) => {
    if (type.includes('text')) return <FileText className="h-8 w-8" />;
    if (type.includes('image')) return <Image className="h-8 w-8" />;
    if (type.includes('audio')) return <Music className="h-8 w-8" />;
    return <Upload className="h-8 w-8" />;
  };

  return (
    <Card className="border-2 border-dashed border-border hover:border-primary transition-colors">
      <CardContent className="p-8">
        <div 
          {...getRootProps()} 
          className={`text-center cursor-pointer transition-colors ${
            isDragActive ? 'text-primary' : 'text-muted-foreground'
          }`}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center gap-4">
            <div className="p-4 rounded-full bg-primary/10">
              <Upload className="h-12 w-12 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                {isDragActive ? 'Déposez vos fichiers ici' : 'Glissez vos fichiers ou cliquez pour sélectionner'}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Formats supportés : Texte, Images, Audio (max {maxFiles} fichiers)
              </p>
              <div className="flex justify-center gap-4 text-muted-foreground">
                {acceptedTypes.map((type, index) => (
                  <div key={index} className="flex items-center gap-1">
                    {getFileTypeIcon(type)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
