import React from 'react'
import {expencesOperations} from '../../Helpers/expenceOperations'
import { Button } from 'rsuite';
import { Navbar } from "../../components/NavBar

import './index.css'
import 'rsuite/styles/index.less'
import { ListItems } from "../../components/List-items";


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
    
    <>
      <header>  <Navbar /></header>
      
      <main className="dashboard-container"> 
       
        <section>
          <h1>Dashboard</h1>
        </section>
        <section > 
          <ListItems />
          <Button color="violet" onClick={handleClick} appearance="primary">Dashboard</Button></>
        </section>
      
      </main>
      <> </>
    </>
  );

}

export default Dashboard;
