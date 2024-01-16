import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import '../styles/form.css';

const EditUserForm = (props) => {
  const { register, handleSubmit, formState:{ errors }, reset } = useForm();

  useEffect(() => {
    reset(props.currentUser);
  }, [props.currentUser, reset]);

  const onSubmit = (data) => {
    props.updateUser(props.currentUser.id, data);
    props.setEditing(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Nombre</label>
      <input
        type="text"
        name="name"
        {...register('name', { required: 'Campo nombre obligatorio' })}
        aria-invalid={errors.name ? "true" : "false"}
      />
      <label>Nombre de usuario</label>
      <input
        type="text"
        name="username"
        {...register('username', { required: 'Campo usuario obligatorio' })}
        aria-invalid={errors.username ? "true" : "false"}
      />
      <button type="submit">Actualizar usuario</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancelar
      </button>
      <span>
        {errors.name && <p>{errors.name.message}</p>}
        {errors.username && <p>{errors.username.message}</p>}
      </span>
    </form>
  );
};

export default EditUserForm;