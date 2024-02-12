import React, { useState, useEffect, useMemo } from 'react';
import "../styles/vistaCalendar.css";

export const VistaCalendar = ({ calendar, reservas }) => {
  const [horarioSeleccionado, setHorarioSeleccionado] = useState("m");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [prevWeekDisabled, setPrevWeekDisabled] = useState(true);
  const [nextWeekDisabled, setNextWeekDisabled] = useState(false);
  const weekdays = useMemo(() => ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"], []);
  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [selectedStartTime, setSelectedStartTime] = useState('');
  const [selectedEndDate, setSelectedEndDate] = useState('');
  const [selectedEndTime, setSelectedEndTime] = useState('');

  useEffect(() => {
    const today = new Date();
    const currentDay = today.getDay(); 
    const nextMonday = new Date(today);
    nextMonday.setDate(today.getDate() + (1 + 7 - currentDay) % 7);
  
    const initialStartDate = `${weekdays[nextMonday.getDay()]}-${nextMonday.getDate()}`;
    setSelectedStartDate(initialStartDate);
    setSelectedEndDate(initialStartDate);
  
    const initialStartTime = "08:00:00";
    setSelectedStartTime(initialStartTime);
    setSelectedEndTime(initialStartTime);
  }, [weekdays]);
  

  const getDaysOfWeek = () => {
    const today = new Date();
    const currentDay = today.getDay(); 
    const nextMonday = new Date(today);
    nextMonday.setDate(today.getDate() + (1 + 7 - currentDay) % 7);
    const days = [];

    for (let i = 0; i < 5; i++) {
      const date = new Date(nextMonday);
      date.setDate(nextMonday.getDate() + i);
      days.push(date);
    }

    for (let i = 0; i < 5; i++) {
      const date = new Date(nextMonday);
      date.setDate(nextMonday.getDate() + 7 + i);
      days.push(date);
    }
    return days;
  };

  const formatDate = (date) => {
    return `${weekdays[date.getDay()]} ${date.getDate()}`;
  };

  const formatHora = (detalladaHora) => {
    const horaDetallada = new Date(`2000-01-01T${detalladaHora}`);
    const horaFormateada = horaDetallada.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return horaFormateada;
  }

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

  const handleTdClick = (horaInicio, dayName, dayNumber) => {
    console.log(`${horaInicio}-${dayName}-${dayNumber}`);
  };

  const pastTo = (horaInicio, dayNumber) => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    const [hora, minutos] = horaInicio.split(':');
    const startHour = parseInt(hora);
    const startMinute = parseInt(minutos);

    const currentDateTime = new Date(currentYear, currentMonth, currentDay, currentHour, currentMinute);
    const comparedDateTime = new Date(currentYear, currentMonth, dayNumber, startHour, startMinute);

    if (comparedDateTime <= currentDateTime) {
      return true;
    }
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Día de inicio seleccionado:", selectedStartDate);
    console.log("Hora de inicio seleccionada:", selectedStartTime);
    console.log("Día de fin seleccionado:", selectedEndDate);
    console.log("Hora de fin seleccionada:", selectedEndTime);
  };

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
        <div className='cont-opt3'>
          <h2>Reservar aulas</h2>
          <form onSubmit={handleSubmit}>
            <label>Día de inicio</label>
            <select onChange={(e) => setSelectedStartDate(e.target.value)}>
              {getDaysOfWeek().map((day, index) => (
                <option key={index} value={`${weekdays[day.getDay()]}-${day.getDate()}`}>
                  {formatDate(day)}
                </option>
              ))}
            </select>
            <label>Hora de inicio</label>
            <select onChange={(e) => setSelectedStartTime(e.target.value)}>
              {calendar.map((hora, index) => (
                <option key={index} value={hora.horaInicio}>
                  {formatHora(hora.horaInicio)}
                </option>
              ))}
            </select>
            <label>Día de fin</label>
            <select onChange={(e) => setSelectedEndDate(e.target.value)}>
              {getDaysOfWeek().map((day, index) => (
                <option key={index} value={`${weekdays[day.getDay()]}-${day.getDate()}`}>
                  {formatDate(day)}
                </option>
              ))}
            </select>
            <label>Hora de fin</label>
            <select onChange={(e) => setSelectedEndTime(e.target.value)}>
              {calendar.map((hora, index) => (
                <option key={index} value={hora.horaInicio}>
                  {formatHora(hora.horaInicio)}
                </option>
              ))}
            </select>
            <button type="submit">Submit</button>
          </form>
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
          {filtrarPorPartes(calendar, horarioSeleccionado).map((hora, horaIndex) => (
            hora.tipo === 'd' ? (
              <tr className='descansos-tr' key={horaIndex}>
                <td className='color-table'>{formatHora(hora.horaInicio) + " - " + sumarMinutos(hora.horaInicio, hora.duracion)}</td>
                {currentWeekdays.map((day, dayIndex) => (
                  pastTo(hora.horaInicio, day.number) ? (<td key={`${hora.horaInicio}-${dayIndex}`} className='blocked'></td>) : (<td key={`${hora.horaInicio}-${dayIndex}`} onClick={() => handleTdClick(hora.horaInicio, day.name, day.number)}></td>)
                ))}
              </tr>
            ) : (
              <tr key={horaIndex}>
                <td className='color-table'>{formatHora(hora.horaInicio) + " - " + sumarMinutos(hora.horaInicio, hora.duracion)}</td>
                {currentWeekdays.map((day, dayIndex) => (
                  pastTo(hora.horaInicio, day.number) ? (<td key={`${hora.horaInicio}-${dayIndex}`} className='blocked'></td>) : (<td key={`${hora.horaInicio}-${dayIndex}`} onClick={() => handleTdClick(hora.horaInicio, day.name, day.number)}></td>)
                ))}
              </tr>
            )
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VistaCalendar;
