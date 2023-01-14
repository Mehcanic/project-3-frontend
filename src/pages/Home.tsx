import { CssBaseline, ThemeProvider, createTheme, Divider } from '@mui/material';
import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import HeroHome from '../components/HeroHome';

function Home() {

  return (
    <>
      <section>
        <HeroHome />
      </section>
      <Divider variant='middle' />
      <About />
      <Divider variant='middle' />
      <Contact />
    </>
  )


}

export default Home