import React from "react";
import { Nav } from "rsuite";
import CloseIcon from '@rsuite/icons/Close';
import './index.css'
export const Navbar = () => {
  return (
    <Nav className="containerNav">
     
      <Nav.Item>email@gmail.com</Nav.Item>
      <Nav.Item icon={<CloseIcon />}></Nav.Item>
    </Nav>
  );
};
