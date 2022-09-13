import React from 'react'

const Mundo = () => {
  return (
    <mesh castShadow receiveShadow > 
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
