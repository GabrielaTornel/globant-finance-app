import React from "react";
import { useState, useEffect } from "react";
import useGetAnExpense from "./getAnExpense";

const expenseOfMonthCategories = () => {
  const [expense2, setExpense2] = useState([]);
  const expenseAll = useGetAnExpense();
  
  console.log(expenseAll);
  const sumExpense = expenseAll.reduce((objetResult, objetCurrent) => {
    const categorieCurrent = objetCurrent.Category
    const expenseCurrent =objetCurrent.Monto
    objetResult[categorieCurrent]  += expenseCurrent
    return objetResult;
  }, {
    Restaurante: 0,
    Salud: 0,
    Regalos: 0,
    Entretenimiento: 0,
    Servicios: 0,
    Familia: 0,
    Comestibles: 0,
    Ocio: 0,
  });
  console.log("se completa la suma", sumExpense)
  return;
};

export default expenseOfMonthCategories;
