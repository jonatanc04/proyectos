import '../styles/user.css';
import Cookies from 'universal-cookie';

const User = () => {
  const cookies = new Cookies(null, { path: '/' });

  const cerrarSesion = () => {
    cookies.remove('user');
    cookies.remove('type');
    window.location.href='/';
  }

  return (
    <div className="usermenu">
      <button onClick={ cerrarSesion }>Cerrar Sesión</button>
    </div>
  );
}

export default User;