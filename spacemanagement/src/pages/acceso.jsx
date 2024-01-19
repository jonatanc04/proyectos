import escuela from '../imgs/escuela.jpg';
import '../styles/acceso.css';
import React from 'react';
import FormAcceso from '../comps/formAcceso';

function Acceso () {

  return ( 
    <div className="acceso">
      <div className="formulario">
        <div className='imagen-container'>
          <img src={escuela} alt="error al cargar"></img>
        </div>
        <div className="form-container">
          <FormAcceso />
        </div>
      </div>
    </div>
  );
}
 
export default Acceso;