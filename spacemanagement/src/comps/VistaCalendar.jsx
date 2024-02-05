import React, { useState } from 'react'
import "../styles/vistaCalendar.css" 

export const VistaCalendar = ({ calendar }) => {
  const [horarioSeleccionado, setHorarioSeleccionado] = useState("m");
  const dayDate = new Date();

  const filtrarPorPartes = (calendar, valor) => {
    const resultados = calendar.filter(objeto => objeto.horario === valor);
    return resultados;
  }

  function formatHora(detalladaHora) {
    const horaDetallada = new Date(`2000-01-01T${detalladaHora}`);
    const horaFormateada = horaDetallada.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return horaFormateada;
  }

  function sumarMinutos(hora, duracion) {
    let separar = hora.split(":");
    let horas = parseInt(separar[0]);
    let minutos = parseInt(separar[1]);

    minutos += parseInt(duracion);

    horas += Math.floor(minutos / 60);
    minutos %= 60;

    if (horas >= 24) {
        horas %= 24;
    }

    let horasStr = horas < 10 ? "0" + horas : horas.toString();
    let minutosStr = minutos < 10 ? "0" + minutos : minutos.toString();

    return horasStr + ":" + minutosStr;
  }

  return (
    <div className='calendarContainer'>
      <div className='opciones'>
        <div className='cont-opt1'>
          <p>Horario de:</p>
          <select 
            id='optionHorario'
            value={horarioSeleccionado}
            onChange={(e) => setHorarioSeleccionado(e.target.value)}
          >
            <option value="m">Mañana</option>
            <option value="t">Tarde</option>
          </select>
        </div>
      </div>
      <table className='tabla-principal'>
        <thead>
          <tr>
            <td></td>
            <td>Lunes</td>
            <td>Martes</td>
            <td>Miércoles</td>
            <td>Jueves</td>
            <td>Viernes</td>
          </tr>
        </thead>
        <tbody>
          {
            filtrarPorPartes(calendar, horarioSeleccionado).map((hora) => (
              <tr key={hora.espacio}>
                <td>{formatHora(hora.horaInicio) + " - " + sumarMinutos(hora.horaInicio, hora.duracion)}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
