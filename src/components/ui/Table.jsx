import React from 'react';
import {
  Table as MuiTable,
  TableBody,
  TableCell as MuiTableCell,
  TableContainer,
  TableHead,
  TableRow as MuiTableRow,
  Paper,
} from '@mui/material';

export const Table = ({ children, sx = {}, ...props }) => {
  return (
    <TableContainer component={Paper} sx={{ borderRadius: 2, ...sx }}>
      <MuiTable {...props}>
        {children}
      </MuiTable>
    </TableContainer>
  );
};

export const TableHead = ({ children, ...props }) => {
  return <TableHead {...props}>{children}</TableHead>;
};

export const TableBody = ({ children, ...props }) => {
  return <TableBody {...props}>{children}</TableBody>;
};

export const TableRow = ({ children, sx = {}, ...props }) => {
  return (
    <MuiTableRow
      sx={{
        '&:last-child td, &:last-child th': { border: 0 },
        ...sx,
      }}
      {...props}
    >
      {children}
    </MuiTableRow>
  );
};

export const TableCell = ({ children, sx = {}, ...props }) => {
  return (
    <MuiTableCell
      sx={{
        fontWeight: props.component === 'th' ? 600 : 400,
        ...sx,
      }}
      {...props}
    >
      {children}
    </MuiTableCell>
  );
};

export default Table;