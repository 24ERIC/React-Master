import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Home() {
  
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Hi />
    </>
    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar position="static">
    //     <Toolbar variant="dense">
    //       <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
    //         <MenuIcon />
    //       </IconButton>
    //       <Typography variant="h6" color="inherit" component="div">
    //         Photos
    //       </Typography>
    //     </Toolbar>
    //   </AppBar>
    //   <AppBar position="static">
    //     <Toolbar variant="dense">
    //       <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
    //         <MenuIcon />
    //       </IconButton>
    //       <Typography variant="h6" color="inherit" component="div">
    //         Photos
    //       </Typography>
    //     </Toolbar>
    //   </AppBar>
    // </Box>
    
  );
}
function Hi() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            sss
          </Typography>
        </Toolbar>
      </AppBar>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            fff
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    
  );
}