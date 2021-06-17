import React from "react";
import "../styles/Album.css";

const Album = (props) => {
  return (
    <div className="container">
      <div className="card">
        <div className="content-layout">
          <h1 className="title"> {props.informacion.agrupacion}</h1>
          <h2 className="description"> {props.informacion.genero} </h2>
          <h3 className="content"> {props.informacion.artista} </h3>
          <h3 className="content"> {props.informacion.titulo} </h3>
          <h3 className="content"> {props.informacion.lanzamiento} </h3>
          <figure> 
            <img src={props.informacion.portada} alt={props.informacion.titulo} />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Album;
