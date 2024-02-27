import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import "../styles/vistaCalendar.css";

export const VistaCalendar = ({ calendar, reservas, aulas }) => {
  const [horarioSeleccionado, setHorarioSeleccionado] = useState("m");
  const [currentDate, setCurrentDate] = useState(new Date());
  const [prevWeekDisabled, setPrevWeekDisabled] = useState(true);
  const [nextWeekDisabled, setNextWeekDisabled] = useState(false);
  const weekdays = useMemo(() => ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"], []);
  const [selectedStartDate, setSelectedStartDate] = useState('');
  const [selectedStartTime, setSelectedStartTime] = useState('');
  const [selectedEndDate, setSelectedEndDate] = useState('');
  const [selectedEndTime, setSelectedEndTime] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const cookies = new Cookies(null, { path: '/' });

  useEffect(() => {
    const today = new Date();
    const currentDay = today.getDay(); 
    const thisMonday = new Date(today);
    thisMonday.setDate(today.getDate() - currentDay + 1);
    const initialStartDate = `${weekdays[thisMonday.getDay()]}-${thisMonday.getDate()}`;
    setSelectedStartDate(initialStartDate);
    setSelectedEndDate(initialStartDate);
  
    const currentHour = today.getHours();
    const currentMinute = today.getMinutes();
    const morningEndTime = 14 * 60 + 10;
    const currentTime = currentHour * 60 + currentMinute;
  
    if (currentTime > morningEndTime) {
      setHorarioSeleccionado("t");
    } else {
      setHorarioSeleccionado("m");
    }
  
    const initialStartTime = "08:00:00";
    setSelectedStartTime(initialStartTime);
    setSelectedEndTime(sumarMinutos(initialStartTime, 50));
    setSelectedClass("bb9ecf11-bba8-481b-a66d-7be9a9a9bb85");
  }, [weekdays]);

  const getDaysOfWeek = () => {
    const today = new Date();
    const currentDay = today.getDay(); 
    const firstDayOfWeek = new Date(today);
    firstDayOfWeek.setDate(firstDayOfWeek.getDate() - currentDay + 1);
  
    const days = [];
  
    for (let i = 0; i < 5; i++) {
      const date = new Date(firstDayOfWeek);
      date.setDate(firstDayOfWeek.getDate() + i);
      days.push(date);
    }
  
    for (let i = 0; i < 5; i++) {
      const date = new Date(firstDayOfWeek);
      date.setDate(firstDayOfWeek.getDate() + 7 + i);
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
    day.setDate(currentDate.getDate() - currentDate.getDay() + 1 + i);
    return { name: weekdays[day.getDay()], number: day.getDate() };
  });
  

  const monthYearString = `${currentDate.toLocaleString('default', { month: 'long' }).replace(/^\w/, c => c.toUpperCase())} ${currentDate.getFullYear()}`;

  const filtrarPorPartes = (calendar, valor) => {
    const resultados = calendar.filter(objeto => objeto.horario === valor);
    return resultados;
  };

  function sumarMinutos(horaInicio, duracion) {
    const [horasInicio, minutosInicio] = horaInicio.split(":").map(Number);
    const duracionTotal = parseInt(duracion);
  
    let horas = horasInicio;
    let minutos = minutosInicio + duracionTotal;
  
    horas += Math.floor(minutos / 60);
    minutos %= 60;
  
    if (horas >= 24) {
      horas %= 24;
    }
  
    const horasStr = horas < 10 ? "0" + horas : horas.toString();
    const minutosStr = minutos < 10 ? "0" + minutos : minutos.toString();
  
    return horasStr + ":" + minutosStr;
  }  

  const handleTdClick = (horaInicio, dayName, dayNumber) => {
    console.log(`${horaInicio}-${dayName}-${dayNumber}`);
  };

  const pastTo = (horaInicio, dayNumber) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();
  
    const [hora, minutos] = horaInicio.split(':');
    const startHour = parseInt(hora);
    const startMinute = parseInt(minutos);
  
    const eventDate = new Date(currentYear, currentMonth, dayNumber, startHour, startMinute);
    const eventHasPassed = eventDate < currentDate;
    const isBetween1And11 = dayNumber >= 1 && dayNumber <= 11;
    const isDayAfter20 = currentDay > 20;
    if (isDayAfter20 && isBetween1And11) {
      return false;
    }
  
    return eventHasPassed;
  };
  
  
  
  const getActualDate = () => {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    return hours + ':' + minutes + ':' + seconds;
  }

  function compararHoras (hora1, horaFin) {
    var hora2;

    if (horaFin === null) {
      hora2 = getActualDate();
    } else {
      hora2 = horaFin;
    }

    var [horas1, minutos1, segundos1] = hora1.split(':');
    var [horas2, minutos2, segundos2] = hora2.split(':');

    if (parseInt(horas1) < parseInt(horas2)) {
        return false;
    } else if (parseInt(horas1) > parseInt(horas2)) {
        return true;
    }

    if (parseInt(minutos1) < parseInt(minutos2)) {
        return false;
    } else if (parseInt(minutos1) > parseInt(minutos2)) {
        return true;
    }

    if (parseInt(segundos1) < parseInt(segundos2)) {
        return false;
    } else if (parseInt(segundos1) > parseInt(segundos2)) {
        return true;
    }

    return false;
  }

  function compararDias (dia1, dia2) {

    var [, diaInicioStr] = dia1.split('-');
    var diaInicio = parseInt(diaInicioStr);
    var diaFin;
    var now = new Date();
    var hoy = now.getDate();

    if (dia2 === null) {
      diaFin = now.getDate();
    } else {
      var [, diaStr] = dia2.split('-');
      diaFin = parseInt(diaStr);
    }

    console.log(diaInicio + " " + diaFin);

    if (diaInicio >= hoy) {
      if (diaInicio === diaFin) {
        return "=";
      } else if (diaInicio > diaFin) {
        if (diaInicio >= 21 && diaFin <= 11) {
          return "<";
        } else {
          return ">";
        }
      } else {
        return "<";
      }
    } else {
      return false;
    }
  }

  function comprobarReserva (diaInicio, horaInicio, diaFin, horaFin) {

    //recuerda, si vas a comparar la horaInicio con la horaFin has de ponerlo al revés

    if(compararDias(diaInicio, null) !== false) {
      console.log("1");
      console.log(compararDias(diaInicio, null));
      if (compararDias(diaInicio, null) === '=') {
        console.log("2");
        if (compararHoras(horaInicio, null)) {
          console.log("3");
          if(compararHoras(horaFin, horaInicio)) {
            console.log("yeyyy");
          }
        }
      }
    }

    return false;
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Día de inicio seleccionado:", selectedStartDate);
    console.log("Hora de inicio seleccionada:", selectedStartTime);
    console.log("Día de fin seleccionado:", selectedEndDate);
    const [horas, minutos] = selectedEndTime.split(':');
    const horaFormateada = `${horas.padStart(2, '0')}:${minutos.padStart(2, '0')}:00`;
    console.log("Hora de fin seleccionada:", horaFormateada);
    console.log("Clase seleccionada:", selectedClass);
    console.log("----------------------------------------------------")

    let reservaValida = comprobarReserva(selectedStartDate, selectedStartTime, selectedEndDate, horaFormateada);

    if (!reservaValida) {
      console.log("Error en la reserva");
    } else {
      const url = "http://localhost/proyectos/spacemanagement/api/sReservas/gestionReservas.php";
      const data = {
        idAula: selectedClass,
        dniUser: cookies.get('user'),
        diaInicio: selectedStartDate,
        horaInicio: selectedStartTime,
        diaFin: selectedEndDate,
        horaFin: horaFormateada
      }

      axios.post(url, data)
      .then(response => {
        console.log('Respuesta:', response.data);
      })
      .catch(error => {
        console.error('Error al realizar la solicitud:', error)
      })
    }
  };

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
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
        <div className='cont-opt4'>
          <label>Seleccionar clase:</label>
          <select value={selectedClass} onChange={handleClassChange}>
            {aulas.map((aula) => (
              <option key={aula.id} value={aula.id}>{aula.nombre}</option>
            ))}
          </select>
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
                <option key={index} value={sumarMinutos(hora.horaInicio, hora.duracion)}>
                  {formatHora(sumarMinutos(hora.horaInicio, hora.duracion))}
                </option>
              ))}
            </select>
            <div className='contenedor-boton-flex'>
              <button type="submit">Reservar</button>
            </div>
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