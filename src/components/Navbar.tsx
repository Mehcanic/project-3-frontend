import React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Tooltip, Container, MenuItem, CssBaseline } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'
import BasketModal from '../pages/BasketModal';

import Logo from '/src/images/kleur-logo.png'

const basket = ['product1', 'product2', 'product3'];

function NavBar() {
  // State and function for changing login to logout text - LB
  const navigate = useNavigate()
  const [token, setToken] = React.useState(localStorage.getItem('token') || null)
  const [loginText, setLoginText] = React.useState('login')

  React.useEffect(() => {
    if(token) {
      setLoginText('logout')
    } else {
      setLoginText('login')
    }
  }, [token])

  const handleLogout = () => {
    if(loginText === 'logout')
    localStorage.removeItem('token')
    setToken(null)
    navigate('/login')
  }

  // LB

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
    margin: '1rem',
    textDecoration: 'none',
    color: 'black',
  };

  const logSignStyle = {
    margin: '1rem',
    padding: '0.1rem 1.5rem',
    border: '0.5px solid grey',
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
      <div id='home'></div>
      <AppBar position='static' color='default'>

        <Container fixed>
          <Toolbar disableGutters >
            <CssBaseline />
            {/* Logo for large window */}
            <Box component='div' sx={{ display: { xs: 'none', md: 'flex' }, mr: 5 }}>
              <Link to='/'>
                <img style={{ height: '100px', paddingTop: '10px' }} src={Logo} alt='logoImage' />
              </Link>
            </Box>

            {/* Burger menu for mobile */}
            <Box component='div' sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, color: 'black' }}>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
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
                  <MenuItem>
                    <Link to='/products' style={pageStyle}>collections</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/custom' style={pageStyle}>custom</Link>
                  </MenuItem>
                  <MenuItem>
                    <HashLink smooth to='/#about' style={pageStyle}>about</HashLink>
                  </MenuItem>
                  <MenuItem>
                    <HashLink smooth to='/#contact' style={pageStyle}>contact</HashLink>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/login' style={pageStyle} onClick={handleLogout}>{loginText}</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to='/signup' style={pageStyle}>signup</Link>
                  </MenuItem> 
              </Menu>
            </Box>

            {/* Logo for mobile */}
            <Box component='div' sx={{ display: { xs: 'flex', md: 'none' }, mr: 3 }}>
              <Link to='/'>
                <img style={{ height: '100px', paddingTop: '10px' }} src={Logo} alt='logoImage' />
              </Link>
            </Box>

            <Box component='div' sx={{ fontFamily: 'Open Sans', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Link to='/products' style={pageStyle}>collections</Link>
              <Link to='/custom' style={pageStyle}>custom</Link>
              <HashLink smooth to='/#about' style={pageStyle}>about</HashLink>
              <HashLink smooth to='/#contact' style={pageStyle}>contact</HashLink>
            </Box>
            <Box component='div' sx={{ fontFamily: 'Open Sans', flexGrow: 0.5, display: { xs: 'none', md: 'flex' } }}>
              <Link to='/login' style={logSignStyle} onClick={handleLogout}>{loginText}</Link>
              <Link to='/signup' style={logSignStyle}>signup</Link>
            </Box>

            <BasketModal />
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