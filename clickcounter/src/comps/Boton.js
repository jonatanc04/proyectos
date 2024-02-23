import React from "react";

function Boton ({texto, esBotonClick, gestionClick}) {
    return (<button
    className={esBotonClick ? 'boton-click' : 'boton-reinicio'}
    onClick={gestionClick}>
    {texto}
    </button>)
}

export default Boton;