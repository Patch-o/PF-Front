import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { checkUser } from "./redux/auth/auth.actions";

// import Scroll from "./components/Scroll";3
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import MyAccount from "./pages/MyAccount";
import AuthRoute from "./components/AuthRoute";

import "./App.scss";
// import Sphere from "./components/three/Sphere";
import ThreeScene from "./components/three/ThreeScene";
import { OrbitControls, Stars, PerspectiveCamera } from '@react-three/drei';
// import Donut from "./components/three/Donut";
import HomeText from "./components/three/HomeText";
import LoginText from "./components/three/LoginText";




function App() {
  // const [showScroll, setShowScroll] = useState(false);
  const dispatch = useDispatch(); 

  useEffect(() => {
    //Intentar recuperar el usuario, si es que estamos logueados
    dispatch(checkUser());
  }, []);

  

  return (
      
      <div className="app">
               

       <div style={{ height: '100vh', width:'100vw', overflow: 'hidden', position: "fixed"}}>
       <ThreeScene>
        <color attach="background" args={['black']}/>
        {/* <Sphere color="#00ff00" position={[-1.6 , 0, 0]}/> */}
        {/* <Sphere color="#ff0000" position={[1.6 , 0, 0]} /> */}
        {/* <Donut position={[0,2,2]}/> */}
        <HomeText/>  
        <LoginText/>
           {/* <ambientLight/> */}
        <spotLight position={[100,100,100]} />
        <Stars  />
        <PerspectiveCamera makeDefault fov={90} position={[0,0,0]}/>
        <OrbitControls target={[1, 2, 3]} maxPolarAngle={Math.PI * 0.5} />
       </ThreeScene>
    </div>
      <div >

            {/*Envía al navbar la función logoutUser que es la que desloguea el usuario, y también el usuario*/}
      <Navbar /> 
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          {/*Envía al componente login la función loginUser, que es la que trata de loguear el usuario con la API, y también el error*/}
          <Route path="/login" element={<Login />} />
          {/*Envía al componente regiter la función registerUser, que es la que trata de registrar el usuario con la API, y también el error*/}
          <Route path="/register" element={<Register />} />
          <Route path="/my-account" element={
            <AuthRoute component={<MyAccount />} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      {/* <button onClick={() => setShowScroll(!showScroll)}>Mostrar Scroll</button>
      {showScroll && <Scroll />} */}
            </div>
    </div>
  );
}



export default App;