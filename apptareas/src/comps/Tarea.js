import React from "react";
import '../styles/Tarea.css';
import { FaTrashCan, FaDeleteLeft } from "react-icons/fa6";

function Tarea () {
    return (
        <div className="cuerpo-tarea">
            <p className="nombre-tarea">Nombre de la tarea</p>
            <div className="contenedor-botones">
                <FaDeleteLeft className="icon-completed" />
            </div>
        </div>
    )
}

export default Tarea;