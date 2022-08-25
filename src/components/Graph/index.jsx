import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { getTotalSumFromCategories } from "../../Helpers/expenceOperations";

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