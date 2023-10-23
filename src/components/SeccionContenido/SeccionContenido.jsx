import React from "react";
import image1 from "../../assets/img/portadas/portada1.png";
import image2 from "../../assets/img/portadas/portada2.jpg";
import image3 from "../../assets/img/portadas/portada3.png";
import image4 from "../../assets/img/portadas/portada4.png";
import VideoCard from "../VideoCard/VideoCard";
import ".//SeccionContenido.css"

const SeccionContenido = () => {
  const arrayVideos = [
    {
      Titulo: "El mundo",
      Descripcion: "Trata sobre un mundo de enanos",
      image: image1,
      id: 1,
    },
    {
      Titulo: "A mimir",
      Descripcion: "Trata sobre como mimir eternamente",
      image: image2,
      id: 2,
    },
    {
      Titulo: "COCO",
      Descripcion: "Trata sobre MAMA COCO",
      image: image3,
      id: 3,
    },
    {
      Titulo: "El PANSHOOO",
      Descripcion: "Trata sobre PANSHO",
      image: image4,
      id: 4,
    },
    {
      Titulo: "El mundo",
      Descripcion: "Trata sobre un mundo de enanos",
      image: image1,
      id: 5,
    },
    {
      Titulo: "A mimir",
      Descripcion: "Trata sobre como mimir eternamente",
      image: image2,
      id: 6,
    },
    {
      Titulo: "COCO",
      Descripcion: "Trata sobre MAMA COCO",
      image: image3,
      id: 7,
    },
    {
      Titulo: "El PANSHOOO",
      Descripcion: "Trata sobre PANSHO",
      image: image4,
      id: 8,
    },
  ];

  return (
    <div className="content_box">
      {arrayVideos.map((video) => (
        <VideoCard
          Titulo={video.Titulo}
          Descripcion={video.Descripcion}
          image={video.image}
          id={video.id}
        ></VideoCard>
      ))}
    </div>
  );
};

export default SeccionContenido;
