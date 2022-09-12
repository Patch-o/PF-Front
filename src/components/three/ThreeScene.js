import React from "react";
//threejs
import { Canvas } from '@react-three/fiber';


const ThreeScene = ({children}) => {
    return <Canvas
       colorManagement
    shadowMap
    camera={{position: [0,0,100], fov: 60}}
    >{children}</Canvas>
}

export default ThreeScene;