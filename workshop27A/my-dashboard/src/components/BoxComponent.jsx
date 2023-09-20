import React from 'react';
import Grid from '@mui/material/Grid'; 

const gridStyle = {
  width: '200px',
  height: '200px',
  backgroundColor: 'lightgrey',
  padding: '20px',
};

export default function BoxComponent({ style }) {
  return (
    <Grid container style={{ ...gridStyle, ...style }}>
    
    </Grid>
  );
}
