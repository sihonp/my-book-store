import React from 'react';
import { Link } from "react-router-dom";
import { AppBar, IconButton, Toolbar, Box, Typography } from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const BottomBar = () => {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Link to="/books" style={{textDecoration: 'none', color: 'inherit'}}>
          <IconButton color="inherit" >
            <MenuBookIcon />
            <Typography variant="h3" mt={0.5}>
              Books
            </Typography>
          </IconButton>
        </Link>
        <Box sx={{ flexGrow: 1 }} />
        <Link to="/categories" style={{textDecoration: 'none', color: 'inherit'}} >
          <IconButton color="inherit">
            <CategoryIcon />
            <Typography variant="h3" mt={0.5}>
              Categories
            </Typography>
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default BottomBar