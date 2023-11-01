import React, { useState } from "react";
import ".//Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Estado para mostrar mensajes de error

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Realiza la solicitud al backend para el inicio de sesión
    try {
      const response = await fetch("http://localhost:3001/usuarios/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password: pass }),
      });

      if (response.status === 200) {
        // Inicio de sesión exitoso, redirige al usuario a la página deseada
        const data = await response.json();
        const token = data.token;

        // Guarda el token en el Local Storage
        localStorage.setItem("token", token);
        
        window.location.href = "/"; // Reemplaza '/dashboard' con la ruta adecuada
      } else {
        const data = await response.json();
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Error de conexión");
    }
  };

  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Tu correo electrónico"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Tu contraseña"
            required
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <p>
        ¿No tienes una cuenta? <a href="/register">Regístrate aquí</a>
      </p>
    </div>
  );
};

export default Login;
