import '../styles/user.css';
import Cookies from 'universal-cookie';
import escuela from '../imgs/escuela.jpg';

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
        <a href='/crear'><p>Crear aulas</p></a>
        <a href='/'><p>Crear usuarios</p></a>
        <a href='/'><p>Crear calendario</p></a>
        <a href='/'><p>Editar calendario</p></a>
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