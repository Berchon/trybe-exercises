/*
Refatore a Promise para utilizar somente async e await.
*/

const fetch = require('node-fetch');

const rnd = () => Math.ceil(Math.random() * 50);

const divide = number => [2, 3, 5, 10].map(array => number / array);

const sumArray = array =>array.reduce((acc, curr) => acc + curr, 0);

const createArrayAndSum = () => {
    const myArray = Array.from({ length: 10 }, () => rnd())
    const sum = sumArray(myArray.map(number => number ** 2));
    if (sum > 8000) {
        throw new Error();
    }
    return (sum);
}

const fetchPromise = async () => {
    try {
        const sum = await createArrayAndSum();
        const array = await divide(sum);
        const sum2 = await sumArray(array);
        console.log(sum2);
    } catch (error) {
        console.log('É mais de oito mil! Essa promise deve estar quebrada!')
    }
}

fetchPromise(); // Note que esse console log é impresso primeiro