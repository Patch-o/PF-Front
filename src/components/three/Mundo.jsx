import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'

const Mundo = () => {
  const ballref = useRef("<Mesh>(null)");

  useFrame(() => {
    if(!ballref.current){
      return;
    }
    ballref.current.rotation.y += -0.01/10;
  })

  return (
    <mesh ref={ballref} castShadow receiveShadow > 
    <sphereGeometry args={[50,32,32]} /> 
    <meshPhysicalMaterial wireframe   />
  <rectAreaLight 
  position={[0,70,25]} 
  args={['green',400,20,90]}
  />
   <rectAreaLight 
  position={[0,-70,30]} 
  args={['red',400,1.45]}
  />
</mesh>
  )
}

export default Mundo
