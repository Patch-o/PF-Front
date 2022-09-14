import React from "react";
//threejs
import { Canvas } from '@react-three/fiber';


const ThreeScene = ({children}) => {
    return <Canvas
       colorManagement
    shadowMap
    camera={{position: [100,0,500], fov: 40} }
    >{children}</Canvas>
}

export default ThreeScene;