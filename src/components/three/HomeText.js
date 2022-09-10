import { useFrame, useLoader } from '@react-three/fiber'
import React, { Suspense, useRef,  } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import model from '../../assets/textures/HOMEi.gltf'

const HomeText = () => {
  
  const gltf= useLoader(GLTFLoader, model);
  const ref = useRef();
  useFrame(() => { 
    ref.current.rotation.x = Math.PI/2;
    // ref.current.rotation.z = Math.P;
    
})
 

  return (
 
      <Suspense fallback={null}>
        <primitive ref={ref} object={gltf.scene} scale={.5} position={[0,0,0]} />
      </Suspense>
 
  )
}

export default HomeText
