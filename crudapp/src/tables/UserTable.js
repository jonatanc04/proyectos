import React from 'react'
import '../styles/table.css'

const UserTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Nombre de usuario</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
            <button
                onClick={() => {
                    props.editRow(user)
                }}
                className="button muted-button"
                >
                Editar
                </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
                >
                Eliminar
                </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No hay usuarios</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable