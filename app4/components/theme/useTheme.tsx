'use client';

import { useEffect, useState } from "react";

type ThemeType = 'theme-dark' | 'theme-light';

// localStorage ssr에서 접근 못함;
export const useTheme = () => {
  const [theme, setThemeState] = useState<ThemeType>('theme-dark');

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") as ThemeType | null;
      if (savedTheme) {
        setThemeState(savedTheme);
        document.documentElement.classList.add(savedTheme); 
      } else {
        setThemeState('theme-dark');
        document.documentElement.classList.add('theme-dark');
      }
    }
  }, []);

  const setTheme = (newTheme: ThemeType) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);  
      setThemeState(newTheme);
      document.documentElement.classList.remove('theme-dark', 'theme-light'); 
      document.documentElement.classList.add(newTheme); 
    }
  };

  return { theme, setTheme };
};

export const getTheme = () => {
  if (typeof window !== "undefined") {
    const themeName = localStorage.getItem("theme");

    if (themeName === "theme-dark") {
      return "dark";
    } else if (themeName === "theme-light") {
      return "light";
    }
  }
  return null; 
};
