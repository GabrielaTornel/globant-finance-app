import "rsuite/styles/index.less";
import "./index.css";
import { ListItems } from "../../components/List-items";
import { Graph } from "../../components/Graph";
import { Filter } from "../../components/Filter/Filter";

function Dashboard() {
  console.log(localStorage);
  return (
    <>
      <header>{/* <Navbar /> */}</header>
      <main className="dashboard-container">
        <section className="containerGraph">
          <Graph />
          <Filter />
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
