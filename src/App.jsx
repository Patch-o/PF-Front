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
import Admin from "./pages/admin";
import MyPosts from "./pages/myPosts";

import "./App.scss";
// import Sphere from "./components/three/Sphere";
import ThreeScene from "./components/three/ThreeScene";
import {
  OrbitControls,
  PerspectiveCamera,
  Plane,
  PresentationControls,
  Stars,
} from "@react-three/drei";
// import Donut from "./components/three/Donut";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Model from "./components/three/HelloW";
import Me from "./components/three/Me";
import H1 from "./components/three/H1";
import H1_ from "./components/three/_h1";
import Regi from "./components/three/Register";
import Div from "./components/three/Div";
import Divout from "./components/three/Divout";
import Chat from "./components/Chat/Chat";
import Faq from "./pages/Faq";
import Donut from "./components/three/Donet";
import { useFrame } from "@react-three/fiber";
import Mundo from "./components/three/Mundo";
import AllPosts from "./pages/allPosts";
import Tie from "./components/three/Tie";
import Nefertiti from "./components/three/Nefertiti";
import Satelite from "./components/three/Satelite";

function App() {
  // const [showScroll, setShowScroll] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    //Intentar recuperar el usuario, si es que estamos logueados
    dispatch(checkUser());
  }, []);

  return (
    <div className="app">
      <div
        style={{
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
          position: "fixed",
        }}
      >
        <ThreeScene>
          <color attach="background" args={["black"]} />

          <PresentationControls
            global
            zoom={0.38}
            rotation={[0, -Math.PI / 58, 0]}
            polar={[0, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
          >
            <Model />

            <Donut
              scale={200}
              rotation={[Math.PI / 2, 0, -0.5]}
              position={[405, 1.5, 200]}
            />
            <rectAreaLight args={['orange',300]}
            position={[405, 1.5, 200]} />
            <Mundo />

            <Tie />
            <Stars count={15000} factor={2} speed={30} radius={225} />

            <H1 rotation={[Math.PI / 2, 0, -0.5]} position={[220, 0, 345]} />
            <H1_ position={[310, 0, 297]} rotation={[Math.PI / 2, 0, -0.5]} />
            <Nefertiti
            position={[100,0,-400]} />
            <pointLight
                position={[90,0,-400]}

          args={['yellow',1,40]}/>
          <Satelite 
            position={[100,0,0]}
          />
            {/* <ambientLight/> */}
            <OrbitControls
              target={[1, 2, 3]}
              maxPolarAngle={Math.PI * 0.5}
              autoRotate
              autoRotateSpeed={-.2}
            />
          </PresentationControls>
        </ThreeScene>
      </div>
      <div>
        {/*Envía al navbar la función logoutUser que es la que desloguea el usuario, y también el usuario*/}
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            {/*Envía al componente login la función loginUser, que es la que trata de loguear el usuario con la API, y también el error*/}
            <Route path="/login" element={<Login />} />
            {/*Envía al componente regiter la función registerUser, que es la que trata de registrar el usuario con la API, y también el error*/}
            <Route path="/register" element={<Register />} />
            <Route
              path="/my-account"
              element={<AuthRoute component={<MyAccount />} />}
            />
            <Route path="*" element={<NotFound />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/my-posts" element={<MyPosts />} />
            <Route path="/all-posts" element={<AllPosts />} />
          </Routes>
        </main>
        <Chat />
        <Footer />
        {/* <button onClick={() => setShowScroll(!showScroll)}>Mostrar Scroll</button>
      {showScroll && <Scroll />} */}
      </div>
    </div>
  );
}

export default App;
