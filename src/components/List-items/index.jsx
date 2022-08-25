import React from "react";
import { List } from "rsuite";
import "./index.css";
import IOsIcon from "@rsuite/icons/IOs";
import { ModalDashboard } from "../Modal/index";
import { getInfo, getInfoSortCategory } from "../../Helpers/crud";
import { ModalDescription } from "../Modal/modal-items";

export const ListItems = () => {
  const [itemsCataegory, setItemsCataegory] = React.useState([]);
  // console.log(getInfoSortCategory("Salud"));
  
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
      {itemsCataegory.map((item, i) => (
        <List key={i}>
          <List.Item>
            {" "}
            {item.Category} {item.Monto}
            <ModalDescription id={ item.Category} />
          </List.Item>
        </List>
      ))}
      <section>
        <ModalDashboard />
      </section>
    </div>
  );
};
