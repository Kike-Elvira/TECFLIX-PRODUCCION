import React from "react";
import ".//VideoCard.css"
const VideoCard = (props) => {
  const { Titulo, Descripcion, image, id } = props;
  return (
    <div className="videocar_box">
      <h2 className="videocard_title">{Titulo}</h2>
      <img className="videocard_image" src={image} alt="Miniatura" />
      <h3 className="videocard_description">{Descripcion}</h3>
    </div>
  );
};

export default VideoCard;
