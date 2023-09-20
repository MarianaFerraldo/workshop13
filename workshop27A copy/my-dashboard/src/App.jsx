import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import LeftDrawer from './components/LeftDrawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Dashboard from './components/Dashboard';

export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar style={{ backgroundColor: 'transparent' }}> 
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <LeftDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      <Container
        sx={{
          marginLeft: isDrawerOpen ? '240px' : '0',
          transition: 'margin-left 0.3s',
          display: 'flex',
          bgcolor: '#F2F3F5',
          minHeight: '100vh',
          padding: '2rem',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Dashboard />
      </Container>
    </React.Fragment>
  );
}
