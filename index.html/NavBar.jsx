import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import { NavLink } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button'; // Add this import

import './navbar.css';

const Header = styled(AppBar)`
  background: pink;
`;

const Tab = styled(NavLink)`
  font-size: 20px;
  color: inherit;
  margin-right: 2%;
  text-decoration: none;
  padding: 3px 3px;
  
  @media (max-width: 768px) {
    font-size: 16px;
    margin-right: 1%;
  }
`;

function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const v = localStorage.getItem('data');

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Header position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LocalFloristIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Fresh N Refreshing
          </Typography>

          <LocalFloristIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Fresh N Refreshing
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'flex', md: 'none' } }}
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuItem onClick={handleMenuClose}>
              <Tab to="/">Home</Tab>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Tab to="/login">Login</Tab>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Tab to="/logout">LogOut</Tab>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Tab>Hello: {v}</Tab>
            </MenuItem>
          </Menu>
          <div style={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end' }}>
            <Tab to="/" sx={{ display: { xs: 'none', md: 'flex' } }}>Home</Tab>
            <Tab to="/login" sx={{ display: { xs: 'none', md: 'flex' } }}>Login</Tab>
            <Tab to="/logout" sx={{ display: { xs: 'none', md: 'flex' } }}>LogOut</Tab>
            <Tab sx={{ display: { xs: 'none', md: 'flex' } }}>Hello:</Tab>
            <Tab sx={{ display: { xs: 'none', md: 'flex' } }}>{v}</Tab>
          </div>
        </Toolbar>
      </Container>
    </Header>
  );
}

export default NavBar;
