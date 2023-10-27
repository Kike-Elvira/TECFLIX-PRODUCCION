import React, { useState } from "react";
import ".//Login.css";
const Login = () => {
  const [email, setEmail] = useState('');
  const [pass,setPass] = useState('')
  return (
    <div class="login-container">
      <h2>Iniciar sesión</h2>
      <form>
        <div className="form-group">
          <label for="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Tu correo electrónico"
            required
            value={email}
            onChange={ (e => {
                setEmail(e.target.value)
            }) 
            }
          ></input>
        </div>
        <div className="form-group">
          <label for="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Tu contraseña"
            required
            value={pass}
            onChange={(e=>{
                setPass(e.target.value)
            })}
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
      <p>¿No tienes una cuenta? <a href="/register">Regístrate aquí</a></p>
    </div>
  );
};

export default Login;
