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
      <div id="contact">
        <Container maxWidth='xl'>
          <Typography gutterBottom mb={6} mt={4} variant="h3" align="center" sx={{ fontFamily: 'Oswald', fontWeight: '200' }}>
            CONTACT
          </Typography>
          {/* <Box sx={{ flexGrow: 1 }}> */}
          <Grid container spacing={0}>

            <Grid item xs={12} lg={4} md={4} sm={12} sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#d0dbee', p: 2 }}>
              <Avatar src="src/images/raf.jpg" alt="Rafael Soares" sx={{ alignSelf: 'center', height: 150, width: 150, mt: 4 }} />
              <Typography sx={{ textAlign: 'center', pt: 1, fontFamily: 'Oswald', fontWeight: 500, pb: 3 }}>RAFAEL SOARES</Typography>
              <Grid container>
                <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column' }}>
                  <a style={{ display: 'flex', flexDirection: 'column' }} href="https://github.com/Rafaelvsoares">
                    <Typography sx={{ textAlign: 'center', fontFamily: 'Open Sans', fontWeight: 600, fontSize: '13px' }}>GITHUB</Typography>
                    <GitHubIcon sx={{ alignSelf: 'center' }} />
                  </a>
                </Grid>
                <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column' }}>
                  <a style={{ display: 'flex', flexDirection: 'column' }} href="https://www.linkedin.com/in/rafaelvelhosoares/">
                    <Typography sx={{ textAlign: 'center', fontFamily: 'Open Sans', fontWeight: 600, fontSize: '13px' }}>LINKEDIN</Typography>
                    <LinkedInIcon sx={{ alignSelf: 'center' }} />
                  </a>
                </Grid>
                <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column' }}>
                  <a style={{ display: 'flex', flexDirection: 'column' }} href="/">
                    <Typography sx={{ textAlign: 'center', fontFamily: 'Open Sans', fontWeight: 600, fontSize: '13px' }}>PORTFOLIO</Typography>
                    <LanguageIcon sx={{ alignSelf: 'center' }} />
                  </a>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} lg={4} md={4} sm={12} sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#d5d0ee', p: 2 }}>
              <Avatar src="src/images/lukasz.jpeg" alt="Rafael Soares" sx={{ alignSelf: 'center', height: 150, width: 150, mt: 4 }} />
              <Typography sx={{ textAlign: 'center', pt: 1, fontFamily: 'Oswald', fontWeight: 500, pb: 3 }}>LUKASZ BIALY</Typography>
              <Grid container>
                <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column' }}>
                  <a style={{ display: 'flex', flexDirection: 'column' }} href="https://github.com/Mehcanic">
                    <Typography sx={{ textAlign: 'center', fontFamily: 'Open Sans', fontWeight: 600, fontSize: '13px' }}>GITHUB</Typography>
                    <GitHubIcon sx={{ alignSelf: 'center' }} />
                  </a>
                </Grid>
                <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column' }}>
                  <a style={{ display: 'flex', flexDirection: 'column' }} href="https://www.linkedin.com/in/%C5%82ukasz-bia%C5%82y-677a03212/">
                    <Typography sx={{ textAlign: 'center', fontFamily: 'Open Sans', fontWeight: 600, fontSize: '13px' }}>LINKEDIN</Typography>
                    <LinkedInIcon sx={{ alignSelf: 'center' }} />
                  </a>
                </Grid>
                <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column' }}>
                  <a style={{ display: 'flex', flexDirection: 'column' }} href="/">
                    <Typography sx={{ textAlign: 'center', fontFamily: 'Open Sans', fontWeight: 600, fontSize: '13px' }}>PORTFOLIO</Typography>
                    <LanguageIcon sx={{ alignSelf: 'center' }} />
                  </a>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} lg={4} md={4} sm={12} sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#d0e9ee', p: 2 }}>
              <Avatar src="src/images/rob.jpg" alt="Rafael Soares" sx={{ alignSelf: 'center', height: 150, width: 150, mt: 4 }} />
              <Typography sx={{ textAlign: 'center', pt: 1, fontFamily: 'Oswald', fontWeight: 500, pb: 3 }}>ROB WILHELMSSON</Typography>
              <Grid container>
                <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column' }}>
                  <a style={{ display: 'flex', flexDirection: 'column' }} href="https://github.com/robwilhelmsson">
                    <Typography sx={{ textAlign: 'center', fontFamily: 'Open Sans', fontWeight: 600, fontSize: '13px' }}>GITHUB</Typography>
                    <GitHubIcon sx={{ alignSelf: 'center' }} />
                  </a>
                </Grid>
                <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column' }}>
                  <a style={{ display: 'flex', flexDirection: 'column' }} href="https://www.linkedin.com/in/robwilhelmsson/">
                    <Typography sx={{ textAlign: 'center', fontFamily: 'Open Sans', fontWeight: 600, fontSize: '13px' }}>LINKEDIN</Typography>
                    <LinkedInIcon sx={{ alignSelf: 'center' }} />
                  </a>
                </Grid>
                <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column' }}>
                  <a style={{ display: 'flex', flexDirection: 'column' }} href="/">
                    <Typography sx={{ textAlign: 'center', fontFamily: 'Open Sans', fontWeight: 600, fontSize: '13px' }}>PORTFOLIO</Typography>
                    <LanguageIcon sx={{ alignSelf: 'center' }} />
                  </a>
                </Grid>
              </Grid>
            </Grid>

          </Grid>

          {/* </Box> */}
        </Container>
      </div>

    </>
  )
}

export default Contact



  // < Link to = {{ pathname: "https://www.linkedin.com/in/robwilhelmsson/" }} target = "_blank" ></Link >

