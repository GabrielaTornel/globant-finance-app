import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Header } from '../components/Header/Header';
import Login from '../pages/auth/Login/Login';
import Register from '../pages/auth/Register/Register';
import Dashboard from '../pages/Dashboard/Dashboard';


function MainRouter ()  {

const [user, setUser] = useState({
  email: localStorage.getItem("email"),
  password: "",
});



  return (
        <BrowserRouter>
          <Routes>
          <Route path='/' element={<Login  user={user} setUser = {setUser}/>} />
          <Route path='/register' element={<Register />} />
            
            <Route path='/dashboard/' element={
            user.email === null ? (<Login/>) : (<><Header user={user} setUser = {setUser} /> <Dashboard/> </>)
            } />
          </Routes>
        </BrowserRouter>
  );

}
export default MainRouter;