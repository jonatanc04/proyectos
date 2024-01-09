import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  return (
    <div className="header">
      <h1>Reserva de Aulas</h1>
      <div className="enlaces">
        <Link to='/'>Aulas</Link>
        <Link to='/acceso'>Acceso</Link>
      </div>
    </div>
  );
}

export default Header;