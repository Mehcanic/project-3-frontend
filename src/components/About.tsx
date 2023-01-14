import { Container, Typography, Grid } from '@mui/material'

function About() {
  const aboutStyle = {
    display: 'flex',
    alignItems: 'center',
    height: '700px'
  }
  return (
    <div id='about' style={aboutStyle}>
      <Container fixed>
        <Grid container justifyContent='center' spacing={6}>
          <Grid item>
            <Typography gutterBottom mt={4} variant='h3' align='center' sx={{ fontFamily: 'Oswald', fontWeight: '200' }}>
              ABOUT KLEUR
            </Typography>
          </Grid>
          <Grid item>
            <Typography mb={4} variant='body1' align='center' sx={{ fontFamily: 'Open Sans', fontWeight: '200' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default About