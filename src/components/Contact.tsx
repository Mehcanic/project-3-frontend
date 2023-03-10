import React from 'react';
import { Container, Typography, Grid, Avatar } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';

import Raf from '/src/images/raf.jpg';
import Rob from '/src/images/rob.jpg';
import Lukasz from '/src/images/lukasz.jpg';

function Contact() {


  return (
    <>
      <div id='contact'>
        <Container fixed>
          <Grid container spacing={0} mt={5}>
            <Grid item xs={12} lg={12} md={12} sm={12}>
              <Typography gutterBottom mb={6} mt={4} variant='h3' align='center' sx={{ fontFamily: 'Oswald', fontWeight: '200' }}>
                CONTACT
              </Typography>
            </Grid>
            <Grid item xs={12} lg={4} md={4} sm={12} sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#d0dbee', p: 2}}>
              <Avatar src={Raf} alt='Rafael Soares' sx={{ alignSelf: 'center', height: 150, width: 150, mt: 4 }} />
              <Typography sx={{ textAlign: 'center', pt: 1, fontFamily: 'Oswald', fontWeight: 500, pb: 3 }}>RAFAEL SOARES</Typography>
              <Grid container>
                <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column' }}>
                  <a style={{ display: 'flex', flexDirection: 'column' }} href='https://github.com/Rafaelvsoares'>
                    <Typography sx={{ textAlign: 'center', fontFamily: 'Open Sans', fontWeight: 600, fontSize: '13px' }}>GITHUB</Typography>
                    <GitHubIcon sx={{ alignSelf: 'center' }} />
                  </a>
                </Grid>
                <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column' }}>
                  <a style={{ display: 'flex', flexDirection: 'column' }} href='https://www.linkedin.com/in/rafaelvelhosoares/'>
                    <Typography sx={{ textAlign: 'center', fontFamily: 'Open Sans', fontWeight: 600, fontSize: '13px' }}>LINKEDIN</Typography>
                    <LinkedInIcon sx={{ alignSelf: 'center' }} />
                  </a>
                </Grid>
                <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column' }}>
                  <a style={{ display: 'flex', flexDirection: 'column' }} href='/'>
                    <Typography sx={{ textAlign: 'center', fontFamily: 'Open Sans', fontWeight: 600, fontSize: '13px' }}>PORTFOLIO</Typography>
                    <LanguageIcon sx={{ alignSelf: 'center' }} />
                  </a>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} lg={4} md={4} sm={12} sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#d5d0ee', p: 2 }}>
              <Avatar src={Lukasz} alt='Rafael Soares' sx={{ alignSelf: 'center', height: 150, width: 150, mt: 4 }} />
              <Typography sx={{ textAlign: 'center', pt: 1, fontFamily: 'Oswald', fontWeight: 500, pb: 3 }}>LUKASZ BIALY</Typography>
              <Grid container>
                <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column' }}>
                  <a style={{ display: 'flex', flexDirection: 'column' }} href='https://github.com/Mehcanic'>
                    <Typography sx={{ textAlign: 'center', fontFamily: 'Open Sans', fontWeight: 600, fontSize: '13px' }}>GITHUB</Typography>
                    <GitHubIcon sx={{ alignSelf: 'center' }} />
                  </a>
                </Grid>
                <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column' }}>
                  <a style={{ display: 'flex', flexDirection: 'column' }} href='https://www.linkedin.com/in/%C5%82ukasz-bia%C5%82y-677a03212/'>
                    <Typography sx={{ textAlign: 'center', fontFamily: 'Open Sans', fontWeight: 600, fontSize: '13px' }}>LINKEDIN</Typography>
                    <LinkedInIcon sx={{ alignSelf: 'center' }} />
                  </a>
                </Grid>
                <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column' }}>
                  <a style={{ display: 'flex', flexDirection: 'column' }} href='/'>
                    <Typography sx={{ textAlign: 'center', fontFamily: 'Open Sans', fontWeight: 600, fontSize: '13px' }}>PORTFOLIO</Typography>
                    <LanguageIcon sx={{ alignSelf: 'center' }} />
                  </a>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} lg={4} md={4} sm={12} sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#d0e9ee', p: 2 }}>
              <Avatar src={Rob} alt='Rafael Soares' sx={{ alignSelf: 'center', height: 150, width: 150, mt: 4 }} />
              <Typography sx={{ textAlign: 'center', pt: 1, fontFamily: 'Oswald', fontWeight: 500, pb: 3 }}>ROB WILHELMSSON</Typography>
              <Grid container>
                <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column' }}>
                  <a style={{ display: 'flex', flexDirection: 'column' }} href='https://github.com/robwilhelmsson'>
                    <Typography sx={{ textAlign: 'center', fontFamily: 'Open Sans', fontWeight: 600, fontSize: '13px' }}>GITHUB</Typography>
                    <GitHubIcon sx={{ alignSelf: 'center' }} />
                  </a>
                </Grid>
                <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column' }}>
                  <a style={{ display: 'flex', flexDirection: 'column' }} href='https://www.linkedin.com/in/robwilhelmsson/'>
                    <Typography sx={{ textAlign: 'center', fontFamily: 'Open Sans', fontWeight: 600, fontSize: '13px' }}>LINKEDIN</Typography>
                    <LinkedInIcon sx={{ alignSelf: 'center' }} />
                  </a>
                </Grid>
                <Grid item xs={4} sx={{ display: 'flex', flexDirection: 'column' }}>
                  <a style={{ display: 'flex', flexDirection: 'column' }} href='/'>
                    <Typography sx={{ textAlign: 'center', fontFamily: 'Open Sans', fontWeight: 600, fontSize: '13px' }}>PORTFOLIO</Typography>
                    <LanguageIcon sx={{ alignSelf: 'center' }} />
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Typography mt={4} p={4} variant='subtitle1' align='center' sx={{ fontFamily: 'Open Sans', fontWeight: '400' }}>Three programming friends enrolled in a course with General Assembly in London testing our skills and building a full stack application for mobile and web, selling beautiful colours to all.</Typography>
        </Container>
      </div>

    </>
  )
}

export default Contact



