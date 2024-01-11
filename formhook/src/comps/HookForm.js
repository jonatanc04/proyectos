import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';

function HookForm() {

  const {register, formState:{ errors }, handleSubmit} = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  }

  return (
    <Fragment>
      <h1> Formulario </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder='Introduce texto ....'
          className='form-control my-2'
          type='text'
          name='texto'
          {...register('texto',{required:'Campo obligatorio'})}
          aria-invalid={errors.texto?"true":"false"}
        />
        <span className='text-danger text-small d-block'>
          {errors.texto && <p> {errors.texto.message} </p>}
        </span>
        <button className='btn btn-primary'>Enviar</button>
      </form>
    </Fragment>
  );
}

export default HookForm;