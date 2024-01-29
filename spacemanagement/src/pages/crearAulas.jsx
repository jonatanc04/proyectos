import React, { useState } from 'react';
import '../styles/crear.css';
import escuela from '../imgs/escuela.jpg';
import FormCrear from '../comps/FormCrear';
import ListaAulas from '../comps/ListaAulas';

const CrearAulas = () => {
  const [updateLista, setUpdateLista] = useState(false);

  const handleAulaAdded = () => {
    setUpdateLista(!updateLista);
  };

  return ( 
    <div className="crearAula">
      <div className='imagenAula'>
        <img src={escuela} alt="error al cargar"></img>
      </div>
      <div className='formularioAulas'>
        <FormCrear onAulaAdded={handleAulaAdded} />
      </div>
      <div className='listadoAulas'>
        <ListaAulas onAulaAdded={handleAulaAdded} />
      </div>
    </div>
  );
}

export default CrearAulas;
