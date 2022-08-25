import React from "react";
import { Nav } from "rsuite";
import CloseIcon from "@rsuite/icons/Close";
import "./index.css";

export const Navbar = () => {
  const emailUser = localStorage.email
  return (
    
      <Nav className="containerNav">
        <Nav.Item className="nav-nav">{emailUser}</Nav.Item>
        <Nav.Item className="nav-nav" icon={<CloseIcon />}></Nav.Item>
      </Nav>
    
  );
};
