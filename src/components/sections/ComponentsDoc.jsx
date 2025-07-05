import React, { useState } from 'react';
import {
  Typography,
  Box,
  Grid,
  FormControlLabel,
  Checkbox,
  Switch,
  Rating,
  Slider,
  Chip,
  LinearProgress,
  CircularProgress,
} from '@mui/material';
import { Card, CardContent, CardActions } from '../ui/Card';
import Button from '../ui/Button';
import TextField from '../ui/TextField';
import Alert from '../ui/Alert';
import Avatar from '../ui/Avatar';
import Badge from '../ui/Badge';
import { Table, TableHead, TableBody, TableRow, TableCell } from '../ui/Table';
import CodeDisplay from '../common/CodeDisplay';
import { 
  Favorite, 
  Star, 
  Edit, 
  Delete,
  Add 
} from '@mui/icons-material';

const ComponentShowcase = ({ title, description, children, code }) => (
  <Card sx={{ mb: 4 }}>
    <CardContent>
      <Typography variant="h5" gutterBottom color="primary" fontWeight={600}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph>
        {description}
      </Typography>
      <Box sx={{ 
        p: 3, 
        border: '2px dashed', 
        borderColor: 'divider', 
        borderRadius: 2, 
        mb: 3,
        backgroundColor: 'grey.50'
      }}>
        {children}
      </Box>
      {code && <CodeDisplay code={code} title="React Code" />}
    </CardContent>
  </Card>
);

const ComponentsDoc = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    newsletter: false,
    notifications: true,
    rating: 4,
    slider: 30
  });

  const buttonCode = `import { Button } from '@mui/material';

<Button variant="contained" color="primary">
  Primary Button
</Button>
<Button variant="outlined" color="secondary">
  Secondary Button
</Button>
<Button variant="text" startIcon={<Add />}>
  Add Item
</Button>`;

  const formCode = `import { TextField, Checkbox, Switch, FormControlLabel } from '@mui/material';

const [formData, setFormData] = useState({
  name: '', newsletter: false
});

<TextField
  label="Full Name"
  value={formData.name}
  onChange={(e) => setFormData({...formData, name: e.target.value})}
  fullWidth
/>
<FormControlLabel
  control={
    <Checkbox 
      checked={formData.newsletter}
      onChange={(e) => setFormData({...formData, newsletter: e.target.checked})}
    />
  }
  label="Subscribe to newsletter"
/>`;

  return (
    <Box>
      <Typography variant="h4" gutterBottom color="primary" fontWeight={600}>
        📦 Component Library
      </Typography>
      <Typography variant="body1" paragraph color="text.secondary">
        Explore our collection of pre-styled MUI components with live examples and code snippets.
      </Typography>

      <ComponentShowcase
        title="Buttons"
        description="Various button styles for different actions and states."
        code={buttonCode}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Button variant="contained" color="primary">Primary</Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="secondary">Secondary</Button>
          </Grid>
          <Grid item>
            <Button variant="text">Text Button</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" disabled>Disabled</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" startIcon={<Add />}>Add Item</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" size="small">Small</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" size="large">Large</Button>
          </Grid>
        </Grid>
      </ComponentShowcase>

      <ComponentShowcase
        title="Cards"
        description="Flexible content containers with actions and metadata."
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Sample Card
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This is a sample card component showcasing content layout
                  with proper spacing and typography.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
                <Button size="small" variant="outlined">Share</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Interactive Card
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Cards can contain any content including forms, images,
                  and interactive elements.
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Rating value={4} readOnly size="small" />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </ComponentShowcase>

      <ComponentShowcase
        title="Form Components"
        description="Input fields and form controls with proper validation styling."
        code={formCode}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              fullWidth
            />
            <TextField
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              fullWidth
            />
            <TextField
              label="Message"
              multiline
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.newsletter}
                    onChange={(e) => setFormData({...formData, newsletter: e.target.checked})}
                  />
                }
                label="Subscribe to newsletter"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={formData.notifications}
                    onChange={(e) => setFormData({...formData, notifications: e.target.checked})}
                  />
                }
                label="Enable notifications"
              />
              <Box>
                <Typography gutterBottom>Rating</Typography>
                <Rating
                  value={formData.rating}
                  onChange={(e, newValue) => setFormData({...formData, rating: newValue})}
                />
              </Box>
              <Box>
                <Typography gutterBottom>Slider ({formData.slider}%)</Typography>
                <Slider
                  value={formData.slider}
                  onChange={(e, newValue) => setFormData({...formData, slider: newValue})}
                  valueLabelDisplay="auto"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ComponentShowcase>

      <ComponentShowcase
        title="Feedback Components"
        description="Alerts, progress indicators, and status messages."
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Alert severity="success">
            <strong>Success!</strong> Your changes have been saved successfully.
          </Alert>
          <Alert severity="warning">
            <strong>Warning!</strong> Please review your information before submitting.
          </Alert>
          <Alert severity="error">
            <strong>Error!</strong> An error occurred while processing your request.
          </Alert>
          <Alert severity="info">
            <strong>Info!</strong> New features are now available in your dashboard.
          </Alert>
          
          <Box sx={{ mt: 2 }}>
            <Typography gutterBottom>Progress Indicators</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 2 }}>
              <LinearProgress variant="determinate" value={70} sx={{ flex: 1 }} />
              <Typography variant="body2">70%</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <CircularProgress size={30} />
              <CircularProgress variant="determinate" value={75} size={30} />
            </Box>
          </Box>
        </Box>
      </ComponentShowcase>

      <ComponentShowcase
        title="Data Display"
        description="Components for displaying user information and data."
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>Chips</Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
              <Chip label="React" color="primary" />
              <Chip label="MUI" color="secondary" />
              <Chip label="JavaScript" variant="outlined" />
              <Chip label="TypeScript" color="success" />
              <Chip
                label="Deletable"
                onDelete={() => alert('Deleted!')}
                color="error"
              />
            </Box>
            
            <Typography variant="h6" gutterBottom>Avatars & Badges</Typography>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <Avatar>U</Avatar>
              <Badge badgeContent={4} color="error">
                <Avatar sx={{ bgcolor: 'secondary.main' }}>J</Avatar>
              </Badge>
              <Badge badgeContent={99} color="primary">
                <Avatar sx={{ bgcolor: 'success.main' }}>K</Avatar>
              </Badge>
              <Avatar sx={{ bgcolor: 'warning.main' }}>
                <Favorite />
              </Avatar>
            </Box>
          </Grid>
        </Grid>
      </ComponentShowcase>

      <ComponentShowcase
        title="Data Tables"
        description="Structured data display with actions and styling."
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell component="th">Name</TableCell>
              <TableCell component="th">Role</TableCell>
              <TableCell component="th">Status</TableCell>
              <TableCell component="th">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>Developer</TableCell>
              <TableCell>
                <Chip label="Active" color="success" size="small" />
              </TableCell>
              <TableCell>
                <Button size="small" startIcon={<Edit />}>Edit</Button>
                <Button size="small" color="error" startIcon={<Delete />}>Delete</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Smith</TableCell>
              <TableCell>Designer</TableCell>
              <TableCell>
                <Chip label="Inactive" color="default" size="small" />
              </TableCell>
              <TableCell>
                <Button size="small" startIcon={<Edit />}>Edit</Button>
                <Button size="small" color="error" startIcon={<Delete />}>Delete</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </ComponentShowcase>
    </Box>
  );
};

export default ComponentsDoc;