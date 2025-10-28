
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

/**
 * Fournisseur de thème pour l'application
 * @param {object} props - Props du composant
 * @param {React.ReactNode} props.children - Composants enfants
 * @param {Theme} props.defaultTheme - Thème par défaut (dark, light, ou system)
 * @param {string} props.storageKey - Clé pour stocker le thème dans localStorage
 * @returns {JSX.Element} Le fournisseur de thème
 */
export const ThemeProvider = ({
  children,
  defaultTheme = "system",
  storageKey = "theme"
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Vérifier s'il y a un thème sauvegardé dans localStorage
    const savedTheme = localStorage.getItem(storageKey) as Theme;
    
    // Si le thème par défaut est "system", vérifier la préférence système
    if (defaultTheme === "system" || !savedTheme) {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return savedTheme || (prefersDark ? "dark" : "light");
    }
    
    // Utiliser le thème sauvegardé ou le thème par défaut
    return savedTheme || defaultTheme;
  });

  // Appliquer la classe dark au body lorsque le thème change
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
    
    // Sauvegarder le thème dans localStorage
    localStorage.setItem(storageKey, theme);
  }, [theme, storageKey]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Hook pour accéder au contexte de thème
 * @returns {ThemeContextType} Contexte de thème
 */
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme doit être utilisé au sein d'un ThemeProvider");
  }
  return context;
};
