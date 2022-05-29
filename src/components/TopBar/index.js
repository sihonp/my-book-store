import React from 'react';
import { useLocation } from 'react-router-dom';
import { Button, AppBar, IconButton, Toolbar, Box, Typography } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const TopBar = ({ setMode, mode, handleOpen}) => {

  const { pathname } = useLocation();
  const changeTheme = () => {
    setMode((prevMode) =>
      prevMode === 'light' ? 'dark' : 'light',
    );
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          {pathname === '/categories' ?
            <Typography variant="h6" component="div" >
              Category Lists <Button color="inherit" onClick={handleOpen}>Add New Category</Button>
            </Typography>
            :
            <Typography variant="h6" component="div" >
              Book Lists <Button color="inherit" onClick={handleOpen}>Add New Book</Button>
            </Typography>
          }
        </Box>
        <Box>
          <IconButton onClick={changeTheme} color="inherit">
            {mode === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default TopBar;