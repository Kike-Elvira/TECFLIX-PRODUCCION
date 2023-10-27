import React from "react";
import { useState, useEffect } from "react";
import VideoCard from "../VideoCard/VideoCard";
import ".//SeccionContenido.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import axios from "axios";
import "../../assets/css/reset.css";

const SeccionContenido = () => {
  const [isHover, setHover] = useState(false);
  const [data,setData] = useState([]);

  const handleSearch = () => {
    setHover(true);
  };

  const handleaNoSearch = () => {
    setHover(false);
  };
  // Hacer una solicitud GET al servidor para obtener los videos
  useEffect(() => {
    axios.get('http://localhost:3001/obtener-videos')
      .then((response) => {
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
      <Header handleSearch={handleSearch} isHover={isHover}></Header>
      <div className="content_box" onClick={handleaNoSearch}>
        {data.map((video) => (
          <VideoCard
            Titulo={video.Titulo}
            Descripcion={video.Descripcion}
            image={video.image}
            id={video.id}
          ></VideoCard>
        ))}
      </div>
      <Footer handleaNoSearch={handleaNoSearch}></Footer>
    </>
  );
};

export default SeccionContenido;
