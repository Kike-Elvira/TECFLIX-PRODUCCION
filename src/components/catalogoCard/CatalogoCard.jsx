import React from "react";
import IMAGE from "../../assets/img/portadas/Spider-Man Un Nuevo Universo.jpeg"
import ANIME from "../../assets/img/portadas/Your Name.jpe"
import TERROR from "../../assets/img/portadas/FNAF.jpg"
import "./CatalogoCard.css"
import { Link } from "react-router-dom";
const CatalogoCard = (props) =>{
    const {Nombre,Descripcion,FechaCreacion,IDCatalogo} = props
    let imgsrc;
    if(Nombre === "Super Heroes"){
        imgsrc = IMAGE
    }
    if(Nombre === "Anime"){
        imgsrc = ANIME
    }
    if(Nombre === "Terror"){
        imgsrc = TERROR
    }
    return(
        <div className="catalogocard_box" >
        <h2 className="catalogocard_title">{Nombre}</h2>
        <Link to={`/contenido_catalogo/${Nombre}`}>
          <img className="catalogocard_image" src={imgsrc} alt={Nombre} />
        </Link>
        <p className="catalogocard_descripcion">{Descripcion}</p>
      </div>
    )
    };

export default CatalogoCard;