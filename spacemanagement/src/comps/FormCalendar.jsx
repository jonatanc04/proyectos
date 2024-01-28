import { useForm } from 'react-hook-form';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function FormCalendar() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [dates, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get("http://localhost/proyectos/spacemanagement/api/sCalendario/datosCalendario.php");
    setData(res.data);
  }

  const postData = async (newData) => {
    const res = await axios.post("http://localhost/proyectos/spacemanagement/api/sCalendario/datosCalendario.php", newData, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return res;
  }

  const addNumberOfSpace = data => {
    return {
      espacio: dates.length + 1,
      duracion: data.duracion,
      horaInicio: data.horaInicio,
      horario: data.horario,
      tipo: data.tipo
    }
  }

  const addSpace = data => {
    console.log(data);
    const newSpace = addNumberOfSpace(data);
    console.log(newSpace);
    postData(newSpace);
  }

  return (
    <form onSubmit={handleSubmit(addSpace)}>
      <label>Horario del espacio</label>
      <select {...register('horario', { required: 'Debes seleccionar una franja horaria' })} aria-invalid={errors.horario ? "true" : "false"}>
        <option value="m">Mañana</option>
        <option value="t">Tarde</option>
      </select>
      <label>Hora de inicio</label>
      <input
        name="horaInicio"
        type="text"
        placeholder="Introduce una hora en formato HH:MM"
        {...register('horaInicio', { required: 'Debes introducir una hora de inicio' })}
        aria-invalid={errors.horaInicio ? "true" : "false"}
      />
      <label>Tipo de espacio</label>
      <select {...register('tipo', { required: 'Debes seleccionar un tipo de espacio' })} aria-invalid={errors.tipo ? "true" : "false"}>
        <option value="c">Clase</option>
        <option value="d">Descanso</option>
      </select>
      <label>Duración</label>
      <input
        name="duracion"
        type="number"
        placeholder="Introduce la duración del espacio"
        {...register('duracion', { required: 'Debes introducir una duración' })}
        aria-invalid={errors.duracion ? "true" : "false"}
      />
      <div className='button-form'>
        <button type='submit'>Añadir</button>
        <span>
        {errors.horario && <p className='error'>{errors.horario.message}</p>}
        {errors.horaInicio && <p className='error'>{errors.horaInicio.message}</p>}
        {errors.tipo && <p className='error'>{errors.tipo.message}</p>}
        {errors.duracion && <p className='error'>{errors.duracion.message}</p>}
      </span>
      </div>
    </form>
  );
}