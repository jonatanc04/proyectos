import React, { useState } from "react";
import "../styles/crearUsers.css";
import escuela from "../imgs/escuela.jpg";
import FormRegistro from "../comps/FormRegistro";
import ListaUsers from "../comps/ListaUsers";

const CrearUsers = () => {
  const [updateLista, setUpdateLista] = useState(false);

  const handleUserAdded = () => {
    setUpdateLista(!updateLista);
  };

  return (
    <div className="crearUsers">
      <div className="imagenAula">
        <img src={escuela} alt="error al cargar"></img>
      </div>
      <div className="formularioUsers">
        <FormRegistro onUserAdded={handleUserAdded} />
      </div>
      <div className="listadoUsers">
        <ListaUsers onUserAdded={handleUserAdded} />
      </div>
    </div>
  );
};

export default CrearUsers;
