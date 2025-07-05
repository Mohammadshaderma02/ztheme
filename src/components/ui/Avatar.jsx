import React from 'react';
import { Avatar as MuiAvatar } from '@mui/material';

const Avatar = ({
  children,
  src,
  alt,
  sx = {},
  ...props
}) => {
  return (
    <MuiAvatar
      src={src}
      alt={alt}
      sx={{
        ...sx,
      }}
      {...props}
    >
      {children}
    </MuiAvatar>
  );
};

export default Avatar;