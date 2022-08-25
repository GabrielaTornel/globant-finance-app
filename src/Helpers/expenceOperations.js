import { getInfo } from "./crud"


const categories = ['Salud', 'Transportes', 'Comestible', 'Restaurantes',  'Regalos', 'Compras', 'Servicios', 'Entretenimiento'];

let expensesByCategory = {
    
    Salud: [],
    Transportes: [],
    Comestibles: [],
    Restaurantes: [],
    Regalos: [],
    Compras: [],
    Servicios: [],
    Entretenimiento: [],
}

export const getTotalSumFromCategories = async () => {
    const expenses = await getInfo();
    let totalSumByCategory = categories.map( category => {
        return {
            category,
            totalSum: 0
        }
    });
    // group by category with Monto
    expenses.forEach(({Category, Monto}) => {
        if (Category && Category !== null && Category !== '' && Category !== undefined) {
            try {
                expensesByCategory[Category].push(Monto)
            } catch (error) {
                console.log('error ->', Category);
            }
        }
    })
    Object.entries(expensesByCategory).forEach( ([category, values]) => {
        if (values && values.length > 0) {
            totalSumByCategory.find( (c) => c.category === category).totalSum = values.reduce((previousValue, currentValue) => previousValue + currentValue);
        }
    })
    
    return totalSumByCategory;
}