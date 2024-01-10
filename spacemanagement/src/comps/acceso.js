import escuela from '../imgs/escuela.jpg';
import '../styles/acceso.css';
import React, { useState } from 'react';

function Acceso () {

  const [user, setUser] = useState('');
  const [pwd, setPass] = useState('');

  const comprobarAcceso = e => {
    e.preventDefault();

    var datos = "user=" + user + "&pwd=" + pwd;
    fetch("http://localhost/proyectos/spacemanagement/api/sUsuarios/gestionUsuarios.php?" + datos, {
        method: 'GET',
    })
    .then(res => {
      return res.json();
    })
    .then(data => {
      if (data === false) {
          //incioAlerta("Los datos introducidos son erróneos.");
          console.log('q t cayes tu puta');
      } else {
          //document.cookie = "user=" + data['user'] + "; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/;";
          //document.cookie = "type=" + data['type'] + "; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/;";
          console.log('furule');
      }
    })
    .catch(error => {
        console.error(error);
    });

  }

  return ( 
    <div className="acceso">
      <div className="formulario">
        <div className='imagen-container'>
          <img src={escuela} alt="error al cargar"></img>
        </div>
        <div className="form-container">
        <form onSubmit={comprobarAcceso}>
          <label>Nombre de usuario:</label>
          <input 
            name="user" 
            type="text" 
            placeholder="Introduce tu nombre de usuario"
            value={user}
            onChange={e => setUser(e.target.value)}
          ></input>
          <label>Contraseña:</label>
          <input 
            name="pwd" 
            type="password" 
            placeholder="Introduce tu contraseña"
            value={pwd}
            onChange={e => setPass(e.target.value)}
          ></input>
          <input 
            type="submit"
            defaultValue="Acceder"
            className="button"
          />
          <p id='error'></p>
        </form>
        </div>
      </div>
    </div>
  );
}
 
export default Acceso;