import React from "react";
import '../styles/Tarea.css';
import { FaDeleteLeft } from "react-icons/fa6";

function Tarea ({id, texto, completada, completarTarea, eliminarTarea}) {
    return (
        <div className={
                completada ? "cuerpo-tarea completada" : "cuerpo-tarea"
            }
        >
            <div className="nombre-tarea" onClick={() => completarTarea(id)}>{texto}</div>
            <div className="contenedor-botones" onClick={() => eliminarTarea(id)}>
                <FaDeleteLeft className="icon-completed" />
            </div>
        </div>
    )
}

export default Tarea;