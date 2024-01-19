import { useForm } from 'react-hook-form';

export default function FormCrear() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const crearAula = (data, e) => {
    console.log(data);
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
      <span >
        {errors.nombre && <p id='error'> {errors.nombre.message} </p>}
      </span>
    </form>
  );
}

