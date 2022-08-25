import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { getTotalSumFromCategories } from "../../Helpers/expenceOperations";
import { Form } from "react-bootstrap";

ChartJS.register(ArcElement, Tooltip, Legend);


const graphStyles = {
  backgroundColor: [
    "rgba(255, 99, 132, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(255, 206, 86, 0.2)",
    "rgba(75, 192, 192, 0.2)",
    "rgba(153, 102, 255, 0.2)",
    "rgba(255, 159, 64, 0.2)",
  ],
  borderColor: [
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
  ],
  borderWidth: 1,
};

export const Graph = () => {
  const [graphConfig, setGraphConfig] = useState({});
  const [isConfigReady, setIsConfigReady] = useState(false);
  const [selectValue, setSelectValue] = useState("NoFilter")

  const onSelectionChanged = (event) => {
    setSelectValue(event.target.value);
  };

  useEffect(() => {
    const setup = async () => {

      const totalExpensesData = await getTotalSumFromCategories(selectValue);
      const labels = [];
      const data = [];
   /*    debugger */
      console.log( "estoy en el efecto", totalExpensesData, selectValue)
      Object.entries(totalExpensesData).forEach(([index, expense]) => {
        const { totalSum, category } = expense;
        labels.push(category);
        data.push(totalSum);
      });

      setGraphConfig({
        labels,
        datasets: [
          {
            label: "Categorias",
            data,
            ...graphStyles,
          },
        ],
      });
      setIsConfigReady(true);
    };
    setup();
  }, [selectValue]);


  return (
    <>
     

      <Form.Select
        aria-label="Default select example"
        onChange={onSelectionChanged}
      >
        <option>Seleccione un mes</option>
        <option value={"Enero"}>Enero</option>
        <option defaultValue={"Febrero"}>Febrero</option>
        <option defaultValue={"Marzo"}>Marzo</option>
        <option defaultValue={"Abril"}>Abril</option>
        <option defaultValue={"Mayo"}>Mayo</option>
        <option defaultValue={"Junio"}>Junio</option>
        <option defaultValue={"Julio"}>Julio</option>
        <option defaultValue={"Agosto"}>Agosto</option>
        <option defaultValue={"Septiembre"}>Septiembre</option>
        <option defaultValue={"Octubre"}>Octubre</option>
        <option defaultValue={"Noviembre"}>Noviembre</option>
        <option defaultValue={"Diciembre"}>Diciembre</option>
      </Form.Select>
      {isConfigReady && <Doughnut data={graphConfig} />}
    </>
  );
};

export default Graph;
