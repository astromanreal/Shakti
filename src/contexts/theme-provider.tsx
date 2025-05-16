
"use client";

import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useState, useCallback } from 'react';

export type Theme = 'theme-default' | 'theme-cool' | 'theme-earthy' | 'theme-fiery' | 'theme-mystic';
export type Mode = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  mode: Mode;
  setMode: (mode: Mode) => void;
  toggleMode: () => void;
  isMounted: boolean;
  openMobile: boolean; // Added to expose mobile sheet state
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('theme-fiery'); // Default to fiery theme
  const [mode, setModeState] = useState<Mode>('dark'); // Default to dark mode
  const [isMounted, setIsMounted] = useState(false);
  const [openMobile, setOpenMobile] = useState(false); // Added for sidebar mobile state, mirrors useSidebar

  useEffect(() => {
    const storedTheme = localStorage.getItem('app-theme') as Theme | null;
    const storedMode = localStorage.getItem('app-mode') as Mode | null;

    if (storedTheme) {
      setThemeState(storedTheme);
    } else {
      // If no theme is stored, apply the default fiery theme
      setThemeState('theme-fiery');
    }

    if (storedMode) {
      setModeState(storedMode);
    } else {
      // If no mode is stored, apply the default dark mode
      setModeState('dark');
    }
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      document.documentElement.classList.remove('theme-default', 'theme-cool', 'theme-earthy', 'theme-fiery', 'theme-mystic');
      document.documentElement.classList.add(theme);
      localStorage.setItem('app-theme', theme);
    }
  }, [theme, isMounted]);

  useEffect(() => {
    if (isMounted) {
      if (mode === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('app-mode', mode);
    }
  }, [mode, isMounted]);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
  }, []);

  const setMode = useCallback((newMode: Mode) => {
    setModeState(newMode);
  }, []);

  const toggleMode = useCallback(() => {
    setModeState((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }, []);
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme, mode, setMode, toggleMode, isMounted, openMobile }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

