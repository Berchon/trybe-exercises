/*
Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1];.
Valor esperado no retorno da função: 4.
*/

let array = [2, 3, 6, 7, 10, 1];

console.log(maxNumIndex(array));

function maxNumIndex(array) {
    let maxValue = array[0];
    let indexMaxValue = 0;
    for(index in array) {
        if (array[index] > maxValue) {
            indexMaxValue = index;
            maxValue = array[index];
        }
    }
    return (indexMaxValue);
}

function maxNum(array) {
    let maxValue = array[0];
    for(value of array) {
        if (value > maxValue) {
            maxValue = value;
        }
    }
    return (maxValue);
}