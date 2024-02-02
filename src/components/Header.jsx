// Importing React.
import React from 'react';

// Importing AppBar, Toolbar and Typograpgy from Material UI.
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
function Header() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Robot E-Commerce Store
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;


