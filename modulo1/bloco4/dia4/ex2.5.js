/*
Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3];.
Valor esperado no retorno da função: 2.
*/

let array = [2, 3, 2, 5, 5, 5, 5, 5, 3, 2, 3, 3, 8, 8, 8, 8, 8];
console.log(highestOccurrence(array));

function highestOccurrence(array) {
    array.sort();
    let highValue = array[0];
    let maxCount = -1;
    let count = 1;
    for (let i = 1; i <= array.length; i += 1) {
        if ((i < array.length) && (array[i] == array[i - count])) {
            count += 1;
        }
        else if (count > maxCount) {
                maxCount = count;
                highValue = array[i - 1];
        }
    }
    return (highValue);
}