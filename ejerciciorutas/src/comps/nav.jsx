import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav () {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item active">
                <NavLink className='nav-link' to='/'>Inicio</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className='nav-link' to='/contacto'>Contacto</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className='nav-link' to='/nosotros'>Nosotros</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className='nav-link' to='/dashboard'>Dashboard</NavLink>
            </li>
            </ul>
        </div>
        </nav>
    )
}