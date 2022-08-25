import React from "react";
import "rsuite/styles/index.less";
import { ListItems } from "../../components/List-items";
import { ItemsData } from "../../components/List-items/List-items";


function Dashboard() {
  console.log(localStorage)
  return (
    
    <>
      <header></header>
      
      <main className="dashboard-container"> 
       
        <section>
          <h1>Dashboard</h1>
        </section>
        <section > 
          <ListItems />
          <ItemsData />
        </section>
      
      </main>
      <> </>
    </>
  );

}

export default Dashboard;
