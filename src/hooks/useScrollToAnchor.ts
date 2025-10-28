import { useEffect, useCallback } from 'react';

/**
 * Custom hook for handling anchor-based navigation with smooth scrolling
 * @param offset - Offset from the top of the target element (default: 100)
 */
export const useScrollToAnchor = (offset: number = 100) => {
  const scrollToElement = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      setTimeout(() => {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
      }, 50);
    }
  }, [offset]);

  useEffect(() => {
    // Handle anchor clicks
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        e.preventDefault();
        const hash = anchor.getAttribute('href');
        if (hash && hash.startsWith('#')) {
          const id = hash.substring(1);
          scrollToElement(id);
          window.history.pushState(null, '', hash);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Handle initial hash on page load
    if (window.location.hash) {
      setTimeout(() => {
        const id = window.location.hash.substring(1);
        scrollToElement(id);
      }, 500);
    }

    // Handle hash changes (browser back/forward)
    const handleHashChange = () => {
      if (window.location.hash) {
        const id = window.location.hash.substring(1);
        scrollToElement(id);
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [scrollToElement]);

  // Update URL hash based on scroll position (Intersection Observer)
  useEffect(() => {
    const sections = document.querySelectorAll('section[id], div[id^="section-"]');
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id && window.location.hash !== `#${id}`) {
            window.history.replaceState(null, '', `#${id}`);
          }
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sections.forEach(section => {
      if (section.id) {
        observer.observe(section);
      }
    });
    
    return () => {
      sections.forEach(section => {
        if (section.id) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return { scrollToElement };
};
