import React from "react";

function User({ user, editRow, deleteUser }) {
  const { id, name, username } = user;

  return (
    <tr key={id}>
      <td>{name}</td>
      <td>{username}</td>
      <td>
        <button
          onClick={() => editRow(user)}
          className="button muted-button"
        >
          Editar
        </button>
        <button
          onClick={() => deleteUser(id)}
          className="button muted-button"
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
}

export default User;
