import React, { Suspense, useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import model from '../../assets/textures/donutsprinklesFull.gltf'

const Donut = ({position, primitive}) => {
    const gltf = useLoader(GLTFLoader, model);
    const primRef = useRef("<primitive>(null)");
    useFrame (() => {
      if (!primRef.current) {
        return;
      }
      primRef.current.position.y = 0.01121;
      // primRef.current.position.x += 0.0022;
      
  })

  return (
    <Suspense  fallback={null}>
      <primitive  ref={primRef} object={gltf.scene} scale={10} position={position}/>
    </Suspense>
  )
}

export default Donut
