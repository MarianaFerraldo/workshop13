import React, { useEffect } from 'react';
import BoxComponent from './BoxComponent';



export default function Dashboard({ toggleSidebar }) {
    useEffect(() => {
      document.title = 'Dashboard - Your App Name'; // Set the title when the component mounts
      return () => {
        // Reset the title when the component unmounts (optional)
        document.title = 'Your App Name';
      };
    }, []); // Empty dependency array to ensure this effect runs once
  
    return (
      <React.Fragment>
        {/* Add a button to toggle the sidebar */}
        <button onClick={toggleSidebar}>Toggle Sidebar</button>
  
        {/* Include BoxComponent */}
        <BoxComponent />
  
        {/* Your main content goes here */}
        <h1>Dashboard</h1>
        {/* Add more BoxComponents or other elements as needed */}
      </React.Fragment>
    );
  }