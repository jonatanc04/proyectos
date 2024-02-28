import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({isLogged, children, redirectTo="/"}) => {
  if (!isLogged) {
    return <Navigate to={redirectTo} />
  }
  return children ? children : <Outlet />
}

export default ProtectedRoutes;