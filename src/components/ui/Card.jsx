import React from 'react';
import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  CardActions as MuiCardActions,
  CardHeader as MuiCardHeader,
} from '@mui/material';

export const Card = ({ children, elevation = 2, sx = {}, ...props }) => {
  return (
    <MuiCard
      elevation={elevation}
      sx={{
        borderRadius: 3,
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: 4,
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </MuiCard>
  );
};

export const CardContent = ({ children, sx = {}, ...props }) => {
  return (
    <MuiCardContent sx={{ ...sx }} {...props}>
      {children}
    </MuiCardContent>
  );
};

export const CardActions = ({ children, sx = {}, ...props }) => {
  return (
    <MuiCardActions sx={{ padding: 2, ...sx }} {...props}>
      {children}
    </MuiCardActions>
  );
};

export const CardHeader = ({ title, subheader, action, sx = {}, ...props }) => {
  return (
    <MuiCardHeader
      title={title}
      subheader={subheader}
      action={action}
      sx={{ ...sx }}
      {...props}
    />
  );
};