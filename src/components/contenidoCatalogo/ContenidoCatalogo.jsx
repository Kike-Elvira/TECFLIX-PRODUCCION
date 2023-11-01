import React from "react";
import { useState, useEffect } from "react";
import VideoCard from "../VideoCard/VideoCard";
import "./ContenidoCatalogo.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import axios from "axios";
import "../../assets/css/reset.css";
import { useParams } from "react-router-dom";
const ContenidoCatalogo = (props) => {
  const [isHover, setHover] = useState(false);
  const [data,setData] = useState([]);
  const { Nombre } = useParams();
  const handleSearch = () => {
    setHover(true);
  };

  const handleaNoSearch = () => {
    setHover(false);
  };

  let urlCatalogo="";

  if(Nombre === "Super Heroes"){
    urlCatalogo = 'http://localhost:3001/videos/catalogo_super';
  }
  if(Nombre === "Anime"){
    urlCatalogo = 'http://localhost:3001/videos/catalogo_anime';
  }
  if(Nombre === "Terror"){
    urlCatalogo = 'http://localhost:3001/videos/catalogo_terror';
  }

console.log(urlCatalogo);
  // Hacer una solicitud GET al servidor para obtener los videos
  useEffect(() => {
    axios.get(urlCatalogo)
      .then((response) => {
        console.log(response)
        const videos = response.data;
        setData(videos);
      })
      .catch((error) => {
        console.error('Error al obtener los videos', error);
      });
  }, []); // El segundo argumento vacío [] asegura que se ejecute solo una vez después del montaje

  console.log(data)
  

  return (
    <>
      <Header handleSearch={handleSearch} isHover={isHover}  ></Header>
      <div className="content_box" onClick={handleaNoSearch}>
        {data.map((video) => (
          <VideoCard 
            Titulo={video.Titulo}
            Descripcion={video.Descripcion}
            Miniatura={video.Miniatura}
            Duracion = {video.Duracion}
            Fecha = {video.Fecha}
            Genero = {video.Genero}
            Director = {video.Director}
            IDContenido={video.IDContenido}
          ></VideoCard>
        ))}
      </div>
      <Footer handleaNoSearch={handleaNoSearch}></Footer>
    </>
  );
};

export default ContenidoCatalogo;
