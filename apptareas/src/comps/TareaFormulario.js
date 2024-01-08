import React from "react";
import '../styles/TareaFormulario.css';

function Boton ({texto, esBotonClick, gestionClick}) {
    return (<button
    className={esBotonClick ? 'boton-click' : 'boton-borrar'}
    onClick={gestionClick}>
    {texto}
    </button>)
}

export default Boton;