import React from 'react'
import { Button, CssBaseline, TextField, Link, Grid, Typography, Container, Box, createTheme, ThemeProvider } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

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
        body: {
          backgroundImage: `linear-gradient(125deg, #8ea6cb 20%, #ce8da6 80%)`,
          height: '100vh'
        }
      }
    }
  }
});

export default function Login({ fetchUser }: { fetchUser: Function }) {
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = React.useState('')
  // format to submit data
  const [formData, setFormData] = React.useState({
    email: '',
    password: ''
  })
  
  const refreshPage = () => {
    window.location.reload()
  }

  // get token
  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault()
    try {
      const { data } = await axios.post('api/login', formData)
      const token = data.token

      if(token) {
        localStorage.setItem('token', token)
        fetchUser()
        navigate('/')
        refreshPage()
      } else {
        alert("Incorrect login details!")
        setErrorMessage("Invalid login details")
      }
      
    } catch (error: any) {
      console.log(error)
      setErrorMessage(error.response.data.message)
    }
  }

  function handleChange(e: any) {
    const newFormData = structuredClone(formData)
    newFormData[e.target.name] = e.target.value
    setFormData(newFormData)
    setErrorMessage('')
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component='main' maxWidth='xs'>
        <Box component='div'
          sx={{
            marginTop: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Link href='/'>
            <img style={{ height: '100px' }} src='src/images/kleur-logo.png' alt='logoImage' />
          </Link>
          <Typography component='h1' variant='h5' fontFamily='Open Sans'>
            Login
          </Typography>
          <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={1}>
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
                  value={formData.email}
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
                  value={formData.password}
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
              Login
            </Button>
            <Grid container justifyContent='flex-end'>
              <Grid item>
                <Link href='/signup' variant='body2'>
                  No Account? Signup
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}