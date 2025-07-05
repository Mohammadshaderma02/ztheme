import React from 'react';
import { Button as MuiButton } from '@mui/material';

const Button = ({
  children,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  startIcon,
  endIcon,
  disabled = false,
  fullWidth = false,
  onClick,
  type = 'button',
  sx = {},
  ...props
}) => {
  return (
    <MuiButton
      variant={variant}
      color={color}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={disabled}
      fullWidth={fullWidth}
      onClick={onClick}
      type={type}
      sx={{
        borderRadius: 2,
        textTransform: 'none',
        fontWeight: 600,
        ...sx,
      }}
      {...props}
    >
      {children}
    </MuiButton>
  );
};

export default Button;