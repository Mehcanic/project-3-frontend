import React from 'react'
import { HuePicker, AlphaPicker, InjectedColorProps, RGBColor, ColorResult } from 'react-color'
import { Grid } from '@mui/material'


function ColorPicker(props: any) {
  const [currentColor, setCurrentColor] = React.useState<string>('#ff6')
  const [opacity, setOpacity] = React.useState<Number | undefined >(1)
  const [heroColorData, setHeroColorData] = React.useState<Array<Number | undefined>>([0, 250, 0])

  function handleChange(color: any) {
    const sortRgba = Object.keys(color.rgb).map((key: any) => {
      return color.rgb[key]
    })
    sortRgba.pop()
    setHeroColorData(sortRgba)
    setCurrentColor(color.hex!)
    setOpacity(color.hsl.a)
    props.setHeroColor(heroColorData)
    props.setHeroOpacity(opacity)
    console.log(color)
  }

  const hueCircle = {
    background: `${currentColor}`,
    opacity: `${opacity}`,
    width: "350px",
    height: "350px",
    borderRadius: "360px"
  }

  // send data back to home page for the hero bg image color and opacity

  return (
    <>
      <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
        <Grid item sx={{ display: 'flex', flexDirection: 'column', }}>
          <HuePicker
            color={currentColor}
            onChange={handleChange}
          />

        </Grid>
        <Grid item>
          <AlphaPicker
            color={currentColor}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default ColorPicker