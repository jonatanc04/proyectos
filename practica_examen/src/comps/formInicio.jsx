import React from "react";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import "../styles/iniciarSesion.css";

export default function FormInicio( {usuarios} ) {

  const navigate = useNavigate();
  const { register, formState: {errors}, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const usuarioEncontrado = usuarios.find((usuario) => {
      return usuario.username === data.username && usuario.password === data.password;
    });
  
    if (usuarioEncontrado) {
      navigate('/principal');
    }
  };  

  return (
    <form className="formulario-acceso" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nombre de usuario</label>
        <input type="text" {...register('username', { required: 'Debes introducir un nombre de usuario' })}
        aria-invalid={errors.username ? "true" : "false"} />
      </div>
      <div>
        <label>Contraseña</label>
        <input type="password" {...register('password', { required: 'Debes introducir una contraseña' })}
        aria-invalid={errors.password ? "true" : "false"} />
      </div>
      <div className="boton-envio">
        <input type="submit" value="Enviar" />
      </div>
      <span>
        {errors.username && <p id='error'>{errors.username.message}</p>}
        {errors.password && <p id='error'>{errors.password.message}</p>}
      </span>
    </form>
  )
}