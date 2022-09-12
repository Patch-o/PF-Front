/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Me(props) {
  const { nodes, materials } = useGLTF('../../../../3d/me.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Text002.geometry}
       material={materials['Material.007']}
        position={[-120,72,0]}
         rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('../../../../3d/me.glb')

export default Me