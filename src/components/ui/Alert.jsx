import React from 'react';
import { Alert as MuiAlert, AlertTitle } from '@mui/material';
import {
  CheckCircle,
  Warning,
  Error,
  Info,
} from '@mui/icons-material';

const Alert = ({
  severity = 'info',
  title,
  children,
  icon,
  sx = {},
  ...props
}) => {
  const iconMap = {
    success: <CheckCircle />,
    warning: <Warning />,
    error: <Error />,
    info: <Info />,
  };

  return (
    <MuiAlert
      severity={severity}
      icon={icon || iconMap[severity]}
      sx={{
        borderRadius: 2,
        '& .MuiAlert-icon': {
          fontSize: '1.5rem',
        },
        ...sx,
      }}
      {...props}
    >
      {title && <AlertTitle>{title}</AlertTitle>}
      {children}
    </MuiAlert>
  );
};

export default Alert;