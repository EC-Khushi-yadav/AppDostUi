import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check for saved preference
    const savedMode = localStorage?.getItem('darkMode');
    if (savedMode !== null) {
      return JSON.parse(savedMode);
    }
    
    // Check system preference
    if (window?.matchMedia) {
      return window?.matchMedia('(prefers-color-scheme: dark)')?.matches;
    }
    
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    
    if (isDarkMode) {
      root?.classList?.add('dark');
    } else {
      root?.classList?.remove('dark');
    }
    
    // Save preference
    localStorage?.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window?.matchMedia?.('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      // Only update if no manual preference is saved
      if (!localStorage?.getItem('darkMode')) {
        setIsDarkMode(e?.matches);
      }
    };

    if (mediaQuery?.addEventListener) {
      mediaQuery?.addEventListener('change', handleChange);
      return () => mediaQuery?.removeEventListener('change', handleChange);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;