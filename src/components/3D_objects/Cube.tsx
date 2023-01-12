import { useBox } from "@react-three/cannon"
function Cube(){
  const [ref] = useBox<any>(() =>({ mass: 1, position: [0, 0.6, 0] }))
  return(
    <mesh ref={ref} >
      <boxGeometry attach="geometry"/>
      <meshLambertMaterial  attach="material" color="#ff6" />
    </mesh>
  )
}

export default Cube