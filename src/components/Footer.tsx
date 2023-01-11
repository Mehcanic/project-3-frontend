import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal, FaCcApplePay } from 'react-icons/fa'
import { CssBaseline } from '@mui/material';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        KLEUR
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#d0e9ee'
    },
  },
  typography: {
    fontFamily: 'Open Sans'
  },
});

function Footer() {
  return (
    <>
      <Container>
        <CssBaseline />
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Link href="/">
              <img style={{ height: '70px' }} src="src/images/kleur-logo.png" alt="logoImage" />
            </Link>
          </Grid>
          <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'row' }} >
            <Typography>Link 1</Typography>
            <Typography>Link 2</Typography>
            <Typography>Link 3</Typography>
            <Typography>Link 4</Typography>
          </Grid>
          
          <Grid item xs={6}>
            <Copyright />
          </Grid>
          <Grid item xs={6} sx={{ display: 'flex', flexDirection: 'row' }}>
            <Typography>Accepted Payments</Typography>
            <FaCcMastercard />
            <FaCcVisa />
            <FaCcPaypal />
            <FaCcApplePay />
            <FaCcAmex />
          </Grid>
        </Grid>
      </Container>

    </>
  )
}

export default Footer