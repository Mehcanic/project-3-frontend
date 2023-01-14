import React from 'react'
import ColorPicker from '../components/ColorPicker'
import Renderer from '../components/Renderer'
import { Container, Grid } from '@mui/material'

function Custom() {
  const [heroColor, setHeroColor] = React.useState<string>('250, 0, 0')
  const [heroOpacity, setHeroOpacity] = React.useState<Number>(1)
  return (
    <>
      <Container fixed>
        <Grid container>
          <Grid item lg={6} md={6} xs={12}>
            <Renderer color={heroColor} />
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <ColorPicker
              setHeroColor={setHeroColor}
              setHeroOpacity={setHeroOpacity}
            />
          </Grid>

        </Grid>



      </Container>

    </>
  )
}

export default Custom