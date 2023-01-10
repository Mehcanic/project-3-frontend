import React from "react";
import { Link } from "react-router-dom";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

import { positions } from '@mui/system';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';

function Contact() {
  return (
    <>
      <Container>
        <Typography gutterBottom mt={4} variant="h3" align="center" sx={{ fontFamily: 'Oswald', fontWeight: '200' }}>
          CONTACT
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Box>
              
            </Box>
            <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column', backgroundColor: 'grey'}}>
              <Avatar src="src/images/raf.jpg" alt="Lukasz Bialy" sx={{ alignSelf: 'center', height: 80, width: 80 }} />
              <Typography sx={{ textAlign: 'center' }}>RAFAEL SOARES</Typography>
              <Grid container spacing={0}>
                <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column' }}>
                  <a style={{ display: 'flex', flexDirection: 'column' }} href="https://github.com/Rafaelvsoares">
                    <Typography sx={{ textAlign: 'center' }}>GITHUB</Typography>
                    <GitHubIcon sx={{ alignSelf: 'center' }} />
                  </a>
                </Grid>
                <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column' }}>
                  <a style={{ display: 'flex', flexDirection: 'column' }} href="https://www.linkedin.com/in/rafaelvelhosoares/">
                    <Typography sx={{ textAlign: 'center' }}>LINKEDIN</Typography>
                    <LinkedInIcon sx={{ alignSelf: 'center' }} />
                  </a>
                </Grid>
                <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column' }}>
                  <a style={{ display: 'flex', flexDirection: 'column' }} href="/">
                    <Typography sx={{ textAlign: 'center' }}>PORTFOLIO</Typography>
                    <LanguageIcon sx={{ alignSelf: 'center' }} />
                  </a>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column' }}>
              <Avatar src="src/images/lukasz.jpeg" alt="Lukasz Bialy" sx={{ alignSelf: 'center' }} />
              <Typography sx={{ textAlign: 'center' }}>LUKASZ BIALY</Typography>
            </Grid>

            <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column' }}>
              <Avatar src="src/images/rob.jpg" alt="Lukasz Bialy" sx={{ alignSelf: 'center' }} />
              <Typography sx={{ textAlign: 'center' }}>ROB WILHELMSSON</Typography>
            </Grid>
          </Grid>

        </Box>
      </Container>
      

    </>
  )
}

export default Contact



  // < Link to = {{ pathname: "https://www.linkedin.com/in/robwilhelmsson/" }} target = "_blank" ></Link >

