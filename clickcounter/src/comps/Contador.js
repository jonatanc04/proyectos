import React from "react";
import '../styles/contador.css';

function Contador ({ numClick }) {
    return (
        <div className="contador">
            {numClick}
        </div>
    )
}

export default Contador;