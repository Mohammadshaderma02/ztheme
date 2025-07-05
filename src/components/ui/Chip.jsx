import React from 'react';
import { Chip as MuiChip } from '@mui/material';

const Chip = ({
  label,
  color = 'default',
  variant = 'filled',
  onDelete,
  icon,
  sx = {},
  ...props
}) => {
  return (
    <MuiChip
      label={label}
      color={color}
      variant={variant}
      onDelete={onDelete}
      icon={icon}
      sx={{
        borderRadius: 4,
        fontWeight: 500,
        ...sx,
      }}
      {...props}
    />
  );
};

export default Chip;