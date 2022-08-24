import React from 'react'
import {expencesOperations} from '../../Helpers/expenceOperations'
import { Button } from 'rsuite';
import { Navbar } from "../../components/NavBar
import './index.css'
import 'rsuite/styles/index.less'
import { ListItems } from "../../components/List-items";


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
          <Button color="violet" onClick={handleClick} appearance="primary">Dashboard</Button></>
        </section>
      
      </main>
      <> </>
    </>
  );

}

export default Dashboard;
