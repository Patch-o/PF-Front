/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState } from "react";
import { Environment, Float, useGLTF } from "@react-three/drei";
// import { useControls} from 'leva';


export function Model(props) {
 
 const ref = useRef();
  // const {scale } = useControls({scale:"1.4"})
  const { nodes, materials } = useGLTF("../../../../3d/textos.glb");
  
 
  return (
    <group {...props} dispose={null}>
    <Float 
    speed={3.45}
    rotationIntensity={.093}
    
    >

      <mesh
        ref={ref}
        castShadow
        receiveShadow
        geometry={nodes.Text008.geometry}
        material={materials["Material.004"]}
        position={[250,0,330]}
        rotation={[Math.PI / 2, 0, -.5]}
      />
    </Float>
      <rectAreaLight position={[220,0,300]} />
      <rectAreaLight args={['#b8f1c4',250,10,10]} position={[270,-60,390]}/>
      <rectAreaLight args={['blue',600,]} position={[250,-20,370]}/>
      <pointLight args={['red',3.9,50]} position={[250,30,290]}/>
      <pointLight args={['#bca977',1.9,100]} position={[400,30,200]}/>
      <pointLight args={['purple',-1.9,100]} position={[400,-30,200]}/>
      <pointLight args={['orange',-.5,100]} position={[424,-30,200]}/>
      <pointLight args={['red',-.85,20,.2]} position={[230,-4,355]}/>
      <pointLight args={['blue',-.85,20,.2]} position={[230,15,355]}/>
      <pointLight args={['blue',-.95,20,.2]} position={[230,-10,325]}/>
      <pointLight args={['white',-1,30]} position={[336,0,310]}/>

     
     
      {/* <Environment background>
        <sphereGeometry args={[1,64,64]}/>
        
      </Environment> */}
      {/* <perspectiveCamera/> */}
    </group>
  );
}

useGLTF.preload("../../../../3d/textos.glb");

export default Model;
