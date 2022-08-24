import React from "react";
import "rsuite/styles/index.less";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainRouter } from './routing/MainRoutes'

function App() {
  return (
    <>

<MainRouter/>

      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}
export default App;
