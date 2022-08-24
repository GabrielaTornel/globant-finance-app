import React from "react";
import "rsuite/styles/index.less";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login/Login";
import Register from "./pages/auth/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import "./App.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
