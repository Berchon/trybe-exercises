/*
2. Escreva um código para consumir a função construída no exercício anterior.
  a. Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100) .
  b. Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
  c. Utilize then e catch para manipular a Promise retornada pela função:
    i. Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
    ii. Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.

*/

function rnd() {
  return Math.floor(Math.random() * 100);
};

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

multiplySum(rnd(), rnd(), rnd())
  .then(value => console.log(value))
  .catch(err => console.log(err.message));
