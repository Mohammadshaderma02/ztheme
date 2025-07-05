import React, { createContext, useContext, useState, useEffect } from 'react';
import { themeConfigs } from '../themes/themeConfigs';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('default');
  
  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('mui-portal-theme');
    if (savedTheme && themeConfigs[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  // Save theme to localStorage when changed
  useEffect(() => {
    localStorage.setItem('mui-portal-theme', currentTheme);
  }, [currentTheme]);

  const getCurrentThemeConfig = () => {
    return themeConfigs[currentTheme];
  };

  const getAllThemes = () => {
    return Object.keys(themeConfigs);
  };

  const value = {
    currentTheme,
    setCurrentTheme,
    getCurrentThemeConfig,
    getAllThemes,
    themeConfigs,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;