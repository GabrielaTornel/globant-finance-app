import React from "react";
import "rsuite/styles/index.less";
import { Navbar } from "../../components/NavBar";
import { ListItems } from "../../components/List-items";
import { Filter } from "../../components/Filter/Filter";


function Dashboard() {
  console.log(localStorage)
  return (
    
    <>
      <header>  <Navbar /></header>
      
      <main className="dashboard-container"> 

      <section>
        <Filter/>
      </section>
       
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