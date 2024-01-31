export const DatosCalendario = ({dates}) => {

  function formatHora(detalladaHora) {
    const horaDetallada = new Date(`2000-01-01T${detalladaHora}`);
    const horaFormateada = horaDetallada.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return horaFormateada;
  }

  function sumarMinutos(hora, duracion) {
    let format = formatHora(hora);
    let separar = format.split(":")
    separar[1] = parseInt(separar[1]) + parseInt(duracion);

    if (parseInt(separar[1]) >= 60) {
      separar[1] = parseInt(separar[1]) - 60;
      if (parseInt(separar[0]) === 23 ? separar[0] = "00" : separar[0] = parseInt(separar[0]) +1);
    }

    if (parseInt(separar[0]) < 9 && parseInt(separar[0]) > 1) {
      separar[0] = "0" + separar[0];
    }
    if (parseInt(separar[1]) < 9 && parseInt(separar[1]) > 0) {
      separar[1] = "0" + separar[1];
    }

    return(separar[0] + ":" + separar[1]);
  }
  

  return (
    <div className="datos-calendario">
      {dates.length > 0 ? (
        <table className="datos-calendario-list">
          <tr>
            <td>Tipo de sesión</td>
            <td>Hora de inicio</td>
            <td>Hora de fin</td>
            <td>Horario</td>
          </tr>
          {dates.map((data) => (
            <tr key={data.espacio}>
              <td>{data.tipo === 'c' ? "Clase" : "Descanso"}</td>
              <td>{formatHora(data.horaInicio)}</td>
              <td>{sumarMinutos(data.horaInicio, data.duracion)}</td>              
              <td>{data.horario === 'm' ? "Mañana" : "Tarde"}</td>
            </tr>
          ))}
        </table>
      ) : (
        <p>No hay registros</p>
      )
        
      }
    </div>
  );

}