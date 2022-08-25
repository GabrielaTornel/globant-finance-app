import "rsuite/styles/index.less";
import "./index.css";
import { ListItems } from "../../components/List-items";
import { Graph } from "../../components/Graph";


function Dashboard() {
  (localStorage);
  return (
    <>
      <header>{/* <Navbar /> */}</header>
      <main className="dashboard-container">
        <section className="containerGraph">
          <Graph />
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
