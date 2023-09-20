import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import BoxComponent from './BoxComponent';
import Box from '@mui/material/Box'; 

const dashboardStyle = {
  display: 'flex',
  bgcolor: 'grey',
  minHeight: '100vh',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  padding: '16px',
};

export default function Dashboard() {
  useEffect(() => {
    document.title = 'Workshop 27A';
    return () => {
      document.title = 'Workshop';
    };
  }, []);

  return (
    <div style={dashboardStyle}>
      <Box sx={{ padding: '16px' }}>
        <Typography variant="h2">Dashboard</Typography>
        <Typography variant="h5">Welcome to your dashboard</Typography>
      </Box>
      <Grid container spacing={2}>
       
        <Grid item xs={4}>
          <BoxComponent />
        </Grid>
        <Grid item xs={4}>
          <BoxComponent />
        </Grid>
        <Grid item xs={4}>
          <BoxComponent />
        </Grid>

        
        <Grid item xs={4}>
          <BoxComponent />
        </Grid>
        <Grid item xs={4}>
          <BoxComponent />
        </Grid>
      </Grid>
    </div>
  );
}
