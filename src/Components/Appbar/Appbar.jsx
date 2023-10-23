import React from 'react'
import "./Appbar.css"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export default function Appbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" style={{width:"95%", marginBottom:"20px"}}>
      <Toolbar>
        <Button color="inherit" variant='outlined' style={{marginRight:20}}>Publish</Button>
        <Button color="inherit" variant='outlined'>Edit Listing</Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}
