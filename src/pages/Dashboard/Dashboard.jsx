import React from 'react'
import {expencesOperations} from '../../Helpers/expenceOperations'
import { Button } from 'rsuite';
import 'rsuite/styles/index.less'

function Dashboard() {

  const expencesData = [
    {
        fecha: '17',
        categoria: 'transporte',
        gasto: 234,
    },
    {
        fecha: '18',
        categoria: 'comida',
        gasto: 100,
    },
    {
        fecha: '18',
        categoria: 'comida',
        gasto: 100,
    },
    {
        fecha: '18',
        categoria: 'comida',
        gasto: 100,
    },
    {
        fecha: '18',
        categoria: 'comida',
        gasto: 100,
    }
];

  const handleClick = () => {
    expencesOperations(expencesData, 'Hola')
  }
  return (
    <>  <Button color="violet" onClick={handleClick} appearance="primary">Dashboard</Button></>
  )
import React from "react";
import "rsuite/styles/index.less";
import { Navbar } from "../../components/NavBar";
import { ListItems } from "../../components/List-items";

import './index.css'


function Dashboard() {
  console.log(localStorage)
  return (
    <>
      <header>  <Navbar /></header>
      
      <main className="dashboard-container"> 
       
        <section>
          <h1>Dashboard</h1>
        </section>
        <section > 
          <ListItems />
        </section>
      
      </main>
      <> </>
    </>
  );
}

export default Dashboard;
