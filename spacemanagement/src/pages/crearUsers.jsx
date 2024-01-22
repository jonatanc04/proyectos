import React, { useState } from "react";
import "../styles/crearUsers.css";
import escuela from "../imgs/escuela.jpg";
import FormRegistro from "../comps/formRegistro";
import ListaUsers from "../comps/listaUsers";

const CrearUsers = () => {
  const [updateLista, setUpdateLista] = useState(false);

  const handleAulaAdded = () => {
    setUpdateLista(!updateLista);
  };

  return (
    <div className="crearUsers">
      <div className="imagenAula">
        <img src={escuela} alt="error al cargar"></img>
      </div>
      <div className="formularioUsers">
        <FormRegistro onAulaAdded={handleAulaAdded} />
      </div>
      <div className="listadoUsers">
        <ListaUsers onAulaAdded={handleAulaAdded} />
      </div>
    </div>
  );
};

export default CrearUsers;
