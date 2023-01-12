import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcPaypal, FaCcApplePay } from 'react-icons/fa'
import { CssBaseline } from '@mui/material';
import Copyright from './Copyright';

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
      <Box component='div' sx={{ background: '#A9BCDF' }}>
        <Container fixed>
          <CssBaseline />
          <Grid container direction='row' spacing={5}>
            <Grid item xs={6} md={3} lg={3} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
              <Link href='/'>
                <img style={{ height: '70px' }} src='src/images/kleur-logo.png' alt='logoImage' />
              </Link>
            </Grid>
            <Grid item xs={6} md={3} lg={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
              <Typography fontFamily="Oswald" fontSize={20} fontWeight="bold" >About Us</Typography>
              <Typography>contact</Typography>
            </Grid>

            <Grid item xs={6} md={3} lg={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
              <Typography fontFamily="Oswald" fontSize={20} fontWeight="bold">Terms & Conditions</Typography>
              <Typography>privacy policy</Typography>
              <Typography>licensing</Typography>
            </Grid>

            <Grid item xs={6} md={3} lg={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
              <Typography fontFamily="Oswald" fontSize={20} fontWeight="bold">Pay With</Typography>
              <Box component="div" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '125px' }}>
                <FaCcMastercard/>
                <FaCcVisa />
                <FaCcPaypal />
                <FaCcApplePay />
                <FaCcAmex />
              </Box>

            </Grid>
          </Grid>
          <Divider variant="middle" sx={{mt: '25px', mb: '10px'}}/>
          <Grid item xs={3} lg={6} pb="10px">
            <Copyright />
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Footer