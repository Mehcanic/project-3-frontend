import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
// import { createTheme } from '@mui/material/styles'
// import ThemeProvider from '@mui/material/styles'


function About() {
  return (
    <div id='about'>
      <Container maxWidth='xl'>
        <Divider variant="middle" />
        <Typography gutterBottom mt={4} variant="h3" align="center" sx={{ fontFamily: 'Oswald', fontWeight: '200' }}>
          ABOUT KLEUR
        </Typography>
        <Typography mb={4} variant="body1" align="center" sx={{ fontFamily: 'Open Sans', fontWeight: '200' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Divider variant="middle" />
      </Container>
    </div>
  )
}

export default About