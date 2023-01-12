import { useBox } from "@react-three/cannon"
import { Mesh } from "three"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
function Cube(){
  const meshRef = useRef<Mesh>(null)
  
  useFrame(()=>{
    if(!meshRef.current){
      return
    }
    meshRef.current.rotation.x += 0.01
    meshRef.current.rotation.y += 0.01
  })

  return(
    <mesh ref={meshRef} >
      <boxGeometry attach="geometry"/>
      <meshLambertMaterial  attach="material" color="#ff6" />
    </mesh>
  )
}

export default Cube