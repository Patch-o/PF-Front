

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Regi(props) {
  const { nodes, materials } = useGLTF('../../../../3d/register.glb')
  return (
    <group {...props} dispose={null}>
      <mesh 
      geometry={nodes.Text001.geometry} 
      material={materials['Material.008']} 
      position={[95,72,0]} 
      rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('../../../../3d/register.glb')

export default Regi
