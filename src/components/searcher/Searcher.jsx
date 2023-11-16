import React, { useState } from "react";
import "../searcher/Searcher.css";
import { useNavigate } from "react-router-dom";

const Searcher = (props) => {
  const { isHover } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const [resultados, setResultados] = useState([]);
  const navigate = useNavigate();
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      // Realiza la solicitud al backend con el término de búsqueda
      const response = await fetch(
        `http://192.168.0.65:3001/videos/select_videos_filtrar?titulo=${searchTerm}`
      );

      if (!response.ok) {
        throw new Error(`Error al buscar videos: ${response.statusText}`);
      }

      const data = await response.json();
      setResultados(data);
      console.log(data);
    } catch (error) {
      console.error(error);
      // Puedes manejar el error de acuerdo a tus necesidades
    }
  };
  return (
    <div>
      <form
        className={`searcher_form${isHover ? " searcher_form_visible" : ""}`}
        onSubmit={handleSearch}
      >
        <input
          className="searcher_box"
          type="text"
          name="q"
          placeholder="Buscar Película"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button className="searcher_buton" type="submit">
          Buscar
        </button>
      </form>

      {resultados.length > 0 && (
        <div className="search-results">
          <p>Resultados de la búsqueda:</p>
          <ul>
            {resultados.map((video) => (
              <li
                className="resultado"
                key={video.id}
                onClick={() => navigate(`/videoPlayer/${video.Titulo}`)}
              >
                {video.Titulo}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Searcher;


