import React from "react";
import { Route, Routes  } from'react-router-dom';


//El children representa todo lo que esta en el componente, se crea apartir de las props 
export const NotFoundComponent= ({children}) => {
return(
<Routes>
{children}
{/*RUTA PARA-NOT FOUND*/}
<Route path='*'element={<h4>Not Founde</h4>}/>
</Routes>
)
}