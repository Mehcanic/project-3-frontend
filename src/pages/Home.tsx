import { Button, Typography, Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import ColorPicker from "../components/ColorPicker";

function Home() {
  // ! heroColor and heroOpacity renders twice because of colorPicker. Find a fix for this later because it works only the warning is annoying.
  const [heroColor, setHeroColor] = React.useState<string>("250, 0, 0")
  const [heroOpacity, setHeroOpacity] = React.useState<Number>(1)
  console.log(typeof heroColor[1])

  const heroStyle = {
    backgroundColor: `rgb(${heroColor}, ${String(heroOpacity)})`,
    height: "500px",
  }

  console.log(heroStyle)
  return (
    <>
      <Container fixed sx={{mt: "30px", pb: "30px"}}>
        <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">

          <Grid item xs={12} lg={6} md={6} sx={{display: "flex", justifyContent: "center"}}>
            <Typography variant="h1" color="black" fontSize={70} width="483px" fontFamily="Oswald">
              Embrace Your Style With Custom Colours
            </Typography>
          </Grid>
          <Grid item xs={12} lg={6} md={6} sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            {/* <div style={heroStyle}></div> */}
            <ColorPicker
              setHeroColor={setHeroColor}
              setHeroOpacity={setHeroOpacity}
            />
          </Grid>
        </Grid>
        <Grid container sx={{mt:"20px"}}>
          <Grid item xs={12} lg={6} md={6} sx={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
            <Button variant="contained" sx={{ background: "#446dbb", height: "40px", borderRadius: "7px" }}>BROWSE COLOURS</Button>
            <Button variant="outlined" sx={{ background: "white", border: "1px solid #446dbb", height: "40px", borderRadius: "7px" }}> CREATE CUSTOM</Button>
          </Grid>
        </Grid>
      </Container>
      <About />
      <Contact />
    </>

  )


}

export default Home