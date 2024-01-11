import React, { useState, Fragment } from "react";

function Formulario () {

  const [datos, setDatos] = useState({
    nombre:'',
    apellido: ''
  });

  const handleInputChange = e => {
    console.log(e.target.value);
    setDatos({
      ...datos,
      [e.target.name] : e.target.value
    });
  }

  const enviarDatos = e => {
    //Para que no gestione toda la web, solo lo que manejamos
    e.preventDefault();
    
    console.log(datos.nombre);
    console.log(datos.apellido);
  }

  return (
    <Fragment>
      <h1> Formulario </h1>
      <form className="row" onSubmit={enviarDatos}>
          <div className="col-md-3">
            <input
              placeholder="Nombre"
              className="form-control"
              type="text"
              name="nombre"
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="col-md-3">
            <input
              placeholder="Apellido"
              className="form-control"
              type="text"
              name="apellido"
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="col-md-3">
            <button className="btn btn-primary" type="submit"> Enviar </button>
          </div>
      </form>
      <h3 className="mt-5"> {datos.nombre} - {datos.apellido} </h3>
    </Fragment>
  );

}

export default Formulario;