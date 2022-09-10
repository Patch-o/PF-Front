import { useLoader } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import model from '../../assets/textures/LOGIN.gltf'

const LoginText = () => {
    const gltf = useLoader(GLTFLoader, model)

  return (
    <Suspense fallback={null}>
        <primitive  object={gltf.scene} scale={.5} position={[0,0,0]} />
      </Suspense>
  )
}

export default LoginText
