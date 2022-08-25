import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { getTotalSumFromCategories } from "../../Helpers/expenceOperations";

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

  useEffect(() => {
    const setup = async () => {
      const totalExpensesData = await getTotalSumFromCategories();
      const labels = [];
      const data = [];
      Object.entries(totalExpensesData).forEach(([index, expense]) => {
        const { totalSum, category } = expense;
        labels.push(category);
        data.push(totalSum);
      });
      console.log(labels, data);
      setGraphConfig({
        labels,
        datasets: [
          {
            label: "Categorias",
            data,
            ...graphStyles
          },
        ],
      });
      setIsConfigReady(true);
    };
    setup();
  }, []);
  return <>{isConfigReady && <Doughnut data={graphConfig} />}</>;
};


export default Graph;


