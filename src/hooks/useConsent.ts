import { useState, useEffect } from 'react';

export interface ConsentPreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

const DEFAULT_PREFERENCES: ConsentPreferences = {
  necessary: true, // Always required
  functional: false,
  analytics: false,
  marketing: false,
};

const CONSENT_KEY = 'ai-avenir-consent';
const CONSENT_DATE_KEY = 'ai-avenir-consent-date';

export const useConsent = () => {
  const [preferences, setPreferences] = useState<ConsentPreferences>(DEFAULT_PREFERENCES);
  const [hasConsented, setHasConsented] = useState<boolean>(false);
  const [showBanner, setShowBanner] = useState<boolean>(false);

  useEffect(() => {
    try {
      const savedConsent = localStorage.getItem(CONSENT_KEY);
      const consentDate = localStorage.getItem(CONSENT_DATE_KEY);
      
      if (savedConsent && consentDate) {
        const parsedPreferences = JSON.parse(savedConsent);
        setPreferences(parsedPreferences);
        setHasConsented(true);
        setShowBanner(false);
      } else {
        setShowBanner(true);
      }
    } catch (error) {
      console.warn('Error accessing localStorage for consent:', error);
      setShowBanner(true);
    }
  }, []);

  const saveConsent = (newPreferences: ConsentPreferences) => {
    setPreferences(newPreferences);
    setHasConsented(true);
    setShowBanner(false);
    
    localStorage.setItem(CONSENT_KEY, JSON.stringify(newPreferences));
    localStorage.setItem(CONSENT_DATE_KEY, new Date().toISOString());
  };

  const acceptAll = () => {
    const allAccepted: ConsentPreferences = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    saveConsent(allAccepted);
  };

  const acceptNecessaryOnly = () => {
    saveConsent(DEFAULT_PREFERENCES);
  };

  const revokeConsent = () => {
    localStorage.removeItem(CONSENT_KEY);
    localStorage.removeItem(CONSENT_DATE_KEY);
    setPreferences(DEFAULT_PREFERENCES);
    setHasConsented(false);
    setShowBanner(true);
  };

  const canUseLocalStorage = () => {
    return hasConsented && preferences.functional;
  };

  const canUseAnalytics = () => {
    return hasConsented && preferences.analytics;
  };

  return {
    preferences,
    hasConsented,
    showBanner,
    saveConsent,
    acceptAll,
    acceptNecessaryOnly,
    revokeConsent,
    canUseLocalStorage,
    canUseAnalytics,
  };
};