import React from 'react';
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stepper,
  Step,
  StepLabel,
  StepContent,
} from '@mui/material';
import { Card, CardContent } from '../ui/Card';
import Button from '../ui/Button';
import CodeDisplay from '../common/CodeDisplay';
import { 
  Download, 
  Code, 
  Palette, 
  CheckCircle,
  GitHub,
  BookOpen 
} from '@mui/icons-material';
import { useTheme } from '../../contexts/ThemeContext';

const InstallationGuide = () => {
  const { currentTheme, getCurrentThemeConfig } = useTheme();
  const themeConfig = getCurrentThemeConfig();

  const installCode = `# Install MUI and dependencies
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material

# Or with yarn
yarn add @mui/material @emotion/react @emotion/styled
yarn add @mui/icons-material`;

  const setupCode = `import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '${themeConfig.primary}',
    },
    secondary: {
      main: '${themeConfig.secondary}',
    },
    mode: '${themeConfig.mode}',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Your app components */}
    </ThemeProvider>
  );
}

export default App;`;

  const componentUsage = `import {
  Button,
  Card,
  CardContent,
  TextField,
  Alert,
  Typography,
  Box
} from '@mui/material';

function MyComponent() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Welcome to MUI
        </Typography>
        <TextField 
          label="Your Name" 
          variant="outlined" 
          fullWidth 
          margin="normal"
        />
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="primary">
            Get Started
          </Button>
        </Box>
        <Alert severity="info" sx={{ mt: 2 }}>
          You're ready to build amazing UIs!
        </Alert>
      </CardContent>
    </Card>
  );
}`;

  const steps = [
    {
      label: 'Install Dependencies',
      description: 'Add MUI and required packages to your React project',
      code: installCode
    },
    {
      label: 'Setup Theme Provider',
      description: 'Configure your app with ThemeProvider and CssBaseline',
      code: setupCode
    },
    {
      label: 'Start Using Components',
      description: 'Import and use MUI components in your application',
      code: componentUsage
    }
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom color="primary" fontWeight={600}>
        ⚙️ Installation & Setup Guide
      </Typography>
      <Typography variant="body1" paragraph color="text.secondary">
        Get started with Material-UI in your React project following these simple steps.
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Stepper orientation="vertical">
          {steps.map((step, index) => (
            <Step key={index} active={true} completed={false}>
              <StepLabel>
                <Typography variant="h6" fontWeight={600}>
                  {step.label}
                </Typography>
              </StepLabel>
              <StepContent>
                <Typography paragraph color="text.secondary">
                  {step.description}
                </Typography>
                <CodeDisplay code={step.code} title={`Step ${index + 1}`} />
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom color="primary">
            📖 Documentation & Resources
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <BookOpen color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Official MUI Documentation"
                secondary="Complete guides, API references, and examples"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Palette color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Theme Customization"
                secondary="Learn how to create and customize themes"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Code color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Component API"
                secondary="Detailed component props and styling options"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <GitHub color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="GitHub Repository"
                secondary="Source code, issues, and community contributions"
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom color="primary">
            🚀 Ready to Export Your Theme?
          </Typography>
          <Typography paragraph color="text.secondary">
            Your current theme configuration is ready to be exported and used in your projects.
          </Typography>
          <CodeDisplay 
            code={`// ${themeConfig.name} Theme Configuration
export const ${currentTheme}Theme = ${JSON.stringify(themeConfig, null, 2)};

// Usage in your app
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ${currentTheme}Theme } from './themes';

const theme = createTheme({
  palette: {
    primary: { main: '${themeConfig.primary}' },
    secondary: { main: '${themeConfig.secondary}' },
    mode: '${themeConfig.mode}',
  },
});`}
            title="Complete Theme Setup"
          />
          <Box sx={{ mt: 3, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              startIcon={<Download />}
              onClick={() => {
                const code = `export const ${currentTheme}Theme = ${JSON.stringify(themeConfig, null, 2)};`;
                navigator.clipboard.writeText(code);
                alert('Theme exported to clipboard!');
              }}
            >
              Export {themeConfig.name}
            </Button>
            <Button
              variant="outlined"
              startIcon={<GitHub />}
              onClick={() => window.open('https://github.com/mui/material-ui', '_blank')}
            >
              View on GitHub
            </Button>
            <Button
              variant="outlined"
              startIcon={<BookOpen />}
              onClick={() => window.open('https://mui.com/', '_blank')}
            >
              Official Docs
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default InstallationGuide;