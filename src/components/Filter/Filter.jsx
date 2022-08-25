import React, { useContext, useState } from "react";
/* import { gastosFil } from '../../Helpers/filter'; */
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import SplitButton from "react-bootstrap/SplitButton";
/* import { getCategoriesAmount, listCategory } from "../../Helpers/filter"; */
import { DataContext } from "../../main";
import "./filter.css";

export const Filter = () => {
  /*  const dataFilter = gastosFil();
   console.log(dataFilter)  */
  /*  listCategory();
   console.log(listCategory(), "listcategory") */

  return (
    <div className="container_filter">
      <section className="box-filter">
        <div className="mb-2">
          {[DropdownButton].map((DropdownType, idx) => (
            <DropdownType
              as={ButtonGroup}
              key={idx}
              id={`dropdown-button-drop-${idx}`}
              size="lg"
              title="Categoria"
            >
              <Dropdown.Item eventKey="1">Comestibles</Dropdown.Item>
              <Dropdown.Item eventKey="2">Compras</Dropdown.Item>
              <Dropdown.Item eventKey="3">Familia </Dropdown.Item>
              <Dropdown.Item eventKey="4">Ocio</Dropdown.Item>
              <Dropdown.Item eventKey="5">Regalos</Dropdown.Item>
              <Dropdown.Item eventKey="6">Restaurantes </Dropdown.Item>
              <Dropdown.Item eventKey="7">Salud</Dropdown.Item>
              <Dropdown.Item eventKey="8">Transportes </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="9">Todos </Dropdown.Item>
            </DropdownType>
          ))}
        </div>

        <div className="mb-2">
          {[DropdownButton].map((DropdownType, idx) => (
            <DropdownType
              as={ButtonGroup}
              key={idx}
              id={`dropdown-button-drop-${idx}`}
              size="lg"
              title="Fecha"
            >
              <Dropdown.Item eventKey="1">Enero</Dropdown.Item>
              <Dropdown.Item eventKey="2">Febrero</Dropdown.Item>
              <Dropdown.Item eventKey="3">Marzo </Dropdown.Item>
              <Dropdown.Item eventKey="4">Abril</Dropdown.Item>
              <Dropdown.Item eventKey="5">Mayo</Dropdown.Item>
              <Dropdown.Item eventKey="6">Junio </Dropdown.Item>
              <Dropdown.Item eventKey="7">Julio</Dropdown.Item>
              <Dropdown.Item eventKey="8">Agosto </Dropdown.Item>
              <Dropdown.Item eventKey="9">Septiembre</Dropdown.Item>
              <Dropdown.Item eventKey="10">Octubre </Dropdown.Item>
              <Dropdown.Item eventKey="11">Noviembre</Dropdown.Item>
              <Dropdown.Item eventKey="12">Diciembre </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="9">Todos </Dropdown.Item>
            </DropdownType>
          ))}
        </div>
      </section>
    </div>
  );
};
