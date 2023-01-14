import React from 'react';
import { CssBaseline, Box, Typography, Link, Grid, Container, Divider, createTheme, ThemeProvider } from '@mui/material';
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal, FaCcApplePay } from 'react-icons/fa'
import Copyright from './Copyright';

import Logo from '/src/images/kleur-logo.png'

const theme = createTheme({
  palette: {
    primary: {
      main: '#d0e9ee',
    },
  },
  typography: {
    fontFamily: 'Open Sans',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        footer: {
          background: '#A9BCDF'
        }
      }
    }
  }
});

function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container fixed>
        <Grid container direction='row' spacing={5} sx={{ mt: 1 }}>
          <Grid item xs={6} md={3} lg={3} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <Link href='/'>
              <img style={{ height: '70px' }} src={Logo} alt='logoImage' />
            </Link>
          </Grid>
          <Grid item xs={6} md={3} lg={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
            <Typography fontFamily='Oswald' fontSize={20} fontWeight='bold' >About Us</Typography>
            <Typography>contact</Typography>
          </Grid>

          <Grid item xs={6} md={3} lg={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
            <Typography fontFamily='Oswald' fontSize={20} fontWeight='bold'>Terms & Conditions</Typography>
            <Typography>privacy policy</Typography>
            <Typography>licensing</Typography>
          </Grid>

          <Grid item xs={6} md={3} lg={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography fontFamily='Oswald' fontSize={20} fontWeight='bold'>Pay With</Typography>
            <Box component='div' sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '125px' }}>
              <FaCcMastercard />
              <FaCcVisa />
              <FaCcPaypal />
              <FaCcApplePay />
              <FaCcAmex />
            </Box>

          </Grid>
        </Grid>
        <Divider variant='middle' sx={{ mt: '25px', mb: '10px' }} />
        <Grid item xs={3} lg={6} pb='10px'>
          <Copyright />
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

export default Footer