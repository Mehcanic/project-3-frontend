import React from 'react'
import { HuePicker, AlphaPicker, InjectedColorProps, RGBColor } from 'react-color'
import { Stack } from '@mui/material'


interface HSLColors {
  a: any; // <--- the only problem that I can't fix with typescrip. its supposed to be number | undefined but it won't work
  h: number;
  l: number;
  s: number;
}

interface ColorResults {
  hex: string;
  hsl: HSLColors;
  rgb: RGBColor;
}

type ReactColorTypes = InjectedColorProps | ColorResults
function ColorPicker(props : any ) {
  const [currentColor, setCurrentColor] = React.useState<string>('#fff')
  const [opacity, setOpacity] = React.useState<Number>(1)
  const [heroColorData, setHeroColorData] = React.useState<Array<Number>>([0, 250, 0])
  console.log(typeof currentColor)

  function handleChange(color: any){
    const sortRgba = Object.keys(color.rgb).map((value: any) => {
      return color.rgb[value]
    })
    sortRgba.pop()
    setHeroColorData(sortRgba)
    setCurrentColor(color.hex!)
    setOpacity(color.hsl!.a)
  }
  
  const hueCircle = {
    background: `${currentColor}`,
    opacity: `${opacity}`,
    width: "350px",
    height: "350px",
    borderRadius: "360px"
  }

  // send data back to home page for the hero bg image color and opacity
  props.setHeroColor(heroColorData)
  props.setHeroOpacity(opacity)
  return(
  <>
    <div style={hueCircle}></div>
    <Stack spacing={2}>
      <HuePicker 
        color={currentColor}
        onChange={handleChange}
      />
      <AlphaPicker
        color={currentColor} 
        onChange={handleChange}
      />
    </Stack>
  </>
  )
}

export default ColorPicker