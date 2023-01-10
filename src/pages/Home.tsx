import { Height } from "@mui/icons-material";
import { Button, Typography, Stack } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import { Container } from "@mui/system";
import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import ColorPicker from "../components/ColorPicker";

function Home() {

  const [heroColor, setHeroColor] = React.useState<string>("250, 0, 0")
  const [heroOpacity, setHeroOpacity] = React.useState<Number>(1)
  console.log(heroColor)

  const heroStyle = {
    backgroundColor: `rgb(${heroColor}, ${String(heroOpacity)})`,
    height: "500px",
  }

  console.log(heroStyle)
  return (
    <>
      <div style={heroStyle}>
        <Container maxWidth="xl">
          <Stack direction="row" alignItems="center" justifyContent="space-evenly" mb="50px" pt="50px">
            <Stack alignItems="center" justifyContent="center" spacing={10}>
              <Typography variant="h1" color="black" fontSize={70} width="483px" fontFamily="Oswald">
                Embrace Your Style With Custom Colours
              </Typography>
              <Stack direction="row" spacing={4} width="483px">
                <Button variant="contained" sx={{ background: "#446dbb", height: "40px", borderRadius: "7px" }}>BROWSE COLOURS</Button>
                <Button variant="outlined" sx={{ background: "white", border: "1px solid #446dbb", height: "40px", borderRadius: "7px" }}> CREATE CUSTOM</Button>
              </Stack>
            </Stack>
            <Stack direction="column" alignItems="center" justifyContent="center" spacing={2}>
              <ColorPicker
                setHeroColor={setHeroColor}
                setHeroOpacity={setHeroOpacity}
              />
            </Stack>
          </Stack>
        </Container>
      </div>
      <About />
      <Contact />
    </>

  )


}

export default Home