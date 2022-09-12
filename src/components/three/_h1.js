
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function H1_(props) {
  const { nodes, materials } = useGLTF('../../../../3d/_h1.glb')
  return (
    <group {...props} dispose={null}>
      <mesh 
      geometry={nodes.Text006.geometry} 
      material={materials['Material.001']} 
      position={[41,0,0]} 
      rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('../../../../3d/_h1.glb')

export default H1_