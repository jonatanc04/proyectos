import "../styles/navigator.css";
import { NavLink } from "react-router-dom";

export default function Header( {usuario, manejarLogin} ) {

  const logout = () => {
    manejarLogin(null);
  }

  return (
    <nav>
      {usuario === null 
      ? <NavLink className="nav-link" to="/">
        Login
      </NavLink> 
      : <NavLink className="nav-link" to='/' onClick={logout}>
        Logout
      </NavLink>}
      <br />
      <NavLink className="nav-link" to="/principal">
        Principal
      </NavLink>
      <br />
      {usuario && usuario.rol.includes('admin') ? (
        <NavLink className="nav-link" to="/administrar">
          Administrar
        </NavLink>
      ):(
        <></>
      )}
    </nav>
  );
}
