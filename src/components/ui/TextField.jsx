import React from 'react';
import { TextField as MuiTextField } from '@mui/material';

const TextField = ({
  label,
  variant = 'outlined',
  fullWidth = true,
  margin = 'normal',
  sx = {},
  ...props
}) => {
  return (
    <MuiTextField
      label={label}
      variant={variant}
      fullWidth={fullWidth}
      margin={margin}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: 2,
        },
        ...sx,
      }}
      {...props}
    />
  );
};

export default TextField;