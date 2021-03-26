/*
1. Crie uma função que recebe três parâmetros retorna uma Promise .
  a. Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números".
  b. Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
  c. Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
  d. Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.
*/

function multiplySum(a, b, c) {
  const promisse = new Promise((resolve, reject) => {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      reject(new Error("Informe apenas números"));
    };
    const result = (a + b) * c;
    if (result < 50) reject(new Error("Valor muito baixo"));
    resolve(result);
  });

  return promisse;
};

const result = multiplySum(5, 2, "a")
  .then(value => console.log(value))
  .catch(err => console.log(err.message));
