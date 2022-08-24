import React from 'react'
import { Route } from 'react-router-dom';
import Login from '../pages/auth/Login/Login';
import Register from '../pages/auth/Register/Register';
import {NotFoundComponent} from '../pages/NotFound/NotFound';
import { publicRoutes } from '../Routes';


export const AuthRoutes = ({statelUser, setStateUser}) =>{
    return(
        <NotFoundcomponent>
            <Route path ={publicRoutes.LOGIN} element ={<Login setStateUser={setStateUser} statelUser={statelUser}/>}/>
            <Route path ={publicRoutes.REGISTER} element ={<Register/>}/>
            {/* <Route path ={'*'} element ={<h2>Error</h2>}/> */}
        </NotFoundcomponent>
    )
 

}

