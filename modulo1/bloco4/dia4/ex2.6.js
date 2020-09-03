/*
Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
Valor de teste: N = 5.
Valor esperado no retorno da função: 1+2+3+4+5 = 15.
*/

console.log(sum(6));

function sum (N) {
    let summation = 0;
    for (let i = 0; i <= N; i += 1) {
        summation += i
    }
    return (summation);
}