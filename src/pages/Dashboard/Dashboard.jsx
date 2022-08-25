import React from "react";
import "rsuite/styles/index.less";
import { Navbar } from "../../components/NavBar";
import { ListItems } from "../../components/List-items";

import './index.css'
import { ItemsData } from "../../components/List-items/List-items";
import expenseOfMonthCategories from "../../hooks/expenseOfMonth"


function Dashboard() {
  expenseOfMonthCategories();
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
          <ItemsData />
        </section>
        <section>
   
        </section>
      
      </main>
      <> </>
    </>
  );

}

export default Dashboard;
