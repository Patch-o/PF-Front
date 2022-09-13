import { MeshWobbleMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'

const Mundo = () => {
  const ballref = useRef("<Mesh>(null)");

  useFrame(() => {
    if(!ballref.current){
      return;
    }
    ballref.current.rotation.y += 0.01/22;
  })

  return (
<group>

<mesh ref={ballref} castShadow receiveShadow > 
    <sphereGeometry args={[50,32,32]} /> 
    <meshPhysicalMaterial wireframe   />
  <rectAreaLight 
  position={[0,65,25]} 
  args={['green',3,20,50]}
  />
   <rectAreaLight 
  position={[20,-70,30]} 
  args={['red',4,40]}
  />
</mesh>
<mesh>
<sphereGeometry args={[39,64,64]} /> 
    <MeshWobbleMaterial
     emissive={"#071c0f"}  metalness={2.8} roughness={0} />
</mesh>
</group>
  )
}

export default Mundo
