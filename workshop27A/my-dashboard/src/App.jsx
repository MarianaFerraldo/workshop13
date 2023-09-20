import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import LeftDrawer from './components/LeftDrawer';
import Button from '@mui/material/Button'; // Import the Button component

export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            bgcolor: '#F2F3F5',
            minHeight: '100vh',
            padding: '2rem',
          }}
        >
          <Button onClick={toggleDrawer(true)}>Open Drawer</Button>
          <LeftDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />

          {/* Your main content goes here */}
          <h1>DASHBOARD</h1>
          
          <h3>Welcome to your DashBoard</h3>
          {/* Add your widgets, charts, and other dashboard elements */}
        </Box>
      </Container>
    </React.Fragment>
  );
}
