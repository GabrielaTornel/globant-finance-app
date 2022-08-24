import React from "react";
import { Nav } from "rsuite";
import CloseIcon from "@rsuite/icons/Close";
import "./index.css";

export const Navbar = () => {
  return (
    
      <Nav className="containerNav">
        <Nav.Item className="nav-nav">email@gmail.com</Nav.Item>
        <Nav.Item className="nav-nav" icon={<CloseIcon />}></Nav.Item>
      </Nav>
    
  );
};
