import React from 'react';
import {
  Typography,
  Grid,
  Box,
  Button,
  Alert,
} from '@mui/material';
import { Card, CardContent } from '../ui/Card';
import { useTheme } from '../../contexts/ThemeContext';
import { Download } from '@mui/icons-material';

const ThemeCustomizer = () => {
  const { currentTheme, setCurrentTheme, getAllThemes, themeConfigs } = useTheme();

  const exportTheme = () => {
    const config = themeConfigs[currentTheme];
    const themeCode = `export const ${currentTheme}Theme = ${JSON.stringify(config, null, 2)};`;
    
    navigator.clipboard.writeText(themeCode).then(() => {
      alert('Theme configuration copied to clipboard!');
    });
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom color="primary" fontWeight={600}>
        🎨 Theme Customizer
      </Typography>
      <Typography variant="body1" paragraph color="text.secondary">
        Choose from our pre-built themes to match your project's design requirements.
      </Typography>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {getAllThemes().map((themeName) => {
          const config = themeConfigs[themeName];
          return (
            <Grid item xs={6} sm={4} md={3} key={themeName}>
              <Card
                onClick={() => setCurrentTheme(themeName)}
                sx={{
                  cursor: 'pointer',
                  border: currentTheme === themeName ? 3 : 1,
                  borderColor: currentTheme === themeName ? 'primary.main' : 'divider',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    borderColor: 'primary.main',
                  }
                }}
              >
                <CardContent sx={{ textAlign: 'center', py: 3 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      backgroundColor: config.primary,
                      margin: '0 auto 16px',
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 6,
                        right: 6,
                        width: 16,
                        height: 16,
                        borderRadius: '50%',
                        backgroundColor: config.secondary,
                      }
                    }}
                  />
                  <Typography variant="subtitle2" fontWeight={600}>
                    {config.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {config.mode} mode
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      <Alert severity="info" sx={{ mb: 3 }}>
        <strong>Current Theme:</strong> {themeConfigs[currentTheme].name} - 
        Click any theme above to preview it instantly across all components.
      </Alert>

      <Box sx={{ textAlign: 'center' }}>
        <Button
          variant="contained"
          startIcon={<Download />}
          onClick={exportTheme}
          size="large"
        >
          Export {themeConfigs[currentTheme].name} Theme
        </Button>
      </Box>
    </Box>
  );
};

export default ThemeCustomizer;