import React, { useState } from "react";

function Register() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegistro = async (e) => {
    e.preventDefault();

    const userData = { nombre, email, contrasena };

    try {
      const response = await fetch("http://192.168.0.65:3001/usuarios/registro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.message === "Registro exitoso") {
          // Registro exitoso, redirige al usuario a la página de inicio de sesión
          window.location.href = "/login";
        } else {
          // Registro fallido, muestra un mensaje de error.
          setErrorMessage(data.message);
        }
      } else {
        // Maneja errores HTTP
        setErrorMessage("Error en la solicitud");
      }
    } catch (error) {
      console.error("Error de conexión:", error);
      setErrorMessage("Error de conexión");
    }
  };

  return (
    <div>
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleRegistro}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="contrasena">Contraseña:</label>
          <input
            type="password"
            id="contrasena"
            name="contrasena"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Registrarse</button>
        </div>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
}

export default Register;
