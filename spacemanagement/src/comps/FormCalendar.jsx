import { v4 as uuidv4 } from 'uuid';
import { useForm } from 'react-hook-form';
import React from 'react';

export default function FormCalendar() {

  const { register, handleSubmit } = useForm();
  const addID = data => {
    return (
      {
        "nombre": data.nombre,
        "id_calendario": uuidv4(),
        "hora_inicio": data.hora_inicio,
        "tiempo_sesion": data.tiempo_sesion,
        "total_sesiones": data.total_sesiones,
        "descansos": data.descansos,
        "tiempo_descanso": data.tiempo_descanso,
        "pos_descanso": data.pos_descanso,
        "hora_init_tarde": data.hora_init_tarde,
        "tiempo_ses_tarde": data.tiempo_desc_tarde,
        "total_ses_tarde": data.total_ses_tarde,
        "descansos_tarde": data.descansos_tarde,
        "tiempo_desc_tarde": data.tiempo_desc_tarde,
        "pos_desc_tarde": data.pos_desc_tarde
    }
    )
  }
  
  const crearCalendario = (data) => {
    const dataID = addID(data);
    
  }

  return (
    <form onSubmit={handleSubmit(crearCalendario)}>
      <div className='col'>
        <label>Nombre</label>
        <input
          {...register("nombre")}
          type="text"
          placeholder='Introduce el nombre del calendario'
        />
        <label>Hora de inicio</label>
        <input
          {...register("hora_inicio")}
          type="text"
          placeholder='Introduce la hora en formato HH:MM'
        />
        <label>Tiempo por sesión</label>
        <input
          {...register("tiempo_sesion")}
          type="number"
          placeholder='Duración en minutos por sesión'
        />
        <label>Total de sesiones</label>
        <input
          {...register("total_sesiones")}
          type="number"
          placeholder='Número total de sesiones (mañana)'
        />
        <label>Descansos</label>
        <input
          {...register("descansos")}
          type="number"
          placeholder='Número total de descansos (mañana)'
        />
        <label>Tiempo por descanso</label>
        <input
          {...register("tiempo_descanso")}
          type="number"
          placeholder='Duración en minutos por descanso'
        />
        <label>Posición del descanso</label>
        <input
          {...register("pos_descanso")}
          type="number"
          placeholder='Cada cuantas horas hay descanso'
        />
      </div>
      <div className='col'>
        <label>Hora de inicio - tardes</label>
        <input
          {...register("hora_init_tarde")}
          type="text"
          placeholder='Introduce la hora en formato HH:MM'
        />
        <label>Tiempo por sesión - tardes</label>
        <input
          {...register("tiempo_ses_tarde")}
          type="number"
          placeholder='Duración en minutos por sesión'
        />
        <label>Total de sesiones - tardes</label>
        <input
          {...register("total_ses_tarde")}
          type="number"
          placeholder='Número total de sesiones (tarde)'
        />
        <label>Descansos - tardes</label>
        <input
          {...register("descansos_tarde")}
          type="number"
          placeholder='Número total de descansos (tarde)'
        />
        <label>Tiempo por descanso - tardes</label>
        <input
          {...register("tiempo_desc_tarde")}
          type="number"
          placeholder='Duración en minutos por descanso'
        />
        <label>Posición del descanso - tardes</label>
        <input
          {...register("pos_desc_tarde")}
          type="number"
          placeholder='Cada cuantas horas hay descanso'
        />
        <div className='container-button'>
          <button type='submit'>Crear</button>
        </div>
      </div> 
    </form>
  );
}