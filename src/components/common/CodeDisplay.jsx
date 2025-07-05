import React, { useState } from 'react';
import {
  Paper,
  Typography,
  IconButton,
  Box,
  Tooltip,
  Snackbar,
  Alert,
} from '@mui/material';
import { ContentCopy, Check } from '@mui/icons-material';

const CodeDisplay = ({ code, title, language = 'javascript' }) => {
  const [copied, setCopied] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setSnackbarOpen(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <>
      <Paper
        elevation={1}
        sx={{
          p: 2,
          mt: 2,
          backgroundColor: 'grey.50',
          border: 1,
          borderColor: 'grey.200',
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
          <Typography variant="subtitle2" color="primary" fontWeight={600}>
            {title}
          </Typography>
          <Tooltip title={copied ? "Copied!" : "Copy to clipboard"}>
            <IconButton onClick={copyToClipboard} size="small">
              {copied ? <Check color="success" /> : <ContentCopy />}
            </IconButton>
          </Tooltip>
        </Box>
        <Typography
          component="pre"
          sx={{
            fontSize: '0.8rem',
            overflow: 'auto',
            fontFamily: '"Fira Code", "Monaco", "Consolas", monospace',
            lineHeight: 1.5,
            margin: 0,
            backgroundColor: 'grey.900',
            color: 'grey.100',
            p: 2,
            borderRadius: 1,
            whiteSpace: 'pre-wrap',
          }}
        >
          {code}
        </Typography>
      </Paper>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success">
          Code copied to clipboard!
        </Alert>
      </Snackbar>
    </>
  );
};

export default CodeDisplay;