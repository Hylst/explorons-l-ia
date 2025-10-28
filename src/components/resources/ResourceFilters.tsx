
import React from 'react';
import { Search, } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

interface ResourceFiltersProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedLevel: string;
  setSelectedLevel: (value: string) => void;
  selectedTopic: string;
  setSelectedTopic: (value: string) => void;
  selectedYear: string;
  setSelectedYear: (value: string) => void;
  selectedLanguage: string;
  setSelectedLanguage: (value: string) => void;
  allTopics: string[];
  allYears: (number | undefined)[];
}

export const ResourceFilters: React.FC<ResourceFiltersProps> = ({
  searchTerm,
  setSearchTerm,
  selectedLevel,
  setSelectedLevel,
  selectedTopic,
  setSelectedTopic,
  selectedYear,
  setSelectedYear,
  selectedLanguage,
  setSelectedLanguage,
  allTopics,
  allYears
}) => {
  return (
    <div className="flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4 mb-8">
      <div className="relative flex-grow">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Rechercher des ressources..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-9"
        />
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <Select value={selectedLevel} onValueChange={setSelectedLevel}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Niveau" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous niveaux</SelectItem>
            <SelectItem value="Débutant">Débutant</SelectItem>
            <SelectItem value="Intermédiaire">Intermédiaire</SelectItem>
            <SelectItem value="Avancé">Avancé</SelectItem>
            <SelectItem value="Tous niveaux">Tous niveaux</SelectItem>
          </SelectContent>
        </Select>
        
        <Select value={selectedTopic} onValueChange={setSelectedTopic}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Sujet" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tous sujets</SelectItem>
            {allTopics.map(topic => (
              <SelectItem key={topic} value={topic}>{topic}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Select value={selectedYear} onValueChange={setSelectedYear}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Année" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Toutes années</SelectItem>
            {allYears.map(year => (
              <SelectItem key={year} value={year?.toString() || ''}>{year}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        
        <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Langue" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Toutes langues</SelectItem>
            <SelectItem value="FR">Français</SelectItem>
            <SelectItem value="EN">Anglais</SelectItem>
            <SelectItem value="Other">Autre</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ResourceFilters;
