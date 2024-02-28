import "../styles/nav.css";

import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav({ user, handleLogin }) {

  const logout = () => {
    handleLogin(null);
  }

  return (
    <nav>
      <p>Jonatan Córcoles - 2ºDAW - 2024</p>
      {user === null ? (
        <NavLink className="nav-link" to="/login">
          <p>Login</p>
        </NavLink>
      ) : (
        <NavLink className="nav-link" to="/" onClick={logout}>
          <p>Logout</p>
        </NavLink>
      )}
    </nav>
  );
}
