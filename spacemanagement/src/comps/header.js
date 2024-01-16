import { Link } from 'react-router-dom';
import '../styles/header.css';
import Cookies from 'universal-cookie';

const Header = () => {

  const cookies = new Cookies(null, { path: '/' });
  console.log(cookies.get('type'));

  if (cookies.get('user') === undefined) {
    return (
      <div className="header">
        <h1>Reserva de Aulas</h1>
        <div className="enlaces">
          <Link to='/'>Aulas</Link>
          <Link to='/acceso'>Acceso</Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="header">
        <h1>Reserva de Aulas</h1>
        <div className="enlaces">
          <Link to='/'>Aulas</Link>
          <Link to='/user'>{ cookies.get('user') }</Link>
        </div>
      </div>
    );
  }
}

export default Header;