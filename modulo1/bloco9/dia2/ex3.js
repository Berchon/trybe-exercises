/*
Quando a promise for resolvida com sucesso, retorne o resultado da divisão desse número por 2, 3, 5 e 10 em um array.
*/
const fetch = require('node-fetch');

const rnd = () => Math.ceil(Math.random() * 50);

const divide = number => [2, 3, 5, 10].map(array => number / array);
//const divide = sum => [2, 3, 5, 10].map(number => sum / number);


const fetchPromise = () => {
    const promisse = new Promise((resolve, reject) => {
        const myArray = Array.from({ length: 10 }, () => rnd())

        const sum = myArray
            .map(number => number ** 2)
            .reduce((acc, curr) => acc + curr, 0);

            (sum < 8000) ? resolve(sum) : reject();
    })

    promisse
        .then((sum) => {
          console.log(sum);
          return sum;
        })
        .then((sum) => {
          const array = divide(sum);
          console.log(array);
          return array;
        })
        .catch(() => console.log('Falhou'))
}

console.log(fetchPromise()); // Note que esse console log é impresso primeiro