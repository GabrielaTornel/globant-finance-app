import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {NotFoundComponent} from '../pages/NotFound/NotFound';
import AppRoutes from "../routing/AppRoutes";
import {AuthRoutes} from '../routing/AuthRoutes';
import PrivateRoutes from '../routing/PrivateRoutes';
import PublicRouter from '../routing/PublicRoutes';
import Login from '../pages/auth/Login/Login';


//Se debe crear una simulación de Backend 
//Router principal 
export  const   MainRouter = () => {
  let userEmail =   window.localStorage.getItem("email")
  console.log("email", userEmail)
  
const [stateUser, setStateUser] =React.useState({
    islogged: userEmail = "" ? false: true,
    isVerified:true,
})

const { islogged, isVerified } = stateUser

return (
    <div>
      <BrowserRouter>
        <NotFoundComponent>

            //La página que todos ven siempre 
        <Route path="/" element={<Login/>} />

          {/* <Route path="/" element={<PublicRouter islogged={islogged}> <AuthRoutes setStateUser={setStateUser} statelUser={statelUser}/> </PublicRouter>}/> */}
          <Route path="/register" element={<PublicRouter islogged={islogged}> <AuthRoutes setStateUser={setStateUser} stateUser={stateUser}/> </PublicRouter>}/>
          <Route path="/dashboard" element={<PrivateRoutes islogged={islogged}> <AppRoutes islogged ={islogged}/></PrivateRoutes>}/>

        </NotFoundComponent>
      </BrowserRouter>
    </div>
  );

}

/* 
const verificando = (
  if (localStorage ==  isVerified){

  } else {}
  
) 
 */

