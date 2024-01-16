import React from 'react';
import '../styles/table.css';
import User from './User';

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
          <User
            key={user.id}
            user={user}
            editRow={props.editRow}
            deleteUser={props.deleteUser}
          />
        ))
      ) : (
        <tr>
          <td colSpan={3}>No hay usuarios</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
