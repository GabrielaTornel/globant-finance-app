/*const expencesData = [
    {
        fecha: '17',
        categoria: 'transporte',
        gasto: 234,
    },
    {
        fecha: '18',
        categoria: 'comida',
        gasto: 100,
    },
    {
        fecha: '18',
        categoria: 'comida',
        gasto: 100,
    },
    {
        fecha: '18',
        categoria: 'comida',
        gasto: 100,
    },
    {
        fecha: '18',
        categoria: 'comida',
        gasto: 100,
    }
];
*/
export const expencesOperations = (expences, type) => {
    let result = expences.map(({gasto}) => {
        console.log(gasto)
    })
}