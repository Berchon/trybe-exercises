/*
Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.
*/

const fetch = require('node-fetch');

const rnd = () => Math.ceil(Math.random() * 50);

const divide = number => [2, 3, 5, 10].map(array => number / array);

const sumArray = array =>array.reduce((acc, curr) => acc + curr, 0);

const fetchPromise = () => {
    const promisse = new Promise((resolve, reject) => {
        const myArray = Array.from({ length: 10 }, () => rnd())

        const sum = sumArray(myArray.map(number => number ** 2));
            // .reduce((acc, curr) => acc + curr, 0);

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
        .then(array => console.log(sumArray(array)))
        .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'))
}

console.log(fetchPromise()); // Note que esse console log é impresso primeiro