import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';

export default function FormCrear() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const aulaWithID = (nombre) => {
    return {
      "id": uuidv4(),
      "nombre": nombre
    }
  }

  let intervalo;
  const [error, setError] = useState("");

  const finError = () => {
    setError("");
    clearInterval(intervalo);
  };

  const gestionError = (mensaje) => {
    clearInterval(intervalo);
    setError(mensaje);
    intervalo = setInterval(() => finError(), 3500);
  };

  const crearAula = (data, e) => {
    data = aulaWithID(data.nombre);
    console.log(data);
      fetch(
        "http://localhost/proyectos/spacemanagement/api/sClases/gestionClases.php",
        {
          method: "POST",
          body: JSON.stringify(data)
        }
      )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data === false) {
          gestionError("Clase ya existente, introduce otra clase")
          e.target.reset();
        } else {
          gestionError("¡Clase registrada con éxito!");
          e.target.reset();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <form onSubmit={handleSubmit(crearAula)}>
      <label>Nombre del aula</label>
      <input
        name="nombre"
        type="text"
        placeholder="Introduce el nombre del aula"
        {...register('nombre', { required: 'Debes introducir un nombre para el aula' })}
        aria-invalid={errors.nombre ? "true" : "false"}
      />
      <div className='alinearBoton'>
        <button>Crear aula</button>
      </div>
      <span>
        {errors.nombre && <p id='error'>{errors.nombre.message}</p>}
      </span>
      <div className='alinearTexto'>
        <p className='error'>{error}</p>
      </div>
    </form>
  );
}