import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { getTotalSumFromCategories } from "../../Helpers/expenceOperations";
import { Form } from "react-bootstrap";

ChartJS.register(ArcElement, Tooltip, Legend);


const graphStyles = {
  backgroundColor: [

    "rgba(242, 191, 39, 0.5)",
    "rgba(199, 22, 19, 0.5)",
    "rgba(164, 193, 54, 0.5)",
    "rgba(255, 189, 109, 0.5)",
    "rgba(165, 227, 212, 0.5)",
    "rgba(109, 186, 255, 0.5)",
    "rgba(174, 116, 81, 0.5)",
    "rgba(255, 202, 137, 0.5)",
  ],
  borderColor: [
    "rgba(242, 191, 39, 1)",
    "rgba(199, 22, 19, 1)",
    "rgba(164, 193, 54, 1)",
    "rgba(255, 189, 109, 1)",
    "rgba(165, 227, 212, 1)",
    "rgba(109, 186, 255, 1)",
    "rgba(174, 116, 81, 1)",
    "rgba(255, 202, 137, 1)",

 
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
      {isConfigReady && <Doughnut data={graphConfig} />}

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
    </>
  );
};



export default Graph;



