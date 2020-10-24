/*
Agora, um passo para trás: vamos fazer, passo a passo, uma Promise. Primeiramente, instancie uma Promise. Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado. Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then e um catch à Promise com qualquer coisa dentro só para que o código funcione.
Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções!

*/
const fetch = require('node-fetch');

rnd = () => Math.ceil(Math.random() * 50);

const fetchPromise = () => {
    const promisse = new Promise((resolve, reject) => {
        const myArray = Array.from({ length: 10 }, () => rnd())

        const sum = myArray
            .map(number => number ** 2)
            .reduce((acc, curr) => acc + curr, 0);

            (sum < 8000) ? resolve(sum) : reject();
    })

    promisse
        .then((number) => console.log(number))
        .catch(() => console.log('Falhou'))
}

console.log(fetchPromise()); // Note que esse console log é impresso primeiro