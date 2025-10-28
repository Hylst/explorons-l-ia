
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';
import AnimatedLogo from './AnimatedLogo';
import MobileMenu from './MobileMenu';

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
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { text: 'Les bases', href: '/les-bases' },
    { text: 'Types d\'IA', href: '/types-ia' },
    { text: 'Niveaux d\'IA', href: '/niveaux-ia' },
    { text: 'Machine Learning', href: '/machine-learning' },
    { text: 'IA Multimodale', href: '/ia-multimodale' },
    { text: 'Cas d\'usage', href: '/cas-usage' },
    { text: 'Histoire', href: '/histoire' },
    { text: 'Éthique', href: '/ethique' },
    { text: 'Glossaire', href: '/glossaire' },
    { text: 'Ressources', href: '/ressources' },
    { text: 'Actualités', href: '/actualites' },
    { text: 'À propos', href: '/about' }
  ];

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
        <div className="container flex items-center justify-between h-16 mx-auto px-4">
          <Link 
            to="/" 
            className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:rounded-md"
            aria-label="Accueil - Explorons l'IA"
          >
            <div className="hidden sm:block">
              <AnimatedLogo />
            </div>
            <div className="block sm:hidden">
              <AnimatedLogo compact />
            </div>
          </Link>

          {/* Navigation desktop */}
          <nav 
            className="hidden md:flex items-center space-x-1"
            role="navigation"
            aria-label="Navigation principale"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-3 py-2 text-sm rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  pathname === link.href
                    ? 'bg-primary/10 text-primary font-medium'
                    : 'hover:bg-muted hover:text-foreground'
                }`}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.text}
              </Link>
            ))}
            <ThemeToggle />
          </nav>

          {/* Boutons mobile */}
          <div className="flex items-center md:hidden">
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
      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
      />
    </>
  );
};

export default Header;
