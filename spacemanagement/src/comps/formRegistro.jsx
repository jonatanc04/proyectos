import { useForm } from 'react-hook-form';
import React, { useState } from 'react';

export default function FormRegistro({ onUserAdded }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

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

  const crearUser = (data, e) => {
    console.log(data);
    fetch(
      "http://localhost/proyectos/spacemanagement/api/sUsuarios/gestionUsuarios.php",
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
          gestionError("Usuario ya existente, prueba con otro nombre");
          e.target.reset();
        } else {
          gestionError("¡Usuario registrado con éxito!");
          e.target.reset();
          onUserAdded();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <form onSubmit={handleSubmit(crearUser)}>
      <label>Nombre del usuario</label>
      <input
        name="user"
        type="text"
        placeholder="Introduce el nombre de usuario"
        {...register('user', { required: 'Debes introducir un nombre de usuario' })}
        aria-invalid={errors.nombre ? "true" : "false"}
      />
      <label>Contraseña</label>
      <input
        name="pass"
        type="password"
        placeholder="Introduce una contraseña"
        {...register('pass', { required: 'Debes introducir una contraseña' })}
        aria-invalid={errors.pass ? "true" : "false"}
      />
      <label>DNI del Usuario</label>
      <input
        name="dni"
        type="text"
        placeholder="Introduce el DNI del Usuario"
        {...register('dni', { required: 'Debes introducir un DNI' })}
        aria-invalid={errors.dni ? "true" : "false"}
      />
      <label>Tipo de Usuario</label>
      <select id="type" name="type"
      {...register('type', { required: 'Debes seleccionar un tipo de usuario' })}
      aria-invalid={errors.type ? "true" : "false"}>
          <option value="root">Root</option>
          <option value="user">Usuario</option>
      </select>
      <div className='alinearBoton'>
        <button>Crear usuario</button>
      </div>
      <span>
        {errors.user && <p id='error'>{errors.user.message}</p>}
        {errors.pass && <p id='error'>{errors.pass.message}</p>}
        {errors.dni && <p id='error'>{errors.dni.message}</p>}
      </span>
      <div className='alinearTexto'>
        <p className='error'>{error}</p>
      </div>
    </form>
  );
}
