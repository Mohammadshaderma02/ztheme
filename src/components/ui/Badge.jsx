import React from 'react';
import { Badge as MuiBadge } from '@mui/material';

const Badge = ({
  children,
  badgeContent,
  color = 'error',
  variant = 'standard',
  sx = {},
  ...props
}) => {
  return (
    <MuiBadge
      badgeContent={badgeContent}
      color={color}
      variant={variant}
      sx={{
        ...sx,
      }}
      {...props}
    >
      {children}
    </MuiBadge>
  );
};

export default Badge;