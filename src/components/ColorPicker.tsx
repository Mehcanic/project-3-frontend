import React from 'react'
import { HuePicker, AlphaPicker } from 'react-color'

function ColorPicker() {

  const [currentColor, setCurrentColor] = React.useState('#ff6')

  const [opacity, setOpacity] = React.useState("1")

  function handleChange(color: any){
    // if(!color.rgb) return
    // const colorSorted: any = Object.keys(color.rgb).map((value: string) =>{
    //   return color.rgb[value]
    // })
    setCurrentColor(color.hex)
    setOpacity(color.hsl.a)
  }

  
  const hueCircle = {
    background: `${currentColor}`,
    opacity: `${opacity}`,
    width: "250px",
    height: "250px",
    borderRadius: "125px"
  }

  return(
  <>
    <h1 id="color-picker">Color Picker</h1>
    <div style={hueCircle}>
    </div>
    <HuePicker 
      color={currentColor}
      onChange={handleChange}
    />
    <AlphaPicker
      color={currentColor} 
      onChange={handleChange}
    />
  </>
  )
}

export default ColorPicker