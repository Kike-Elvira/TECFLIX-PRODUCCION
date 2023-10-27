import React, { useState } from 'react';

function Register() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleRegistro = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos al servidor y manejar el registro.
    // Normalmente, se enviarían los datos a través de una solicitud HTTP.

    // Por ejemplo, podrías usar la función fetch para enviar los datos al servidor:
    // fetch('/api/registro', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ nombre, email, contrasena })
    // })
    // .then(response => response.json())
    // .then(data => {
    //   // Maneja la respuesta del servidor, como redirección o mensajes de éxito/error.
    // });
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
    </div>
  );
}

export default Register;
