/*
3. Reescreva o código do exercício anterior para que utilize async/await.
Lembre-se: a palavra chave await só pode ser utilizada dentro de funções async.
*/

function rnd() {
  return Math.floor(Math.random() * 100);
};

async function multiplySum(a, b, c) {
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

async function callMultiplySum() {
  try {
    const result = await multiplySum(rnd(), rnd(), rnd());
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
};

callMultiplySum();
