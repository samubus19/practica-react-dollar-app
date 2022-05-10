import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }} >
        <AppBar position="static" color='transparent'>
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuTwoToneIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              Cotizaciones del día
            </Typography>
          </Toolbar>
        </AppBar>
    </Box>
  );
}
