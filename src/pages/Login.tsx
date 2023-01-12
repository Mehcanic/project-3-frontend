import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Gradient, LineAxisOutlined, Refresh } from '@mui/icons-material';

// Lukasz's stuff
import { SyntheticEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Products from './Products'


function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
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
          backgroundImage: `linear-gradient(125deg, #8ea6cb 20%, #ce8da6 80%)`
        }
      }
    }
  }
});

export default function Login({ fetchUser }: { fetchUser: Function }) {
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = React.useState("")
  
  const [formData, setFormData] = React.useState({
    email: "",
    password: ""
  })
  
  const refreshPage = () => {
    window.location.reload()
  }

  async function handleSubmit(e: SyntheticEvent) {
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
    setErrorMessage("")
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box component="div"
          sx={{
            marginTop: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Link href="/">
            <img style={{ height: '100px' }} src="src/images/kleur-logo.png" alt="logoImage" />
          </Link>
          <Typography component="h1" variant="h5" fontFamily='Open Sans'>
            Login
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  id="email"
                  autoComplete="email"
                  onChange={handleChange}
                  value={formData.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Password"
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="password"
                  onChange={handleChange}
                  value={formData.password}
                />
              </Grid>
              <Grid item xs={12}>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 2, mb: 2 }}
            >
              Login
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signup" variant="body2">
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