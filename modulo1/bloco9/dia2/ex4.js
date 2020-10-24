/*
Quando a Promise for rejeitada, imprima, via console.log, a frase "É mais de oito mil! Essa promise deve estar quebrada!"
*/

const fetch = require('node-fetch');

const rnd = () => Math.ceil(Math.random() * 50);

const divide = number => [2, 3, 5, 10].map(array => number / array);

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
        .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'))
}

console.log(fetchPromise()); // Note que esse console log é impresso primeiro