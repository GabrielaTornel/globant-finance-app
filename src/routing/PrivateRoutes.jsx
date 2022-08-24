import React from "react";
import { Navigate } from "react-router-dom";
import { publicRoutes } from "../Routes";


//Children hace referencia a los componentes que esan enAuthRoutes
const PrivateRoutes = ({children, isLogged})  => {
  return isLogged ? children : <Navigate replace to= {`/auth/${publicRoutes.LOGIN}`}/>
}

export default PrivateRoutes;
