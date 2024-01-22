import React, { useState } from 'react';
import '../styles/crear.css';
import escuela from '../imgs/escuela.jpg';
import FormCrear from '../comps/formCrear';
import ListaAulas from '../comps/listaAulas';

const Crear = () => {
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

export default Crear;
