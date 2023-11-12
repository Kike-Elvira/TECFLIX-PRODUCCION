import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SeccionContenido from "./components/SeccionContenido/SeccionContenido";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import axios from "axios";
import VideoPlayer from "./components/videoPlayer/VideoPlayer";
import Catalogo from "./components/catalogo/Catalogo";
import ContenidoCatalogo from "./components/contenidoCatalogo/ContenidoCatalogo";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    async function isUserAuthenticated() {
      try {
        const token = localStorage.getItem("token");

        if (token) {
          // Hacer una solicitud al backend para verificar el estado de autenticación
          const response = await axios.get(
            "http://192.168.0.65:3001/verificar-autenticacion",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (response.status === 200) {
            // El usuario está autenticado
            setIsLogin(false); // Cambia la página de inicio a la sección de contenido
          }
        }
      } catch (error) {
        // Si hay un error en la solicitud, el usuario no está autenticado
        setIsLogin(true);
      }
    }

    isUserAuthenticated();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isLogin ? <Login /> : <Navigate to="/contenido" />}
        />
        <Route
          path="/contenido"
          element={
            isLogin ? (
              <Navigate to="/login" />
            ) : (
              <SeccionContenido />
            )
          }
        />
        <Route path="/registro" element={<Register />} />
        <Route
          path="/login"
          element={
            isLogin ? (
              <Navigate to="/contenido" /> // Redirige a /contenido si el usuario ya está logueado
            ) : (
              <Login />
            )
          }
        />
        <Route path="/videoPlayer/:Titulo" element={<VideoPlayer />} />
        <Route path="/catalogo" element={<Catalogo></Catalogo>}></Route>
        <Route path="/contenido_catalogo/:Nombre" element={<ContenidoCatalogo></ContenidoCatalogo>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
