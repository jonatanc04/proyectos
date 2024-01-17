import React from "react";
import { Outlet, useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function Dashboard () {

    const navigate = useNavigate();
    const controlClick = () => {
        navigate('/')
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={controlClick}>Logout</button>
            <br />
            <Link to='bienvenido'>
                Click para saludo
            </Link>
            <br />
            <Link to='despedida'>
                Click para despedida
            </Link>
            <Outlet />
        </div>
    )
}