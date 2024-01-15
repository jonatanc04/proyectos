import React from 'react';
import { useForm } from 'react-hook-form';

const AddUserForm = (props) => {
  const { register, handleSubmit, formState:{ errors }, reset } = useForm();

  const onSubmit = (data) => {
    props.addUser(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Nombre</label>
      <input
        type="text"
        name="name"
        {...register('name', {required:'Campo nombre obligatorio'})}
        aria-invalid={errors.texto?"true":"false"}
      />
      <label>Nombre de usuario</label>
      <input
        type="text"
        name="username"
        {...register('username', {required:'Campo usuario obligatorio'})}
        aria-invalid={errors.texto?"true":"false"}
      />
      <button type="submit">Añadir usuario</button>
      <span>
        {errors.name && <p>{errors.name.message}</p>}
        {errors.username && <p>{errors.username.message}</p>}
      </span>
    </form>
  );
};

export default AddUserForm;