import React from "react";
import ".//VideoCard.css";
import imagen4 from "../../assets/img/portadas/portada4.png"
import imagen3 from "../../assets/img/portadas/portada3.png"
import imagen2 from "../../assets/img/portadas/portada2.jpg"
import imagen1 from "../../assets/img/portadas/portada1.png"
const VideoCard = (props) => {
  const { Titulo, Descripcion, image, id } = props;
  let imageSrc = `../../assets/img/portadas/${image}`;
  if (image==="portada4") {
    imageSrc = imagen4
  }
  if (image==="portada3") {
    imageSrc = imagen3
  }
  if (image==="portada2") {
    imageSrc = imagen2
  }
  if (image==="portada1") {
    imageSrc = imagen1
  }
  return (
    <div className="videocar_box">
      <h2 className="videocard_title">{Titulo}</h2>
      <img className="videocard_image" src={imageSrc} alt="Miniatura" />
      <h3 className="videocard_description">{Descripcion}</h3>
    </div>
  );
};

export default VideoCard;
