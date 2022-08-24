//Crear un objeto con las rutas, se hace aquí para no afectar cada componente 

export const publicRoutes = {
    LOGIN:"login",
    REGISTER:"register",
    /* RESET_PASSWORD: "resetPassword" */
}
export const privateRoutes = {
    DASHBOARD:"dashboard",
   /*  REPORTS:"reports", */

}




// import React from "react";
// import "rsuite/styles/index.less";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Login from "./pages/auth/Login/Login";
// import Login from "./pages/auth/Register/Register";
// import Login from "./pages/Dashboard/Dashboard";
// export default function RotesAppGlobant() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }
