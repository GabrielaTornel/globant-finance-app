import React from "react";
import { List } from "rsuite";
import "./index.css";
import IOsIcon from "@rsuite/icons/IOs";
import { ModalDashboard } from "../Modal";
import { getInfo, getInfoSortCategory } from "../../Helpers/crud";
import { ModalDescription } from "../Modal/modal-items";
import logo from "../../assets/icomoon/Transportes.png";

export const ListItems = () => {
  const [itemsCataegory, setItemsCataegory] = React.useState([]);

  const fetchData = async () => {
    const itemsDB = await getInfo();
    console.log(itemsDB);
    const accItemData = itemsDB.reduce((acc, cur) => {
      let item = null;

      item = acc.find(({ Category }) => Category === cur.Category);
      // }
      console.log(item, "este es el items");
      if (item) {
        item.Monto += cur.Monto;
      } else acc.push({ Category: cur.Category, Monto: cur.Monto });
      return acc;
    }, []);

    setItemsCataegory(accItemData);
    /* console.log("itemsDB", itemsDB) */
  };

  React.useEffect(() => {

    fetchData();
  }, []);
  // const [priceItemsInitial, setPriceItemsInitial] = useState("0.00");
  return (
    <div className="list-container">
      {itemsCataegory.length > 0 &&
        itemsCataegory.map((item, i) => (
          <List key={i}>
            <List.Item>
              <img src={`./icomoon/${item.Category}.png`} /> {item.Category}{" "}
               COP${item.Monto}
              <ModalDescription id={item.Category} />
            </List.Item>
          </List>
        ))}
      <section>
        <ModalDashboard getDataCategories={fetchData } />
      </section>
    </div>
  );
};
