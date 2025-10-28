
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, X, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MenuCategory {
  id: string;
  title: string;
  items: Array<{
    text: string;
    href: string;
  }>;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuCategories: MenuCategory[] = [
  {
    id: 'fundamentals',
    title: 'Fondamentaux',
    items: [
      { text: 'Les bases', href: '/les-bases' },
      { text: 'Types d\'IA', href: '/types-ia' },
      { text: 'Niveaux d\'IA', href: '/niveaux-ia' },
      { text: 'Machine Learning', href: '/machine-learning' },
      { text: 'IA Multimodale', href: '/ia-multimodale' }
    ]
  },
  {
    id: 'applications',
    title: 'Applications',
    items: [
      { text: 'Cas d\'usage', href: '/cas-usage' },
      { text: 'Éthique', href: '/ethique' },
      { text: 'Histoire', href: '/histoire-ia' }
    ]
  },
  {
    id: 'resources',
    title: 'Ressources',
    items: [
      { text: 'Glossaire', href: '/glossaire' },
      { text: 'Ressources', href: '/ressources' },
      { text: 'Actualités', href: '/actualites' }
    ]
  }
];

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const { pathname } = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Trap focus within menu when open
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        const focusableElements = menuRef.current?.querySelectorAll(
          'button, a, [tabindex]:not([tabindex="-1"])'
        );
        
        if (!focusableElements?.length) return;

        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Close menu when route changes
  useEffect(() => {
    onClose();
    setActiveCategory(null);
  }, [pathname, onClose]);

  // Auto-focus first element when menu opens
  useEffect(() => {
    if (isOpen && menuRef.current) {
      const firstButton = menuRef.current.querySelector('button');
      firstButton?.focus();
    }
  }, [isOpen]);

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  const handleBackClick = () => {
    setActiveCategory(null);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-background md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navigation mobile"
      ref={menuRef}
    >
      {/* Header with back button or close */}
      <div className="flex items-center justify-between p-4 border-b">
        {activeCategory ? (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleBackClick}
            className="flex items-center gap-2"
            aria-label="Retour au menu principal"
          >
            <ArrowLeft size={16} />
            Retour
          </Button>
        ) : (
          <span className="text-lg font-semibold">Menu</span>
        )}
        
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          aria-label="Fermer le menu"
        >
          <X size={24} />
        </Button>
      </div>

      {/* Menu content */}
      <nav className="flex-1 overflow-y-auto p-4">
        {!activeCategory ? (
          // Main menu
          <div className="space-y-2">
            {menuCategories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className="w-full flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animationFillMode: 'both'
                }}
                aria-expanded={false}
                aria-haspopup="true"
              >
                <span className="font-medium">{category.title}</span>
                <ChevronRight size={20} className="text-muted-foreground" />
              </button>
            ))}
            
            {/* Direct link to About */}
            <Link
              to="/a-propos"
              className="w-full flex items-center p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              style={{
                animationDelay: `${menuCategories.length * 50}ms`,
                animationFillMode: 'both'
              }}
            >
              <span className="font-medium">À propos</span>
            </Link>
          </div>
        ) : (
          // Category submenu
          <div className="space-y-2">
            {menuCategories
              .find(cat => cat.id === activeCategory)
              ?.items.map((item, index) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`block p-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                    pathname === item.href
                      ? 'bg-primary/10 text-primary font-medium'
                      : 'hover:bg-muted'
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animationFillMode: 'both'
                  }}
                  aria-current={pathname === item.href ? 'page' : undefined}
                >
                  {item.text}
                </Link>
              ))}
          </div>
        )}
      </nav>

      {/* Floating close button at bottom */}
      <div className="p-4 border-t bg-background/95 backdrop-blur-sm">
        <Button
          ref={closeButtonRef}
          onClick={onClose}
          variant="outline"
          className="w-full py-3 font-medium"
          aria-label="Fermer le menu"
        >
          Fermer le menu
        </Button>
      </div>

      <style>
        {`
        .space-y-2 > * {
          animation: slideInFromRight 0.3s ease-out;
        }
        
        @keyframes slideInFromRight {
          0% {
            opacity: 0;
            transform: translateX(20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .space-y-2 > * {
            animation: none;
          }
        }
        `}
      </style>
    </div>
  );
};

export default MobileMenu;
