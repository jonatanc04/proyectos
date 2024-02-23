import React from "react";
import '../styles/boton.css';

function Boton ({texto, esBotonClick, gestionClick}) {
    return (<button
    className={esBotonClick ? 'boton-click' : 'boton-borrar'}
    onClick={gestionClick}>
    {texto}
    </button>)
}

export default Boton;