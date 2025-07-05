import React from 'react';
import { LinearProgress, CircularProgress, Box } from '@mui/material';

const Progress = ({ 
  value = 0, 
  variant = 'linear', 
  size = 40,
  determinate = true,
  sx = {},
  ...props 
}) => {
  if (variant === 'circular') {
    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress
          variant={determinate ? 'determinate' : 'indeterminate'}
          value={value}
          size={size}
          sx={{ ...sx }}
          {...props}
        />
        {determinate && (
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="caption" component="div" color="text.secondary">
              {`${Math.round(value)}%`}
            </Typography>
          </Box>
        )}
      </Box>
    );
  }
  
  return (
    <LinearProgress
      variant={determinate ? 'determinate' : 'indeterminate'}
      value={value}
      sx={{
        borderRadius: 1,
        height: 8,
        ...sx,
      }}
      {...props}
    />
  );
};

export default Progress;