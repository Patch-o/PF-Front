import React from "react";
//threejs
import { Canvas } from '@react-three/fiber';


const ThreeScene = ({children}) => {
    return <Canvas
       colorManagement
    shadowMap
    camera={{position: [0,0,500], fov: 30} }
    >{children}</Canvas>
}

export default ThreeScene;