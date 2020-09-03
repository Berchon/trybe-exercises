/*
Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
Valor esperado no retorno da função: Fernanda.
*/

let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(biggerName(array));

function biggerName(array) {
    let bigName = array[0].length;
    let indexbigName = 0;
    for (let index in array) { 
        if (array[index].length > bigName) {
            bigName = array[index].length;
            indexbigName = index;
        }
    }
    return (array[indexbigName]);
}