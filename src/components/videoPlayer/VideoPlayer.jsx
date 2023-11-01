import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "./VideoPlayer.css"
import Footer from "../footer/Footer";
import { useParams } from "react-router-dom";
import Header from "../header/Header";
const VideoPlayer = (props) => {
  const { Titulo } = useParams();
  const [videoUrl, setVideoUrl] = useState(null);
  let urlVideo ="";
  if(Titulo === "Five Nights at Freddy's"){
    urlVideo = "http://localhost:3001/video/Trailer%20FNAF.mp4"
  }
  if(Titulo === "Dragon Ball Super: Broly"){
    urlVideo = "http://localhost:3001/video/Trailer Dragon Ball Super Broly.mp4"
  }
  if(Titulo === "Pokemon: Detective Pikachu"){
    urlVideo = "http://localhost:3001/video/Trailer Detective Pikachu.mp4"
  }
  if(Titulo === "El Tiempo Contigo"){
    urlVideo = "http://localhost:3001/video/Trailer El Tiempo Contigo.mp4"
  }
  if(Titulo === "El Exorcista: Creyentes"){
    urlVideo = "http://localhost:3001/video/Trailer El exsorcista.mp4"
  }
  if(Titulo === "Jurassic World: Mundo jursico"){
    urlVideo = "http://localhost:3001/video/Trailer Jurasic Wolrd.mp4"
  }
  if(Titulo === "Saw X: el juego del miedo"){
    urlVideo = "http://localhost:3001/video/Trailer Saw X.mp4"
  }
  if(Titulo === "Spider-Man: A traves del Spider-Verso"){
    urlVideo = "http://localhost:3001/video/Trailer Spider-Man A Traves del SpiderVerso.mp4"
  }
  if(Titulo === "Spider-Man: un nuevo universo"){
    urlVideo = "http://localhost:3001/video/Trailer Spider-Man Un Nuevo Universo.mp4"
  }
  if(Titulo === "Your Name"){
    urlVideo = "http://localhost:3001/video/Trailer Your Name.mp4"
  }
  console.log(urlVideo)
  useEffect(() => {
    // Realiza una solicitud GET al servidor para obtener el video
    fetch(urlVideo) // Reemplaza con la ruta correcta de tu video
      .then((response) => {
        if (response.ok) {
          // Si la respuesta es exitosa, crea una URL para el video
          return response.blob();
        }
        throw new Error("Error al cargar el video");
      })
      .then((blob) => {
        const videoBlobUrl = URL.createObjectURL(blob);
        setVideoUrl(videoBlobUrl);
      })
      .catch((error) => {
        console.error("Error al obtener el video", error);
      });
  }, []);

  return (
    <>
    <Header></Header>
    <div className="ReactPlayer">
      {videoUrl ? (
        <ReactPlayer 
          url={videoUrl}
          width="1280px"
          height="720px"
          controls={true}
        />
      ) : (
        <p>Cargando el video...</p>
      )}
    </div>
    <Footer></Footer>
    </>
  );
};

export default VideoPlayer;


