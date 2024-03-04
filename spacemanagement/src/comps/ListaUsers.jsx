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

  const handleDeleteUser = async (dni) => {
    try {
      const response = await fetch(
        `http://localhost/proyectos/spacemanagement/api/sUsuarios/gestionUsuarios.php?delete=${dni}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        const updatedUsers = users.filter(user => user.dni !== dni);
        setUsers(updatedUsers);
      } else {
        console.error("Error al eliminar usuario");
      }
    } catch (error) {
      console.error(error);
    }
  };

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
                  <li key={user.dni}>
                    {user.user} {user.dni} {user.type}
                    <button
                      className="borrar-user"
                      onClick={() => handleDeleteUser(user.dni)}
                    >
                      Eliminar
                    </button>
                  </li>
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
