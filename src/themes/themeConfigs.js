export const themeConfigs = {
  default: {
    primary: '#1976d2',
    secondary: '#dc004e',
    background: '#ffffff',
    text: '#000000',
    mode: 'light',
    name: 'Default Blue'
  },
  corporate: {
    primary: '#2c3e50',
    secondary: '#e74c3c',
    background: '#ffffff',
    text: '#2c3e50',
    mode: 'light',
    name: 'Corporate'
  },
  modern: {
    primary: '#6c5ce7',
    secondary: '#fd79a8',
    background: '#ffffff',
    text: '#2d3436',
    mode: 'light',
    name: 'Modern Purple'
  },
  dark: {
    primary: '#bb86fc',
    secondary: '#03dac6',
    background: '#121212',
    text: '#ffffff',
    mode: 'dark',
    name: 'Dark Theme'
  },
  green: {
    primary: '#4caf50',
    secondary: '#ff9800',
    background: '#ffffff',
    text: '#2e7d32',
    mode: 'light',
    name: 'Nature Green'
  },
  ocean: {
    primary: '#0074d9',
    secondary: '#39cccc',
    background: '#ffffff',
    text: '#001f3f',
    mode: 'light',
    name: 'Ocean Blue'
  }
};

export const getThemeConfig = (themeName) => {
  return themeConfigs[themeName] || themeConfigs.default;
};