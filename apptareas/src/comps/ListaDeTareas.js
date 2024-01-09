import React, { useState } from "react";
import Formulario from './TareaFormulario';
import Tarea from "./Tarea";
import '../styles/ListaDeTarea.css';

function ListaDeTareas () {

    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
        if (tarea.texto.trim()) {
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
        }
    }

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    }

    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
            if (tarea.id === id) {
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
    }

    return (
        <>
            <Formulario onSubmit={agregarTarea}/>
            <div className="lista-tareas">
                {
                    tareas.map((tarea) =>
                        <Tarea 
                            key={tarea.id}
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                            completarTarea={completarTarea}
                            eliminarTarea={eliminarTarea}
                        />
                    )
                }
            </div>
        </>
    )
}

export default ListaDeTareas;