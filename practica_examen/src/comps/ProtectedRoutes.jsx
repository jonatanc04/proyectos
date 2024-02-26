import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({estaLogueado, children, redirectTo="/"}) => {
  if (!estaLogueado) {
    return <Navigate to={redirectTo} />
  }
  return children ? children : <Outlet />
}

export default ProtectedRoutes;