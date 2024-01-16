import { useNavigate } from 'react-router-dom';
import '../styles/user.css';
import Cookies from 'universal-cookie';

const User = () => {

  const navigate = useNavigate();
  const cookies = new Cookies(null, { path: '/' });

  if (cookies.get('user') === undefined) {
    navigate('/');
  }

  const cerrarSesion = () => {
    cookies.remove('user');
    cookies.remove('type');
    window.location.reload();
  }

  return (
    <div className="usermenu">
      <button onClick={ cerrarSesion }>Cerrar Sesión</button>
    </div>
  );
}

export default User;