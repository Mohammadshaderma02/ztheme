import React, { useState } from 'react';
import { ThemeProvider as MuiThemeProvider, CssBaseline, Container } from '@mui/material';
import { ThemeProvider } from './contexts/ThemeContext';
import { createCustomTheme } from './themes/createTheme';
import { useTheme } from './contexts/ThemeContext';

// Layout Components
import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';

// Section Components
import ThemeCustomizer from './components/sections/ThemeCustomizer';
import ComponentsDoc from './components/sections/ComponentsDoc';
import InstallationGuide from './components/sections/InstallationGuide';

const AppContent = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { getCurrentThemeConfig } = useTheme();
  
  const themeConfig = getCurrentThemeConfig();
  const muiTheme = createCustomTheme(themeConfig);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Header />
      
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {activeTab === 0 && <ThemeCustomizer />}
        {activeTab === 1 && <ComponentsDoc />}
        {activeTab === 2 && <InstallationGuide />}
      </Container>
    </MuiThemeProvider>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;