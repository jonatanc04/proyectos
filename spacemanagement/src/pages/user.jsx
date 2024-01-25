import '../styles/user.css';
import Cookies from 'universal-cookie';
import escuela from '../imgs/escuela.jpg';
import { Link } from 'react-router-dom';

const User = () => {
  const cookies = new Cookies(null, { path: '/' });

  const cerrarSesion = () => {
    cookies.remove('user');
    cookies.remove('type');
    window.location.href='/';
  }

  return (
    <div className="usermenu">
      {cookies.get('type') === 'root' ? (
        <div className='opcionesRoot'>
          <Link to='/crearAulas'><p>Crear aulas</p></Link>
          <Link to='/crearUsers'><p>Crear usuarios</p></Link>
          <Link to='/crearCalendario'><p>Crear calendario</p></Link>
          <Link to='/'><p>Editar calendario</p></Link>
      </div>
      ) : (
        <div className='opcionesRoot'>
          <p>No tienes permisos para ver estas opciones.</p>
        </div>
      )}
      
      <div className='botones'>
        <button onClick={ cerrarSesion }>Cerrar Sesión</button>
      </div>
      <div className='imagen'>
        <img src={escuela} alt="error al cargar"></img>
      </div>
    </div>
  );
}

export default User;