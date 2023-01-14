import React from 'react'
import ColorPicker from '../components/ColorPicker'
import Renderer from '../components/Renderer'

function Custom() {
  const [heroColor, setHeroColor] = React.useState<string>('250, 0, 0')
  const [heroOpacity, setHeroOpacity] = React.useState<Number>(1)
  return (
    <>
      <Renderer color={heroColor}/>
      <ColorPicker
        setHeroColor={setHeroColor}
        setHeroOpacity={setHeroOpacity}
      />
    </>
  )
}

export default Custom