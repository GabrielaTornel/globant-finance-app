import React from "react";
import { Navigate } from "react-router-dom";
import { privateRoutes } from "../Routes";

//Children hace referencia a los componentes que esan enAuthRoutes
const PublicRoutes = ({children, isLogged})  => {
  return isLogged ? <Navigate replace to= {`/app/${privateRoutes.DASHBOARD}`}/> : children
}

export default PublicRoutes;

 



