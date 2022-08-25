import React from "react";
import { List } from "rsuite";
import "./index.css";
import IOsIcon from "@rsuite/icons/IOs";
import { ModalDashboard } from "../Modal/index";
import { getInfo, getInfoSortCategory } from "../../Helpers/crud";
import { ModalDescription } from "../Modal/modal-items";

export const ListItems = () => {
  const [itemsCataegory, setItemsCataegory] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  // console.log(getInfoSortCategory("Salud"));

  const reduceNewO = [5, 6, 10, 20].reduce((acc, item) => {
    return (acc += item);
  }, 0);
  console.log(reduceNewO, "aqui esta la suma");

  // const arr = [
  //   { cat: "a", m: 2, f: 3 },
  //   { cat: "b", m: 3, h: 2 },
  //   { cat: "c", m: 1 },
  //   { cat: "a", m: 3 },
  // ];

  const summed = itemsCataegory.reduce((acc, cur) => {
    const item =
      acc.length > 0 && acc.find(({ Category }) => Category === cur.Category);
    if (item) {
      item.Monto += cur.Monto;
    } else acc.push({ Category: cur.Category, Monto: cur.Monto });
    return acc;
  }, []);
  console.log(itemsCataegory); // not modified
  console.log(summed);

  React.useEffect(() => {
    const fetchData = async () => {
      const itemsDB = await getInfo();
      setItemsCataegory(itemsDB);
    };
    fetchData();
  }, []);
  const itemsList = [
    {
      id: 0,
      image: <IOsIcon />,
      category: "Familia",
      price: "COP$4.99",
    },
    {
      id: 1,
      image: <IOsIcon />,
      category: "Comida",
      price: "COP$7.99",
    },
    {
      id: 2,
      image: <IOsIcon />,
      category: "Servicios",
      price: "COP$9.99",
    },
    {
      id: 3,
      image: <IOsIcon />,
      category: "Salud",
      price: "COP$78.99",
    },
    {
      id: 4,
      image: <IOsIcon />,
      category: "Restaurantes",
      price: "COP$77.99",
    },
    {
      id: 5,
      image: <IOsIcon />,
      category: "Restaurantes",
      price: "COP$907.99",
    },
    {
      id: 5,
      image: <IOsIcon />,
      category: "Compras",
      price: "COP$9072.99",
    },
  ];
  // const [priceItemsInitial, setPriceItemsInitial] = useState("0.00");

  return (
    <div className="list-container">
      {summed.map((item, i) => (
        <List key={i}>
          <List.Item>
            {" "}
            {item.Category} COP${item.Monto}
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
