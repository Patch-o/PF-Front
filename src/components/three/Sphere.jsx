import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
//threejs importamos forma:

const Sphere = ({color, position, Mesh}) => {
  const meshRef = useRef("<Mesh>(null)");  
  
  
  useFrame(() => {
    if (!meshRef.current) {
      return;
    }
    meshRef.current.rotation.y += 0.001;
    // meshRef.current.rotation.x += 0.002;

  })
  return (
    <mesh ref={meshRef} position={position}> 
        <sphereGeometry /> 
        <meshLambertMaterial color={color}  />
    </mesh>
  )
}

export default Sphere
