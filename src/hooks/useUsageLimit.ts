import { useState, useEffect } from 'react';

const USAGE_KEY = 'ai-assistant-usage';
const MAX_USAGE = 5;

export const useUsageLimit = () => {
  const [usageCount, setUsageCount] = useState<number>(0);
  const [isLimitReached, setIsLimitReached] = useState<boolean>(false);

  useEffect(() => {
    // Charger le compteur depuis localStorage
    const savedUsage = localStorage.getItem(USAGE_KEY);
    const count = savedUsage ? parseInt(savedUsage, 10) : 0;
    setUsageCount(count);
    setIsLimitReached(count >= MAX_USAGE);
  }, []);

  const incrementUsage = () => {
    const newCount = usageCount + 1;
    setUsageCount(newCount);
    localStorage.setItem(USAGE_KEY, newCount.toString());
    setIsLimitReached(newCount >= MAX_USAGE);
    return newCount <= MAX_USAGE;
  };

  const getRemainingUsage = () => {
    return Math.max(0, MAX_USAGE - usageCount);
  };

  const resetUsage = () => {
    setUsageCount(0);
    localStorage.setItem(USAGE_KEY, '0');
    setIsLimitReached(false);
  };

  return {
    usageCount,
    isLimitReached,
    getRemainingUsage,
    incrementUsage,
    resetUsage
  };
};