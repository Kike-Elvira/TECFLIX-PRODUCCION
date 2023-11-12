import React from "react";
import axios from "axios";
import { useEffect, useState} from "react";
import CatalogoCard from "../catalogoCard/CatalogoCard";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./Catalogo.css"
const Catalogo = () => {
    const [data,setData] = useState([]);

    useEffect(() => {
        axios.get('http://192.168.0.65:3001/videos/catalogo')
          .then((response) => {
            console.log(response)
            const catalogos = response.data;
            setData(catalogos);
          })
          .catch((error) => {
            console.error('Error al obtener los videos', error);
          });
      }, []); // El segundo argumento vacío [] asegura que se ejecute solo una vez después del montaje
    
      console.log(data)
    return(
        <>
        <Header></Header>
        <div className="catalogo_box">
          {data.map((catalogo) => (
          <CatalogoCard
            Nombre = {catalogo.Nombre}
            Descripcion = {catalogo.Descripcion}
            FechaCreacion = {catalogo.FechaCreacion}
            IDCatalogo={catalogo.IDCatalogo}
          ></CatalogoCard>
        ))}
        </div>
        <Footer></Footer>
        </>
    )
}

export default Catalogo;