import React from "react";
import { List } from "rsuite";
import "./index.css";
import IOsIcon from "@rsuite/icons/IOs";
import { ModalDashboard } from "../Modal/index";
import { getInfo, getInfoSortCategory } from "../../Helpers/crud";
import { ModalDescription } from "../Modal/modal-items";

export const ListItems = () => {
  const [itemsCataegory, setItemsCataegory] = React.useState([]);

  /* ("itemsCataegory", itemsCataegory) */
 const [total, setTotal] = React.useState(0);
  // (getInfoSortCategory("Salud"));

  // const reduceNewO = [5, 6, 10, 20].reduce((acc, item) => {
  //   return (acc += item);
  // }, 0);
  // (reduceNewO, "aqui esta la suma");

  const accItemData = itemsCataegory.reduce((acc, cur) => {
    let item = null;
    // if (acc.length > 0) {
       item= acc.find(({ Category }) => Category === cur.Category);
    // }
      (item, "este es el items")
    if (item) {
      item.Monto += cur.Monto;
    
    } else acc.push({ Category: cur.Category, Monto: cur.Monto });
    return acc;
  }, []);
  // (itemsCataegory); // not modified
  // (accItemData);

  React.useEffect(() => {
    const fetchData = async () => {
      const itemsDB = await getInfo();
      setItemsCataegory(itemsDB);
      /* ("itemsDB", itemsDB) */
    };
    fetchData();
  }, []);
  // const [priceItemsInitial, setPriceItemsInitial] = useState("0.00");

  return (
    <div className="list-container">
      {accItemData.map((item, i) => (
        <List key={i}>
          <List.Item>
            {" "}
            {item.Category} Monto COP${item.Monto}
            <ModalDescription id={item.Category} />
          </List.Item>
        </List>
      ))}
      <section>
        <ModalDashboard />
      </section>
    </div>
  );
};
