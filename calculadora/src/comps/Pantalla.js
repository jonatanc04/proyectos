import React from "react";
import '../styles/pantalla.css';

function Pantalla ({ resultado }) {
    return (
        <div className="pantalla">
            {resultado}
        </div>
    )
}

export default Pantalla;