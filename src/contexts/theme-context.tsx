
"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

interface ThemeContextType {
  isHackerMode: boolean;
  toggleHackerMode: () => void;
  setHackerMode: (isHacker: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isHackerMode, setIsHackerMode] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const mode = searchParams.get('mode');
    if (mode === 'hacker') {
      setIsHackerMode(true);
    } else {
      setIsHackerMode(false);
    }
  }, [searchParams]);

  const setMode = (isHacker: boolean) => {
    setIsHackerMode(isHacker);
    const url = new URL(window.location.href);
    url.searchParams.set('mode', isHacker ? 'hacker' : 'dev');
    window.history.pushState({}, '', url);
  };
  
  const toggleHackerMode = () => {
    setMode(!isHackerMode);
  };

  useEffect(() => {
    if (isHackerMode) {
      document.documentElement.classList.add('hacker-theme');
      document.documentElement.classList.remove('dark'); 
    } else {
      document.documentElement.classList.remove('hacker-theme');
      document.documentElement.classList.add('dark');
    }
  }, [isHackerMode]);

  return (
    <ThemeContext.Provider value={{ isHackerMode, toggleHackerMode, setHackerMode: setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
