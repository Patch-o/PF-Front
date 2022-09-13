/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, {  useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Donut(props) {
  const { nodes, materials } = useGLTF('../../../../3d/Donet.glb')
  const dontref= useRef("<Mesh>(null)");

  useFrame(() => {
      if(!dontref.current){
        return;
      }
      dontref.current.rotation.y += 0.005;
      dontref.current.rotation.x += 0.002;
  })

  return (
    <group {...props} dispose={null}>
      <group ref={dontref} position={[-0.02, 0.03, 0]} scale={0.33}>
        <mesh  geometry={nodes.Torus001.geometry} material={materials['Material.001']} />
        <mesh  geometry={nodes.Torus001_1.geometry} material={materials['Material.002']} />
        <mesh  geometry={nodes.Torus001_2.geometry} material={materials['Material.003']} />
      </group>

    </group>
  )
}

useGLTF.preload('../../../../3d/Donet.glb')

export default Donut