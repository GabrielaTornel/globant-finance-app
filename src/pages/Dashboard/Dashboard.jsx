import React from "react";
import "rsuite/styles/index.less";
import { ListItems } from "../../components/List-items";
import './index.css'
import { ItemsData } from "../../components/List-items/List-items";
import { Graph } from "../../components/Graph";





function Dashboard() {
  console.log(localStorage);
  return (
    <>

      <header><Navbar /></header>
      <main className="dashboard-container"> 
        <section className="containerGraph">
          <Graph/>
        </section>
       <section>


          <h1>Dashboard</h1>
        </section>
        <section>
          <ListItems />
        </section>
      </main>
      <> </>
    </>
  );
}

export default Dashboard;
