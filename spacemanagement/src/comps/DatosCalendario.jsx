export const DatosCalendario = ({dates}) => {

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