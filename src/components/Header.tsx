import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

/**
 * Composant d'en-tête avec navigation responsive améliorée
 * @returns {JSX.Element} Le composant Header
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Fermer le menu lorsque la route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Empêcher le défilement lorsque le menu est ouvert sur mobile
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const navLine1 = [
    { text: "Les bases", href: "/les-bases" },
    { text: "Types d'IA", href: "/types-ia" },
    { text: "Niveaux d'IA", href: "/niveaux-ia" },
    { text: "Machine Learning", href: "/machine-learning" },
    { text: "Deep Learning", href: "/deep-learning" },
    { text: "NLP", href: "/cours/nlp-comprehension" },
  ];

  const navLine2 = [
    { text: "LLM", href: "/types-ia/llm" },
    { text: "IA Multimodale", href: "/ia-multimodale" },
    { text: "Cas d'usage", href: "/cas-usage" },
    { text: "Outils IA", href: "/generateur-prompts" },
    { text: "Éthique", href: "/ethique" },
    { text: "Actualités", href: "/actualites" },
    { text: "Ressources", href: "/ressources" },
  ];

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleMenuClose = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-2 md:py-3">
          <div className="hidden md:flex items-center justify-between w-full">
            {/* Titre à gauche sur 2 lignes avec animation au survol */}
            <div className="flex-shrink-0 mr-8">
              <Link
                to="/"
                className="group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:rounded-md"
                aria-label="Accueil - Explorons l'IA"
              >
                <div className="leading-tight">
                  <div className="flex gap-0.5">
                    {"Explorons".split("").map((ch, i) => (
                      <span
                        key={`exp-${i}`}
                        className="inline-block font-bold text-2xl text-foreground transition-all duration-300 group-hover:animate-pulse"
                        style={{
                          animationDelay: `${i * 50}ms`,
                          transform: "translateY(0)",
                          transition: "transform 0.3s ease-out",
                        }}
                      >
                        {ch}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-0.5">
                    {"l'IA".split("").map((ch, i) => (
                      <span
                        key={`ia-${i}`}
                        className="inline-block font-bold text-2xl text-violet-500 transition-all duration-300 group-hover:animate-pulse"
                        style={{
                          animationDelay: `${(i + 8) * 50}ms`,
                          transform: "translateY(0)",
                          transition: "transform 0.3s ease-out",
                        }}
                      >
                        {ch}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
              <style>{`
                .group:hover span {
                  animation: letterHover 0.6s ease-out forwards;
                }
                @keyframes letterHover {
                  0% { transform: translateY(0) scale(1); }
                  30% { transform: translateY(-3px) scale(1.05); }
                  100% { transform: translateY(0) scale(1); }
                }
              `}</style>
            </div>

            {/* Navigation desktop sur deux lignes avec meilleure répartition */}
            <nav 
              className="flex-1 max-w-4xl"
              role="navigation"
              aria-label="Navigation principale"
            >
              <div className="flex items-center justify-end gap-3 mb-2">
                {navLine1.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                      pathname === link.href
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'hover:bg-muted hover:text-foreground hover:shadow-sm'
                    }`}
                    aria-current={pathname === link.href ? 'page' : undefined}
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
              <div className="flex items-center justify-end gap-3">
                {navLine2.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                      pathname === link.href
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'hover:bg-muted hover:text-foreground hover:shadow-sm'
                    }`}
                    aria-current={pathname === link.href ? 'page' : undefined}
                  >
                    {link.text}
                  </Link>
                ))}
                <div className="ml-2 pl-2 border-l border-border">
                  <ThemeToggle />
                </div>
              </div>
            </nav>
          </div>

          {/* Boutons mobile */}
          <div className="flex items-center md:hidden justify-between h-10 mt-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={handleMenuToggle}
              className="ml-2 focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          {/* Boutons mobile */}
          <div className="flex items-center md:hidden justify-between h-10 mt-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={handleMenuToggle}
              className="ml-2 focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </header>

      {/* Menu mobile amélioré */}
      <MobileMenu isOpen={isMenuOpen} onClose={handleMenuClose} />
    </>
  );
};

export default Header;
