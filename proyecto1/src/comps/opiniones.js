import React from 'react';
import '../styles/opiniones.css';

function Opinion(props) {
  return (
      <div className='contenedor-opinion'>
        <img 
					className='imagen-opinion' 
					src={require(`../imgs/${props.foto}.png`)}
					alt='Foto1'/>
				<div className='contenedor-texto-opinion'>
					<p className='Nombre-opinion'><strong>{props.nombre}</strong> del {props.equipo}</p>
					<p className='cargo-opinion'><strong>{props.posicion}</strong> Estrella</p>
					<p className='texto-opinion'>{props.opinion}</p>
				</div>
      </div>
  );
}

export default Opinion;