/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Div(props) {
  const { nodes, materials } = useGLTF('../../../../3d/div.glb')
  return (
    <group {...props} dispose={null}>
      <mesh 
      geometry={nodes.Text003.geometry} 
      material={materials['Material.005']} 
      // rotation={[Math.PI / 2, 0, 0]}
       scale={10} />
    </group>
  )
}

useGLTF.preload('../../../../3d/div.glb')

export default Div