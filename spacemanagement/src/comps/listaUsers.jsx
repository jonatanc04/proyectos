import React from "react";
import '../styles/listaAulas.css';

export default function ListaUsers({ onUserAdded }) {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost/proyectos/spacemanagement/api/sUsuarios/gestionUsuarios.php?user=true",
          {
            method: "GET",
          }
        );
        const data = await response.json();
        if (data === false) {
          console.log(data);
        } else {
          setUsers(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [onUserAdded]);

  return (
    <table>
      <tbody>
        <tr>
          <td className="titulo-listado">Listado de usuarios</td>
        </tr>
        <tr className="listado-final">
          <td>
            {users.length > 0 ? (
              <ul>
                {users.map((user) => (
                  <li key={user.dni}>{user.user} {user.dni} {user.type}</li>
                ))}
              </ul>
            ) : (
              <p className="no-aulas">No existen usuarios</p>
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
}