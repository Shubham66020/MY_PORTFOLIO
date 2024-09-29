// components/ThemeProvider.js
import React, { createContext, useState, useContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

// Create context
const ThemeContext = createContext();

const themes = {
  light: {
    background: '#ffffff',
    color: '#000000',
    buttonBackground: '#61dafb',
    buttonColor: '#000000',
    buttonHover: '#21a1f1',
  },
  dark: {
    background: '#000000',
    color: '#ffffff',
    buttonBackground: '#61dafb',
    buttonColor: '#000000',
    buttonHover: '#21a1f1',
  },
};

// ThemeProvider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <StyledThemeProvider theme={themes[theme]}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

// Custom hook for accessing theme context
export const useTheme = () => useContext(ThemeContext);
