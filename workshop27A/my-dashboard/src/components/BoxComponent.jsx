import React from 'react';
import Grid from '@mui/material/Grid'; // Import the Grid component

const gridStyle = {
  width: '200px',
  height: '200px',
  backgroundColor: 'lightgrey',
  padding: '20px',
};

export default function BoxComponent({ style }) {
  return (
    <Grid container style={{ ...gridStyle, ...style }}>
      {/* Your content for the GridComponent */}
    </Grid>
  );
}
