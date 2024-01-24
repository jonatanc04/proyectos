import React from "react";
import '../styles/listaAulas.css';

export default function ListaAulas({ onAulaAdded }) {
  const [aulas, setAulas] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost/proyectos/spacemanagement/api/sClases/gestionClases.php",
          {
            method: "GET",
          }
        );
        const data = await response.json();
        if (data === false) {
          console.log(data);
        } else {
          setAulas(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [onAulaAdded]);

  return (
    <table>
      <tbody>
        <tr>
          <td className="titulo-listado">Listado de aulas</td>
        </tr>
        <tr className="listado-final">
          <td>
            {aulas.length > 0 ? (
              <ul>
                {aulas.map((aula) => (
                  <li key={aula.id}>{aula.nombre}</li>
                ))}
              </ul>
            ) : (
              <p className="no-aulas">No existen aulas</p>
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
}