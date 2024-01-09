import React, { useState } from "react";
import '../styles/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function Formulario (props) {

    const [input, setInput] = useState('');

    const gestionCambio = e => {
        setInput(e.target.value);
    }

    const gestionEnvio = e => {
        e.preventDefault();
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        props.onSubmit(tareaNueva);
    }

    return (
        <form onSubmit={gestionEnvio}>
            <input 
                type="text" 
                name="texto" 
                placeholder="Introduce una tarea" 
                onChange={gestionCambio}
            />
            <input type="submit" value="Añadir tarea" />
        </form>
    )
}

export default Formulario;