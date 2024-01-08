import React from "react";
import '../styles/TareaFormulario.css';

function Formulario () {
    return (
        <form>
            <input type="text" name="nombre-tarea" placeholder="Introduce una tarea" />
            <input type="submit" value="Añadir tarea" />
        </form>
    )
}

export default Formulario;