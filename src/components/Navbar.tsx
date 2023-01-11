import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link'
import { CssBaseline } from '@mui/material';


const pagesAll = ['Products', 'Custom', 'About', 'Contact', 'Login', 'Signup'];
const basket = ['product1', 'product2', 'product3'];

function NavBar() {
  const [navMenu, setNavMenu] = React.useState<null | HTMLElement>(null);
  const [basketItems, setBasketItems] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setNavMenu(event.currentTarget);
  };

  const handleOpenBasketMenu = (event: React.MouseEvent<HTMLElement>) => {
    setBasketItems(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setNavMenu(null);
  };

  const handleCloseBasketMenu = () => {
    setBasketItems(null);
  };

  const pageStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'black',
  };


  const logSignStyle = {
    margin: "1rem",
    padding: "0.1rem 1.5rem",
    border: "0.5px solid grey",
    borderRadius: 6,
    color: 'white',
    backgroundColor: '#426da2',
  }


  const theme = createTheme({
    typography: {
      fontFamily: 'Open Sans'
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="default">

          <Container fixed>
            <Toolbar disableGutters >
            <CssBaseline />
              {/* Logo for large window */}
              <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 5 }}>
                <Link to='/'>
                  <img style={{ height: '100px', paddingTop: '10px' }} src="src/images/kleur-logo.png" alt="logoImage" />
                </Link>
              </Box>

              {/* Burger menu for mobile */}
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, color: "black" }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={navMenu}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(navMenu)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pagesAll.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              {/* Logo for mobile */}
              <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 3 }}>
                <Link to='/'>
                  <img style={{ height: '100px', paddingTop: '10px' }} src="src/images/kleur-logo.png" alt="logoImage" />
                </Link>
              </Box>

              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Link to='/products' style={pageStyle}>collections</Link>
                <Link to='/custom' style={pageStyle}>custom</Link>
                <HashLink smooth to='/#about' style={pageStyle}>about</HashLink>
                <HashLink smooth to='/#contact' style={pageStyle}>contact</HashLink>
              </Box>
              <Box sx={{ flexGrow: 0.5, display: { xs: 'none', md: 'flex' } }}>
                <Link to='/login' style={logSignStyle}>login</Link>
                <Link to='/signup' style={logSignStyle}>signup</Link>
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenBasketMenu} sx={{ p: 0 }}>
                    <ShoppingBasketIcon />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={basketItems}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(basketItems)}
                  onClose={handleCloseBasketMenu}
                >
                  {basket.map((basket) => (
                    <MenuItem key={basket} onClick={handleCloseBasketMenu}>
                      <Typography textAlign="center">{basket}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>    
          </Container>
      </AppBar>
    </ThemeProvider>
  )
}

export default NavBar












{/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pagesItems.map((page) => (
              <Link key={page} to={page}>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block', }}>
                  {page}
                </Button>
              </Link>
            ))}
          </Box>


          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            {pagesUser.map((page) => (
              <Link key={page} to={page}>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}>
                  {page}
                </Button>
              </Link>
            ))}
          </Box> */}