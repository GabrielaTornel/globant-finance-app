import React from "react";

import { Button } from "rsuite";
import "rsuite/styles/index.less";
import { Navbar } from "../../components/NavBar";
import { ListItems } from "../../components/List-items";
import { Graph } from "../../components/Graph/index";

function Dashboard() {
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
