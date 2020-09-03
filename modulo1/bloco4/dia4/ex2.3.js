/*
Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3];.
Valor esperado no retorno da função: 6.
*/

let array = [2, 4, 6, 7, 10, 0, -3];
console.log(indexMinVal(array));

function indexMinVal(array) {
    let minValue = array[0]
    let indexMinValue = 0;
    for (let index in array) { 
        if (array[index] < minValue) {
            minValue = array[index];
            indexMinValue = index;
        }
    }
    return (indexMinValue);
}