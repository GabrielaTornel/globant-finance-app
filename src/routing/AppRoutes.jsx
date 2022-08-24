import React from "react";
import { Route }from'react-router-dom'
import {NotFoundComponent} from "../pages/NotFound/NotFound"
import { privateRoutes } from '../Routes';
import {}  from '../pages/Dashboard/Dashboard'




const  AppRoutes = () => {
  return (
    <NotFoundComponent>
    <Route path ={privateRoutes.DASHBOARD} element= {<Dashboard/>}/>
    {/* <Route path ={privateRoutes.REPORTS} element= {<Report/>}/> */} //Comento es parte por que aun no lo he creado. 
    </NotFoundComponent>
  );
}
export default AppRoutes;
