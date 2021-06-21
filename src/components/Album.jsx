import React from "react";
import "../styles/Album.css";

const Album = (props) => {
  return (
    <div className="album-container">
      <img height="100%" src={props.informacion.portada} alt={props.informacion.titulo} />
      <div className="album-contenido">
        <div className="album-descripcion">
         <h3 className="album-titulo"> {props.informacion.artista}</h3>
         <h3 className="album-subtitulo"> {props.informacion.titulo} </h3>
         <h4 className="album-subtitulo"> 
          {props.informacion.lanzamiento} - <span className="cronologia">Hace x años</span>
        </h4>
        </div>
        <div className="album-pie">
            <h4 className="album-subtitulo"> {props.informacion.agrupacion} </h4>
            <h4 className="album-subtitulo"> {props.informacion.genero} </h4>
        </div>            
      </div>
    </div>
  );
};

export default Album;
