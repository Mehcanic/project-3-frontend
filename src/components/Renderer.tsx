import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei';
import Cube from './3D_objects/Cube'
import Plane from './3D_objects/Plane'
import { Physics } from '@react-three/cannon';
function Renderer({ color } : any){
  const canvasStyle ={
    height: '700px',
    background: 'black'
  }
  return(
    <Canvas style={canvasStyle}>
          <OrbitControls />
          <Stars />
          <ambientLight intensity={0.5} />
          <spotLight
            position={[10,15,10]} angle={0.3}
          />
          <Physics>
            <Cube color={color}/>
            <Plane />
          </Physics>
    </Canvas>
  )
}

export default Renderer