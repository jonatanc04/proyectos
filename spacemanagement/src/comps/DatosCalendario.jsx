export const DatosCalendario = ({dates}) => {

  

  return (
    <div>
      {dates.length > 0 ? (
        <div>
          {dates.map((data) => (
          <p key={data.espacio}>{data.horaInicio} {data.horario}</p>
        ))}
        </div>
      ) : (
        <p>No hay registros</p>
      )
        
      }
    </div>
  );

}