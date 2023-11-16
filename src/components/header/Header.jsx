import ".//Header.css";
import Logo from "../../assets/img/logos/Logo TECFLIX.png";
import Logo_Lupa from "../../assets/img/logos/lupa.png";
import Searcher from "../searcher/Searcher";
import { Link, useNavigate } from "react-router-dom";
const Header = (props) => {
  const { handleSearch, isHover } = props;
  // Cerrar sesión y eliminar el token
  //const {cerrarSesion} = props
  const email = localStorage.getItem("correo");

  const handleSubmit = async (e) => {
    // Realiza la solicitud al backend para el inicio de sesión
    try {
      const response = await fetch("http://192.168.0.65:3001/usuarios/consulta", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 200) {
        const data = await response.json();
        const usuario = data[0].NombreUsuario;
        localStorage.setItem("usuario", usuario);
        // Guarda el token en el Local Storage
      } else {
      }
    } catch (error) {
      console.error(error);
    }
  };

  const navigate = useNavigate();
  const cerrarSesion = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("correo");
    localStorage.removeItem("usuario");
    navigate("/login"); // Redirige al usuario a la página de inicio de sesión
  };
  return (
    <div className="navbar">
      <img src={Logo} className="logo_Tecflix" alt="TECFLIX" />
      <ul className="navbar_principal">
        <Link to="/contenido">
          <li className="navbar_item">Home</li>
        </Link>
        <Link to="/catalogo">
          <li className="navbar_item">Catalogo</li>
        </Link>
      </ul>

      <ul className="navbar_secundario">
        <div className="search_box">
          <li className="navbar_item">
            <img
              src={Logo_Lupa}
              className="logo_Lupa"
              alt="Buscar"
              onClick={handleSearch}
            />
          </li>
          {isHover ? (
            <Searcher isHover={isHover}></Searcher>
          ) : (
            <Searcher isHover={isHover}></Searcher>
          )}
        </div>
        <Link to="/cuenta">
          <li className="navbar_item" onClick={handleSubmit}>
            Cuenta
          </li>
        </Link>

        <li className="navbar_item" onClick={cerrarSesion}>
          Cerrar Sesion
        </li>
      </ul>
    </div>
  );
};

export default Header;
