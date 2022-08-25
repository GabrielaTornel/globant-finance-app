import { getInfo } from "./crud";

const categories = [
  "Salud",
  "Familia",
  "Transportes",
  "Comestible",
  "Restaurantes",
  "Regalos",
  "Compras",
  "Servicios",
  "Entretenimiento",
];
const month = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

let expensesByCategory = {
  Salud: [],
  Familia: [],
  Transportes: [],
  Comestibles: [],
  Restaurantes: [],
  Regalos: [],
  Compras: [],
  Servicios: [],
  Entretenimiento: [],
};

export const getTotalSumFromCategories = async (month = "NoFilter") => {
    console.log(month, "mes")
  let expenses = [];
  if (month !== "NoFilter") {
    const data = await getInfo();
    expenses = data.filter((expense) => expense.Fecha === month);
  } else {
    expenses = await getInfo()
  }
 
  console.table(expenses);
  let totalSumByCategory = categories.map((category) => {
    return {
      category,
      totalSum: 0,
    };
  });

  // group by category with Monto
  expenses.forEach(({ Category, Monto }) => {
    if (
      Category &&
      Category !== null &&
      Category !== "" &&
      Category !== undefined
    ) {
      try {
        expensesByCategory[Category].push(Monto);
      } catch (error) {
        ("error ->", Category);
      }
    }
  });
  Object.entries(expensesByCategory).forEach(([category, values]) => {
    if (values && values.length > 0) {
      totalSumByCategory.find((c) => c.category === category).totalSum =
        values.reduce(
          (previousValue, currentValue) => previousValue + currentValue
        );
    }
  });

  return totalSumByCategory;
};
