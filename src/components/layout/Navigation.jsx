import React from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import {
  Palette,
  ViewModule,
  Settings,
} from '@mui/icons-material';

const Navigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { label: 'Themes', icon: <Palette /> },
    { label: 'Components', icon: <ViewModule /> },
    { label: 'Setup Guide', icon: <Settings /> },
  ];

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
      <Tabs
        value={activeTab}
        onChange={(e, newValue) => setActiveTab(newValue)}
        variant="fullWidth"
        textColor="primary"
        indicatorColor="primary"
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            icon={tab.icon}
            label={tab.label}
            iconPosition="start"
            sx={{
              textTransform: 'none',
              fontWeight: 600,
              fontSize: '1rem',
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default Navigation;