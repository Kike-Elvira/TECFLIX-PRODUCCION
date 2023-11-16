import React from "react";
import ".//VideoCard.css";
import { Link } from "react-router-dom";
import FNAF from "../../assets/img/portadas/FNAF.jpg"
import DBSB from "../../assets/img/portadas/Dragon Ball Broly.jpg"
import DTP from "../../assets/img/portadas/Detective Pikachu.jpeg"
import ETPC from "../../assets/img/portadas/El Tiempo Contigo.jpg"
import EEC from "../../assets/img/portadas/El Exorcista Creyentes.jpg"
import JUWD from "../../assets/img/portadas/Mundo jurasico.jpg"
import SAWX from "../../assets/img/portadas/Saw X.jpg"
import SPAS from "../../assets/img/portadas/Spiderman A traves del spiderverso.jpg"
import SPNU from "../../assets/img/portadas/Spider-Man Un Nuevo Universo.jpeg"
import YONM from "../../assets/img/portadas/Your Name.jpe"
import { useState } from "react";
const VideoCard = (props) => {
  const { Titulo, Descripcion, Miniatura, Duracion, Fecha, Genero, Director, IDContenido } = props;
  let imageSrc;
  if (Miniatura==="FNAF.jpg") {
    imageSrc = FNAF
  }
  if (Miniatura==="Dragon Ball Broly.jpg") {
    imageSrc = DBSB
  }
  if (Miniatura==="Detective Pikachu.jpeg") {
    imageSrc = DTP
  }
  if (Miniatura==="El Tiempo Contigo.jpg") {
    imageSrc = ETPC
  }
  if (Miniatura==="El Exorcista Creyentes.jpg") {
    imageSrc = EEC
  }
  if (Miniatura==="Mundo jurasico.jpg") {
    imageSrc = JUWD
  }
  if (Miniatura==="Saw X.jpg") {
    imageSrc = SAWX
  }
  if (Miniatura==="Spiderman A traves del spiderverso.jpg") {
    imageSrc = SPAS
  }
  if (Miniatura==="Spider-Man Un Nuevo Universo.jpeg") {
    imageSrc = SPNU
  }
  if (Miniatura==="Your Name.jpe") {
    imageSrc = YONM
  }
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="videocard_box" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <h2 className="videocard_title">{Titulo}</h2>
      <Link to={`/videoPlayer/${Titulo}`}>
        <img className="videocard_image" src={imageSrc} alt={Titulo}/>
      </Link>
      {isHovered && (
            <div className="description_overlay">
              <p>{Descripcion}</p>
            </div>
          )}
    </div>
  );
};

export default VideoCard;
