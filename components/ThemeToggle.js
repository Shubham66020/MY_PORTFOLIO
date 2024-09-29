// components/ThemeToggle.js
import React from 'react';
import { useTheme } from './ThemeProvider'; // Adjust path if necessary
import styled from 'styled-components';

const ToggleButton = styled.button`
  background-color: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonColor};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.buttonHover};
  }
`;

const ThemeToggle = () => {
  const themeContext = useTheme();
  
  if (!themeContext) {
    console.error('ThemeContext is not provided');
    return null;
  }

  const { toggleTheme } = themeContext;

  return <ToggleButton onClick={toggleTheme}>Toggle Theme</ToggleButton>;
};

export default ThemeToggle;
