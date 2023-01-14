import { Button, Container, CssBaseline, Grid, Typography, createTheme, ThemeProvider } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import ColorPicker from './ColorPicker'

function HeroHome() {
  const [heroColor, setHeroColor] = React.useState<string>('250, 0, 0')
  const [heroOpacity, setHeroOpacity] = React.useState<Number>(1)

  const theme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          section: {
            display: 'flex',
            alignItems: 'center',
            background: `rgb(${heroColor}, ${String(heroOpacity)})`,
            height: '720px'
          }
        }
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container fixed>
        <Grid container direction='column' justifyContent='center' alignItems='center' spacing={3}>
          <Grid item xs={12} lg={12} md={12} mt={5} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant='h1' color='black' fontFamily='Oswald' textAlign='center'>
              Embrace Your Style With Custom Colours
            </Typography>
          </Grid>
          <Grid item xs={12} lg={12} md={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ColorPicker
              setHeroColor={setHeroColor}
              setHeroOpacity={setHeroOpacity}
            />
          </Grid>
          <Grid item xs={12} lg={12} md={12} pb={5} sx={{ display: 'flex', flexDirection: 'row' }}>
            <Link to='/products'>
              <Button variant='contained' sx={{ background: '#446dbb', height: '40px', borderRadius: '7px', mr: 5 }}>BROWSE COLOURS</Button>
            </Link>
            <Link to='/custom'>
              <Button variant='outlined' sx={{ background: 'white', border: '1px solid #446dbb', height: '40px', borderRadius: '7px' }}> CREATE CUSTOM</Button>
            </Link>


          </Grid>
        </Grid>

      </Container>
    </ThemeProvider>

  )
}

export default HeroHome