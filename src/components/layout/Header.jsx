import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Chip,
  Box,
  IconButton,
} from '@mui/material';
import { Palette, GitHub } from '@mui/icons-material';
import { useTheme } from '../../contexts/ThemeContext';

const Header = () => {
  const { currentTheme, getCurrentThemeConfig } = useTheme();
  const themeConfig = getCurrentThemeConfig();

  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <Palette sx={{ mr: 2 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MUI Theme Portal
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Chip
            label={`Theme: ${themeConfig.name}`}
            color="secondary"
            variant="outlined"
            sx={{ color: 'white', borderColor: 'white' }}
          />
          <IconButton
            color="inherit"
            onClick={() => window.open('https://github.com/mui/material-ui', '_blank')}
          >
            <GitHub />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;