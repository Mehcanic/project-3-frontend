import React from 'react';
import { Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container, createTheme, ThemeProvider  } from '@mui/material'
import { useNavigate } from 'react-router-dom';

import Logo from '/src/images/kleur-logo.png'

// Lukasz's stuff
import axios from 'axios'

const theme = createTheme({
  palette: {
    primary:{
      main: '#d0e9ee'
    },
  },
  typography: {
    fontFamily: 'Open Sans'
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: `linear-gradient(125deg, #8ea6cb 20%, #ce8da6 80%)`
        }
      }
    }
  }
});

export default function SignUp() {
  const navigate = useNavigate()

  const [formData, setFormData] = React.useState({
    username: '',
    email: '',
    password: ''
  })

  const [errorData, setErrorData] = React.useState({
    username: '',
    email: '',
    password: ''
  })

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault()
    let isValid = true
    if (Object.values(formData).some((val) => !val)) {
      isValid = false
    }
    
    if(!isValid) {
      alert("Please fill all the fields!")
      return
    }

    try {
      await axios.post('api/signup', formData)
      navigate('/login')
    } catch (error: any) {
      setErrorData(error.response.data.errors)
    }
  }

  function handleChange(e: any) {
    const newFormData = structuredClone(formData)
    newFormData[e.target.name] = e.target.value 
    setFormData(newFormData)

    const newErrorData = structuredClone(errorData)
    newErrorData[e.target.name] = ''
    setErrorData(newErrorData)
  }

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box component='div'
          sx={{
            marginTop: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Link href='/'>
            <img style={{ height: '100px' }} src={Logo} alt='logoImage' />
          </Link>
          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>
          <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3}}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  label='Username'
                  name='username'
                  type='username'
                  id='username'
                  autoComplete='username'
                  onChange={handleChange}
                  required
                  fullWidth
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label='Email Address'
                  name='email'
                  type='email'
                  id='email'
                  autoComplete='email'
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label='Password'
                  name='password'
                  type='password'
                  id='password'
                  autoComplete='password'
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 2, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent='flex-end'>
              <Grid item>
                <Link href='/login' variant='body2'>
                  Already have an account? Login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}