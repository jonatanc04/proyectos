import escuela from '../imgs/escuela.jpg';
import '../styles/acceso.css';
import React, { useState } from 'react';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

function Acceso () {

  let intervalo;

  const [datos, setDatos] = useState({
    user:'',
    pwd: ''
  });
  const cookies = new Cookies(null, { path: '/' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = e => {
    setDatos({
      ...datos,
      [e.target.name] : e.target.value
    });
  }

  const finError = () => {
    setError('');
    clearInterval(intervalo);
  }

  const gestionError = mensaje =>{
    clearInterval(intervalo);
    setError(mensaje);
    intervalo = setInterval(() => finError(), 3500);
  }

  if (cookies.get('user') !== undefined) {
    navigate('/');
  }

  const comprobarAcceso = e => {
    e.preventDefault();

    if (datos.user.trim() === "") {
      gestionError("El campo usuario está vacío");
    } else if (datos.pwd.trim() === "") {
      gestionError("El campo contraseña está vacío");
    } else {
      var datosLog = "user=" + datos.user + "&pwd=" + datos.pwd;
      fetch("http://localhost/proyectos/spacemanagement/api/sUsuarios/gestionUsuarios.php?" + datosLog, {
          method: 'GET',
      })
      .then(res => {
        return res.json();
      })
      .then(data => {
        if (data === false) {
            gestionError("Los datos introducidos son erróneos");
            e.target.reset();
        } else {
            cookies.set('user', data['user'], { expires: new Date("December 17, 2099 03:24:00"), path: '/' });
            cookies.set('type', data['type'], { expires: new Date("December 17, 2099 03:24:00"), path: '/' });
            window.location.reload();
        }
      })
      .catch(error => {
          console.error(error);
      });
    }

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
            onChange={handleInputChange}
          ></input>
          <label>Contraseña:</label>
          <input 
            name="pwd" 
            type="password" 
            placeholder="Introduce tu contraseña"
            onChange={handleInputChange}
          ></input>
          <input 
            type="submit"
            defaultValue="Acceder"
            className="button"
          />
          <p id='error'>{ error }</p>
        </form>
        </div>
      </div>
    </div>
  );
}
 
export default Acceso;