const randomNumber = () => Math.round(Math.random() * 99 + 1)// Lógica de gerar o número

const isDivisible = (number) => (randomNumber() % number) === 0

module.exports = {randomNumber, isDivisible };