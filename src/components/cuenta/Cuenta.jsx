import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import src from "../../assets/img/logos/Logo TECFLIX.png";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cuenta.css";
const Cuenta = () => {
  const email = localStorage.getItem("correo");
  const usuario = localStorage.getItem("usuario");
  const navigate = useNavigate();
  const [confirmarContrasena, setConfirmarContrasena] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [mostrarInput, setMostrarInput] = useState(false);

  const handleBorrarClick = () => {
    // Muestra el input solo cuando se confirme el borrado
    setMostrarInput(true);
  };

  const handleConfirmarClick = () => {
    // Realiza la llamada al backend para borrar al usuario.
    axios
      .post("http://192.168.0.65:3001/usuarios/borrar", {
        email: email,
        contrasena: confirmarContrasena,
      })
      .then((response) => {
        // Muestra el primer mensaje
        setMensaje(response.data.message);

        // Después de 2 segundos, muestra el segundo mensaje
        setTimeout(() => {
            setMensaje("Saliendo de la cuenta");

          // Después de 2 segundos más, muestra el tercer mensaje
          setTimeout(() => {
            localStorage.removeItem("token");
            localStorage.removeItem("correo");
            localStorage.removeItem("usuario");
            navigate("/login");
          }, 2000);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error al borrar usuario:", error);
        setMensaje("Error al intentar borrar el usuario.");
      });
  };

  const handleContrasenaChange = (event) => {
    setConfirmarContrasena(event.target.value);
  };
  return (
    <>
      <Header></Header>
      <div className="fondo">
      <div className="logo">
      <img className="logoPrincipal" src={src} alt= {src} />
    </div>
      <div className="cuentaContainer">
        <h2>Correo de la cuenta: {email} </h2>
        <h2>Nombre de la cuenta: {usuario}</h2>
        <button className="buttonBorrar" onClick={handleBorrarClick}>
          Borrar Cuenta
        </button>
        <div>
          {mostrarInput && (
            <div>
              <input
              className="netflix-input"
                type="password"
                placeholder="Ingresa tu contraseña"
                value={confirmarContrasena}
                onChange={handleContrasenaChange}
              />
              <button className="buttonBorrar" onClick={handleConfirmarClick}>Confirmar Borrado</button>
            </div>
          )}
          <p className="mensaje">{mensaje}</p>
        </div>
      </div>
      /</div>
      <Footer></Footer>
    </>
  );
};

export default Cuenta;
