import { usePlane } from "@react-three/cannon"
function Plane(){
  const [ref] = usePlane<any>(() =>({ position: [0, -10, 0], rotation: [-Math.PI/2, 0, 0] }))
  return(
    <mesh ref={ref}>
      <planeGeometry attach="geometry" args={[100, 100]}/>
      <meshLambertMaterial attach="material" color="#fff"/>
    </mesh>
  )
}

export default Plane