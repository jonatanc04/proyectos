import { Link } from 'react-router-dom';
import '../styles/header.css';
import Cookies from 'universal-cookie';

export default function Header() {

  const cookies = new Cookies(null, { path: '/' });
  console.log(cookies.get('type'));

  return (
    <div className="header">
      <h1>Reserva de Aulas</h1>
      <div className="enlaces">
        <Link to='/'>Aulas</Link>
        
        {cookies.get('user') === undefined ? (
          <Link to='/acceso'>Acceso</Link>
        ) : (<Link to='/user'>{ cookies.get('user') }</Link>)}
      </div>
    </div>
  );
}