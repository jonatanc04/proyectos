import React from "react";
import Formulario from './TareaFormulario';
import Tarea from "./Tarea";
import '../styles/ListaDeTarea.css';

function ListaDeTareas () {
    return (
        <div className="lista-tareas">
            <Formulario/>
            <Tarea/>
        </div>
    )
}

export default ListaDeTareas;