import { MeshWobbleMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'

const Satelite = () => {
    
    const satref= useRef("<Mesh>(null)");

    useFrame(() => {
        if(!satref.current){
            return;
        }
        satref.current.rotation.y += .002
        satref.current.rotation.x += .002
    })
  return (
    <group  ref={satref}>

    <mesh
    position={[120,50,0]}
    >
        <sphereGeometry args={[3,32,32]}
            
        />
        <MeshWobbleMaterial
            emissive={"red"}
        emissiveIntensity={.03}            
        />
    </mesh>
    </group>
  )
}

export default Satelite
