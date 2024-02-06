import React, { useState } from 'react';
import "../styles/vistaCalendar.css";

export const VistaCalendar = ({ calendar }) => {
  const [horarioSeleccionado, setHorarioSeleccionado] = useState("m");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [prevWeekDisabled, setPrevWeekDisabled] = useState(true);
  const [nextWeekDisabled, setNextWeekDisabled] = useState(false);

  const weekdays = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

  const nextWeek = () => {
    const nextWeekDate = new Date(currentDate);
    nextWeekDate.setDate(nextWeekDate.getDate() + 7);
    setCurrentDate(nextWeekDate);
    setPrevWeekDisabled(false);
    setNextWeekDisabled(true);
  };

  const previousWeek = () => {
    const previousWeekDate = new Date(currentDate);
    previousWeekDate.setDate(previousWeekDate.getDate() - 7);
    setCurrentDate(previousWeekDate);
    setNextWeekDisabled(false);
    setPrevWeekDisabled(true);
  };

  const currentWeekdays = Array.from({ length: 5 }, (_, i) => {
    const day = new Date(currentDate);
    day.setDate(currentDate.getDate() + i - currentDate.getDay() + 1);
    return { name: weekdays[day.getDay()], number: day.getDate() };
  });

  const monthYearString = `${currentDate.toLocaleString('default', { month: 'long' }).replace(/^\w/, c => c.toUpperCase())} ${currentDate.getFullYear()}`;

  const filtrarPorPartes = (calendar, valor) => {
    const resultados = calendar.filter(objeto => objeto.horario === valor);
    return resultados;
  };

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
      <div className='monthYear'>{monthYearString}</div>
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
        <div className='cont-opt2'>
          <button disabled={prevWeekDisabled} onClick={previousWeek}>Semana Anterior</button>
          <button disabled={nextWeekDisabled} onClick={nextWeek}>Siguiente Semana</button>
        </div>
      </div>
      <table className='tabla-principal'>
        <thead>
          <tr>
            <td className='none-td'></td>
            {currentWeekdays.map((day, index) => (
              <td className='color-table' key={index}>{`${day.name} ${day.number}`}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {filtrarPorPartes(calendar, horarioSeleccionado).map((hora, index) => (
            hora.tipo === 'd' ? (
              <tr className='descansos-tr' key={index}>
                <td className='color-table'>{formatHora(hora.horaInicio) + " - " + sumarMinutos(hora.horaInicio, hora.duracion)}</td>
                <td>P</td>
                <td>A</td>
                <td>T</td>
                <td>I</td>
                <td>0</td>
              </tr>
            ) : (
              <tr key={index}>
              <td className='color-table'>{formatHora(hora.horaInicio) + " - " + sumarMinutos(hora.horaInicio, hora.duracion)}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            )
          ))}
        </tbody>
      </table>
    </div>
  );
};
